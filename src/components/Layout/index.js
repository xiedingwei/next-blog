import React, { Component } from 'react'
import Nav from '../Nav'
import Foot from '../Foot'
import Router from 'next/router';
import Loading from "../Loading";
Router.events.on('routeChangeStart', (url) => {
  // if (url !== '/') {
  //   location.href = './next-ssr/403'
  // }
})

export default class Layout extends Component {
  state = {
    Loading: false
  }
  refCanvas = React.createRef()
  ctx = null
  WIDTH = null
  HEIGHT = null
  LENGTH = 3
  pendingTasks = []
  frameCount = 0
  init() {
    const lineTop = {
      start: { x: this.WIDTH * Math.random(), y: 0 },
      length: this.LENGTH,
      theta: Math.PI / 2
    }
    const lineBottom = {
      start: { x: this.WIDTH * Math.random(), y: this.HEIGHT },
      length: this.LENGTH,
      theta: -Math.PI / 2
    }
    const lineLeft = {
      start: { x: 0, y: this.HEIGHT * Math.random() },
      length: this.LENGTH,
      theta: 0
    }
    const lineRight = {
      start: { x: this.WIDTH, y: this.HEIGHT * Math.random() },
      length: this.LENGTH,
      theta: Math.PI
    }
    this.setup(lineTop)
    this.setup(lineBottom)
    this.setup(lineLeft)
    this.setup(lineRight)
  }
  setup(line, depth = 0) {
    const endLine = this.getEndPoint(line)
    this.drawLine(line)
    if ((depth < 2 || Math.random() < 0.5)) {
      let that = this
      this.pendingTasks.push(() => {
        that.setup({
          start: endLine,
          length: line.length,
          theta: line.theta - 0.3 * Math.random()
        }, depth + 1)
      })
    }
    // if ((depth < 2 || Math.random() < 0.5) && depth < 5) {
    //   let that = this
    //   this.pendingTasks.push(() => {
    //     that.setup({
    //       start: endLine,
    //       length: line.length,
    //       theta: line.theta - 0.3 * Math.random()
    //     }, depth + 1)
    //   })
    // }
    if ((depth < 2 || Math.random() < 0.5)) {
      let that = this
      this.pendingTasks.push(() => {
        that.setup({
          start: endLine,
          length: line.length,
          theta: line.theta + 0.3 * Math.random()
        }, depth + 1)
      })
    }
    if ((depth < 2 || Math.random() < 0.5) && depth < 3) {
      let that = this
      this.pendingTasks.push(() => {
        that.setup({
          start: endLine,
          length: line.length,
          theta: line.theta + 0.3 * Math.random()
        }, depth + 1)
      })
    }
  }
  frame() {
    const tasks = [...this.pendingTasks]
    this.pendingTasks.length = 0
    tasks.forEach(fn => fn())
  }
  startFrame() {
    requestAnimationFrame(() => {
      this.frameCount += 1
      if (this.frameCount % 15 === 0)
        this.frame()
      this.startFrame()
    })
  }
  lineTo(Point1, Point2) {
    const ctx = this.ctx
    ctx.beginPath()
    ctx.moveTo(Point1.x, Point1.y)
    ctx.lineTo(Point2.x, Point2.y)
    ctx.stroke()
  }
  getEndPoint(l) {
    const { start, length, theta } = l
    return {
      x: start.x + length * Math.cos(theta),
      y: start.y + length * Math.sin(theta),
    }
  }
  drawLine(l) {
    this.lineTo(l.start, this.getEndPoint(l))
  }
  componentDidMount() {
    // console.log(this.refCanvas.current)
    // this.WIDTH = document.documentElement.clientWidth
    // this.HEIGHT = document.documentElement.clientHeight
    this.WIDTH = 1920
    this.HEIGHT = 969
    this.ctx = this.refCanvas.current.getContext('2d')
    this.refCanvas.current.setAttribute("height", this.HEIGHT)
    this.refCanvas.current.setAttribute("width", this.WIDTH)
    this.ctx.strokeStyle = '#888888'
    this.ctx.lineWidth = 0.2
    this.init()
    this.startFrame()
  }
  render() {
    return (
      <div className='relative'>
        <style jsx>{`
        .canvas {
          position:fixed;
          z-index: -1;
          min-width:100%;
          height:969px;
        }
      `}</style>
        <canvas className='canvas' ref={this.refCanvas}></canvas>
        <Nav href={this.props.href} theme={this.props.theme} setTheme={this.props.setTheme} />
        <div className='max-w-screen-xl mx-auto  px-12 responsive-layout'>
          <div className='clear-both px-6 pt-8'>
            {this.props.children}
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto  px-12'>
          <Foot />
        </div>
      </div>
    )
  }
}

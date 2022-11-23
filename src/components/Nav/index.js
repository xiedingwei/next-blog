import React, { Component } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default class Nav extends Component {
  state = {
    route: [
      {
        href: '/',
        title: 'Home'
      },
      {
        href: '/blog',
        title: 'Blog'
      },
      {
        href: '/projects',
        title: 'Projects'
      },
    ],
    top: true
  }
  componentDidMount() {
    const that = this
    // console.log(this.refCanvas.current)
    window.onscroll = that.onScroll
  }
  onScroll = () => {
    const that = this
    // console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop != 0) {
      if (that.state.top) {
        that.setState({ top: false })
      }
    } else {
      that.setState({ top: true })
    }
  }
  componentWillUnmount() {
    // const that = this
    // window.removeEventListener('scroll', that.onScroll, true)
  }
  render() {
    return (
      <div
        style={this.props.theme == 'dark' ? { backgroundColor: '#215c8c', borderColor: '#215c8c' } : {}}
        className={this.state.top ? 'sticky z-10 top-0 left-0 w-full h-full' : 'sticky bg-white z-10 top-0 left-0 w-full h-full  border-b border-solid border-gray-300'}>
        <ul className='py-5 max-w-screen-xl mx-auto  px-12'>
          {this.state.route.map((item, index) => {
            return <li
              role="presentation"
              key={item.href}
              className='float-left mr-6 text-md'
            >
              <Link href={item.href}
              >
                <span className={this.props.href === item.href ? 'text-blue-500 cursor-pointer' : 'hover:text-blue-500 cursor-pointer'}>
                  {item.title}
                </span>
              </Link>
            </li>
          })}
          {
            this.props.theme == 'dark' ? <li className='float-right ml-6'
              onClick={() => {
                this.props.setTheme('light')
                document.documentElement.setAttribute('style', 'color-scheme: light;')
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </li> : <li className='float-right ml-6'
              onClick={() => {
                this.props.setTheme('dark')
                document.documentElement.setAttribute('style', 'color-scheme: dark;')
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </li>
          }
          <li className='float-right ml-6'>
            <a href='https://gitee.com/xdw_mayun'>
              <svg t="1668923330142" className="w-5 h-6 cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11071"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill={this.props.theme == 'dark' ? "#ffffff" : "#2c2c2c"} p-id="11072"></path></svg>
            </a>
          </li>
          <li className='float-right ml-6'>
            <a href='https://space.bilibili.com/434723925?spm_id_from=333.999.0.0'>
              <svg t="1668922038312" className="w-6 h-6 cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3436" width="24" height="24"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="3437" fill={this.props.theme == 'dark' ? "#ffffff" : "#2c2c2c"}></path></svg>
            </a>
          </li>
          <p className='clear-both'></p>
        </ul>
      </div>
    )
  }
}

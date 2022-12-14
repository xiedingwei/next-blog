// import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
// import styles from "../styles/scss.module.scss";
// import "../style/sass.sass"

export default class Home extends React.Component {
  state = {
    loadingFun: null
  }
  static async getInitialProps({ req, pathname, query, asPath }) {
    return { pathname }
  }
  componentDidMount() {
    // let that = this
    // const imgDom = new Image();
    // imgDom.src = 'https://img.youpin.mi-img.com/ferriswheel/12437a63_e1cb_4148_be8e_403251bf8d88.png?w=1080&h=1440'
    // imgDom.onload = () => {
    //   console.log('加载完成')
    //   that.setState({ loadingFun: imgDom.src })
    // }
  }

  render() {
    return (
      <Layout href={this.props.pathname} theme={this.props.theme} setTheme={this.props.setTheme}>
        {/* {this.state.loadingFun ? <img src={this.state.loadingFun}></img> : '加载中'} */}
        <div className="markdown home-img">
          <h2 className=" showDiv1" id="Hi，朋友，欢迎你来到NanKe的博客！"> Hi，朋友，欢迎你来到NanKe的博客！</h2>
          <p>
            <img src="http://www.nankezs.cn/files/380a3bef63cf4fb299e32d036b453735b082af97055bc9f.jpg" alt="" />
          </p>
          <h6 className=" showDiv1">宝剑锋从磨砺出，梅花香自苦寒来！</h6>
          <p className=" showDiv1">&nbsp; &nbsp; &nbsp; &nbsp; 👦博主是一位还在 🏃 不断学习的在校大学生，都说编程是一条从 👶 入门到 👴 入坟的道路，学编程的人它不可能一劳永逸，继承只是属于学编程的其中一个特点，还有一大特点是创新，我们的在继承的前提下，还需要与时俱进，这些创新在学校往往给不了你，如果你也是一名在校大学生的话，想必这一点就能深有体会，所以，如果你也是选择了编程这一条路的话，最好趁早去了解学习。</p>
          <p className=" showDiv2">&nbsp; &nbsp; &nbsp; &nbsp; 🕛从大二开始吧，我就开始了我的前端之路，因为我是计算机专业，最早接触的是C语言，相信每个人的编程🧑‍💻开始都显示屏里的Hello，World吧。那个时候觉得编程好像也没有什么难的，无非就是在显示屏打印打印，后来学了0️⃣数据结构1️⃣后，我发现编程又好难，一大堆数据的领域概念名词，以及羞涩难懂的算法，在那个时候我还没有确定我会走编程的路,只是感觉编程的路挺难的。</p>
          <p className=" showDiv2">&nbsp; &nbsp; &nbsp; &nbsp; 直到我学到了前端📄HTML，那个时候就觉得很有成就，学了CSS🎨后，就觉得很好玩，因为我基本可以实现我想要的样式，但却没有交互效果，于是我又去学了原生JS，在b站pink老师那里我又了解到JQ，发现原生JS很多可以用简单的符号代替，用了JQ后发现写js变得轻松，学了JQ后，学Bootstrap样式，结合这些技术，其实就可以开始写项目了，但是当时最火的是前端的Vue框架，于是在我认为可以过渡的时候我学了Vue，用了Vue以后，我发现其实Dom操作都是多余的，根据MVVM框架思想，将数据和标签绑定在一起，从而使开发者重点关注数据和页面，在完成一个Vue项目后，后来因朋友的推荐，我又去学了React⚛️框架，可能是因为jsx语法吧，让我喜欢上了react，学react的过程中，学习了一系列react以及前端的生态圈，webpack、less、redux、dav、antd、微信云生小程序、taro、umijs、ts、nextjs、tailwindcss、MDX。由于项目不可能只有前端，于是我接触了后端nodejs的express框架，后来又因老师引导，我又学了java的springboot框架，顺便把mysql、mongdb、redis也学了一下，后来又觉得项目不能上线，我就在腾讯云租了服务器，租了域名，学了部署上线的知识，学了Linux、Nginx、宝塔面板。后来我又发现租一台服务器并不是上线项目的最好选择，只有一次优惠机会，对于学生来说却是门槛很高，于是我又去学习了云开发，将项目云托管，直至今。🕦</p>
          <p className=" showDiv3">&nbsp; &nbsp; &nbsp; &nbsp; 目前来说有一些项目经验✴️了，上线过公司官网，后台、博客、小程序、H5等，所以说，我的学习历程还是挺丰富的，到现在的话，我决定好好打造一下个人博客，将我个人的一些经验分享于此，这些内容不局限于前端哦，后端、云开发、小程序，总之我学过的内容我都会分享，也可能是一些生活vlog，哈哈哈！期待博客的更新吧。</p>
          <p className=" showDiv3">&nbsp; &nbsp; &nbsp; &nbsp; 这个博客项目的技术栈是nextjs+tailwindcss+MDX，参考了很多b站up主的样式风格，这些都是我目前所接触到的最新的技术，所以肯定会存在很多问题的，欢迎大家提出建议，如果后期项目感觉写的还可以的话，我将会把这个项目开源，最后，很高兴和你的遇见！😁</p>
          <h6 className=" showDiv3">人生若只如初见，何事秋风悲风扇！</h6>
        </div>
      </Layout>
    );
  }
}

// import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
// import styles from "../styles/scss.module.scss";
// import "../style/sass.sass"
import Hello from './hello.md'

export default class Home extends React.Component {
  state = {
    loadingFun: []
  }
  static async getInitialProps({ req, pathname, query, asPath }) {
    return { pathname }
  }
  componentDidMount() {
    // let that = this
    // setTimeout(() => {
    //   that.setState({ loadingFun: [...that.state.loadingFun, <Hello1 id='Hello1'></Hello1>] })
    // }, 0)
    // setTimeout(() => {
    //   that.setState({ loadingFun: [...that.state.loadingFun, <Hello2 id='Hello2'></Hello2>] })
    // }, 500)
    // setTimeout(() => {
    //   that.setState({ loadingFun: [...that.state.loadingFun, <Hello3 id='Hello3'></Hello3>] })
    // }, 1000)
  }

  render() {
    return (
      <Layout href={this.props.pathname} theme={this.props.theme} setTheme={this.props.setTheme}>
        <div className="markdown home-img">
          <Hello layout='true'></Hello>
        </div>
      </Layout>
    );
  }
}

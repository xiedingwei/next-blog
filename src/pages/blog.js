import React, { Component } from 'react'
import Layout from "../components/Layout";
import BlogItem from '../components/BlogItem';
import axios from 'axios';

export default class Blog extends Component {
  static async getInitialProps({ req, pathname, query, asPath }) {
    const { data } = await axios.get("http://localhost:3000/api/list")
    return { pathname, data: data }
  }
  render() {
    return (
      <Layout href={this.props.pathname} theme={this.props.theme} setTheme={this.props.setTheme}>
        <div className='text-2xl text-gray-400 mb-2'>2022</div>
        {
          this.props.data.map((item) => {
            return <BlogItem data={item} key={item.title} />
          })
        }
      </Layout>
    )
  }
}

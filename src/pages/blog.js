import React, { Component } from 'react'
import Layout from "../components/Layout";
import BlogItem from '../components/BlogItem';
import axios from 'axios';
import Pagination from "react-js-pagination";
import Router from 'next/router'

export default class Blog extends Component {
  state = {
    activePage: this.props.pageData.activePage
  }
  static async getInitialProps({ req, pathname, query, asPath }) {
    const state = {
      activePage: 1,
      itemsCountPerPage: 8,
    }
    if (query.activePage) { state.activePage = query.activePage }
    if (query.itemsCountPerPage) { state.itemsCountPerPage = query.itemsCountPerPage }
    // console.log(pathname, query)
    const { data } = await axios.get("http://localhost:3000/api/list", {
      params: {
        activePage: state.activePage,
        itemsCountPerPage: state.itemsCountPerPage
      }
    })
    return { pathname, pageData: { activePage: state.activePage, itemsCountPerPage: state.itemsCountPerPage, ...data } }
  }
  render() {
    return (
      <Layout href={this.props.pathname} theme={this.props.theme} setTheme={this.props.setTheme}>
        <div className='text-2xl text-gray-400 mb-2'>2022</div>
        {
          this.props.pageData.data.map((item) => {
            return <BlogItem data={item} key={item.title} />
          })
        }
        <div>
          <Pagination
            activePage={parseInt(this.state.activePage)}
            itemsCountPerPage={this.props.pageData.itemsCountPerPage}
            totalItemsCount={this.props.pageData.counts}
            pageRangeDisplayed={5}
            onChange={(index) => {
              this.setState({ activePage: index })
              Router.push('/blog?activePage=' + index)
            }}
          />
          <div className='clear-right'></div>
        </div>
      </Layout>
    )
  }
}

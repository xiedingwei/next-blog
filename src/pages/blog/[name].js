import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Layout from "../../components/Layout";
import slug from 'remark-slug'
import externalLinks from 'remark-external-links'
import remarkGfm from 'remark-gfm'
import math from 'remark-math'
import katex from 'rehype-katex'
import rehypePrism from '@mapbox/rehype-prism'
import TableContents from '../../components/TableContents';
import React from 'react';
import GithubSlugger from 'github-slugger'

const slugger = new GithubSlugger()

// import { useInView } from 'react-intersection-observer';
export default function BlogPage(props) {
  let array = []
  slugger.reset()
  function extract(obj) {
    if (obj.children) {
      obj.children.map((item) => {
        extract(item)
      })
    } else {
      array.push(slugger.slug(obj.value))
    }
  }
  extract(props.tocElement)
  const [id, setId] = React.useState(array[0])
  React.useEffect(() => {
    let isMounted = true;
    let arrayElement
    let onScrollTrue
    function onScroll(arrayElement) {
      return () => {
        let selectId
        arrayElement.forEach((item) => {
          if (item.offsetTop <= document.documentElement.scrollTop) {
            // console.log(item.offsetTop, document.documentElement.scrollTop)
            // console.log(item)
            selectId = item.id
            // console.log(selectId, item.id)
          }
        })
        // if (selectId !== id) {
        if (isMounted) setId(selectId)
        // console.log(selectId)
        // console.log(1111)
        // }
      }
    }
    setTimeout(() => {
      arrayElement = array.map((item) => {
        // console.log(document.getElementById(item).offsetTop + 54)
        return { offsetTop: document.getElementById(item).offsetTop + 56, id: item }
      })
      onScrollTrue = onScroll(arrayElement)
      window.addEventListener('scroll', onScrollTrue)
    }, 1000);
    return () => { isMounted = false; window.removeEventListener('scroll', onScrollTrue) }
  }, [])
  // console.log(array)
  return (
    <div className="wrapper">
      <Layout href='/blog' full={true} theme={props.theme} setTheme={props.setTheme}>
        {/* <div>{props.source.frontmatter.title}</div> */}
        <div className='grid grid-cols-4 gap-6 relative'>
          <div className='markdown xl:col-span-3 col-span-5 p-5 rounded-lg dark:bg-[#222222] box-shadow bg-white'>
            <MDXRemote {...props.source} />
          </div>
          <div className='xl:block hidden'>
            <div className='sticky top-24 p-5 rounded-lg dark:bg-[#222222] box-shadow bg-white'>
              <h3 className="text-xl text-gray-900 dark:text-gray-100 dark:opacity-90 font-bold pb-4">目录</h3>
              <TableContents idTable={id} {...props.tocElement}></TableContents>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps(context) {
  // MDX text - can be from a local file, database, anywhere
  const fs = require('fs')
  const path = require('path')
  const toc = require("@jsdevtools/rehype-toc");
  let tocElement

  const { name } = context.params
  let source = String(fs.readFileSync(path.join(process.cwd(), 'src', 'content', name + '.md')))
  const mdxSource = await serialize(source, {
    scope: {},
    mdxOptions: {
      remarkPlugins: [slug, remarkGfm, math, externalLinks],
      rehypePlugins: [katex, rehypePrism, [toc, {
        headings: ['h1', 'h2', 'h3', 'h4'],
        customizeTOC: (tocAll) => {
          tocElement = tocAll
          return false
        }
      }]],
      format: 'mdx'
    },
    parseFrontmatter: true
  })
  return { props: { source: mdxSource, tocElement: tocElement } }
}
export async function getStaticPaths() {
  const fs = require('fs')
  const path = require('path')
  let data = JSON.parse(String(fs.readFileSync(path.join(process.cwd(), 'src', 'pages', 'api', '/list.json'))))
  let paths = data.map((item) => {
    return { params: { name: String(item.fileName) } }
  })
  return {
    paths: paths,
    fallback: 'blocking'
  }
}
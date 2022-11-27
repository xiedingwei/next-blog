// import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../styles/markdown.css'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from 'nprogress';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import '../styles/nProgress.css'
import '../styles/prism.css'
import '../styles/pagination.css'
import copy from 'copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image'
// import { useToggle } from 'react-use'
{/* <Image
  className="next-image"
  lazyBoundary="0px"
  loading="lazy"
  ...
/> */}

function MyApp({ Component, pageProps }) {
  let [theme, setTheme] = useState('light');
  const router = useRouter();
  // 定义 mdx 中语法的映射组件
  const components = {
    // img: props => <Image {...props}></Image>,
    h1: props => {
      return <h1>
        <div id={props.id} className='relative -top-24 invisible' ></div>
        <a href={'#' + props.id}>{props.children}</a>
      </h1>
    },
    h2: props => {
      return <h2>
        <div id={props.id} className='relative -top-24 invisible' ></div>
        <a href={'#' + props.id}>{props.children}</a>
      </h2>
    },
    h3: props => {
      return <h3>
        <div id={props.id} className='relative -top-24 invisible' ></div>
        <a href={'#' + props.id}>{props.children}</a>
      </h3>
    },
    h4: props => {
      return <h4>
        <div id={props.id} className='relative -top-24 invisible' ></div>
        <a href={'#' + props.id}>{props.children}</a>
      </h4>
    },
    pre: props => <div className='relative codeBlock'
      onClick={(e) => {
        copy(e.target.innerText)
        toast.success('复制成功')
      }}
    >
      <pre {...props} onClick={(e) => { e.stopPropagation() }} />
    </div>,
    wrapper: ({ children, ...props }) => {
      // console.log(children.map(child => child.props.mdxType))
      // console.log(React.Children.toArray(children), 999)
      // console.log(children)
      // console.log(props, 111)
      // if (props.layout) {
      //   return <main {...props} />
      // }
      return <>{children}</>
    }
  }
  // console.log(list)
  useEffect(() => {
    router.events.on("routeChangeStart", nProgress.start);
    router.events.on("routeChangeComplete", nProgress.done);
    router.events.on("routeChangeError", nProgress.done);
  }, []);

  return <MDXProvider components={components}>
    <Component {...pageProps} theme={theme} setTheme={setTheme} />
    <Toaster />
  </MDXProvider>
}

export default MyApp

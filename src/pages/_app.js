// import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../styles/markdown.css'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from 'nprogress';
import { MDXProvider } from '@mdx-js/react';
// import CodeBlock from '../components/CodeBlock';
// import { Wrapper, Paragraph, headings, UL, OL, Code } from '~controls';
import '../styles/nProgress.css'
import '../styles/prism.css'
import copy from 'copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  let [theme, setTheme] = useState('light');
  const router = useRouter();
  // 定义 mdx 中语法的映射组件
  const components = {
    pre: props => <div className='relative codeBlock'
      onClick={(e) => {
        copy(e.target.innerText)
        toast.success('复制成功')
      }}
    >
      <pre {...props} onClick={(e) => { e.stopPropagation() }} />
    </div>,
    wrapper: (props) => {
      if (props.layout) {
        return <main {...props} />
      }
      return <Layout href='/blog' theme={theme} setTheme={setTheme}>
        <div className='markdown'>
          <main {...props} />
        </div>
      </Layout>
    }
  }
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

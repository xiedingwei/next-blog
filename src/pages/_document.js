// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
// import { read } from 'to-vfile'
// import { remark } from 'remark'
// import remarkToc from 'remark-toc'
// main()

// async function main() {
//   const file = await remark()
//     .use(remarkToc)
//     .process(await read('D:/next-blog/src/pages/blog/1.md'))

//   console.log(String(file))
// }

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      // <html style={{ colorScheme: 'dark' }}>
      <html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
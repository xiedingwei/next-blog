import rehypePrism from '@mapbox/rehype-prism'
import remarkGfm from "remark-gfm";
import math from 'remark-math'
import katex from 'rehype-katex'
import createMDX from "@next/mdx";
import withImages from 'next-images'
const nextConfig = {
  webpack5: true,
  reactStrictMode: true,
  basePath: '/next-ssr',
  webpack: (config, { buildId, dev, isServer, ...option }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    // config.module.rules.push({
    //   test: /\.mdx?$/,
    //   use: [
    //     {
    //       loader: '@mdx-js/loader',
    //       options: {
    //         providerImportSource: '@mdx-js/react',
    //         format: 'mdx'
    //       }
    //     }]
    // })
    return config
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
}
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [math, remarkGfm],
    rehypePlugins: [rehypePrism, katex],
  },
})
export default withMDX(withImages(nextConfig))

// const remarkGfm = require('remark-gfm')
// const math = require('remark-math');
// const katex = require('rehype-katex');
// path.join(__dirname, './plugins/md-layout-loader'),
// const withMDX = require('@next/mdx')()
// const withImages = require('next-images')
// import path from 'path'
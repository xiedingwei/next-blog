const rehypePrism = require('@mapbox/rehype-prism')
// const remarkGfm = require('remark-gfm')
const math = require('remark-math');
const katex = require('rehype-katex');

// path.join(__dirname, './plugins/md-layout-loader'),
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [math],
    rehypePlugins: [rehypePrism, katex],
  },
})
const withImages = require('next-images')
const path = require('path')
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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
}
module.exports = withMDX(withImages(nextConfig))
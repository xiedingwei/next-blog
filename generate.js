const fs = require('fs')
const path = require('path')

module.exports = () => {
  let fileList = fs.readdirSync(path.join(__dirname, 'src', 'pages', 'blog'))
  let files = fileList.map((item) => {
    return String(fs.readFileSync(path.join(__dirname, 'src', 'pages', 'blog', item)))
  })
  let fileContents = []
  files.forEach((item) => {
    const list = item.split('---', 2)
    fileContents.push(JSON.parse('{' + list[1] + '}'))
  })
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'api', 'list.json'), JSON.stringify(fileContents), 'utf8')
  // return path.join(__dirname, 'src', 'pages', 'api', 'list.json')
}

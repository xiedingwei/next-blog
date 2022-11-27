const fs = require('fs')
const path = require('path')
const matter = require('gray-matter');

module.exports = () => {
  let fileList = fs.readdirSync(path.join(__dirname, 'src', 'content'))
  let files = fileList.map((item) => {
    return String(fs.readFileSync(path.join(__dirname, 'src', 'content', item)))
  })
  let fileContents = []
  files.forEach((item) => {
    const obj = matter(item)
    fileContents.push(obj.data)
  })
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'api', 'list.json'), JSON.stringify(fileContents), 'utf8')
  // return path.join(__dirname, 'src', 'pages', 'api', 'list.json')
}

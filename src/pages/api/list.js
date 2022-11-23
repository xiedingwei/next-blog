const fs = require('fs')
const path = require('path')
export default async (req, res) => {
  res.statusCode = 200
  let data = JSON.parse(String(fs.readFileSync(path.join(process.cwd(), '/src', '/pages', '/api', '/list.json'))))
  res.json(data.reverse())
}
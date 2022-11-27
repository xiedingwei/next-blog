const fs = require('fs')
const path = require('path')
export default async (req, res) => {
  res.statusCode = 200
  // console.log(req.query, 111)
  let data = JSON.parse(String(fs.readFileSync(path.join(process.cwd(), 'src', 'pages', 'api', '/list.json')))).reverse()
  let pageData = pagination(req.query.activePage, req.query.itemsCountPerPage, data)
  res.json(pageData)
}
// json分页
function pagination(page, number, Json_data) {//获取分页数据 page为页number为要获取的数量 Json_data为数据总数
  let counts = Json_data.length//获取数据总数
  let start = (page - 1) * number//获取开始值
  let end = (page) * number//获取结束值、
  let data = []
  if (start > counts) {//如果开始值大于总值就会返回空数组
    return false
  }
  if (end > counts) {//如果结束值比总值大就把结束值设为总值
    end = counts
  }
  for (let i = start; i < end; i++) {//存入数据
    data.push(Json_data[i])
  }
  return { counts, data }//返回数据
}

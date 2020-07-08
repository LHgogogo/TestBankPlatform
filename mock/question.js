

const fakeQuerys = (req, res, url) => {
  const data = [{
    value: '1',
    label: '222',
    children: []
  }]

  res.json({
    code: 200,
    data
  })
}
const fakeShares = (req, res, url) => {
  const start = req.pageNum * req.pageSize
  const list = new Array(100)
  list.filter((x,index) => {
    return index > start && index < start + req.pageSize
  })
  for (let i = 0; i < list.length; i++) {
    const temp = {
      id: i,
      name: `题目${i}`,
      type: `${i % 2}`,
      questionNum: 10 * (i % 2) + 3,
      degree: '5',
      subject: '数学/五年级',
      print: '10',
      status: `${i % 2}`
    }
    list[i] = temp
  }
  res.json({
    code: 200,
    total: list.length,
    data: list,
    aaa:  list.filter((x,index) => {
      return index > start && index < start + req.pageSize
    })
  })
}

export default {
  'GET /api/question/querys': fakeQuerys,
  'GET /api/question/share': fakeShares,
}
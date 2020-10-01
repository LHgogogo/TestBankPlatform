import React, { useState, useEffect } from 'react'
import { Pagination, message } from 'antd'
import { getMyQuestionList } from '@/services/myQuestion/create'
import { QuestionCell, QuestionCellContext } from '../QuestionCell'
import styles from './index.less'

const useList = (query, pageNum, pageSize, modifyRequest) => {
  const [list, setList] = useState([])
  const [totalN, setTotalN] = useState(0)
  useEffect(() => {
    const fn = modifyRequest || getMyQuestionList
    fn({
      ...query,
      pageSize,
      pageNum
    })
      .then(res => {
        if (res.code < 300) {
          const { data: { records = [], total = 0 } } = res
          setList(records)
          setTotalN(total)
        }
        return Promise.reject(res.message)
      })
      .then(msg => message.error(msg))
  }, [pageSize, pageNum, query])
  return [list, totalN]
}
const QuestionList = (props) => {
  const { query = {}, detailUrl, modifyRequest, isAudit, isWrong } = props
  const [pageNum, setPageNum] = useState(1)
  const [pageSize, setPageSize] = useState(10)


  const onPageChange = (num, size) => {
    setPageNum(num)
    setPageSize(size)
  }

  const [list, total] = useList(query, pageNum, pageSize, modifyRequest)
  return <div className={styles.questionTable}>
    <QuestionCellContext.Provider value={detailUrl}>
      <div className={styles.list}>
        {
          list.map(record => {
            return <QuestionCell key={record.id} data={record} isAudit={isAudit} isWrong={isWrong} />
          })
        }
      </div>
    </QuestionCellContext.Provider>
    {total < pageSize
      ? null
      : <Pagination
        size="small"
        total={total}
        showSizeChanger
        showQuickJumper
        className={styles.pagination}
        onChange={onPageChange}
        onShowSizeChange={onPageChange} />}
  </div>
}
export default QuestionList
import React from 'react'
import { Pagination } from 'antd'
import QuestionCell from '../QuestionCell'
import styles from './index.less'

const QuestionList = (props) => {
  const { total, pageNum, pageSize, dataSource } = props
  return <div className={styles.questionTable}>
    <div className={styles.list}>
      <QuestionCell />
      <QuestionCell />
      <QuestionCell />
      <QuestionCell />
      <QuestionCell />
      <QuestionCell />
    </div>
    <Pagination size="small" total={50} showSizeChanger showQuickJumper className={styles.pagination} />
  </div>
}
export default QuestionList
import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Link } from 'react-router-dom'
import styles from './index.less'

const MyQuestion = (props) => {

  return <PageHeaderWrapper>
    <div className={styles.content}>
      <Link type="link" to="/questionBank/personalQuestion/create">新建</Link>
    </div>

  </PageHeaderWrapper>
}
export default MyQuestion
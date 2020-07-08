import React, { useState } from 'react'
import { StarOutlined, BookOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd'
import { Link } from 'react-router-dom'
import styles from './index.less'

const colors = {
  warn: '#F1AE35',
  fail: '#6C6C6C',
  success: '#3CC42F'
}
const statusRender = (status, reason) => {
  // eslint-disable-next-line default-case
  const style = {

  }
  switch (status) {
    case '0':
      style.color = colors.success
      return <span style={style}>已发布</span>
    case '1':
      style.color = colors.fail
      style.display = 'inline-block'
      style['white-space'] = 'nowrap'
      return <span style={style}>
        <div >下架</div>
        {reason ? <div>(错题)</div> : null}
      </span>
    case '2':
      style.color = colors.warn
      return <span style={style}>发布审核中</span>
    default:
      return null
  }
}
const QuestionCell = (props) => {
  const { data = {} } = props
  const { status = '1', reason = 'lalalala', starNum, useNum } = data
  return <div className={styles.cell}>
    <div className={styles.content}>
      <div className={styles.title}>
        <span>{'数学>人教版>三年级>第一单元：平面图形>认识图形'}</span>

        <span >解答题 * 难度 8</span>
      </div>
      <div className={styles.question}>
        某班有36名同学参加数学、物理、化学课外探究小组，每名同学至多参加两个小组．已知参加数学、物理、化学小组的人数分别为26,15,13，同时参加数学和物理小组的有6人，同时参加物理和化学小组的有4人，则同时参加数学和化学小组的有多少人？
      </div>
      <div className={styles.picture}>
        <img />
        <img />
        <img />
      </div>
      <div className={styles.select}>
        <span>A. 1</span>
        <span>B. 1</span>
        <span>C. 1</span>
        <span>D. 1</span>
        <span>E. 1</span>
      </div>
      <div className={styles.labels}>
        <span>标签1</span>
        <span>标签1</span>
        <span>标签1</span>
      </div>
    </div>
    <div className={styles.right}>
      <div>{statusRender(status, reason)}</div>
      <div className={styles.operate}>
        <div>
          <span><StarOutlined />{starNum || 0}</span>
          <span><BookOutlined />{useNum || 0}</span>
        </div>
        <div>
          <Link type="link" to="/questionBank/detail/1">详情</Link>
          <Divider type="vertical" />
          <a type="link">更多</a>
        </div>
      </div>
    </div>
  </div>
}
export default QuestionCell
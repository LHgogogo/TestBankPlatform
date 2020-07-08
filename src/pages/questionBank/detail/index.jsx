import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Col, Row } from 'antd';
import styles from './index.less'

const QuestionDetail = () => {
  return <PageHeaderWrapper >
    <div className={styles.detail}>
      <div className={styles.header}>
        <Row className={styles.row}>
          <Col span={12}>
            <span className={styles.title}>科目课程：</span>
          <span>数学>人教版>三年级>第一单元：平面图形>认识图形</span>
          </Col>
          <Col span={12}>
            <span className={styles.title}>题型：</span>
            <span>解答题</span>
            </Col>
        </Row>
        <Row className={styles.row}>
          <Col span={12}>
            <span className={styles.title}>题目标签：</span>
            <span>标签1、标签2</span>
            </Col>
          <Col span={12}>
            <span className={styles.title}>难度：</span>
            <span>⭐⭐⭐⭐⭐</span>
            </Col>
        </Row>
        <Row className={styles.row}>
          <Col span={12}>
            <span className={styles.title}>状态：</span>
          <span>已发布</span>
          </Col>
          <Col span={12}>
            <span className={styles.title}>发布时间：</span>
            <span>2020.03.14 12:23:45</span>
            </Col>
        </Row>
      </div>
      <div className={styles.content}>Question Content</div>
      <div className={styles.tool}>Float Tool Bar</div>
    </div>
  </PageHeaderWrapper>
}
export default QuestionDetail
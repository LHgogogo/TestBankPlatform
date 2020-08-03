import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Col, Row, Button } from 'antd';
import { StarOutlined, BookOutlined } from '@ant-design/icons';
import styles from './index.less'

const QuestionDeailHeader = (props) => {
  const { className } = props
  return <div className={className}>
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
}

const QuestionDeatailContent = (props) => {
  const { className } = props
  return <div className={className}>
    <div className={styles.line}>
      <div>tags</div>
      <div>
        <span><StarOutlined />{11 || 0}</span>
        <span><BookOutlined />{11 || 0}</span>
      </div>
    </div>
    <div>
      <div className={styles.question}>
        <div className={styles.desc}>
          某班有36名同学参加数学、物理、化学课外探究小组，每名同学至多参加两个小组．已知参加数学、物理、化学小组的人数分别为26,15,13，同时参加数学和物理小组的有6人，同时参加物理和化学小组的有4人，则同时参加数学和化学小组的有多少人？
        </div>
        <div className={styles.picture}>
          <img src="https://baidu.com" />
          <img src="https://baidu.com" />
          <img src="https://baidu.com" />
        </div>
        <div className={styles.select}>
          <span>A. 1</span>
          <span>B. 1</span>
          <span>C. 1</span>
          <span>D. 1</span>
          <span>E. 1</span>
        </div>
      </div>
      <div className={styles.answer}>
        <div className={styles.title}>解答：</div>
        <div className={styles.desc}>答案在这里</div>
        <div className={styles.picture}>
          <img src="https://baidu.com" />
          <img src="https://baidu.com" />
          <img src="https://baidu.com" />
        </div>
      </div>
    </div>
  </div>
}

const QuestionDetail = () => {
  return <PageHeaderWrapper >
    <div className={styles.detail}>
      <QuestionDeailHeader className={styles.header} />
      <QuestionDeatailContent className={styles.content} />
      <div className={styles.tool}>
        <div>
          <Button>返回列表</Button>
        </div>

        <div>
          <Button>下架</Button>
        </div>
      </div>
    </div>
  </PageHeaderWrapper>
}
export default QuestionDetail
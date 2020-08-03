import React, { useState, useEffect } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Steps, Button, Form, Col, Select } from 'antd'
import { getQuestionSubject } from '@/services/myQuestion/create'
import SubjectGroup from '../components/SubjectGroup'
import DiffStar from '../components/DiffStar'
import TagsSelect from '../components/TagsSelect'
import { RichQuestion, questionType } from '../components/RichQuestion'
import styles from './index.less'

const { Step } = Steps
const { Option } = Select

const useSubjectTreeData = (setLoading) => {
  const [treeData, setTreeData] = useState([])
  useEffect(() => {
    setLoading(true)
    getQuestionSubject().then(res => {
      if (res.code < 300) setTreeData(res.data)
      setLoading(false)
    })
  }, [])
  return treeData
}
const steps = [{ title: '填写题目信息' }, { title: '填写题目内容' }]

const MyQuestionCreate = (props) => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const treeData = useSubjectTreeData(setLoading)
  const submitToNext = () => {
    setCurrentStep(Math.max(currentStep + 1, 0))
    form.validateFields().then((values, err) => {
      if (err) {
        return
      }
      console.log(values);
      setCurrentStep(Math.max(currentStep + 1, 0))
    })
  }
  const formRender = () => {
    return <Col offset={8} span={8}><Form form={form} >
      <Form.Item name="subjectTreeNodeIds" rules={[{
        required: true,
        message: '选择科目课程'
      }]}>
        <SubjectGroup data={treeData} loading={loading} />
      </Form.Item>
      <Form.Item name="type" label="题目类型" rules={[{
        required: true,
        message: '选择题目类型'
      }]}>
        <Select>
          {questionType.map(x => <Option value={x.value} key={x.value}>{x.title}</Option>)}
        </Select>
      </Form.Item>
      <Form.Item name="difficultyLevel" label="难度" rules={[{
        required: true,
        message: '选择题目难度'
      }]}>
        <DiffStar />
      </Form.Item>
      <Form.Item name="tags" label="标签" rules={[{
        required: true,
        message: '选择题目标签'
      }]}>
        <TagsSelect />
      </Form.Item>
    </Form>
    </Col>
  }
  const stepContentRender = () => {
    if (currentStep) {
      return <Col span={16} offset={4}><RichQuestion type={form.getFieldValue('type')} /></Col>
    }
    return formRender()

  }


  return <PageHeaderWrapper>
    <div className={styles.content}>
      <div className={styles.steps}>
        <Steps current={currentStep}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>
      <div className={styles.stepContent}>

        {stepContentRender()}


      </div>
      <div className={styles.bottomTool}>
        {currentStep ? <Button onClick={() => {
          setCurrentStep(Math.max(currentStep - 1, 0))
        }}>上一步</Button> : null}
        {currentStep ? <Button
          type="primary"
          onClick={() => {
            // save
          }}>下一步</Button> : <Button
            type="primary"
            onClick={submitToNext}>下一步</Button>}
      </div>
    </div>

  </PageHeaderWrapper>
}
export default MyQuestionCreate
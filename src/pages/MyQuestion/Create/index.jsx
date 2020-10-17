import React, { useState, useEffect } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { history } from 'umi'
import { Steps, Button, Form, Col, Select, message } from 'antd'
import { getQuestionSubject, createQuestion } from '@/services/myQuestion/create'
import SubjectGroup from '../components/SubjectGroup'
import DiffStar from '../components/DiffStar'
import TagsSelect from '../components/TagsSelect'
import { RichQuestion, questionType, alphabet } from '../components/RichQuestion'
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
const formatRichQuestion = (rich) => {
  const { answer, question, options, analysis } = rich
  return {
    analysis: analysis && analysis.toHTML(),
    answer,
    question: question.toHTML(),
    options: options && options.map((x, index) => {
      return `${[alphabet[index]]}. ${x.value.toHTML()}`
    })
  }
}
const MyQuestionCreate = (props) => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [richQuestion, setRichQuestion] = useState({})

  const treeData = useSubjectTreeData(setLoading)
  const [formValues, setFormValues] = useState({})
  const submitToNext = () => {
    if (currentStep) {
      // save
      // format rich question
      const richValues = formatRichQuestion(richQuestion)
      formValues.subjectTreeNodeIds = formValues.subjectTreeNodeIds.map(x => x.lastItem)
      createQuestion({
        ...formValues,
        ...richValues
      }).then(res => {
        if (res.code < 300) {
          message.success('创建成功！')
          history.goBack()
        }
      })
    } else {
      setCurrentStep(Math.max(currentStep + 1, 0))
      form.validateFields().then((values, err) => {
        if (err) {
          return
        }
        setFormValues({ ...values })
        setCurrentStep(Math.max(currentStep + 1, 0))
      })
    }
  }
  const onRichQuestionChange = (input) => {
    setRichQuestion(input)
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
      return <Col span={16} offset={4}>
        <RichQuestion
          type={form.getFieldValue('type')}
          onChange={onRichQuestionChange}
          value={richQuestion} />
      </Col>
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
          onClick={submitToNext}>保存</Button> : <Button
            type="primary"
            onClick={submitToNext}>下一步</Button>}
      </div>
    </div>

  </PageHeaderWrapper>
}
export default MyQuestionCreate
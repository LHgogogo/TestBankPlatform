import React, { useState } from 'react'
import { Button, Divider, Checkbox } from 'antd'
import { QuestionBraftEditor, createEditorState } from '../QuestionBraftEditor'
import styles from './index.less'

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
const questionType = [
  {
    title: '单选题',
    value: '1'
  },
  {
    title: '多选题',
    value: '2'
  },
  {
    title: '填空题',
    value: '3'
  },
  {
    title: '判断题',
    value: '4'
  }, {
    title: '解答题',
    value: '5'
  }
]
const OneOption = React.memo((props) => {
  const { value, onChange, title, onDelete } = props
  const onQuestionChange = (input) => {
    if (onChange) onChange(input)
  }
  return <div className={styles.option}>
    <div className={styles.title}>{title}</div>
    <div className={styles.richBlock}>
      <QuestionBraftEditor
        className={styles.input}
        value={value}
        onChange={onQuestionChange} />
    </div>
    <Button className={styles.right} onClick={onDelete}>删除</Button>
  </div>
})
const findQuestionType = (type) => {
  const temp = questionType.find(x => {
    return x.value === type
  })
  if (temp) {
    return temp
  }
  return {}
}
const RichQuestion = React.memo((props) => {
  const { type,
    value = {},
    value: {
      question = createEditorState(''),
      answer = createEditorState(''),
      options = []
    },
    onChange } = props
  const currentType = findQuestionType(type)
  const onChangeValue = (target, key) => {
    if (onChange) onChange({
      ...value,
      [key]: target
    })
  }
  const onQuestionChange = (input) => {
    onChangeValue(input, 'question')
  }
  const onAddChoose = () => {
    onChangeValue([...options, {
      value: createEditorState(''),
      key: new Date().getTime()
    }], 'options')
  }
  const onDeleteChoose = (index) => {
    options.splice(index, 1)
    onChangeValue([...options], 'options')
  }
  const onOptionChange = (update, index) => {
    const temp = options[index]
    temp.value = update
    onChangeValue([...options], 'options')
  }
  return <div className={styles.content}>
    <div className={styles.title}>题型：{currentType.title}</div>
    <div className={styles.option}>
      <div className={styles.title}>题目文本：</div>
      <div className={styles.richBlock}>
        <QuestionBraftEditor
          className={styles.input}
          value={question}
          onChange={onQuestionChange} />
      </div>
    </div>
    <Divider />
    <div >
      {options.map((choose, index) => {
        return <>
          <OneOption
            title={`选项${alphabet[index]}：`}
            value={choose.value}
            key={choose.key}
            onDelete={() => {
              onDeleteChoose(index)
            }}
            onChange={(update) => {
              onOptionChange(update, index)
            }} />
          <Divider dashed />
        </>
      })}
      <Button onClick={onAddChoose} className={styles.bottomBtn}>添加选项</Button>
    </div>
    <Divider />
    <div>
      <div className={styles.option}>
        <div className={styles.title}>正确选项：</div>
        <Checkbox.Group options={options.map((x, index) => {
          return { label: `选项${alphabet[index]}`, value: alphabet[index] }
        })} />
      </div>

      <div className={styles.option}>
        <div className={styles.title}>答案文本：</div>
        <div className={styles.richBlock}>
          {/* <QuestionBraftEditor
            className={styles.input}
            value={answer}
            onChange={(input) => onChangeValue(input, 'answer')}
          /> */}
        </div>
      </div>
    </div>
  </div>
})

export {
  RichQuestion, questionType, alphabet
}
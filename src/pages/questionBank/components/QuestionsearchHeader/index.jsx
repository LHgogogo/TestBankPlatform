import React, { useState, useEffect } from 'react'
import { Cascader, Select, Button } from 'antd';
import { getQuestionQuerys } from '@/services/questions/share';
import styles from './index.less'

const { Option } = Select

const useQuery = (id) => {
  const [querys, setQuerys] = useState([])
  useEffect(() => {
    getQuestionQuerys({ id }).then(response => {
      if (response.code < 300) {
        setQuerys(response.data)
      }
    })
  }, [id])
  return querys
}

const QuestionsearchHeader = (props) => {
  const { id, selectOptions = [], onQuery } = props
  const querys = useQuery(id)
  const [current, setCurrent] = useState({})
  const selectRender = (select, key) => {
    const { queryKey, defaultValue } = select

    return <span key={key} >
      <Select
        className={styles.select}
        value={current[queryKey] || defaultValue}
        onChange={(value) => {
          setCurrent({
            ...current,
            [queryKey]: value
          })
        }}>{select.options.map(x => <Option key={x.value + x.label} value={x.value}>{x.label}</Option>)}</Select>
    </span>
  }
  const selectsRender = () => {
    return selectOptions.map((select, index) => {
      return selectRender(select, index)
    })
  }
  return <div className={styles.header}>
    <span>
      <Cascader options={querys} onChange={(values) => {
        setCurrent({
          ...current,
          subject: values
        })
      }} />
      {selectsRender(selectOptions)}
    </span>
    <span>
      <Button
        className={styles.button}
        type="primary"
        onClick={() => {
          onQuery(current)
        }}>筛选</Button>
      <Button
        className={styles.button}
        onClick={() => {
          setCurrent({})
        }}>重置</Button>
    </span>

  </div>

}
export default QuestionsearchHeader
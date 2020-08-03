import React, { useState } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Pagination } from 'antd'
import QuestionsearchHeader from '../components/QuestionsearchHeader'
import RadioSearch from '../components/RadioSearch'
import QuestionList from '../components/QuestionList'
import styles from './index.less'


const selectOptions = [{
  defaultValue: '0',
  placeHolder: '请选择',
  queryKey: 'types',
  options: [
    {
      value: '0',
      label: '全部类型'
    },
    {
      value: '1',
      label: '试卷'
    },
    {
      value: '2',
      label: '练习'
    }
  ]
},
{
  defaultValue: '0',
  placeHolder: '请选择',
  queryKey: 'degreeOfDifficulty',
  options: [
    {
      value: '0',
      label: '全部难度'
    },
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2'
    },
    {
      value: '3',
      label: '3'
    },
    {
      value: '4',
      label: '4'
    },
    {
      value: '5',
      label: '5'
    }
  ]
},
{
  defaultValue: '0',
  placeHolder: '请选择',
  queryKey: 'tag',
  options: [
    {
      value: '0',
      label: '全部标签'
    },
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2'
    },
    {
      value: '3',
      label: '3'
    },
    {
      value: '4',
      label: '4'
    },
    {
      value: '5',
      label: '5'
    }
  ]
}]
const searchOptions = [{
  value: '0',
  label: '发布'
},
{
  value: '1',
  label: '下架'
},
{
  value: '2',
  label: '发布审核中'
}]
const Bank = () => {
  const [query, setQuery] = useState({ status: '0' })
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [page, setPage] = useState({
    pageNum: 1,
    pageSize: 10,
  })
  const total = 0
  // const [list, total] = useList(query, page)
  const onQuery = (current) => {
    setQuery(current)
  }
  const onSearch = (status, input) => {
    setQuery({
      ...query,
      status,
      keyword: input
    })
  }
  const onBtnClick = () => {
    // Modal.confirm({
    //   centered: true,
    //   okText: '确定',
    //   cancelText: '取消',
    //   title: '系统提示',
    //   content: '确定取消分享？',
    //   onOk() {

    //   }
    // })
  }
  const pageChange = (pageNum, pageSize) => {
    setPage({
      ...page,
      pageNum,
      pageSize
    })
  }
  const pagination = {
    current: page.pageNum,
    pageSize: page.pageSize,
    total,
    showTotal: num => `共 ${num} 条数据`,
    onChange: pageChange
  }
  return <PageHeaderWrapper className={styles.page}>
    <QuestionsearchHeader
      selectOptions={selectOptions}
      onQuery={onQuery} />
    <span>
      <RadioSearch
        defaultValue="0"
        options={searchOptions}
        onSearch={onSearch} />
      <span>
        <Button
          disabled={!selectedRowKeys.length}
          onClick={onBtnClick}>{query.status === '0' ? '取消共享' : '删除'}</Button>
        {selectedRowKeys.length ? <span>{`已选中${selectedRowKeys.length * 1}项`}</span> : null}
      </span>
    </span>
    <QuestionList className={styles.questionTable} />

  </PageHeaderWrapper>
}
export default Bank
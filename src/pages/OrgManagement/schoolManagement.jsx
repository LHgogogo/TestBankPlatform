import { Button, Table } from 'antd';
import React, { useState, useCallback, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const columns = [
  {
    title: '学校名称',
    dataIndex: 'school',
    key: 'school',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: status => {
      let theHtml
      switch (status * 1) {
        case 0:
          theHtml = (<span>正常</span>)
          break;
        case 1:
          theHtml = (<span>未生效</span>)
          break;
        default:
          theHtml = (<></>)
          break;
      }
      return theHtml
    },

  },
  {
    title: '人员账号数',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '生效时间',
    key: 'date',
    dataIndex: 'date',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => {
      // console.log(record)
      return (
        <span>
          <a>详情</a>
        </span>
      )
    },
  },
];
const TableData = [
  {
    id: 233,
    school: '杭二中',
    status: 0,
    number: 23,
    date: '2020-10-01 至 2022-10-01',
  },
  {
    id: 234,
    school: '外国语',
    status: 1,
    number: 2223,
    date: '2020-10-01 至 2022-10-11',
  },
  {
    id: 235,
    school: '杭二中',
    status: 0,
    number: 23,
    date: '2020-10-01 至 2022-10-01',
  },
  {
    id: 236,
    school: '外国语',
    status: 1,
    number: 2223,
    date: '2020-10-01 至 2022-10-11',
  },
  {
    id: 237,
    school: '杭二中',
    status: 0,
    number: 23,
    date: '2020-10-01 至 2022-10-01',
  },
  {
    id: 238,
    school: '外国语',
    status: 1,
    number: 2223,
    date: '2020-10-01 至 2022-10-11',
  },
  {
    id: 239,
    school: '杭二中',
    status: 0,
    number: 23,
    date: '2020-10-01 至 2022-10-01',
  },
  {
    id: 244,
    school: '外国语',
    status: 1,
    number: 2223,
    date: '2020-10-01 至 2022-10-11',
  },
  {
    id: 243,
    school: '杭二中',
    status: 0,
    number: 23,
    date: '2020-10-01 至 2022-10-01',
  },
  {
    id: 254,
    school: '外国语',
    status: 1,
    number: 2223,
    date: '2020-10-01 至 2022-10-11',
  },
  {
    id: 253,
    school: '杭二中',
    status: 0,
    number: 23,
    date: '2020-10-01 至 2022-10-01',
  },
  {
    id: 264,
    school: '外国语',
    status: 1,
    number: 2223,
    date: '2020-10-01 至 2022-10-11',
  }

]
const SchoolManagement = () => {
  const [tableData, setTableData] = useState([])
  const [total, setTotal] = useState(0)
  const handleAdd = useCallback(
    () => {
      console.log('handleAdd');
    },
    []
  )
  const handlePageChange = useCallback(
    (page, pageSize) => {
      console.log(page);
      console.log(pageSize);
    },
    []
  )
  const handleSizeChange = useCallback(
    (current, size) => {
      console.log(current);
      console.log(size);
    },
    []
  )
  useEffect(() => {
    const res = { code: 200, data: TableData, total: TableData.length }
    if (res.code < 300) {
      setTableData(res.data)
      setTotal(res.total)
    }
    return () => {
    }
  }, [])
  const pagination = {
    showQuickJumper: true,
    showSizeChanger: true,
    onChange: handlePageChange,
    onShowSizeChange: handleSizeChange,
    total,
  }
  return (
    <>
      <PageHeaderWrapper />
      <div className={styles.bg} >
        <div style={{ textAlign: 'right', marginTop: 15, marginBottom: 15 }}>
          <Button type="primary" onClick={handleAdd}>新增学校</Button>
        </div>
        <Table scroll={{ x: true }} columns={columns} dataSource={tableData} rowKey="id" pagination={
          pagination
        } />
      </div>
    </>
  );
};

export default SchoolManagement;

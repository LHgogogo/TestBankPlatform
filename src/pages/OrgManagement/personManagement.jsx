import { Button, Table } from 'antd';
import React, { useState, useCallback, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const TableData = [
  {
    id: 233,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 234,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 235,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 236,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 237,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 238,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 239,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 244,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 243,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 254,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 253,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  },
  {
    id: 264,
    nickname: '杭二中',
    phone: 15878822333,
    subject: '科学',
    creattime: '2020-10-01 12:12',
    role: '教师',
  }

]
const SchoolManagement = () => {
  const [tableData, setTableData] = useState([])
  const [total, setTotal] = useState(0)
  const handleImport = useCallback(
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
  const columns = [
    {
      title: '昵称',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '科目年纪',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: '创建时间',
      key: 'creattime',
      dataIndex: 'creattime',
    },
    {
      title: '角色',
      key: 'role',
      dataIndex: 'role',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        // console.log(record)
        return (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <a>角色变更</a>
            <a>删除</a>
          </div>
        )
      },
    },
  ];
  return (
    <>
      <PageHeaderWrapper />
      <div className={styles.bg} >
        <div style={{ textAlign: 'left', marginTop: 15, marginBottom: 15 }}>
          <Button type="primary" onClick={handleImport}>导入</Button>
        </div>
        <Table scroll={{ x: true }} columns={columns} dataSource={tableData} rowKey="id" pagination={
          pagination
        } />
      </div>
    </>
  );
};

export default SchoolManagement;

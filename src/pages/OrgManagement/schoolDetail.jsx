import { Button, Table } from 'antd';
import React, { useState, useCallback, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { getSchoolDetail } from '@/pages/OrgManagement/service';
import { history } from 'umi'
import styles from './style.less';

console.log(history);
const { location: { query } } = history
const getDetail = async (data) => {
  const res = await getSchoolDetail(data)
  // console.log(res)
  if (res.code < 300) {
    return res.data
  }
  return null
}
const IndexHtml = () => {
  // const [school, setSchool] = useState(query.id);
  useEffect(() => {
    getDetail({ id: query.id }).then(res => {
      console.log(res);
    })
  }, [])
  return (
    <>
      <PageHeaderWrapper title="学校详情" />
      <div className={styles.bg} >
        详情
      </div>
    </>
  );
};

export default IndexHtml;

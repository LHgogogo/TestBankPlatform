import { Tabs } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';
import DataView from './components/dataView';

const { TabPane } = Tabs;
const ManagementData = () => {

  return (
    <>
      <PageHeaderWrapper />
      <Tabs defaultActiveKey="1" className={styles.bg} >
        <TabPane tab="运营数据" key="1">
          <DataView id="runView" />
        </TabPane>
        <TabPane tab="用户使用数据" key="2">
          <DataView id="perView" />
        </TabPane>
      </Tabs>
    </>
  );
};

export default ManagementData;

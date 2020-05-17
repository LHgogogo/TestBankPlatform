import { DatePicker, Select } from 'antd';
import React, { useState, useCallback } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from '../style.less';
import Bar from '../../../components/Charts/Bar'

const tabData = {

}
const boxData = {

}
const schoolData = [
  { name: '杭州中学', value: 0 },
  { name: '外国语', value: 1 },
  { name: '杭二中', value: 2 },
  { name: '镇海', value: 3 },
];
const personalData = [
  { name: '刘德华', value: 0 },
  { name: '吴彦祖', value: 1 },
  { name: '嘻嘻哈哈', value: 2 },
  { name: 'www', value: 3 },
];
const { RangePicker } = DatePicker;
const { Option } = Select;
const updateTime = (data) => {
  return (<div className={styles.updateTime}>
    数据更新于 {data}
  </div>)
}
const tabBoxes = (data) => {
  return (<div className={styles.tabBoxes}>
    <div className={styles.tabBox}>
      <div className={styles.header}>题库已发布题数</div>
      <div className={styles.content}>7,688</div>
      <div className={styles.footer}>环比上周  +13,2%</div>
    </div>
    <div className={styles.tabBox}>
      <div className={styles.header}>题库已发布题数</div>
      <div className={styles.content}>7,688</div>
      <div className={styles.footer}>近7日审核 609       剩余未审核 566 </div>
    </div>
    <div className={styles.tabBox}>
      <div className={styles.header}>题库已发布题数</div>
      <div className={styles.content}>7,688</div>
      <div className={styles.footer}>环比上周  +13,2%</div>
    </div>
    <div className={styles.tabBox}>
      <div className={styles.header}>题库已发布题数</div>
      <div className={styles.content}>7,688</div>
      <div className={styles.footer}>环比上周  +13,2%</div>
    </div>
  </div>)
}
const basicBoxes = (data) => {
  return (<div className={styles.basicBoxes}>
    <div className={styles.tabBox}>
      <div className={styles.header}>题库已发布题数</div>
      <div className={styles.content}>7,688</div>
    </div>
    <div className={styles.tabBox}>
      <div className={styles.header}>题库已发布题数</div>
      <div className={styles.content}>7,688</div>
    </div>
    <div className={styles.tabBox}>
      <div className={styles.header}>题库已发布题数</div>
      <div className={styles.content}>7,688</div>
    </div>
    <div className={styles.tabBox}>
      <div className={styles.header}>题库已发布题数</div>
      <div className={styles.content}>7,688</div>
    </div>
  </div>)
}
const dateType = [
  { name: '今日', value: 0 },
  { name: '本周', value: 1 },
  { name: '本月', value: 2 },
  { name: '本年', value: 3 }
]
const DataView = (data) => {
  const [date, setDate] = useState();
  const [school, setSchool] = useState();
  const [personal, setPersonal] = useState();
  const handleDatepicker = useCallback((datas, dateStrings) => {
    if (typeof datas === 'number') {
      switch (datas) {
        case 0:

          break;
        case 1:

          break;
        case 2:

          break;
        case 3:

          break;
        default:
          break;
      }
    } else {
      console.log(datas);
      console.log(dateStrings);
      setDate(dateStrings)
    }
  }, [])
  const handleSchoolSelect = useCallback(
    (val) => {
      setSchool(val)
    },
    []
  )
  const handleHeadmasterSelect = useCallback(
    (val) => {
      setPersonal(val)
    },
    []
  )
  return (
    <>
      {updateTime('2020.4.12 14:00:23')}
      <div className={styles.dateBoxes}>
        <div className={styles.schoolBoxes}>
          账号数据:
          <Select
            showSearch
            style={{ width: 200, margin: 'auto 15px' }}
            placeholder="请选择学校"
            optionFilterProp="children"
            onSelect={handleSchoolSelect}
            value={school}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {schoolData.map(item => (
              <Option value={item.value} key={item.value}>{item.name}</Option>
            ))}
          </Select>
          <Select
            showSearch
            style={{ width: 200, margin: 'auto 15px' }}
            placeholder="请选择"
            optionFilterProp="children"
            onSelect={handleHeadmasterSelect}
            value={personal}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {personalData.map(item => (
              <Option value={item.value} key={item.value}>{item.name}</Option>
            ))}
          </Select>
        </div>
        <RangePicker value={date} onChange={handleDatepicker} style={{ marginRight: 15 }} />
        {dateType.map(item => (
          <span key={item.value} onClick={handleDatepicker(item.value)}>{item.name}</span>
        ))}
      </div>
      {tabBoxes(tabData)}
      {basicBoxes(boxData)}
      <Bar id={data.id} />
    </>
  );
};

export default DataView;

import { Tabs } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import styles from './barStyle.less';
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

const Bar = (data) => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById(`${data.id}`));
    const opt = {
      title: {
        text: '已发布题目统计 / 共享作业卷统计'
      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['语文', '数学', '英语', '科学', '语文', '数学', '英语'],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              // color: '#d3d3d3'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    }
    myChart.setOption(opt);
  }, [])
  return (
    <>
      {data && <div id={data.id} className={styles.bar} />}
    </>
  );
};

export default Bar;

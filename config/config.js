// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'smile',
              component: './Welcome',
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              name: 'list.table-list',
              icon: 'table',
              path: '/list',
              component: './ListTableList',
            },
            // 数据分析tab
            {
              path: '/dataAnalysis',
              name: 'dataAnalysis',
              icon: 'area-chart',
              component: './Admin',
              routes: [
                {
                  path: '/dataAnalysis/managementData',
                  name: 'managementData',
                  icon: 'bar-chart',
                  component: './Welcome'
                },
                {
                  path: '/dataAnalysis/schoolData',
                  name: 'schoolData',
                  icon: 'dot-chart',
                  component: './Welcome'
                },
                {
                  path: '/dataAnalysis/personData',
                  name: 'personData',
                  icon: 'line-chart',
                  component: './Welcome'
                },
              ],
            },
            // 题库运营tab
            {
              path: '/questionBank',
              name: 'questionBank',
              icon: 'bank',
              component: './Admin',
              routes: [
                {
                  path: '/questionBank/share',
                  name: 'share',
                  icon: 'share-alt',
                  component: './Welcome'
                },
                {
                  path: '/questionBank/manage',
                  name: 'manage',
                  icon: 'diff',
                  component: './Welcome'
                },
                {
                  path: '/questionBank/fast',
                  name: 'fast',
                  icon: 'pull-request',
                  component: './Welcome'
                },
                {
                  path: '/questionBank/personalQuestion',
                  name: 'personalQuestion',
                  icon: 'user-add',
                  component: './Welcome'
                },
              ],
            },
            // 审核管理tab
            {
              path: '/auditManage',
              name: 'auditManage',
              icon: 'audit',
              component: './Admin',
              routes: [
                {
                  path: '/auditManage/publishAudit',
                  name: 'publishAudit',
                  icon: 'file-protect',
                  component: './Welcome'
                },
                {
                  path: '/auditManage/wrongAudit',
                  name: 'wrongAudit',
                  icon: 'exception',
                  component: './Welcome'
                },
              ],
            },
            // 组织管理tab
            {
              path: '/organizationManage',
              name: 'organizationManage',
              icon: 'reconciliation',
              component: './Admin',
              routes: [
                {
                  path: '/organizationManage/school',
                  name: 'school',
                  icon: 'read',
                  component: './Welcome'
                },
                {
                  path: '/organizationManage/person',
                  name: 'person',
                  icon: 'idcard',
                  component: './Welcome'
                },
              ],
            },
            // 系统配置tab
            {
              path: '/systemConfig',
              name: 'systemConfig',
              icon: 'sliders',
              component: './Admin',
              routes: [
                {
                  path: '/systemConfig/authority',
                  name: 'authority',
                  icon: 'cluster',
                  component: './Welcome'
                },
                {
                  path: '/systemConfig/subjectManage',
                  name: 'subjectManage',
                  icon: 'bars',
                  component: './Welcome'
                },
              ],
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});

// 这里模仿后台返回的菜单数据
export default {
  'GET /api/getMenuTree': [
    // dashboard
    { path: '/', redirect: '/dashboard/analysis' },
    // 折线图
    {
      path: '/echarts/line',
      component: './mypage/Mypage',
      name: 'Line',
      icon: 'line-chart',
      routes: [],
    },
    //饼图
    {
      path: '/echarts/pie',
      component: './mypage/Mypage',
      name: 'Pie',
      icon: 'pie-chart',
      routes: [],
    },
    //柱状图
    {
      path: '/echarts/bar',
      component: './mypage/Mypage',
      name: 'Bar',
      icon: 'bar-chart',
      routes: [],
    },
    //散点图
    {
      path: '/echarts/scatter',
      component: './mypage/Mypage',
      name: 'Scatter',
      icon: 'dot-chart',
      routes: [],
    },
    //K线图
    {
      path: '/echarts/candlestick',
      component: './mypage/Mypage',
      name: 'Candlestick',
      icon: 'line-chart',
      routes: [],
    },
     //雷达图
     {
      path: '/echarts/radar',
      component: './mypage/Mypage',
      name: 'Radar',
      icon: 'radar-chart',
      routes: [],
    },
    //平行坐标图
    {
      path: '/echarts/parallel',
      component: './mypage/Mypage',
      name: 'Parallel',
      icon: 'line-chart',
      routes: [],
    },
     //桑基图
     {
      path: '/echarts/sankey',
      component: './mypage/Mypage',
      name: 'Sankey',
      icon: 'line-chart',
      routes: [],
    },
    //仪表盘
    {
      path: '/echarts/gauge',
      component: './mypage/Mypage',
      name: 'Gauge',
      icon: 'line-chart',
      routes: [],
    },
    //漏斗图
    {
      path: '/echarts/funnel',
      component: './mypage/Mypage',
      name: 'Funnel',
      icon: 'fund',
      routes: [],
    },
    //数据集
    {
      path: '/echarts/dataset',
      component: './mypage/Mypage',
      name: 'Dataset',
      icon: 'line-chart',
      routes: [],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      icon: 'dashboard',
      routes: [
        {
          path: '/dashboard/analysis',
          name: 'analysis',
          component: './Dashboard/Analysis',
        },
        {
          path: '/dashboard/monitor',
          name: 'monitor',
          component: './Dashboard/Monitor',
        },
        {
          path: '/dashboard/workplace',
          name: 'workplace',
          component: './Dashboard/Workplace',
        },
      ],
    },
    // forms
    {
      path: '/form',
      icon: 'form',
      name: 'form',
      authority: ['admin'],
      routes: [
        {
          path: '/form/basic-form',
          name: 'basicform',
          component: './Forms/BasicForm',
        },
        {
          path: '/form/step-form',
          name: 'stepform',
          component: './Forms/StepForm',
          hideChildrenInMenu: true,
          routes: [
            {
              path: '/form/step-form',
              name: 'stepform',
              redirect: '/form/step-form/info',
            },
            {
              path: '/form/step-form/info',
              name: 'info',
              component: './Forms/StepForm/Step1',
            },
            {
              path: '/form/step-form/confirm',
              name: 'confirm',
              component: './Forms/StepForm/Step2',
            },
            {
              path: '/form/step-form/result',
              name: 'result',
              component: './Forms/StepForm/Step3',
            },
          ],
        },
        {
          path: '/form/advanced-form',
          name: 'advancedform',
          authority: ['admin'],
          component: './Forms/AdvancedForm',
        },
      ],
    },
    // list
    {
      path: '/list',
      icon: 'table',
      name: 'list',
      authority: ['user'],
      routes: [
        {
          path: '/list/table-list',
          name: 'searchtable',
          component: './List/TableList',
        },
        {
          path: '/list/basic-list',
          name: 'basiclist',
          component: './List/BasicList',
        },
        {
          path: '/list/card-list',
          name: 'cardlist',
          component: './List/CardList',
        },
        {
          path: '/list/search',
          name: 'searchlist',
          component: './List/List',
          routes: [
            {
              path: '/list/search',
              redirect: '/list/search/articles',
            },
            {
              path: '/list/search/articles',
              name: 'articles',
              component: './List/Articles',
            },
            {
              path: '/list/search/projects',
              name: 'projects',
              component: './List/Projects',
            },
            {
              path: '/list/search/applications',
              name: 'applications',
              component: './List/Applications',
            },
          ],
        },
      ],
    },
    {
      path: '/profile',
      name: 'profile',
      icon: 'profile',
      routes: [
        // profile
        {
          path: '/profile/basic',
          name: 'basic',
          component: './Profile/BasicProfile',
        },
        
        {
          path: '/profile/advanced',
          name: 'advanced',
          authority: ['admin'],
          component: './Profile/AdvancedProfile',
        },
      ],
    },
    {
      name: 'result',
      icon: 'check-circle-o',
      path: '/result',
      routes: [
        // result
        {
          path: '/result/success',
          name: 'success',
          component: './Result/Success',
        },
        { path: '/result/fail', name: 'fail', component: './Result/Error' },
      ],
    },
    {
      name: 'exception',
      icon: 'warning',
      path: '/exception',
      routes: [
        // exception
        {
          path: '/exception/403',
          name: 'not-permission',
          component: './Exception/403',
        },
        {
          path: '/exception/404',
          name: 'not-find',
          component: './Exception/404',
        },
        {
          path: '/exception/500',
          name: 'server-error',
          component: './Exception/500',
        },
        {
          path: '/exception/trigger',
          name: 'trigger',
          hideInMenu: true,
          component: './Exception/TriggerException',
        },
      ],
    },
    {
      name: 'account',
      icon: 'user',
      path: '/account',
      routes: [
        {
          path: '/account/center',
          name: 'center',
          component: './Account/Center/Center',
          routes: [
            {
              path: '/account/center',
              redirect: '/account/center/articles',
            },
            {
              path: '/account/center/articles',
              component: './Account/Center/Articles',
            },
            {
              path: '/account/center/applications',
              component: './Account/Center/Applications',
            },
            {
              path: '/account/center/projects',
              component: './Account/Center/Projects',
            },
          ],
        },
        {
          path: '/account/settings',
          name: 'settings',
          component: './Account/Settings/Info',
          routes: [
            {
              path: '/account/settings',
              redirect: '/account/settings/base',
            },
            {
              path: '/account/settings/base',
              component: './Account/Settings/BaseView',
            },
            {
              path: '/account/settings/security',
              component: './Account/Settings/SecurityView',
            },
            {
              path: '/account/settings/binding',
              component: './Account/Settings/BindingView',
            },
            {
              path: '/account/settings/notification',
              component: './Account/Settings/NotificationView',
            },
          ],
        },
      ],
    },
    {
      component: '404',
    },
  ],
};

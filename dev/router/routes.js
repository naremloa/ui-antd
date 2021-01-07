import Layout from '../Layout/index.vue';
import FakeLayout from '../Layout/Fake.vue';

export default [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: 'Home',
        },
        component: () => import('../Home.vue'),
      },
      {
        path: 'playground',
        name: 'Playground',
        meta: {
          title: '展示頁',
        },
        component: FakeLayout,
        children: [
          {
            path: 'search-group',
            name: 'SearchGroup',
            meta: {
              title: '搜索框展示頁',
            },
            component: () => import('../Playground/SearchGroup.vue'),
          },
          {
            path: 'table',
            name: 'Table',
            meta: {
              title: '表格展示頁',
            },
            component: () => import('../Playground/Table.vue'),
          },
          {
            path: 'form',
            name: 'Form',
            meta: {
              title: '表單展示頁',
            },
            component: () => import('../Playground/Form.vue'),
          },
          {
            path: 'page',
            name: 'Page',
            meta: {
              title: '暫存頁',
            },
            component: () => import('../Page.vue'),
          },

        ],
      },
      {
        path: 'ui',
        name: 'ui',
        meta: {
          title: 'UI Guide',
        },
        component: FakeLayout,
        children: [
          {
            path: 'skeleton',
            name: 'skeleton',
            meta: {
              title: '架構',
            },
            component: () => import('../Playground/Skeleton.vue'),
          },
          {
            path: 'button',
            name: 'button',
            meta: {
              title: '按鈕',
            },
            component: () => import('../Playground/Button.vue'),
          },
        ],
      },
    ],
  },
];

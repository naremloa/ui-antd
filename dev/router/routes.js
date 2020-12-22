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
    ],
  },
];

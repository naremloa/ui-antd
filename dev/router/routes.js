import Layout from '../Layout.vue';

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
        component: () => import('../Page.vue'),
      },
    ],
  },
];

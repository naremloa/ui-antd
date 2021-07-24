export const dataSource = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park asjdflasjdflkjas;dlkjgf;aslkdjg;askldjgaskdjg;klasjdg',
    aa: 'New York No. 1 Lake Park asjdflasjdflkjas;dlkjgf;aslkdjg;askldjgaskdjg;klasjdg',
    bb: 'New York No. 1 Lake Park asjdflasjdflkjas;dlkjgf;aslkdjg;askldjgaskdjg;klasjdg',
    cc: 'New York No. 1 Lake Park asjdflasjdflkjas;dlkjgf;aslkdjg;askldjgaskdjg;klasjdg',
    dd: 'New York No. 1 Lake Park asjdflasjdflkjas;dlkjgf;aslkdjg;askldjgaskdjg;klasjdg',
    tags: ['nice', 'developer'],
    switch: 1,
    textarea: '3345678',
    checkbox: [1],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    switch: 0,
    textarea: '3345678',
    checkbox: [2],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    switch: false,
    textarea: '3345678',
    checkbox: [],
  },
  {
    key: '4',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    switch: false,
    textarea: '3345678',
    checkbox: [],
  },
  {
    key: '5',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    switch: false,
    textarea: '3345678',
    checkbox: [],
  },
  {
    key: '6',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    switch: false,
    textarea: '3345678',
    checkbox: [],
  },
  {
    key: '7',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    switch: false,
    textarea: '3345678',
    checkbox: [],
  },
];

export const dataSource2 = [
  {
    A: 'A1',
    B: 'B1',
    C: 'C1',
  },
];

export const getData = async () => {
  await new Promise((res) => setTimeout(() => res(), 500));
  return [null, {
    data: new Array(60).fill(null)
      .map((_, id) => ({ id: `${id}`, name: `${id}`, age: Math.floor(Math.random() * 100) })),
    meta: { total: 60 },
  }];
};

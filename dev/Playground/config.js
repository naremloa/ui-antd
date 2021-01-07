export const addAccountFormConfig = ({ format }) => {
  const {
    ffInput,
    ffInputPassword,
    ffCheckbox,
  } = format;

  return [
    ffInput({
      prop: 'nickname',
      label: '名称',
      rules: [{ required: true, message: '请输入名称', trigger: 'change' }],
    }),
    ffInput({
      prop: 'username',
      label: '账号',
      rules: [{ required: true, message: '请输入账号', trigger: 'change' }],
    }),
    ffInputPassword({
      prop: 'password',
      label: '密码',
      rules: [{ required: true, message: '请输入密码', trigger: 'change' }],
    }),
    ffCheckbox({
      prop: 'role_ids',
      label: '角色',
      options: [{ value: 111, label: 'label1' }, { value: 222, label: 'label2' }],
    }),
    ffInput({
      prop: 'telegram_id',
      label: 'Telegram ID',
      rules: [{ required: true, message: '请输入密码', trigger: 'change' }],
    }),
    ffInput({
      prop: 'enigma_id',
      label: 'Enigma ID',
      rules: [{ required: true, message: '请输入密码', trigger: 'change' }],
    }),
    ffInput({
      prop: 'potato_id',
      label: 'Potato ID',
      rules: [{ required: true, message: '请输入密码', trigger: 'change' }],
    }),

  ];
};

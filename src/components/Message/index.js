import { message } from 'ant-design-vue';

const msg = ({
  type = 'info',
  message: content = '',
  duration = 3,
  onClose = () => {},
}) => {
  if (!['info', 'success', 'warning', 'error', 'loading'].includes(type)) {
    console.error('type is not right');
    return Promise.reject();
  }
  return message[type](content, duration, onClose);
};

const install = (Vue) => {
  Vue.prototype.$msg = msg;
};

export default install;

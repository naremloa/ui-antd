import { notification } from 'ant-design-vue';

const typeToIcon = {
  success: 'check-circle',
  info: 'info-circle',
  warning: 'exclamation-circle',
  error: 'close-circle',
};

const notify = () => {
  let timeoutId = null;
  let key = null;
  return ({
    title = '标题',
    message = '内容',
    duration = 4.5,
    // success, info, warning, error
    type = '',
    icon = '',
  } = {}) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (key) notification.close(key);
      key = `${new Date().getTime()}`;
      notification.open({
        key,
        message: title,
        duration,
        icon: icon || typeToIcon[type]
          ? (h) => h('fe-icon', { props: { type: icon || typeToIcon[type] } })
          : undefined,
        description: message,
      });
    }, 200);
  };
};

const install = (Vue) => {
  Vue.prototype.$notify = notify();
};

export default install;

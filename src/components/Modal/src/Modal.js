import { Modal } from 'ant-design-vue';

const modal = ({
  title = '标题',
  message = '内容',
  // success, info, warning, error, confirm
  type = '',
  ...rest
} = {}) => {
  if (!['success', 'info', 'warning', 'error', 'confirm'].includes(type)) {
    console.error('tyep is not right');
    return null;
  }
  const modalInstance = type === 'confirm'
    ? Modal[type]({
      title,
      content: message,
      ...rest,
    })
    : Modal[type]({
      title,
      content: message,
    });
  return modalInstance;
};

export default modal;

import { Modal } from 'ant-design-vue';

const modal = ({
  title = '标题',
  message = '内容',
  // success, info, warning, error
  type = '',
} = {}) => {
  if (!['success', 'info', 'warning', 'error'].includes(type)) {
    console.error('tyep is not right');
    return null;
  }
  const modalInstance = Modal[type]({
    title,
    content: message,
  });
  return modalInstance;
};

export default modal;

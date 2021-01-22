import Vue from 'vue';
import { isArray } from '@/utils/lodash';
import tmp from './ErrorMessage.vue';

const ErrorMessageCtor = Vue.extend(tmp);

let instance = null;

const ErrMessage = (options) => {
  if (instance) {
    console.log('check options', options);
    if (instance.visible && isArray(options.detailContent)) {
      instance.update(...options.detailContent);
    } else if (instance.visible === false) {
      instance.setOptions(options);
      instance.visible = true;
    }
    return instance;
  }
  instance = new ErrorMessageCtor({
    data: options,
  });
  instance.$mount();
  // document.body.appendChild(instance.$el);
  instance.visible = true;
  return instance;
};

export default ErrMessage;

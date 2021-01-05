import {
  ffInput, ffSelect, ffInputNumber, ffCheckbox, ffDatePicker,
} from './formatForm';

// const checkRequired = ({ prop }) => {
//   if (!prop) return new Error('prop is required');
//   return null;
// };

const fsItem = ({ hide = false, ...rest } = {}) => ({ ...rest, hide });

export const fsInput = (...params) => fsItem(ffInput(...params));

export const fsSelect = (...params) => fsItem(ffSelect(...params));

export const fsInputNumber = (...params) => fsItem(ffInputNumber(...params));

export const fsCheckbox = (...params) => fsItem(ffCheckbox(...params));

export const fsDatePicker = (...params) => fsItem(ffDatePicker(...params));

export const ffInput = ({
  prop = '',
  label = '',
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-input',
  formTypeEvent: 'change.value',
});
export const ffInputNumber = ({
  prop = '',
  label = '',
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-input-number',
  formTypeEvent: 'change',
});

export const ffInputPassword = ({
  prop = '',
  label = '',
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-input-password',
  formTypeEvent: 'change.value',
});
export const ffSelect = ({
  prop = '',
  label = '',
  options = [],
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-select',
  formTypeProps: {
    ...rest.formTypeProps,
    options,
  },
  formTypeEvent: 'change',
});
export const ffSwitch = ({
  prop = '',
  label = '',
  beforeChange,
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formTypeProps: {
    ...rest.formTypeProps,
    beforeChange,
  },
  formType: 'fe-switch',
  formTypeEvent: 'change',
});
<<<<<<< HEAD

export const ffDatePicker = ({
  prop = '',
  label = '',
=======
export const ffUpload = ({
  prop = '',
  label = '',
  // beforeChange,
>>>>>>> edit: ffUpload + FFInputNumber Ref. #5 #7
  ...rest
}) => ({
  ...rest,
  prop,
  label,
<<<<<<< HEAD
  formType: 'fe-date-picker',
=======
  formTypeProps: {
    ...rest.formTypeProps,
    // beforeChange,
  },
  formType: 'fe-upload',
>>>>>>> edit: ffUpload + FFInputNumber Ref. #5 #7
  formTypeEvent: 'change',
});

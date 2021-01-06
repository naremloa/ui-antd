export const ffInput = ({
  prop = '',
  label = '',
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-input',
  formTypeEvent: 'change',
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

export const ffText = ({
  prop = '',
  label = '',
  format = null,
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-text',
  formTypeProps: {
    format,
    ...rest.formTypeProps,
  },
});
export const ffTextarea = ({
  prop = '',
  label = '',
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-textarea',
  formTypeProps: {
    ...rest.formTypeProps,
  },
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
export const ffCheckbox = ({
  prop = '',
  label = '',
  options = [],
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-checkbox-group',
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

export const ffDatePicker = ({
  prop = '',
  label = '',
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-date-picker',
  formTypeEvent: 'change',
});

export const ffUpload = ({
  prop = '',
  label = '',
  // beforeChange,
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formTypeProps: {
    ...rest.formTypeProps,
    // beforeChange,
  },
  formType: 'fe-upload',
  formTypeEvent: 'change',
});

export const ffRadio = ({
  prop = '',
  label = '',
  options = [],
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-radio-group',
  formTypeProps: {
    ...rest.formTypeProps,
    options,
  },
  formTypeEvent: 'change',
});

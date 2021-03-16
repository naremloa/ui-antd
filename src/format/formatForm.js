const ffCommon = ({
  prop = '',
  label = '',
  ...rest
} = {}) => ({
  ...rest,
  prop,
  label,
});

export const ffInput = ({
  ...rest
}) => ({
  ...ffCommon(rest),
  formType: 'fe-input',
  formTypeEvent: 'change',
});
export const ffInputNumber = ({
  descriptionHeight = 0,
  ...rest
}) => ({
  ...ffCommon(rest),
  descriptionHeight,
  formTypeProps: {
    type: 'inputNumber',
    ...(rest.formTypeProps || {}),
  },
  formType: 'fe-input',
  formTypeEvent: 'change',
});

export const ffText = ({
  format = null,
  ...rest
}) => ({
  ...ffCommon(rest),
  formType: 'fe-text',
  formTypeProps: {
    format,
    ...rest.formTypeProps,
  },
});
export const ffTextarea = ({
  ...rest
}) => ({
  ...ffCommon(rest),
  formType: 'fe-textarea',
  formTypeProps: {
    ...rest.formTypeProps,
  },
  formTypeEvent: 'change',
});
export const ffInputPassword = ({
  ...rest
}) => ({
  ...ffCommon(rest),
  formType: 'fe-input-password',
  formTypeEvent: 'change',
});
export const ffSelect = ({
  options = [],
  ...rest
}) => ({
  ...ffCommon(rest),
  formType: 'fe-select',
  formTypeProps: {
    ...rest.formTypeProps,
    options,
  },
  formTypeEvent: 'change',
});
export const ffCheckbox = ({
  options = [],
  ...rest
}) => ({
  ...ffCommon(rest),
  formType: 'fe-checkbox-group',
  formTypeProps: {
    ...rest.formTypeProps,
    options,
  },
  formTypeEvent: 'change',
});
export const ffSwitch = ({
  beforeChange,
  ...rest
}) => ({
  ...ffCommon(rest),
  formTypeProps: {
    ...rest.formTypeProps,
    beforeChange,
  },
  formType: 'fe-switch',
  formTypeEvent: 'change',
});

export const ffDatePicker = ({
  ...rest
}) => ({
  ...ffCommon(rest),
  formType: 'fe-date-picker',
  formTypeEvent: 'change',
});

export const ffUpload = ({
  ...rest
}) => ({
  ...ffCommon(rest),
  formTypeProps: {
    ...rest.formTypeProps,
    // beforeChange,
  },
  formType: 'fe-upload',
  formTypeEvent: 'change',
});

export const ffRadio = ({
  options = [],
  ...rest
}) => ({
  ...ffCommon(rest),
  formType: 'fe-radio-group',
  formTypeProps: {
    ...rest.formTypeProps,
    options,
  },
  formTypeEvent: 'change',
});

export const ffButton = ({
  ...rest
}) => ({
  ...ffCommon(rest),
  formType: 'fe-button',
  formTypeProps: {
    ...rest.formTypeProps,
  },
  formTypeEvent: 'click',
});

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

export const ffInputPassword = ({
  prop = '',
  label = '',
  ...rest
}) => ({
  ...rest,
  prop,
  label,
  formType: 'fe-input-password',
  formTypeEvent: 'change',
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

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
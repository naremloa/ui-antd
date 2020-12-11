const checkRequired = ({ prop }) => {
  if (!prop) return new Error('prop is required');
  return null;
};

export const fsInput = ({
  label = '',
  prop = '',
  ...rest
}) => {
  const err = checkRequired({ prop });
  if (err) throw err;
  return {
    ...rest,
    label,
    prop,
    formType: 'input',
  };
};

export const fsSelect = ({
  prop = '',
  label = '',
  options = [],
  ...rest
}) => {
  const err = checkRequired({ prop });
  if (err) throw err;
  return {
    ...rest,
    prop,
    label,
    options,
    formType: 'select',
  };
};

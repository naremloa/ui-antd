export const fButton = ({
  // Boolean
  hasLoading = true,
  type = 'primary',
  ...rest
} = {}) => ({
  hasLoading,
  type,
  ...rest,
});

export const fPagination = ({
  current = 1,
  pageSize = 10,
  total = 0,
} = {}) => ({
  current,
  pageSize,
  total,
});

export const fSwitch = ({
  disabled,
  beforeChange,
  hasLoading,
  checkedChildren,
  unCheckedChildren,
  ...rest
} = {}) => ({
  ...rest,
  disabled,
  beforeChange,
  hasLoading,
  checkedChildren,
  unCheckedChildren,
});

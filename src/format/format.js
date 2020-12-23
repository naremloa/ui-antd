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

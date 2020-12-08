export const fPagination = ({
  current = 1,
  pageSize = 10,
  total = 0,
}) => ({
  current,
  pageSize,
  total,
});

export const fText = ({
  // Function(data, rowData)
  format = null,
  // String
  text = '',
  // Component
  slotComponent = null,
  // Object
  columnsStyle = {},
} = {}) => ({
  format,
  text,
  slotComponent,
  columnsStyle,
  align: 'center',
  columnType: 'text',
});

export const fButton = ({
  // Boolean
  hasLoading = true,
  // Function
  click = null,
  // Function
  format = null,
  text = '',
  type = 'primary',
  ...rest
} = {}) => ({
  hasLoading,
  click,
  format,
  text,
  type,
  ...rest,
  columnType: 'button',
});

export const fColumn = ({
  // String, required
  dataIndex = '',
  title = '',
  ...rest
} = {}) => (...cusColumns) => {
  if (cusColumns.length === 0) cusColumns = [fText()];
  return ({
    dataIndex,
    title,
    ...rest,
    cusColumns,
  });
};

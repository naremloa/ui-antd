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

export const fTextarea = ({
  defaultValue,
  autoSize,
  placeholder,
  ...rest
} = {}) => ({
  defaultValue,
  autoSize,
  placeholder,
  ...rest,
  columnType: 'textarea',
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

export const fSelect = ({
  disabled,
  showArrow,
  value,
  options,
  change,
  ...rest
} = {}) => ({
  ...rest,
  disabled,
  showArrow,
  value,
  options,
  change,
  columnType: 'select',
});

export const fSwitch = ({
  disabled,
  change,
  hasLoading,
  checkedChildren,
  unCheckedChildren,
  ...rest
} = {}) => ({
  ...rest,
  disabled,
  change,
  hasLoading,
  checkedChildren,
  unCheckedChildren,
  columnType: 'switch',
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

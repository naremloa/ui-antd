import dayjs from '@/utils/dayjs';

export const ftPagination = ({
  current = 1,
  pageSize = 10,
  total = 0,
} = {}) => ({
  current,
  pageSize,
  total,
});

export const ftText = ({
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

export const ftButton = ({
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

export const ftDate = ({
  dataIndex = '',
  ...rest
} = {}) => ftText({
  ...rest,
  format: (data, rowData) => {
    const date = dataIndex ? rowData[dataIndex] : data;
    if (!date) return '-';
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  },
});

export const ftColumn = ({
  // String, required
  dataIndex = '',
  title = '',
  ...rest
} = {}) => (...cusColumns) => {
  if (cusColumns.length === 0) cusColumns = [ftText()];
  return ({
    dataIndex,
    title,
    ...rest,
    cusColumns,
  });
};

export const fPagination = ({
  current = 1,
  pageSize = 10,
  total = 0,
} = {}) => ({
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

export const fDate = ({
  dataIndex = '',
  ...rest
} = {}) => ftText({
  ...rest,
  format: (data, rowData) => {
    const date = dataIndex ? rowData[dataIndex] : data;
    if (!date) return '-';
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  },
});

export const fColumn = ({
  // String, required
  dataIndex = '',
  title = '',
  ...rest
} = {}) => (...cusColumns) => {
  if (cusColumns.length === 0) cusColumns = [ftText()];
  return ({
    dataIndex,
    title,
    ...rest,
    cusColumns,
  });
};

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

export const ftSwitch = ({
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

export const ftSelect = ({
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

export const ftTextarea = ({
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

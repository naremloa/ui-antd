import dayjs from '@/utils/dayjs';

export const ftPagination = ({
  current = 1,
  pageSize = 10,
  total = 0,
}) => ({
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

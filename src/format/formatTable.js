import dayjs from '@/utils/dayjs';
import {
  fButton,
  fPagination,
  fSwitch,
} from './format';

export const ftPagination = fPagination;

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
  // Function
  click = null,
  // Function
  format = null,
  text = '',
  ...rest
} = {}) => ({
  click,
  format,
  text,
  ...(fButton(rest)),
  columnType: 'fe-column-button',
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
  // String, Object, Function
  header = null,
  ...rest
} = {}) => (...cusColumns) => {
  if (cusColumns.length === 0) cusColumns = [ftText()];
  return ({
    dataIndex,
    title,
    header,
    ...rest,
    cusColumns,
  });
};

export const ftSwitch = ({
  disabled,
  beforeChange,
  ...rest
} = {}) => ({
  ...fSwitch(rest),
  disabled,
  beforeChange,
  columnType: 'fe-column-switch',
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
  columnType: 'fe-column-select',
});

export const ftTextarea = ({
  autoSize,
  placeholder,
  ...rest
} = {}) => ({
  ...rest,
  autoSize,
  placeholder,
  columnType: 'fe-column-textarea',
});

export const ftInput = ({
  ...rest
} = {}) => ({
  ...rest,
  columnType: 'fe-column-input',
});

export const ftCheckbox = ({
  ...rest
} = {}) => ({
  ...rest,
  columnType: 'fe-column-checkbox',
});

import dayjs from '@/utils/dayjs';
import {
  fButton,
  fPagination,
  fSwitch,
} from './format';

export const ftPagination = fPagination;

const ftCommon = ({
  columnStyle = {},
  columnStatus = true,
} = {}) => ({
  columnStyle,
  columnStatus,
});

export const ftText = ({
  // Function(data, rowData)
  format = null,
  // String
  text = '',
  // Component
  slotComponent = null,
  ...rest
} = {}) => ({
  format,
  text,
  slotComponent,
  align: 'center',
  ...ftCommon(rest),
  columnType: 'fe-column-text',
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
  ...ftCommon(rest),
  ...(fButton(rest)),
  columnType: 'fe-column-button',
});

export const ftDate = ({
  dataIndex = '',
  unix = false,
  ...rest
} = {}) => ftText({
  ...ftCommon(rest),
  ...rest,
  format: (data, rowData) => {
    const date = dataIndex ? rowData[dataIndex] : data;
    if (!date) return '-';
    return (unix ? dayjs.unix(date) : dayjs(date)).format('YYYY-MM-DD HH:mm:ss');
  },
});

export const ftColumn = ({
  // String, required
  dataIndex = '',
  title = '',
  // String, Object, Function
  header = null,
  width = 100,
  // Object
  columnsStyle = {},
  ...rest
} = {}) => (...cusColumns) => {
  if (cusColumns.length === 0) cusColumns = [ftText()];
  return ({
    dataIndex,
    title,
    header,
    width,
    columnsStyle,
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
  ...ftCommon(rest),
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
  ...ftCommon(rest),
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
  ...ftCommon(rest),
  columnType: 'fe-column-textarea',
});

export const ftInput = ({
  ...rest
} = {}) => ({
  ...ftCommon(rest),
  ...rest,
  columnType: 'fe-column-input',
});

export const ftCheckbox = ({
  ...rest
} = {}) => ({
  ...ftCommon(rest),
  ...rest,
  columnType: 'fe-column-checkbox',
});

export const ftTag = ({
  ...rest
} = {}) => ({
  ...ftCommon(rest),
  ...rest,
  columnType: 'fe-column-tag',
});

export const ftPopover = ({
  trigger,
  content,
  text,
  format,
  btnType,
  ...rest
} = {}) => ({
  ...rest,
  trigger,
  content,
  text,
  format,
  btnType,
  ...ftCommon(rest),
  columnType: 'fe-column-popover',
});

import 'ant-design-vue/dist/antd.css';
import Button from './components/Button';
import * as Avatar from './components/Avatar';
import * as Tooltip from './components/Tooltip';
import * as Dropdown from './components/Dropdown';
import * as ExportDataBtn from './components/ExportDataBtn';
import * as Tabs from './components/Tabs';
import * as Layout from './components/Layout';
import * as Menu from './components/Menu';
import * as Icon from './components/Icon';
import * as Row from './components/Row';
import * as Col from './components/Col';
import * as Breadcrumb from './components/Breadcrumb';
import * as SearchGroup from './components/SearchGroup';
import * as Card from './components/Card';
import * as Radio from './components/Radio';
import * as DatePicker from './components/DatePicker';
import * as Input from './components/Input';
import * as InputList from './components/InputList';
import * as InputNumber from './components/InputNumber';
import * as Textarea from './components/Textarea';
import Form from './components/Form';
import * as Select from './components/Select';
import * as Checkbox from './components/Checkbox';
import * as Table from './components/Table';
import * as Tag from './components/Tag';
import * as Switch from './components/Switch';
import * as Collapse from './components/Collapse';
import Modal from './components/Modal';
import * as UploadButton from './components/UploadButton';
import * as Upload from './components/Upload';
// import * as Modal from './components/Modal';
import format from './format';

const components = {
  ...Layout,
  ...Avatar,
  ...Dropdown,
  ...Menu,
  ...Icon,
  ...Row,
  ...Col,
  ...Breadcrumb,
  ...SearchGroup,
  ...Card,
  ...Radio,
  ...DatePicker,
  ...Input,
  ...InputList,
  ...InputNumber,
  ...Textarea,
  ...Select,
  ...Checkbox,
  ...Table,
  ...Tag,
  ...Switch,
  ...Collapse,
  ...UploadButton,
  ...Upload,
  ...Tabs,
  ...Tooltip,
  ...ExportDataBtn,
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    console.log('install', key);
    Vue.component(key, components[key]);
  });
  Vue.use(Button);
  Vue.use(Modal);
  Vue.use(Form);
  Vue.prototype.$format = format;
};
const backstageUiAntd = () => {};

backstageUiAntd.install = install;

export default backstageUiAntd;

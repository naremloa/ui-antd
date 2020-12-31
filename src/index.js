import 'ant-design-vue/dist/antd.css';
import './styles/index.scss';
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
import SearchGroup from './components/SearchGroup';
import Card from './components/Card';
import * as Radio from './components/Radio';
import * as DatePicker from './components/DatePicker';
import Input from './components/Input';
import * as InputList from './components/InputList';
import * as InputNumber from './components/InputNumber';
import Textarea from './components/Textarea';
import Form from './components/Form';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import Table from './components/Table';
import * as Tag from './components/Tag';
import Switch from './components/Switch';
import * as Collapse from './components/Collapse';
import Modal from './components/Modal';
import * as UploadButton from './components/UploadButton';
import * as Upload from './components/Upload';
import * as Text from './components/Text';
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
  ...Radio,
  ...DatePicker,
  ...Input,
  ...InputList,
  ...InputNumber,
  ...Tag,
  ...Collapse,
  ...UploadButton,
  ...Upload,
  ...Tabs,
  ...Tooltip,
  ...ExportDataBtn,
  ...Text,
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    console.log('install', key);
    Vue.component(key, components[key]);
  });
  Vue.use(Button);
  Vue.use(Modal);
  Vue.use(Form);
  Vue.use(SearchGroup);
  Vue.use(Checkbox);
  Vue.use(Table);
  Vue.use(Card);
  Vue.use(Input);
  Vue.use(Select);
  Vue.use(Switch);
  Vue.use(Textarea);
  Vue.prototype.$format = format;
};
const backstageUiAntd = () => {};

backstageUiAntd.install = install;

export default backstageUiAntd;

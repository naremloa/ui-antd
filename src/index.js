import 'ant-design-vue/dist/antd.css';
import Button from './components/Button';
import * as Avatar from './components/Avatar';
import * as Tooltip from './components/Tooltip';
import * as Dropdown from './components/Dropdown';
import * as ExportDataBtn from './components/ExportDataBtn';
import * as Tabs from './components/Tabs';
import Layout from './components/Layout';
import Menu from './components/Menu';
import Icon from './components/Icon';
import Row from './components/Row';
import Col from './components/Col';
import Breadcrumb from './components/Breadcrumb';
import SearchGroup from './components/SearchGroup';
import Card from './components/Card';
import Radio from './components/Radio';
import DatePicker from './components/DatePicker';
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
import UploadButton from './components/UploadButton';
import Upload from './components/Upload';
import Text from './components/Text';
import Notify from './components/Notify';
import Message from './components/Message';
import Title from './components/Title';
import Space from './components/Space';
import AddButton from './components/AddButton';
import format from './format';
import './styles/index.scss';

const components = {
  ...Avatar,
  ...Dropdown,
  ...InputList,
  ...InputNumber,
  ...Tag,
  ...Collapse,
  ...Tabs,
  ...Tooltip,
  ...ExportDataBtn,
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    console.log('install', key);
    Vue.component(key, components[key]);
  });
  Vue.use(Menu);
  Vue.use(Layout);
  Vue.use(Breadcrumb);
  Vue.use(Col);
  Vue.use(Row);
  Vue.use(Upload);
  Vue.use(Icon);
  Vue.use(Text);
  Vue.use(UploadButton);
  Vue.use(DatePicker);
  Vue.use(AddButton);
  Vue.use(Space);
  Vue.use(Title);
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
  Vue.use(Radio);
  Vue.use(Notify);
  Vue.use(Message);
  Vue.prototype.$format = format;
};
const backstageUiAntd = () => {};

backstageUiAntd.install = install;

export default backstageUiAntd;

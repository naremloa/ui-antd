import Button from './components/Button';
import Avatar from './components/Avatar';
import Tooltip from './components/Tooltip';
import Dropdown from './components/Dropdown';
import ExportDataBtn from './components/ExportDataBtn';
import Tabs from './components/Tabs';
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
import InputList from './components/InputList';
import Textarea from './components/Textarea';
import Form from './components/Form';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import Table from './components/Table';
import Tag from './components/Tag';
import Switch from './components/Switch';
import Collapse from './components/Collapse';
import Modal from './components/Modal';
import UploadButton from './components/UploadButton';
import Upload from './components/Upload';
import Text from './components/Text';
import Notify from './components/Notify';
import Message from './components/Message';
import Title from './components/Title';
import Space from './components/Space';
import AddButton from './components/AddButton';
import ConfigProvider from './components/ConfigProvider';
import format from './format';
import './styles/index.less';

const install = (Vue) => {
  Vue.use(Avatar);
  Vue.use(Dropdown);
  Vue.use(Tag);
  Vue.use(ExportDataBtn);
  Vue.use(Tooltip);
  Vue.use(Collapse);
  Vue.use(InputList);
  Vue.use(Tabs);
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
  Vue.use(ConfigProvider);
  Vue.prototype.$format = format;
};
const backstageUiAntd = () => {};

backstageUiAntd.install = install;

export default backstageUiAntd;

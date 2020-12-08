import 'ant-design-vue/dist/antd.css';
import * as Button from './components/Button';
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
import * as Form from './components/Form';
import * as Select from './components/Select';
import * as Checkbox from './components/Checkbox';
import * as Table from './components/Table';
import * as Tag from './components/Tag';
import Modal from './components/Modal';
// import * as Modal from './components/Modal';

const components = {
  ...Button,
  ...Layout,
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
  ...Form,
  ...Select,
  ...Checkbox,
  ...Table,
  ...Tag,
  ...Modal,
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    console.log('install', key);
    Vue.component(key, components[key]);
  });
  Vue.use(Modal);
};
const backstageUiAntd = () => {};

backstageUiAntd.install = install;

export default backstageUiAntd;

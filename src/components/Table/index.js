import Card from '@/components/Card';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Select from '@/components/Select';
import Switch from '@/components/Switch';
import Textarea from '@/components/Textarea';
import Checkbox from '@/components/Checkbox';
import Tag from '@/components/Tag';
import * as Table from './src';

const install = (Vue) => {
  Vue.use(Card);
  Vue.use(Button);
  Vue.use(Checkbox);
  Vue.use(Input);
  Vue.use(Select);
  Vue.use(Switch);
  Vue.use(Textarea);
  Vue.use(Tag);
  Object.keys(Table).forEach((name) => Vue.component(name, Table[name]));
};

export default install;

<script>
import { Layout } from 'ant-design-vue';
import genRender from '@/utils/genRender';

console.log('Layout', Layout.name);

const [data] = genRender({ name: 'Layout', comp: Layout });
export default data;
</script>

<script>
import { ConfigProvider as AConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
  name: 'FeConfigProvider',
  components: { AConfigProvider },
  render(h) {
    return h(
      'a-config-provider',
      { props: { locale: zhCN } },
      this.$slots.default,
    );
  },
};
</script>

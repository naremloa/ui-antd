# `backstage-ui-antd`

> UI library, based on ant-design-vue


## 基本資訊
TODO: link to dashboard

## Usage

```
...
import backstageUi from 'backstage-ui';
...

Vue.use(backstageUi);
```

## 開發事項

### Icon
已覆寫 `ant-design-vue` 的 Icon 引用路徑。覆寫的檔案路徑為 `@/utils/antdIcon.js` 。如果原組件有相應 Icon 未在這邊手動引入，會抓不到樣式。

### Playground
Playground 的位置跑在 `/dev` 底下。

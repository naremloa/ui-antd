# `@fe-backstage/ui-antd`
> UI library, based on ant-design-vue

## 基本資訊
TODO: link to dashboard

## 使用

```
...
import uiAntd from '@fe-backstage/ui-antd';
...

Vue.use(uiAntd);
```

## 開發事項

### 開發指令
```sh
yarn install
yarn dev
```

### Icon
已覆寫 `ant-design-vue` 的 Icon 引用路徑。覆寫的檔案路徑為 `@/utils/antdIcon.js` 。如果原組件有相應 Icon 未在這邊手動引入，會抓不到樣式。

### Playground
Playground 的位置跑在 `/dev` 底下。

## 發布事項

### 發布指令
```
yarn build:prod
```


## 需求
### Button
1. 內部可以接 TimerStorage 做定時的 disabled

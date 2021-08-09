# `@fe-backstage/ui-antd`
> UI library, based on ant-design-vue

## 使用

```
import Vue from 'vue';
import uiAntd from '@fe-backstage/ui-antd';

Vue.use(uiAntd);
```

## 開發事項

## 發佈
### 構建發佈版本
1. 先對當前已修改的內容做一個 commit 。
2. 執行 `yarn build:prod` 構建發佈版本，並修改 `package.json` 裡的 `version` 字段。為這個版本發佈提交一次 commit 。
3. 在當前這個新的發佈版本的 commit 上打上版本 `tag` 。建議 `tag` 跟 `version` 保持一致。

## 開發
### 啟動開發環境
```sh
yarn dev
```
### 目錄結構
```
|- build # webpack 構建配置
|- dev # 構建開發環境必要內容和一些 Playground，已寫好一些使用 UI 庫構建的畫面
|- lib # 發佈版本內容
|- package.json
|- utils
|---|
|   |- antdIcon.js # 因為原 Icon 的引入已被這隻檔案覆寫，
|                    所以在使用一些組件，或是一些文檔上有的 icon
|                    但畫面沒有出現時間，就需要來這邊補上
|- src
|---|
    |- components # 放置 UI 庫各個組件
    |- format # 放置一些提前寫好的工具函式，減輕使用部分 UI 庫組件時的麻煩
    |- styles # 放置 less 變數和一些客製化的樣式。
    |           如果使用 UI 庫的專案需要對 less 變數進行改動，
    |           也是直接從引用這個目錄底下的 index.less ，
    |           再對需要改動的變數做覆寫。
    |- index.js # 將各個組件統一進行註冊。使用的專案只要通過 Vue.use
                  就能輕鬆使用這些寫的所有組件
```

## 部分組件使用說明

## FeTable

### ftColumn
```js
export default {
  data() {
    const {
      ftText,
      ftColumn,
    } = this.$format;
    return {
      columns: [
        ftColumn({ dataIndex: 'ID', title: '广告编号' })(),
        ftColumn({
          dataIndex: 'count',
          header: (h) => h('div', [
            h('div', '剩余数量'),
            h('div', '当前下单冻结数量'),
          ]),
          width: 145,
        })(
          ftText({ format: (data) => `${data} 單` }),
      ],
    }
  },
}
```
可以直接到 formatTable.js 中看， `ftColumn` 本身主要是來補足 `dataIndex` 字段。表頭的部分可選用 `title` 的方式單純顯示文字，或是 `header` 這種較為複雜的 render 模式來做客製化。 `ftColumn` 返回的函式如果直接執行，等同於直接塞上 `ftText()`

### 編輯模式的 Table
```html
<template>
  <fe-table
    ref="Table"
    :columns="columns"
    :form="true"
    @submit="handleTableSubmit" />
  <fe-button @click="handleSubmit">提交</fe-button>
</template>
<script>
export default {
  data() {
    const { ftColumn, ftInput } = this.$format;
    return {
      columns: [
        ftColumn({
          dataIndex: 'FiatRateLowerLimit',
          title: '法币价格下限比例',
        })(
          ftInput({
            type: 'inputNumber',
            rules: (localRowData) => [
              { required: true, message: '请输入法币价格下限比例', trigger: 'change' },
              {
                validator: (_, value, cb) => {
                  const upper = localRowData?.FiatRateUpperLimit;
                  if (!upper) return cb();
                  if (upper < value) cb('不能大于上限比例，请修正');
                  return cb();
                },
              },
            ],
            precision: 2,
            min: 0.00,
            max: 1000.00,
            style: 'width: 200px;',
            formatter: (value) => (value ? `${value}%` : value),
            parser: (value) => `${value}`.replace('%', ''),
          }),
        ),
      ],
    }
  },
  methods: {
    handleSubmit() { this.$refs.Table?.submit?.(); },
    handleTableSubmit(dataSource) {},
  },
}
</script>
```
注意，如果 `FeTable` 要開啟編輯模式 `:form="true"` 這個 `props` 記得要打開，才會啟用內部更新值的通道。另外，如果要拿取 `FeTable` 裡面改動後的值，需要手動執行 `FeTable` 的 `submit` 方法。如果列表裡的表單項都驗證通過，才會觸發 `submit` 事件，也就是執行我們綁定的 `handleTableSubmit` 函式。

### 客製化的表單項
```js
import ColumnMemo from './ColumnMemo.vue';
export default {
  data() {
    return {
      columns: [
        ftColumn({ dataIndex: 'note', title: '备注' })(
          {
            columnType: ColumnMemo,
            updateFunc: updateFinanceTransactionNoteAPI,
            reSearchFunc: this.handleChange,
          },
        ),
      ],
    }
  }
}
```
決定我們列表項渲染的項目，最終是通過 `columnType` 字段來決定的，以 `ftInput` 為例子，實際上它是產出 `{ columnType: 'fe-column-input' }` 來決定渲染的是 `Input` 。 `columnType` 除了接受 `String` 以外，還接受組件。另外，上述的 `updateFunc` 和 `reSearchFunc` 會作為 `props` 傳入你放在 `columnType` 位置上的組件。

## FeSearchGroup
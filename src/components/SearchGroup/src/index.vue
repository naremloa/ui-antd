<template>
  <div class="fe-search-group">
    <fe-card>
      <fe-row type="flex">
        <fe-col :flex="1">
          <fe-radio-group
            v-model="radioValue"
            button-style="solid">
            <fe-radio-button :value="1">
              當日
            </fe-radio-button>
            <fe-radio-button :value="7">
              前七天
            </fe-radio-button>
            <fe-radio-button :value="30">
              前三十天
            </fe-radio-button>
          </fe-radio-group>
        </fe-col>
        <fe-col :flex="2">
          <fe-range-picker
            v-model="datePickerValue"
            separator="到"
            :show-tiem="{ format: 'HH:mm:ss' }"
            format="YYYY-MM-DD HH:mm:ss"
            :placeholder="['開始時間', '結束時間']"
            value-format="YYYY-MM-DD HH:mm:ss"
            @change="onChange"
            @ok="onOk" />
        </fe-col>
      </fe-row>
      <fe-form
        :model="form"
        layout="inline">
        <fe-form-item label="測試">
          <fe-input v-model="form.inputValue" />
        </fe-form-item>
        <fe-form-item label="測試">
          <fe-input v-model="form.inputValue" />
        </fe-form-item>
        <fe-form-item label="測試">
          <fe-input v-model="form.inputValue" />
        </fe-form-item>
        <fe-form-item label="測試">
          <fe-input v-model="form.inputValue" />
        </fe-form-item>
        <fe-form-item label="測試select">
          <fe-select
            v-model="form.selectValue"
            :options="[{ value: 1, label: '測試1' }, { value: 2, label: '測試2', disabled: true }]" />
        </fe-form-item>
        <fe-form-item label="測試 checkbox">
          <fe-checkbox-group
            v-model="form.checkboxValue"
            :options="checkboxOptions" />
        </fe-form-item>
      </fe-form>
      <fe-row
        type="flex"
        justify="end">
        <fe-col><fe-button>清除條件</fe-button></fe-col>
        <fe-col>
          <fe-button
            type="primary"
            :has-loading="true"
            @click="search">
            搜索
          </fe-button>
        </fe-col>
      </fe-row>
    </fe-card>
  </div>
</template>
<script>
import { FeCard } from '@/components/Card';
import { FeRadioButton, FeRadioGroup } from '@/components/Radio';

export default {
  name: 'FeSearchGroup',
  components: { FeCard, FeRadioButton, FeRadioGroup },
  data() {
    return {
      radioValue: 1,
      datePickerValue: [],
      form: {
        inputValue: '',
        selectValue: '',
        checkboxValue: [],
      },
      checkboxOptions: [
        { label: 'Apple', value: 'Apple' },
        // { label: 'Pear', value: 'Pear' },
        // { label: 'Orange', value: 'Orange' },
      ],
    };
  },
  methods: {
    onChange(value, dateString) {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    },
    onOk(value) {
      console.log('onOk: ', value);
    },
    async search() {
      console.log('click');
    },
  },
};
</script>

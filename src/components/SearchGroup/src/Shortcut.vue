<template>
  <fe-row class="date-shortcut">
    <!-- radio -->
    <fe-row v-if="typeOptions && typeOptions.length">
      <fe-radio-group
        v-model="type"
        :options="typeOptions" />
    </fe-row>
    <fe-row
      v-else-if="label"
      style="color: rgba(0, 0, 0, 0.85); margin-bottom: 5px">
      {{ label }}
    </fe-row>

    <!-- 日期 shortcut -->
    <div class="date-select-wrapper">
      <div class="date-select-wrapper__shortcut">
        <fe-radio-group
          v-model="shortcutValue"
          button-style="solid">
          <fe-radio-button
            v-for="item in shortcutSetting.options"
            :key="item.value"
            :value="item.value">
            {{ item.label }}
          </fe-radio-button>
        </fe-radio-group>
      </div>
      <transition-collapse>
        <div
          v-show="!collapse"
          class="date-select-wrapper__detail">
          <fe-space>
            <fe-date-picker
              v-model="startDay"
              value-format="YYYY-MM-DD" />
            <fe-time-picker
              v-model="startTime"
              value-format="HH:mm:ss" />
            <div style="line-height: 32px">
              到
            </div>
            <fe-date-picker
              v-model="endDay"
              placeholder="开始时间"
              value-format="YYYY-MM-DD" />
            <fe-time-picker
              v-model="endTime"
              placeholder="结束时间"
              value-format="HH:mm:ss" />
          </fe-space>
        </div>
      </transition-collapse>
    </div>
  </fe-row>
</template>
<script>
import { isNil } from '@/utils/lodash';
import { getLatestDayTimeByNow } from '@/utils/tool';
import TransitionCollapse from './TransitionCollapse.vue';

export default {
  name: 'DateShortcut',
  components: { TransitionCollapse },
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
    typeOptions: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    shortcutDefault: {
      type: Number,
      default: 6,
      validator(val) {
        return [0, 6, 29].includes(val);
      },
    },
  },
  data() {
    return {
      startDay: '',
      startTime: '',
      endDay: '',
      endTime: '',
      type: undefined,
      shortcutValue: this.shortcutDefault,
      shortcutSetting: {
        options: [
          { value: 0, label: '当日' },
          { value: 6, label: '前 7 天' },
          { value: 29, label: '前 30 天' },
        ],
      },
    };
  },
  computed: {
    shortcutTime() {
      const dayAndTime = [
        `${this.startDay} ${this.startTime}`,
        `${this.endDay} ${this.endTime}`,
      ];
      if (!this.typeOptions?.length) return dayAndTime;
      return {
        type: this.type,
        date: dayAndTime,
      };
    },
  },
  watch: {
    shortcutValue(newVal) {
      if (!isNil(newVal)) this.handleLatestDayTime(newVal);
    },
    typeOptions: {
      handler(newVal) {
        if (newVal?.length) {
          const [{ value }] = newVal;
          this.type = value;
        }
      },
      immediate: true,
    },
  },
  created() { this.handleLatestDayTime(this.shortcutDefault); },
  methods: {
    handleLatestDayTime(shortcut) {
      const [
        { day: startDay, time: startTime },
        { day: endDay, time: endTime },
      ] = getLatestDayTimeByNow(shortcut);
      this.startDay = startDay;
      this.startTime = startTime;
      this.endDay = endDay;
      this.endTime = endTime;
    },
    reset() {
      if (this.shortcutDefault) {
        this.handleLatestDayTime(this.shortcutDefault);
        this.shortcutValue = this.shortcutDefault;
      }
    },
    output() { return this.shortcutTime; },
  },
};
</script>

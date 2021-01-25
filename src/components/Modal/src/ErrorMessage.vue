<template>
  <fe-modal
    v-model="visible"
    width="small">
    <div>
      <fe-row
        type="flex"
        justify="center"
        align="middle"
        style="margin-bottom: 50px;">
        <fe-icon
          class="error-icon"
          type="close-circle"
          theme="filled" />
        <span class="message-text">{{ message }}</span>
      </fe-row>
      <fe-row
        type="flex"
        justify="center"
        style="margin-bottom: 20px">
        <fe-space>
          <fe-button @click="detail = !detail">
            <span>详细资料</span>
            <fe-icon
              v-if="!detail"
              type="down" />
            <fe-icon
              v-else
              type="up" />
          </fe-button>
          <fe-button
            type="primary"
            @click="handleConfirm">
            {{ confirmText }}
          </fe-button>
        </fe-space>
      </fe-row>
      <div
        v-show="detail"
        class="detail-content">
        <div
          v-for="(item, iIdx) in detailContent"
          :key="iIdx">
          <template v-if="typeof item === 'string'">
            <div>{{ item }}</div>
          </template>
          <template v-else>
            <div
              v-for="(subItem, sIdx) in item"
              :key="`${iIdx}-${sIdx}`">
              <template v-if="item.length">
                {{ subItem }}
              </template>
              <template v-else>
                {{ sIdx }} : {{ subItem }}
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  </fe-modal>
</template>
<script>
import { isArray } from '@/utils/lodash';

export default {
  name: 'ErrorMessage',
  data() {
    return {
      timeoutId: null,
      visible: false,
      detail: false,
      message: '系统错误，请稍后再试，或与客服人员联系',
      confirmText: '确认',
      detailContent: [],
      duration: 5000,
    };
  },
  watch: {
    visible(newVal) {
      if (newVal && this.duration) {
        if (this.timeoutId) return;
        this.timeoutId = setTimeout(() => {
          this.visible = false;
          this.timeoutId = null;
        }, this.duration);
      } else if (newVal === false) {
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
          this.timeoutId = null;
        }
        this.detail = false;
        this.message = '系统错误，请稍后再试，或与客服人员联系';
        this.confirmText = '确认';
        this.detailContent.splice(0);
        this.delay = 5000;
      }
    },
  },
  methods: {
    open() { this.visible = true; },
    close() { this.visible = false; },
    handleConfirm() {
      // this.$msg({ duration: 2, message: 'message test!!' });
      // console.log('$msg', this.$msg);
      this.visible = false;
    },
    update(...params) {
      if (isArray(this.detailContent)) {
        this.detailContent = [...params, ...this.detailContent];
      }
    },
    setOptions(options) {
      Object.keys(options).forEach((key) => {
        if (['message', 'confirmText', 'delay'].includes(key)) {
          this[key] = options[key];
        } else if (key === 'detailContent') {
          this.update(...options[key]);
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/init/color.less";

.error-icon {
  display: inline-block;
  font-size: 20px;
  color: @c-error-icon;
}

.message-text {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  margin-left: 10px;
}

.detail-content {
  border-radius: 1px;
  background-color: rgba(#000, 0.03);
  height: 164px;
  box-sizing: border-box;
  padding: 10px;
  color: #333333;
  overflow: auto;
  > div:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }
}
</style>

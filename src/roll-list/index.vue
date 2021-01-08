<template>
  <div class="roll-list-wap">
    <div class="roll-list" ref="realBox" :style="pos">
      <div ref="slotList" :style="{ overflow: 'hidden' }">
        <div class="roll-item" v-for="(item, index) in data" :key="index">
          <span class="text">{{ label ? label : item[keys.text] }}</span>
          <span class="value">{{ item[keys.value] }}</span>
        </div>
      </div>
      <div v-html="copyHtml" :style="{ overflow: 'hidden' }"></div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs, ref, nextTick } from 'vue';

function _move(state) {
  state.reqFrame = requestAnimationFrame(() => {
    const h = state.realBoxHeight / 2; // 实际高度
    if (Math.abs(state.yPos) >= h) {
      state.yPos = 0;
    }
    state.yPos -= state.step;
    if (state.singleWaitTime) clearTimeout(state.singleWaitTime);
    if (Math.abs(state.yPos) % state.realSingleStopHeight < state.step) {
      // 等待 waitTime
      state.singleWaitTime = setTimeout(() => {
        _move(state);
      }, state.waitTime);
    } else {
      _move(state);
    }
  });
}

function _initMove(state, slotList, realBox) {
  nextTick().then(() => {
    state.copyHtml = '';
    state.copyHtml = slotList.value.innerHTML;
    setTimeout(() => {
      state.realBoxHeight = realBox.value.offsetHeight;
      _move(state);
    }, 0);
  });
}

function _cancel(reqFrame) {
  cancelAnimationFrame(reqFrame || '');
}

function _reset(state, slotList, realBox) {
  _cancel(state.reqFrame);
  _initMove(state, slotList, realBox);
}

export default {
  name: 'RollList',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    keys: {
      type: Object,
      default: () => ({
        text: 'text',
        value: 'value',
      }),
    },
  },
  setup(props) {
    const state = reactive({
      copyHtml: '',
      xPos: 0,
      yPos: 0,
      ease: 'ease-in',
      delay: 0,
      waitTime: 1000,
      realSingleStopHeight: 35,
      step: 1,
      reqFrame: null,
      singleWaitTime: null,
    });

    const slotList = ref(null);
    const realBox = ref(null);

    const pos = computed(() => ({
      transform: `translate(${state.xPos}px, ${state.yPos}px)`,
      transition: `all ${state.ease} ${state.delay}ms`,
      overflow: 'hidden',
    }));

    if (props.data.length) {
      _reset(state, slotList, realBox);
    }

    return { pos, slotList, realBox, ...toRefs(state) };
  },
  beforeCreate() {
    this.reqFrame = null;
    this.singleWaitTime = null;
  },
  beforeUnmount() {
    _cancel(this.reqFrame);
    clearTimeout(this.singleWaitTime);
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>

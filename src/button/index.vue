<template>
  <button class="btn btn-normal" :class="`btn-${type}`">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'primary',
        validate: value => {
          return ['primary', 'error'].includes(value);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
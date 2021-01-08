<template>
  <div class="demo-home-nav__title">
    <h2 class="demo-home-nav__title">按钮组</h2>
    <Button>默认按钮</Button>
    <Button type="error">警告按钮</Button>
  </div>
</template>

<script>
import Button from '../index';

export default {
  name: 'Demo',
  components: {
    Button,
  },
};
</script>

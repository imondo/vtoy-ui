<template>
  <div>
    <h2 class="demo-home-nav__title">循环滚动列表</h2>
    <RollList :data="list" />
  </div>
</template>

<script>
import RollList from '../index';

export default {
  name: 'Demo',
  components: {
    RollList,
  },
  data() {
    return {
      list: [
        {
          text: '第一行',
          value: '循环滚动列表'
        },
        {
          text: '第二行',
          value: '循环滚动列表'
        },
        {
          text: '第三行',
          value: '循环滚动列表'
        },
        {
          text: '第四行',
          value: '循环滚动列表'
        },
        {
          text: '第五行',
          value: '循环滚动列表'
        },
        {
          text: '第六行',
          value: '循环滚动列表'
        },
        {
          text: '第七行',
          value: '循环滚动列表'
        },
        {
          text: '第八行',
          value: '循环滚动列表'
        },
        {
          text: '第九行',
          value: '循环滚动列表'
        }
      ]
    }
  },
};
</script>

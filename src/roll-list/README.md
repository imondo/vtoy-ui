# RollList 循环滚动列表

### 介绍

循环滚动列表，用于循环滚动新闻或者是消息。

### 引入

```js
import { createApp } from 'vue';
import { RollList } from 'vue3-demo-ui';

const app = createApp();
app.use(RollList);
```

## 代码演示

### 基础用法

```html
<RollList :data="list" />
```

```js
export default {
  data() {
    return {
      list: [
        {
          text: '第一行',
          value: '循环滚动列表',
        },
        {
          text: '第二行',
          value: '循环滚动列表',
        },
        {
          text: '第三行',
          value: '循环滚动列表',
        },
        {
          text: '第四行',
          value: '循环滚动列表',
        },
        {
          text: '第五行',
          value: '循环滚动列表',
        },
        {
          text: '第六行',
          value: '循环滚动列表',
        },
        {
          text: '第七行',
          value: '循环滚动列表',
        },
        {
          text: '第八行',
          value: '循环滚动列表',
        },
        {
          text: '第九行',
          value: '循环滚动列表',
        },
      ],
    };
  },
};
```

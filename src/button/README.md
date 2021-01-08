# Button 按钮

### 介绍

按钮用于触发操作。

### 引入

```js
import { createApp } from 'vue';
import { Button } from 'vue3-demo-ui';

const app = createApp();
app.use(Button);
```

## 代码演示

### 按钮类型

按钮支持 primary、error 两种类型，默认为 primary。

```html
<button type="primary"></button>
<button type="error"></button>
```

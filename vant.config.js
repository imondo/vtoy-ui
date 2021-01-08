module.exports = {
  // 组件库名称
  name: 'vtoy-ui',
  // 构建配置
  build: {
    site: {
      publicPath: '/vtoy-ui/',
    },
  },
  // 文档站点配置
  site: {
    // 标题
    title: 'Vue 3.0 toy UI',
    // 图标
    logo: 'https://imondo.cn/files/logo.png',
    // 描述
    description: '示例组件库',
    // 左侧导航
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'roll-list',
            title: 'RollList 循环滚动列表',
          },
        ],
      },
    ],
  },
};
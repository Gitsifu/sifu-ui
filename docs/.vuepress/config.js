module.exports = {
  base: '/sifu-ui/',
  title: 'sifu-ui',
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: '最后更新时间',
    activeHeaderLinks: true,
    nav: [
      {text: '首页', link: '/'},
      {text: '组件', link: '/guide/'},
      {text: 'GitHub', link: 'https://github.com/Gitsifu/sifu-ui'},
    ],
    sidebar: {
      '/guide/': [
        {
          title: '开发指南',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            'install', 'quick-start', 'i18n', 'custom-theme'
          ]
        },
        {
          title: '组件',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            'components/button',
            {
              title: '基础组件',
              collapsable: false,
              children: [
                'control/layer-list',
              ]
            }
          ]
        }
      ]
    }
  }
}
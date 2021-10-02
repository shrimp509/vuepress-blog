module.exports = {
  title: 'Relacs Studio',
  description: 'This is a blog example built by VuePress',
  theme: '@vuepress/blog',
  themeConfig: {
    logo: '/img/logo.png',
    dateFormat: 'YYYY-MM-DD',
    nav: [
      { text: '|', link: '/' },
      { text: '所有系列', link: '/tag/series/' },
      { text: '替自己爭取自由', link: '/tag/freedom/' },
      { text: '|', link: '/' },
      { text: '後端', link: '/tag/backend/' },
      { text: '前端', link: '/tag/frontend/' },
      { text: '|', link: '/' },
      { text: '關於我', link: 'https://imrongson.com' }
    ],
    directories:[
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
      },
    ],
    footer: {
      copyright: [
        {
          text: 'Copyright © 2021 RelacsStudio',
        },
      ],
    },
    globalPagination: {
      lengthPerPage: 3,
    },
    summary: false,
  },
}

module.exports = {
    lang: 'zh-CN',
    title: 'Journey',
    description: 'vuepress 2.0',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    dest: 'dist',
    // plugins: ['@vuepress/blog'],
    themeConfig: {
        contributors: false,
        lastUpdatedText:'上次更新',
        repo: 'https://github.com/18437951091/vuepress-starter',
        docsRepo: 'https://github.com/18437951091/vuepress-starter',
        docsBranch: 'main',
        docsDir: 'docs',
        editLink: true,
        editLinkText:'在Github中编辑此页',
        // https://github.com/18437951091/vuepress-starter/edit/main/docs/guide/README.md
        editLinkPattern: ':repo/edit/:branch/:path',
        // type: 'blog',
        logo: '/images/logo.png',
        sidebar:require('./sidebarConfigArray.js'),
        navbar: [
            // NavbarItem
            {
                text: '体系',
                link: '/system/',
            },
            // NavbarGroup
            {
                text: 'Guide',
                children: [{
                        text: 'foo',
                        link: '/guide/foo.md'
                    },
                    {
                        text: 'bar',
                        link: '/guide/bar.md'
                    },
                ],
            },
            // 字符串 - 页面文件路径
            // '/bar/README.md',
        ],
    },
}
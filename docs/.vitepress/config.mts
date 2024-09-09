import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "N&A Team",
  srcDir: '../src',
  appearance: 'force-dark',
  cleanUrls:true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'CTF入门指北', link: 'CTF_Fields/' },
      { text: '赛事', link: 'Game' },
      { text: '团队介绍', link: '/team' },
      { text: '成就', link: '/achieves' },
    ],

    sidebar: {
      '/CTF_Fields/': [
        {
          items: [{text:'Intro',link:'/CTF_Fields/'}]
        },
        {
          text: 'WEB',
          collapsed: true,
          items: [
            { text: '概述', link: '/CTF_Fields/WEB/' },
            { text: 'web指北', link: '/CTF_Fields/WEB/ctf-web' },
          ]
        }, {
          text: 'PWN',
          collapsed: true,
          items: [
            { text: '概述', link: '/CTF_Fields/PWN/' },
            { text: 'pwn指北', link: '/CTF_Fields/PWN/ctf-pwn' },
          ]
        }, {
          text: 'REVERSE',
          collapsed: true,
          items: [
            { text: '概述', link: '/CTF_Fields/REVERSE/' },
            { text: 're指北', link: '/CTF_Fields/REVERSE/ctf-re' },
          ]
        }, {
          text: 'MISC',
          collapsed: true,
          items: [
            { text: '概述', link: '/CTF_Fields/MISC/' },
            { text: 'misc指北', link: '/CTF_Fields/MISC/ctf-misc' },
          ]
        }, {
          text: 'CRYPTO',
          collapsed: true,
          items: [
            { text: '概述', link: '/CTF_Fields/CRYPTO' },
            { text: 'crypto指北', link: '/CTF_Fields/CRYPTO/ctf-crypto' },
          ]
        }, {
          items: [
            { text: '参考资料', link: '/CTF_Fields/参考资料' },
          ]
        }
      ],
      '/Game/': []
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mick0960/NATeam-WIKI' }
    ]
  }
})

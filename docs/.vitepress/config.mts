import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "N&A Team",
  srcDir: '../src',
  appearance:'force-dark',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'CTF', link: 'CTF_Fields/CTF' },
      { text: '团队', link: '/team' }
    ],

    sidebar: {
      '/CTF_Fields/':[
      {
        text:'WEB'
      },
    ]},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mick0960/NATeam-WIKI' }
    ]
  }
})

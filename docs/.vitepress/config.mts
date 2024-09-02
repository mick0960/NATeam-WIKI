import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "N&A Team",
  srcDir: '../src',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'CTF', link: '/CTF' },
      { text: '团队', link: '/team' }
    ],

    sidebar: [
      {
        
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mick0960/NATeam-WIKI' }
    ]
  }
})

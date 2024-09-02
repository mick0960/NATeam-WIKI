import { defineConfig } from 'vitepress'

<<<<<<< HEAD
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "N&A Team",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: '/team' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    darkModeSwitchLabel: 'AAA',
=======
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
>>>>>>> dev
  }
})

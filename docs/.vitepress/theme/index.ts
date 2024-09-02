// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'element-plus/dist/index.css'
import elementplus from 'element-plus'
import './style.css'
import HomeLayout from "./HomeLayout.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 引入element-plus组件库
    app.use(elementplus)
    app.component('HomeLayout', HomeLayout)
  },
} satisfies Theme
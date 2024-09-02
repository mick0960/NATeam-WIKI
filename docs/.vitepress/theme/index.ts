// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'element-plus/dist/index.css'
import elementplus from 'element-plus'
import './style.css'
import HomeLayout from "./HomeLayout.vue";
import PageRebuild from "./PageRebuild.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 引入element-plus组件库
    app.use(elementplus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    // 引入自定义组件
    app.component('HomeLayout', HomeLayout)
    app.component('PageRebuild', PageRebuild)
  },
} satisfies Theme
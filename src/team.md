---
layout: page
sidebar: false
---

<script lang='ts' setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const nuc1ear = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/42170621?v=4',
    name: 'mick0960',
    title: 'Captain',
    org: 'NuC1ear',
    orgLink: '#',
    desc: 'PWN&RE',
    links: [
      { icon: 'github', link: 'https://github.com/mick0960' },
    ]
  },{
    avatar: 'https://avatars.githubusercontent.com/u/159122190?v=4',
    name: 'Big K',
    title: 'Member',
    org: 'NuC1ear',
    orgLink: '#',
    desc: 'WEB',
    links: [
      { icon: 'github', link: 'https://github.com/Syzygy-K' },
    ]
  },{
    avatar: '/avatars/rt.jpg',
    name: '冗談',
    title: 'Member',
    org: 'NuC1ear',
    orgLink: '#',
    desc: 'WEB',
    links: [
      {icon: {svg:'<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 20 20"><path fill="currentColor" d="M18.496 13.607c-.134-1.931-1.372-3.55-2.088-4.387c.1-.243.341-1.653-.593-2.615q.003-.035.002-.068C15.817 2.743 13.237.012 10 0C6.763.013 4.183 2.743 4.183 6.537q0 .035.002.068c-.934.962-.692 2.372-.593 2.615c-.715.837-1.953 2.456-2.088 4.387c-.024.508.051 1.248.288 1.577c.289.4 1.081-.081 1.648-1.362c.158.594.521 1.5 1.345 2.649c-1.378.33-1.771 1.752-1.307 2.53c.327.548 1.075.999 2.365.999c2.296 0 3.31-.645 3.763-1.095q.138-.147.394-.146q.256-.001.394.146c.453.45 1.467 1.095 3.762 1.095c1.29 0 2.039-.45 2.366-.999c.464-.778.07-2.2-1.307-2.53c.824-1.15 1.188-2.055 1.345-2.649c.567 1.281 1.36 1.763 1.648 1.362c.237-.33.312-1.07.288-1.577"/></svg>'},link:'https://qm.qq.com/q/WTvIng9AcM'}
    ]
  },{
    avatar: '/avatars/xx.jpg',
    name: '星',
    title: 'Member',
    org: 'NuC1ear',
    orgLink: '#',
    desc: 'MISC&CRYPTO',
    links: [
      {icon: {svg:'<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 20 20"><path fill="currentColor" d="M18.496 13.607c-.134-1.931-1.372-3.55-2.088-4.387c.1-.243.341-1.653-.593-2.615q.003-.035.002-.068C15.817 2.743 13.237.012 10 0C6.763.013 4.183 2.743 4.183 6.537q0 .035.002.068c-.934.962-.692 2.372-.593 2.615c-.715.837-1.953 2.456-2.088 4.387c-.024.508.051 1.248.288 1.577c.289.4 1.081-.081 1.648-1.362c.158.594.521 1.5 1.345 2.649c-1.378.33-1.771 1.752-1.307 2.53c.327.548 1.075.999 2.365.999c2.296 0 3.31-.645 3.763-1.095q.138-.147.394-.146q.256-.001.394.146c.453.45 1.467 1.095 3.762 1.095c1.29 0 2.039-.45 2.366-.999c.464-.778.07-2.2-1.307-2.53c.824-1.15 1.188-2.055 1.345-2.649c.567 1.281 1.36 1.763 1.648 1.362c.237-.33.312-1.07.288-1.577"/></svg>'},link:'https://qm.qq.com/q/9H4jwWDZD2'}
    ]
  }
]

const at0mic = []
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      NuC1ear&At0mic
    </template>
    <template #lead>
      NuC1ear&At0mic是来自
      <b style="color:#79ece1;">
      <a href="https://www.ecut.edu.cn" target="_blank">东华理工大学</a>软件学院
      </b>
      的一支联合战队，队员们皆为网络安全爱好者
      <br/>
      <el-link class='joinus' href='https://qm.qq.com/q/ba8mgXvCa4' target='_blank'><el-icon><Promotion /></el-icon>加入我们</el-link>
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>NuC1ear战队</template>
    <template #lead>N&A Team主队</template>
    <template #members>
      <VPTeamPageTitle>
        <template #lead>
          现役成员
        </template>
      </VPTeamPageTitle>
      <VPTeamMembers :members="nuc1ear" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>At0mic战队</template>
    <template #lead>N&A Team子队</template>
    <template #members>
      <VPTeamPageTitle>
        <template #lead>
          现役成员
        </template>
      </VPTeamPageTitle>
      <VPTeamMembers :members="at0mic" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<style scoped>
  .members .VPTeamPageTitle {
    margin-top: -90px;
  }

  .members .VPTeamPageTitle .lead{
    color: white;
  }

  .el-link.el-link--default.is-underline.joinus{
    margin-top : 30px;
    color:#8ca6da;
    font-size:20px;
  }
</style>

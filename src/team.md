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
    avatar: 'https://avatars.githubusercontent.com/u/42170621?s=400&u=3421f1988833c45dc3322a2e5d43dbe53da26ea5&v=4',
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
  },
]

const at0mic = []
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      NuC1ear&At0mic
    </template>
    <template #lead>
      NuC1ear&At0mic战队是来自
      <b style="color:#79ece1;">
      <a href="https://www.ecut.edu.cn" target="_blank">东华理工大学</a>软件学院
      </b>
      的一支联合战队，队员们皆为网络安全爱好者
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>NuC1ear战队</template>
    <template #lead>N&A Team主队</template>
    <template #members>
      <VPTeamPageTitle>
        <template #lead>
          现役队员
        </template>
      </VPTeamPageTitle>
      <VPTeamMembers :members="nuc1ear" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>At0mic战队</template>
    <template #lead>N&A Team子队</template>
    <template #members>
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
</style>
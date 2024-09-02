---
layout: page
sidebar: false
---
<script lang='ts' setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
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
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      NuC1ear
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
    <VPTeamPageTitle>
    <template #title>
      At0mic
    </template>
  </VPTeamPageTitle>
</VPTeamPage>
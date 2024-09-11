---
layout: page
---

<div class="common-layout">
<el-container>
    <el-header>
        <el-row class="row-bg" justify="center">
            <el-text class="cj">战队成就</el-text>
        </el-row>
    </el-header>
    <el-main>
        <el-row class='row-bg' justify='center'>
            <el-col :span="4" class="box-card"><span>2023</span></el-col>
        </el-row>
        <el-row class='row-bg' justify='center'>
                <el-descriptions :column="2" border class="matchDetail">
                    <el-descriptions-item
                    label="比赛名"
                    label-align="center"
                    align="center"
                    width="150px"
                    label-class-name="matchNameLabel"
                    class-name="matchNameContent"
                    >
                    <el-tag>江西省信息安全技术大赛</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item
                    label="所获荣誉"
                    label-align="center" align="center" class-name="matchNameContent" width="100">
                    <el-tag>二等奖</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item
                    label="获奖证书"
                    label-align="center" align="center" class-name="matchNameContent" width="100">
                    <el-image src="https://github.com/mick0960/NATeam-WIKI/blob/dev/src/public/awards_pics/jx2023.png?raw=true" fit="fill"/>
                    </el-descriptions-item>
                </el-descriptions>
        </el-row>
        <el-row class='row-bg' justify='center'>
            <el-col :span="4" class="box-card"><span>2024</span></el-col>
        </el-row>
        <el-row class='row-bg matches' justify='center'>
            <el-col :span="8" style="margin-right:30vh">
                <el-descriptions :column="2" border class="matchDetail">
                    <el-descriptions-item
                    label="比赛名"
                    label-align="center"
                    align="center"
                    width="150px"
                    label-class-name="matchNameLabel"
                    class-name="matchNameContent"
                    >
                    <el-tag>江西省信息安全技术大赛</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item
                    label="所获荣誉"
                    label-align="center" align="center" class-name="matchNameContent" width="100">
                    <el-tag>二等奖</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item
                    label="获奖证书"
                    label-align="center" align="center" class-name="matchNameContent" width="100">
                    <el-image src="https://github.com/mick0960/NATeam-WIKI/blob/dev/src/public/awards_pics/ccb2024.png?raw=true" fit="fill"/>
                    </el-descriptions-item>
                </el-descriptions>
            </el-col>
            <el-col :span="8">
                 <el-descriptions :column="2" border class="matchDetail">
                    <el-descriptions-item
                    label="比赛名"
                    label-align="center"
                    align="center"
                    width="150px"
                    label-class-name="matchNameLabel"
                    class-name="matchNameContent"
                    >
                    <el-tag>江西省信息安全技术大赛</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item
                    label="所获荣誉"
                    label-align="center" align="center" class-name="matchNameContent" width="100">
                    <el-tag>三等奖</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item
                    label="获奖证书"
                    label-align="center" align="center" class-name="matchNameContent" width="100">
                    <el-image src="awards_pics/ciscn2024.jpg" fit="fill"/>
                    </el-descriptions-item>
                </el-descriptions>
            </el-col>
        </el-row>
    </el-main>
</el-container>
</div>

<style scoped>
    .el-text {
        margin-top:20px
    }
    .el-text.cj {
        color: white;
        font-size:30px
    }
    .box-card {
        display: flex;
        height: 40px;
        border-radius: 2px;
        justify-content: center;
        align-items: center;
    }
    :deep(.matchDetail){
        --el-descriptions-item-bordered-label-background: var(--vp-c-bg);
        --el-descriptions-table-border: 1px solid #303035;
    }
    :deep(.matchNameContent){
        background:var(--vp-c-bg);
    }
</style>

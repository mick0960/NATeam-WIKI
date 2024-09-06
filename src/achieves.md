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
            <span>江西省信息安全技术大赛 二等奖</span>
        </el-row>
        <el-row class='row-bg' justify='center'>
            <el-col :span="4" class="box-card"><span>2024</span></el-col>
        </el-row>
        <el-row class='row-bg' justify='center'>
            <el-col :span="8" class="box-card awards">
                <span>第一届“长城杯”信息安全铁人三项赛 省三等奖</span>
            </el-col>
            <el-col :span="8" class="box-card awards">
                <span>第十七届全国大学生信息安全竞赛创新实践能力赛 省二等奖</span>
            </el-col>
        </el-row>
    </el-main>

</el-container>
</div>

<style scoped>
    .el-row.is-justify-center.row-bg{

    }
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
    .box-card.awards span{
        
    }
</style>

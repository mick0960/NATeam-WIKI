<template>
    <div class="Game">
        <el-row class="zhGameTitle">
            <h1>国内比赛</h1>
        </el-row>

        <div class="gameList">
            <el-row class="zhGameTitle zhGameList">
                <el-table :data="filterTableData" style="width: 150vh;border-radius: 0px;" height="300">
                    <el-table-column type="expand">
                        <template #default="props">
                            <div class="matchInfo">
                                <p><b>比赛链接：</b>
                                    <el-link :href="props.row.link" target="_blank">
                                        {{ props.row.name }}
                                    </el-link>
                                </p>
                                <p><b>比赛类型：</b>{{ props.row.type }}</p>
                                <p><b>报名时间：</b>{{ props.row.bmks }}-{{ props.row.bmjz }}</p>
                                <p><b>比赛时间：</b>{{ props.row.bsks }}-{{ props.row.bsjs }}</p>
                                <p><b>更多说明：</b>{{ props.row.readmore }}</p>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="比赛名称" prop="name" />
                    <el-table-column align="right">
                        <template #header>
                            <el-input v-model="search" size="small" placeholder="请输入要检索的比赛状态" />
                        </template>
                        <template #default="scope">
                            <el-text style="display: flex; justify-content: center;"
                                :type="getStatusColor(scope.row.status)">{{ getStatusText(scope.row.status) }}</el-text>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
        </div>

    </div>

</template>

<script setup lang='ts'>
import { ref, onMounted, computed } from "vue";
import axios from "axios";

interface MatchDetail {
    "name": string;
    "link": string;
    "type": string;
    "bmks": string;
    "bmjz": string;
    "bsks": string;
    "bsjs": string;
    "readmore": string;
    "status": number;
}

interface MatchResult {
    "result": MatchDetail[];
    "total": number;
    "size": number;
    "page": number;
}

// 创建响应式变量
const mresult = ref<MatchResult | null>(null); // 修改为单一的 MatchResult 对象
const matchList = ref<MatchDetail[]>([]); // matchList 初始化为空数组
    const filterTableData = computed(() => {
    const lowerCaseSearch = search.value.toLowerCase();
    return matchList.value.filter((data) => {
        const statusText = getStatusText(data.status);
        return !search.value || statusText.includes(lowerCaseSearch);
    });
});

const search = ref('')


// 使用 onMounted 钩子来在组件加载时获取数据
onMounted(async () => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/ProbiusOfficial/Hello-CTFtime/main/CN.json'); // 替换为实际的 API endpoint
        const fetchedData: MatchResult = response.data.data; // 假设 API 返回的数据符合 MatchResult 结构
        mresult.value = fetchedData; // 将获取到的数据存储到 mresult 中

        // 更新 matchList
        if (mresult.value && mresult.value.result) {
            matchList.value = mresult.value.result; // 直接将 result 数组赋值给 matchList
        }
    } catch (error) {
        console.error('Error fetching match data:', error);
    }
});

function getStatusText(status: number) {
    const statusMap = {
        0: "报名未开始",
        1: "报名进行中",
        2: "报名已结束",
        3: "比赛进行中",
        4: "比赛已结束",
    };

    return statusMap[status] || '未知状态';
}

function getStatusColor(status: number) {
    const colorMap = {
        0: 'info',
        1: 'primary',
        2: 'warning',
        3: 'success',
        4: 'danger',
    };

    return colorMap[status] || 'default';
}



</script>


<style scoped>
.Game {
    position: relative;
}

.zhGameTitle {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}

.zhGameTitle h1 {
    font-size: 30px;
}

.chooseStatus {
    margin-top: 10vh;
    margin-left: 33vh;
}

.matchInfo {
    padding-left: 8vh;
}

.el-table .el-table__cell.is-right {
    text-align: center;
}
</style>
<template>
    <div class="align-bottom">
        <el-icon :size="100" color="#DAA520">
            <WarnTriangleFilled />
        </el-icon>
        <el-text class="mx-1 text-large" type="warning">页面施工中</el-text>
    </div>
</template>

<script setup>
import { WarnTriangleFilled } from '@element-plus/icons-vue';
</script>

<style scoped>
.align-bottom {
    display: flex;
    align-items: flex-end;
    /* 底部对齐 */
}

.text-large {
    margin-left: 33px;
    font-size: 100px;
    line-height: 100px;
    /* 保持文本在垂直方向居中 */
}
</style>
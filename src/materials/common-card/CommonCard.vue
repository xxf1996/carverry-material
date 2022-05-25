<template>
  <el-card
    class="common-card"
    :body-style="{ padding: '0px' }"
    shadow="hover"
  >
    <template #header>
      <h5 class="common-card__title">
        {{ title }}
      </h5>
      <div class="common-card__btns">
        <!-- @slot 按钮配置区 -->
        <slot name="btns" />
      </div>
    </template>
    <template #default>
      <!-- @slot 主体内容 -->
      <slot />
    </template>
  </el-card>
</template>

<script lang="ts" setup>
import { ElCard } from 'element-plus';
import { stringProps } from '@/composition/props';

const props = defineProps({
  /** 卡片标题 */
  title: stringProps('卡片标题'),
});
const emit = defineEmits<{
  /** 初始化 */
  (event: 'init'): void;
}>();

emit('init');
</script>

<style scoped>
.common-card >>> .el-card__header {
  display: flex;
  padding: 8px;
}

.common-card__title {
  flex: 1;
  margin: 0px;
  margin-block: auto;
  font-size: 16px;
}

.common-card__btns {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>

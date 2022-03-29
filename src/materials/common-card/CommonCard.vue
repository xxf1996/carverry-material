<template>
  <el-card
    :body-style="{ padding: '0px' }"
    shadow="hover"
  >
    <template #header>
      <h5>{{ title }}</h5>
      <div class="flex items-center gap-2">
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

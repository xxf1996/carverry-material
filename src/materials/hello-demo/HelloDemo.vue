<template>
  <el-button>
    {{ name }}
  </el-button>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { stringProps } from '@/composition/props';

const props = defineProps({
  /** 写点什么 */
  name: stringProps(),
});
</script>

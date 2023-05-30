<template>
  <div class="app">
    <el-button type="primary" @click="handleClick">发送网络请求</el-button>
    <el-card shadow="always"> {{ data }} </el-card>
  </div>
</template>

<script setup lang="ts">
import { testRequest } from './api/test/test'
import { ref } from 'vue'
const data = ref()
const handleClick = async () => {
  const res = await testRequest({
    format: 'json'
  })
  data.value = res.data?.content
}
</script>

<style scoped></style>

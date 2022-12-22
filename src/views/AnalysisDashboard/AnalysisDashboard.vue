<script setup lang="ts">
import { pageConfig } from "./config";
import PageContent from "@/components/PageContent.vue";

function handleDelete(row: any) {
  console.log(row);
}

function handleEdit(row: any) {
  console.log(row);
}
</script>

<template>
  <PageContent :pageConfig="pageConfig">
    <template #demo="scope">
      <el-button size="small" @click="handleEdit(scope)">Edit</el-button>
      <el-button size="small" type="danger" @click="handleDelete(scope)"
        >Delete</el-button
      >
    </template>
  </PageContent>
</template>

<style scoped></style>

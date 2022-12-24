<script setup lang="ts">
import { pageConfig } from "./config";
import PageSearch from "@/components/PageSearch.vue";
import PageTable from "@/components/PageTable.vue";

function handleDelete(row: any) {
  console.log(row);
}

function handleEdit(row: any) {
  console.log(row);
}
</script>

<template>
  <PageSearch :searchConfig="pageConfig.searchConfig"></PageSearch>
  <PageTable :tableConfig="pageConfig.tableConfig">
    <template #demo="scope">
      <el-button size="small" @click="handleEdit(scope)">Edit</el-button>
      <el-button size="small" type="danger" @click="handleDelete(scope)"
        >Delete</el-button
      >
    </template>
  </PageTable>
</template>

<style scoped></style>

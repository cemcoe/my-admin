<script setup lang="ts">
import { pageConfig } from "./config";
import PageSearch from "@/components/PageSearch.vue";
import PageContent from "@/components/PageContent.vue";
import { useMainStore } from "@/stores/main";
const mainStore = useMainStore();

function handleDelete(row: any) {
  console.log(row);
}

function handleEdit(row: any) {
  console.log(row);
}

function handleSearch(data: any) {
  mainStore.fetchTableDataAction(data);
}
</script>

<template>
  <PageSearch @handleSearch="handleSearch"></PageSearch>
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

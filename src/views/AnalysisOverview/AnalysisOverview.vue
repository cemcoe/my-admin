<script setup lang="ts">
import { pageConfig } from "./config";
import pageSearch from "@/components/PageSearch.vue";
import PageContent from "@/components/PageContent.vue";
import PageModal from "@/components/PageModal.vue";
import { useMainStore } from "@/stores/main";
const mainStore = useMainStore();

function handleEdit(row: any) {
  console.log(row);

  mainStore.dialogVisible = true;
}
</script>

<template>
  <div class="analysisoverview">
    <pageSearch :pageConfig="pageConfig"> </pageSearch>
    <PageContent :pageConfig="pageConfig" @handleEdit="handleEdit">
      <template #title="scope">
        <span class="demo">{{ scope.row.title }}</span>
      </template>
    </PageContent>
    <PageModal></PageModal>
  </div>
</template>

<style scoped>
@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  to {
    background-position: -100% 0;
  }
}
.demo {
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>

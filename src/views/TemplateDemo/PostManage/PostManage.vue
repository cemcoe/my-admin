<script setup lang="ts">
import { ref } from "vue";
import { pageConfig } from "./config";
import pageSearch from "@/components/PageSearch.vue";
import PageTable from "@/components/PageTable.vue";
import PageModal from "@/components/PageModal.vue";

const modalRef = ref<any>();

function handleEdit(row: any) {
  console.log(row);
  modalRef.value?.setDialogVisible(false, row);
}

function getConfig() {
  window.alert(JSON.stringify(pageConfig));
}
</script>

<template>
  <div class="analysisoverview">
    <button @click="getConfig">查看配置文件</button>
    <pageSearch :searchConfig="pageConfig.searchConfig"> </pageSearch>
    <PageTable :tableConfig="pageConfig.tableConfig" @handleEdit="handleEdit">
      <template #status="scope">
        <span class="demo">{{ scope.row.status === 1 ? '可用' : '封禁' }}</span>
      </template>
    </PageTable>
    <PageModal :pageConfig="pageConfig" ref="modalRef" />
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

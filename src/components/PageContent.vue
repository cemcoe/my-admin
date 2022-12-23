<script setup lang="ts">
import { onBeforeUnmount } from "vue";
import { utcFormat } from "@/utils/format";
import { useMainStore } from "@/stores/main";

defineProps<{
  pageConfig: {
    tableConfig: {
      elTableColumns: any[];
    };
  };
}>();

const emit = defineEmits(["handleEdit"]);

const mainStore = useMainStore();

// leader don't need to know how to get，just ask url
// template component need easy, reduce params
// Just to fetch data，how and where or params？
// I dont know just ask someone, for example url
mainStore.fetchTableDataAction();

function handleDelete(row: any) {
  mainStore.deleteTableDataAction(row);
}

function handleEdit(row: any) {
  emit("handleEdit", row);
}

function handleCurrentChange(page: number) {
  mainStore.page = page;
  mainStore.fetchTableDataAction();
}

onBeforeUnmount(() => {
  mainStore.clearStoreData();
});
</script>

<template>
  <el-table :data="mainStore.tableData" style="width: 100%">
    <template v-for="col in pageConfig.tableConfig.elTableColumns" :key="col">
      <template v-if="col.type === 'normal'">
        <el-table-column v-bind="col"
      /></template>

      <template v-else-if="col.type === 'day'">
        <el-table-column v-bind="col">
          <template #default="scope">
            {{ utcFormat(scope.row[col.prop]) }}
          </template>
        </el-table-column>
      </template>

      <template v-else-if="col.type === 'handler'">
        <el-table-column v-bind="col">
          <template #default="scope">
            <el-button
              size="small"
              type="primary"
              text
              bg
              @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              type="danger"
              text
              bg
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </template>

      <template v-else>
        <el-table-column v-bind="col">
          <template #default="scope">
            <slot :name="col.slotName" v-bind="scope"></slot>
          </template>

          <!-- provide data to user -->
        </el-table-column>
      </template>
    </template>
    <!-- <el-table-column prop="title" label="Title" width="180" />
      <el-table-column prop="contract.address" label="Address" width="180" />
      <el-table-column
        prop="timeLastUpdated"
        label="TimeLastUpdated"
        width="180"
      >
        <template #default="scope">
          {{ utcFormat(scope.row.timeLastUpdated) }}
        </template>
      </el-table-column>

      <el-table-column label="操作"
        ><template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)"
            >Edit</el-button
          >
          <el-button size="small" type="danger" @click="handleDelete(scope.row)"
            >Delete</el-button
          >
        </template></el-table-column
      > -->
  </el-table>
  <div class="pagination-block">
    <el-pagination
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="mainStore.total"
    />
  </div>
</template>

<style scoped>
.el-table {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 10px;
}

.el-table :deep(tr:nth-child(2n)) {
  background-color: rgb(245, 243, 243);
}

.el-table :deep(td.el-table__cell),
.el-table :deep(th.el-table__cell.is-leaf) {
  border: 0;
}

.pagination-block {
  display: flex;
  justify-content: end;
  margin-top: 20px;
}
</style>

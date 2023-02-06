<script lang="ts" setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const list1 = ref([
  { name: "新增看板", id: 1 },
  { name: "看板排序", id: 2 },
  { name: "看板性能优化", id: 4 },
  { name: "看板状态管理", id: 4 },
  { name: "任务重要性排序", id: 4 },
  { name: "更多功能", id: 4 },
]);

const list2 = ref([
  { name: "任务组件化", id: 4 },
  { name: "新增任务", id: 5 },
  { name: "任务编辑", id: 3 },
  { name: "看板数据结构设计", id: 6 },
  { name: "任务状态管理", id: 4 },
]);

const list3 = ref([
  { name: "看板初始化", id: 5 },
  { name: "看板依赖升级", id: 5 },
  { name: "看板任务排序", id: 6 },
  { name: "跨看板任务排序", id: 7 },
  { name: "看板状态管理", id: 4 },
]);

function log(evt: Event) {
  console.log(evt);
}

function addRandomTask() {
  list1.value.unshift({
    name: "随机任务",
    id: 0,
  });
}

function addKanBan() {}
</script>

<template>
  <el-row :gutter="10">
    <el-col :span="6">
      <div class="kanban">
        <div class="info">未开始 {{ list1.length }}</div>
        <draggable
          class="list-group"
          :list="list1"
          group="people"
          @change="log"
          itemKey="name"
        >
          <template #item="{ element, index }">
            <div class="task">
              <div>{{ element.name }} {{ index }}</div>
            </div>
          </template>
        </draggable>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="kanban">
        <div class="info" style="color: green">进行中 {{ list2.length }}</div>
        <draggable
          class="list-group"
          :list="list2"
          group="people"
          @change="log"
          itemKey="name"
        >
          <template #item="{ element, index }">
            <div class="task">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="kanban" style="color: #ccc">
        <div class="info">已经完成 {{ list3.length }}</div>
        <draggable
          class="list-group"
          :list="list3"
          group="people"
          @change="log"
          itemKey="name"
        >
          <template #item="{ element, index }">
            <div class="task" style="text-decoration: line-through">
              {{ element.name }} {{ index }}
            </div>
          </template>
        </draggable>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="kanban">
        <div class="info">测试操作</div>
        <el-button type="primary" @click="addRandomTask"
          >插入随机任务</el-button
        >
        <el-button type="primary" @click="addKanBan" disabled
          >新增看板</el-button
        >
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.kanban {
  border-radius: 4px;
  background-color: #ffffff;
  padding: 10px;
}

.info {
  margin-bottom: 10px;
}

.task {
  background-color: rgb(242, 241, 241);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>

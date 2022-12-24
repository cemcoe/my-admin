<script lang="ts" setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import { useMainStore } from "@/stores/main";
const mainStore = useMainStore();

const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>

<template>
  <el-button text @click="mainStore.dialogVisible = true">
    click to open the Dialog
  </el-button>

  <el-dialog
    v-model="mainStore.dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="mainStore.dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="mainStore.dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>

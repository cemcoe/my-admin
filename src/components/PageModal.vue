<script lang="ts" setup>
import { ref, reactive } from "vue";
import { ElMessageBox } from "element-plus";

interface IFormItem {
  [propName: string]: any;
}

interface IFormConfig {
  formItems: IFormItem[];
}

const props = defineProps<{
  pageConfig: {
    modalConfig: {
      formItems: any[];
    };
  };
}>();

const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

const setDialogVisible = () => (dialogVisible.value = true);

// const formConfig: IFormConfig =
// };

function getFormByFormConfig(formConfig: IFormConfig) {
  const form: { [propName: string]: any } = {};

  formConfig.formItems.map((item) => {
    // TODO: give initValue
    const model = item.vModel;
    form[model] = "";
  });

  return form;
}

// const form = reactive({
//   id: "",
//   region: "",
// });
const form = reactive(getFormByFormConfig(props.pageConfig.modalConfig));

function handleConfirm() {
  dialogVisible.value = false;
  console.log(form);
}
defineExpose({
  setDialogVisible,
});
</script>

<template>
  <el-dialog v-model="dialogVisible" title="Tips" :before-close="handleClose">
    <el-form :model="form">
      <template
        v-for="formItem in pageConfig.modalConfig.formItems"
        :key="formItem.label"
      >
        <template v-if="formItem.type === 'input'"
          ><el-col :span="16"
            ><el-form-item :label="formItem.label">
              <el-input
                v-model="form[formItem.vModel]"
              /> </el-form-item></el-col
        ></template>
        <template v-if="formItem.type === 'select'">
          <el-form-item :label="formItem.label">
            <el-select
              v-model="form[formItem.vModel]"
              placeholder="Please select a zone"
            >
              <el-option
                v-for="option in formItem.options"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
        </template>
      </template>

      <!-- <el-form-item label="Zones">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item> -->
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>

<script setup lang="ts">
import { reactive, ref, onBeforeUnmount } from "vue";
import type { FormInstance } from "element-plus";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();

interface IFormItem {
  [propName: string]: any;
}

interface IFormConfig {
  formItems: IFormItem[];
}

// const formConfig: IFormConfig = {
//   formItems: [
//     {
//       label: "ID",
//       type: "input",
//       vModel: "id",
//     },
//     {
//       label: "ID1",
//       type: "input",
//       vModel: "id1",
//     },
//   ],
// };

const props = defineProps<{
  searchConfig: {
    formItems: any[];
  };
}>();

const emits = defineEmits(["handleSearch"]);

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
// });

const form = reactive(getFormByFormConfig(props.searchConfig));

const ruleFormRef = ref<FormInstance>();

const handleSearch = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      mainStore.setSearchInfo(form);
      emits("handleSearch", form);
    } else {
      console.log("error submit!", fields);
    }
  });
};

onBeforeUnmount(() => {
  mainStore.clearStoreData();
});
</script>

<template>
  <el-card>
    <el-form :model="form" ref="ruleFormRef">
      <el-row>
        <!-- <el-col :span="16"
          ><el-form-item label="ID">
            <el-input v-model="form.id" /> </el-form-item
        ></el-col> -->
        <template
          v-for="formItem in searchConfig.formItems"
          :key="formItem.label"
        >
          <template v-if="formItem.type === 'input'"
            ><el-col :span="16"
              ><el-form-item :label="formItem.label">
                <el-input
                  v-model="form[formItem.vModel]"
                /> </el-form-item></el-col
          ></template>
          <template v-if="formItem.type === 'date-picker'">
            <el-col :span="16">
              <span>{{ formItem.label }}</span>
              <el-date-picker
                type="daterange"
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                v-model="form[formItem.vModel]"
              />
            </el-col>
          </template>
        </template>
      </el-row>

      <el-row
        ><el-button @click="handleSearch(ruleFormRef)">
          搜索
        </el-button></el-row
      >
    </el-form>
  </el-card>
</template>

<style scoped>
.search {
  background-color: antiquewhite;
}
</style>

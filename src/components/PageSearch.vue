<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();

const formConfig = {
  formItems: [
    {
      label: "ID",
      type: "input",
      vModel: "id",
    },
  ],
};
const emits = defineEmits(["handleSearch"]);

const form = reactive({
  id: "",
});

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
          v-for="formItem in formConfig.formItems"
          :key="formItem.label"
        >
          <el-col :span="16"
            ><el-form-item :label="formItem.label">
              <el-input
                v-model="form[formItem.vModel as keyof typeof form]"
              /> </el-form-item
          ></el-col>
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

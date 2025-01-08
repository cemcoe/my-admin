<script setup lang="ts">
import { reactive, ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import type { FormRules, FormInstance } from "element-plus";
import { useLoginStore } from "@/stores/login";

const loginStore = useLoginStore();

const loginInfo = reactive({
  phone: "13526880000",
  password: "test",
});

const rules = reactive<FormRules>({
  phone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    { min: 11, max: 11, message: "账号长度11", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 20, message: "密码长度介于3和20之间", trigger: "blur" },
  ],
});

const ruleFormRef = ref<FormInstance>();

const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      loginStore.loginAction(loginInfo);
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div class="pannel">
    <div class="info">项目介绍，引导用户注册</div>
    <div class="login-container">
      <div class="login-inputs">
        <h3>创建账号</h3>

        <el-form
          ref="ruleFormRef"
          label-position="top"
          label-width="100px"
          :model="loginInfo"
          :rules="rules"
          style="max-width: 460px"
          status-icon
        >
          <el-form-item label="账号" prop="phone">
            <el-input :prefix-icon="User" v-model="loginInfo.phone" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              :prefix-icon="Lock"
              v-model="loginInfo.password"
              type="password"
              show-password
            />
          </el-form-item>
        </el-form>

        <el-button type="primary" @click="login(ruleFormRef)">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pannel {
  display: flex;
  border-radius: 10px;
  width: 600px;
  height: 400px;
  overflow: hidden;
}

.info {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: rgb(61, 6, 243);
  color: aliceblue;
}

.login-container {
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
}

.login-inputs {
  width: 260px;
}

h3 {
  margin-bottom: 40px;
  text-align: center;
}

.login-inputs :deep(.el-button--primary) {
  width: 100%;
}
</style>

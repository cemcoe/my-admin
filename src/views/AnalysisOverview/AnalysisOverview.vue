<script setup lang="ts">
import packageData from "../../../package.json";

const { dependencies, devDependencies } = packageData;

function objectToArray(object: Object) {
  return Object.keys(object).map((key) => {
    //stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
    return {
      name: key,
      version: object[key as keyof typeof object],
    };
  });
}

const dependenciesArray = objectToArray(dependencies);

const devDependenciesArray = objectToArray(devDependencies);
</script>

<template>
  <div class="">
    <el-card class="info" style="margin-bottom: 20px">
      admin-template 是一个基于 Vue3 + Vue-Router + Pinia + Element-Plus + Vite
      + TypeScript 的管理系统模板。
    </el-card>

    <div class="container">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>生产环境依赖</span>
          </div>
        </template>
        <el-table :data="dependenciesArray" style="width: 100%">
          <el-table-column prop="name" label="名称" width="180" />
          <el-table-column prop="version" label="版本" />
        </el-table>
      </el-card>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>开发环境依赖</span>
          </div>
        </template>
        <el-table :data="devDependenciesArray" style="width: 100%">
          <el-table-column prop="name" label="名称" width="180" />
          <el-table-column prop="version" label="版本" />
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.info {
  line-height: 30px;
}
.container {
  display: flex;
  justify-content: space-around;
}
.box-card {
  width: 480px;
}
</style>

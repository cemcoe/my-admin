<script setup lang="ts">
defineProps<{
  menusRoutes: any;
}>();
</script>

<template>
  <template v-for="item in menusRoutes" :key="item.path">
    <el-menu-item
      v-if="!item.children"
      :index="item.path"
      @click="$router.push(item.path)"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <template #title>{{ item.name }}</template>
    </el-menu-item>

    <template v-if="item.children">
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <MenuTree
          :menusRoutes="item.children"
          style="margin-left: 10px"
        ></MenuTree>
      </el-sub-menu>
    </template>
    <!-- <el-sub-menu v-if="item.children" :index="item.path">
        <template #title>
          <span>{{ item.name }}</span>
        </template>

        <el-menu-item
          v-for="itemj in item.children"
          @click="$router.push(itemj.path)"
          :index="itemj.path"
          :key="itemj.path"
          >{{ itemj.name }}</el-menu-item
        >
      </el-sub-menu>
      <template v-else>
        <el-menu-item :index="item.path" @click="$router.push(item.path)">
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template> -->
  </template>
</template>

<style scoped>
.home {
  background-color: antiquewhite;
}

.logo {
  height: 100px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

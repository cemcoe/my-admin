import { ref, computed, reactive, toRaw } from "vue";
import { useRoute } from "vue-router";
import { defineStore } from "pinia";
import { getPostList } from "@/service/modules/post";

export const useMainStore = defineStore("main", () => {
  const route = useRoute();
  const path = computed(() => route.path);

  const tableData = ref<any>([]);
  const total = ref(0);
  const page = ref(1);
  const per_page = ref(10);

  let searchInfo = reactive<any>({});

  function pathToFunction(key: string, type = "read") {
    // console.log(key, type);
    // MVC? // base url get handler
    const _o: { [propName: string]: any } = {
      "/main/analysis/overview": {
        // create,
        update: updatePost,
        read: readPost,
        delete: deletePost,
      },
      "/main/template/page": {
        // create,
        update: updatePost,
        read: readPost,
        // delete: deletePost,
      },
    };
    // https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b

    return _o[key as keyof typeof _o][type];
  }

  function setSearchInfo(info: any) {
    // 1. set
    searchInfo = info;
    // 2. renew pageinfo
    page.value = 1;
    // 3. renew fetch
    readTableDataAction();
  }

  function readTableDataAction() {
    // TODO: 不够优雅撒。。。 根据name找对应的函数，有点MVC路由的意思了
    // if (name === "nft") {
    //   nft();
    // } else if (name === "post") {
    //   post();
    // } else {
    //   console.error(
    //     "Pinia: Can't find the action name, just check Pinia function"
    //   );
    // }

    if (Object.keys(toRaw(searchInfo)).length) {
      window.alert(JSON.stringify({ info: "接口还没写", ...searchInfo }));
      // TODO: 接口不支持
      return;
    }

    pathToFunction(path.value)();
  }

  function updateTableDataAction(row: any) {
    // TODO: 去执行队列的处理函数
    // window.alert(
    //   JSON.stringify({
    //     path: path.value,
    //     id: row.id,
    //   })
    // );

    pathToFunction(path.value, "update")(row);
  }

  function deleteTableDataAction(row: any) {
    // TODO: 去执行队列的处理函数
    // window.alert(
    //   JSON.stringify({
    //     path: path.value,
    //     id: row.id,
    //   })
    // );

    pathToFunction(path.value, "delete")(row);
  }

  async function updatePost(row: any) {
    // 更新的具体逻辑
    console.log(row, "TODO:::更新的具体逻辑");
  }

  async function readPost() {
    const res = await getPostList(page.value, per_page.value);
    const { status, data } = res;
    if (status === 200) {
      tableData.value = data;
      total.value = res.pagination.total;
      page.value = res.pagination.totalPages;
      per_page.value = res.pagination.pageSize;
    }
  }

  async function deletePost(row: any) {
    // 删除的具体逻辑
    console.log(row, "TODO:::删除的具体逻辑");
  }

  function clearStoreData() {
    // onBeforeUnmount
    tableData.value = [];
    total.value = 0;
    page.value = 0;
    searchInfo = {};
  }

  return {
    total,
    page,
    per_page,
    tableData,
    readTableDataAction,
    updateTableDataAction,
    deleteTableDataAction,
    clearStoreData,
    setSearchInfo,
  };
});

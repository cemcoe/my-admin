import { ref, computed, reactive, toRaw } from "vue";
import { useRoute } from "vue-router";
import { defineStore } from "pinia";
import { alchemy } from "@/alchemy";
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
    // MVC? // base url get handler
    const _o: { [propName: string]: any } = {
      "/main/analysis/overview": {
        // create,
        // update,
        read: post,
        // delete,
      },
      "/main/analysis/dashboard": {
        // create,
        // update,
        read: nft,
        // delete,
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
    fetchTableDataAction();
  }

  function fetchTableDataAction() {
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

  function deleteTableDataAction(row: any) {
    // TODO: 去执行队列的处理函数
    window.alert(
      JSON.stringify({
        path: path.value,
        id: row.id,
      })
    );
  }

  function nft() {
    alchemy.nft
      .getNftsForOwner("0x2cEE06a96eB2f6fFEc80ad27Df274E0D196BFAB2", {
        pageSize: 10,
      })
      .then((res) => {
        console.log(res);
        tableData.value = res.ownedNfts;
      });
  }

  async function post() {
    const res = await getPostList(page.value, per_page.value);
    const { status, data } = res;
    if (status === 200) {
      tableData.value = data.postList;
      total.value = data.total;
      page.value = data.page;
      per_page.value = data.per_page;
    }
  }

  function clearStoreData() {
    // onBeforeUnmount
    tableData.value = [];
    total.value = 0;
    page.value = 0;
    searchInfo = {};
  }

  return {
    fetchTableDataAction,
    deleteTableDataAction,
    tableData,
    total,
    page,
    per_page,
    clearStoreData,
    setSearchInfo,
  };
});

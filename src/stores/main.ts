import { defineStore } from "pinia";
import { ref } from "vue";
import { alchemy } from "@/alchemy";
import { getPostList } from "@/service/modules/post";

export const useMainStore = defineStore("main", () => {
  const tableData = ref<any>([]);

  function fetchTableDataAction(name: string) {
    // TODO: 不够优雅撒。。。 根据name找对应的函数，有点MVC路由的意思了
    if (name === "nft") {
      nft();
    } else if (name === "post") {
      post();
    } else {
      console.error(
        "Pinia: Can't find the action name, just check Pinia function"
      );
    }
  }

  function deleteTableDataAction(name: string, row: any) {
    // TODO: 去执行队列的处理函数
    window.alert(
      JSON.stringify({
        pageName: name,
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
    const res = await getPostList();
    const { status, data } = res;
    if (status === 200) {
      tableData.value = data.postList;
    }
  }

  function clearStoreData() {
    // onBeforeUnmount
    tableData.value = [];
  }

  return {
    fetchTableDataAction,
    deleteTableDataAction,
    tableData,
    clearStoreData,
  };
});

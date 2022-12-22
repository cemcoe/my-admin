const tableConfig = {
  elTableColumns: [
    {
      type: "normal",
      label: "ID:normal",
      prop: "id",
    },
    {
      type: "custom",
      label: "标题:custom",
      slotName: "title",
    },
    {
      type: "day",
      label: "更新时间:day",
      prop: "updated_at",
    },
    {
      type: "handler",
      label: "操作:handler",
      prop: "title",
    },
  ],
};

const pageConfig = {
  fetchTableDataActionName: "post",
  tableConfig,
};

export { pageConfig };

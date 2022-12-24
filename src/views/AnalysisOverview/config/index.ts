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

const searchConfig = {
  formItems: [
    {
      label: "ID:input",
      type: "input",
      vModel: "id",
    },
    {
      label: "时间:date-picker",
      type: "date-picker",
      vModel: "datess",
    },
  ],
};

const modalConfig = {
  formItems: [
    {
      label: "id",
      type: "input",
      vModel: "id",
    },
    {
      label: "标题",
      type: "input",
      vModel: "title",
    },

    {
      label: "省份二",
      type: "select",
      vModel: "region",
      options: [
        {
          label: "Zone No.1",
          value: "shanghai",
        },
        {
          label: "Zone No.2",
          value: "beijing",
        },
      ],
    },
  ],
};

const pageConfig = {
  tableConfig,
  searchConfig,
  modalConfig,
};

export { pageConfig };

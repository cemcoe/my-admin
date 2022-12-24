const tableConfig = {
  elTableColumns: [
    {
      type: "normal",
      label: "Title",
      prop: "title",
    },
    {
      type: "normal",
      label: "Address",
      prop: "contract.address",
    },
    {
      type: "day",
      label: "TimeLastUpdated",
      prop: "timeLastUpdated",
    },
  ],
};

const formConfig = {
  formItems: [
    {
      label: "ID",
      type: "input",
      vModel: "id",
    },
    {
      label: "ID1",
      type: "input",
      vModel: "id1",
    },
  ],
};

const pageConfig = {
  tableConfig,
  formConfig,
};

export { pageConfig };

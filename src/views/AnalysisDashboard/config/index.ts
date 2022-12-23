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

const pageConfig = {
  tableConfig,
};

export { pageConfig };

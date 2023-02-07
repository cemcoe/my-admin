function customLightbox(gantt: any) {
  // 自定义灯箱结构，弹出修改任务，需要和gantt.config.columns搭配

  gantt.config.lightbox.sections = [
    {
      name: "description",
      height: 70,
      map_to: "text",
      type: "textarea",
      focus: true,
    },
    {
      name: "priority",
      height: 22,
      map_to: "admin",
      type: "select",
      options: [
        // TODO: 和服务端交互时需要做一个id到name的映射
        { key: "金先生", label: "金先生" },
        { key: "木先生", label: "木先生" },
        { key: "水先生", label: "水先生" },
      ],
    },
    { name: "time", height: 72, map_to: "auto", type: "duration" },
  ];

  gantt.locale.labels.section_priority = "负责人";
}

export { customLightbox };

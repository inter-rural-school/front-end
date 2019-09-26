const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#e8f4f8",
      "@success": "#6FA0D0",
      "@info": "#6BACFF",
      "@warning": "#FF9E02",
      "@danger": "#FF496E",
      "@border-round": "10px"
    }
  })
);

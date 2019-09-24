const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@primary-color': '#6FA0D0' ,
      '@success': '#3CC93E',
      '@info':'#6BACFF',
      '@warning': '#FF9E02',
      '@danger': '#FF496E',
      '@border-round': '10px',
    }
  })
);

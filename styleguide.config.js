const path = require('path');

module.exports = {
  defaultExample: true,
  showCode: true,
  showUsage: true,
  getComponentPathLine(componentPath) {
    const parsed = path.parse(path.relative('src', componentPath));

    return `import ${parsed.name} from '${parsed.dir}/${parsed.name}';`;
  },
  sections: [
    // {
    //   name: 'Introduction',
    //   content: 'docs/introduction.md'
    // },
    {
      name: 'Components',
      // content: 'docs/ui.md',
      components: 'src/components/*.{js,jsx}'
    },
    {
      name: 'Formatters',
      // content: 'docs/ui.md',
      components: 'src/formatters/*.{js,jsx}'
    },
  ]
  // webpackConfig: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.jsx?$/,
  //         exclude: /node_modules/,
  //         loader: 'babel-loader',
  //       },
  //       {
  //         test: /\.css$/,
  //         loader: 'style-loader!css-loader',
  //       },
  //     ],
  //   },
  // },
};
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const plugins = [
  new CompressionWebpackPlugin({
    filename: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.(js|css)$/,
  }),
];

if (process.env.NODE_ENV !== "production") {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  productionSourceMap: false,
  chainWebpack(config) {
    config.plugins.delete("prefetch");
  },
};

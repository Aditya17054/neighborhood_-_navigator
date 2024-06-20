const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  // Other webpack configurations...

  plugins: [new BundleAnalyzerPlugin()],
};

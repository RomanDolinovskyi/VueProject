module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://cs.wunu.edu.ua",
        changeOrigin: true
      }
    }
  }
};

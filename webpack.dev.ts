import * as webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config = (env: any): webpack.Configuration => {
  return {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".jsx", ".js", ".json", ".css", ".scss"]
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "awesome-typescript-loader"
        },
        {
          test: /\.(s*)css$/i,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8000,
                name: "./src/scss/[hash]-[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    // @ts-ignore
    devServer: {
      port: 3000,
      historyApiFallback: true,
      open: false,
      hot: true
    },
    plugins: [
      new CleanWebpackPlugin(),

      new HtmlWebPackPlugin({
        template: "./src/index.html"
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};
export default config;

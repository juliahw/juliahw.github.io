const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const PostCssPresetEnv = require("postcss-preset-env");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          // Compile ES6 and JSX to JS.
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          },
          // Transpile MDX to JSX.
          "@mdx-js/loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // Compile ES6 and JSX to JS.
          loader: "babel-loader",
          options: {
            plugins: ["@babel/transform-runtime"],
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // Extract CSS into separate files.
          MiniCssExtractPlugin.loader,
          // Resolve CSS imports.
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          // Autoprefix CSS.
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                new PostCssPresetEnv({
                  browsers: "last 2 versions",
                  autoprefixer: true,
                }),
              ],
            },
          },
          // Compile SCSS to CSS.
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerWebpackPlugin({})],
  },
  plugins: [
    // Generate `dist/index.html`.
    new HtmlWebPackPlugin({
      template: "src/index.html",
    }),
    // Extract CSS into separate files.
    new MiniCssExtractPlugin(),
    // Format code.
    new PrettierPlugin({
      extensions: [".html", ".js", ".jsx", ".scss"],
    }),
  ],
  resolve: {
    extensions: [".mdx", ".js", ".jsx"],
  },
};

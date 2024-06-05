//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING
//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING
//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING
//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING

//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING
//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING
//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING

//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING
//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING
//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING
//  THIS FILE IS NOT NEEDED IN OUR SETUP - FOR SERVER SIDE RENDERING


//  WE JUST NEEDED TO ADD require('babel/register') in server.js to handle 'import' statements and that's all that was needed


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const config = {
    // entry: ['./src/index.js', './Components/Fav.js', './Components/Login.js'],
    entry: {
        server: './server.js'
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'server.prod.js'
    },
    // watch: true,
    mode: "development",
    // mode: "production",
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                    // {
                    //     loader: MiniCssExtractPlugin.loader
                    // },

                  // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                    },
                //   "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    },
    devServer: {
        port: 8000,
        static: {
            directory: path.join(__dirname, './dist')
        },
        hot: true,
        open: true,
        liveReload: true,
        // watchFiles: ['src/*.html', 'src/*.js', 'webpack.config.js']
    },
    plugins: [
        // new HtmlWebpackPlugin({
        // filename:'index.html',
        // template:'./src/index.html'
        // }),
        // new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin({
        //     generateStatsFile: true
        // }),
    ],
    optimization: {
        // splitChunks: {
        //   chunks: 'all',
        // },

        // minimizer: [
        //     // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        //     // `...`,
        //     new CssMinimizerPlugin(),
        //   ],
      },
    
}
module.exports = config;
// const compileWebpack = webpack(config, function(err, stats) {
//     if (err) {
//         console.error('Webpack: ', err);
//         return;
//     }
//     // winston.error('stats.compilation.errors \n', stats.compilation.errors);

//     console.log('webpack - webpack done');
// });
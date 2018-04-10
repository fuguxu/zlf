
const env = process.env.NODE_ENV;  //环境变量
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成一个HTML文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const buildPath = path.resolve(__dirname,'dist');
const nodeModulesPath = path.resolve(__dirname,'node_modules');
const srcDir = path.resolve(process.cwd(),'src');
const libDir = path.resolve(srcDir, 'js/lib');
const glob = require('glob');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**考虑多页面应用，多个入口文件**/
const _entries = {};
const fileNames=[];
const jsDir = path.resolve(srcDir,'js/entry');
const entryFiles = glob.sync(`${jsDir}/*.js`);
entryFiles.forEach((filePath) => {
    const filename = filePath.substring(filePath.lastIndexOf('/')+1,filePath.lastIndexOf('.'));
    _entries[filename] = filePath;
    fileNames.push(filename);
});

module.exports = (() => {

    const htmlPlugins = () => {
        const entryHtml = glob.sync(`${srcDir}/html/*.html`);
        const rtn = [];
        entryHtml.forEach((filePath) => {
            const filename = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
            const cfg = {
                template:`${filePath}`,
                filename:`${filename}.html`,
                favicon:`${srcDir}/img/favicon.ico`,
                chunksSortMode:'dependency'
            };
            if(filename in _entries){
                cfg.inject = 'body';
                cfg.chunks = ['vendor','common',filename];
            }
            rtn.push(new HtmlWebpackPlugin(cfg));
        });
        return rtn;
    };

    const config={
        resolve:{
            extensions:['.js', '.vue','.css', '.png', '.jpg'],
            alias:{
                vue$:`${nodeModulesPath}/vue/dist/vue.js`,
                img:`${srcDir}/img`,
                fonts:`${srcDir}/fonts`,
                apputil:`${srcDir}/js/util/main.js`,
                "~":`${srcDir}`
            }
        },
        entry:Object.assign(_entries, { vendor: ['vue','vue-router','element-ui'] }),
        output:{
            path:buildPath,
            publicPath:'',
            filename:'js/[hash:8].[name].min.js',
            chunkFilename:'js/[hash:8].[id].min.js'
        },
        devtool: '#source-map',
        optimization: {//webpack4.0打包相同代码配置
            // minimize: true,//压缩js
            splitChunks: {
              cacheGroups: {
                commons: {
                  chunks: 'all',
                  minChunks: 2,
                  name: 'vendor'
                }
              }
            }
          },
        plugins:[
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.DefinePlugin({
                __DEV__: env === 'dev',
                __PROD__: env === 'pro'
            }),
            new UglifyJsPlugin({//生产环境可以不用 本身自带
                sourceMap: true,
            }),
            new ExtractTextPlugin({
                filename: 'css/[hash:8].[name].min.css',
                allChunks: true
            }),
            new OptimizeCSSPlugin({
                cssProcessorOptions: { safe: true, map: { inline: false } }
            }),
            new webpack.ProvidePlugin({'_': "underscore",'Vue':'vue','AppUtil':'apputil',}),
            new CleanWebpackPlugin(['dist']),
            new CopyWebpackPlugin([{
                from: __dirname + '/static',
                to:__dirname + '/dist'
            }])
        ].concat(htmlPlugins()),
        module:{
            rules:[
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options:{
                        loaders:{
                            css:ExtractTextPlugin.extract({
                                use:'css-loader',
                                fallback:'vue-style-loader',
                                publicPath: '../'
                            }),
                            scss:ExtractTextPlugin.extract({
                                use:['css-loader','postcss-loader','sass-loader'],
                                fallback:'vue-style-loader',
                                publicPath: '../'
                            }),
                            sass:ExtractTextPlugin.extract({
                                use:['css-loader','postcss-loader','sass-loader'],
                                fallback:'vue-style-loader',
                                publicPath: '../'
                            }),
                            postcss:ExtractTextPlugin.extract({
                                use:['css-loader','postcss-loader'],
                                fallback:'vue-style-loader',
                                publicPath: '../'
                            }),
                        }
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: [nodeModulesPath],
                },
                {
                    test: /\.css$/,
                    use:ExtractTextPlugin.extract({
                        use:['css-loader','postcss-loader'],
                        fallback:'style-loader',
                        publicPath: '../'
                    })
                },
                {
                    test: /\.(scss|sass)$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader', 'postcss-loader', 'sass-loader'],
                        fallback: 'style-loader',
                        publicPath: '../'
                    })
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
                    use:[{
                        loader:'url-loader',
                        options:{
                            limit:10000,
                            name:'img/[hash:8].[name].[ext]'
                        }
                    }]
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    use:[{
                        loader:'url-loader',
                        options:{
                            limit:10000,
                            name:'fonts/[hash:8].[name].[ext]'
                        }
                    }]
                },
            ]
        },
    };

    return config;

})();
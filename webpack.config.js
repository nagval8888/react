const path = require('path');
//const webpack = require('webpack');
//const Case_sensitive = require('case-sensitive-paths-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {

    // Абсолютный путь до папки src
    //context: path.resolve(__dirname, 'src2'),
    //context: path.join(__dirname, 'src4'),
    //context: path.join(__dirname, 'src5'),
    context: path.join(__dirname, 'src'),
    entry: './index',     // 1 входной файл

    /*entry: {
        index: './index',
        styles: './styles.css'
    },*/

    /*entry: {
        index: './index',
        vendor: ['jquery']
    },*/

    // 3 входные файла для bundle2.js
    /*entry: {
        index:    './Home',
        profile: './Profile',
        shop:    './Shop',
        vendor: ['jquery', 'lodash']
    },*/

    output: {
        // выходной скомпилированный файл
        filename: 'bundle.js',
        //filename: '[name].js', // [name](шаблонизатор) = index,profile,shop

        // Абсолютный путь до папки dist
        //path: path.resolve(__dirname, 'dist2')
        path: path.join(__dirname, 'public')
        //path: path.join(__dirname, 'dist3')
        //path: path.join(__dirname, 'dist4')
        //path: path.join(__dirname, 'dist5')
    },

    // Разрешается подключать след. расширения по умолчанию
    /*resolve: {
        extensions: ['.ts', '.js'] // '.css', '.png'
    },*/

    // Loaders:
    module: {
        rules: [
            // typescript-loader
            /*{
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },*/
            // css-loader
            /*{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                /!*use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })*!/
            },*/
            // less-loader
            /*{
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }*/
            /*{
                test: require.resolve('jquery'),
                loader: 'expose-loader?$'
            },*/
            /*{
                test: /no-export.js/,
                loader: 'exports-loader?hiddenConst'
            }*/
            /*{
                test: /\.js$/,
                loader: 'strip-loader',
                options: {
                    strip: ['console*', 'alert']
                }
            }*/
            /*{
                test: /\.png$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash]'
                }
            }*/

        ]
    },


    // Просмотр изменения файла и Компиляция bundle.js налету - true
    //watch : false

    // Source maps
    //devtool: 'eval',
    //devtool: 'source-map',

    plugins: [
        //new Case_sensitive(),
        //new webpack.optimize.UglifyJsPlugin()
        /*new webpack.DefinePlugin({
            VERSION: JSON.stringify('0.0.2'),
            PRODUCTION: false,
            HTML_SUPPORT: true
        })*/
        /*new webpack.ProvidePlugin({
            $: 'jquery'
        })*/
        /*new HtmlWebpackPlugin({
            title: 'webpack web server',
            /!*hash: true,
            /!*minify: {
                html5: true
            },*!/
            template: './template.html'*!/
        }),*/
        //new webpack.HotModuleReplacementPlugin()

        /*new webpack.optimize.CommonsChunkPlugin({
            name: ['common', 'vendor'],
            minChunks: 2
        })*/
        //new ExtractTextWebpackPlugin('[name].css') // передаем шаблонизатор для названия css
        /*new ExtractTextWebpackPlugin({
            filename: 'styles.css',
            allChunks: true
        })*/
    ]

    /*devServer: {
        hot: true
    }*/
};
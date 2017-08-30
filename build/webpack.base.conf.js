let path = require('path');
let utils = require('./utils');
let config = require('../config');
let vueLoaderConfig = require('./vue-loader.conf');
let fs = require('fs');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

let alias = {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src')
};

// 获取所有文件夹  设置别名
let dirList = fs.readdirSync(path.join(__dirname, '../src'));

dirList.forEach(function (item) {
    // 判断是否为文件夹
    let isDir = fs.lstatSync(path.join(__dirname, '../src/' + item)).isDirectory();
    if (isDir) {
        alias[`_${item}`] = path.join(__dirname, '../src/' + item);
    }
});

module.exports = {
    entry: {
        app: ["babel-polyfill", "./src/main.js"]
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: alias
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
};

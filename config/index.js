// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');
const moment = require('moment');

module.exports = {
    build: {
        env: require('./prod.env'),
        // index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        buildDirName: moment().format('YYYYMMDD_HHmm'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 84,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api/default': {
                target: 'http://172.16.5.36',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/default': ''
                }
            },
            '/api/fisAdmin': {
                target: 'http://dev.fisadmin.56qq.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/fisAdmin': ''
                }
            },
            '/api/www': {
                target: 'http://dev.www.56qq.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/www': ''
                }
            },
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
};

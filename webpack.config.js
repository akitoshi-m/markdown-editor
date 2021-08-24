const path = require('path')

module.exports = {
entry: './src/index.ts',
    module: {
        // webpack に対してビルド時に追加で行う処理
        rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    // モジュールとして解決するファイルの拡張子を指定
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist/',
    }
}
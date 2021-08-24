const path = require('path')

module.exports = {
entry: './src/index.tsx',
    module: {
        // webpack に対してビルド時に追加で行う処理
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    // モジュールとして解決するファイルの拡張子を指定
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist/',
    }
}
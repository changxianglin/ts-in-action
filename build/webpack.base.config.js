const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: {
    //     'app': './src/index.jsx'
    // },
    // output: {
    //     filename: '[name].[chunkhash:8].js'
    // },
    entry: {
        app: './src/index.tsx',
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        // extensions: ['.js', '.jsx']
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                // test: /\.jsx?$/,
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // }
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
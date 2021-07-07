const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry:'./src/index.tsx',
    output: {
        path: path.join(__dirname, 'public/js/'),
        publicPath: '/js/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'scss','css'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(jpg|png|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[hash].[ext]',
              }
        }, 
        {
            test: /\.(scss|css)$/,
            use: [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true
            }
            },
            {
                loader: 'sass-loader'
            }
        
        ]}]
    },
    devServer: {
        contentBase: './public',
        writeToDisk: true,
        historyApiFallback: true
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}
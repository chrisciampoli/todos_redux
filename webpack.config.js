module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test:    /\.js$/,
                loader:  'babel-loader',
                exclude: /node_modules/,
                query:   {
                    plugins: ['transform-class-properties', 'transform-decorators-legacy', 'transform-runtime'],
                    presets: ['stage-0', 'stage-3', 'es2015', 'react']
                }
            }
        ]
    }
};
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
                query:   {
                    presets: ['stage-0', 'stage-3', 'es2015', 'react']
                }
            }
        ]
    }
};
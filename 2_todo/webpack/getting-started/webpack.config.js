var path = require('path');

module.exports = {
    // none, deployement, production
    mode: 'none',
    entry: './src/index.js',
    // output: './dist/main.js'
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
    // output: 'dist/main.js'
}
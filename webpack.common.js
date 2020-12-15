  //const path = require('path');
module.exports = {    
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader",
          options:{
            "plugins": [
              [
                "@babel/plugin-transform-runtime",
                 {
                    "absoluteRuntime": false,
                    "corejs": false,
                    "helpers": true,
                    "regenerator": true,
                    "useESModules": false
                 }
              ]
            ]                
          }
        }
      ]
    }

}
const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

// Add React preset
environment.loaders.get('babel').use[0].options.presets.push('@babel/preset-react');

// Add support for JSX files
environment.loaders.append('jsx', {
 test: /\.jsx?$/,
 exclude: /node_modules/,
 use: [
   {
     loader: 'babel-loader',
     options: {
       presets: ['@babel/preset-react'],
     },
   },
 ],
});

// Add support for CSS modules
environment.loaders.append('cssModules', {
 test: /\.module\.css$/,
 use: [
   'style-loader',
   {
     loader: 'css-loader',
     options: {
       modules: true,
     },
   },
 ],
});

// Add support for CSS
environment.loaders.append('css', {
 test: /\.css$/,
 use: ['style-loader', 'css-loader'],
});

// Add support for images
environment.loaders.append('images', {
 test: /\.(png|jpe?g|gif)$/i,
 use: [
   {
     loader: 'file-loader',
     options: {
       name: '[path][name].[ext]',
     },
   },
 ],
});

module.exports = environment;

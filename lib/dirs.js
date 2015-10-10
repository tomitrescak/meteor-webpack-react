var path = require('path');

module.exports = {
  app: process.cwd(),
  root: path.join(__dirname, '..'),
  webpack: path.join(__dirname, 'webpack'),
  meteor:  path.join(process.cwd(), 'meteor_core'),
};

module.exports.assets= path.join(process.cwd(), '.webpack', 'assets');

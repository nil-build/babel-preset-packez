"use strict";

var path = require('path');

var fs = require("fs-extra");

var glob = require('fast-glob');

module.exports = function (appSrc = 'src', appDist = 'dest', options = {}) {
  var defaults = {
    cwd: process.cwd(),
    cleanDist: true,
    globOptions: {}
  };
  appSrc = appSrc || '.';
  options = Object.assign({}, defaults, options);

  if (options.cleanDist) {
    fs.emptyDirSync(path.resolve(options.cwd, appDist));
  }

  glob(["**/?(*).*", "**/*"], Object.assign({
    onlyFiles: false //absolute: true,

  }, options.globOptions, {
    cwd: path.resolve(options.cwd, appSrc)
  })).then(files => {
    files.forEach(file => {
      var absSrcFile = path.resolve(options.cwd, appSrc, file);
      var absDestFile = path.resolve(options.cwd, appDist, file);
      fs.copySync(absSrcFile, absDestFile);
    });
  }).catch(console.error);
};
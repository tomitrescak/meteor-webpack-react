#!/usr/bin/env node

require('shelljs/global');
var dirs = require('../lib/dirs.js');
var path = require('path');

//console.log(JSON.(process.argv));

if (process.argv.length == 2 || process.argv[2] == "dev") {
  var dev = require("../lib/dev.js").run;
  dev();
} else if (process.argv[2] == "prod") {
  var run = require("../lib/prod.js").run;
  run();
} if (process.argv[2] == "create") {
  // copy package.json to project dir
  if (!process.argv[3]) {
    console.log("Please specify the name of the project");
    return;
  }

  var appDir = path.join(dirs.app, process.argv[3])
  var libDir = path.join(dirs.root, 'lib');

  console.log("Creating directory ...");

  // create a project directory
  mkdir("-p", path.join(appDir, '.webpack'));
  cd(appDir);

  console.log("Scaffolding application ...");

  // copy package json
  cp(path.join(libDir, "package.json"), path.join(appDir, 'package.json'));
  cp(path.join(dirs.root, ".babelrc"), path.join(appDir, '.babelrc'));

  // copy meteor directory
  cp('-R', path.join(libDir, 'meteor_core'), appDir);
  cp('-R', path.join(libDir, 'settings'), appDir);
  cp('-R', path.join(libDir, 'app'), appDir);

  console.log("Installing NPM modules (this can take several minutes, please be patient) ...");

  // run npm install
  exec('npm install');

  // Build core.js from project directory 4 copy meteor, example app
  // Done
} else {
  console.log("TODO: Give info on how the plugin is used");
  console.log("metpack or metpack dev: runs a Metpack instance in development mode");
  console.log("metpack prod: runs a Metpack instance in production mode");
  console.log("metpack create <projectName> - initializes a new project");
}

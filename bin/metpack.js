#!/usr/bin/env node

// if (process.argv.length < 2) {

// }

console.log(JSON.stringify(process.argv));

if (process.argv.length == 2 || process.argv[2] == "dev") {
  var dev = require("../lib/dev.js").run;
  dev();
} else if (process.argv[2] == "prod") {
  var run = require("../lib/prod.js").run;
  run();
} else {
  console.log("TODO: Give info on how the plugin is used");
  console.log("metpack or metpack dev: runs a Metpack instance in development mode");
  console.log("metpack prod: runs a Metpack instance in production mode");
  console.log("metpack create <projectName> - initializes a new project");
}

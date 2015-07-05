#! /usr/bin/env node
var chalk = require('chalk')
var isJpeg = require('./index.js')
var filepath = process.argv[2]
if (!filepath) {
  console.error('Please provide a path to a file. isjpeg /path/to/a/file')
  process.exit(-1)
}

isJpeg(filepath, function (err, res) {
  if (res === true) {
    console.log(chalk.green(filepath + ' is JPEG'))
    process.exit(0)
  }
  if (res === false) {
    console.log(chalk.red(filepath + ' is not JPEG'))
    process.exit(1)
  }
  if (err) {
    console.error(err)
    process.exit(-1)
  }
})

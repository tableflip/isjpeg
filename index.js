var fs = require('fs')

module.exports = function isJpeg (filepath, cb) {
  // "start of image" marker
  var magicMarker = 'ffd8'
  var chunks = []
  fs.createReadStream(filepath, { start: 0, end: 1 })
    .on('data', function (chunk) {
      chunks.push(chunk)
    })
    .on('end', function () {
      cb(null, Buffer.concat(chunks).toString('hex') === magicMarker)
    })
    .on('error', function (err) {
      cb(err)
    })
}

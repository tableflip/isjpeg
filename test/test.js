var test = require('tape')
var isJpeg = require('../index.js')
var path = require('path')

test('Is it a jpeg‽', function (t) {
  t.plan(2)
  isJpeg(path.join(__dirname, 'fear-nothing'), function (err, res) {
    t.error(err)
    t.equal(res, true, res + ' fear nothing is JPEG')
  })
})

test('Is it _not_ jpeg‽', function (t) {
  t.plan(2)
  isJpeg(path.join(__dirname, 'max-ogden-ru-hiding'), function (err, res) {
    t.error(err)
    t.equal(res, false, res + ' max-ogden-ru-hiding is not JPEG')
  })
})

test('Is it not there‽', function (t) {
  t.plan(1)
  isJpeg(path.join(__dirname, 'nonesuch'), function (err, res) {
    t.ok(err, err)
  })
})

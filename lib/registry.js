var couchwatch = require('couchwatch')
var EventEmitter = require('events').EventEmitter
var config = require('../config')

var registry = new EventEmitter()
var watcher = couchwatch(config.npm.feed, -1)

watcher.on('row', function (change) {
  registry.emit('change', change)
})

watcher.on('error', function (err) {
  // Downgrade the error event from an EXIT THE PROGRAM to a warn log
  console.warn('couchwatch error', err)

  // Try again in a bit
  setTimeout(function () {
    watcher.init()
  }, 30 * 1000)
})

module.exports = registry

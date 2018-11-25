#!/usr/bin/env node

require('proof')(1, function (okay) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './t/?lain.t.js' ])
    okay(found[0].files.pop(), 't/plain.t.js', 'question')
})

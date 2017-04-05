#!/usr/bin/env node

require('proof')(1, function (assert) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './t/?lain.t.js' ])
    assert(found[0].files.pop(), 't/plain.t.js', 'question')
})

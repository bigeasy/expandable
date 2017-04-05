#!/usr/bin/env node

require('proof')(2, function (assert) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './t/../t/plain.t.js' ])
    assert(found[0].files.pop(), 't/plain.t.js', 'parent')
    found = glob(__dirname + '/..', [ './t/./plain.t.js' ])
    assert(found[0].files.pop(), 't/plain.t.js', 'self')
})

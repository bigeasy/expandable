#!/usr/bin/env node

require('proof')(2, function (assert) {
    var glob = require('../..').glob
    var found
    found = glob(__dirname + '/../..', [ './t/../t/glob/plain.t.js' ])
    assert(found[0].files.pop(), 't/glob/plain.t.js', 'parent')
    found = glob(__dirname + '/../..', [ './t/./glob/plain.t.js' ])
    assert(found[0].files.pop(), 't/glob/plain.t.js', 'self')
})

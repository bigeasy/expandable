#!/usr/bin/env node

require('proof')(2, function (assert) {
    var found
    var glob = require('../..').glob
    found = glob(__dirname + '/../..', [ './t/glob/[p-s]lain.t.js' ])
    assert(found[0].files.pop(), 't/glob/plain.t.js', 'class')
    found = glob(__dirname + '/../..', [ './t/glob/[!s]lain.t.js' ])
    assert(found[0].files.pop(), 't/glob/plain.t.js', 'negated')
})

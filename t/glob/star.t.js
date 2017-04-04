#!/usr/bin/env node

require('proof')(3, function (assert) {
    var glob = require('../..').glob
    var found
    found = glob(__dirname + '/../..', [ './t/*/plain.t.js' ])
    assert(found[0].files.pop(), 't/glob/plain.t.js', "wildcard")
    found = glob(__dirname + '/../..', [ './t/*/*.t.js' ])
    assert(found[0].files.length, 6, "find many")
    assert(found[0].files.sort().pop(), 't/glob/star.t.js', "partial wildcard")
})

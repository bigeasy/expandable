#!/usr/bin/env node

require('proof')(2, function (assert) {
    var glob = require('../..').glob
    var found = glob(__dirname + '/../..', [ './t/glob/plain.t.js' ])
    assert(found[0].files.length, 1, "find one")
    assert(found[0].files.sort().pop(), 't/glob/plain.t.js', "found the file we're expecting")
})

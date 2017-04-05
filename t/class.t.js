#!/usr/bin/env node

require('proof')(2, function (assert) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './t/[p-s]lain.t.js' ])
    assert(found[0].files.pop(), 't/plain.t.js', 'class')
    found = glob(__dirname + '/..', [ './t/[!s]lain.t.js' ])
    assert(found[0].files.pop(), 't/plain.t.js', 'negated')
})

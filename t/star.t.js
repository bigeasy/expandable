#!/usr/bin/env node

require('proof')(3, function (assert) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './*/plain.t.js' ])
    assert(found[0].files.pop(), 't/plain.t.js', 'wildcard')
    found = glob(__dirname + '/..', [ './*/*.t.js' ])
    assert(found[0].files.length, 6, 'find many')
    assert(found[0].files.sort().pop(), 't/star.t.js', 'partial wildcard')
})

#!/usr/bin/env node

require('proof')(8, function (assert) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './t/{plain,class}.t.js' ])
    assert(found[0].files.length, 2, 'find many')
    assert(found[0].files.sort().pop(), 't/plain.t.js', 'alternation')
    found = glob(__dirname + '/..', [ './t/{plai?,class}.t.js' ])
    assert(found[0].files.length, 2, 'find many with question')
    assert(found[0].files.sort().pop(), 't/plain.t.js', 'alternation with question')
    found = glob(__dirname + '/..', [ './t/{p*,class}.t.js' ])
    assert(found[0].files.length, 2, 'find many with star')
    assert(found[0].files.sort().pop(), 't/plain.t.js', 'alternation with star')
    found = glob(__dirname + '/..', [ './t/{{plain,star},class}.t.js' ])
    assert(found[0].files.length, 3, 'find many with alternation')
    assert(found[0].files.sort().pop(), 't/star.t.js', 'alternation with alternation')
})

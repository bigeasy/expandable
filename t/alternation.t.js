#!/usr/bin/env node

require('proof')(8, function (okay) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './t/{plain,class}.t.js' ])
    okay(found[0].files.length, 2, 'find many')
    okay(found[0].files.sort().pop(), 't/plain.t.js', 'alternation')
    found = glob(__dirname + '/..', [ './t/{plai?,class}.t.js' ])
    okay(found[0].files.length, 2, 'find many with question')
    okay(found[0].files.sort().pop(), 't/plain.t.js', 'alternation with question')
    found = glob(__dirname + '/..', [ './t/{p*,class}.t.js' ])
    okay(found[0].files.length, 2, 'find many with star')
    okay(found[0].files.sort().pop(), 't/plain.t.js', 'alternation with star')
    found = glob(__dirname + '/..', [ './t/{{plain,star},class}.t.js' ])
    okay(found[0].files.length, 3, 'find many with alternation')
    okay(found[0].files.sort().pop(), 't/star.t.js', 'alternation with alternation')
})

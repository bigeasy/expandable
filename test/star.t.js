require('proof')(3, prove)

function prove (okay) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './*/plain.t.js' ])
    okay(found[0].files.pop(), 'test/plain.t.js', 'wildcard')
    found = glob(__dirname + '/..', [ './*/*.t.js' ])
    okay(found[0].files.length, 6, 'find many')
    okay(found[0].files.sort().pop(), 'test/star.t.js', 'partial wildcard')
}

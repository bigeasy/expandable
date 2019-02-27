require('proof')(2, prove)

function prove (okay) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './test/[p-s]lain.t.js' ])
    okay(found[0].files.pop(), 'test/plain.t.js', 'class')
    found = glob(__dirname + '/..', [ './test/[!s]lain.t.js' ])
    okay(found[0].files.pop(), 'test/plain.t.js', 'negated')
}

require('proof')(2, prove)

function prove (okay) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './t/[p-s]lain.t.js' ])
    okay(found[0].files.pop(), 't/plain.t.js', 'class')
    found = glob(__dirname + '/..', [ './t/[!s]lain.t.js' ])
    okay(found[0].files.pop(), 't/plain.t.js', 'negated')
}

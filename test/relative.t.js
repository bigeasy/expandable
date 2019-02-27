require('proof')(2, prove)

function prove (okay) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './test/../test/plain.t.js' ])
    okay(found[0].files.pop(), 'test/plain.t.js', 'parent')
    found = glob(__dirname + '/..', [ './test/./plain.t.js' ])
    okay(found[0].files.pop(), 'test/plain.t.js', 'self')
}

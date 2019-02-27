require('proof')(2, prove)

function prove (okay) {
    var glob = require('..')
    var found = glob(__dirname + '/..', [ './test/plain.t.js' ])
    okay(found[0].files.length, 1, 'find one')
    okay(found[0].files.sort().pop(), 'test/plain.t.js', 'found the file we\'re expecting')
}

require('proof')(1, prove)

function prove (okay) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './test/?lain.t.js' ])
    okay(found[0].files.pop(), 'test/plain.t.js', 'question')
}

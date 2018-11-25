require('proof')(1, prove)

function prove (okay) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './t/?lain.t.js' ])
    okay(found[0].files.pop(), 't/plain.t.js', 'question')
}

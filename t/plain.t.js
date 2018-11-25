require('proof')(2, function (okay) {
    var glob = require('..')
    var found = glob(__dirname + '/..', [ './t/plain.t.js' ])
    okay(found[0].files.length, 1, 'find one')
    okay(found[0].files.sort().pop(), 't/plain.t.js', 'found the file we\'re expecting')
})

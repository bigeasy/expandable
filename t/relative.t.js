require('proof')(2, function (okay) {
    var glob = require('..')
    var found
    found = glob(__dirname + '/..', [ './t/../t/plain.t.js' ])
    okay(found[0].files.pop(), 't/plain.t.js', 'parent')
    found = glob(__dirname + '/..', [ './t/./plain.t.js' ])
    okay(found[0].files.pop(), 't/plain.t.js', 'self')
})

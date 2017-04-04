#!/usr/bin/env node

require('proof')(8, function (assert) {
  var found;
  var glob = require('../..').glob
  found = glob(__dirname + '/../..', [ './t/glob/{plain,class}.t.js' ]);
  assert(found[0].files.length, 2, "find many");
  assert(found[0].files.sort().pop(), 't/glob/plain.t.js', "alternation");
  found = glob(__dirname + '/../..', [ './t/glob/{plai?,class}.t.js' ]);
  assert(found[0].files.length, 2, "find many with question");
  assert(found[0].files.sort().pop(), 't/glob/plain.t.js', "alternation with question");
  found = glob(__dirname + '/../..', [ './t/glob/{p*,class}.t.js' ]);
  assert(found[0].files.length, 2, "find many with star");
  assert(found[0].files.sort().pop(), 't/glob/plain.t.js', "alternation with star");
  found = glob(__dirname + '/../..', [ './t/glob/{{plain,star},class}.t.js' ]);
  assert(found[0].files.length, 3, "find many with alternation");
  assert(found[0].files.sort().pop(), 't/glob/star.t.js', "alternation with alternation");
});

var slice = [].slice, path = require('path'), fs = require('fs');

function die () {
  console.log.apply(console, slice.call(arguments, 0));
  process.exit(1);
}

function say () {
  console.log.apply(console, slice.call(arguments, 0));
}

const REGEX = new RegExp('(\\' + '/ . * + ? | ( ) [ ] { } \\'.split(' ').join('|\\') + ')', 'g');

function regular (text) { return text.replace(REGEX, '\\$1') }

function find (base, directory, pattern, index, found) {
  if (index == pattern.length) {
    found.push(path.relative(base, directory));
    return;
  }

  if (pattern[index]('.')) {
    find(base, directory, pattern, index + 1, found);
    return;
  }

  if (pattern[index]('..')) {
    find(base, path.dirname(directory), pattern, index + 1, found);
    return;
  }

  if (!fs.statSync(directory).isDirectory()) {
    return
  }

  fs.readdirSync(directory).forEach(function (file) {
    if (pattern[index](file)) {
      find(base, path.resolve(directory, file), pattern, index + 1, found);
    }
  });
}

function explode (pattern) {
  var exploded = [];
  pattern.split('/').forEach(function (unix) {
    unix.split('\\').forEach(function (part) {
      exploded.push(part);
    });
  });
  return exploded;
}

function alternation ($) {
  var regex = '(', $1;
  while ($1 = /^([^{}]*)([{}])(.*)$/.exec($[3])) {
    $ = $1;
    regex += $[1].split(',').map(function (alt) { return compile(alt) }).join('|');
    if ($[2] == '}') {
      regex += ')';
    } else {
      $ = alternation($);
      regex += $[1];
    }
  }
  $[1] = regex;
  return $;
}

function compile (glob) {
  var $, regex = '';
  while ($ = /^(.*?)(\*|\?|\[[^\]]+\]|{)(.*)$/.exec(glob)) {
    regex += regular($[1]);
    switch ($[2][0]) {
    case '*':
      regex += '.*'
      break;
    case '?':
      regex += '.'
      break;
    case '[':
      regex += $[2].replace(/^\[!/, '[^');
      break;
    case '{':
      $ = alternation($);
      regex += $[1];
      break;
    }
    glob = $[3];
  }
  return regex + regular(glob);
}

function glob (directory, argv) {
  var found = [];
  argv.forEach(function (pattern) {
    var exploded = explode(pattern), match;

    var compiled = exploded.map(function (part) {
      var regex;
      if (/^\.\.?$/.test(part)) {
        return function (file) { return file == part }
      }
      regex = new RegExp('^' + compile(part) + '$');
      return function (file) { return !/^\.\.?/.test(file) && regex.test(file) }
    });

    found.push(match = { path: pattern, files: [] });
    exploded = explode(directory);
    if (exploded[0] == '') exploded[0] = '/';
    var normalized = path.normalize(path.join.apply(path, exploded))
    find(normalized, normalized, compiled, 0, match.files);
  });
  return found;
}

exports.glob = glob;

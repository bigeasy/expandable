# Expandable [![Build Status](https://travis-ci.org/bigeasy/expandable.png?branch=master)](https://travis-ci.org/bigeasy/expandable)

UNIX shell style file globbing in that painlessly ports to Windows.

## Cross-Platform Wildcard Patterns

Because one of the most common argument values is a file path, **Arguable**
provides some helper functions for dealing with paths Windows. **Arguable** can
resolve UNIX file paths on Windows as if they were invoked in a UNIX shell.
**Arguable** will convert the slashes and expand wildcards. That is, it will
treat `*/*.t` as a file glob.

```javascript
var arguable = require('arguable')
  , frobinator = require('frobinator')
  ;

arguable.glob(process.cwd(), [ 't/test/example.t', 't/test/*.t' ]).forEach(function (glob) {
  if (!glob.files.length) {
    throw new Error('file not found: ' + glob.pattern);
  } else {
    glob.files.forEach(function (file) {
      frobinator.frobinate(1, path.resolve(glob.base, file));
    });
  }
});
```


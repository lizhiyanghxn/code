"use strict";

function pascalCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-(\w)/g, function (m, n) {
    return n.toUpperCase();
  });
}

var req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);

req.keys().forEach(function (mod) {
  var v = req(mod);

  if (v && v.default) {
    v = v.default;
  }

  var match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);

  if (match && match[1]) {
    exports[pascalCase(match[1])] = v;
  }
});
module.exports = exports;
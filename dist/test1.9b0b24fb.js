// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.box * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.box *::before,.box *::after{\n  box-sizing: border-box;\n}\n.box {\n  min-height: 50vh;\n  min-width: 300px;\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n}\n\n.head {\n  border: 4px solid #000;\n  width: 300px;\n  height: 300px;\n  border-radius: 100%;\n  background: #3c9dca;\n  position: relative;\n}\n\n.white {\n  position: absolute;\n  border: 1px solid #000;\n  top: 72px;\n  left: 9%;\n  width: 240px;\n  height: 220px;\n  border-radius: 100%;\n  background: #fff;\n}\n\n.eye {\n  position: relative;\n  border: 1px solid #000;\n  width: 50px;\n  height: 70px;\n  border-radius: 100%;\n  float: left;\n  top: 50px;\n  left: 100px;\n  background: #fff;\n}\n\n.eye > .black {\n  display: inline-block;\n  border: 1px solid #000;\n  border-radius: 100%;\n  width: 12px;\n  height: 26px;\n  float: left;\n  margin-top: 30px;\n  margin-left: 60%;\n  background: #000;\n  animation: move 4s ease infinite;\n}\n\n@keyframes move {\n  25% {\n    margin-top: 30px;\n    margin-left: 10%;\n  }\n  50% {\n    margin-top: 40px;\n    margin-left: 30%;\n  }\n  75% {\n    margin-top: 40px;\n    margin-left: 50%;\n  }\n  100% {\n    margin-top: 30px;\n    margin-left: 70%;\n  }\n}\n\n.eye > .black::after {\n  content: '';\n  border: 1px solid #000;\n  border-radius: 100%;\n  width: 6px;\n  height: 8px;\n  display: inline-block;\n  margin-left: 20%;\n  background: #fff;\n  /*z-index: 1;*/\n}\n\n.nose {\n  width: 20px;\n  height: 20px;\n  border: 1px solid #000;\n  border-radius: 100%;\n  position: relative;\n  top: 110px;\n  left: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  background: #b90319;\n}\n\n.nose::after {\n  display: inline-block;\n  content: '';\n  width: 8px;\n  height: 8px;\n  border: 1px solid #000;\n  border-radius: 100%;\n  background: #fff;\n  margin-left: 2px;\n  margin-bottom: 2px;\n}\n\n.nose::before {\n  float: left;\n  content: '';\n  height: 140px;\n  border: 1px solid #000;\n  position: absolute;\n  margin-top: 100%;\n  left: 7px;\n}\n\n.mouth {\n  width: 190px;\n  height: 190px;\n  border: 1px solid #000;\n  border-radius: 100%;\n  position: relative;\n  top: 60px;\n  left: 50%;\n  margin-left: -95px;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  transform: rotate(45deg);\n}\n\n.mouth::after {\n  content: '';\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  position: absolute;\n  transform: rotate(45deg);\n  bottom: 10px;\n  right: 140px;\n  background: #fff;\n}\n\n.mouth::before {\n  content: '';\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  position: absolute;\n  transform: rotate(45deg);\n  top: 25px;\n  left: 155px;\n  background: #fff;\n}\n\n.beard.left {\n  width: 70px;\n  height: 2px;\n  transform: rotate(20deg);\n  top: -90px;\n  left: 40px;\n  position: relative;\n  border-radius: 10%;\n  background: #000;\n  list-style: none;\n  display: block;\n}\n\n.beard.left::before {\n  content: '';\n  width: 70px;\n  height: 2px;\n  top: 32px;\n  transform: rotate(-20deg);\n  position: relative;\n  border-radius: 10%;\n  background: #000;\n  list-style: none;\n  display: block;\n}\n\n.beard.left::after {\n  content: '';\n  transform: rotate(-40deg);\n  width: 70px;\n  height: 2px;\n  top: 55px;\n  left: 16px;\n  position: relative;\n  border-radius: 10%;\n  background: #000;\n  list-style: none;\n  display: block;\n}\n\n.beard.right {\n  width: 70px;\n  height: 2px;\n  transform: rotate(200deg);\n  top: -32px;\n  left: 190px;\n  position: relative;\n  border-radius: 10%;\n  background: #000;\n  list-style: none;\n  display: block;\n}\n\n.beard.right::before {\n  content: '';\n  width: 70px;\n  height: 2px;\n  top: 32px;\n  transform: rotate(-20deg);\n  position: relative;\n  border-radius: 10%;\n  background: #000;\n  list-style: none;\n  display: block;\n}\n\n.beard.right::after {\n  content: '';\n  transform: rotate(-40deg);\n  width: 70px;\n  height: 2px;\n  top: 55px;\n  left: 16px;\n  position: relative;\n  border-radius: 10%;\n  background: #000;\n  list-style: none;\n  display: block;\n}\n";
var _default = string;
exports.default = _default;
},{}],"test1.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
var id = undefined;
var time = 100;
var isPlaying = false;

var play = function play() {
  if (isPlaying) {
    return;
  }

  id = setInterval(function () {
    demo.innerText = _css.default.substr(0, n);
    demo2.innerHTML = _css.default.substr(0, n);
    n += 1;
    demo.scrollTop = demo.scrollHeight;
  }, time);
};

var pause = function pause() {
  window.clearInterval(id);
  isPlaying = false;
};

var slow = function slow() {
  pause();
  time = 300;
  play();
};

var normal = function normal() {
  pause();
  time = 100;
  play();
};

var fast = function fast() {
  pause();
  time = 10;
  play();
};

play();
isPlaying = true;

btnPause.onclick = function () {
  pause(); // id = undefined;
};

btnPlay.onclick = function () {
  play();
  isPlaying = true;
};

btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;
console.log('test111.js');
},{"./css":"css.js"}],"../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60694" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test1.js"], null)
//# sourceMappingURL=/test1.9b0b24fb.js.map
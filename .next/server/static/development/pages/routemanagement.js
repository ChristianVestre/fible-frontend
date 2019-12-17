module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/routemanagement.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/components/route-management/selector.tsx":
/*!******************************************************!*\
  !*** ./src/components/route-management/selector.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _selectorItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectorItem */ "./src/components/route-management/selectorItem.tsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/redux/actions/uiActions */ "./src/lib/redux/actions/uiActions.ts");
/* harmony import */ var _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/redux/actions/dataActions */ "./src/lib/redux/actions/dataActions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/selector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "selector__Container",
  componentId: "sc-1ihwjbd-0"
})(["margin:1em;border:1px solid lightgray;border-radius:2em;width:100%;height:100%;position:relative;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "selector__Title",
  componentId: "sc-1ihwjbd-1"
})(["padding:8px;"]);
const RouteList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "selector__RouteList",
  componentId: "sc-1ihwjbd-2"
})(["padding:8px;"]);

const Selector = props => {
  const [addRoute, {
    data
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useMutation"])(graphql_tag__WEBPACK_IMPORTED_MODULE_13___default.a`
    mutation setRoute{setRoute{
        id
    }
    }
    `);

  const handleInputScreenButton = async props => {
    console.log(props.type);

    if (props.type == "routes") {
      props.initializeInputScreenData({
        htype: props.type,
        user: props.dataState.routeMgmt.user
      });
      props.initializeInputScreenUi({
        dispatch: props.type
      });
      const route = await addRoute();
      console.log(data);
      console.log(route.data.setRoute.id);
      js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set("hid", route.data.setRoute.id);
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
        pathname: '/inputscreen'
      });
    } else {
      props.loadStopAndPoiManagerState({
        htype: props.type
      });
      let firstLetter = props.type.substring(0, 1);
      let rest = props.type.substring(1);
      let title = firstLetter + rest.toLowerCase() + " manager";
      props.setTitle({
        title: title
      });
    }
  };

  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, props.type.substring(0, 1).toUpperCase() + props.type.substring(1)), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Droppable"], {
    droppableId: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, provided => __jsx(RouteList, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: provided.innerRef
  }, provided.droppableProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), props.listItems.map((itemData, index) => __jsx(_selectorItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: itemData.id,
    type: props.type,
    itemData: itemData,
    index: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  })), provided.placeholder)), __jsx(InputScreenButton, {
    onClick: () => handleInputScreenButton(props),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPlus"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })));
};

const mapStateToProps = state => {
  // console.log(state)
  return {
    dataState: state.data,
    uiState: state.ui,
    loadStopAndPoiManagerState: state.loadStopAndPoiManagerState
  };
}; //export default Selector


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, {
  initializeInputScreenUi: _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_8__["initializeInputScreenUi"],
  initializeInputScreenData: _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_9__["initializeInputScreenData"],
  loadStopAndPoiManagerState: _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_8__["loadStopAndPoiManagerState"],
  setTitle: _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_8__["setTitle"]
})(Selector));
const InputScreenButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "selector__InputScreenButton",
  componentId: "sc-1ihwjbd-3"
})(["position:absolute;bottom:0;right:0;font-size:6vh;border:0;color:none;background-color:transparent;:focus{outline:none;}"]);

/***/ }),

/***/ "./src/components/route-management/selectorItem.tsx":
/*!**********************************************************!*\
  !*** ./src/components/route-management/selectorItem.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/redux/actions/uiActions */ "./src/lib/redux/actions/uiActions.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/selectorItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const SelectorItem = props => {
  const [getHtypeWithComponents, {
    loading,
    data
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useLazyQuery"])(graphql_tag__WEBPACK_IMPORTED_MODULE_11___default.a`query getHtypeWithComponents 
    {   getHtypeWithComponents{
            htype{
                route{id name ownerid components}
                stop{id name ownerid components}
                poi{id name ownerid components}
            } 
            components{id content type}}
    }`);

  const handleEditRoutes = async e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.set("hid", props.itemData.id); // Cookie.
    //  const resp = await getHtypeWithComponents()

    const selectedId = props.itemData.id;
    const htype = props.type; //props.updateSelectorManagerState({selectedId,htype})

    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
      pathname: '/inputscreen',
      query: {
        id: props.itemData.id
      }
    } //'inputscreen'
    ); //  Router.replace('/routemanagement','/inputscreen')
  };

  const handleSelectorManagerStateUpdate = e => {
    const selectedId = props.itemData.id;
    const htype = props.type;
    props.updateRoutemgmtState({
      selectedId,
      htype
    });
  };

  return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Draggable"], {
    draggableId: props.itemData.id,
    index: props.index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, provided => __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.draggableProps, provided.dragHandleProps, {
    ref: provided.innerRef,
    onClick: e => handleSelectorManagerStateUpdate(e) //todo fix state
    ,
    color: props.itemData.id == props.uiState.routeMgmt.selector["selected" + props.type] ? "salmon" : "lightgray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx(Headline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, props.itemData.name), __jsx(EditButton, {
    onClick: e => handleEditRoutes(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }))));
};

const mapStateToProps = state => {
  return {
    uiState: state.ui,
    updateRoutemgmtState: state.updateSelectorManagerState
  };
}; //export default SelectorItem


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  removeRoute: _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__["removeRoute"],
  updateRoutemgmtState: _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__["updateRoutemgmtState"]
})(SelectorItem));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "selectorItem__Container",
  componentId: "sc-1qe6ivb-0"
})(["border:1px solid;border-color:", ";border-radius:2em;height:8vh;padding:8px;margin-bottom:1em;background-color:white;:hover{border-color:rgba(250,128,114,0.3 );}"], props => props.color);
const Headline = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
  displayName: "selectorItem__Headline",
  componentId: "sc-1qe6ivb-1"
})(["font-size:2vh;font-weight:lighter;position:relative;user-select:none;top:10%;left:20%;margin:0;color:black;border:none;background:none;text-decoration:none;"]);
const EditButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "selectorItem__EditButton",
  componentId: "sc-1qe6ivb-2"
})(["position:relative;bottom:2vh;left:95%;margin-right:3vw;font-size:2vh;border:0;color:none;background-color:transparent;cursor:pointer;:focus{outline:none;}"]);
/*
handleremovedroutes
        //prevent select state update aswell
        e.stopPropagation()
        var itemId = props.itemData.id
        //for removing columns when deleting list items
        var dispatch = props.type == "STOPS" ? "STOP_DESELECT" : dispatch = "ROUTE_DESELECT"
        var removeIndex = props.index;
        var removeColumn = props.columnId;
        props.removeRoute({removeIndex,removeColumn});
        props.updateSelectorManagerState({itemId,dispatch})

        */

/***/ }),

/***/ "./src/components/route-management/selectorManager.tsx":
/*!*************************************************************!*\
  !*** ./src/components/route-management/selectorManager.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./src/components/route-management/selector.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/redux/actions/uiActions */ "./src/lib/redux/actions/uiActions.ts");

var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/selectorManager.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const SelectorManager = props => {
  //console.log(props)
  const onDragEnd = result => {
    const {
      destination,
      source,
      draggableId
    } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId == source.droppableId && destination.index == source.index) {
      return;
    }

    const columnId = source.droppableId;
    const column = props.uiState.columns[source.droppableId];

    const newOrder = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(column.ids);

    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index, 0, draggableId); // this.props.updateOrder({ newOrder, columnId })
  };

  const selectorFunction = props => {
    switch (props.type) {
      case "routes":
        {
          //console.log(props.dataState.routeMgmt.user.routes)
          const selector = props.dataState.routeMgmt.user.routes;
          let listItems;
          listItems = selector ? selector.map(route => props.dataState.routeMgmt.routes[route.id]) : [];
          return __jsx(_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: "routes",
            selector: selector,
            type: "routes",
            listItems: listItems,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: undefined
          });
        }

      case "stops":
        {
          const selector = props.dataState.routeMgmt.user.stops;
          let listItems;
          listItems = selector ? listItems = selector.map(stop => props.dataState.routeMgmt.stops[stop.id]) : [];
          return __jsx(_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: "stops",
            selector: selector,
            type: "stops",
            listItems: listItems,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: undefined
          });
        }

      case "pois":
        {
          const selector = props.dataState.routeMgmt.user.stops;
          let listItems;
          listItems = selector ? selector.map(poi => props.dataState.routeMgmt.pois[poi.id]) : [];
          return __jsx(_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: "pois",
            selector: selector,
            type: "pois",
            listItems: listItems,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: undefined
          });
        }

      default:
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: undefined
        }, "wrong");
    }
  };

  return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["DragDropContext"], {
    onDragEnd: result => onDragEnd(result),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, selectorFunction(props));
};

const mapStateToProps = state => {
  return {
    selectorState: state.selector,
    uiState: state.ui,
    dataState: state.data,
    updateOrder: state.updateOrder
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  updateOrder: _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_5__["updateOrder"],
  updateRoutemgmtState: _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_5__["updateRoutemgmtState"]
})(SelectorManager));

/***/ }),

/***/ "./src/components/route-management/stateManager.tsx":
/*!**********************************************************!*\
  !*** ./src/components/route-management/stateManager.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _selectorManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectorManager */ "./src/components/route-management/selectorManager.tsx");
/* harmony import */ var _stopsandpoi_components_sandpManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stopsandpoi-components/sandpManager */ "./src/components/route-management/stopsandpoi-components/sandpManager.tsx");
var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/stateManager.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const RouteManagementStateManager = props => {
  const SelectorChoice = props => {
    //   console.log(props.state.htypes.getRoutes)
    switch (props.uiState.routeMgmt.selector.managerUiCode) {
      case "RO":
        {
          return __jsx(OneSelectorWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: undefined
          }, __jsx(_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "routes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: undefined
          }));
        }

      case "ROST":
        {
          return __jsx(TwoSelectorsWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: undefined
          }, __jsx(_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "routes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: undefined
          }), __jsx(_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "stops",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: undefined
          }));
        }

      case "ROSTPO":
        {
          return __jsx(ThreeSelectorsWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: undefined
          }, __jsx(_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "routes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: undefined
          }), __jsx(_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "stops",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: undefined
          }), __jsx(_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "pois",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: undefined
          }));
        }

      case "MAST":
        {
          return __jsx(ManagerWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: undefined
          }, __jsx(_stopsandpoi_components_sandpManager__WEBPACK_IMPORTED_MODULE_4__["default"], {
            type: "stops",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: undefined
          }));
        }

      case "MAPO":
        {
          return __jsx(ManagerWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: undefined
          }, __jsx(_stopsandpoi_components_sandpManager__WEBPACK_IMPORTED_MODULE_4__["default"], {
            type: "pois",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: undefined
          }));
        }

      default:
        {
          return __jsx(OneSelectorWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: undefined
          }, __jsx(_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "routes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: undefined
          }));
        }
    }
  };

  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, SelectorChoice(props));
};

const mapStateToProps = state => {
  return {
    uiState: state.ui,
    dataState: state.data
  };
}; //export default RouteManagementStateManager


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(RouteManagementStateManager));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stateManager__Container",
  componentId: "sc-12qph2w-0"
})(["width:100vw;height:80vh;position:absolute;bottom:3vh;"]);
const OneSelectorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stateManager__OneSelectorWrapper",
  componentId: "sc-12qph2w-1"
})(["position:relative;width:30vw;left:35vw;height:100%;margin:0;padding:0;align-content:center;display:flex;flex-direction:row;bottom:5%;"]);
const TwoSelectorsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stateManager__TwoSelectorsWrapper",
  componentId: "sc-12qph2w-2"
})(["position:relative;left:20vw;width:60vw;height:100%;margin:0;padding:0;align-content:center;display:flex;flex-direction:row;bottom:5%;"]);
const ThreeSelectorsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stateManager__ThreeSelectorsWrapper",
  componentId: "sc-12qph2w-3"
})(["position:relative;margin:0;padding:0;width:90vw;height:100%;left:5vw;align-content:center;display:flex;flex-direction:row;bottom:5%;"]);
const ManagerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stateManager__ManagerWrapper",
  componentId: "sc-12qph2w-4"
})(["position:relative;margin:0;padding:0;width:80vw;height:96%;left:10vw;align-content:center;justify-content:center;display:flex;flex-direction:row;bottom:5%;border:1px solid lightgray;border-radius:0.5vh;top:0;"]);

/***/ }),

/***/ "./src/components/route-management/stopsandpoi-components/listItem.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/route-management/stopsandpoi-components/listItem.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-draggable */ "react-draggable");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/stopsandpoi-components/listItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ListEntry = props => __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_2___default.a, {
  axis: "y",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(Wrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(Headline, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, props.headline)));

/* harmony default export */ __webpack_exports__["default"] = (ListEntry);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "listItem__Wrapper",
  componentId: "xu3lmk-0"
})(["height:10%;border:solid;position:relative;left:1%;width:98%;border-radius:2em;margin-top:1em;border-width:0.1em;border-color:grey;"]);
const Headline = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "listItem__Headline",
  componentId: "xu3lmk-1"
})(["font-size:1.2em;font-weight:lighter;position:relative;user-select:none;top:10%;left:20%;margin:0;color:black;border:none;background:none;text-decoration:none;"]);
const StopsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "listItem__StopsWrapper",
  componentId: "xu3lmk-2"
})(["display:flex;flex-direction:row;"]);
const Stops = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "listItem__Stops",
  componentId: "xu3lmk-3"
})(["font-size:0.8em;font-weight:lighter;position:relative;user-select:none;top:48%;left:23%;margin:0;margin-left:0.2em;color:black;border:none;background:none;text-decoration:none;"]);

/***/ }),

/***/ "./src/components/route-management/stopsandpoi-components/sandpManager.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/route-management/stopsandpoi-components/sandpManager.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/redux/actions/uiActions */ "./src/lib/redux/actions/uiActions.ts");
/* harmony import */ var _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/redux/actions/dataActions */ "./src/lib/redux/actions/dataActions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sandpSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sandpSelector */ "./src/components/route-management/stopsandpoi-components/sandpSelector.tsx");
var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/stopsandpoi-components/sandpManager.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









let allList = [];

const StopsAndPois = props => {
  const handleInputScreenButton = () => {
    console.log("hello");
    undefined.props.stopAndPoiManagerController();
  };

  const onDragEnd = result => {//todo
  };

  return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__["DragDropContext"], {
    onDragEnd: result => onDragEnd(result),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(InputScreenButton, {
    onClick: handleInputScreenButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), allList = props.dataState.user[props.uiState.selector.htype].map(element => props.dataState[props.uiState.selector.htype][element.id]), __jsx(_sandpSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "ALL",
    list: allList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx(_sandpSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "SELECTED",
    list: allList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }));
};

const mapStateToProps = state => {
  return {
    dataState: state.data,
    uiState: state.ui,
    initializeInputScreenState: state.initializeInputScreenState,
    stopAndPoiManagerController: state.stopAndPoiManagerController
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  initializeInputScreenUi: _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_4__["initializeInputScreenUi"],
  initializeHtype: _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_5__["initializeHtype"],
  stopAndPoiManagerController: _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_4__["stopAndPoiManagerController"]
})(StopsAndPois));
const InputScreenButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "sandpManager__InputScreenButton",
  componentId: "sc-1r16ho1-0"
})(["position:absolute;bottom:0;right:0;font-size:6vh;border:0;color:none;background-color:transparent;:focus{outline:none;}"]);

/***/ }),

/***/ "./src/components/route-management/stopsandpoi-components/sandpSelector.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/route-management/stopsandpoi-components/sandpSelector.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _listItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listItem */ "./src/components/route-management/stopsandpoi-components/listItem.tsx");


var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/stopsandpoi-components/sandpSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






class SandpSelector extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "titleHandler", () => {
      const htypeParentLookup = {
        STOPS: "route",
        POIS: "stop"
      };
      let title = "";

      if (this.props.type == "ALL") {
        title = this.props.uiState.selector.htype.toLowerCase() + " library";
      } else {
        title = this.props.uiState.selector.htype.toLowerCase() + " in " + htypeParentLookup[this.props.uiState.selector.htype];
      }

      return title;
    });
  }

  render() {
    return __jsx(ContainerStyled, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(TitleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, this.titleHandler()), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["Droppable"], {
      droppableId: "simulator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, provided => __jsx(SandpContainerStyled, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: provided.innerRef
    }, provided.droppableProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), this.props.list.map((elem, index) => __jsx(_listItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      headline: elem.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })), provided.placeholder)));
  }

}

const mapStateToProps = state => {
  return {
    uiState: state.ui,
    dataState: state.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(SandpSelector));
const ContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "sandpSelector__ContainerStyled",
  componentId: "unqvqs-0"
})(["width:30vw;height:88%;align-self:center;justify-self:flex-end;display:flex;align-content:center;justify-content:center;margin-left:5vw;margin-right:5vw;"]);
const SandpContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "sandpSelector__SandpContainerStyled",
  componentId: "unqvqs-1"
})(["width:30vw;height:96%;align-self:center;justify-self:center;display:flex;align-content:center;justify-content:center;border-style:solid;border-radius:1.5em;border-color:lightgrey;border-width:0.05em;"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "sandpSelector__Image",
  componentId: "unqvqs-2"
})(["border-radius:1.5em;max-width:100%;max-height:30%;height:auto;width:auto;display:block;object-fit:cover;overflow:hidden;"]);
const TitleStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "sandpSelector__TitleStyle",
  componentId: "unqvqs-3"
})(["position:absolute;top:5%;font-size:4vh;color:black;border:none;background:none;text-decoration:none;padding-left:1em;font-weight:lighter;text-align:center;margin:0;padding:0;"]);

/***/ }),

/***/ "./src/components/route-management/title.tsx":
/*!***************************************************!*\
  !*** ./src/components/route-management/title.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/title.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Title = props => __jsx(TitleStyle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Welcome ", props.name, ", here are your routes!"); //const mapStateToProps = state => {
// return {ui:state.ui};
//};


/* harmony default export */ __webpack_exports__["default"] = (Title); //export default connect(mapStateToProps)(Title);

const TitleStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "title__TitleStyle",
  componentId: "sc-184qkc3-0"
})(["position:absolute;top:3%;font-size:2.5em;color:black;border:none;background:none;text-decoration:none;padding-left:1em;font-weight:lighter;text-align:center;margin:0;padding:0;"]);

/***/ }),

/***/ "./src/components/shared-components/logoutButton.tsx":
/*!***********************************************************!*\
  !*** ./src/components/shared-components/logoutButton.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_redirect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/redirect */ "./src/lib/redirect.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/shared-components/logoutButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const LogoutButton = props => {
  const client = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useApolloClient"])();
  const LOGOUT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  mutation Logout {
    logout
  }`;

  const onCompleted = () => {
    client.cache.reset().then(() => {
      Object(_lib_redirect__WEBPACK_IMPORTED_MODULE_6__["default"])({}, '/');
    });
    props.cleanUser();
    document.cookie = "qid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.remove('qid');
  };

  const onError = error => {
    // If you want to send error to external service?
    console.error(error);
  };

  const [logout, {
    error
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(LOGOUT, {
    onCompleted,
    onError
  });
  return __jsx(StyledWrapper, {
    onClick: () => {
      logout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(StyledText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Logout"), __jsx(StyledFontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDoorOpen"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }));
}; //const mapStateToProps = state => {
//    return { cleanUser: state.cleanUser };
//  };


/* harmony default export */ __webpack_exports__["default"] = (LogoutButton); //  export default connect(mapStateToProps,{cleanUser})(LogoutButton);

const StyledFontAwesomeIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"]).withConfig({
  displayName: "logoutButton__StyledFontAwesomeIcon",
  componentId: "pmozmx-0"
})(["font-size:3vh;"]);
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "logoutButton__StyledWrapper",
  componentId: "pmozmx-1"
})(["display:flex;flex-direction:row;width:5vw;height:5vh;position:absolute;right:10vw;top:3vh;"]);
const StyledText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "logoutButton__StyledText",
  componentId: "pmozmx-2"
})(["font-size:3vh;padding:0;margin:0;margin-right:0.5vw;user-select:none;"]);

/***/ }),

/***/ "./src/lib/apollo.jsx":
/*!****************************!*\
  !*** ./src/lib/apollo.jsx ***!
  \****************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "/home/christian/Development/fible-frontend/src/lib/apollo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }











/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */

function withApollo(PageComponent, {
  ssr = true
} = {}) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, ["apolloClient", "apolloState"]);

    const client = apolloClient || initApolloClient(apolloState, {
      getToken
    });
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17__["ApolloProvider"], {
      client: client,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(PageComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })));
  };

  if (true) {
    // Find correct display name
    const displayName = PageComponent.displayName || PageComponent.name || 'Component'; // Warn if old way of installing apollo is used

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    } // Set correct display name for devtools


    WithApollo.displayName = `withApollo(${displayName})`; // Add some prop types

    WithApollo.propTypes = {
      // Used for getDataFromTree rendering
      apolloClient: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
      // Used for client/server rendering
      apolloState: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object
    };
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const {
        AppTree
      } = ctx; // Run all GraphQL queries in the component tree
      // and extract the resulting data

      const apolloClient = ctx.apolloClient = initApolloClient({}, {
        getToken: () => getToken(ctx.req)
      });
      const pageProps = PageComponent.getInitialProps ? await PageComponent.getInitialProps(ctx) : {}; // Only on the server

      if (true) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return {};
        }

        if (ssr) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/react-ssr */ "@apollo/react-ssr", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: _objectSpread({}, pageProps, {
                apolloClient
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              },
              __self: this
            }));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }
        } // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually


        next_head__WEBPACK_IMPORTED_MODULE_12___default.a.rewind();
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return _objectSpread({}, pageProps, {
        apolloState
      });
    };
  }

  return WithApollo;
}
let apolloClient = null;
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */

function initApolloClient(...args) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(...args);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = createApolloClient(...args);
  }

  return apolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} config
 */


function createApolloClient(initialState = {}, {
  getToken
}) {
  const fetchOptions = {
    agent: ""
  }; // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
  // 'https-proxy-agent' is required here because it's a sever-side only module

  if (true) {
    if (process.env.https_proxy) {
      fetchOptions.agent = new (__webpack_require__(/*! https-proxy-agent */ "https-proxy-agent"))(process.env.https_proxy);
    }
  }

  const httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_15__["HttpLink"]({
    uri: 'http://localhost:8000/graphql',
    // Server URL (must be absolute)
    credentials: 'include',
    fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_18___default()),
    fetchOptions
  });
  const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_16__["setContext"])((request, {
    headers
  }) => {
    const token = getToken();
    return {
      headers: _objectSpread({}, headers, {
        cookie: token ? `qid=${token.qid} ` : '',
        cookie_2: token ? `hid=${token.hid} ` : ''
      })
    };
  }); //hid=${token.hid}
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

  return new apollo_client__WEBPACK_IMPORTED_MODULE_13__["ApolloClient"]({
    ssrMode: true,
    // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__["InMemoryCache"]().restore(initialState)
  });
}
/**
 * Get the user token from cookie
 * @param {Object} req
 */


function getToken(req) {
  const cookies = cookie__WEBPACK_IMPORTED_MODULE_11___default.a.parse(req ? req.headers.cookie || '' : document.cookie); //  console.log(cookies)

  return cookies;
}
/*import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

let apolloClient = null


export function withApollo(PageComponent, { ssr = true } = {}) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState)
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    )
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component'

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.')
    }

    WithApollo.displayName = `withApollo(${displayName})`
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const { AppTree } = ctx

      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = (ctx.apolloClient = initApolloClient({}))

      // Run wrapped getInitialProps methods
      let pageProps = {}
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx)
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr')
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />
            )
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error)
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind()
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract()

      return {
        ...pageProps,
        apolloState,
      }
    }
  }

  return WithApollo
}


function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createApolloClient(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState)
  }

  return apolloClient
}


function createApolloClient(initialState = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'http://localhost:8000/graphql', // Server URL (must be absolute)
      credentials: 'include', // Additional fetch() options like `credentials` or `headers`
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState),
  })
}

*/

/***/ }),

/***/ "./src/lib/auth.tsx":
/*!**************************!*\
  !*** ./src/lib/auth.tsx ***!
  \**************************/
/*! exports provided: withAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuth", function() { return withAuth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./redirect */ "./src/lib/redirect.ts");








var _jsxFileName = "/home/christian/Development/fible-frontend/src/lib/auth.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




const ME = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default.a`
query me{
    me {id name routes pois stops email}
}`;
const withAuth = C => {
  class AuthComponent extends react__WEBPACK_IMPORTED_MODULE_9___default.a.Component {
    static async getInitialProps(ctx) {
      const response = await ctx.apolloClient.query({
        query: ME
      }); //console.log("@withAuth ", response);

      if (!response || !response.data || !response.data.me) {
        Object(_redirect__WEBPACK_IMPORTED_MODULE_10__["default"])(ctx, "/");
        return {
          me: null
        };
      }

      ctx.me = response.data.me; //ctx.reduxStore.dispatch(loadUser(response.data.me))

      let componentProps = {};

      if (C.getInitialProps) {
        componentProps = await C.getInitialProps(ctx);
      }

      const me = response.data.me;
      return _objectSpread({
        me: response.data.me
      }, componentProps);
    }

    render() {
      // {console.log(this.props)}
      return __jsx(C, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.props, {
        user: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }

  }

  return AuthComponent;
};

/***/ }),

/***/ "./src/lib/redirect.ts":
/*!*****************************!*\
  !*** ./src/lib/redirect.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((context, target) => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, {
      Location: target
    });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace(target);
  }
});

/***/ }),

/***/ "./src/lib/redux/actions/dataActions.ts":
/*!**********************************************!*\
  !*** ./src/lib/redux/actions/dataActions.ts ***!
  \**********************************************/
/*! exports provided: initializeHtype, deleteHtype, emptySelectedComponent, setSelectedComponent, updateComponentsOrder, cleanNonsavedHtypes, loadUser, loadHtypeData, loadComponents, cleanUser, initializeInputScreen, initializeInputScreenData, loadRouteMgmtData, loadInputScreenData, updateStopAndPoiData, addOrUpdateHeadline, dataUpdateComponent, dataAddNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeHtype", function() { return initializeHtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHtype", function() { return deleteHtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptySelectedComponent", function() { return emptySelectedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedComponent", function() { return setSelectedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateComponentsOrder", function() { return updateComponentsOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanNonsavedHtypes", function() { return cleanNonsavedHtypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHtypeData", function() { return loadHtypeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponents", function() { return loadComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUser", function() { return cleanUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeInputScreen", function() { return initializeInputScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeInputScreenData", function() { return initializeInputScreenData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRouteMgmtData", function() { return loadRouteMgmtData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadInputScreenData", function() { return loadInputScreenData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStopAndPoiData", function() { return updateStopAndPoiData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrUpdateHeadline", function() { return addOrUpdateHeadline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUpdateComponent", function() { return dataUpdateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataAddNewComponent", function() { return dataAddNewComponent; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/lib/redux/actions/types.ts");

let headlineId = 0;
let initializeHtypeId = 0;
let deleteHtypeId = 0;
let emptySelectedComponentId = 0;
let setSelectedComponentId = 0;
let updateComponentsOrderId = 0;
let cleanNonsavedHtypesId = 0;
let loadUserId = 0;
let cleanUserId = 0;
let loadHtypeDataId = 0;
let initializeInputscreenId = 0; //----

let initializeInputScreenDataId = 0;
let loadRouteMgmtDataId = 0;
let loadInputScreenDataId = 0;
let updateStopAndPoiDataId = 0;
let dataUpdateComponentId = 0;
let dataAddNewComponentId = 0;
const initializeHtype = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["INITIALIZE_HTYPE"],
  payload: {
    id: ++initializeHtypeId,
    content
  }
});
const deleteHtype = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_HTYPE"],
  payload: {
    id: ++deleteHtypeId,
    content
  }
});
const emptySelectedComponent = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["EMPTY_SELECTED_COMPONENT_ID"],
  payload: {
    id: ++emptySelectedComponentId
  }
});
const setSelectedComponent = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_COMPONENT"],
  payload: {
    id: ++setSelectedComponentId,
    content
  }
});
const updateComponentsOrder = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_COMPONENTS_ORDER"],
  payload: {
    id: ++updateComponentsOrderId,
    content
  }
});
const cleanNonsavedHtypes = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_NONSAVED_HTYPES"],
  payload: {
    id: ++cleanNonsavedHtypesId
  }
});
const loadUser = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER"],
  payload: {
    id: ++loadUserId,
    content
  }
});
const loadHtypeData = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_HTYPE_DATA"],
  payload: {
    id: ++loadHtypeDataId,
    content
  }
});
const loadComponents = content => ({});
const cleanUser = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_USER"],
  payload: {
    id: ++cleanUserId
  }
});
const initializeInputScreen = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["INITIALIZE_INPUTSCREEN"],
  payload: {
    id: ++initializeInputscreenId,
    content
  }
}); //.....

const initializeInputScreenData = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["INITIALIZE_INPUTSCREEN_DATA"],
  payload: {
    id: ++initializeInputScreenDataId,
    content
  }
});
const loadRouteMgmtData = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_ROUTEMGMT_DATA"],
  payload: {
    id: ++loadRouteMgmtDataId,
    content
  }
});
const loadInputScreenData = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_INPUTSCREEN_DATA"],
  payload: {
    id: ++loadInputScreenDataId,
    content
  }
});
const updateStopAndPoiData = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STOP_AND_POI_DATA"],
  payload: {
    id: ++updateStopAndPoiDataId,
    content
  }
});
const addOrUpdateHeadline = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["HEADLINE"],
  payload: {
    id: ++headlineId,
    content
  }
});
const dataUpdateComponent = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_UPDATE_COMPONENT"],
  payload: {
    id: ++dataUpdateComponentId,
    content
  }
});
const dataAddNewComponent = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_ADD_NEW_COMPONENT"],
  payload: {
    id: ++dataAddNewComponentId,
    content
  }
});

/***/ }),

/***/ "./src/lib/redux/actions/types.ts":
/*!****************************************!*\
  !*** ./src/lib/redux/actions/types.ts ***!
  \****************************************/
/*! exports provided: REMOVE_ROUTE, UPDATE_ROUTE_STATE, UPDATE_SELECTOR_MANAGER_STATE, INITIALIZE_INPUT_SCREEN_UI, HEADLINE, INITIALIZE_HTYPE, DELETE_HTYPE, EMPTY_SELECTED_COMPONENT_ID, UPDATE_SIMULATOR_SELECTION, SET_SELECTED_COMPONENT, UPDATE_COMPONENTS_ORDER, CLEAN_NONSAVED_HTYPES, STOP_AND_POI_MANAGER_CONTROLLER, SET_TITLE, LOAD_USER, CLEAN_USER, LOAD_HTYPE_DATA, INITIALIZE_INPUTSCREEN, INITIALIZE_INPUTSCREEN_DATA, LOAD_ROUTEMGMT_DATA, LOAD_INPUTSCREEN_DATA, UPDATE_STOP_AND_POI_DATA, UPDATE_ROUTEMGMT_STATE, LOAD_STOP_AND_POI_MANAGER_STATE, UPDATE_INPUT_SCREEN_STATE, UPDATE_SIMULATOR_SELECTION_STATE, DATA_UPDATE_COMPONENT, DATA_ADD_NEW_COMPONENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ROUTE", function() { return REMOVE_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ROUTE_STATE", function() { return UPDATE_ROUTE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SELECTOR_MANAGER_STATE", function() { return UPDATE_SELECTOR_MANAGER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIALIZE_INPUT_SCREEN_UI", function() { return INITIALIZE_INPUT_SCREEN_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADLINE", function() { return HEADLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIALIZE_HTYPE", function() { return INITIALIZE_HTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_HTYPE", function() { return DELETE_HTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_SELECTED_COMPONENT_ID", function() { return EMPTY_SELECTED_COMPONENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SIMULATOR_SELECTION", function() { return UPDATE_SIMULATOR_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_COMPONENT", function() { return SET_SELECTED_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMPONENTS_ORDER", function() { return UPDATE_COMPONENTS_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_NONSAVED_HTYPES", function() { return CLEAN_NONSAVED_HTYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_AND_POI_MANAGER_CONTROLLER", function() { return STOP_AND_POI_MANAGER_CONTROLLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TITLE", function() { return SET_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER", function() { return LOAD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_USER", function() { return CLEAN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HTYPE_DATA", function() { return LOAD_HTYPE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIALIZE_INPUTSCREEN", function() { return INITIALIZE_INPUTSCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIALIZE_INPUTSCREEN_DATA", function() { return INITIALIZE_INPUTSCREEN_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ROUTEMGMT_DATA", function() { return LOAD_ROUTEMGMT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_INPUTSCREEN_DATA", function() { return LOAD_INPUTSCREEN_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STOP_AND_POI_DATA", function() { return UPDATE_STOP_AND_POI_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ROUTEMGMT_STATE", function() { return UPDATE_ROUTEMGMT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_STOP_AND_POI_MANAGER_STATE", function() { return LOAD_STOP_AND_POI_MANAGER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INPUT_SCREEN_STATE", function() { return UPDATE_INPUT_SCREEN_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SIMULATOR_SELECTION_STATE", function() { return UPDATE_SIMULATOR_SELECTION_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_UPDATE_COMPONENT", function() { return DATA_UPDATE_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_ADD_NEW_COMPONENT", function() { return DATA_ADD_NEW_COMPONENT; });
const REMOVE_ROUTE = "REMOVE_ROUTE";
const UPDATE_ROUTE_STATE = "UPDATE_ROUTE_STATE";
const UPDATE_SELECTOR_MANAGER_STATE = "UPDATE_SELECTOR_MANAGER_STATE";
const INITIALIZE_INPUT_SCREEN_UI = "INITIALIZE_INPUT_SCREEN_UI";
const HEADLINE = "HEADLINE";
const INITIALIZE_HTYPE = "INITIALIZE_HTYPE";
const DELETE_HTYPE = "DELETE_HTYPE";
const EMPTY_SELECTED_COMPONENT_ID = "EMPTY_SELECTED_COMPONENT_ID";
const UPDATE_SIMULATOR_SELECTION = "UPDATE_SIMULATOR_SELECTION";
const SET_SELECTED_COMPONENT = "SET_SELECTED_COMPONENT";
const UPDATE_COMPONENTS_ORDER = "UPDATE_COMPONENTS_ORDER";
const CLEAN_NONSAVED_HTYPES = "CLEAN_NONSAVED_HTYPES";
const STOP_AND_POI_MANAGER_CONTROLLER = "STOP_AND_POI_MANAGER_CONTROLLER";
const SET_TITLE = "SET_TITLE";
const LOAD_USER = "LOAD_USER";
const CLEAN_USER = "CLEAN_USER";
const LOAD_HTYPE_DATA = "LOAD_HTYPE_DATA";
const INITIALIZE_INPUTSCREEN = "INITIALIZE_INPUTSCREEN"; //.---------------------------
//----Data------

const INITIALIZE_INPUTSCREEN_DATA = "INITIALIZE_INPUTSCREEN_DATA";
const LOAD_ROUTEMGMT_DATA = "LOAD_ROUTEMGMT_DATA";
const LOAD_INPUTSCREEN_DATA = "LOAD_INPUTSCREEN_DATA";
const UPDATE_STOP_AND_POI_DATA = "UPDATE_STOP_AND_POI_DATA"; //-----UI-------

const UPDATE_ROUTEMGMT_STATE = "UPDATE_ROUTEMGMT_STATE";
const LOAD_STOP_AND_POI_MANAGER_STATE = "LOAD_STOP_AND_POI_MANAGER_STATE";
const UPDATE_INPUT_SCREEN_STATE = "UPDATE_INPUT_SCREEN_STATE";
const UPDATE_SIMULATOR_SELECTION_STATE = "UPDATE_SIMULATOR_SELECTION_STATE";
const DATA_UPDATE_COMPONENT = "DATA_UPDATE_COMPONENT";
const DATA_ADD_NEW_COMPONENT = "DATA_ADD_NEW_COMPONENT";

/***/ }),

/***/ "./src/lib/redux/actions/uiActions.ts":
/*!********************************************!*\
  !*** ./src/lib/redux/actions/uiActions.ts ***!
  \********************************************/
/*! exports provided: removeRoute, updateOrder, updateSelectorManagerState, initializeInputScreenUi, stopAndPoiManagerController, setTitle, updateRoutemgmtState, loadStopAndPoiManagerState, updateInputScreenState, updateSimulatorSelectionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRoute", function() { return removeRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOrder", function() { return updateOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelectorManagerState", function() { return updateSelectorManagerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeInputScreenUi", function() { return initializeInputScreenUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAndPoiManagerController", function() { return stopAndPoiManagerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTitle", function() { return setTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRoutemgmtState", function() { return updateRoutemgmtState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStopAndPoiManagerState", function() { return loadStopAndPoiManagerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputScreenState", function() { return updateInputScreenState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSimulatorSelectionState", function() { return updateSimulatorSelectionState; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/lib/redux/actions/types.ts");
 //includes route management actions

let routeId = 0;
let updateId = 0;
let updateManagerStateId = 0;
let updateInputScreenStateId = 0;
let initializeInputScreenUiId = 0;
let updateSimulatorSelectionId = 0;
let stopAndPoiManagerControllerId = 0;
let setTitleId = 0;
let updateRoutemgmtStateId = 0;
let loadStopAndPoiManagerStateId = 0;
let updateSimulatorSelectionStateId = 0;
const removeRoute = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ROUTE"],
  payload: {
    id: ++routeId,
    content
  }
});
const updateOrder = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ROUTE_STATE"],
  payload: {
    id: ++updateId,
    content
  }
});
const updateSelectorManagerState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SELECTOR_MANAGER_STATE"],
  payload: {
    id: ++updateManagerStateId,
    content
  }
});
const initializeInputScreenUi = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["INITIALIZE_INPUT_SCREEN_UI"],
  payload: {
    id: ++initializeInputScreenUiId,
    content
  }
});
const stopAndPoiManagerController = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["STOP_AND_POI_MANAGER_CONTROLLER"],
  payload: {
    id: ++stopAndPoiManagerControllerId,
    content
  }
});
const setTitle = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_TITLE"],
  payload: {
    id: ++setTitleId,
    content
  }
}); ///-.--------------

const updateRoutemgmtState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ROUTEMGMT_STATE"],
  payload: {
    id: ++updateRoutemgmtStateId,
    content
  }
});
const loadStopAndPoiManagerState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_STOP_AND_POI_MANAGER_STATE"],
  payload: {
    id: ++loadStopAndPoiManagerStateId,
    content
  }
});
const updateInputScreenState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INPUT_SCREEN_STATE"],
  payload: {
    id: ++updateInputScreenStateId,
    content
  }
});
const updateSimulatorSelectionState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SIMULATOR_SELECTION_STATE"],
  payload: {
    id: ++updateSimulatorSelectionStateId,
    content
  }
});

/***/ }),

/***/ "./src/lib/redux/reducers/dataReducer.ts":
/*!***********************************************!*\
  !*** ./src/lib/redux/reducers/dataReducer.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/types */ "./src/lib/redux/actions/types.ts");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_8__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



//HTYPE is the hierarchy type, aka route, stop, etc
//DATA REDUCER + UI REDUCER + ROUTE MANAGEMENT SCREEN REDUCER
//make a reducer that cleans up the routes stops etc when you go to the route management screen.
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["LOAD_ROUTEMGMT_DATA"]:
      {
        const {
          htypes
        } = action.payload.content;
        const {
          user
        } = action.payload.content;
        const content = {};

        for (let item of _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(htypes)) {
          let key = item.substring(3).toLowerCase();
          content[key] = htypes[item].reduce((result, attri) => {
            if (attri) {
              result[attri.id] = attri;
            }

            return result;
          }, {});
        }

        return _objectSpread({}, state, {
          routeMgmt: {
            user: _objectSpread({}, user, {
              routes: htypes.getRoutes[0] === null ? [] : htypes.getRoutes,
              stops: htypes.getStops[0] === null ? [] : htypes.getStops,
              pois: htypes.getPois[0] === null ? [] : htypes.getPois
            }),
            routes: _objectSpread({}, content["routes"]),
            stops: _objectSpread({}, content["stops"]),
            pois: _objectSpread({}, content["pois"])
          }
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["INITIALIZE_INPUTSCREEN_DATA"]:
      {
        const {
          htype
        } = action.payload.content;
        const {
          user
        } = action.payload.content;
        const htypeid = htype.substring(0, 2) + "_" + uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()();
        return _objectSpread({}, state, {
          inputScreen: _objectSpread({}, state.inputScreen, {
            user: _objectSpread({}, state.inputScreen.user, {
              [htype]: [...state.inputScreen.user[htype], htypeid]
            }),
            selectedHtypeId: htypeid,
            selectedHtype: htype + "s",
            [htype]: _objectSpread({}, state[htype], {
              //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
              [htypeid]: {
                //take the name of the account owner
                //saved:false,
                id: htypeid,
                owner: user.name,
                //name to be filled out when the route is finished
                name: "",
                components: []
              }
            })
          })
        });
      }
      ;

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["LOAD_INPUTSCREEN_DATA"]:
      {
        const {
          htype
        } = action.payload.content;
        const {
          htypeData
        } = action.payload.content;
        const {
          user
        } = action.payload.content;
        const {
          componentsArray
        } = action.payload.content;
        console.log(componentsArray);
        const htypeid = htypeData[htype].id;
        let components = componentsArray.reduce((result, attri) => {
          if (attri) {
            result[attri.id] = attri;
          }

          return result;
        }, {});
        let componentIdsArray = componentsArray.reduce((result, attri) => {
          if (attri) {
            result.push(attri.id);
          }

          return result;
        }, []);
        return _objectSpread({}, state, {
          inputScreen: _objectSpread({}, state.inputScreen, {
            user: _objectSpread({}, user),
            selectedHtypeId: htypeid,
            selectedHtype: htype + "s",
            [htype + "s"]: _objectSpread({}, state[htype + "s"], {
              //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
              [htypeid]: {
                //take the name of the account owner
                //saved:false,
                id: htypeid,
                owner: user.name,
                //name to be filled out when the route is finished
                name: "",
                components: componentIdsArray
              }
            }),
            components: _objectSpread({}, components)
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UPDATE_STOP_AND_POI_DATA"]:
      {
        const {
          htype
        } = action.payload.content;
        const {
          dispatch
        } = action.payload.dispatch;
        const {
          htypeParent
        } = action.payload.content;
        const {
          htypeid
        } = action.payload.content;
        const {
          routeid
        } = action.payload.content;
        const index = state.routeMgmt.user[htype].indexOf(htypeid);
        let routes;
        let stops; //const newOrder = Array.from(state.inputScreen.user[htypeParent]);

        if (htype == "poi") {
          let {
            stopid
          } = action.payload.content.stopid;
          let route = state.routeMgmt.routes[routeid].pois;
          let stop = state.routeMgmt.routes[stopid].pois;

          if (dispatch == "ADD") {
            route = route.push(htypeid);
            stop = stop.push(htypeid);
          } else if (dispatch == "REMOVE") {
            const stopIndex = state.routeMgmt.stops[stopid].pois.indexOf(htypeid);
            const routeIndex = state.routeMgmt.routes[routeid].pois.indexOf(htypeid);
            route = route.splice(routeIndex, 1);
            stop = stop.splice(stopIndex, 1);
          }

          return _objectSpread({}, state, {
            routeMgmt: _objectSpread({}, state.routeMgmt, {
              routes: _objectSpread({}, state.routeMgmt.routes, {
                [routeid]: _objectSpread({}, state.routeMgmt.routes[routeid], {
                  pois: route
                })
              }),
              stops: _objectSpread({}, state.routeMgmt.stops, {
                [stopid]: _objectSpread({}, state.routeMgmt.stops[stopid], {
                  pois: stop
                })
              })
            })
          });
        } else {
          let route = state.routeMgmt.routes[routeid].stops;

          if (dispatch == "ADD") {
            route = route.push(htypeid);
          } else if (dispatch == "REMOVE") {
            const routeIndex = state.routeMgmt.routes[routeid].pois.indexOf(htypeid);
            route = route.splice(routeIndex, 1);
          }

          return _objectSpread({}, state, {
            routeMgmt: _objectSpread({}, state.routeMgmt, {
              routes: _objectSpread({}, state.routeMgmt, {
                [routeid]: _objectSpread({}, state.routeMgmt[routeid], {
                  stops: route
                })
              })
            })
          });
        }

        ;
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["DATA_ADD_NEW_COMPONENT"]:
      {
        const {
          htype
        } = action.payload.content;
        const {
          selectedHtypeId
        } = action.payload.content;
        const {
          type
        } = action.payload.content;
        const {
          user
        } = action.payload.content;
        const idSuffix = type.substring(0, 2).toLowerCase() + "_";
        const selectedComponentId = idSuffix + uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(); //console.log(action.payload.content)
        //console.log(state.inputScreen[htype])

        const newComponentsArray = [...state.inputScreen[htype][selectedHtypeId].components, selectedComponentId];
        return _objectSpread({}, state, {
          inputScreen: _objectSpread({}, state.inputScreen, {
            selectedComponentId: selectedComponentId,
            [htype]: _objectSpread({}, state.inputScreen[htype], {
              [selectedHtypeId]: _objectSpread({}, state.inputScreen[htype][selectedHtypeId], {
                components: newComponentsArray
              })
            }),
            components: _objectSpread({}, state.inputScreen.components, {
              [selectedComponentId]: {
                id: selectedComponentId,
                onwnerId: user.id,
                ownerName: user.name,
                parentId: selectedHtypeId,
                type: type,
                content: "{}"
              }
            })
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["DATA_UPDATE_COMPONENT"]:
      {
        const {
          content
        } = action.payload.content;
        const {
          selectedComponentId
        } = action.payload.content;
        return _objectSpread({}, state, {
          inputScreen: _objectSpread({}, state.inputScreen, {
            components: _objectSpread({}, state.inputScreen.components, {
              [selectedComponentId]: _objectSpread({}, state.inputScreen.components[selectedComponentId], {
                content: content
              })
            })
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UPDATE_COMPONENTS_ORDER"]:
      {
        const newOrder = action.payload.content.newOrder;
        const htype = action.payload.content.htype;
        const selectedHtypeId = action.payload.content.selectedHtypeId;
        return _objectSpread({}, state, {
          inputScreen: _objectSpread({}, state.inputScreen, {
            [htype]: _objectSpread({}, state.inputScreen[htype], {
              [selectedHtypeId]: _objectSpread({}, state.inputScreen[htype][selectedHtypeId], {
                components: newOrder
              })
            })
          })
        });
      }
      ;

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["EMPTY_SELECTED_COMPONENT_ID"]:
      {
        return _objectSpread({}, state, {
          selectedComponentId: "empty"
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["SET_SELECTED_COMPONENT"]:
      {
        const selectedComponentId = action.payload.content.selectedComponentId;
        return _objectSpread({}, state, {
          inputScreen: _objectSpread({}, state.inputScreen, {
            selectedComponentId: selectedComponentId
          })
        });
      }

    default:
      return state;
  }
});
const initialState = {
  routeMgmt: {
    user: {
      name: "",
      routes: [],
      stops: [],
      pois: [],
      email: ""
    },
    routes: {},
    stops: {},
    pois: {}
  },
  inputScreen: {
    user: {},
    selectedHtypeId: "",
    selectedComponentId: "empty",
    selectedHtype: "",
    routes: {},
    pois: {},
    stops: {},
    components: {}
  }
};
/*




        case LOAD_HTYPE_DATA: {
            const content = {}
            for (let item of Object.keys(action.payload.content.data)) {
                //to not create a component object in the user state
                let key = item.substring(3).toLowerCase()
                console.log(key)
                content[key] = action.payload.content.data[item].reduce((result, attri, index) => {
                    if (attri) {
                        result[attri.id] = attri;
                    } //a, b, c
                    return result;
                }, {})
            }

            return {
                ...state,
                user:{
                    ...state.user,
                    routes:action.payload.content.data.getRoutes[0] === null ? []:action.payload.content.data.getRoutes ,
                    stops:action.payload.content.data.getStops[0] === null ? []:action.payload.content.data.getStops ,
                    pois:action.payload.content.data.getPois[0] === null ? []:action.payload.content.data.getPois 
                }
                routes: {
                    ...content["routes"]
                },
                stops: {
                    ...content["stops"]
                },
                pois: {
                    ...content["pois"]
                }
            }
        }

        case LOAD_USER: {
            const { name, email, routes, stops, pois } = action.payload.content;
            return {
                ...state,
                user: {
                    name: name,
                    routes: routes ? routes : [],
                    stops: stops ? stops : [],
                    pois: pois ? pois : [],
                    email: email,
                }
            }
        }
        case CLEAN_USER: {
            return {
                ...state,
                user: {
                    name: '',
                    routes: [],
                    stops: [],
                    pois: [],
                    email: '',
                },
                //the id of the hcomponent being worked on
                selectedHtypeId: '',
                selectedComponentId: "empty",
                routes: {},
                stops: {},
                pois: {},
            }
        }
        case INITIALIZE_HTYPE: {
            //const selectedDispatch = action.payload.content.dispatch;
            const htype = action.payload.content.htype;
            const htypeid = htype.substring(0, 2) + "_" + uuid
            return {
                ...state,
                user: {
                    ...state.data.inputScreen.user,
                    [htype]: [...state.data.inputScreen.user[htype], htypeid]
                },
                selectedHtypeId: htypeid,
                [htype]: {
                    ...state[htype],
                    //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
                    [htypeid]: {
                        //take the name of the account owner
                        saved: false,
                        owner: state.data.inputScreen.user.name,
                        //name to be filled out when the route is finished
                        name: "",
                        order: [],
                        components: {},

                    }
                }
            };
        }
        case EMPTY_SELECTED_COMPONENT_ID: {
            return {
                ...state,
                selectedComponentId: "empty",
            }
        }
        case DELETE_HTYPE: {
            const htype = action.payload.content.htype;
            const htypeid = action.payload.content.htypeid;
            delete state[htype][htypeid]
            const index = state.data.inputScreen.user[htype].indexOf(htypeid);
            delete state.data.inputScreen.user[htype][index]
            return state
        }
        case HEADLINE: {
            const headline = action.payload.content.headline
            const htype = action.payload.content.type
            const htypeid = action.payload.content.selectedHtypeId
            const dispatch = action.payload.content.dispatch
            console.log(headline)
            switch (dispatch) {
                case ("ADD_HEADLINE"): {
                    //create the id because it has not been changed before
                    const headlineId = "HL_" + uuid
                    //rebuilding the state object to add new data
                    console.log(state)
                    return {
                        ...state,
                        selectedComponentId: headlineId,
                        [htype]: {
                            ...state[htype],
                            [htypeid]: {
                                ...state[htype][htypeid],
                                order: [...state[htype][htypeid].order, headlineId],
                                components: {
                                    ...state[htype][htypeid].components,
                                    [headlineId]: {
                                        id: headlineId,
                                        type: "HEADLINE",
                                        headline: headline
                                    }
                                }
                            }
                        }
                    }
                }
                //case where you want to change the headline but it already exists
                case ("UPDATE_HEADLINE"): {
                    const headlineId = action.payload.content.selectedComponentId
                    return {
                        ...state,
                        [htype]: {
                            ...state[htype],
                            [htypeid]: {
                                ...state[htype][htypeid],
                                components: {
                                    ...state[htype][htypeid].components,
                                    [headlineId]: {
                                        id: headlineId,
                                        type: "HEADLINE",
                                        headline: headline
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        case (UPDATE_COMPONENTS_ORDER): {
            const newOrder = action.payload.content.newOrder
            const htype = action.payload.content.htype
            const htypeId = action.payload.content.htypeId
            return {
                ...state,
                [htype]: {
                    ...state[htype],
                    [htypeId]: {
                        ...state[htype][htypeId],
                        order: newOrder,
                    }
                }
            }
        };

    }
}




    /*    case (INITIALIZE_INPUTSCREEN): {
            console.log(action.payload.content)
            const { id } = action.payload.content.htype
            const { components } = action.payload.content
            let content = {}
            content = components.reduce((result, attri, index) => {
                if (attri != "") {
                    result[attri.id] = attri;
                } //a, b, c
                return result;
            }, {})
            return {
                ...state,
                selectedHtypeId: id,
                components: content
            }
        }
        default:
            return state;
    }



/*
        case HEADLINE: {
            const headline = action.payload.content.headline
            const htype = action.payload.content.type
            const routeId = action.payload.content.routeId
            switch(dispatch){
                case("ADD_HEADLINE"):{
                //create the id because it has not been changed before
                const headlineId = htype.toLowerCase().substring(0, 2) + "_" + nanoid(8)
                //rebuilding the state object to add new data
                return {
                    ...state,
                        data: {
                            ...state.data,
                                [htype.toLowerCase()]:{
                                    ...state.data.route,
                                    [routeId]:{
                                        ...state.data.route[routeId]
                                        order:[...state.data.route[routeId].order, headlineId]
                                        components:{
                                            ...state.data.route[routeId].components
                                            [headlineId]:{
                                                type:"HEADLINE"
                                                headline:headline
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                //case where you want to change the headline but it already exists
                case("UPDATE_HEADLINE"):{
                    const headlineId = action.payload.content.headlineId
                    return {
                    ...state,
                        data: {
                            ...state.data,
                                [htype.toLowerCase()]:{
                                    ...state.data.route,
                                    [routeId]:{
                                        ...state.data.route[routeId]
                                        components:{
                                            ...state.data.route[routeId].components
                                            []:{
                                                type:"HEADLINE"
                                                headline:headline
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }



        case CLEAN_NONSAVED_HTYPES:{
                    const htypes = ["ROUTES","STOPS","POIS"]
                   // const htype= action.payload.content.headline
                    for(var j in htypes){
                    
                            for(let [key] of Object.entries(state[htypes[j]])){
                            if(state[htypes[j]][key].saved !=true){
                                delete state[htypes[j]][key];
                            }
                            }
                        }
                    return state;
                } */

/***/ }),

/***/ "./src/lib/redux/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/lib/redux/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uiReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiReducer */ "./src/lib/redux/reducers/uiReducer.ts");
/* harmony import */ var _dataReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataReducer */ "./src/lib/redux/reducers/dataReducer.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  data: _dataReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  ui: _uiReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/lib/redux/reducers/uiReducer.ts":
/*!*********************************************!*\
  !*** ./src/lib/redux/reducers/uiReducer.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/types */ "./src/lib/redux/actions/types.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


/*simulator states
*/

/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UPDATE_ROUTEMGMT_STATE"]:
      {
        const selectedId = action.payload.content.selectedId;
        const htype = action.payload.content.htype;
        let managerUiCode = "RO";
        let selectedroutes = "";
        let selectedstops = "";
        let selectedpois = "";

        if (htype == "routes" && state.routeMgmt.selector.selectedroutes != selectedId) {
          managerUiCode = "ROST";
          selectedroutes = selectedId;
          selectedstops = "";
          selectedpois = "";
        } else if (htype == "routes" && state.routeMgmt.selector.selectedroutes == selectedId) {
          managerUiCode = "RO";
          selectedroutes = "";
          selectedstops = "";
          selectedpois = "";
        } else if (htype == "stops" && state.routeMgmt.selector.selectedstops != selectedId) {
          managerUiCode = "ROSTPO";
          selectedroutes = state.routeMgmt.selector.selectedroutes;
          selectedstops = selectedId;
          selectedpois = "";
        } else if (htype == "stops" && state.routeMgmt.selector.selectedstops == selectedId) {
          managerUiCode = "ROST";
          selectedroutes = state.routeMgmt.selector.selectedroutes;
          selectedstops = "";
          selectedpois = "";
        } else if (htype == "pois" && state.routeMgmt.selector.selectedpois != selectedId) {
          managerUiCode = "ROSTPO";
          selectedroutes = state.routeMgmt.selector.selectedroutes;
          selectedstops = state.routeMgmt.selector.selectedstops;
          selectedpois = selectedId;
        } else if (htype == "pois" && state.routeMgmt.selector.selectedpois == selectedId) {
          managerUiCode = "ROSTPO";
          selectedroutes = state.routeMgmt.selector.selectedroutes;
          selectedstops = state.routeMgmt.selector.selectedstops;
          selectedpois = "";
        }

        return _objectSpread({}, state, {
          routeMgmt: _objectSpread({}, state.routeMgmt, {
            selector: _objectSpread({}, state.routeMgmt.selector, {
              selectedroutes: selectedroutes,
              selectedstops: selectedstops,
              selectedpois: selectedpois,
              managerUiCode: managerUiCode
            })
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["LOAD_STOP_AND_POI_MANAGER_STATE"]:
      {
        if (state.routeMgmt.selector.managerUiCode != "MA") {
          const htype = action.payload.content.htype;
          return _objectSpread({}, state, {
            routeMgmt: _objectSpread({}, state.routeMgmt, {
              selector: _objectSpread({}, state.routeMgmt.selector, {
                lastManagerUiCode: state.routeMgmt.selector.managerUiCode,
                htype: htype,
                managerUiCode: "MA"
              })
            })
          });
        } else {
          return _objectSpread({}, state, {
            routeMgmt: _objectSpread({}, state.routeMgmt, {
              selector: _objectSpread({}, state.routeMgmt.selector, {
                managerUiCode: state.routeMgmt.selector.lastManagerUiCode
              })
            })
          });
        }
      }
    //--------------------------------------------------- update --------------------------------------------------

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UPDATE_INPUT_SCREEN_STATE"]:
      {
        const selectedDispatch = action.payload.content;
        return _objectSpread({}, state, {
          inputScreen: _objectSpread({}, state.inputScreen, {
            inputMenu: _objectSpread({}, state.inputScreen.inputMenu, {
              //which component is shown in the menu //menu, headline input, image gallery etc.
              show: selectedDispatch
            })
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UPDATE_SIMULATOR_SELECTION_STATE"]:
      {
        const selectedComponentId = action.payload.content.selectedComponentId;
        const input = action.payload.content.input;

        if (input == "YES") {
          return _objectSpread({}, state, {
            inputScreen: _objectSpread({}, state.inputScreen, {
              simulator: _objectSpread({}, state.inputScreen.simulator, {
                selectedComponentId: selectedComponentId
              })
            })
          });
        } else {
          if (state.inputScreen.simulator.selected == selectedComponentId) {
            return _objectSpread({}, state, {
              inputScreen: _objectSpread({}, state.inputScreen, {
                simulator: _objectSpread({}, state.inputScreen.simulator, {
                  selectedComponentId: "empty"
                })
              })
            });
          } else {
            return _objectSpread({}, state, {
              inputScreen: _objectSpread({}, state.inputScreen, {
                simulator: _objectSpread({}, state.inputScreen.simulator, {
                  selectedComponentId: selectedComponentId
                })
              })
            });
          }
        }
      }

    default:
      return state;
  }
});
const initialState = {
  routeMgmt: {
    selector: {
      lastManagerUiCode: "",
      selectedroutes: "",
      selectedstops: "",
      selectedpois: "",
      managerUiCode: "RO",
      htype: ""
    },
    columnOrder: ["column-1", "column-2", "column-3"],
    title: ""
  },
  inputScreen: {
    inputMenu: {
      htype: "routes",
      //which component is shown in the menu
      show: "MENU",
      routes: [{
        name: "Headline",
        id: "headlineInput",
        dispatch: "HEADLINE_INPUT",
        type: "HEADLINE"
      }, {
        name: "Subheadline",
        id: "subheadlineInput",
        dispatch: "SUBHEADLINE_INPUT",
        type: "SUBHEADLINE"
      }, {
        name: "Image Gallery",
        id: "imageGalleryInput",
        dispatch: "IMAGE_GALLERY_INPUT",
        type: "IMAGE_GALLERY"
      }],
      stops: [{
        name: "Headline",
        id: "headlineInput",
        dispatch: "HEADLINE_INPUT",
        type: "HEADLINE"
      }, {
        name: "Subheadline",
        id: "subheadlineInput",
        dispatch: "SUBHEADLINE_INPUT",
        type: "SUBHEADLINE"
      }, {
        name: "Image Gallery",
        id: "imageGalleryInput",
        dispatch: "IMAGE_GALLERY_INPUT",
        type: "IMAGE_GALLERY"
      }],
      pois: [{
        name: "Headline",
        id: "headlineInput",
        dispatch: "HEADLINE_INPUT",
        type: "HEADLINE"
      }, {
        name: "Subheadline",
        id: "subheadlineInput",
        dispatch: "SUBHEADLINE_INPUT",
        type: "SUBHEADLINE"
      }, {
        name: "Image Gallery",
        id: "imageGalleryInput",
        dispatch: "IMAGE_GALLERY_INPUT",
        type: "IMAGE_GALLERY"
      }]
    },
    simulator: {
      show: "routes",
      selected: "empty"
    }
  }
}; //----------------------------------------------

/*

        case STOP_AND_POI_MANAGER_CONTROLLER: {
            if (state.routeMgmt.selector.managerUiCode != "MA") {
                const htype = action.payload.content.htype
                return {
                    ...state,
                    selector: {
                        ...state.selector,
                        lastManagerUiCode: state.selector.managerUiCode,
                        htype: htype,
                        managerUiCode: "MA",
                    }
                }
            } else {
                return {
                    ...state,
                    selector: {
                        ...state.selector,
                        managerUiCode: state.selector.lastManagerUiCode,
                    }
                }
            }
        }

        case SET_TITLE: {
            const title = action.payload.content.title
            return {
                ...state,
                title: title
            }
        }


        case INITIALIZE_INPUT_SCREEN_UI: {
            const selectedDispatch = action.payload.content.dispatch
            return {
                ...state,
                menu: {
                    ...state.inputMenu,
                    //menu for what kind of hierarchy type
                    htype: selectedDispatch,
                    //which component is shown in the menu //menu, headline input, image gallery etc.
                    show: "MENU",
                }

            };
        }
        case UPDATE_INPUT_SCREEN_UI: {
            const selectedDispatch = action.payload.content
            return {
                ...state,
                inputMenu: {
                    ...state.inputMenu,
                    //which component is shown in the menu //menu, headline input, image gallery etc.

                    show: selectedDispatch

                }
            }
        }
        case REMOVE_ROUTE: {
            const index = action.payload.content.removeIndex
            const columnId = action.payload.content.removeColumn;

            return {
                ...state,
                ids: state.columns[columnId].ids.splice(index, 1),
            }
        };
        case UPDATE_ROUTE_STATE: {
            const newOrder = action.payload.content.newOrder
            const columnId = action.payload.content.columnId
            return {
                ...state,
                //   routeIds: newOrder,
                columns: {
                    ...state.columns,
                    [columnId]: {
                        ...state.columns[columnId],
                        ids: newOrder
                    },
                }
            }
        };
        case UPDATE_SIMULATOR_SELECTION: {
            const selectedComponentId = action.payload.content.selectedComponentId
            const input = action.payload.content.input
            if (input == "YES") {
                return {
                    ...state,
                    simulator: {
                        ...state.simulator,
                        selected: selectedComponentId,
                    }
                }
            } else {
                if (state.simulator.selected == selectedComponentId) {
                    return {
                        ...state,
                        simulator: {
                            ...state.simulator,
                            selected: "empty",
                        }
                    }
                }
                else {
                    return {
                        ...state,
                        simulator: {
                            ...state.simulator,
                            selected: selectedComponentId,

                        }
                    }
                }
            }
        }

        default:
            return state;
    }
}
*/

/***/ }),

/***/ "./src/lib/redux/redux.jsx":
/*!*********************************!*\
  !*** ./src/lib/redux/redux.jsx ***!
  \*********************************/
/*! exports provided: withRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRedux", function() { return withRedux; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./src/lib/redux/store.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "/home/christian/Development/fible-frontend/src/lib/redux/redux.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const withRedux = (PageComponent, {
  ssr = true
} = {}) => {
  const WithRedux = (_ref) => {
    let {
      initialReduxState
    } = _ref,
        props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, ["initialReduxState"]);

    const store = getOrInitializeStore(initialReduxState);
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx(PageComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    })));
  }; // Make sure people don't use this HOC on _app.js level


  if (true) {
    const isAppHoc = PageComponent === next_app__WEBPACK_IMPORTED_MODULE_12___default.a || PageComponent.prototype instanceof next_app__WEBPACK_IMPORTED_MODULE_12___default.a;

    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  } // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore(); // Provide the store to getInitialProps of pages

      context.reduxStore = reduxStore; // Run getInitialProps from HOCed PageComponent

      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {}; // Pass props to PageComponent

      return _objectSpread({}, pageProps, {
        initialReduxState: reduxStore.getState()
      });
    };
  }

  return WithRedux;
};
let reduxStore;

const getOrInitializeStore = initialState => {
  // Always make a new store if server, otherwise state is shared between requests
  if (true) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_11__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!reduxStore) {
    reduxStore = Object(_store__WEBPACK_IMPORTED_MODULE_11__["initializeStore"])(initialState);
  }

  return reduxStore;
};

/***/ }),

/***/ "./src/lib/redux/store.js":
/*!********************************!*\
  !*** ./src/lib/redux/store.js ***!
  \********************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/index */ "./src/lib/redux/reducers/index.ts");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);



 //export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//export default createStore(rootReducer, applyMiddleware(thunk));
//import rootReducer from './reducers'

const initialState = {
  data: {
    routeMgmt: {
      user: {
        name: "",
        routes: [],
        stops: [],
        pois: [],
        email: ""
      },
      routes: {},
      stops: {},
      pois: {}
    },
    inputScreen: {
      user: {
        name: "",
        routes: [],
        stops: [],
        pois: []
      },
      selectedHtypeId: "",
      selectedComponentId: "empty",
      // htype: {},
      components: {}
    }
  },
  ui: {
    routeMgmt: {
      selector: {
        lastManagerUiCode: "",
        selectedroutes: "",
        selectedstops: "",
        selectedpois: "",
        managerUiCode: "RO",
        htype: ""
      },
      columnOrder: ["column-1", "column-2", "column-3"],
      title: ""
    },
    inputScreen: {
      inputMenu: {
        htype: "routes",
        //which component is shown in the menu
        show: "MENU",
        routes: [{
          name: "Headline",
          id: "headlineInput",
          dispatch: "HEADLINE_INPUT",
          type: "HEADLINE"
        }, {
          name: "Subheadline",
          id: "subheadlineInput",
          dispatch: "SUBHEADLINE_INPUT",
          type: "SUBHEADLINE"
        }, {
          name: "Image Gallery",
          id: "imageGalleryInput",
          dispatch: "IMAGE_GALLERY_INPUT",
          type: "IMAGE_GALLERY"
        }],
        stops: [{
          name: "Headline",
          id: "headlineInput",
          dispatch: "HEADLINE_INPUT",
          type: "HEADLINE"
        }, {
          name: "Subheadline",
          id: "subheadlineInput",
          dispatch: "SUBHEADLINE_INPUT",
          type: "SUBHEADLINE"
        }, {
          name: "Image Gallery",
          id: "imageGalleryInput",
          dispatch: "IMAGE_GALLERY_INPUT",
          type: "IMAGE_GALLERY"
        }],
        pois: [{
          name: "Headline",
          id: "headlineInput",
          dispatch: "HEADLINE_INPUT",
          type: "HEADLINE"
        }, {
          name: "Subheadline",
          id: "subheadlineInput",
          dispatch: "SUBHEADLINE_INPUT",
          type: "SUBHEADLINE"
        }, {
          name: "Image Gallery",
          id: "imageGalleryInput",
          dispatch: "IMAGE_GALLERY_INPUT",
          type: "IMAGE_GALLERY"
        }]
      },
      simulator: {
        show: "routes",
        selected: "empty"
      }
    }
  }
}; //const persistedReducer = persistReducer(persistConfig, rootReducer)

const initializeStore = (preloadedState = initialState) => {
  let store;
  const isClient = false;

  if (isClient) {
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a))); //store.__PERSISTOR = persistStore(store);
  } else {
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
  } //export const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  //export const persistor = persistStore(initialState);


  return store;
};
/*

export default () => {
  let initializeStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  let persistor = persistStore(store)
  return { initializeStore, persistor }
}

*/

/***/ }),

/***/ "./src/pages/routemanagement.tsx":
/*!***************************************!*\
  !*** ./src/pages/routemanagement.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_route_management_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/route-management/title */ "./src/components/route-management/title.tsx");
/* harmony import */ var _components_route_management_stateManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/route-management/stateManager */ "./src/components/route-management/stateManager.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_shared_components_logoutButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/shared-components/logoutButton */ "./src/components/shared-components/logoutButton.tsx");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/apollo */ "./src/lib/apollo.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_redux_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/redux/redux */ "./src/lib/redux/redux.jsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/auth */ "./src/lib/auth.tsx");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/redux/actions/dataActions */ "./src/lib/redux/actions/dataActions.ts");
var _jsxFileName = "/home/christian/Development/fible-frontend/src/pages/routemanagement.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;














const RouteManagement = props => {
  //console.log(props.dataState)
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(Images, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(HeaderImage, {
    src: "/logo_fible.png",
    alt: "my image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(BackImage, {
    src: "/back.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))), __jsx(_components_route_management_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: props.dataState.routeMgmt.user.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx(_components_shared_components_logoutButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx(_components_route_management_stateManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }));
}; //            


RouteManagement.getInitialProps = async ({
  apolloClient,
  me,
  reduxStore
}) => {
  const routesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_11___default.a`query getHtypes 
    {   getRoutes{id ownerid name components}
        getPois{id ownerid name components}
        getStops{id ownerid name components}
    }`;
  const htypes = await apolloClient.query({
    query: routesQuery
  }); // reduxStore.dispatch(loadUser(me))
  //console.log(htypes)

  reduxStore.dispatch(Object(_lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_12__["loadRouteMgmtData"])({
    "htypes": htypes.data,
    "user": me
  }));
};

const mapStateToProps = state => {
  return {
    selectorState: state.selector,
    uiState: state.ui,
    dataState: state.data
  };
};

const enhance = Object(redux__WEBPACK_IMPORTED_MODULE_9__["compose"])(_lib_apollo__WEBPACK_IMPORTED_MODULE_6__["withApollo"], _lib_auth__WEBPACK_IMPORTED_MODULE_10__["withAuth"], _lib_redux_redux__WEBPACK_IMPORTED_MODULE_8__["withRedux"], Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  loadUser: _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_12__["loadUser"],
  loadRouteMgmtData: _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_12__["loadRouteMgmtData"]
}));
/* harmony default export */ __webpack_exports__["default"] = (enhance(RouteManagement));
/*
const DynamicRouteSelector = dynamic(
    () => import('../components/route-management/selectorManager'),
    { ssr: false }
)
*/

const Images = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "routemanagement__Images",
  componentId: "geraa8-0"
})(["height:8em;margin:0;padding-left:1em;position:absolute;top:1%;left:0%;"]);
const HeaderImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "routemanagement__HeaderImage",
  componentId: "geraa8-1"
})(["height:4em;width:7em;padding-left:2em;padding-top:1em;padding-bottom:2em;position:absolute;margin:0;z-index:1;"]);
const BackImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "routemanagement__BackImage",
  componentId: "geraa8-2"
})(["padding-top:0.5em;height:2em;width:2em;z-index:1;position:absolute;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "routemanagement__Container",
  componentId: "geraa8-3"
})(["width:100vw;height:100vh;margin:0;padding:0;background:white;display:flex;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;align-content:center;justify-content:center;"]);

/***/ }),

/***/ 3:
/*!*********************************************!*\
  !*** multi ./src/pages/routemanagement.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/christian/Development/fible-frontend/src/pages/routemanagement.tsx */"./src/pages/routemanagement.tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "https-proxy-agent":
/*!************************************!*\
  !*** external "https-proxy-agent" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https-proxy-agent");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

/***/ }),

/***/ "react-draggable":
/*!**********************************!*\
  !*** external "react-draggable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-draggable");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=routemanagement.js.map
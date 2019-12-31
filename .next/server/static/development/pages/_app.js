module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./src/lib/redux/actions/types.ts":
/*!****************************************!*\
  !*** ./src/lib/redux/actions/types.ts ***!
  \****************************************/
/*! exports provided: DATA_LOAD_USER, DATA_LOAD_ROUTE_MGMT_DATA, DATA_LOAD_INPUT_SCREEN, DATA_UPDATE_COMPONENTS_ORDER, DATA_UPDATE_HTYPE_ORDER, DATA_UPDATE_CHILD_HTYPE_ORDER, DATA_UPDATE_COMPONENT, DATA_ADD_NEW_COMPONENT, DATA_EMPTY_SELECTED_COMPONENT_ID, DATA_HANDLE_HTYPE_CHANGE, DATA_SET_SELECTED_COMPONENT, DATA_LOAD_COMPONENTS, DATA_SET_SELECTED_HTYPE, DATA_DELETE_SELECTED_COMPONENT, UI_UPDATE_ROUTEMGMT_STATE, UI_LOAD_STOP_AND_POI_MANAGER_STATE, UI_UPDATE_INPUT_SCREEN_STATE, UI_UPDATE_SIMULATOR_SELECTION_STATE, UI_UPDATE_SELECTOR_MANAGER_STATE, UI_INITIALIZE_INPUT_SCREEN_UI, UI_UPDATE_SIMULATOR_SELECTION, UI_UPDATE_ROUTE_STATE, UI_STOP_AND_POI_MANAGER_CONTROLLER, UI_SET_TITLE, UI_INITIALIZE_SIMULATOR_STATE, UI_UPDATE_INPUT_SCREEN_FLAG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_LOAD_USER", function() { return DATA_LOAD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_LOAD_ROUTE_MGMT_DATA", function() { return DATA_LOAD_ROUTE_MGMT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_LOAD_INPUT_SCREEN", function() { return DATA_LOAD_INPUT_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_UPDATE_COMPONENTS_ORDER", function() { return DATA_UPDATE_COMPONENTS_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_UPDATE_HTYPE_ORDER", function() { return DATA_UPDATE_HTYPE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_UPDATE_CHILD_HTYPE_ORDER", function() { return DATA_UPDATE_CHILD_HTYPE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_UPDATE_COMPONENT", function() { return DATA_UPDATE_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_ADD_NEW_COMPONENT", function() { return DATA_ADD_NEW_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_EMPTY_SELECTED_COMPONENT_ID", function() { return DATA_EMPTY_SELECTED_COMPONENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_HANDLE_HTYPE_CHANGE", function() { return DATA_HANDLE_HTYPE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_SET_SELECTED_COMPONENT", function() { return DATA_SET_SELECTED_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_LOAD_COMPONENTS", function() { return DATA_LOAD_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_SET_SELECTED_HTYPE", function() { return DATA_SET_SELECTED_HTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_DELETE_SELECTED_COMPONENT", function() { return DATA_DELETE_SELECTED_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_UPDATE_ROUTEMGMT_STATE", function() { return UI_UPDATE_ROUTEMGMT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_LOAD_STOP_AND_POI_MANAGER_STATE", function() { return UI_LOAD_STOP_AND_POI_MANAGER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_UPDATE_INPUT_SCREEN_STATE", function() { return UI_UPDATE_INPUT_SCREEN_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_UPDATE_SIMULATOR_SELECTION_STATE", function() { return UI_UPDATE_SIMULATOR_SELECTION_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_UPDATE_SELECTOR_MANAGER_STATE", function() { return UI_UPDATE_SELECTOR_MANAGER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_INITIALIZE_INPUT_SCREEN_UI", function() { return UI_INITIALIZE_INPUT_SCREEN_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_UPDATE_SIMULATOR_SELECTION", function() { return UI_UPDATE_SIMULATOR_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_UPDATE_ROUTE_STATE", function() { return UI_UPDATE_ROUTE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_STOP_AND_POI_MANAGER_CONTROLLER", function() { return UI_STOP_AND_POI_MANAGER_CONTROLLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_SET_TITLE", function() { return UI_SET_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_INITIALIZE_SIMULATOR_STATE", function() { return UI_INITIALIZE_SIMULATOR_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_UPDATE_INPUT_SCREEN_FLAG", function() { return UI_UPDATE_INPUT_SCREEN_FLAG; });
//.---------------------------
//----Data------
const DATA_LOAD_USER = "DATA_LOAD_USER";
const DATA_LOAD_ROUTE_MGMT_DATA = "DATA_LOAD_ROUTE_MGMT_DATA";
const DATA_LOAD_INPUT_SCREEN = "DATA_LOAD_INPUT_SCREEN";
const DATA_UPDATE_COMPONENTS_ORDER = "UPDATE_COMPONENTS_ORDER";
const DATA_UPDATE_HTYPE_ORDER = "DATA_UPDATE_HTYPE_ORDER";
const DATA_UPDATE_CHILD_HTYPE_ORDER = "DATA_UPDATE_CHILD_HTYPE_ORDER";
const DATA_UPDATE_COMPONENT = "DATA_UPDATE_COMPONENT";
const DATA_ADD_NEW_COMPONENT = "DATA_ADD_NEW_COMPONENT";
const DATA_EMPTY_SELECTED_COMPONENT_ID = "DATA_EMPTY_SELECTED_COMPONENT_ID";
const DATA_HANDLE_HTYPE_CHANGE = "DATA_HANDLE_HTYPE_CHANGE";
const DATA_SET_SELECTED_COMPONENT = "DATA_SET_SELECTED_COMPONENT";
const DATA_LOAD_COMPONENTS = "DATA_LOAD_COMPONENTS";
const DATA_SET_SELECTED_HTYPE = "DATA_SET_SELECTED_HTYPE";
const DATA_DELETE_SELECTED_COMPONENT = "DATA_DELETE_SELECTED_COMPONENT"; //-----UI-------

const UI_UPDATE_ROUTEMGMT_STATE = "UI_UPDATE_ROUTEMGMT_STATE";
const UI_LOAD_STOP_AND_POI_MANAGER_STATE = "UI_LOAD_STOP_AND_POI_MANAGER_STATE";
const UI_UPDATE_INPUT_SCREEN_STATE = "UI_UPDATE_INPUT_SCREEN_STATE";
const UI_UPDATE_SIMULATOR_SELECTION_STATE = "UI_UPDATE_SIMULATOR_SELECTION_STATE";
const UI_UPDATE_SELECTOR_MANAGER_STATE = "UI_UPDATE_SELECTOR_MANAGER_STATE";
const UI_INITIALIZE_INPUT_SCREEN_UI = "UI_INITIALIZE_INPUT_SCREEN_UI";
const UI_UPDATE_SIMULATOR_SELECTION = "UI_UPDATE_SIMULATOR_SELECTION";
const UI_UPDATE_ROUTE_STATE = "UI_UPDATE_ROUTE_STATE";
const UI_STOP_AND_POI_MANAGER_CONTROLLER = "UI_STOP_AND_POI_MANAGER_CONTROLLER";
const UI_SET_TITLE = "UI_SET_TITLE";
const UI_INITIALIZE_SIMULATOR_STATE = "UI_INITIALIZE_SIMULATOR_STATE";
const UI_UPDATE_INPUT_SCREEN_FLAG = "UI_UPDATE_INPUT_SCREEN_FLAG";

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
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/types */ "./src/lib/redux/actions/types.ts");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

 //HTYPE is the hierarchy type, aka route, stop, etc
//DATA REDUCER + UI REDUCER + ROUTE MANAGEMENT SCREEN REDUCER
//make a reducer that cleans up the routes stops etc when you go to the route management screen.

/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_LOAD_USER"]:
      {
        const {
          name,
          email,
          routes,
          stops,
          pois
        } = action.payload.content;
        return _objectSpread({}, state, {
          user: {
            name: name,
            routes: routes ? routes : [],
            stops: stops ? stops : [],
            pois: pois ? pois : [],
            email: email
          }
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_LOAD_ROUTE_MGMT_DATA"]:
      {
        const {
          htypes
        } = action.payload.content;
        const {
          user
        } = action.payload.content;
        const content = {};

        for (let item of _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(htypes)) {
          content[item] = htypes[item].reduce((result, attri) => {
            if (attri) {
              result[attri.id] = attri;
            }

            return result;
          }, {});
        }

        return _objectSpread({}, state, {
          user: _objectSpread({}, user),
          routes: _objectSpread({}, content["routes"]),
          stops: _objectSpread({}, content["stops"]),
          pois: _objectSpread({}, content["pois"])
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_LOAD_INPUT_SCREEN"]:
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
          user: _objectSpread({}, user),
          selectedHtypeId: htypeid,
          selectedHtype: htype,
          [htype]: _objectSpread({}, state[htype], {
            //taking the first two letters of the hierarchy type and combining it with a unique id of length 8
            [htypeid]: _objectSpread({}, htypeData[htype])
          }),
          components: _objectSpread({}, components)
        });
      }
      ;

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_LOAD_COMPONENTS"]:
      {
        const {
          componentsArray
        } = action.payload.content;
        let components = componentsArray.reduce((result, attri) => {
          if (attri) {
            result[attri.id] = attri;
          }

          return result;
        }, {});
        return _objectSpread({}, state, {
          components: _objectSpread({}, components)
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_UPDATE_COMPONENTS_ORDER"]:
      {
        const newOrder = action.payload.content.newOrder;
        const htype = action.payload.content.htype;
        const selectedHtypeId = action.payload.content.selectedHtypeId;
        return _objectSpread({}, state, {
          [htype]: _objectSpread({}, state[htype], {
            [selectedHtypeId]: _objectSpread({}, state[htype][selectedHtypeId], {
              components: newOrder
            })
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_UPDATE_HTYPE_ORDER"]:
      {
        const newOrder = action.payload.content.newOrder;
        const htype = action.payload.content.htype;
        return _objectSpread({}, state, {
          user: _objectSpread({}, state.user, {
            [htype]: newOrder
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_UPDATE_CHILD_HTYPE_ORDER"]:
      {
        const newOrder = action.payload.content.newOrder;
        const htype = action.payload.content.htype;
        const parentHtype = action.payload.content.parentHtype;
        const parentHtypeId = action.payload.content.parentHtypeId;
        return _objectSpread({}, state, {
          [parentHtype]: _objectSpread({}, state[parentHtype], {
            [parentHtypeId]: _objectSpread({}, state[parentHtype][parentHtypeId], {
              [htype]: newOrder
            })
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_ADD_NEW_COMPONENT"]:
      {
        const {
          htype
        } = action.payload.content;
        const {
          selectedHtypeId
        } = action.payload.content;
        const {
          component
        } = action.payload.content;
        const newComponentsArray = [...state[htype][selectedHtypeId].components, component.id];
        console.log(component);
        return _objectSpread({}, state, {
          selectedComponentId: component.id,
          [htype]: _objectSpread({}, state[htype], {
            [selectedHtypeId]: _objectSpread({}, state[htype][selectedHtypeId], {
              components: newComponentsArray
            })
          }),
          components: _objectSpread({}, state.components, {
            [component.id]: {
              id: component.id,
              ownerId: state.user.id,
              ownerName: state.user.name,
              parentId: selectedHtypeId,
              type: component.type,
              content: component.content
            }
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_UPDATE_COMPONENT"]:
      {
        const {
          content
        } = action.payload.content;
        const {
          selectedComponentId
        } = action.payload.content;
        return _objectSpread({}, state, {
          components: _objectSpread({}, state.components, {
            [selectedComponentId]: _objectSpread({}, state.components[selectedComponentId], {
              content: content
            })
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_UPDATE_COMPONENTS_ORDER"]:
      {
        const newOrder = action.payload.content.newOrder;
        const htype = action.payload.content.htype;
        const selectedHtypeId = action.payload.content.selectedHtypeId;
        return _objectSpread({}, state, {
          [htype]: _objectSpread({}, state[htype], {
            [selectedHtypeId]: _objectSpread({}, state[htype][selectedHtypeId], {
              components: newOrder
            })
          })
        });
      }
      ;

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_HANDLE_HTYPE_CHANGE"]:
      {
        const {
          changedHtype
        } = action.payload.content;
        const {
          htypeId
        } = action.payload.content;
        const {
          htype
        } = action.payload.content;
        console.log(changedHtype);
        console.log(htypeId);
        return _objectSpread({}, state, {
          [htype]: _objectSpread({}, state[htype], {
            [htypeId]: _objectSpread({}, changedHtype)
          })
        });
      }
      ;

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_SET_SELECTED_COMPONENT"]:
      {
        const selectedComponentId = action.payload.content.selectedComponentId;
        return _objectSpread({}, state, {
          selectedComponentId: selectedComponentId
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_DELETE_SELECTED_COMPONENT"]:
      {
        console.log(state);
        const component = state.components[state.selectedComponentId];
        const htype = state[state.selectedHtype][state.selectedHtypeId];

        const newComponentsArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_5___default()(htype.components);

        console.log(component);
        newComponentsArray.splice(newComponentsArray.indexOf(component.id), 1);
        const selectedComponentId = state.selectedComponentId;
        delete state.components[selectedComponentId];
        return _objectSpread({}, state, {
          [state.selectedHtype]: _objectSpread({}, state[state.selectedHtypeId], {
            [state.selectedHtypeId]: _objectSpread({}, htype, {
              components: newComponentsArray
            })
          })
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_8__["DATA_SET_SELECTED_HTYPE"]:
      {
        const {
          selectedHtype
        } = action.payload.content;
        const {
          selectedHtypeId
        } = action.payload.content;
        return _objectSpread({}, state, {
          selectedHtype: selectedHtype,
          selectedHtypeId: selectedHtypeId
        });
      }

    default:
      return state;
  }
});
const initialState = {
  user: {
    id: "",
    name: "",
    routes: [],
    stops: [],
    pois: [],
    email: ""
  },
  selectedHtypeId: "",
  selectedComponentId: "empty",
  selectedHtype: "",
  routes: {},
  pois: {},
  stops: {},
  components: {}
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
    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UI_LOAD_STOP_AND_POI_MANAGER_STATE"]:
      {
        if (state.routeMgmt.selector.managerUiCode != "MAPO" && state.routeMgmt.selector.managerUiCode != "MAST") {
          console.log(action.payload.content);
          const htype = action.payload.content.htype;

          if (htype == "pois") {
            return _objectSpread({}, state, {
              routeMgmt: _objectSpread({}, state.routeMgmt, {
                selector: _objectSpread({}, state.routeMgmt.selector, {
                  lastManagerUiCode: state.routeMgmt.selector.managerUiCode,
                  htype: htype,
                  managerUiCode: "MAPO"
                })
              })
            });
          } else {
            return _objectSpread({}, state, {
              routeMgmt: _objectSpread({}, state.routeMgmt, {
                selector: _objectSpread({}, state.routeMgmt.selector, {
                  lastManagerUiCode: state.routeMgmt.selector.managerUiCode,
                  htype: htype,
                  managerUiCode: "MAST"
                })
              })
            });
          }
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

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UI_INITIALIZE_SIMULATOR_STATE"]:
      {
        const show = action.payload.content;
        return _objectSpread({}, state, {
          inputScreen: _objectSpread({}, state.inputScreen, {
            simulator: {
              show: show
            }
          })
        });
      }
    //--------------------------------------------------- update --------------------------------------------------

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UI_UPDATE_ROUTEMGMT_STATE"]:
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

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UI_UPDATE_INPUT_SCREEN_STATE"]:
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

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UI_UPDATE_SIMULATOR_SELECTION_STATE"]:
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

    case _actions_types__WEBPACK_IMPORTED_MODULE_7__["UI_UPDATE_INPUT_SCREEN_FLAG"]:
      {
        return _objectSpread({}, state, {
          inputScreen: _objectSpread({}, state.inputScreen, {
            inputMenu: _objectSpread({}, state.inputScreen.inputMenu, {
              reload: state.inputScreen.inputMenu.reload == false ? true : false
            })
          })
        });
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
    columnOrder: ["routes", "stops", "pois"],
    title: ""
  },
  inputScreen: {
    inputMenu: {
      htype: "routes",
      //which component is shown in the menu
      show: "MENU",
      reload: true,
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

/***/ "./src/lib/redux/store.ts":
/*!********************************!*\
  !*** ./src/lib/redux/store.ts ***!
  \********************************/
/*! exports provided: Store, persistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistor", function() { return persistor; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/index */ "./src/lib/redux/reducers/index.ts");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage/session */ "redux-persist/lib/storage/session");
/* harmony import */ var redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_5__);





 //export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//export default createStore(rootReducer, applyMiddleware(thunk));
//import rootReducer from './reducers'

const initialState = {
  data: {
    user: {
      name: "",
      routes: [],
      stops: [],
      pois: [],
      email: ""
    },
    selectedHtypeId: "",
    selectedComponentId: "empty",
    selectedHtype: "",
    routes: {},
    pois: {},
    stops: {},
    components: {}
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
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_5__["persistReducer"])({
  key: "root",
  storage: redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_4___default.a
}, _reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"]);
/*
export const initializeStore = (preloadedState = initialState) => {
  let store;
  const isClient = typeof window !== 'undefined';
  if (isClient) {
    store = createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunk))
    );
    //store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunk))
    );
  }*/
// export const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
//export const persistor = persistStore(initialState);
//  return store
//}

const Store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_5__["persistStore"])(Store);
/*
export default () => {
  let initializeStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  let persistor = persistStore(store)
  return { initializeStore, persistor }
} 
*/

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _themes_globalsyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes/globalsyles */ "./src/themes/globalsyles.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/redux/store */ "./src/lib/redux/store.ts");

var _jsxFileName = "/home/christian/Development/fible-frontend/src/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const theme = {
  colors: {
    primary: '#0070f3'
  }
};
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(_themes_globalsyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
      store: _lib_redux_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }))));
  }

} //      <PersistGate loading={null} persistor={persistor}>

/***/ }),

/***/ "./src/themes/globalsyles.ts":
/*!***********************************!*\
  !*** ./src/themes/globalsyles.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  html {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage/session":
/*!****************************************************!*\
  !*** external "redux-persist/lib/storage/session" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage/session");

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

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map
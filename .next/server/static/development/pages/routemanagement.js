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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

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

/***/ "./src/components/loading-component/rotatingSpinner.tsx":
/*!**************************************************************!*\
  !*** ./src/components/loading-component/rotatingSpinner.tsx ***!
  \**************************************************************/
/*! exports provided: GrayRotatingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrayRotatingSpinner", function() { return GrayRotatingSpinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners-kit */ "react-spinners-kit");
/* harmony import */ var react_spinners_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_kit__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/loading-component/rotatingSpinner.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GrayRotatingSpinner = props => __jsx(SpinnerContainer, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(react_spinners_kit__WEBPACK_IMPORTED_MODULE_2__["RotateSpinner"], {
  color: "gray",
  size: 60,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));
const SpinnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "rotatingSpinner__SpinnerContainer",
  componentId: "a2fzsn-0"
})(["position:absolute;top:50vh;left:50vw;transform:translate(-50%,0);"]);

/***/ }),

/***/ "./src/components/route-management/selector/selector.tsx":
/*!***************************************************************!*\
  !*** ./src/components/route-management/selector/selector.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _selectorItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectorItem */ "./src/components/route-management/selector/selectorItem.tsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../lib/redux/actions/uiActions */ "./src/lib/redux/actions/uiActions.ts");
/* harmony import */ var _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/redux/actions/dataActions */ "./src/lib/redux/actions/dataActions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_createFunctions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lib/createFunctions */ "./src/lib/createFunctions.ts");


var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/selector/selector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














const Selector = props => {
  const [setRoute, {
    data
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useMutation"])(graphql_tag__WEBPACK_IMPORTED_MODULE_13___default.a`
    mutation setRoute($route:String!){
        setRoute(route:$route){
            id
        }
    }`);
  const dataState = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(state => state.data);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  const handleInputScreenButton = async props => {
    console.log(props.type);

    if (props.type == "routes") {
      const route = Object(_lib_createFunctions__WEBPACK_IMPORTED_MODULE_14__["createRoute"])({
        user: dataState.user,
        type: "routes"
      });
      dispatch(Object(_lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_9__["uiInitializeInputScreenUi"])({
        dispatch: props.type
      }));
      dispatch(Object(_lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_10__["dataLoadInputScreen"])({
        htype: props.type,
        user: dataState.user,
        htypeData: {
          routes: route
        },
        componentsArray: route.components
      }));
      await setRoute({
        variables: {
          route: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(route)
        }
      });
      sessionStorage.setItem("hid", route.id);
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
        pathname: '/inputscreen'
      });
    } else {
      let firstLetter = props.type.substring(0, 1);
      let rest = props.type.substring(1);
      let title = firstLetter + rest.toLowerCase() + " manager";
      dispatch(Object(_lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_9__["uiLoadStopAndPoiManagerState"])({
        htype: props.type
      }));
      dispatch(Object(_lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_9__["uiSetTitle"])({
        title: title
      }));
    }
  };

  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, props.type.substring(0, 1).toUpperCase() + props.type.substring(1)), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["Droppable"], {
    droppableId: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, provided => __jsx(RouteList, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: provided.innerRef
  }, provided.droppableProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), console.log(props.listItems), props.listItems.map((itemData, index) => __jsx(_selectorItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: itemData.id,
    type: props.type,
    itemData: itemData,
    index: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })), provided.placeholder)), __jsx(InputScreenButton, {
    onClick: () => handleInputScreenButton(props),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlus"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Selector);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "selector__Container",
  componentId: "sc-1uclpx7-0"
})(["margin-left:0.5vw;margin-right:0.5vw;border:1px solid lightgray;border-radius:2em;min-width:20vw;width:100%;height:100%;position:relative;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1.withConfig({
  displayName: "selector__Title",
  componentId: "sc-1uclpx7-1"
})(["padding:8px;"]);
const RouteList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "selector__RouteList",
  componentId: "sc-1uclpx7-2"
})(["padding:8px;"]);
const InputScreenButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "selector__InputScreenButton",
  componentId: "sc-1uclpx7-3"
})(["position:absolute;bottom:0;right:0;font-size:6vh;border:0;color:none;background-color:transparent;:focus{outline:none;}"]);

/***/ }),

/***/ "./src/components/route-management/selector/selectorItem.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/route-management/selector/selectorItem.tsx ***!
  \*******************************************************************/
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
/* harmony import */ var _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/redux/actions/uiActions */ "./src/lib/redux/actions/uiActions.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../lib/redux/actions/dataActions */ "./src/lib/redux/actions/dataActions.ts");

var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/selector/selectorItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const SelectorItem = props => {
  const uiState = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.ui);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  /* const [getCompontents, { loading, data }] = useLazyQuery( gql`
   query getComponents($ids:String)
   {   getComponents(ids:$ids){
       id content type
       }    }
   `);*/

  const handleEditRoutes = async e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    sessionStorage.setItem("hid", props.itemData.id);
    const selectedId = props.itemData.id;
    const htype = props.type;
    dispatch(Object(_lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__["uiInitializeSimulatorState"])({
      show: htype
    }));
    dispatch(Object(_lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_9__["dataSetSelectedHtype"])({
      selectedHtype: htype,
      selectedHtypeId: props.itemData.id
    })); //const resp = await getCompontents()
    //props.updateSelectorManagerState({selectedId,htype})

    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
      pathname: '/inputscreen'
    } //'inputscreen'
    ); //  Router.replace('/routemanagement','/inputscreen')
  };

  const handleSelectorManagerStateUpdate = e => {
    const selectedId = props.itemData.id;
    const htype = props.type;
    dispatch(Object(_lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__["uiUpdateRoutemgmtState"])({
      selectedId,
      htype
    }));
  };

  return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Draggable"], {
    draggableId: props.itemData.id,
    index: props.index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, provided => __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.draggableProps, provided.dragHandleProps, {
    ref: provided.innerRef,
    onClick: e => handleSelectorManagerStateUpdate(e) //todo fix state
    ,
    color: props.itemData.id == uiState.routeMgmt.selector["selected" + props.type] ? "salmon" : "lightgray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx(Headline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, props.itemData.name), __jsx(EditButton, {
    onClick: e => handleEditRoutes(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectorItem);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "selectorItem__Container",
  componentId: "sc-18xfu6t-0"
})(["position:relative;border:1px solid;border-color:", ";border-radius:2em;padding-top:4vh;padding:1vw;margin-bottom:2vh;background-color:white;:hover{border-color:rgba(250,128,114,0.3 );}"], props => props.color);
const Headline = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
  displayName: "selectorItem__Headline",
  componentId: "sc-18xfu6t-1"
})(["font-size:2vh;font-weight:lighter;user-select:none;top:10%;left:5vw;position:relative;margin:0;color:black;border:none;background:none;text-decoration:none;"]);
const EditButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "selectorItem__EditButton",
  componentId: "sc-18xfu6t-2"
})(["position:relative;bottom:3vh;left:98%;font-size:2vh;border:0;color:none;background-color:transparent;transform:translate(-50%,0);cursor:pointer;:focus{outline:none;}"]);
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

/***/ "./src/components/route-management/selector/selectorManager.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/route-management/selector/selectorManager.tsx ***!
  \**********************************************************************/
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
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./src/components/route-management/selector/selector.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/redux/actions/dataActions */ "./src/lib/redux/actions/dataActions.ts");

var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/selector/selectorManager.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const SelectorManager = props => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const dataState = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.data);
  const uiState = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.ui); //console.log(props)

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
    } //remake probably


    if (destination.droppableId == source.droppableId) {
      const htype = source.droppableId;

      if (source.droppableId == "routes") {
        const newOrder = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(dataState.user[htype]);

        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, draggableId);
        dispatch(Object(_lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_5__["dataUpdateHtypeOrder"])({
          newOrder,
          htype
        }));
      } else {
        const htypeParent = htype == "stops" ? "routes" : "stops";

        const newOrder = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][htype]);

        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, draggableId);
        dispatch(Object(_lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_5__["dataUpdateChildHtypeOrder"])({
          newOrder: newOrder,
          htype: htype,
          parentHtype: htypeParent,
          parentHtypeId: uiState.routeMgmt.selector['selected' + htypeParent]
        }));
      }
    }
  };

  const selectorFunction = props => {
    switch (props.type) {
      case "routes":
        {
          //console.log(props.dataState.routeMgmt.user.routes)
          const selector = dataState.user.routes;
          let listItems;
          listItems = selector ? selector.reduce((result, route) => {
            if (dataState.routes[route] != undefined) {
              result.push(dataState.routes[route]);
            }

            return result;
          }, []) : [];
          return __jsx(_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: "routes",
            selector: selector,
            type: "routes",
            listItems: listItems,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: undefined
          });
        }

      case "stops":
        {
          const selector = dataState.routes[uiState.routeMgmt.selector.selectedroutes].stops;
          let listItems;
          listItems = selector ? selector.reduce((result, stop) => {
            if (dataState.stops[stop] != undefined && dataState.routes[uiState.routeMgmt.selector.selectedroutes] != undefined && dataState.routes[uiState.routeMgmt.selector.selectedroutes].stops.includes(stop)) {
              result.push(dataState.stops[stop]);
            }

            return result;
          }, []) : [];
          return __jsx(_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: "stops",
            selector: selector,
            type: "stops",
            listItems: listItems,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: undefined
          });
        }

      case "pois":
        {
          const selector = dataState.stops[uiState.routeMgmt.selector.selectedstops].pois;
          let listItems;
          console.log(dataState.stops[uiState.routeMgmt.selector.selectedstops]);
          listItems = selector ? selector.reduce((result, poi) => {
            console.log(poi);

            if (dataState.pois[poi] != undefined && dataState.stops[uiState.routeMgmt.selector.selectedstops] != undefined && dataState.stops[uiState.routeMgmt.selector.selectedstops].pois.includes(poi)) {
              result.push(dataState.pois[poi]);
            }

            return result;
          }, []) : [];
          return __jsx(_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: "pois",
            selector: selector,
            type: "pois",
            listItems: listItems,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: undefined
          });
        }

      default:
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: undefined
        }, "wrong");
    }
  };

  return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["DragDropContext"], {
    onDragEnd: result => onDragEnd(result),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, selectorFunction(props));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectorManager);

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
/* harmony import */ var _selector_selectorManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector/selectorManager */ "./src/components/route-management/selector/selectorManager.tsx");
/* harmony import */ var _stopsandpoi_management_spManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stopsandpoi-management/spManager */ "./src/components/route-management/stopsandpoi-management/spManager.tsx");
var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/stateManager.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const RouteManagementStateManager = props => {
  const uiState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.ui);

  const SelectorChoice = props => {
    //   console.log(props.state.htypes.getRoutes)
    switch (uiState.routeMgmt.selector.managerUiCode) {
      case "RO":
        {
          return __jsx(OneSelectorWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: undefined
          }, __jsx(_selector_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "routes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: undefined
          }));
        }

      case "ROST":
        {
          return __jsx(TwoSelectorsWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: undefined
          }, __jsx(_selector_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "routes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: undefined
          }), __jsx(_selector_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "stops",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: undefined
          }));
        }

      case "ROSTPO":
        {
          return __jsx(ThreeSelectorsWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: undefined
          }, __jsx(_selector_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "routes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: undefined
          }), __jsx(_selector_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "stops",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: undefined
          }), __jsx(_selector_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "pois",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: undefined
          }));
        }

      case "MAST":
        {
          return __jsx(ManagerWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: undefined
          }, __jsx(_stopsandpoi_management_spManager__WEBPACK_IMPORTED_MODULE_4__["default"], {
            type: "stops",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: undefined
          }));
        }

      case "MAPO":
        {
          return __jsx(ManagerWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: undefined
          }, __jsx(_stopsandpoi_management_spManager__WEBPACK_IMPORTED_MODULE_4__["default"], {
            type: "pois",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: undefined
          }));
        }

      default:
        {
          return __jsx(OneSelectorWrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: undefined
          }, __jsx(_selector_selectorManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "routes",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: undefined
          }));
        }
    }
  };

  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, SelectorChoice(props));
}; //export default RouteManagementStateManager


/* harmony default export */ __webpack_exports__["default"] = (RouteManagementStateManager);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stateManager__Container",
  componentId: "sc-12qph2w-0"
})(["width:100vw;height:80vh;position:absolute;bottom:5vh;"]);
const OneSelectorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stateManager__OneSelectorWrapper",
  componentId: "sc-12qph2w-1"
})(["position:relative;width:30vw;left:35vw;height:100%;margin:0;padding:0;align-content:center;display:flex;flex-direction:row;"]);
const TwoSelectorsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stateManager__TwoSelectorsWrapper",
  componentId: "sc-12qph2w-2"
})(["position:relative;left:20vw;width:60vw;height:100%;margin:0;padding:0;align-content:center;justify-content:center;display:flex;flex-direction:row;"]);
const ThreeSelectorsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stateManager__ThreeSelectorsWrapper",
  componentId: "sc-12qph2w-3"
})(["position:relative;margin:0;padding:0;width:90vw;height:100%;left:5vw;align-content:center;display:flex;flex-direction:row;"]);
const ManagerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stateManager__ManagerWrapper",
  componentId: "sc-12qph2w-4"
})(["position:relative;margin:0;padding:0;width:90vw;height:100%;left:5vw;align-content:center;justify-content:center;display:flex;flex-direction:row;border:1px solid lightgray;border-radius:0.5vh;top:0;"]);

/***/ }),

/***/ "./src/components/route-management/stopsandpoi-management/spListItem.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/route-management/stopsandpoi-management/spListItem.tsx ***!
  \*******************************************************************************/
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
/* harmony import */ var _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/redux/actions/uiActions */ "./src/lib/redux/actions/uiActions.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/stopsandpoi-management/spListItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const SelectorItem = props => {
  const uiState = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.ui);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const [getHtypeWithComponents, {
    loading,
    data
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useLazyQuery"])(graphql_tag__WEBPACK_IMPORTED_MODULE_10___default.a`query getHtypeWithComponents
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
    sessionStorage.setItem("hid", props.itemData.id); // Cookie.

    const selectedId = props.itemData.id;
    const htype = props.type;
    dispatch(Object(_lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__["uiInitializeSimulatorState"])({
      show: htype
    })); //  const resp = await getHtypeWithComponents()

    props.uiUpdateSelectorManagerState({
      selectedId,
      htype
    });
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
      pathname: '/inputscreen'
    } //'inputscreen'
    ); //  Router.replace('/routemanagement','/inputscreen')
  };

  const handleSelectorManagerStateUpdate = e => {
    const selectedId = props.itemData.id;
    const htype = props.type;
    dispatch(Object(_lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_7__["uiUpdateRoutemgmtState"])({
      selectedId,
      htype
    }));
  };

  return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Draggable"], {
    draggableId: props.itemData.id,
    index: props.index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, provided => __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.draggableProps, provided.dragHandleProps, {
    ref: provided.innerRef,
    onClick: e => handleSelectorManagerStateUpdate(e) //todo fix state
    ,
    color: props.itemData.id == uiState.routeMgmt.selector["selected" + props.type] ? "salmon" : "lightgray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx(Headline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, props.itemData.name), __jsx(EditButton, {
    onClick: e => handleEditRoutes(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectorItem);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "spListItem__Container",
  componentId: "e7bjlc-0"
})(["position:relative;border:1px solid;border-color:", ";border-radius:2em;padding-top:4vh;padding:1vw;margin-bottom:2vh;background-color:white;:hover{border-color:rgba(250,128,114,0.3 );}"], props => props.color);
const Headline = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3.withConfig({
  displayName: "spListItem__Headline",
  componentId: "e7bjlc-1"
})(["font-size:2vh;font-weight:lighter;user-select:none;top:10%;left:5vw;position:relative;margin:0;color:black;border:none;background:none;text-decoration:none;"]);
const EditButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "spListItem__EditButton",
  componentId: "e7bjlc-2"
})(["position:relative;bottom:3vh;left:98%;font-size:2vh;border:0;color:none;background-color:transparent;transform:translate(-50%,0);cursor:pointer;:focus{outline:none;}"]);

/***/ }),

/***/ "./src/components/route-management/stopsandpoi-management/spManager.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/route-management/stopsandpoi-management/spManager.tsx ***!
  \******************************************************************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lib/redux/actions/uiActions */ "./src/lib/redux/actions/uiActions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _spSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./spSelector */ "./src/components/route-management/stopsandpoi-management/spSelector.tsx");
/* harmony import */ var _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../lib/redux/actions/dataActions */ "./src/lib/redux/actions/dataActions.ts");
/* harmony import */ var _lib_createFunctions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../lib/createFunctions */ "./src/lib/createFunctions.ts");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_23__);










var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/stopsandpoi-management/spManager.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }
















const StopsAndPois = props => {
  const [setStop] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_20__["useMutation"])(graphql_tag__WEBPACK_IMPORTED_MODULE_21___default.a`
    mutation setStop($stop:String!){
        setStop(stop:$stop){
            id
        }
    }`);
  const [setPoi] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_20__["useMutation"])(graphql_tag__WEBPACK_IMPORTED_MODULE_21___default.a`
    mutation setPoi($poi:String!){
        setPoi(poi:$poi){
            id
        }
    }`);
  const [updateHtype] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_20__["useMutation"])(graphql_tag__WEBPACK_IMPORTED_MODULE_21___default.a`
    mutation updateHtype($htype:String!){
        updateHtype(htype:$htype)
    }`);
  const [updateUser] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_20__["useMutation"])(graphql_tag__WEBPACK_IMPORTED_MODULE_21___default.a`
    mutation updateUser($user:String!){
        updateUser(user:$user)
    }`);
  const dataState = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["useSelector"])(state => state.data);
  const uiState = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["useSelector"])(state => state.ui);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["useDispatch"])();
  const htypeParent = props.type == "stops" ? "routes" : "stops"; //const allList = dataState.user[props.type].map((element) => dataState[props.type][element])

  const allList = dataState.user[props.type].reduce((result, item) => {
    if (dataState[props.type][item] != undefined && dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][props.type] != undefined && !dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][props.type].includes(item)) {
      result.push(dataState[props.type][item]);
    }

    return result;
  }, []); //filters the list to the stops/pois that belongs to the route/stop

  const filteredList = dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][props.type].reduce((result, item) => {
    if (dataState[props.type][item] != undefined && dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][props.type] != undefined && dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][props.type].includes(item)) {
      result.push(dataState[props.type][item]);
    }

    return result;
  }, []);
  let htype;

  const handleInputScreenButton = async () => {
    if (props.type == "stops") {
      htype = Object(_lib_createFunctions__WEBPACK_IMPORTED_MODULE_19__["createStop"])({
        user: dataState.user,
        type: "stops"
      });
      await setStop({
        variables: {
          stop: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(htype)
        }
      });
      sessionStorage.setItem("hid", htype.id);
    } else {
      htype = Object(_lib_createFunctions__WEBPACK_IMPORTED_MODULE_19__["createPoi"])({
        user: dataState.user,
        type: "pois"
      });
      await setPoi({
        variables: {
          poi: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(htype)
        }
      });
      sessionStorage.setItem("hid", htype.id);
    }

    dispatch(Object(_lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_14__["uiInitializeInputScreenUi"])({
      dispatch: props.type
    }));
    dispatch(Object(_lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_18__["dataLoadInputScreen"])({
      htype: props.type,
      user: dataState.user,
      htypeData: {
        [props.type]: htype
      },
      componentsArray: htype.components
    }));
    next_router__WEBPACK_IMPORTED_MODULE_22___default.a.push({
      pathname: '/inputscreen'
    });
  };

  const handleBackButton = async () => {
    dispatch(Object(_lib_redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_14__["uiLoadStopAndPoiManagerState"])({
      htype: props.type
    }));
  };

  const onDragEnd = result => {
    console.log(result);
    const htype = props.type + "s";
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

    if (destination.droppableId == source.droppableId) {
      if (destination.droppableId === "ALL") {
        const newOrder = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8___default()(dataState.user[props.type]);

        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, draggableId);
        dispatch(Object(_lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_18__["dataUpdateHtypeOrder"])({
          newOrder: newOrder,
          htype: props.type
        }));
        updateUser({
          variables: {
            user: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(_objectSpread({}, dataState.user, {
              [htype]: newOrder
            }))
          }
        });
      } else if (destination.droppableId == "SELECTED") {
        const newOrder = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8___default()(dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][htype]);

        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, draggableId);
        dispatch(Object(_lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_18__["dataUpdateChildHtypeOrder"])({
          newOrder: newOrder,
          htype: htype,
          parentHtype: htypeParent,
          parentHtypeId: uiState.routeMgmt.selector['selected' + htypeParent]
        }));
        updateHtype({
          variables: {
            htype: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(_objectSpread({}, dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]], {
              [htype]: newOrder
            }))
          }
        });
      }
    } else {
      const userOrder = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8___default()(dataState.user[htype]);

      const htypeOrder = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_8___default()(dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]][htype]);

      if (source.droppableId == "ALL") {
        userOrder.splice(source.index, 1);
      } else {
        htypeOrder.splice(source.index, 1);
      }

      if (destination.droppableId == "ALL") {
        userOrder.splice(destination.index, 0, draggableId);
      } else {
        htypeOrder.splice(destination.index, 0, draggableId);
      }
      /*    dispatch(dataUpdateHtypeOrder({
              newOrder: userOrder,
              htype: props.type
          }))*/


      dispatch(Object(_lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_18__["dataUpdateChildHtypeOrder"])({
        newOrder: htypeOrder,
        htype: props.type,
        parentHtype: htypeParent,
        parentHtypeId: uiState.routeMgmt.selector['selected' + htypeParent]
      }));
      updateHtype({
        variables: {
          htype: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(_objectSpread({}, dataState[htypeParent][uiState.routeMgmt.selector['selected' + htypeParent]], {
            [htype]: htypeOrder
          }))
        }
      });
    }
  };

  return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_16__["DragDropContext"], {
    onDragEnd: result => onDragEnd(result),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx(BackButton, {
    onClick: handleBackButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faTimes"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  })), __jsx(InputScreenButton, {
    onClick: handleInputScreenButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPlus"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  })), __jsx(_spSelector__WEBPACK_IMPORTED_MODULE_17__["default"], {
    type: "ALL",
    list: allList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }), __jsx(_spSelector__WEBPACK_IMPORTED_MODULE_17__["default"], {
    type: "SELECTED",
    list: filteredList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (next_dynamic__WEBPACK_IMPORTED_MODULE_23___default()(() => _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a.resolve(StopsAndPois), {
  ssr: false
}));
const InputScreenButton = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.button.withConfig({
  displayName: "spManager__InputScreenButton",
  componentId: "sc-1qg7vml-0"
})(["position:absolute;bottom:2%;right:50%;transform:translate(50%,0);font-size:10vh;border:0;color:none;background-color:transparent;:focus{outline:none;}"]);
const BackButton = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.button.withConfig({
  displayName: "spManager__BackButton",
  componentId: "sc-1qg7vml-1"
})(["position:absolute;top:2%;right:5%;transform:translate(50%,0);font-size:5vh;border:0;color:none;background-color:transparent;:focus{outline:none;}"]);

/***/ }),

/***/ "./src/components/route-management/stopsandpoi-management/spSelector.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/route-management/stopsandpoi-management/spSelector.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _spListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spListItem */ "./src/components/route-management/stopsandpoi-management/spListItem.tsx");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/route-management/stopsandpoi-management/spSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







const SPSelector = props => {
  const uiState = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.ui);

  const titleHandler = () => {
    const htypeParentLookup = {
      stops: "route",
      pois: "stop"
    };
    let title = "";

    if (props.type == "ALL") {
      title = uiState.routeMgmt.selector.htype.toLowerCase() + " library";
    } else {
      title = uiState.routeMgmt.selector.htype.toLowerCase() + " in " + htypeParentLookup[uiState.routeMgmt.selector.htype];
    }

    return title;
  };

  return __jsx(ContainerStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(TitleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, titleHandler()), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["Droppable"], {
    droppableId: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, provided => __jsx(SandpContainerStyled, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: provided.innerRef
  }, provided.droppableProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), props.list.map((elem, index) => __jsx(_spListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: elem.id,
    itemData: elem,
    index: index,
    headline: elem.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })), provided.placeholder)));
};

/* harmony default export */ __webpack_exports__["default"] = (next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(() => _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(SPSelector), {
  ssr: false
}));
const ContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "spSelector__ContainerStyled",
  componentId: "sc-1lsio8w-0"
})(["width:30vw;height:88%;align-self:center;justify-self:flex-end;display:flex;align-content:center;justify-content:center;margin-left:5vw;margin-right:5vw;"]);
const SandpContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "spSelector__SandpContainerStyled",
  componentId: "sc-1lsio8w-1"
})(["background-color:white;margin:1em;border:1px solid lightgray;border-radius:2em;min-width:20vw;width:100%;height:100%;position:relative;"]);
const TitleStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "spSelector__TitleStyle",
  componentId: "sc-1lsio8w-2"
})(["position:absolute;top:0;font-size:4vh;color:black;border:none;background:none;text-decoration:none;padding-left:1em;font-weight:lighter;text-align:center;margin:0;padding:0;"]);

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
    lineNumber: 6
  },
  __self: undefined
}, "Welcome ", props.name, ", here are your routes!");

/* harmony default export */ __webpack_exports__["default"] = (Title); //export default connect(mapStateToProps)(Title);

const TitleStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "title__TitleStyle",
  componentId: "sc-184qkc3-0"
})(["position:absolute;top:3%;font-size:2.5em;color:black;border:none;background:none;text-decoration:none;padding-left:1em;font-weight:lighter;text-align:center;margin:0;padding:0;@media screen and (max-width:1024px){{display:none !important;}}"]);

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/christian/Development/fible-frontend/src/components/shared-components/logoutButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const LogoutButton = props => {
  const client = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useApolloClient"])();

  const onCompleted = () => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace("/");
    sessionStorage.clear();
    logout();
  };

  const onError = error => {
    // If you want to send error to external service?
    console.error(error);
  };

  const [logout, {
    error
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  mutation Logout {
    logout
  }`, {
    onCompleted,
    onError
  });
  return __jsx(StyledWrapper, {
    onClick: () => {
      logout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(StyledText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Logout"), __jsx(StyledFontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faDoorOpen"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }));
}; //const mapStateToProps = state => {
//    return { cleanUser: state.cleanUser };
//  };


/* harmony default export */ __webpack_exports__["default"] = (LogoutButton); //  export default connect(mapStateToProps,{cleanUser})(LogoutButton);

const StyledFontAwesomeIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"]).withConfig({
  displayName: "logoutButton__StyledFontAwesomeIcon",
  componentId: "pmozmx-0"
})(["font-size:3vh;transform:translate(-50%,0);"]);
const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "logoutButton__StyledWrapper",
  componentId: "pmozmx-1"
})(["display:flex;flex-direction:row;width:5vw;height:5vh;position:absolute;right:10vw;top:3vh;"]);
const StyledText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "logoutButton__StyledText",
  componentId: "pmozmx-2"
})(["font-size:3vh;padding:0;margin:0;margin-right:0.5vw;user-select:none;"]);

/***/ }),

/***/ "./src/lib/apollo.tsx":
/*!****************************!*\
  !*** ./src/lib/apollo.tsx ***!
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









var _jsxFileName = "/home/christian/Development/fible-frontend/src/lib/apollo.tsx";
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
    // @ts-ignore
    return createApolloClient(...args);
  } // Reuse client on the client-side


  if (!apolloClient) {
    // @ts-ignore
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

/***/ "./src/lib/createFunctions.ts":
/*!************************************!*\
  !*** ./src/lib/createFunctions.ts ***!
  \************************************/
/*! exports provided: createComponent, createRoute, createStop, createPoi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoute", function() { return createRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStop", function() { return createStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPoi", function() { return createPoi; });
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);

const createComponent = ({
  user,
  type,
  selectedHtypeId
}) => {
  const idSuffix = type.substring(0, 2).toLowerCase() + "_";
  const selectedComponentId = idSuffix + uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
  let componentTemplate;

  switch (type) {
    case "HEADLINE":
      {
        componentTemplate = '{"headline":"New Headline"}';
      }
  }

  return {
    id: selectedComponentId,
    onwnerId: user.id,
    ownerName: user.name,
    parentId: selectedHtypeId,
    type: type,
    content: componentTemplate
  };
};
const createRoute = ({
  user,
  type
}) => {
  const idSuffix = type.substring(0, 2).toLowerCase() + "_";
  const routeId = idSuffix + uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
  return {
    id: routeId,
    onwnerId: user.id,
    ownerName: user.name,
    name: "New Route",
    image: "",
    stops: [],
    pois: [],
    components: [],
    locations: []
  };
};
const createStop = ({
  user,
  type
}) => {
  const idSuffix = type.substring(0, 2).toLowerCase() + "_";
  const stopId = idSuffix + uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
  return {
    id: stopId,
    onwnerId: user.id,
    ownerName: user.name,
    name: "New Stop",
    image: "",
    pois: [],
    components: [],
    locations: ""
  };
};
const createPoi = ({
  user,
  type
}) => {
  const idSuffix = type.substring(0, 2).toLowerCase() + "_";
  const poiId = idSuffix + uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
  return {
    id: poiId,
    onwnerId: user.id,
    ownerName: user.name,
    name: "New Poi",
    image: "",
    components: [],
    location: ""
  };
};

/***/ }),

/***/ "./src/lib/redux/actions/dataActions.ts":
/*!**********************************************!*\
  !*** ./src/lib/redux/actions/dataActions.ts ***!
  \**********************************************/
/*! exports provided: dataLoadUser, dataLoadRouteMgmtData, dataLoadInputScreen, dataUpdateComponentsOrder, dataUpdateHtypeOrder, dataUpdateChildHtypeOrder, dataUpdateComponent, dataAddNewComponent, dataEmptySelectedComponent, dataHandleHtypeChange, dataSetSelectedComponent, dataSetSelectedHtype, dataLoadComponents, dataDeleteSelectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataLoadUser", function() { return dataLoadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataLoadRouteMgmtData", function() { return dataLoadRouteMgmtData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataLoadInputScreen", function() { return dataLoadInputScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUpdateComponentsOrder", function() { return dataUpdateComponentsOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUpdateHtypeOrder", function() { return dataUpdateHtypeOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUpdateChildHtypeOrder", function() { return dataUpdateChildHtypeOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUpdateComponent", function() { return dataUpdateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataAddNewComponent", function() { return dataAddNewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataEmptySelectedComponent", function() { return dataEmptySelectedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataHandleHtypeChange", function() { return dataHandleHtypeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataSetSelectedComponent", function() { return dataSetSelectedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataSetSelectedHtype", function() { return dataSetSelectedHtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataLoadComponents", function() { return dataLoadComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataDeleteSelectedComponent", function() { return dataDeleteSelectedComponent; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/lib/redux/actions/types.ts");

let dataLoadUserId = 0;
let dataLoadRouteMgmtDataId = 0;
let dataLoadInputScreenId = 0;
let dataLoadComponentsId = 0;
let dataUpdateComponentsOrderId = 0;
let dataUpdateHtypeOrderId = 0;
let dataUpdateChildHtypeOrderId = 0;
let dataUpdateComponentId = 0;
let dataAddNewComponentId = 0;
let dataEmptySelectedComponentId = 0;
let dataHandleHtypeNameChangeId = 0;
let dataSetSelectedComponentId = 0;
let dataSetSelectedHtypeId = 0;
let dataDeleteSelectedComponentId = 0;
const dataLoadUser = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_LOAD_USER"],
  payload: {
    id: ++dataLoadUserId,
    content
  }
});
const dataLoadRouteMgmtData = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_LOAD_ROUTE_MGMT_DATA"],
  payload: {
    id: ++dataLoadRouteMgmtDataId,
    content
  }
});
const dataLoadInputScreen = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_LOAD_INPUT_SCREEN"],
  payload: {
    id: ++dataLoadInputScreenId,
    content
  }
});
const dataUpdateComponentsOrder = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_UPDATE_COMPONENTS_ORDER"],
  payload: {
    id: ++dataUpdateComponentsOrderId,
    content
  }
});
const dataUpdateHtypeOrder = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_UPDATE_HTYPE_ORDER"],
  payload: {
    id: ++dataUpdateHtypeOrderId,
    content
  }
});
const dataUpdateChildHtypeOrder = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_UPDATE_CHILD_HTYPE_ORDER"],
  payload: {
    id: ++dataUpdateChildHtypeOrderId,
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
const dataEmptySelectedComponent = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_EMPTY_SELECTED_COMPONENT_ID"],
  payload: {
    id: ++dataEmptySelectedComponentId
  }
});
const dataHandleHtypeChange = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_HANDLE_HTYPE_CHANGE"],
  payload: {
    id: ++dataHandleHtypeNameChangeId,
    content
  }
});
const dataSetSelectedComponent = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_SET_SELECTED_COMPONENT"],
  payload: {
    id: ++dataSetSelectedComponentId,
    content
  }
});
const dataSetSelectedHtype = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_SET_SELECTED_HTYPE"],
  payload: {
    id: ++dataSetSelectedHtypeId,
    content
  }
});
const dataLoadComponents = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_LOAD_COMPONENTS"],
  payload: {
    id: ++dataLoadComponentsId,
    content
  }
});
const dataDeleteSelectedComponent = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DATA_DELETE_SELECTED_COMPONENT"],
  payload: {
    id: ++dataDeleteSelectedComponentId
  }
});

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

/***/ "./src/lib/redux/actions/uiActions.ts":
/*!********************************************!*\
  !*** ./src/lib/redux/actions/uiActions.ts ***!
  \********************************************/
/*! exports provided: uiUpdateOrder, uiUpdateSelectorManagerState, uiInitializeInputScreenUi, uiStopAndPoiManagerController, uiSetTitle, uiUpdateRoutemgmtState, uiLoadStopAndPoiManagerState, uiUpdateInputScreenState, uiUpdateSimulatorSelectionState, uiInitializeSimulatorState, uiUpdateInputScreenFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiUpdateOrder", function() { return uiUpdateOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiUpdateSelectorManagerState", function() { return uiUpdateSelectorManagerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiInitializeInputScreenUi", function() { return uiInitializeInputScreenUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiStopAndPoiManagerController", function() { return uiStopAndPoiManagerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiSetTitle", function() { return uiSetTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiUpdateRoutemgmtState", function() { return uiUpdateRoutemgmtState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiLoadStopAndPoiManagerState", function() { return uiLoadStopAndPoiManagerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiUpdateInputScreenState", function() { return uiUpdateInputScreenState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiUpdateSimulatorSelectionState", function() { return uiUpdateSimulatorSelectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiInitializeSimulatorState", function() { return uiInitializeSimulatorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiUpdateInputScreenFlag", function() { return uiUpdateInputScreenFlag; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/lib/redux/actions/types.ts");
 //includes route management actions

let uiUpdateId = 0;
let uiUpdateManagerStateId = 0;
let uiUpdateInputScreenStateId = 0;
let uiInitializeInputScreenUiId = 0;
let uiUpdateSimulatorSelectionId = 0;
let uiStopAndPoiManagerControllerId = 0;
let uiSetTitleId = 0;
let uiUpdateRoutemgmtStateId = 0;
let uiLoadStopAndPoiManagerStateId = 0;
let uiUpdateSimulatorSelectionStateId = 0;
let uiInitializeSimulatorStateId = 0;
let uiUpdateInputScreenFlagId = 0;
const uiUpdateOrder = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_UPDATE_ROUTE_STATE"],
  payload: {
    id: ++uiUpdateId,
    content
  }
});
const uiUpdateSelectorManagerState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_UPDATE_SELECTOR_MANAGER_STATE"],
  payload: {
    id: ++uiUpdateManagerStateId,
    content
  }
});
const uiInitializeInputScreenUi = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_INITIALIZE_INPUT_SCREEN_UI"],
  payload: {
    id: ++uiInitializeInputScreenUiId,
    content
  }
});
const uiStopAndPoiManagerController = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_STOP_AND_POI_MANAGER_CONTROLLER"],
  payload: {
    id: ++uiStopAndPoiManagerControllerId,
    content
  }
});
const uiSetTitle = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_SET_TITLE"],
  payload: {
    id: ++uiSetTitleId,
    content
  }
}); ///-.--------------

const uiUpdateRoutemgmtState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_UPDATE_ROUTEMGMT_STATE"],
  payload: {
    id: ++uiUpdateRoutemgmtStateId,
    content
  }
});
const uiLoadStopAndPoiManagerState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_LOAD_STOP_AND_POI_MANAGER_STATE"],
  payload: {
    id: ++uiLoadStopAndPoiManagerStateId,
    content
  }
});
const uiUpdateInputScreenState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_UPDATE_INPUT_SCREEN_STATE"],
  payload: {
    id: ++uiUpdateInputScreenStateId,
    content
  }
});
const uiUpdateSimulatorSelectionState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_UPDATE_SIMULATOR_SELECTION_STATE"],
  payload: {
    id: ++uiUpdateSimulatorSelectionStateId,
    content
  }
});
const uiInitializeSimulatorState = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_INITIALIZE_SIMULATOR_STATE"],
  payload: {
    id: ++uiInitializeSimulatorStateId,
    content
  }
});
const uiUpdateInputScreenFlag = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UI_UPDATE_INPUT_SCREEN_FLAG"],
  payload: {
    id: ++uiUpdateInputScreenFlagId
  }
});

/***/ }),

/***/ "./src/pages/routemanagement.tsx":
/*!***************************************!*\
  !*** ./src/pages/routemanagement.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_route_management_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/route-management/title */ "./src/components/route-management/title.tsx");
/* harmony import */ var _components_route_management_stateManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/route-management/stateManager */ "./src/components/route-management/stateManager.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/apollo */ "./src/lib/apollo.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/redux/actions/dataActions */ "./src/lib/redux/actions/dataActions.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_loading_component_rotatingSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/loading-component/rotatingSpinner */ "./src/components/loading-component/rotatingSpinner.tsx");
/* harmony import */ var _components_shared_components_logoutButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/shared-components/logoutButton */ "./src/components/shared-components/logoutButton.tsx");

var _jsxFileName = "/home/christian/Development/fible-frontend/src/pages/routemanagement.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;














const RouteManagement = props => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const dataState = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.data);
  const {
    0: dispatchSent,
    1: setDispatchSent
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false);
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(graphql_tag__WEBPACK_IMPORTED_MODULE_8___default.a`query getHtypes 
    {   
        getRoutes{id ownerid name components stops pois}
        getPois{id ownerid name components}
        getStops{id ownerid name components pois}
        me{id name email routes pois stops}
    }`);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    // console.log(data)
    //   console.log(error)
    if (!loading) {
      let htype;

      if (!data || !data.me.id) {
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.replace("/");
        return;
      }

      const htypes = {
        routes: data.getRoutes,
        stops: data.getStops,
        pois: data.getPois
      };
      dispatch(Object(_lib_redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_10__["dataLoadRouteMgmtData"])({
        htypes: htypes,
        user: data.me
      }));
      setDispatchSent(true);
    }
  }, [loading]);
  return !dispatchSent ? __jsx(_components_loading_component_rotatingSpinner__WEBPACK_IMPORTED_MODULE_12__["GrayRotatingSpinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }) : __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(Images, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(HeaderImage, {
    src: "/logo_fible.png",
    alt: "my image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })), __jsx(_components_route_management_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: dataState.user.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx(_components_shared_components_logoutButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx(_components_route_management_stateManager__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }));
}; //                <Link href="/">
//<BackImage src="/back.svg"></BackImage>
//</Link>


/* harmony default export */ __webpack_exports__["default"] = (next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_6__["withApollo"])(RouteManagement)), {
  ssr: false
}));
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

/***/ 5:
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

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-spinners-kit":
/*!*************************************!*\
  !*** external "react-spinners-kit" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners-kit");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
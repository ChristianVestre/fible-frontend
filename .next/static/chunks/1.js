(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "./node_modules/computed-style/dist/computedStyle.commonjs.js":
/*!********************************************************************!*\
  !*** ./node_modules/computed-style/dist/computedStyle.commonjs.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

    // Otherwise, we are in IE and use currentStyle
      el.currentStyle
  )[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })
  ];
};

module.exports = computedStyle;


/***/ }),

/***/ "./node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/core-js/library/fn/number/is-integer.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/fn/number/is-integer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.is-integer */ "./node_modules/core-js/library/modules/es6.number.is-integer.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Number.isInteger;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-to-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.date.now.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.number.is-integer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.number.is-integer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/library/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/css-box-model/dist/css-box-model.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-box-model/dist/css-box-model.esm.js ***!
  \**************************************************************/
/*! exports provided: calculateBox, createBox, expand, getBox, getRect, offset, shrink, withScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBox", function() { return calculateBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBox", function() { return createBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBox", function() { return getBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shrink", function() { return shrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScroll", function() { return withScroll; });
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");


var getRect = function getRect(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};

var shift = function shift(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};

var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox(_ref2) {
  var borderBox = _ref2.borderBox,
      _ref2$margin = _ref2.margin,
      margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin,
      _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? noSpacing : _ref2$border,
      _ref2$padding = _ref2.padding,
      padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox: marginBox,
    borderBox: getRect(borderBox),
    paddingBox: paddingBox,
    contentBox: contentBox,
    margin: margin,
    border: border,
    padding: padding
  };
};

var parse = function parse(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);

  if (suffix !== 'px') {
    return 0;
  }

  var result = Number(value);
  !!isNaN(result) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : undefined : void 0;
  return result;
};

var getWindowScroll = function getWindowScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};

var offset = function offset(original, change) {
  var borderBox = original.borderBox,
      border = original.border,
      margin = original.margin,
      padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border: border,
    margin: margin,
    padding: padding
  });
};
var withScroll = function withScroll(original, scroll) {
  if (scroll === void 0) {
    scroll = getWindowScroll();
  }

  return offset(original, scroll);
};
var calculateBox = function calculateBox(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox: borderBox,
    margin: margin,
    padding: padding,
    border: border
  });
};
var getBox = function getBox(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};




/***/ }),

/***/ "./node_modules/line-height/lib/line-height.js":
/*!*****************************************************!*\
  !*** ./node_modules/line-height/lib/line-height.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load in dependencies
var computedStyle = __webpack_require__(/*! computed-style */ "./node_modules/computed-style/dist/computedStyle.commonjs.js");

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
module.exports = lineHeight;


/***/ }),

/***/ "./node_modules/raf-schd/dist/raf-schd.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/raf-schd/dist/raf-schd.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rafSchd = function rafSchd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

/* harmony default export */ __webpack_exports__["default"] = (rafSchd);


/***/ }),

/***/ "./node_modules/react-autosize-textarea/lib/TextareaAutosize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-autosize-textarea/lib/TextareaAutosize.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var autosize = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
var _getLineHeight = __webpack_require__(/*! line-height */ "./node_modules/line-height/lib/line-height.js");
var getLineHeight = _getLineHeight;
var RESIZED = "autosize:resized";
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
var TextareaAutosizeClass = /** @class */ (function (_super) {
    __extends(TextareaAutosizeClass, _super);
    function TextareaAutosizeClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
        _this.textarea = _this.props.innerRef || React.createRef();
        _this.onResize = function (e) {
            if (_this.props.onResize) {
                _this.props.onResize(e);
            }
        };
        _this.updateLineHeight = function () {
            if (_this.textarea.current) {
                _this.setState({
                    lineHeight: getLineHeight(_this.textarea.current)
                });
            }
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
        return _this;
    }
    TextareaAutosizeClass.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, maxRows = _a.maxRows, async = _a.async;
        if (typeof maxRows === "number") {
            this.updateLineHeight();
        }
        if (typeof maxRows === "number" || async) {
            /*
              the defer is needed to:
                - force "autosize" to activate the scrollbar when this.props.maxRows is passed
                - support StyledComponents (see #71)
            */
            setTimeout(function () { return _this.textarea.current && autosize(_this.textarea.current); });
        }
        else {
            this.textarea.current && autosize(this.textarea.current);
        }
        if (this.textarea.current) {
            this.textarea.current.addEventListener(RESIZED, this.onResize);
        }
    };
    TextareaAutosizeClass.prototype.componentWillUnmount = function () {
        if (this.textarea.current) {
            this.textarea.current.removeEventListener(RESIZED, this.onResize);
            autosize.destroy(this.textarea.current);
        }
    };
    TextareaAutosizeClass.prototype.render = function () {
        var _a = this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, children = _b.children, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]), lineHeight = _a.state.lineHeight;
        var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
        return (React.createElement("textarea", __assign({}, props, { onChange: this.onChange, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, ref: this.textarea }), children));
    };
    TextareaAutosizeClass.prototype.componentDidUpdate = function () {
        this.textarea.current && autosize.update(this.textarea.current);
    };
    TextareaAutosizeClass.defaultProps = {
        rows: 1,
        async: false
    };
    TextareaAutosizeClass.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.object,
        async: PropTypes.bool
    };
    return TextareaAutosizeClass;
}(React.Component));
exports.TextareaAutosize = React.forwardRef(function (props, ref) {
    return React.createElement(TextareaAutosizeClass, __assign({}, props, { innerRef: ref }));
});


/***/ }),

/***/ "./node_modules/react-autosize-textarea/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-autosize-textarea/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__(/*! ./TextareaAutosize */ "./node_modules/react-autosize-textarea/lib/TextareaAutosize.js");
exports["default"] = TextareaAutosize_1.TextareaAutosize;


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js ***!
  \**************************************************************************/
/*! exports provided: DragDropContext, Draggable, Droppable, resetServerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropContext", function() { return DragDropContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return PublicDraggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return ConnectedDroppable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetServerContext", function() { return resetServerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_memo_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-memo-one */ "./node_modules/use-memo-one/dist/use-memo-one.esm.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inheritsLoose */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var css_box_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! css-box-model */ "./node_modules/css-box-model/dist/css-box-model.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! raf-schd */ "./node_modules/raf-schd/dist/raf-schd.esm.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-integer */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14__);
















var isProduction = "development" === 'production';
var spacesAndTabs = /[ \t]{2,}/g;
var lineStartWithSpaces = /^[ \t]*/gm;

var clean = function clean(value) {
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
};

var getDevMessage = function getDevMessage(message) {
  return clean("\n  %creact-beautiful-dnd\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development only message. It will be removed in production builds.\n");
};

var getFormattedMessage = function getFormattedMessage(message) {
  return [getDevMessage(message), 'color: #00C584; font-size: 1.2em; font-weight: bold;', 'line-height: 1.5', 'color: #723874;'];
};
var isDisabledFlag = '__react-beautiful-dnd-disable-dev-warnings';
function log(type, message) {
  var _console;

  if (isProduction) {
    return;
  }

  if (typeof window !== 'undefined' && window[isDisabledFlag]) {
    return;
  }

  (_console = console)[type].apply(_console, getFormattedMessage(message));
}
var warning = log.bind(null, 'warn');
var error = log.bind(null, 'error');

function noop() {}

function getOptions(shared, fromBinding) {
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, shared, {}, fromBinding);
}

function bindEvents(el, bindings, sharedOptions) {
  var unbindings = bindings.map(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach(function (unbind) {
      unbind();
    });
  };
}

var isProduction$1 = "development" === 'production';
var prefix = 'Invariant failed';
function RbdInvariant(message) {
  this.message = message;
}

RbdInvariant.prototype.toString = function toString() {
  return this.message;
};

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction$1) {
    throw new RbdInvariant(prefix);
  } else {
    throw new RbdInvariant(prefix + ": " + (message || ''));
  }
}

var ErrorBoundary = function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.callbacks = null;
    _this.unbind = noop;

    _this.onWindowError = function (event) {
      var callbacks = _this.getCallbacks();

      if (callbacks.isDragging()) {
        callbacks.tryAbort();
         true ? warning("\n        An error was caught by our window 'error' event listener while a drag was occurring.\n        The active drag has been aborted.\n      ") : undefined;
      }

      var err = event.error;

      if (err instanceof RbdInvariant) {
        event.preventDefault();

        if (true) {
          error(err.message);
        }
      }
    };

    _this.getCallbacks = function () {
      if (!_this.callbacks) {
        throw new Error('Unable to find AppCallbacks in <ErrorBoundary/>');
      }

      return _this.callbacks;
    };

    _this.setCallbacks = function (callbacks) {
      _this.callbacks = callbacks;
    };

    return _this;
  }

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: 'error',
      fn: this.onWindowError
    }]);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unbind();
  };

  _proto.componentDidCatch = function componentDidCatch(err) {
    if (err instanceof RbdInvariant) {
      if (true) {
        error(err.message);
      }

      this.setState({});
      return;
    }

    throw err;
  };

  _proto.render = function render() {
    return this.props.children(this.setCallbacks);
  };

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var liftInstruction = "Draggable item. Ensure your screen reader is not in browse mode and then press space bar to lift.";

var position = function position(index) {
  return index + 1;
};

var onDragStart = function onDragStart(start) {
  return "\n  You have lifted an item in position " + position(start.source.index) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n";
};

var withLocation = function withLocation(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);

  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }

  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};

var withCombine = function withCombine(id, source, combine) {
  var inHomeList = source.droppableId === combine.droppableId;

  if (inHomeList) {
    return "\n      The item " + id + "\n      has been combined with " + combine.draggableId;
  }

  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine.draggableId + "\n      in list " + combine.droppableId + "\n    ";
};

var onDragUpdate = function onDragUpdate(update) {
  var location = update.destination;

  if (location) {
    return withLocation(update.source, location);
  }

  var combine = update.combine;

  if (combine) {
    return withCombine(update.draggableId, update.source, combine);
  }

  return 'You are over an area that cannot be dropped on';
};

var returnedToStart = function returnedToStart(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};

var onDragEnd = function onDragEnd(result) {
  if (result.reason === 'CANCEL') {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }

  var location = result.destination;
  var combine = result.combine;

  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }

  if (combine) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine) + "\n    ";
  }

  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};

var preset = {
  liftInstruction: liftInstruction,
  onDragStart: onDragStart,
  onDragUpdate: onDragUpdate,
  onDragEnd: onDragEnd
};

var origin = {
  x: 0,
  y: 0
};
var add = function add(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch(line, value, otherValue) {
  var _ref;

  if (otherValue === void 0) {
    otherValue = 0;
  }

  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
};
var distance = function distance(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest(target, points) {
  return Math.min.apply(Math, points.map(function (point) {
    return distance(target, point);
  }));
};
var apply = function apply(fn) {
  return function (point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};

var executeClip = (function (frame, subject) {
  var result = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });

  if (result.width <= 0 || result.height <= 0) {
    return null;
  }

  return result;
});

var offsetByPosition = function offsetByPosition(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var scroll = function scroll(target, frame) {
  if (!frame) {
    return target;
  }

  return offsetByPosition(target, frame.scroll.diff.displacement);
};

var increase = function increase(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends2;

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
  }

  return target;
};

var clip = function clip(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }

  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])(target);
};

var getSubject = (function (_ref) {
  var page = _ref.page,
      withPlaceholder = _ref.withPlaceholder,
      axis = _ref.axis,
      frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page: page,
    withPlaceholder: withPlaceholder,
    active: clipped
  };
});

var scrollDroppable = (function (droppable, newScroll) {
  !droppable.frame ?  true ? invariant(false) : undefined : void 0;
  var scrollable = droppable.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);

  var frame = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });

  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: droppable.subject.withPlaceholder,
    axis: droppable.axis,
    frame: frame
  });

  var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, droppable, {
    frame: frame,
    subject: subject
  });

  return result;
});

function values(map) {
  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8___default()(map);
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }

  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }

  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }

  var index = findIndex(list, predicate);

  if (index !== -1) {
    return list[index];
  }

  return undefined;
}
function toArray(list) {
  return Array.prototype.slice.call(list);
}

var toDroppableMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (droppables) {
  return droppables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (draggables) {
  return draggables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (droppables) {
  return values(droppables);
});
var toDraggableList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (draggables) {
  return values(draggables);
});

var getDraggablesInsideDroppable = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function (draggable) {
    return droppableId === draggable.descriptor.droppableId;
  }).sort(function (a, b) {
    return a.descriptor.index - b.descriptor.index;
  });
  return result;
});

var forward = {
  vertical: 'down',
  horizontal: 'right'
};
var backward = {
  vertical: 'up',
  horizontal: 'left'
};

function tryGetDestination(impact) {
  if (impact.at && impact.at.type === 'REORDER') {
    return impact.at.destination;
  }

  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === 'COMBINE') {
    return impact.at.combine;
  }

  return null;
}

var removeDraggableFromList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (remove, list) {
  return list.filter(function (item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});

var moveToNextCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var location = tryGetDestination(previousImpact);

  if (!location) {
    return null;
  }

  function getImpact(target) {
    var at = {
      type: 'COMBINE',
      whenEntered: isMovingForward ? forward : backward,
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, previousImpact, {
      at: at
    });
  }

  var all = previousImpact.displaced.all;
  var closestId = all.length ? all[0] : null;

  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }

  var withoutDraggable = removeDraggableFromList(draggable, insideDestination);

  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }

    var last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }

  var indexOfClosest = findIndex(withoutDraggable, function (d) {
    return d.descriptor.id === closestId;
  });
  !(indexOfClosest !== -1) ?  true ? invariant(false, 'Could not find displaced item in set') : undefined : void 0;
  var proposedIndex = indexOfClosest - 1;

  if (proposedIndex < 0) {
    return null;
  }

  var before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
});

var isHomeOf = (function (draggable, destination) {
  return draggable.descriptor.droppableId === destination.descriptor.id;
});

var noDisplacedBy = {
  point: origin,
  value: 0
};
var emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
var noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};

var isWithin = (function (lowerBound, upperBound) {
  return function (value) {
    return lowerBound <= value && value <= upperBound;
  };
});

var isPartiallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

    if (isContained) {
      return true;
    }

    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

    if (isPartiallyContained) {
      return true;
    }

    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

    if (isTargetBiggerThanFrame) {
      return true;
    }

    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
});

var isTotallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
});

var vertical = {
  direction: 'vertical',
  line: 'y',
  crossAxisLine: 'x',
  start: 'top',
  end: 'bottom',
  size: 'height',
  crossAxisStart: 'left',
  crossAxisEnd: 'right',
  crossAxisSize: 'width'
};
var horizontal = {
  direction: 'horizontal',
  line: 'x',
  crossAxisLine: 'y',
  start: 'left',
  end: 'right',
  size: 'width',
  crossAxisStart: 'top',
  crossAxisEnd: 'bottom',
  crossAxisSize: 'height'
};

var isTotallyVisibleThroughFrameOnAxis = (function (axis) {
  return function (frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function (subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }

      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
});

var getDroppableDisplaced = function getDroppableDisplaced(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};

var isVisibleInDroppable = function isVisibleInDroppable(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }

  return isVisibleThroughFrameFn(destination.subject.active)(target);
};

var isVisibleInViewport = function isVisibleInViewport(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};

var isVisible = function isVisible(_ref) {
  var toBeDisplaced = _ref.target,
      destination = _ref.destination,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};

var isPartiallyVisible = function isPartiallyVisible(args) {
  return isVisible(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible(args) {
  return isVisible(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(args) {
  return isVisible(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};

var getShouldAnimate = function getShouldAnimate(id, last, forceShouldAnimate) {
  if (typeof forceShouldAnimate === 'boolean') {
    return forceShouldAnimate;
  }

  if (!last) {
    return true;
  }

  var invisible = last.invisible,
      visible = last.visible;

  if (invisible[id]) {
    return false;
  }

  var previous = visible[id];
  return previous ? previous.shouldAnimate : true;
};

function getTarget(draggable, displacedBy) {
  var marginBox = draggable.page.marginBox;
  var expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])(Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["expand"])(marginBox, expandBy));
}

function getDisplacementGroups(_ref) {
  var afterDragging = _ref.afterDragging,
      destination = _ref.destination,
      displacedBy = _ref.displacedBy,
      viewport = _ref.viewport,
      forceShouldAnimate = _ref.forceShouldAnimate,
      last = _ref.last;
  return afterDragging.reduce(function process(groups, draggable) {
    var target = getTarget(draggable, displacedBy);
    var id = draggable.descriptor.id;
    groups.all.push(id);
    var isVisible = isPartiallyVisible({
      target: target,
      destination: destination,
      viewport: viewport,
      withDroppableDisplacement: true
    });

    if (!isVisible) {
      groups.invisible[draggable.descriptor.id] = true;
      return groups;
    }

    var shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
    var displacement = {
      draggableId: id,
      shouldAnimate: shouldAnimate
    };
    groups.visible[id] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}

function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }

  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}

function goAtEnd(_ref) {
  var insideDestination = _ref.insideDestination,
      inHomeList = _ref.inHomeList,
      displacedBy = _ref.displacedBy,
      destination = _ref.destination;
  var newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList: inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}

function calculateReorderImpact(_ref2) {
  var draggable = _ref2.draggable,
      insideDestination = _ref2.insideDestination,
      destination = _ref2.destination,
      viewport = _ref2.viewport,
      displacedBy = _ref2.displacedBy,
      last = _ref2.last,
      index = _ref2.index,
      forceShouldAnimate = _ref2.forceShouldAnimate;
  var inHomeList = isHomeOf(draggable, destination);

  if (index == null) {
    return goAtEnd({
      insideDestination: insideDestination,
      inHomeList: inHomeList,
      displacedBy: displacedBy,
      destination: destination
    });
  }

  var match = find(insideDestination, function (item) {
    return item.descriptor.index === index;
  });

  if (!match) {
    return goAtEnd({
      insideDestination: insideDestination,
      inHomeList: inHomeList,
      displacedBy: displacedBy,
      destination: destination
    });
  }

  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var sliceFrom = insideDestination.indexOf(match);
  var impacted = withoutDragging.slice(sliceFrom);
  var displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination: destination,
    displacedBy: displacedBy,
    last: last,
    viewport: viewport.frame,
    forceShouldAnimate: forceShouldAnimate
  });
  return {
    displaced: displaced,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: {
        droppableId: destination.descriptor.id,
        index: index
      }
    }
  };
}

function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}

var fromCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      destination = _ref.destination,
      draggables = _ref.draggables,
      combine = _ref.combine,
      afterCritical = _ref.afterCritical;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var combineId = combine.draggableId;
  var combineWith = draggables[combineId];
  var combineWithIndex = combineWith.descriptor.index;
  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);

  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }

    return combineWithIndex - 1;
  }

  if (isMovingForward) {
    return combineWithIndex + 1;
  }

  return combineWithIndex;
});

var fromReorder = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      insideDestination = _ref.insideDestination,
      location = _ref.location;

  if (!insideDestination.length) {
    return null;
  }

  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var firstIndex = insideDestination[0].descriptor.index;
  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;

  if (proposedIndex < firstIndex) {
    return null;
  }

  if (proposedIndex > upperBound) {
    return null;
  }

  return proposedIndex;
});

var moveToNextIndex = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var wasAt = previousImpact.at;
  !wasAt ?  true ? invariant(false, 'Cannot move in direction without previous impact location') : undefined : void 0;

  if (wasAt.type === 'REORDER') {
    var _newIndex = fromReorder({
      isMovingForward: isMovingForward,
      isInHomeList: isInHomeList,
      location: wasAt.destination,
      insideDestination: insideDestination
    });

    if (_newIndex == null) {
      return null;
    }

    return calculateReorderImpact({
      draggable: draggable,
      insideDestination: insideDestination,
      destination: destination,
      viewport: viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: _newIndex
    });
  }

  var newIndex = fromCombine({
    isMovingForward: isMovingForward,
    destination: destination,
    displaced: previousImpact.displaced,
    draggables: draggables,
    combine: wasAt.combine,
    afterCritical: afterCritical
  });

  if (newIndex == null) {
    return null;
  }

  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
});

var getCombinedItemDisplacement = (function (_ref) {
  var displaced = _ref.displaced,
      afterCritical = _ref.afterCritical,
      combineWith = _ref.combineWith,
      displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);

  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }

  return isDisplaced ? displacedBy.point : origin;
});

var whenCombining = (function (_ref) {
  var afterCritical = _ref.afterCritical,
      impact = _ref.impact,
      draggables = _ref.draggables;
  var combine = tryGetCombine(impact);
  !combine ?  true ? invariant(false) : undefined : void 0;
  var combineWith = combine.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical: afterCritical,
    combineWith: combineWith,
    displacedBy: impact.displacedBy
  });
  return add(center, displaceBy);
});

var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};

var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};

var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};

var goAfter = function goAfter(_ref) {
  var axis = _ref.axis,
      moveRelativeTo = _ref.moveRelativeTo,
      isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore(_ref2) {
  var axis = _ref2.axis,
      moveRelativeTo = _ref2.moveRelativeTo,
      isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart(_ref3) {
  var axis = _ref3.axis,
      moveInto = _ref3.moveInto,
      isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};

var whenReordering = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppable = _ref.droppable,
      afterCritical = _ref.afterCritical;
  var insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var draggablePage = draggable.page;
  var axis = droppable.axis;

  if (!insideDestination.length) {
    return goIntoStart({
      axis: axis,
      moveInto: droppable.page,
      isMoving: draggablePage
    });
  }

  var displaced = impact.displaced,
      displacedBy = impact.displacedBy;
  var closestAfter = displaced.all[0];

  if (closestAfter) {
    var closest = draggables[closestAfter];

    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis: axis,
        moveRelativeTo: closest.page,
        isMoving: draggablePage
      });
    }

    var withDisplacement = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["offset"])(closest.page, displacedBy.point);
    return goBefore({
      axis: axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }

  var last = insideDestination[insideDestination.length - 1];

  if (last.descriptor.id === draggable.descriptor.id) {
    return draggablePage.borderBox.center;
  }

  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["offset"])(last.page, negate(afterCritical.displacedBy.point));
    return goAfter({
      axis: axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }

  return goAfter({
    axis: axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
});

var withDroppableDisplacement = (function (droppable, point) {
  var frame = droppable.frame;

  if (!frame) {
    return point;
  }

  return add(point, frame.scroll.diff.displacement);
});

var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement(_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      afterCritical = _ref.afterCritical;
  var original = draggable.page.borderBox.center;
  var at = impact.at;

  if (!droppable) {
    return original;
  }

  if (!at) {
    return original;
  }

  if (at.type === 'REORDER') {
    return whenReordering({
      impact: impact,
      draggable: draggable,
      draggables: draggables,
      droppable: droppable,
      afterCritical: afterCritical
    });
  }

  return whenCombining({
    impact: impact,
    draggables: draggables,
    afterCritical: afterCritical
  });
};

var getPageBorderBoxCenterFromImpact = (function (args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable = args.droppable;
  var withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
});

var scrollViewport = (function (viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame: frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement: displacement
      }
    }
  };
  return updated;
});

function getDraggables(ids, draggables) {
  return ids.map(function (id) {
    return draggables[id];
  });
}

function tryGetVisible(id, groups) {
  for (var i = 0; i < groups.length; i++) {
    var displacement = groups[i].visible[id];

    if (displacement) {
      return displacement;
    }
  }

  return null;
}

var speculativelyIncrease = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      destination = _ref.destination,
      draggables = _ref.draggables,
      maxScrollChange = _ref.maxScrollChange;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var last = impact.displaced;
  var withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last: last,
    forceShouldAnimate: false
  });
  var withDroppableScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    last: last,
    forceShouldAnimate: false
  });
  var invisible = {};
  var visible = {};
  var groups = [last, withViewportScroll, withDroppableScroll];
  last.all.forEach(function (id) {
    var displacement = tryGetVisible(id, groups);

    if (displacement) {
      visible[id] = displacement;
      return;
    }

    invisible[id] = true;
  });

  var newImpact = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, impact, {
    displaced: {
      all: last.all,
      invisible: invisible,
      visible: visible
    }
  });

  return newImpact;
});

var withViewportDisplacement = (function (viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
});

var getClientFromPageBorderBoxCenter = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
  return add(draggable.client.borderBox.center, offset);
});

var isTotallyVisibleInNewLocation = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      _ref$onlyOnMainAxis = _ref.onlyOnMainAxis,
      onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
  var shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination: destination,
    withDroppableDisplacement: withDroppableDisplacement,
    viewport: viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
});

var moveToNextPlace = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      draggables = _ref.draggables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      previousClientSelection = _ref.previousClientSelection,
      afterCritical = _ref.afterCritical;

  if (!destination.isEnabled) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable, destination);
  var impact = moveToNextCombine({
    isMovingForward: isMovingForward,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact
  }) || moveToNextIndex({
    isMovingForward: isMovingForward,
    isInHomeList: isInHomeList,
    draggable: draggable,
    draggables: draggables,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact,
    viewport: viewport,
    afterCritical: afterCritical
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    afterCritical: afterCritical
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable,
    destination: destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });

  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter: pageBorderBoxCenter,
      draggable: draggable,
      viewport: viewport
    });
    return {
      clientSelection: clientSelection,
      impact: impact,
      scrollJumpRequest: null
    };
  }

  var distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact: impact,
    viewport: viewport,
    destination: destination,
    draggables: draggables,
    maxScrollChange: distance
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance
  };
});

var getKnownActive = function getKnownActive(droppable) {
  var rect = droppable.subject.active;
  !rect ?  true ? invariant(false, 'Cannot get clipped area from droppable') : undefined : void 0;
  return rect;
};

var getBestCrossAxisDroppable = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      source = _ref.source,
      droppables = _ref.droppables,
      viewport = _ref.viewport;
  var active = source.subject.active;

  if (!active) {
    return null;
  }

  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function (droppable) {
    return droppable !== source;
  }).filter(function (droppable) {
    return droppable.isEnabled;
  }).filter(function (droppable) {
    return Boolean(droppable.subject.active);
  }).filter(function (droppable) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable));
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);

    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }

    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function (a, b) {
    var first = getKnownActive(a)[axis.crossAxisStart];
    var second = getKnownActive(b)[axis.crossAxisStart];

    if (isMovingForward) {
      return first - second;
    }

    return second - first;
  }).filter(function (droppable, index, array) {
    return getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0];
  }

  var contains = candidates.filter(function (droppable) {
    var isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });

  if (contains.length === 1) {
    return contains[0];
  }

  if (contains.length > 1) {
    return contains.sort(function (a, b) {
      return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
    })[0];
  }

  return candidates.sort(function (a, b) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b)));

    if (first !== second) {
      return first - second;
    }

    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
  })[0];
});

var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter(draggable, afterCritical) {
  var original = draggable.page.borderBox.center;
  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox(draggable, afterCritical) {
  var original = draggable.page.borderBox;
  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};

var getClosestDraggable = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      viewport = _ref.viewport,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      afterCritical = _ref.afterCritical;
  var sorted = insideDestination.filter(function (draggable) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable, afterCritical),
      destination: destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function (a, b) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));

    if (distanceToA < distanceToB) {
      return -1;
    }

    if (distanceToB < distanceToA) {
      return 1;
    }

    return a.descriptor.index - b.descriptor.index;
  });
  return sorted[0] || null;
});

var getDisplacedBy = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function getDisplacedBy(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});

var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables) {
  var axis = droppable.axis;

  if (droppable.descriptor.mode === 'virtual') {
    return patch(axis.line, placeholderSize[axis.line]);
  }

  var availableSpace = droppable.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function (sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;

  if (needsToGrowBy <= 0) {
    return null;
  }

  return patch(axis.line, needsToGrowBy);
};

var withMaxScroll = function withMaxScroll(frame, max) {
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, frame, {
    scroll: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, frame.scroll, {
      max: max
    })
  });
};

var addPlaceholder = function addPlaceholder(droppable, draggable, draggables) {
  var frame = droppable.frame;
  !!isHomeOf(draggable, droppable) ?  true ? invariant(false, 'Should not add placeholder space to home list') : undefined : void 0;
  !!droppable.subject.withPlaceholder ?  true ? invariant(false, 'Cannot add placeholder size to a subject when it already has one') : undefined : void 0;
  var placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
  var added = {
    placeholderSize: placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
  };

  if (!frame) {
    var _subject = getSubject({
      page: droppable.subject.page,
      withPlaceholder: added,
      axis: droppable.axis,
      frame: droppable.frame
    });

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, droppable, {
      subject: _subject
    });
  }

  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: added,
    axis: droppable.axis,
    frame: newFrame
  });
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder(droppable) {
  var added = droppable.subject.withPlaceholder;
  !added ?  true ? invariant(false, 'Cannot remove placeholder form subject when there was none') : undefined : void 0;
  var frame = droppable.frame;

  if (!frame) {
    var _subject2 = getSubject({
      page: droppable.subject.page,
      axis: droppable.axis,
      frame: null,
      withPlaceholder: null
    });

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, droppable, {
      subject: _subject2
    });
  }

  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ?  true ? invariant(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder') : undefined : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    axis: droppable.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};

var moveToNewDroppable = (function (_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      moveRelativeTo = _ref.moveRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;

  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }

    var proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: 'REORDER',
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable,
      droppable: destination,
      draggables: draggables,
      afterCritical: afterCritical
    });
    var withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }

  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);

  var proposedIndex = function () {
    var relativeTo = moveRelativeTo.descriptor.index;

    if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
      return relativeTo;
    }

    if (isGoingBeforeTarget) {
      return relativeTo;
    }

    return relativeTo + 1;
  }();

  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    displacedBy: displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
});

var moveCrossAxis = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      draggable = _ref.draggable,
      isOver = _ref.isOver,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var destination = getBestCrossAxisDroppable({
    isMovingForward: isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables: droppables,
    viewport: viewport
  });

  if (!destination) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport: viewport,
    destination: destination,
    insideDestination: insideDestination,
    afterCritical: afterCritical
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    destination: destination,
    draggable: draggable,
    draggables: draggables,
    moveRelativeTo: moveRelativeTo,
    insideDestination: insideDestination,
    viewport: viewport,
    afterCritical: afterCritical
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    afterCritical: afterCritical
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
  return {
    clientSelection: clientSelection,
    impact: impact,
    scrollJumpRequest: null
  };
});

var whatIsDraggedOver = (function (impact) {
  var at = impact.at;

  if (!at) {
    return null;
  }

  if (at.type === 'REORDER') {
    return at.destination.droppableId;
  }

  return at.combine.droppableId;
});

var getDroppableOver = function getDroppableOver(impact, droppables) {
  var id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};

var moveInDirection = (function (_ref) {
  var state = _ref.state,
      type = _ref.type;
  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }

  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions,
      draggables = _state$dimensions.draggables,
      droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    destination: isOver,
    draggables: draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    isOver: isOver,
    draggables: draggables,
    droppables: droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
});

function isMovementAllowed(state) {
  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}

var isPositionInFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (point) {
    return isWithinVertical(point.y) && isWithinVertical(point.y) && isWithinHorizontal(point.x) && isWithinHorizontal(point.x);
  };
});

var getDroppableOver$1 = (function (_ref) {
  var target = _ref.target,
      droppables = _ref.droppables;
  var maybe = find(toDroppableList(droppables), function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    var active = droppable.subject.active;

    if (!active) {
      return false;
    }

    return isPositionInFrame(active)(target);
  });
  return maybe ? maybe.descriptor.id : null;
});

var withDroppableScroll = (function (droppable, point) {
  var frame = droppable.frame;

  if (!frame) {
    return point;
  }

  return add(point, frame.scroll.diff.value);
});

var isUserMovingForward = (function (axis, direction) {
  return axis === vertical ? direction.vertical === 'down' : direction.horizontal === 'right';
});

function atIndex(_ref) {
  var draggable = _ref.draggable,
      closest = _ref.closest,
      inHomeList = _ref.inHomeList;

  if (!closest) {
    return null;
  }

  if (!inHomeList) {
    return closest.descriptor.index;
  }

  if (closest.descriptor.index > draggable.descriptor.index) {
    return closest.descriptor.index - 1;
  }

  return closest.descriptor.index;
}

var getReorderImpact = (function (_ref2) {
  var currentCenter = _ref2.pageBorderBoxCenterWithDroppableScrollChange,
      draggable = _ref2.draggable,
      destination = _ref2.destination,
      insideDestination = _ref2.insideDestination,
      last = _ref2.last,
      viewport = _ref2.viewport,
      userDirection = _ref2.userDirection,
      afterCritical = _ref2.afterCritical;
  var axis = destination.axis;
  var isMovingForward = isUserMovingForward(destination.axis, userDirection);
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var targetCenter = currentCenter[axis.line];
  var displacement = displacedBy.value;
  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var closest = find(withoutDragging, function (child) {
    var id = child.descriptor.id;
    var borderBox = child.page.borderBox;
    var start = borderBox[axis.start];
    var end = borderBox[axis.end];
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);

    if (isMovingForward) {
      if (didStartAfterCritical$1) {
        return targetCenter < start;
      }

      return targetCenter < start + displacement;
    }

    if (didStartAfterCritical$1) {
      return targetCenter <= end - displacement;
    }

    return targetCenter <= end;
  });
  var newIndex = atIndex({
    draggable: draggable,
    closest: closest,
    inHomeList: isHomeOf(draggable, destination)
  });
  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    last: last,
    displacedBy: displacedBy,
    index: newIndex
  });
});

function getWhenEntered(id, current, lastCombineImpact) {
  if (!lastCombineImpact) {
    return current;
  }

  if (id !== lastCombineImpact.combine.draggableId) {
    return current;
  }

  return lastCombineImpact.whenEntered;
}

function tryGetCombineImpact(impact) {
  if (impact.at && impact.at.type === 'COMBINE') {
    return impact.at;
  }

  return null;
}

function calculateCombineImpact(_ref) {
  var combineWithId = _ref.combineWithId,
      destinationId = _ref.destinationId,
      userDirection = _ref.userDirection,
      previousImpact = _ref.previousImpact;
  var lastCombineImpact = tryGetCombineImpact(previousImpact);
  var whenEntered = getWhenEntered(combineWithId, userDirection, lastCombineImpact);
  var impact = {
    displacedBy: previousImpact.displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: 'COMBINE',
      whenEntered: whenEntered,
      combine: {
        draggableId: combineWithId,
        droppableId: destinationId
      }
    }
  };
  return impact;
}

function getWhenEntered$1(id, current, lastCombineImpact) {
  if (!lastCombineImpact) {
    return current;
  }

  if (id !== lastCombineImpact.combine.draggableId) {
    return current;
  }

  return lastCombineImpact.whenEntered;
}

var isCombiningWith = function isCombiningWith(_ref) {
  var id = _ref.id,
      currentCenter = _ref.currentCenter,
      axis = _ref.axis,
      borderBox = _ref.borderBox,
      displaceBy = _ref.displaceBy,
      currentUserDirection = _ref.currentUserDirection,
      lastCombineImpact = _ref.lastCombineImpact;
  var start = borderBox[axis.start] + displaceBy[axis.line];
  var end = borderBox[axis.end] + displaceBy[axis.line];
  var size = borderBox[axis.size];
  var twoThirdsOfSize = size * 0.666;
  var whenEntered = getWhenEntered$1(id, currentUserDirection, lastCombineImpact);
  var isMovingForward = isUserMovingForward(axis, whenEntered);
  var targetCenter = currentCenter[axis.line];

  if (isMovingForward) {
    return isWithin(start, start + twoThirdsOfSize)(targetCenter);
  }

  return isWithin(end - twoThirdsOfSize, end)(targetCenter);
};

function tryGetCombineImpact$1(impact) {
  if (impact.at && impact.at.type === 'COMBINE') {
    return impact.at;
  }

  return null;
}

var getCombineImpact = (function (_ref2) {
  var draggable = _ref2.draggable,
      currentCenter = _ref2.pageBorderBoxCenterWithDroppableScrollChange,
      previousImpact = _ref2.previousImpact,
      destination = _ref2.destination,
      insideDestination = _ref2.insideDestination,
      userDirection = _ref2.userDirection,
      afterCritical = _ref2.afterCritical;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var axis = destination.axis;
  var displaced = previousImpact.displaced;
  var canBeDisplacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var lastCombineImpact = tryGetCombineImpact$1(previousImpact);
  var combineWith = find(removeDraggableFromList(draggable, insideDestination), function (child) {
    var id = child.descriptor.id;
    var displaceBy = getCombinedItemDisplacement({
      displaced: displaced,
      afterCritical: afterCritical,
      combineWith: id,
      displacedBy: canBeDisplacedBy
    });
    return isCombiningWith({
      id: id,
      currentCenter: currentCenter,
      axis: axis,
      borderBox: child.page.borderBox,
      displaceBy: displaceBy,
      currentUserDirection: userDirection,
      lastCombineImpact: lastCombineImpact
    });
  });

  if (!combineWith) {
    return null;
  }

  return calculateCombineImpact({
    combineWithId: combineWith.descriptor.id,
    destinationId: destination.descriptor.id,
    previousImpact: previousImpact,
    userDirection: userDirection
  });
});

var getDragImpact = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      userDirection = _ref.userDirection,
      afterCritical = _ref.afterCritical;
  var destinationId = getDroppableOver$1({
    target: pageBorderBoxCenter,
    droppables: droppables
  });

  if (!destinationId) {
    return noImpact;
  }

  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var pageBorderBoxCenterWithDroppableScrollChange = withDroppableScroll(destination, pageBorderBoxCenter);
  return getCombineImpact({
    pageBorderBoxCenterWithDroppableScrollChange: pageBorderBoxCenterWithDroppableScrollChange,
    draggable: draggable,
    previousImpact: previousImpact,
    destination: destination,
    insideDestination: insideDestination,
    userDirection: userDirection,
    afterCritical: afterCritical
  }) || getReorderImpact({
    pageBorderBoxCenterWithDroppableScrollChange: pageBorderBoxCenterWithDroppableScrollChange,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    last: previousImpact.displaced,
    viewport: viewport,
    userDirection: userDirection,
    afterCritical: afterCritical
  });
});

var getVertical = function getVertical(previous, diff) {
  if (diff === 0) {
    return previous;
  }

  return diff > 0 ? 'down' : 'up';
};

var getHorizontal = function getHorizontal(previous, diff) {
  if (diff === 0) {
    return previous;
  }

  return diff > 0 ? 'right' : 'left';
};

var getUserDirection = (function (previous, oldPageBorderBoxCenter, newPageBorderBoxCenter) {
  var diff = subtract(newPageBorderBoxCenter, oldPageBorderBoxCenter);
  return {
    horizontal: getHorizontal(previous.horizontal, diff.x),
    vertical: getVertical(previous.vertical, diff.y)
  };
});

var patchDroppableMap = (function (droppables, updated) {
  var _extends2;

  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
});

var clearUnusedPlaceholder = function clearUnusedPlaceholder(_ref) {
  var previousImpact = _ref.previousImpact,
      impact = _ref.impact,
      droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now = whatIsDraggedOver(impact);

  if (!last) {
    return droppables;
  }

  if (last === now) {
    return droppables;
  }

  var lastDroppable = droppables[last];

  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }

  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};

var recomputePlaceholders = (function (_ref2) {
  var draggable = _ref2.draggable,
      draggables = _ref2.draggables,
      droppables = _ref2.droppables,
      previousImpact = _ref2.previousImpact,
      impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact: previousImpact,
    impact: impact,
    droppables: droppables
  });
  var isOver = whatIsDraggedOver(impact);

  if (!isOver) {
    return cleaned;
  }

  var droppable = droppables[isOver];

  if (isHomeOf(draggable, droppable)) {
    return cleaned;
  }

  if (droppable.subject.withPlaceholder) {
    return cleaned;
  }

  var patched = addPlaceholder(droppable, draggable, draggables);
  return patchDroppableMap(cleaned, patched);
});

var update = (function (_ref) {
  var state = _ref.state,
      forcedClientSelection = _ref.clientSelection,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport,
      forcedImpact = _ref.impact,
      scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var currentWindowScroll = viewport.scroll.current;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
  };
  var page = {
    selection: add(client.selection, currentWindowScroll),
    borderBoxCenter: add(client.borderBoxCenter, currentWindowScroll)
  };
  var current = {
    client: client,
    page: page
  };
  var userDirection = getUserDirection(state.userDirection, state.current.page.borderBoxCenter, current.page.borderBoxCenter);

  if (state.phase === 'COLLECTING') {
    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      phase: 'COLLECTING'
    }, state, {
      dimensions: dimensions,
      viewport: viewport,
      current: current,
      userDirection: userDirection
    });
  }

  var draggable = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageBorderBoxCenter: page.borderBoxCenter,
    draggable: draggable,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport: viewport,
    userDirection: userDirection,
    afterCritical: state.afterCritical
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });

  var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
    current: current,
    userDirection: userDirection,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport: viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });

  return result;
});

function getDraggables$1(ids, draggables) {
  return ids.map(function (id) {
    return draggables[id];
  });
}

var recompute = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      draggables = _ref.draggables,
      destination = _ref.destination,
      forceShouldAnimate = _ref.forceShouldAnimate;
  var last = impact.displaced;
  var afterDragging = getDraggables$1(last.all, draggables);
  var displaced = getDisplacementGroups({
    afterDragging: afterDragging,
    destination: destination,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    forceShouldAnimate: forceShouldAnimate,
    last: last
  });
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, impact, {
    displaced: displaced
  });
});

var getClientBorderBoxCenter = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    droppable: droppable,
    afterCritical: afterCritical
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
});

var refreshSnap = (function (_ref) {
  var state = _ref.state,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport;
  !(state.movementMode === 'SNAP') ?  true ? invariant(false) : undefined : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var draggable = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ?  true ? invariant(false, 'Must be over a destination in SNAP movement mode') : undefined : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport: viewport,
    destination: destination,
    draggables: draggables
  });
  var clientSelection = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    viewport: viewport,
    afterCritical: state.afterCritical
  });
  return update({
    impact: impact,
    clientSelection: clientSelection,
    state: state,
    dimensions: dimensions,
    viewport: viewport
  });
});

var getHomeLocation = (function (descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
});

var getLiftEffect = (function (_ref) {
  var draggable = _ref.draggable,
      home = _ref.home,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
  var rawIndex = insideHome.indexOf(draggable);
  !(rawIndex !== -1) ?  true ? invariant(false, 'Expected draggable to be inside home list') : undefined : void 0;
  var afterDragging = insideHome.slice(rawIndex + 1);
  var effected = afterDragging.reduce(function (previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var afterCritical = {
    inVirtualList: home.descriptor.mode === 'virtual',
    displacedBy: displacedBy,
    effected: effected
  };
  var displaced = getDisplacementGroups({
    afterDragging: afterDragging,
    destination: home,
    displacedBy: displacedBy,
    last: null,
    viewport: viewport.frame,
    forceShouldAnimate: false
  });
  var impact = {
    displaced: displaced,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: getHomeLocation(draggable.descriptor)
    }
  };
  return {
    impact: impact,
    afterCritical: afterCritical
  };
});

var patchDimensionMap = (function (dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
});

var records = {};
var isEnabled = false;

var isTimingsEnabled = function isTimingsEnabled() {
  return isEnabled;
};
var start = function start(key) {
  if (true) {
    if (!isTimingsEnabled()) {
      return;
    }

    var now = performance.now();
    records[key] = now;
  }
};
var finish = function finish(key) {
  if (true) {
    if (!isTimingsEnabled()) {
      return;
    }

    var now = performance.now();
    var previous = records[key];

    if (!previous) {
      console.warn('cannot finish timing as no previous time found', key);
      return;
    }

    var result = now - previous;
    var rounded = result.toFixed(2);

    var style = function () {
      if (result < 12) {
        return {
          textColor: 'green',
          symbol: '✅'
        };
      }

      if (result < 40) {
        return {
          textColor: 'orange',
          symbol: '⚠️'
        };
      }

      return {
        textColor: 'red',
        symbol: '❌'
      };
    }();

    console.log(style.symbol + " %cTiming %c" + rounded + " %cms %c" + key, 'color: blue; font-weight: bold;', "color: " + style.textColor + "; font-size: 1.1em;", 'color: grey;', 'color: purple; font-weight: bold;');
  }
};

var offsetDraggable = (function (_ref) {
  var draggable = _ref.draggable,
      offset$1 = _ref.offset,
      initialWindowScroll = _ref.initialWindowScroll;
  var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["offset"])(draggable.client, offset$1);
  var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(client, initialWindowScroll);

  var moved = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, draggable, {
    placeholder: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, draggable.placeholder, {
      client: client
    }),
    client: client,
    page: page
  });

  return moved;
});

var getFrame = (function (droppable) {
  var frame = droppable.frame;
  !frame ?  true ? invariant(false, 'Expected Droppable to have a frame') : undefined : void 0;
  return frame;
});

var adjustAdditionsForScrollChanges = (function (_ref) {
  var additions = _ref.additions,
      updatedDroppables = _ref.updatedDroppables,
      viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function (draggable) {
    var droppableId = draggable.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = getFrame(modified);
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
});

var timingsKey = 'Processing dynamic changes';
var publishWhileDraggingInVirtual = (function (_ref) {
  var _extends2, _extends3;

  var state = _ref.state,
      published = _ref.published;
  start(timingsKey);
  var withScrollChange = published.modified.map(function (update) {
    var existing = state.dimensions.droppables[update.droppableId];
    var scrolled = scrollDroppable(existing, update.scroll);
    return scrolled;
  });

  var droppables = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));

  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));

  var draggables = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state.dimensions.draggables, {}, updatedAdditions);

  published.removals.forEach(function (id) {
    delete draggables[id];
  });
  var dimensions = {
    droppables: droppables,
    draggables: draggables
  };
  var wasOverId = whatIsDraggedOver(state.impact);
  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  var draggable = dimensions.draggables[state.critical.draggable.id];
  var home = dimensions.droppables[state.critical.droppable.id];

  var _getLiftEffect = getLiftEffect({
    draggable: draggable,
    home: home,
    draggables: draggables,
    viewport: state.viewport
  }),
      onLiftImpact = _getLiftEffect.impact,
      afterCritical = _getLiftEffect.afterCritical;

  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  var impact = getDragImpact({
    pageBorderBoxCenter: state.current.page.borderBoxCenter,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: previousImpact,
    viewport: state.viewport,
    userDirection: state.userDirection,
    afterCritical: afterCritical
  });
  finish(timingsKey);

  var draggingState = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    phase: 'DRAGGING'
  }, state, (_extends2 = {}, _extends2["phase"] = 'DRAGGING', _extends2.impact = impact, _extends2.onLiftImpact = onLiftImpact, _extends2.dimensions = dimensions, _extends2.afterCritical = afterCritical, _extends2.forceShouldAnimate = false, _extends2));

  if (state.phase === 'COLLECTING') {
    return draggingState;
  }

  var dropPending = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    phase: 'DROP_PENDING'
  }, draggingState, (_extends3 = {}, _extends3["phase"] = 'DROP_PENDING', _extends3.reason = state.reason, _extends3.isWaiting = false, _extends3));

  return dropPending;
});

var isSnapping = function isSnapping(state) {
  return state.movementMode === 'SNAP';
};

var postDroppableChange = function postDroppableChange(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);

  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state: state,
      dimensions: dimensions
    });
  }

  return refreshSnap({
    state: state,
    dimensions: dimensions
  });
};

function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === 'SNAP') {
    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      phase: 'DRAGGING'
    }, state, {
      scrollJumpRequest: null
    });
  }

  return state;
}

var idle = {
  phase: 'IDLE',
  completed: null,
  shouldFlush: false
};
var reducer = (function (state, action) {
  if (state === void 0) {
    state = idle;
  }

  if (action.type === 'FLUSH') {
    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, idle, {
      shouldFlush: true
    });
  }

  if (action.type === 'INITIAL_PUBLISH') {
    !(state.phase === 'IDLE') ?  true ? invariant(false, 'INITIAL_PUBLISH must come after a IDLE phase') : undefined : void 0;
    var _action$payload = action.payload,
        critical = _action$payload.critical,
        clientSelection = _action$payload.clientSelection,
        viewport = _action$payload.viewport,
        dimensions = _action$payload.dimensions,
        movementMode = _action$payload.movementMode;
    var draggable = dimensions.draggables[critical.draggable.id];
    var home = dimensions.droppables[critical.droppable.id];
    var client = {
      selection: clientSelection,
      borderBoxCenter: draggable.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client: client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function (item) {
      return !item.isFixedOnPage;
    });

    var _getLiftEffect = getLiftEffect({
      draggable: draggable,
      home: home,
      draggables: dimensions.draggables,
      viewport: viewport
    }),
        impact = _getLiftEffect.impact,
        afterCritical = _getLiftEffect.afterCritical;

    var result = {
      phase: 'DRAGGING',
      isDragging: true,
      critical: critical,
      movementMode: movementMode,
      dimensions: dimensions,
      initial: initial,
      current: initial,
      isWindowScrollAllowed: isWindowScrollAllowed,
      impact: impact,
      afterCritical: afterCritical,
      onLiftImpact: impact,
      viewport: viewport,
      userDirection: forward,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }

  if (action.type === 'COLLECTION_STARTING') {
    var _extends2;

    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? invariant(false, "Collection cannot start from phase " + state.phase) : undefined : void 0;

    var _result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      phase: 'COLLECTING'
    }, state, (_extends2 = {}, _extends2["phase"] = 'COLLECTING', _extends2));

    return _result;
  }

  if (action.type === 'PUBLISH_WHILE_DRAGGING') {
    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Unexpected " + action.type + " received in phase " + state.phase) : undefined : void 0;
    return publishWhileDraggingInVirtual({
      state: state,
      published: action.payload
    });
  }

  if (action.type === 'MOVE') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, action.type + " not permitted in phase " + state.phase) : undefined : void 0;
    var _clientSelection = action.payload.client;

    if (isEqual(_clientSelection, state.current.client.selection)) {
      return state;
    }

    return update({
      state: state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }

  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
    if (state.phase === 'DROP_PENDING') {
      return removeScrollJumpRequest(state);
    }

    if (state.phase === 'COLLECTING') {
      return removeScrollJumpRequest(state);
    }

    !isMovementAllowed(state) ?  true ? invariant(false, action.type + " not permitted in phase " + state.phase) : undefined : void 0;
    var _action$payload2 = action.payload,
        id = _action$payload2.id,
        newScroll = _action$payload2.newScroll;
    var target = state.dimensions.droppables[id];

    if (!target) {
      return state;
    }

    var scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : undefined : void 0;
    var _action$payload3 = action.payload,
        _id = _action$payload3.id,
        isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ?  true ? invariant(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state") : undefined : void 0;
    !(_target.isEnabled !== isEnabled) ?  true ? invariant(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : undefined : void 0;

    var updated = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _target, {
      isEnabled: isEnabled
    });

    return postDroppableChange(state, updated, true);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : undefined : void 0;
    var _action$payload4 = action.payload,
        _id2 = _action$payload4.id,
        isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ?  true ? invariant(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state") : undefined : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ?  true ? invariant(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled)) : undefined : void 0;

    var _updated = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _target2, {
      isCombineEnabled: isCombineEnabled
    });

    return postDroppableChange(state, _updated, true);
  }

  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Cannot move by window in phase " + state.phase) : undefined : void 0;
    !state.isWindowScrollAllowed ?  true ? invariant(false, 'Window scrolling is currently not supported for fixed lists') : undefined : void 0;
    var _newScroll = action.payload.newScroll;

    if (isEqual(state.viewport.scroll.current, _newScroll)) {
      return removeScrollJumpRequest(state);
    }

    var _viewport = scrollViewport(state.viewport, _newScroll);

    if (isSnapping(state)) {
      return refreshSnap({
        state: state,
        viewport: _viewport
      });
    }

    return update({
      state: state,
      viewport: _viewport
    });
  }

  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
    if (!isMovementAllowed(state)) {
      return state;
    }

    var maxScroll = action.payload.maxScroll;

    if (isEqual(maxScroll, state.viewport.scroll.max)) {
      return state;
    }

    var withMaxScroll = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state.viewport, {
      scroll: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state.viewport.scroll, {
        max: maxScroll
      })
    });

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      phase: 'DRAGGING'
    }, state, {
      viewport: withMaxScroll
    });
  }

  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? invariant(false, action.type + " received while not in DRAGGING phase") : undefined : void 0;

    var _result2 = moveInDirection({
      state: state,
      type: action.type
    });

    if (!_result2) {
      return state;
    }

    return update({
      state: state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }

  if (action.type === 'DROP_PENDING') {
    var _extends3;

    var reason = action.payload.reason;
    !(state.phase === 'COLLECTING') ?  true ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : undefined : void 0;

    var newState = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      phase: 'DROP_PENDING'
    }, state, (_extends3 = {}, _extends3["phase"] = 'DROP_PENDING', _extends3.isWaiting = true, _extends3.reason = reason, _extends3));

    return newState;
  }

  if (action.type === 'DROP_ANIMATE') {
    var _action$payload5 = action.payload,
        completed = _action$payload5.completed,
        dropDuration = _action$payload5.dropDuration,
        newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Cannot animate drop from phase " + state.phase) : undefined : void 0;
    var _result3 = {
      phase: 'DROP_ANIMATING',
      completed: completed,
      dropDuration: dropDuration,
      newHomeClientOffset: newHomeClientOffset,
      dimensions: state.dimensions
    };
    return _result3;
  }

  if (action.type === 'DROP_COMPLETE') {
    var _completed = action.payload.completed;
    return {
      phase: 'IDLE',
      completed: _completed,
      shouldFlush: false
    };
  }

  return state;
});

var lift = function lift(args) {
  return {
    type: 'LIFT',
    payload: args
  };
};
var initialPublish = function initialPublish(args) {
  return {
    type: 'INITIAL_PUBLISH',
    payload: args
  };
};
var publishWhileDragging = function publishWhileDragging(args) {
  return {
    type: 'PUBLISH_WHILE_DRAGGING',
    payload: args
  };
};
var collectionStarting = function collectionStarting() {
  return {
    type: 'COLLECTION_STARTING',
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll(args) {
  return {
    type: 'UPDATE_DROPPABLE_SCROLL',
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_ENABLED',
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
    payload: args
  };
};
var move = function move(args) {
  return {
    type: 'MOVE',
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll(args) {
  return {
    type: 'MOVE_BY_WINDOW_SCROLL',
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll(args) {
  return {
    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
    payload: args
  };
};
var moveUp = function moveUp() {
  return {
    type: 'MOVE_UP',
    payload: null
  };
};
var moveDown = function moveDown() {
  return {
    type: 'MOVE_DOWN',
    payload: null
  };
};
var moveRight = function moveRight() {
  return {
    type: 'MOVE_RIGHT',
    payload: null
  };
};
var moveLeft = function moveLeft() {
  return {
    type: 'MOVE_LEFT',
    payload: null
  };
};
var flush = function flush() {
  return {
    type: 'FLUSH',
    payload: null
  };
};
var animateDrop = function animateDrop(args) {
  return {
    type: 'DROP_ANIMATE',
    payload: args
  };
};
var completeDrop = function completeDrop(args) {
  return {
    type: 'DROP_COMPLETE',
    payload: args
  };
};
var drop = function drop(args) {
  return {
    type: 'DROP',
    payload: args
  };
};
var dropPending = function dropPending(args) {
  return {
    type: 'DROP_PENDING',
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished() {
  return {
    type: 'DROP_ANIMATION_FINISHED',
    payload: null
  };
};

function checkIndexes(insideDestination) {
  if (insideDestination.length <= 1) {
    return;
  }

  var indexes = insideDestination.map(function (d) {
    return d.descriptor.index;
  });
  var errors = {};

  for (var i = 1; i < indexes.length; i++) {
    var current = indexes[i];
    var previous = indexes[i - 1];

    if (current !== previous + 1) {
      errors[current] = true;
    }
  }

  if (!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(errors).length) {
    return;
  }

  var formatted = indexes.map(function (index) {
    var hasError = Boolean(errors[index]);
    return hasError ? "[\uD83D\uDD25" + index + "]" : "" + index;
  }).join(', ');
   true ? warning("\n    Detected non-consecutive <Draggable /> indexes.\n\n    (This can cause unexpected bugs)\n\n    " + formatted + "\n  ") : undefined;
}

function validateDimensions(critical, dimensions) {
  if (true) {
    var insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
    checkIndexes(insideDestination);
  }
}

var lift$1 = (function (marshal) {
  return function (_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type !== 'LIFT') {
          next(action);
          return;
        }

        var _action$payload = action.payload,
            id = _action$payload.id,
            clientSelection = _action$payload.clientSelection,
            movementMode = _action$payload.movementMode;
        var initial = getState();

        if (initial.phase === 'DROP_ANIMATING') {
          dispatch(completeDrop({
            completed: initial.completed
          }));
        }

        !(getState().phase === 'IDLE') ?  true ? invariant(false, 'Unexpected phase to start a drag') : undefined : void 0;
        dispatch(flush());
        var scrollOptions = {
          shouldPublishImmediately: movementMode === 'SNAP'
        };
        var request = {
          draggableId: id,
          scrollOptions: scrollOptions
        };

        var _marshal$startPublish = marshal.startPublishing(request),
            critical = _marshal$startPublish.critical,
            dimensions = _marshal$startPublish.dimensions,
            viewport = _marshal$startPublish.viewport;

        validateDimensions(critical, dimensions);
        dispatch(initialPublish({
          critical: critical,
          dimensions: dimensions,
          clientSelection: clientSelection,
          movementMode: movementMode,
          viewport: viewport
        }));
      };
    };
  };
});

var style = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          marshal.dragging();
        }

        if (action.type === 'DROP_ANIMATE') {
          marshal.dropping(action.payload.completed.result.reason);
        }

        if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE') {
          marshal.resting();
        }

        next(action);
      };
    };
  };
});

var curves = {
  outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
  drop: 'cubic-bezier(.2,1,.1,1)'
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};

var moveTo = function moveTo(offset) {
  return isEqual(offset, origin) ? null : "translate(" + offset.x + "px, " + offset.y + "px)";
};

var transforms = {
  moveTo: moveTo,
  drop: function drop(offset, isCombining) {
    var translate = moveTo(offset);

    if (!translate) {
      return null;
    }

    if (!isCombining) {
      return translate;
    }

    return translate + " scale(" + combine.scale.drop + ")";
  }
};

var minDropTime = timings.minDropTime,
    maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = (function (_ref) {
  var current = _ref.current,
      destination = _ref.destination,
      reason = _ref.reason;
  var distance$1 = distance(current, destination);

  if (distance$1 <= 0) {
    return minDropTime;
  }

  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }

  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
});

var getNewHomeClientOffset = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      dimensions = _ref.dimensions,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home = droppables[draggable.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    afterCritical: afterCritical,
    droppable: destination || home,
    viewport: viewport
  });
  var offset = subtract(newClientCenter, draggable.client.borderBox.center);
  return offset;
});

var getDropImpact = (function (_ref) {
  var draggables = _ref.draggables,
      reason = _ref.reason,
      lastImpact = _ref.lastImpact,
      home = _ref.home,
      viewport = _ref.viewport,
      onLiftImpact = _ref.onLiftImpact;

  if (!lastImpact.at || reason !== 'DROP') {
    var recomputedHomeImpact = recompute({
      draggables: draggables,
      impact: onLiftImpact,
      destination: home,
      viewport: viewport,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }

  if (lastImpact.at.type === 'REORDER') {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }

  var withoutMovement = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, lastImpact, {
    displaced: emptyGroups
  });

  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
  };
});

var drop$1 = (function (_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP') {
        next(action);
        return;
      }

      var state = getState();
      var reason = action.payload.reason;

      if (state.phase === 'COLLECTING') {
        dispatch(dropPending({
          reason: reason
        }));
        return;
      }

      if (state.phase === 'IDLE') {
        return;
      }

      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
      !!isWaitingForDrop ?  true ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting') : undefined : void 0;
      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Cannot drop in phase: " + state.phase) : undefined : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var draggable = dimensions.draggables[state.critical.draggable.id];

      var _getDropImpact = getDropImpact({
        reason: reason,
        lastImpact: state.impact,
        afterCritical: state.afterCritical,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }),
          impact = _getDropImpact.impact,
          didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;

      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
      var combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable.descriptor.id,
        type: draggable.descriptor.type,
        source: source,
        reason: reason,
        mode: state.movementMode,
        destination: destination,
        combine: combine
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact: impact,
        draggable: draggable,
        dimensions: dimensions,
        viewport: state.viewport,
        afterCritical: state.afterCritical
      });
      var completed = {
        critical: state.critical,
        afterCritical: state.afterCritical,
        result: result,
        impact: impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);

      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed: completed
        }));
        return;
      }

      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason: reason
      });
      var args = {
        newHomeClientOffset: newHomeClientOffset,
        dropDuration: dropDuration,
        completed: completed
      };
      dispatch(animateDrop(args));
    };
  };
});

var getWindowScroll = (function () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
});

function getWindowScrollBinding(update) {
  return {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn(event) {
      if (event.target !== window && event.target !== window.document) {
        return;
      }

      update();
    }
  };
}

function getScrollListener(_ref) {
  var onWindowScroll = _ref.onWindowScroll;

  function updateScroll() {
    onWindowScroll(getWindowScroll());
  }

  var scheduled = Object(raf_schd__WEBPACK_IMPORTED_MODULE_10__["default"])(updateScroll);
  var binding = getWindowScrollBinding(scheduled);
  var unbind = noop;

  function isActive() {
    return unbind !== noop;
  }

  function start() {
    !!isActive() ?  true ? invariant(false, 'Cannot start scroll listener when already active') : undefined : void 0;
    unbind = bindEvents(window, [binding]);
  }

  function stop() {
    !isActive() ?  true ? invariant(false, 'Cannot stop scroll listener when not active') : undefined : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop;
  }

  return {
    start: start,
    stop: stop,
    isActive: isActive
  };
}

var shouldEnd = function shouldEnd(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
};

var scrollListener = (function (store) {
  var listener = getScrollListener({
    onWindowScroll: function onWindowScroll(newScroll) {
      store.dispatch(moveByWindowScroll({
        newScroll: newScroll
      }));
    }
  });
  return function (next) {
    return function (action) {
      if (!listener.isActive() && action.type === 'INITIAL_PUBLISH') {
        listener.start();
      }

      if (listener.isActive() && shouldEnd(action)) {
        listener.stop();
      }

      next(action);
    };
  };
});

var getExpiringAnnounce = (function (announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function () {
    isExpired = true;
  });

  var result = function result(message) {
    if (wasCalled) {
       true ? warning('Announcement already made. Not making a second announcement') : undefined;
      return;
    }

    if (isExpired) {
       true ? warning("\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ") : undefined;
      return;
    }

    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };

  result.wasCalled = function () {
    return wasCalled;
  };

  return result;
});

var getAsyncMarshal = (function () {
  var entries = [];

  var execute = function execute(timerId) {
    var index = findIndex(entries, function (item) {
      return item.timerId === timerId;
    });
    !(index !== -1) ?  true ? invariant(false, 'Could not find timer') : undefined : void 0;

    var _entries$splice = entries.splice(index, 1),
        entry = _entries$splice[0];

    entry.callback();
  };

  var add = function add(fn) {
    var timerId = setTimeout(function () {
      return execute(timerId);
    });
    var entry = {
      timerId: timerId,
      callback: fn
    };
    entries.push(entry);
  };

  var flush = function flush() {
    if (!entries.length) {
      return;
    }

    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function (entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };

  return {
    add: add,
    flush: flush
  };
});

var areLocationsEqual = function areLocationsEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual(first, second) {
  if (first === second) {
    return true;
  }

  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};

var withTimings = function withTimings(key, fn) {
  start(key);
  fn();
  finish(key);
};

var getDragStart = function getDragStart(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode: mode
  };
};

var execute = function execute(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }

  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);

  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};

var getPublisher = (function (getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;

  var beforeStart = function beforeStart(critical, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : undefined : void 0;
    withTimings('onBeforeDragStart', function () {
      var fn = getResponders().onBeforeDragStart;

      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };

  var start = function start(critical, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : undefined : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode: mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function () {
      withTimings('onDragStart', function () {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };

  var update = function update(critical, impact) {
    var location = tryGetDestination(impact);
    var combine = tryGetCombine(impact);
    !dragging ?  true ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called') : undefined : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);

    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }

    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);

    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }

    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);

    if (hasGroupingChanged) {
      dragging.lastCombine = combine;
    }

    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }

    var data = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, getDragStart(critical, dragging.mode), {
      combine: combine,
      destination: location
    });

    asyncMarshal.add(function () {
      withTimings('onDragUpdate', function () {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };

  var flush = function flush() {
    !dragging ?  true ? invariant(false, 'Can only flush responders while dragging') : undefined : void 0;
    asyncMarshal.flush();
  };

  var drop = function drop(result) {
    !dragging ?  true ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : undefined : void 0;
    dragging = null;
    withTimings('onDragEnd', function () {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };

  var abort = function abort() {
    if (!dragging) {
      return;
    }

    var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: 'CANCEL'
    });

    drop(result);
  };

  return {
    beforeStart: beforeStart,
    start: start,
    update: update,
    flush: flush,
    drop: drop,
    abort: abort
  };
});

var responders = (function (getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function (store) {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }

        next(action);

        if (action.type === 'FLUSH') {
          publisher.abort();
          return;
        }

        var state = store.getState();

        if (state.phase === 'DRAGGING') {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
});

var dropAnimationFinish = (function (store) {
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP_ANIMATION_FINISHED') {
        next(action);
        return;
      }

      var state = store.getState();
      !(state.phase === 'DROP_ANIMATING') ?  true ? invariant(false, 'Cannot finish a drop animating when no drop is occurring') : undefined : void 0;
      store.dispatch(completeDrop({
        completed: state.completed
      }));
    };
  };
});

var dropAnimationFlushOnScroll = (function (store) {
  var unbind = null;
  var frameId = null;

  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }

    if (unbind) {
      unbind();
      unbind = null;
    }
  }

  return function (next) {
    return function (action) {
      if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATION_FINISHED') {
        clear();
      }

      next(action);

      if (action.type !== 'DROP_ANIMATE') {
        return;
      }

      var binding = {
        eventName: 'scroll',
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          var state = store.getState();

          if (state.phase === 'DROP_ANIMATING') {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(function () {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
});

var dimensionMarshalStopper = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'DROP_COMPLETE' || action.type === 'FLUSH' || action.type === 'DROP_ANIMATE') {
          marshal.stopPublishing();
        }

        next(action);
      };
    };
  };
});

var focus = (function (marshal) {
  var isWatching = false;
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          isWatching = true;
          marshal.tryRecordFocus(action.payload.critical.draggable.id);
          next(action);
          marshal.tryRestoreFocusRecorded();
          return;
        }

        next(action);

        if (!isWatching) {
          return;
        }

        if (action.type === 'FLUSH') {
          isWatching = false;
          marshal.tryRestoreFocusRecorded();
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          isWatching = false;
          var result = action.payload.completed.result;

          if (result.combine) {
            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
          }

          marshal.tryRestoreFocusRecorded();
        }
      };
    };
  };
});

var shouldStop = function shouldStop(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
};

var autoScroll = (function (autoScroller) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (shouldStop(action)) {
          autoScroller.stop();
          next(action);
          return;
        }

        if (action.type === 'INITIAL_PUBLISH') {
          next(action);
          var state = store.getState();
          !(state.phase === 'DRAGGING') ?  true ? invariant(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH') : undefined : void 0;
          autoScroller.start(state);
          return;
        }

        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
});

var pendingDrop = (function (store) {
  return function (next) {
    return function (action) {
      next(action);

      if (action.type !== 'PUBLISH_WHILE_DRAGGING') {
        return;
      }

      var postActionState = store.getState();

      if (postActionState.phase !== 'DROP_PENDING') {
        return;
      }

      if (postActionState.isWaiting) {
        return;
      }

      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
});

var composeEnhancers =  true && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : redux__WEBPACK_IMPORTED_MODULE_4__["compose"];
var createStore = (function (_ref) {
  var dimensionMarshal = _ref.dimensionMarshal,
      focusMarshal = _ref.focusMarshal,
      styleMarshal = _ref.styleMarshal,
      getResponders = _ref.getResponders,
      announce = _ref.announce,
      autoScroller = _ref.autoScroller;
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(reducer, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
});

var clean$1 = function clean() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};

var timingKey = 'Publish collection from DOM';
function createPublisher(_ref) {
  var registry = _ref.registry,
      callbacks = _ref.callbacks;
  var staging = clean$1();
  var frameId = null;

  var collect = function collect() {
    if (frameId) {
      return;
    }

    callbacks.collectionStarting();
    frameId = requestAnimationFrame(function () {
      frameId = null;
      start(timingKey);
      var _staging = staging,
          additions = _staging.additions,
          removals = _staging.removals,
          modified = _staging.modified;

      var added = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(additions).map(function (id) {
        return registry.draggable.getById(id).getDimension(origin);
      }).sort(function (a, b) {
        return a.descriptor.index - b.descriptor.index;
      });

      var updated = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(modified).map(function (id) {
        var entry = registry.droppable.getById(id);
        var scroll = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id,
          scroll: scroll
        };
      });

      var result = {
        additions: added,
        removals: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(removals),
        modified: updated
      };
      staging = clean$1();
      finish(timingKey);
      callbacks.publish(result);
    });
  };

  var add = function add(entry) {
    var id = entry.descriptor.id;
    staging.additions[id] = entry;
    staging.modified[entry.descriptor.droppableId] = true;

    if (staging.removals[id]) {
      delete staging.removals[id];
    }

    collect();
  };

  var remove = function remove(entry) {
    var descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
    staging.modified[descriptor.droppableId] = true;

    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }

    collect();
  };

  var stop = function stop() {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$1();
  };

  return {
    add: add,
    remove: remove,
    stop: stop
  };
}

var getMaxScroll = (function (_ref) {
  var scrollHeight = _ref.scrollHeight,
      scrollWidth = _ref.scrollWidth,
      height = _ref.height,
      width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
});

var getDocumentElement = (function () {
  var doc = document.documentElement;
  !doc ?  true ? invariant(false, 'Cannot find document.documentElement') : undefined : void 0;
  return doc;
});

var getMaxWindowScroll = (function () {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
});

var getViewport = (function () {
  var scroll = getWindowScroll();
  var maxScroll = getMaxWindowScroll();
  var top = scroll.y;
  var left = scroll.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])({
    top: top,
    left: left,
    right: right,
    bottom: bottom
  });
  var viewport = {
    frame: frame,
    scroll: {
      initial: scroll,
      current: scroll,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
});

var getInitialPublish = (function (_ref) {
  var critical = _ref.critical,
      scrollOptions = _ref.scrollOptions,
      registry = _ref.registry;
  var timingKey = 'Initial collection from DOM';
  start(timingKey);
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home = critical.droppable;
  var droppables = registry.droppable.getAllByType(home.type).map(function (entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function (entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  finish(timingKey);
  var result = {
    dimensions: dimensions,
    critical: critical,
    viewport: viewport
  };
  return result;
});

function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }

  if (entry.descriptor.type !== dragging.type) {
    return false;
  }

  var home = registry.droppable.getById(entry.descriptor.droppableId);

  if (home.descriptor.mode !== 'virtual') {
     true ? warning("\n      You are attempting to add or remove a Draggable [id: " + entry.descriptor.id + "]\n      while a drag is occurring. This is only supported for virtual lists.\n\n      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md\n    ") : undefined;
    return false;
  }

  return true;
}

var createDimensionMarshal = (function (registry, callbacks) {
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry: registry
  });

  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsEnabled({
      id: id,
      isEnabled: isEnabled
    });
  };

  var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(id, isCombineEnabled) {
    if (!collection) {
      return;
    }

    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered") : undefined : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id: id,
      isCombineEnabled: isCombineEnabled
    });
  };

  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
    if (!collection) {
      return;
    }

    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : undefined : void 0;
    callbacks.updateDroppableScroll({
      id: id,
      newScroll: newScroll
    });
  };

  var scrollDroppable = function scrollDroppable(id, change) {
    if (!collection) {
      return;
    }

    registry.droppable.getById(id).callbacks.scroll(change);
  };

  var stopPublishing = function stopPublishing() {
    if (!collection) {
      return;
    }

    publisher.stop();
    var home = collection.critical.droppable;
    registry.droppable.getAllByType(home.type).forEach(function (entry) {
      return entry.callbacks.dragStopped();
    });
    collection.unsubscribe();
    collection = null;
  };

  var subscriber = function subscriber(event) {
    !collection ?  true ? invariant(false, 'Should only be subscribed when a collection is occurring') : undefined : void 0;
    var dragging = collection.critical.draggable;

    if (event.type === 'ADDITION') {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }

    if (event.type === 'REMOVAL') {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };

  var startPublishing = function startPublishing(request) {
    !!collection ?  true ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection') : undefined : void 0;
    var entry = registry.draggable.getById(request.draggableId);
    var home = registry.droppable.getById(entry.descriptor.droppableId);
    var critical = {
      draggable: entry.descriptor,
      droppable: home.descriptor
    };
    var unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical: critical,
      unsubscribe: unsubscribe
    };
    return getInitialPublish({
      critical: critical,
      registry: registry,
      scrollOptions: request.scrollOptions
    });
  };

  var marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
    scrollDroppable: scrollDroppable,
    updateDroppableScroll: updateDroppableScroll,
    startPublishing: startPublishing,
    stopPublishing: stopPublishing
  };
  return marshal;
});

var canStartDrag = (function (state, id) {
  if (state.phase === 'IDLE') {
    return true;
  }

  if (state.phase !== 'DROP_ANIMATING') {
    return false;
  }

  if (state.completed.result.draggableId === id) {
    return false;
  }

  return state.completed.result.reason === 'DROP';
});

var scrollWindow = (function (change) {
  window.scrollBy(change.x, change.y);
});

var getScrollableDroppables = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (droppables) {
  return toDroppableList(droppables).filter(function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    if (!droppable.frame) {
      return false;
    }

    return true;
  });
});

var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function (droppable) {
    !droppable.frame ?  true ? invariant(false, 'Invalid result') : undefined : void 0;
    return isPositionInFrame(droppable.frame.pageMarginBox)(target);
  });
  return maybe;
};

var getBestScrollableDroppable = (function (_ref) {
  var center = _ref.center,
      destination = _ref.destination,
      droppables = _ref.droppables;

  if (destination) {
    var _dimension = droppables[destination];

    if (!_dimension.frame) {
      return null;
    }

    return _dimension;
  }

  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
});

var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};

var getDistanceThresholds = (function (container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom: startScrollingFrom,
    maxScrollValueAt: maxScrollValueAt
  };
  return thresholds;
});

var getPercentage = (function (_ref) {
  var startOfRange = _ref.startOfRange,
      endOfRange = _ref.endOfRange,
      current = _ref.current;
  var range = endOfRange - startOfRange;

  if (range === 0) {
     true ? warning("\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    ") : undefined;
    return 0;
  }

  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
});

var minScroll = 1;

var getValueFromDistance = (function (distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }

  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }

  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }

  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll);
});

var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = (function (proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;

  var now = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default()();

  var runTime = now - startOfRange;

  if (runTime >= stopAt) {
    return proposedScroll;
  }

  if (runTime < accelerateAt) {
    return minScroll;
  }

  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange: endOfRange,
    current: runTime
  });
  var scroll = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll);
});

var getValue = (function (_ref) {
  var distanceToEdge = _ref.distanceToEdge,
      thresholds = _ref.thresholds,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getValueFromDistance(distanceToEdge, thresholds);

  if (scroll === 0) {
    return 0;
  }

  if (!shouldUseTimeDampening) {
    return scroll;
  }

  return Math.max(dampenValueByTime(scroll, dragStartTime), minScroll);
});

var getScrollOnAxis = (function (_ref) {
  var container = _ref.container,
      distanceToEdges = _ref.distanceToEdges,
      dragStartTime = _ref.dragStartTime,
      axis = _ref.axis,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];

  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds: thresholds,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  }

  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds: thresholds,
    dragStartTime: dragStartTime,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
});

var adjustForSizeLimits = (function (_ref) {
  var container = _ref.container,
      subject = _ref.subject,
      proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;

  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }

  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }

  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
});

var clean$2 = apply(function (value) {
  return value === 0 ? 0 : value;
});
var getScroll = (function (_ref) {
  var dragStartTime = _ref.dragStartTime,
      container = _ref.container,
      subject = _ref.subject,
      center = _ref.center,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: vertical,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var x = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var required = clean$2({
    x: x,
    y: y
  });

  if (isEqual(required, origin)) {
    return null;
  }

  var limited = adjustForSizeLimits({
    container: container,
    subject: subject,
    proposedScroll: required
  });

  if (!limited) {
    return null;
  }

  return isEqual(limited, origin) ? null : limited;
});

var smallestSigned = apply(function (value) {
  if (value === 0) {
    return 0;
  }

  return value > 0 ? 1 : -1;
});
var getOverlap = function () {
  var getRemainder = function getRemainder(target, max) {
    if (target < 0) {
      return target;
    }

    if (target > max) {
      return target - max;
    }

    return 0;
  };

  return function (_ref) {
    var current = _ref.current,
        max = _ref.max,
        change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };

    if (isEqual(overlap, origin)) {
      return null;
    }

    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll(_ref2) {
  var rawMax = _ref2.max,
      current = _ref2.current,
      change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max: max,
    current: current,
    change: smallestChange
  });

  if (!overlap) {
    return true;
  }

  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }

  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }

  return false;
};
var canScrollWindow = function canScrollWindow(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change: change
  });
};
var getWindowOverlap = function getWindowOverlap(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }

  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current: current,
    max: max,
    change: change
  });
};
var canScrollDroppable = function canScrollDroppable(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return false;
  }

  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};
var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  if (!canScrollDroppable(droppable, change)) {
    return null;
  }

  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};

var getWindowScrollChange = (function (_ref) {
  var viewport = _ref.viewport,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: viewport.frame,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
});

var getDroppableScrollChange = (function (_ref) {
  var droppable = _ref.droppable,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: frame.pageMarginBox,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
});

var scroll$1 = (function (_ref) {
  var state = _ref.state,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening,
      scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable.page.marginBox;

  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;

    var _change = getWindowScrollChange({
      dragStartTime: dragStartTime,
      viewport: viewport,
      subject: subject,
      center: center,
      shouldUseTimeDampening: shouldUseTimeDampening
    });

    if (_change) {
      scrollWindow(_change);
      return;
    }
  }

  var droppable = getBestScrollableDroppable({
    center: center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });

  if (!droppable) {
    return;
  }

  var change = getDroppableScrollChange({
    dragStartTime: dragStartTime,
    droppable: droppable,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });

  if (change) {
    scrollDroppable(droppable.descriptor.id, change);
  }
});

var createFluidScroller = (function (_ref) {
  var scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var scheduleWindowScroll = Object(raf_schd__WEBPACK_IMPORTED_MODULE_10__["default"])(scrollWindow);
  var scheduleDroppableScroll = Object(raf_schd__WEBPACK_IMPORTED_MODULE_10__["default"])(scrollDroppable);
  var dragging = null;

  var tryScroll = function tryScroll(state) {
    !dragging ?  true ? invariant(false, 'Cannot fluid scroll if not dragging') : undefined : void 0;
    var _dragging = dragging,
        shouldUseTimeDampening = _dragging.shouldUseTimeDampening,
        dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state: state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  };

  var start$1 = function start$1(state) {
    start('starting fluid scroller');
    !!dragging ?  true ? invariant(false, 'Cannot start auto scrolling when already started') : undefined : void 0;

    var dragStartTime = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default()();

    var wasScrollNeeded = false;

    var fakeScrollCallback = function fakeScrollCallback() {
      wasScrollNeeded = true;
    };

    scroll$1({
      state: state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    finish('starting fluid scroller');

    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };

  var stop = function stop() {
    if (!dragging) {
      return;
    }

    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };

  return {
    start: start$1,
    stop: stop,
    scroll: tryScroll
  };
});

var createJumpScroller = (function (_ref) {
  var move = _ref.move,
      scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow;

  var moveByOffset = function moveByOffset(state, offset) {
    var client = add(state.current.client.selection, offset);
    move({
      client: client
    });
  };

  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
    if (!canScrollDroppable(droppable, change)) {
      return change;
    }

    var overlap = getDroppableOverlap(droppable, change);

    if (!overlap) {
      scrollDroppable(droppable.descriptor.id, change);
      return null;
    }

    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };

  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }

    if (!canScrollWindow(viewport, change)) {
      return change;
    }

    var overlap = getWindowOverlap(viewport, change);

    if (!overlap) {
      scrollWindow(change);
      return null;
    }

    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };

  var jumpScroller = function jumpScroller(state) {
    var request = state.scrollJumpRequest;

    if (!request) {
      return;
    }

    var destination = whatIsDraggedOver(state.impact);
    !destination ?  true ? invariant(false, 'Cannot perform a jump scroll when there is no destination') : undefined : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);

    if (!droppableRemainder) {
      return;
    }

    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);

    if (!windowRemainder) {
      return;
    }

    moveByOffset(state, windowRemainder);
  };

  return jumpScroller;
});

var createAutoScroller = (function (_ref) {
  var scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow,
      move = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });
  var jumpScroll = createJumpScroller({
    move: move,
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });

  var scroll = function scroll(state) {
    if (state.phase !== 'DRAGGING') {
      return;
    }

    if (state.movementMode === 'FLUID') {
      fluidScroller.scroll(state);
      return;
    }

    if (!state.scrollJumpRequest) {
      return;
    }

    jumpScroll(state);
  };

  var scroller = {
    scroll: scroll,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
});

var prefix$1 = 'data-rbd';
var dragHandle = function () {
  var base = prefix$1 + "-drag-handle";
  return {
    base: base,
    draggableId: base + "-draggable-id",
    contextId: base + "-context-id"
  };
}();
var draggable = function () {
  var base = prefix$1 + "-draggable";
  return {
    base: base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var droppable = function () {
  var base = prefix$1 + "-droppable";
  return {
    base: base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var scrollContainer = {
  contextId: prefix$1 + "-scroll-container-context-id"
};

var makeGetSelector = function makeGetSelector(context) {
  return function (attribute) {
    return "[" + attribute + "=\"" + context + "\"]";
  };
};

var getStyles = function getStyles(rules, property) {
  return rules.map(function (rule) {
    var value = rule.styles[property];

    if (!value) {
      return '';
    }

    return rule.selector + " { " + value + " }";
  }).join(' ');
};

var noPointerEvents = 'pointer-events: none;';
var getStyles$1 = (function (contextId) {
  var getSelector = makeGetSelector(contextId);

  var dragHandle$1 = function () {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector(dragHandle.contextId),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();

  var draggable$1 = function () {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();

  var droppable$1 = {
    selector: getSelector(droppable.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: 'body',
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, 'always'),
    resting: getStyles(rules, 'resting'),
    dragging: getStyles(rules, 'dragging'),
    dropAnimating: getStyles(rules, 'dropAnimating'),
    userCancel: getStyles(rules, 'userCancel')
  };
});

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

var getHead = function getHead() {
  var head = document.querySelector('head');
  !head ?  true ? invariant(false, 'Cannot find the head to append a style to') : undefined : void 0;
  return head;
};

var createStyleEl = function createStyleEl(nonce) {
  var el = document.createElement('style');

  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  el.type = 'text/css';
  return el;
};

function useStyleMarshal(contextId, nonce) {
  var styles = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return getStyles$1(contextId);
  }, [contextId]);
  var alwaysRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var dynamicRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var setDynamicStyle = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (proposed) {
    var el = dynamicRef.current;
    !el ?  true ? invariant(false, 'Cannot set dynamic style element if it is not set') : undefined : void 0;
    el.textContent = proposed;
  }), []);
  var setAlwaysStyle = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (proposed) {
    var el = alwaysRef.current;
    !el ?  true ? invariant(false, 'Cannot set dynamic style element if it is not set') : undefined : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect(function () {
    !(!alwaysRef.current && !dynamicRef.current) ?  true ? invariant(false, 'style elements already mounted') : undefined : void 0;
    var always = createStyleEl(nonce);
    var dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix$1 + "-always", contextId);
    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return function () {
      var remove = function remove(ref) {
        var current = ref.current;
        !current ?  true ? invariant(false, 'Cannot unmount ref as it is not set') : undefined : void 0;
        getHead().removeChild(current);
        ref.current = null;
      };

      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
  var dragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return setDynamicStyle(styles.dragging);
  }, [setDynamicStyle, styles.dragging]);
  var dropping = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (reason) {
    if (reason === 'DROP') {
      setDynamicStyle(styles.dropAnimating);
      return;
    }

    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  var resting = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!dynamicRef.current) {
      return;
    }

    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  var marshal = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      dragging: dragging,
      dropping: dropping,
      resting: resting
    };
  }, [dragging, dropping, resting]);
  return marshal;
}

var getWindowFromEl = (function (el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
});

function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}

function findDragHandle(contextId, draggableId) {
  var selector = "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
  var possible = toArray(document.querySelectorAll(selector));

  if (!possible.length) {
     true ? warning("Unable to find any drag handles in the context \"" + contextId + "\"") : undefined;
    return null;
  }

  var handle = find(possible, function (el) {
    return el.getAttribute(dragHandle.draggableId) === draggableId;
  });

  if (!handle) {
     true ? warning("Unable to find drag handle with id \"" + draggableId + "\" as no handle with a matching id was found") : undefined;
    return null;
  }

  if (!isHtmlElement(handle)) {
     true ? warning('drag handle needs to be a HTMLElement') : undefined;
    return null;
  }

  return handle;
}

function useFocusMarshal(contextId) {
  var entriesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
  var recordRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var restoreFocusFrameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isMountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var register = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function register(id, focus) {
    var entry = {
      id: id,
      focus: focus
    };
    entriesRef.current[id] = entry;
    return function unregister() {
      var entries = entriesRef.current;
      var current = entries[id];

      if (current !== entry) {
        delete entries[id];
      }
    };
  }, []);
  var tryGiveFocus = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function tryGiveFocus(tryGiveFocusTo) {
    var handle = findDragHandle(contextId, tryGiveFocusTo);

    if (handle && handle !== document.activeElement) {
      handle.focus();
    }
  }, [contextId]);
  var tryShiftRecord = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function tryShiftRecord(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  var tryRestoreFocusRecorded = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function tryRestoreFocusRecorded() {
    if (restoreFocusFrameRef.current) {
      return;
    }

    if (!isMountedRef.current) {
      return;
    }

    restoreFocusFrameRef.current = requestAnimationFrame(function () {
      restoreFocusFrameRef.current = null;
      var record = recordRef.current;

      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  var tryRecordFocus = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function tryRecordFocus(id) {
    recordRef.current = null;
    var focused = document.activeElement;

    if (!focused) {
      return;
    }

    if (focused.getAttribute(dragHandle.draggableId) !== id) {
      return;
    }

    recordRef.current = id;
  }, []);
  useIsomorphicLayoutEffect(function () {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      var frameId = restoreFocusFrameRef.current;

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  var marshal = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      register: register,
      tryRecordFocus: tryRecordFocus,
      tryRestoreFocusRecorded: tryRestoreFocusRecorded,
      tryShiftRecord: tryShiftRecord
    };
  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}

function createRegistry() {
  var entries = {
    draggables: {},
    droppables: {}
  };
  var subscribers = [];

  function subscribe(cb) {
    subscribers.push(cb);
    return function unsubscribe() {
      var index = subscribers.indexOf(cb);

      if (index === -1) {
        return;
      }

      subscribers.splice(index, 1);
    };
  }

  function notify(event) {
    if (subscribers.length) {
      subscribers.forEach(function (cb) {
        return cb(event);
      });
    }
  }

  function findDraggableById(id) {
    return entries.draggables[id] || null;
  }

  function getDraggableById(id) {
    var entry = findDraggableById(id);
    !entry ?  true ? invariant(false, "Cannot find draggable entry with id [" + id + "]") : undefined : void 0;
    return entry;
  }

  var draggableAPI = {
    register: function register(entry) {
      entries.draggables[entry.descriptor.id] = entry;
      notify({
        type: 'ADDITION',
        value: entry
      });
    },
    update: function update(entry, last) {
      var current = entries.draggables[last.descriptor.id];

      if (!current) {
        return;
      }

      if (current.uniqueId !== entry.uniqueId) {
        return;
      }

      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var draggableId = entry.descriptor.id;
      var current = findDraggableById(draggableId);

      if (!current) {
        return;
      }

      if (entry.uniqueId !== current.uniqueId) {
        return;
      }

      delete entries.draggables[draggableId];
      notify({
        type: 'REMOVAL',
        value: entry
      });
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: function exists(id) {
      return Boolean(findDraggableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.draggables).filter(function (entry) {
        return entry.descriptor.type === type;
      });
    }
  };

  function findDroppableById(id) {
    return entries.droppables[id] || null;
  }

  function getDroppableById(id) {
    var entry = findDroppableById(id);
    !entry ?  true ? invariant(false, "Cannot find droppable entry with id [" + id + "]") : undefined : void 0;
    return entry;
  }

  var droppableAPI = {
    register: function register(entry) {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var current = findDroppableById(entry.descriptor.id);

      if (!current) {
        return;
      }

      if (entry.uniqueId !== current.uniqueId) {
        return;
      }

      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: function exists(id) {
      return Boolean(findDroppableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.droppables).filter(function (entry) {
        return entry.descriptor.type === type;
      });
    }
  };

  function clean() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }

  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe: subscribe,
    clean: clean
  };
}

function useRegistry() {
  var registry = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(createRegistry, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function unmount() {
      requestAnimationFrame(registry.clean);
    };
  }, [registry]);
  return registry;
}

var StoreContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

var getBodyElement = (function () {
  var body = document.body;
  !body ?  true ? invariant(false, 'Cannot find document.body') : undefined : void 0;
  return body;
});

var visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  'clip-path': 'inset(100%)'
};

var getId = function getId(contextId) {
  return "rbd-announcement-" + contextId;
};
function useAnnouncer(contextId) {
  var id = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return getId(contextId);
  }, [contextId]);
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    !!ref.current ?  true ? invariant(false, 'Announcement node already mounted') : undefined : void 0;
    var el = document.createElement('div');
    ref.current = el;
    el.id = id;
    el.setAttribute('aria-live', 'assertive');
    el.setAttribute('role', 'log');
    el.setAttribute('aria-atomic', 'true');

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_12___default()(el.style, visuallyHidden);

    getBodyElement().appendChild(el);
    return function () {
      setTimeout(function remove() {
        var toBeRemoved = ref.current;
        !toBeRemoved ?  true ? invariant(false, 'Cannot unmount announcement node') : undefined : void 0;
        getBodyElement().removeChild(toBeRemoved);
        ref.current = null;
      });
    };
  }, [id]);
  var announce = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (message) {
    var el = ref.current;

    if (el) {
      el.textContent = message;
      return;
    }

     true ? warning("\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      \"" + message + "\"\n    ") : undefined;
  }, []);
  return announce;
}

var getId$1 = function getId(contextId) {
  return "rbd-lift-instruction-" + contextId;
};
function useLiftInstruction(contextId, liftInstruction) {
  var id = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return getId$1(contextId);
  }, [contextId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function mount() {
    var el = document.createElement('div');
    el.id = id;
    el.textContent = liftInstruction;

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_12___default()(el.style, visuallyHidden);

    getBodyElement().appendChild(el);
    return function unmount() {
      getBodyElement().removeChild(el);
    };
  }, [id, liftInstruction]);
  return id;
}

var AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

var peerDependencies = {
	react: "^16.8.5",
	"react-dom": "^16.8.5"
};

var semver = /(\d+)\.(\d+)\.(\d+)/;

var getVersion = function getVersion(value) {
  var result = semver.exec(value);
  !(result != null) ?  true ? invariant(false, "Unable to parse React version " + value) : undefined : void 0;
  var major = Number(result[1]);
  var minor = Number(result[2]);
  var patch = Number(result[3]);
  return {
    major: major,
    minor: minor,
    patch: patch,
    raw: value
  };
};

var isSatisfied = function isSatisfied(expected, actual) {
  if (actual.major > expected.major) {
    return true;
  }

  if (actual.major < expected.major) {
    return false;
  }

  if (actual.minor > expected.minor) {
    return true;
  }

  if (actual.minor < expected.minor) {
    return false;
  }

  return actual.patch >= expected.patch;
};

var checkReactVersion = (function (peerDepValue, actualValue) {
  var peerDep = getVersion(peerDepValue);
  var actual = getVersion(actualValue);

  if (isSatisfied(peerDep, actual)) {
    return;
  }

   true ? warning("\n    React version: [" + actual.raw + "]\n    does not satisfy expected peer dependency version: [" + peerDep.raw + "]\n\n    This can result in run time bugs, and even fatal crashes\n  ") : undefined;
});

var suffix = "\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n";
var checkDoctype = (function (doc) {
  var doctype = doc.doctype;

  if (!doctype) {
     true ? warning("\n      No <!doctype html> found.\n\n      " + suffix + "\n    ") : undefined;
    return;
  }

  if (doctype.name.toLowerCase() !== 'html') {
     true ? warning("\n      Unexpected <!doctype> found: (" + doctype.name + ")\n\n      " + suffix + "\n    ") : undefined;
  }

  if (doctype.publicId !== '') {
     true ? warning("\n      Unexpected <!doctype> publicId found: (" + doctype.publicId + ")\n      A html5 doctype does not have a publicId\n\n      " + suffix + "\n    ") : undefined;
  }
});

function useDev(useHook) {
  if (true) {
    useHook();
  }
}

function useDevSetupWarning(fn, inputs) {
  useDev(function () {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      try {
        fn();
      } catch (e) {
        error("\n          A setup problem was encountered.\n\n          > " + e.message + "\n        ");
      }
    }, inputs);
  });
}

function useStartupValidation() {
  useDevSetupWarning(function () {
    checkReactVersion(peerDependencies.react, react__WEBPACK_IMPORTED_MODULE_0___default.a.version);
    checkDoctype(document);
  }, []);
}

function usePrevious(current) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(current);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = current;
  });
  return ref;
}

function create() {
  var lock = null;

  function isClaimed() {
    return Boolean(lock);
  }

  function isActive(value) {
    return value === lock;
  }

  function claim(abandon) {
    !!lock ?  true ? invariant(false, 'Cannot claim lock as it is already claimed') : undefined : void 0;
    var newLock = {
      abandon: abandon
    };
    lock = newLock;
    return newLock;
  }

  function release() {
    !lock ?  true ? invariant(false, 'Cannot release lock when there is no lock') : undefined : void 0;
    lock = null;
  }

  function tryAbandon() {
    if (lock) {
      lock.abandon();
      release();
    }
  }

  return {
    isClaimed: isClaimed,
    isActive: isActive,
    claim: claim,
    release: release,
    tryAbandon: tryAbandon
  };
}

var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;

var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = (function (event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
});

var supportedEventName = function () {
  var base = 'visibilitychange';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function (eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();

var primaryButton = 0;
var sloppyClickThreshold = 5;

function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}

var idle$1 = {
  type: 'IDLE'
};

function getCaptureBindings(_ref) {
  var cancel = _ref.cancel,
      completed = _ref.completed,
      getPhase = _ref.getPhase,
      setPhase = _ref.setPhase;
  return [{
    eventName: 'mousemove',
    fn: function fn(event) {
      var button = event.button,
          clientX = event.clientX,
          clientY = event.clientY;

      if (button !== primaryButton) {
        return;
      }

      var point = {
        x: clientX,
        y: clientY
      };
      var phase = getPhase();

      if (phase.type === 'DRAGGING') {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }

      !(phase.type === 'PENDING') ?  true ? invariant(false, 'Cannot be IDLE') : undefined : void 0;
      var pending = phase.point;

      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }

      event.preventDefault();
      var actions = phase.actions.fluidLift(point);
      setPhase({
        type: 'DRAGGING',
        actions: actions
      });
    }
  }, {
    eventName: 'mouseup',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: 'mousedown',
    fn: function fn(event) {
      if (getPhase().type === 'DRAGGING') {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type === 'PENDING') {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (getPhase().type === 'PENDING') {
        cancel();
      }
    }
  }, {
    eventName: 'webkitmouseforcedown',
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== 'IDLE') ?  true ? invariant(false, 'Unexpected phase') : undefined : void 0;

      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }

      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useMouseSensor(api) {
  var phaseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(idle$1);
  var unbindEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(noop);
  var startCaptureBinding = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      eventName: 'mousedown',
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }

        if (event.button !== primaryButton) {
          return;
        }

        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!actions) {
          return;
        }

        event.preventDefault();
        var point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var preventForcePressBinding = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      eventName: 'webkitmouseforcewillbegin',
      fn: function fn(event) {
        if (event.defaultPrevented) {
          return;
        }

        var id = api.findClosestDraggableId(event);

        if (!id) {
          return;
        }

        var options = api.findOptionsForDraggable(id);

        if (!options) {
          return;
        }

        if (options.shouldRespectForcePress) {
          return;
        }

        if (!api.canGetLock(id)) {
          return;
        }

        event.preventDefault();
      }
    };
  }, [api]);
  var listenForCapture = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function listenForCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  var stop = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var current = phaseRef.current;

    if (current.type === 'IDLE') {
      return;
    }

    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  var cancel = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var phase = phaseRef.current;
    stop();

    if (phase.type === 'DRAGGING') {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }

    if (phase.type === 'PENDING') {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function bindCapturingEvents() {
    var options = {
      capture: true,
      passive: false
    };
    var bindings = getCaptureBindings({
      cancel: cancel,
      completed: stop,
      getPhase: function getPhase() {
        return phaseRef.current;
      },
      setPhase: function setPhase(phase) {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  var startPendingDrag = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function startPendingDrag(actions, point) {
    !(phaseRef.current.type === 'IDLE') ?  true ? invariant(false, 'Expected to move from IDLE to PENDING drag') : undefined : void 0;
    phaseRef.current = {
      type: 'PENDING',
      point: point,
      actions: actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}

var _scrollJumpKeys;

function noop$1() {}

var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }

  function drop() {
    stop();
    actions.drop();
  }

  return [{
    eventName: 'keydown',
    fn: function fn(event) {
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      if (event.keyCode === space) {
        event.preventDefault();
        drop();
        return;
      }

      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }

      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }

      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }

      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }

      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'mousedown',
    fn: cancel
  }, {
    eventName: 'mouseup',
    fn: cancel
  }, {
    eventName: 'click',
    fn: cancel
  }, {
    eventName: 'touchstart',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'wheel',
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useKeyboardSensor(api) {
  var unbindEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(noop$1);
  var startCaptureBinding = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      eventName: 'keydown',
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }

        if (event.keyCode !== space) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!preDrag) {
          return;
        }

        event.preventDefault();
        var isCapturing = true;
        var actions = preDrag.snapLift();
        unbindEventsRef.current();

        function stop() {
          !isCapturing ?  true ? invariant(false, 'Cannot stop capturing a keyboard drag when not capturing') : undefined : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }

        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    };
  }, [api]);
  var listenForCapture = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function tryStartCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}

var idle$2 = {
  type: 'IDLE'
};
var timeForLongPress = 120;
var forcePressThreshold = 0.15;

function getWindowBindings(_ref) {
  var cancel = _ref.cancel,
      getPhase = _ref.getPhase;
  return [{
    eventName: 'orientationchange',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'contextmenu',
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (getPhase().type !== 'DRAGGING') {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function getHandleBindings(_ref2) {
  var cancel = _ref2.cancel,
      completed = _ref2.completed,
      getPhase = _ref2.getPhase;
  return [{
    eventName: 'touchmove',
    options: {
      capture: false
    },
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      phase.hasMoved = true;
      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: 'touchend',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: 'touchcancel',
    fn: function fn(event) {
      if (getPhase().type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      cancel();
    }
  }, {
    eventName: 'touchforcechange',
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== 'IDLE') ?  true ? invariant(false) : undefined : void 0;
      var touch = event.touches[0];

      if (!touch) {
        return;
      }

      var isForcePress = touch.force >= forcePressThreshold;

      if (!isForcePress) {
        return;
      }

      var shouldRespect = phase.actions.shouldRespectForcePress();

      if (phase.type === 'PENDING') {
        if (shouldRespect) {
          cancel();
        }

        return;
      }

      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }

        cancel();
        return;
      }

      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useMouseSensor$1(api) {
  var phaseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(idle$2);
  var unbindEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(noop);
  var getPhase = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function getPhase() {
    return phaseRef.current;
  }, []);
  var setPhase = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function setPhase(phase) {
    phaseRef.current = phase;
  }, []);
  var startCaptureBinding = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      eventName: 'touchstart',
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!actions) {
          return;
        }

        var touch = event.touches[0];
        var clientX = touch.clientX,
            clientY = touch.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var listenForCapture = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function listenForCapture() {
    var options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  var stop = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var current = phaseRef.current;

    if (current.type === 'IDLE') {
      return;
    }

    if (current.type === 'PENDING') {
      clearTimeout(current.longPressTimerId);
    }

    setPhase(idle$2);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  var cancel = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var phase = phaseRef.current;
    stop();

    if (phase.type === 'DRAGGING') {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }

    if (phase.type === 'PENDING') {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function bindCapturingEvents() {
    var options = {
      capture: true,
      passive: false
    };
    var args = {
      cancel: cancel,
      completed: stop,
      getPhase: getPhase
    };
    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
    var unbindWindow = bindEvents(window, getWindowBindings(args), options);

    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  var startDragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function startDragging() {
    var phase = getPhase();
    !(phase.type === 'PENDING') ?  true ? invariant(false, "Cannot start dragging from phase " + phase.type) : undefined : void 0;
    var actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: 'DRAGGING',
      actions: actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  var startPendingDrag = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function startPendingDrag(actions, point) {
    !(getPhase().type === 'IDLE') ?  true ? invariant(false, 'Expected to move from IDLE to PENDING drag') : undefined : void 0;
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: 'PENDING',
      point: point,
      actions: actions,
      longPressTimerId: longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      var phase = getPhase();

      if (phase.type === 'PENDING') {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle$2);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: 'touchmove',
      fn: function fn() {},
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}

function useValidateSensorHooks(sensorHooks) {
  useDev(function () {
    var previousRef = usePrevious(sensorHooks);
    useDevSetupWarning(function () {
      !(previousRef.current.length === sensorHooks.length) ?  true ? invariant(false, 'Cannot change the amount of sensor hooks after mounting') : undefined : void 0;
    });
  });
}

var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};

function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }

  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

  if (hasAnInteractiveTag) {
    return true;
  }

  var attribute = current.getAttribute('contenteditable');

  if (attribute === 'true' || attribute === '') {
    return true;
  }

  if (current === parent) {
    return false;
  }

  return isAnInteractiveElement(parent, current.parentElement);
}

function isEventInInteractiveElement(draggable, event) {
  var target = event.target;

  if (!isHtmlElement(target)) {
    return false;
  }

  return isAnInteractiveElement(draggable, target);
}

var getBorderBoxCenterPosition = (function (el) {
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])(el.getBoundingClientRect()).center;
});

function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}

var supportedMatchesName = function () {
  var base = 'matches';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, 'msMatchesSelector', 'webkitMatchesSelector'];
  var value = find(candidates, function (name) {
    return name in Element.prototype;
  });
  return value || base;
}();

function closestPonyfill(el, selector) {
  if (el == null) {
    return null;
  }

  if (el[supportedMatchesName](selector)) {
    return el;
  }

  return closestPonyfill(el.parentElement, selector);
}

function closest$1(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }

  return closestPonyfill(el, selector);
}

function getSelector(contextId) {
  return "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
}

function findClosestDragHandleFromEvent(contextId, event) {
  var target = event.target;

  if (!isElement(target)) {
     true ? warning('event.target must be a Element') : undefined;
    return null;
  }

  var selector = getSelector(contextId);
  var handle = closest$1(target, selector);

  if (!handle) {
    return null;
  }

  if (!isHtmlElement(handle)) {
     true ? warning('drag handle must be a HTMLElement') : undefined;
    return null;
  }

  return handle;
}

function tryGetClosestDraggableIdFromEvent(contextId, event) {
  var handle = findClosestDragHandleFromEvent(contextId, event);

  if (!handle) {
    return null;
  }

  return handle.getAttribute(dragHandle.draggableId);
}

function findDraggable(contextId, draggableId) {
  var selector = "[" + draggable.contextId + "=\"" + contextId + "\"]";
  var possible = toArray(document.querySelectorAll(selector));
  var draggable$1 = find(possible, function (el) {
    return el.getAttribute(draggable.id) === draggableId;
  });

  if (!draggable$1) {
    return null;
  }

  if (!isHtmlElement(draggable$1)) {
     true ? warning('Draggable element is not a HTMLElement') : undefined;
    return null;
  }

  return draggable$1;
}

function preventDefault(event) {
  event.preventDefault();
}

function _isActive(_ref) {
  var expected = _ref.expected,
      phase = _ref.phase,
      isLockActive = _ref.isLockActive,
      shouldWarn = _ref.shouldWarn;

  if (!isLockActive()) {
    if (shouldWarn) {
       true ? warning("\n        Cannot perform action.\n        The sensor no longer has an action lock.\n\n        Tips:\n\n        - Throw away your action handlers when forceStop() is called\n        - Check actions.isActive() if you really need to\n      ") : undefined;
    }

    return false;
  }

  if (expected !== phase) {
    if (shouldWarn) {
       true ? warning("\n        Cannot perform action.\n        The actions you used belong to an outdated phase\n\n        Current phase: " + expected + "\n        You called an action from outdated phase: " + phase + "\n\n        Tips:\n\n        - Do not use preDragActions actions after calling preDragActions.lift()\n      ") : undefined;
    }

    return false;
  }

  return true;
}

function canStart(_ref2) {
  var lockAPI = _ref2.lockAPI,
      store = _ref2.store,
      registry = _ref2.registry,
      draggableId = _ref2.draggableId;

  if (lockAPI.isClaimed()) {
    return false;
  }

  var entry = registry.draggable.findById(draggableId);

  if (!entry) {
     true ? warning("Unable to find draggable with id: " + draggableId) : undefined;
    return false;
  }

  if (!entry.options.isEnabled) {
    return false;
  }

  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }

  return true;
}

function tryStart(_ref3) {
  var lockAPI = _ref3.lockAPI,
      contextId = _ref3.contextId,
      store = _ref3.store,
      registry = _ref3.registry,
      draggableId = _ref3.draggableId,
      forceSensorStop = _ref3.forceSensorStop,
      sourceEvent = _ref3.sourceEvent;
  var shouldStart = canStart({
    lockAPI: lockAPI,
    store: store,
    registry: registry,
    draggableId: draggableId
  });

  if (!shouldStart) {
    return null;
  }

  var entry = registry.draggable.getById(draggableId);
  var el = findDraggable(contextId, entry.descriptor.id);

  if (!el) {
     true ? warning("Unable to find draggable element with id: " + draggableId) : undefined;
    return null;
  }

  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
    return null;
  }

  var lock = lockAPI.claim(forceSensorStop || noop);
  var phase = 'PRE_DRAG';

  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }

  function isLockActive() {
    return lockAPI.isActive(lock);
  }

  function tryDispatch(expected, getAction) {
    if (_isActive({
      expected: expected,
      phase: phase,
      isLockActive: isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }

  var tryDispatchWhenDragging = tryDispatch.bind(this, 'DRAGGING');

  function lift$1(args) {
    function completed() {
      lockAPI.release();
      phase = 'COMPLETED';
    }

    if (phase !== 'PRE_DRAG') {
      completed();
      !(phase === 'PRE_DRAG') ?  true ? invariant(false, "Cannot lift in phase " + phase) : undefined : void 0;
    }

    store.dispatch(lift(args.liftActionArgs));
    phase = 'DRAGGING';

    function finish(reason, options) {
      if (options === void 0) {
        options = {
          shouldBlockNextClick: false
        };
      }

      args.cleanup();

      if (options.shouldBlockNextClick) {
        var unbind = bindEvents(window, [{
          eventName: 'click',
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }

      completed();
      store.dispatch(drop({
        reason: reason
      }));
    }

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      isActive: function isActive() {
        return _isActive({
          expected: 'DRAGGING',
          phase: phase,
          isLockActive: isLockActive,
          shouldWarn: false
        });
      },
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: function drop(options) {
        return finish('DROP', options);
      },
      cancel: function cancel(options) {
        return finish('CANCEL', options);
      }
    }, args.actions);
  }

  function fluidLift(clientSelection) {
    var move$1 = Object(raf_schd__WEBPACK_IMPORTED_MODULE_10__["default"])(function (client) {
      tryDispatchWhenDragging(function () {
        return move({
          client: client
        });
      });
    });
    var api = lift$1({
      liftActionArgs: {
        id: draggableId,
        clientSelection: clientSelection,
        movementMode: 'FLUID'
      },
      cleanup: function cleanup() {
        return move$1.cancel();
      },
      actions: {
        move: move$1
      }
    });
    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, api, {
      move: move$1
    });
  }

  function snapLift() {
    var actions = {
      moveUp: function moveUp$1() {
        return tryDispatchWhenDragging(moveUp);
      },
      moveRight: function moveRight$1() {
        return tryDispatchWhenDragging(moveRight);
      },
      moveDown: function moveDown$1() {
        return tryDispatchWhenDragging(moveDown);
      },
      moveLeft: function moveLeft$1() {
        return tryDispatchWhenDragging(moveLeft);
      }
    };
    return lift$1({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el),
        movementMode: 'SNAP'
      },
      cleanup: noop,
      actions: actions
    });
  }

  function abortPreDrag() {
    var shouldRelease = _isActive({
      expected: 'PRE_DRAG',
      phase: phase,
      isLockActive: isLockActive,
      shouldWarn: true
    });

    if (shouldRelease) {
      lockAPI.release();
    }
  }

  var preDrag = {
    isActive: function isActive() {
      return _isActive({
        expected: 'PRE_DRAG',
        phase: phase,
        isLockActive: isLockActive,
        shouldWarn: false
      });
    },
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift: fluidLift,
    snapLift: snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}

var defaultSensors = [useMouseSensor, useKeyboardSensor, useMouseSensor$1];
function useSensorMarshal(_ref4) {
  var contextId = _ref4.contextId,
      store = _ref4.store,
      registry = _ref4.registry,
      customSensors = _ref4.customSensors,
      enableDefaultSensors = _ref4.enableDefaultSensors;
  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
  var lockAPI = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return create();
  })[0];
  var tryAbandonLock = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function tryAbandonLock(previous, current) {
    if (previous.isDragging && !current.isDragging) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect(function listenToStore() {
    var previous = store.getState();
    var unsubscribe = store.subscribe(function () {
      var current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect(function () {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  var canGetLock = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (draggableId) {
    return canStart({
      lockAPI: lockAPI,
      registry: registry,
      store: store,
      draggableId: draggableId
    });
  }, [lockAPI, registry, store]);
  var tryGetLock = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (draggableId, forceStop, options) {
    return tryStart({
      lockAPI: lockAPI,
      registry: registry,
      contextId: contextId,
      store: store,
      draggableId: draggableId,
      forceSensorStop: forceStop,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    });
  }, [contextId, lockAPI, registry, store]);
  var findClosestDraggableId = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    return tryGetClosestDraggableIdFromEvent(contextId, event);
  }, [contextId]);
  var findOptionsForDraggable = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (id) {
    var entry = registry.draggable.findById(id);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  var tryReleaseLock = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(lockAPI.tryAbandon, [lockAPI]);
  var isLockClaimed = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(lockAPI.isClaimed, [lockAPI]);
  var api = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      canGetLock: canGetLock,
      tryGetLock: tryGetLock,
      findClosestDraggableId: findClosestDraggableId,
      findOptionsForDraggable: findOptionsForDraggable,
      tryReleaseLock: tryReleaseLock,
      isLockClaimed: isLockClaimed
    };
  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  useValidateSensorHooks(useSensors);

  for (var i = 0; i < useSensors.length; i++) {
    useSensors[i](api);
  }
}

var createResponders = function createResponders(props) {
  return {
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};

function getStore(lazyRef) {
  !lazyRef.current ?  true ? invariant(false, 'Could not find store from lazy ref') : undefined : void 0;
  return lazyRef.current;
}

function App(props) {
  var contextId = props.contextId,
      setCallbacks = props.setCallbacks,
      sensors = props.sensors,
      nonce = props.nonce,
      liftInstruction = props.liftInstruction;
  var lazyStoreRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  useStartupValidation();
  var lastPropsRef = usePrevious(props);
  var getResponders = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(contextId);
  var liftInstructionId = useLiftInstruction(contextId, liftInstruction);
  var styleMarshal = useStyleMarshal(contextId, nonce);
  var lazyDispatch = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var marshalCallbacks = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
      publishWhileDragging: publishWhileDragging,
      updateDroppableScroll: updateDroppableScroll,
      updateDroppableIsEnabled: updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
      collectionStarting: collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var registry = useRegistry();
  var dimensionMarshal = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  var autoScroller = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createAutoScroller(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      scrollWindow: scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
      move: move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var focusMarshal = useFocusMarshal(contextId);
  var store = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStore({
      announce: announce,
      autoScroller: autoScroller,
      dimensionMarshal: dimensionMarshal,
      focusMarshal: focusMarshal,
      getResponders: getResponders,
      styleMarshal: styleMarshal
    });
  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);

  if (true) {
    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
       true ? warning('unexpected store change') : undefined;
    }
  }

  lazyStoreRef.current = store;
  var tryResetStore = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var current = getStore(lazyStoreRef);
    var state = current.getState();

    if (state.phase !== 'IDLE') {
      current.dispatch(flush());
    }
  }, []);
  var isDragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var state = getStore(lazyStoreRef).getState();
    return state.isDragging || state.phase === 'DROP_ANIMATING';
  }, []);
  var appCallbacks = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      isDragging: isDragging,
      tryAbort: tryResetStore
    };
  }, [isDragging, tryResetStore]);
  setCallbacks(appCallbacks);
  var getCanLift = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (id) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id);
  }, []);
  var getIsMovementAllowed = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId: contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      liftInstructionId: liftInstructionId,
      registry: registry
    };
  }, [contextId, dimensionMarshal, focusMarshal, getCanLift, getIsMovementAllowed, liftInstructionId, registry]);
  useSensorMarshal({
    contextId: contextId,
    store: store,
    registry: registry,
    customSensors: sensors,
    enableDefaultSensors: props.enableDefaultSensors !== false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return tryResetStore;
  }, [tryResetStore]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppContext.Provider, {
    value: appContext
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    context: StoreContext,
    store: store
  }, props.children));
}

var instanceCount = 0;
function resetServerContext() {
  instanceCount = 0;
}
function DragDropContext(props) {
  var contextId = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return "" + instanceCount++;
  }, []);
  var liftInstruction = props.liftInstruction || preset.liftInstruction;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorBoundary, null, function (setCallbacks) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {
      nonce: props.nonce,
      contextId: contextId,
      setCallbacks: setCallbacks,
      liftInstruction: liftInstruction,
      enableDefaultSensors: props.enableDefaultSensors,
      sensors: props.sensors,
      onBeforeDragStart: props.onBeforeDragStart,
      onDragStart: props.onDragStart,
      onDragUpdate: props.onDragUpdate,
      onDragEnd: props.onDragEnd
    }, props.children);
  });
}

var isEqual$1 = function isEqual(base) {
  return function (value) {
    return base === value;
  };
};

var isScroll = isEqual$1('scroll');
var isAuto = isEqual$1('auto');
var isVisible$1 = isEqual$1('visible');

var isEither = function isEither(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};

var isBoth = function isBoth(overflow, fn) {
  return fn(overflow.overflowX) && fn(overflow.overflowY);
};

var isElementScrollable = function isElementScrollable(el) {
  var style = window.getComputedStyle(el);
  var overflow = {
    overflowX: style.overflowX,
    overflowY: style.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};

var isBodyScrollable = function isBodyScrollable() {
  if (false) {}

  var body = getBodyElement();
  var html = document.documentElement;
  !html ?  true ? invariant(false) : undefined : void 0;

  if (!isElementScrollable(body)) {
    return false;
  }

  var htmlStyle = window.getComputedStyle(html);
  var htmlOverflow = {
    overflowX: htmlStyle.overflowX,
    overflowY: htmlStyle.overflowY
  };

  if (isBoth(htmlOverflow, isVisible$1)) {
    return false;
  }

   true ? warning("\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  ") : undefined;
  return false;
};

var getClosestScrollable = function getClosestScrollable(el) {
  if (el == null) {
    return null;
  }

  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }

  if (el === document.documentElement) {
    return null;
  }

  if (!isElementScrollable(el)) {
    return getClosestScrollable(el.parentElement);
  }

  return el;
};

var checkForNestedScrollContainers = (function (scrollable) {
  if (!scrollable) {
    return;
  }

  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);

  if (!anotherScrollParent) {
    return;
  }

   true ? warning("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ") : undefined;
});

var getScroll$1 = (function (el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
});

var getIsFixed = function getIsFixed(el) {
  if (!el) {
    return false;
  }

  var style = window.getComputedStyle(el);

  if (style.position === 'fixed') {
    return true;
  }

  return getIsFixed(el.parentElement);
};

var getEnv = (function (start) {
  var closestScrollable = getClosestScrollable(start);
  var isFixedOnPage = getIsFixed(start);
  return {
    closestScrollable: closestScrollable,
    isFixedOnPage: isFixedOnPage
  };
});

var getDroppableDimension = (function (_ref) {
  var descriptor = _ref.descriptor,
      isEnabled = _ref.isEnabled,
      isCombineEnabled = _ref.isCombineEnabled,
      isFixedOnPage = _ref.isFixedOnPage,
      direction = _ref.direction,
      client = _ref.client,
      page = _ref.page,
      closest = _ref.closest;

  var frame = function () {
    if (!closest) {
      return null;
    }

    var scrollSize = closest.scrollSize,
        frameClient = closest.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest.page.marginBox,
      frameClient: frameClient,
      scrollSize: scrollSize,
      shouldClipSubject: closest.shouldClipSubject,
      scroll: {
        initial: closest.scroll,
        current: closest.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();

  var axis = direction === 'vertical' ? vertical : horizontal;
  var subject = getSubject({
    page: page,
    withPlaceholder: null,
    axis: axis,
    frame: frame
  });
  var dimension = {
    descriptor: descriptor,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: isFixedOnPage,
    axis: axis,
    isEnabled: isEnabled,
    client: client,
    page: page,
    frame: frame,
    subject: subject
  };
  return dimension;
});

var getClient = function getClient(targetRef, closestScrollable) {
  var base = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getBox"])(targetRef);

  if (!closestScrollable) {
    return base;
  }

  if (targetRef !== closestScrollable) {
    return base;
  }

  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
  var borderBox = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["expand"])(paddingBox, base.border);
  var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["createBox"])({
    borderBox: borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};

var getDimension = (function (_ref) {
  var ref = _ref.ref,
      descriptor = _ref.descriptor,
      env = _ref.env,
      windowScroll = _ref.windowScroll,
      direction = _ref.direction,
      isDropDisabled = _ref.isDropDisabled,
      isCombineEnabled = _ref.isCombineEnabled,
      shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client = getClient(ref, closestScrollable);
  var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(client, windowScroll);

  var closest = function () {
    if (!closestScrollable) {
      return null;
    }

    var frameClient = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getBox"])(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize: scrollSize,
      shouldClipSubject: shouldClipSubject
    };
  }();

  var dimension = getDroppableDimension({
    descriptor: descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction: direction,
    client: client,
    page: page,
    closest: closest
  });
  return dimension;
});

var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = (function (options) {
  return options.shouldPublishImmediately ? immediate : delayed;
});

function useRequiredContext(Context) {
  var result = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Context);
  !result ?  true ? invariant(false, 'Could not find required context') : undefined : void 0;
  return result;
}

var count = 0;
function useUniqueId(prefix) {
  var countRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(count++);
  return prefix + "::" + countRef.current;
}

var getClosestScrollableFromDrag = function getClosestScrollableFromDrag(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};

function useDroppablePublisher(args) {
  var whileDraggingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var appContext = useRequiredContext(AppContext);
  var uniqueId = useUniqueId('droppable');
  var registry = appContext.registry,
      marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    };
  }, [args.droppableId, args.mode, args.type]);
  var publishedDescriptorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(descriptor);
  var memoizedUpdateScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (x, y) {
      !whileDraggingRef.current ?  true ? invariant(false, 'Can only update scroll when dragging') : undefined : void 0;
      var scroll = {
        x: x,
        y: y
      };
      marshal.updateDroppableScroll(descriptor.id, scroll);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;

    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }

    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var scroll = getClosestScroll();
    memoizedUpdateScroll(scroll.x, scroll.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(raf_schd__WEBPACK_IMPORTED_MODULE_10__["default"])(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? invariant(false, 'Could not find scroll options while scrolling') : undefined : void 0;
    var options = dragging.scrollOptions;

    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }

    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (windowScroll, options) {
    !!whileDraggingRef.current ?  true ? invariant(false, 'Cannot collect a droppable while a drag is occurring') : undefined : void 0;
    var previous = previousRef.current;
    var ref = previous.getDroppableRef();
    !ref ?  true ? invariant(false, 'Cannot collect without a droppable ref') : undefined : void 0;
    var env = getEnv(ref);
    var dragging = {
      ref: ref,
      descriptor: descriptor,
      env: env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref: ref,
      descriptor: descriptor,
      env: env,
      windowScroll: windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    var scrollable = env.closestScrollable;

    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));

      if (true) {
        checkForNestedScrollContainers(scrollable);
      }
    }

    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  var getScrollWhileDragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? invariant(false, 'Can only recollect Droppable client for Droppables that have a scroll container') : undefined : void 0;
    return getScroll$1(closest);
  }, []);
  var dragStopped = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? invariant(false, 'Cannot stop drag when no active drag') : undefined : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;

    if (!closest) {
      return;
    }

    scheduleScrollUpdate.cancel();
    closest.removeAttribute(scrollContainer.contextId);
    closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (change) {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? invariant(false, 'Cannot scroll when there is no drag') : undefined : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    !closest ?  true ? invariant(false, 'Cannot scroll a droppable with no closest scrollable') : undefined : void 0;
    closest.scrollTop += change.y;
    closest.scrollLeft += change.x;
  }, []);
  var callbacks = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      getDimensionAndWatchScroll: getDimensionAndWatchScroll,
      getScrollWhileDragging: getScrollWhileDragging,
      dragStopped: dragStopped,
      scroll: scroll
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll]);
  var entry = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      uniqueId: uniqueId,
      descriptor: descriptor,
      callbacks: callbacks
    };
  }, [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect(function () {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return function () {
      if (whileDraggingRef.current) {
         true ? warning('Unsupported: changing the droppableId or type of a Droppable during a drag') : undefined;
        dragStopped();
      }

      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}

function noop$2() {}

var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};

var getSize = function getSize(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount,
      placeholder = _ref.placeholder,
      animate = _ref.animate;

  if (isAnimatingOpenOnMount) {
    return empty;
  }

  if (animate === 'close') {
    return empty;
  }

  return {
    height: placeholder.client.borderBox.height,
    width: placeholder.client.borderBox.width,
    margin: placeholder.client.margin
  };
};

var getStyle = function getStyle(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount,
      placeholder = _ref2.placeholder,
      animate = _ref2.animate;
  var size = getSize({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    placeholder: placeholder,
    animate: animate
  });
  return {
    display: placeholder.display,
    boxSizing: 'border-box',
    width: size.width,
    height: size.height,
    marginTop: size.margin.top,
    marginRight: size.margin.right,
    marginBottom: size.margin.bottom,
    marginLeft: size.margin.left,
    flexShrink: '0',
    flexGrow: '0',
    pointerEvents: 'none',
    transition: animate !== 'none' ? transitions.placeholder : null
  };
};

function Placeholder(props) {
  var animateOpenTimerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var tryClearAnimateOpenTimer = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!animateOpenTimerRef.current) {
      return;
    }

    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate,
      onTransitionEnd = props.onTransitionEnd,
      onClose = props.onClose,
      contextId = props.contextId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.animate === 'open'),
      isAnimatingOpenOnMount = _useState[0],
      setIsAnimatingOpenOnMount = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isAnimatingOpenOnMount) {
      return noop$2;
    }

    if (animate !== 'open') {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop$2;
    }

    if (animateOpenTimerRef.current) {
      return noop$2;
    }

    animateOpenTimerRef.current = setTimeout(function () {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    if (event.propertyName !== 'height') {
      return;
    }

    onTransitionEnd();

    if (animate === 'close') {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style = getStyle({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.placeholder.tagName, {
    style: style,
    'data-rbd-placeholder-context-id': contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}

var Placeholder$1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Placeholder);

var DroppableContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

function checkIsValidInnerRef(el) {
  !(el && isHtmlElement(el)) ?  true ? invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : undefined : void 0;
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function runChecks(args, checks) {
  checks.forEach(function (check) {
    return check(args);
  });
}

var shared = [function required(_ref) {
  var props = _ref.props;
  !props.droppableId ?  true ? invariant(false, 'A Droppable requires a droppableId prop') : undefined : void 0;
  !(typeof props.droppableId === 'string') ?  true ? invariant(false, "A Droppable requires a [string] droppableId. Provided: [" + typeof props.droppableId + "]") : undefined : void 0;
}, function _boolean(_ref2) {
  var props = _ref2.props;
  !isBoolean(props.isDropDisabled) ?  true ? invariant(false, 'isDropDisabled must be a boolean') : undefined : void 0;
  !isBoolean(props.isCombineEnabled) ?  true ? invariant(false, 'isCombineEnabled must be a boolean') : undefined : void 0;
  !isBoolean(props.ignoreContainerClipping) ?  true ? invariant(false, 'ignoreContainerClipping must be a boolean') : undefined : void 0;
}, function ref(_ref3) {
  var getDroppableRef = _ref3.getDroppableRef;
  checkIsValidInnerRef(getDroppableRef());
}];
var standard = [function placeholder(_ref4) {
  var props = _ref4.props,
      getPlaceholderRef = _ref4.getPlaceholderRef;

  if (!props.placeholder) {
    return;
  }

  var ref = getPlaceholderRef();

  if (ref) {
    return;
  }

   true ? warning("\n      Droppable setup issue [droppableId: \"" + props.droppableId + "\"]:\n      DroppableProvided > placeholder could not be found.\n\n      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n    ") : undefined;
}];
var virtual = [function hasClone(_ref5) {
  var props = _ref5.props;
  !props.renderClone ?  true ? invariant(false, 'Must provide a clone render function (renderClone) for virtual lists') : undefined : void 0;
}, function hasNoPlaceholder(_ref6) {
  var getPlaceholderRef = _ref6.getPlaceholderRef;
  !!getPlaceholderRef() ?  true ? invariant(false, 'Expected virtual list to not have a placeholder') : undefined : void 0;
}];
function useValidation(args) {
  useDevSetupWarning(function () {
    runChecks(args, shared);

    if (args.props.mode === 'standard') {
      runChecks(args, standard);
    }

    if (args.props.mode === 'virtual') {
      runChecks(args, virtual);
    }
  });
}

var AnimateInOut = function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(AnimateInOut, _React$PureComponent);

  function AnimateInOut() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? 'open' : 'none'
    };

    _this.onClose = function () {
      if (_this.state.animate !== 'close') {
        return;
      }

      _this.setState({
        isVisible: false
      });
    };

    return _this;
  }

  AnimateInOut.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: 'none'
      };
    }

    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: 'open'
      };
    }

    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: 'close'
      };
    }

    return {
      isVisible: false,
      animate: 'close',
      data: null
    };
  };

  var _proto = AnimateInOut.prototype;

  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }

    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };

  return AnimateInOut;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var zIndexOptions = {
  dragging: 5000,
  dropAnimating: 4500
};

var getDraggingTransition = function getDraggingTransition(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }

  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }

  return transitions.fluid;
};

var getDraggingOpacity = function getDraggingOpacity(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }

  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};

var getShouldDraggingAnimate = function getShouldDraggingAnimate(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }

  return dragging.mode === 'SNAP';
};

function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset = dragging.offset,
      combineWith = dragging.combineWith,
      dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
  var style = {
    position: 'fixed',
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: 'border-box',
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform: transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: 'none'
  };
  return style;
}

function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : 'none'
  };
}

function getStyle$1(mapped) {
  return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}

function getDimension$1(descriptor, el, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }

  var computedStyles = window.getComputedStyle(el);
  var borderBox = el.getBoundingClientRect();
  var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["calculateBox"])(borderBox, computedStyles);
  var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(client, windowScroll);
  var placeholder = {
    client: client,
    tagName: el.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client.marginBox.width,
    y: client.marginBox.height
  };
  var dimension = {
    descriptor: descriptor,
    placeholder: placeholder,
    displaceBy: displaceBy,
    client: client,
    page: page
  };
  return dimension;
}

function useDraggablePublisher(args) {
  var uniqueId = useUniqueId('draggable');
  var descriptor = args.descriptor,
      registry = args.registry,
      getDraggableRef = args.getDraggableRef,
      canDragInteractiveElements = args.canDragInteractiveElements,
      shouldRespectForcePress = args.shouldRespectForcePress,
      isEnabled = args.isEnabled;
  var options = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      canDragInteractiveElements: canDragInteractiveElements,
      shouldRespectForcePress: shouldRespectForcePress,
      isEnabled: isEnabled
    };
  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  var getDimension = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (windowScroll) {
    var el = getDraggableRef();
    !el ?  true ? invariant(false, 'Cannot get dimension when no ref is set') : undefined : void 0;
    return getDimension$1(descriptor, el, windowScroll);
  }, [descriptor, getDraggableRef]);
  var entry = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      uniqueId: uniqueId,
      descriptor: descriptor,
      options: options,
      getDimension: getDimension
    };
  }, [descriptor, getDimension, options, uniqueId]);
  var publishedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(entry);
  var isFirstPublishRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  useIsomorphicLayoutEffect(function () {
    registry.draggable.register(publishedRef.current);
    return function () {
      return registry.draggable.unregister(publishedRef.current);
    };
  }, [registry.draggable]);
  useIsomorphicLayoutEffect(function () {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }

    var last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}

function useValidation$1(props, contextId, getRef) {
  useDevSetupWarning(function () {
    function prefix(id) {
      return "Draggable[id: " + id + "]: ";
    }

    var id = props.draggableId;
    !id ?  true ? invariant(false, 'Draggable requires a draggableId') : undefined : void 0;
    !(typeof id === 'string') ?  true ? invariant(false, "Draggable requires a [string] draggableId.\n      Provided: [type: " + typeof id + "] (value: " + id + ")") : undefined : void 0;
    !_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14___default()(props.index) ?  true ? invariant(false, prefix(id) + " requires an integer index prop") : undefined : void 0;

    if (props.mapped.type === 'DRAGGING') {
      return;
    }

    checkIsValidInnerRef(getRef());

    if (props.isEnabled) {
      !findDragHandle(contextId, id) ?  true ? invariant(false, prefix(id) + " Unable to find drag handle") : undefined : void 0;
    }
  });
}
function useClonePropValidation(isClone) {
  useDev(function () {
    var initialRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isClone);
    useDevSetupWarning(function () {
      !(isClone === initialRef.current) ?  true ? invariant(false, 'Draggable isClone prop value changed during component life') : undefined : void 0;
    }, [isClone]);
  });
}

function preventHtml5Dnd(event) {
  event.preventDefault();
}

function Draggable(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var setRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (el) {
    ref.current = el;
  }, []);
  var getRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return ref.current;
  }, []);

  var _useRequiredContext = useRequiredContext(AppContext),
      contextId = _useRequiredContext.contextId,
      liftInstructionId = _useRequiredContext.liftInstructionId,
      registry = _useRequiredContext.registry;

  var _useRequiredContext2 = useRequiredContext(DroppableContext),
      type = _useRequiredContext2.type,
      droppableId = _useRequiredContext2.droppableId;

  var descriptor = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      id: props.draggableId,
      index: props.index,
      type: type,
      droppableId: droppableId
    };
  }, [props.draggableId, props.index, type, droppableId]);
  var children = props.children,
      draggableId = props.draggableId,
      isEnabled = props.isEnabled,
      shouldRespectForcePress = props.shouldRespectForcePress,
      canDragInteractiveElements = props.canDragInteractiveElements,
      isClone = props.isClone,
      mapped = props.mapped,
      dropAnimationFinishedAction = props.dropAnimationFinished;
  useValidation$1(props, contextId, getRef);
  useClonePropValidation(isClone);

  if (!isClone) {
    var forPublisher = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
      return {
        descriptor: descriptor,
        registry: registry,
        getDraggableRef: getRef,
        canDragInteractiveElements: canDragInteractiveElements,
        shouldRespectForcePress: shouldRespectForcePress,
        isEnabled: isEnabled
      };
    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }

  var dragHandleProps = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return isEnabled ? {
      tabIndex: 0,
      'data-rbd-drag-handle-draggable-id': draggableId,
      'data-rbd-drag-handle-context-id': contextId,
      'aria-labelledby': liftInstructionId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null;
  }, [contextId, draggableId, isEnabled, liftInstructionId]);
  var onMoveEnd = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    if (mapped.type !== 'DRAGGING') {
      return;
    }

    if (!mapped.dropping) {
      return;
    }

    if (event.propertyName !== 'transform') {
      return;
    }

    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var style = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        'data-rbd-draggable-context-id': contextId,
        'data-rbd-draggable-id': draggableId,
        style: style,
        onTransitionEnd: onTransitionEnd
      },
      dragHandleProps: dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  var rubric = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return children(provided, mapped.snapshot, rubric);
}

var isStrictEqual = (function (a, b) {
  return a === b;
});

var whatIsDraggedOverFromResult = (function (result) {
  var combine = result.combine,
      destination = result.destination;

  if (destination) {
    return destination.droppableId;
  }

  if (combine) {
    return combine.droppableId;
  }

  return null;
});

var getCombineWithFromResult = function getCombineWithFromResult(result) {
  return result.combine ? result.combine.draggableId : null;
};

var getCombineWithFromImpact = function getCombineWithFromImpact(impact) {
  return impact.at && impact.at.type === 'COMBINE' ? impact.at.combine.draggableId : null;
};

function getDraggableSelector() {
  var memoizedOffset = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getMemoizedSnapshot = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (mode, isClone, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isClone: isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode: mode,
      draggingOver: draggingOver,
      combineWith: combineWith,
      combineTargetFor: null
    };
  });
  var getMemoizedProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (offset, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: 'DRAGGING',
        dropping: null,
        draggingOver: draggingOver,
        combineWith: combineWith,
        mode: mode,
        offset: offset,
        dimension: dimension,
        forceShouldAnimate: forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    };
  });

  var selector = function selector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }

      var offset = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset.x, offset.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }

      var isClone = ownProps.isClone;
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var mode = result.mode;

      var _draggingOver = whatIsDraggedOverFromResult(result);

      var _combineWith = getCombineWithFromResult(result);

      var duration = state.dropDuration;
      var dropping = {
        duration: duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: 'DRAGGING',
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping: dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode: mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
        }
      };
    }

    return null;
  };

  return selector;
}

function getSecondarySnapshot(combineTargetFor) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: combineTargetFor,
    combineWith: null
  };
}

var atRest = {
  mapped: {
    type: 'SECONDARY',
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};

function getSecondarySelector() {
  var memoizedOffset = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getMemoizedSnapshot = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(getSecondarySnapshot);
  var getMemoizedProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (offset, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }

    return {
      mapped: {
        type: 'SECONDARY',
        offset: offset,
        combineTargetFor: combineTargetFor,
        shouldAnimateDisplacement: shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    };
  });

  var getFallback = function getFallback(combineTargetFor) {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };

  var getProps = function getProps(ownId, draggingId, impact, afterCritical) {
    var visualDisplacement = impact.displaced.visible[ownId];
    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    var combine = tryGetCombine(impact);
    var combineTargetFor = combine && combine.draggableId === ownId ? draggingId : null;

    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }

      if (impact.displaced.invisible[ownId]) {
        return null;
      }

      var change = negate(afterCritical.displacedBy.point);

      var _offset = memoizedOffset(change.x, change.y);

      return getMemoizedProps(_offset, combineTargetFor, true);
    }

    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }

    var displaceBy = impact.displacedBy.point;
    var offset = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset, combineTargetFor, visualDisplacement.shouldAnimate);
  };

  var selector = function selector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }

      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }

      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }

    return null;
  };

  return selector;
}

var makeMapStateToProps = function makeMapStateToProps() {
  var draggingSelector = getDraggableSelector();
  var secondarySelector = getSecondarySelector();

  var selector = function selector(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  };

  return selector;
};
var mapDispatchToProps = {
  dropAnimationFinished: dropAnimationFinished
};
var ConnectedDraggable = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);

function PrivateDraggable(props) {
  var droppableContext = useRequiredContext(DroppableContext);
  var isUsingCloneFor = droppableContext.isUsingCloneFor;

  if (isUsingCloneFor === props.draggableId && !props.isClone) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
  var isEnabled = typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
  var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
  var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateDraggable, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
    isClone: false,
    isEnabled: isEnabled,
    canDragInteractiveElements: canDragInteractiveElements,
    shouldRespectForcePress: shouldRespectForcePress
  }));
}

function Droppable(props) {
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AppContext);
  !appContext ?  true ? invariant(false, 'Could not find app context') : undefined : void 0;
  var contextId = appContext.contextId,
      isMovementAllowed = appContext.isMovementAllowed;
  var droppableRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var placeholderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var children = props.children,
      droppableId = props.droppableId,
      type = props.type,
      mode = props.mode,
      direction = props.direction,
      ignoreContainerClipping = props.ignoreContainerClipping,
      isDropDisabled = props.isDropDisabled,
      isCombineEnabled = props.isCombineEnabled,
      snapshot = props.snapshot,
      useClone = props.useClone,
      updateViewportMaxScroll = props.updateViewportMaxScroll,
      getContainerForClone = props.getContainerForClone;
  var getDroppableRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return droppableRef.current;
  }, []);
  var setDroppableRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    droppableRef.current = value;
  }, []);
  var getPlaceholderRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return placeholderRef.current;
  }, []);
  var setPlaceholderRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    placeholderRef.current = value;
  }, []);
  useValidation({
    props: props,
    getDroppableRef: getDroppableRef,
    getPlaceholderRef: getPlaceholderRef
  });
  var onPlaceholderTransitionEnd = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (isMovementAllowed()) {
      updateViewportMaxScroll({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed, updateViewportMaxScroll]);
  useDroppablePublisher({
    droppableId: droppableId,
    type: type,
    mode: mode,
    direction: direction,
    isDropDisabled: isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    ignoreContainerClipping: ignoreContainerClipping,
    getDroppableRef: getDroppableRef
  });
  var placeholder = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function (_ref) {
    var onClose = _ref.onClose,
        data = _ref.data,
        animate = _ref.animate;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder$1, {
      placeholder: data,
      onClose: onClose,
      innerRef: setPlaceholderRef,
      animate: animate,
      contextId: contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      innerRef: setDroppableRef,
      placeholder: placeholder,
      droppableProps: {
        'data-rbd-droppable-id': droppableId,
        'data-rbd-droppable-context-id': contextId
      }
    };
  }, [contextId, droppableId, placeholder, setDroppableRef]);
  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  var droppableContext = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      droppableId: droppableId,
      type: type,
      isUsingCloneFor: isUsingCloneFor
    };
  }, [droppableId, isUsingCloneFor, type]);

  function getClone() {
    if (!useClone) {
      return null;
    }

    var dragging = useClone.dragging,
        render = useClone.render;
    var node = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function (draggableProvided, draggableSnapshot) {
      return render(draggableProvided, draggableSnapshot, dragging);
    });
    return react_dom__WEBPACK_IMPORTED_MODULE_13___default.a.createPortal(node, getContainerForClone());
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
}

var isMatchingType = function isMatchingType(type, critical) {
  return type === critical.droppable.type;
};

var getDraggable = function getDraggable(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};

var makeMapStateToProps$1 = function makeMapStateToProps() {
  var idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };

  var idleWithoutAnimation = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, idleWithAnimation, {
    shouldAnimatePlaceholder: false
  });

  var getDraggableRubric = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (descriptor) {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  });
  var getMapProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id;

    if (isHome) {
      var useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      var _snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: _snapshot,
        useClone: useClone
      };
    }

    if (!isEnabled) {
      return idleWithoutAnimation;
    }

    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }

    var snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot: snapshot,
      useClone: null
    };
  });

  var selector = function selector(state, ownProps) {
    var id = ownProps.droppableId;
    var type = ownProps.type;
    var isEnabled = !ownProps.isDropDisabled;
    var renderClone = ownProps.renderClone;

    if (state.isDragging) {
      var critical = state.critical;

      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }

      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
      return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }

      var _dragging = getDraggable(completed.critical, state.dimensions);

      return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, _dragging, renderClone);
    }

    if (state.phase === 'IDLE' && state.completed && !state.shouldFlush) {
      var _completed = state.completed;

      if (!isMatchingType(type, _completed.critical)) {
        return idleWithoutAnimation;
      }

      var wasOver = whatIsDraggedOver(_completed.impact) === id;
      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === 'COMBINE');
      var isHome = _completed.critical.droppable.id === id;

      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }

      if (isHome) {
        return idleWithAnimation;
      }

      return idleWithoutAnimation;
    }

    return idleWithoutAnimation;
  };

  return selector;
};
var mapDispatchToProps$1 = {
  updateViewportMaxScroll: updateViewportMaxScroll
};

function getBody() {
  !document.body ?  true ? invariant(false, 'document.body is not ready') : undefined : void 0;
  return document.body;
}

var defaultProps = {
  mode: 'standard',
  type: 'DEFAULT',
  direction: 'vertical',
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
var ConnectedDroppable = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-integer */ "./node_modules/core-js/library/fn/number/is-integer.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/react-beautiful-dnd/node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/use-memo-one/dist/use-memo-one.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/use-memo-one/dist/use-memo-one.esm.js ***!
  \************************************************************/
/*! exports provided: useCallback, useCallbackOne, useMemo, useMemoOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackOne", function() { return useCallbackOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemoOne", function() { return useMemoOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var committed = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initial);
  var isInputMatch = Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = isInputMatch ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;




/***/ }),

/***/ "./src/components/inputscreen-components/simulator/simulator.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/inputscreen-components/simulator/simulator.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _simulatorComponents_headline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./simulatorComponents/headline */ "./src/components/inputscreen-components/simulator/simulatorComponents/headline.tsx");
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions/dataActions */ "./src/redux/actions/dataActions.ts");









var _jsxFileName = "/home/christian/Development/fible-frontend-nextjs/src/components/inputscreen-components/simulator/simulator.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;







var Simulator =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Simulator, _React$Component);

  function Simulator() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Simulator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Simulator)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentCreator", function () {
      return _this.props.dataState[_this.props.uiState.simulator.show][_this.props.dataState.selectedHtypeId] != undefined ? _this.props.dataState[_this.props.uiState.simulator.show][_this.props.dataState.selectedHtypeId].order.map(function (id, index) {
        var component = _this.props.dataState[_this.props.uiState.simulator.show][_this.props.dataState.selectedHtypeId].components[id];

        switch (component.type) {
          case "HEADLINE":
            {
              return __jsx(_simulatorComponents_headline__WEBPACK_IMPORTED_MODULE_13__["default"], {
                key: component.id,
                component: component,
                index: index,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                },
                __self: this
              });
            }

          default:
            return __jsx("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            });
        }
      }) : [1].map(function (index) {
        return __jsx("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onDragEnd", function (result) {
      var destination = result.destination,
          source = result.source,
          draggableId = result.draggableId;

      if (!destination) {
        return;
      }

      if (destination.droppableId == source.droppableId && destination.index == source.index) {
        return;
      }

      var newOrder = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(_this.props.dataState[_this.props.uiState.simulator.show][_this.props.dataState.selectedHtypeId].order);

      var htype = _this.props.uiState.simulator.show;
      var htypeId = _this.props.dataState.selectedHtypeId; // const columnId = source.droppableId;
      //const column = this.props.uiState.columns[source.droppableId]
      //const newOrder = Array.from(column.ids);

      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, draggableId);
      console.log(newOrder);

      _this.props.updateComponentsOrder({
        newOrder: newOrder,
        htype: htype,
        htypeId: htypeId
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Simulator, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(BackgroundWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["DragDropContext"], {
        onDragEnd: this.onDragEnd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_12__["Droppable"], {
        droppableId: "simulator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, function (provided) {
        return __jsx(FilledSimulator, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: provided.innerRef
        }, provided.droppableProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }), _this2.componentCreator(), provided.placeholder);
      })));
    }
  }]);

  return Simulator;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    uiState: state.ui,
    dataState: state.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, {
  updateComponentsOrder: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_14__["updateComponentsOrder"]
})(Simulator));
/*
function Simulator() {
    return (
        <BackgroundWrapper>
            <ForegroundWrapper>
              <Image src="mountains.png"></Image>
            </ForegroundWrapper>
        </BackgroundWrapper>
    )
}

export default Simulator
*/

var BackgroundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "simulator__BackgroundWrapper",
  componentId: "sc-19oy64e-0"
})(["width:50vw;height:100vh;display:flex;background:white;align-content:center;justify-content:center;"]);
var FilledSimulator = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "simulator__FilledSimulator",
  componentId: "sc-19oy64e-1"
})(["width:40vh;height:84vh;align-self:center;display:flex;border-style:solid;border-radius:1.5em;border-color:lightgrey;border-width:0.05em;flex-direction:column;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  displayName: "simulator__Image",
  componentId: "sc-19oy64e-2"
})(["border-radius:1.5em;max-width:100%;max-height:30%;height:auto;width:auto;display:block;object-fit:cover;overflow:hidden;"]);

/***/ }),

/***/ "./src/components/inputscreen-components/simulator/simulatorComponents/headline.tsx":
/*!******************************************************************************************!*\
  !*** ./src/components/inputscreen-components/simulator/simulatorComponents/headline.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions/uiActions */ "./src/redux/actions/uiActions.ts");
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../redux/actions/dataActions */ "./src/redux/actions/dataActions.ts");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "/home/christian/Development/fible-frontend-nextjs/src/components/inputscreen-components/simulator/simulatorComponents/headline.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;









var Headline =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Headline, _React$Component);

  function Headline() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Headline);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Headline)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSelection", function () {
      var selectedComponentId = _this.props.component.id;

      if (_this.props.component.id != _this.props.uiState.simulator.selected) {
        _this.props.updateSimulatorSelection({
          selectedComponentId: selectedComponentId
        });

        _this.props.setSelectedComponent({
          selectedComponentId: selectedComponentId
        });

        _this.props.updateInputScreenUi("HEADLINE_INPUT");
      } else {
        selectedComponentId = "empty";

        _this.props.updateSimulatorSelection({
          selectedComponentId: selectedComponentId
        });

        _this.props.setSelectedComponent({
          selectedComponentId: selectedComponentId
        });

        _this.props.updateInputScreenUi("MENU");
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleHeadline", function (e) {
      var type = _this.props.uiState.menu.htype;
      var headline = e.target.value;
      var selectedHtypeId = _this.props.dataState.selectedHtypeId;
      var selectedComponentId = _this.props.dataState.selectedComponentId;
      var dispatch = "UPDATE_HEADLINE";

      _this.props.addOrUpdateHeadline({
        type: type,
        headline: headline,
        selectedHtypeId: selectedHtypeId,
        dispatch: dispatch,
        selectedComponentId: selectedComponentId
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Headline, [{
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      e.target.style.height = 'inherit';
      e.target.style.height = "".concat(e.target.scrollHeight, "px"); // In case you have a limitation
      // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__["Draggable"], {
        draggableId: this.props.component.id,
        index: this.props.index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, function (provided) {
        return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: _this2.props.component.id
        }, provided.draggableProps, provided.dragHandleProps, {
          ref: provided.innerRef,
          onClick: _this2.handleSelection,
          datatype: _this2.props.component.id == _this2.props.uiState.simulator.selected ? "-0.2vh" : "0",
          property: _this2.props.component.id == _this2.props.uiState.simulator.selected ? "dashed" : "none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), __jsx(HeadlineText, {
          value: _this2.props.component.headline,
          onChange: function onChange(e) {
            return _this2.handleHeadline(e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }));
      });
    }
  }]);

  return Headline;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    uiState: state.ui,
    dataState: state.data
  };
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "headline__Container",
  componentId: "sc-19yc47e-0"
})(["height:auto;width:98%;outline:0px solid transparent;word-wrap:break-word;padding:1%;border:", " 0.2vh;margin:", ";border-radius:2.5vh;display:flex;align-content:center;"], function (props) {
  return props.property;
}, function (props) {
  return props.datatype;
});
var HeadlineText = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_14___default.a).withConfig({
  displayName: "headline__HeadlineText",
  componentId: "sc-19yc47e-1"
})(["font-weight:lighter;position:relative;user-select:none;left:2%;height:94%;width:96%;font-size:3vh;margin:0.1vh;padding:0.5vh;text-align:center;resize:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;align-self:center;border:0;display:flex;:focus{outline:none;caret-color:salmon;}"]);
var HeadlineText2 = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].textarea.withConfig({
  displayName: "headline__HeadlineText2",
  componentId: "sc-19yc47e-2"
})(["font-weight:lighter;height:94%;width:90%;font-size:3vh;margin:0;padding:0.5vh;text-align:center;resize:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;align-self:center;border:0;display:flex;:focus{outline:none;caret-color:salmon;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, {
  updateSimulatorSelection: _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_12__["updateSimulatorSelection"],
  setSelectedComponent: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_13__["setSelectedComponent"],
  updateInputScreenUi: _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_12__["updateInputScreenUi"],
  addOrUpdateHeadline: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_13__["addOrUpdateHeadline"]
})(Headline));

/***/ })

}]);
//# sourceMappingURL=1.js.map
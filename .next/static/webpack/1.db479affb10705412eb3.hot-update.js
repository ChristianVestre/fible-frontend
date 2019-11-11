webpackHotUpdate(1,{

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
})(["height:auto;width:98%;outline:0px solid transparent;word-wrap:break-word;padding:1%;border:", " 0.2vh;margin:", ";border-radius:2.5vh;"], function (props) {
  return props.property;
}, function (props) {
  return props.datatype;
});
var HeadlineText = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_14___default.a).withConfig({
  displayName: "headline__HeadlineText",
  componentId: "sc-19yc47e-1"
})(["font-weight:lighter;height:94%;width:90%;font-size:3vh;margin:0;padding:1vh;text-align:center;resize:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;align-self:center;border:0;display:flex;:focus{outline:none;caret-color:salmon;}"]);
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

})
//# sourceMappingURL=1.db479affb10705412eb3.hot-update.js.map
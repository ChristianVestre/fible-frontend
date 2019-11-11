exports.ids = [0];
exports.modules = {

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _simulatorComponents_headline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./simulatorComponents/headline */ "./src/components/inputscreen-components/simulator/simulatorComponents/headline.tsx");
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/actions/dataActions */ "./src/redux/actions/dataActions.ts");



var _jsxFileName = "/home/christian/Development/fible-frontend-nextjs/src/components/inputscreen-components/simulator/simulator.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







class Simulator extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "componentCreator", () => {
      return this.props.dataState[this.props.uiState.simulator.show][this.props.dataState.selectedHtypeId] != undefined ? this.props.dataState[this.props.uiState.simulator.show][this.props.dataState.selectedHtypeId].order.map((id, index) => {
        let component = this.props.dataState[this.props.uiState.simulator.show][this.props.dataState.selectedHtypeId].components[id];

        switch (component.type) {
          case "HEADLINE":
            {
              return __jsx(_simulatorComponents_headline__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      }) : [1].map(index => __jsx("div", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onDragEnd", result => {
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

      const newOrder = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(this.props.dataState[this.props.uiState.simulator.show][this.props.dataState.selectedHtypeId].order);

      const htype = this.props.uiState.simulator.show;
      const htypeId = this.props.dataState.selectedHtypeId; // const columnId = source.droppableId;
      //const column = this.props.uiState.columns[source.droppableId]
      //const newOrder = Array.from(column.ids);

      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, draggableId);
      console.log(newOrder);
      this.props.updateComponentsOrder({
        newOrder,
        htype,
        htypeId
      });
    });
  }

  render() {
    return __jsx(BackgroundWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__["DragDropContext"], {
      onDragEnd: this.onDragEnd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__["Droppable"], {
      droppableId: "simulator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, provided => __jsx(FilledSimulator, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: provided.innerRef
    }, provided.droppableProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), this.componentCreator(), provided.placeholder))));
  }

}

const mapStateToProps = state => {
  return {
    uiState: state.ui,
    dataState: state.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  updateComponentsOrder: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_8__["updateComponentsOrder"]
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

const BackgroundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "simulator__BackgroundWrapper",
  componentId: "sc-19oy64e-0"
})(["width:50vw;height:100vh;display:flex;background:white;align-content:center;justify-content:center;"]);
const FilledSimulator = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "simulator__FilledSimulator",
  componentId: "sc-19oy64e-1"
})(["width:40vh;height:84vh;align-self:center;display:flex;border-style:solid;border-radius:1.5em;border-color:lightgrey;border-width:0.05em;flex-direction:column;"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.withConfig({
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../redux/actions/uiActions */ "./src/redux/actions/uiActions.ts");
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../redux/actions/dataActions */ "./src/redux/actions/dataActions.ts");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-autosize-textarea */ "react-autosize-textarea");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/home/christian/Development/fible-frontend-nextjs/src/components/inputscreen-components/simulator/simulatorComponents/headline.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









class Headline extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleSelection", () => {
      let selectedComponentId = this.props.component.id;

      if (this.props.component.id != this.props.uiState.simulator.selected) {
        this.props.updateSimulatorSelection({
          selectedComponentId
        });
        this.props.setSelectedComponent({
          selectedComponentId
        });
        this.props.updateInputScreenUi("HEADLINE_INPUT");
      } else {
        selectedComponentId = "empty";
        this.props.updateSimulatorSelection({
          selectedComponentId
        });
        this.props.setSelectedComponent({
          selectedComponentId
        });
        this.props.updateInputScreenUi("MENU");
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleHeadline", e => {
      const type = this.props.uiState.menu.htype;
      const headline = e.target.value;
      const selectedHtypeId = this.props.dataState.selectedHtypeId;
      const selectedComponentId = this.props.dataState.selectedComponentId;
      const dispatch = "UPDATE_HEADLINE";
      this.props.addOrUpdateHeadline({
        type,
        headline,
        selectedHtypeId,
        dispatch,
        selectedComponentId
      });
    });
  }

  handleKeyDown(e) {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`; // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }

  render() {
    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["Draggable"], {
      draggableId: this.props.component.id,
      index: this.props.index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, provided => __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: this.props.component.id
    }, provided.draggableProps, provided.dragHandleProps, {
      ref: provided.innerRef,
      onClick: this.handleSelection,
      datatype: this.props.component.id == this.props.uiState.simulator.selected ? "-0.2vh" : "0",
      property: this.props.component.id == this.props.uiState.simulator.selected ? "dashed" : "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx(HeadlineText, {
      value: this.props.component.headline,
      onChange: e => this.handleHeadline(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })));
  }

}

const mapStateToProps = state => {
  return {
    uiState: state.ui,
    dataState: state.data
  };
};

const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "headline__Container",
  componentId: "sc-19yc47e-0"
})(["height:auto;width:98%;outline:0px solid transparent;word-wrap:break-word;padding:1%;border:", " 0.2vh;margin:", ";border-radius:2.5vh;display:flex;align-content:center;"], props => props.property, props => props.datatype);
const HeadlineText = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_8___default.a).withConfig({
  displayName: "headline__HeadlineText",
  componentId: "sc-19yc47e-1"
})(["font-weight:lighter;position:relative;user-select:none;left:2%;height:94%;width:96%;font-size:3vh;margin:0.1vh;padding:0.5vh;text-align:center;resize:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;align-self:center;border:0;display:flex;:focus{outline:none;caret-color:salmon;}"]);
const HeadlineText2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.textarea.withConfig({
  displayName: "headline__HeadlineText2",
  componentId: "sc-19yc47e-2"
})(["font-weight:lighter;height:94%;width:90%;font-size:3vh;margin:0;padding:0.5vh;text-align:center;resize:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;align-self:center;border:0;display:flex;:focus{outline:none;caret-color:salmon;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  updateSimulatorSelection: _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_6__["updateSimulatorSelection"],
  setSelectedComponent: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_7__["setSelectedComponent"],
  updateInputScreenUi: _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_6__["updateInputScreenUi"],
  addOrUpdateHeadline: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_7__["addOrUpdateHeadline"]
})(Headline));

/***/ })

};;
//# sourceMappingURL=0.js.map
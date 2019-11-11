exports.ids = [1];
exports.modules = {

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

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

/***/ "./src/components/route-management/column.tsx":
/*!****************************************************!*\
  !*** ./src/components/route-management/column.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route */ "./src/components/route-management/route.tsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/uiActions */ "./src/redux/actions/uiActions.ts");
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/dataActions */ "./src/redux/actions/dataActions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "/home/christian/Development/fible-frontend-nextjs/src/components/route-management/column.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "column__Container",
  componentId: "yv32xa-0"
})(["margin:1em;border:1px solid lightgray;border-radius:2em;width:100%;height:100%;position:relative;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1.withConfig({
  displayName: "column__Title",
  componentId: "yv32xa-1"
})(["padding:8px;"]);
const RouteList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "column__RouteList",
  componentId: "yv32xa-2"
})(["padding:8px;"]);

class Column extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleInputScreenButton", () => {
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
        pathname: '/inputScreen'
      });
      this.props.initializeHtype({
        htype: this.props.type
      });
      this.props.initializeInputScreenUi({
        dispatch: this.props.type
      });
    });
  }

  render() {
    return __jsx(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, this.props.column.title), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["Droppable"], {
      droppableId: this.props.column.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, provided => __jsx(RouteList, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: provided.innerRef
    }, provided.droppableProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), this.props.listItems.map((itemData, index) => __jsx(_route__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: itemData.id,
      type: this.props.type,
      itemData: itemData,
      index: index,
      columnId: this.props.column.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), provided.placeholder)), __jsx(InputScreenButton, {
      onClick: this.handleInputScreenButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlus"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })));
  }

}

const mapStateToProps = state => {
  return {
    dataState: state.data,
    initializeInputScreenState: state.initializeInputScreenState
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, {
  initializeInputScreenUi: _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_9__["initializeInputScreenUi"],
  initializeHtype: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_10__["initializeHtype"]
})(Column));
const InputScreenButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "column__InputScreenButton",
  componentId: "yv32xa-3"
})(["position:absolute;bottom:0;right:0;font-size:6vh;border:0;color:none;background-color:transparent;:focus{outline:none;}"]);

/***/ }),

/***/ "./src/components/route-management/route.tsx":
/*!***************************************************!*\
  !*** ./src/components/route-management/route.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/uiActions */ "./src/redux/actions/uiActions.ts");


var _jsxFileName = "/home/christian/Development/fible-frontend-nextjs/src/components/route-management/route.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








class FibleRoute extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleRemoveRoutes", e => {
      //prevent select state update aswell
      e.stopPropagation();
      var itemId = this.props.itemData.id; //for removing columns when deleting list items

      var dispatch = this.props.type == "STOPS" ? "STOP_DESELECT" : dispatch = "ROUTE_DESELECT";
      var removeIndex = this.props.index;
      var removeColumn = this.props.columnId;
      this.props.removeRoute({
        removeIndex,
        removeColumn
      });
      this.props.updateSelectorManagerState({
        itemId,
        dispatch
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleSelectorManagerStateUpdate", () => {
      var itemId = this.props.itemData.id;
      var dispatch = "";

      switch (this.props.type) {
        case "ROUTES":
          {
            if (itemId == this.props.selectorState["ROUTES"].id) {
              dispatch = "ROUTE_DESELECT"; /// borderColor = "lightgray"
            } else {
              dispatch = "ROUTE_SELECT"; //  borderColor = "salmon"
            }

            break;
          }

        case "STOPS":
          {
            if (this.props.itemData.id == this.props.selectorState["STOPS"].id) {
              dispatch = "STOP_DESELECT"; //       borderColor = "lightgray"
            } else {
              dispatch = "STOP_SELECT"; //     borderColor = "salmon"  
            }

            break;
          }

        default:
          {
            dispatch = "ROUTE_SELECT";
          }
      }

      this.props.updateSelectorManagerState({
        itemId,
        dispatch
      });
    });
  }

  render() {
    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Draggable"], {
      draggableId: this.props.itemData.id,
      index: this.props.index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, provided => __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.draggableProps, provided.dragHandleProps, {
      ref: provided.innerRef,
      onClick: this.handleSelectorManagerStateUpdate,
      color: this.props.itemData.id == this.props.selectorState[this.props.type].id ? "salmon" : "lightgray",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), __jsx(Headline, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, this.props.itemData.headline), __jsx(RemoveButton, {
      onClick: this.handleRemoveRoutes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTimes"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }))));
  }

}

const mapStateToProps = state => {
  return {
    selectorState: state.selector,
    updateSelectorManagerState: state.updateSelectorManagerState
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  removeRoute: _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_8__["removeRoute"],
  updateSelectorManagerState: _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_8__["updateSelectorManagerState"]
})(FibleRoute));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "route__Container",
  componentId: "sc-12vgdg3-0"
})(["border:1px solid;border-color:", ";border-radius:2em;height:8vh;padding:8px;margin-bottom:1em;background-color:white;:hover{border-color:rgba(250,128,114,0.3 );}"], props => props.color);
const Headline = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h3.withConfig({
  displayName: "route__Headline",
  componentId: "sc-12vgdg3-1"
})(["font-size:2vh;font-weight:lighter;position:relative;user-select:none;top:10%;left:20%;margin:0;color:black;border:none;background:none;text-decoration:none;"]);
const RemoveButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "route__RemoveButton",
  componentId: "sc-12vgdg3-2"
})(["position:relative;bottom:2vh;left:95%;margin-right:3vw;font-size:2vh;border:0;color:none;background-color:transparent;:focus{outline:none;}"]);

/***/ }),

/***/ "./src/components/route-management/selector.tsx":
/*!******************************************************!*\
  !*** ./src/components/route-management/selector.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./column */ "./src/components/route-management/column.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/uiActions */ "./src/redux/actions/uiActions.ts");


var _jsxFileName = "/home/christian/Development/fible-frontend-nextjs/src/components/route-management/selector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






class Selector extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onDragEnd", result => {
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
      const column = this.props.uiState.columns[source.droppableId];

      const newOrder = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(column.ids);

      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, draggableId);
      this.props.updateOrder({
        newOrder,
        columnId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "selectorFunction", () => {
      //fix reordering problem
      switch (this.props.type) {
        case "ROUTES":
          {
            const columnId = "column-1";
            const column = this.props.uiState.columns[columnId];
            const routes = column.ids.map(routeId => this.props.uiState.routes[routeId]);
            return __jsx(_column__WEBPACK_IMPORTED_MODULE_4__["default"], {
              key: columnId,
              column: column,
              type: "ROUTES",
              listItems: routes,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            });
          }

        case "STOPS":
          {
            const columnId = "column-2";
            const column = this.props.uiState.columns[columnId];
            const stops = column.ids.map(stopId => this.props.uiState.stops[stopId]);
            return __jsx(_column__WEBPACK_IMPORTED_MODULE_4__["default"], {
              key: columnId,
              column: column,
              type: "STOPS",
              listItems: stops,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            });
          }

        case "POIS":
          {
            const columnId = "column-3";
            const column = this.props.uiState.columns[columnId];
            let pois = [];
            column.ids.length > 0 ? pois = column.ids.map(poiId => this.props.uiState.pois[poiId]) : pois = [];
            return __jsx(_column__WEBPACK_IMPORTED_MODULE_4__["default"], {
              key: columnId,
              column: column,
              type: "POIS",
              listItems: pois,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            });
          }

        default:
          return __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "wrong");
      }
    });
  }

  render() {
    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__["DragDropContext"], {
      onDragEnd: this.onDragEnd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, this.selectorFunction());
  }

}

const mapStateToProps = state => {
  return {
    selectorState: state.selector,
    uiState: state.ui,
    updateOrder: state.updateOrder
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  updateOrder: _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_6__["updateOrder"],
  updateSelectorManagerState: _redux_actions_uiActions__WEBPACK_IMPORTED_MODULE_6__["updateSelectorManagerState"]
})(Selector));

/***/ }),

/***/ "./src/components/route-management/selectorManager.tsx":
/*!*************************************************************!*\
  !*** ./src/components/route-management/selectorManager.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selector */ "./src/components/route-management/selector.tsx");

var _jsxFileName = "/home/christian/Development/fible-frontend-nextjs/src/components/route-management/selectorManager.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





class SelectorManager extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "SelectorChoice", () => {
      if (this.props.selectorState.ROUTES.selected == false && this.props.selectorState.STOPS.selected == false) {
        return __jsx(OneSelectorWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, __jsx(_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "ROUTES",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }));
      } else if (this.props.selectorState.ROUTES.selected == true && this.props.selectorState.STOPS.selected == false) {
        return __jsx(TwoSelectorsWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, __jsx(_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "ROUTES",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }), __jsx(_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "STOPS",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }));
      } else if (this.props.selectorState.ROUTES.selected == true && this.props.selectorState.STOPS.selected == true) {
        return __jsx(ThreeSelectorsWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, __jsx(_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "ROUTES",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }), __jsx(_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "STOPS",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }), __jsx(_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "POIS",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }));
      } else if (this.props.selectorState.ROUTES.selected == false && this.props.selectorState.STOPS.selected == true) {
        return __jsx(OneSelectorWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, __jsx(_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "ROUTES",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }));
      }
    });
  }

  render() {
    return __jsx(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, this.SelectorChoice());
  }

}

const mapStateToProps = state => {
  return {
    selectorState: state.selector
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(SelectorManager));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "selectorManager__Container",
  componentId: "sc-7ashg1-0"
})(["width:100vw;height:80vh;position:absolute;bottom:3vh;"]);
const OneSelectorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "selectorManager__OneSelectorWrapper",
  componentId: "sc-7ashg1-1"
})(["position:relative;width:30vw;left:35vw;height:100%;margin:0;padding:0;align-content:center;display:flex;flex-direction:row;bottom:5%;"]);
const TwoSelectorsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "selectorManager__TwoSelectorsWrapper",
  componentId: "sc-7ashg1-2"
})(["position:relative;left:20vw;width:60vw;height:100%;margin:0;padding:0;align-content:center;display:flex;flex-direction:row;bottom:5%;"]);
const ThreeSelectorsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "selectorManager__ThreeSelectorsWrapper",
  componentId: "sc-7ashg1-3"
})(["position:relative;margin:0;padding:0;width:90vw;height:100%;left:5vw;align-content:center;display:flex;flex-direction:row;bottom:5%;"]);

/***/ }),

/***/ "./src/redux/actions/dataActions.ts":
/*!******************************************!*\
  !*** ./src/redux/actions/dataActions.ts ***!
  \******************************************/
/*! exports provided: addOrUpdateHeadline, initializeHtype, deleteHtype, emptySelectedComponent, setSelectedComponent, updateComponentsOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrUpdateHeadline", function() { return addOrUpdateHeadline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeHtype", function() { return initializeHtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHtype", function() { return deleteHtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptySelectedComponent", function() { return emptySelectedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedComponent", function() { return setSelectedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateComponentsOrder", function() { return updateComponentsOrder; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/redux/actions/types.ts");

let addHeadlineId = 0;
let initializeHtypeId = 0;
let deleteHtypeId = 0;
let emptySelectedComponentId = 0;
let setSelectedComponentId = 0;
let updateComponentsOrderId = 0;
const addOrUpdateHeadline = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["HEADLINE"],
  payload: {
    id: ++addHeadlineId,
    content
  }
});
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

/***/ }),

/***/ "./src/redux/actions/uiActions.ts":
/*!****************************************!*\
  !*** ./src/redux/actions/uiActions.ts ***!
  \****************************************/
/*! exports provided: removeRoute, updateOrder, updateSelectorManagerState, updateInputScreenUi, initializeInputScreenUi, updateSimulatorSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRoute", function() { return removeRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOrder", function() { return updateOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelectorManagerState", function() { return updateSelectorManagerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputScreenUi", function() { return updateInputScreenUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeInputScreenUi", function() { return initializeInputScreenUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSimulatorSelection", function() { return updateSimulatorSelection; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/redux/actions/types.ts");
 //includes route management actions

let routeId = 0;
let updateId = 0;
let updateManagerStateId = 0;
let updateInputScreenUiId = 0;
let initializeInputScreenUiId = 0;
let updateSimulatorSelectionId = 0;
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
const updateInputScreenUi = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INPUT_SCREEN_UI"],
  payload: {
    id: ++updateInputScreenUiId,
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
const updateSimulatorSelection = content => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SIMULATOR_SELECTION"],
  payload: {
    id: ++updateSimulatorSelectionId,
    content
  }
});

/***/ })

};;
//# sourceMappingURL=1.js.map
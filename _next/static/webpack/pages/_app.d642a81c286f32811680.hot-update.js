webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/TopBar.jsx":
/*!**************************************!*\
  !*** ./components/layout/TopBar.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ \"./node_modules/@material-ui/core/Typography/Typography.js\");\n/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scrollable-anchor */ \"./node_modules/react-scrollable-anchor/lib/index.js\");\n/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _TopBar_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TopBar.scss */ \"./components/layout/TopBar.scss\");\n/* harmony import */ var _TopBar_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_TopBar_scss__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/katie/Developer/entsoc-website/components/layout/TopBar.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar makeGoToAnchor = function makeGoToAnchor(section) {\n  return function () {\n    return Object(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_10__[\"goToAnchor\"])(section, false);\n  };\n};\n\nvar NavLink = function NavLink(_ref) {\n  var children = _ref.children,\n      _ref$page = _ref.page,\n      page = _ref$page === void 0 ? '/' : _ref$page,\n      _ref$anchor = _ref.anchor,\n      anchor = _ref$anchor === void 0 ? '' : _ref$anchor,\n      _ref$Wrapper = _ref.Wrapper,\n      Wrapper = _ref$Wrapper === void 0 ? _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_7___default.a : _ref$Wrapper;\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    href: \"\".concat(page).concat(anchor ? \"#\".concat(anchor) : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 3\n    }\n  }, __jsx(\"a\", {\n    onClick: makeGoToAnchor(anchor),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, Wrapper ? __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 18\n    }\n  }, children) : children));\n};\n\n_c = NavLink;\n\nvar TopBar = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(TopBar, _React$Component);\n\n  var _super = _createSuper(TopBar);\n\n  function TopBar() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TopBar);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TopBar, [{\n    key: \"render\",\n    value: function render() {\n      var theme = this.props.theme;\n      var style = {\n        backgroundColor: theme.palette.primary.main\n      }; // Temp garbage. Should be removed ASAP, and replaced with proper implementation\n\n      var events_style = {\n        cursor: 'pointer'\n      };\n\n      var onClickEvents = function onClickEvents() {\n        var events_calendar = 'https://calendar.google.com/calendar/u/0/embed?src=f0792erhp82vn4aad3p2knvcug@group.calendar.google.com';\n        window.open(events_calendar, '_blank');\n      };\n\n      return __jsx(\"div\", {\n        className: \"top-bar\",\n        style: style,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 7\n        }\n      }, __jsx(NavLink, {\n        anchor: \"home\",\n        Wrapper: null,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 9\n        }\n      }, __jsx(\"img\", {\n        src: \"static/logo2020.svg\",\n        alt: \"Entrepreneurship Society\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }\n      })), __jsx(\"ul\", {\n        className: \"nav-items\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }\n      }, __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }\n      }, __jsx(NavLink, {\n        page: \"about\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }\n      }, \"About Us\")), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }\n      }, __jsx(NavLink, {\n        page: \"/janus\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }\n      }, \"Janus\")), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }\n      }, __jsx(NavLink, {\n        anchor: \"values\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }\n      }, \"Values\")), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }\n      }, __jsx(NavLink, {\n        anchor: \"gallery\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }\n      }, \"Gallery\")), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }\n      }, __jsx(NavLink, {\n        anchor: \"partners\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }\n      }, \"Partners\")), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }\n      }, __jsx(NavLink, {\n        anchor: \"contact\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }\n      }, \"Contact\"))));\n    }\n  }]);\n\n  return TopBar;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(TopBar, \"propTypes\", {\n  theme: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"withTheme\"])(TopBar));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvVG9wQmFyLmpzeD9kY2Q0Il0sIm5hbWVzIjpbIm1ha2VHb1RvQW5jaG9yIiwic2VjdGlvbiIsImdvVG9BbmNob3IiLCJOYXZMaW5rIiwiY2hpbGRyZW4iLCJwYWdlIiwiYW5jaG9yIiwiV3JhcHBlciIsIlR5cG9ncmFwaHkiLCJUb3BCYXIiLCJ0aGVtZSIsInByb3BzIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJldmVudHNfc3R5bGUiLCJjdXJzb3IiLCJvbkNsaWNrRXZlbnRzIiwiZXZlbnRzX2NhbGVuZGFyIiwid2luZG93Iiwib3BlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxPQUFPO0FBQUEsU0FBSTtBQUFBLFdBQU1DLDJFQUFVLENBQUNELE9BQUQsRUFBVSxLQUFWLENBQWhCO0FBQUEsR0FBSjtBQUFBLENBQTlCOztBQUNBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsdUJBQWFDLElBQWI7QUFBQSxNQUFhQSxJQUFiLDBCQUFvQixHQUFwQjtBQUFBLHlCQUF5QkMsTUFBekI7QUFBQSxNQUF5QkEsTUFBekIsNEJBQWtDLEVBQWxDO0FBQUEsMEJBQXNDQyxPQUF0QztBQUFBLE1BQXNDQSxPQUF0Qyw2QkFBOENDLDhFQUE5QztBQUFBLFNBQ2QsTUFBQyxpREFBRDtBQUFNLFFBQUksWUFBS0gsSUFBTCxTQUFZQyxNQUFNLGNBQU9BLE1BQVAsSUFBa0IsRUFBcEMs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Li9jb21wb25lbnRzL2xheW91dC9Ub3BCYXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHkvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ29Ub0FuY2hvciB9IGZyb20gJ3JlYWN0LXNjcm9sbGFibGUtYW5jaG9yJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0ICcuL1RvcEJhci5zY3NzJztcblxuY29uc3QgbWFrZUdvVG9BbmNob3IgPSBzZWN0aW9uID0+ICgpID0+IGdvVG9BbmNob3Ioc2VjdGlvbiwgZmFsc2UpO1xuY29uc3QgTmF2TGluayA9ICh7IGNoaWxkcmVuLCBwYWdlID0gJy8nLCBhbmNob3IgPSAnJywgV3JhcHBlcj1UeXBvZ3JhcGh5IH0pID0+IChcbiAgPExpbmsgaHJlZj17YCR7cGFnZX0ke2FuY2hvciA/IGAjJHthbmNob3J9YCA6ICcnfWB9PlxuICAgIDxhIG9uQ2xpY2s9e21ha2VHb1RvQW5jaG9yKGFuY2hvcil9PlxuICAgICAge1dyYXBwZXIgPyA8V3JhcHBlcj57Y2hpbGRyZW59PC9XcmFwcGVyPiA6IGNoaWxkcmVufVxuICAgIDwvYT5cbiAgPC9MaW5rPlxuKTtcblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICB9O1xuXG4gICAgLy8gVGVtcCBnYXJiYWdlLiBTaG91bGQgYmUgcmVtb3ZlZCBBU0FQLCBhbmQgcmVwbGFjZWQgd2l0aCBwcm9wZXIgaW1wbGVtZW50YXRpb25cbiAgICBjb25zdCBldmVudHNfc3R5bGUgPSB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH1cbiAgICBjb25zdCBvbkNsaWNrRXZlbnRzID0gKCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnRzX2NhbGVuZGFyID0gJ2h0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci91LzAvZW1iZWQ/c3JjPWYwNzkyZXJocDgydm40YWFkM3Aya252Y3VnQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20nO1xuICAgICAgd2luZG93Lm9wZW4oZXZlbnRzX2NhbGVuZGFyLCAnX2JsYW5rJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhclwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxOYXZMaW5rIGFuY2hvcj1cImhvbWVcIiBXcmFwcGVyPXtudWxsfT5cbiAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9sb2dvMjAyMC5zdmdcIiBhbHQ9XCJFbnRyZXByZW5ldXJzaGlwIFNvY2lldHlcIiAvPlxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TmF2TGluayBwYWdlPVwiYWJvdXRcIj5BYm91dCBVczwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxOYXZMaW5rIHBhZ2U9XCIvamFudXNcIj5KYW51czwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxOYXZMaW5rIGFuY2hvcj1cInZhbHVlc1wiPlZhbHVlczwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxOYXZMaW5rIGFuY2hvcj1cImdhbGxlcnlcIj5HYWxsZXJ5PC9OYXZMaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPE5hdkxpbmsgYW5jaG9yPVwicGFydG5lcnNcIj5QYXJ0bmVyczwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxOYXZMaW5rIGFuY2hvcj1cImNvbnRhY3RcIj5Db250YWN0PC9OYXZMaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRvcEJhcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/TopBar.jsx\n");

/***/ })

})
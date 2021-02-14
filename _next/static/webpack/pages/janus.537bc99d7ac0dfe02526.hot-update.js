webpackHotUpdate_N_E("pages/janus",{

/***/ "./components/janus/ProjectListPage.jsx":
/*!**********************************************!*\
  !*** ./components/janus/ProjectListPage.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList */ \"./components/janus/ProjectList.jsx\");\n/* harmony import */ var _ProjectList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList.scss */ \"./components/janus/ProjectList.scss\");\n/* harmony import */ var _ProjectList_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProjectList_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ \"./components/janus/SearchBar.jsx\");\n/* harmony import */ var _DropDownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDownMenu */ \"./components/janus/DropDownMenu.jsx\");\n/* harmony import */ var _RoleColourContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RoleColourContext */ \"./components/janus/RoleColourContext.jsx\");\n/* harmony import */ var _util_colourUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/colourUtil */ \"./util/colourUtil.js\");\n/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ \"./node_modules/@material-ui/core/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/katie/Developer/entsoc-website/components/janus/ProjectListPage.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default()({\n  test: {\n    marginTop: 16,\n    marginBottom: 16\n  },\n  testButton: {\n    borderRadius: 0\n  }\n});\n\nvar ProjectListPage = function ProjectListPage(_ref) {\n  _s();\n\n  var projects = _ref.projects,\n      roles = _ref.roles,\n      onSearch = _ref.onSearch,\n      onSelectSort = _ref.onSelectSort,\n      onSelectRole = _ref.onSelectRole;\n  var styles = useStyles();\n\n  var textChanged = function textChanged(e) {\n    var value = e.target.value;\n    onSearch(value);\n  };\n\n  var roleNamesToColour = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_RoleColourContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  var sortItems = [{\n    key: \"newest\",\n    text: \"Newest to Oldest\"\n  }, {\n    key: \"oldest\",\n    text: \"Oldest to Newest\"\n  }];\n\n  var getSelectedSortMenuItemColour = function getSelectedSortMenuItemColour() {\n    return 'darkBlue';\n  };\n\n  var getSelectedRoleMenuItemColour = function getSelectedRoleMenuItemColour(index, itemKey) {\n    debugger;\n    return roleNamesToColour[itemKey] || Object(_util_colourUtil__WEBPACK_IMPORTED_MODULE_6__[\"getColourForInt\"])(index);\n  };\n\n  return __jsx(\"div\", {\n    className: \"root\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    container: true,\n    spacing: 1,\n    className: styles.test,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    item: true,\n    xs: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: styles.testButton,\n    variant: \"outlined\",\n    color: \"primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"Submit A Posting\")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    item: true,\n    xs: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: styles.testButton,\n    variant: \"outlined\",\n    color: \"primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"Provide Feedback\"))), __jsx(\"div\", {\n    className: \"action-region\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onChangeHandler: textChanged,\n    label: \"Enter keywords\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"filters-region\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(_DropDownMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Sort\",\n    items: sortItems,\n    onSelect: onSelectSort,\n    initialSelectedIndices: [0],\n    variant: \"dark\",\n    getSelectedMenuItemColour: getSelectedSortMenuItemColour,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }), __jsx(_DropDownMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Job Category\",\n    items: roles,\n    onSelect: onSelectRole,\n    multiselectable: true,\n    variant: \"colourful\",\n    getSelectedMenuItemColour: getSelectedRoleMenuItemColour,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }))), __jsx(_ProjectList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    projects: projects,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ProjectListPage, \"i2RtobgKyY3GdUO9XNrYtudp+zw=\", false, function () {\n  return [useStyles];\n});\n\n_c = ProjectListPage;\nProjectListPage.defaultProps = {\n  projects: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectListPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectListPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qYW51cy9Qcm9qZWN0TGlzdFBhZ2UuanN4P2NlYWIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRlc3QiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ0ZXN0QnV0dG9uIiwiYm9yZGVyUmFkaXVzIiwiUHJvamVjdExpc3RQYWdlIiwicHJvamVjdHMiLCJyb2xlcyIsIm9uU2VhcmNoIiwib25TZWxlY3RTb3J0Iiwib25TZWxlY3RSb2xlIiwic3R5bGVzIiwidGV4dENoYW5nZWQiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJyb2xlTmFtZXNUb0NvbG91ciIsInVzZUNvbnRleHQiLCJSb2xlTmFtZXNUb0NvbG91ciIsInNvcnRJdGVtcyIsImtleSIsInRleHQiLCJnZXRTZWxlY3RlZFNvcnRNZW51SXRlbUNvbG91ciIsImdldFNlbGVjdGVkUm9sZU1lbnVJdGVtQ29sb3VyIiwiaW5kZXgiLCJpdGVtS2V5IiwiZ2V0Q29sb3VyRm9ySW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDBFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUUsRUFEUDtBQUVKQyxnQkFBWSxFQUFFO0FBRlYsR0FEcUI7QUFLM0JDLFlBQVUsRUFBRTtBQUNWQyxnQkFBWSxFQUFFO0FBREo7QUFMZSxDQUFELENBQTVCOztBQVVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBNkQ7QUFBQTs7QUFBQSxNQUEzREMsUUFBMkQsUUFBM0RBLFFBQTJEO0FBQUEsTUFBakRDLEtBQWlELFFBQWpEQSxLQUFpRDtBQUFBLE1BQTFDQyxRQUEwQyxRQUExQ0EsUUFBMEM7QUFBQSxNQUFoQ0MsWUFBZ0MsUUFBaENBLFlB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FMRixDQXJCRixFQTZDRSxNQUFDLG9EQUFEO0FBQWEsWUFBUSxFQUFFakIsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdDRixDQURGO0FBaURELENBL0VEOztHQUFNRCxlO1VBQ1dQLFM7OztLQURYTyxlO0FBaUZOQSxlQUFlLENBQUNzQixZQUFoQixHQUErQjtBQUM3QnJCLFVBQVEsRUFBRTtBQURtQixDQUEvQjtBQUllRCw4RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvamFudXMvUHJvamVjdExpc3RQYWdlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tICcuL1Byb2plY3RMaXN0JztcbmltcG9ydCAnLi9Qcm9qZWN0TGlzdC5zY3NzJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInO1xuaW1wb3J0IERyb3BEb3duTWVudSBmcm9tIFwiY29tcG9uZW50cy9qYW51cy9Ecm9wRG93bk1lbnVcIjtcbmltcG9ydCBSb2xlTmFtZXNUb0NvbG91ciBmcm9tIFwiY29tcG9uZW50cy9qYW51cy9Sb2xlQ29sb3VyQ29udGV4dFwiO1xuaW1wb3J0IHtnZXRDb2xvdXJGb3JJbnR9IGZyb20gXCIuLi8uLi91dGlsL2NvbG91clV0aWxcIjtcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvbWFrZVN0eWxlc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdGVzdDoge1xuICAgIG1hcmdpblRvcDogMTYsXG4gICAgbWFyZ2luQm90dG9tOiAxNixcbiAgfSxcbiAgdGVzdEJ1dHRvbjoge1xuICAgIGJvcmRlclJhZGl1czogMCxcbiAgfVxufSk7XG5cbmNvbnN0IFByb2plY3RMaXN0UGFnZSA9ICh7cHJvamVjdHMsIHJvbGVzLCBvblNlYXJjaCwgb25TZWxlY3RTb3J0LCBvblNlbGVjdFJvbGV9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0ZXh0Q2hhbmdlZCA9IChlKSA9PiB7XG4gICAgY29uc3Qge3ZhbHVlfSA9IGUudGFyZ2V0O1xuICAgIG9uU2VhcmNoKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCByb2xlTmFtZXNUb0NvbG91ciA9IHVzZUNvbnRleHQoUm9sZU5hbWVzVG9Db2xvdXIpO1xuXG4gIGNvbnN0IHNvcnRJdGVtcyA9IFtcbiAgICB7XG4gICAgICBrZXk6IFwibmV3ZXN0XCIsXG4gICAgICB0ZXh0OiBcIk5ld2VzdCB0byBPbGRlc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogXCJvbGRlc3RcIixcbiAgICAgIHRleHQ6IFwiT2xkZXN0IHRvIE5ld2VzdFwiLFxuICAgIH1cbiAgXTtcblxuICBjb25zdCBnZXRTZWxlY3RlZFNvcnRNZW51SXRlbUNvbG91ciA9ICgpID0+IHtcbiAgICByZXR1cm4gJ2RhcmtCbHVlJ1xuICB9XG5cbiAgY29uc3QgZ2V0U2VsZWN0ZWRSb2xlTWVudUl0ZW1Db2xvdXIgPSAoaW5kZXgsIGl0ZW1LZXkpID0+IHtcbiAgICBkZWJ1Z2dlcjtcbiAgICByZXR1cm4gcm9sZU5hbWVzVG9Db2xvdXJbaXRlbUtleV0gfHwgZ2V0Q29sb3VyRm9ySW50KGluZGV4KTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBjbGFzc05hbWU9e3N0eWxlcy50ZXN0fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGVzdEJ1dHRvbn1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN1Ym1pdCBBIFBvc3RpbmdcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXN0QnV0dG9ufVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJvdmlkZSBGZWVkYmFja1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1yZWdpb25cIj5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIG9uQ2hhbmdlSGFuZGxlcj17dGV4dENoYW5nZWR9XG4gICAgICAgICAgbGFiZWw9XCJFbnRlciBrZXl3b3Jkc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVycy1yZWdpb25cIj5cbiAgICAgICAgICA8RHJvcERvd25NZW51XG4gICAgICAgICAgICB0aXRsZT1cIlNvcnRcIlxuICAgICAgICAgICAgaXRlbXM9e3NvcnRJdGVtc31cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdFNvcnR9XG4gICAgICAgICAgICBpbml0aWFsU2VsZWN0ZWRJbmRpY2VzPXtbMF19XG4gICAgICAgICAgICB2YXJpYW50PVwiZGFya1wiXG4gICAgICAgICAgICBnZXRTZWxlY3RlZE1lbnVJdGVtQ29sb3VyPXtnZXRTZWxlY3RlZFNvcnRNZW51SXRlbUNvbG91cn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEcm9wRG93bk1lbnVcbiAgICAgICAgICAgIHRpdGxlPVwiSm9iIENhdGVnb3J5XCJcbiAgICAgICAgICAgIGl0ZW1zPXtyb2xlc31cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdFJvbGV9XG4gICAgICAgICAgICBtdWx0aXNlbGVjdGFibGVcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb2xvdXJmdWxcIlxuICAgICAgICAgICAgZ2V0U2VsZWN0ZWRNZW51SXRlbUNvbG91cj17Z2V0U2VsZWN0ZWRSb2xlTWVudUl0ZW1Db2xvdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQcm9qZWN0TGlzdCBwcm9qZWN0cz17cHJvamVjdHN9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblByb2plY3RMaXN0UGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHByb2plY3RzOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/janus/ProjectListPage.jsx\n");

/***/ })

})
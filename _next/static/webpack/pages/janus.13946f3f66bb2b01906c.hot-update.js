webpackHotUpdate_N_E("pages/janus",{

/***/ "./components/janus/ProjectListPage.jsx":
/*!**********************************************!*\
  !*** ./components/janus/ProjectListPage.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList */ \"./components/janus/ProjectList.jsx\");\n/* harmony import */ var _ProjectList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList.scss */ \"./components/janus/ProjectList.scss\");\n/* harmony import */ var _ProjectList_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProjectList_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ \"./components/janus/SearchBar.jsx\");\n/* harmony import */ var _DropDownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDownMenu */ \"./components/janus/DropDownMenu.jsx\");\n/* harmony import */ var _RoleColourContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RoleColourContext */ \"./components/janus/RoleColourContext.jsx\");\n/* harmony import */ var _util_colourUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/colourUtil */ \"./util/colourUtil.js\");\n/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ \"./node_modules/@material-ui/core/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/katie/Developer/entsoc-website/components/janus/ProjectListPage.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default()({\n  test: {\n    marginTop: 16,\n    marginBottom: 16\n  },\n  testButton: {\n    borderRadius: 0\n  }\n});\n\nvar ProjectListPage = function ProjectListPage(_ref) {\n  _s();\n\n  var projects = _ref.projects,\n      roles = _ref.roles,\n      onSearch = _ref.onSearch,\n      onSelectSort = _ref.onSelectSort,\n      onSelectRole = _ref.onSelectRole;\n  var styles = useStyles();\n\n  var textChanged = function textChanged(e) {\n    var value = e.target.value;\n    onSearch(value);\n  };\n\n  var roleNamesToColour = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_RoleColourContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  var sortItems = [{\n    key: \"newest\",\n    text: \"Newest to Oldest\"\n  }, {\n    key: \"oldest\",\n    text: \"Oldest to Newest\"\n  }];\n\n  var getSelectedSortMenuItemColour = function getSelectedSortMenuItemColour() {\n    return 'darkBlue';\n  };\n\n  var getSelectedRoleMenuItemColour = function getSelectedRoleMenuItemColour(index, itemKey) {\n    debugger;\n    return roleNamesToColour[itemKey] || Object(_util_colourUtil__WEBPACK_IMPORTED_MODULE_6__[\"getColourForInt\"])(index);\n  };\n\n  return __jsx(\"div\", {\n    className: \"root\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    container: true,\n    spacing: 1,\n    className: styles.test,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: styles.testButton,\n    variant: \"outlined\",\n    color: \"primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"Submit A Posting\")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: styles.testButton,\n    variant: \"outlined\",\n    color: \"primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"Provide Feedback\"))), __jsx(\"div\", {\n    className: \"action-region\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onChangeHandler: textChanged,\n    label: \"Enter keywords\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"filters-region\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(_DropDownMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Sort\",\n    items: sortItems,\n    onSelect: onSelectSort,\n    initialSelectedIndices: [0],\n    variant: \"dark\",\n    getSelectedMenuItemColour: getSelectedSortMenuItemColour,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }), __jsx(_DropDownMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Job Category\",\n    items: roles,\n    onSelect: onSelectRole,\n    multiselectable: true,\n    variant: \"colourful\",\n    getSelectedMenuItemColour: getSelectedRoleMenuItemColour,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }))), __jsx(_ProjectList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    projects: projects,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ProjectListPage, \"i2RtobgKyY3GdUO9XNrYtudp+zw=\", false, function () {\n  return [useStyles];\n});\n\n_c = ProjectListPage;\nProjectListPage.defaultProps = {\n  projects: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectListPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectListPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qYW51cy9Qcm9qZWN0TGlzdFBhZ2UuanN4P2NlYWIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRlc3QiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ0ZXN0QnV0dG9uIiwiYm9yZGVyUmFkaXVzIiwiUHJvamVjdExpc3RQYWdlIiwicHJvamVjdHMiLCJyb2xlcyIsIm9uU2VhcmNoIiwib25TZWxlY3RTb3J0Iiwib25TZWxlY3RSb2xlIiwic3R5bGVzIiwidGV4dENoYW5nZWQiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJyb2xlTmFtZXNUb0NvbG91ciIsInVzZUNvbnRleHQiLCJSb2xlTmFtZXNUb0NvbG91ciIsInNvcnRJdGVtcyIsImtleSIsInRleHQiLCJnZXRTZWxlY3RlZFNvcnRNZW51SXRlbUNvbG91ciIsImdldFNlbGVjdGVkUm9sZU1lbnVJdGVtQ29sb3VyIiwiaW5kZXgiLCJpdGVtS2V5IiwiZ2V0Q29sb3VyRm9ySW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDBFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUUsRUFEUDtBQUVKQyxnQkFBWSxFQUFFO0FBRlYsR0FEcUI7QUFLM0JDLFlBQVUsRUFBRTtBQUNWQyxnQkFBWSxFQUFFO0FBREo7QUFMZSxDQUFELENBQTVCOztBQVVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBNkQ7QUFBQTs7QUFBQSxNQUEzREMsUUFBMkQsUUFBM0RBLFFBQTJEO0FBQUEsTUFBakRDLEtBQWlELFFBQWpEQSxLQUFpRDtBQUFBLE1BQTFDQyxRQUEwQyxRQUExQ0EsUUFBMEM7QUFBQSxNQUFoQ0MsWUFBZ0MsUUFBaENBLFlB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RixDQUxGLENBckJGLEVBNkNFLE1BQUMsb0RBQUQ7QUFBYSxZQUFRLEVBQUVqQixRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0NGLENBREY7QUFpREQsQ0EvRUQ7O0dBQU1ELGU7VUFDV1AsUzs7O0tBRFhPLGU7QUFpRk5BLGVBQWUsQ0FBQ3NCLFlBQWhCLEdBQStCO0FBQzdCckIsVUFBUSxFQUFFO0FBRG1CLENBQS9CO0FBSWVELDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9qYW51cy9Qcm9qZWN0TGlzdFBhZ2UuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gJy4vUHJvamVjdExpc3QnO1xuaW1wb3J0ICcuL1Byb2plY3RMaXN0LnNjc3MnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL1NlYXJjaEJhcic7XG5pbXBvcnQgRHJvcERvd25NZW51IGZyb20gXCJjb21wb25lbnRzL2phbnVzL0Ryb3BEb3duTWVudVwiO1xuaW1wb3J0IFJvbGVOYW1lc1RvQ29sb3VyIGZyb20gXCJjb21wb25lbnRzL2phbnVzL1JvbGVDb2xvdXJDb250ZXh0XCI7XG5pbXBvcnQge2dldENvbG91ckZvckludH0gZnJvbSBcIi4uLy4uL3V0aWwvY29sb3VyVXRpbFwiO1xuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0ZXN0OiB7XG4gICAgbWFyZ2luVG9wOiAxNixcbiAgICBtYXJnaW5Cb3R0b206IDE2LFxuICB9LFxuICB0ZXN0QnV0dG9uOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICB9XG59KTtcblxuY29uc3QgUHJvamVjdExpc3RQYWdlID0gKHtwcm9qZWN0cywgcm9sZXMsIG9uU2VhcmNoLCBvblNlbGVjdFNvcnQsIG9uU2VsZWN0Um9sZX0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRleHRDaGFuZ2VkID0gKGUpID0+IHtcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXQ7XG4gICAgb25TZWFyY2godmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IHJvbGVOYW1lc1RvQ29sb3VyID0gdXNlQ29udGV4dChSb2xlTmFtZXNUb0NvbG91cik7XG5cbiAgY29uc3Qgc29ydEl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGtleTogXCJuZXdlc3RcIixcbiAgICAgIHRleHQ6IFwiTmV3ZXN0IHRvIE9sZGVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiBcIm9sZGVzdFwiLFxuICAgICAgdGV4dDogXCJPbGRlc3QgdG8gTmV3ZXN0XCIsXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGdldFNlbGVjdGVkU29ydE1lbnVJdGVtQ29sb3VyID0gKCkgPT4ge1xuICAgIHJldHVybiAnZGFya0JsdWUnXG4gIH1cblxuICBjb25zdCBnZXRTZWxlY3RlZFJvbGVNZW51SXRlbUNvbG91ciA9IChpbmRleCwgaXRlbUtleSkgPT4ge1xuICAgIGRlYnVnZ2VyO1xuICAgIHJldHVybiByb2xlTmFtZXNUb0NvbG91cltpdGVtS2V5XSB8fCBnZXRDb2xvdXJGb3JJbnQoaW5kZXgpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGNsYXNzTmFtZT17c3R5bGVzLnRlc3R9PlxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRlc3RCdXR0b259XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXQgQSBQb3N0aW5nXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXN0QnV0dG9ufVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJvdmlkZSBGZWVkYmFja1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1yZWdpb25cIj5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIG9uQ2hhbmdlSGFuZGxlcj17dGV4dENoYW5nZWR9XG4gICAgICAgICAgbGFiZWw9XCJFbnRlciBrZXl3b3Jkc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVycy1yZWdpb25cIj5cbiAgICAgICAgICA8RHJvcERvd25NZW51XG4gICAgICAgICAgICB0aXRsZT1cIlNvcnRcIlxuICAgICAgICAgICAgaXRlbXM9e3NvcnRJdGVtc31cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdFNvcnR9XG4gICAgICAgICAgICBpbml0aWFsU2VsZWN0ZWRJbmRpY2VzPXtbMF19XG4gICAgICAgICAgICB2YXJpYW50PVwiZGFya1wiXG4gICAgICAgICAgICBnZXRTZWxlY3RlZE1lbnVJdGVtQ29sb3VyPXtnZXRTZWxlY3RlZFNvcnRNZW51SXRlbUNvbG91cn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEcm9wRG93bk1lbnVcbiAgICAgICAgICAgIHRpdGxlPVwiSm9iIENhdGVnb3J5XCJcbiAgICAgICAgICAgIGl0ZW1zPXtyb2xlc31cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdFJvbGV9XG4gICAgICAgICAgICBtdWx0aXNlbGVjdGFibGVcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb2xvdXJmdWxcIlxuICAgICAgICAgICAgZ2V0U2VsZWN0ZWRNZW51SXRlbUNvbG91cj17Z2V0U2VsZWN0ZWRSb2xlTWVudUl0ZW1Db2xvdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQcm9qZWN0TGlzdCBwcm9qZWN0cz17cHJvamVjdHN9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblByb2plY3RMaXN0UGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHByb2plY3RzOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/janus/ProjectListPage.jsx\n");

/***/ })

})
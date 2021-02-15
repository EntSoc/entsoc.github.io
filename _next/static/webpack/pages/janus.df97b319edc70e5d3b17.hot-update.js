webpackHotUpdate_N_E("pages/janus",{

/***/ "./components/janus/ProjectListPage.jsx":
/*!**********************************************!*\
  !*** ./components/janus/ProjectListPage.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList */ \"./components/janus/ProjectList.jsx\");\n/* harmony import */ var _ProjectList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList.scss */ \"./components/janus/ProjectList.scss\");\n/* harmony import */ var _ProjectList_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProjectList_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ \"./components/janus/SearchBar.jsx\");\n/* harmony import */ var _DropDownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDownMenu */ \"./components/janus/DropDownMenu.jsx\");\n/* harmony import */ var _RoleColourContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RoleColourContext */ \"./components/janus/RoleColourContext.jsx\");\n/* harmony import */ var _util_colourUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/colourUtil */ \"./util/colourUtil.js\");\n/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ \"./node_modules/@material-ui/core/styles/makeStyles.js\");\n/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _JanusFormButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JanusFormButton */ \"./components/janus/JanusFormButton.jsx\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/katie/Developer/entsoc-website/components/janus/ProjectListPage.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7___default()({\n  formContainer: {\n    marginTop: 16,\n    marginBottom: 16\n  }\n});\n\nvar ProjectListPage = function ProjectListPage(_ref) {\n  _s();\n\n  var projects = _ref.projects,\n      roles = _ref.roles,\n      onSearch = _ref.onSearch,\n      onSelectSort = _ref.onSelectSort,\n      onSelectRole = _ref.onSelectRole;\n  var submitPostLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdYpjBKD494k7X9JEc13T7v3oD9_NJp6WvFgQEHdaTpyp_Kdw/viewform';\n  var feedbackFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfqCq0H_vdSvyZNhgzaWaxPNLy6CGgz9Ah3IaGz5If0I9Rkhg/viewform';\n  var styles = useStyles();\n\n  var textChanged = function textChanged(e) {\n    var value = e.target.value;\n    onSearch(value);\n  };\n\n  var roleNamesToColour = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_RoleColourContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  var sortItems = [{\n    key: \"newest\",\n    text: \"Newest to Oldest\"\n  }, {\n    key: \"oldest\",\n    text: \"Oldest to Newest\"\n  }];\n\n  var getSelectedSortMenuItemColour = function getSelectedSortMenuItemColour() {\n    return 'darkBlue';\n  };\n\n  var getSelectedRoleMenuItemColour = function getSelectedRoleMenuItemColour(index, itemKey) {\n    debugger;\n    return roleNamesToColour[itemKey] || Object(_util_colourUtil__WEBPACK_IMPORTED_MODULE_6__[\"getColourForInt\"])(index);\n  };\n\n  return __jsx(\"div\", {\n    className: \"root\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    container: true,\n    spacing: 1,\n    justify: \"flex-start\",\n    className: styles.formContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(_JanusFormButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    link: submitPostLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[\"Typography\"], {\n    variant: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, \"Submit A Posting\"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(_JanusFormButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    link: feedbackFormLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[\"Typography\"], {\n    variant: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, \"Provide Feedback\")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    container: true,\n    spacing: 1,\n    justify: \"space-between\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    item: true,\n    xs: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onChangeHandler: textChanged,\n    label: \"Enter keywords\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    item: true,\n    xs: 9,\n    container: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, __jsx(_DropDownMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Sort\",\n    items: sortItems,\n    onSelect: onSelectSort,\n    initialSelectedIndices: [0],\n    variant: \"dark\",\n    getSelectedMenuItemColour: getSelectedSortMenuItemColour,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, __jsx(_DropDownMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Job Category\",\n    items: roles,\n    onSelect: onSelectRole,\n    multiselectable: true,\n    variant: \"colourful\",\n    getSelectedMenuItemColour: getSelectedRoleMenuItemColour,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  })))), __jsx(_ProjectList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    projects: projects,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ProjectListPage, \"i2RtobgKyY3GdUO9XNrYtudp+zw=\", false, function () {\n  return [useStyles];\n});\n\n_c = ProjectListPage;\nProjectListPage.defaultProps = {\n  projects: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectListPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectListPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qYW51cy9Qcm9qZWN0TGlzdFBhZ2UuanN4P2NlYWIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImZvcm1Db250YWluZXIiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJQcm9qZWN0TGlzdFBhZ2UiLCJwcm9qZWN0cyIsInJvbGVzIiwib25TZWFyY2giLCJvblNlbGVjdFNvcnQiLCJvblNlbGVjdFJvbGUiLCJzdWJtaXRQb3N0TGluayIsImZlZWRiYWNrRm9ybUxpbmsiLCJzdHlsZXMiLCJ0ZXh0Q2hhbmdlZCIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInJvbGVOYW1lc1RvQ29sb3VyIiwidXNlQ29udGV4dCIsIlJvbGVOYW1lc1RvQ29sb3VyIiwic29ydEl0ZW1zIiwia2V5IiwidGV4dCIsImdldFNlbGVjdGVkU29ydE1lbnVJdGVtQ29sb3VyIiwiZ2V0U2VsZWN0ZWRSb2xlTWVudUl0ZW1Db2xvdXIiLCJpbmRleCIsIml0ZW1LZXkiLCJnZXRDb2xvdXJGb3JJbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMEVBQVUsQ0FBQztBQUMzQkMsZUFBYSxFQUFFO0FBQ2JDLGFBQVMsRUFBRSxFQURFO0FBRWJDLGdCQUFZLEVBQUU7QUFGRDtBQURZLENBQUQsQ0FBNUI7O0FBT0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUE2RDtBQUFBOztBQUFBLE1BQTNEQyxRQUEyRCxRQUEzREEsUUFBMkQ7QUFBQSxNQUFqREMsS0FBaUQsUUFBakRBLEtBQWlEO0FBQUEsTUFBMUNDLFFBQTBDLFFBQTFDQSxRQUEwQztBQUFBLE1BQWhDQyxZQUFnQyxRQUFoQ0EsWUFBZ0M7QUFBQSxNQUFsQkMsWUFBa0Is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QUQ7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLFNBQUssRUFBRU8sU0FGVDtBQUdFLFlBQVEsRUFBRVosWUFIWjtBQUlFLDBCQUFzQixFQUFFLENBQUMsQ0FBRCxDQUoxQjtBQUtFLFdBQU8sRUFBQyxNQUxWO0FBTUUsNkJBQXlCLEVBQUVlLDZCQU43QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVdFLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLFNBQUssRUFBRWpCLEtBRlQ7QUFHRSxZQUFRLEVBQUVHLFlBSFo7QUFJRSxtQkFBZSxNQUpqQjtBQUtFLFdBQU8sRUFBQyxXQUxWO0FBTUUsNkJBQXlCLEVBQUVlLDZCQU43QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FYRixDQVBGLENBYkYsRUEyQ0UsTUFBQyxvREFBRDtBQUFhLFlBQVEsRUFBRW5CLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQ0YsQ0FERjtBQStDRCxDQXJGRDs7R0FBTUQsZTtVQVNXTCxTOzs7S0FUWEssZTtBQXVGTkEsZUFBZSxDQUFDd0IsWUFBaEIsR0FBK0I7QUFDN0J2QixVQUFRLEVBQUU7QUFEbUIsQ0FBL0I7QUFJZUQsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2phbnVzL1Byb2plY3RMaXN0UGFnZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSAnLi9Qcm9qZWN0TGlzdCc7XG5pbXBvcnQgJy4vUHJvamVjdExpc3Quc2Nzcyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJztcbmltcG9ydCBEcm9wRG93bk1lbnUgZnJvbSBcImNvbXBvbmVudHMvamFudXMvRHJvcERvd25NZW51XCI7XG5pbXBvcnQgUm9sZU5hbWVzVG9Db2xvdXIgZnJvbSBcImNvbXBvbmVudHMvamFudXMvUm9sZUNvbG91ckNvbnRleHRcIjtcbmltcG9ydCB7Z2V0Q29sb3VyRm9ySW50fSBmcm9tIFwiLi4vLi4vdXRpbC9jb2xvdXJVdGlsXCI7XG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgSmFudXNGb3JtQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL2phbnVzL0phbnVzRm9ybUJ1dHRvblwiO1xuaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGZvcm1Db250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IDE2LFxuICAgIG1hcmdpbkJvdHRvbTogMTYsXG4gIH0sXG59KTtcblxuY29uc3QgUHJvamVjdExpc3RQYWdlID0gKHtwcm9qZWN0cywgcm9sZXMsIG9uU2VhcmNoLCBvblNlbGVjdFNvcnQsIG9uU2VsZWN0Um9sZX0pID0+IHtcbiAgY29uc3Qgc3VibWl0UG9zdExpbmsgPSAoXG4gICAgJ2h0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2RZcGpCS0Q0OTRrN1g5SkVjMTNUN3Yzb0Q5X05KcDZXdkZnUUVIZGFUcHlwX0tkdy92aWV3Zm9ybSdcbiAgKTtcbiAgY29uc3QgZmVlZGJhY2tGb3JtTGluayA9IChcbiAgICAnaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZnFDcTBIX3ZkU3Z5Wk5oZ3phV2F4UE5MeTZDR2d6OUFoM0lhR3o1SWYwSTlSa2hnL3ZpZXdmb3JtJ1xuICApO1xuXG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRleHRDaGFuZ2VkID0gKGUpID0+IHtcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXQ7XG4gICAgb25TZWFyY2godmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IHJvbGVOYW1lc1RvQ29sb3VyID0gdXNlQ29udGV4dChSb2xlTmFtZXNUb0NvbG91cik7XG5cbiAgY29uc3Qgc29ydEl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGtleTogXCJuZXdlc3RcIixcbiAgICAgIHRleHQ6IFwiTmV3ZXN0IHRvIE9sZGVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiBcIm9sZGVzdFwiLFxuICAgICAgdGV4dDogXCJPbGRlc3QgdG8gTmV3ZXN0XCIsXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGdldFNlbGVjdGVkU29ydE1lbnVJdGVtQ29sb3VyID0gKCkgPT4ge1xuICAgIHJldHVybiAnZGFya0JsdWUnXG4gIH1cblxuICBjb25zdCBnZXRTZWxlY3RlZFJvbGVNZW51SXRlbUNvbG91ciA9IChpbmRleCwgaXRlbUtleSkgPT4ge1xuICAgIGRlYnVnZ2VyO1xuICAgIHJldHVybiByb2xlTmFtZXNUb0NvbG91cltpdGVtS2V5XSB8fCBnZXRDb2xvdXJGb3JJbnQoaW5kZXgpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGp1c3RpZnk9e1wiZmxleC1zdGFydFwifSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8SmFudXNGb3JtQnV0dG9uIGxpbms9e3N1Ym1pdFBvc3RMaW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIj5TdWJtaXQgQSBQb3N0aW5nPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvSmFudXNGb3JtQnV0dG9uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPEphbnVzRm9ybUJ1dHRvbiBsaW5rPXtmZWVkYmFja0Zvcm1MaW5rfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIj5Qcm92aWRlIEZlZWRiYWNrPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvSmFudXNGb3JtQnV0dG9uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0ganVzdGlmeT17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgICBvbkNoYW5nZUhhbmRsZXI9e3RleHRDaGFuZ2VkfVxuICAgICAgICAgICAgbGFiZWw9XCJFbnRlciBrZXl3b3Jkc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fSBjb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxEcm9wRG93bk1lbnVcbiAgICAgICAgICAgICAgdGl0bGU9XCJTb3J0XCJcbiAgICAgICAgICAgICAgaXRlbXM9e3NvcnRJdGVtc31cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0U29ydH1cbiAgICAgICAgICAgICAgaW5pdGlhbFNlbGVjdGVkSW5kaWNlcz17WzBdfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZGFya1wiXG4gICAgICAgICAgICAgIGdldFNlbGVjdGVkTWVudUl0ZW1Db2xvdXI9e2dldFNlbGVjdGVkU29ydE1lbnVJdGVtQ29sb3VyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxEcm9wRG93bk1lbnVcbiAgICAgICAgICAgICAgdGl0bGU9XCJKb2IgQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICBpdGVtcz17cm9sZXN9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdFJvbGV9XG4gICAgICAgICAgICAgIG11bHRpc2VsZWN0YWJsZVxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29sb3VyZnVsXCJcbiAgICAgICAgICAgICAgZ2V0U2VsZWN0ZWRNZW51SXRlbUNvbG91cj17Z2V0U2VsZWN0ZWRSb2xlTWVudUl0ZW1Db2xvdXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFByb2plY3RMaXN0IHByb2plY3RzPXtwcm9qZWN0c30vPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUHJvamVjdExpc3RQYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJvamVjdHM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3RQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/janus/ProjectListPage.jsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/ValueCard.jsx":
/*!*****************************************!*\
  !*** ./components/common/ValueCard.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/esm/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/colourUtil */ \"./util/colourUtil.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/katie/Developer/entsoc-website/components/common/ValueCard.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  cardContainer: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    width: function width(_ref) {\n      var cardWidth = _ref.cardWidth;\n      return \"\".concat(cardWidth, \"px\");\n    },\n    height: function height(_ref2) {\n      var cardHeight = _ref2.cardHeight;\n      return \"\".concat(cardHeight, \"px\");\n    },\n    justifyContent: 'flex-end',\n    marginBottom: function marginBottom(_ref3) {\n      var _marginBottom = _ref3.marginBottom;\n      return \"\".concat(_marginBottom, \"px\");\n    },\n    transition: 'box-shadow 0.25s ease-in-out',\n    '&:hover': {\n      boxShadow: '0px 3px 6px 2px #ccc'\n    }\n  },\n  image: {\n    margin: -10,\n    width: function width(_ref4) {\n      var imageWidth = _ref4.imageWidth;\n      return \"\".concat(imageWidth, \"px\");\n    },\n    height: function height(_ref5) {\n      var imageHeight = _ref5.imageHeight;\n      return \"\".concat(imageHeight, \"px\");\n    }\n  },\n  header: {\n    fontStyle: 'normal',\n    fontWeight: 'bolder',\n    fontSize: '18px',\n    textAlign: 'center',\n    lineHeight: '120%',\n    color: _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__[\"Hex\"].PRIMARY,\n    marginTop: '13px',\n    marginBottom: '13px'\n  },\n  description: {\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n    fontSize: '12px',\n    lineHeight: '15px',\n    textAlign: 'center',\n    color: _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__[\"Hex\"].PRIMARY,\n    marginLeft: '10px',\n    marginRight: '10px',\n    marginBottom: '15px'\n  },\n  descriptionContainer: {\n    height: '60px',\n    marginBottom: '10px'\n  },\n  root: {\n    height: '100%'\n  }\n});\n\nvar ValueCard = function ValueCard(_ref6) {\n  _s();\n\n  var image = _ref6.image,\n      title = _ref6.title,\n      description = _ref6.description,\n      cardHeight = _ref6.cardHeight,\n      cardWidth = _ref6.cardWidth,\n      imageHeight = _ref6.imageHeight,\n      imageWidth = _ref6.imageWidth,\n      marginBottom = _ref6.marginBottom;\n  var styles = useStyles({\n    cardHeight: cardHeight,\n    cardWidth: cardWidth,\n    imageHeight: imageHeight,\n    imageWidth: imageWidth,\n    marginBottom: marginBottom\n  });\n  return __jsx(\"div\", {\n    className: styles.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: styles.cardContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: styles.image,\n    src: image,\n    alt: \"Value Icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: styles.header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"div\", {\n    className: styles.descriptionContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: styles.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, description))));\n};\n\n_s(ValueCard, \"3bjLmUB54uhXRX+frDMowQzU8P8=\", false, function () {\n  return [useStyles];\n});\n\n_c = ValueCard;\nValueCard.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.image, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  cardHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  cardWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  imageHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  imageWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  marginBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])\n};\nValueCard.defaultProps = {\n  cardWidth: '300',\n  cardHeight: '270',\n  marginBottom: '25'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ValueCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ValueCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVmFsdWVDYXJkLmpzeD8zNDQ4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjYXJkQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJjYXJkV2lkdGgiLCJoZWlnaHQiLCJjYXJkSGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93IiwiaW1hZ2UiLCJtYXJnaW4iLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJoZWFkZXIiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJIZXgiLCJQUklNQVJZIiwibWFyZ2luVG9wIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkZXNjcmlwdGlvbkNvbnRhaW5lciIsInJvb3QiLCJWYWx1ZUNhcmQiLCJ0aXRsZSIsInN0eWxlcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQzNCQyxlQUFhLEVBQUU7QUFDYkMsV0FBTyxFQUFFLE1BREk7QUFFYkMsaUJBQWEsRUFBRSxRQUZGO0FBR2JDLGNBQVUsRUFBRSxRQUhDO0FBSWJDLFNBQUssRUFBRTtBQUFBLFVBQUVDLFNBQUYsUUFBRUEsU0FBRjtBQUFBLHVCQUFvQkEsU0FBcEI7QUFBQSxLQUpNO0FBS2JDLFVBQU0sRUFBRTtBQUFBLFVBQUVDLFVBQUYsU0FBRUEsVUFBRjtBQUFBLHVCQUFxQkEsVUFBckI7QUFBQSxLQUxLO0FBTWJDLGtCQUFjLEVBQUUsVUFOSDtBQU9iQyxnQkFBWSxFQUFFO0FBQUEsVUFBRUEsYUFBRixTQUFFQSxZQUFGO0FBQUEsdUJBQXVCQSxhQUF2QjtBQUFBLEtBUEQ7QUFRYkMsY0FBVSxFQUFFLDhCQVJDO0FBU2IsZUFBVztBQUNUQyxlQUFTLEVBQUU7QUFERjtBQVRFLEdBRFk7QUFjM0JDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUUsQ0FBQyxFQURKO0FBRUxULFNBQUssRUFBRTtBQUFBLFVBQUVVLFVBQUYsU0FBRUEsVUFBRjtBQUFBLHVCQUFxQkEsVUFBckI7QUFBQSxLQUZGO0FBR0xSLFVBQU0sRUFBRTtBQUFBLFVBQUVTLFdBQUYsU0FBRUEsV0FBRjtBQUFBLHVCQUFzQkEsV0FBdEI7QUFBQTtBQUhILEdBZG9CO0FBbUIzQkMsUUFBTSxFQUFFO0FBQ05DLGFBQVMsRUFBRSxRQURMO0FBRU5DLGNBQVUsRUFBRSxRQUZOO0FBR05DLFlBQVEsRUFBRSxNQUhKO0FBSU5DLGFBQVMsRUFBRSxRQUpMO0FBS05DLGNBQVUsRUFBRSxNQUxOO0FBTU5DLFNBQUssRUFBRUMsb0RBQUcsQ0FBQ0MsT0FOTDtBQU9OQyxhQUFTLEVBQUUsTUFQTDtBQVFOaEIsZ0JBQVksRUFBRTtBQVJSLEdBbkJtQjtBQTZCM0JpQixhQUFXLEVBQUU7QUFDWFQsYUFBUyxFQUFFLFFBREE7QUFFWEMsY0FBVSxFQUFFLFFBRkQ7QUFHWEMsWUFBUSxFQUFFLE1BSEM7QUFJWEUsY0FBVSxFQUFFLE1BSkQ7QUFLWEQsYUFBUyxFQUFFLFFBTEE7QUFNWEUsU0FBSyxFQUFFQyxvREFBRyxDQUFDQyxPQU5BO0FBT1hHLGNBQVUsRUFBRSxNQVBEO0FBUVhDLGVBQVcsRUFBRSxNQVJGO0FBU1huQixnQkFBWSxFQUFFO0FBVEgsR0E3QmM7QUF3QzNCb0Isc0JBQW9CLEVBQUU7QUFDcEJ2QixVQUFNLEVBQUUsTUFEWTtBQUVwQkcsZ0JBQVksRUFBRTtBQUZNLEdBeENLO0FBNEMzQnFCLE1BQUksRUFBRTtBQUNKeEIsVUFBTSxFQUFFO0FBREo7QUE1Q3FCLENBQUQsQ0FBNUI7O0FBaURBLElBQU15QixTQUFTLEdBQUcsU0FBWkEsU0FBWSxRQVNPO0FBQUE7O0FBQUEsTUFSSm5CLEtBUUksU0FSSkEsS0FRSTtBQUFBLE1BUEpvQixLQU9JLFNBUEpBLEtBT0k7QUFBQSxNQU5KTixXQU1JLFNBTkpBLFdBTUk7QUFBQSxNQUxKbkIsVUFLSSxTQUxKQSxVQUtJO0FBQUEsTUFKSkYsU0FJSSxTQUpKQSxTQUlJO0FBQUEsTUFISlUsV0FHSSxTQUhKQSxXQUdJO0FBQUEsTUFGSkQsVUFFSSxTQUZKQSxVQUVJO0FBQUEsTUFESkwsWUFDSSxTQURKQSxZQUNJO0FBQ3ZCLE1BQU13QixNQUFNLEdBQUduQyxTQUFTLENBQUM7QUFDdkJTLGNBQVUsRUFBVkEsVUFEdUI7QUFFdkJGLGFBQVMsRUFBVEEsU0FGdUI7QUFHdkJVLGVBQVcsRUFBWEEsV0FIdUI7QUFJdkJELGNBQVUsRUFBVkEsVUFKdUI7QUFLdkJMLGdCQUFZLEVBQVpBO0FBTHVCLEdBQUQsQ0FBeEI7QUFPQSxTQUNFO0FBQUssYUFBUyxFQUFFd0IsTUFBTSxDQUFDSCxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVHLE1BQU0sQ0FBQ2pDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRWlDLE1BQU0sQ0FBQ3JCLEtBQXZCO0FBQThCLE9BQUcsRUFBRUEsS0FBbkM7QUFBMEMsT0FBRyxFQUFDLFlBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUVxQixNQUFNLENBQUNqQixNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDZ0IsS0FBdkMsQ0FGRixFQUdFO0FBQUssYUFBUyxFQUFFQyxNQUFNLENBQUNKLG9CQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLGFBQVMsRUFBRUksTUFBTSxDQUFDUCxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDQSxXQUE1QyxDQURGLENBSEYsQ0FERixDQURGO0FBV0QsQ0E1QkQ7O0dBQU1LLFM7VUFVV2pDLFM7OztLQVZYaUMsUztBQThCTkEsU0FBUyxDQUFDRyxTQUFWLEdBQXNCO0FBQ3BCRixPQUFLLEVBQUVHLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREo7QUFFcEJYLGFBQVcsRUFBRVMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGVjtBQUdwQnpCLE9BQUssRUFBRXVCLGlEQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FBQ0gsaURBQVMsQ0FBQ3ZCLEtBQVgsRUFBa0J1QixpREFBUyxDQUFDQyxNQUE1QixDQUFwQixDQUhhO0FBSXBCN0IsWUFBVSxFQUFFNEIsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDSSxNQUFYLEVBQW1CSixpREFBUyxDQUFDQyxNQUE3QixDQUFwQixDQUpRO0FBS3BCL0IsV0FBUyxFQUFFOEIsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDSSxNQUFYLEVBQW1CSixpREFBUyxDQUFDQyxNQUE3QixDQUFwQixDQUxTO0FBTXBCckIsYUFBVyxFQUFFb0IsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDSSxNQUFYLEVBQW1CSixpREFBUyxDQUFDQyxNQUE3QixDQUFwQixDQU5PO0FBT3BCdEIsWUFBVSxFQUFFcUIsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDSSxNQUFYLEVBQW1CSixpREFBUyxDQUFDQyxNQUE3QixDQUFwQixDQVBRO0FBUXBCM0IsY0FBWSxFQUFFMEIsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDSSxNQUFYLEVBQW1CSixpREFBUyxDQUFDQyxNQUE3QixDQUFwQjtBQVJNLENBQXRCO0FBV0FMLFNBQVMsQ0FBQ1MsWUFBVixHQUF5QjtBQUN2Qm5DLFdBQVMsRUFBRSxLQURZO0FBRXZCRSxZQUFVLEVBQUUsS0FGVztBQUd2QkUsY0FBWSxFQUFFO0FBSFMsQ0FBekI7QUFNZXNCLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb21tb24vVmFsdWVDYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQge0hleH0gZnJvbSAnLi4vLi4vdXRpbC9jb2xvdXJVdGlsJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNhcmRDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgd2lkdGg6ICh7Y2FyZFdpZHRofSkgPT4gYCR7Y2FyZFdpZHRofXB4YCxcbiAgICBoZWlnaHQ6ICh7Y2FyZEhlaWdodH0pID0+IGAke2NhcmRIZWlnaHR9cHhgLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIG1hcmdpbkJvdHRvbTogKHttYXJnaW5Cb3R0b219KSA9PiBgJHttYXJnaW5Cb3R0b219cHhgLFxuICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0JyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzBweCAzcHggNnB4IDJweCAjY2NjJyxcbiAgICB9LFxuICB9LFxuICBpbWFnZToge1xuICAgIG1hcmdpbjogLTEwLFxuICAgIHdpZHRoOiAoe2ltYWdlV2lkdGh9KSA9PiBgJHtpbWFnZVdpZHRofXB4YCxcbiAgICBoZWlnaHQ6ICh7aW1hZ2VIZWlnaHR9KSA9PiBgJHtpbWFnZUhlaWdodH1weGAsXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGRlcicsXG4gICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGxpbmVIZWlnaHQ6ICcxMjAlJyxcbiAgICBjb2xvcjogSGV4LlBSSU1BUlksXG4gICAgbWFyZ2luVG9wOiAnMTNweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMTNweCcsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcxNXB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGNvbG9yOiBIZXguUFJJTUFSWSxcbiAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcxNXB4JyxcbiAgfSxcbiAgZGVzY3JpcHRpb25Db250YWluZXI6IHtcbiAgICBoZWlnaHQ6ICc2MHB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgfSxcbiAgcm9vdDoge1xuICAgIGhlaWdodDogJzEwMCUnXG4gIH1cbn0pO1xuXG5jb25zdCBWYWx1ZUNhcmQgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgY2FyZEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgIGNhcmRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgIGltYWdlSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgaW1hZ2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyh7XG4gICAgY2FyZEhlaWdodCxcbiAgICBjYXJkV2lkdGgsXG4gICAgaW1hZ2VIZWlnaHQsXG4gICAgaW1hZ2VXaWR0aCxcbiAgICBtYXJnaW5Cb3R0b20sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9e2ltYWdlfSBhbHQ9XCJWYWx1ZSBJY29uXCIvPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9Pnt0aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb25Db250YWluZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVmFsdWVDYXJkLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5pbWFnZSwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjYXJkSGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNhcmRXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBpbWFnZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBpbWFnZVdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG1hcmdpbkJvdHRvbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcblxuVmFsdWVDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FyZFdpZHRoOiAnMzAwJyxcbiAgY2FyZEhlaWdodDogJzI3MCcsXG4gIG1hcmdpbkJvdHRvbTogJzI1Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZhbHVlQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/ValueCard.jsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/ValueCard.jsx":
/*!*****************************************!*\
  !*** ./components/common/ValueCard.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/esm/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/colourUtil */ \"./util/colourUtil.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/katie/Developer/entsoc-website/components/common/ValueCard.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  cardContainer: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    width: function width(_ref) {\n      var cardWidth = _ref.cardWidth;\n      return \"\".concat(cardWidth, \"px\");\n    },\n    height: function height(_ref2) {\n      var cardHeight = _ref2.cardHeight;\n      return \"\".concat(cardHeight, \"px\");\n    },\n    justifyContent: 'flex-end',\n    marginBottom: function marginBottom(_ref3) {\n      var _marginBottom = _ref3.marginBottom;\n      return \"\".concat(_marginBottom, \"px\");\n    },\n    transition: 'box-shadow 0.25s ease-in-out',\n    '&:hover': {\n      boxShadow: '0px 3px 6px 2px #ccc'\n    }\n  },\n  image: {// maxHeight: 128,\n  },\n  header: {\n    fontStyle: 'normal',\n    fontWeight: 'bolder',\n    fontSize: '18px',\n    textAlign: 'center',\n    lineHeight: '120%',\n    color: _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__[\"Hex\"].PRIMARY,\n    marginTop: '13px',\n    marginBottom: '13px'\n  },\n  description: {\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n    fontSize: '12px',\n    lineHeight: '15px',\n    textAlign: 'center',\n    color: _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__[\"Hex\"].PRIMARY,\n    marginLeft: '10px',\n    marginRight: '10px',\n    marginBottom: '15px',\n    minHeight: '60px'\n  }\n});\n\nvar ValueCard = function ValueCard(_ref4) {\n  _s();\n\n  var image = _ref4.image,\n      title = _ref4.title,\n      description = _ref4.description,\n      cardHeight = _ref4.cardHeight,\n      cardWidth = _ref4.cardWidth,\n      imageHeight = _ref4.imageHeight,\n      imageWidth = _ref4.imageWidth,\n      marginBottom = _ref4.marginBottom;\n  var styles = useStyles({\n    cardHeight: cardHeight,\n    cardWidth: cardWidth,\n    imageHeight: imageHeight,\n    imageWidth: imageWidth,\n    marginBottom: marginBottom\n  });\n  return __jsx(\"div\", {\n    className: styles.cardContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: styles.image,\n    src: image,\n    alt: \"Value Icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: styles.header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: styles.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, description));\n};\n\n_s(ValueCard, \"3bjLmUB54uhXRX+frDMowQzU8P8=\", false, function () {\n  return [useStyles];\n});\n\n_c = ValueCard;\nValueCard.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.image, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  cardHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  cardWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  imageHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  imageWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  marginBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])\n};\nValueCard.defaultProps = {\n  cardWidth: '300',\n  cardHeight: '270',\n  marginBottom: '25'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ValueCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ValueCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVmFsdWVDYXJkLmpzeD8zNDQ4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjYXJkQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJjYXJkV2lkdGgiLCJoZWlnaHQiLCJjYXJkSGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93IiwiaW1hZ2UiLCJoZWFkZXIiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJIZXgiLCJQUklNQVJZIiwibWFyZ2luVG9wIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtaW5IZWlnaHQiLCJWYWx1ZUNhcmQiLCJ0aXRsZSIsImltYWdlSGVpZ2h0IiwiaW1hZ2VXaWR0aCIsInN0eWxlcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQzNCQyxlQUFhLEVBQUU7QUFDYkMsV0FBTyxFQUFFLE1BREk7QUFFYkMsaUJBQWEsRUFBRSxRQUZGO0FBR2JDLGNBQVUsRUFBRSxRQUhDO0FBSWJDLFNBQUssRUFBRTtBQUFBLFVBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLHVCQUFzQkEsU0FBdEI7QUFBQSxLQUpNO0FBS2JDLFVBQU0sRUFBRTtBQUFBLFVBQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLHVCQUF1QkEsVUFBdkI7QUFBQSxLQUxLO0FBTWJDLGtCQUFjLEVBQUUs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LENBQUNILGlEQUFTLENBQUNJLE1BQVgsRUFBbUJKLGlEQUFTLENBQUNDLE1BQTdCLENBQXBCLENBSlE7QUFLcEI3QixXQUFTLEVBQUU0QixpREFBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILGlEQUFTLENBQUNJLE1BQVgsRUFBbUJKLGlEQUFTLENBQUNDLE1BQTdCLENBQXBCLENBTFM7QUFNcEJMLGFBQVcsRUFBRUksaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDSSxNQUFYLEVBQW1CSixpREFBUyxDQUFDQyxNQUE3QixDQUFwQixDQU5PO0FBT3BCSixZQUFVLEVBQUVHLGlEQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FBQ0gsaURBQVMsQ0FBQ0ksTUFBWCxFQUFtQkosaURBQVMsQ0FBQ0MsTUFBN0IsQ0FBcEIsQ0FQUTtBQVFwQnpCLGNBQVksRUFBRXdCLGlEQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FBQ0gsaURBQVMsQ0FBQ0ksTUFBWCxFQUFtQkosaURBQVMsQ0FBQ0MsTUFBN0IsQ0FBcEI7QUFSTSxDQUF0QjtBQVdBUCxTQUFTLENBQUNXLFlBQVYsR0FBeUI7QUFDdkJqQyxXQUFTLEVBQUUsS0FEWTtBQUV2QkUsWUFBVSxFQUFFLEtBRlc7QUFHdkJFLGNBQVksRUFBRTtBQUhTLENBQXpCO0FBTWVrQix3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29tbW9uL1ZhbHVlQ2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3V0aWwvY29sb3VyVXRpbCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBjYXJkQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHdpZHRoOiAoeyBjYXJkV2lkdGggfSkgPT4gYCR7Y2FyZFdpZHRofXB4YCxcbiAgICBoZWlnaHQ6ICh7IGNhcmRIZWlnaHQgfSkgPT4gYCR7Y2FyZEhlaWdodH1weGAsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgbWFyZ2luQm90dG9tOiAoeyBtYXJnaW5Cb3R0b20gfSkgPT4gYCR7bWFyZ2luQm90dG9tfXB4YCxcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwcHggM3B4IDZweCAycHggI2NjYycsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICAvLyBtYXhIZWlnaHQ6IDEyOCxcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZGVyJyxcbiAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbGluZUhlaWdodDogJzEyMCUnLFxuICAgIGNvbG9yOiBIZXguUFJJTUFSWSxcbiAgICBtYXJnaW5Ub3A6ICcxM3B4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcxM3B4JyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgbGluZUhlaWdodDogJzE1cHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IEhleC5QUklNQVJZLFxuICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzE1cHgnLFxuICAgIG1pbkhlaWdodDogJzYwcHgnLFxuICB9LFxufSk7XG5cbmNvbnN0IFZhbHVlQ2FyZCA9ICh7XG4gIGltYWdlLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNhcmRIZWlnaHQsXG4gIGNhcmRXaWR0aCxcbiAgaW1hZ2VIZWlnaHQsXG4gIGltYWdlV2lkdGgsXG4gIG1hcmdpbkJvdHRvbSxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKHtcbiAgICBjYXJkSGVpZ2h0LFxuICAgIGNhcmRXaWR0aCxcbiAgICBpbWFnZUhlaWdodCxcbiAgICBpbWFnZVdpZHRoLFxuICAgIG1hcmdpbkJvdHRvbSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IHNyYz17aW1hZ2V9IGFsdD1cIlZhbHVlIEljb25cIiAvPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT57dGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L1R5cG9ncmFwaHk+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5WYWx1ZUNhcmQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmltYWdlLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNhcmRIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY2FyZFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGltYWdlSGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGltYWdlV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgbWFyZ2luQm90dG9tOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG59O1xuXG5WYWx1ZUNhcmQuZGVmYXVsdFByb3BzID0ge1xuICBjYXJkV2lkdGg6ICczMDAnLFxuICBjYXJkSGVpZ2h0OiAnMjcwJyxcbiAgbWFyZ2luQm90dG9tOiAnMjUnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmFsdWVDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/ValueCard.jsx\n");

/***/ })

})
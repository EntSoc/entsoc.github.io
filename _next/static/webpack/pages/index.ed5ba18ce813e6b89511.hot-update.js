webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/ValueCard.jsx":
/*!*****************************************!*\
  !*** ./components/common/ValueCard.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/esm/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/colourUtil */ \"./util/colourUtil.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/katie/Developer/entsoc-website/components/common/ValueCard.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  cardContainer: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    width: function width(_ref) {\n      var cardWidth = _ref.cardWidth;\n      return \"\".concat(cardWidth, \"px\");\n    },\n    height: function height(_ref2) {\n      var cardHeight = _ref2.cardHeight;\n      return \"\".concat(cardHeight, \"px\");\n    },\n    justifyContent: 'flex-end',\n    marginBottom: function marginBottom(_ref3) {\n      var _marginBottom = _ref3.marginBottom;\n      return \"\".concat(_marginBottom, \"px\");\n    },\n    transition: 'box-shadow 0.25s ease-in-out',\n    '&:hover': {\n      boxShadow: '0px 3px 6px 2px #ccc'\n    }\n  },\n  image: {\n    width: function width(_ref4) {\n      var imageWidth = _ref4.imageWidth;\n      return \"\".concat(imageWidth, \"px\");\n    },\n    height: function height(_ref5) {\n      var imageHeight = _ref5.imageHeight;\n      return \"\".concat(imageHeight, \"px\");\n    }\n  },\n  header: {\n    fontStyle: 'normal',\n    fontWeight: 'bolder',\n    fontSize: '18px',\n    textAlign: 'center',\n    lineHeight: '120%',\n    color: _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__[\"Hex\"].PRIMARY,\n    marginTop: '13px',\n    marginBottom: '13px'\n  },\n  description: {\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n    fontSize: '12px',\n    lineHeight: '15px',\n    textAlign: 'center',\n    color: _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__[\"Hex\"].PRIMARY,\n    marginLeft: '10px',\n    marginRight: '10px',\n    marginBottom: '15px'\n  },\n  descriptionContainer: {\n    height: '60px',\n    marginTop: -10,\n    marginBottom: '10px'\n  }\n});\n\nvar ValueCard = function ValueCard(_ref6) {\n  _s();\n\n  var image = _ref6.image,\n      title = _ref6.title,\n      description = _ref6.description,\n      cardHeight = _ref6.cardHeight,\n      cardWidth = _ref6.cardWidth,\n      imageHeight = _ref6.imageHeight,\n      imageWidth = _ref6.imageWidth,\n      marginBottom = _ref6.marginBottom;\n  var styles = useStyles({\n    cardHeight: cardHeight,\n    cardWidth: cardWidth,\n    imageHeight: imageHeight,\n    imageWidth: imageWidth,\n    marginBottom: marginBottom\n  });\n  return __jsx(\"div\", {\n    className: styles.cardContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: styles.image,\n    src: image,\n    alt: \"Value Icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: styles.header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, title), __jsx(\"div\", {\n    className: styles.descriptionContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: styles.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, description)));\n};\n\n_s(ValueCard, \"3bjLmUB54uhXRX+frDMowQzU8P8=\", false, function () {\n  return [useStyles];\n});\n\n_c = ValueCard;\nValueCard.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.image, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  cardHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  cardWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  imageHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  imageWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  marginBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])\n};\nValueCard.defaultProps = {\n  cardWidth: '300',\n  cardHeight: '270',\n  marginBottom: '25'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ValueCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ValueCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVmFsdWVDYXJkLmpzeD8zNDQ4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjYXJkQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJjYXJkV2lkdGgiLCJoZWlnaHQiLCJjYXJkSGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93IiwiaW1hZ2UiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJoZWFkZXIiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJIZXgiLCJQUklNQVJZIiwibWFyZ2luVG9wIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkZXNjcmlwdGlvbkNvbnRhaW5lciIsIlZhbHVlQ2FyZCIsInRpdGxlIiwic3R5bGVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHNFQUFVLENBQUM7QUFDM0JDLGVBQWEsRUFBRTtBQUNiQyxXQUFPLEVBQUUsTUFESTtBQUViQyxpQkFBYSxFQUFFLFFBRkY7QUFHYkMsY0FBVSxFQUFFLFFBSEM7QUFJYkMsU0FBSyxFQUFFO0FBQUEsVUFBRUMsU0FBRixRQUFFQSxTQUFGO0FBQUEsdUJBQW9CQSxTQUFwQjtBQUFBLEtBSk07QUFLYkMsVUFBTSxFQUFFO0FBQUEsVUFBRUMsVUFBRixTQUFFQSxVQUFGO0FBQUEsdUJBQXFCQSxVQUFyQjtBQUFBLEtBTEs7QUFNYkMs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L2NvbXBvbmVudHMvY29tbW9uL1ZhbHVlQ2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQge1R5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW1wb3J0IHtIZXh9IGZyb20gJy4uLy4uL3V0aWwvY29sb3VyVXRpbCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBjYXJkQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHdpZHRoOiAoe2NhcmRXaWR0aH0pID0+IGAke2NhcmRXaWR0aH1weGAsXG4gICAgaGVpZ2h0OiAoe2NhcmRIZWlnaHR9KSA9PiBgJHtjYXJkSGVpZ2h0fXB4YCxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBtYXJnaW5Cb3R0b206ICh7bWFyZ2luQm90dG9tfSkgPT4gYCR7bWFyZ2luQm90dG9tfXB4YCxcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwcHggM3B4IDZweCAycHggI2NjYycsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICB3aWR0aDogKHtpbWFnZVdpZHRofSkgPT4gYCR7aW1hZ2VXaWR0aH1weGAsXG4gICAgaGVpZ2h0OiAoe2ltYWdlSGVpZ2h0fSkgPT4gYCR7aW1hZ2VIZWlnaHR9cHhgLFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxuICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBsaW5lSGVpZ2h0OiAnMTIwJScsXG4gICAgY29sb3I6IEhleC5QUklNQVJZLFxuICAgIG1hcmdpblRvcDogJzEzcHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzEzcHgnLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMTVweCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBjb2xvcjogSGV4LlBSSU1BUlksXG4gICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMTVweCcsXG4gIH0sXG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiAnNjBweCcsXG4gICAgbWFyZ2luVG9wOiAtMTAsXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gIH0sXG59KTtcblxuY29uc3QgVmFsdWVDYXJkID0gKHtcbiAgaW1hZ2UsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgY2FyZEhlaWdodCxcbiAgY2FyZFdpZHRoLFxuICBpbWFnZUhlaWdodCxcbiAgaW1hZ2VXaWR0aCxcbiAgbWFyZ2luQm90dG9tLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoe1xuICAgIGNhcmRIZWlnaHQsXG4gICAgY2FyZFdpZHRoLFxuICAgIGltYWdlSGVpZ2h0LFxuICAgIGltYWdlV2lkdGgsXG4gICAgbWFyZ2luQm90dG9tLFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPXtpbWFnZX0gYWx0PVwiVmFsdWUgSWNvblwiLz5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb25Db250YWluZXJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVmFsdWVDYXJkLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5pbWFnZSwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjYXJkSGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNhcmRXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBpbWFnZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBpbWFnZVdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG1hcmdpbkJvdHRvbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcblxuVmFsdWVDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FyZFdpZHRoOiAnMzAwJyxcbiAgY2FyZEhlaWdodDogJzI3MCcsXG4gIG1hcmdpbkJvdHRvbTogJzI1Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZhbHVlQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/ValueCard.jsx\n");

/***/ })

})
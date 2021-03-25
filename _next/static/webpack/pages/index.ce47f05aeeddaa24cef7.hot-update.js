webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/ValueCard.jsx":
/*!*****************************************!*\
  !*** ./components/common/ValueCard.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/esm/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/colourUtil */ \"./util/colourUtil.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/katie/Developer/entsoc-website/components/common/ValueCard.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  cardContainer: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    width: function width(_ref) {\n      var cardWidth = _ref.cardWidth;\n      return \"\".concat(cardWidth, \"px\");\n    },\n    height: function height(_ref2) {\n      var cardHeight = _ref2.cardHeight;\n      return \"\".concat(cardHeight, \"px\");\n    },\n    justifyContent: 'flex-end',\n    marginBottom: function marginBottom(_ref3) {\n      var _marginBottom = _ref3.marginBottom;\n      return \"\".concat(_marginBottom, \"px\");\n    },\n    transition: 'box-shadow 0.25s ease-in-out',\n    '&:hover': {\n      boxShadow: '0px 3px 6px 2px #ccc'\n    }\n  },\n  image: {// maxHeight: 128,\n  },\n  header: {\n    fontStyle: 'normal',\n    fontWeight: 'bolder',\n    fontSize: '18px',\n    textAlign: 'center',\n    lineHeight: '120%',\n    color: _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__[\"Hex\"].PRIMARY,\n    marginTop: '13px',\n    marginBottom: '13px'\n  },\n  description: {\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n    fontSize: '12px',\n    lineHeight: '15px',\n    textAlign: 'justify',\n    color: _util_colourUtil__WEBPACK_IMPORTED_MODULE_4__[\"Hex\"].PRIMARY,\n    marginLeft: '10px',\n    marginRight: '10px',\n    marginBottom: '15px' // height: '60px',\n\n  }\n});\n\nvar ValueCard = function ValueCard(_ref4) {\n  _s();\n\n  var image = _ref4.image,\n      title = _ref4.title,\n      description = _ref4.description,\n      cardHeight = _ref4.cardHeight,\n      cardWidth = _ref4.cardWidth,\n      imageHeight = _ref4.imageHeight,\n      imageWidth = _ref4.imageWidth,\n      marginBottom = _ref4.marginBottom;\n  var styles = useStyles({\n    cardHeight: cardHeight,\n    cardWidth: cardWidth,\n    imageHeight: imageHeight,\n    imageWidth: imageWidth,\n    marginBottom: marginBottom\n  });\n  return __jsx(\"div\", {\n    className: styles.cardContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: styles.image,\n    src: image,\n    alt: \"Value Icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: styles.header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: styles.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, description));\n};\n\n_s(ValueCard, \"3bjLmUB54uhXRX+frDMowQzU8P8=\", false, function () {\n  return [useStyles];\n});\n\n_c = ValueCard;\nValueCard.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.image, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  cardHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  cardWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  imageHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  imageWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  marginBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])\n};\nValueCard.defaultProps = {\n  cardWidth: '300',\n  cardHeight: '270',\n  marginBottom: '25'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ValueCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ValueCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVmFsdWVDYXJkLmpzeD8zNDQ4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjYXJkQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJjYXJkV2lkdGgiLCJoZWlnaHQiLCJjYXJkSGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93IiwiaW1hZ2UiLCJoZWFkZXIiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJIZXgiLCJQUklNQVJZIiwibWFyZ2luVG9wIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJWYWx1ZUNhcmQiLCJ0aXRsZSIsImltYWdlSGVpZ2h0IiwiaW1hZ2VXaWR0aCIsInN0eWxlcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQzNCQyxlQUFhLEVBQUU7QUFDYkMsV0FBTyxFQUFFLE1BREk7QUFFYkMsaUJBQWEsRUFBRSxRQUZGO0FBR2JDLGNBQVUsRUFBRSxRQUhDO0FBSWJDLFNBQUssRUFBRTtBQUFBLFVBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLHVCQUFzQkEsU0FBdEI7QUFBQSxLQUpNO0FBS2JDLFVBQU0sRUFBRTtBQUFBLFVBQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLHVCQUF1QkEsVUFBdkI7QUFBQSxLQUxLO0FBTWJDLGtCQUFjLEVBQUUsVUFOSDtBQU9iQyxn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LEVBQW1CSixpREFBUyxDQUFDQyxNQUE3QixDQUFwQixDQUpRO0FBS3BCNUIsV0FBUyxFQUFFMkIsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDSSxNQUFYLEVBQW1CSixpREFBUyxDQUFDQyxNQUE3QixDQUFwQixDQUxTO0FBTXBCTCxhQUFXLEVBQUVJLGlEQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FBQ0gsaURBQVMsQ0FBQ0ksTUFBWCxFQUFtQkosaURBQVMsQ0FBQ0MsTUFBN0IsQ0FBcEIsQ0FOTztBQU9wQkosWUFBVSxFQUFFRyxpREFBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILGlEQUFTLENBQUNJLE1BQVgsRUFBbUJKLGlEQUFTLENBQUNDLE1BQTdCLENBQXBCLENBUFE7QUFRcEJ4QixjQUFZLEVBQUV1QixpREFBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILGlEQUFTLENBQUNJLE1BQVgsRUFBbUJKLGlEQUFTLENBQUNDLE1BQTdCLENBQXBCO0FBUk0sQ0FBdEI7QUFXQVAsU0FBUyxDQUFDVyxZQUFWLEdBQXlCO0FBQ3ZCaEMsV0FBUyxFQUFFLEtBRFk7QUFFdkJFLFlBQVUsRUFBRSxLQUZXO0FBR3ZCRSxjQUFZLEVBQUU7QUFIUyxDQUF6QjtBQU1laUIsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9WYWx1ZUNhcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi91dGlsL2NvbG91clV0aWwnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY2FyZENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB3aWR0aDogKHsgY2FyZFdpZHRoIH0pID0+IGAke2NhcmRXaWR0aH1weGAsXG4gICAgaGVpZ2h0OiAoeyBjYXJkSGVpZ2h0IH0pID0+IGAke2NhcmRIZWlnaHR9cHhgLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIG1hcmdpbkJvdHRvbTogKHsgbWFyZ2luQm90dG9tIH0pID0+IGAke21hcmdpbkJvdHRvbX1weGAsXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMHB4IDNweCA2cHggMnB4ICNjY2MnLFxuICAgIH0sXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgLy8gbWF4SGVpZ2h0OiAxMjgsXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGRlcicsXG4gICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGxpbmVIZWlnaHQ6ICcxMjAlJyxcbiAgICBjb2xvcjogSGV4LlBSSU1BUlksXG4gICAgbWFyZ2luVG9wOiAnMTNweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMTNweCcsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcxNXB4JyxcbiAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgICBjb2xvcjogSGV4LlBSSU1BUlksXG4gICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMTVweCcsXG4gICAgLy8gaGVpZ2h0OiAnNjBweCcsXG4gIH0sXG59KTtcblxuY29uc3QgVmFsdWVDYXJkID0gKHtcbiAgaW1hZ2UsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgY2FyZEhlaWdodCxcbiAgY2FyZFdpZHRoLFxuICBpbWFnZUhlaWdodCxcbiAgaW1hZ2VXaWR0aCxcbiAgbWFyZ2luQm90dG9tLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoe1xuICAgIGNhcmRIZWlnaHQsXG4gICAgY2FyZFdpZHRoLFxuICAgIGltYWdlSGVpZ2h0LFxuICAgIGltYWdlV2lkdGgsXG4gICAgbWFyZ2luQm90dG9tLFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPXtpbWFnZX0gYWx0PVwiVmFsdWUgSWNvblwiIC8+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9Pnt0aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvVHlwb2dyYXBoeT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblZhbHVlQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuaW1hZ2UsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY2FyZEhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjYXJkV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgaW1hZ2VIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgaW1hZ2VXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBtYXJnaW5Cb3R0b206IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG5cblZhbHVlQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhcmRXaWR0aDogJzMwMCcsXG4gIGNhcmRIZWlnaHQ6ICcyNzAnLFxuICBtYXJnaW5Cb3R0b206ICcyNScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWx1ZUNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/ValueCard.jsx\n");

/***/ })

})
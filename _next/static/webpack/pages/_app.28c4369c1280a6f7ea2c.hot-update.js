webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Theme.js":
/*!*****************************!*\
  !*** ./components/Theme.js ***!
  \*****************************/
/*! exports provided: Colors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Colors\", function() { return Colors; });\n/* harmony import */ var _material_ui_core_styles_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles/index */ \"./node_modules/@material-ui/core/styles/index.js\");\n/* harmony import */ var _material_ui_core_styles_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_index__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Colors = {\n  main: '#141C5A',\n  dark: '#3F1DCB',\n  divider: '#D3D3D3'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles_index__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: Colors.main,\n      dark: Colors.dark\n    },\n    secondary: {\n      main: '#3F1DCB'\n    }\n  },\n  overrides: {\n    MuiButtonBase: {\n      root: {\n        display: 'block',\n        width: '100%',\n        justifyContent: 'flex-end'\n      }\n    },\n    MuiDrawer: {\n      paper: {\n        background: Colors.main,\n        color: 'white',\n        top: '20vh',\n        display: 'inline-block',\n        flexDirection: 'column',\n        justifyContent: 'flex-end'\n      },\n      paperAnchorRight: {\n        left: '20vh'\n      }\n    },\n    MuiTab: {\n      root: {\n        backgroundColor: 'none',\n        \"&$selected\": {\n          backgroundColor: Colors.main,\n          color: 'white'\n        }\n      }\n    },\n    MuiTabs: {\n      vertical: {\n        borderRight: \"1px solid \".concat(Colors.divider)\n      }\n    },\n    MuiSvgIcon: {\n      root: {\n        width: '50%',\n        height: '50%'\n      }\n    },\n    MuiFab: {\n      extended: {\n        backgroundColor: '#EB5660',\n        padding: '0 24px',\n        '&:hover': {\n          backgroundColor: '#FB7D85'\n        }\n      },\n      label: {\n        color: '#FFF',\n        fontSize: 17\n      }\n    }\n  },\n  typography: {\n    fontFamily: ['\"Montserrat\", sans-serif'],\n    title: {\n      fontWeight: 400,\n      fontSize: 27,\n      lineHeight: 1.5\n    },\n    caption: {\n      fontSize: 14,\n      lineHeight: 1.4\n    },\n    h2: {\n      fontWeight: 600,\n      fontSize: 60,\n      lineHeight: 1.6\n    },\n    h3: {\n      fontWeight: 600,\n      fontSize: 35,\n      lineHeight: 1.2\n    },\n    // for button\n    h4: {\n      fontSize: 21,\n      color: '#fff'\n    },\n    h5: {\n      fontSize: 22,\n      lineHeight: 1.4,\n      fontWeight: 500\n    },\n    h6: {\n      fontSize: 22,\n      lineHeight: 1.3\n    },\n    body1: {\n      fontWeight: 400,\n      fontSize: 24,\n      lineHeight: 3,\n      color: '#fff'\n    },\n    body2: {\n      fontWeight: 400,\n      fontSize: 15,\n      lineHeight: 1.4\n    },\n    overline: {\n      fontSize: 14,\n      lineHeight: 1.4\n    },\n    subtitle1: {\n      fontSize: 14,\n      lineHeight: 1.4,\n      fontWeight: 400\n    },\n    subtitle2: {\n      fontSize: 13,\n      lineHeight: 1.4,\n      fontWeight: 400,\n      color: '#fff'\n    }\n  }\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaGVtZS5qcz9mOGM4Il0sIm5hbWVzIjpbIkNvbG9ycyIsIm1haW4iLCJkYXJrIiwiZGl2aWRlciIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJvdmVycmlkZXMiLCJNdWlCdXR0b25CYXNlIiwicm9vdCIsImRpc3BsYXkiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiTXVpRHJhd2VyIiwicGFwZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ0b3AiLCJmbGV4RGlyZWN0aW9uIiwicGFwZXJBbmNob3JSaWdodCIsImxlZnQiLCJNdWlUYWIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlUYWJzIiwidmVydGljYWwiLCJib3JkZXJSaWdodCIsIk11aVN2Z0ljb24iLCJoZWlnaHQiLCJNdWlGYWIiLCJleHRlbmRlZCIsInBhZGRpbmciLCJsYWJlbCIsImZvbnRTaXplIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiY2FwdGlvbiIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJib2R5MSIsImJvZHkyIiwib3ZlcmxpbmUiLCJzdWJ0aXRsZTEiLCJzdWJ0aXRsZTIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxNQUFNLEdBQUc7QUFDcEJDLE1BQUksRUFBRSxTQURjO0FBRXBCQyxNQUFJLEVBQUUsU0FGYztBQUdwQkMsU0FBTyxFQUFFO0FBSFcsQ0FBZjtBQU1RQyxvSkFBYyxDQUFDO0FBQzVCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFO0FBQ1BMLFVBQUksRUFBRUQsTUFBTSxDQUFDQyxJQUROO0FBRVBDLFVBQUksRUFBRUYsTUFBTSxDQUFDRTtBQUZOLEtBREY7QUFLUEssYUFBUyxFQUFFO0FBQ1ROLFVBQUksRUFBRTtBQURHO0FBTEosR0FEbUI7QUFV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QUU7QUFISCxLQXBERDtBQTBEVlksYUFBUyxFQUFFO0FBQ1RoQixjQUFRLEVBQUUsRUFERDtBQUVUSyxnQkFBVSxFQUFFLEdBRkg7QUFHVEQsZ0JBQVUsRUFBRSxHQUhIO0FBSVRwQixXQUFLLEVBQUU7QUFKRTtBQTFERDtBQWxFZ0IsQ0FBRCxDQUE3QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGhlbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBDb2xvcnMgPSB7XG4gIG1haW46ICcjMTQxQzVBJyxcbiAgZGFyazogJyMzRjFEQ0InLFxuICBkaXZpZGVyOiAnI0QzRDNEMydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IENvbG9ycy5tYWluLFxuICAgICAgZGFyazogQ29sb3JzLmRhcmssXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjM0YxRENCJyxcbiAgICB9XG4gIH0sXG4gIG92ZXJyaWRlczoge1xuICAgIE11aUJ1dHRvbkJhc2U6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpRHJhd2VyOiB7XG4gICAgICBwYXBlcjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBDb2xvcnMubWFpbixcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHRvcDogJzIwdmgnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgfSxcbiAgICAgIHBhcGVyQW5jaG9yUmlnaHQ6IHtcbiAgICAgICAgbGVmdDogJzIwdmgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRhYjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJyxcbiAgICAgICAgXCImJHNlbGVjdGVkXCI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy5tYWluLFxuICAgICAgICAgIGNvbG9yOid3aGl0ZSdcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgIH0sXG4gICAgTXVpVGFiczoge1xuICAgICAgdmVydGljYWw6e1xuICAgICAgICBib3JkZXJSaWdodDogYDFweCBzb2xpZCAke0NvbG9ycy5kaXZpZGVyfWAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpU3ZnSWNvbjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICB3aWR0aDogJzUwJScsXG4gICAgICAgIGhlaWdodDogJzUwJScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpRmFiOiB7XG4gICAgICBleHRlbmRlZDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUI1NjYwJyxcbiAgICAgICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGQjdEODUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIGNvbG9yOiAnI0ZGRicsXG4gICAgICAgIGZvbnRTaXplOiAxNyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgICdcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZicsXG4gICAgXSxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgZm9udFNpemU6IDI3LFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgIH0sXG4gICAgY2FwdGlvbjoge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgIGZvbnRTaXplOiA2MCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICB9LFxuICAgIGgzOiB7XG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICBmb250U2l6ZTogMzUsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgfSxcbiAgICAvLyBmb3IgYnV0dG9uXG4gICAgaDQ6IHtcbiAgICAgIGZvbnRTaXplOiAyMSxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgfSxcbiAgICBoNToge1xuICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgIH0sXG4gICAgaDY6IHtcbiAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMyxcbiAgICB9LFxuICAgIGJvZHkxOiB7XG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBmb250U2l6ZTogMjQsXG4gICAgICBsaW5lSGVpZ2h0OiAzLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBmb250U2l6ZTogMTUsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgfSxcbiAgICBvdmVybGluZToge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgIH0sXG4gICAgc3VidGl0bGUxOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgfSxcblxuICAgIHN1YnRpdGxlMjoge1xuICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Theme.js\n");

/***/ })

})
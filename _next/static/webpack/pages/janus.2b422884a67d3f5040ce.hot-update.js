webpackHotUpdate_N_E("pages/janus",{

/***/ "./components/janus/DropDownMenu.jsx":
/*!*******************************************!*\
  !*** ./components/janus/DropDownMenu.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ \"./node_modules/@material-ui/core/esm/ClickAwayListener/index.js\");\n/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grow */ \"./node_modules/@material-ui/core/esm/Grow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Popper */ \"./node_modules/@material-ui/core/esm/Popper/index.js\");\n/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuList */ \"./node_modules/@material-ui/core/esm/MenuList/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ \"./node_modules/@material-ui/icons/ArrowDropDown.js\");\n/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _DropDownMenu_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DropDownMenu.scss */ \"./components/janus/DropDownMenu.scss\");\n/* harmony import */ var _DropDownMenu_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_DropDownMenu_scss__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _DropDownMenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DropDownMenuItem */ \"./components/janus/DropDownMenuItem.jsx\");\n/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Clear */ \"./node_modules/@material-ui/icons/Clear.js\");\n/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Check */ \"./node_modules/@material-ui/icons/Check.js\");\n/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/katie/Developer/entsoc-website/components/janus/DropDownMenu.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__[\"makeStyles\"])(function (theme) {\n  return {\n    toggleDropdown: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({\n      marginLeft: '20px',\n      paddingLeft: '20px',\n      paddingRight: '20px',\n      textTransform: 'none',\n      fontStyle: 'normal',\n      fontWeight: 'normal',\n      fontSize: '15px',\n      lineHeight: '18px',\n      boxShadow: [\"inset 2px 0 0 0px #E7E8EF\", // gray left border\n      \"inset -2px 0 0 0px #E7E8EF\", // gray right border\n      \"inset 0 2px 0 0px #E7E8EF\", // gray top border\n      \"inset 0 -2px 0 0px #E7E8EF\" // gray bottom border\n      ],\n      borderRadius: 0\n    }, theme.breakpoints.down('sm'), {\n      marginTop: 10\n    }),\n    menuPopper: {\n      zIndex: 1\n    }\n  };\n});\n\nvar DropDownMenu = function DropDownMenu(props) {\n  _s();\n\n  var title = props.title,\n      items = props.items,\n      onSelect = props.onSelect,\n      multiselectable = props.multiselectable,\n      initialSelectedIndices = props.initialSelectedIndices,\n      getSelectedMenuItemColour = props.getSelectedMenuItemColour,\n      scrollable = props.scrollable;\n  var styles = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),\n      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(initialSelectedIndices),\n      _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState3, 2),\n      selectedItemIndices = _React$useState4[0],\n      setSelectedItemIndices = _React$useState4[1];\n\n  var anchorRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(null);\n\n  var handleToggle = function handleToggle() {\n    setOpen(function (prevOpen) {\n      return !prevOpen;\n    });\n  };\n\n  var handleClose = function handleClose(event) {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleItemSelection = function handleItemSelection(selectedItemIndex) {\n    if (!multiselectable) {\n      setSelectedItemIndices([selectedItemIndex]);\n    } else if (selectedItemIndices.includes(selectedItemIndex)) {\n      setSelectedItemIndices(selectedItemIndices.filter(function (i) {\n        return i !== selectedItemIndex;\n      }));\n    } else {\n      setSelectedItemIndices([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(selectedItemIndices), [selectedItemIndex]));\n    }\n  };\n\n  var handleItemClick = function handleItemClick(event, index) {\n    var selectedItem = items[index];\n    onSelect(selectedItem.key);\n    handleItemSelection(index);\n    handleClose(event);\n  };\n\n  var handleListKeyDown = function handleListKeyDown(event) {\n    if (event.key === \"Tab\") {\n      event.preventDefault();\n      setOpen(false);\n    }\n  }; // return focus to the button when we transitioned from !open -> open\n\n\n  var prevOpen = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(open);\n  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {\n    if (prevOpen.current === true && open === false) {\n      anchorRef.current.focus();\n    }\n\n    prevOpen.current = open;\n  }, [open]);\n\n  var growProps = function growProps(_ref) {\n    var placement = _ref.placement;\n    return _objectSpread(_objectSpread({}, scrollable && {\n      maxHeight: '500px',\n      overflow: 'scroll'\n    }), {}, {\n      transformOrigin: placement === \"bottom\" ? \"center bottom\" : \"center bottom\"\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: styles.toggleDropdown,\n    ref: anchorRef,\n    \"aria-controls\": open ? \"menu-list-grow\" : undefined,\n    \"aria-haspopup\": \"true\",\n    onClick: handleToggle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, title, \" \", __jsx(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_12___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 17\n    }\n  })), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    open: open,\n    anchorEl: anchorRef.current,\n    role: undefined,\n    transition: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }\n  }, function (_ref2) {\n    var TransitionProps = _ref2.TransitionProps,\n        placement = _ref2.placement;\n    return __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, TransitionProps, {\n      style: growProps(placement),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 11\n      }\n    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      onClickAway: handleClose,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_10__[\"default\"] // className={styles.menuList}\n    , {\n      disablePadding: true,\n      dense: true,\n      autoFocusItem: open,\n      id: \"menu-list-grow\",\n      onKeyDown: handleListKeyDown,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 17\n      }\n    }, items && items.map(function (item, index) {\n      return __jsx(_DropDownMenuItem__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n        key: item.key,\n        selected: selectedItemIndices.includes(index),\n        onClick: function onClick(event) {\n          return handleItemClick(event, index);\n        },\n        text: item.text,\n        SelectedIcon: multiselectable ? _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_16___default.a : _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17___default.a,\n        selectedColour: getSelectedMenuItemColour(index, item.key),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 21\n        }\n      });\n    })))));\n  }));\n};\n\n_s(DropDownMenu, \"8R3PmZ6TH/P2G3DjBGeEbkTRAog=\", false, function () {\n  return [useStyles];\n});\n\n_c = DropDownMenu;\nDropDownMenu.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired,\n  items: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.shape({\n    key: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired,\n    text: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired\n  })),\n  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func.isRequired,\n  multiselectable: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,\n  initialSelectedIndices: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number),\n  getSelectedMenuItemColour: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func.isRequired // will pass index, item.key to this function\n\n};\nDropDownMenu.defaultProps = {\n  multiselectable: false,\n  initialSelectedIndices: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropDownMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"DropDownMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qYW51cy9Ecm9wRG93bk1lbnUuanN4PzQ0MWEiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidG9nZ2xlRHJvcGRvd24iLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImJyZWFrcG9pbnRzIiwiZG93biIsIm1hcmdpblRvcCIsIm1lbnVQb3BwZXIiLCJ6SW5kZXgiLCJEcm9wRG93bk1lbnUiLCJwcm9wcyIsInRpdGxlIiwiaXRlbXMiLCJvblNlbGVjdCIsIm11bHRpc2VsZWN0YWJsZSIsImluaXRpYWxTZWxlY3RlZEluZGljZXMiLCJnZXRTZWxlY3RlZE1lbnVJdGVtQ29sb3VyIiwic2Nyb2xsYWJsZSIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInNlbGVjdGVkSXRlbUluZGljZXMiLCJzZXRTZWxlY3RlZEl0ZW1JbmRpY2VzIiwiYW5jaG9yUmVmIiwidXNlUmVmIiwiaGFuZGxlVG9nZ2xlIiwicHJldk9wZW4iLCJoYW5kbGVDbG9zZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlSXRlbVNlbGVjdGlvbiIsInNlbGVjdGVkSXRlbUluZGV4IiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpIiwiaGFuZGxlSXRlbUNsaWNrIiwiaW5kZXgiLCJzZWxlY3RlZEl0ZW0iLCJrZXkiLCJoYW5kbGVMaXN0S2V5RG93biIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwiZm9jdXMiLCJncm93UHJvcHMiLCJwbGFjZW1lbnQiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsInRyYW5zZm9ybU9yaWdpbiIsInVuZGVmaW5lZCIsIlRyYW5zaXRpb25Qcm9wcyIsIm1hcCIsIml0ZW0iLCJ0ZXh0IiwiQ2xlYXJJY29uIiwiQ2hlY2tJY29uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJzaGFwZSIsImZ1bmMiLCJib29sIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLGtCQUFjLEVBQUU7QUFDZEMsZ0JBQVUsRUFBRSxNQURBO0FBRVpDLGlCQUFXLEVBQUUsTUFGRDtBQUdaQyxrQkFBWSxFQUFFLE1BSEY7QUFJWkMsbUJBQWEsRUFBRSxNQUpIO0FBS1pDLGVBQVMsRUFBRSxRQUxDO0FBTVpDLGdCQUFVLEVBQUUsUUFOQTtBQU9aQyxjQUFRLEVBQUUsTUFQRTtBQVFaQyxnQkFBVSxFQUFFLE1BUkE7QUFTWkMsZUFBUyxFQUFFLDhCQUNvQjtBQURwQixvQ0FFcUI7QUFGckIsbUNBR29CO0FBSHBCLG1DQUlxQjtBQUpyQixPQVRDO0FBZVpDLGtCQUFZLEVBQUU7QUFmRixPQWdCWFgsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQWhCVyxFQWdCb0I7QUFDOUJDLGVBQVMsRUFBRTtBQURtQixLQWhCcEIsQ0FEdUI7QUFxQnJDQyxjQUFVLEVBQUU7QUFDVkMsWUFBTSxFQUFFO0FBREU7QUFyQnlCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQTBCQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUU1QkMsS0FGNEIsR0FTMUJELEtBVDBCLENBRTVCQyxLQUY0QjtB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QUFWLENBQWlCQyxVQUREO0FBRXZCbEQsT0FBSyxFQUFFZ0Qsa0RBQVMsQ0FBQ0csT0FBVixDQUFrQkgsa0RBQVMsQ0FBQ0ksS0FBVixDQUFnQjtBQUN2Q3RCLE9BQUcsRUFBRWtCLGtEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRGlCO0FBRXZDTixRQUFJLEVBQUVJLGtEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRmdCLEdBQWhCLENBQWxCLENBRmdCO0FBTXZCakQsVUFBUSxFQUFFK0Msa0RBQVMsQ0FBQ0ssSUFBVixDQUFlSCxVQU5GO0FBT3ZCaEQsaUJBQWUsRUFBRThDLGtEQUFTLENBQUNNLElBUEo7QUFRdkJuRCx3QkFBc0IsRUFBRTZDLGtEQUFTLENBQUNHLE9BQVYsQ0FBa0JILGtEQUFTLENBQUNPLE1BQTVCLENBUkQ7QUFTdkJuRCwyQkFBeUIsRUFBRTRDLGtEQUFTLENBQUNLLElBQVYsQ0FBZUgsVUFUbkIsQ0FTK0I7O0FBVC9CLENBQXpCO0FBWUFyRCxZQUFZLENBQUMyRCxZQUFiLEdBQTRCO0FBQzFCdEQsaUJBQWUsRUFBRSxLQURTO0FBRTFCQyx3QkFBc0IsRUFBRTtBQUZFLENBQTVCO0FBS2VOLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9qYW51cy9Ecm9wRG93bk1lbnUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lcic7XG5pbXBvcnQgR3JvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Hcm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcHBlcic7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3QnO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQXJyb3dEcm9wRG93bkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL0Ryb3BEb3duTWVudS5zY3NzJztcbmltcG9ydCBEcm9wRG93bk1lbnVJdGVtIGZyb20gXCJjb21wb25lbnRzL2phbnVzL0Ryb3BEb3duTWVudUl0ZW1cIjtcbmltcG9ydCBDbGVhckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiO1xuaW1wb3J0IENoZWNrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRvZ2dsZURyb3Bkb3duOiB7XG4gICAgbWFyZ2luTGVmdDogJzIwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMjBweCcsXG4gICAgcGFkZGluZ1JpZ2h0OiAnMjBweCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6ICcxNXB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgYm94U2hhZG93OiBbXG4gICAgICBgaW5zZXQgMnB4IDAgMCAwcHggI0U3RThFRmAsIC8vIGdyYXkgbGVmdCBib3JkZXJcbiAgICAgIGBpbnNldCAtMnB4IDAgMCAwcHggI0U3RThFRmAsIC8vIGdyYXkgcmlnaHQgYm9yZGVyXG4gICAgICBgaW5zZXQgMCAycHggMCAwcHggI0U3RThFRmAsIC8vIGdyYXkgdG9wIGJvcmRlclxuICAgICAgYGluc2V0IDAgLTJweCAwIDBweCAjRTdFOEVGYCwgLy8gZ3JheSBib3R0b20gYm9yZGVyXG4gICAgXSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIH0sXG4gIH0sXG4gIG1lbnVQb3BwZXI6IHtcbiAgICB6SW5kZXg6IDEsXG4gIH1cbn0pKTtcblxuY29uc3QgRHJvcERvd25NZW51ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBpdGVtcyxcbiAgICBvblNlbGVjdCxcbiAgICBtdWx0aXNlbGVjdGFibGUsXG4gICAgaW5pdGlhbFNlbGVjdGVkSW5kaWNlcyxcbiAgICBnZXRTZWxlY3RlZE1lbnVJdGVtQ29sb3VyLFxuICAgIHNjcm9sbGFibGUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW1JbmRpY2VzLCBzZXRTZWxlY3RlZEl0ZW1JbmRpY2VzXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxTZWxlY3RlZEluZGljZXMpO1xuXG4gIGNvbnN0IGFuY2hvclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0T3BlbigocHJldk9wZW4pID0+ICFwcmV2T3Blbik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoYW5jaG9yUmVmLmN1cnJlbnQgJiYgYW5jaG9yUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUl0ZW1TZWxlY3Rpb24gPSAoc2VsZWN0ZWRJdGVtSW5kZXgpID0+IHtcbiAgICBpZiAoIW11bHRpc2VsZWN0YWJsZSkge1xuICAgICAgc2V0U2VsZWN0ZWRJdGVtSW5kaWNlcyhbc2VsZWN0ZWRJdGVtSW5kZXhdKVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJdGVtSW5kaWNlcy5pbmNsdWRlcyhzZWxlY3RlZEl0ZW1JbmRleCkpIHtcbiAgICAgIHNldFNlbGVjdGVkSXRlbUluZGljZXMoc2VsZWN0ZWRJdGVtSW5kaWNlcy5maWx0ZXIoaSA9PiBpICE9PSBzZWxlY3RlZEl0ZW1JbmRleCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkSXRlbUluZGljZXMoWy4uLnNlbGVjdGVkSXRlbUluZGljZXMsIHNlbGVjdGVkSXRlbUluZGV4XSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIG9uU2VsZWN0KHNlbGVjdGVkSXRlbS5rZXkpO1xuICAgIGhhbmRsZUl0ZW1TZWxlY3Rpb24oaW5kZXgpO1xuICAgIGhhbmRsZUNsb3NlKGV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxpc3RLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybiBmb2N1cyB0byB0aGUgYnV0dG9uIHdoZW4gd2UgdHJhbnNpdGlvbmVkIGZyb20gIW9wZW4gLT4gb3BlblxuICBjb25zdCBwcmV2T3BlbiA9IFJlYWN0LnVzZVJlZihvcGVuKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJldk9wZW4uY3VycmVudCA9PT0gdHJ1ZSAmJiBvcGVuID09PSBmYWxzZSkge1xuICAgICAgYW5jaG9yUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwcmV2T3Blbi5jdXJyZW50ID0gb3BlbjtcbiAgfSwgW29wZW5dKTtcblxuXG4gIGNvbnN0IGdyb3dQcm9wcyA9ICh7cGxhY2VtZW50fSkgPT4gKHtcbiAgICAuLi4oc2Nyb2xsYWJsZSAmJiB7XG4gICAgICBtYXhIZWlnaHQ6ICc1MDBweCcsXG4gICAgICBvdmVyZmxvdzogJ3Njcm9sbCdcbiAgICB9KSxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHBsYWNlbWVudCA9PT0gXCJib3R0b21cIiA/IFwiY2VudGVyIGJvdHRvbVwiIDogXCJjZW50ZXIgYm90dG9tXCIsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlRHJvcGRvd259XG4gICAgICAgIHJlZj17YW5jaG9yUmVmfVxuICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuID8gXCJtZW51LWxpc3QtZ3Jvd1wiIDogdW5kZWZpbmVkfVxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cbiAgICAgID5cbiAgICAgICAge3RpdGxlfSA8QXJyb3dEcm9wRG93bkljb24vPlxuICAgICAgPC9CdXR0b24+XG4gICAgICA8UG9wcGVyIG9wZW49e29wZW59IGFuY2hvckVsPXthbmNob3JSZWYuY3VycmVudH0gcm9sZT17dW5kZWZpbmVkfSB0cmFuc2l0aW9uID5cbiAgICAgICAgeyh7VHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnR9KSA9PiAoXG4gICAgICAgICAgPEdyb3dcbiAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XG4gICAgICAgICAgICBzdHlsZT17Z3Jvd1Byb3BzKHBsYWNlbWVudCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBhcGVyPlxuICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICA8TWVudUxpc3RcbiAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVMaXN0fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZVBhZGRpbmdcbiAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNJdGVtPXtvcGVufVxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZW51LWxpc3QtZ3Jvd1wiXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtcyAmJlxuICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RHJvcERvd25NZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbUluZGljZXMuaW5jbHVkZXMoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlSXRlbUNsaWNrKGV2ZW50LCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdGVkSWNvbj17bXVsdGlzZWxlY3RhYmxlID8gQ2xlYXJJY29uIDogQ2hlY2tJY29ufVxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3VyPXtnZXRTZWxlY3RlZE1lbnVJdGVtQ29sb3VyKGluZGV4LCBpdGVtLmtleSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L0dyb3c+XG4gICAgICAgICl9XG4gICAgICA8L1BvcHBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRyb3BEb3duTWVudS5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGtleTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkpLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbXVsdGlzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW5pdGlhbFNlbGVjdGVkSW5kaWNlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gIGdldFNlbGVjdGVkTWVudUl0ZW1Db2xvdXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIHdpbGwgcGFzcyBpbmRleCwgaXRlbS5rZXkgdG8gdGhpcyBmdW5jdGlvblxufTtcblxuRHJvcERvd25NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgbXVsdGlzZWxlY3RhYmxlOiBmYWxzZSxcbiAgaW5pdGlhbFNlbGVjdGVkSW5kaWNlczogW10sXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/janus/DropDownMenu.jsx\n");

/***/ })

})
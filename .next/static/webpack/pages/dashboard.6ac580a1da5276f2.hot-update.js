"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/CollapsableProdInfo/CollapseCard.js":
/*!********************************************************!*\
  !*** ./components/CollapsableProdInfo/CollapseCard.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CollapseCard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/esm/List/index.js\");\n/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItemButton */ \"./node_modules/@mui/material/esm/ListItemButton/index.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"./node_modules/@mui/material/esm/ListItemIcon/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/esm/ListItemText/index.js\");\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Collapse */ \"./node_modules/@mui/material/esm/Collapse/index.js\");\n/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ExpandLess */ \"./node_modules/@mui/icons-material/ExpandLess.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapsableCard.module.css */ \"./components/CollapsableProdInfo/collapsableCard.module.css\");\n/* harmony import */ var _collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// for this function i cant seem to get it to work in the collapsed card so that it prints depending on if it was approved/rejected/pending\nvar Status = function(param) {\n    var status = param.status;\n    if (status = \"Approved\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"test\",\n            className: (_collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n            style: {\n                backgroundColor: \"green\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().status),\n                children: \"approved\"\n            }, void 0, false, {\n                fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, _this);\n    } else if (status = \"Reject\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"test\",\n            className: (_collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n            style: {\n                backgroundColor: \"red\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().status),\n                children: \"Rejected\"\n            }, void 0, false, {\n                fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, _this);\n    } else if (status = \"Pending\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"test\",\n            className: (_collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n            style: {\n                backgroundColor: \"black\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().status),\n                children: \"Pending\"\n            }, void 0, false, {\n                fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, _this);\n    }\n};\n_c = Status;\nfunction CollapseCard(param) {\n    var product = param.product;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), open = ref[0], setOpen = ref[1];\n    var handleClick = function(index) {\n        setOpen(!open);\n    };\n    var statuss = \"Rejected\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                border: \"0.5px grey solid\",\n                                borderRadius: \"8px\",\n                                marginRight: \"30px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                style: {\n                                    height: \"100px\",\n                                    width: \"100px\",\n                                    borderRadius: \"8px\"\n                                },\n                                src: product.data.pictures[0]\n                            }, void 0, false, {\n                                fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        primary: product.data.name\n                    }, void 0, false, {\n                        fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Status, {\n                        status: statuss\n                    }, void 0, false, {\n                        fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this),\n                    open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                        lineNumber: 71,\n                        columnNumber: 38\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                in: open,\n                timeout: \"auto\",\n                unmountOnExit: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    component: \"div\",\n                    disablePadding: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                pl: 4\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                primary: \"Highest Bid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: (_collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().bid),\n                            primary: \"Bidders\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_collapsableCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().bid),\n                                primary: \"Bidders\"\n                            }, void 0, false, {\n                                fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/angelawang/Desktop/EcommerceWebsite/components/CollapsableProdInfo/CollapseCard.js\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(CollapseCard, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c1 = CollapseCard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Status\");\n$RefreshReg$(_c1, \"CollapseCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbGxhcHNhYmxlUHJvZEluZm8vQ29sbGFwc2VDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQStCO0FBQ3lCO0FBQ2xCO0FBQ29CO0FBQ0o7QUFDQTtBQUNSO0FBQ1U7QUFDSjtBQUNKO0FBQ1E7QUFDQTtBQUNBO0FBQ047QUFHbEQsMklBQTJJO0FBQzNJLElBQU1jLE1BQU0sR0FBRyxnQkFBYztRQUFaQyxNQUFNLFNBQU5BLE1BQU07SUFFbkIsSUFBSUEsTUFBTSxHQUFHLFVBQVUsRUFBQztRQUNwQixxQkFDSSw4REFBQ0MsS0FBRztZQUFDQyxFQUFFLEVBQUMsTUFBTTtZQUFDQyxTQUFTLEVBQUVMLDhFQUFnQjtZQUFFTyxLQUFLLEVBQUU7Z0JBQUNDLGVBQWUsRUFBQyxPQUFPO2FBQUM7c0JBQ3hFLDRFQUFDQyxHQUFDO2dCQUFDSixTQUFTLEVBQUVMLDJFQUFhOzBCQUFFLFVBRTdCOzs7OztxQkFBSTs7Ozs7aUJBQ0YsQ0FDVDtJQUNMLE9BQ0ssSUFBSUUsTUFBTSxHQUFHLFFBQVEsRUFBQztRQUN2QixxQkFDSSw4REFBQ0MsS0FBRztZQUFDQyxFQUFFLEVBQUMsTUFBTTtZQUFDQyxTQUFTLEVBQUVMLDhFQUFnQjtZQUFFTyxLQUFLLEVBQUU7Z0JBQUNDLGVBQWUsRUFBQyxLQUFLO2FBQUM7c0JBQ3RFLDRFQUFDQyxHQUFDO2dCQUFDSixTQUFTLEVBQUVMLDJFQUFhOzBCQUFFLFVBRTdCOzs7OztxQkFBSTs7Ozs7aUJBQ0YsQ0FDVDtJQUNMLE9BQ0ssSUFBSUUsTUFBTSxHQUFHLFNBQVMsRUFBQztRQUN4QixxQkFDSSw4REFBQ0MsS0FBRztZQUFDQyxFQUFFLEVBQUMsTUFBTTtZQUFDQyxTQUFTLEVBQUVMLDhFQUFnQjtZQUFFTyxLQUFLLEVBQUU7Z0JBQUNDLGVBQWUsRUFBQyxPQUFPO2FBQUM7c0JBQ3hFLDRFQUFDQyxHQUFDO2dCQUFDSixTQUFTLEVBQUVMLDJFQUFhOzBCQUFFLFNBRTdCOzs7OztxQkFBSTs7Ozs7aUJBQ0YsQ0FDVDtJQUNMLENBQUM7QUFFTCxDQUFDO0FBOUJLQyxLQUFBQSxNQUFNO0FBZ0NHLFNBQVNTLFlBQVksQ0FBQyxLQUFTLEVBQUU7UUFBWCxPQUFRLEdBQVIsS0FBUyxDQUFSQyxPQUFPOztJQUN6QyxJQUF3QnhCLEdBQXFCLG9GQUFyQkEsMkNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBdEMwQixJQUFJLEdBQWExQixHQUFxQixHQUFsQyxFQUFFMkIsT0FBTyxHQUFJM0IsR0FBcUIsR0FBekI7SUFFcEIsSUFBTTRCLFdBQVcsR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDM0JGLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBTUksT0FBTyxHQUFHLFVBQVU7SUFDMUIscUJBQ0k7OzBCQUNBLDhEQUFDM0Isb0VBQWM7Z0JBQUM0QixPQUFPLEVBQUVILFdBQVc7O2tDQUNoQyw4REFBQ3hCLGtFQUFZO2tDQUNULDRFQUFDWSxLQUFHOzRCQUFDSSxLQUFLLEVBQUU7Z0NBQUNZLE1BQU0sRUFBQyxrQkFBa0I7Z0NBQUVDLFlBQVksRUFBQyxLQUFLO2dDQUFFQyxXQUFXLEVBQUMsTUFBTTs2QkFBQztzQ0FDM0UsNEVBQUNDLEtBQUc7Z0NBQ0FmLEtBQUssRUFBRTtvQ0FBQ2dCLE1BQU0sRUFBQyxPQUFPO29DQUFFQyxLQUFLLEVBQUMsT0FBTztvQ0FBQ0osWUFBWSxFQUFDLEtBQUs7aUNBQUM7Z0NBQ3pESyxHQUFHLEVBQUVkLE9BQU8sQ0FBQ2UsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7OztvQ0FDL0I7Ozs7O2dDQUNBOzs7Ozs0QkFDSztrQ0FDZiw4REFBQ25DLGtFQUFZO3dCQUFDb0MsT0FBTyxFQUFFakIsT0FBTyxDQUFDZSxJQUFJLENBQUNHLElBQUk7Ozs7OzRCQUFJO2tDQUM1Qyw4REFBQzVCLE1BQU07d0JBQUNDLE1BQU0sRUFBSWUsT0FBTzs7Ozs7NEJBQUk7b0JBQzVCSixJQUFJLGlCQUFHLDhEQUFDaEIsc0VBQVU7Ozs7NEJBQUcsaUJBQUcsOERBQUNDLHNFQUFVOzs7OzRCQUFHOzs7Ozs7b0JBQzFCOzBCQXVCakIsOERBQUNMLDhEQUFRO2dCQUFDcUMsRUFBRSxFQUFFakIsSUFBSTtnQkFBRWtCLE9BQU8sRUFBQyxNQUFNO2dCQUFDQyxhQUFhOzBCQUM1Qyw0RUFBQzNDLDJEQUFJO29CQUFDNEMsU0FBUyxFQUFDLEtBQUs7b0JBQUNDLGNBQWM7O3NDQUNoQyw4REFBQzVDLG9FQUFjOzRCQUFDNkMsRUFBRSxFQUFFO2dDQUFFQyxFQUFFLEVBQUUsQ0FBQzs2QkFBRTtzQ0FDekIsNEVBQUM1QyxrRUFBWTtnQ0FBQ29DLE9BQU8sRUFBQyxhQUFhOzs7OztvQ0FBRzs7Ozs7Z0NBQ3pCO3NDQUNqQiw4REFBQ3RDLG9FQUFjOzRCQUFDZSxTQUFTLEVBQUVMLHdFQUFVOzRCQUFFNEIsT0FBTyxFQUFDLFNBQVM7c0NBQ3hELDRFQUFDcEMsa0VBQVk7Z0NBQUNhLFNBQVMsRUFBRUwsd0VBQVU7Z0NBQUU0QixPQUFPLEVBQUMsU0FBUzs7Ozs7b0NBQUc7Ozs7O2dDQUN4Qzs7Ozs7O3dCQUNkOzs7OztvQkFDQTs7b0JBQ1IsQ0FDTjtBQUNMLENBQUM7R0F6RHVCbEIsWUFBWTtBQUFaQSxNQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29sbGFwc2FibGVQcm9kSW5mby9Db2xsYXBzZUNhcmQuanM/NGQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RTdWJoZWFkZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcbmltcG9ydCBMaXN0SXRlbUJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtQnV0dG9uJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9Db2xsYXBzZSc7XG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW92ZVRvSW5ib3gnO1xuaW1wb3J0IERyYWZ0c0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EcmFmdHMnO1xuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VuZCc7XG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZExlc3MnO1xuaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlJztcbmltcG9ydCBTdGFyQm9yZGVyIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU3RhckJvcmRlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29sbGFwc2FibGVDYXJkLm1vZHVsZS5jc3MnO1xuXG5cbi8vIGZvciB0aGlzIGZ1bmN0aW9uIGkgY2FudCBzZWVtIHRvIGdldCBpdCB0byB3b3JrIGluIHRoZSBjb2xsYXBzZWQgY2FyZCBzbyB0aGF0IGl0IHByaW50cyBkZXBlbmRpbmcgb24gaWYgaXQgd2FzIGFwcHJvdmVkL3JlamVjdGVkL3BlbmRpbmdcbmNvbnN0IFN0YXR1cyA9ICh7c3RhdHVzfSkgPT4ge1xuICAgIFxuICAgIGlmIChzdGF0dXMgPSBcIkFwcHJvdmVkXCIpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGlkPVwidGVzdFwiIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J2dyZWVuJ319PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+XG4gICAgICAgICAgICAgICAgICAgYXBwcm92ZWRcbiAgICAgICAgICAgICAgICA8L3A+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdHVzID0gXCJSZWplY3RcIil7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXN0XCIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjoncmVkJ319PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+XG4gICAgICAgICAgICAgICAgICAgUmVqZWN0ZWRcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0dXMgPSBcIlBlbmRpbmdcIil7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXN0XCIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonYmxhY2snfX0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT5cbiAgICAgICAgICAgICAgICAgICBQZW5kaW5nXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxhcHNlQ2FyZCh7cHJvZHVjdH0pIHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRPcGVuKCFvcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhdHVzcyA9IFwiUmVqZWN0ZWRcIjtcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxMaXN0SXRlbUJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tib3JkZXI6JzAuNXB4IGdyZXkgc29saWQnLCBib3JkZXJSYWRpdXM6JzhweCcsIG1hcmdpblJpZ2h0OiczMHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDonMTAwcHgnLCB3aWR0aDonMTAwcHgnLGJvcmRlclJhZGl1czonOHB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuZGF0YS5waWN0dXJlc1swXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9kdWN0LmRhdGEubmFtZX0gLz5cbiAgICAgICAgICAgIDxTdGF0dXMgc3RhdHVzID0ge3N0YXR1c3N9IC8+XG4gICAgICAgICAgICB7b3BlbiA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XG4gICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XG5cbiAgICAgICAgey8qIGNhbiB5b3UgbWFrZSB0aGlzIGEgc3dpdGNoL2lmIHN0YXRlbWVudC8gb3IgYXJyYXkgc28gdGhhdCBpdCBwcmludHMgZGVwZW5kaW5nIG9uIHRoZSBpdGVtIGlmIGl0cyByZWplY3RlZC9wZW5pbmQvYXBwcm92ZWQgKi99XG5cbiAgICAgICAgey8qIGZvciByZWplY3RlZFxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cbiAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBwbDogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwicmVhc29uIGZvciByZWplY3Rpb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICA8Lz4gKi99XG4gICAgICAgIHsvKiBmb3IgcGVuZGluZ1xuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cbiAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBwbDogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGVuZGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgIDwvPiAqL31cbiAgICAgICAgey8qIGZvciBhcHByb3ZlZCBpdCBzdGlsbCBuZWVkcyBhIGJ1dHRvbiBmb3IgaWYgdGhlIHNlbGxlciB3YW50cyB0byBwaWNrIGEgc3BlY2lmaWMgYmlkZGVyIGFuZCBpdCBwcm9iYWJseSBoYXMgdG8gYmUgbGlzdGVkIGZyb20gaGlnaGVzdCB0byBsb3dlc3QgYmlkZGVyICovfVxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cbiAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBwbDogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSGlnaGVzdCBCaWRcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJpZH0gcHJpbWFyeT1cIkJpZGRlcnNcIj5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGNsYXNzTmFtZT17c3R5bGVzLmJpZH0gcHJpbWFyeT1cIkJpZGRlcnNcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDwvPiBcbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGlzdFN1YmhlYWRlciIsIkxpc3QiLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIkNvbGxhcHNlIiwiSW5ib3hJY29uIiwiRHJhZnRzSWNvbiIsIlNlbmRJY29uIiwiRXhwYW5kTGVzcyIsIkV4cGFuZE1vcmUiLCJTdGFyQm9yZGVyIiwic3R5bGVzIiwiU3RhdHVzIiwic3RhdHVzIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInAiLCJDb2xsYXBzZUNhcmQiLCJwcm9kdWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsaWNrIiwiaW5kZXgiLCJzdGF0dXNzIiwib25DbGljayIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJkYXRhIiwicGljdHVyZXMiLCJwcmltYXJ5IiwibmFtZSIsImluIiwidGltZW91dCIsInVubW91bnRPbkV4aXQiLCJjb21wb25lbnQiLCJkaXNhYmxlUGFkZGluZyIsInN4IiwicGwiLCJiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CollapsableProdInfo/CollapseCard.js\n"));

/***/ })

});
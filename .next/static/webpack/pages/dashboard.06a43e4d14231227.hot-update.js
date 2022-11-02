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

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginForm/LoginForm */ \"./components/LoginForm/LoginForm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase-config */ \"./firebase-config.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_Authentication_AuthProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/Authentication/AuthProvider */ \"./context/Authentication/AuthProvider.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_ProductApplication_ProductApplication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ProductApplication/ProductApplication */ \"./components/ProductApplication/ProductApplication.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var logout = (0,_context_Authentication_AuthProvider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])().logout;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(useState(false), 2), showApplication = ref[0], setApplicationDisplay = ref[1];\n    //clearly not the way to do protected routing but it's simple to do this way, so why not? We, can change it later\n    var ref1 = (0,_context_Authentication_AuthProvider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(), user = ref1.user, data = ref1.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (data.accountType == \"Super User\") {\n            router.push(\"/admin\");\n        } else {\n            console.log(data);\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            data[\"status\"] == \"invalid\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Your application for a OU account is under review. Please be patient!\"\n            }, void 0, false, {\n                fileName: \"/Users/nikhilprajith/Desktop/EcommerceWebsite/pages/dashboard.js\",\n                lineNumber: 32,\n                columnNumber: 39\n            }, this),\n            data[\"status\"] == \"active\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"You now have the access to submit product applications\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikhilprajith/Desktop/EcommerceWebsite/pages/dashboard.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            border: \"1px black solid\"\n                        },\n                        children: \"List Product\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikhilprajith/Desktop/EcommerceWebsite/pages/dashboard.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikhilprajith/Desktop/EcommerceWebsite/pages/dashboard.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: logout,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/nikhilprajith/Desktop/EcommerceWebsite/pages/dashboard.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductApplication_ProductApplication__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                showModal: {\n                    showApplication: showApplication\n                }\n            }, void 0, false, {\n                fileName: \"/Users/nikhilprajith/Desktop/EcommerceWebsite/pages/dashboard.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikhilprajith/Desktop/EcommerceWebsite/pages/dashboard.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n_s(Dashboard, \"A8y22TnUTd662Ihr3q/8sIMZG4Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _context_Authentication_AuthProvider__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _context_Authentication_AuthProvider__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTRCO0FBRTZCO0FBQ047QUFDUDtBQUNMO0FBQ0E7QUFDTjtBQUMyQjtBQUNoQztBQUN5RDtBQUV0RSxTQUFTVyxTQUFTLEdBQUc7O0lBQ2xDLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQixJQUFNLE1BQU8sR0FBSUUsZ0ZBQU8sRUFBRSxDQUFuQkssTUFBTTtJQUNiLElBQWlEQyxHQUFlLHFGQUFmQSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQXpEQyxlQUFlLEdBQTJCRCxHQUFlLEdBQTFDLEVBQUVFLHFCQUFxQixHQUFJRixHQUFlLEdBQW5CO0lBQzdDLGlIQUFpSDtJQUNqSCxJQUFvQk4sSUFBUyxHQUFUQSxnRkFBTyxFQUFFLEVBQXRCUyxJQUFJLEdBQVNULElBQVMsQ0FBdEJTLElBQUksRUFBQ0MsSUFBSSxHQUFJVixJQUFTLENBQWpCVSxJQUFJO0lBQ2hCWCxnREFBUyxDQUFDLFdBQUk7UUFDWixJQUFHVyxJQUFJLENBQUNDLFdBQVcsSUFBSSxZQUFZLEVBQUM7WUFDbENQLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixPQUFLO1lBQ0hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUMsRUFBQztRQUFDQSxJQUFJO0tBQUMsQ0FBQztJQUtULHFCQUNFLDhEQUFDSyxLQUFHOztZQUNDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUUsU0FBUyxrQkFBSSw4REFBQ0ssS0FBRzswQkFBQyx1RUFBcUU7Ozs7O29CQUFNO1lBQzdHTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUcsUUFBUSxrQkFDeEIsOERBQUNLLEtBQUc7O2tDQUNGLDhEQUFDQSxLQUFHO2tDQUFDLHdEQUFzRDs7Ozs7NEJBQU07a0NBQ2pFLDhEQUFDQyxNQUFJO3dCQUFDQyxLQUFLLEVBQUc7NEJBQUNDLE1BQU0sRUFBQyxpQkFBaUI7eUJBQUM7a0NBQUUsY0FBWTs7Ozs7NEJBQU87Ozs7OztvQkFDekQ7MEJBS1IsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRWYsTUFBTTswQkFBRSxRQUFNOzs7OztvQkFBUzswQkFDeEMsOERBQUNILHlGQUFtQjtnQkFBQ21CLFNBQVMsRUFBRTtvQkFBQ2QsZUFBZSxFQUFmQSxlQUFlO2lCQUFDOzs7OztvQkFBd0I7Ozs7OztZQUN2RSxDQUNQO0FBQ0gsQ0FBQztHQWpDdUJKLFNBQVM7O1FBQ2hCTCxrREFBUztRQUNQRSw0RUFBTztRQUdKQSw0RUFBTzs7O0FBTExHLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzPzBlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtL0xvZ2luRm9ybSdcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9kYXNoYm9hcmQubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBhdXRoLGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UtY29uZmlnJyBcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uL2NvbnRleHQvQXV0aGVudGljYXRpb24vQXV0aFByb3ZpZGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFByb2R1Y3RBcHBsaWNhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0QXBwbGljYXRpb24vUHJvZHVjdEFwcGxpY2F0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7bG9nb3V0fSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgW3Nob3dBcHBsaWNhdGlvbiwgc2V0QXBwbGljYXRpb25EaXNwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAvL2NsZWFybHkgbm90IHRoZSB3YXkgdG8gZG8gcHJvdGVjdGVkIHJvdXRpbmcgYnV0IGl0J3Mgc2ltcGxlIHRvIGRvIHRoaXMgd2F5LCBzbyB3aHkgbm90PyBXZSwgY2FuIGNoYW5nZSBpdCBsYXRlclxuICBjb25zdCB7dXNlcixkYXRhfSA9IHVzZUF1dGgoKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYoZGF0YS5hY2NvdW50VHlwZSA9PSBcIlN1cGVyIFVzZXJcIil7XG4gICAgICByb3V0ZXIucHVzaChcIi9hZG1pblwiKVxuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gIH0sW2RhdGFdKVxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAge2RhdGFbXCJzdGF0dXNcIl09PVwiaW52YWxpZFwiICYmIDxkaXY+WW91ciBhcHBsaWNhdGlvbiBmb3IgYSBPVSBhY2NvdW50IGlzIHVuZGVyIHJldmlldy4gUGxlYXNlIGJlIHBhdGllbnQhPC9kaXY+fVxuICAgICAgICB7ZGF0YVtcInN0YXR1c1wiXSA9PVwiYWN0aXZlXCIgJiYgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+WW91IG5vdyBoYXZlIHRoZSBhY2Nlc3MgdG8gc3VibWl0IHByb2R1Y3QgYXBwbGljYXRpb25zPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZSA9e3tib3JkZXI6JzFweCBibGFjayBzb2xpZCd9fT5MaXN0IFByb2R1Y3Q8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgPFByb2R1Y3RBcHBsaWNhdGlvbnMgc2hvd01vZGFsPXt7c2hvd0FwcGxpY2F0aW9ufX0+PC9Qcm9kdWN0QXBwbGljYXRpb25zPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxvZ2luRm9ybSIsInN0eWxlcyIsImF1dGgiLCJkYiIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VBdXRoIiwiTGluayIsIlByb2R1Y3RBcHBsaWNhdGlvbnMiLCJEYXNoYm9hcmQiLCJyb3V0ZXIiLCJsb2dvdXQiLCJ1c2VTdGF0ZSIsInNob3dBcHBsaWNhdGlvbiIsInNldEFwcGxpY2F0aW9uRGlzcGxheSIsInVzZXIiLCJkYXRhIiwiYWNjb3VudFR5cGUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsInNwYW4iLCJzdHlsZSIsImJvcmRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaG93TW9kYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n"));

/***/ })

});
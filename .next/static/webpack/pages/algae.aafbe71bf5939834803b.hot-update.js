webpackHotUpdate_N_E("pages/algae",{

/***/ "./pages/algae.js":
/*!************************!*\
  !*** ./pages/algae.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_player___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player/ */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player___WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_MyCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyCarousel */ \"./components/MyCarousel.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/lukemyers/Desktop/NewProjects2020/MicroLife/pages/algae.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Algae = function Algae() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      news = _useState[0],\n      setNews = _useState[1]; //fetch news\n\n\n  var fetchNews = function fetchNews() {\n    fetch(\"http://hn.algolia.com/api/v1/search?query=diatoms\") // fetch(\"http://hn.algolia.com/api/v1/search?query=foo&tags=story\")\n    .then(function (result) {\n      return result.json();\n    }).then(function (data) {\n      return setNews(data.hits);\n    }); //  .then(data => console.log(data));\n    // .catch(error => console.log(error));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchNews();\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"100vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"blue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      height: \"100vh\",\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      alignContent: \"center\",\n      position: \"relative\",\n      left: '5%',\n      width: \"100%\",\n      padding: \"70px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 21\n    }\n  }, __jsx(react_player___WEBPACK_IMPORTED_MODULE_1___default.a, {\n    url: \"https://www.youtube.com/watch?v=eVZlVB0SD-8&t=2s\",\n    controls: true,\n    loop: true,\n    muted: false,\n    autoplay: false,\n    background: true,\n    playing: false,\n    width: \"80vw\",\n    height: \"550px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 22\n    }\n  })))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"80vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"gray\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 14\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, \" \", __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 23\n    }\n  }), __jsx(\"h1\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, \"Microscopes allow us to see into the microscopic world \"))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"90vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"green\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"220vh\",\n      width: \"110vh\",\n      alignContent: \"center\",\n      objectFit: \"cover\",\n      overflow: \"hidden\",\n      padding: \"10px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, __jsx(_components_MyCarousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"70vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"lightblue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  })));\n};\n\n_s(Algae, \"HYauJYuHuKDxa6efU7RD2dmfPO0=\");\n\n_c = Algae;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Algae);\n\nvar _c;\n\n$RefreshReg$(_c, \"Algae\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxnYWUuanM/ZWQxZiJdLCJuYW1lcyI6WyJBbGdhZSIsInVzZVN0YXRlIiwibmV3cyIsInNldE5ld3MiLCJmZXRjaE5ld3MiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiZGF0YSIsImhpdHMiLCJ1c2VFZmZlY3QiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImFsaWduQ29udGVudCIsInBvc2l0aW9uIiwibGVmdCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJvYmplY3RGaXQiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFHU0Msc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHUkMsSUFIUTtBQUFBLE1BR0ZDLE9BSEUsaUJBS2hCOzs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCQyxTQUFLLENBQUMsbURBQUQsQ0FBTCxDQUNBO0FBREEsS0FFQ0MsSUFGRCxDQUVNLFVBQUFDLE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUNDLElBQVAsRUFBSjtBQUFBLEtBRlosRUFHRUYsSUFIRixDQUdPLFVBQUFHLElBQUk7QUFBQSxhQUFJTixPQUFPLENBQUNNLElBQUksQ0FBQ0MsSUFBTixDQUFYO0FBQUEsS0FIWCxFQURvQixDQUtwQjtBQUNBO0FBQ0gsR0FQRDs7QUFRQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pQLGFBQVM7QUFDWixHQUZRLENBQVQ7QUFRQSxTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FD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RDs7R0FBTWhCLEs7O0tBQUFBLEs7QUFvRFNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWxnYWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyLydcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBNeUNhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvTXlDYXJvdXNlbCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuXG5jb25zdCBBbGdhZSA9ICgpID0+IHtcblxuXG4gICAgY29uc3QgWyBuZXdzLCBzZXROZXdzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgLy9mZXRjaCBuZXdzXG4gICAgXG4gICAgY29uc3QgZmV0Y2hOZXdzID0gKCkgPT4ge1xuICAgICAgICBmZXRjaChcImh0dHA6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3F1ZXJ5PWRpYXRvbXNcIilcbiAgICAgICAgLy8gZmV0Y2goXCJodHRwOi8vaG4uYWxnb2xpYS5jb20vYXBpL3YxL3NlYXJjaD9xdWVyeT1mb28mdGFncz1zdG9yeVwiKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0TmV3cyhkYXRhLmhpdHMpKVxuICAgICAgICAvLyAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gICAgICAgIC8vIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hOZXdzKClcbiAgICB9KVxuICAgIFxuXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6XCIxMDB2aFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OlwiMTAwdmhcIix3aWR0aDogXCIxMDAlXCIsIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsbGVmdDogJzUlJyx3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6XCI3MHB4XCIsfX0+XG4gICAgICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXIgdXJsPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1lVlpsVkIwU0QtOCZ0PTJzXCIgY29udHJvbHM9e3RydWV9IGxvb3AgPXt0cnVlfSBtdXRlZD17ZmFsc2V9IGF1dG9wbGF5PXtmYWxzZX0gYmFja2dyb3VuZD17dHJ1ZX0gcGxheWluZz17ZmFsc2V9IHdpZHRoPSc4MHZ3JyBoZWlnaHQ9JzU1MHB4JyAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDpcIjgwdmhcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYmFja2dyb3VuZENvbG9yOiBcImdyYXlcIiwgfX0+XG4gICAgICAgICAgICAgICAgPGRpdj4gPENhcmQvPiBcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgcGFkZGluZzpcIjQ1cHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5NaWNyb3Njb3BlcyBhbGxvdyB1cyB0byBzZWUgaW50byB0aGUgbWljcm9zY29waWMgd29ybGQgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsaGVpZ2h0OlwiOTB2aFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OlwiZmxleFwiLCBoZWlnaHQ6XCIyMjB2aFwiLHdpZHRoOlwiMTEwdmhcIiwgYWxpZ25Db250ZW50OlwiY2VudGVyXCIsICBvYmplY3RGaXQ6XCJjb3ZlclwiLG92ZXJmbG93OlwiaGlkZGVuXCIsIHBhZGRpbmc6XCIxMHB4XCIsIH19PlxuICAgICAgICAgICAgICAgIDxNeUNhcm91c2VsIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OlwiNzB2aFwiLGRpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGJhY2tncm91bmRDb2xvcjogXCJsaWdodGJsdWVcIiwgfX0+XG4gICAgICAgIFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxnYWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/algae.js\n");

/***/ })

})
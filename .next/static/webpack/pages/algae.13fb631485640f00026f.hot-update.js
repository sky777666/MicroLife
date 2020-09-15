webpackHotUpdate_N_E("pages/algae",{

/***/ "./pages/algae.js":
/*!************************!*\
  !*** ./pages/algae.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_YoutubePlayList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/YoutubePlayList */ \"./components/YoutubePlayList.js\");\n/* harmony import */ var _components_VideoPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/VideoPlayer */ \"./components/VideoPlayer.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_MyCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyCarousel */ \"./components/MyCarousel.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/lukemyers/Desktop/NewProjects2020/MicroLife/pages/algae.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Algae = function Algae() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      news = _useState[0],\n      setNews = _useState[1]; //fetch news\n\n\n  var fetchNews = function fetchNews() {\n    fetch(\"http://hn.algolia.com/api/v1/search?query=diatoms\") // fetch(\"http://hn.algolia.com/api/v1/search?query=foo&tags=story\")\n    .then(function (result) {\n      return result.json();\n    }).then(function (data) {\n      return setNews(data.hits);\n    }); //  .then(data => console.log(data));\n    // .catch(error => console.log(error));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchNews();\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"90vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"blue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      height: \"90vh\",\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, __jsx(_components_VideoPlayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 21\n    }\n  }))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"80vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundImage: src = \"data:image/jpeg;base64,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\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, \" \", __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 23\n    }\n  }), __jsx(\"h1\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, \"Microscopes allow us to see into the microscopic world \"))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"90vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"green\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"220vh\",\n      width: \"110vh\",\n      alignContent: \"center\",\n      objectFit: \"cover\",\n      overflow: \"hidden\",\n      padding: \"10px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }, __jsx(_components_MyCarousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"70vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"lightblue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  })));\n};\n\n_s(Algae, \"HYauJYuHuKDxa6efU7RD2dmfPO0=\");\n\n_c = Algae;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Algae);\n\nvar _c;\n\n$RefreshReg$(_c, \"Algae\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxnYWUuanM/ZWQxZiJdLCJuYW1lcyI6WyJBbGdhZSIsInVzZVN0YXRlIiwibmV3cyIsInNldE5ld3MiLCJmZXRjaE5ld3MiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiZGF0YSIsImhpdHMiLCJ1c2VFZmZlY3QiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsInNyYyIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJhbGlnbkNvbnRlbnQiLCJvYmplY3RGaXQiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBR1NDLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR1JDLElBSFE7QUFBQSxNQUdGQyxPQUhFLGlCQUtoQjs7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQkMsU0FBSyxDQUFDLG1EQUFELENBQUwsQ0FDQTtBQURBLEtBRUNDLElBRkQsQ0FFTSxVQUFBQyxNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDQyxJQUFQLEVBQUo7QUFBQSxLQUZaLEVBR0VGLElBSEYsQ0FHTyxVQUFBRyxJQUFJO0FBQUEsYUFBSU4sT0FBTyxDQUFDTSxJQUFJLENBQUNDLElBQU4sQ0FBWDtBQUFBLEtBSFgsRUFEb0IsQ0FLcEI7QUFDQTtBQUNILEdBUEQ7O0FBUUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxhQUFTO0FBQ1osR0FGUSxDQUFUO0FBUUEsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxTQUFLLEVBQUU7QUFDWlEsV0FBSyxFQUFFLE1BREs7QUFFWkMsWUFBTSxFQUFDLE1BRks7QUFHWkMsYUFBTyxFQUFDLE1BSEk7QUFJWkMsb0JBQWMsRUFBQyxRQUpIO0FBS1pDLHFCQUFlLEVBQUU7QUFMTCxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0k7QUFBSyxTQUFLLEVBQUU7QUFDUkgsWUFBTSxFQUFDLE1BREM7QUFFUkQsV0FBSyxFQUFFO0FBRkMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FQSixDQURKLEVBaUJJO0FBQVMsU0FBSyxFQUFFO0FBQUNBLFdBQUssRUFBRSxNQUFSO0FBQWdCQyxZQUFNLEVBQUMsTUFBdkI7QUFBOEJDLGFBQU8sRUFBQyxNQUF0QztBQUE2Q0Msb0JBQWMsRUFBQyxRQUE1RDtBQUFxRUUscUJBQWUsRUFBRUMsR0FBRyxHQUFDO0FBQTFGLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU0sTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU4sRUFDQTtBQUFJLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUMsTUFBVjtBQUFrQkMsZUFBUyxFQUFDO0FBQTVCLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrREFEQSxDQURKLENBakJKLEVBc0JJO0FBQVMsU0FBSyxFQUFFO0FBQUVSLFdBQUssRUFBRSxNQUFUO0FBQWdCQyxZQUFNLEVBQUMsTUFBdkI7QUFBOEJDLGFBQU8sRUFBQyxNQUF0QztBQUE2Q0Msb0JBQWMsRUFBQyxRQUE1RDtBQUFzRUMscUJBQWUsRUFBRTtBQUF2RixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRUYsYUFBTyxFQUFDLE1BQVY7QUFBa0JELFlBQU0sRUFBQyxPQUF6QjtBQUFpQ0QsV0FBSyxFQUFDLE9BQXZDO0FBQWdEUyxrQkFBWSxFQUFDLFFBQTdEO0FBQXdFQyxlQUFTLEVBQUMsT0FBbEY7QUFBMEZDLGNBQVEsRUFBQyxRQUFuRztBQUE2R0osYUFBTyxFQUFDO0FBQXJILEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREosQ0F0QkosRUEyQkk7QUFBUyxTQUFLLEVBQUU7QUFDWlAsV0FBSyxFQUFFLE1BREs7QUFFWkMsWUFBTSxFQUFDLE1BRks7QUFHWkMsYUFBTyxFQUFDLE1BSEk7QUFJWkMsb0JBQWMsRUFBQyxRQUpIO0FBS1pDLHFCQUFlLEVBQUU7QUFMTCxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JKLENBREEsQ0FESjtBQXFESCxDQTVFRDs7R0FBTWhCLEs7O0tBQUFBLEs7QUE4RVNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWxnYWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWW91dHViZVBsYXlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvWW91dHViZVBsYXlMaXN0J1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBNeUNhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvTXlDYXJvdXNlbCdcblxuY29uc3QgQWxnYWUgPSAoKSA9PiB7XG5cblxuICAgIGNvbnN0IFsgbmV3cywgc2V0TmV3c10gPSB1c2VTdGF0ZShbXSlcblxuICAgIC8vZmV0Y2ggbmV3c1xuICAgIFxuICAgIGNvbnN0IGZldGNoTmV3cyA9ICgpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vaG4uYWxnb2xpYS5jb20vYXBpL3YxL3NlYXJjaD9xdWVyeT1kaWF0b21zXCIpXG4gICAgICAgIC8vIGZldGNoKFwiaHR0cDovL2huLmFsZ29saWEuY29tL2FwaS92MS9zZWFyY2g/cXVlcnk9Zm9vJnRhZ3M9c3RvcnlcIilcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgICAudGhlbihkYXRhID0+IHNldE5ld3MoZGF0YS5oaXRzKSlcbiAgICAgICAgLy8gIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuICAgICAgICAvLyAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoTmV3cygpXG4gICAgfSlcbiAgICBcblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCI5MHZoXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjkwdmhcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8VmlkZW9QbGF5ZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OlwiODB2aFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixiYWNrZ3JvdW5kSW1hZ2U6IHNyYz1cImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhJU0VoVVNFaElWRlJVWEZ4Y1hHQmNYRnhnWUZ4Y2FHQjBkR2hnWEdCZ2FIU2dnR2hvbEd4b2RKVEVoSlNrckxpNHVHaDh6T0RNdE55Z3RMaXNCQ2dvS0RRME5EZzBORGlzWkZSa3JLeTB0TFNzckt5MHJLeXMzTFNzdEt5c3RLeXNyS3lzdEt5c3JMU3N0TFNzM0xTc3JLeTByS3lzck55c3JMU3NySy8vQUFCRUlBTGNCRXdNQklnQUNFUUVERVFIL3hBQWFBQUFEQVFFQkFRQUFBQUFBQUFBQUFBQUJBZ01BQkFVRy84UUFLeEFBQWdJQkFBZ0hBUUVCQVFBQUFBQUFBQUVDOEJFREVpRXhVYUd4d1VGaGNZR1IwZUh4RThKUy84UUFGUUVCQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUgveEFBVUVRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FEQU1CQUFJUkF4RUFQd0R6SW90Q0lrRVgwVVFLd2lYaEFYUnhPaUVTaHRIQTZOSEFHamlYMGNRR2hFcW9taEVxb2dLb0RhbytxSFZJSnFKdFVyZzJxQkxWTnFsY0d3Qk5SQnEyK0JaUjJYQnNBUzFMYnROcS9aWFZEcWhVZFczME00bFhFRWtRU2NSWEV1MERWQWk0Z2NTdUFPTnZxQkJ4RmNUbzFTYlY5ZjZCQnhFY1RvY1NiUUVKUkV3WGtoR2dJT082MzhKTlczZWRFa1NhdnlCRi92bmRnampmbmFXY2I2Q1NWOVA2QkpRWC9uSmc2U1RUd2srYU1VZWZCSFZva1EwYU9yUm9xTGFOSFRvNGtkR2pyMFNBcG80blJDSWtJbDRJQm9SS3BBakVva0FFZ3BESkJTQVhCdFVwZzJDQ2VxYkJUVkRnQ2FpSFZLS0p0VzMxQ3A0TnFsTlV6VnZ1QkxBTlVyamZkNE1BU2FOS084cmp1SzQyK1JCTEYrVE5GTWJ4V2dJdEN5UlZpeVFFbkVtMWVSZVNKeVY5d0lOQ05kcmZJczBUYUtJU3Q5aWNsYjVGNUszM0p0WDNBakpiYnMzL0FNRWE3Yyt2NFdhNzg2eWJ2MEJKdzgxOEFHYTh6QWVmb2tkV2pSemFKSFhvMFZIUm9rZG1qUnphRkhYbzBCZlJvdkJFb0l2QkFQRkZFaFlvb2dNa05neVFVZ05nMkJqSkVBd0hBVWhrZ0ZTTnErSXlWdnFOZ0NlQVl0OGltQVlBbmkzME5ncGp0MUJnZ25nVnE5Q3VCV2dxYlFHaDhielNpQkJvV1NLc1dTQWpKQ05GbWliUlJCcTI3UkpJczBUYUFoTkU1SyttMHRKQ1NWdDJvQ0xWK2IvQ1pWb1NTM2dSZWl6dE1VK0RBZVpvMGRXaU9YUm5Yb2lvNjlFZGVqT1hSSFZBRG9nV2dSaVdnQmFKU0tKeEtSQWRCU0Foa1FFS1FNREpBWkJTQ2tIQUd3Rkl5UWNBS0xnZVNNd0V4MUFrTzFiN0F3UUkwWmp0Q3U4d3FlQU5EdFczWUNSUkppTkZXaEdyZmNDVWtUa2lyUWswQktTSk5GM3hKU1FFR3IxRW5HOXkwbHp6MUpUWFQ3d2dJeXZZbkpYbnRMUzQvRitTYlY5d0pmNTUvaGg0cnlmd1lEeXRFZGVpT1RSSFhvaW82OUVkT2pPYlJuVG93T2lKZUpDQmFEQXZFcEVsRmxFQlZERThqRUZBb1ZESUJvakpYcUJEQVpJS1Jnc0FNVVpnYUFXUzdtREpCWUNOWDRBeG1CcmJmRzlDQ2JYVzN6QXhnTXFwdENORldUa2dKeUVraXNpY2dKU0p5VjZGcFczZVNrQktTdnNTbmJ5TFRXKzVKU1Y0Z1NaS1hiK2xtdTcrdWhPU3Q4d0l5bWs4WVJpaUNCNDJpT3ZSbkhvanIwUlVkZWpPblJuTEE2WU1EcGd5MFdjOFNzV0IwUUtSWkNMS1JZRmt4a3lTWTZaQlpEb2ttUEVDc1JoSWpBT1pnTXdOa0FVd1crd0FhL3YwRjlnTy9WNEJrQUJiNkRPb1hJQ3NVY1JJS1ZvVmpzVmdTa2hDanZ5VGQ5djZCTm9TUlNSTjI4QUpTWFg4SlM3ZjNxeTArNUovWGZOOUFKeVZ2cWlVdkMrRzByTW5KZnZUb0JOSzR5WURiNG93SGphSTY5RWNlak9yUnNxT3ZSblJCbkxvMlhoSURxaXlzWkhMR1JhREE2WXNwRm5QRmxJeUE2RVBGa0kzWVVpd0xKbEVSVEtSSUxSR1FrV01tQlJHWXFabUF6QUM4QWdiOStqTitJRnREa0RDdjhEbnNMSmdBVzIrQXpFWVZteFg0akNNQlhiN0VtVWtUa2dFa0pldjJQSVNRRXBkZXQ2RXBmdTIrZkpGVytGdmNrOXdDU3Q0a3BmbCtYOEZiN2I5L0ltMWI2QUlqRzFYd1FBUEMwWjA2Tm5KQm5SQmxSMVFaZURPV0RMUmtCMHhaYUxPYURLeFlIVkZsRkk1NHNyR1FGNEZJc2dtVml5QzhYY2xJc2hFckVDeUhUSmF3eVlGTWhidVNlUTVBZkpteFRadDgrQURteUxtNUNBYmZrVnMyUU4yM2FBV0pJTFlHRkFWaEZBV1RKdFgwd1VKTUJYZXdrcmJ1S01rN2dDY2lVM3N0L2hTUk9WdmlBay9HM2VpY2g1WDM3WUp0Yjdmd0JNTHgvNjdHTTE1WjkwWUQ1NkRMd1p6UVphTEtqcWd5c1djMFNzV0IxUWtXaEk1WU1yR1FIVkZsWXlPYUVpc1pBZE1KRkluUEZsb3NndkZsWXM1NHNyR1FGOGpaSXhZK3NCVEkyU1NZVXdLcG1UUW1RNUFhN2R0MmpaM0Uwd3FRRGladlVDWXFDbnlCZ3oweFdESUJidklSc2EyL3FaQTBpYlY1RFNZckFXVDdrNURzbklvanBDYjM4Yi9BQmxKdStkWlBmZVJBczkvYjRKeUhiKytTWWovQUMzZ1VSbkxEdjJFenhjZllTSStiaXlzV1FpeWlaUjBSWmFET1ZNdEZnZEVaWFlXaEszZWNzWkZZeUE2VXkwV2NzWldzckdRSFZHUmVET1NFaTBaQWRTWlJNNTRNZFN1d2lycVFWTTUxTDN2SXBHVnU4SXZyWDhHVElwanAvejdBdGsyZjBtbVpTNlAxQXFwZXkvS2c1dnhzSjUyNTlmVHl4bmI5bWJ2MkErVE8yK0FtdDUyOWdMaDZmbVg2QlZNMzVBTGsyUUd2cUprMlJXd0MzYjZDU3JNMkJ2N3ZBQVNaR1l6bHMzMytJbksrWEFvRGZEYjA4U2JmeHQraDlKSzlFVGI4S205OTh3aFpDU3VlUTBuKzM0K0JMditlOVFDcWF1UHN4Tno0Tlk5Y2NqQWZOUlk2WkpEcGdXaXlrWGRoQlNLUllGNHNyQm5PbVBCZ2RVWkZZU09XRWkwWkFkVUpGb1NPU01xeTBHQjF4a05LZTdITCtiRG5qTHdHVElMUmV3ckdaelJlKzhCNHl3dG41eEE2VklwRm5OcmR5aW42ZVAyQmZOMmVJVkxnYzhaN1BEcDc3QmxwTStIRjgvQmVJRjArZ3pmM3g4K3h6LzY3TDQ5dzYvbDQ5Z0xKNzZyNkdVcjB2b2M3MHV6WndYTVpUMjd2VDJDcXg4THh5RlBvUlU4ZTNudDQvQnY5SDA1Z1Z6Mi9BWnQ4eVMwbkZjZVF6ZnB1QVozNkV6ZXQ4eGNnazc4WDNZR3pldlltM2VlZVljLzNheWVheWdTdk1TWExhdm5BWnZ6NC94WDhSOHF1Rzk1M2VnUUpQTnZEbUpOODgzcUhQNXc4ZnNTWERyNzdlZDNBSENmamp5d25qM01Lbkx3aTJqRVY4cWhrekdLaDRzZFNNWUNrV1BHUmpBVmpJckdSakFVakl0R2VBbUlLUmxlUlJUdkF4Z0gxa1BHUmpBUDJLUjlQbStSakFObTdOMVF5V0w1K1JqQU1zY0RjTm5ReGdDbGZiNkYyY0ZmNFl3Qjg4Y052emcwZkhDdmdZd1VVMERXdlcrUmpBSm54eGkvZ3NtWXdDcjI4TDBKdVZ1enhDWUJOSm4wWEh6RTEvMzMySmMrUmpGUk52dDhmb3JmYlB0KzQrREdBWEFER0lQLzJRPT1cIiwgfX0+XG4gICAgICAgICAgICAgICAgPGRpdj4gPENhcmQvPiBcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgcGFkZGluZzpcIjQ1cHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5NaWNyb3Njb3BlcyBhbGxvdyB1cyB0byBzZWUgaW50byB0aGUgbWljcm9zY29waWMgd29ybGQgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsaGVpZ2h0OlwiOTB2aFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OlwiZmxleFwiLCBoZWlnaHQ6XCIyMjB2aFwiLHdpZHRoOlwiMTEwdmhcIiwgYWxpZ25Db250ZW50OlwiY2VudGVyXCIsICBvYmplY3RGaXQ6XCJjb3ZlclwiLG92ZXJmbG93OlwiaGlkZGVuXCIsIHBhZGRpbmc6XCIxMHB4XCIsIH19PlxuICAgICAgICAgICAgICAgIDxNeUNhcm91c2VsIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCI3MHZoXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJsaWdodGJsdWVcIixcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuXG5cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZ2FlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/algae.js\n");

/***/ })

})
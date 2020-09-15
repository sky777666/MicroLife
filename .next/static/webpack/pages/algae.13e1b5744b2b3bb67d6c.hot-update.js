webpackHotUpdate_N_E("pages/algae",{

/***/ "./pages/algae.js":
/*!************************!*\
  !*** ./pages/algae.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_player___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player/ */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player___WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_MyCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyCarousel */ \"./components/MyCarousel.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/lukemyers/Desktop/NewProjects2020/MicroLife/pages/algae.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Algae = function Algae() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      news = _useState[0],\n      setNews = _useState[1]; //fetch news\n\n\n  var fetchNews = function fetchNews() {\n    fetch(\"http://hn.algolia.com/api/v1/search?query=diatoms\") // fetch(\"http://hn.algolia.com/api/v1/search?query=foo&tags=story\")\n    .then(function (result) {\n      return result.json();\n    }).then(function (data) {\n      return setNews(data.hits);\n    }) //  .then(data => console.log(data));\n    [\"catch\"](function (error) {\n      return console.log(error);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchNews();\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"100vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"blue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      height: \"100vh\",\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      alignContent: \"center\",\n      position: \"relative\",\n      left: '5%',\n      width: \"100%\",\n      padding: \"70px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  }, __jsx(react_player___WEBPACK_IMPORTED_MODULE_1___default.a, {\n    url: \"https://www.youtube.com/watch?v=eVZlVB0SD-8&t=2s\",\n    controls: true,\n    loop: true,\n    muted: false,\n    autoplay: false,\n    background: true,\n    playing: false,\n    width: \"80vw\",\n    height: \"550px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 22\n    }\n  })))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"80vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"gray\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 14\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, \" \", __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 23\n    }\n  }), __jsx(\"h1\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, \"Microscopes allow us to see into the microscopic world \"))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"90vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"green\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"220vh\",\n      width: \"110vh\",\n      alignContent: \"center\",\n      objectFit: \"cover\",\n      overflow: \"hidden\",\n      padding: \"10px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, __jsx(_components_MyCarousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"100vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"lightblue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.section1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/564x/59/58/ed/5958edb550c3d09c2880ccbba28b617f.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 18\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 27\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/564x/21/4c/30/214c30d4d8788d0a67831c8abe94a41a.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 30\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/564x/84/e8/09/84e80994ac7c5964f2c58e5fcf8a0974.jpg \",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 26\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 34\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \" https://i.pinimg.com/564x/24/a8/68/24a868f6ef98dbcb570016f8364ec076.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 33\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 25\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \" https://i.pinimg.com/564x/4c/99/46/4c9946dce3e83c88b301422b7dc92248.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \" https://i.pinimg.com/564x/be/17/38/be1738fd702d1c573ca9aae3ae008158.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }))), __jsx(\"h1\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, \" These are examples of Diatoms. They are a type a sea Algae. They make hard glass like structures and get their energy from sun light. \"))), __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 18\n    }\n  }, __jsx(\"h2\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 18\n    }\n  }, \"These are news headlines about Diatoms from around the world.\"), news.map(function (n, i) {\n    return __jsx(\"p\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 41\n      }\n    }, \" \", n.title, \" \");\n  })))));\n};\n\n_s(Algae, \"HYauJYuHuKDxa6efU7RD2dmfPO0=\");\n\n_c = Algae;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Algae);\n\nvar _c;\n\n$RefreshReg$(_c, \"Algae\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxnYWUuanM/ZWQxZiJdLCJuYW1lcyI6WyJBbGdhZSIsInVzZVN0YXRlIiwibmV3cyIsInNldE5ld3MiLCJmZXRjaE5ld3MiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiZGF0YSIsImhpdHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImFsaWduQ29udGVudCIsInBvc2l0aW9uIiwibGVmdCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJvYmplY3RGaXQiLCJvdmVyZmxvdyIsInN0eWxlcyIsInNlY3Rpb24xIiwiZmxpcGNhcmQiLCJmbGlwY2FyZGlubmVyIiwiZmxpcGNhcmRmcm9udCIsImZsaXBjYXJkYmFjayIsIm1hcCIsIm4iLCJpIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBR1NDLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR1JDLElBSFE7QUFBQSxNQUdGQyxPQUhFLGlCQUtoQjs7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQkMsU0FBSyxDQUFDLG1EQUFELENBQUwsQ0FDQTtBQURBLEtBRUNDLElBRkQsQ0FFTSxVQUFBQyxNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDQyxJQUFQLEVBQUo7QUFBQSxLQUZaLEVBR0VGLElBSEYsQ0FHTyxVQUFBRyxJQUFJO0FBQUEsYUFBSU4sT0FBTyxDQUFDTSxJQUFJLENBQUNDLElBQU4sQ0FBWDtBQUFBLEtBSFgsRUFJQTtBQUpBLGNBS0ssVUFBQUMsS0FBSztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0MsR0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQW1CLFVBQU0sRUFBQyxPQUExQjtBQUFrQyxPQUFHLEVBQUMsMEVBQXRDO0FBQWlILE9BQUcsRUFBQyxRQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKQSxFQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQQSxDQURZLENBdkJaLEVBb0NOO0FBQUksU0FBSyxFQUFFO0FBQUVULGFBQU8sRUFBQyxNQUFWO0FBQWtCQyxlQUFTLEVBQUM7QUFBNUIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtJQXBDTSxDQURBLENBbEJKLEVBMERRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSSxTQUFLLEVBQUU7QUFBRUQsYUFBTyxFQUFDLE1BQVY7QUFBa0JDLGVBQVMsRUFBQztBQUE1QixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBREEsRUFFRXRCLElBQUksQ0FBQytCLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFZO0FBQUcsU0FBRyxFQUFFQSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBYUQsQ0FBQyxDQUFDRSxLQUFmLE1BQVo7QUFBQSxHQUFULENBRkYsQ0FERCxDQTFEUixDQURBLENBREo7QUFxRUgsQ0ExRkQ7O0dBQU1wQyxLOztLQUFBQSxLO0FBNEZTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FsZ2FlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllci8nXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTXlDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL015Q2Fyb3VzZWwnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cblxuY29uc3QgQWxnYWUgPSAoKSA9PiB7XG5cblxuICAgIGNvbnN0IFsgbmV3cywgc2V0TmV3c10gPSB1c2VTdGF0ZShbXSlcblxuICAgIC8vZmV0Y2ggbmV3c1xuICAgIFxuICAgIGNvbnN0IGZldGNoTmV3cyA9ICgpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vaG4uYWxnb2xpYS5jb20vYXBpL3YxL3NlYXJjaD9xdWVyeT1kaWF0b21zXCIpXG4gICAgICAgIC8vIGZldGNoKFwiaHR0cDovL2huLmFsZ29saWEuY29tL2FwaS92MS9zZWFyY2g/cXVlcnk9Zm9vJnRhZ3M9c3RvcnlcIilcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgICAudGhlbihkYXRhID0+IHNldE5ld3MoZGF0YS5oaXRzKSlcbiAgICAgICAgLy8gIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoTmV3cygpXG4gICAgfSlcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwdmhcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIix9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDpcIjEwMHZoXCIsd2lkdGg6IFwiMTAwJVwiLCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLGxlZnQ6ICc1JScsd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOlwiNzBweFwiLH19PlxuICAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyIHVybD1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZVZabFZCMFNELTgmdD0yc1wiIGNvbnRyb2xzPXt0cnVlfSBsb29wID17dHJ1ZX0gbXV0ZWQ9e2ZhbHNlfSBhdXRvcGxheT17ZmFsc2V9IGJhY2tncm91bmQ9e3RydWV9IHBsYXlpbmc9e2ZhbHNlfSB3aWR0aD0nODB2dycgaGVpZ2h0PSc1NTBweCcgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6XCI4MHZoXCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGJhY2tncm91bmRDb2xvcjogXCJncmF5XCIsIH19PlxuICAgICAgICAgICAgICAgIDxkaXY+IDxDYXJkLz4gXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHBhZGRpbmc6XCI0NXB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwifX0+TWljcm9zY29wZXMgYWxsb3cgdXMgdG8gc2VlIGludG8gdGhlIG1pY3Jvc2NvcGljIHdvcmxkIDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLGhlaWdodDpcIjkwdmhcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgaGVpZ2h0OlwiMjIwdmhcIix3aWR0aDpcIjExMHZoXCIsIGFsaWduQ29udGVudDpcImNlbnRlclwiLCAgb2JqZWN0Rml0OlwiY292ZXJcIixvdmVyZmxvdzpcImhpZGRlblwiLCBwYWRkaW5nOlwiMTBweFwiLCB9fT5cbiAgICAgICAgICAgICAgICA8TXlDYXJvdXNlbCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDpcIjEwMHZoXCIsZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Ymx1ZVwiLCB9fT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb24xfT5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGlubmVyfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkZnJvbnR9PlxuICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvNTkvNTgvZWQvNTk1OGVkYjU1MGMzZDA5YzI4ODBjY2JiYTI4YjYxN2YuanBnXCIgYWx0PVwiQXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkYmFja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzNTBweFwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8yMS80Yy8zMC8yMTRjMzBkNGQ4Nzg4ZDBhNjc4MzFjOGFiZTk0YTQxYS5qcGdcIiBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFN0YXJSYXRpbmcgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGlubmVyfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkZnJvbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzNTBweFwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC84NC9lOC8wOS84NGU4MDk5NGFjN2M1OTY0ZjJjNThlNWZjZjhhMDk3NC5qcGcgXCIgYWx0PVwiQXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmRiYWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjM1MHB4XCIgaGVpZ2h0PVwiMzUwcHhcIiBzcmM9XCIgaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8yNC9hOC82OC8yNGE4NjhmNmVmOThkYmNiNTcwMDE2ZjgzNjRlYzA3Ni5qcGdcIiBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFN0YXJSYXRpbmcgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmRpbm5lcn0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGZyb250fT5cbiAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cIiBodHRwczovL2kucGluaW1nLmNvbS81NjR4LzRjLzk5LzQ2LzRjOTk0NmRjZTNlODNjODhiMzAxNDIyYjdkYzkyMjQ4LmpwZ1wiIGFsdD1cIkF2YXRhclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGJhY2t9PlxuICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzNTBweFwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiIGh0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvYmUvMTcvMzgvYmUxNzM4ZmQ3MDJkMWM1NzNjYTlhYWUzYWUwMDgxNTguanBnXCIgYWx0PVwiQXZhdGFyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gPC9kaXY+XG4gICAgICA8aDEgc3R5bGU9e3sgcGFkZGluZzpcIjQ1cHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCJ9fT4gVGhlc2UgYXJlIGV4YW1wbGVzIG9mIERpYXRvbXMuIFRoZXkgYXJlIGEgdHlwZSBhIHNlYSBBbGdhZS4gVGhleSBtYWtlIGhhcmQgZ2xhc3MgbGlrZSBzdHJ1Y3R1cmVzIGFuZCBnZXQgdGhlaXIgZW5lcmd5IGZyb20gc3VuIGxpZ2h0LiA8L2gxPlxuICAgIDwvc2VjdGlvbj4gXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBwYWRkaW5nOlwiNDVweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlRoZXNlIGFyZSBuZXdzIGhlYWRsaW5lcyBhYm91dCBEaWF0b21zIGZyb20gYXJvdW5kIHRoZSB3b3JsZC48L2gyPlxuICAgICAgICAgICAgICAgICAge25ld3MubWFwKChuLCBpKSA9PiAoIDxwIGtleT17aX0+IHtuLnRpdGxlfSA8L3A+ICkpfVxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxnYWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/algae.js\n");

/***/ })

})
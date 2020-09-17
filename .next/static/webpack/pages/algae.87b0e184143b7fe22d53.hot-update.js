webpackHotUpdate_N_E("pages/algae",{

/***/ "./pages/algae.js":
/*!************************!*\
  !*** ./pages/algae.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_player___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player/ */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player___WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_MyCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyCarousel */ \"./components/MyCarousel.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/lukemyers/Desktop/NewProjects2020/MicroLife/pages/algae.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Algae = function Algae() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.backgroundColor = '#4a5f6b';\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      news = _useState[0],\n      setNews = _useState[1]; //fetch news\n\n\n  var fetchNews = function fetchNews() {\n    fetch(\"http://hn.algolia.com/api/v1/search?query=diatoms\") // fetch(\"http://hn.algolia.com/api/v1/search?query=foo&tags=story\")\n    .then(function (result) {\n      return result.json();\n    }).then(function (data) {\n      return setNews(data.hits);\n    }) //  .then(data => console.log(data));\n    [\"catch\"](function (error) {\n      return console.log(error);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchNews();\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"Micro Life | Learn about Microscopic Life\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"https://www.google.com/recaptcha/api.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    charset: \"UTF-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Microscopic Life, learn about microscopic life on earth and on microbes on Mars.\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 10\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"Germs, germ, teach kids microbiology, protozoa, virus, bacteria, microcosm, microbiology, diatoms, life on mars, mars life, microscopic life,\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 10\n    }\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: \"Luke Myers\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 10\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"100vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"blue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      height: \"100vh\",\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      alignContent: \"center\",\n      position: \"relative\",\n      left: '5%',\n      width: \"100%\",\n      padding: \"70px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, __jsx(react_player___WEBPACK_IMPORTED_MODULE_1___default.a, {\n    url: \"https://www.youtube.com/watch?v=eVZlVB0SD-8&t=2s\",\n    controls: true,\n    loop: true,\n    muted: false,\n    autoplay: false,\n    background: true,\n    playing: false,\n    width: \"80vw\",\n    height: \"550px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 22\n    }\n  })))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"80vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"gray\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 14\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardArea,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.upSplash2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 18\n    }\n  }, __jsx(\"img\", {\n    src: \"https://source.unsplash.com/400x400/?microscope\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    style: {\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }, \" \", __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 57\n    }\n  }, \"Microscopes allow us to see into the microscopic world \")))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"90vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"green\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"220vh\",\n      width: \"110vh\",\n      alignContent: \"center\",\n      objectFit: \"cover\",\n      overflow: \"hidden\",\n      padding: \"10px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }\n  }, __jsx(_components_MyCarousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"100vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"lightblue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.section1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/e9/7f/dd/e97fdd0ba8ae92864f7854cf8fa2f49e.jpg \",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 18\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 27\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/80/5f/cb/805fcb2f373ae6788dc727bc8f91b92f.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 30\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/56/47/4a/56474a101fa0c79d3b0dd91a5c1d34f4.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 26\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 34\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \" https://i.pinimg.com/236x/af/3b/30/af3b3081a0625fd0dd45e4212a7db299.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 33\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 25\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \" https://i.pinimg.com/564x/4c/99/46/4c9946dce3e83c88b301422b7dc92248.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 5\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/eb/0d/ca/eb0dcab495286e6d9629d2d8b5092523.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }))), __jsx(\"h1\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, \" These are examples of Diatoms. They are a type a sea Algae. They make hard glass like structures and get their energy from sun light. \"))), __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 18\n    }\n  }, __jsx(\"h2\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 18\n    }\n  }, \"These are news headlines about Diatoms from around the world.\"), news.map(function (n, i) {\n    return __jsx(\"p\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 41\n      }\n    }, \" \", n.title, \" \");\n  })))));\n};\n\n_s(Algae, \"1ZdFl0ulapLfrAlTDfu6XHE6Vjk=\");\n\n_c = Algae;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Algae);\n\nvar _c;\n\n$RefreshReg$(_c, \"Algae\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxnYWUuanM/ZWQxZiJdLCJuYW1lcyI6WyJBbGdhZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidXNlU3RhdGUiLCJuZXdzIiwic2V0TmV3cyIsImZldGNoTmV3cyIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwiaGl0cyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwicG9zaXRpb24iLCJsZWZ0IiwicGFkZGluZyIsInRleHRBbGlnbiIsInN0eWxlcyIsImNhcmRBcmVhIiwidXBTcGxhc2gyIiwib2JqZWN0Rml0Iiwib3ZlcmZsb3ciLCJzZWN0aW9uMSIsImZsaXBjYXJkIiwiZmxpcGNhcmRpbm5lciIsImZsaXBjYXJkZnJvbnQiLCJmbGlwY2FyZGJhY2siLCJtYXAiLCJuIiwiaSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFaEJDLHlEQUFTLENBQUMsWUFBTTtBQUNoQkMsWUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLGVBQXBCLEdBQXNDLFNBQXRDO0FBQ0MsR0FGUSxDQUFUOztBQUZnQixrQkFPU0Msc0RBQVEsQ0FBQyxFQUFELENBUGpCO0FBQUEsTUFPUkMsSUFQUTtBQUFBLE1BT0ZDLE9BUEUsaUJBU2hCOzs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCQyxTQUFLLENBQUMsbURBQUQsQ0FBTCxDQUNBO0FBREEsS0FFQ0MsSUFGRCxDQUVNLFVBQUFDLE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUNDLElB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bnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllci8nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTXlDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL015Q2Fyb3VzZWwnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IEFsZ2FlID0gKCkgPT4ge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGE1ZjZiJ1xuICAgIH0pXG5cblxuICAgIGNvbnN0IFsgbmV3cywgc2V0TmV3c10gPSB1c2VTdGF0ZShbXSlcblxuICAgIC8vZmV0Y2ggbmV3c1xuICAgIFxuICAgIGNvbnN0IGZldGNoTmV3cyA9ICgpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vaG4uYWxnb2xpYS5jb20vYXBpL3YxL3NlYXJjaD9xdWVyeT1kaWF0b21zXCIpXG4gICAgICAgIC8vIGZldGNoKFwiaHR0cDovL2huLmFsZ29saWEuY29tL2FwaS92MS9zZWFyY2g/cXVlcnk9Zm9vJnRhZ3M9c3RvcnlcIilcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgICAudGhlbihkYXRhID0+IHNldE5ld3MoZGF0YS5oaXRzKSlcbiAgICAgICAgLy8gIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoTmV3cygpXG4gICAgfSlcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NaWNybyBMaWZlIHwgTGVhcm4gYWJvdXQgTWljcm9zY29waWMgTGlmZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9J2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcyc+PC9zY3JpcHQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTWljcm9zY29waWMgTGlmZSwgbGVhcm4gYWJvdXQgbWljcm9zY29waWMgbGlmZSBvbiBlYXJ0aCBhbmQgb24gbWljcm9iZXMgb24gTWFycy5cIiAvPiBcbiAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJHZXJtcywgZ2VybSwgdGVhY2gga2lkcyBtaWNyb2Jpb2xvZ3ksIHByb3Rvem9hLCB2aXJ1cywgYmFjdGVyaWEsIG1pY3JvY29zbSwgbWljcm9iaW9sb2d5LCBkaWF0b21zLCBsaWZlIG9uIG1hcnMsIG1hcnMgbGlmZSwgbWljcm9zY29waWMgbGlmZSxcIiAvPlxuICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJMdWtlIE15ZXJzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDpcIjEwMHZoXCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIsfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6XCIxMDB2aFwiLHdpZHRoOiBcIjEwMCVcIiwgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIscG9zaXRpb246IFwicmVsYXRpdmVcIixsZWZ0OiAnNSUnLHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZzpcIjcwcHhcIix9fT5cbiAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllciB1cmw9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWVWWmxWQjBTRC04JnQ9MnNcIiBjb250cm9scz17dHJ1ZX0gbG9vcCA9e3RydWV9IG11dGVkPXtmYWxzZX0gYXV0b3BsYXk9e2ZhbHNlfSBiYWNrZ3JvdW5kPXt0cnVlfSBwbGF5aW5nPXtmYWxzZX0gd2lkdGg9JzgwdncnIGhlaWdodD0nNTUwcHgnICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OlwiODB2aFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JheVwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQXJlYX0+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBTcGxhc2gyfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS80MDB4NDAwLz9taWNyb3Njb3BlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjpcImNlbnRlclwifX0+IDxoMT5NaWNyb3Njb3BlcyBhbGxvdyB1cyB0byBzZWUgaW50byB0aGUgbWljcm9zY29waWMgd29ybGQgPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLGhlaWdodDpcIjkwdmhcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgaGVpZ2h0OlwiMjIwdmhcIix3aWR0aDpcIjExMHZoXCIsIGFsaWduQ29udGVudDpcImNlbnRlclwiLCAgb2JqZWN0Rml0OlwiY292ZXJcIixvdmVyZmxvdzpcImhpZGRlblwiLCBwYWRkaW5nOlwiMTBweFwiLCB9fT5cbiAgICAgICAgICAgICAgICA8TXlDYXJvdXNlbCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDpcIjEwMHZoXCIsZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Ymx1ZVwiLCB9fT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb24xfT5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGlubmVyfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkZnJvbnR9PlxuICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvZTkvN2YvZGQvZTk3ZmRkMGJhOGFlOTI4NjRmNzg1NGNmOGZhMmY0OWUuanBnIFwiIGFsdD1cIkF2YXRhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGJhY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvODAvNWYvY2IvODA1ZmNiMmYzNzNhZTY3ODhkYzcyN2JjOGY5MWI5MmYuanBnXCIgYWx0PVwiQXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTdGFyUmF0aW5nIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmRpbm5lcn0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGZyb250fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvNTYvNDcvNGEvNTY0NzRhMTAxZmEwYzc5ZDNiMGRkOTFhNWMxZDM0ZjQuanBnXCIgYWx0PVwiQXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmRiYWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjM1MHB4XCIgaGVpZ2h0PVwiMzUwcHhcIiBzcmM9XCIgaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC9hZi8zYi8zMC9hZjNiMzA4MWEwNjI1ZmQwZGQ0NWU0MjEyYTdkYjI5OS5qcGdcIiBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFN0YXJSYXRpbmcgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmRpbm5lcn0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGZyb250fT5cbiAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cIiBodHRwczovL2kucGluaW1nLmNvbS81NjR4LzRjLzk5LzQ2LzRjOTk0NmRjZTNlODNjODhiMzAxNDIyYjdkYzkyMjQ4LmpwZ1wiIGFsdD1cIkF2YXRhclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGJhY2t9PlxuICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzNTBweFwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC9lYi8wZC9jYS9lYjBkY2FiNDk1Mjg2ZTZkOTYyOWQyZDhiNTA5MjUyMy5qcGdcIiBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiA8L2Rpdj5cbiAgICAgIDxoMSBzdHlsZT17eyBwYWRkaW5nOlwiNDVweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIn19PiBUaGVzZSBhcmUgZXhhbXBsZXMgb2YgRGlhdG9tcy4gVGhleSBhcmUgYSB0eXBlIGEgc2VhIEFsZ2FlLiBUaGV5IG1ha2UgaGFyZCBnbGFzcyBsaWtlIHN0cnVjdHVyZXMgYW5kIGdldCB0aGVpciBlbmVyZ3kgZnJvbSBzdW4gbGlnaHQuIDwvaDE+XG4gICAgPC9zZWN0aW9uPiBcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHBhZGRpbmc6XCI0NXB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwifX0+VGhlc2UgYXJlIG5ld3MgaGVhZGxpbmVzIGFib3V0IERpYXRvbXMgZnJvbSBhcm91bmQgdGhlIHdvcmxkLjwvaDI+XG4gICAgICAgICAgICAgICAgICB7bmV3cy5tYXAoKG4sIGkpID0+ICggPHAga2V5PXtpfT4ge24udGl0bGV9IDwvcD4gKSl9XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGdhZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/algae.js\n");

/***/ })

})
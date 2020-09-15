webpackHotUpdate_N_E("pages/algae",{

/***/ "./pages/algae.js":
/*!************************!*\
  !*** ./pages/algae.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_player___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player/ */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player___WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_MyCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyCarousel */ \"./components/MyCarousel.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/lukemyers/Desktop/NewProjects2020/MicroLife/pages/algae.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Algae = function Algae() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.backgroundColor = '#4a5f6b';\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      news = _useState[0],\n      setNews = _useState[1]; //fetch news\n\n\n  var fetchNews = function fetchNews() {\n    fetch(\"http://hn.algolia.com/api/v1/search?query=diatoms\") // fetch(\"http://hn.algolia.com/api/v1/search?query=foo&tags=story\")\n    .then(function (result) {\n      return result.json();\n    }).then(function (data) {\n      return setNews(data.hits);\n    }) //  .then(data => console.log(data));\n    [\"catch\"](function (error) {\n      return console.log(error);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchNews();\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"Micro Life | Learn about Microscopic Life\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"https://www.google.com/recaptcha/api.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    charset: \"UTF-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Microscopic Life, learn about microscopic life on earth and on microbes on Mars.\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 10\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"Germs, germ, teach kids microbiology, protozoa, virus, bacteria, microcosm, microbiology, diatoms, life on mars, mars life, microscopic life,\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 10\n    }\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: \"Luke Myers\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 10\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"100vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"blue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      height: \"100vh\",\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      alignContent: \"center\",\n      position: \"relative\",\n      left: '5%',\n      width: \"100%\",\n      padding: \"70px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }, __jsx(react_player___WEBPACK_IMPORTED_MODULE_1___default.a, {\n    url: \"https://www.youtube.com/watch?v=eVZlVB0SD-8&t=2s\",\n    controls: true,\n    loop: true,\n    muted: false,\n    autoplay: false,\n    background: true,\n    playing: false,\n    width: \"80vw\",\n    height: \"550px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 22\n    }\n  })))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"80vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"gray\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 14\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, \" \", __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 23\n    }\n  }), __jsx(\"h1\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }, \"Microscopes allow us to see into the microscopic world \"))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"90vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"green\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"220vh\",\n      width: \"110vh\",\n      alignContent: \"center\",\n      objectFit: \"cover\",\n      overflow: \"hidden\",\n      padding: \"10px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, __jsx(_components_MyCarousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"100vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"lightblue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.section1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/e9/7f/dd/e97fdd0ba8ae92864f7854cf8fa2f49e.jpg \",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 18\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 27\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/80/5f/cb/805fcb2f373ae6788dc727bc8f91b92f.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 30\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/56/47/4a/56474a101fa0c79d3b0dd91a5c1d34f4.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 26\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 34\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \" https://i.pinimg.com/236x/af/3b/30/af3b3081a0625fd0dd45e4212a7db299.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 33\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 25\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \" https://i.pinimg.com/564x/4c/99/46/4c9946dce3e83c88b301422b7dc92248.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/eb/0d/ca/eb0dcab495286e6d9629d2d8b5092523.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }))), __jsx(\"h1\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }\n  }, \" These are examples of Diatoms. They are a type a sea Algae. They make hard glass like structures and get their energy from sun light. \"))), __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 18\n    }\n  }, __jsx(\"h2\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 18\n    }\n  }, \"These are news headlines about Diatoms from around the world.\"), news.map(function (n, i) {\n    return __jsx(\"p\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 41\n      }\n    }, \" \", n.title, \" \");\n  })))));\n};\n\n_s(Algae, \"1ZdFl0ulapLfrAlTDfu6XHE6Vjk=\");\n\n_c = Algae;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Algae);\n\nvar _c;\n\n$RefreshReg$(_c, \"Algae\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxnYWUuanM/ZWQxZiJdLCJuYW1lcyI6WyJBbGdhZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidXNlU3RhdGUiLCJuZXdzIiwic2V0TmV3cyIsImZldGNoTmV3cyIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwiaGl0cyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwicG9zaXRpb24iLCJsZWZ0IiwicGFkZGluZyIsInRleHRBbGlnbiIsIm9iamVjdEZpdCIsIm92ZXJmbG93Iiwic3R5bGVzIiwic2VjdGlvbjEiLCJmbGlwY2FyZCIsImZsaXBjYXJkaW5uZXIiLCJmbGlwY2FyZGZyb250IiwiZmxpcGNhcmRiYWNrIiwibWFwIiwibiIsImkiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBRWhCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsWUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLGVBQXBCLEdBQXNDLFNBQXRDO0FBQ0MsR0FGSSxDQUFUOztBQUZnQixrQkFPU0Msc0RBQVEsQ0FBQyxFQUFELENBUGpCO0FBQUEsTUFPUkMsSUFQUTtBQUFBLE1BT0ZDLE9BUEUsaUJBU2hCOzs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCQyxTQUFLLENBQUMsbURBQUQsQ0FBTCxDQUNBO0FBREEsS0FFQ0MsSUFGRCxDQUVNLFVBQUFDLE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUNDLElBQVAsRUFBSjtBQUFBLEtBRlos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Qyx5RUFBdEM7QUFBZ0gsT0FBRyxFQUFDLFFBQXBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpBLEVBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBBLENBRFksQ0F2QlosRUFvQ047QUFBSSxTQUFLLEVBQUU7QUFBRVQsYUFBTyxFQUFDLE1BQVY7QUFBa0JDLGVBQVMsRUFBQztBQUE1QixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0lBcENNLENBREEsQ0FsQkosRUEwRFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFJLFNBQUssRUFBRTtBQUFFRCxhQUFPLEVBQUMsTUFBVjtBQUFrQkMsZUFBUyxFQUFDO0FBQTVCLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRUFEQSxFQUVFcEIsSUFBSSxDQUFDNkIsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVk7QUFBRyxTQUFHLEVBQUVBLENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFhRCxDQUFDLENBQUNFLEtBQWYsTUFBWjtBQUFBLEdBQVQsQ0FGRixDQURELENBMURSLENBZEEsQ0FESjtBQWtGSCxDQTNHRDs7R0FBTXZDLEs7O0tBQUFBLEs7QUE2R1NBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWxnYWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyLydcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBNeUNhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvTXlDYXJvdXNlbCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgQWxnYWUgPSAoKSA9PiB7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGE1ZjZiJ1xuICAgICAgICB9KVxuICAgIFxuXG4gICAgY29uc3QgWyBuZXdzLCBzZXROZXdzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgLy9mZXRjaCBuZXdzXG4gICAgXG4gICAgY29uc3QgZmV0Y2hOZXdzID0gKCkgPT4ge1xuICAgICAgICBmZXRjaChcImh0dHA6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3F1ZXJ5PWRpYXRvbXNcIilcbiAgICAgICAgLy8gZmV0Y2goXCJodHRwOi8vaG4uYWxnb2xpYS5jb20vYXBpL3YxL3NlYXJjaD9xdWVyeT1mb28mdGFncz1zdG9yeVwiKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0TmV3cyhkYXRhLmhpdHMpKVxuICAgICAgICAvLyAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hOZXdzKClcbiAgICB9KVxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cblxuICAgICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1pY3JvIExpZmUgfCBMZWFybiBhYm91dCBNaWNyb3Njb3BpYyBMaWZlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8c2NyaXB0IHNyYz0naHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzJz48L3NjcmlwdD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJNaWNyb3Njb3BpYyBMaWZlLCBsZWFybiBhYm91dCBtaWNyb3Njb3BpYyBsaWZlIG9uIGVhcnRoIGFuZCBvbiBtaWNyb2JlcyBvbiBNYXJzLlwiIC8+IFxuICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkdlcm1zLCBnZXJtLCB0ZWFjaCBraWRzIG1pY3JvYmlvbG9neSwgcHJvdG96b2EsIHZpcnVzLCBiYWN0ZXJpYSwgbWljcm9jb3NtLCBtaWNyb2Jpb2xvZ3ksIGRpYXRvbXMsIGxpZmUgb24gbWFycywgbWFycyBsaWZlLCBtaWNyb3Njb3BpYyBsaWZlLFwiIC8+XG4gICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkx1a2UgTXllcnNcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwdmhcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIix9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDpcIjEwMHZoXCIsd2lkdGg6IFwiMTAwJVwiLCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLGxlZnQ6ICc1JScsd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOlwiNzBweFwiLH19PlxuICAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyIHVybD1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZVZabFZCMFNELTgmdD0yc1wiIGNvbnRyb2xzPXt0cnVlfSBsb29wID17dHJ1ZX0gbXV0ZWQ9e2ZhbHNlfSBhdXRvcGxheT17ZmFsc2V9IGJhY2tncm91bmQ9e3RydWV9IHBsYXlpbmc9e2ZhbHNlfSB3aWR0aD0nODB2dycgaGVpZ2h0PSc1NTBweCcgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6XCI4MHZoXCIsZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGJhY2tncm91bmRDb2xvcjogXCJncmF5XCIsIH19PlxuICAgICAgICAgICAgICAgIDxkaXY+IDxDYXJkLz4gXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHBhZGRpbmc6XCI0NXB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwifX0+TWljcm9zY29wZXMgYWxsb3cgdXMgdG8gc2VlIGludG8gdGhlIG1pY3Jvc2NvcGljIHdvcmxkIDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLGhlaWdodDpcIjkwdmhcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgaGVpZ2h0OlwiMjIwdmhcIix3aWR0aDpcIjExMHZoXCIsIGFsaWduQ29udGVudDpcImNlbnRlclwiLCAgb2JqZWN0Rml0OlwiY292ZXJcIixvdmVyZmxvdzpcImhpZGRlblwiLCBwYWRkaW5nOlwiMTBweFwiLCB9fT5cbiAgICAgICAgICAgICAgICA8TXlDYXJvdXNlbCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDpcIjEwMHZoXCIsZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Ymx1ZVwiLCB9fT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb24xfT5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGlubmVyfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkZnJvbnR9PlxuICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvZTkvN2YvZGQvZTk3ZmRkMGJhOGFlOTI4NjRmNzg1NGNmOGZhMmY0OWUuanBnIFwiIGFsdD1cIkF2YXRhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGJhY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvODAvNWYvY2IvODA1ZmNiMmYzNzNhZTY3ODhkYzcyN2JjOGY5MWI5MmYuanBnXCIgYWx0PVwiQXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTdGFyUmF0aW5nIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmRpbm5lcn0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGZyb250fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvNTYvNDcvNGEvNTY0NzRhMTAxZmEwYzc5ZDNiMGRkOTFhNWMxZDM0ZjQuanBnXCIgYWx0PVwiQXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmRiYWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjM1MHB4XCIgaGVpZ2h0PVwiMzUwcHhcIiBzcmM9XCIgaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC9hZi8zYi8zMC9hZjNiMzA4MWEwNjI1ZmQwZGQ0NWU0MjEyYTdkYjI5OS5qcGdcIiBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFN0YXJSYXRpbmcgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmRpbm5lcn0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGZyb250fT5cbiAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cIiBodHRwczovL2kucGluaW1nLmNvbS81NjR4LzRjLzk5LzQ2LzRjOTk0NmRjZTNlODNjODhiMzAxNDIyYjdkYzkyMjQ4LmpwZ1wiIGFsdD1cIkF2YXRhclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGJhY2t9PlxuICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzNTBweFwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC9lYi8wZC9jYS9lYjBkY2FiNDk1Mjg2ZTZkOTYyOWQyZDhiNTA5MjUyMy5qcGdcIiBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiA8L2Rpdj5cbiAgICAgIDxoMSBzdHlsZT17eyBwYWRkaW5nOlwiNDVweFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIn19PiBUaGVzZSBhcmUgZXhhbXBsZXMgb2YgRGlhdG9tcy4gVGhleSBhcmUgYSB0eXBlIGEgc2VhIEFsZ2FlLiBUaGV5IG1ha2UgaGFyZCBnbGFzcyBsaWtlIHN0cnVjdHVyZXMgYW5kIGdldCB0aGVpciBlbmVyZ3kgZnJvbSBzdW4gbGlnaHQuIDwvaDE+XG4gICAgPC9zZWN0aW9uPiBcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHBhZGRpbmc6XCI0NXB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwifX0+VGhlc2UgYXJlIG5ld3MgaGVhZGxpbmVzIGFib3V0IERpYXRvbXMgZnJvbSBhcm91bmQgdGhlIHdvcmxkLjwvaDI+XG4gICAgICAgICAgICAgICAgICB7bmV3cy5tYXAoKG4sIGkpID0+ICggPHAga2V5PXtpfT4ge24udGl0bGV9IDwvcD4gKSl9XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGdhZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/algae.js\n");

/***/ })

})
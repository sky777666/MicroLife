webpackHotUpdate_N_E("pages/algae",{

/***/ "./pages/algae.js":
/*!************************!*\
  !*** ./pages/algae.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_player___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player/ */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player___WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_MyCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyCarousel */ \"./components/MyCarousel.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/lukemyers/Desktop/NewProjects2020/MicroLife/pages/algae.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Algae = function Algae() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.backgroundColor = '#4a5f6b';\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      news = _useState[0],\n      setNews = _useState[1]; //fetch news\n\n\n  var fetchNews = function fetchNews() {\n    fetch(\"http://hn.algolia.com/api/v1/search?query=diatoms\") // fetch(\"http://hn.algolia.com/api/v1/search?query=foo&tags=story\")\n    .then(function (result) {\n      return result.json();\n    }).then(function (data) {\n      return setNews(data.hits);\n    }) //  .then(data => console.log(data));\n    [\"catch\"](function (error) {\n      return console.log(error);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchNews();\n  });\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"Micro Life | Learn about Microscopic Life\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"https://www.google.com/recaptcha/api.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    charset: \"UTF-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Microscopic Life, learn about microscopic life on earth and on microbes on Mars.\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 10\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"Germs, germ, teach kids microbiology, protozoa, virus, bacteria, microcosm, microbiology, diatoms, life on mars, mars life, microscopic life,\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 10\n    }\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: \"Luke Myers\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 10\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"100vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"blue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      height: \"100vh\",\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      alignContent: \"center\",\n      position: \"relative\",\n      left: '5%',\n      width: \"100%\",\n      padding: \"70px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, __jsx(react_player___WEBPACK_IMPORTED_MODULE_1___default.a, {\n    url: \"https://www.youtube.com/watch?v=eVZlVB0SD-8&t=2s\",\n    controls: true,\n    loop: true,\n    muted: false,\n    autoplay: false,\n    background: true,\n    playing: false,\n    width: \"80vw\",\n    height: \"550px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 22\n    }\n  })))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"80vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"gray\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 14\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardArea,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.upSplash2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 18\n    }\n  }, __jsx(\"img\", {\n    src: \"https://source.unsplash.com/400x400/?microscope\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    style: {\n      marginLeft: \"25%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }, \" \", __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 74\n    }\n  }, \"Microscopes allow us to see into the microscopic world \")))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"90vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"green\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"220vh\",\n      width: \"110vh\",\n      alignContent: \"center\",\n      objectFit: \"cover\",\n      overflow: \"hidden\",\n      padding: \"10px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }\n  }, __jsx(_components_MyCarousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }))), __jsx(\"section\", {\n    style: {\n      width: \"100%\",\n      height: \"100vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      backgroundColor: \"lightblue\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.section1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/e9/7f/dd/e97fdd0ba8ae92864f7854cf8fa2f49e.jpg \",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 18\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 27\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/80/5f/cb/805fcb2f373ae6788dc727bc8f91b92f.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 30\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/56/47/4a/56474a101fa0c79d3b0dd91a5c1d34f4.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 26\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 34\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \" https://i.pinimg.com/236x/af/3b/30/af3b3081a0625fd0dd45e4212a7db299.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 33\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcard,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 25\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardinner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardfront,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 14\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \" https://i.pinimg.com/564x/4c/99/46/4c9946dce3e83c88b301422b7dc92248.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 5\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flipcardback,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    width: \"350px\",\n    height: \"350px\",\n    src: \"https://i.pinimg.com/236x/eb/0d/ca/eb0dcab495286e6d9629d2d8b5092523.jpg\",\n    alt: \"Avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }))), __jsx(\"h1\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, \" These are examples of Diatoms. They are a type a sea Algae. They make hard glass like structures and get their energy from sun light. \"))), __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 18\n    }\n  }, __jsx(\"h2\", {\n    style: {\n      padding: \"45px\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 18\n    }\n  }, \"These are news headlines about Diatoms from around the world.\"), news.map(function (n, i) {\n    return __jsx(\"p\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 41\n      }\n    }, \" \", n.title, \" \");\n  })))));\n};\n\n_s(Algae, \"1ZdFl0ulapLfrAlTDfu6XHE6Vjk=\");\n\n_c = Algae;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Algae);\n\nvar _c;\n\n$RefreshReg$(_c, \"Algae\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxnYWUuanM/ZWQxZiJdLCJuYW1lcyI6WyJBbGdhZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidXNlU3RhdGUiLCJuZXdzIiwic2V0TmV3cyIsImZldGNoTmV3cyIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwiaGl0cyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwicG9zaXRpb24iLCJsZWZ0IiwicGFkZGluZyIsInRleHRBbGlnbiIsInN0eWxlcyIsImNhcmRBcmVhIiwidXBTcGxhc2gyIiwibWFyZ2luTGVmdCIsIm9iamVjdEZpdCIsIm92ZXJmbG93Iiwic2VjdGlvbjEiLCJmbGlwY2FyZCIsImZsaXBjYXJkaW5uZXIiLCJmbGlwY2FyZGZyb250IiwiZmxpcGNhcmRiYWNrIiwibWFwIiwibiIsImkiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBRWhCQyx5REFBUyxDQUFDLFlBQU07QUFDaEJDLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxlQUFwQixHQUFzQyxTQUF0QztBQUNDLEdBRlEsQ0FBVDs7QUFGZ0Isa0JBT1NDLHNEQUFRLENBQUMsRUFBRCxDQVBqQjtBQUFBLE1BT1JDLElBUFE7QUFBQSxNQU9GQyxPQVBFLGlCQVNoQjs7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQkMsU0FBSyxDQUFDLG1EQUFELENBQUwsQ0FDQTtBQURBLEtBRUNDLElBRkQsQ0FFTSxVQUFBQyxNQUFNO0FBQUEsYUFBSUEs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aWxlIjoiLi9wYWdlcy9hbGdhZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXIvJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE15Q2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9NeUNhcm91c2VsJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBBbGdhZSA9ICgpID0+IHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRhNWY2YidcbiAgICB9KVxuXG5cbiAgICBjb25zdCBbIG5ld3MsIHNldE5ld3NdID0gdXNlU3RhdGUoW10pXG5cbiAgICAvL2ZldGNoIG5ld3NcbiAgICBcbiAgICBjb25zdCBmZXRjaE5ld3MgPSAoKSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovL2huLmFsZ29saWEuY29tL2FwaS92MS9zZWFyY2g/cXVlcnk9ZGlhdG9tc1wiKVxuICAgICAgICAvLyBmZXRjaChcImh0dHA6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3F1ZXJ5PWZvbyZ0YWdzPXN0b3J5XCIpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKVxuICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXROZXdzKGRhdGEuaGl0cykpXG4gICAgICAgIC8vICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaE5ld3MoKVxuICAgIH0pXG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuXG4gICAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWljcm8gTGlmZSB8IExlYXJuIGFib3V0IE1pY3Jvc2NvcGljIExpZmU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPSdodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanMnPjwvc2NyaXB0PlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk1pY3Jvc2NvcGljIExpZmUsIGxlYXJuIGFib3V0IG1pY3Jvc2NvcGljIGxpZmUgb24gZWFydGggYW5kIG9uIG1pY3JvYmVzIG9uIE1hcnMuXCIgLz4gXG4gICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiR2VybXMsIGdlcm0sIHRlYWNoIGtpZHMgbWljcm9iaW9sb2d5LCBwcm90b3pvYSwgdmlydXMsIGJhY3RlcmlhLCBtaWNyb2Nvc20sIG1pY3JvYmlvbG9neSwgZGlhdG9tcywgbGlmZSBvbiBtYXJzLCBtYXJzIGxpZmUsIG1pY3Jvc2NvcGljIGxpZmUsXCIgLz5cbiAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiTHVrZSBNeWVyc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6XCIxMDB2aFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OlwiMTAwdmhcIix3aWR0aDogXCIxMDAlXCIsIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsbGVmdDogJzUlJyx3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6XCI3MHB4XCIsfX0+XG4gICAgICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXIgdXJsPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1lVlpsVkIwU0QtOCZ0PTJzXCIgY29udHJvbHM9e3RydWV9IGxvb3AgPXt0cnVlfSBtdXRlZD17ZmFsc2V9IGF1dG9wbGF5PXtmYWxzZX0gYmFja2dyb3VuZD17dHJ1ZX0gcGxheWluZz17ZmFsc2V9IHdpZHRoPSc4MHZ3JyBoZWlnaHQ9JzU1MHB4JyAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDpcIjgwdmhcIixkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsYmFja2dyb3VuZENvbG9yOiBcImdyYXlcIiwgdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEFyZWF9PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwU3BsYXNoMn0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vNDAweDQwMC8/bWljcm9zY29wZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OlwiMjUlXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT4gPGgxPk1pY3Jvc2NvcGVzIGFsbG93IHVzIHRvIHNlZSBpbnRvIHRoZSBtaWNyb3Njb3BpYyB3b3JsZCA8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsaGVpZ2h0OlwiOTB2aFwiLGRpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OlwiZmxleFwiLCBoZWlnaHQ6XCIyMjB2aFwiLHdpZHRoOlwiMTEwdmhcIiwgYWxpZ25Db250ZW50OlwiY2VudGVyXCIsICBvYmplY3RGaXQ6XCJjb3ZlclwiLG92ZXJmbG93OlwiaGlkZGVuXCIsIHBhZGRpbmc6XCIxMHB4XCIsIH19PlxuICAgICAgICAgICAgICAgIDxNeUNhcm91c2VsIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwdmhcIixkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRibHVlXCIsIH19PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbjF9PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkaW5uZXJ9PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmRmcm9udH0+XG4gICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzNTBweFwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC9lOS83Zi9kZC9lOTdmZGQwYmE4YWU5Mjg2NGY3ODU0Y2Y4ZmEyZjQ5ZS5qcGcgXCIgYWx0PVwiQXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkYmFja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzNTBweFwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC84MC81Zi9jYi84MDVmY2IyZjM3M2FlNjc4OGRjNzI3YmM4ZjkxYjkyZi5qcGdcIiBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFN0YXJSYXRpbmcgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGlubmVyfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkZnJvbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzNTBweFwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC81Ni80Ny80YS81NjQ3NGExMDFmYTBjNzlkM2IwZGQ5MWE1YzFkMzRmNC5qcGdcIiBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGJhY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMzUwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIHNyYz1cIiBodHRwczovL2kucGluaW1nLmNvbS8yMzZ4L2FmLzNiLzMwL2FmM2IzMDgxYTA2MjVmZDBkZDQ1ZTQyMTJhN2RiMjk5LmpwZ1wiIGFsdD1cIkF2YXRhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U3RhclJhdGluZyAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxpcGNhcmR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGlwY2FyZGlubmVyfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkZnJvbnR9PlxuICAgIDxpbWcgd2lkdGg9XCIzNTBweFwiIGhlaWdodD1cIjM1MHB4XCIgc3JjPVwiIGh0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvNGMvOTkvNDYvNGM5OTQ2ZGNlM2U4M2M4OGIzMDE0MjJiN2RjOTIyNDguanBnXCIgYWx0PVwiQXZhdGFyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsaXBjYXJkYmFja30+XG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjM1MHB4XCIgaGVpZ2h0PVwiMzUwcHhcIiBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS8yMzZ4L2ViLzBkL2NhL2ViMGRjYWI0OTUyODZlNmQ5NjI5ZDJkOGI1MDkyNTIzLmpwZ1wiIGFsdD1cIkF2YXRhclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuIDwvZGl2PlxuICAgICAgPGgxIHN0eWxlPXt7IHBhZGRpbmc6XCI0NXB4XCIsIHRleHRBbGlnbjpcImNlbnRlclwifX0+IFRoZXNlIGFyZSBleGFtcGxlcyBvZiBEaWF0b21zLiBUaGV5IGFyZSBhIHR5cGUgYSBzZWEgQWxnYWUuIFRoZXkgbWFrZSBoYXJkIGdsYXNzIGxpa2Ugc3RydWN0dXJlcyBhbmQgZ2V0IHRoZWlyIGVuZXJneSBmcm9tIHN1biBsaWdodC4gPC9oMT5cbiAgICA8L3NlY3Rpb24+IFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgcGFkZGluZzpcIjQ1cHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5UaGVzZSBhcmUgbmV3cyBoZWFkbGluZXMgYWJvdXQgRGlhdG9tcyBmcm9tIGFyb3VuZCB0aGUgd29ybGQuPC9oMj5cbiAgICAgICAgICAgICAgICAgIHtuZXdzLm1hcCgobiwgaSkgPT4gKCA8cCBrZXk9e2l9PiB7bi50aXRsZX0gPC9wPiApKX1cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZ2FlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/algae.js\n");

/***/ })

})
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/space.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/space.js":
/*!************************!*\
  !*** ./pages/space.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-reveal */ \"react-awesome-reveal\");\n/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/lukemyers/Desktop/NewProjects2020/MicroLife/pages/space.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Space = () => {\n  return __jsx(\"div\", {\n    class: \"section\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 1\n    }\n  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__[\"Fade\"], {\n    direction: \"left\",\n    delay: 1000,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 1\n    }\n  }, __jsx(\"div\", {\n    class: \"container\",\n    id: \"card1\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 1\n    }\n  }, __jsx(\"img\", {\n    src: \"https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_1280.jpg\",\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    class: \"caption\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, \"MicroCosm\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, \"Fullstack Server Side Rendering with Next.js the most most advanced React framework. \")))), __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__[\"Fade\"], {\n    direction: \"right\",\n    delay: 1000,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 1\n    }\n  }, __jsx(\"div\", {\n    class: \"container\",\n    id: \"card3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 1\n    }\n  }, __jsx(\"img\", {\n    src: \"https://i.pinimg.com/564x/32/a5/a0/32a5a0bcfc8291232e9d9a1d6d179234.jpg\",\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    class: \"caption\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"MicroCosm\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Fullstack Server Side Rendering with Next.js the most most advanced React framework. \")))), __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__[\"Slide\"], {\n    direction: \"left\",\n    delay: 1000,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    class: \"container2\",\n    id: \"card2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 1\n    }\n  }, __jsx(\"div\", {\n    class: \"text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"MicroCosm\"), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"Fullstack Server Side Rendering with Next.js the most most advanced React framework. \"), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"This application was created tThis application was created to inspire a new generation of Microbiologist and get kids involved in the wonders of the Microscopic world around them. Some of the technologies it includes are HTML, CSS, React, Next.js, JavaScript, React Animations, SQLite DB, and Prisma. \"), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, \"Play Here\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Space);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGFjZS5qcz9mMzI2Il0sIm5hbWVzIjpbIlNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFHaEIsU0FFSjtBQUFLLFNBQUssRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHlEQUFEO0FBQU0sYUFBUyxFQUFFLE1BQWpCO0FBQXlCLFNBQUssRUFBRSxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxTQUFLLEVBQUMsV0FBWDtBQUF1QixNQUFFLEVBQUMsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRO0FBQUssT0FBRyxFQUFDLDJFQUFUO0FBQXFGLE9BQUcsRUFBQyxFQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFIsRUFFUTtBQUFLLFNBQUssRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2RkFGSixDQUZSLENBREEsQ0FEQSxFQVlBLE1BQUMseURBQUQ7QUFBTSxhQUFTLEVBQUUsT0FBakI7QUFBMEIsU0FBSyxFQUFFLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLFNBQUssRUFBQyxXQUFYO0FBQXVCLE1BQUUsRUFBQyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBSyxPQUFHLEVBQUMseUVBQVQ7QUFBbUYsT0FBRyxFQUFDLEVBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUixFQUVRO0FBQUssU0FBSyxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZGQUZKLENBRlIsQ0FEQSxDQVpBLEVBd0JJLE1BQUMsMERBQUQ7QUFBTyxhQUFTLEVBQUUsTUFBbEI7QUFBMEIsU0FBSyxFQUFFLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSjtBQUFLLFNBQUssRUFBQyxZQUFYO0FBQXdCLE1BQUUsRUFBQyxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBSyxTQUFLLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkZBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFUQUhKLEVBT1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQUixDQURSLENBREksQ0F4QkosQ0FGSTtBQThESCxDQWpFRDs7QUFtRWVBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc3BhY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgU2xpZGUsIEZhZGUgfSBmcm9tIFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIjtcblxuXG5cbmNvbnN0IFNwYWNlID0gKCkgPT4ge1xuXG5cbiAgICByZXR1cm4gKFxuXG48ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuPEZhZGUgZGlyZWN0aW9uPXtcImxlZnRcIn0gZGVsYXk9ezEwMDB9ID5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cImNhcmQxXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wMS8wOC8xMS81Ny9idXR0ZXJmbHktMTEyNzY2Nl8xMjgwLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICA8aDE+TWljcm9Db3NtPC9oMT5cbiAgICAgICAgICAgIDxwPkZ1bGxzdGFjayBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmcgd2l0aCBOZXh0LmpzIHRoZSBtb3N0IG1vc3QgYWR2YW5jZWQgUmVhY3QgZnJhbWV3b3JrLiA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvRmFkZT5cblxuXG48RmFkZSBkaXJlY3Rpb249e1wicmlnaHRcIn0gZGVsYXk9ezEwMDB9ID5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cImNhcmQzXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8zMi9hNS9hMC8zMmE1YTBiY2ZjODI5MTIzMmU5ZDlhMWQ2ZDE3OTIzNC5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgPGgxPk1pY3JvQ29zbTwvaDE+XG4gICAgICAgICAgICA8cD5GdWxsc3RhY2sgU2VydmVyIFNpZGUgUmVuZGVyaW5nIHdpdGggTmV4dC5qcyB0aGUgbW9zdCBtb3N0IGFkdmFuY2VkIFJlYWN0IGZyYW1ld29yay4gPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvRmFkZT5cblxuICAgIFxuICAgIDxTbGlkZSBkaXJlY3Rpb249e1wibGVmdFwifSBkZWxheT17MTAwMH0gPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lcjJcIiBpZD1cImNhcmQyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8aDE+TWljcm9Db3NtPC9oMT5cbiAgICAgICAgICAgIDxoND5GdWxsc3RhY2sgU2VydmVyIFNpZGUgUmVuZGVyaW5nIHdpdGggTmV4dC5qcyB0aGUgbW9zdCBtb3N0IGFkdmFuY2VkIFJlYWN0IGZyYW1ld29yay4gPC9oND5cbiAgICAgICAgICAgIDxoND5UaGlzIGFwcGxpY2F0aW9uIHdhcyBjcmVhdGVkIHRUaGlzIGFwcGxpY2F0aW9uIHdhcyBjcmVhdGVkIHRvIGluc3BpcmUgYSBuZXcgZ2VuZXJhdGlvbiBvZiBNaWNyb2Jpb2xvZ2lzdCBcbiAgICAgICAgICAgICAgICBhbmQgZ2V0IGtpZHMgaW52b2x2ZWQgaW4gdGhlIHdvbmRlcnMgb2YgdGhlIE1pY3Jvc2NvcGljIHdvcmxkIGFyb3VuZCB0aGVtLiBcbiAgICAgICAgICAgICAgICBTb21lIG9mIHRoZSB0ZWNobm9sb2dpZXMgaXQgaW5jbHVkZXMgYXJlIEhUTUwsIENTUywgUmVhY3QsIE5leHQuanMsIEphdmFTY3JpcHQsIFxuICAgICAgICAgICAgICAgIFJlYWN0IEFuaW1hdGlvbnMsIFNRTGl0ZSBEQiwgYW5kIFByaXNtYS4gPC9oND5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPlBsYXkgSGVyZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwJScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgfX0+UGxheSBIZXJlPC9idXR0b24+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L1NsaWRlPlxuey8qIFxuPFNsaWRlIGRpcmVjdGlvbj17XCJsZWZ0XCJ9IGRlbGF5PXsxMDAwfSA+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyMFwiIGlkPVwiY2FyZDNcIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS81NjR4LzlmLzBmL2NkLzlmMGZjZDc5Yjc4MmI3Y2IwZDFlYTRlNTJkY2NkODQzLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICA8aDE+TWljcm9Db3NtPC9oMT5cbiAgICAgICAgICAgIDxwPkZ1bGxzdGFjayBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmcgd2l0aCBOZXh0LmpzIHRoZSBtb3N0IG1vc3QgYWR2YW5jZWQgUmVhY3QgZnJhbWV3b3JrLiA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvU2xpZGU+ICovfVxuIFxuXG5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGFjZTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/space.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"contactForm\": \"Home_contactForm__3Qx9y\",\n\t\"navbar\": \"Home_navbar__14ZRa\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"reactLogo\": \"Home_reactLogo__2USHv\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\",\n\t\"nasaphoto\": \"Home_nasaphoto__2f5F2\",\n\t\"photo\": \"Home_photo__2TqQw\",\n\t\"cardArea\": \"Home_cardArea__16CD4\",\n\t\"cardSmall\": \"Home_cardSmall__bdmOZ\",\n\t\"upSplash\": \"Home_upSplash__18atw\",\n\t\"weatherApp\": \"Home_weatherApp__2vAU3\",\n\t\"video\": \"Home_video__3RhNY\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzRmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiY29udGFjdEZvcm1cIjogXCJIb21lX2NvbnRhY3RGb3JtX18zUXg5eVwiLFxuXHRcIm5hdmJhclwiOiBcIkhvbWVfbmF2YmFyX18xNFpSYVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwicmVhY3RMb2dvXCI6IFwiSG9tZV9yZWFjdExvZ29fXzJVU0h2XCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiLFxuXHRcIm5hc2FwaG90b1wiOiBcIkhvbWVfbmFzYXBob3RvX18yZjVGMlwiLFxuXHRcInBob3RvXCI6IFwiSG9tZV9waG90b19fMlRxUXdcIixcblx0XCJjYXJkQXJlYVwiOiBcIkhvbWVfY2FyZEFyZWFfXzE2Q0Q0XCIsXG5cdFwiY2FyZFNtYWxsXCI6IFwiSG9tZV9jYXJkU21hbGxfX2JkbU9aXCIsXG5cdFwidXBTcGxhc2hcIjogXCJIb21lX3VwU3BsYXNoX18xOGF0d1wiLFxuXHRcIndlYXRoZXJBcHBcIjogXCJIb21lX3dlYXRoZXJBcHBfXzJ2QVUzXCIsXG5cdFwidmlkZW9cIjogXCJIb21lX3ZpZGVvX18zUmhOWVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-awesome-reveal":
/*!***************************************!*\
  !*** external "react-awesome-reveal" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-awesome-reveal\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hd2Vzb21lLXJldmVhbFwiPzY3ZjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtYXdlc29tZS1yZXZlYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hd2Vzb21lLXJldmVhbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-awesome-reveal\n");

/***/ })

/******/ });
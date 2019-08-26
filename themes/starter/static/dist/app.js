/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.sass */ \"./sass/style.sass\");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n\n\nif (document.querySelector('ul.gallery')) {\n  let li = document.querySelectorAll('ul.gallery li');\n  li.forEach(e => {\n    e.addEventListener(\"click\", replace);\n  });\n\n  function replace() {\n    document.querySelector('.main').setAttribute(\"src\", this.querySelector('img').getAttribute('src'));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcz9lZTFjIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcGxhY2UiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQUdBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFILEVBQ0E7QUFDQyxNQUFJQyxFQUFFLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBVDtBQUNBRCxJQUFFLENBQUNFLE9BQUgsQ0FBWUMsQ0FBRCxJQUFLO0FBQ2ZBLEtBQUMsQ0FBQ0MsZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBNEJDLE9BQTVCO0FBQ0EsR0FGRDs7QUFLQSxXQUFTQSxPQUFULEdBQW1CO0FBQ2xCUCxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NPLFlBQWhDLENBQTZDLEtBQTdDLEVBQW9ELEtBQUtQLGFBQUwsQ0FBbUIsS0FBbkIsRUFBMEJRLFlBQTFCLENBQXVDLEtBQXZDLENBQXBEO0FBQ0E7QUFDRCIsImZpbGUiOiIuL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zYXNzL3N0eWxlLnNhc3MnXHJcblxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bC5nYWxsZXJ5JykpXHJcbntcclxuXHRsZXQgbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5nYWxsZXJ5IGxpJyk7XHJcblx0bGkuZm9yRWFjaCgoZSk9PntcclxuXHRcdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcGxhY2UpXHJcblx0fSlcclxuXHJcblxyXG5cdGZ1bmN0aW9uIHJlcGxhY2UoKSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnc3JjJykpXHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYXNzL3N0eWxlLnNhc3M/YjYwYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3Nhc3Mvc3R5bGUuc2Fzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sass/style.sass\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./js/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/index.js */"./js/index.js");


/***/ })

/******/ });
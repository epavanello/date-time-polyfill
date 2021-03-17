(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(require("./input-date-polyfill.scss"), require("./input.js"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(global.inputDatePolyfill, global.input);
	    global.inputDatePolyfill = mod.exports;
	  }
	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_inputDatePolyfill, _input) {
	  "use strict";

	  _input = _interopRequireDefault(_input);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	  var addPickers = function addPickers() {
	    _input["default"].addPickerToOtherInputs(); // Check if type="date" is supported.


	    if (!_input["default"].supportsDateInput()) {
	      _input["default"].addPickerToDateInputs();
	    }
	  }; // Run the above code on any <input type="date"> in the document, also on dynamically created ones.


	  addPickers();
	  document.addEventListener("DOMContentLoaded", function () {
	    addPickers();
	  }); // This is also on mousedown event so it will capture new inputs that might
	  // be added to the DOM dynamically.

	  document.querySelector("body").addEventListener("mousedown", function () {
	    addPickers();
	  });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./input-date-polyfill.scss", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./input-date-polyfill.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "input-date-polyfill {\n  background: #fff;\n  color: #000;\n  text-shadow: none;\n  border: 0;\n  padding: 0;\n  height: auto;\n  width: auto;\n  line-height: normal;\n  font-family: sans-serif;\n  font-size: 14px;\n  position: absolute !important;\n  text-align: center;\n  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.22);\n  cursor: default;\n  z-index: 1;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  overflow: hidden;\n  display: block; }\n  input-date-polyfill[data-open=\"false\"] {\n    visibility: hidden;\n    z-index: -100 !important;\n    top: 0; }\n  input-date-polyfill[data-open=\"true\"] {\n    visibility: visible; }\n  input-date-polyfill select, input-date-polyfill table, input-date-polyfill th, input-date-polyfill td {\n    background: #fff;\n    color: #000;\n    text-shadow: none;\n    border: 0;\n    padding: 0;\n    height: auto;\n    width: auto;\n    line-height: normal;\n    font-family: sans-serif;\n    font-size: 14px;\n    box-shadow: none;\n    font-family: 'Lato', Helvetica, Arial, sans-serif; }\n  input-date-polyfill select, input-date-polyfill button {\n    border: 0;\n    border-radius: 0;\n    border-bottom: 1px solid #DADFE1;\n    height: 24px;\n    vertical-align: top;\n    -webkit-appearance: none;\n    -moz-appearance: none; }\n  input-date-polyfill .monthSelect-wrapper {\n    width: 55%;\n    display: inline-block; }\n  input-date-polyfill .yearSelect-wrapper {\n    width: 25%;\n    display: inline-block; }\n  input-date-polyfill select {\n    width: 100%; }\n    input-date-polyfill select:first-of-type {\n      border-right: 1px solid #DADFE1;\n      border-radius: 5px 0 0 0;\n      -moz-border-radius: 5px 0 0 0;\n      -webkit-border-radius: 5px 0 0 0; }\n  input-date-polyfill button {\n    width: 20%;\n    background: #DADFE1;\n    border-radius: 0 5px 0 0;\n    -moz-border-radius: 0 5px 0 0;\n    -webkit-border-radius: 0 5px 0 0; }\n    input-date-polyfill button:hover {\n      background: #eee; }\n  input-date-polyfill table {\n    border-collapse: separate !important;\n    border-radius: 0 0 5px 5px;\n    -moz-border-radius: 0 0 5px 5px;\n    -webkit-border-radius: 0 0 5px 5px;\n    overflow: hidden;\n    max-width: 280px;\n    width: 280px; }\n  input-date-polyfill th, input-date-polyfill td {\n    width: 32px;\n    padding: 4px;\n    text-align: center;\n    box-sizing: content-box; }\n  input-date-polyfill td[data-day] {\n    cursor: pointer; }\n    input-date-polyfill td[data-day]:hover {\n      background: #DADFE1; }\n  input-date-polyfill [data-selected] {\n    font-weight: bold;\n    background: #D8EAF6; }\n", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory();
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory();
	    global.cssBase = mod.exports;
	  }
	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
	  "use strict";

	  /*
	  	MIT License http://www.opensource.org/licenses/mit-license.php
	  	Author Tobias Koppers @sokra
	  */
	  // css base code, injected by the css-loader
	  module.exports = function () {
	    var list = []; // return the list of modules as css string

	    list.toString = function toString() {
	      var result = [];

	      for (var i = 0; i < this.length; i++) {
	        var item = this[i];

	        if (item[2]) {
	          result.push("@media " + item[2] + "{" + item[1] + "}");
	        } else {
	          result.push(item[1]);
	        }
	      }

	      return result.join("");
	    }; // import a list of modules into the list


	    list.i = function (modules, mediaQuery) {
	      if (typeof modules === "string") modules = [[null, modules, ""]];
	      var alreadyImportedModules = {};

	      for (var i = 0; i < this.length; i++) {
	        var id = this[i][0];
	        if (typeof id === "number") alreadyImportedModules[id] = true;
	      }

	      for (i = 0; i < modules.length; i++) {
	        var item = modules[i]; // skip already imported module
	        // this implementation is not 100% perfect for weird media query combinations
	        //  when a module is imported multiple times with different media queries.
	        //  I hope this will never occur (Hey this way we have smaller bundles)

	        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
	          if (mediaQuery && !item[2]) {
	            item[2] = mediaQuery;
	          } else if (mediaQuery) {
	            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
	          }

	          list.push(item);
	        }
	      }
	    };

	    return list;
	  };
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6), __webpack_require__(7), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("./picker.js"), require("./locales.js"), require("./dateformat.js"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.picker, global.locales, global.dateformat);
	    global.input = mod.exports;
	  }
	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _picker, _locales, _dateformat) {
	  "use strict";

	  Object.defineProperty(_exports, "__esModule", {
	    value: true
	  });
	  _exports["default"] = void 0;
	  _picker = _interopRequireDefault(_picker);
	  _locales = _interopRequireDefault(_locales);
	  _dateformat = _interopRequireDefault(_dateformat);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	  var Input = /*#__PURE__*/function () {
	    function Input(input) {
	      var _this = this;

	      _classCallCheck(this, Input);

	      this.element = input;
	      this.element.setAttribute("data-has-picker", "");
	      this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || document.documentElement.lang || "en";
	      this.localeText = this.getLocaleText();
	      this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || this.localeText.format || "yyyy-mm-dd";
	      Object.defineProperties(this.element, {
	        valueAsDate: {
	          get: function get() {
	            if (!_this.element.value) {
	              return null;
	            }

	            var format = _this.format || "yyyy-mm-dd";

	            var parts = _this.element.value.match(/(\d+)/g);

	            var i = 0,
	                fmt = {};
	            format.replace(/(yyyy|dd|mm)/g, function (part) {
	              fmt[part] = i++;
	            });
	            return new Date(parts[fmt["yyyy"]], parts[fmt["mm"]] - 1, parts[fmt["dd"]]);
	          },
	          set: function set(val) {
	            _this.element.value = (0, _dateformat["default"])(val, _this.format);
	          }
	        },
	        valueAsNumber: {
	          get: function get() {
	            if (!_this.element.value) {
	              return NaN;
	            }

	            return _this.element.valueAsDate.valueOf();
	          },
	          set: function set(val) {
	            _this.element.valueAsDate = new Date(val);
	          }
	        }
	      }); // Open the picker when the input get focus,
	      // also on various click events to capture it in all corner cases.

	      var showPicker = function showPicker(e) {
	        var elm = _this.element;
	        elm.locale = _this.localeText;

	        var didAttach = _picker["default"].attachTo(elm);
	      };

	      this.element.addEventListener("focus", showPicker);
	      this.element.addEventListener("mouseup", showPicker); // Update the picker if the date changed manually in the input.

	      this.element.addEventListener("keydown", function (e) {
	        var date = new Date();

	        switch (e.keyCode) {
	          case 9:
	          case 27:
	            _picker["default"].hide();

	            break;

	          case 38:
	            if (_this.element.valueAsDate) {
	              date.setDate(_this.element.valueAsDate.getDate() + 1);
	              _this.element.valueAsDate = date;

	              _picker["default"].pingInput();
	            }

	            break;

	          case 40:
	            if (_this.element.valueAsDate) {
	              date.setDate(_this.element.valueAsDate.getDate() - 1);
	              _this.element.valueAsDate = date;

	              _picker["default"].pingInput();
	            }

	            break;

	          default:
	            break;
	        }

	        _picker["default"].sync();
	      });
	      this.element.addEventListener("keyup", function (e) {
	        _picker["default"].sync();
	      });
	    }

	    _createClass(Input, [{
	      key: "getLocaleText",
	      value: function getLocaleText() {
	        var locale = this.locale.toLowerCase();

	        for (var localeSet in _locales["default"]) {
	          var localeList = localeSet.split("_");
	          localeList.map(function (el) {
	            return el.toLowerCase();
	          });

	          if (!!~localeList.indexOf(locale) || !!~localeList.indexOf(locale.substr(0, 2))) {
	            return _locales["default"][localeSet];
	          }
	        }
	      } // Return false if the browser does not support input[type="date"].

	    }], [{
	      key: "supportsDateInput",
	      value: function supportsDateInput() {
	        var input = document.createElement("input");
	        input.setAttribute("type", "date");
	        var notADateValue = "not-a-date";
	        input.setAttribute("value", notADateValue);
	        return !(input.value === notADateValue);
	      } // Will add the Picker to all inputs in the page.

	    }, {
	      key: "addPickerToDateInputs",
	      value: function addPickerToDateInputs() {
	        // Get and loop all the input[type="date"]s in the page that do not have `[data-has-picker]` yet.
	        var dateInputs = document.querySelectorAll("input[type=\"date\"]:not([data-has-picker])");
	        var length = dateInputs.length;

	        if (!length) {
	          return false;
	        }

	        for (var i = 0; i < length; ++i) {
	          new Input(dateInputs[i]);
	        }
	      }
	    }, {
	      key: "addPickerToOtherInputs",
	      value: function addPickerToOtherInputs() {
	        // Get and loop all the input[type="text"] class date-polyfill in the page that do not have `[data-has-picker]` yet.
	        var dateInputs = document.querySelectorAll("input[type=\"text\"].date-polyfill:not([data-has-picker])");
	        var length = dateInputs.length;

	        if (!length) {
	          return false;
	        }

	        for (var i = 0; i < length; ++i) {
	          new Input(dateInputs[i]);
	        }
	      }
	    }]);

	    return Input;
	  }();

	  _exports["default"] = Input;
	});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.picker = mod.exports;
	  }
	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
	  "use strict";

	  Object.defineProperty(_exports, "__esModule", {
	    value: true
	  });
	  _exports["default"] = void 0;

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	  var Picker = /*#__PURE__*/function () {
	    function Picker() {
	      var _this = this;

	      _classCallCheck(this, Picker);

	      // This is a singleton.
	      if (window.thePicker) {
	        return window.thePicker;
	      }

	      this.date = new Date();
	      this.input = null;
	      this.isOpen = false; // The picker element. Unique tag name attempts to protect against
	      // generic selectors.

	      this.container = document.createElement("input-date-polyfill"); // Add controls.
	      // Year picker.

	      this.year = document.createElement("select");
	      Picker.createRangeSelect(this.year, 1890, // oldest person alive born in 1894
	      this.date.getFullYear() + 20);
	      this.year.className = "yearSelect";
	      this.year.addEventListener("change", function () {
	        _this.date.setYear(_this.year.value);

	        _this.refreshDaysMatrix();
	      });
	      var yearWrapper = document.createElement("span");
	      yearWrapper.className = "yearSelect-wrapper";
	      yearWrapper.appendChild(this.year);
	      this.container.appendChild(yearWrapper); // Month picker.

	      this.month = document.createElement("select");
	      this.month.className = "monthSelect";
	      this.month.addEventListener("change", function () {
	        _this.date.setMonth(_this.month.value);

	        _this.refreshDaysMatrix();
	      });
	      var monthWrapper = document.createElement("span");
	      monthWrapper.className = "monthSelect-wrapper";
	      monthWrapper.appendChild(this.month);
	      this.container.appendChild(monthWrapper); // Today button.

	      this.today = document.createElement("button");
	      this.today.textContent = "Today";
	      this.today.addEventListener("click", function () {
	        var today = new Date();
	        _this.date = new Date("".concat(today.getFullYear(), "/").concat("0".concat(today.getMonth() + 1).slice(-2), "/").concat("0".concat(today.getDate()).slice(-2)));

	        _this.setInput();
	      });
	      this.container.appendChild(this.today); // Setup unchanging DOM for days matrix.

	      var daysMatrix = document.createElement("table");
	      this.daysHead = document.createElement("thead");
	      this.days = document.createElement("tbody"); // THIS IS THE BIG PART.
	      // When the user clicks a day, set that day as the date.
	      // Uses event delegation.

	      this.days.addEventListener("click", function (e) {
	        var tgt = e.target;

	        if (!tgt.hasAttribute("data-day")) {
	          return false;
	        }

	        var curSel = _this.days.querySelector("[data-selected]");

	        if (curSel) {
	          curSel.removeAttribute("data-selected");
	        }

	        tgt.setAttribute("data-selected", "");

	        _this.date.setDate(parseInt(tgt.textContent));

	        _this.setInput();
	      });
	      daysMatrix.appendChild(this.daysHead);
	      daysMatrix.appendChild(this.days);
	      this.container.appendChild(daysMatrix);
	      this.hide();
	      document.body.appendChild(this.container);

	      this.removeClickOut = function (e) {
	        if (_this.isOpen) {
	          var el = e.target;
	          var isPicker = el === _this.container || el === _this.input;

	          while (!isPicker && (el = el.parentNode)) {
	            isPicker = el === _this.container;
	          }

	          (e.target.getAttribute("type") !== "date" && !isPicker || !isPicker) && _this.hide();
	        }
	      };

	      this.removeBlur = function (e) {
	        if (_this.isOpen) {
	          _this.hide();
	        }
	      };
	    } // Hide.


	    _createClass(Picker, [{
	      key: "hide",
	      value: function hide() {
	        this.container.setAttribute("data-open", this.isOpen = false); // Close the picker when clicking outside of a date input or picker.

	        if (this.input) {
	          this.input.blur();
	        }

	        document.removeEventListener("mousedown", this.removeClickOut);
	        document.removeEventListener("touchstart", this.removeClickOut);
	      } // Show.

	    }, {
	      key: "show",
	      value: function show() {
	        var _this2 = this;

	        this.container.setAttribute("data-open", this.isOpen = true); // Close the picker when clicking outside of a date input or picker.

	        setTimeout(function () {
	          document.addEventListener("mousedown", _this2.removeClickOut);
	          document.addEventListener("touchstart", _this2.removeClickOut);
	        }, 500); // when used in a single-page app  or otherwise,
	        // hide datepicker when the browser's back button is pressed

	        window.onpopstate = function () {
	          _this2.hide();
	        };
	      } // Position picker below element. Align to element's right edge.

	    }, {
	      key: "goto",
	      value: function goto(element) {
	        var _this3 = this;

	        var rekt = element.getBoundingClientRect();
	        this.container.style.top = "".concat(rekt.top + rekt.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3, "px");
	        var contRekt = this.container.getBoundingClientRect();
	        var width = contRekt.width ? contRekt.width : 280;

	        var classWithOutPos = function classWithOutPos() {
	          return _this3.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
	        };

	        var base = rekt.right - width;

	        if (rekt.right < width) {
	          base = rekt.left;
	          this.container.className = "".concat(classWithOutPos(), " polyfill-left-aligned");
	        } else {
	          this.container.className = "".concat(classWithOutPos(), " polyfill-right-aligned");
	        }

	        this.container.style.left = "".concat(base + (document.documentElement.scrollLeft || document.body.scrollLeft), "px");
	        this.show();
	      } // Initiate I/O with given date input.

	    }, {
	      key: "attachTo",
	      value: function attachTo(input) {
	        if (input === this.input && this.isOpen) {
	          return false;
	        }

	        this.input = input;
	        this.refreshLocale();
	        this.sync();
	        this["goto"](this.input);
	        return true;
	      } // Match picker date with input date.

	    }, {
	      key: "sync",
	      value: function sync() {
	        // fixes bug where an empty calendar appears if year is missing from keyboard input
	        if (!isNaN(Date.parse(this.input.valueAsDate))) {
	          this.date = Picker.absoluteDate(this.input.valueAsDate);
	        } else {
	          this.date = new Date();
	        }

	        this.year.value = this.date.getFullYear();
	        this.month.value = this.date.getMonth();
	        this.refreshDaysMatrix();
	      } // Match input date with picker date.

	    }, {
	      key: "setInput",
	      value: function setInput() {
	        var _this4 = this;

	        this.input.valueAsDate = this.date;
	        this.input.focus();
	        setTimeout(function () {
	          // IE wouldn't hide, so in a timeout you go.
	          _this4.hide();
	        }, 100);
	        this.pingInput();
	      }
	    }, {
	      key: "refreshLocale",
	      value: function refreshLocale() {
	        if (this.locale === this.input.locale) {
	          return false;
	        }

	        this.locale = this.input.locale;
	        this.today.textContent = this.locale.today || "Today";
	        var daysFrom = this.locale.daysFrom || 0;
	        var daysHeadHTML = ["<tr>"];

	        for (var i = 0, len = this.locale.days.length; i < len; ++i) {
	          if (i + daysFrom >= len) {
	            daysHeadHTML.push("<th scope=\"col\">".concat(this.locale.days[i + daysFrom - len], "</th>"));
	          } else {
	            daysHeadHTML.push("<th scope=\"col\">".concat(this.locale.days[i + daysFrom], "</th>"));
	          }
	        }

	        this.daysHead.innerHTML = daysHeadHTML.join("");
	        Picker.createRangeSelect(this.month, 0, 11, this.locale.months);
	      }
	    }, {
	      key: "refreshDaysMatrix",
	      value: function refreshDaysMatrix() {
	        this.refreshLocale(); // Determine days for this month and year,
	        // as well as on which weekdays they lie.

	        var year = this.date.getFullYear(); // Get the year (2016).

	        var month = this.date.getMonth(); // Get the month number (0-11).

	        var maxDays = new Date(this.date.getFullYear(), month + 1, 0).getDate(); // Get days in month (1-31).

	        var daysFrom = this.locale.daysFrom || 0;
	        var startDay = new Date(year, month, 1).getDay() - daysFrom; // First weekday of month (0-6).

	        if (startDay < 0) {
	          startDay = 7 + startDay;
	        } // The input's current date.


	        var selDate = Picker.absoluteDate(this.input.valueAsDate) || false; // Are we in the input's currently-selected month and year?

	        var selMatrix = selDate && year === selDate.getFullYear() && month === selDate.getMonth(); // Populate days matrix.

	        var matrixHTML = [];

	        for (var i = 0; i < maxDays + startDay; ++i) {
	          // Add a row every 7 days.
	          if (i % 7 === 0) {
	            matrixHTML.push("\n          ".concat(i !== 0 ? "</tr>" : "", "\n          <tr>\n        "));
	          } // Add new column.
	          // If no days from this month in this column, it will be empty.


	          if (i + 1 <= startDay) {
	            matrixHTML.push("<td></td>");
	            continue;
	          } // Populate day number.


	          var dayNum = i + 1 - startDay;
	          var selected = selDate && selDate.getDate() === dayNum - 1;
	          matrixHTML.push("<td data-day ".concat(selected ? "data-selected" : "", ">\n          ").concat(dayNum, "\n        </td>"));
	        }

	        this.days.innerHTML = matrixHTML.join("");
	      }
	    }, {
	      key: "pingInput",
	      value: function pingInput() {
	        // Dispatch DOM events to the input.
	        var inputEvent;
	        var changeEvent; // Modern event creation.

	        try {
	          inputEvent = new Event("input");
	          changeEvent = new Event("change");
	        } catch (e) {
	          // Old-fashioned way.
	          inputEvent = document.createEvent("KeyboardEvent");
	          inputEvent.initEvent("input", true, false);
	          changeEvent = document.createEvent("KeyboardEvent");
	          changeEvent.initEvent("change", true, false);
	        }

	        this.input.dispatchEvent(inputEvent);
	        this.input.dispatchEvent(changeEvent);
	      }
	    }], [{
	      key: "createRangeSelect",
	      value: function createRangeSelect(theSelect, min, max, namesArray) {
	        theSelect.innerHTML = "";

	        for (var i = min; i <= max; ++i) {
	          var aOption = document.createElement("option");
	          theSelect.appendChild(aOption);
	          var theText = namesArray ? namesArray[i - min] : i;
	          aOption.text = theText;
	          aOption.value = i;
	        }

	        return theSelect;
	      }
	    }, {
	      key: "absoluteDate",
	      value: function absoluteDate(date) {
	        return date && new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
	      }
	    }]);

	    return Picker;
	  }();

	  window.thePicker = new Picker();
	  var _default = window.thePicker;
	  _exports["default"] = _default;
	});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.locales = mod.exports;
	  }
	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
	  "use strict";

	  Object.defineProperty(_exports, "__esModule", {
	    value: true
	  });
	  _exports["default"] = void 0;
	  // Localizations for UI text.
	  // Keys correspond to applicable `lang` values, delimited by an underscore.
	  // Days and months must be listed in the order they should display.
	  var locales = {
	    "en_en-US_en-UK": {
	      days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
	      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	    },

	    /* Simplified Chinese */
	    "zh_zh-CN": {
	      days: ["\u661F\u671F\u5929", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"],
	      months: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"]
	    },

	    /* Simplified Chinese, informal*/
	    "zh-Hans_zh-Hans-CN": {
	      days: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"],
	      months: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"]
	    },

	    /* Traditional Chinese */
	    "zh-Hant_zh-Hant-TW": {
	      days: ["\u9031\u65E5", "\u9031\u4E00", "\u9031\u4E8C", "\u9031\u4E09", "\u9031\u56DB", "\u9031\u4E94", "\u9031\u516D"],
	      months: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"]
	    },

	    /* German (Germany) */
	    "de_de-DE": {
	      days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
	      months: ["Januar", "Februar", "M\xE4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
	    },

	    /* Dutch */
	    "nl_nl-NL_nl-BE": {
	      days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
	      months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
	      today: "Vandaag",
	      format: "D/M/Y"
	    },

	    /* Portuguese */
	    "pt_pt-BR": {
	      days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xE1b"],
	      months: ["Janeiro", "Fevereiro", "Mar\xE7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
	      today: "Hoje"
	    },

	    /* French */
	    "fr_fr-FR_fr-BE": {
	      days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
	      months: ["Janvier", "F\xE9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xFBt", "Septembre", "Octobre", "Novembre", "D\xE9cembre"],
	      today: "Aujourd'hui",
	      format: "D/M/Y"
	    },

	    /* Spanish */
	    "es_es-VE": {
	      days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
	      months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
	      today: "Hoy",
	      format: "D/M/Y"
	    },

	    /* Danish */
	    "da_da-dk": {
	      days: ["S\xF8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xF8rdag"],
	      months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
	      today: "I dag",
	      format: "dd/mm-yyyy"
	    },

	    /* Russian */
	    "ru_ru-RU_ru-UA_ru-KZ_ru-MD": {
	      days: ["\u0412\u0441", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"],
	      months: ["\u042F\u043D\u0432\u0430\u0440\u044C", "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B\u044C", "\u041C\u0430\u0439", "\u0418\u044E\u043D\u044C", "\u0418\u044E\u043B\u044C", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u041E\u043A\u0442\u044F\u0431\u0440\u044C", "\u041D\u043E\u044F\u0431\u0440\u044C", "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"],
	      today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
	      format: "D.M.Y"
	    },

	    /* Ukrainian */
	    "uk_uk-UA": {
	      days: ["\u041D\u0434", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"],
	      months: ["\u0421\u0456\u0447\u0435\u043D\u044C", "\u041B\u044E\u0442\u0438\u0439", "\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C", "\u041A\u0432\u0456\u0442\u0435\u043D\u044C", "\u0422\u0440\u0430\u0432\u0435\u043D\u044C", "\u0427\u0435\u0440\u0432\u0435\u043D\u044C", "\u041B\u0438\u043F\u0435\u043D\u044C", "\u0421\u0435\u0440\u043F\u0435\u043D\u044C", "\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C", "\u0416\u043E\u0432\u0442\u0435\u043D\u044C", "\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434", "\u0413\u0440\u0443\u0434\u0435\u043D\u044C"],
	      today: "C\u044C\u043E\u0433\u043E\u0434\u043D\u0456",
	      format: "D.M.Y"
	    },

	    /* Swedish (Sweden) */
	    "sv_sv-SE": {
	      days: ["S\xF6ndag", "M\xE5ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L\xF6rdag"],
	      months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
	      today: "Idag",
	      format: "yyyy-mm-dd"
	    },
	    "test_test-TEST": {
	      days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	      months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	    },
	    ja: {
	      days: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
	      months: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
	      today: "\u4ECA\u65E5",
	      format: "yyyy-mm-dd"
	    },
	    "it_it-CH_it-IT": {
	      days: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
	      months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
	      daysFrom: 1,
	      today: "Oggi",
	      format: "dd/mm/yyyy"
	    }
	  };
	  var _default = locales;
	  _exports["default"] = _default;
	});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.dateformat = mod.exports;
	  }
	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
	  /*
	   * Date Format 1.2.3
	   * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
	   * MIT license
	   *
	   * Includes enhancements by Scott Trenda <scott.trenda.net>
	   * and Kris Kowal <cixar.com/~kris.kowal/>
	   *
	   * Accepts a date, a mask, or a date and a mask.
	   * Returns a formatted version of the given date.
	   * The date defaults to the current date/time.
	   * The mask defaults to dateFormat.masks.default.
	   */
	  'use strict';

	  Object.defineProperty(_exports, "__esModule", {
	    value: true
	  });
	  _exports["default"] = void 0;

	  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	  var dateFormat = function () {
	    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
	    var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
	    var timezoneClip = /[^-+\dA-Z]/g; // Regexes and supporting functions are cached through closure

	    return function (date, mask, utc, gmt) {
	      // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
	      if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
	        mask = date;
	        date = undefined;
	      }

	      date = date || new Date();

	      if (!(date instanceof Date)) {
	        date = new Date(date);
	      }

	      if (isNaN(date)) {
	        throw TypeError('Invalid date');
	      }

	      mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']); // Allow setting the utc/gmt argument via the mask

	      var maskSlice = mask.slice(0, 4);

	      if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
	        mask = mask.slice(4);
	        utc = true;

	        if (maskSlice === 'GMT:') {
	          gmt = true;
	        }
	      }

	      var _ = utc ? 'getUTC' : 'get';

	      var d = date[_ + 'Date']();

	      var D = date[_ + 'Day']();

	      var m = date[_ + 'Month']();

	      var y = date[_ + 'FullYear']();

	      var H = date[_ + 'Hours']();

	      var M = date[_ + 'Minutes']();

	      var s = date[_ + 'Seconds']();

	      var L = date[_ + 'Milliseconds']();

	      var o = utc ? 0 : date.getTimezoneOffset();
	      var W = getWeek(date);
	      var N = getDayOfWeek(date);
	      var flags = {
	        d: d,
	        dd: pad(d),
	        ddd: dateFormat.i18n.dayNames[D],
	        dddd: dateFormat.i18n.dayNames[D + 7],
	        m: m + 1,
	        mm: pad(m + 1),
	        mmm: dateFormat.i18n.monthNames[m],
	        mmmm: dateFormat.i18n.monthNames[m + 12],
	        yy: String(y).slice(2),
	        yyyy: y,
	        h: H % 12 || 12,
	        hh: pad(H % 12 || 12),
	        H: H,
	        HH: pad(H),
	        M: M,
	        MM: pad(M),
	        s: s,
	        ss: pad(s),
	        l: pad(L, 3),
	        L: pad(Math.round(L / 10)),
	        t: H < 12 ? 'a' : 'p',
	        tt: H < 12 ? 'am' : 'pm',
	        T: H < 12 ? 'A' : 'P',
	        TT: H < 12 ? 'AM' : 'PM',
	        Z: gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
	        o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
	        S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
	        W: W,
	        N: N
	      };
	      return mask.replace(token, function (match) {
	        if (match in flags) {
	          return flags[match];
	        }

	        return match.slice(1, match.length - 1);
	      });
	    };
	  }();

	  dateFormat.masks = {
	    'default': 'ddd mmm dd yyyy HH:MM:ss',
	    'shortDate': 'm/d/yy',
	    'mediumDate': 'mmm d, yyyy',
	    'longDate': 'mmmm d, yyyy',
	    'fullDate': 'dddd, mmmm d, yyyy',
	    'shortTime': 'h:MM TT',
	    'mediumTime': 'h:MM:ss TT',
	    'longTime': 'h:MM:ss TT Z',
	    'isoDate': 'yyyy-mm-dd',
	    'isoTime': 'HH:MM:ss',
	    'isoDateTime': 'yyyy-mm-dd\'T\'HH:MM:sso',
	    'isoUtcDateTime': 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
	    'expiresHeaderFormat': 'ddd, dd mmm yyyy HH:MM:ss Z'
	  }; // Internationalization strings

	  dateFormat.i18n = {
	    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  };

	  function pad(val, len) {
	    val = String(val);
	    len = len || 2;

	    while (val.length < len) {
	      val = "0".concat(val);
	    }

	    return val;
	  }
	  /**
	   * Get the ISO 8601 week number
	   * Based on comments from
	   * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
	   *
	   * @param  {Object} `date`
	   * @return {Number}
	   */


	  function getWeek(date) {
	    // Remove time components of date
	    var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate()); // Change date to Thursday same week

	    targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3); // Take January 4th as it is always in week 1 (see ISO 8601)

	    var firstThursday = new Date(targetThursday.getFullYear(), 0, 4); // Change date to Thursday same week

	    firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3); // Check if daylight-saving-time-switch occured and correct for it

	    var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
	    targetThursday.setHours(targetThursday.getHours() - ds); // Number of weeks between target Thursday and first Thursday

	    var weekDiff = (targetThursday - firstThursday) / (86400000 * 7);
	    return 1 + Math.floor(weekDiff);
	  }
	  /**
	   * Get ISO-8601 numeric representation of the day of the week
	   * 1 (for Monday) through 7 (for Sunday)
	   *
	   * @param  {Object} `date`
	   * @return {Number}
	   */


	  function getDayOfWeek(date) {
	    var dow = date.getDay();

	    if (dow === 0) {
	      dow = 7;
	    }

	    return dow;
	  }
	  /**
	   * kind-of shortcut
	   * @param  {*} val
	   * @return {String}
	   */


	  function kindOf(val) {
	    if (val === null) {
	      return 'null';
	    }

	    if (val === undefined) {
	      return 'undefined';
	    }

	    if (_typeof(val) !== 'object') {
	      return _typeof(val);
	    }

	    if (Array.isArray(val)) {
	      return 'array';
	    }

	    return {}.toString.call(val).slice(8, -1).toLowerCase();
	  }

	  ;
	  var _default = dateFormat;
	  _exports["default"] = _default;
	});

/***/ })
/******/ ])
});
;
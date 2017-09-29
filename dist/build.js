(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("javascript-time-ago"));
	else if(typeof define === 'function' && define.amd)
		define(["javascript-time-ago"], factory);
	else if(typeof exports === 'object')
		exports["tickets"] = factory(require("javascript-time-ago"));
	else
		root["tickets"] = factory(root["javascript-time-ago"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_71__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(70)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.lexi=t():e.lexi=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="../dist/",t(t.s=87)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var o=n(24)("wks"),r=n(25),i=n(0).Symbol,a="function"==typeof i;(e.exports=function(e){return o[e]||(o[e]=a&&i[e]||(a?i:r)("Symbol."+e))}).store=o},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){var o=n(13),r=n(22);e.exports=n(7)?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){e.exports=function(e,t,n,o,r){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),o&&(c._scopeId=o);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,A=d?c.render:c.beforeCreate;d?c.render=function(e,t){return l.call(t),A(e,t)}:c.beforeCreate=A?[].concat(A,l):[l]}return{esModule:i,exports:a,options:c}}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=d[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));d[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",A.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(f)return v;o.parentNode.removeChild(o)}if(h){var i=u++;o=p||(p=r()),t=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(86),d={},A=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,u=0,f=!1,v=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){f=n;var r=l(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var a=r[i],s=d[a.id];s.refs--,n.push(s)}t?(r=l(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(12);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports={}},function(e,t){var n=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var o=n(6),r=n(41),i=n(56),a=Object.defineProperty;t.f=n(7)?Object.defineProperty:function(e,t,n){if(o(e),t=i(t,!0),o(n),r)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var o=n(24)("keys"),r=n(25);e.exports=function(e){return o[e]||(o[e]=r(e))}},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},function(e,t,n){var o=n(42),r=n(11);e.exports=function(e){return o(r(e))}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var o=n(12),r=n(0).document,i=o(r)&&o(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){"use strict";var o=n(45),r=n(39),i=n(51),a=n(3),s=n(8),c=n(9),l=n(43),d=n(23),A=n(48),p=n(1)("iterator"),u=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,t,n,v,h,x,C){l(n,t,v);var b,B,g,m=function(e){if(!u&&e in E)return E[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},y=t+" Iterator",w="values"==h,k=!1,E=e.prototype,_=E[p]||E["@@iterator"]||h&&E[h],D=_||m(h),S=h?w?m("entries"):D:void 0,j="Array"==t?E.entries||_:_;if(j&&(g=A(j.call(new e)))!==Object.prototype&&g.next&&(d(g,y,!0),o||s(g,p)||a(g,p,f)),w&&_&&"values"!==_.name&&(k=!0,D=function(){return _.call(this)}),o&&!C||!u&&!k&&E[p]||a(E,p,D),c[t]=D,c[y]=f,h)if(b={values:w?D:m("values"),keys:x?D:m("keys"),entries:S},C)for(B in b)B in E||i(E,B,b[B]);else r(r.P+r.F*(u||k),t,b);return b}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var o=n(13).f,r=n(8),i=n(1)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},function(e,t,n){var o=n(0),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});e.exports=function(e){return r[e]||(r[e]={})}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t,n){n(68),e.exports={checkbox:n(72),dropdown:n(73),saveSection:n(75),errors:n(74),back:n(71)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"back",mounted:function(){castShadows(this.$el[0])}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"checkbox",props:["label","labelIsAfter","is-checked","id"],data:function(){return{checked:this.isChecked}},methods:{onClick:function(){this.checked=!this.checked,this.$emit("changed",this.checked,this.id)},check:function(){this.checked=!0},unCheck:function(){this.checked=!1}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(32),r=n.n(o);t.default={name:"dropdown",props:["active-item","default","value"],data:function(){return{isOpen:!1,currentItemHasBeenChecked:!1}},methods:{onMouseDown:function(){this.openTime=Date.now(),this.openDropDown(),window.addEventListener("mouseup",this.onMouseUp)},onMouseUp:function(e){Date.now()-this.openTime<325||(this.$el.contains(e.target)&&e.target.classList.contains("option")&&(this.$emit("input",e.target.getAttribute("value")),this.$emit("changed",e.target.getAttribute("value"))),this.removeItemHovers(),this.closeDropDown(),window.removeEventListener("mouseup",this.onMouseUp))},checkItemById:function(){this.currentItemHasBeenChecked=!0;var e=this.$refs.content.querySelector('.option[value="'+this.value+'"]');if(null!=e){var t=this.$refs.content.getElementsByClassName("checked");t.length>0&&t[0].classList.remove("checked"),e.classList.add("checked")}},openDropDown:function(){this.isOpen=!0,setTimeout(this.sizeAndPositionDropdown,5)},closeDropDown:function(){this.isOpen=!1},sizeAndPositionDropdown:function(){this.addItemHovers(),this.checkItemById();var e=void 0,t=this.$refs.content,n=this.$refs.trigger,o=t.clientHeight,r=n.getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e=r.top+o>i?i-o:r.top,i<o&&(e=0),t.style.height=i,t.style.overflow="scroll",t.style.top=e+"px",t.style.left=r.left+"px",t.style.opacity="1"},addItemHovers:function(){var e=this.$refs.content.getElementsByClassName("option"),t=!0,n=!1,o=void 0;try{for(var i,a=r()(e);!(t=(i=a.next()).done);t=!0){var s=i.value;s.addEventListener("mouseover",function(e){return e.target.classList.add("hover")}),s.addEventListener("mouseout",function(e){return e.target.classList.remove("hover")})}}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},removeItemHovers:function(){var e=this.$refs.content.getElementsByClassName("option"),t=!0,n=!1,o=void 0;try{for(var i,a=r()(e);!(t=(i=a.next()).done);t=!0){var s=i.value,c=s.cloneNode(!0);s.parentNode.replaceChild(c,s),c.classList.remove("hover")}}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},getItemText:function(e){var t="",n=!0,o=!1,i=void 0;try{for(var a,s=r()(this.$slots.default);!(n=(a=s.next()).done);n=!0){var c=a.value;null!=c.data&&null!=c.data.attrs&&c.data.attrs.value==e&&(t=c.children[0].text)}}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return t}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"errors",props:["errors"],methods:{hasErrors:function(){return null!=this.errors&&0!=this.errors.length}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"save-section",props:{saveText:{default:"Save",type:String},cancelText:{default:"Cancel",type:String},showCancel:{default:!0,type:Boolean}}}},function(e,t,n){e.exports={default:n(33),__esModule:!0}},function(e,t,n){n(61),n(60),e.exports=n(58)},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(){}},function(e,t,n){var o=n(16),r=n(54),i=n(53);e.exports=function(e){return function(t,n,a){var s,c=o(t),l=r(c.length),d=i(a,l);if(e&&n!=n){for(;l>d;)if((s=c[d++])!=s)return!0}else for(;l>d;d++)if((e||d in c)&&c[d]===n)return e||d||0;return!e&&-1}}},function(e,t,n){var o=n(17),r=n(1)("toStringTag"),i="Arguments"==o(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=a(t=Object(e),r))?n:i?o(t):"Object"==(s=o(t))&&"function"==typeof t.callee?"Arguments":s}},function(e,t,n){var o=n(34);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var o=n(0),r=n(10),i=n(38),a=n(3),s=function(e,t,n){var c,l,d,A=e&s.F,p=e&s.G,u=e&s.S,f=e&s.P,v=e&s.B,h=e&s.W,x=p?r:r[t]||(r[t]={}),C=x.prototype,b=p?o:u?o[t]:(o[t]||{}).prototype;p&&(n=t);for(c in n)(l=!A&&b&&void 0!==b[c])&&c in x||(d=l?b[c]:n[c],x[c]=p&&"function"!=typeof b[c]?n[c]:v&&l?i(d,o):h&&b[c]==d?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):f&&"function"==typeof d?i(Function.call,d):d,f&&((x.virtual||(x.virtual={}))[c]=d,e&s.R&&C&&!C[c]&&a(C,c,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,n){var o=n(0).document;e.exports=o&&o.documentElement},function(e,t,n){e.exports=!n(7)&&!n(20)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(17);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t,n){"use strict";var o=n(46),r=n(22),i=n(23),a={};n(3)(a,n(1)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=o(a,{next:r(1,n)}),i(e,t+" Iterator")}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t){e.exports=!0},function(e,t,n){var o=n(6),r=n(47),i=n(19),a=n(14)("IE_PROTO"),s=function(){},c=function(){var e,t=n(18)("iframe"),o=i.length;for(t.style.display="none",n(40).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;o--;)delete c.prototype[i[o]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=o(e),n=new s,s.prototype=null,n[a]=e):n=c(),void 0===t?n:r(n,t)}},function(e,t,n){var o=n(13),r=n(6),i=n(50);e.exports=n(7)?Object.defineProperties:function(e,t){r(e);for(var n,a=i(t),s=a.length,c=0;s>c;)o.f(e,n=a[c++],t[n]);return e}},function(e,t,n){var o=n(8),r=n(55),i=n(14)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),o(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){var o=n(8),r=n(16),i=n(36)(!1),a=n(14)("IE_PROTO");e.exports=function(e,t){var n,s=r(e),c=0,l=[];for(n in s)n!=a&&o(s,n)&&l.push(n);for(;t.length>c;)o(s,n=t[c++])&&(~i(l,n)||l.push(n));return l}},function(e,t,n){var o=n(49),r=n(19);e.exports=Object.keys||function(e){return o(e,r)}},function(e,t,n){e.exports=n(3)},function(e,t,n){var o=n(15),r=n(11);e.exports=function(e){return function(t,n){var i,a,s=String(r(t)),c=o(n),l=s.length;return c<0||c>=l?e?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):i:e?s.slice(c,c+2):a-56320+(i-55296<<10)+65536)}}},function(e,t,n){var o=n(15),r=Math.max,i=Math.min;e.exports=function(e,t){return e=o(e),e<0?r(e+t,0):i(e,t)}},function(e,t,n){var o=n(15),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0}},function(e,t,n){var o=n(11);e.exports=function(e){return Object(o(e))}},function(e,t,n){var o=n(12);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var o=n(37),r=n(1)("iterator"),i=n(9);e.exports=n(10).getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||i[o(e)]}},function(e,t,n){var o=n(6),r=n(57);e.exports=n(10).getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return o(t.call(e))}},function(e,t,n){"use strict";var o=n(35),r=n(44),i=n(9),a=n(16);e.exports=n(21)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,r(1)):"keys"==t?r(0,n):"values"==t?r(0,e[n]):r(0,[n,e[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(e,t,n){"use strict";var o=n(52)(!0);n(21)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=o(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){n(59);for(var o=n(0),r=n(3),i=n(9),a=n(1)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var l=s[c],d=o[l],A=d&&d.prototype;A&&!A[a]&&r(A,a,l),i[l]=i.Array}},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,"\t.st0_j7t8m3u1{fill:#5B7985;}",""])},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,".save-section[data-v-1d57e625]{display:flex;align-items:center;justify-content:flex-end;font-size:14px;font-style:italic;margin-top:10px}.save-section .cancel[data-v-1d57e625]{margin-right:20px;color:#99abb9;cursor:pointer}.save-section .button[data-v-1d57e625]{background:#09a6ec;color:#fff;font-size:14px;padding:0 20px;display:inline-flex;font-style:italic}.save-section .button.success[data-v-1d57e625]{pointer-events:none;color:#00b463;background:#fff}.save-section .button.disabled[data-v-1d57e625]{opacity:.3;cursor:not-allowed;pointer-events:none}","",{version:3,sources:["/./src/components/save-section.vue"],names:[],mappings:"AACA,+BACE,aAAc,AACd,mBAAoB,AACpB,yBAA0B,AAC1B,eAAgB,AAChB,kBAAmB,AACnB,eAAiB,CAClB,AACD,uCACI,kBAAmB,AACnB,cAAe,AACf,cAAgB,CACnB,AACD,uCACI,mBAAoB,AACpB,WAAa,AACb,eAAgB,AAChB,eAAgB,AAChB,oBAAqB,AACrB,iBAAmB,CACtB,AACD,+CACM,oBAAqB,AACrB,cAAe,AACf,eAAkB,CACvB,AACD,gDACM,WAAa,AACb,mBAAoB,AACpB,mBAAqB,CAC1B",file:"save-section.vue",sourcesContent:["\n.save-section[data-v-1d57e625] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 14px;\n  font-style: italic;\n  margin-top: 10px;\n}\n.save-section .cancel[data-v-1d57e625] {\n    margin-right: 20px;\n    color: #99abb9;\n    cursor: pointer;\n}\n.save-section .button[data-v-1d57e625] {\n    background: #09A6EC;\n    color: white;\n    font-size: 14px;\n    padding: 0 20px;\n    display: inline-flex;\n    font-style: italic;\n}\n.save-section .button.success[data-v-1d57e625] {\n      pointer-events: none;\n      color: #00B463;\n      background: white;\n}\n.save-section .button.disabled[data-v-1d57e625] {\n      opacity: 0.3;\n      cursor: not-allowed;\n      pointer-events: none;\n}\n"],sourceRoot:"webpack://"}])},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,'.lexi .label[data-v-238b31a1]{position:relative;font-size:16px;font-weight:600;font-style:italic;color:#00a2ed;padding-left:6px}.lexi .label.before[data-v-238b31a1]{padding-left:0;padding-right:6px}.lexi .label[data-v-238b31a1]{display:inline-block;white-space:nowrap}.lexi-blue .label[data-v-238b31a1]{color:#186999}.lexi.drop-down .trigger[data-v-238b31a1]{position:relative;display:inline-flex;color:#00a2ed;font-style:italic;border-bottom:3px solid #00a2ed;padding-bottom:3px;cursor:pointer;font-size:16px;max-height:30px}.lexi.drop-down .trigger .txt[data-v-238b31a1]{margin-right:10px}.lexi.drop-down .trigger[data-v-238b31a1]:after{margin-top:7px;display:block;content:"";border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #00a2ed;margin-left:auto;transform:scaleX(.8)}.lexi.drop-down .trigger.white[data-v-238b31a1]{border-bottom:none;background:#fff;padding:8px 12px;max-height:none}.lexi.drop-down .trigger.autoscale[data-v-238b31a1]{min-width:0!important}.lexi.drop-down .drop-content[data-v-238b31a1]{user-select:none;background:#fff;position:fixed;left:20px;box-shadow:0 1px 6px 0 #aaa;z-index:1000;opacity:0}.lexi.drop-down .drop-content .checkmark[data-v-238b31a1]{display:none}.lexi.drop-down .drop-content .label[data-v-238b31a1],.lexi.drop-down .drop-content .option[data-v-238b31a1]{border-bottom:1px solid #f1efef;padding:4px 16px 4px 22px}.lexi.drop-down .drop-content .label .checkmark[data-v-238b31a1],.lexi.drop-down .drop-content .option .checkmark[data-v-238b31a1]{display:block;position:absolute;left:6px;top:3px}.lexi.drop-down .drop-content .label[data-v-238b31a1]{color:#b5bfc7;font-size:12px;padding-left:14px;width:100%}.lexi.drop-down .drop-content .option[data-v-238b31a1]{position:relative;color:#00a2ed;font-weight:600;font-size:16px;font-style:italic;cursor:pointer}.lexi.drop-down .drop-content .option.hover[data-v-238b31a1]{background:#00a2ed;color:#fff}.lexi.drop-down .drop-content .option.hover.checked[data-v-238b31a1]:before{border-color:#fff}.lexi.drop-down .drop-content .option.clicked[data-v-238b31a1]{background:#53f0ff}.lexi.drop-down .drop-content .option.checked[data-v-238b31a1]:before{position:absolute;left:9px;top:8px;content:"";display:block;width:5px;height:10px;border:solid #00a2ed;border-width:0 2px 2px 0;transform:rotate(45deg)}.lexi.drop-down .drop-content .option.disabled[data-v-238b31a1]{opacity:.5;pointer-events:none}.lexi-blue .lexi-ui.select-trigger[data-v-238b31a1]:not(.white){border-bottom-color:#1d8acd;color:#fff}.lexi-blue .lexi-ui.select-trigger[data-v-238b31a1]:not(.white):after{border-top-color:#fff}',"",{version:3,sources:["/./src/components/dropdown.vue"],names:[],mappings:"AACA,8BAEE,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,cAAe,AACf,gBAAkB,CACnB,AACD,qCACI,eAAgB,AAChB,iBAAmB,CACtB,AACD,8BACE,qBAAsB,AACtB,kBAAoB,CACrB,AACD,mCACE,aAAe,CAChB,AACD,0CACE,kBAAmB,AACnB,oBAAqB,AACrB,cAAe,AACf,kBAAmB,AACnB,gCAAiC,AACjC,mBAAoB,AACpB,eAAgB,AAChB,eAAgB,AAChB,eAAiB,CAClB,AACD,+CACI,iBAAmB,CACtB,AACD,gDACI,eAAgB,AAChB,cAAe,AACf,WAAY,AACZ,kCAAmC,AACnC,mCAAoC,AACpC,6BAA8B,AAC9B,iBAAkB,AAClB,oBAAuB,CAC1B,AACD,gDACI,mBAAoB,AACpB,gBAAkB,AAClB,iBAAkB,AAClB,eAAoB,CACvB,AACD,oDACI,qBAA8B,CACjC,AACD,+CACE,iBAAkB,AAClB,gBAAkB,AAClB,eAAgB,AAChB,UAAW,AAGX,4BAA+B,AAC/B,aAAc,AACd,SAAW,CACZ,AACD,0DACI,YAAc,CACjB,AACD,6GACI,gCAAiC,AACjC,yBAA2B,CAC9B,AACD,mIACM,cAAe,AACf,kBAAmB,AACnB,SAAU,AACV,OAAS,CACd,AACD,sDACI,cAAe,AACf,eAAgB,AAChB,kBAAmB,AACnB,UAAY,CACf,AACD,uDACI,kBAAmB,AACnB,cAAe,AACf,gBAAiB,AACjB,eAAgB,AAChB,kBAAmB,AACnB,cAAgB,CACnB,AACD,6DACM,mBAAoB,AACpB,UAAa,CAClB,AACD,4EACQ,iBAAoB,CAC3B,AACD,+DACM,kBAAoB,CACzB,AACD,sEACM,kBAAmB,AACnB,SAAU,AACV,QAAS,AAET,WAAY,AACZ,cAAe,AAEf,UAAW,AACX,YAAa,AAEb,qBAAsB,AACtB,yBAA0B,AAE1B,uBAAyB,CAC9B,AACD,gEACM,WAAa,AACb,mBAAqB,CAC1B,AACD,gEACE,4BAA6B,AAC7B,UAAa,CACd,AACD,sEACI,qBAAwB,CAC3B",file:"dropdown.vue",sourcesContent:["\n.lexi .label[data-v-238b31a1] {\n  display: inline-block;\n  position: relative;\n  font-size: 16px;\n  font-weight: 600;\n  font-style: italic;\n  color: #00A2ED;\n  padding-left: 6px;\n}\n.lexi .label.before[data-v-238b31a1] {\n    padding-left: 0;\n    padding-right: 6px;\n}\n.lexi .label[data-v-238b31a1] {\n  display: inline-block;\n  white-space: nowrap;\n}\n.lexi-blue .label[data-v-238b31a1] {\n  color: #186999;\n}\n.lexi.drop-down .trigger[data-v-238b31a1] {\n  position: relative;\n  display: inline-flex;\n  color: #00A2ED;\n  font-style: italic;\n  border-bottom: 3px solid #00A2ED;\n  padding-bottom: 3px;\n  cursor: pointer;\n  font-size: 16px;\n  max-height: 30px;\n}\n.lexi.drop-down .trigger .txt[data-v-238b31a1] {\n    margin-right: 10px;\n}\n.lexi.drop-down .trigger[data-v-238b31a1]:after {\n    margin-top: 7px;\n    display: block;\n    content: \"\";\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-top: 7px solid #00A2ED;\n    margin-left: auto;\n    transform: scaleX(0.8);\n}\n.lexi.drop-down .trigger.white[data-v-238b31a1] {\n    border-bottom: none;\n    background: white;\n    padding: 8px 12px;\n    max-height: initial;\n}\n.lexi.drop-down .trigger.autoscale[data-v-238b31a1] {\n    min-width: initial !important;\n}\n.lexi.drop-down .drop-content[data-v-238b31a1] {\n  user-select: none;\n  background: white;\n  position: fixed;\n  left: 20px;\n  -webkit-box-shadow: 0 1px 6px 0px #AAA;\n  -moz-box-shadow: 0 1px 6px 0px #AAA;\n  box-shadow: 0 1px 6px 0px #AAA;\n  z-index: 1000;\n  opacity: 0;\n}\n.lexi.drop-down .drop-content .checkmark[data-v-238b31a1] {\n    display: none;\n}\n.lexi.drop-down .drop-content .label[data-v-238b31a1], .lexi.drop-down .drop-content .option[data-v-238b31a1] {\n    border-bottom: solid #F1EFEF 1px;\n    padding: 4px 16px 4px 22px;\n}\n.lexi.drop-down .drop-content .label .checkmark[data-v-238b31a1], .lexi.drop-down .drop-content .option .checkmark[data-v-238b31a1] {\n      display: block;\n      position: absolute;\n      left: 6px;\n      top: 3px;\n}\n.lexi.drop-down .drop-content .label[data-v-238b31a1] {\n    color: #B5BFC7;\n    font-size: 12px;\n    padding-left: 14px;\n    width: 100%;\n}\n.lexi.drop-down .drop-content .option[data-v-238b31a1] {\n    position: relative;\n    color: #00A2ED;\n    font-weight: 600;\n    font-size: 16px;\n    font-style: italic;\n    cursor: pointer;\n}\n.lexi.drop-down .drop-content .option.hover[data-v-238b31a1] {\n      background: #00A2ED;\n      color: white;\n}\n.lexi.drop-down .drop-content .option.hover.checked[data-v-238b31a1]:before {\n        border-color: white;\n}\n.lexi.drop-down .drop-content .option.clicked[data-v-238b31a1] {\n      background: #53F0FF;\n}\n.lexi.drop-down .drop-content .option.checked[data-v-238b31a1]:before {\n      position: absolute;\n      left: 9px;\n      top: 8px;\n      /*Add another block-level blank space*/\n      content: '';\n      display: block;\n      /*Make it a small rectangle so the border will create an L-shape*/\n      width: 5px;\n      height: 10px;\n      /*Add a white border on the bottom and left, creating that 'L' */\n      border: solid #00A2ED;\n      border-width: 0 2px 2px 0;\n      /*Rotate the L 45 degrees to turn it into a checkmark*/\n      transform: rotate(45deg);\n}\n.lexi.drop-down .drop-content .option.disabled[data-v-238b31a1] {\n      opacity: 0.5;\n      pointer-events: none;\n}\n.lexi-blue .lexi-ui.select-trigger[data-v-238b31a1]:not(.white) {\n  border-bottom-color: #1D8ACD;\n  color: white;\n}\n.lexi-blue .lexi-ui.select-trigger[data-v-238b31a1]:not(.white):after {\n    border-top-color: white;\n}\n"],sourceRoot:"webpack://"}])},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,'.lexi .label[data-v-52efe053]{position:relative;font-size:16px;font-weight:600;font-style:italic;color:#00a2ed;padding-left:6px}.lexi .label.before[data-v-52efe053]{padding-left:0;padding-right:6px}.lexi .label[data-v-52efe053]{display:inline-block;white-space:nowrap}.lexi-blue .label[data-v-52efe053]{color:#186999}.checkbox[data-v-52efe053]{display:inline-flex;cursor:pointer;align-items:center;padding:3px 0}.checkbox .checker[data-v-52efe053]{position:relative;width:16px;height:16px;background:#00a2ed;display:inline-block;border-radius:2px}.checkbox.checked .checker[data-v-52efe053]:after{content:"";display:block;width:7px;height:14px;border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg);position:absolute;left:7px;top:-2px}.checkbox:hover .label[data-v-52efe053]{color:#0467cd}.lexi-blue .lexi-ui.checkbox .checker[data-v-52efe053]{background:#006ead}',"",{version:3,sources:["/./src/components/checkbox.vue"],names:[],mappings:"AACA,8BAEE,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,cAAe,AACf,gBAAkB,CACnB,AACD,qCACI,eAAgB,AAChB,iBAAmB,CACtB,AACD,8BACE,qBAAsB,AACtB,kBAAoB,CACrB,AACD,mCACE,aAAe,CAChB,AACD,2BACE,oBAAqB,AAErB,eAAgB,AAChB,mBAAoB,AACpB,aAAe,CAChB,AACD,oCACI,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,qBAAsB,AACtB,iBAAmB,CACtB,AACD,kDAEI,WAAY,AACZ,cAAe,AAEf,UAAW,AACX,YAAa,AAEb,kBAAoB,AACpB,yBAA0B,AAE1B,wBAAyB,AACzB,kBAAmB,AACnB,SAAU,AACV,QAAU,CACb,AACD,wCACI,aAAe,CAClB,AACD,uDACE,kBAAoB,CACrB",file:"checkbox.vue",sourcesContent:["\n.lexi .label[data-v-52efe053] {\n  display: inline-block;\n  position: relative;\n  font-size: 16px;\n  font-weight: 600;\n  font-style: italic;\n  color: #00A2ED;\n  padding-left: 6px;\n}\n.lexi .label.before[data-v-52efe053] {\n    padding-left: 0;\n    padding-right: 6px;\n}\n.lexi .label[data-v-52efe053] {\n  display: inline-block;\n  white-space: nowrap;\n}\n.lexi-blue .label[data-v-52efe053] {\n  color: #186999;\n}\n.checkbox[data-v-52efe053] {\n  display: inline-flex;\n  cursor: pointer;\n  cursor: pointer;\n  align-items: center;\n  padding: 3px 0;\n}\n.checkbox .checker[data-v-52efe053] {\n    position: relative;\n    width: 16px;\n    height: 16px;\n    background: #00A2ED;\n    display: inline-block;\n    border-radius: 2px;\n}\n.checkbox.checked .checker[data-v-52efe053]:after {\n    /*Add another block-level blank space*/\n    content: '';\n    display: block;\n    /*Make it a small rectangle so the border will create an L-shape*/\n    width: 7px;\n    height: 14px;\n    /*Add a white border on the bottom and left, creating that 'L' */\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    /*Rotate the L 45 degrees to turn it into a checkmark*/\n    transform: rotate(45deg);\n    position: absolute;\n    left: 7px;\n    top: -2px;\n}\n.checkbox:hover .label[data-v-52efe053] {\n    color: #0467CD;\n}\n.lexi-blue .lexi-ui.checkbox .checker[data-v-52efe053] {\n  background: #006EAD;\n}\n"],sourceRoot:"webpack://"}])},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,'.errors[data-v-626c9dfb]{width:100%;border:4px solid #ed596f;color:#5b3c40;padding:10px;background:#fff;font-size:16px;z-index:2;position:relative;margin-bottom:15px}.errors.hidden[data-v-626c9dfb]{display:none}.errors[data-v-626c9dfb]:after{top:100%;right:45px;border:solid transparent;content:"";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(237,89,111,0);border-top-color:#ed596f;border-width:15px;margin-left:-15px}',"",{version:3,sources:["/./src/components/errors.vue"],names:[],mappings:"AACA,yBACE,WAAY,AACZ,yBAA0B,AAC1B,cAAe,AACf,aAAc,AACd,gBAAkB,AAClB,eAAgB,AAChB,UAAW,AACX,kBAAmB,AACnB,kBAAoB,CACrB,AACD,gCACI,YAAc,CACjB,AACD,+BACI,SAAU,AACV,WAAY,AACZ,yBAA0B,AAC1B,WAAY,AACZ,SAAU,AACV,QAAS,AACT,kBAAmB,AACnB,oBAAqB,AACrB,gCAAoC,AACpC,yBAA0B,AAC1B,kBAAmB,AACnB,iBAAmB,CACtB",file:"errors.vue",sourcesContent:['\n.errors[data-v-626c9dfb] {\n  width: 100%;\n  border: 4px solid #ED596F;\n  color: #5B3C40;\n  padding: 10px;\n  background: white;\n  font-size: 16px;\n  z-index: 2;\n  position: relative;\n  margin-bottom: 15px;\n}\n.errors.hidden[data-v-626c9dfb] {\n    display: none;\n}\n.errors[data-v-626c9dfb]:after {\n    top: 100%;\n    right: 45px;\n    border: solid transparent;\n    content: "";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: rgba(237, 89, 111, 0);\n    border-top-color: #ED596F;\n    border-width: 15px;\n    margin-left: -15px;\n}\n'],sourceRoot:"webpack://"}])},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,".lexi-back{display:flex;justify-content:flex-end;font-size:15px;font-size:600;color:#3f5f6b;font-style:italic}.lexi-back .btn{cursor:pointer;display:flex;align-items:center;padding:5px 3px}.lexi-back .btn .txt{margin-left:6px}.lexi-back .btn:hover{color:#143b50}.lexi-back .btn:hover svg *{fill:#143b50}","",{version:3,sources:["/./src/components/back.vue"],names:[],mappings:"AACA,WACE,aAAc,AACd,yBAA0B,AAC1B,eAAgB,AAChB,cAAe,AACf,cAAe,AACf,iBAAmB,CACpB,AACD,gBACI,eAAgB,AAChB,aAAc,AACd,mBAAoB,AACpB,eAAiB,CACpB,AACD,qBACM,eAAiB,CACtB,AACD,sBACM,aAAe,CACpB,AACD,4BACQ,YAAc,CACrB",file:"back.vue",sourcesContent:["\n.lexi-back {\n  display: flex;\n  justify-content: flex-end;\n  font-size: 15px;\n  font-size: 600;\n  color: #3F5F6B;\n  font-style: italic;\n}\n.lexi-back .btn {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    padding: 5px 3px;\n}\n.lexi-back .btn .txt {\n      margin-left: 6px;\n}\n.lexi-back .btn:hover {\n      color: #143B50;\n}\n.lexi-back .btn:hover svg * {\n        fill: #143B50;\n}\n"],sourceRoot:"webpack://"}])},function(e,t,n){var o=n(62);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(69)(o,r);o.locals&&(e.exports=o.locals),window.pxSvgIconString=window.pxSvgIconString||"",window.pxSvgIconString+='<g id="lexi-back-x" data-size="16x16" class="lexi-svg-svg ">\t<path class="st0_j7t8m3u1" d="M14.707,13.507c0.33,0.33,0.33,0.885,0,1.215c-0.165,0.165-0.375,0.255-0.63,0.255\t\tc-0.21,0-0.42-0.09-0.6-0.255L7.492,8.737l-6.015,5.984c-0.165,0.165-0.375,0.255-0.585,0.255c-0.27,0-0.465-0.09-0.645-0.255\t\tc-0.33-0.33-0.33-0.885,0-1.215l5.984-5.985l-5.984-6c-0.33-0.33-0.33-0.93,0-1.275c0.345-0.33,0.885-0.33,1.229,0l6.015,6.044\t\tl5.985-6.044c0.345-0.33,0.885-0.33,1.229,0c0.33,0.345,0.33,0.945,0,1.275l-6,6L14.707,13.507z"/></g>',window.pxSvgIconString=window.pxSvgIconString||"",window.pxSvgIconString+=""},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=f[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(d(o.parts[i],t));f[o.id]={id:o.id,refs:1,parts:a}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s=i[1],c=i[2],l=i[3],d={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(d):n.push(o[a]={id:a,parts:[d]})}return n}function i(e,t){var n=h(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=b[b.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),i(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=C++;n=x||(x=s(t)),o=A.bind(null,n,l,!1),r=A.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=u.bind(null,n,t),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=p.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function A(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function u(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=B(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var f={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),x=null,C=0,b=[],B=n(70);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=f[s.id];c.refs--,i.push(c)}if(e){o(r(e,t),t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete f[c.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t,n){function o(e){n(85)}var r=n(4)(n(27),n(80),o,null,null);e.exports=r.exports},function(e,t,n){function o(e){n(83)}var r=n(4)(n(28),n(78),o,"data-v-52efe053",null);e.exports=r.exports},function(e,t,n){function o(e){n(82)}var r=n(4)(n(29),n(77),o,"data-v-238b31a1",null);e.exports=r.exports},function(e,t,n){function o(e){n(84)}var r=n(4)(n(30),n(79),o,"data-v-626c9dfb",null);e.exports=r.exports},function(e,t,n){function o(e){n(81)}var r=n(4)(n(31),n(76),o,"data-v-1d57e625",null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"save-section"},[e.showCancel?n("div",{staticClass:"cancel",on:{click:function(t){e.$emit("cancel")}}},[e._v(e._s(e.cancelText))]):e._e(),n("div",{staticClass:"button lifecycle",on:{click:function(t){e.$emit("save")}}},[e._v(e._s(e.saveText))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lexi drop-down"},[n("div",{ref:"trigger",staticClass:"trigger",on:{mousedown:e.onMouseDown}},[n("div",{staticClass:"txt"},[e._v(e._s(e.getItemText(e.value)))])]),e.isOpen?n("div",{ref:"content",staticClass:"drop-content"},[e._t("default")],2):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkbox lexi",class:{"label-before":!0,checked:e.checked},on:{click:e.onClick}},[n("div",{staticClass:"checker"}),n("div",{staticClass:"label"},[e._v(e._s(e.label))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hasErrors()?n("div",{staticClass:"errors"},[n("div",{staticClass:"error",domProps:{innerHTML:e._s(e.errors)}})]):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lexi-back"},[n("div",{staticClass:"btn",on:{click:function(t){e.$emit("back")}}},[n("img",{staticClass:"shadow-icon",attrs:{"data-src":"lexi-back-x"}}),n("div",{staticClass:"txt"},[e._v("Back")])])])},staticRenderFns:[]}},function(e,t,n){var o=n(63);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(5)("54de1509",o,!0)},function(e,t,n){var o=n(64);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(5)("70011546",o,!0)},function(e,t,n){var o=n(65);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(5)("58250b8e",o,!0)},function(e,t,n){var o=n(66);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(5)("3900d13a",o,!0)},function(e,t,n){var o=n(67);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(5)("75406842",o,!0)},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],s=i[1],c=i[2],l=i[3],d={id:e+":"+r,css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(d):n.push(o[a]={id:a,parts:[d]})}return n}},function(e,t,n){e.exports=n(26)}])});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25);
var IE8_DOM_DEFINE = __webpack_require__(30);
var toPrimitive = __webpack_require__(32);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(69)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(62),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d236486c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(64)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(57),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3aaaf0ae",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
module.exports = __webpack_require__(51);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticket_list__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticket_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ticket_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_view__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ticket_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticket_new__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticket_new___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ticket_new__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__no_tickets__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__no_tickets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__no_tickets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lexi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lexi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lexi__);


var _name$props$component;







/* harmony default export */ __webpack_exports__["default"] = (_name$props$component = {
  name: 'tickets',
  props: ['model', 'callbacks'],
  components: { ticketList: __WEBPACK_IMPORTED_MODULE_1__ticket_list___default.a, ticketView: __WEBPACK_IMPORTED_MODULE_2__ticket_view___default.a, ticketNew: __WEBPACK_IMPORTED_MODULE_3__ticket_new___default.a, errors: __WEBPACK_IMPORTED_MODULE_5_lexi__["errors"], noTickets: __WEBPACK_IMPORTED_MODULE_4__no_tickets___default.a },
  data: function data() {
    return {
      state: "list",
      error: null,
      activeTicketId: null
    };
  },

  watch: {
    state: function state() {
      this.clearError();
    } // Anytime the state changes, clear any errors

  },
  methods: {
    viewTicket: function viewTicket(id) {
      var _this = this;

      this.activeTicketId = id;
      this.callbacks.getTicket(id, function (results) {
        if (results.error != null) _this.error = results.error;
      });
    },
    onError: function onError(error) {
      this.error = error;
    },
    clearError: function clearError() {
      this.error = null;
    },
    closeTicket: function closeTicket(id) {
      var _this2 = this;

      this.callbacks.closeTicket(id, function (results) {
        if (results.error) _this2.error = results.error;else {
          _this2.exitTicket();
          _this2.state = 'list';
        }
      });
    },
    addCommentToTicket: function addCommentToTicket(id, comment) {
      var _this3 = this;

      this.callbacks.addCommentToTicket(id, comment, function (results) {
        if (results.error) _this3.error = results.error;else _this3.$refs.ticketView.clearInput();
      });
    },
    setListState: function setListState() {
      if (this.model.tickets.length < 1) this.state = 'no-tickets';else if (this.model.activeTicket != null) this.state = 'ticket.view';else this.state = 'list';
    },
    exitTicket: function exitTicket() {
      this.callbacks.exitTicket();
    }
  },
  computed: {
    activeTicket: function activeTicket() {
      return this.model.activeTicket;
    }
  }
}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_name$props$component, 'watch', {
  activeTicket: function activeTicket(val) {
    if (val == null) this.activeTicketId = null;
    this.setListState();
  }
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_name$props$component, 'mounted', function mounted() {
  this.setListState();
}), _name$props$component);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_pic__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_pic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__profile_pic__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'commentor',
  props: ['email'],
  components: { profilePic: __WEBPACK_IMPORTED_MODULE_0__profile_pic___default.a }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blueimp_md5__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blueimp_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blueimp_md5__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'profile-pic',
  props: ['email'],
  data: function data() {
    return {
      gravatarHash: __WEBPACK_IMPORTED_MODULE_0_blueimp_md5___default()(this.email)
    };
  },

  methods: {
    getGravatarUrl: function getGravatarUrl() {
      return 'https://secure.gravatar.com/avatar/' + this.gravatarHash + '?d=retro&r=pg&size=50';
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'no-tickets',
  mounted: function mounted() {
    castShadows(this.$el[0]);
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ticket-list',
  props: ['tickets', 'active-ticket-id'],
  mounted: function mounted() {
    castShadows(this.$el[0]);
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lexi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lexi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lexi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_commentor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_commentor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_commentor__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ticket-new',
  components: { back: __WEBPACK_IMPORTED_MODULE_0_lexi__["back"], dropdown: __WEBPACK_IMPORTED_MODULE_0_lexi__["dropdown"], saveSection: __WEBPACK_IMPORTED_MODULE_0_lexi__["saveSection"], commentor: __WEBPACK_IMPORTED_MODULE_1__components_commentor___default.a },
  props: ['saveCb', 'model'],
  data: function data() {
    return {
      category: "general",
      appId: "none",
      subject: "",
      message: ""
    };
  },

  methods: {
    onSave: function onSave() {
      var _this = this;

      this.saveCb(this.getData(), function (results) {
        if (results.error != null) {
          _this.$emit('error', results.error);
        } else _this.$emit('exit');
      });
    },
    getData: function getData() {
      return {
        category: this.category,
        appId: this.appId,
        subject: this.subject,
        message: this.message
      };
    }
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lexi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lexi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lexi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_profile_pic__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_profile_pic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_profile_pic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_commentor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_commentor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_commentor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_javascript_time_ago__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_javascript_time_ago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_javascript_time_ago__);





__WEBPACK_IMPORTED_MODULE_3_javascript_time_ago___default.a.locale(__webpack_require__(42));

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ticket-view',
  props: ['ticket', 'model'],
  components: { back: __WEBPACK_IMPORTED_MODULE_0_lexi__["back"], profilePic: __WEBPACK_IMPORTED_MODULE_1__components_profile_pic___default.a, commentor: __WEBPACK_IMPORTED_MODULE_2__components_commentor___default.a },
  data: function data() {
    return {
      newComment: ""
    };
  },

  methods: {
    comment: function comment() {
      if (this.newComment.length > 0) this.$emit('ticket-comment', this.ticket.id, this.newComment);
    },
    close: function close() {
      this.comment();
      this.$emit('ticket-close', this.ticket.id);
    },
    clearInput: function clearInput() {
      this.newComment = "";
    },
    getTime: function getTime(timeStamp) {
      var date = new Date(timeStamp);
      var timeAgoEnglish = new __WEBPACK_IMPORTED_MODULE_3_javascript_time_ago___default.a('en-US');
      return timeAgoEnglish.format(new Date(timeStamp));
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(20);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

;(function ($) {
  'use strict'

  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */
  function safeAdd (x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xffff)
  }

  /*
  * Bitwise rotate a 32-bit number to the left.
  */
  function bitRotateLeft (num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  /*
  * These functions implement the four basic operations the algorithm uses.
  */
  function md5cmn (q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }
  function md5ff (a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t)
  }
  function md5gg (a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
  }
  function md5hh (a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t)
  }
  function md5ii (a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t)
  }

  /*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */
  function binlMD5 (x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << (len % 32)
    x[((len + 64) >>> 9 << 4) + 14] = len

    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d

      a = md5ff(a, b, c, d, x[i], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5gg(b, c, d, a, x[i], 20, -373897302)
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5hh(d, a, b, c, x[i], 11, -358537222)
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5ii(a, b, c, d, x[i], 6, -198630844)
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  /*
  * Convert an array of little-endian words to a string
  */
  function binl2rstr (input) {
    var i
    var output = ''
    var length32 = input.length * 32
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff)
    }
    return output
  }

  /*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */
  function rstr2binl (input) {
    var i
    var output = []
    output[(input.length >> 2) - 1] = undefined
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0
    }
    var length8 = input.length * 8
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32)
    }
    return output
  }

  /*
  * Calculate the MD5 of a raw string
  */
  function rstrMD5 (s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
  }

  /*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */
  function rstrHMACMD5 (key, data) {
    var i
    var bkey = rstr2binl(key)
    var ipad = []
    var opad = []
    var hash
    ipad[15] = opad[15] = undefined
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8)
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5c5c5c5c
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
  }

  /*
  * Convert a raw string to a hex string
  */
  function rstr2hex (input) {
    var hexTab = '0123456789abcdef'
    var output = ''
    var x
    var i
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i)
      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
    }
    return output
  }

  /*
  * Encode a string as utf-8
  */
  function str2rstrUTF8 (input) {
    return unescape(encodeURIComponent(input))
  }

  /*
  * Take string arguments and return either raw or hex encoded strings
  */
  function rawMD5 (s) {
    return rstrMD5(str2rstrUTF8(s))
  }
  function hexMD5 (s) {
    return rstr2hex(rawMD5(s))
  }
  function rawHMACMD5 (k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
  }
  function hexHMACMD5 (k, d) {
    return rstr2hex(rawHMACMD5(k, d))
  }

  function md5 (string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string)
      }
      return rawMD5(string)
    }
    if (!raw) {
      return hexHMACMD5(key, string)
    }
    return rawHMACMD5(key, string)
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return md5
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    module.exports = md5
  } else {
    $.md5 = md5
  }
})(this)


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(6);
var ctx = __webpack_require__(26);
var hide = __webpack_require__(29);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(31);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(28);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', { defineProperty: __webpack_require__(9).f });


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\t.st0_j8640fs8{fill:none;stroke:#11A7ED;stroke-width:2.0439;stroke-linejoin:bevel;stroke-miterlimit:10;}\t.st1_j8640fs8{fill:none;stroke:#11A7ED;stroke-width:2.1562;stroke-miterlimit:10;}\t.st2_j8640fs8{fill:none;stroke:#11A7ED;stroke-width:2.1562;stroke-linejoin:bevel;stroke-miterlimit:10;}\t.st3_j8640fs8{fill:#FFFFFF;}\t.st4_j8640fs8{fill:#0FAFF1;}", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".no-tickets[data-v-2ae497c8]{display:flex;align-items:center;flex-direction:column;padding-top:70px}.no-tickets .btn[data-v-2ae497c8]{margin:30px 0 0}", "", {"version":3,"sources":["/./src/no-tickets.vue"],"names":[],"mappings":"AACA,6BACE,aAAc,AACd,mBAAoB,AACpB,sBAAuB,AACvB,gBAAkB,CACnB,AACD,kCACI,eAAiB,CACpB","file":"no-tickets.vue","sourcesContent":["\n.no-tickets[data-v-2ae497c8] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 70px;\n}\n.no-tickets .btn[data-v-2ae497c8] {\n    margin: 30px 0 0;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "img[data-v-3aaaf0ae]{margin-right:15px}", "", {"version":3,"sources":["/./src/components/profile-pic.vue"],"names":[],"mappings":"AACA,qBACE,iBAAmB,CACpB","file":"profile-pic.vue","sourcesContent":["\nimg[data-v-3aaaf0ae] {\n  margin-right: 15px;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".ticket-list .lifecycle[data-v-59914264]:before{margin-left:-15px;border:1px solid rgba(18,170,228,.2);border-left:1px solid #12aae4}.ticket-list .item.closed[data-v-59914264]{background:#99b0ba}.ticket-list .item .details[data-v-59914264]{display:flex;align-items:center}.ticket-list .item .details .txt[data-v-59914264]{margin-left:8px}", "", {"version":3,"sources":["/./src/ticket-list.vue"],"names":[],"mappings":"AACA,gDACE,kBAAmB,AACnB,qCAA0C,AAC1C,6BAA+B,CAChC,AACD,2CACE,kBAAoB,CACrB,AACD,6CACE,aAAc,AACd,kBAAoB,CACrB,AACD,kDACI,eAAiB,CACpB","file":"ticket-list.vue","sourcesContent":["\n.ticket-list .lifecycle[data-v-59914264]:before {\n  margin-left: -15px;\n  border: 1px solid rgba(18, 170, 228, 0.2);\n  border-left: 1px solid #12AAE4;\n}\n.ticket-list .item.closed[data-v-59914264] {\n  background: #99B0BA;\n}\n.ticket-list .item .details[data-v-59914264] {\n  display: flex;\n  align-items: center;\n}\n.ticket-list .item .details .txt[data-v-59914264] {\n    margin-left: 8px;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".ticket-view .header[data-v-6b6ce556]{display:flex;color:#002f3c;font-size:18px;border:3px solid #fff;padding:10px 15px;margin-bottom:20px;align-items:baseline;justify-content:space-between;margin-top:40px}.ticket-view .header .status[data-v-6b6ce556]{font-size:12px;color:#11a7ed;text-transform:uppercase}.ticket-view .message .info[data-v-6b6ce556]{display:flex;align-items:baseline;margin-bottom:6px;font-size:13px}.ticket-view .message .info .user[data-v-6b6ce556]{color:#4f7180;font-weight:600}.ticket-view .message .info .time[data-v-6b6ce556]{color:#a1aeb3;font-style:italic;margin-left:6px}.ticket-view .message .body[data-v-6b6ce556]{display:flex;align-items:flex-end}.ticket-view .message .body .txt[data-v-6b6ce556]{background:#fff;flex-grow:1;min-height:50px;padding:12px 18px;box-sizing:border-box}.ticket-view .message[data-v-6b6ce556]:not(last-of-type){margin-bottom:30px}.ticket-view .rule[data-v-6b6ce556]{border-bottom:1px solid #cbd5db;margin:20px 0 20px 65px}.ticket-view .actions[data-v-6b6ce556]{display:flex;justify-content:flex-end;margin-top:20px}.ticket-view .actions .btn[data-v-6b6ce556]{margin-left:12px}.ticket-view .actions .btn.close[data-v-6b6ce556]{background:#51cafd}.ticket-view .actions .btn.close[data-v-6b6ce556]:hover{background:#0297df}", "", {"version":3,"sources":["/./src/ticket-view.vue"],"names":[],"mappings":"AACA,sCACE,aAAc,AACd,cAAe,AACf,eAAgB,AAChB,sBAAwB,AACxB,kBAAmB,AACnB,mBAAoB,AACpB,qBAAsB,AACtB,8BAA+B,AAC/B,eAAiB,CAClB,AACD,8CACI,eAAgB,AAChB,cAAe,AACf,wBAA0B,CAC7B,AACD,6CACE,aAAc,AACd,qBAAsB,AACtB,kBAAmB,AACnB,cAAgB,CACjB,AACD,mDACI,cAAe,AACf,eAAiB,CACpB,AACD,mDACI,cAAe,AACf,kBAAmB,AACnB,eAAiB,CACpB,AACD,6CACE,aAAc,AACd,oBAAsB,CACvB,AACD,kDACI,gBAAkB,AAClB,YAAa,AACb,gBAAiB,AACjB,kBAAmB,AACnB,qBAAuB,CAC1B,AACD,yDACE,kBAAoB,CACrB,AACD,oCACE,gCAAiC,AACjC,uBAAyB,CAC1B,AACD,uCACE,aAAc,AACd,yBAA0B,AAC1B,eAAiB,CAClB,AACD,4CACI,gBAAkB,CACrB,AACD,kDACM,kBAAoB,CACzB,AACD,wDACQ,kBAAoB,CAC3B","file":"ticket-view.vue","sourcesContent":["\n.ticket-view .header[data-v-6b6ce556] {\n  display: flex;\n  color: #002F3C;\n  font-size: 18px;\n  border: solid 3px white;\n  padding: 10px 15px;\n  margin-bottom: 20px;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-top: 40px;\n}\n.ticket-view .header .status[data-v-6b6ce556] {\n    font-size: 12px;\n    color: #11A7ED;\n    text-transform: uppercase;\n}\n.ticket-view .message .info[data-v-6b6ce556] {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 6px;\n  font-size: 13px;\n}\n.ticket-view .message .info .user[data-v-6b6ce556] {\n    color: #4F7180;\n    font-weight: 600;\n}\n.ticket-view .message .info .time[data-v-6b6ce556] {\n    color: #A1AEB3;\n    font-style: italic;\n    margin-left: 6px;\n}\n.ticket-view .message .body[data-v-6b6ce556] {\n  display: flex;\n  align-items: flex-end;\n}\n.ticket-view .message .body .txt[data-v-6b6ce556] {\n    background: white;\n    flex-grow: 1;\n    min-height: 50px;\n    padding: 12px 18px;\n    box-sizing: border-box;\n}\n.ticket-view .message[data-v-6b6ce556]:not(last-of-type) {\n  margin-bottom: 30px;\n}\n.ticket-view .rule[data-v-6b6ce556] {\n  border-bottom: solid 1px #CBD5DB;\n  margin: 20px 0 20px 65px;\n}\n.ticket-view .actions[data-v-6b6ce556] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n.ticket-view .actions .btn[data-v-6b6ce556] {\n    margin-left: 12px;\n}\n.ticket-view .actions .btn.close[data-v-6b6ce556] {\n      background: #51CAFD;\n}\n.ticket-view .actions .btn.close[data-v-6b6ce556]:hover {\n        background: #0297DF;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".tickets .message .body .txt,.tickets input,.tickets textarea{color:#545657;font-size:16px;font-weight:600;font-style:italic;line-height:1.5;padding:6px 10px}.tickets .message .body .txt::placeholder,.tickets input::placeholder,.tickets textarea::placeholder{color:#bbb}.tickets .message .body .txt::selection,.tickets input::selection,.tickets textarea::selection{background:#9ee2fc;color:#000}.tickets .pad-left{padding-left:65px}.tickets .push-left{margin-left:65px}", "", {"version":3,"sources":["/./src/base.vue"],"names":[],"mappings":"AACA,8DACE,cAAe,AACf,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,gBAAiB,AACjB,gBAAkB,CACnB,AACD,qGACI,UAAe,CAClB,AACD,+FACI,mBAAoB,AACpB,UAAe,CAClB,AACD,mBACE,iBAAmB,CACpB,AACD,oBACE,gBAAkB,CACnB","file":"base.vue","sourcesContent":["\n.tickets input, .tickets textarea, .tickets .message .body .txt {\n  color: #545657;\n  font-size: 16px;\n  font-weight: 600;\n  font-style: italic;\n  line-height: 1.5;\n  padding: 6px 10px;\n}\n.tickets input::placeholder, .tickets textarea::placeholder, .tickets .message .body .txt::placeholder {\n    color: #BBBBBB;\n}\n.tickets input::selection, .tickets textarea::selection, .tickets .message .body .txt::selection {\n    background: #9EE2FC;\n    color: #000000;\n}\n.tickets .pad-left {\n  padding-left: 65px;\n}\n.tickets .push-left {\n  margin-left: 65px;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".ticket-new[data-v-b89d42c0]{display:flex;flex-direction:column}.ticket-new>[data-v-b89d42c0]{margin:10px 0}.ticket-new .row[data-v-b89d42c0]{display:flex}.ticket-new .row>[data-v-b89d42c0]{margin-right:15px}.ticket-new input[data-v-b89d42c0]{width:100%}", "", {"version":3,"sources":["/./src/ticket-new.vue"],"names":[],"mappings":"AACA,6BACE,aAAc,AACd,qBAAuB,CACxB,AACD,8BACI,aAAe,CAClB,AACD,kCACI,YAAc,CACjB,AACD,mCACM,iBAAmB,CACxB,AACD,mCACI,UAAY,CACf","file":"ticket-new.vue","sourcesContent":["\n.ticket-new[data-v-b89d42c0] {\n  display: flex;\n  flex-direction: column;\n}\n.ticket-new > *[data-v-b89d42c0] {\n    margin: 10px 0;\n}\n.ticket-new .row[data-v-b89d42c0] {\n    display: flex;\n}\n.ticket-new .row > *[data-v-b89d42c0] {\n      margin-right: 15px;\n}\n.ticket-new input[data-v-b89d42c0] {\n    width: 100%;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".commentor[data-v-d236486c]{display:flex;align-items:flex-end}.commentor textarea[data-v-d236486c]{resize:vertical;height:125px;width:100%;min-height:50px}", "", {"version":3,"sources":["/./src/components/commentor.vue"],"names":[],"mappings":"AACA,4BACE,aAAc,AACd,oBAAsB,CACvB,AACD,qCACI,gBAAiB,AACjB,aAAc,AACd,WAAY,AACZ,eAAiB,CACpB","file":"commentor.vue","sourcesContent":["\n.commentor[data-v-d236486c] {\n  display: flex;\n  align-items: flex-end;\n}\n.commentor textarea[data-v-d236486c] {\n    resize: vertical;\n    height: 125px;\n    width: 100%;\n    min-height: 50px;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var long          = __webpack_require__(44)
var long_concise  = __webpack_require__(43)
var short         = __webpack_require__(46)
var short_concise = __webpack_require__(45)
var tiny          = __webpack_require__(47)

module.exports =
{
	locale        : 'en',
	// `default` may conflict with ES6
	// default       : long,

	tiny          : tiny,
	short         : short,
	short_concise : short_concise,
	long          : long,
	long_concise  : long_concise
}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {"year":{"previous":"a year","next":"a year","future":{"one":"{0} year","other":"{0} years"},"past":{"one":"{0} year","other":"{0} years"}},"half-year":{"future":{"other":"half a year"},"past":{"other":"half a year"}},"month":{"previous":"a month","next":"a month","future":{"one":"{0} month","other":"{0} months"},"past":{"one":"{0} month","other":"{0} months"}},"week":{"previous":"a week","next":"a week","future":{"one":"{0} week","other":"{0} weeks"},"past":{"one":"{0} week","other":"{0} weeks"}},"day":{"future":{"one":"{0} day","other":"{0} days"},"past":{"one":"{0} day","other":"{0} days"}},"hour":{"previous":"an hour","next":"an hour","future":{"one":"{0} hour","other":"{0} hours"},"past":{"one":"{0} hour","other":"{0} hours"}},"half-hour":{"future":{"other":"half an hour"},"past":{"other":"half an hour"}},"minute":{"future":{"one":"{0} minute","other":"{0} minutes"},"past":{"one":"{0} minute","other":"{0} minutes"}},"second":{"current":"now","future":{"one":"{0} second","other":"{0} seconds"},"past":{"one":"{0} second","other":"{0} seconds"}},"just-now":{"future":{"other":"a moment"},"past":{"other":"just now"}}}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {"year":{"previous":"a year ago","next":"in a year","future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"}},"half-year":{"future":{"other":"in half a year"},"past":{"other":"half a year ago"}},"month":{"previous":"a month ago","next":"in a month","future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"}},"week":{"previous":"a week ago","next":"in a week","future":{"one":"in {0} week","other":"in {0} weeks"},"past":{"one":"{0} week ago","other":"{0} weeks ago"}},"day":{"previous":"a day ago","next":"in a day","future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"}},"hour":{"previous":"an hour ago","next":"in an hour","future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}},"half-hour":{"future":{"other":"in half an hour"},"past":{"other":"half an hour ago"}},"minute":{"previous":"a minute ago","next":"in a minute","future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}},"second":{"current":"now","future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}},"just-now":{"future":{"other":"in a moment"},"past":{"other":"just now"}}}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {"year":{"future":{"one":"{0} yr.","other":"{0} yr."},"past":{"one":"{0} yr.","other":"{0} yr."}},"month":{"future":{"one":"{0} mo.","other":"{0} mo."},"past":{"one":"{0} mo.","other":"{0} mo."}},"week":{"future":{"one":"{0} wk.","other":"{0} wk."},"past":{"one":"{0} wk.","other":"{0} wk."}},"day":{"future":{"one":"{0} day","other":"{0} days"},"past":{"one":"{0} day","other":"{0} days"}},"hour":{"future":{"one":"{0} hr.","other":"{0} hr."},"past":{"one":"{0} hr.","other":"{0} hr."}},"minute":{"future":{"one":"{0} min.","other":"{0} min."},"past":{"one":"{0} min.","other":"{0} min."}},"second":{"current":"now","past":{"one":"{0} sec.","other":"{0} sec."},"future":{"one":"{0} sec.","other":"{0} sec."}},"just-now":{"past":{"other":"now"},"future":{"other":"now"}}}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {"year":{"future":{"one":"in {0} yr.","other":"in {0} yr."},"past":{"one":"{0} yr. ago","other":"{0} yr. ago"}},"month":{"future":{"one":"in {0} mo.","other":"in {0} mo."},"past":{"one":"{0} mo. ago","other":"{0} mo. ago"}},"week":{"future":{"one":"in {0} wk.","other":"in {0} wk."},"past":{"one":"{0} wk. ago","other":"{0} wk. ago"}},"day":{"previous":"a day ago","next":"in a day","future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"}},"hour":{"future":{"one":"in {0} hr.","other":"in {0} hr."},"past":{"one":"{0} hr. ago","other":"{0} hr. ago"}},"minute":{"future":{"one":"in {0} min.","other":"in {0} min."},"past":{"one":"{0} min. ago","other":"{0} min. ago"}},"second":{"current":"now","past":{"one":"{0} sec. ago","other":"{0} sec. ago"},"future":{"one":"in {0} sec.","other":"in {0} sec."}},"just-now":{"past":{"other":"now"},"future":{"other":"now"}}}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {"year":{"future":{"other":"{0}yr"},"past":{"other":"{0}yr"}},"month":{"future":{"other":"{0}mo"},"past":{"other":"{0}mo"}},"week":{"future":{"other":"{0}wk"},"past":{"other":"{0}wk"}},"day":{"future":{"other":"{0}d"},"past":{"other":"{0}d"}},"hour":{"future":{"other":"{0}h"},"past":{"other":"{0}h"}},"minute":{"future":{"other":"{0}m"},"past":{"other":"{0}m"}},"second":{"current":"now","past":{"other":"{0}s"},"future":{"other":"{0}s"}},"just-now":{"past":{"other":""},"future":{"other":""}}}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(49)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/shadow-icons/webpack/shadow-svg-css-loader.js??ref--5-3!./tickets-svg.svg", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/shadow-icons/webpack/shadow-svg-css-loader.js??ref--5-3!./tickets-svg.svg");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}
window.pxSvgIconString = window.pxSvgIconString || ''; window.pxSvgIconString+='<g id="big-tickets-icon" data-size="82x82" class="tickets-svg-svg ">	<circle class="st0_j8640fs8" cx="40.909" cy="40.909" r="39.887"/><line class="st1_j8640fs8" x1="42.745" y1="35.421" x2="39.132" y2="35.421"/><line class="st1_j8640fs8" x1="31.524" y1="11.836" x2="41.414" y2="21.726"/><line class="st1_j8640fs8" x1="35.328" y1="8.983" x2="48.071" y2="21.726"/><line class="st1_j8640fs8" x1="40.273" y1="7.271" x2="54.918" y2="21.726"/><line class="st1_j8640fs8" x1="54.918" y1="15.069" x2="48.452" y2="8.793"/><polyline class="st1_j8640fs8" points="35.898,40.746 37.61,41.317 44.077,41.317 45.789,40.746 	"/><line class="st1_j8640fs8" x1="52.914" y1="24.996" x2="53.207" y2="20.205"/><polyline class="st1_j8640fs8" points="29.465,34.05 30.192,45.121 40.843,49.306 51.685,45.121 52.361,34.054 	"/><polyline class="st1_j8640fs8" points="34.377,14.689 28.48,19.063 28.847,24.641 	"/><line class="st1_j8640fs8" x1="30.382" y1="13.167" x2="27.339" y2="15.45"/><path class="st1_j8640fs8" d="M43.696,27.432"/><path class="st1_j8640fs8" d="M44.838,32.948"/><line class="st1_j8640fs8" x1="36.659" y1="28.193" x2="45.028" y2="28.193"/><polyline class="st1_j8640fs8" points="50.544,24.579 55.489,24.579 55.489,29.515 	"/><polyline class="st1_j8640fs8" points="31.714,24.579 26.573,24.579 26.573,29.486 	"/><path class="st1_j8640fs8" d="M36.659,56.343"/><polyline class="st2_j8640fs8" points="50.544,45.502 42.745,57.484 51.685,53.68 55.679,60.908 53.207,46.453 51.875,41.127 	"/><polyline class="st2_j8640fs8" points="31.333,45.502 39.132,57.484 30.002,53.68 26.008,60.908 28.48,46.453 29.812,41.127 	"/><polyline class="st2_j8640fs8" points="42.745,57.484 40.843,64.141 39.132,57.484 	"/><polyline class="st2_j8640fs8" points="27.339,51.017 6.95,56.621 5.558,59.477 	"/><polyline class="st2_j8640fs8" points="54.348,51.017 74.924,56.621 76.48,59.156 	"/><polyline class="st2_j8640fs8" points="28.48,57.484 40.843,67.375 53.777,57.484 	"/><circle class="st1_j8640fs8" cx="31.524" cy="29.525" r="4.945"/><circle class="st1_j8640fs8" cx="50.544" cy="29.525" r="4.945"/></g><g id="ticket-closed" data-size="23x23" class="tickets-svg-svg ">	<circle class="st3_j8640fs8" cx="11.466" cy="11.466" r="11.466"/><g>		<path class="st4_j8640fs8" d="M10.011,16.231c-0.23,0-0.44-0.045-0.63-0.135c-0.19-0.09-0.37-0.21-0.54-0.36l-3.18-3.194			c-0.16-0.16-0.28-0.343-0.36-0.548s-0.12-0.412-0.12-0.622s0.04-0.415,0.12-0.615s0.2-0.375,0.36-0.525			c0.159-0.159,0.342-0.282,0.547-0.367s0.413-0.128,0.623-0.128s0.415,0.043,0.615,0.128c0.199,0.085,0.38,0.208,0.539,0.367			l2.025,2.025l5.115-5.13c0.16-0.16,0.34-0.28,0.54-0.36s0.407-0.12,0.622-0.12s0.423,0.04,0.623,0.12			c0.199,0.08,0.38,0.2,0.54,0.36c0.159,0.16,0.277,0.34,0.353,0.54c0.074,0.2,0.112,0.407,0.112,0.622			c0,0.216-0.038,0.423-0.112,0.623c-0.075,0.2-0.193,0.38-0.353,0.54l-6.285,6.284c-0.15,0.15-0.322,0.271-0.518,0.36			S10.241,16.231,10.011,16.231z"/></g></g><g id="ticket-open" data-size="27x23" class="tickets-svg-svg ">	<rect class="st3_j8640fs8" width="26.452" height="16.599"/><polygon class="st3_j8640fs8" points="15.199,16.209 21.287,22.297 21.287,15.516 	"/><circle class="st4_j8640fs8" cx="6.583" cy="8.934" r="1.783"/><circle class="st4_j8640fs8" cx="13.216" cy="8.934" r="1.783"/><circle class="st4_j8640fs8" cx="19.848" cy="8.934" r="1.783"/></g>';window.pxSvgIconString = window.pxSvgIconString || ''; window.pxSvgIconString+='';

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(50);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 50 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(67)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(60),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(63)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(56),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2ae497c8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(65)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(58),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-59914264",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(68)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(61),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b89d42c0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(66)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(59),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6b6ce556",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "no-tickets"
  }, [_c('img', {
    staticClass: "shadow-icon",
    attrs: {
      "data-src": "big-tickets-icon"
    }
  }), _c('div', {
    staticClass: "btn basic",
    on: {
      "click": function($event) {
        _vm.$emit('newTicket')
      }
    }
  }, [_vm._v("Create a New Ticket")])])
},staticRenderFns: []}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('img', {
    attrs: {
      "src": _vm.getGravatarUrl()
    }
  })
},staticRenderFns: []}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ticket-list blue-list"
  }, [_vm._l((_vm.tickets), function(ticket) {
    return _c('div', {
      staticClass: "item",
      class: [ticket.status]
    }, [_c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(ticket.title))]), (ticket.status == 'open') ? _c('div', {
      staticClass: "details"
    }, [_c('img', {
      staticClass: "shadow-icon",
      attrs: {
        "data-src": "ticket-open"
      }
    }), _c('div', {
      staticClass: "txt"
    }, [_vm._v("Open")])]) : _vm._e(), (ticket.status == 'closed') ? _c('div', {
      staticClass: "details"
    }, [_c('img', {
      staticClass: "shadow-icon",
      attrs: {
        "data-src": "ticket-closed"
      }
    }), _c('div', {
      staticClass: "txt"
    }, [_vm._v("Closed")])]) : _vm._e()]), _c('div', {
      staticClass: "button lifecycle",
      class: {
        ing: _vm.activeTicketId == ticket.id
      },
      on: {
        "click": function($event) {
          _vm.$emit('viewTicket', ticket.id)
        }
      }
    }, [_vm._v("View")])])
  }), _c('div', {
    staticClass: "btn basic",
    on: {
      "click": function($event) {
        _vm.$emit('newTicket')
      }
    }
  }, [_vm._v("Create a New Ticket")])], 2)
},staticRenderFns: []}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ticket-view"
  }, [_c('back', {
    on: {
      "back": function($event) {
        _vm.$emit('exit')
      }
    }
  }), _c('div', {
    staticClass: "header push-left"
  }, [_c('div', {
    staticClass: "txt"
  }, [_vm._v(_vm._s(_vm.ticket.title))]), _c('div', {
    staticClass: "status"
  }, [_vm._v(_vm._s(_vm.ticket.status))])]), _vm._l((_vm.ticket.comments), function(comment, i) {
    return _c('div', {
      staticClass: "message"
    }, [_c('div', {
      staticClass: "info pad-left"
    }, [_c('div', {
      staticClass: "user"
    }, [_vm._v(_vm._s(comment.user))]), _c('div', {
      staticClass: "time"
    }, [_vm._v(_vm._s(_vm.getTime(comment.time)))])]), _c('div', {
      staticClass: "body"
    }, [_c('profile-pic', {
      attrs: {
        "email": comment.email
      }
    }), _c('div', {
      staticClass: "txt"
    }, [_vm._v(_vm._s(comment.text))])], 1)])
  }), _c('div', {
    staticClass: "rule push-left"
  }), _c('commentor', {
    attrs: {
      "email": _vm.model.userEmail
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newComment),
      expression: "newComment"
    }],
    attrs: {
      "placeholder": "Add a comment"
    },
    domProps: {
      "value": (_vm.newComment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newComment = $event.target.value
      }
    }
  })]), _c('div', {
    staticClass: "actions save-section"
  }, [(_vm.ticket.status != 'closed') ? _c('div', {
    staticClass: "btn basic close lifecycle",
    on: {
      "click": _vm.close
    }
  }, [_vm._v("Close Ticket")]) : _c('div', {
    staticClass: "btn basic open lifecycle",
    on: {
      "click": _vm.reopen
    }
  }, [_vm._v("Re-Open Ticket")]), _c('div', {
    staticClass: "btn basic lifecycle",
    on: {
      "click": _vm.comment
    }
  }, [_vm._v("Comment")])])], 2)
},staticRenderFns: []}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tickets"
  }, [_c('errors', {
    attrs: {
      "errors": _vm.error
    }
  }), (_vm.state == 'no-tickets') ? _c('no-tickets', {
    on: {
      "newTicket": function($event) {
        _vm.state = 'ticket.new'
      }
    }
  }) : _vm._e(), (_vm.state == 'list') ? _c('ticket-list', {
    attrs: {
      "activeTicketId": _vm.activeTicketId,
      "tickets": _vm.model.tickets
    },
    on: {
      "viewTicket": _vm.viewTicket,
      "newTicket": function($event) {
        _vm.state = 'ticket.new'
      }
    }
  }) : _vm._e(), (_vm.state == 'ticket.view') ? _c('ticket-view', {
    ref: "ticketView",
    attrs: {
      "model": _vm.model,
      "ticket": _vm.activeTicket
    },
    on: {
      "exit": _vm.exitTicket,
      "onError": _vm.onError,
      "ticket-close": _vm.closeTicket,
      "ticket-comment": _vm.addCommentToTicket
    }
  }) : _vm._e(), (_vm.state == 'ticket.new') ? _c('ticket-new', {
    attrs: {
      "model": _vm.model,
      "saveCb": _vm.callbacks.createTicket
    },
    on: {
      "exit": _vm.setListState,
      "error": _vm.onError
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ticket-new"
  }, [_c('back', {
    on: {
      "back": function($event) {
        _vm.$emit('exit')
      }
    }
  }), _c('div', {
    staticClass: "row pad-left"
  }, [_c('dropdown', {
    model: {
      value: (_vm.category),
      callback: function($$v) {
        _vm.category = $$v
      },
      expression: "category"
    }
  }, [_c('div', {
    staticClass: "option",
    attrs: {
      "value": "general"
    }
  }, [_vm._v("General Support")]), _c('div', {
    staticClass: "option",
    attrs: {
      "value": "app"
    }
  }, [_vm._v("App Specific Support")])]), (_vm.category == 'app') ? _c('dropdown', {
    model: {
      value: (_vm.appId),
      callback: function($$v) {
        _vm.appId = $$v
      },
      expression: "appId"
    }
  }, [_c('div', {
    staticClass: "option",
    attrs: {
      "value": "none"
    }
  }, [_vm._v("Select an app")]), _vm._l((_vm.model.apps), function(app) {
    return _c('div', {
      key: app.id,
      staticClass: "option",
      attrs: {
        "value": app.id
      }
    }, [_vm._v(_vm._s(app.name))])
  })], 2) : _vm._e()], 1), _c('div', {
    staticClass: "pad-left"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.subject),
      expression: "subject"
    }],
    attrs: {
      "placeholder": "Subject"
    },
    domProps: {
      "value": (_vm.subject)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.subject = $event.target.value
      }
    }
  })]), _c('commentor', {
    attrs: {
      "email": _vm.model.userEmail
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.message),
      expression: "message"
    }],
    attrs: {
      "placeholder": "Ticket Details"
    },
    domProps: {
      "value": (_vm.message)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.message = $event.target.value
      }
    }
  })]), _c('save-section', {
    attrs: {
      "save-text": "Create Ticket"
    },
    on: {
      "save": _vm.onSave,
      "cancel": function($event) {
        _vm.$emit('exit')
      }
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "commentor"
  }, [_c('profile-pic', {
    attrs: {
      "email": _vm.email
    }
  }), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3f1bdbb7", content, true);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("203f0afc", content, true);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("cec31a6c", content, true);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2c9a6b95", content, true);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2a6d0bec", content, true);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6debbd10", content, true);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("256a4260", content, true);

/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ })
/******/ ]);
});
//# sourceMappingURL=build.js.map
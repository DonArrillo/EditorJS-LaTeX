"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _katex=_interopRequireDefault(require("katex"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var EJLaTeX=function(){function e(t){var r=t.data,n=t.config;_classCallCheck(this,e),this.data=r.math,n&&n.css&&this.addCss(n.css)}return _createClass(e,[{key:"render",value:function(){var e=document.createElement("div"),t=document.createElement("p"),r=document.createElement("input");if(void 0===_katex.default){var n=document.createElement("span");return n.className="errorMessage",n.innerText="[Erorr] KaTeX is not found! Add KaTeX to this webpage to continue!",n}return e.classList.add("math-input-wrapper"),t.classList.add("math-preview"),r.classList.add("math-input"),r.value=this.data?this.data:"",r.setAttribute("placeholder","Enter LaTeX here"),_katex.default.render(r.value,t,{throwOnError:!1}),r.addEventListener("keyup",function(e){e.preventDefault(),_katex.default.render(r.value,t,{throwOnError:!1})}),e.appendChild(t),e.appendChild(r),e}},{key:"save",value:function(e){return{math:e.childNodes[1].value}}},{key:"addCss",value:function(e){var t=document.head,r=document.createElement("style");r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),t.appendChild(r)}}],[{key:"toolbox",get:function(){return{title:"Math",icon:'<svg id="Layer_1" enable-background="new 0 0 506.1 506.1" height="512" viewBox="0 0 506.1 506.1" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m489.609 0h-473.118c-9.108 0-16.491 7.383-16.491 16.491v473.118c0 9.107 7.383 16.491 16.491 16.491h473.119c9.107 0 16.49-7.383 16.49-16.491v-473.118c0-9.108-7.383-16.491-16.491-16.491zm-16.49 473.118h-440.138v-440.137h440.138z"/><path d="m367.278 240.136v-62.051c0-8.836-7.163-16-16-16s-16 7.164-16 16v147.377c0 15.024 18.993 21.77 28.457 10.03 34.691 18.107 77.146-6.988 77.146-46.831.001-37.966-39-63.416-73.603-48.525zm20.802 69.327c-11.47 0-20.802-9.332-20.802-20.802s9.332-20.802 20.802-20.802 20.802 9.332 20.802 20.802-9.332 20.802-20.802 20.802z"/><path d="m112.397 200.262h-14.014c-8.836 0-16 7.164-16 16s7.164 16 16 16h14.014c8.291 0 15.037 6.746 15.037 15.037v4.998c-30.589-10.389-62.216 12.536-62.216 44.609 0 34.402 35.954 57.331 67.13 42.629 10.128 9.747 27.086 2.537 27.086-11.521v-80.715c0-25.936-21.101-47.037-47.037-47.037zm-.071 111.752c-8.331 0-15.108-6.777-15.108-15.108s6.777-15.108 15.108-15.108 15.108 6.777 15.108 15.108-6.778 15.108-15.108 15.108z"/><path d="m287.786 243.114c-6.248-6.248-16.379-6.249-22.627 0l-18.11 18.11-18.11-18.11c-6.249-6.249-16.379-6.249-22.627 0-6.249 6.249-6.249 16.379 0 22.627l18.11 18.11-18.11 18.11c-6.248 6.248-6.248 16.379 0 22.627s16.378 6.249 22.627 0l18.11-18.11 18.11 18.11c6.246 6.248 16.377 6.249 22.627 0 6.249-6.249 6.249-16.379 0-22.627l-18.11-18.11 18.11-18.11c6.249-6.248 6.249-16.379 0-22.627z"/></svg>'}}}]),e}();exports.default=EJLaTeX,module.exports=EJLaTeX;
// ==UserScript==
// @name         TrophyNexus
// @author       GIONAScm2
// @run-at       document-start
// @namespace    https://github.com/GIONAScm2/TrophyNexus
// @description  I love trophies, and with this script, so will you
// @version      1.5.0
// @downloadURL  https://github.com/GIONAScm2/TrophyNexus/raw/main/TrophyNexus.user.js
// @updateURL    https://github.com/GIONAScm2/TrophyNexus/raw/main/TrophyNexus.user.js	
// @match        https://psnprofiles.com/*
// @match        https://forum.psnprofiles.com/*
// @match        https://www.trueachievements.com/*
// @match        https://www.truetrophies.com/*
// @connect      cloudfunctions.net
// @noframes
// @grant        unsafeWindow
// @grant        window.onurlchange
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.addValueChangeListener
// @grant        GM.removeValueChangeListener
// @grant        GM.xmlHttpRequest
// @grant        GM.notification
// @grant        GM.listValues
// ==/UserScript==
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCircleInfo.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'circle-info';
var width = 512;
var height = 512;
var aliases = ["info-circle"];
var unicode = 'f05a';
var svgPathData = 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faCircleInfo = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faFilter.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'filter';
var width = 512;
var height = 512;
var aliases = [];
var unicode = 'f0b0';
var svgPathData = 'M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faFilter = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faGear.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'gear';
var width = 512;
var height = 512;
var aliases = [9881,"cog"];
var unicode = 'f013';
var svgPathData = 'M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faGear = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSort.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'sort';
var width = 320;
var height = 512;
var aliases = ["unsorted"];
var unicode = 'f0dc';
var svgPathData = 'M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faSort = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSortDown.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'sort-down';
var width = 320;
var height = 512;
var aliases = ["sort-desc"];
var unicode = 'f0dd';
var svgPathData = 'M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faSortDown = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSortUp.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'sort-up';
var width = 320;
var height = 512;
var aliases = ["sort-asc"];
var unicode = 'f0de';
var svgPathData = 'M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faSortUp = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faStar.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'star';
var width = 576;
var height = 512;
var aliases = [11088,61446];
var unicode = 'f005';
var svgPathData = 'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faStar = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faTrophy.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'trophy';
var width = 576;
var height = 512;
var aliases = [127942];
var unicode = 'f091';
var svgPathData = 'M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faTrophy = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontAwesomeIcon: () => (/* binding */ FontAwesomeIcon)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/compat/dist/compat.module.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var beat = props.beat,
      fade = props.fade,
      beatFade = props.beatFade,
      bounce = props.bounce,
      shake = props.shake,
      flash = props.flash,
      spin = props.spin,
      spinPulse = props.spinPulse,
      spinReverse = props.spinReverse,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-beat': beat,
    'fa-fade': fade,
    'fa-beat-fade': beatFade,
    'fa-bounce': bounce,
    'fa-shake': shake,
    'fa-flash': flash,
    'fa-spin': spin,
    'fa-spin-reverse': spinReverse,
    'fa-spin-pulse': spinPulse,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip': flip === true,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

var _excluded = ["style"];

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, _excluded);

  mixins.attrs['style'] = _objectSpread2(_objectSpread2({}, mixins.attrs['style']), existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.icon) {
    return _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

var FontAwesomeIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].forwardRef(function (props, ref) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId,
      maskId = props.maskId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.icon)(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
    symbol: symbol,
    title: title,
    titleId: titleId,
    maskId: maskId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: ref
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
});
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  beat: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  border: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  beatFade: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  bounce: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  fade: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  flash: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  mask: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  maskId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  fixedWidth: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  flip: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([true, false, 'horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  listItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  pull: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['right', 'left']),
  pulse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([0, 90, 180, 270]),
  shake: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  spinPulse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  spinReverse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  titleId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  transform: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)]),
  swapOpacity: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement);




/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Children: () => (/* binding */ O),
/* harmony export */   Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   PureComponent: () => (/* binding */ w),
/* harmony export */   StrictMode: () => (/* binding */ mn),
/* harmony export */   Suspense: () => (/* binding */ D),
/* harmony export */   SuspenseList: () => (/* binding */ V),
/* harmony export */   __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (/* binding */ ln),
/* harmony export */   cloneElement: () => (/* binding */ sn),
/* harmony export */   createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   createElement: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   createFactory: () => (/* binding */ fn),
/* harmony export */   createPortal: () => (/* binding */ z),
/* harmony export */   createRef: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "default": () => (/* binding */ Cn),
/* harmony export */   findDOMNode: () => (/* binding */ vn),
/* harmony export */   flushSync: () => (/* binding */ pn),
/* harmony export */   forwardRef: () => (/* binding */ k),
/* harmony export */   hydrate: () => (/* binding */ J),
/* harmony export */   isValidElement: () => (/* binding */ an),
/* harmony export */   lazy: () => (/* binding */ M),
/* harmony export */   memo: () => (/* binding */ x),
/* harmony export */   render: () => (/* binding */ G),
/* harmony export */   startTransition: () => (/* binding */ yn),
/* harmony export */   unmountComponentAtNode: () => (/* binding */ hn),
/* harmony export */   unstable_batchedUpdates: () => (/* binding */ dn),
/* harmony export */   useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
/* harmony export */   useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
/* harmony export */   useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
/* harmony export */   useDeferredValue: () => (/* binding */ _n),
/* harmony export */   useEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
/* harmony export */   useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
/* harmony export */   useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
/* harmony export */   useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
/* harmony export */   useInsertionEffect: () => (/* binding */ Sn),
/* harmony export */   useLayoutEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
/* harmony export */   useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
/* harmony export */   useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
/* harmony export */   useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
/* harmony export */   useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
/* harmony export */   useSyncExternalStore: () => (/* binding */ gn),
/* harmony export */   useTransition: () => (/* binding */ bn),
/* harmony export */   version: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}function w(n){this.props=n}function x(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:C(this.props,n)}function u(e){return this.shouldComponentUpdate=r,(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(w.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var R=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n)};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=N,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var A=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).map(t))},O={map:A,forEach:A,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray},T=preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;preact__WEBPACK_IMPORTED_MODULE_0__.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r)};var I=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)})),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function M(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(r,o)}return o.displayName="Lazy",o.__f=!0,o}function V(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n)},(D.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},D.prototype.componentWillUnmount=function(){this.t=[]},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,n.fallback);return i&&(i.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function P(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var e=this,r=n.i;e.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(P,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function z(n,e){var r=(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(j,{__v:n,i:e});return r.containerInfo=e,r}(V.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u()};e?e(o):o()}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t)})};var B="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Z=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Y=/[A-Z0-9]/g,$="undefined"!=typeof document,q=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function G(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function J(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var K=preact__WEBPACK_IMPORTED_MODULE_0__.options.event;function Q(){}function X(){return this.cancelBubble}function nn(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_0__.options.event=function(n){return K&&(n=K(n)),n.persist=Q,n.isPropagationStopped=X,n.isDefaultPrevented=nn,n.nativeEvent=n};var tn,en={enumerable:!1,configurable:!0,get:function(){return this.class}},rn=preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||$&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||q(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":Z.test(o)?o=l:-1===e.indexOf("-")&&H.test(o)?o=o.replace(Y,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",en)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u}(n),n.$$typeof=B,rn&&rn(n)};var un=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){un&&un(n),tn=n.__c};var on=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed;preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(n){on&&on(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),tn=null};var ln={ReactCurrentDispatcher:{current:{readContext:function(n){return tn.__n[n.__c].props.value}}}},cn="17.0.2";function fn(n){return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null,n)}function an(n){return!!n&&n.$$typeof===B}function sn(n){return an(n)?preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null,arguments):n}function hn(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,n),!0)}function vn(n){return n&&(n.base||1===n.nodeType&&n)||null}var dn=function(n,t){return n(t)},pn=function(n,t){return n(t)},mn=preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;function yn(n){n()}function _n(n){return n}function bn(){return[!1,yn]}var Sn=preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;function gn(n,t){var e=t(),r=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({h:{__:e,v:t}}),u=r[0].h,o=r[1];return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){u.__=e,u.v=t,E(u.__,t())||o({h:u})},[n,e,t]),(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){return E(u.__,u.v())||o({h:u}),n(function(){E(u.__,u.v())||o({h:u})})},[n]),e}var Cn={useState:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,useId:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,useInsertionEffect:Sn,useTransition:bn,useDeferredValue:_n,useSyncExternalStore:gn,startTransition:yn,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,version:"17.0.2",Children:O,render:G,hydrate:J,unmountComponentAtNode:hn,createPortal:z,createElement:preact__WEBPACK_IMPORTED_MODULE_0__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_0__.createContext,createFactory:fn,cloneElement:sn,createRef:preact__WEBPACK_IMPORTED_MODULE_0__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,isValidElement:an,findDOMNode:vn,Component:preact__WEBPACK_IMPORTED_MODULE_0__.Component,PureComponent:w,memo:x,forwardRef:k,flushSync:pn,unstable_batchedUpdates:dn,StrictMode:mn,Suspense:D,SuspenseList:V,lazy:M,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ln};
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ b),
/* harmony export */   Fragment: () => (/* binding */ k),
/* harmony export */   cloneElement: () => (/* binding */ F),
/* harmony export */   createContext: () => (/* binding */ G),
/* harmony export */   createElement: () => (/* binding */ y),
/* harmony export */   createRef: () => (/* binding */ _),
/* harmony export */   h: () => (/* binding */ y),
/* harmony export */   hydrate: () => (/* binding */ E),
/* harmony export */   isValidElement: () => (/* binding */ i),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ D),
/* harmony export */   toChildArray: () => (/* binding */ S)
/* harmony export */ });
var n,l,u,i,t,o,r,f,e,c={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function h(n,l){for(var u in l)n[u]=l[u];return n}function p(n){var l=n.parentNode;l&&l.removeChild(n)}function y(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d(l,f,t,o,null)}function d(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function _(){return{current:null}}function k(n){return n.children}function b(n,l){this.props=n,this.context=l}function g(n,l){if(null==l)return n.__?g(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?g(n):null}function m(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m(n)}}function w(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!x.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(x)}function x(){var n,l,u,i,o,r,e,c;for(t.sort(f);n=t.shift();)n.__d&&(l=t.length,i=void 0,o=void 0,e=(r=(u=n).__v).__e,(c=u.__P)&&(i=[],(o=h({},r)).__v=r.__v+1,L(c,r,o,u.__n,void 0!==c.ownerSVGElement,null!=r.__h?[e]:null,i,null==e?g(r):e,r.__h),M(i,r),r.__e!=e&&m(r)),t.length>l&&t.sort(f));x.__r=0}function P(n,l,u,i,t,o,r,f,e,a){var h,p,y,_,b,m,w,x=i&&i.__k||s,P=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _||"function"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?d(null,_,null,null,_):v(_)?d(k,{children:_},null,null,null):_.__b>0?d(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(y=x[h])||y&&_.key==y.key&&_.type===y.type)x[h]=void 0;else for(p=0;p<P;p++){if((y=x[p])&&_.key==y.key&&_.type===y.type){x[p]=void 0;break}y=null}L(n,_,y=y||c,t,o,r,f,e,a),b=_.__e,(p=_.ref)&&y.ref!=p&&(w||(w=[]),y.ref&&w.push(y.ref,null,_),w.push(p,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===y.__k?_.__d=e=C(_,e,n):e=$(n,_,y,x,b,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=g(y))}for(u.__e=m,h=P;h--;)null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=A(i).nextSibling),q(x[h],x[h]));if(w)for(h=0;h<w.length;h++)O(w[h],w[++h],w[++h])}function C(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?C(i,l,u):$(u,i,i,t,i.__e,l));return l}function S(n,l){return l=l||[],null==n||"boolean"==typeof n||(v(n)?n.some(function(n){S(n,l)}):l.push(n)),l}function $(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function A(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=A(u)))return i;return null}function H(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||T(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||T(n,o,l[o],u[o],i)}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a.test(l)?u:u+"px"}function T(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||I(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||I(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?z:j,o):n.removeEventListener(l,o?z:j,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u))}}function j(n){return this.l[n.type+!1](l.event?l.event(n):n)}function z(n){return this.l[n.type+!0](l.event?l.event(n):n)}function L(n,u,i,t,o,r,f,e,c){var s,a,p,y,d,_,g,m,w,x,C,S,$,A,H,I=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof I){if(m=u.props,w=(s=I.contextType)&&t[s.__c],x=s?w?w.props.value:s.__:t,i.__c?g=(a=u.__c=i.__c).__=a.__E:("prototype"in I&&I.prototype.render?u.__c=a=new I(m,x):(u.__c=a=new b(m,x),a.constructor=I,a.render=B),w&&w.sub(a),a.props=m,a.state||(a.state={}),a.context=x,a.__n=t,p=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=I.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h({},a.__s)),h(a.__s,I.getDerivedStateFromProps(m,a.__s))),y=a.props,d=a.state,a.__v=u,p)null==I.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==I.getDerivedStateFromProps&&m!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(m,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(m,a.__s,x)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=m,a.state=a.__s,a.__d=!1),a.__e=!1,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),C=0;C<a._sb.length;C++)a.__h.push(a._sb[C]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(m,a.__s,x),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,d,_)})}if(a.context=x,a.props=m,a.__P=n,S=l.__r,$=0,"prototype"in I&&I.prototype.render){for(a.state=a.__s,a.__d=!1,S&&S(u),s=a.render(a.props,a.state,a.context),A=0;A<a._sb.length;A++)a.__h.push(a._sb[A]);a._sb=[]}else do{a.__d=!1,S&&S(u),s=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++$<25);a.state=a.__s,null!=a.getChildContext&&(t=h(h({},t),a.getChildContext())),p||null==a.getSnapshotBeforeUpdate||(_=a.getSnapshotBeforeUpdate(y,d)),P(n,v(H=null!=s&&s.type===k&&null==s.key?s.props.children:s)?H:[H],u,i,t,o,r,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=N(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function M(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function N(l,u,i,t,o,r,f,e){var s,a,h,y=i.props,d=u.props,_=u.type,k=0;if("svg"===_&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!_&&(_?s.localName===_:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===_)return document.createTextNode(d);l=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),r=null,e=!1}if(null===_)y===d||e&&l.data===d||(l.data=d);else{if(r=r&&n.call(l.childNodes),a=(y=i.props||c).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!e){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""))}if(H(l,d,y,o,e),h)u.__k=[];else if(P(l,v(k=u.props.children)?k:[k],u,i,t,o&&"foreignObject"!==_,r,f,r?r[0]:i.__k&&g(i,0),e),null!=r)for(k=r.length;k--;)null!=r[k]&&p(r[k]);e||("value"in d&&void 0!==(k=d.value)&&(k!==l.value||"progress"===_&&!k||"option"===_&&k!==y.value)&&T(l,"value",k,y.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==l.checked&&T(l,"checked",k,y.checked,!1))}return l}function O(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function q(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||O(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null,n.__c=void 0}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&q(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||p(n.__e),n.__=n.__e=n.__d=void 0}function B(n,l,u){return this.constructor(n,u)}function D(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],L(i,u=(!o&&t||i).__k=y(k,null,[u]),r||c,c,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),M(f,u)}function E(n,l){D(n,l,E)}function F(l,u,i){var t,o,r,f,e=h({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?t=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):i),d(l.type,e,t||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+e++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,w(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},b.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof n&&(n=n(h({},u),this.props)),n&&h(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w(this))},b.prototype.render=k,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},x.__r=0,e=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ T),
/* harmony export */   useContext: () => (/* binding */ q),
/* harmony export */   useDebugValue: () => (/* binding */ x),
/* harmony export */   useEffect: () => (/* binding */ p),
/* harmony export */   useErrorBoundary: () => (/* binding */ P),
/* harmony export */   useId: () => (/* binding */ V),
/* harmony export */   useImperativeHandle: () => (/* binding */ A),
/* harmony export */   useLayoutEffect: () => (/* binding */ y),
/* harmony export */   useMemo: () => (/* binding */ F),
/* harmony export */   useReducer: () => (/* binding */ s),
/* harmony export */   useRef: () => (/* binding */ _),
/* harmony export */   useState: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/dist/preact.module.js");
var t,r,u,i,o=0,f=[],c=[],e=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,l=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,m=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function d(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o=1,s(B,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},r.shouldComponentUpdate=f}return o.__N||o.__}function p(u,i){var o=d(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o))}function y(u,i){var o=d(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o))}function _(n){return o=5,F(function(){return{current:n}},[])}function A(n,t,r){o=6,y(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function q(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function x(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r?r(t):t)}function P(n){var u=d(t++,10),i=h();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function V(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[]}catch(r){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){r=null,e&&e(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[],t=0)),u=r},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((i=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c})),u=r=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return!n.__||w(n)})}catch(u){r.some(function(n){n.__h&&(n.__h=[])}),r=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),l&&l(t,r)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n)}catch(n){r=n}}),u.__H=void 0,r&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,u.__v))};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r))}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function w(n){var t=r;n.__c=n.__(),r=t}function z(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   jsx: () => (/* binding */ o),
/* harmony export */   jsxDEV: () => (/* binding */ o),
/* harmony export */   jsxs: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/dist/preact.module.js");
var _=0;function o(o,e,n,t,f,l){var s,u,a={};for(u in e)"ref"==u?s=e[u]:a[u]=e[u];var i={type:o,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_,__source:f,__self:l};if("function"==typeof o&&(s=o.defaultProps))for(u in s)void 0===a[u]&&(a[u]=s[u]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(i),i}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__("./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__("./node_modules/react-is/index.js");
var assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__("./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__("./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__("./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__("./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__("./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/main.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _sites_nexus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/nexus.ts");
/* harmony import */ var _shared_services_userPrefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/shared/services/userPrefs/index.ts");
/* harmony import */ var _shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/shared/utils/domUtil.ts");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _shared_components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/shared/components/App.tsx");







try {
    const browserContext = new trophyutil__WEBPACK_IMPORTED_MODULE_1__.BrowserContext({ window });
    const siteName = (0,_sites_nexus__WEBPACK_IMPORTED_MODULE_2__.getSiteName)(browserContext.url.hostname);
    if (!siteName) {
        throw new Error(`Script not authorized to run on ${browserContext.url.hostname}`);
    }
    const userPrefs = await _shared_services_userPrefs__WEBPACK_IMPORTED_MODULE_3__.UserSettings.load();
    const nexus = new _sites_nexus__WEBPACK_IMPORTED_MODULE_2__["default"]({ browserContext, siteName, userPrefs });
    const mountNode = document.createElement('div');
    const body = await (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_4__.waitForEl)();
    body.appendChild(mountNode);
    (0,preact__WEBPACK_IMPORTED_MODULE_5__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_App__WEBPACK_IMPORTED_MODULE_6__.App, { nexus: nexus }), mountNode);
}
catch (err) {
    console.error(err);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/shared/components/App.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _sites_PSNPForum_nexus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sites/PSNPForum/nexus.ts");
/* harmony import */ var _sites_TTA_nexus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/TTA/nexus.ts");
/* harmony import */ var _sites_PSNP_components_PSNP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/components/PSNP.tsx");
/* harmony import */ var _sites_PSNP_nexus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sites/PSNP/nexus.ts");
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _sites_PSNPForum_PSNPForum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/sites/PSNPForum/PSNPForum.tsx");
/* harmony import */ var _sites_TTA_TTA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/sites/TTA/TTA.tsx");









const App = ({ nexus }) => {
    const [siteNexus, setSiteNexus] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
        let pageType;
        if (nexus.siteName === 'PSNP') {
            pageType = (0,trophyutil__WEBPACK_IMPORTED_MODULE_5__.getPsnpPageType)(nexus.url);
            setSiteNexus(new _sites_PSNP_nexus__WEBPACK_IMPORTED_MODULE_4__.TrophyNexusPsnp(nexus, pageType));
        }
        else if (nexus.siteName === 'PSNPForum') {
            pageType = (0,trophyutil__WEBPACK_IMPORTED_MODULE_5__.getPsnpForumPageType)(nexus.url);
            setSiteNexus(new _sites_PSNPForum_nexus__WEBPACK_IMPORTED_MODULE_1__.TrophyNexusPsnpForum(nexus, pageType));
        }
        else if (nexus.siteName === 'TA' || nexus.siteName === 'TT') {
            pageType = (0,trophyutil__WEBPACK_IMPORTED_MODULE_5__.getTTAPageType)(nexus.url);
            setSiteNexus(new _sites_TTA_nexus__WEBPACK_IMPORTED_MODULE_2__.TrophyNexusTTA(nexus, pageType));
        }
        console.log(`${nexus.siteName}${pageType ? ` (${pageType})` : ''}`);
    }, []);
    unsafeWindow.nexus = siteNexus;
    if (siteNexus instanceof _sites_PSNP_nexus__WEBPACK_IMPORTED_MODULE_4__.TrophyNexusPsnp) {
        return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_sites_PSNP_components_PSNP__WEBPACK_IMPORTED_MODULE_3__.PSNP, { nexus: siteNexus });
    }
    else if (siteNexus instanceof _sites_PSNPForum_nexus__WEBPACK_IMPORTED_MODULE_1__.TrophyNexusPsnpForum) {
        return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_sites_PSNPForum_PSNPForum__WEBPACK_IMPORTED_MODULE_7__.PSNPForum, { nexus: siteNexus });
    }
    else if (siteNexus instanceof _sites_TTA_nexus__WEBPACK_IMPORTED_MODULE_2__.TrophyNexusTTA) {
        return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_sites_TTA_TTA__WEBPACK_IMPORTED_MODULE_8__.TTA, { nexus: siteNexus });
    }
    return null;
};


/***/ }),

/***/ "./src/shared/components/ModalBase.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _css_ModalBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/shared/components/css/ModalBase.ts");


const ModalBase = ({ isOpen, title, closeBtn, extraButtons = [], children }) => {
    if (!isOpen) {
        return null;
    }
    const buttons = [...extraButtons, closeBtn];
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: _css_ModalBase__WEBPACK_IMPORTED_MODULE_1__.backgroundStyle, id: "tn-modal-bg" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: _css_ModalBase__WEBPACK_IMPORTED_MODULE_1__.modalStyle, id: "tn-modal", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { id: "tn-modal-content", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { style: { textAlign: 'center', marginBottom: '2rem' }, children: title }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: children }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tn-button", style: {
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '2rem',
                            }, children: buttons.map(({ name, attrs }, index) => {
                                return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { ...attrs, style: {
                                        marginTop: '20px',
                                        marginBottom: '10px',
                                        marginRight: index !== buttons.length - 1 ? '50px' : undefined,
                                    }, children: name }));
                            }) })] }) })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalBase);


/***/ }),

/***/ "./src/shared/components/ProgressBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _css_progressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/shared/components/css/progressBar.ts");


const colorPresetMap = {
    game_completion: 'rgb(249, 249, 249)',
};
const ProgressBar = ({ progress, caption, color, colorPreset, children }) => {
    const barColor = colorPreset ? colorPresetMap[colorPreset] : color;
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: _css_progressBar__WEBPACK_IMPORTED_MODULE_1__.container, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { ..._css_progressBar__WEBPACK_IMPORTED_MODULE_1__.bar(barColor), width: `${progress * 100}%` }, children: children }) }), !!caption && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: _css_progressBar__WEBPACK_IMPORTED_MODULE_1__.caption, children: caption })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);


/***/ }),

/***/ "./src/shared/components/css/ModalBase.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundStyle: () => (/* binding */ backgroundStyle),
/* harmony export */   modalStyle: () => (/* binding */ modalStyle)
/* harmony export */ });
const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
};
const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    minWidth: '30vw',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    backgroundColor: '#fff',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
};


/***/ }),

/***/ "./src/shared/components/css/progressBar.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bar: () => (/* binding */ bar),
/* harmony export */   caption: () => (/* binding */ caption),
/* harmony export */   container: () => (/* binding */ container)
/* harmony export */ });
const container = {
    width: '100%',
    height: '20px',
    backgroundColor: '#ddd',
    borderRadius: '4px',
    marginTop: '20px',
    marginBottom: '5px',
    border: '1px solid #ccc',
};
const bar = (color = 'rgb(51, 98, 145)') => ({
    height: '100%',
    backgroundColor: color,
    borderRadius: '4px',
    color: 'rgb(249, 249, 249)',
    fontWeight: 600,
    textAlign: 'center',
});
const caption = {
    fontStyle: 'italic',
    textAlign: 'center',
};


/***/ }),

/***/ "./src/shared/services/mongoApi/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findItems: () => (/* binding */ findItems)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/shared/services/mongoApi/types.ts");

async function findItems({ collection, limit, offset, sort, filter, projection }) {
    const apiReq = {
        endpoint: 'find',
        collection,
        limit,
        offset,
        sort: sort ?? {
            _id: 1,
        },
        filter: filter ?? {},
        projection: projection ?? {},
    };
    if (collection === 'games' && !projection) {
        apiReq.projection = { metaData: 0, trophyGroups: 0 };
    }
    const req = {
        url: _types__WEBPACK_IMPORTED_MODULE_0__.PROXY_URL,
        method: 'POST',
        data: JSON.stringify(apiReq),
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
    };
    const response = await GM.xmlHttpRequest(req);
    const res = response.response;
    const hasDocumentsArray = res && typeof res === 'object' && 'documents' in res;
    const documents = hasDocumentsArray && Array.isArray(res.documents) ? res.documents : [];
    return documents;
}


/***/ }),

/***/ "./src/shared/services/mongoApi/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROXY_URL: () => (/* binding */ PROXY_URL)
/* harmony export */ });
const PROXY_URL = `https://us-central1-trophynexus.cloudfunctions.net/proxyScraper`;


/***/ }),

/***/ "./src/shared/services/userPrefs/defaults.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DefaultUserSettings = {
    psnId: '',
    PSNP: {
        isFlagged: false,
        lastUpdatedUserGames: 0,
        lastUpdatedAllGames: 0,
        lastUpdatedAllSeries: 0,
        suppressCacheModal: false,
        bools: {
            renderSeriesTable: {
                value: true,
                name: 'Render Series Table',
                desc: `Replaces the series catalog with a powerful custom table`,
                category: 'general',
            },
            renderGamesTable: {
                value: false,
                name: 'Render Games Table',
                desc: `Replaces the games catalog with a powerful custom table`,
                category: 'general',
            },
            rarestTrophiesUnique: {
                value: true,
                name: 'Unique rarest trophies',
                desc: `Forces 'Rarest Trophies' to show only one trophy per game.`,
                category: 'general',
            },
            hideFlagBlock: {
                value: true,
                name: 'Hide flag block',
                desc: 'Hides red flag block from profile',
                category: 'flagged',
            },
            platifyComplation: {
                value: false,
                name: `Complation`,
                desc: `Platted games are treated as completed games, like when viewing a game series stage.`,
                category: 'platify',
            },
            platifySeriesHideNonplats: {
                value: false,
                name: '[Series] Hide Nonplats',
                desc: 'Hides nonplats on series pages',
                category: 'platify',
            },
        },
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultUserSettings);


/***/ }),

/***/ "./src/shared/services/userPrefs/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSettings: () => (/* binding */ UserSettings)
/* harmony export */ });
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/shared/services/userPrefs/defaults.ts");


class UserSettings {
    static KEY = 'tn-prefs';
    psnId;
    PSNP;
    constructor(prefs = {}) {
        const vals = this.extractValuesFromPrefBools({
            ..._defaults__WEBPACK_IMPORTED_MODULE_1__["default"].PSNP.bools,
            ...(prefs.PSNP?.bools ?? {}),
        });
        console.log(vals);
        this.psnId = prefs.psnId ?? _defaults__WEBPACK_IMPORTED_MODULE_1__["default"].psnId;
        this.PSNP = {
            ..._defaults__WEBPACK_IMPORTED_MODULE_1__["default"].PSNP,
            ...prefs.PSNP,
            bools: {
                ..._defaults__WEBPACK_IMPORTED_MODULE_1__["default"].PSNP.bools,
                ...(prefs.PSNP?.bools ?? {}),
            },
        };
    }
    async save() {
        await GM.setValue(UserSettings.KEY, JSON.stringify(this));
    }
    extractValuesFromPrefBools(bools) {
        const valuesOnly = Object.fromEntries(Object.entries(bools).map(([key, pref]) => [key, { value: pref.value }]));
        return valuesOnly;
    }
    async update(updateObj) {
        const updatedPrefs = {
            ...this,
            ...updateObj,
            PSNP: {
                ...this.PSNP,
                ...updateObj.PSNP,
                bools: {
                    ...this.PSNP.bools,
                    ...updateObj.PSNP?.bools,
                },
            },
        };
        Object.assign(this, updatedPrefs);
        await this.save();
    }
    static async load() {
        const loadedData = JSON.parse(await GM.getValue(UserSettings.KEY, '{}'));
        if (!isUserSettings(loadedData)) {
            console.info(`[TrophyNexus] No user prefs detected; using defaults.`);
        }
        const updatedData = (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.pruneExtraneousProperties)(_defaults__WEBPACK_IMPORTED_MODULE_1__["default"], loadedData) ?? {};
        return new UserSettings(updatedData);
    }
}
function isUserSettings(obj) {
    const keys = ['PSNP', 'psnId'];
    return (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.isStandardObj)(obj) && keys.every(key => key in obj);
}


/***/ }),

/***/ "./src/shared/utils/decorators.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logMethodSpeed: () => (/* binding */ logMethodSpeed)
/* harmony export */ });
function logMethodSpeed(headMessage = '⚠️') {
    return function actualDecorator(originalMethod, context) {
        const methodName = String(context.name);
        function replacementMethod(...args) {
            const start = performance.now();
            const result = originalMethod.call(this, ...args);
            const end = performance.now();
            const elapsedMilliseconds = end - start;
            const msg = `${headMessage} Executed method '${methodName}' in ${elapsedMilliseconds.toFixed(2)} ms`;
            console.log('%c' + msg, 'color:Orange');
            return result;
        }
        return replacementMethod;
    };
}


/***/ }),

/***/ "./src/shared/utils/domUtil.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newElement: () => (/* binding */ newElement),
/* harmony export */   waitForEl: () => (/* binding */ waitForEl)
/* harmony export */ });
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");

async function waitForEl(selector, timeout) {
    while (!document.body) {
        await (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.sleep)(10);
    }
    return new Promise(function (resolve, reject) {
        if (selector) {
            const targetElement = document.querySelector(selector);
            if (targetElement) {
                resolve(targetElement);
            }
        }
        else {
            resolve(document.body);
        }
        const observer = new MutationObserver(function (mutations) {
            const targetElement = document.querySelector(selector);
            if (targetElement) {
                resolve(targetElement);
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
        if (timeout) {
            setTimeout(() => {
                observer.disconnect();
                reject(new Error(`Timed out waiting for element: ${selector}`));
            }, timeout);
        }
    });
}
function newElement(tagname, attributes, ...children) {
    const el = document.createElement(tagname);
    for (const [key, value] of Object.entries(attributes)) {
        el.setAttribute(key, value);
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            el.append(child);
        }
        else {
            el.append(child);
        }
    });
    return el;
}


/***/ }),

/***/ "./src/shared/utils/fetch.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchDoc: () => (/* binding */ fetchDoc)
/* harmony export */ });
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");

async function fetchDoc(url, opts, maxRetries = 3, retryDelay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url, opts);
            if (!response.ok) {
                if (attempt < maxRetries) {
                    console.warn(`Rate limit exceeded, retrying... Attempt ${attempt} of ${maxRetries}`);
                    await (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.sleep)(retryDelay * Math.pow(2, attempt - 1));
                    continue;
                }
                else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            }
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const responseWithDoc = { ...response, doc };
            return responseWithDoc;
        }
        catch (error) {
            if (attempt === maxRetries) {
                console.error('Max retries reached. Fetch failed:', error);
                throw error;
            }
        }
    }
    throw new Error('Failed to fetch document after retries');
}


/***/ }),

/***/ "./src/shared/utils/getProgress.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProgressMetrics: () => (/* binding */ getProgressMetrics)
/* harmony export */ });
function getProgressMetrics(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return { a: -1, b: 0, decimal: 0, percentage: 0 };
    }
    const decimal = +(a / b).toFixed(2);
    const percentage = +(decimal * 100).toFixed(2);
    return { a, b, decimal, percentage };
}


/***/ }),

/***/ "./src/sites/PSNPForum/PSNPForum.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PSNPForum: () => (/* binding */ PSNPForum)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _features_injectShortcutToTrophyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNPForum/features/injectShortcutToTrophyList.ts");



const PSNPForum = ({ children, nexus }) => {
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        (async () => {
            (0,_features_injectShortcutToTrophyList__WEBPACK_IMPORTED_MODULE_2__["default"])(nexus);
        })();
    }, []);
    return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};


/***/ }),

/***/ "./src/sites/PSNPForum/features/injectShortcutToTrophyList.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ injectShortcutToTrophyList)
/* harmony export */ });
/* harmony import */ var _shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/shared/utils/domUtil.ts");
/* harmony import */ var _shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/shared/utils/fetch.ts");


async function injectShortcutToTrophyList(nexus) {
    const doc = nexus.doc;
    (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)('ul[itemscope]').then(nav => {
        const breadcrumbText = nav.querySelector(`li:nth-child(3) > a > span`)?.textContent?.trim();
        if (!breadcrumbText || breadcrumbText !== 'Game Forums') {
            return;
        }
        const urlToGameSubforum = nav.querySelector(`li:nth-child(5) a`)?.getAttribute(`href`);
        if (!urlToGameSubforum) {
            console.error(`Failed to find game's subforum URL`);
            return;
        }
        const placeholderTrophyIcon = (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.newElement)(`li`, { itemprop: `itemListElement`, itemscope: `` }, (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.newElement)(`a`, { id: `trophylist` }, '🏆', (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.newElement)(`i`, { class: `fa fa-angle-right` })));
        nav.querySelector(`li:nth-child(5)`)?.before(placeholderTrophyIcon);
        const trophyIconBtn = doc.querySelector('#trophylist');
        if (!trophyIconBtn) {
            console.error(`Failed to locate trophyIconBtn`);
            return;
        }
        (0,_shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchDoc)(urlToGameSubforum).then(res => {
            const urlToTrophyList = res.doc.querySelector(`div.ipsType_richText.ipsType_normal > a`)?.getAttribute(`href`);
            if (!urlToTrophyList) {
                trophyIconBtn.remove();
                return;
            }
            trophyIconBtn.setAttribute(`href`, urlToTrophyList);
        });
    });
}


/***/ }),

/***/ "./src/sites/PSNPForum/nexus.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrophyNexusPsnpForum: () => (/* binding */ TrophyNexusPsnpForum)
/* harmony export */ });
/* harmony import */ var _nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sites/nexus.ts");

class TrophyNexusPsnpForum extends _nexus__WEBPACK_IMPORTED_MODULE_0__["default"] {
    pageType;
    constructor(nexus, pageType) {
        super(nexus);
        this.pageType = pageType;
    }
}


/***/ }),

/***/ "./src/sites/PSNP/components/ContextMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenu: () => (/* binding */ ContextMenu)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faGear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faGear.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _css_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/components/css/FloatingButton.ts");





const ContextMenu = props => {
    const [hovered, setHovered] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const renderPageContextButtons = () => {
        const buttons = [];
        if (props.contextButtons?.length) {
            buttons.push(...props.contextButtons.map(config => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: _css_FloatingButton__WEBPACK_IMPORTED_MODULE_3__.contextMenuBtnContextual(hovered), ...config.attrs, children: config.name }))));
        }
        return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [...buttons] });
    };
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: _css_FloatingButton__WEBPACK_IMPORTED_MODULE_3__.contextMenuOuter, onMouseLeave: () => setHovered(false), children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: _css_FloatingButton__WEBPACK_IMPORTED_MODULE_3__.contextMenuInner(hovered), children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { onClick: props.onClick, style: _css_FloatingButton__WEBPACK_IMPORTED_MODULE_3__.contextMenuBtnSettings(hovered), id: "tn-settings", onMouseEnter: () => setHovered(true), children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons_faGear__WEBPACK_IMPORTED_MODULE_4__.faGear }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: _css_FloatingButton__WEBPACK_IMPORTED_MODULE_3__.contextMenuTextWrapper(hovered), children: "TrophyNexus" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: _css_FloatingButton__WEBPACK_IMPORTED_MODULE_3__.contextMenuContextBtns(hovered), children: renderPageContextButtons() })] }) }) }));
};


/***/ }),

/***/ "./src/sites/PSNP/components/ModalCache.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalCache: () => (/* binding */ ModalCache)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _shared_components_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/shared/components/ProgressBar.tsx");
/* harmony import */ var _shared_components_ModalBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/shared/components/ModalBase.tsx");
/* harmony import */ var _shared_utils_getProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/shared/utils/getProgress.ts");





const ModalCache = ({ baseGenerator, userGenerator, isOpen, title, nexus, onClose, children, }) => {
    const [baseProgress, setBaseProgress] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(() => (0,_shared_utils_getProgress__WEBPACK_IMPORTED_MODULE_4__.getProgressMetrics)());
    const [userProgress, setUserProgress] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(() => (0,_shared_utils_getProgress__WEBPACK_IMPORTED_MODULE_4__.getProgressMetrics)());
    const [operationInProgress, setOperationInProgress] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [operationFinished, setOperationFinished] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClose = () => {
        if (!operationInProgress) {
            onClose();
            if (!operationFinished) {
                nexus.userPrefs.PSNP.suppressCacheModal = true;
                nexus.userPrefs.save();
            }
        }
    };
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (isOpen && operationInProgress) {
            window.addEventListener('beforeunload', handleBeforeUnload);
            updateBaseProgress().then(() => {
                updateUserProgress().then(() => {
                    window.removeEventListener('beforeunload', handleBeforeUnload);
                    setOperationFinished(true);
                    setOperationInProgress(false);
                });
            });
        }
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [isOpen, operationInProgress]);
    async function updateBaseProgress() {
        for await (const p of baseGenerator()) {
            setBaseProgress(p);
        }
    }
    async function updateUserProgress() {
        if (!userGenerator)
            return;
        for await (const p of userGenerator()) {
            setUserProgress(p);
        }
    }
    function handleBeforeUnload(event) {
        event.preventDefault();
        event.returnValue = 'Please wait until active process is finished.';
    }
    const progString = (prog, itemName) => {
        const isValid = prog.b > 0 && prog.a >= 0;
        const name = itemName ? (itemName.endsWith('s') ? ` ${itemName}` : ` ${itemName}s`) : '';
        return isValid ? `(${prog.a}/~${prog.b}${name})` : '';
    };
    const captionBase = `Fetching all games and series ${progString(baseProgress)}`;
    const captionUser = `Caching user games ${progString(userProgress, 'page')}`;
    const operationStarted = baseProgress.a >= 0 || userProgress.a >= 0;
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_components_ModalBase__WEBPACK_IMPORTED_MODULE_3__["default"], { isOpen: isOpen, title: title, closeBtn: { name: 'Close', attrs: { onClick: handleClose, disabled: operationInProgress } }, extraButtons: [
            {
                name: 'Begin',
                attrs: {
                    onClick: e => {
                        setOperationInProgress(true);
                        setBaseProgress({ a: 0, b: 0, decimal: 0, percentage: 0 });
                    },
                    disabled: operationInProgress || operationFinished,
                },
            },
        ], children: [children, operationStarted && ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_components_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], { progress: baseProgress.decimal, caption: captionBase, children: [baseProgress.percentage, "%"] })), operationStarted && !!userGenerator && baseProgress.percentage === 100 && ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_components_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], { progress: userProgress.decimal, caption: captionUser, children: [userProgress.percentage, "%"] }))] }));
};


/***/ }),

/***/ "./src/sites/PSNP/components/ModalUserPrefs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalUserPrefs: () => (/* binding */ ModalUserPrefs)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _css_ModalUserPrefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/components/css/ModalUserPrefs.ts");
/* harmony import */ var _css_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/components/css/tooltip.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircleInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faCircleInfo.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");






const ModalUserPrefs = ({ nexus, onClose }) => {
    const [activeTab, setActiveTab] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('General');
    const handleCheckboxChange = (key) => async (e) => {
        const target = e.target;
        nexus.userPrefs.PSNP.bools[key].value = target.checked;
        await nexus.userPrefs.save();
    };
    const renderBoolSection = (title, bools) => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { style: { textAlign: 'center' }, children: title }), Object.entries(bools).map(([key, pref]) => {
                const [isHovered, setIsHovered] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
                return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: _css_ModalUserPrefs__WEBPACK_IMPORTED_MODULE_2__.settingRowStyle, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: _css_ModalUserPrefs__WEBPACK_IMPORTED_MODULE_2__.inputLabelContainerStyle, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: pref.value, onChange: handleCheckboxChange(key), style: _css_ModalUserPrefs__WEBPACK_IMPORTED_MODULE_2__.checkboxStyle }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: pref.name }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { ..._css_tooltip__WEBPACK_IMPORTED_MODULE_3__.tooltipStyle, ..._css_ModalUserPrefs__WEBPACK_IMPORTED_MODULE_2__.iconStyle }, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons_faCircleInfo__WEBPACK_IMPORTED_MODULE_5__.faCircleInfo }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: isHovered ? { ..._css_tooltip__WEBPACK_IMPORTED_MODULE_3__.tooltipTextStyle, ..._css_tooltip__WEBPACK_IMPORTED_MODULE_3__.tooltipHoverStyle } : _css_tooltip__WEBPACK_IMPORTED_MODULE_3__.tooltipTextStyle, children: pref.desc })] })] }) }, key));
            })] }));
    const renderTab = (title) => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => setActiveTab(title), style: _css_ModalUserPrefs__WEBPACK_IMPORTED_MODULE_2__.tabButtonStyle(activeTab === title), children: title }));
    const renderTabs = () => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: _css_ModalUserPrefs__WEBPACK_IMPORTED_MODULE_2__.tabsContainerStyle, children: [renderTab('General'), renderTab('Platify'), nexus.userPrefs.PSNP.isFlagged && renderTab('Flagged')] }));
    const renderContent = () => {
        const generalBools = {};
        const platifyBools = {};
        const flaggedBools = {};
        Object.entries(nexus.userPrefs.PSNP.bools).forEach(([key, pref]) => {
            if (pref.category === 'general')
                generalBools[key] = pref;
            if (pref.category === 'platify')
                platifyBools[key] = pref;
            if (pref.category === 'flagged' && nexus.userPrefs.PSNP.isFlagged)
                flaggedBools[key] = pref;
        });
        switch (activeTab) {
            case 'General':
                return renderBoolSection('General Settings', generalBools);
            case 'Platify':
                return renderBoolSection('Platify Settings', platifyBools);
            case 'Flagged':
                return renderBoolSection('Flagged Settings', flaggedBools);
            default:
                return null;
        }
    };
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "overlay", style: _css_ModalUserPrefs__WEBPACK_IMPORTED_MODULE_2__.overlayStyle, onClick: onClose }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "user-prefs-menu", style: _css_ModalUserPrefs__WEBPACK_IMPORTED_MODULE_2__.userPrefsMenuStyle, children: [renderTabs(), renderContent()] })] }));
};


/***/ }),

/***/ "./src/sites/PSNP/components/PSNP.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PSNP: () => (/* binding */ PSNP)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/components/ContextMenu.tsx");
/* harmony import */ var _ModalUserPrefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/components/ModalUserPrefs.tsx");
/* harmony import */ var _pages_seriesCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sites/PSNP/pages/seriesCatalog.tsx");
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _ModalCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/sites/PSNP/components/ModalCache.tsx");
/* harmony import */ var _services_db_updateUserGames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/sites/PSNP/services/db/updateUserGames.ts");
/* harmony import */ var _services_DOM_dependentDOM__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/sites/PSNP/services/DOM/dependentDOM.ts");
/* harmony import */ var _services_DOM_independentDOM__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/sites/PSNP/services/DOM/independentDOM.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faGear__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faGear.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _services_db_updateAllFromServer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/sites/PSNP/services/db/updateAllFromServer.ts");
/* harmony import */ var _services_db_updateAllSeriesLocally__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/sites/PSNP/services/db/updateAllSeriesLocally.ts");
/* harmony import */ var _services_db_updateAllGamesLocally__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/sites/PSNP/services/db/updateAllGamesLocally.ts");
/* harmony import */ var _pages_gamesCatalog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/sites/PSNP/pages/gamesCatalog.tsx");

















const PSNP = ({ children, nexus }) => {
    const [settingsMenuOpen, setSettingsMenuOpen] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [cacheModalOpen, setCacheModalOpen] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const updateAllGamesAndSeries = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => (0,_services_db_updateAllFromServer__WEBPACK_IMPORTED_MODULE_11__.populateIDBFromServer)(nexus), [nexus]);
    const updateUserGames = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => (0,_services_db_updateUserGames__WEBPACK_IMPORTED_MODULE_7__.updateUserGames)(nexus), [nexus]);
    const needToPopulateUserProgress = !nexus.guest && nexus.userPrefs.PSNP.lastUpdatedUserGames === 0;
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        (async () => {
            (0,_services_DOM_independentDOM__WEBPACK_IMPORTED_MODULE_9__["default"])(nexus);
            (0,_services_DOM_dependentDOM__WEBPACK_IMPORTED_MODULE_8__.ensurePsnIdIsSet)(nexus).then(() => {
                (0,_services_DOM_dependentDOM__WEBPACK_IMPORTED_MODULE_8__.setupDependentDOM)(nexus);
                (0,_services_db_updateUserGames__WEBPACK_IMPORTED_MODULE_7__.updateUserGamesPassively)(nexus);
                setCacheModalOpen(nexus.needToInitCache && !nexus.userPrefs.PSNP.suppressCacheModal);
                if (!nexus.needToInitCache) {
                    Promise.all([(0,_services_db_updateAllSeriesLocally__WEBPACK_IMPORTED_MODULE_12__.updateAllSeriesLocally)(nexus), (0,_services_db_updateAllGamesLocally__WEBPACK_IMPORTED_MODULE_13__.updateAllGamesLocally)(nexus)]).then(([_games]) => {
                        if (nexus.pageType === trophyutil__WEBPACK_IMPORTED_MODULE_5__.PsnpPageType.SeriesCatalog) {
                            (0,_pages_seriesCatalog__WEBPACK_IMPORTED_MODULE_4__.initSeriesCatalog)(nexus);
                        }
                        else if (nexus.pageType === trophyutil__WEBPACK_IMPORTED_MODULE_5__.PsnpPageType.Games) {
                            (0,_pages_gamesCatalog__WEBPACK_IMPORTED_MODULE_14__.initGamesCatalog)(nexus);
                        }
                    });
                }
            });
        })();
    }, []);
    const toggleSettingsModal = () => {
        setSettingsMenuOpen(!settingsMenuOpen);
    };
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ModalCache__WEBPACK_IMPORTED_MODULE_6__.ModalCache, { nexus: nexus, isOpen: cacheModalOpen, baseGenerator: updateAllGamesAndSeries, userGenerator: needToPopulateUserProgress ? updateUserGames : undefined, title: "Initialize Local Database", onClose: () => {
                    setCacheModalOpen(false);
                }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "To enable the coolest features, you'll need to perform a one-time database initialization which should take 10-30s." }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: ["You can also do this later via the floating context menu (bottom right ", (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons_faGear__WEBPACK_IMPORTED_MODULE_15__.faGear }), ")."] })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ContextMenu__WEBPACK_IMPORTED_MODULE_2__.ContextMenu, { onClick: toggleSettingsModal, pageType: nexus.pageType, nexus: nexus, contextButtons: nexus.userPrefs.PSNP.suppressCacheModal
                    ? [
                        {
                            name: 'Init DB',
                            attrs: {
                                onClick: async (e) => {
                                    nexus.userPrefs.PSNP.suppressCacheModal = false;
                                    await nexus.userPrefs.save();
                                    setCacheModalOpen(true);
                                },
                            },
                        },
                    ]
                    : undefined }), settingsMenuOpen && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ModalUserPrefs__WEBPACK_IMPORTED_MODULE_3__.ModalUserPrefs, { nexus: nexus, onClose: toggleSettingsModal }), children] }));
};


/***/ }),

/***/ "./src/sites/PSNP/components/TrophyCount.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrophyCountRow: () => (/* binding */ TrophyCountRow)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTrophy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faTrophy.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faStar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faStar.js");
/* harmony import */ var _css_TrophyCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/components/css/TrophyCount.ts");





const TrophyCountRow = ({ entity }) => {
    const fallback = {
        bronze: 0,
        silver: 0,
        gold: 0,
        platinum: 0,
    };
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "tc-cell", style: _css_TrophyCount__WEBPACK_IMPORTED_MODULE_2__.tcCell(!!entity.userNumTrophies), children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GradeIconGroup, { tcAll: entity.trophyCount ?? fallback, tcUser: entity.userTrophyCount }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MetricIconGroup, { numTrophies: entity.numTrophies ?? 0, numPoints: entity.points ?? 0, userNumTrophies: entity.userNumTrophies, userNumPoints: entity.userPoints })] }));
};
const GradeIconGroup = ({ tcAll, tcUser }) => {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "tcGradeIconGroup", style: _css_TrophyCount__WEBPACK_IMPORTED_MODULE_2__.tcGradeIconGroup, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconCount, { iconType: "grade", grade: "platinum", total: tcAll.platinum, earned: tcUser?.platinum }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconCount, { iconType: "grade", grade: "gold", total: tcAll.gold, earned: tcUser?.gold }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconCount, { iconType: "grade", grade: "silver", total: tcAll.silver, earned: tcUser?.silver }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconCount, { iconType: "grade", grade: "bronze", total: tcAll.bronze, earned: tcUser?.bronze })] }));
};
const MetricIconGroup = ({ numTrophies, numPoints, userNumPoints, userNumTrophies }) => {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "tcMetricIconGroup", style: _css_TrophyCount__WEBPACK_IMPORTED_MODULE_2__.tcMetricIconGroup, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconCount, { iconType: "numTrophies", total: numTrophies, earned: userNumTrophies }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconCount, { iconType: "numPoints", total: numPoints, earned: userNumPoints })] }));
};
const IconCount = ({ iconType, total, grade, earned }) => {
    let iconSprite;
    if (iconType === 'grade' && grade) {
        const trophyGradeCSS = _css_TrophyCount__WEBPACK_IMPORTED_MODULE_2__.getTrophyGradeCSS(grade);
        iconSprite = ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: `icon-sprite ${grade}`, style: { ..._css_TrophyCount__WEBPACK_IMPORTED_MODULE_2__.iconCountSprite(iconType, !!earned), ...trophyGradeCSS } }));
    }
    else if (iconType === 'numTrophies') {
        iconSprite = (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons_faTrophy__WEBPACK_IMPORTED_MODULE_3__.faTrophy, style: { ..._css_TrophyCount__WEBPACK_IMPORTED_MODULE_2__.iconCountSprite(iconType, !!earned) } });
    }
    else if (iconType === 'numPoints') {
        iconSprite = (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons_faStar__WEBPACK_IMPORTED_MODULE_4__.faStar, style: { ..._css_TrophyCount__WEBPACK_IMPORTED_MODULE_2__.iconCountSprite(iconType, !!earned) } });
    }
    if (grade === 'platinum' && total === 0)
        return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: `iconCount`, style: _css_TrophyCount__WEBPACK_IMPORTED_MODULE_2__.iconCount(iconType), children: [iconSprite, !!earned && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: earned.toLocaleString() }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: earned ? { borderTop: '1px solid black' } : {}, children: total.toLocaleString() })] }));
};


/***/ }),

/***/ "./src/sites/PSNP/components/css/FloatingButton.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contextMenuBtnContextual: () => (/* binding */ contextMenuBtnContextual),
/* harmony export */   contextMenuBtnSettings: () => (/* binding */ contextMenuBtnSettings),
/* harmony export */   contextMenuContextBtns: () => (/* binding */ contextMenuContextBtns),
/* harmony export */   contextMenuInner: () => (/* binding */ contextMenuInner),
/* harmony export */   contextMenuOuter: () => (/* binding */ contextMenuOuter),
/* harmony export */   contextMenuTextWrapper: () => (/* binding */ contextMenuTextWrapper)
/* harmony export */ });
const contextMenuOuter = {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};
const contextMenuInner = (hovered) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: hovered ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
    padding: '8px',
    boxShadow: hovered ? '0 0 8px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'background-color 0.3s, box-shadow 0.3s',
});
const contextMenuBtnSettings = (hovered) => ({
    opacity: hovered ? '1' : '0.5',
    transition: 'opacity 0.3s',
    display: 'flex',
    alignItems: 'center',
    paddingRight: hovered ? '5px' : '0',
});
const contextMenuTextWrapper = (hovered) => ({
    visibility: hovered ? 'visible' : 'hidden',
    width: hovered ? 'auto' : '0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transition: 'width 0.3s, visibility 0.3s',
    marginLeft: '4px',
});
const contextMenuContextBtns = (hovered) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: hovered ? 1 : 0,
    transition: 'opacity 0.3s',
    marginTop: '4px',
});
const contextMenuBtnContextual = (hovered) => ({
    opacity: hovered ? '1' : '0.5',
    backgroundColor: '#ddd',
    padding: '5px',
    borderRadius: '3px',
    paddingRight: hovered ? '5px' : '0',
});


/***/ }),

/***/ "./src/sites/PSNP/components/css/GameRow.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outerGrid: () => (/* binding */ outerGrid)
/* harmony export */ });
const outerGrid = {
    display: 'grid',
    gridTemplateColumns: 'min-content auto',
    columnGap: '1rem',
};


/***/ }),

/***/ "./src/sites/PSNP/components/css/ModalUserPrefs.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkboxStyle: () => (/* binding */ checkboxStyle),
/* harmony export */   iconStyle: () => (/* binding */ iconStyle),
/* harmony export */   inputLabelContainerStyle: () => (/* binding */ inputLabelContainerStyle),
/* harmony export */   overlayStyle: () => (/* binding */ overlayStyle),
/* harmony export */   settingRowStyle: () => (/* binding */ settingRowStyle),
/* harmony export */   tabButtonStyle: () => (/* binding */ tabButtonStyle),
/* harmony export */   tabsContainerStyle: () => (/* binding */ tabsContainerStyle),
/* harmony export */   userPrefsMenuStyle: () => (/* binding */ userPrefsMenuStyle)
/* harmony export */ });
const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10000,
};
const userPrefsMenuStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -30vh)',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '20px',
    zIndex: 10001,
    minWidth: '20vw',
    maxWidth: '50vw',
};
const tabsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: '1px solid #ccc',
    marginBottom: '10px',
};
const tabButtonStyle = (isActive) => ({
    backgroundColor: isActive ? '#f0f0f0' : 'transparent',
    padding: '8px',
    border: 'none',
    cursor: 'pointer',
});
const settingRowStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
};
const inputLabelContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    marginRight: '10px',
};
const checkboxStyle = {
    marginRight: '5px',
};
const iconStyle = {
    marginLeft: '10px',
};


/***/ }),

/***/ "./src/sites/PSNP/components/css/SeriesRow.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fractionInner: () => (/* binding */ fractionInner),
/* harmony export */   tc: () => (/* binding */ tc)
/* harmony export */ });
const fractionInner = {
    color: 'rgb(68, 72, 75)',
    display: 'inline',
    fontFamily: 'DP, Arial, Verdana, sans-serif',
    fontSize: '20px',
    fontWeight: 400,
    height: 'auto',
    lineHeight: '20px',
};
const tc = {
    width: '50%',
    margin: 'auto',
};


/***/ }),

/***/ "./src/sites/PSNP/components/css/SeriesTable.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   border: () => (/* binding */ border),
/* harmony export */   filterBools: () => (/* binding */ filterBools),
/* harmony export */   infoPanel: () => (/* binding */ infoPanel),
/* harmony export */   infoPanel1: () => (/* binding */ infoPanel1),
/* harmony export */   infoPanel2: () => (/* binding */ infoPanel2),
/* harmony export */   infoPanel3: () => (/* binding */ infoPanel3),
/* harmony export */   searchName: () => (/* binding */ searchName),
/* harmony export */   table: () => (/* binding */ table),
/* harmony export */   td: () => (/* binding */ td),
/* harmony export */   th: () => (/* binding */ th)
/* harmony export */ });
const infoPanel = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gap: '20px',
    padding: '10px',
    minHeight: '100px',
};
const infoPanel1 = {
    display: 'grid',
    gridTemplateRows: 'auto auto',
    gridTemplateColumns: 'minmax(120px, 150px)',
    alignItems: 'end',
    justifyItems: 'start',
};
const infoPanel2 = {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    rowGap: '1rem',
    gridTemplateColumns: 'minmax(200px, 1fr)',
    alignItems: 'start',
    justifyItems: 'start',
};
const infoPanel3 = {
    ...infoPanel2,
    gridTemplateRows: 'repeat(3, min-content)',
};
const border = {
    border: '1px solid',
};
const table = {
    outline: '1px solid black',
    borderCollapse: 'collapse',
    borderSpacing: 0,
};
const th = {
    border: '1px solid',
    padding: `10px`,
    textAlign: `center`,
    verticalAlign: 'top',
    fontWeight: 'bold',
    fontSize: '26px',
};
const searchName = {
    width: '200px',
    marginBottom: '0.5rem',
};
const filterBools = {
    marginTop: '10px',
    marginBottom: '10px',
};
const td = {
    padding: '10px',
    borderBottom: '1px solid lightgray',
    borderLeft: '1px solid lightgray',
    borderRight: '1px solid lightgray',
};


/***/ }),

/***/ "./src/sites/PSNP/components/css/TrophyCount.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTrophyGradeCSS: () => (/* binding */ getTrophyGradeCSS),
/* harmony export */   iconCount: () => (/* binding */ iconCount),
/* harmony export */   iconCountSprite: () => (/* binding */ iconCountSprite),
/* harmony export */   tcCell: () => (/* binding */ tcCell),
/* harmony export */   tcGradeIconGroup: () => (/* binding */ tcGradeIconGroup),
/* harmony export */   tcMetricIconGroup: () => (/* binding */ tcMetricIconGroup)
/* harmony export */ });
function getTrophyGradeCSS(grade) {
    const trophyGradeCSS = {
        bronze: { color: '#C46438', backgroundPosition: '0 -60px' },
        silver: { color: '#777777', backgroundPosition: '0 -40px' },
        gold: { color: '#C2903E', backgroundPosition: '0 -20px' },
        platinum: { color: '#667FB2', backgroundPosition: '0 0px' },
    };
    return trophyGradeCSS[grade];
}
const tcCell = (earnedTrophies) => ({
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    justifyItems: 'center',
    rowGap: earnedTrophies ? '0' : '1rem',
});
const tcGradeIconGroup = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    alignItems: 'center',
    gap: '1rem',
};
const tcMetricIconGroup = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    alignItems: 'center',
    columnGap: '20px',
    fontSize: '1.2rem',
    lineHeight: '1.0rem',
    color: '#666666',
};
const iconCount = (iconType) => ({
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridTemplateColumns: 'repeat(2, min-content)',
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
    columnGap: '3px',
    width: '100%',
    lineHeight: iconType === 'grade' ? 'auto' : '1.5rem',
});
const iconCountSprite = (iconType, earnedTrophies) => ({
    gridRow: 'span 2',
    height: earnedTrophies ? '50%' : '100%',
    width: iconType === 'grade' ? '14px' : 'auto',
    color: iconType === 'numPoints' ? 'limegreen' : 'auto',
});


/***/ }),

/***/ "./src/sites/PSNP/components/css/tooltip.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tooltipHoverStyle: () => (/* binding */ tooltipHoverStyle),
/* harmony export */   tooltipStyle: () => (/* binding */ tooltipStyle),
/* harmony export */   tooltipTextStyle: () => (/* binding */ tooltipTextStyle)
/* harmony export */ });
const tooltipStyle = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
};
const tooltipTextStyle = {
    visibility: 'hidden',
    minWidth: '200px',
    maxWidth: '300px',
    backgroundColor: '#555555',
    color: '#ffffff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '5px',
    position: 'absolute',
    zIndex: 1,
    bottom: '125%',
    left: '50%',
    marginLeft: '-100px',
    opacity: 0,
    transition: 'opacity 0.3s',
};
const tooltipHoverStyle = {
    visibility: 'visible',
    opacity: 1,
};


/***/ }),

/***/ "./src/sites/PSNP/components/tables/ColumnFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnFilter: () => (/* binding */ ColumnFilter)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");


const inputDebouncedCSS = {
    fontWeight: 'normal',
    fontSize: '14px',
    marginTop: '10px',
};
const DebouncedInput = ({ value: initialValue, onChange, debounce = 300, ...props }) => {
    const [value, setValue] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setValue(initialValue);
    }, [initialValue]);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);
        return () => clearTimeout(timeout);
    }, [value]);
    return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ...props, value: value, onInput: (e) => setValue(e.target.value) });
};
function ColumnFilter({ column, table, }) {
    const firstValue = table.getFilteredRowModel().flatRows[0]?.getValue(column.id);
    const columnFilterValue = column.getFilterValue();
    return typeof firstValue === 'number' ? ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex space-x-2", style: { justifyContent: 'center' }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DebouncedInput, { type: "number", min: Number(column.getFacetedMinMaxValues()?.[0] ?? ''), max: Number(column.getFacetedMinMaxValues()?.[1] ?? ''), value: columnFilterValue?.[0] ?? '', onChange: value => column.setFilterValue((old) => [value, old?.[1]]), placeholder: `Min`, className: "w-24 border shadow rounded", style: { ...inputDebouncedCSS, marginRight: '10px' } }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DebouncedInput, { type: "number", min: Number(column.getFacetedMinMaxValues()?.[0] ?? ''), max: Number(column.getFacetedMinMaxValues()?.[1] ?? ''), value: columnFilterValue?.[1] ?? '', onChange: value => column.setFilterValue((old) => [old?.[0], value]), placeholder: `Max`, className: "w-24 border shadow rounded", style: inputDebouncedCSS })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "h-1" })] })) : ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DebouncedInput, { type: "text", value: (columnFilterValue ?? ''), onChange: value => column.setFilterValue(value), placeholder: `Search ${column.getFacetedUniqueValues().size} rows`, className: "w-36 border shadow rounded", list: column.id + 'list', style: inputDebouncedCSS }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "h-1" })] }));
}


/***/ }),

/***/ "./src/sites/PSNP/components/tables/FilterIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterIcon: () => (/* binding */ FilterIcon)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faFilter.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");



const FilterIcon = ({ headerContext }) => {
    const isFiltered = headerContext.column.getIsFiltered();
    return isFiltered ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons_faFilter__WEBPACK_IMPORTED_MODULE_2__.faFilter }) }) : null;
};


/***/ }),

/***/ "./src/sites/PSNP/components/tables/SortingIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortingIcon: () => (/* binding */ SortingIcon)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faSort.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSortUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faSortUp.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSortDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faSortDown.js");





const sortingIconCSS = (sortDir) => ({
    color: sortDir ? 'cornflowerblue' : '',
    cursor: 'pointer',
});
const SortingIcon = ({ column, css = {} }) => {
    if (!column)
        return null;
    const sortDir = column.getIsSorted();
    const icon = !sortDir ? _fortawesome_free_solid_svg_icons_faSort__WEBPACK_IMPORTED_MODULE_2__.faSort : sortDir === 'asc' ? _fortawesome_free_solid_svg_icons_faSortUp__WEBPACK_IMPORTED_MODULE_3__.faSortUp : _fortawesome_free_solid_svg_icons_faSortDown__WEBPACK_IMPORTED_MODULE_4__.faSortDown;
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { onClick: column.getToggleSortingHandler(), children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: icon, style: { ...sortingIconCSS(sortDir), ...css } }) }));
};


/***/ }),

/***/ "./src/sites/PSNP/components/tables/games/DropdownFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownFilter: () => (/* binding */ DropdownFilter)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");


const dropbtnStyle = {
    backgroundColor: '#3498DB',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    minWidth: '120px',
};
const dropdownStyle = {
    position: 'relative',
    display: 'inline-block',
};
const dropdownContentStyle = {
    position: 'absolute',
    backgroundColor: '#f1f1f1',
    minWidth: '120px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
};
const dropdownLinkStyle = {
    color: 'black',
    padding: '8px 12px',
    textDecoration: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
};
function DropdownFilter({ optionsWithCounts, onOptionClick, name }) {
    const [isVisible, setIsVisible] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [linkHoverIndex, setLinkHoverIndex] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedOptions, setSelectedOptions] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const toggleOption = (option) => {
        setSelectedOptions(prevSelectedOptions => {
            if (prevSelectedOptions.includes(option)) {
                return prevSelectedOptions.filter(selectedOption => selectedOption !== option);
            }
            else {
                return [...prevSelectedOptions, option];
            }
        });
    };
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "filter-control", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dropdown", onMouseOver: () => setIsVisible(true), onMouseLeave: () => setIsVisible(false), style: dropdownStyle, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { style: dropbtnStyle, children: [name, " ", selectedOptions.length > 0 && `(${selectedOptions.length})`] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: dropdownContentStyle, children: isVisible &&
                        optionsWithCounts.map(([option, count], index) => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", { href: "javascript:void(0);", onClick: () => {
                                    toggleOption(option);
                                    onOptionClick(option);
                                }, style: {
                                    ...dropdownLinkStyle,
                                    backgroundColor: linkHoverIndex === index || selectedOptions.includes(option) ? '#ddd' : 'inherit',
                                    fontWeight: selectedOptions.includes(option) ? 'bold' : 'inherit',
                                }, onMouseEnter: () => setLinkHoverIndex(index), onMouseLeave: () => setLinkHoverIndex(null), children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: option }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { justifySelf: 'end' }, children: count.toLocaleString() })] }, option) }))) })] }) }));
}


/***/ }),

/***/ "./src/sites/PSNP/components/tables/games/GameRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameRowMain: () => (/* binding */ GameRowMain)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _util_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sites/PSNP/util/dates.tsx");
/* harmony import */ var _css_GameRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/components/css/GameRow.ts");



const bullet = () => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '1.7rem', verticalAlign: '-2px' }, children: " \u2022 " });
const GameRowMain = ({ game: g }) => {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "outerGrid", style: _css_GameRow__WEBPACK_IMPORTED_MODULE_2__.outerGrid, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: `/trophies/${g._idAndName}`, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("picture", { class: "game", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: g.src }) }) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "ellipsis", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { class: "title", href: `/trophies/${g._idAndName}`, children: g.name }), !!g.stackLabel && ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [bullet(), " ", g.stackLabel] }))] }) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "platforms", style: "width:100%; text-align: left", children: g.platforms.map(platform => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { class: `tag platform ${platform.toLowerCase()}`, style: "text-align: center", children: platform }))) }), !!g.latestTrophy && ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "small-info", style: "margin-top: 4px", children: (0,_util_dates__WEBPACK_IMPORTED_MODULE_1__.msToDateString)(g.latestTrophy) }))] })] }));
};


/***/ }),

/***/ "./src/sites/PSNP/components/tables/games/GamesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamesTable: () => (/* binding */ GamesTable)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@tanstack/react-table/build/lib/index.mjs");
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@tanstack/table-core/build/lib/index.mjs");
/* harmony import */ var _css_SeriesTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/components/css/SeriesTable.ts");
/* harmony import */ var _SortingIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/components/tables/SortingIcon.tsx");
/* harmony import */ var _ColumnFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sites/PSNP/components/tables/ColumnFilter.tsx");
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _css_SeriesRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/sites/PSNP/components/css/SeriesRow.ts");
/* harmony import */ var _DropdownFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/sites/PSNP/components/tables/games/DropdownFilter.tsx");
/* harmony import */ var _useGameColumns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/sites/PSNP/components/tables/games/useGameColumns.tsx");










const GamesTable = ({ allGames }) => {
    const [numRowsToShow, setNumRowsToShow] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(50);
    const [sorting, setSorting] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)([{ id: 'latestTrophy', desc: false }]);
    const [columnFilters, setColumnFilters] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(() => []);
    const [radioValPlats, setRadioValPlats] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [includeSharedLists, setIncludeSharedLists] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { columns, miscSortKey, setMiscSortKey } = (0,_useGameColumns__WEBPACK_IMPORTED_MODULE_8__.useGamesTableColumns)({ sorting, includeSharedLists, setColumnFilters });
    const platformCounts = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        const mutualTags = [
            ['PS3', 0],
            ['PS4', 0],
            ['PS5', 0],
            ['Vita', 0],
        ];
        if (includeSharedLists)
            mutualTags.push(['VR', 0]);
        else
            mutualTags.push(['PSVR1', 0], ['PSVR2', 0]);
        const platformCountMap = new Map(mutualTags);
        if (includeSharedLists) {
            allGames.reduce((map, game) => {
                game.platforms.forEach(platform => {
                    const count = map.get(platform);
                    if (typeof count === 'number') {
                        map.set(platform, count + 1);
                    }
                });
                return map;
            }, platformCountMap);
        }
        else {
            allGames.reduce((map, game) => {
                if (!game.platformString.includes('/')) {
                    const count = map.get(game.platformString);
                    if (typeof count === 'number') {
                        map.set(game.platformString, count + 1);
                    }
                }
                return map;
            }, platformCountMap);
        }
        return [...platformCountMap];
    }, [includeSharedLists, columnFilters]);
    const stackCounts = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        const map = new Map();
        allGames.forEach(game => {
            const key = game.stackLabel ? game.stackLabel : 'N/A';
            const count = map.get(key) ?? 0;
            map.set(key, count + 1);
        });
        return [...map].sort((a, b) => b[1] - a[1]);
    }, [columnFilters]);
    const table = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__.useReactTable)({
        defaultColumn: {
            minSize: 0,
            size: 0,
        },
        data: allGames,
        columns,
        initialState: {
            columnVisibility: {
                createdAt: false,
                updatedAt: false,
                latestTrophy: false,
                filterHasPlat: false,
                filterPlatform: false,
                filterStack: false,
            },
        },
        state: {
            sorting,
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__.getFilteredRowModel)(),
        getFacetedRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__.getFacetedRowModel)(),
        getFacetedUniqueValues: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__.getFacetedUniqueValues)(),
        getFacetedMinMaxValues: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__.getFacetedMinMaxValues)(),
        onSortingChange: setSorting,
        getCoreRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__.getCoreRowModel)(),
        getSortedRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__.getSortedRowModel)(),
    });
    const updatePlatRadioFilter = (e) => {
        const val = JSON.parse(e.currentTarget.value);
        setRadioValPlats(val);
        setColumnFilters(prevFilters => {
            const updated = prevFilters.filter(filter => filter.id !== 'filterHasPlat');
            updated.push({ id: 'filterHasPlat', value: val });
            return updated;
        });
    };
    const updateStackFilter = (stack) => {
        setColumnFilters(prevFilters => {
            const prevFilteredStacks = prevFilters.find(filter => filter.id === 'filterStack')?.value ?? [];
            const newFilteredStacks = prevFilteredStacks.includes(stack)
                ? prevFilteredStacks.filter(p => p !== stack)
                : [...prevFilteredStacks, stack];
            const cleanFilters = prevFilters.filter(filter => filter.id !== 'filterStack');
            const platformFilter = { id: 'filterStack', value: newFilteredStacks };
            return [...cleanFilters, platformFilter];
        });
    };
    const updatePlatformFilter = (platform) => {
        setColumnFilters(prevFilters => {
            const prevFilteredPlatforms = prevFilters.find(filter => filter.id === 'filterPlatform')?.value ?? [];
            const newFilteredPlatforms = prevFilteredPlatforms.includes(platform)
                ? prevFilteredPlatforms.filter(p => p !== platform)
                : [...prevFilteredPlatforms, platform];
            const cleanFilters = prevFilters.filter(filter => filter.id !== 'filterPlatform');
            const platformFilter = { id: 'filterPlatform', value: newFilteredPlatforms };
            return [...cleanFilters, platformFilter];
        });
    };
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "col-xs-8", style: { flexBasis: '100%', maxWidth: '100%' }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "title flex v-align", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "grow", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Games" }) }) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "p-2", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex' }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "h-2 tn-grid", id: "tn-info-panel", style: { ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_2__.infoPanel, gridTemplateColumns: 'repeat(4, auto)' }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "tn-grid-col col1", style: { ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_2__.infoPanel1 }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { id: "num-rows", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { name: "num-rows", id: "num-rows-select", value: numRowsToShow.toString(), onChange: e => {
                                                        const val = e.currentTarget.value;
                                                        const num = (0,trophyutil__WEBPACK_IMPORTED_MODULE_5__.parseNum)(val);
                                                        const numRows = Number.isNaN(num) ? allGames.length : num;
                                                        setNumRowsToShow(numRows);
                                                    }, children: ['50', '100', '250', '500', '1000', `${allGames.length}`].map(num => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: num, children: num }))) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "num-rows-select", children: " Rows" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "games-count", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { ..._css_SeriesRow__WEBPACK_IMPORTED_MODULE_6__.fractionInner, marginRight: '20px' }, children: [table.getFilteredRowModel().rows.length, "/", allGames.length] }) })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "tn-grid-col col2", id: "sorting-presets", style: { ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_2__.infoPanel2 }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '20px', fontWeight: 'bold' }, children: "Sorting Presets:" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                                                display: 'grid',
                                                gridTemplateRows: 'auto',
                                                gridTemplateColumns: 'min-content auto',
                                                columnGap: '3px',
                                                fontSize: '16px',
                                            }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { value: miscSortKey, onChange: e => {
                                                        setMiscSortKey(e.currentTarget.value);
                                                        setSorting(prevSorting => prevSorting.filter(sort => sort.id !== miscSortKey));
                                                    }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'latestTrophy', children: "Date Played" }, miscSortKey) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SortingIcon__WEBPACK_IMPORTED_MODULE_3__.SortingIcon, { column: table.getColumn(miscSortKey), css: { height: '26px' } })] })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "tn-grid-col col3", id: "filter-options", style: { ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_2__.infoPanel3 }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '20px', fontWeight: 'bold' }, children: "Filter Options:" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                                                display: 'grid',
                                                gridTemplateRows: 'repeat(1, auto)',
                                                gridTemplateColumns: 'repeat(6, min-content)',
                                                columnGap: '5px',
                                                fontSize: '16px',
                                            }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", id: "all", name: "hasPlat", value: "null", checked: radioValPlats === null, onChange: updatePlatRadioFilter }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "all", children: "All" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", id: "nonplats", name: "hasPlat", value: "0", checked: radioValPlats === 0, onChange: updatePlatRadioFilter }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "nonplats", children: "Nonplats" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", id: "plats", name: "hasPlat", value: "1", checked: radioValPlats === 1, onChange: updatePlatRadioFilter }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "plats", children: "Plats" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                                display: 'grid',
                                                gridTemplateRows: 'repeat(1, auto)',
                                                gridTemplateColumns: 'repeat(6, min-content)',
                                                columnGap: '5px',
                                                fontSize: '16px',
                                            } })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "tn-grid-col col4", style: {
                                        ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_2__.infoPanel2,
                                        ...{ display: 'grid', gridTemplateRows: '1fr', gridTemplateColumns: '150px auto', gap: '1rem' },
                                    }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DropdownFilter__WEBPACK_IMPORTED_MODULE_7__.DropdownFilter, { optionsWithCounts: platformCounts, onOptionClick: updatePlatformFilter, name: "Platforms" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { cursor: 'pointer', marginTop: '1rem' }, onClick: () => setIncludeSharedLists(prev => !prev), children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: includeSharedLists, style: { cursor: 'pointer' } }), " Include shared lists"] })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DropdownFilter__WEBPACK_IMPORTED_MODULE_7__.DropdownFilter, { optionsWithCounts: stackCounts, onOptionClick: updateStackFilter, name: "Stack" })] })] }) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { id: "game_list", style: _css_SeriesTable__WEBPACK_IMPORTED_MODULE_2__.table, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: table.getHeaderGroups().map(headerGroup => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: headerGroup.headers.map(header => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { colSpan: header.colSpan, style: { ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_2__.th, width: header.getSize() !== 0 ? header.getSize() : undefined }, children: header.isPlaceholder ? null : ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: header.column.getCanSort() ? 'cursor-pointer select-none' : '', children: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__.flexRender)(header.column.columnDef.header, header.getContext()) }), header.column.getCanFilter() ? ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ColumnFilter__WEBPACK_IMPORTED_MODULE_4__.ColumnFilter, { column: header.column, table: table }) })) : null] })) }, header.id))) }, headerGroup.id))) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: table
                                    .getRowModel()
                                    .rows.slice(0, numRowsToShow)
                                    .map(row => {
                                    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: row.getVisibleCells().map(cell => {
                                            return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: {
                                                    ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_2__.td,
                                                    padding: 0,
                                                    width: cell.column.getSize() !== 0 ? cell.column.getSize() : undefined,
                                                }, children: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id));
                                        }) }, row.id));
                                }) })] })] })] }));
};


/***/ }),

/***/ "./src/sites/PSNP/components/tables/games/useGameColumns.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGamesTableColumns: () => (/* binding */ useGamesTableColumns)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@tanstack/table-core/build/lib/index.mjs");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _TrophyCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/components/TrophyCount.tsx");
/* harmony import */ var _FilterIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/components/tables/FilterIcon.tsx");
/* harmony import */ var _SortingIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sites/PSNP/components/tables/SortingIcon.tsx");
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/sites/PSNP/components/tables/sorting.ts");
/* harmony import */ var _GameRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/sites/PSNP/components/tables/games/GameRow.tsx");








const col = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_7__.createColumnHelper)();
function useGamesTableColumns({ sorting, includeSharedLists, setColumnFilters }) {
    const [miscSortKey, setMiscSortKey] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('latestTrophy');
    const [trophyCellSortKey, setTrophyCellSortKey] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(['userNumTrophies', null]);
    const columns = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        return [
            col.accessor(x => x.stackLabel, {
                id: 'filterStack',
                enableHiding: true,
                filterFn: (row, _columnId, value, _addMeta) => {
                    if (!value.length)
                        return true;
                    const stackLabel = row.original.stackLabel || 'N/A';
                    return value.some(stackFilter => stackFilter === stackLabel);
                },
            }),
            col.accessor(x => x.platformString, {
                id: 'filterPlatform',
                enableHiding: true,
                filterFn: (row, _columnId, value, _addMeta) => {
                    if (!value.length)
                        return true;
                    const platforms = row.original.platforms;
                    const filterContainsAPlatformTag = value.some(filteredPlatform => platforms.includes(filteredPlatform));
                    const filterContainsPlatformString = value.some(filteredPlatform => row.original.platformString === filteredPlatform);
                    if (!filterContainsAPlatformTag && !filterContainsPlatformString)
                        return false;
                    else if (!includeSharedLists)
                        return (platforms.length === 1 ||
                            (platforms.includes('VR') && value.some(filteredTag => filteredTag.includes('VR'))));
                    else
                        return true;
                },
            }),
            col.accessor(_x => '', {
                id: 'filterHasPlat',
                enableHiding: true,
                filterFn: (row, _columnId, value, _addMeta) => {
                    if (value === null)
                        return true;
                    const hasPlat = !!row.original.trophyCount?.platinum;
                    if (value === 1)
                        return hasPlat;
                    else
                        return !hasPlat;
                },
            }),
            col.accessor('latestTrophy', {
                enableHiding: true,
                sortingFn: (rowA, rowB, columnId) => {
                    return (0,_sorting__WEBPACK_IMPORTED_MODULE_5__.sortColumnByDate)(sorting, rowA, rowB, columnId, x => x.original.latestTrophy ?? 0);
                },
            }),
            col.accessor('createdAt', {
                enableHiding: true,
                header: _h => 'Date Created',
                sortingFn: (rowA, rowB, columnId) => {
                    return (0,_sorting__WEBPACK_IMPORTED_MODULE_5__.sortColumnByDate)(sorting, rowA, rowB, columnId, x => Date.parse(x.original.createdAt));
                },
            }),
            col.accessor('updatedAt', {
                enableHiding: true,
                header: _h => 'Date Updated',
                sortingFn: (rowA, rowB, columnId) => {
                    return (0,_sorting__WEBPACK_IMPORTED_MODULE_5__.sortColumnByDate)(sorting, rowA, rowB, columnId, x => Date.parse(x.original.updatedAt));
                },
            }),
            col.accessor('name', {
                id: 'game',
                size: 500,
                maxSize: 500,
                cell: ({ row }) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GameRow__WEBPACK_IMPORTED_MODULE_6__.GameRowMain, { game: row.original }),
                header: h => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterIcon__WEBPACK_IMPORTED_MODULE_3__.FilterIcon, { headerContext: h }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { margin: '0px 5px' }, children: "Game" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SortingIcon__WEBPACK_IMPORTED_MODULE_4__.SortingIcon, { column: h.column })] })),
                sortingFn: (rowA, rowB, _columnId) => rowA.original.name.localeCompare(rowB.original.name),
            }),
            col.accessor(row => {
                const val1 = row[trophyCellSortKey[0]];
                if (typeof val1 === 'number')
                    return val1;
                else
                    return val1?.[trophyCellSortKey[1]];
            }, {
                id: `${trophyCellSortKey[0]}${trophyCellSortKey[1] ?? ''}`,
                size: 250,
                maxSize: 300,
                cell: ({ row }) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TrophyCount__WEBPACK_IMPORTED_MODULE_2__.TrophyCountRow, { entity: row.original }),
                header: h => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterIcon__WEBPACK_IMPORTED_MODULE_3__.FilterIcon, { headerContext: h }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { margin: '0px 5px' }, children: "Trophies" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SortingIcon__WEBPACK_IMPORTED_MODULE_4__.SortingIcon, { column: h.column }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: '10px' }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: JSON.stringify(trophyCellSortKey), onChange: e => {
                                    const newValue = JSON.parse(e.currentTarget.value);
                                    setTrophyCellSortKey(newValue);
                                    setColumnFilters(prevFilters => prevFilters.filter(filter => filter.id !== `${trophyCellSortKey[0]}${trophyCellSortKey[1] ?? ''}`));
                                }, style: { fontWeight: 'normal', fontSize: '14px' }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userPoints', null]), children: "Points (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['points', null]), children: "Points (All)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userNumTrophies', null]), children: "Trophies (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['numTrophies', null]), children: "Trophies (All)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userTrophyCount', 'platinum']), children: "Platinum (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['trophyCount', 'platinum']), children: "Platinum (All)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userTrophyCount', 'gold']), children: "Gold (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['trophyCount', 'gold']), children: "Gold (All)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userTrophyCount', 'silver']), children: "Silver (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['trophyCount', 'silver']), children: "Silver (All)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userTrophyCount', 'bronze']), children: "Bronze (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['trophyCount', 'bronze']), children: "Bronze (All)" })] }) })] })),
                sortingFn: (rowA, rowB, _columnId) => {
                    let comparisonValue = 0;
                    const key1 = trophyCellSortKey[0];
                    if (key1 === 'trophyCount' || key1 === 'userTrophyCount') {
                        const key2 = trophyCellSortKey[1];
                        comparisonValue = rowA.original[key1][key2] - rowB.original[key1][key2];
                    }
                    else
                        comparisonValue = rowA.original[key1] - rowB.original[key1];
                    return comparisonValue;
                },
            }),
        ];
    }, [sorting, trophyCellSortKey, miscSortKey, includeSharedLists]);
    return { columns, miscSortKey, setMiscSortKey };
}


/***/ }),

/***/ "./src/sites/PSNP/components/tables/series/SeriesRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeriesRowGames: () => (/* binding */ SeriesRowGames),
/* harmony export */   SeriesRowName: () => (/* binding */ SeriesRowName),
/* harmony export */   SeriesRowStages: () => (/* binding */ SeriesRowStages)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _shared_components_ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/shared/components/ProgressBar.tsx");
/* harmony import */ var _util_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/util/dates.tsx");
/* harmony import */ var _css_SeriesRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/components/css/SeriesRow.ts");




const SeriesRowName = ({ series: s }) => {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "game-title", style: { fontSize: '2rem', fontWeight: 'bold', paddingBottom: '0.5rem' }, children: s.name }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: `/series/${s._idAndName}`, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("picture", { class: "series", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: s.src }) }) }), !!s.userLatestTrophy && ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { class: "small-info", style: "margin-top: 4px", children: (0,_util_dates__WEBPACK_IMPORTED_MODULE_2__.msToDateString)(s.userLatestTrophy) }))] }));
};
const SeriesRowStages = ({ series: s }) => {
    const stagePercentage = s.userPercentStagesCompleted;
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { class: "separator", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { class: "typo-top", style: _css_SeriesRow__WEBPACK_IMPORTED_MODULE_3__.fractionInner, children: `${s.userNumStagesCompleted}/${s.userNumStagesTotal}` }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_ProgressBar__WEBPACK_IMPORTED_MODULE_1__["default"], { progress: stagePercentage / 100, children: `${stagePercentage}%` })] }) }));
};
const SeriesRowGames = ({ series: s }) => {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { class: "separator", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { class: "typo-top", style: _css_SeriesRow__WEBPACK_IMPORTED_MODULE_3__.fractionInner, children: `${s.userNumGamesCompleted}/${s.userNumGamesTotal}` }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_ProgressBar__WEBPACK_IMPORTED_MODULE_1__["default"], { progress: s.userPercentGamesCompleted / 100, children: `${s.userPercentGamesCompleted}%` })] }) }));
};


/***/ }),

/***/ "./src/sites/PSNP/components/tables/series/SeriesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeriesTable: () => (/* binding */ SeriesTable)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _css_SeriesTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sites/PSNP/components/css/SeriesTable.ts");
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@tanstack/react-table/build/lib/index.mjs");
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@tanstack/table-core/build/lib/index.mjs");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _css_SeriesRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sites/PSNP/components/css/SeriesRow.ts");
/* harmony import */ var _useSeriesColumns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/sites/PSNP/components/tables/series/useSeriesColumns.tsx");
/* harmony import */ var _ColumnFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/sites/PSNP/components/tables/ColumnFilter.tsx");
/* harmony import */ var _SortingIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/sites/PSNP/components/tables/SortingIcon.tsx");









const SeriesTable = ({ allSeries, prefs }) => {
    const [numRowsToShow, setNumRowsToShow] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState)(50);
    const [sorting, setSorting] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState)([{ id: 'userLatestTrophy', desc: true }]);
    const [miscSortKey, setMiscSortKey] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState)('userLatestTrophy');
    const [radioValPlats, setRadioValPlats] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState)(prefs.PSNP.bools.platifySeriesHideNonplats.value ? 1 : null);
    const [radioValCompletion, setRadioValCompletion] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [columnFilters, setColumnFilters] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useState)(() => [{ id: 'bestCompleted', value: radioValPlats }]);
    const { columns } = (0,_useSeriesColumns__WEBPACK_IMPORTED_MODULE_5__.useSeriesTableColumns)({
        sorting,
        setColumnFilters,
    });
    const table = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_8__.useReactTable)({
        defaultColumn: {
            minSize: 0,
            size: 0,
        },
        data: allSeries,
        columns,
        initialState: {
            columnVisibility: {
                userLatestTrophy: false,
                bestCompleted: false,
                updatedAt: false,
            },
        },
        state: {
            sorting,
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__.getFilteredRowModel)(),
        getFacetedRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__.getFacetedRowModel)(),
        getFacetedUniqueValues: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__.getFacetedUniqueValues)(),
        getFacetedMinMaxValues: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__.getFacetedMinMaxValues)(),
        onSortingChange: setSorting,
        getCoreRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__.getCoreRowModel)(),
        getSortedRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_9__.getSortedRowModel)(),
    });
    const updatePlatRadioFilter = (e) => {
        const val = JSON.parse(e.currentTarget.value);
        setRadioValPlats(val);
        setColumnFilters(prevFilters => {
            const updated = prevFilters.filter(filter => filter.id !== 'bestCompleted');
            updated.push({ id: 'bestCompleted', value: val });
            return updated;
        });
    };
    const updateCompletionRadioFilter = (e) => {
        const val = JSON.parse(e.currentTarget.value);
        setRadioValCompletion(val);
        setColumnFilters(prevFilters => {
            const updated = prevFilters.filter(filter => filter.id !== 'userLatestTrophy');
            updated.push({ id: 'userLatestTrophy', value: val });
            return updated;
        });
    };
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "col-xs-8", style: { flexBasis: '100%', maxWidth: '100%' }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "title flex v-align", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "grow", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Series" }) }) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "p-2", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex' }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "h-2 tn-grid", id: "tn-info-panel", style: _css_SeriesTable__WEBPACK_IMPORTED_MODULE_1__.infoPanel, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "tn-grid-col col1", style: { ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_1__.infoPanel1 }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { id: "num-rows", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { name: "num-rows", id: "num-rows-select", value: numRowsToShow.toString(), onChange: e => {
                                                        const val = e.currentTarget.value;
                                                        const num = (0,trophyutil__WEBPACK_IMPORTED_MODULE_3__.parseNum)(val);
                                                        const numRows = Number.isNaN(num) ? allSeries.length : num;
                                                        setNumRowsToShow(numRows);
                                                    }, children: ['50', '100', '250', '500', '1000', `${allSeries.length}`].map(num => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: num, children: num }))) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "num-rows-select", children: " Rows" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "series-count", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { ..._css_SeriesRow__WEBPACK_IMPORTED_MODULE_4__.fractionInner, marginRight: '20px' }, children: [table.getFilteredRowModel().rows.length, "/", allSeries.length] }) })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "tn-grid-col col2", id: "sorting-presets", style: { ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_1__.infoPanel2 }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '20px', fontWeight: 'bold' }, children: "Sorting Presets:" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                                                display: 'grid',
                                                gridTemplateRows: 'auto',
                                                gridTemplateColumns: 'min-content auto',
                                                columnGap: '3px',
                                                fontSize: '16px',
                                            }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: miscSortKey, onChange: e => {
                                                        setMiscSortKey(e.currentTarget.value);
                                                        setSorting(prevSorting => prevSorting.filter(sort => sort.id !== miscSortKey));
                                                    }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'userLatestTrophy', children: "Date Played" }, miscSortKey), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'updatedAt', children: "Date Updated" }, miscSortKey), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'bestCompleted', children: "Best Completions" }, miscSortKey)] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SortingIcon__WEBPACK_IMPORTED_MODULE_7__.SortingIcon, { column: table.getColumn(miscSortKey), css: { height: '26px' } })] })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { class: "tn-grid-col col3", id: "filter-options", style: { ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_1__.infoPanel3 }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '20px', fontWeight: 'bold' }, children: "Filter Options:" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                                                display: 'grid',
                                                gridTemplateRows: 'repeat(1, auto)',
                                                gridTemplateColumns: 'repeat(6, min-content)',
                                                columnGap: '5px',
                                                fontSize: '16px',
                                            }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", id: "all", name: "hasPlat", value: "null", checked: radioValPlats === null, onChange: updatePlatRadioFilter }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "all", children: "All" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", id: "nonplats", name: "hasPlat", value: "0", checked: radioValPlats === 0, onChange: updatePlatRadioFilter }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "nonplats", children: "Nonplats" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", id: "plats", name: "hasPlat", value: "1", checked: radioValPlats === 1, onChange: updatePlatRadioFilter }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "plats", children: "Plats" })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                                                display: 'grid',
                                                gridTemplateRows: 'repeat(1, auto)',
                                                gridTemplateColumns: 'repeat(6, min-content)',
                                                columnGap: '5px',
                                                fontSize: '16px',
                                            }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", id: "all", name: "completion", value: "null", checked: radioValCompletion === null, onChange: updateCompletionRadioFilter }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "all", children: "All" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", id: "incomplete", name: "completion", value: "0", checked: radioValCompletion === 0, onChange: updateCompletionRadioFilter }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "incomplete", children: "Incomplete" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", id: "completed", name: "completion", value: "1", checked: radioValCompletion === 1, onChange: updateCompletionRadioFilter }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { for: "completed", children: "Completed" })] })] })] }) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { id: "game_list", style: _css_SeriesTable__WEBPACK_IMPORTED_MODULE_1__.table, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: table.getHeaderGroups().map(headerGroup => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: headerGroup.headers.map(header => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { colSpan: header.colSpan, style: { ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_1__.th, width: header.getSize() !== 0 ? header.getSize() : undefined }, children: header.isPlaceholder ? null : ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: header.column.getCanSort() ? 'cursor-pointer select-none' : '', children: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_8__.flexRender)(header.column.columnDef.header, header.getContext()) }), header.column.getCanFilter() ? ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ColumnFilter__WEBPACK_IMPORTED_MODULE_6__.ColumnFilter, { column: header.column, table: table }) })) : null] })) }, header.id))) }, headerGroup.id))) }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: table
                                    .getRowModel()
                                    .rows.slice(0, numRowsToShow)
                                    .map(row => {
                                    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: row.getVisibleCells().map(cell => {
                                            return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: {
                                                    ..._css_SeriesTable__WEBPACK_IMPORTED_MODULE_1__.td,
                                                    width: cell.column.getSize() !== 0 ? cell.column.getSize() : undefined,
                                                }, children: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_8__.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id));
                                        }) }, row.id));
                                }) })] })] })] }));
};


/***/ }),

/***/ "./src/sites/PSNP/components/tables/series/useSeriesColumns.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSeriesTableColumns: () => (/* binding */ useSeriesTableColumns)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@tanstack/table-core/build/lib/index.mjs");
/* harmony import */ var _css_SeriesRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sites/PSNP/components/css/SeriesRow.ts");
/* harmony import */ var _TrophyCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/components/TrophyCount.tsx");
/* harmony import */ var _SeriesRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/components/tables/series/SeriesRow.tsx");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _SortingIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/sites/PSNP/components/tables/SortingIcon.tsx");
/* harmony import */ var _FilterIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/sites/PSNP/components/tables/FilterIcon.tsx");
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/sites/PSNP/components/tables/sorting.ts");









const col = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_8__.createColumnHelper)();
function useSeriesTableColumns({ sorting, setColumnFilters }) {
    const [stagesCellSortKey, setStagesCellSortKey] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)('userNumStagesCompleted');
    const [gamesCellSortKey, setGamesCellSortKey] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)('userNumGamesCompleted');
    const [trophyCellSortKey, setTrophyCellSortKey] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)(['userNumTrophies', null]);
    const columns = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
        return [
            col.accessor(x => '', {
                id: 'bestCompleted',
                enableHiding: true,
                header: h => 'Best Completed',
                sortingFn: (rowA, rowB, columnId) => {
                    const sA = rowA.original;
                    const sB = rowB.original;
                    let aPercent = Number.isNaN(sA.userPercentGamesCompleted) ? -Infinity : sA.userPercentGamesCompleted;
                    let bPercent = Number.isNaN(sB.userPercentGamesCompleted) ? -Infinity : sB.userPercentGamesCompleted;
                    if (aPercent > 0 && aPercent === bPercent) {
                        return sB.userNumGamesCompleted - sA.userNumGamesCompleted;
                    }
                    if (aPercent === 0 && aPercent === bPercent) {
                        return sA.userNumGamesTotal - sB.userNumGamesTotal;
                    }
                    return bPercent - aPercent;
                },
                filterFn: (row, columnId, value, addMeta) => {
                    if (value === null)
                        return true;
                    const hasPlat = !!row.original.trophyCount.platinum;
                    if (value === 1)
                        return hasPlat;
                    else
                        return !hasPlat;
                },
            }),
            col.accessor('updatedAt', {
                enableHiding: true,
                header: h => 'Date Updated',
                sortingFn: (rowA, rowB, columnId) => {
                    return (0,_sorting__WEBPACK_IMPORTED_MODULE_7__.sortColumnByDate)(sorting, rowA, rowB, columnId, x => Date.parse(x.original.updatedAt));
                },
            }),
            col.accessor('userLatestTrophy', {
                enableHiding: true,
                header: h => 'Date',
                sortingFn: (rowA, rowB, columnId) => {
                    return (0,_sorting__WEBPACK_IMPORTED_MODULE_7__.sortColumnByDate)(sorting, rowA, rowB, columnId, x => x.original.userLatestTrophy);
                },
                filterFn: (row, columnId, value, addMeta) => {
                    if (value === null)
                        return true;
                    const completed = row.original.userPercentGamesCompleted === 100;
                    if (value === 1)
                        return completed;
                    else
                        return !completed;
                },
            }),
            col.accessor('_id', {
                size: 100,
                maxSize: 150,
                enableColumnFilter: false,
                header: h => {
                    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterIcon__WEBPACK_IMPORTED_MODULE_6__.FilterIcon, { headerContext: h }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { margin: '0px 5px' }, children: "ID" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SortingIcon__WEBPACK_IMPORTED_MODULE_5__.SortingIcon, { column: h.column })] }));
                },
                cell: ({ row, table, renderValue, cell }) => {
                    const sorted = table.getSortedRowModel().flatRows;
                    const index = sorted.findIndex(r => r.original._id === row.original._id) + 1;
                    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                            display: 'grid',
                            gridTemplateRows: 'repeat(5, 1fr)',
                            justifyItems: 'center',
                            alignItems: 'center',
                        }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { ..._css_SeriesRow__WEBPACK_IMPORTED_MODULE_1__.fractionInner, fontSize: '30px', gridArea: '1 / 1 / 5 / 2' }, children: index }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { gridArea: '5 / 1 / 6 / 2' }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "#" }), row.original._id] })] }));
                },
            }),
            col.accessor('name', {
                size: 350,
                maxSize: 400,
                cell: ({ row }) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SeriesRow__WEBPACK_IMPORTED_MODULE_3__.SeriesRowName, { series: row.original }),
                header: h => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterIcon__WEBPACK_IMPORTED_MODULE_6__.FilterIcon, { headerContext: h }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { margin: '0px 5px' }, children: "Name" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SortingIcon__WEBPACK_IMPORTED_MODULE_5__.SortingIcon, { column: h.column })] })),
                sortingFn: (rowA, rowB, columnId) => rowA.original.name.localeCompare(rowB.original.name),
            }),
            col.accessor(stagesCellSortKey, {
                id: stagesCellSortKey,
                size: 230,
                maxSize: 250,
                cell: ({ row }) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SeriesRow__WEBPACK_IMPORTED_MODULE_3__.SeriesRowStages, { series: row.original }),
                header: h => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterIcon__WEBPACK_IMPORTED_MODULE_6__.FilterIcon, { headerContext: h }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { margin: '0px 5px' }, children: "Stages" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SortingIcon__WEBPACK_IMPORTED_MODULE_5__.SortingIcon, { column: h.column }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: '10px' }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: stagesCellSortKey, onChange: e => {
                                    setStagesCellSortKey(e.currentTarget.value);
                                    setColumnFilters(prevFilters => prevFilters.filter(filter => filter.id !== stagesCellSortKey));
                                }, style: { fontWeight: 'normal', fontSize: '14px' }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "userNumStagesCompleted", children: "# Completed" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "userNumStagesIncomplete", children: "# Incomplete" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "userNumStagesTotal", children: "# Total" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "userPercentStagesCompleted", children: "% Completed" })] }) })] })),
                sortingFn: (rowA, rowB, columnId) => rowA.original[stagesCellSortKey] - rowB.original[stagesCellSortKey],
            }),
            col.accessor(gamesCellSortKey, {
                id: gamesCellSortKey,
                size: 230,
                maxSize: 250,
                cell: ({ row }) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SeriesRow__WEBPACK_IMPORTED_MODULE_3__.SeriesRowGames, { series: row.original }),
                header: h => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterIcon__WEBPACK_IMPORTED_MODULE_6__.FilterIcon, { headerContext: h }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { margin: '0px 5px' }, children: "Games" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SortingIcon__WEBPACK_IMPORTED_MODULE_5__.SortingIcon, { column: h.column }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: '10px' }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: gamesCellSortKey, onChange: e => {
                                    setGamesCellSortKey(e.currentTarget.value);
                                    setColumnFilters(prevFilters => prevFilters.filter(filter => filter.id !== gamesCellSortKey));
                                }, style: { fontWeight: 'normal', fontSize: '14px' }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "userNumGamesCompleted", children: "# Completed" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "userNumGamesIncomplete", children: "# Incomplete" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "userNumGamesTotal", children: "# Total" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "userPercentGamesCompleted", children: "% Completed" })] }) })] })),
                sortingFn: (rowA, rowB, columnId) => rowA.original[gamesCellSortKey] - rowB.original[gamesCellSortKey],
            }),
            col.accessor(row => {
                const val1 = row[trophyCellSortKey[0]];
                if (typeof val1 === 'number')
                    return val1;
                else
                    return val1[trophyCellSortKey[1]];
            }, {
                id: `${trophyCellSortKey[0]}${trophyCellSortKey[1] ?? ''}`,
                size: 250,
                maxSize: 300,
                cell: ({ row }) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TrophyCount__WEBPACK_IMPORTED_MODULE_2__.TrophyCountRow, { entity: row.original }),
                header: h => ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterIcon__WEBPACK_IMPORTED_MODULE_6__.FilterIcon, { headerContext: h }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { margin: '0px 5px' }, children: "Trophies" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SortingIcon__WEBPACK_IMPORTED_MODULE_5__.SortingIcon, { column: h.column }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: '10px' }, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: JSON.stringify(trophyCellSortKey), onChange: e => {
                                    const newValue = JSON.parse(e.currentTarget.value);
                                    setTrophyCellSortKey(newValue);
                                    setColumnFilters(prevFilters => prevFilters.filter(filter => filter.id !== `${trophyCellSortKey[0]}${trophyCellSortKey[1] ?? ''}`));
                                }, style: { fontWeight: 'normal', fontSize: '14px' }, children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userPoints', null]), children: "Points (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['points', null]), children: "Points (All)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userNumTrophies', null]), children: "Trophies (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['numTrophies', null]), children: "Trophies (All)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userTrophyCount', 'platinum']), children: "Platinum (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['trophyCount', 'platinum']), children: "Platinum (All)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userTrophyCount', 'gold']), children: "Gold (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['trophyCount', 'gold']), children: "Gold (All)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userTrophyCount', 'silver']), children: "Silver (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['trophyCount', 'silver']), children: "Silver (All)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['userTrophyCount', 'bronze']), children: "Bronze (Earned)" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: JSON.stringify(['trophyCount', 'bronze']), children: "Bronze (All)" })] }) })] })),
                sortingFn: (rowA, rowB, columnId) => {
                    let comparisonValue = 0;
                    const key1 = trophyCellSortKey[0];
                    if (key1 === 'trophyCount' || key1 === 'userTrophyCount') {
                        const key2 = trophyCellSortKey[1];
                        comparisonValue = rowA.original[key1][key2] - rowB.original[key1][key2];
                    }
                    else
                        comparisonValue = rowA.original[key1] - rowB.original[key1];
                    return comparisonValue;
                },
            }),
        ];
    }, [sorting, stagesCellSortKey, gamesCellSortKey, trophyCellSortKey]);
    return { columns, setStagesCellSortKey, setGamesCellSortKey, setTrophyCellSortKey };
}


/***/ }),

/***/ "./src/sites/PSNP/components/tables/sorting.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortColumnByDate: () => (/* binding */ sortColumnByDate)
/* harmony export */ });
function compareDates(getter, isDesc = false) {
    return (a, b) => {
        const dateA = getter(a);
        const dateB = getter(b);
        if (dateA === 0)
            return isDesc ? -1 : 1;
        if (dateB === 0)
            return isDesc ? 1 : -1;
        return dateA - dateB;
    };
}
const sortColumnByDate = (sorting, rowA, rowB, columnId, getter) => {
    const isDesc = sorting.find(s => s.id === columnId)?.desc || false;
    return compareDates(getter, isDesc)(rowA, rowB);
};


/***/ }),

/***/ "./src/sites/PSNP/models/dbGame.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DbGame: () => (/* binding */ DbGame)
/* harmony export */ });
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");

class DbGame extends trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpEntity {
    platforms;
    stackLabel;
    rarityBase;
    rarityDlc;
    percent;
    completionStatus;
    completionSpeed;
    completionRank;
    latestTrophy;
    trophyCount;
    userTrophyCount;
    points;
    userPoints;
    numTrophies;
    userNumTrophies;
    createdAt;
    updatedAt;
    forumId;
    trophyGroups;
    metaData;
    numOwners;
    stackIds;
    get _idAndName() {
        return `${this._id}-${this._nameSerialized}`;
    }
    get url() {
        return `https://psnprofiles.com/trophies/${this._id}-${this._nameSerialized}`;
    }
    get src() {
        return `https://i.psnprofiles.com/games/${this._imagePath}.png`;
    }
    get rarityBaseString() {
        return this.rarityBase?.toFixed(2);
    }
    get rarityDlcString() {
        return this.rarityDlc?.toFixed(2);
    }
    get completionSpeedType() {
        if (!this.completionStatus)
            return null;
        else if (this.completionStatus === 'completed' || (this.rarityDlc && this.percent === 100))
            return 'Completed';
        else
            return 'Platinum';
    }
    get platformString() {
        const platforms = this.platforms;
        if (platforms.length === 1)
            return platforms[0];
        else if (platforms.length === 2 && platforms.includes('VR')) {
            return platforms.includes('PS4') ? 'PSVR1' : 'PSVR2';
        }
        else
            return platforms.join('/');
    }
    constructor(game) {
        super(game);
        this.platforms = game.platforms;
        this.stackLabel = game.stackLabel;
        this.rarityBase = game.rarityBase;
        this.rarityDlc = game.rarityDlc;
        this.numOwners = game.numOwners;
        this.forumId = game.forumId;
        this.trophyGroups = game.trophyGroups;
        this.metaData = game.metaData;
        this.stackIds = game.stackIds ?? [];
        this.createdAt = game.createdAt ?? new Date().toISOString();
        this.updatedAt = game.updatedAt ?? new Date().toISOString();
        this.trophyCount = game.trophyCount;
        this.points = game.points;
        this.numTrophies = game.numTrophies;
        this.userTrophyCount = game.userTrophyCount ?? { bronze: 0, silver: 0, gold: 0, platinum: 0 };
        this.userPoints = game.userPoints ?? 0;
        this.userNumTrophies = game.userNumTrophies ?? 0;
        this.percent = game.percent ?? 0;
        this.latestTrophy = game.latestTrophy ?? 0;
        this.completionStatus = game.completionStatus;
        this.completionSpeed = game.completionSpeed;
        this.completionRank = game.completionRank;
    }
    static url(game) {
        return `https://psnprofiles.com/trophies/${game._id}-${game._nameSerialized}`;
    }
    static wrapProfileGame(game) {
        const { trophyCount: userTrophyCount, points: userPoints, numTrophies: userNumTrophies, ...rest } = game;
        const normalized = { ...rest, userTrophyCount, userPoints, userNumTrophies };
        return normalized;
    }
    hasUserProgress() {
        const keys = ['userNumTrophies', 'userPoints', 'userTrophyCount'];
        return keys.every(key => key in this);
    }
}


/***/ }),

/***/ "./src/sites/PSNP/models/dbSeries.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DbSeries: () => (/* binding */ DbSeries)
/* harmony export */ });
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");

class DbSeries extends trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpEntity {
    createdAt;
    updatedAt;
    numGames;
    trophyCount;
    points;
    numTrophies;
    stages;
    userNumGamesPlayed;
    userNumGamesPlatted;
    userNumGames100Percented;
    userPercentGamesCompleted;
    userLatestTrophy;
    userPoints;
    userNumTrophies;
    userTrophyCount;
    userNumGamesCompleted;
    userNumGamesTotal;
    userNumStagesCompleted;
    userPercentStagesCompleted;
    userNumStagesTotal;
    get userNumStagesIncomplete() {
        return this.userNumStagesTotal - this.userNumStagesCompleted;
    }
    get userNumGamesIncomplete() {
        return this.userNumGamesTotal - this.userNumGamesCompleted;
    }
    get _idAndName() {
        return `${this._id}-${this._nameSerialized}`;
    }
    get url() {
        return `https://psnprofiles.com/series/${this._idAndName}`;
    }
    get src() {
        return `https://i.psnprofiles.com/series/${this._imagePath}.S.png`;
    }
    get gameIds() {
        return this.stages.flatMap(x => x.gameIds);
    }
    constructor(series) {
        super(series);
        this.numGames = series.numGames;
        this.stages = series.stages ?? [];
        this.createdAt = series.createdAt ?? new Date().toISOString();
        this.updatedAt = series.updatedAt ?? new Date().toISOString();
        this.trophyCount = series.trophyCount;
        this.points = series.points;
        this.numTrophies = series.numTrophies;
        this.userTrophyCount = series.userTrophyCount ?? { bronze: 0, silver: 0, gold: 0, platinum: 0 };
        this.userPoints = series.userPoints ?? 0;
        this.userNumTrophies = series.userNumTrophies ?? 0;
        this.userNumGamesPlayed = series.userNumGamesPlayed ?? 0;
        this.userNumGamesPlatted = series.userNumGamesPlatted ?? 0;
        this.userNumGames100Percented = series.userNumGames100Percented ?? 0;
        this.userLatestTrophy = series.userLatestTrophy ?? 0;
        this.userNumGamesCompleted = series.userNumGamesCompleted ?? 0;
        this.userNumGamesTotal = series.userNumGamesTotal ?? 0;
        this.userPercentGamesCompleted = series.userPercentGamesCompleted ?? 0;
        this.userNumStagesCompleted = series.userNumStagesCompleted ?? 0;
        this.userNumStagesTotal = series.userNumStagesTotal ?? 0;
        this.userPercentStagesCompleted = series.userPercentStagesCompleted ?? 0;
    }
    static url(series) {
        return `https://psnprofiles.com/series/${series._id}-${series._nameSerialized}`;
    }
}


/***/ }),

/***/ "./src/sites/PSNP/nexus.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrophyNexusPsnp: () => (/* binding */ TrophyNexusPsnp)
/* harmony export */ });
/* harmony import */ var _nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sites/nexus.ts");
/* harmony import */ var _services_DOM_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sites/PSNP/services/DOM/elements.ts");


class TrophyNexusPsnp extends _nexus__WEBPACK_IMPORTED_MODULE_0__["default"] {
    elements = _services_DOM_elements__WEBPACK_IMPORTED_MODULE_1__.PsnpHTMLElements;
    pageType;
    get viewingOwnProfile() {
        return !this.guest && this.url.pathname === `/${this.userPrefs.psnId}`;
    }
    get needToInitCache() {
        const prefs = this.userPrefs.PSNP;
        const needToInit = [prefs.lastUpdatedAllSeries, prefs.lastUpdatedAllGames, prefs.lastUpdatedUserGames].includes(0);
        return !this.guest && needToInit;
    }
    constructor(nexus, pageType) {
        super(nexus);
        this.pageType = pageType;
    }
}


/***/ }),

/***/ "./src/sites/PSNP/pages/gamesCatalog.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGamesCatalog: () => (/* binding */ initGamesCatalog)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _components_tables_games_GamesTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/components/tables/games/GamesTable.tsx");
/* harmony import */ var _services_DbGamesController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/services/DbGamesController.ts");




async function initGamesCatalog(nexus) {
    if (!nexus.userPrefs.PSNP.bools.renderGamesTable.value)
        return;
    const gamesController = new _services_DbGamesController__WEBPACK_IMPORTED_MODULE_3__.DbGamesController(nexus);
    const allGamesPromise = gamesController.retrieveAllGames();
    const tablePromise = nexus.elements.Common.table;
    Promise.all([allGamesPromise, tablePromise]).then(([allGames, table]) => {
        const deletables = [...nexus.doc.querySelectorAll('div.title-bar .no-shrink')];
        deletables.forEach(el => el.remove());
        const defaultRows = [...table.querySelectorAll('tr')];
        defaultRows.forEach(tr => tr.remove());
        const root = table.closest('div.col-xs-8')?.parentElement;
        root?.replaceChildren();
        root && (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tables_games_GamesTable__WEBPACK_IMPORTED_MODULE_2__.GamesTable, { allGames: allGames, prefs: nexus.userPrefs }), root);
    });
}


/***/ }),

/***/ "./src/sites/PSNP/pages/profile/parseHeaderStats.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseHeaderStats)
/* harmony export */ });
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");

function parseHeaderStats(doc) {
    const statNodes = [...doc.querySelectorAll(`span.stat.grow`)];
    const statValues = statNodes.map(node => node.childNodes[0]);
    const numGamesPlayed = (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.parseNum)(statValues[0]);
    const numGamesCompleted = (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.parseNum)(statValues[1]);
    const completionPercent = (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.parseNum)(statValues[2]);
    const numUnearnedTrophies = (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.parseNum)(statValues[3]);
    const trophiesPerDay = (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.parseNum)(statValues[4]);
    const views = (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.parseNum)(statValues[5]);
    const worldRank = (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.parseNum)(statValues[6]);
    const countryRank = (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.parseNum)(statValues[7]);
    if (Number.isNaN(numGamesPlayed + numGamesCompleted + completionPercent + numUnearnedTrophies + trophiesPerDay + views)) {
        throw new Error(`Unable to parse profile stats`);
    }
    return {
        numGamesPlayed,
        numGamesCompleted,
        completionPercent,
        numUnearnedTrophies,
        trophiesPerDay,
        views,
        worldRank,
        countryRank,
    };
}


/***/ }),

/***/ "./src/sites/PSNP/pages/seriesCatalog.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSeriesCatalog: () => (/* binding */ initSeriesCatalog)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _services_DbSeriesController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/services/DbSeriesController.ts");
/* harmony import */ var _components_tables_series_SeriesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/components/tables/series/SeriesTable.tsx");




async function initSeriesCatalog(nexus) {
    if (!nexus.userPrefs.PSNP.bools.renderSeriesTable.value)
        return;
    const seriesController = new _services_DbSeriesController__WEBPACK_IMPORTED_MODULE_2__.DbSeriesController(nexus);
    const allSeriesPromise = seriesController.retrieveAllSeriesWithProgress();
    const tablePromise = nexus.elements.Common.table;
    Promise.all([allSeriesPromise, tablePromise]).then(([allSeries, table]) => {
        const deletables = [...nexus.doc.querySelectorAll('div.title-bar .no-shrink')];
        deletables.forEach(el => el.remove());
        const defaultRows = [...table.querySelectorAll('tr')];
        defaultRows.forEach(tr => tr.remove());
        const root = table.closest('div.col-xs-8')?.parentElement;
        root?.replaceChildren();
        root && (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tables_series_SeriesTable__WEBPACK_IMPORTED_MODULE_3__.SeriesTable, { allSeries: allSeries, prefs: nexus.userPrefs }), root);
    });
}


/***/ }),

/***/ "./src/sites/PSNP/services/DOM/dependentDOM.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ensurePsnIdIsSet: () => (/* binding */ ensurePsnIdIsSet),
/* harmony export */   setupDependentDOM: () => (/* binding */ setupDependentDOM)
/* harmony export */ });
async function ensurePsnIdIsSet(nexus) {
    if (!nexus.userPrefs.psnId) {
        const userNavDropdown = await nexus.elements.Common.userBarPsnId;
        const psnId = userNavDropdown.textContent?.trim() ?? '';
        console.log(`Changed stored PSN ID from '${nexus.userPrefs.psnId}' to '${psnId}'`);
        nexus.userPrefs.psnId = psnId;
        await nexus.userPrefs.save();
    }
    return nexus.userPrefs.psnId;
}
async function setupDependentDOM(nexus) {
    setFlaggedStatusAndHidePanel(nexus);
}
async function setFlaggedStatusAndHidePanel(nexus) {
    if (!nexus.viewingOwnProfile)
        return;
    const flagBoxTitle = await nexus.elements.Profile.flagBoxTitle;
    nexus.userPrefs.PSNP.isFlagged = !!flagBoxTitle;
    if (nexus.userPrefs.PSNP.isFlagged && nexus.userPrefs.PSNP.bools.hideFlagBlock.value) {
        flagBoxTitle.nextElementSibling?.remove();
        flagBoxTitle.remove();
    }
    await nexus.userPrefs.save();
}


/***/ }),

/***/ "./src/sites/PSNP/services/DOM/elements.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpHTMLElements: () => (/* binding */ PsnpHTMLElements),
/* harmony export */   getGameTable: () => (/* binding */ getGameTable)
/* harmony export */ });
/* harmony import */ var _shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/shared/utils/domUtil.ts");

const PsnpHTMLElements = {
    Common: {
        body: (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(),
        navBar: (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(`div.navigation.md-show`),
        userBarPsnId: (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(':is(a.dropdown-toggle.cf > span, #elUserLink)'),
        headerH3: (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(`#banner > div.banner-overlay > div > div.title-bar.flex.v-align > div.grow > h3`),
        header: (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(`#content :is(div.col-xs-8 div.grow, div.col-xs-12 > div.title)`),
        search: (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)('input#search'),
        table: (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(':is(#search-results tbody, #game_list > tbody, #gamesTable > tbody)'),
        footer: (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)('.footer, footer'),
    },
    Profile: {
        headerStats: (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(`span.stat.grow`),
        flagBoxTitle: (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(`div.red`),
    },
};
function getGameTable(doc) {
    return doc.querySelector(`:is(#search-results tbody, #game_list > tbody, #gamesTable > tbody)`);
}


/***/ }),

/***/ "./src/sites/PSNP/services/DOM/independentDOM.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupIndependentDOM)
/* harmony export */ });
/* harmony import */ var _shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/shared/utils/domUtil.ts");

async function setupIndependentDOM(nexus) {
    addSeriesTabToNavbar(nexus);
    normalizeCasingOfH3(nexus);
}
function addSeriesTabToNavbar(nexus) {
    nexus.elements.Common.navBar.then(_navBar => {
        const seriesTab = (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.newElement)(`li`, {}, (0,_shared_utils_domUtil__WEBPACK_IMPORTED_MODULE_0__.newElement)(`a`, { href: `https://psnprofiles.com/series` }, `Series`));
        const leaderboardTab = document.querySelector(`div.navigation > ul > li:nth-child(4)`);
        leaderboardTab?.after(seriesTab);
    });
}
function normalizeCasingOfH3(nexus) {
    nexus.elements.Common.headerH3.then(h3 => {
        h3.style.textTransform = `none`;
    });
}


/***/ }),

/***/ "./src/sites/PSNP/services/DbGamesController.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DbGamesController: () => (/* binding */ DbGamesController)
/* harmony export */ });
/* harmony import */ var _shared_utils_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/shared/utils/decorators.ts");
/* harmony import */ var _models_dbGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sites/PSNP/models/dbGame.ts");
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};


let DbGamesController = (() => {
    let _instanceExtraInitializers = [];
    let _retrieveAllGames_decorators;
    return class DbGamesController {
        static {
            _retrieveAllGames_decorators = [(0,_shared_utils_decorators__WEBPACK_IMPORTED_MODULE_0__.logMethodSpeed)()];
            __esDecorate(this, null, _retrieveAllGames_decorators, { kind: "method", name: "retrieveAllGames", static: false, private: false, access: { has: obj => "retrieveAllGames" in obj, get: obj => obj.retrieveAllGames } }, null, _instanceExtraInitializers);
        }
        allGames = (__runInitializers(this, _instanceExtraInitializers), []);
        nexus;
        get prefs() {
            return this.nexus.userPrefs.PSNP.bools;
        }
        constructor(nexus) {
            this.nexus = nexus;
        }
        async retrieveAllGames() {
            const allGamesRaw = await this.nexus.idb.getAll('psnp_games');
            this.allGames = allGamesRaw.map(data => new _models_dbGame__WEBPACK_IMPORTED_MODULE_1__.DbGame(data));
            return this.allGames;
        }
    };
})();


/***/ }),

/***/ "./src/sites/PSNP/services/DbSeriesController.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DbSeriesController: () => (/* binding */ DbSeriesController)
/* harmony export */ });
/* harmony import */ var _shared_utils_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/shared/utils/decorators.ts");
/* harmony import */ var _models_dbGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sites/PSNP/models/dbGame.ts");
/* harmony import */ var _models_dbSeries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/models/dbSeries.ts");
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};



let DbSeriesController = (() => {
    let _instanceExtraInitializers = [];
    let _retrieveAllSeriesWithProgress_decorators;
    return class DbSeriesController {
        static {
            _retrieveAllSeriesWithProgress_decorators = [(0,_shared_utils_decorators__WEBPACK_IMPORTED_MODULE_0__.logMethodSpeed)()];
            __esDecorate(this, null, _retrieveAllSeriesWithProgress_decorators, { kind: "method", name: "retrieveAllSeriesWithProgress", static: false, private: false, access: { has: obj => "retrieveAllSeriesWithProgress" in obj, get: obj => obj.retrieveAllSeriesWithProgress } }, null, _instanceExtraInitializers);
        }
        allSeries = (__runInitializers(this, _instanceExtraInitializers), []);
        nexus;
        get prefs() {
            return this.nexus.userPrefs.PSNP.bools;
        }
        constructor(nexus) {
            this.nexus = nexus;
        }
        async retrieveAllSeriesWithProgress() {
            const allSeries = await this.retrieveAllSeries();
            await this.assignGamesToSeries(allSeries);
            return allSeries;
        }
        async retrieveAllSeries() {
            const allSeriesRaw = await this.nexus.idb.getAll('psnp_series');
            this.allSeries = allSeriesRaw.map(data => new _models_dbSeries__WEBPACK_IMPORTED_MODULE_2__.DbSeries(data));
            return this.allSeries;
        }
        async assignGamesToSeries(_seriesList) {
            const seriesList = _seriesList ?? this.allSeries;
            const allGameIds = seriesList.flatMap(s => s.gameIds);
            const dbGameData = await this.nexus.idb.getByIds('psnp_games', allGameIds);
            const dbGamesLookup = dbGameData.reduce((lookup, gameData) => {
                if (gameData) {
                    lookup[gameData._id] = new _models_dbGame__WEBPACK_IMPORTED_MODULE_1__.DbGame(gameData);
                }
                return lookup;
            }, {});
            const seriesCalculationPromises = seriesList.map(async (dbSeries) => {
                const seriesDbGames = dbSeries.gameIds.map(id => dbGamesLookup[id]);
                for (const stage of dbSeries.stages) {
                    const stageDbGames = seriesDbGames.filter(game => game && stage.gameIds.includes(game._id));
                    stageDbGames.forEach(game => game && this.updateGameScopedMetrics(dbSeries, game));
                    const stageVerbose = { ...stage, games: stageDbGames };
                    this.updateStageScopedMetrics(dbSeries, stageVerbose);
                }
                this.updateAggregateStats(dbSeries, seriesDbGames);
                return dbSeries;
            });
            await Promise.allSettled(seriesCalculationPromises);
            return seriesList;
        }
        updateGameScopedMetrics(series, game) {
            const platifyComplation = this.prefs.platifyComplation.value;
            if (game.percent)
                series.userNumGamesPlayed++;
            if (game.userTrophyCount?.platinum)
                series.userNumGamesPlatted++;
            if (game.percent && game.percent === 100)
                series.userNumGames100Percented++;
            if (game.userPoints)
                series.userPoints += game.userPoints;
            if (game.userNumTrophies)
                series.userNumTrophies += game.userNumTrophies;
            if (game.userTrophyCount) {
                series.userTrophyCount.bronze += game.userTrophyCount.bronze;
                series.userTrophyCount.silver += game.userTrophyCount.silver;
                series.userTrophyCount.gold += game.userTrophyCount.gold;
                series.userTrophyCount.platinum += game.userTrophyCount.platinum;
            }
            const gameIsCompleted = platifyComplation ? !!game.userTrophyCount?.platinum : !!(game.percent && game.percent === 100);
            if (gameIsCompleted)
                series.userNumGamesCompleted++;
            series.userNumGamesTotal += platifyComplation ? game.trophyCount?.platinum ?? 0 : 1;
        }
        updateStageScopedMetrics(series, stage) {
            const platifyComplation = this.prefs.platifyComplation.value;
            const hideNonplats = this.prefs.platifySeriesHideNonplats.value;
            const stageGamesWithPlat = stage.games?.filter(game => game && game.trophyCount?.platinum) ?? [];
            const stageGamesPlatted = stageGamesWithPlat.filter(game => game && game.userTrophyCount?.platinum);
            const stageGames100Percented = stage.games?.filter(game => game?.percent === 100) ?? [];
            const stageHasPlat = stageGamesWithPlat.length > 0;
            const stageIsComplatted = stageGamesPlatted.length > 0 && stageGamesPlatted.length === stageGamesWithPlat.length;
            series.userNumStagesTotal += hideNonplats ? (stageHasPlat ? 1 : 0) : 1;
            series.userNumStagesCompleted += platifyComplation
                ? stageIsComplatted
                    ? 1
                    : 0
                : stageGames100Percented.length === stage.games?.length
                    ? 1
                    : 0;
        }
        updateAggregateStats(series, seriesGames) {
            series.userLatestTrophy = Math.max(...seriesGames.map(game => game?.latestTrophy ?? 0));
            series.userPercentGamesCompleted = Math.floor((series.userNumGamesCompleted / series.userNumGamesTotal) * 100);
            series.userPercentStagesCompleted = Math.floor((series.userNumStagesCompleted / series.userNumStagesTotal) * 100);
        }
    };
})();


/***/ }),

/***/ "./src/sites/PSNP/services/db/IDB.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrophyIDB: () => (/* binding */ TrophyIDB)
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/idb/build/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sites/PSNP/services/db/types.ts");
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");



let dbPromise;
class TrophyIDB {
    static version = 2;
    static async count(storeName) {
        const db = await initDB();
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const count = await store.count();
        return count;
    }
    static async getHighestId(storeName) {
        const db = await initDB();
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const keys = await store.getAllKeys();
        const highestId = Math.max(...keys);
        return highestId;
    }
    static async getByIds(storeName, ids) {
        const db = await initDB();
        const results = await Promise.all(ids.map(i => db.get(storeName, i)));
        return results;
    }
    static async getAll(storeName) {
        const db = await initDB();
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const results = await store.getAll();
        return results;
    }
    static async getItemData(storeName, domItems) {
        const dbItems = await TrophyIDB.getByIds(storeName, domItems.map(item => item._id));
        const itemData = domItems.map((domItem, i) => ({
            domItem,
            dbItem: dbItems[i],
            changeData: (0,trophyutil__WEBPACK_IMPORTED_MODULE_2__.diffUpdate)(dbItems[i], domItem, false),
        }));
        return itemData;
    }
    static async upsert(storeName, items) {
        const db = await initDB();
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const promises = items.map(async (item) => {
            const existingItem = await store.get(item._id);
            if (existingItem) {
                const updatedItem = Object.assign(existingItem, item);
                return store.put(updatedItem);
            }
            else {
                return store.add(item);
            }
        });
        await Promise.allSettled(promises);
        await tx.done;
    }
}
async function initDB() {
    if (!dbPromise) {
        dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(_types__WEBPACK_IMPORTED_MODULE_1__.DB_NAME, TrophyIDB.version, {
            upgrade(db, oldV, _newV, _transaction, _event) {
                if (oldV < 1) {
                    const gameStore = db.createObjectStore(_types__WEBPACK_IMPORTED_MODULE_1__.DB_STORE_GAMES, { keyPath: '_id' });
                    gameStore.createIndex('_id', '_id', { unique: true });
                    const seriesStore = db.createObjectStore(_types__WEBPACK_IMPORTED_MODULE_1__.DB_STORE_SERIES, { keyPath: '_id' });
                    seriesStore.createIndex('_id', '_id', { unique: true });
                    console.info(`Created IDB stores '${_types__WEBPACK_IMPORTED_MODULE_1__.DB_STORE_GAMES}' and '${_types__WEBPACK_IMPORTED_MODULE_1__.DB_STORE_SERIES}'`);
                }
            },
        });
    }
    const db = await dbPromise;
    return db;
}


/***/ }),

/***/ "./src/sites/PSNP/services/db/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DB_NAME: () => (/* binding */ DB_NAME),
/* harmony export */   DB_STORE_GAMES: () => (/* binding */ DB_STORE_GAMES),
/* harmony export */   DB_STORE_SERIES: () => (/* binding */ DB_STORE_SERIES),
/* harmony export */   isDbGameUpdateData: () => (/* binding */ isDbGameUpdateData),
/* harmony export */   isDbSeriesUpdateData: () => (/* binding */ isDbSeriesUpdateData)
/* harmony export */ });
/* harmony import */ var _models_dbGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sites/PSNP/models/dbGame.ts");
/* harmony import */ var _models_dbSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sites/PSNP/models/dbSeries.ts");


const DB_NAME = 'TrophyNexus';
const DB_STORE_GAMES = 'psnp_games';
const DB_STORE_SERIES = 'psnp_series';
function isDbGameUpdateData(arg) {
    return arg.length === 0 || arg[0] instanceof _models_dbGame__WEBPACK_IMPORTED_MODULE_0__.DbGame;
}
function isDbSeriesUpdateData(arg) {
    return arg.length === 0 || arg[0] instanceof _models_dbSeries__WEBPACK_IMPORTED_MODULE_1__.DbSeries;
}


/***/ }),

/***/ "./src/sites/PSNP/services/db/updateAllFromServer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseMaxPageNum: () => (/* binding */ parseMaxPageNum),
/* harmony export */   populateIDBFromServer: () => (/* binding */ populateIDBFromServer)
/* harmony export */ });
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/shared/utils/fetch.ts");
/* harmony import */ var _shared_services_mongoApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/shared/services/mongoApi/index.ts");
/* harmony import */ var _shared_utils_getProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/shared/utils/getProgress.ts");
/* harmony import */ var _updateAllGamesLocally__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sites/PSNP/services/db/updateAllGamesLocally.ts");





const MAX_GAMES_PER_REQUEST = 6000;
const MAX_SERIES_PER_REQUEST = 2000;
function parseMaxPageNum(doc) {
    const maxPages = doc.querySelector(trophyutil__WEBPACK_IMPORTED_MODULE_0__.Select.MAX_PAGE_NUM)?.textContent ?? '';
    const pageNum = +maxPages;
    if (!pageNum || Number.isNaN(pageNum)) {
        throw new Error(`Unable to parse max page number`);
    }
    return pageNum;
}
async function countPsnpGames() {
    const MAX_GAMES_PER_PAGE = 50;
    const res = await (0,_shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchDoc)('https://psnprofiles.com/games?shovelware');
    const numPages = parseMaxPageNum(res.doc);
    return numPages * MAX_GAMES_PER_PAGE;
}
async function countPsnpSeries() {
    const MAX_SERIES_PER_PAGE = 50;
    const res = await (0,_shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchDoc)('https://psnprofiles.com/series');
    const numPages = parseMaxPageNum(res.doc);
    return numPages * MAX_SERIES_PER_PAGE - (MAX_SERIES_PER_PAGE - 1);
}
async function* populateIDBFromServer(nexus) {
    const [numGames, numSeries] = await Promise.all([countPsnpGames(), countPsnpSeries()]);
    const totals = { fetched: 0, all: numGames + numSeries };
    const populateStoreFromServer = async function* (storeName, batchSize) {
        const collection = storeName === 'psnp_games' ? 'games' : 'series';
        let offset = 0, upToDate = false;
        while (!upToDate) {
            const items = (await (0,_shared_services_mongoApi__WEBPACK_IMPORTED_MODULE_2__.findItems)({ collection, offset, limit: batchSize }));
            if (items.length < batchSize) {
                upToDate = true;
            }
            await nexus.idb.upsert(storeName, items);
            offset += batchSize;
            totals.fetched += items.length;
            yield (0,_shared_utils_getProgress__WEBPACK_IMPORTED_MODULE_3__.getProgressMetrics)(totals.fetched, totals.all);
        }
    };
    for await (const progressMetrics of populateStoreFromServer('psnp_series', MAX_SERIES_PER_REQUEST)) {
        yield progressMetrics;
    }
    nexus.userPrefs.PSNP.lastUpdatedAllSeries = Date.now();
    await nexus.userPrefs.save();
    for await (const progressMetrics of populateStoreFromServer('psnp_games', MAX_GAMES_PER_REQUEST)) {
        yield progressMetrics;
    }
    await populateLatestDlcListings(nexus);
    nexus.userPrefs.PSNP.lastUpdatedAllGames = Date.now();
    await nexus.userPrefs.save();
    return totals;
}
async function populateLatestDlcListings(nexus) {
    const latestGameIdsWithDlc = await (0,_updateAllGamesLocally__WEBPACK_IMPORTED_MODULE_4__.fetchLatestGameIdsWithDlc)();
    const gameDetails = (await (0,_shared_services_mongoApi__WEBPACK_IMPORTED_MODULE_2__.findItems)({
        collection: 'games',
        projection: { metaData: 1, trophyGroups: 1 },
        limit: 50,
        offset: 0,
        filter: {
            _id: {
                $in: latestGameIdsWithDlc,
            },
        },
    }));
    console.log(gameDetails);
    await nexus.idb.upsert('psnp_games', gameDetails);
}


/***/ }),

/***/ "./src/sites/PSNP/services/db/updateAllGamesLocally.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchGamesOrDLCPage: () => (/* binding */ fetchGamesOrDLCPage),
/* harmony export */   fetchLatestGameIdsWithDlc: () => (/* binding */ fetchLatestGameIdsWithDlc),
/* harmony export */   filterOutSeenItems: () => (/* binding */ filterOutSeenItems),
/* harmony export */   parseCatalogDLCs: () => (/* binding */ parseCatalogDLCs),
/* harmony export */   updateAllGamesLocally: () => (/* binding */ updateAllGamesLocally)
/* harmony export */ });
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/shared/utils/fetch.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/services/db/util.ts");



async function updateAllGamesLocally(nexus) {
    if (!shouldUpdateGames(nexus))
        return null;
    const changes = (0,_util__WEBPACK_IMPORTED_MODULE_2__.initScrapeResult)();
    let currentPage = 1;
    let doc = await fetchGamesOrDLCPage(currentPage, 'games');
    const TOTAL_GAME_PAGES = (0,_util__WEBPACK_IMPORTED_MODULE_2__.parseMaxPageNum)(doc);
    let upToDate = false;
    while (!upToDate) {
        try {
            doc = await fetchGamesOrDLCPage(currentPage, 'games', doc);
            const pageItems = parseCatalogGames(doc);
            const seriesPageData = await nexus.idb.getItemData('psnp_games', pageItems);
            const { newItems, updateData } = (0,_util__WEBPACK_IMPORTED_MODULE_2__.classifyPageData)(seriesPageData, true);
            await (0,_util__WEBPACK_IMPORTED_MODULE_2__.fetchNewGameDetails)(newItems, '[ALL GAMES]');
            await (0,_util__WEBPACK_IMPORTED_MODULE_2__.commitDbGameChanges)(nexus, changes, newItems, updateData);
            upToDate = (0,_util__WEBPACK_IMPORTED_MODULE_2__.isFinished)({
                currentPage,
                maxPages: TOTAL_GAME_PAGES,
                newPageItems: newItems,
                updatedPageItems: updateData,
                itemsPerPage: 50,
            });
            currentPage++;
        }
        catch (err) {
            console.error(err);
        }
    }
    const seenGames = {};
    currentPage = 1;
    doc = await fetchGamesOrDLCPage(currentPage, 'dlc');
    upToDate = false;
    while (!upToDate) {
        try {
            doc = await fetchGamesOrDLCPage(currentPage, 'dlc', doc);
            const dlcListingsRaw = parseCatalogDLCs(doc);
            const dlcListings = filterOutSeenItems(dlcListingsRaw, seenGames);
            const gameIds = dlcListings.map(dlc => dlc._id);
            const dbGames = await nexus.idb.getByIds('psnp_games', gameIds);
            const gamesToUpdate = [];
            for (const dlc of dlcListings) {
                const dbGame = dbGames.find(g => g?._id === dlc._id);
                const dlcAlreadyExists = dbGame?.trophyGroups?.some(group => group.groupNum === dlc.groupNum);
                if (dlcAlreadyExists) {
                    upToDate = true;
                    break;
                }
                else {
                    if (dbGame)
                        gamesToUpdate.push([dbGame, dlc, (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.diffUpdate)(dbGame, dlc, false)]);
                }
            }
            const dbGamesToUpdate = gamesToUpdate.map(tuple => tuple[0]);
            await (0,_util__WEBPACK_IMPORTED_MODULE_2__.fetchNewGameDetails)(dbGamesToUpdate);
            await (0,_util__WEBPACK_IMPORTED_MODULE_2__.commitDbGameChanges)(nexus, changes, dbGamesToUpdate, []);
            if (upToDate)
                console.log(`DLC: Stopping at page ${currentPage}`);
            currentPage++;
        }
        catch (err) {
            console.error(err);
        }
    }
    nexus.userPrefs.PSNP.lastUpdatedAllGames = Date.now();
    nexus.userPrefs.save();
    (0,_util__WEBPACK_IMPORTED_MODULE_2__.logChanges)(changes, '[ALL GAMES] ');
    return changes;
}
function shouldUpdateGames(nexus) {
    const hoursSinceLastFetch = nexus.hoursSinceLastUpdate('lastUpdatedAllGames');
    const shouldUpdate = hoursSinceLastFetch >= 1 || nexus.pageType === trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.Games;
    return !!shouldUpdate;
}
async function fetchGamesOrDLCPage(targetPage, type, prevDoc) {
    const alreadyFetchedPage = prevDoc && targetPage === 1;
    if (alreadyFetchedPage) {
        return prevDoc;
    }
    const url = type === 'games'
        ? `https://psnprofiles.com/games?page=${targetPage}&shovelware`
        : `https://psnprofiles.com/games/dlc?page=${targetPage}`;
    const res = await (0,_shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchDoc)(url);
    return res.doc;
}
async function fetchLatestGameIdsWithDlc() {
    const latestDlcPage = await fetchGamesOrDLCPage(1, 'dlc');
    const dlcListings = parseCatalogDLCs(latestDlcPage);
    const seenGames = {};
    const gameIdsToFetchDetailsFor = filterOutSeenItems(dlcListings, seenGames).map(dlc => dlc._id);
    return gameIdsToFetchDetailsFor;
}
function parseCatalogGames(doc) {
    const parser = new trophyutil__WEBPACK_IMPORTED_MODULE_0__.ParserGameStandard();
    const gameNodes = trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpGameBase.getGameNodes(trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.Games, doc);
    const gameListings = gameNodes.map(tr => parser.parse(tr));
    return gameListings;
}
function parseCatalogDLCs(doc) {
    const parser = new trophyutil__WEBPACK_IMPORTED_MODULE_0__.ParserDlcListing();
    const dlcNodes = trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpGameBase.getGameNodes(trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.Games, doc);
    const dlcListings = dlcNodes.map(tr => parser.parse(tr));
    return dlcListings;
}
function filterOutSeenItems(items, seenItems) {
    const uniqueItems = items.filter(dlc => {
        if (seenItems[dlc._id]) {
            return false;
        }
        else {
            seenItems[dlc._id] = true;
            return true;
        }
    });
    return uniqueItems;
}


/***/ }),

/***/ "./src/sites/PSNP/services/db/updateAllSeriesLocally.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateAllSeriesLocally: () => (/* binding */ updateAllSeriesLocally)
/* harmony export */ });
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/shared/utils/fetch.ts");
/* harmony import */ var _models_dbSeries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/models/dbSeries.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/services/db/util.ts");




async function updateAllSeriesLocally(nexus) {
    const changes = (0,_util__WEBPACK_IMPORTED_MODULE_3__.initScrapeResult)();
    const hoursSinceLastFetch = nexus.hoursSinceLastUpdate('lastUpdatedAllSeries');
    const shouldUpdate = nexus.pageType === trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.SeriesCatalog || hoursSinceLastFetch >= 1;
    if (!shouldUpdate)
        return null;
    let currentPage = 1;
    let doc = await fetchSeriesCatalogPage(nexus, currentPage);
    const TOTAL_PAGES = (0,_util__WEBPACK_IMPORTED_MODULE_3__.parseMaxPageNum)(doc);
    let upToDate = false;
    while (!upToDate) {
        try {
            doc = await fetchSeriesCatalogPage(nexus, currentPage, doc);
            const pageItems = parseSeriesListings(doc);
            const seriesPageData = await nexus.idb.getItemData('psnp_series', pageItems);
            const pageScrapeResult = (0,_util__WEBPACK_IMPORTED_MODULE_3__.classifyPageData)(seriesPageData);
            const { newItems, updateData } = await fetchNewSeriesDetails(pageScrapeResult);
            await commitDbSeriesChanges(nexus, changes, newItems, updateData);
            upToDate = (0,_util__WEBPACK_IMPORTED_MODULE_3__.isFinished)({
                currentPage,
                maxPages: TOTAL_PAGES,
                newPageItems: newItems,
                updatedPageItems: updateData,
                itemsPerPage: 50,
            });
            currentPage++;
        }
        catch (err) {
            console.error(err);
        }
    }
    nexus.userPrefs.PSNP.lastUpdatedAllSeries = Date.now();
    nexus.userPrefs.save();
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.logChanges)(changes, '[ALL SERIES] ');
    return changes;
}
async function fetchNewSeriesDetails(scrapeResult) {
    const result = (0,_util__WEBPACK_IMPORTED_MODULE_3__.initScrapeResult)();
    for (const newSeries of scrapeResult.newItems) {
        const stages = await getSeriesStageInfo(_models_dbSeries__WEBPACK_IMPORTED_MODULE_2__.DbSeries.url(newSeries));
        const series = new _models_dbSeries__WEBPACK_IMPORTED_MODULE_2__.DbSeries({ ...newSeries, stages });
        result.newItems.push(series);
    }
    for (const update of scrapeResult.updateData) {
        const stages = await getSeriesStageInfo(_models_dbSeries__WEBPACK_IMPORTED_MODULE_2__.DbSeries.url(update[0]));
        const series = new _models_dbSeries__WEBPACK_IMPORTED_MODULE_2__.DbSeries({ ...update[0], stages });
        result.updateData.push([series, update[1]]);
    }
    return result;
}
async function fetchSeriesCatalogPage(nexus, targetPage, prevDoc) {
    const alreadyOnPage = targetPage === 1 && nexus.pageType === trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.SeriesCatalog;
    if (alreadyOnPage) {
        return nexus.doc;
    }
    const alreadyFetchedPage = prevDoc && targetPage === 1;
    if (alreadyFetchedPage) {
        return prevDoc;
    }
    const url = `https://psnprofiles.com/series?page=${targetPage}`;
    const res = await (0,_shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchDoc)(url);
    return res.doc;
}
function parseSeriesListings(doc) {
    const parser = new trophyutil__WEBPACK_IMPORTED_MODULE_0__.ParserSeriesListing();
    const seriesNodes = trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpGameBase.getGameNodes(trophyutil__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.SeriesCatalog, doc);
    const seriesListings = seriesNodes.map(tr => parser.parse(tr));
    return seriesListings;
}
async function getSeriesStageInfo(url) {
    const res = await (0,_shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchDoc)(url);
    const seriesPageParser = new trophyutil__WEBPACK_IMPORTED_MODULE_0__.ParserSeriesPageNeutral();
    const seriesPage = seriesPageParser.parse({ document: res.doc, URL, location: { ...location, pathname: new URL(url).pathname } });
    const shortenedStages = seriesPage.stages.map(stage => {
        const stageNum = stage.stageNum;
        const gameIds = stage.gameIds;
        return { stageNum, gameIds };
    });
    return shortenedStages;
}
async function commitDbSeriesChanges(nexus, changes, newPageSeries, updatedPageSeries) {
    if (newPageSeries.length > 0) {
        changes.newItems.push(...newPageSeries);
        await nexus.idb.upsert('psnp_series', newPageSeries);
    }
    if (updatedPageSeries.length > 0) {
        changes.updateData.push(...updatedPageSeries);
        await nexus.idb.upsert('psnp_series', updatedPageSeries.map(x => x[0]));
    }
    return changes;
}


/***/ }),

/***/ "./src/sites/PSNP/services/db/updateUserGames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateUserGames: () => (/* binding */ updateUserGames),
/* harmony export */   updateUserGamesPassively: () => (/* binding */ updateUserGamesPassively)
/* harmony export */ });
/* harmony import */ var _models_dbGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sites/PSNP/models/dbGame.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sites/PSNP/services/db/util.ts");
/* harmony import */ var _shared_utils_getProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/shared/utils/getProgress.ts");
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _shared_utils_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/shared/utils/fetch.ts");





async function updateUserGamesPassively(nexus) {
    const uninitialized = nexus.userPrefs.PSNP.lastUpdatedUserGames === 0;
    const hoursSinceLastFetch = nexus.hoursSinceLastUpdate('lastUpdatedUserGames');
    const shouldAutoCache = !nexus.guest && !uninitialized && (hoursSinceLastFetch >= 1 || nexus.viewingOwnProfile);
    if (!shouldAutoCache)
        return;
    await nexus.elements.Common.footer;
    for await (const progress of updateUserGames(nexus)) {
        console.log(`Passively cached page ${progress.a}`);
    }
    nexus.userPrefs.PSNP.lastUpdatedUserGames = Date.now();
    await nexus.userPrefs.save();
}
async function* updateUserGames(nexus) {
    const changes = (0,_util__WEBPACK_IMPORTED_MODULE_1__.initScrapeResult)();
    let doc = await fetchProfilePage(nexus, 1);
    const NUM_PAGES = (0,_util__WEBPACK_IMPORTED_MODULE_1__.calculateNumProfilePages)(doc);
    let currentPage = 1;
    let finished = false;
    while (!finished) {
        try {
            doc = await fetchProfilePage(nexus, currentPage, doc);
            const pageItems = parseProfileGames(doc);
            const pageData = await nexus.idb.getItemData('psnp_games', pageItems);
            pageData.forEach(x => {
                x.dbItem = x.dbItem && new _models_dbGame__WEBPACK_IMPORTED_MODULE_0__.DbGame(x.dbItem);
                x.domItem = new _models_dbGame__WEBPACK_IMPORTED_MODULE_0__.DbGame(x.domItem);
            });
            const { newItems, updateData } = (0,_util__WEBPACK_IMPORTED_MODULE_1__.classifyPageData)(pageData);
            await (0,_util__WEBPACK_IMPORTED_MODULE_1__.fetchNewGameDetails)(newItems, '[USER GAMES]');
            await (0,_util__WEBPACK_IMPORTED_MODULE_1__.commitDbGameChanges)(nexus, changes, newItems, updateData);
            finished = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isFinished)({
                currentPage,
                maxPages: NUM_PAGES,
                newPageItems: newItems,
                updatedPageItems: updateData,
                itemsPerPage: 100,
            });
            if (!(finished && currentPage === 1)) {
                console.log(`Parsed page ${currentPage}`);
            }
            yield (0,_shared_utils_getProgress__WEBPACK_IMPORTED_MODULE_2__.getProgressMetrics)(currentPage, NUM_PAGES);
            currentPage++;
        }
        catch (err) {
            console.error(`Error while parsing page ${currentPage}`);
        }
    }
    nexus.userPrefs.PSNP.lastUpdatedUserGames = Date.now();
    nexus.userPrefs.save();
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.logChanges)(changes, '[USER GAMES] ');
    return changes;
}
function parseProfileGames(doc) {
    const parser = new trophyutil__WEBPACK_IMPORTED_MODULE_3__.ParserGamePlayable();
    const gameNodes = trophyutil__WEBPACK_IMPORTED_MODULE_3__.PsnpGamePlayable.getGameNodes(trophyutil__WEBPACK_IMPORTED_MODULE_3__.PsnpPageType.Profile, doc);
    const games = gameNodes.map(node => _models_dbGame__WEBPACK_IMPORTED_MODULE_0__.DbGame.wrapProfileGame(parser.parse(node)));
    return games;
}
async function fetchProfilePage(nexus, targetPage, prevDoc) {
    const alreadyOnPage = targetPage === 1 && nexus.viewingOwnProfile;
    if (alreadyOnPage) {
        return nexus.doc;
    }
    const alreadyFetchedPage = prevDoc && targetPage === 1;
    if (alreadyFetchedPage) {
        return prevDoc;
    }
    const url = `https://psnprofiles.com/${nexus.userPrefs.psnId}?completion=all&order=last-played&pf=all&page=${targetPage}`;
    const res = await (0,_shared_utils_fetch__WEBPACK_IMPORTED_MODULE_4__.fetchDoc)(url);
    return res.doc;
}


/***/ }),

/***/ "./src/sites/PSNP/services/db/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateNumProfilePages: () => (/* binding */ calculateNumProfilePages),
/* harmony export */   classifyPageData: () => (/* binding */ classifyPageData),
/* harmony export */   commitDbGameChanges: () => (/* binding */ commitDbGameChanges),
/* harmony export */   fetchNewGameDetails: () => (/* binding */ fetchNewGameDetails),
/* harmony export */   initScrapeResult: () => (/* binding */ initScrapeResult),
/* harmony export */   isFinished: () => (/* binding */ isFinished),
/* harmony export */   logChanges: () => (/* binding */ logChanges),
/* harmony export */   parseMaxPageNum: () => (/* binding */ parseMaxPageNum)
/* harmony export */ });
/* harmony import */ var trophyutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/shared/utils/fetch.ts");
/* harmony import */ var _models_dbGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sites/PSNP/models/dbGame.ts");
/* harmony import */ var _pages_profile_parseHeaderStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/sites/PSNP/pages/profile/parseHeaderStats.ts");
/* harmony import */ var _shared_services_mongoApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/shared/services/mongoApi/index.ts");





function initScrapeResult() {
    return {
        newItems: [],
        updateData: [],
    };
}
function calculateNumProfilePages(doc) {
    const stats = (0,_pages_profile_parseHeaderStats__WEBPACK_IMPORTED_MODULE_3__["default"])(doc);
    return Math.ceil(stats.numGamesPlayed / 100);
}
function parseMaxPageNum(doc) {
    const maxPages = doc.querySelector(trophyutil__WEBPACK_IMPORTED_MODULE_0__.Select.MAX_PAGE_NUM)?.textContent ?? '';
    const pageNum = +maxPages;
    if (!pageNum || Number.isNaN(pageNum)) {
        throw new Error(`Unable to parse max page number`);
    }
    return pageNum;
}
function classifyPageData(pageData, strictUpdateChecks = false) {
    const newItems = [];
    const updateData = [];
    for (const itemData of pageData) {
        if (!itemData.dbItem) {
            newItems.push(itemData.domItem);
            continue;
        }
        const changeData = (0,trophyutil__WEBPACK_IMPORTED_MODULE_0__.diffUpdate)(itemData.dbItem, itemData.domItem, true);
        changeData.changes = changeData.changes.filter(change => {
            return !change.key.endsWith('At');
        });
        if (strictUpdateChecks) {
            const meaningfulChanges = getMeaningfulChanges([changeData]);
            if (changeData.changes.length && meaningfulChanges.length > 0) {
                updateData.push([itemData.dbItem, changeData]);
            }
        }
        else {
            if (changeData.changes.length) {
                updateData.push([itemData.dbItem, changeData]);
            }
        }
    }
    return { newItems, updateData };
}
function isUnchanged(changeData) {
    const isUpdate = changeData.operation === 'update';
    const negligibleKeys = ['rarity', 'createdAt', 'updatedAt'];
    const isNegligibleUpdate = changeData.changes.every(change => {
        return negligibleKeys.some(key => change.key.includes(key));
    });
    return isUpdate && (isNegligibleUpdate || changeData.changes.length === 0);
}
function getMeaningfulChanges(changeData) {
    const changedItems = changeData.filter(x => !isUnchanged(x));
    return changedItems;
}
async function commitDbGameChanges(nexus, changes, newPageGames, updatedPageGames) {
    if (newPageGames.length > 0) {
        changes.newItems.push(...newPageGames);
        await nexus.idb.upsert('psnp_games', newPageGames.map(x => new _models_dbGame__WEBPACK_IMPORTED_MODULE_2__.DbGame(x)));
    }
    if (updatedPageGames.length > 0) {
        changes.updateData.push(...updatedPageGames);
        await nexus.idb.upsert('psnp_games', updatedPageGames.map(x => x[0]));
    }
    return changes;
}
async function fetchNewGameDetails(newGames, consoleLogPrefix) {
    if (newGames.length) {
        const msg = `⚡${consoleLogPrefix} Fetching page details for ${newGames.length} games...`;
        console.log('%c' + msg, 'color:yellowgreen');
    }
    const sortedNewGames = newGames.sort((a, b) => a._id - b._id);
    if (sortedNewGames.length >= 10) {
        const sortedVerboseGames = (await (0,_shared_services_mongoApi__WEBPACK_IMPORTED_MODULE_4__.findItems)({
            collection: 'games',
            limit: 2000,
            offset: 0,
            projection: {},
            filter: {
                _id: {
                    $in: sortedNewGames.map(g => g._id),
                },
            },
            sort: {
                _id: 1,
            },
        }));
        sortedVerboseGames.forEach((game, i) => {
            Object.assign(sortedNewGames[i] ?? {}, game);
        });
    }
    else {
        const parser = new trophyutil__WEBPACK_IMPORTED_MODULE_0__.ParserGamePage();
        for (const game of sortedNewGames) {
            const doc = (await (0,_shared_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchDoc)(_models_dbGame__WEBPACK_IMPORTED_MODULE_2__.DbGame.url(game))).doc;
            const gamePage = parser.parse(doc);
            Object.assign(game, gamePage);
        }
    }
    console.log(`fetchNewGameDetails updated ${sortedNewGames.length} games.`);
}
function isFinished({ currentPage, maxPages, newPageItems, updatedPageItems, itemsPerPage }) {
    const numMeaningfulChanges = getMeaningfulChanges(updatedPageItems.map(x => x[1])).length + newPageItems.length;
    const parsedAllPages = currentPage >= maxPages;
    const caughtUp = itemsPerPage > numMeaningfulChanges;
    return parsedAllPages || caughtUp;
}
function logChanges(changes, prefix = '') {
    const meaningfulChanges = changes.updateData.filter(change => !change[1].changes.every(x => x.key.includes('At')));
    const msg = `🏁${prefix}Caching finished: ${changes.newItems.length} new, ${meaningfulChanges.length} updated.`;
    console.log('%c' + msg, 'color:limegreen');
    if (changes.newItems.length)
        console.log(changes.newItems);
    if (meaningfulChanges.length)
        console.log(meaningfulChanges);
}


/***/ }),

/***/ "./src/sites/PSNP/util/dates.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msToDateString: () => (/* binding */ msToDateString)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");

function msToDateString(ms) {
    const date = new Date(ms);
    const day = date.getDate();
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const monthName = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [day, (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup", { children: getOrdinalSuffix(day) }), " ", monthName, " ", year] }));
}
function getOrdinalSuffix(day) {
    if (day > 3 && day < 21)
        return 'th';
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}


/***/ }),

/***/ "./src/sites/TTA/TTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TTA: () => (/* binding */ TTA)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/preact/hooks/dist/hooks.module.js");


const TTA = ({ children, nexus }) => {
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        (async () => {
        })();
    }, []);
    return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};


/***/ }),

/***/ "./src/sites/TTA/nexus.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrophyNexusTTA: () => (/* binding */ TrophyNexusTTA)
/* harmony export */ });
/* harmony import */ var _nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sites/nexus.ts");

class TrophyNexusTTA extends _nexus__WEBPACK_IMPORTED_MODULE_0__["default"] {
    pageType;
    constructor(nexus, pageType) {
        super(nexus);
        this.pageType = pageType;
    }
}


/***/ }),

/***/ "./src/sites/nexus.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HostnameToSiteName: () => (/* binding */ HostnameToSiteName),
/* harmony export */   "default": () => (/* binding */ TrophyNexus),
/* harmony export */   getSiteName: () => (/* binding */ getSiteName)
/* harmony export */ });
/* harmony import */ var _PSNP_services_db_IDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sites/PSNP/services/db/IDB.ts");

const HostnameToSiteName = {
    'psnprofiles.com': 'PSNP',
    'forum.psnprofiles.com': 'PSNPForum',
    'www.truetrophies.com': 'TT',
    'www.trueachievements.com': 'TA',
};
function getSiteName(hostname) {
    if (hostname in HostnameToSiteName) {
        return HostnameToSiteName[hostname];
    }
    return;
}
class TrophyNexus {
    idb = _PSNP_services_db_IDB__WEBPACK_IMPORTED_MODULE_0__.TrophyIDB;
    browserContext;
    siteName;
    userPrefs;
    constructor({ siteName, userPrefs, browserContext }) {
        this.browserContext = browserContext;
        this.siteName = siteName;
        this.userPrefs = userPrefs;
    }
    get devMode() {
        return GM.info.script.name.includes('TEST');
    }
    get doc() {
        return this.browserContext.window.document;
    }
    get url() {
        return this.browserContext.url;
    }
    get searchParams() {
        return this.url.searchParams;
    }
    get guest() {
        return !this.userPrefs.psnId;
    }
    hoursSinceLastUpdate(type) {
        const ONE_HOUR = 1000 * 60 * 60;
        const timeNow = new Date().valueOf();
        const timeLastUpdated = this.userPrefs.PSNP[type];
        const hoursSinceLastUpdate = (timeNow - timeLastUpdated) / ONE_HOUR;
        return hoursSinceLastUpdate;
    }
}


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   api: () => (/* binding */ api),
/* harmony export */   config: () => (/* binding */ config$1),
/* harmony export */   counter: () => (/* binding */ counter),
/* harmony export */   dom: () => (/* binding */ dom$1),
/* harmony export */   findIconDefinition: () => (/* binding */ findIconDefinition$1),
/* harmony export */   icon: () => (/* binding */ icon),
/* harmony export */   layer: () => (/* binding */ layer),
/* harmony export */   library: () => (/* binding */ library$1),
/* harmony export */   noAuto: () => (/* binding */ noAuto$1),
/* harmony export */   parse: () => (/* binding */ parse$1),
/* harmony export */   text: () => (/* binding */ text),
/* harmony export */   toHtml: () => (/* binding */ toHtml$1)
/* harmony export */ });
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _wrapRegExp() {
  _wrapRegExp = function (re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };

  var _super = RegExp.prototype,
      _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      return groups[name] = result[g[name]], groups;
    }, Object.create(null));
  }

  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    }

    if ("function" == typeof substitution) {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;
        return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }

    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var FAMILY_CLASSIC = 'classic';
var FAMILY_SHARP = 'sharp';
var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

function familyProxy(obj) {
  // Defaults to the classic family if family is not available
  return new Proxy(obj, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
    }
  });
}
var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
  'fa': 'solid',
  'fas': 'solid',
  'fa-solid': 'solid',
  'far': 'regular',
  'fa-regular': 'regular',
  'fal': 'light',
  'fa-light': 'light',
  'fat': 'thin',
  'fa-thin': 'thin',
  'fad': 'duotone',
  'fa-duotone': 'duotone',
  'fab': 'brands',
  'fa-brands': 'brands',
  'fak': 'kit',
  'fa-kit': 'kit'
}), _defineProperty(_familyProxy, FAMILY_SHARP, {
  'fa': 'solid',
  'fass': 'solid',
  'fa-solid': 'solid',
  'fasr': 'regular',
  'fa-regular': 'regular',
  'fasl': 'light',
  'fa-light': 'light'
}), _familyProxy));
var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'thin': 'fat',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
}), _defineProperty(_familyProxy2, FAMILY_SHARP, {
  'solid': 'fass',
  'regular': 'fasr',
  'light': 'fasl'
}), _familyProxy2));
var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
  'fab': 'fa-brands',
  'fad': 'fa-duotone',
  'fak': 'fa-kit',
  'fal': 'fa-light',
  'far': 'fa-regular',
  'fas': 'fa-solid',
  'fat': 'fa-thin'
}), _defineProperty(_familyProxy3, FAMILY_SHARP, {
  'fass': 'fa-solid',
  'fasr': 'fa-regular',
  'fasl': 'fa-light'
}), _familyProxy3));
var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
  'fa-brands': 'fab',
  'fa-duotone': 'fad',
  'fa-kit': 'fak',
  'fa-light': 'fal',
  'fa-regular': 'far',
  'fa-solid': 'fas',
  'fa-thin': 'fat'
}), _defineProperty(_familyProxy4, FAMILY_SHARP, {
  'fa-solid': 'fass',
  'fa-regular': 'fasr',
  'fa-light': 'fasl'
}), _familyProxy4));
var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/; // eslint-disable-line no-useless-escape

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal',
  '100': 'fat'
}), _defineProperty(_familyProxy5, FAMILY_SHARP, {
  '900': 'fass',
  '400': 'fasr',
  '300': 'fasl'
}), _familyProxy5));
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'duotone-group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var prefixes = new Set();
Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}; // familyPrefix is deprecated but we must still support it if present

if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}

var _config = _objectSpread2(_objectSpread2({}, _default), initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function (key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set(val) {
      _config[key] = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config[key];
    }
  });
}); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0

Object.defineProperty(config, 'familyPrefix', {
  enumerable: true,
  set: function set(val) {
    _config.cssPrefix = val;

    _onChangeCb.forEach(function (cb) {
      return cb(config);
    });
  },
  get: function get() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);

  return function () {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";

function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var _cssInserted = false;

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css: css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      var extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
}

function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;

  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);

    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }

  return first;
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
  d1: 1,
  d2: 2
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2,
  cls2: 3,
  d2: 4
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2
})];

var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
var styles = namespace.styles,
    shims = namespace.shims;
var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = (_PREFIXES = {}, _defineProperty(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function getIconName(cssPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'number';
      });
      aliases.forEach(function (alias) {
        acc[alias.toString(16)] = iconName;
      });
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    acc[iconName] = iconName;

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'string';
      });
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
    }

    return acc;
  });
  _byAlias = lookup(function (acc, icon, iconName) {
    var aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(function (alias) {
      acc[alias] = iconName;
    });
    return acc;
  }); // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.

  var hasRegular = 'far' in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function (acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function (c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$family = params.family,
      family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
function getCanonicalIcon(values) {
  var _famProps;

  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups,
      skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var famProps = (_famProps = {}, _defineProperty(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
  var givenPrefix = null;
  var family = FAMILY_CLASSIC;

  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function (v) {
    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
  })) {
    family = FAMILY_CLASSIC;
  }

  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function (v) {
    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
  })) {
    family = FAMILY_SHARP;
  }

  var canonical = values.reduce(function (acc, cls) {
    var iconName = getIconName(config.cssPrefix, cls);

    if (styles[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family: family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
      acc.rest.push(cls);
    }

    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);

      if (shim.prefix) {
        givenPrefix = null;
      }

      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;

      if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
        // Allow a fallback from the regular style to solid if regular is not available
        // but only if we aren't auto-fetching SVGs
        acc.prefix = 'fas';
      }
    }

    return acc;
  }, emptyCanonicalIcon());

  if (values.includes('fa-brands') || values.includes('fab')) {
    canonical.prefix = 'fab';
  }

  if (values.includes('fa-duotone') || values.includes('fad')) {
    canonical.prefix = 'fad';
  }

  if (!canonical.prefix && family === FAMILY_SHARP && (styles['fass'] || config.autoFetchSvg)) {
    canonical.prefix = 'fass';
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }

  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }

  return canonical;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change

        var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        var aliases = icon[2];
        if (!additions[prefix]) additions[prefix] = {};

        if (aliases.length > 0) {
          aliases.forEach(function (alias) {
            if (typeof alias === 'string') {
              additions[prefix][alias] = icon;
            }
          });
        }

        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  var obj = _ref.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function (k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });

  _plugins.forEach(function (plugin) {
    var mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(function (tk) {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }

      if (_typeof(mixout[tk]) === 'object') {
        Object.keys(mixout[tk]).forEach(function (sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }

          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });

    if (plugin.hooks) {
      var hooks = plugin.hooks();
      Object.keys(hooks).forEach(function (hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }

        _hooks[hook].push(hooks[hook]);
      });
    }

    if (plugin.provides) {
      plugin.provides(providers);
    }
  });

  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    hookFn.apply(null, args);
  });
  return undefined;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }

  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject('Operation requires a DOM of some kind.');
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }

    if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }

    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix: prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }

    if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }

    if (typeof _icon === 'string') {
      var _prefix = getDefaultUsablePrefix();

      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  parse: parse,
  library: library,
  findIconDefinition: findIconDefinition,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }

  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });

  var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  },
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread2({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var styles$1 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};

function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}

function findIcon(iconName, prefix) {
  var givenPrefix = prefix;

  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }

  return new Promise(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: callProvided('missingIconAbstract') || {}
    };

    if (givenPrefix === 'fa') {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }

    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"6.4.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}

function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}

function createElement(tag) {
  return DOCUMENT.createElement(tag);
}

function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$ceFn = params.ceFn,
      ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }

  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn: ceFn
    }));
  });
  return tag;
}

function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */

  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */

  return comment;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];

    if (node.parentNode) {
      mutation[1].forEach(function (_abstract) {
        node.parentNode.insertBefore(convertSVG(_abstract), node);
      });

      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var _abstract2 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete _abstract2[0].attributes.id;

    if (_abstract2[0].attributes.class) {
      var splitClasses = _abstract2[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });

      _abstract2[0].attributes.class = splitClasses.toSvg.join(' ');

      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }

    var newInnerHTML = _abstract2.map(function (a) {
      return toHtml(a);
    }).join('\n');

    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var _options$treeCallback = options.treeCallback,
      treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
      _options$nodeCallback = options.nodeCallback,
      nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
      _options$pseudoElemen = options.pseudoElementsCallback,
      pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.iconName && val.prefix) {
    return val;
  }

  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }

  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }

  return val;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };

  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

var styles$2 = namespace.styles;

function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}

var knownPrefixes = new Set();
FAMILIES.map(function (family) {
  knownPrefixes.add("fa-".concat(family));
});
Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
knownPrefixes = _toConsumableArray(knownPrefixes);

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function (f) {
    return "fa-".concat(f);
  }).concat(Object.keys(styles$2));

  if (!prefixes.includes('fa')) {
    prefixes.push('fa');
  }

  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e.name === 'MissingIcon') {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new Promise(function (resolve, reject) {
    Promise.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function (e) {
      mark();
      reject(e);
    });
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask: mask
    }));
  };
}

var render = function render(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return domVariants(_objectSpread2({
    type: 'icon'
  }, iconDefinition), function () {
    callHooks('beforeDOMElementCreation', {
      iconDefinition: iconDefinition,
      params: params
    });

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
};
var ReplaceElements = {
  mixout: function mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;
      return onTree(node, callback);
    };

    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      var iconName = nodeMeta.iconName,
          title = nodeMeta.title,
          titleId = nodeMeta.titleId,
          prefix = nodeMeta.prefix,
          transform = nodeMeta.transform,
          symbol = nodeMeta.symbol,
          mask = nodeMeta.mask,
          maskId = nodeMeta.maskId,
          extra = nodeMeta.extra;
      return new Promise(function (resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              main = _ref2[0],
              mask = _ref2[1];

          resolve([node, makeInlineSvgAbstract({
            icons: {
              main: main,
              mask: mask
            },
            prefix: prefix,
            iconName: iconName,
            transform: transform,
            symbol: symbol,
            maskId: maskId,
            title: title,
            titleId: titleId,
            extra: extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };

    providers$$1.generateAbstractIcon = function (_ref3) {
      var children = _ref3.children,
          attributes = _ref3.attributes,
          main = _ref3.main,
          transform = _ref3.transform,
          styles = _ref3.styles;
      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      var nextChild;

      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main: main,
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }

      children.push(nextChild || main.icon);
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var Layers = {
  mixout: function mixout() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: 'layer'
        }, function () {
          callHooks('beforeDOMElementCreation', {
            assembler: assembler,
            params: params
          });
          var children = [];
          assembler(function (args) {
            Array.isArray(args) ? args.map(function (a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
            },
            children: children
          }];
        });
      }
    };
  }
};

var LayersCounter = {
  mixout: function mixout() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'counter',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};

var LayersText = {
  mixout: function mixout() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'text',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersTextAbstract({
            content: content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      var title = nodeMeta.title,
          transform = nodeMeta.transform,
          extra = nodeMeta.extra;
      var width = null;
      var height = null;

      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }

      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }

      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width: width,
        height: height,
        transform: transform,
        title: title,
        extra: extra,
        watchable: true
      })]);
    };
  }
};

var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var family = ~['Sharp'].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
      var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];

      var _hexValueFromContent = hexValueFromContent(_content),
          hexValue = _hexValueFromContent.value,
          isSecondary = _hexValueFromContent.isSecondary;

      var isV4 = fontFamily[0].startsWith('FontAwesome');
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;

      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);

        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName


      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var _abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));

          var element = DOCUMENT.createElement('svg');

          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = _abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var PseudoElements = {
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.pseudoElements2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};

var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto: function noAuto() {
        disconnect();
      },
      watch: function watch(params) {
        var observeMutationsRoot = params.observeMutationsRoot;

        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot: observeMutationsRoot
          }));
        }
      }
    };
  }
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
    var parts = n.toLowerCase().split('-');
    var first = parts[0];
    var rest = parts.slice(1).join('-');

    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }

    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }

    rest = parseFloat(rest);

    if (isNaN(rest)) {
      return acc;
    }

    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;

      case 'shrink':
        acc.size = acc.size - rest;
        break;

      case 'left':
        acc.x = acc.x - rest;
        break;

      case 'right':
        acc.x = acc.x + rest;
        break;

      case 'up':
        acc.y = acc.y - rest;
        break;

      case 'down':
        acc.y = acc.y + rest;
        break;

      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }

    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout: function mixout() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute('data-fa-transform');

        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }

        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      var main = _ref.main,
          transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer: outer,
        inner: inner,
        path: path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(_abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
    _abstract.attributes.fill = 'black';
  }

  return _abstract;
}

function deGroup(_abstract2) {
  if (_abstract2.tag === 'g') {
    return _abstract2.children;
  } else {
    return [_abstract2];
  }
}

var Masks = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute('data-fa-mask');
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
          return i.trim();
        }));

        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }

        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          explicitMaskId = _ref.maskId,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var MissingIconIndicator = {
  provides: function provides(providers) {
    var reduceMotion = false;

    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    providers.missingIconAbstract = function () {
      var gChildren = [];
      var FILL = {
        fill: 'currentColor'
      };
      var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      }; // Ring

      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });

      var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });

      var dot = {
        tag: 'circle',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };

      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }

      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });

      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }

      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};

var SvgSymbols = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute('data-fa-symbol');
        var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};

var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

registerPlugins(plugins, {
  mixoutsTo: api
});
var noAuto$1 = api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
var dom$1 = api.dom;
var parse$1 = api.parse;
var findIconDefinition$1 = api.findIconDefinition;
var toHtml$1 = api.toHtml;
var icon = api.icon;
var layer = api.layer;
var text = api.text;
var counter = api.counter;




/***/ }),

/***/ "./node_modules/@tanstack/react-table/build/lib/index.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnSizing: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.ColumnSizing),
/* harmony export */   Expanding: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.Expanding),
/* harmony export */   Filters: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.Filters),
/* harmony export */   Grouping: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.Grouping),
/* harmony export */   Headers: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.Headers),
/* harmony export */   Ordering: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.Ordering),
/* harmony export */   Pagination: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.Pagination),
/* harmony export */   Pinning: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.Pinning),
/* harmony export */   RowSelection: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.RowSelection),
/* harmony export */   Sorting: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.Sorting),
/* harmony export */   Visibility: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.Visibility),
/* harmony export */   aggregationFns: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.aggregationFns),
/* harmony export */   buildHeaderGroups: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.buildHeaderGroups),
/* harmony export */   createCell: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.createCell),
/* harmony export */   createColumn: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.createColumn),
/* harmony export */   createColumnHelper: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.createColumnHelper),
/* harmony export */   createRow: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.createRow),
/* harmony export */   createTable: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.createTable),
/* harmony export */   defaultColumnSizing: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.defaultColumnSizing),
/* harmony export */   expandRows: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.expandRows),
/* harmony export */   filterFns: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.filterFns),
/* harmony export */   flattenBy: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.flattenBy),
/* harmony export */   flexRender: () => (/* binding */ flexRender),
/* harmony export */   functionalUpdate: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.functionalUpdate),
/* harmony export */   getCoreRowModel: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.getCoreRowModel),
/* harmony export */   getExpandedRowModel: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.getExpandedRowModel),
/* harmony export */   getFacetedMinMaxValues: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.getFacetedMinMaxValues),
/* harmony export */   getFacetedRowModel: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.getFacetedRowModel),
/* harmony export */   getFacetedUniqueValues: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.getFacetedUniqueValues),
/* harmony export */   getFilteredRowModel: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.getFilteredRowModel),
/* harmony export */   getGroupedRowModel: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.getGroupedRowModel),
/* harmony export */   getPaginationRowModel: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.getPaginationRowModel),
/* harmony export */   getSortedRowModel: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.getSortedRowModel),
/* harmony export */   isFunction: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.isFunction),
/* harmony export */   isNumberArray: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.isNumberArray),
/* harmony export */   isRowSelected: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.isRowSelected),
/* harmony export */   isSubRowSelected: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.isSubRowSelected),
/* harmony export */   makeStateUpdater: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.makeStateUpdater),
/* harmony export */   memo: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.memo),
/* harmony export */   noop: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.noop),
/* harmony export */   orderColumns: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.orderColumns),
/* harmony export */   passiveEventSupported: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.passiveEventSupported),
/* harmony export */   reSplitAlphaNumeric: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.reSplitAlphaNumeric),
/* harmony export */   selectRowsFn: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.selectRowsFn),
/* harmony export */   shouldAutoRemoveFilter: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.shouldAutoRemoveFilter),
/* harmony export */   sortingFns: () => (/* reexport safe */ _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.sortingFns),
/* harmony export */   useReactTable: () => (/* binding */ useReactTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@tanstack/table-core/build/lib/index.mjs");
/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




//
/**
 * If rendering headers, cells, or footers with custom markup, use flexRender instead of `cell.getValue()` or `cell.renderValue()`.
 */
function flexRender(Comp, props) {
  return !Comp ? null : isReactComponent(Comp) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, props) : Comp;
}
function isReactComponent(component) {
  return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
}
function isClassComponent(component) {
  return typeof component === 'function' && (() => {
    const proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  })();
}
function isExoticComponent(component) {
  return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
}
function useReactTable(options) {
  // Compose in the generic options to the user options
  const resolvedOptions = {
    state: {},
    // Dummy state
    onStateChange: () => {},
    // noop
    renderFallbackValue: null,
    ...options
  };

  // Create a new table and store it in state
  const [tableRef] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => ({
    current: (0,_tanstack_table_core__WEBPACK_IMPORTED_MODULE_1__.createTable)(resolvedOptions)
  }));

  // By default, manage table state here using the table's initial state
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => tableRef.current.initialState);

  // Compose the default state above with any user state. This will allow the user
  // to only control a subset of the state if desired.
  tableRef.current.setOptions(prev => ({
    ...prev,
    ...options,
    state: {
      ...state,
      ...options.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: updater => {
      setState(updater);
      options.onStateChange == null || options.onStateChange(updater);
    }
  }));
  return tableRef.current;
}


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@tanstack/table-core/build/lib/index.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnSizing: () => (/* binding */ ColumnSizing),
/* harmony export */   Expanding: () => (/* binding */ Expanding),
/* harmony export */   Filters: () => (/* binding */ Filters),
/* harmony export */   Grouping: () => (/* binding */ Grouping),
/* harmony export */   Headers: () => (/* binding */ Headers),
/* harmony export */   Ordering: () => (/* binding */ Ordering),
/* harmony export */   Pagination: () => (/* binding */ Pagination),
/* harmony export */   Pinning: () => (/* binding */ Pinning),
/* harmony export */   RowSelection: () => (/* binding */ RowSelection),
/* harmony export */   Sorting: () => (/* binding */ Sorting),
/* harmony export */   Visibility: () => (/* binding */ Visibility),
/* harmony export */   aggregationFns: () => (/* binding */ aggregationFns),
/* harmony export */   buildHeaderGroups: () => (/* binding */ buildHeaderGroups),
/* harmony export */   createCell: () => (/* binding */ createCell),
/* harmony export */   createColumn: () => (/* binding */ createColumn),
/* harmony export */   createColumnHelper: () => (/* binding */ createColumnHelper),
/* harmony export */   createRow: () => (/* binding */ createRow),
/* harmony export */   createTable: () => (/* binding */ createTable),
/* harmony export */   defaultColumnSizing: () => (/* binding */ defaultColumnSizing),
/* harmony export */   expandRows: () => (/* binding */ expandRows),
/* harmony export */   filterFns: () => (/* binding */ filterFns),
/* harmony export */   flattenBy: () => (/* binding */ flattenBy),
/* harmony export */   functionalUpdate: () => (/* binding */ functionalUpdate),
/* harmony export */   getCoreRowModel: () => (/* binding */ getCoreRowModel),
/* harmony export */   getExpandedRowModel: () => (/* binding */ getExpandedRowModel),
/* harmony export */   getFacetedMinMaxValues: () => (/* binding */ getFacetedMinMaxValues),
/* harmony export */   getFacetedRowModel: () => (/* binding */ getFacetedRowModel),
/* harmony export */   getFacetedUniqueValues: () => (/* binding */ getFacetedUniqueValues),
/* harmony export */   getFilteredRowModel: () => (/* binding */ getFilteredRowModel),
/* harmony export */   getGroupedRowModel: () => (/* binding */ getGroupedRowModel),
/* harmony export */   getPaginationRowModel: () => (/* binding */ getPaginationRowModel),
/* harmony export */   getSortedRowModel: () => (/* binding */ getSortedRowModel),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNumberArray: () => (/* binding */ isNumberArray),
/* harmony export */   isRowSelected: () => (/* binding */ isRowSelected),
/* harmony export */   isSubRowSelected: () => (/* binding */ isSubRowSelected),
/* harmony export */   makeStateUpdater: () => (/* binding */ makeStateUpdater),
/* harmony export */   memo: () => (/* binding */ memo),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   orderColumns: () => (/* binding */ orderColumns),
/* harmony export */   passiveEventSupported: () => (/* binding */ passiveEventSupported),
/* harmony export */   reSplitAlphaNumeric: () => (/* binding */ reSplitAlphaNumeric),
/* harmony export */   selectRowsFn: () => (/* binding */ selectRowsFn),
/* harmony export */   shouldAutoRemoveFilter: () => (/* binding */ shouldAutoRemoveFilter),
/* harmony export */   sortingFns: () => (/* binding */ sortingFns)
/* harmony export */ });
/**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
// Is this type a tuple?

// If this type is a tuple, what indices are allowed?

///

function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function noop() {
  //
}
function makeStateUpdater(key, instance) {
  return updater => {
    instance.setState(old => {
      return {
        ...old,
        [key]: functionalUpdate(updater, old[key])
      };
    });
  };
}
function isFunction(d) {
  return d instanceof Function;
}
function isNumberArray(d) {
  return Array.isArray(d) && d.every(val => typeof val === 'number');
}
function flattenBy(arr, getChildren) {
  const flat = [];
  const recurse = subArr => {
    subArr.forEach(item => {
      flat.push(item);
      const children = getChildren(item);
      if (children != null && children.length) {
        recurse(children);
      }
    });
  };
  recurse(arr);
  return flat;
}
function memo(getDeps, fn, opts) {
  let deps = [];
  let result;
  return () => {
    let depTime;
    if (opts.key && opts.debug) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && opts.debug) resultTime = Date.now();
    result = fn(...newDeps);
    opts == null || opts.onChange == null || opts.onChange(result);
    if (opts.key && opts.debug) {
      if (opts != null && opts.debug()) {
        const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        const resultFpsPercentage = resultEndTime / 16;
        const pad = (str, num) => {
          str = String(str);
          while (str.length < num) {
            str = ' ' + str;
          }
          return str;
        };
        console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
      }
    }
    return result;
  };
}

function createColumn(table, columnDef, depth, parent) {
  var _ref, _resolvedColumnDef$id;
  const defaultColumn = table._getDefaultColumnDef();
  const resolvedColumnDef = {
    ...defaultColumn,
    ...columnDef
  };
  const accessorKey = resolvedColumnDef.accessorKey;
  let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? accessorKey.replace('.', '_') : undefined) != null ? _ref : typeof resolvedColumnDef.header === 'string' ? resolvedColumnDef.header : undefined;
  let accessorFn;
  if (resolvedColumnDef.accessorFn) {
    accessorFn = resolvedColumnDef.accessorFn;
  } else if (accessorKey) {
    // Support deep accessor keys
    if (accessorKey.includes('.')) {
      accessorFn = originalRow => {
        let result = originalRow;
        for (const key of accessorKey.split('.')) {
          var _result;
          result = (_result = result) == null ? void 0 : _result[key];
          if ( true && result === undefined) {
            console.warn(`"${key}" in deeply nested key "${accessorKey}" returned undefined.`);
          }
        }
        return result;
      };
    } else {
      accessorFn = originalRow => originalRow[resolvedColumnDef.accessorKey];
    }
  }
  if (!id) {
    if (true) {
      throw new Error(resolvedColumnDef.accessorFn ? `Columns require an id when using an accessorFn` : `Columns require an id when using a non-string header`);
    }
    throw new Error();
  }
  let column = {
    id: `${String(id)}`,
    accessorFn,
    parent: parent,
    depth,
    columnDef: resolvedColumnDef,
    columns: [],
    getFlatColumns: memo(() => [true], () => {
      var _column$columns;
      return [column, ...((_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap(d => d.getFlatColumns()))];
    }, {
      key:  false && 0,
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugColumns;
      }
    }),
    getLeafColumns: memo(() => [table._getOrderColumnsFn()], orderColumns => {
      var _column$columns2;
      if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
        let leafColumns = column.columns.flatMap(column => column.getLeafColumns());
        return orderColumns(leafColumns);
      }
      return [column];
    }, {
      key:  false && 0,
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugColumns;
      }
    })
  };
  for (const feature of table._features) {
    feature.createColumn == null || feature.createColumn(column, table);
  }

  // Yes, we have to convert table to uknown, because we know more than the compiler here.
  return column;
}

//

function createHeader(table, column, options) {
  var _options$id;
  const id = (_options$id = options.id) != null ? _options$id : column.id;
  let header = {
    id,
    column,
    index: options.index,
    isPlaceholder: !!options.isPlaceholder,
    placeholderId: options.placeholderId,
    depth: options.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const leafHeaders = [];
      const recurseHeader = h => {
        if (h.subHeaders && h.subHeaders.length) {
          h.subHeaders.map(recurseHeader);
        }
        leafHeaders.push(h);
      };
      recurseHeader(header);
      return leafHeaders;
    },
    getContext: () => ({
      table,
      header: header,
      column
    })
  };
  table._features.forEach(feature => {
    feature.createHeader == null || feature.createHeader(header, table);
  });
  return header;
}
const Headers = {
  createTable: table => {
    // Header Groups

    table.getHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      var _left$map$filter, _right$map$filter;
      const leftColumns = (_left$map$filter = left == null ? void 0 : left.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
      const rightColumns = (_right$map$filter = right == null ? void 0 : right.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
      const centerColumns = leafColumns.filter(column => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      const headerGroups = buildHeaderGroups(allColumns, [...leftColumns, ...centerColumns, ...rightColumns], table);
      return headerGroups;
    }, {
      key:  true && 'getHeaderGroups',
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugHeaders;
      }
    });
    table.getCenterHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      leafColumns = leafColumns.filter(column => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      return buildHeaderGroups(allColumns, leafColumns, table, 'center');
    }, {
      key:  true && 'getCenterHeaderGroups',
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugHeaders;
      }
    });
    table.getLeftHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left], (allColumns, leafColumns, left) => {
      var _left$map$filter2;
      const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, 'left');
    }, {
      key:  true && 'getLeftHeaderGroups',
      debug: () => {
        var _table$options$debugA3;
        return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugHeaders;
      }
    });
    table.getRightHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right], (allColumns, leafColumns, right) => {
      var _right$map$filter2;
      const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map(columnId => leafColumns.find(d => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, 'right');
    }, {
      key:  true && 'getRightHeaderGroups',
      debug: () => {
        var _table$options$debugA4;
        return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugHeaders;
      }
    });

    // Footer Groups

    table.getFooterGroups = memo(() => [table.getHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, {
      key:  true && 'getFooterGroups',
      debug: () => {
        var _table$options$debugA5;
        return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugHeaders;
      }
    });
    table.getLeftFooterGroups = memo(() => [table.getLeftHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, {
      key:  true && 'getLeftFooterGroups',
      debug: () => {
        var _table$options$debugA6;
        return (_table$options$debugA6 = table.options.debugAll) != null ? _table$options$debugA6 : table.options.debugHeaders;
      }
    });
    table.getCenterFooterGroups = memo(() => [table.getCenterHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, {
      key:  true && 'getCenterFooterGroups',
      debug: () => {
        var _table$options$debugA7;
        return (_table$options$debugA7 = table.options.debugAll) != null ? _table$options$debugA7 : table.options.debugHeaders;
      }
    });
    table.getRightFooterGroups = memo(() => [table.getRightHeaderGroups()], headerGroups => {
      return [...headerGroups].reverse();
    }, {
      key:  true && 'getRightFooterGroups',
      debug: () => {
        var _table$options$debugA8;
        return (_table$options$debugA8 = table.options.debugAll) != null ? _table$options$debugA8 : table.options.debugHeaders;
      }
    });

    // Flat Headers

    table.getFlatHeaders = memo(() => [table.getHeaderGroups()], headerGroups => {
      return headerGroups.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, {
      key:  true && 'getFlatHeaders',
      debug: () => {
        var _table$options$debugA9;
        return (_table$options$debugA9 = table.options.debugAll) != null ? _table$options$debugA9 : table.options.debugHeaders;
      }
    });
    table.getLeftFlatHeaders = memo(() => [table.getLeftHeaderGroups()], left => {
      return left.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, {
      key:  true && 'getLeftFlatHeaders',
      debug: () => {
        var _table$options$debugA10;
        return (_table$options$debugA10 = table.options.debugAll) != null ? _table$options$debugA10 : table.options.debugHeaders;
      }
    });
    table.getCenterFlatHeaders = memo(() => [table.getCenterHeaderGroups()], left => {
      return left.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, {
      key:  true && 'getCenterFlatHeaders',
      debug: () => {
        var _table$options$debugA11;
        return (_table$options$debugA11 = table.options.debugAll) != null ? _table$options$debugA11 : table.options.debugHeaders;
      }
    });
    table.getRightFlatHeaders = memo(() => [table.getRightHeaderGroups()], left => {
      return left.map(headerGroup => {
        return headerGroup.headers;
      }).flat();
    }, {
      key:  true && 'getRightFlatHeaders',
      debug: () => {
        var _table$options$debugA12;
        return (_table$options$debugA12 = table.options.debugAll) != null ? _table$options$debugA12 : table.options.debugHeaders;
      }
    });

    // Leaf Headers

    table.getCenterLeafHeaders = memo(() => [table.getCenterFlatHeaders()], flatHeaders => {
      return flatHeaders.filter(header => {
        var _header$subHeaders;
        return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
      });
    }, {
      key:  true && 'getCenterLeafHeaders',
      debug: () => {
        var _table$options$debugA13;
        return (_table$options$debugA13 = table.options.debugAll) != null ? _table$options$debugA13 : table.options.debugHeaders;
      }
    });
    table.getLeftLeafHeaders = memo(() => [table.getLeftFlatHeaders()], flatHeaders => {
      return flatHeaders.filter(header => {
        var _header$subHeaders2;
        return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
      });
    }, {
      key:  true && 'getLeftLeafHeaders',
      debug: () => {
        var _table$options$debugA14;
        return (_table$options$debugA14 = table.options.debugAll) != null ? _table$options$debugA14 : table.options.debugHeaders;
      }
    });
    table.getRightLeafHeaders = memo(() => [table.getRightFlatHeaders()], flatHeaders => {
      return flatHeaders.filter(header => {
        var _header$subHeaders3;
        return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
      });
    }, {
      key:  true && 'getRightLeafHeaders',
      debug: () => {
        var _table$options$debugA15;
        return (_table$options$debugA15 = table.options.debugAll) != null ? _table$options$debugA15 : table.options.debugHeaders;
      }
    });
    table.getLeafHeaders = memo(() => [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()], (left, center, right) => {
      var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
      return [...((_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : []), ...((_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : []), ...((_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : [])].map(header => {
        return header.getLeafHeaders();
      }).flat();
    }, {
      key:  true && 'getLeafHeaders',
      debug: () => {
        var _table$options$debugA16;
        return (_table$options$debugA16 = table.options.debugAll) != null ? _table$options$debugA16 : table.options.debugHeaders;
      }
    });
  }
};
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
  var _headerGroups$0$heade, _headerGroups$;
  // Find the max depth of the columns:
  // build the leaf column row
  // build each buffer row going up
  //    placeholder for non-existent level
  //    real column for existing level

  let maxDepth = 0;
  const findMaxDepth = function (columns, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    maxDepth = Math.max(maxDepth, depth);
    columns.filter(column => column.getIsVisible()).forEach(column => {
      var _column$columns;
      if ((_column$columns = column.columns) != null && _column$columns.length) {
        findMaxDepth(column.columns, depth + 1);
      }
    }, 0);
  };
  findMaxDepth(allColumns);
  let headerGroups = [];
  const createHeaderGroup = (headersToGroup, depth) => {
    // The header group we are creating
    const headerGroup = {
      depth,
      id: [headerFamily, `${depth}`].filter(Boolean).join('_'),
      headers: []
    };

    // The parent columns we're going to scan next
    const pendingParentHeaders = [];

    // Scan each column for parents
    headersToGroup.forEach(headerToGroup => {
      // What is the latest (last) parent column?

      const latestPendingParentHeader = [...pendingParentHeaders].reverse()[0];
      const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
      let column;
      let isPlaceholder = false;
      if (isLeafHeader && headerToGroup.column.parent) {
        // The parent header is new
        column = headerToGroup.column.parent;
      } else {
        // The parent header is repeated
        column = headerToGroup.column;
        isPlaceholder = true;
      }
      if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
        // This column is repeated. Add it as a sub header to the next batch
        latestPendingParentHeader.subHeaders.push(headerToGroup);
      } else {
        // This is a new header. Let's create it
        const header = createHeader(table, column, {
          id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join('_'),
          isPlaceholder,
          placeholderId: isPlaceholder ? `${pendingParentHeaders.filter(d => d.column === column).length}` : undefined,
          depth,
          index: pendingParentHeaders.length
        });

        // Add the headerToGroup as a subHeader of the new header
        header.subHeaders.push(headerToGroup);
        // Add the new header to the pendingParentHeaders to get grouped
        // in the next batch
        pendingParentHeaders.push(header);
      }
      headerGroup.headers.push(headerToGroup);
      headerToGroup.headerGroup = headerGroup;
    });
    headerGroups.push(headerGroup);
    if (depth > 0) {
      createHeaderGroup(pendingParentHeaders, depth - 1);
    }
  };
  const bottomHeaders = columnsToGroup.map((column, index) => createHeader(table, column, {
    depth: maxDepth,
    index
  }));
  createHeaderGroup(bottomHeaders, maxDepth - 1);
  headerGroups.reverse();

  // headerGroups = headerGroups.filter(headerGroup => {
  //   return !headerGroup.headers.every(header => header.isPlaceholder)
  // })

  const recurseHeadersForSpans = headers => {
    const filteredHeaders = headers.filter(header => header.column.getIsVisible());
    return filteredHeaders.map(header => {
      let colSpan = 0;
      let rowSpan = 0;
      let childRowSpans = [0];
      if (header.subHeaders && header.subHeaders.length) {
        childRowSpans = [];
        recurseHeadersForSpans(header.subHeaders).forEach(_ref => {
          let {
            colSpan: childColSpan,
            rowSpan: childRowSpan
          } = _ref;
          colSpan += childColSpan;
          childRowSpans.push(childRowSpan);
        });
      } else {
        colSpan = 1;
      }
      const minChildRowSpan = Math.min(...childRowSpans);
      rowSpan = rowSpan + minChildRowSpan;
      header.colSpan = colSpan;
      header.rowSpan = rowSpan;
      return {
        colSpan,
        rowSpan
      };
    });
  };
  recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
  return headerGroups;
}

//

//

const defaultColumnSizing = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
};
const getDefaultColumnSizingInfoState = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: false,
  columnSizingStart: []
});
const ColumnSizing = {
  getDefaultColumnDef: () => {
    return defaultColumnSizing;
  },
  getInitialState: state => {
    return {
      columnSizing: {},
      columnSizingInfo: getDefaultColumnSizingInfoState(),
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      columnResizeMode: 'onEnd',
      onColumnSizingChange: makeStateUpdater('columnSizing', table),
      onColumnSizingInfoChange: makeStateUpdater('columnSizingInfo', table)
    };
  },
  createColumn: (column, table) => {
    column.getSize = () => {
      var _column$columnDef$min, _ref, _column$columnDef$max;
      const columnSize = table.getState().columnSizing[column.id];
      return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
    };
    column.getStart = position => {
      const columns = !position ? table.getVisibleLeafColumns() : position === 'left' ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
      const index = columns.findIndex(d => d.id === column.id);
      if (index > 0) {
        const prevSiblingColumn = columns[index - 1];
        return prevSiblingColumn.getStart(position) + prevSiblingColumn.getSize();
      }
      return 0;
    };
    column.resetSize = () => {
      table.setColumnSizing(_ref2 => {
        let {
          [column.id]: _,
          ...rest
        } = _ref2;
        return rest;
      });
    };
    column.getCanResize = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
    };
    column.getIsResizing = () => {
      return table.getState().columnSizingInfo.isResizingColumn === column.id;
    };
  },
  createHeader: (header, table) => {
    header.getSize = () => {
      let sum = 0;
      const recurse = header => {
        if (header.subHeaders.length) {
          header.subHeaders.forEach(recurse);
        } else {
          var _header$column$getSiz;
          sum += (_header$column$getSiz = header.column.getSize()) != null ? _header$column$getSiz : 0;
        }
      };
      recurse(header);
      return sum;
    };
    header.getStart = () => {
      if (header.index > 0) {
        const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
        return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
      }
      return 0;
    };
    header.getResizeHandler = () => {
      const column = table.getColumn(header.column.id);
      const canResize = column == null ? void 0 : column.getCanResize();
      return e => {
        if (!column || !canResize) {
          return;
        }
        e.persist == null || e.persist();
        if (isTouchStartEvent(e)) {
          // lets not respond to multiple touches (e.g. 2 or 3 fingers)
          if (e.touches && e.touches.length > 1) {
            return;
          }
        }
        const startSize = header.getSize();
        const columnSizingStart = header ? header.getLeafHeaders().map(d => [d.column.id, d.column.getSize()]) : [[column.id, column.getSize()]];
        const clientX = isTouchStartEvent(e) ? Math.round(e.touches[0].clientX) : e.clientX;
        const newColumnSizing = {};
        const updateOffset = (eventType, clientXPos) => {
          if (typeof clientXPos !== 'number') {
            return;
          }
          table.setColumnSizingInfo(old => {
            var _old$startOffset, _old$startSize;
            const deltaOffset = clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0);
            const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
            old.columnSizingStart.forEach(_ref3 => {
              let [columnId, headerSize] = _ref3;
              newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
            });
            return {
              ...old,
              deltaOffset,
              deltaPercentage
            };
          });
          if (table.options.columnResizeMode === 'onChange' || eventType === 'end') {
            table.setColumnSizing(old => ({
              ...old,
              ...newColumnSizing
            }));
          }
        };
        const onMove = clientXPos => updateOffset('move', clientXPos);
        const onEnd = clientXPos => {
          updateOffset('end', clientXPos);
          table.setColumnSizingInfo(old => ({
            ...old,
            isResizingColumn: false,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        };
        const mouseEvents = {
          moveHandler: e => onMove(e.clientX),
          upHandler: e => {
            document.removeEventListener('mousemove', mouseEvents.moveHandler);
            document.removeEventListener('mouseup', mouseEvents.upHandler);
            onEnd(e.clientX);
          }
        };
        const touchEvents = {
          moveHandler: e => {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }
            onMove(e.touches[0].clientX);
            return false;
          },
          upHandler: e => {
            var _e$touches$;
            document.removeEventListener('touchmove', touchEvents.moveHandler);
            document.removeEventListener('touchend', touchEvents.upHandler);
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }
            onEnd((_e$touches$ = e.touches[0]) == null ? void 0 : _e$touches$.clientX);
          }
        };
        const passiveIfSupported = passiveEventSupported() ? {
          passive: false
        } : false;
        if (isTouchStartEvent(e)) {
          document.addEventListener('touchmove', touchEvents.moveHandler, passiveIfSupported);
          document.addEventListener('touchend', touchEvents.upHandler, passiveIfSupported);
        } else {
          document.addEventListener('mousemove', mouseEvents.moveHandler, passiveIfSupported);
          document.addEventListener('mouseup', mouseEvents.upHandler, passiveIfSupported);
        }
        table.setColumnSizingInfo(old => ({
          ...old,
          startOffset: clientX,
          startSize,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart,
          isResizingColumn: column.id
        }));
      };
    };
  },
  createTable: table => {
    table.setColumnSizing = updater => table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater);
    table.setColumnSizingInfo = updater => table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater);
    table.resetColumnSizing = defaultState => {
      var _table$initialState$c;
      table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
    };
    table.resetHeaderSizeInfo = defaultState => {
      var _table$initialState$c2;
      table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
    };
    table.getTotalSize = () => {
      var _table$getHeaderGroup, _table$getHeaderGroup2;
      return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getHeaderGroup : 0;
    };
    table.getLeftTotalSize = () => {
      var _table$getLeftHeaderG, _table$getLeftHeaderG2;
      return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getLeftHeaderG : 0;
    };
    table.getCenterTotalSize = () => {
      var _table$getCenterHeade, _table$getCenterHeade2;
      return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getCenterHeade : 0;
    };
    table.getRightTotalSize = () => {
      var _table$getRightHeader, _table$getRightHeader2;
      return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum, header) => {
        return sum + header.getSize();
      }, 0)) != null ? _table$getRightHeader : 0;
    };
  }
};
let passiveSupported = null;
function passiveEventSupported() {
  if (typeof passiveSupported === 'boolean') return passiveSupported;
  let supported = false;
  try {
    const options = {
      get passive() {
        supported = true;
        return false;
      }
    };
    const noop = () => {};
    window.addEventListener('test', noop, options);
    window.removeEventListener('test', noop);
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
function isTouchStartEvent(e) {
  return e.type === 'touchstart';
}

//

const Expanding = {
  getInitialState: state => {
    return {
      expanded: {},
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onExpandedChange: makeStateUpdater('expanded', table),
      paginateExpandedRows: true
    };
  },
  createTable: table => {
    let registered = false;
    let queued = false;
    table._autoResetExpanded = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetExpanded();
          queued = false;
        });
      }
    };
    table.setExpanded = updater => table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater);
    table.toggleAllRowsExpanded = expanded => {
      if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
        table.setExpanded(true);
      } else {
        table.setExpanded({});
      }
    };
    table.resetExpanded = defaultState => {
      var _table$initialState$e, _table$initialState;
      table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
    };
    table.getCanSomeRowsExpand = () => {
      return table.getPrePaginationRowModel().flatRows.some(row => row.getCanExpand());
    };
    table.getToggleAllRowsExpandedHandler = () => {
      return e => {
        e.persist == null || e.persist();
        table.toggleAllRowsExpanded();
      };
    };
    table.getIsSomeRowsExpanded = () => {
      const expanded = table.getState().expanded;
      return expanded === true || Object.values(expanded).some(Boolean);
    };
    table.getIsAllRowsExpanded = () => {
      const expanded = table.getState().expanded;

      // If expanded is true, save some cycles and return true
      if (typeof expanded === 'boolean') {
        return expanded === true;
      }
      if (!Object.keys(expanded).length) {
        return false;
      }

      // If any row is not expanded, return false
      if (table.getRowModel().flatRows.some(row => !row.getIsExpanded())) {
        return false;
      }

      // They must all be expanded :shrug:
      return true;
    };
    table.getExpandedDepth = () => {
      let maxDepth = 0;
      const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
      rowIds.forEach(id => {
        const splitId = id.split('.');
        maxDepth = Math.max(maxDepth, splitId.length);
      });
      return maxDepth;
    };
    table.getPreExpandedRowModel = () => table.getSortedRowModel();
    table.getExpandedRowModel = () => {
      if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
        table._getExpandedRowModel = table.options.getExpandedRowModel(table);
      }
      if (table.options.manualExpanding || !table._getExpandedRowModel) {
        return table.getPreExpandedRowModel();
      }
      return table._getExpandedRowModel();
    };
  },
  createRow: (row, table) => {
    row.toggleExpanded = expanded => {
      table.setExpanded(old => {
        var _expanded;
        const exists = old === true ? true : !!(old != null && old[row.id]);
        let oldExpanded = {};
        if (old === true) {
          Object.keys(table.getRowModel().rowsById).forEach(rowId => {
            oldExpanded[rowId] = true;
          });
        } else {
          oldExpanded = old;
        }
        expanded = (_expanded = expanded) != null ? _expanded : !exists;
        if (!exists && expanded) {
          return {
            ...oldExpanded,
            [row.id]: true
          };
        }
        if (exists && !expanded) {
          const {
            [row.id]: _,
            ...rest
          } = oldExpanded;
          return rest;
        }
        return old;
      });
    };
    row.getIsExpanded = () => {
      var _table$options$getIsR;
      const expanded = table.getState().expanded;
      return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
    };
    row.getCanExpand = () => {
      var _table$options$getRow, _table$options$enable, _row$subRows;
      return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
    row.getIsAllParentsExpanded = () => {
      let isFullyExpanded = true;
      let currentRow = row;
      while (isFullyExpanded && currentRow.parentId) {
        currentRow = table.getRow(currentRow.parentId, true);
        isFullyExpanded = currentRow.getIsExpanded();
      }
      return isFullyExpanded;
    };
    row.getToggleExpandedHandler = () => {
      const canExpand = row.getCanExpand();
      return () => {
        if (!canExpand) return;
        row.toggleExpanded();
      };
    };
  }
};

const includesString = (row, columnId, filterValue) => {
  var _row$getValue;
  const search = filterValue.toLowerCase();
  return Boolean((_row$getValue = row.getValue(columnId)) == null || (_row$getValue = _row$getValue.toString()) == null || (_row$getValue = _row$getValue.toLowerCase()) == null ? void 0 : _row$getValue.includes(search));
};
includesString.autoRemove = val => testFalsey(val);
const includesStringSensitive = (row, columnId, filterValue) => {
  var _row$getValue2;
  return Boolean((_row$getValue2 = row.getValue(columnId)) == null || (_row$getValue2 = _row$getValue2.toString()) == null ? void 0 : _row$getValue2.includes(filterValue));
};
includesStringSensitive.autoRemove = val => testFalsey(val);
const equalsString = (row, columnId, filterValue) => {
  var _row$getValue3;
  return ((_row$getValue3 = row.getValue(columnId)) == null || (_row$getValue3 = _row$getValue3.toString()) == null ? void 0 : _row$getValue3.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
};
equalsString.autoRemove = val => testFalsey(val);
const arrIncludes = (row, columnId, filterValue) => {
  var _row$getValue4;
  return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
};
arrIncludes.autoRemove = val => testFalsey(val) || !(val != null && val.length);
const arrIncludesAll = (row, columnId, filterValue) => {
  return !filterValue.some(val => {
    var _row$getValue5;
    return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
  });
};
arrIncludesAll.autoRemove = val => testFalsey(val) || !(val != null && val.length);
const arrIncludesSome = (row, columnId, filterValue) => {
  return filterValue.some(val => {
    var _row$getValue6;
    return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
  });
};
arrIncludesSome.autoRemove = val => testFalsey(val) || !(val != null && val.length);
const equals = (row, columnId, filterValue) => {
  return row.getValue(columnId) === filterValue;
};
equals.autoRemove = val => testFalsey(val);
const weakEquals = (row, columnId, filterValue) => {
  return row.getValue(columnId) == filterValue;
};
weakEquals.autoRemove = val => testFalsey(val);
const inNumberRange = (row, columnId, filterValue) => {
  let [min, max] = filterValue;
  const rowValue = row.getValue(columnId);
  return rowValue >= min && rowValue <= max;
};
inNumberRange.resolveFilterValue = val => {
  let [unsafeMin, unsafeMax] = val;
  let parsedMin = typeof unsafeMin !== 'number' ? parseFloat(unsafeMin) : unsafeMin;
  let parsedMax = typeof unsafeMax !== 'number' ? parseFloat(unsafeMax) : unsafeMax;
  let min = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
  let max = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return [min, max];
};
inNumberRange.autoRemove = val => testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);

// Export

const filterFns = {
  includesString,
  includesStringSensitive,
  equalsString,
  arrIncludes,
  arrIncludesAll,
  arrIncludesSome,
  equals,
  weakEquals,
  inNumberRange
};
// Utils

function testFalsey(val) {
  return val === undefined || val === null || val === '';
}

//

const Filters = {
  getDefaultColumnDef: () => {
    return {
      filterFn: 'auto'
    };
  },
  getInitialState: state => {
    return {
      columnFilters: [],
      globalFilter: undefined,
      // filtersProgress: 1,
      // facetProgress: {},
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnFiltersChange: makeStateUpdater('columnFilters', table),
      onGlobalFilterChange: makeStateUpdater('globalFilter', table),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100,
      globalFilterFn: 'auto',
      getColumnCanGlobalFilter: column => {
        var _table$getCoreRowMode;
        const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null || (_table$getCoreRowMode = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode.getValue();
        return typeof value === 'string' || typeof value === 'number';
      }
    };
  },
  createColumn: (column, table) => {
    column.getAutoFilterFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === 'string') {
        return filterFns.includesString;
      }
      if (typeof value === 'number') {
        return filterFns.inNumberRange;
      }
      if (typeof value === 'boolean') {
        return filterFns.equals;
      }
      if (value !== null && typeof value === 'object') {
        return filterFns.equals;
      }
      if (Array.isArray(value)) {
        return filterFns.arrIncludes;
      }
      return filterFns.weakEquals;
    };
    column.getFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === 'auto' ? column.getAutoFilterFn() : // @ts-ignore
      (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn];
    };
    column.getCanFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
      return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
    };
    column.getCanGlobalFilter = () => {
      var _column$columnDef$ena2, _table$options$enable3, _table$options$enable4, _table$options$getCol;
      return ((_column$columnDef$ena2 = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena2 : true) && ((_table$options$enable3 = table.options.enableGlobalFilter) != null ? _table$options$enable3 : true) && ((_table$options$enable4 = table.options.enableFilters) != null ? _table$options$enable4 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
    };
    column.getIsFiltered = () => column.getFilterIndex() > -1;
    column.getFilterValue = () => {
      var _table$getState$colum;
      return (_table$getState$colum = table.getState().columnFilters) == null || (_table$getState$colum = _table$getState$colum.find(d => d.id === column.id)) == null ? void 0 : _table$getState$colum.value;
    };
    column.getFilterIndex = () => {
      var _table$getState$colum2, _table$getState$colum3;
      return (_table$getState$colum2 = (_table$getState$colum3 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum3.findIndex(d => d.id === column.id)) != null ? _table$getState$colum2 : -1;
    };
    column.setFilterValue = value => {
      table.setColumnFilters(old => {
        const filterFn = column.getFilterFn();
        const previousfilter = old == null ? void 0 : old.find(d => d.id === column.id);
        const newFilter = functionalUpdate(value, previousfilter ? previousfilter.value : undefined);

        //
        if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
          var _old$filter;
          return (_old$filter = old == null ? void 0 : old.filter(d => d.id !== column.id)) != null ? _old$filter : [];
        }
        const newFilterObj = {
          id: column.id,
          value: newFilter
        };
        if (previousfilter) {
          var _old$map;
          return (_old$map = old == null ? void 0 : old.map(d => {
            if (d.id === column.id) {
              return newFilterObj;
            }
            return d;
          })) != null ? _old$map : [];
        }
        if (old != null && old.length) {
          return [...old, newFilterObj];
        }
        return [newFilterObj];
      });
    };
    column._getFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id);
    column.getFacetedRowModel = () => {
      if (!column._getFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return column._getFacetedRowModel();
    };
    column._getFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id);
    column.getFacetedUniqueValues = () => {
      if (!column._getFacetedUniqueValues) {
        return new Map();
      }
      return column._getFacetedUniqueValues();
    };
    column._getFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id);
    column.getFacetedMinMaxValues = () => {
      if (!column._getFacetedMinMaxValues) {
        return undefined;
      }
      return column._getFacetedMinMaxValues();
    };
    // () => [column.getFacetedRowModel()],
    // facetedRowModel => getRowModelMinMaxValues(facetedRowModel, column.id),
  },

  createRow: (row, table) => {
    row.columnFilters = {};
    row.columnFiltersMeta = {};
  },
  createTable: table => {
    table.getGlobalAutoFilterFn = () => {
      return filterFns.includesString;
    };
    table.getGlobalFilterFn = () => {
      var _table$options$filter3, _table$options$filter4;
      const {
        globalFilterFn: globalFilterFn
      } = table.options;
      return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === 'auto' ? table.getGlobalAutoFilterFn() : // @ts-ignore
      (_table$options$filter3 = (_table$options$filter4 = table.options.filterFns) == null ? void 0 : _table$options$filter4[globalFilterFn]) != null ? _table$options$filter3 : filterFns[globalFilterFn];
    };
    table.setColumnFilters = updater => {
      const leafColumns = table.getAllLeafColumns();
      const updateFn = old => {
        var _functionalUpdate;
        return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter(filter => {
          const column = leafColumns.find(d => d.id === filter.id);
          if (column) {
            const filterFn = column.getFilterFn();
            if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
              return false;
            }
          }
          return true;
        });
      };
      table.options.onColumnFiltersChange == null || table.options.onColumnFiltersChange(updateFn);
    };
    table.setGlobalFilter = updater => {
      table.options.onGlobalFilterChange == null || table.options.onGlobalFilterChange(updater);
    };
    table.resetGlobalFilter = defaultState => {
      table.setGlobalFilter(defaultState ? undefined : table.initialState.globalFilter);
    };
    table.resetColumnFilters = defaultState => {
      var _table$initialState$c, _table$initialState;
      table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
    };
    table.getPreFilteredRowModel = () => table.getCoreRowModel();
    table.getFilteredRowModel = () => {
      if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
        table._getFilteredRowModel = table.options.getFilteredRowModel(table);
      }
      if (table.options.manualFiltering || !table._getFilteredRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getFilteredRowModel();
    };
    table._getGlobalFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, '__global__');
    table.getGlobalFacetedRowModel = () => {
      if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getGlobalFacetedRowModel();
    };
    table._getGlobalFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, '__global__');
    table.getGlobalFacetedUniqueValues = () => {
      if (!table._getGlobalFacetedUniqueValues) {
        return new Map();
      }
      return table._getGlobalFacetedUniqueValues();
    };
    table._getGlobalFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, '__global__');
    table.getGlobalFacetedMinMaxValues = () => {
      if (!table._getGlobalFacetedMinMaxValues) {
        return;
      }
      return table._getGlobalFacetedMinMaxValues();
    };
  }
};
function shouldAutoRemoveFilter(filterFn, value, column) {
  return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === 'undefined' || typeof value === 'string' && !value;
}

const sum = (columnId, _leafRows, childRows) => {
  // It's faster to just add the aggregations together instead of
  // process leaf nodes individually
  return childRows.reduce((sum, next) => {
    const nextValue = next.getValue(columnId);
    return sum + (typeof nextValue === 'number' ? nextValue : 0);
  }, 0);
};
const min = (columnId, _leafRows, childRows) => {
  let min;
  childRows.forEach(row => {
    const value = row.getValue(columnId);
    if (value != null && (min > value || min === undefined && value >= value)) {
      min = value;
    }
  });
  return min;
};
const max = (columnId, _leafRows, childRows) => {
  let max;
  childRows.forEach(row => {
    const value = row.getValue(columnId);
    if (value != null && (max < value || max === undefined && value >= value)) {
      max = value;
    }
  });
  return max;
};
const extent = (columnId, _leafRows, childRows) => {
  let min;
  let max;
  childRows.forEach(row => {
    const value = row.getValue(columnId);
    if (value != null) {
      if (min === undefined) {
        if (value >= value) min = max = value;
      } else {
        if (min > value) min = value;
        if (max < value) max = value;
      }
    }
  });
  return [min, max];
};
const mean = (columnId, leafRows) => {
  let count = 0;
  let sum = 0;
  leafRows.forEach(row => {
    let value = row.getValue(columnId);
    if (value != null && (value = +value) >= value) {
      ++count, sum += value;
    }
  });
  if (count) return sum / count;
  return;
};
const median = (columnId, leafRows) => {
  if (!leafRows.length) {
    return;
  }
  const values = leafRows.map(row => row.getValue(columnId));
  if (!isNumberArray(values)) {
    return;
  }
  if (values.length === 1) {
    return values[0];
  }
  const mid = Math.floor(values.length / 2);
  const nums = values.sort((a, b) => a - b);
  return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
const unique = (columnId, leafRows) => {
  return Array.from(new Set(leafRows.map(d => d.getValue(columnId))).values());
};
const uniqueCount = (columnId, leafRows) => {
  return new Set(leafRows.map(d => d.getValue(columnId))).size;
};
const count = (_columnId, leafRows) => {
  return leafRows.length;
};
const aggregationFns = {
  sum,
  min,
  max,
  extent,
  mean,
  median,
  unique,
  uniqueCount,
  count
};

//

const Grouping = {
  getDefaultColumnDef: () => {
    return {
      aggregatedCell: props => {
        var _toString, _props$getValue;
        return (_toString = (_props$getValue = props.getValue()) == null || _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
      },
      aggregationFn: 'auto'
    };
  },
  getInitialState: state => {
    return {
      grouping: [],
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onGroupingChange: makeStateUpdater('grouping', table),
      groupedColumnMode: 'reorder'
    };
  },
  createColumn: (column, table) => {
    column.toggleGrouping = () => {
      table.setGrouping(old => {
        // Find any existing grouping for this column
        if (old != null && old.includes(column.id)) {
          return old.filter(d => d !== column.id);
        }
        return [...(old != null ? old : []), column.id];
      });
    };
    column.getCanGroup = () => {
      var _ref, _ref2, _ref3, _column$columnDef$ena;
      return (_ref = (_ref2 = (_ref3 = (_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) != null ? _ref3 : table.options.enableGrouping) != null ? _ref2 : true) != null ? _ref : !!column.accessorFn;
    };
    column.getIsGrouped = () => {
      var _table$getState$group;
      return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
    };
    column.getGroupedIndex = () => {
      var _table$getState$group2;
      return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
    };
    column.getToggleGroupingHandler = () => {
      const canGroup = column.getCanGroup();
      return () => {
        if (!canGroup) return;
        column.toggleGrouping();
      };
    };
    column.getAutoAggregationFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === 'number') {
        return aggregationFns.sum;
      }
      if (Object.prototype.toString.call(value) === '[object Date]') {
        return aggregationFns.extent;
      }
    };
    column.getAggregationFn = () => {
      var _table$options$aggreg, _table$options$aggreg2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === 'auto' ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
    };
  },
  createTable: table => {
    table.setGrouping = updater => table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater);
    table.resetGrouping = defaultState => {
      var _table$initialState$g, _table$initialState;
      table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
    };
    table.getPreGroupedRowModel = () => table.getFilteredRowModel();
    table.getGroupedRowModel = () => {
      if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
        table._getGroupedRowModel = table.options.getGroupedRowModel(table);
      }
      if (table.options.manualGrouping || !table._getGroupedRowModel) {
        return table.getPreGroupedRowModel();
      }
      return table._getGroupedRowModel();
    };
  },
  createRow: (row, table) => {
    row.getIsGrouped = () => !!row.groupingColumnId;
    row.getGroupingValue = columnId => {
      if (row._groupingValuesCache.hasOwnProperty(columnId)) {
        return row._groupingValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.columnDef.getGroupingValue)) {
        return row.getValue(columnId);
      }
      row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
      return row._groupingValuesCache[columnId];
    };
    row._groupingValuesCache = {};
  },
  createCell: (cell, column, row, table) => {
    cell.getIsGrouped = () => column.getIsGrouped() && column.id === row.groupingColumnId;
    cell.getIsPlaceholder = () => !cell.getIsGrouped() && column.getIsGrouped();
    cell.getIsAggregated = () => {
      var _row$subRows;
      return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
  }
};
function orderColumns(leafColumns, grouping, groupedColumnMode) {
  if (!(grouping != null && grouping.length) || !groupedColumnMode) {
    return leafColumns;
  }
  const nonGroupingColumns = leafColumns.filter(col => !grouping.includes(col.id));
  if (groupedColumnMode === 'remove') {
    return nonGroupingColumns;
  }
  const groupingColumns = grouping.map(g => leafColumns.find(col => col.id === g)).filter(Boolean);
  return [...groupingColumns, ...nonGroupingColumns];
}

//

const Ordering = {
  getInitialState: state => {
    return {
      columnOrder: [],
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnOrderChange: makeStateUpdater('columnOrder', table)
    };
  },
  createTable: table => {
    table.setColumnOrder = updater => table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater);
    table.resetColumnOrder = defaultState => {
      var _table$initialState$c;
      table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
    };
    table._getOrderColumnsFn = memo(() => [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode], (columnOrder, grouping, groupedColumnMode) => columns => {
      // Sort grouped columns to the start of the column list
      // before the headers are built
      let orderedColumns = [];

      // If there is no order, return the normal columns
      if (!(columnOrder != null && columnOrder.length)) {
        orderedColumns = columns;
      } else {
        const columnOrderCopy = [...columnOrder];

        // If there is an order, make a copy of the columns
        const columnsCopy = [...columns];

        // And make a new ordered array of the columns

        // Loop over the columns and place them in order into the new array
        while (columnsCopy.length && columnOrderCopy.length) {
          const targetColumnId = columnOrderCopy.shift();
          const foundIndex = columnsCopy.findIndex(d => d.id === targetColumnId);
          if (foundIndex > -1) {
            orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
          }
        }

        // If there are any columns left, add them to the end
        orderedColumns = [...orderedColumns, ...columnsCopy];
      }
      return orderColumns(orderedColumns, grouping, groupedColumnMode);
    }, {
      key:  true && 'getOrderColumnsFn'
      // debug: () => table.options.debugAll ?? table.options.debugTable,
    });
  }
};

//

const defaultPageIndex = 0;
const defaultPageSize = 10;
const getDefaultPaginationState = () => ({
  pageIndex: defaultPageIndex,
  pageSize: defaultPageSize
});
const Pagination = {
  getInitialState: state => {
    return {
      ...state,
      pagination: {
        ...getDefaultPaginationState(),
        ...(state == null ? void 0 : state.pagination)
      }
    };
  },
  getDefaultOptions: table => {
    return {
      onPaginationChange: makeStateUpdater('pagination', table)
    };
  },
  createTable: table => {
    let registered = false;
    let queued = false;
    table._autoResetPageIndex = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
        if (queued) return;
        queued = true;
        table._queue(() => {
          table.resetPageIndex();
          queued = false;
        });
      }
    };
    table.setPagination = updater => {
      const safeUpdater = old => {
        let newState = functionalUpdate(updater, old);
        return newState;
      };
      return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
    };
    table.resetPagination = defaultState => {
      var _table$initialState$p;
      table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
    };
    table.setPageIndex = updater => {
      table.setPagination(old => {
        let pageIndex = functionalUpdate(updater, old.pageIndex);
        const maxPageIndex = typeof table.options.pageCount === 'undefined' || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
        pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
        return {
          ...old,
          pageIndex
        };
      });
    };
    table.resetPageIndex = defaultState => {
      var _table$initialState$p2, _table$initialState;
      table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null || (_table$initialState = _table$initialState.pagination) == null ? void 0 : _table$initialState.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
    };
    table.resetPageSize = defaultState => {
      var _table$initialState$p3, _table$initialState2;
      table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p3 = (_table$initialState2 = table.initialState) == null || (_table$initialState2 = _table$initialState2.pagination) == null ? void 0 : _table$initialState2.pageSize) != null ? _table$initialState$p3 : defaultPageSize);
    };
    table.setPageSize = updater => {
      table.setPagination(old => {
        const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
        const topRowIndex = old.pageSize * old.pageIndex;
        const pageIndex = Math.floor(topRowIndex / pageSize);
        return {
          ...old,
          pageIndex,
          pageSize
        };
      });
    };
    table.setPageCount = updater => table.setPagination(old => {
      var _table$options$pageCo;
      let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
      if (typeof newPageCount === 'number') {
        newPageCount = Math.max(-1, newPageCount);
      }
      return {
        ...old,
        pageCount: newPageCount
      };
    });
    table.getPageOptions = memo(() => [table.getPageCount()], pageCount => {
      let pageOptions = [];
      if (pageCount && pageCount > 0) {
        pageOptions = [...new Array(pageCount)].fill(null).map((_, i) => i);
      }
      return pageOptions;
    }, {
      key:  true && 'getPageOptions',
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      }
    });
    table.getCanPreviousPage = () => table.getState().pagination.pageIndex > 0;
    table.getCanNextPage = () => {
      const {
        pageIndex
      } = table.getState().pagination;
      const pageCount = table.getPageCount();
      if (pageCount === -1) {
        return true;
      }
      if (pageCount === 0) {
        return false;
      }
      return pageIndex < pageCount - 1;
    };
    table.previousPage = () => {
      return table.setPageIndex(old => old - 1);
    };
    table.nextPage = () => {
      return table.setPageIndex(old => {
        return old + 1;
      });
    };
    table.getPrePaginationRowModel = () => table.getExpandedRowModel();
    table.getPaginationRowModel = () => {
      if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
        table._getPaginationRowModel = table.options.getPaginationRowModel(table);
      }
      if (table.options.manualPagination || !table._getPaginationRowModel) {
        return table.getPrePaginationRowModel();
      }
      return table._getPaginationRowModel();
    };
    table.getPageCount = () => {
      var _table$options$pageCo2;
      return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getPrePaginationRowModel().rows.length / table.getState().pagination.pageSize);
    };
  }
};

//

const getDefaultColumnPinningState = () => ({
  left: [],
  right: []
});
const getDefaultRowPinningState = () => ({
  top: [],
  bottom: []
});
const Pinning = {
  getInitialState: state => {
    return {
      columnPinning: getDefaultColumnPinningState(),
      rowPinning: getDefaultRowPinningState(),
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnPinningChange: makeStateUpdater('columnPinning', table),
      onRowPinningChange: makeStateUpdater('rowPinning', table)
    };
  },
  createColumn: (column, table) => {
    column.pin = position => {
      const columnIds = column.getLeafColumns().map(d => d.id).filter(Boolean);
      table.setColumnPinning(old => {
        var _old$left3, _old$right3;
        if (position === 'right') {
          var _old$left, _old$right;
          return {
            left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter(d => !(columnIds != null && columnIds.includes(d))),
            right: [...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter(d => !(columnIds != null && columnIds.includes(d))), ...columnIds]
          };
        }
        if (position === 'left') {
          var _old$left2, _old$right2;
          return {
            left: [...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter(d => !(columnIds != null && columnIds.includes(d))), ...columnIds],
            right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter(d => !(columnIds != null && columnIds.includes(d)))
          };
        }
        return {
          left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter(d => !(columnIds != null && columnIds.includes(d))),
          right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter(d => !(columnIds != null && columnIds.includes(d)))
        };
      });
    };
    column.getCanPin = () => {
      const leafColumns = column.getLeafColumns();
      return leafColumns.some(d => {
        var _d$columnDef$enablePi, _ref, _table$options$enable;
        return ((_d$columnDef$enablePi = d.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_ref = (_table$options$enable = table.options.enableColumnPinning) != null ? _table$options$enable : table.options.enablePinning) != null ? _ref : true);
      });
    };
    column.getIsPinned = () => {
      const leafColumnIds = column.getLeafColumns().map(d => d.id);
      const {
        left,
        right
      } = table.getState().columnPinning;
      const isLeft = leafColumnIds.some(d => left == null ? void 0 : left.includes(d));
      const isRight = leafColumnIds.some(d => right == null ? void 0 : right.includes(d));
      return isLeft ? 'left' : isRight ? 'right' : false;
    };
    column.getPinnedIndex = () => {
      var _table$getState$colum, _table$getState$colum2;
      const position = column.getIsPinned();
      return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null || (_table$getState$colum2 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum2.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
    };
  },
  createRow: (row, table) => {
    row.pin = (position, includeLeafRows, includeParentRows) => {
      const leafRowIds = includeLeafRows ? row.getLeafRows().map(_ref2 => {
        let {
          id
        } = _ref2;
        return id;
      }) : [];
      const parentRowIds = includeParentRows ? row.getParentRows().map(_ref3 => {
        let {
          id
        } = _ref3;
        return id;
      }) : [];
      const rowIds = new Set([...parentRowIds, row.id, ...leafRowIds]);
      table.setRowPinning(old => {
        var _old$top3, _old$bottom3;
        if (position === 'bottom') {
          var _old$top, _old$bottom;
          return {
            top: ((_old$top = old == null ? void 0 : old.top) != null ? _old$top : []).filter(d => !(rowIds != null && rowIds.has(d))),
            bottom: [...((_old$bottom = old == null ? void 0 : old.bottom) != null ? _old$bottom : []).filter(d => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)]
          };
        }
        if (position === 'top') {
          var _old$top2, _old$bottom2;
          return {
            top: [...((_old$top2 = old == null ? void 0 : old.top) != null ? _old$top2 : []).filter(d => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)],
            bottom: ((_old$bottom2 = old == null ? void 0 : old.bottom) != null ? _old$bottom2 : []).filter(d => !(rowIds != null && rowIds.has(d)))
          };
        }
        return {
          top: ((_old$top3 = old == null ? void 0 : old.top) != null ? _old$top3 : []).filter(d => !(rowIds != null && rowIds.has(d))),
          bottom: ((_old$bottom3 = old == null ? void 0 : old.bottom) != null ? _old$bottom3 : []).filter(d => !(rowIds != null && rowIds.has(d)))
        };
      });
    };
    row.getCanPin = () => {
      var _ref4;
      const {
        enableRowPinning,
        enablePinning
      } = table.options;
      if (typeof enableRowPinning === 'function') {
        return enableRowPinning(row);
      }
      return (_ref4 = enableRowPinning != null ? enableRowPinning : enablePinning) != null ? _ref4 : true;
    };
    row.getIsPinned = () => {
      const rowIds = [row.id];
      const {
        top,
        bottom
      } = table.getState().rowPinning;
      const isTop = rowIds.some(d => top == null ? void 0 : top.includes(d));
      const isBottom = rowIds.some(d => bottom == null ? void 0 : bottom.includes(d));
      return isTop ? 'top' : isBottom ? 'bottom' : false;
    };
    row.getPinnedIndex = () => {
      var _table$_getPinnedRows, _visiblePinnedRowIds$;
      const position = row.getIsPinned();
      if (!position) return -1;
      const visiblePinnedRowIds = (_table$_getPinnedRows = table._getPinnedRows(position)) == null ? void 0 : _table$_getPinnedRows.map(_ref5 => {
        let {
          id
        } = _ref5;
        return id;
      });
      return (_visiblePinnedRowIds$ = visiblePinnedRowIds == null ? void 0 : visiblePinnedRowIds.indexOf(row.id)) != null ? _visiblePinnedRowIds$ : -1;
    };
    row.getCenterVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allCells, left, right) => {
      const leftAndRight = [...(left != null ? left : []), ...(right != null ? right : [])];
      return allCells.filter(d => !leftAndRight.includes(d.column.id));
    }, {
      key:  true && 'row.getCenterVisibleCells',
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
      }
    });
    row.getLeftVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left,,], (allCells, left) => {
      const cells = (left != null ? left : []).map(columnId => allCells.find(cell => cell.column.id === columnId)).filter(Boolean).map(d => ({
        ...d,
        position: 'left'
      }));
      return cells;
    }, {
      key:  true && 'row.getLeftVisibleCells',
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
      }
    });
    row.getRightVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.right], (allCells, right) => {
      const cells = (right != null ? right : []).map(columnId => allCells.find(cell => cell.column.id === columnId)).filter(Boolean).map(d => ({
        ...d,
        position: 'right'
      }));
      return cells;
    }, {
      key:  true && 'row.getRightVisibleCells',
      debug: () => {
        var _table$options$debugA3;
        return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugRows;
      }
    });
  },
  createTable: table => {
    table.setColumnPinning = updater => table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater);
    table.resetColumnPinning = defaultState => {
      var _table$initialState$c, _table$initialState;
      return table.setColumnPinning(defaultState ? getDefaultColumnPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultColumnPinningState());
    };
    table.getIsSomeColumnsPinned = position => {
      var _pinningState$positio;
      const pinningState = table.getState().columnPinning;
      if (!position) {
        var _pinningState$left, _pinningState$right;
        return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table.getLeftLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left], (allColumns, left) => {
      return (left != null ? left : []).map(columnId => allColumns.find(column => column.id === columnId)).filter(Boolean);
    }, {
      key:  true && 'getLeftLeafColumns',
      debug: () => {
        var _table$options$debugA4;
        return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugColumns;
      }
    });
    table.getRightLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.right], (allColumns, right) => {
      return (right != null ? right : []).map(columnId => allColumns.find(column => column.id === columnId)).filter(Boolean);
    }, {
      key:  true && 'getRightLeafColumns',
      debug: () => {
        var _table$options$debugA5;
        return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugColumns;
      }
    });
    table.getCenterLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, left, right) => {
      const leftAndRight = [...(left != null ? left : []), ...(right != null ? right : [])];
      return allColumns.filter(d => !leftAndRight.includes(d.id));
    }, {
      key:  true && 'getCenterLeafColumns',
      debug: () => {
        var _table$options$debugA6;
        return (_table$options$debugA6 = table.options.debugAll) != null ? _table$options$debugA6 : table.options.debugColumns;
      }
    });
    table.setRowPinning = updater => table.options.onRowPinningChange == null ? void 0 : table.options.onRowPinningChange(updater);
    table.resetRowPinning = defaultState => {
      var _table$initialState$r, _table$initialState2;
      return table.setRowPinning(defaultState ? getDefaultRowPinningState() : (_table$initialState$r = (_table$initialState2 = table.initialState) == null ? void 0 : _table$initialState2.rowPinning) != null ? _table$initialState$r : getDefaultRowPinningState());
    };
    table.getIsSomeRowsPinned = position => {
      var _pinningState$positio2;
      const pinningState = table.getState().rowPinning;
      if (!position) {
        var _pinningState$top, _pinningState$bottom;
        return Boolean(((_pinningState$top = pinningState.top) == null ? void 0 : _pinningState$top.length) || ((_pinningState$bottom = pinningState.bottom) == null ? void 0 : _pinningState$bottom.length));
      }
      return Boolean((_pinningState$positio2 = pinningState[position]) == null ? void 0 : _pinningState$positio2.length);
    };
    table._getPinnedRows = position => memo(() => [table.getRowModel().rows, table.getState().rowPinning[position]], (visibleRows, pinnedRowIds) => {
      var _table$options$keepPi;
      const rows = ((_table$options$keepPi = table.options.keepPinnedRows) != null ? _table$options$keepPi : true) ?
      //get all rows that are pinned even if they would not be otherwise visible
      //account for expanded parent rows, but not pagination or filtering
      (pinnedRowIds != null ? pinnedRowIds : []).map(rowId => {
        const row = table.getRow(rowId, true);
        return row.getIsAllParentsExpanded() ? row : null;
      }) :
      //else get only visible rows that are pinned
      (pinnedRowIds != null ? pinnedRowIds : []).map(rowId => visibleRows.find(row => row.id === rowId));
      return rows.filter(Boolean).map(d => ({
        ...d,
        position
      }));
    }, {
      key:  true && `row.get${position === 'top' ? 'Top' : 'Bottom'}Rows`,
      debug: () => {
        var _table$options$debugA7;
        return (_table$options$debugA7 = table.options.debugAll) != null ? _table$options$debugA7 : table.options.debugRows;
      }
    })();
    table.getTopRows = () => table._getPinnedRows('top');
    table.getBottomRows = () => table._getPinnedRows('bottom');
    table.getCenterRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top, table.getState().rowPinning.bottom], (allRows, top, bottom) => {
      const topAndBottom = new Set([...(top != null ? top : []), ...(bottom != null ? bottom : [])]);
      return allRows.filter(d => !topAndBottom.has(d.id));
    }, {
      key:  true && 'row.getCenterRows',
      debug: () => {
        var _table$options$debugA8;
        return (_table$options$debugA8 = table.options.debugAll) != null ? _table$options$debugA8 : table.options.debugRows;
      }
    });
  }
};

//

const RowSelection = {
  getInitialState: state => {
    return {
      rowSelection: {},
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onRowSelectionChange: makeStateUpdater('rowSelection', table),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
      // enableGroupingRowSelection: false,
      // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
      // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
    };
  },

  createTable: table => {
    table.setRowSelection = updater => table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater);
    table.resetRowSelection = defaultState => {
      var _table$initialState$r;
      return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
    };
    table.toggleAllRowsSelected = value => {
      table.setRowSelection(old => {
        value = typeof value !== 'undefined' ? value : !table.getIsAllRowsSelected();
        const rowSelection = {
          ...old
        };
        const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;

        // We don't use `mutateRowIsSelected` here for performance reasons.
        // All of the rows are flat already, so it wouldn't be worth it
        if (value) {
          preGroupedFlatRows.forEach(row => {
            if (!row.getCanSelect()) {
              return;
            }
            rowSelection[row.id] = true;
          });
        } else {
          preGroupedFlatRows.forEach(row => {
            delete rowSelection[row.id];
          });
        }
        return rowSelection;
      });
    };
    table.toggleAllPageRowsSelected = value => table.setRowSelection(old => {
      const resolvedValue = typeof value !== 'undefined' ? value : !table.getIsAllPageRowsSelected();
      const rowSelection = {
        ...old
      };
      table.getRowModel().rows.forEach(row => {
        mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table);
      });
      return rowSelection;
    });

    // addRowSelectionRange: rowId => {
    //   const {
    //     rows,
    //     rowsById,
    //     options: { selectGroupingRows, selectSubRows },
    //   } = table

    //   const findSelectedRow = (rows: Row[]) => {
    //     let found
    //     rows.find(d => {
    //       if (d.getIsSelected()) {
    //         found = d
    //         return true
    //       }
    //       const subFound = findSelectedRow(d.subRows || [])
    //       if (subFound) {
    //         found = subFound
    //         return true
    //       }
    //       return false
    //     })
    //     return found
    //   }

    //   const firstRow = findSelectedRow(rows) || rows[0]
    //   const lastRow = rowsById[rowId]

    //   let include = false
    //   const selectedRowIds = {}

    //   const addRow = (row: Row) => {
    //     mutateRowIsSelected(selectedRowIds, row.id, true, {
    //       rowsById,
    //       selectGroupingRows: selectGroupingRows!,
    //       selectSubRows: selectSubRows!,
    //     })
    //   }

    //   table.rows.forEach(row => {
    //     const isFirstRow = row.id === firstRow.id
    //     const isLastRow = row.id === lastRow.id

    //     if (isFirstRow || isLastRow) {
    //       if (!include) {
    //         include = true
    //       } else if (include) {
    //         addRow(row)
    //         include = false
    //       }
    //     }

    //     if (include) {
    //       addRow(row)
    //     }
    //   })

    //   table.setRowSelection(selectedRowIds)
    // },
    table.getPreSelectedRowModel = () => table.getCoreRowModel();
    table.getSelectedRowModel = memo(() => [table.getState().rowSelection, table.getCoreRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, {
      key:  true && 'getSelectedRowModel',
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      }
    });
    table.getFilteredSelectedRowModel = memo(() => [table.getState().rowSelection, table.getFilteredRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, {
      key:  false && 0,
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugTable;
      }
    });
    table.getGroupedSelectedRowModel = memo(() => [table.getState().rowSelection, table.getSortedRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, {
      key:  false && 0,
      debug: () => {
        var _table$options$debugA3;
        return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugTable;
      }
    });

    ///

    // getGroupingRowCanSelect: rowId => {
    //   const row = table.getRow(rowId)

    //   if (!row) {
    //     throw new Error()
    //   }

    //   if (typeof table.options.enableGroupingRowSelection === 'function') {
    //     return table.options.enableGroupingRowSelection(row)
    //   }

    //   return table.options.enableGroupingRowSelection ?? false
    // },

    table.getIsAllRowsSelected = () => {
      const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
      const {
        rowSelection
      } = table.getState();
      let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
      if (isAllRowsSelected) {
        if (preGroupedFlatRows.some(row => row.getCanSelect() && !rowSelection[row.id])) {
          isAllRowsSelected = false;
        }
      }
      return isAllRowsSelected;
    };
    table.getIsAllPageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows.filter(row => row.getCanSelect());
      const {
        rowSelection
      } = table.getState();
      let isAllPageRowsSelected = !!paginationFlatRows.length;
      if (isAllPageRowsSelected && paginationFlatRows.some(row => !rowSelection[row.id])) {
        isAllPageRowsSelected = false;
      }
      return isAllPageRowsSelected;
    };
    table.getIsSomeRowsSelected = () => {
      var _table$getState$rowSe;
      const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
      return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
    };
    table.getIsSomePageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows;
      return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter(row => row.getCanSelect()).some(d => d.getIsSelected() || d.getIsSomeSelected());
    };
    table.getToggleAllRowsSelectedHandler = () => {
      return e => {
        table.toggleAllRowsSelected(e.target.checked);
      };
    };
    table.getToggleAllPageRowsSelectedHandler = () => {
      return e => {
        table.toggleAllPageRowsSelected(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row.toggleSelected = (value, opts) => {
      const isSelected = row.getIsSelected();
      table.setRowSelection(old => {
        var _opts$selectChildren;
        value = typeof value !== 'undefined' ? value : !isSelected;
        if (row.getCanSelect() && isSelected === value) {
          return old;
        }
        const selectedRowIds = {
          ...old
        };
        mutateRowIsSelected(selectedRowIds, row.id, value, (_opts$selectChildren = opts == null ? void 0 : opts.selectChildren) != null ? _opts$selectChildren : true, table);
        return selectedRowIds;
      });
    };
    row.getIsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isRowSelected(row, rowSelection);
    };
    row.getIsSomeSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === 'some';
    };
    row.getIsAllSubRowsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === 'all';
    };
    row.getCanSelect = () => {
      var _table$options$enable;
      if (typeof table.options.enableRowSelection === 'function') {
        return table.options.enableRowSelection(row);
      }
      return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
    };
    row.getCanSelectSubRows = () => {
      var _table$options$enable2;
      if (typeof table.options.enableSubRowSelection === 'function') {
        return table.options.enableSubRowSelection(row);
      }
      return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
    };
    row.getCanMultiSelect = () => {
      var _table$options$enable3;
      if (typeof table.options.enableMultiRowSelection === 'function') {
        return table.options.enableMultiRowSelection(row);
      }
      return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
    };
    row.getToggleSelectedHandler = () => {
      const canSelect = row.getCanSelect();
      return e => {
        var _target;
        if (!canSelect) return;
        row.toggleSelected((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
const mutateRowIsSelected = (selectedRowIds, id, value, includeChildren, table) => {
  var _row$subRows;
  const row = table.getRow(id);

  // const isGrouped = row.getIsGrouped()

  // if ( // TODO: enforce grouping row selection rules
  //   !isGrouped ||
  //   (isGrouped && table.options.enableGroupingRowSelection)
  // ) {
  if (value) {
    if (!row.getCanMultiSelect()) {
      Object.keys(selectedRowIds).forEach(key => delete selectedRowIds[key]);
    }
    if (row.getCanSelect()) {
      selectedRowIds[id] = true;
    }
  } else {
    delete selectedRowIds[id];
  }
  // }

  if (includeChildren && (_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
    row.subRows.forEach(row => mutateRowIsSelected(selectedRowIds, row.id, value, includeChildren, table));
  }
};
function selectRowsFn(table, rowModel) {
  const rowSelection = table.getState().rowSelection;
  const newSelectedFlatRows = [];
  const newSelectedRowsById = {};

  // Filters top level and nested rows
  const recurseRows = function (rows, depth) {
    return rows.map(row => {
      var _row$subRows2;
      const isSelected = isRowSelected(row, rowSelection);
      if (isSelected) {
        newSelectedFlatRows.push(row);
        newSelectedRowsById[row.id] = row;
      }
      if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
        row = {
          ...row,
          subRows: recurseRows(row.subRows)
        };
      }
      if (isSelected) {
        return row;
      }
    }).filter(Boolean);
  };
  return {
    rows: recurseRows(rowModel.rows),
    flatRows: newSelectedFlatRows,
    rowsById: newSelectedRowsById
  };
}
function isRowSelected(row, selection) {
  var _selection$row$id;
  return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
}
function isSubRowSelected(row, selection, table) {
  var _row$subRows3;
  if (!((_row$subRows3 = row.subRows) != null && _row$subRows3.length)) return false;
  let allChildrenSelected = true;
  let someSelected = false;
  row.subRows.forEach(subRow => {
    // Bail out early if we know both of these
    if (someSelected && !allChildrenSelected) {
      return;
    }
    if (subRow.getCanSelect()) {
      if (isRowSelected(subRow, selection)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    }

    // Check row selection of nested subrows
    if (subRow.subRows && subRow.subRows.length) {
      const subRowChildrenSelected = isSubRowSelected(subRow, selection);
      if (subRowChildrenSelected === 'all') {
        someSelected = true;
      } else if (subRowChildrenSelected === 'some') {
        someSelected = true;
        allChildrenSelected = false;
      } else {
        allChildrenSelected = false;
      }
    }
  });
  return allChildrenSelected ? 'all' : someSelected ? 'some' : false;
}

const reSplitAlphaNumeric = /([0-9]+)/gm;
const alphanumeric = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
const alphanumericCaseSensitive = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};

// The text filter is more basic (less numeric support)
// but is much faster
const text = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};

// The text filter is more basic (less numeric support)
// but is much faster
const textCaseSensitive = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
const datetime = (rowA, rowB, columnId) => {
  const a = rowA.getValue(columnId);
  const b = rowB.getValue(columnId);

  // Can handle nullish values
  // Use > and < because == (and ===) doesn't work with
  // Date objects (would require calling getTime()).
  return a > b ? 1 : a < b ? -1 : 0;
};
const basic = (rowA, rowB, columnId) => {
  return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
};

// Utils

function compareBasic(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}
function toString(a) {
  if (typeof a === 'boolean') {
    return String(a);
  }
  if (typeof a === 'number') {
    if (isNaN(a) || a === Infinity || a === -Infinity) {
      return '';
    }
    return String(a);
  }
  if (typeof a === 'string') {
    return a;
  }
  return '';
}

// Mixed sorting is slow, but very inclusive of many edge cases.
// It handles numbers, mixed alphanumeric combinations, and even
// null, undefined, and Infinity
function compareAlphanumeric(aStr, bStr) {
  // Check if the string contains only a number
  const aFloat = parseFloat(aStr);
  const bFloat = parseFloat(bStr);
  if (!isNaN(aFloat) && !isNaN(bFloat)) {
    return compareBasic(aFloat, bFloat);
  }

  // Split on number groups, but keep the delimiter
  // Then remove falsey split values
  const a = aStr.split(reSplitAlphaNumeric).filter(Boolean);
  const b = bStr.split(reSplitAlphaNumeric).filter(Boolean);

  // While
  while (a.length && b.length) {
    const aa = a.shift();
    const bb = b.shift();
    const an = parseInt(aa, 10);
    const bn = parseInt(bb, 10);
    const combo = [an, bn].sort();

    // Both are string
    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }
      if (bb > aa) {
        return -1;
      }
      continue;
    }

    // One is a string, one is a number
    if (isNaN(combo[1])) {
      return isNaN(an) ? -1 : 1;
    }

    // Both are numbers
    if (an > bn) {
      return 1;
    }
    if (bn > an) {
      return -1;
    }
  }
  return a.length - b.length;
}

// Exports

const sortingFns = {
  alphanumeric,
  alphanumericCaseSensitive,
  text,
  textCaseSensitive,
  datetime,
  basic
};

//

const Sorting = {
  getInitialState: state => {
    return {
      sorting: [],
      ...state
    };
  },
  getDefaultColumnDef: () => {
    return {
      sortingFn: 'auto',
      sortUndefined: 1
    };
  },
  getDefaultOptions: table => {
    return {
      onSortingChange: makeStateUpdater('sorting', table),
      isMultiSortEvent: e => {
        return e.shiftKey;
      }
    };
  },
  createColumn: (column, table) => {
    column.getAutoSortingFn = () => {
      const firstRows = table.getFilteredRowModel().flatRows.slice(10);
      let isString = false;
      for (const row of firstRows) {
        const value = row == null ? void 0 : row.getValue(column.id);
        if (Object.prototype.toString.call(value) === '[object Date]') {
          return sortingFns.datetime;
        }
        if (typeof value === 'string') {
          isString = true;
          if (value.split(reSplitAlphaNumeric).length > 1) {
            return sortingFns.alphanumeric;
          }
        }
      }
      if (isString) {
        return sortingFns.text;
      }
      return sortingFns.basic;
    };
    column.getAutoSortDir = () => {
      const firstRow = table.getFilteredRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === 'string') {
        return 'asc';
      }
      return 'desc';
    };
    column.getSortingFn = () => {
      var _table$options$sortin, _table$options$sortin2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === 'auto' ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
    };
    column.toggleSorting = (desc, multi) => {
      // if (column.columns.length) {
      //   column.columns.forEach((c, i) => {
      //     if (c.id) {
      //       table.toggleColumnSorting(c.id, undefined, multi || !!i)
      //     }
      //   })
      //   return
      // }

      // this needs to be outside of table.setSorting to be in sync with rerender
      const nextSortingOrder = column.getNextSortingOrder();
      const hasManualValue = typeof desc !== 'undefined' && desc !== null;
      table.setSorting(old => {
        // Find any existing sorting for this column
        const existingSorting = old == null ? void 0 : old.find(d => d.id === column.id);
        const existingIndex = old == null ? void 0 : old.findIndex(d => d.id === column.id);
        let newSorting = [];

        // What should we do with this sort action?
        let sortAction;
        let nextDesc = hasManualValue ? desc : nextSortingOrder === 'desc';

        // Multi-mode
        if (old != null && old.length && column.getCanMultiSort() && multi) {
          if (existingSorting) {
            sortAction = 'toggle';
          } else {
            sortAction = 'add';
          }
        } else {
          // Normal mode
          if (old != null && old.length && existingIndex !== old.length - 1) {
            sortAction = 'replace';
          } else if (existingSorting) {
            sortAction = 'toggle';
          } else {
            sortAction = 'replace';
          }
        }

        // Handle toggle states that will remove the sorting
        if (sortAction === 'toggle') {
          // If we are "actually" toggling (not a manual set value), should we remove the sorting?
          if (!hasManualValue) {
            // Is our intention to remove?
            if (!nextSortingOrder) {
              sortAction = 'remove';
            }
          }
        }
        if (sortAction === 'add') {
          var _table$options$maxMul;
          newSorting = [...old, {
            id: column.id,
            desc: nextDesc
          }];
          // Take latest n columns
          newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
        } else if (sortAction === 'toggle') {
          // This flips (or sets) the
          newSorting = old.map(d => {
            if (d.id === column.id) {
              return {
                ...d,
                desc: nextDesc
              };
            }
            return d;
          });
        } else if (sortAction === 'remove') {
          newSorting = old.filter(d => d.id !== column.id);
        } else {
          newSorting = [{
            id: column.id,
            desc: nextDesc
          }];
        }
        return newSorting;
      });
    };
    column.getFirstSortDir = () => {
      var _ref, _column$columnDef$sor;
      const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === 'desc';
      return sortDescFirst ? 'desc' : 'asc';
    };
    column.getNextSortingOrder = multi => {
      var _table$options$enable, _table$options$enable2;
      const firstSortDirection = column.getFirstSortDir();
      const isSorted = column.getIsSorted();
      if (!isSorted) {
        return firstSortDirection;
      }
      if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && (
      // If enableSortRemove, enable in general
      multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true) // If multi, don't allow if enableMultiRemove))
      ) {
        return false;
      }
      return isSorted === 'desc' ? 'asc' : 'desc';
    };
    column.getCanSort = () => {
      var _column$columnDef$ena, _table$options$enable3;
      return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
    };
    column.getCanMultiSort = () => {
      var _ref2, _column$columnDef$ena2;
      return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
    };
    column.getIsSorted = () => {
      var _table$getState$sorti;
      const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find(d => d.id === column.id);
      return !columnSort ? false : columnSort.desc ? 'desc' : 'asc';
    };
    column.getSortIndex = () => {
      var _table$getState$sorti2, _table$getState$sorti3;
      return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex(d => d.id === column.id)) != null ? _table$getState$sorti2 : -1;
    };
    column.clearSorting = () => {
      //clear sorting for just 1 column
      table.setSorting(old => old != null && old.length ? old.filter(d => d.id !== column.id) : []);
    };
    column.getToggleSortingHandler = () => {
      const canSort = column.getCanSort();
      return e => {
        if (!canSort) return;
        e.persist == null || e.persist();
        column.toggleSorting == null || column.toggleSorting(undefined, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e) : false);
      };
    };
  },
  createTable: table => {
    table.setSorting = updater => table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater);
    table.resetSorting = defaultState => {
      var _table$initialState$s, _table$initialState;
      table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
    };
    table.getPreSortedRowModel = () => table.getGroupedRowModel();
    table.getSortedRowModel = () => {
      if (!table._getSortedRowModel && table.options.getSortedRowModel) {
        table._getSortedRowModel = table.options.getSortedRowModel(table);
      }
      if (table.options.manualSorting || !table._getSortedRowModel) {
        return table.getPreSortedRowModel();
      }
      return table._getSortedRowModel();
    };
  }
};

//

const Visibility = {
  getInitialState: state => {
    return {
      columnVisibility: {},
      ...state
    };
  },
  getDefaultOptions: table => {
    return {
      onColumnVisibilityChange: makeStateUpdater('columnVisibility', table)
    };
  },
  createColumn: (column, table) => {
    column.toggleVisibility = value => {
      if (column.getCanHide()) {
        table.setColumnVisibility(old => ({
          ...old,
          [column.id]: value != null ? value : !column.getIsVisible()
        }));
      }
    };
    column.getIsVisible = () => {
      var _table$getState$colum, _table$getState$colum2;
      return (_table$getState$colum = (_table$getState$colum2 = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum2[column.id]) != null ? _table$getState$colum : true;
    };
    column.getCanHide = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
    };
    column.getToggleVisibilityHandler = () => {
      return e => {
        column.toggleVisibility == null || column.toggleVisibility(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row._getAllVisibleCells = memo(() => [row.getAllCells(), table.getState().columnVisibility], cells => {
      return cells.filter(cell => cell.column.getIsVisible());
    }, {
      key:  false && 0,
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
      }
    });
    row.getVisibleCells = memo(() => [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()], (left, center, right) => [...left, ...center, ...right], {
      key:  true && 'row.getVisibleCells',
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
      }
    });
  },
  createTable: table => {
    const makeVisibleColumnsMethod = (key, getColumns) => {
      return memo(() => [getColumns(), getColumns().filter(d => d.getIsVisible()).map(d => d.id).join('_')], columns => {
        return columns.filter(d => d.getIsVisible == null ? void 0 : d.getIsVisible());
      }, {
        key,
        debug: () => {
          var _table$options$debugA3;
          return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugColumns;
        }
      });
    };
    table.getVisibleFlatColumns = makeVisibleColumnsMethod('getVisibleFlatColumns', () => table.getAllFlatColumns());
    table.getVisibleLeafColumns = makeVisibleColumnsMethod('getVisibleLeafColumns', () => table.getAllLeafColumns());
    table.getLeftVisibleLeafColumns = makeVisibleColumnsMethod('getLeftVisibleLeafColumns', () => table.getLeftLeafColumns());
    table.getRightVisibleLeafColumns = makeVisibleColumnsMethod('getRightVisibleLeafColumns', () => table.getRightLeafColumns());
    table.getCenterVisibleLeafColumns = makeVisibleColumnsMethod('getCenterVisibleLeafColumns', () => table.getCenterLeafColumns());
    table.setColumnVisibility = updater => table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater);
    table.resetColumnVisibility = defaultState => {
      var _table$initialState$c;
      table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
    };
    table.toggleAllColumnsVisible = value => {
      var _value;
      value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
      table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column) => ({
        ...obj,
        [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
      }), {}));
    };
    table.getIsAllColumnsVisible = () => !table.getAllLeafColumns().some(column => !(column.getIsVisible != null && column.getIsVisible()));
    table.getIsSomeColumnsVisible = () => table.getAllLeafColumns().some(column => column.getIsVisible == null ? void 0 : column.getIsVisible());
    table.getToggleAllColumnsVisibilityHandler = () => {
      return e => {
        var _target;
        table.toggleAllColumnsVisible((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};

const features = [Headers, Visibility, Ordering, Pinning, Filters, Sorting, Grouping, Expanding, Pagination, RowSelection, ColumnSizing];

//

function createTable(options) {
  var _options$initialState;
  if (options.debugAll || options.debugTable) {
    console.info('Creating Table Instance...');
  }
  let table = {
    _features: features
  };
  const defaultOptions = table._features.reduce((obj, feature) => {
    return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
  }, {});
  const mergeOptions = options => {
    if (table.options.mergeOptions) {
      return table.options.mergeOptions(defaultOptions, options);
    }
    return {
      ...defaultOptions,
      ...options
    };
  };
  const coreInitialState = {};
  let initialState = {
    ...coreInitialState,
    ...((_options$initialState = options.initialState) != null ? _options$initialState : {})
  };
  table._features.forEach(feature => {
    var _feature$getInitialSt;
    initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
  });
  const queued = [];
  let queuedTimeout = false;
  const coreInstance = {
    _features: features,
    options: {
      ...defaultOptions,
      ...options
    },
    initialState,
    _queue: cb => {
      queued.push(cb);
      if (!queuedTimeout) {
        queuedTimeout = true;

        // Schedule a microtask to run the queued callbacks after
        // the current call stack (render, etc) has finished.
        Promise.resolve().then(() => {
          while (queued.length) {
            queued.shift()();
          }
          queuedTimeout = false;
        }).catch(error => setTimeout(() => {
          throw error;
        }));
      }
    },
    reset: () => {
      table.setState(table.initialState);
    },
    setOptions: updater => {
      const newOptions = functionalUpdate(updater, table.options);
      table.options = mergeOptions(newOptions);
    },
    getState: () => {
      return table.options.state;
    },
    setState: updater => {
      table.options.onStateChange == null || table.options.onStateChange(updater);
    },
    _getRowId: (row, index, parent) => {
      var _table$options$getRow;
      return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : `${parent ? [parent.id, index].join('.') : index}`;
    },
    getCoreRowModel: () => {
      if (!table._getCoreRowModel) {
        table._getCoreRowModel = table.options.getCoreRowModel(table);
      }
      return table._getCoreRowModel();
    },
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up

    getRowModel: () => {
      return table.getPaginationRowModel();
    },
    getRow: (id, searchAll) => {
      const row = (searchAll ? table.getCoreRowModel() : table.getRowModel()).rowsById[id];
      if (!row) {
        if (true) {
          throw new Error(`getRow expected an ID, but got ${id}`);
        }
        throw new Error();
      }
      return row;
    },
    _getDefaultColumnDef: memo(() => [table.options.defaultColumn], defaultColumn => {
      var _defaultColumn;
      defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
      return {
        header: props => {
          const resolvedColumnDef = props.header.column.columnDef;
          if (resolvedColumnDef.accessorKey) {
            return resolvedColumnDef.accessorKey;
          }
          if (resolvedColumnDef.accessorFn) {
            return resolvedColumnDef.id;
          }
          return null;
        },
        // footer: props => props.header.column.id,
        cell: props => {
          var _props$renderValue$to, _props$renderValue;
          return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null || _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
        },
        ...table._features.reduce((obj, feature) => {
          return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
        }, {}),
        ...defaultColumn
      };
    }, {
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugColumns;
      },
      key:  true && 'getDefaultColumnDef'
    }),
    _getColumnDefs: () => table.options.columns,
    getAllColumns: memo(() => [table._getColumnDefs()], columnDefs => {
      const recurseColumns = function (columnDefs, parent, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        return columnDefs.map(columnDef => {
          const column = createColumn(table, columnDef, depth, parent);
          const groupingColumnDef = columnDef;
          column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
          return column;
        });
      };
      return recurseColumns(columnDefs);
    }, {
      key:  true && 'getAllColumns',
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugColumns;
      }
    }),
    getAllFlatColumns: memo(() => [table.getAllColumns()], allColumns => {
      return allColumns.flatMap(column => {
        return column.getFlatColumns();
      });
    }, {
      key:  true && 'getAllFlatColumns',
      debug: () => {
        var _table$options$debugA3;
        return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugColumns;
      }
    }),
    _getAllFlatColumnsById: memo(() => [table.getAllFlatColumns()], flatColumns => {
      return flatColumns.reduce((acc, column) => {
        acc[column.id] = column;
        return acc;
      }, {});
    }, {
      key:  true && 'getAllFlatColumnsById',
      debug: () => {
        var _table$options$debugA4;
        return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugColumns;
      }
    }),
    getAllLeafColumns: memo(() => [table.getAllColumns(), table._getOrderColumnsFn()], (allColumns, orderColumns) => {
      let leafColumns = allColumns.flatMap(column => column.getLeafColumns());
      return orderColumns(leafColumns);
    }, {
      key:  true && 'getAllLeafColumns',
      debug: () => {
        var _table$options$debugA5;
        return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugColumns;
      }
    }),
    getColumn: columnId => {
      const column = table._getAllFlatColumnsById()[columnId];
      if ( true && !column) {
        console.error(`[Table] Column with id '${columnId}' does not exist.`);
      }
      return column;
    }
  };
  Object.assign(table, coreInstance);
  for (let index = 0; index < table._features.length; index++) {
    const feature = table._features[index];
    feature == null || feature.createTable == null || feature.createTable(table);
  }
  return table;
}

function createCell(table, row, column, columnId) {
  const getRenderValue = () => {
    var _cell$getValue;
    return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
  };
  const cell = {
    id: `${row.id}_${column.id}`,
    row,
    column,
    getValue: () => row.getValue(columnId),
    renderValue: getRenderValue,
    getContext: memo(() => [table, column, row, cell], (table, column, row, cell) => ({
      table,
      column,
      row,
      cell: cell,
      getValue: cell.getValue,
      renderValue: cell.renderValue
    }), {
      key:  true && 'cell.getContext',
      debug: () => table.options.debugAll
    })
  };
  table._features.forEach(feature => {
    feature.createCell == null || feature.createCell(cell, column, row, table);
  }, {});
  return cell;
}

const createRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
  let row = {
    id,
    index: rowIndex,
    original,
    depth,
    parentId,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: columnId => {
      if (row._valuesCache.hasOwnProperty(columnId)) {
        return row._valuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return undefined;
      }
      row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
      return row._valuesCache[columnId];
    },
    getUniqueValues: columnId => {
      if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
        return row._uniqueValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return undefined;
      }
      if (!column.columnDef.getUniqueValues) {
        row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
        return row._uniqueValuesCache[columnId];
      }
      row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
      return row._uniqueValuesCache[columnId];
    },
    renderValue: columnId => {
      var _row$getValue;
      return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
    },
    subRows: subRows != null ? subRows : [],
    getLeafRows: () => flattenBy(row.subRows, d => d.subRows),
    getParentRow: () => row.parentId ? table.getRow(row.parentId, true) : undefined,
    getParentRows: () => {
      let parentRows = [];
      let currentRow = row;
      while (true) {
        const parentRow = currentRow.getParentRow();
        if (!parentRow) break;
        parentRows.push(parentRow);
        currentRow = parentRow;
      }
      return parentRows.reverse();
    },
    getAllCells: memo(() => [table.getAllLeafColumns()], leafColumns => {
      return leafColumns.map(column => {
        return createCell(table, row, column, column.id);
      });
    }, {
      key:  true && 'row.getAllCells',
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
      }
    }),
    _getAllCellsByColumnId: memo(() => [row.getAllCells()], allCells => {
      return allCells.reduce((acc, cell) => {
        acc[cell.column.id] = cell;
        return acc;
      }, {});
    }, {
      key:  false && 0,
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
      }
    })
  };
  for (let i = 0; i < table._features.length; i++) {
    const feature = table._features[i];
    feature == null || feature.createRow == null || feature.createRow(row, table);
  }
  return row;
};

// type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   visits: number
//   status: string
//   progress: number
//   createdAt: Date
//   nested: {
//     foo: [
//       {
//         bar: 'bar'
//       }
//     ]
//     bar: { subBar: boolean }[]
//     baz: {
//       foo: 'foo'
//       bar: {
//         baz: 'baz'
//       }
//     }
//   }
// }

// const test: DeepKeys<Person> = 'nested.foo.0.bar'
// const test2: DeepKeys<Person> = 'nested.bar'

// const helper = createColumnHelper<Person>()

// helper.accessor('nested.foo', {
//   cell: info => info.getValue(),
// })

// helper.accessor('nested.foo.0.bar', {
//   cell: info => info.getValue(),
// })

// helper.accessor('nested.bar', {
//   cell: info => info.getValue(),
// })
function createColumnHelper() {
  return {
    accessor: (accessor, column) => {
      return typeof accessor === 'function' ? {
        ...column,
        accessorFn: accessor
      } : {
        ...column,
        accessorKey: accessor
      };
    },
    display: column => column,
    group: column => column
  };
}

function getCoreRowModel() {
  return table => memo(() => [table.options.data], data => {
    const rowModel = {
      rows: [],
      flatRows: [],
      rowsById: {}
    };
    const accessRows = function (originalRows, depth, parentRow) {
      if (depth === void 0) {
        depth = 0;
      }
      const rows = [];
      for (let i = 0; i < originalRows.length; i++) {
        // This could be an expensive check at scale, so we should move it somewhere else, but where?
        // if (!id) {
        //   if (process.env.NODE_ENV !== 'production') {
        //     throw new Error(`getRowId expected an ID, but got ${id}`)
        //   }
        // }

        // Make the row
        const row = createRow(table, table._getRowId(originalRows[i], i, parentRow), originalRows[i], i, depth, undefined, parentRow == null ? void 0 : parentRow.id);

        // Keep track of every row in a flat array
        rowModel.flatRows.push(row);
        // Also keep track of every row by its ID
        rowModel.rowsById[row.id] = row;
        // Push table row into parent
        rows.push(row);

        // Get the original subrows
        if (table.options.getSubRows) {
          var _row$originalSubRows;
          row.originalSubRows = table.options.getSubRows(originalRows[i], i);

          // Then recursively access them
          if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
            row.subRows = accessRows(row.originalSubRows, depth + 1, row);
          }
        }
      }
      return rows;
    };
    rowModel.rows = accessRows(data);
    return rowModel;
  }, {
    key:  true && 'getRowModel',
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {
      table._autoResetPageIndex();
    }
  });
}

function filterRows(rows, filterRowImpl, table) {
  if (table.options.filterFromLeafRows) {
    return filterRowModelFromLeafs(rows, filterRowImpl, table);
  }
  return filterRowModelFromRoot(rows, filterRowImpl, table);
}
function filterRowModelFromLeafs(rowsToFilter, filterRow, table) {
  var _table$options$maxLea;
  const newFilteredFlatRows = [];
  const newFilteredRowsById = {};
  const maxDepth = (_table$options$maxLea = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea : 100;
  const recurseFilterRows = function (rowsToFilter, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    const rows = [];

    // Filter from children up first
    for (let i = 0; i < rowsToFilter.length; i++) {
      var _row$subRows;
      let row = rowsToFilter[i];
      const newRow = createRow(table, row.id, row.original, row.index, row.depth, undefined, row.parentId);
      newRow.columnFilters = row.columnFilters;
      if ((_row$subRows = row.subRows) != null && _row$subRows.length && depth < maxDepth) {
        newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
        row = newRow;
        if (filterRow(row) && !newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
          continue;
        }
        if (filterRow(row) || newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
          continue;
        }
      } else {
        row = newRow;
        if (filterRow(row)) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
        }
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function filterRowModelFromRoot(rowsToFilter, filterRow, table) {
  var _table$options$maxLea2;
  const newFilteredFlatRows = [];
  const newFilteredRowsById = {};
  const maxDepth = (_table$options$maxLea2 = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea2 : 100;

  // Filters top level and nested rows
  const recurseFilterRows = function (rowsToFilter, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    // Filter from parents downward first

    const rows = [];

    // Apply the filter to any subRows
    for (let i = 0; i < rowsToFilter.length; i++) {
      let row = rowsToFilter[i];
      const pass = filterRow(row);
      if (pass) {
        var _row$subRows2;
        if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length && depth < maxDepth) {
          const newRow = createRow(table, row.id, row.original, row.index, row.depth, undefined, row.parentId);
          newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
          row = newRow;
        }
        rows.push(row);
        newFilteredFlatRows.push(row);
        newFilteredRowsById[row.id] = row;
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}

function getFilteredRowModel() {
  return table => memo(() => [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter], (rowModel, columnFilters, globalFilter) => {
    if (!rowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
      for (let i = 0; i < rowModel.flatRows.length; i++) {
        rowModel.flatRows[i].columnFilters = {};
        rowModel.flatRows[i].columnFiltersMeta = {};
      }
      return rowModel;
    }
    const resolvedColumnFilters = [];
    const resolvedGlobalFilters = [];
    (columnFilters != null ? columnFilters : []).forEach(d => {
      var _filterFn$resolveFilt;
      const column = table.getColumn(d.id);
      if (!column) {
        return;
      }
      const filterFn = column.getFilterFn();
      if (!filterFn) {
        if (true) {
          console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${column.id}.`);
        }
        return;
      }
      resolvedColumnFilters.push({
        id: d.id,
        filterFn,
        resolvedValue: (_filterFn$resolveFilt = filterFn.resolveFilterValue == null ? void 0 : filterFn.resolveFilterValue(d.value)) != null ? _filterFn$resolveFilt : d.value
      });
    });
    const filterableIds = columnFilters.map(d => d.id);
    const globalFilterFn = table.getGlobalFilterFn();
    const globallyFilterableColumns = table.getAllLeafColumns().filter(column => column.getCanGlobalFilter());
    if (globalFilter && globalFilterFn && globallyFilterableColumns.length) {
      filterableIds.push('__global__');
      globallyFilterableColumns.forEach(column => {
        var _globalFilterFn$resol;
        resolvedGlobalFilters.push({
          id: column.id,
          filterFn: globalFilterFn,
          resolvedValue: (_globalFilterFn$resol = globalFilterFn.resolveFilterValue == null ? void 0 : globalFilterFn.resolveFilterValue(globalFilter)) != null ? _globalFilterFn$resol : globalFilter
        });
      });
    }
    let currentColumnFilter;
    let currentGlobalFilter;

    // Flag the prefiltered row model with each filter state
    for (let j = 0; j < rowModel.flatRows.length; j++) {
      const row = rowModel.flatRows[j];
      row.columnFilters = {};
      if (resolvedColumnFilters.length) {
        for (let i = 0; i < resolvedColumnFilters.length; i++) {
          currentColumnFilter = resolvedColumnFilters[i];
          const id = currentColumnFilter.id;

          // Tag the row with the column filter state
          row.columnFilters[id] = currentColumnFilter.filterFn(row, id, currentColumnFilter.resolvedValue, filterMeta => {
            row.columnFiltersMeta[id] = filterMeta;
          });
        }
      }
      if (resolvedGlobalFilters.length) {
        for (let i = 0; i < resolvedGlobalFilters.length; i++) {
          currentGlobalFilter = resolvedGlobalFilters[i];
          const id = currentGlobalFilter.id;
          // Tag the row with the first truthy global filter state
          if (currentGlobalFilter.filterFn(row, id, currentGlobalFilter.resolvedValue, filterMeta => {
            row.columnFiltersMeta[id] = filterMeta;
          })) {
            row.columnFilters.__global__ = true;
            break;
          }
        }
        if (row.columnFilters.__global__ !== true) {
          row.columnFilters.__global__ = false;
        }
      }
    }
    const filterRowsImpl = row => {
      // Horizontally filter rows through each column
      for (let i = 0; i < filterableIds.length; i++) {
        if (row.columnFilters[filterableIds[i]] === false) {
          return false;
        }
      }
      return true;
    };

    // Filter final rows using all of the active filters
    return filterRows(rowModel.rows, filterRowsImpl, table);
  }, {
    key:  true && 'getFilteredRowModel',
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {
      table._autoResetPageIndex();
    }
  });
}

function getFacetedRowModel() {
  return (table, columnId) => memo(() => [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter, table.getFilteredRowModel()], (preRowModel, columnFilters, globalFilter) => {
    if (!preRowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
      return preRowModel;
    }
    const filterableIds = [...columnFilters.map(d => d.id).filter(d => d !== columnId), globalFilter ? '__global__' : undefined].filter(Boolean);
    const filterRowsImpl = row => {
      // Horizontally filter rows through each column
      for (let i = 0; i < filterableIds.length; i++) {
        if (row.columnFilters[filterableIds[i]] === false) {
          return false;
        }
      }
      return true;
    };
    return filterRows(preRowModel.rows, filterRowsImpl, table);
  }, {
    key:  true && 'getFacetedRowModel_' + columnId,
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {}
  });
}

function getFacetedUniqueValues() {
  return (table, columnId) => memo(() => {
    var _table$getColumn;
    return [(_table$getColumn = table.getColumn(columnId)) == null ? void 0 : _table$getColumn.getFacetedRowModel()];
  }, facetedRowModel => {
    if (!facetedRowModel) return new Map();
    let facetedUniqueValues = new Map();
    for (let i = 0; i < facetedRowModel.flatRows.length; i++) {
      const values = facetedRowModel.flatRows[i].getUniqueValues(columnId);
      for (let j = 0; j < values.length; j++) {
        const value = values[j];
        if (facetedUniqueValues.has(value)) {
          var _facetedUniqueValues$;
          facetedUniqueValues.set(value, ((_facetedUniqueValues$ = facetedUniqueValues.get(value)) != null ? _facetedUniqueValues$ : 0) + 1);
        } else {
          facetedUniqueValues.set(value, 1);
        }
      }
    }
    return facetedUniqueValues;
  }, {
    key:  true && 'getFacetedUniqueValues_' + columnId,
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {}
  });
}

function getFacetedMinMaxValues() {
  return (table, columnId) => memo(() => {
    var _table$getColumn;
    return [(_table$getColumn = table.getColumn(columnId)) == null ? void 0 : _table$getColumn.getFacetedRowModel()];
  }, facetedRowModel => {
    var _facetedRowModel$flat;
    if (!facetedRowModel) return undefined;
    const firstValue = (_facetedRowModel$flat = facetedRowModel.flatRows[0]) == null ? void 0 : _facetedRowModel$flat.getUniqueValues(columnId);
    if (typeof firstValue === 'undefined') {
      return undefined;
    }
    let facetedMinMaxValues = [firstValue, firstValue];
    for (let i = 0; i < facetedRowModel.flatRows.length; i++) {
      const values = facetedRowModel.flatRows[i].getUniqueValues(columnId);
      for (let j = 0; j < values.length; j++) {
        const value = values[j];
        if (value < facetedMinMaxValues[0]) {
          facetedMinMaxValues[0] = value;
        } else if (value > facetedMinMaxValues[1]) {
          facetedMinMaxValues[1] = value;
        }
      }
    }
    return facetedMinMaxValues;
  }, {
    key:  true && 'getFacetedMinMaxValues_' + columnId,
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {}
  });
}

function getSortedRowModel() {
  return table => memo(() => [table.getState().sorting, table.getPreSortedRowModel()], (sorting, rowModel) => {
    if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
      return rowModel;
    }
    const sortingState = table.getState().sorting;
    const sortedFlatRows = [];

    // Filter out sortings that correspond to non existing columns
    const availableSorting = sortingState.filter(sort => {
      var _table$getColumn;
      return (_table$getColumn = table.getColumn(sort.id)) == null ? void 0 : _table$getColumn.getCanSort();
    });
    const columnInfoById = {};
    availableSorting.forEach(sortEntry => {
      const column = table.getColumn(sortEntry.id);
      if (!column) return;
      columnInfoById[sortEntry.id] = {
        sortUndefined: column.columnDef.sortUndefined,
        invertSorting: column.columnDef.invertSorting,
        sortingFn: column.getSortingFn()
      };
    });
    const sortData = rows => {
      // This will also perform a stable sorting using the row index
      // if needed.
      const sortedData = rows.map(row => ({
        ...row
      }));
      sortedData.sort((rowA, rowB) => {
        for (let i = 0; i < availableSorting.length; i += 1) {
          var _sortEntry$desc;
          const sortEntry = availableSorting[i];
          const columnInfo = columnInfoById[sortEntry.id];
          const isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
          let sortInt = 0;

          // All sorting ints should always return in ascending order
          if (columnInfo.sortUndefined) {
            const aValue = rowA.getValue(sortEntry.id);
            const bValue = rowB.getValue(sortEntry.id);
            const aUndefined = aValue === undefined;
            const bUndefined = bValue === undefined;
            if (aUndefined || bUndefined) {
              sortInt = aUndefined && bUndefined ? 0 : aUndefined ? columnInfo.sortUndefined : -columnInfo.sortUndefined;
            }
          }
          if (sortInt === 0) {
            sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
          }

          // If sorting is non-zero, take care of desc and inversion
          if (sortInt !== 0) {
            if (isDesc) {
              sortInt *= -1;
            }
            if (columnInfo.invertSorting) {
              sortInt *= -1;
            }
            return sortInt;
          }
        }
        return rowA.index - rowB.index;
      });

      // If there are sub-rows, sort them
      sortedData.forEach(row => {
        var _row$subRows;
        sortedFlatRows.push(row);
        if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
          row.subRows = sortData(row.subRows);
        }
      });
      return sortedData;
    };
    return {
      rows: sortData(rowModel.rows),
      flatRows: sortedFlatRows,
      rowsById: rowModel.rowsById
    };
  }, {
    key:  true && 'getSortedRowModel',
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {
      table._autoResetPageIndex();
    }
  });
}

function getGroupedRowModel() {
  return table => memo(() => [table.getState().grouping, table.getPreGroupedRowModel()], (grouping, rowModel) => {
    if (!rowModel.rows.length || !grouping.length) {
      return rowModel;
    }

    // Filter the grouping list down to columns that exist
    const existingGrouping = grouping.filter(columnId => table.getColumn(columnId));
    const groupedFlatRows = [];
    const groupedRowsById = {};
    // const onlyGroupedFlatRows: Row[] = [];
    // const onlyGroupedRowsById: Record<RowId, Row> = {};
    // const nonGroupedFlatRows: Row[] = [];
    // const nonGroupedRowsById: Record<RowId, Row> = {};

    // Recursively group the data
    const groupUpRecursively = function (rows, depth, parentId) {
      if (depth === void 0) {
        depth = 0;
      }
      // Grouping depth has been been met
      // Stop grouping and simply rewrite thd depth and row relationships
      if (depth >= existingGrouping.length) {
        return rows.map(row => {
          row.depth = depth;
          groupedFlatRows.push(row);
          groupedRowsById[row.id] = row;
          if (row.subRows) {
            row.subRows = groupUpRecursively(row.subRows, depth + 1, row.id);
          }
          return row;
        });
      }
      const columnId = existingGrouping[depth];

      // Group the rows together for this level
      const rowGroupsMap = groupBy(rows, columnId);

      // Peform aggregations for each group
      const aggregatedGroupedRows = Array.from(rowGroupsMap.entries()).map((_ref, index) => {
        let [groupingValue, groupedRows] = _ref;
        let id = `${columnId}:${groupingValue}`;
        id = parentId ? `${parentId}>${id}` : id;

        // First, Recurse to group sub rows before aggregation
        const subRows = groupUpRecursively(groupedRows, depth + 1, id);

        // Flatten the leaf rows of the rows in this group
        const leafRows = depth ? flattenBy(groupedRows, row => row.subRows) : groupedRows;
        const row = createRow(table, id, leafRows[0].original, index, depth, undefined, parentId);
        Object.assign(row, {
          groupingColumnId: columnId,
          groupingValue,
          subRows,
          leafRows,
          getValue: columnId => {
            // Don't aggregate columns that are in the grouping
            if (existingGrouping.includes(columnId)) {
              if (row._valuesCache.hasOwnProperty(columnId)) {
                return row._valuesCache[columnId];
              }
              if (groupedRows[0]) {
                var _groupedRows$0$getVal;
                row._valuesCache[columnId] = (_groupedRows$0$getVal = groupedRows[0].getValue(columnId)) != null ? _groupedRows$0$getVal : undefined;
              }
              return row._valuesCache[columnId];
            }
            if (row._groupingValuesCache.hasOwnProperty(columnId)) {
              return row._groupingValuesCache[columnId];
            }

            // Aggregate the values
            const column = table.getColumn(columnId);
            const aggregateFn = column == null ? void 0 : column.getAggregationFn();
            if (aggregateFn) {
              row._groupingValuesCache[columnId] = aggregateFn(columnId, leafRows, groupedRows);
              return row._groupingValuesCache[columnId];
            }
          }
        });
        subRows.forEach(subRow => {
          groupedFlatRows.push(subRow);
          groupedRowsById[subRow.id] = subRow;
          // if (subRow.getIsGrouped?.()) {
          //   onlyGroupedFlatRows.push(subRow);
          //   onlyGroupedRowsById[subRow.id] = subRow;
          // } else {
          //   nonGroupedFlatRows.push(subRow);
          //   nonGroupedRowsById[subRow.id] = subRow;
          // }
        });

        return row;
      });
      return aggregatedGroupedRows;
    };
    const groupedRows = groupUpRecursively(rowModel.rows, 0);
    groupedRows.forEach(subRow => {
      groupedFlatRows.push(subRow);
      groupedRowsById[subRow.id] = subRow;
      // if (subRow.getIsGrouped?.()) {
      //   onlyGroupedFlatRows.push(subRow);
      //   onlyGroupedRowsById[subRow.id] = subRow;
      // } else {
      //   nonGroupedFlatRows.push(subRow);
      //   nonGroupedRowsById[subRow.id] = subRow;
      // }
    });

    return {
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById
    };
  }, {
    key:  true && 'getGroupedRowModel',
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {
      table._queue(() => {
        table._autoResetExpanded();
        table._autoResetPageIndex();
      });
    }
  });
}
function groupBy(rows, columnId) {
  const groupMap = new Map();
  return rows.reduce((map, row) => {
    const resKey = `${row.getGroupingValue(columnId)}`;
    const previous = map.get(resKey);
    if (!previous) {
      map.set(resKey, [row]);
    } else {
      previous.push(row);
    }
    return map;
  }, groupMap);
}

function getExpandedRowModel() {
  return table => memo(() => [table.getState().expanded, table.getPreExpandedRowModel(), table.options.paginateExpandedRows], (expanded, rowModel, paginateExpandedRows) => {
    if (!rowModel.rows.length || expanded !== true && !Object.keys(expanded != null ? expanded : {}).length) {
      return rowModel;
    }
    if (!paginateExpandedRows) {
      // Only expand rows at this point if they are being paginated
      return rowModel;
    }
    return expandRows(rowModel);
  }, {
    key:  true && 'getExpandedRowModel',
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    }
  });
}
function expandRows(rowModel) {
  const expandedRows = [];
  const handleRow = row => {
    var _row$subRows;
    expandedRows.push(row);
    if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getIsExpanded()) {
      row.subRows.forEach(handleRow);
    }
  };
  rowModel.rows.forEach(handleRow);
  return {
    rows: expandedRows,
    flatRows: rowModel.flatRows,
    rowsById: rowModel.rowsById
  };
}

function getPaginationRowModel(opts) {
  return table => memo(() => [table.getState().pagination, table.getPrePaginationRowModel(), table.options.paginateExpandedRows ? undefined : table.getState().expanded], (pagination, rowModel) => {
    if (!rowModel.rows.length) {
      return rowModel;
    }
    const {
      pageSize,
      pageIndex
    } = pagination;
    let {
      rows,
      flatRows,
      rowsById
    } = rowModel;
    const pageStart = pageSize * pageIndex;
    const pageEnd = pageStart + pageSize;
    rows = rows.slice(pageStart, pageEnd);
    let paginatedRowModel;
    if (!table.options.paginateExpandedRows) {
      paginatedRowModel = expandRows({
        rows,
        flatRows,
        rowsById
      });
    } else {
      paginatedRowModel = {
        rows,
        flatRows,
        rowsById
      };
    }
    paginatedRowModel.flatRows = [];
    const handleRow = row => {
      paginatedRowModel.flatRows.push(row);
      if (row.subRows.length) {
        row.subRows.forEach(handleRow);
      }
    };
    paginatedRowModel.rows.forEach(handleRow);
    return paginatedRowModel;
  }, {
    key:  true && 'getPaginationRowModel',
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    }
  });
}


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/idb/build/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteDB: () => (/* binding */ deleteDB),
/* harmony export */   openDB: () => (/* binding */ openDB),
/* harmony export */   unwrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   wrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/idb/build/wrap-idb-value.js");



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    }
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
        }
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event));
    }
    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "./node_modules/idb/build/wrap-idb-value.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ reverseTransformCache),
/* harmony export */   i: () => (/* binding */ instanceOfAny),
/* harmony export */   r: () => (/* binding */ replaceTraps),
/* harmony export */   u: () => (/* binding */ unwrap),
/* harmony export */   w: () => (/* binding */ wrap)
/* harmony export */ });
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ }),

/***/ "./node_modules/trophyutil/dist/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserContext: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.BrowserContext),
/* harmony export */   ParserDlcListing: () => (/* reexport safe */ _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserDlcListing),
/* harmony export */   ParserGamePage: () => (/* reexport safe */ _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserGamePage),
/* harmony export */   ParserGamePartialStack: () => (/* reexport safe */ _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserGamePartialStack),
/* harmony export */   ParserGamePlayable: () => (/* reexport safe */ _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserGamePlayable),
/* harmony export */   ParserGameStandard: () => (/* reexport safe */ _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserGameStandard),
/* harmony export */   ParserSeriesListing: () => (/* reexport safe */ _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserSeriesListing),
/* harmony export */   ParserSeriesPageNeutral: () => (/* reexport safe */ _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserSeriesPageNeutral),
/* harmony export */   ParserTrophy: () => (/* reexport safe */ _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserTrophy),
/* harmony export */   ParserTrophyGroups: () => (/* reexport safe */ _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserTrophyGroups),
/* harmony export */   PsnpEntity: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.PsnpEntity),
/* harmony export */   PsnpForumPageType: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.PsnpForumPageType),
/* harmony export */   PsnpGameBase: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.PsnpGameBase),
/* harmony export */   PsnpGamePlayable: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.PsnpGamePlayable),
/* harmony export */   PsnpGameStandard: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.PsnpGameStandard),
/* harmony export */   PsnpGameStandardDoc: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.PsnpGameStandardDoc),
/* harmony export */   PsnpPageType: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.PsnpPageType),
/* harmony export */   PsnpParser: () => (/* reexport safe */ _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__.PsnpParser),
/* harmony export */   PsnpSeriesListing: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.PsnpSeriesListing),
/* harmony export */   PsnpTrophy: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.PsnpTrophy),
/* harmony export */   Select: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.Select),
/* harmony export */   SeriesDoc: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.SeriesDoc),
/* harmony export */   StackData: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.StackData),
/* harmony export */   StackLookup: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.StackLookup),
/* harmony export */   TROPHY_GRADE_POINTS: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.TROPHY_GRADE_POINTS),
/* harmony export */   TTAPageType: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.TTAPageType),
/* harmony export */   calculateTrophyPoints: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.calculateTrophyPoints),
/* harmony export */   diffAndUpdateSharedProps: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.diffAndUpdateSharedProps),
/* harmony export */   diffUpdate: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.diffUpdate),
/* harmony export */   extractKeys: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.extractKeys),
/* harmony export */   getPsnpForumPageType: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.getPsnpForumPageType),
/* harmony export */   getPsnpPageType: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.getPsnpPageType),
/* harmony export */   getStackAbbr: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.getStackAbbr),
/* harmony export */   getTTAPageType: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.getTTAPageType),
/* harmony export */   isGameDlc: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.isGameDlc),
/* harmony export */   isGameFromHome: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.isGameFromHome),
/* harmony export */   isGameFromStacks: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.isGameFromStacks),
/* harmony export */   isGamePlayable: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.isGamePlayable),
/* harmony export */   isGameStandard: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.isGameStandard),
/* harmony export */   isPsnpEntity: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.isPsnpEntity),
/* harmony export */   isStandardObj: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.isStandardObj),
/* harmony export */   msToSpeedString: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.msToSpeedString),
/* harmony export */   parseNum: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.parseNum),
/* harmony export */   pruneExtraneousProperties: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.pruneExtraneousProperties),
/* harmony export */   sharedPropsAreEqual: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.sharedPropsAreEqual),
/* harmony export */   sleep: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.sleep),
/* harmony export */   speedStringToMs: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.speedStringToMs),
/* harmony export */   sumTrophyCount: () => (/* reexport safe */ _models_index_js__WEBPACK_IMPORTED_MODULE_0__.sumTrophyCount),
/* harmony export */   timestampFromDatePlayed: () => (/* reexport safe */ _util_index_js__WEBPACK_IMPORTED_MODULE_2__.timestampFromDatePlayed)
/* harmony export */ });
/* harmony import */ var _models_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/models/index.js");
/* harmony import */ var _parsers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/index.js");
/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/util/index.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/models/common.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateTrophyPoints: () => (/* binding */ calculateTrophyPoints),
/* harmony export */   sumTrophyCount: () => (/* binding */ sumTrophyCount)
/* harmony export */ });
/**
 * Given a trophy count, sums the total number of trophies.
 * @param tc A {@link TrophyCount}
 * @returns Total number of trophies
 */
function sumTrophyCount(tc) {
    return tc.bronze + tc.silver + tc.gold + tc.platinum;
}
/**
 * Given a trophy count, calculates the total point value.
 * @param tc A {@link TrophyCount}
 * @returns Total number of points
 */ function calculateTrophyPoints(tc) {
    return tc.bronze * 15 + tc.silver * 30 + tc.gold * 90 + tc.platinum * 300;
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/models/game.impl.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpGameBase: () => (/* binding */ PsnpGameBase),
/* harmony export */   PsnpGamePlayable: () => (/* binding */ PsnpGamePlayable),
/* harmony export */   PsnpGameStandard: () => (/* binding */ PsnpGameStandard),
/* harmony export */   PsnpGameStandardDoc: () => (/* binding */ PsnpGameStandardDoc)
/* harmony export */ });
/* harmony import */ var _psnpEntity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/models/psnpEntity.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");


/** Class containing properties and methods applicable to all PSNP game types. */
class PsnpGameBase extends _psnpEntity_js__WEBPACK_IMPORTED_MODULE_0__.PsnpEntity {
    platforms;
    stackLabel;
    trophyCount;
    numTrophies;
    points;
    get url() {
        return `https://psnprofiles.com/trophies/${this._id}-${this._nameSerialized}`;
    }
    get src() {
        return `https://i.psnprofiles.com/games/${this._imagePath}.png`;
    }
    constructor(data) {
        super(data);
        this.platforms = data.platforms;
        this.stackLabel = data.stackLabel;
        this.trophyCount = data.trophyCount;
        this.numTrophies = data.numTrophies;
        this.points = data.points;
    }
    /**
     * Given a {@link PsnpPageType} and document, parses and returns an array of game nodes.
     * @param pageType Type of PSNProfiles page
     * @param doc Document to parse nodes from
     */
    static getGameNodes(pageType, doc) {
        const selectors = _index_js__WEBPACK_IMPORTED_MODULE_1__.Select.gameNodes[pageType] ?? '';
        const nodes = selectors.flatMap(selector => [...doc.querySelectorAll(selector)]);
        return nodes;
    }
}
/** Class representing a standard PSNP game from `Games` or `GameSearch` */
class PsnpGameStandard extends PsnpGameBase {
    stackLabel;
    trophyCount;
    numTrophies;
    points;
    numOwners;
    constructor(data) {
        super(data);
        this.stackLabel = data.stackLabel;
        this.trophyCount = data.trophyCount;
        this.numTrophies = data.numTrophies;
        this.points = data.points;
        this.numOwners = data.numOwners;
    }
}
class PsnpGamePlayable extends PsnpGameBase {
    stackLabel;
    trophyCount;
    numTrophies;
    points;
    rarityBase;
    rarityDlc;
    percent;
    completionStatus;
    completionSpeed;
    completionRank;
    latestTrophy;
    constructor(data) {
        super(data);
        this.stackLabel = data.stackLabel;
        this.trophyCount = data.trophyCount;
        this.numTrophies = data.numTrophies;
        this.points = data.points;
        this.rarityBase = data.rarityBase;
        this.rarityDlc = data.rarityDlc;
        this.percent = data.percent;
        this.completionStatus = data.completionStatus;
        this.completionSpeed = data.completionSpeed;
        this.completionRank = data.completionRank;
        this.latestTrophy = data.latestTrophy;
    }
}
class PsnpGameStandardDoc extends PsnpGameStandard {
    trophyGroups;
    rarityBase;
    rarityDlc;
    forumId;
    metaData;
    createdAt;
    updatedAt;
    stackIds;
    /** Flattens `trophies` trophy groups, returning a 2D array of all trophies. */
    get allTrophies() {
        return this.trophyGroups.flatMap(s => s.trophies);
    }
    constructor(data) {
        super(data);
        this.trophyGroups = data.trophyGroups;
        this.rarityBase = data.rarityBase;
        this.rarityDlc = data.rarityDlc;
        this.forumId = data.forumId;
        this.metaData = data.metaData;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.stackIds = data.stackIds;
    }
}
//# sourceMappingURL=game.impl.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/models/game.interface.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackLookup: () => (/* binding */ StackLookup)
/* harmony export */ });
/** Maps {@link StackAbbr} to non-abbreviated name. */
const StackLookup = {
    NA: 'North American',
    EU: 'European',
    WW: 'Worldwide',
    HK: 'Hong Kong',
    AS: 'Asian',
    JP: 'Japanese',
    CN: 'Chinese',
    KR: 'Korean',
    GER: 'German',
    AU: 'Australian',
    RU: 'Russian',
    WE: 'Western',
    UK: 'United Kingdom',
    FR: 'French',
    ES: 'Spanish',
    // Non-regions:
    DG: 'Digital',
    PH: 'Physical',
    RR: 'Rereleased',
    OR: 'Original',
};
//# sourceMappingURL=game.interface.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/models/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpEntity: () => (/* reexport safe */ _psnpEntity_js__WEBPACK_IMPORTED_MODULE_3__.PsnpEntity),
/* harmony export */   PsnpGameBase: () => (/* reexport safe */ _game_impl_js__WEBPACK_IMPORTED_MODULE_1__.PsnpGameBase),
/* harmony export */   PsnpGamePlayable: () => (/* reexport safe */ _game_impl_js__WEBPACK_IMPORTED_MODULE_1__.PsnpGamePlayable),
/* harmony export */   PsnpGameStandard: () => (/* reexport safe */ _game_impl_js__WEBPACK_IMPORTED_MODULE_1__.PsnpGameStandard),
/* harmony export */   PsnpGameStandardDoc: () => (/* reexport safe */ _game_impl_js__WEBPACK_IMPORTED_MODULE_1__.PsnpGameStandardDoc),
/* harmony export */   PsnpSeriesListing: () => (/* reexport safe */ _series_impl_js__WEBPACK_IMPORTED_MODULE_4__.PsnpSeriesListing),
/* harmony export */   PsnpTrophy: () => (/* reexport safe */ _trophy_impl_js__WEBPACK_IMPORTED_MODULE_7__.PsnpTrophy),
/* harmony export */   SeriesDoc: () => (/* reexport safe */ _series_impl_js__WEBPACK_IMPORTED_MODULE_4__.SeriesDoc),
/* harmony export */   StackData: () => (/* reexport safe */ _stackData_js__WEBPACK_IMPORTED_MODULE_6__.StackData),
/* harmony export */   StackLookup: () => (/* reexport safe */ _game_interface_js__WEBPACK_IMPORTED_MODULE_2__.StackLookup),
/* harmony export */   TROPHY_GRADE_POINTS: () => (/* reexport safe */ _trophy_interface_js__WEBPACK_IMPORTED_MODULE_8__.TROPHY_GRADE_POINTS),
/* harmony export */   calculateTrophyPoints: () => (/* reexport safe */ _common_js__WEBPACK_IMPORTED_MODULE_0__.calculateTrophyPoints),
/* harmony export */   sumTrophyCount: () => (/* reexport safe */ _common_js__WEBPACK_IMPORTED_MODULE_0__.sumTrophyCount)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/models/common.js");
/* harmony import */ var _game_impl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/models/game.impl.js");
/* harmony import */ var _game_interface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/models/game.interface.js");
/* harmony import */ var _psnpEntity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/trophyutil/dist/models/psnpEntity.js");
/* harmony import */ var _series_impl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/trophyutil/dist/models/series.impl.js");
/* harmony import */ var _series_interface_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/trophyutil/dist/models/series.interface.js");
/* harmony import */ var _stackData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/trophyutil/dist/models/stackData.js");
/* harmony import */ var _trophy_impl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/trophyutil/dist/models/trophy.impl.js");
/* harmony import */ var _trophy_interface_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/trophyutil/dist/models/trophy.interface.js");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/models/psnpEntity.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpEntity: () => (/* binding */ PsnpEntity)
/* harmony export */ });
/** Abstract class containing properties and methods applicable to all PSNP entities. */
class PsnpEntity {
    _id;
    name;
    _nameSerialized;
    _imagePath;
    constructor(data) {
        this._id = data._id;
        this.name = data.name;
        this._nameSerialized = data._nameSerialized;
        this._imagePath = data._imagePath;
    }
    toString() {
        return `${this.name} (${this._id})`;
    }
}
//# sourceMappingURL=psnpEntity.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/models/series.impl.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpSeriesListing: () => (/* binding */ PsnpSeriesListing),
/* harmony export */   SeriesDoc: () => (/* binding */ SeriesDoc)
/* harmony export */ });
/* harmony import */ var _psnpEntity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/models/psnpEntity.js");

class PsnpSeriesListing extends _psnpEntity_js__WEBPACK_IMPORTED_MODULE_0__.PsnpEntity {
    trophyCount;
    numTrophies;
    numGames;
    points;
    get url() {
        return `https://psnprofiles.com/series/${this._id}-${this._nameSerialized}`;
    }
    get src() {
        return `https://i.psnprofiles.com/series/${this._imagePath}.S.png`;
    }
    constructor(data) {
        super(data);
        this.trophyCount = data.trophyCount;
        this.points = data.points;
        this.numTrophies = data.numTrophies;
        this.numGames = data.numGames;
    }
}
class SeriesDoc extends PsnpSeriesListing {
    stages;
    createdAt;
    updatedAt;
    /** Flattens `stages` series stages, returning a 2D array of all games. */
    get allGames() {
        return this.stages.flatMap(s => s.gameIds);
    }
    constructor(data) {
        super(data);
        this.stages = data.stages;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}
//# sourceMappingURL=series.impl.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/models/series.interface.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=series.interface.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/models/stackData.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackData: () => (/* binding */ StackData)
/* harmony export */ });
class StackData {
    stacks;
    constructor(stacks) {
        this.stacks = this.labelStacks(stacks);
    }
    static buildPlatformTag(platforms) {
        if (platforms.includes('VR')) {
            if (platforms.includes('PS4'))
                return 'PSVR';
            else if (platforms.includes('PS5'))
                return 'PSVR2';
        }
        return platforms.join('/');
    }
    /**
     * Given an assumedly comprehensive* array of game stacks, mutates it by adding a `stack` property
     * to each that distinguishes them from each other.
     *
     * *Stacks should be validated beforehand so that 'Additional Trophies' DLCs are not interpreted as stacks.
     * */
    labelStacks(_stacks) {
        const stacks = this.buildDetailedStacks(_stacks);
        const separator = '_';
        // Case 1: No stack labels since only 0-1 stacks passed.
        if (stacks.length <= 1) {
            return stacks.map(s => ({ ...s, stack: s.stackLabels.join(separator) }));
        }
        const gamesByStackLabel = this.mapGamesToStackLabel(stacks);
        const numStackLabels = Object.keys(gamesByStackLabel).length;
        // Case 2: Label stacks exclusively by `stackLabel` since number of games == number of stack labels.
        if (numStackLabels === stacks.length) {
            for (const stack of stacks) {
                let label = stack.stackLabel ?? '';
                if (!label && !gamesByStackLabel['NA']) {
                    if (gamesByStackLabel['EU'])
                        label = 'NA';
                    else
                        label = 'WW';
                }
                stack.stackLabels.push(label || 'WW');
            }
            return stacks.map(s => ({ ...s, stack: s.stackLabels.join(separator) }));
        }
        const gamesByPlatform = this.mapGamesToPlatform(stacks);
        const numPlatforms = Object.keys(gamesByPlatform).length;
        // Case 3: Iterate through each platform group to assess its `StackAbbr`s and relabel `stack` accordingly.
        for (const [platform, games] of Object.entries(gamesByPlatform)) {
            // CASE A: Platform only has one game
            if (games.length === 1) {
                const g = games[0];
                g.stackLabels.push(g.platformString);
                if (g.stackLabel)
                    g.stackLabels.push(g.stackLabel);
                continue;
            }
            // CASE B: Multiple stacks for a given platform.
            const someStackAbbrs = games.some(g => g.stackLabel);
            // CASE B1: PSNP hasn't yet labeled any of these stacks, so `stack` will just be their platform.
            if (!someStackAbbrs) {
                games.forEach(s => s.stackLabels.push(platform));
                continue;
            }
            // CASE B2: At least one of these stacks has a `StackAbbr`, so mark any that don't as "WW". `this.stackString` will specify both platform AND StackAbbr.
            for (const g of games) {
                if (numPlatforms > 1)
                    g.stackLabels.push(g.platformString);
                g.stackLabels.push(g.stackLabel ?? 'WW');
            }
        }
        return stacks.map(s => ({ ...s, stack: s.stackLabels.join(separator) }));
    }
    /** Creates and returns a shallow copy of `stacks` containing additional properties useful for stack differentiation. */
    buildDetailedStacks(stacks) {
        const detailedStacks = stacks.map(stack => ({
            ...stack,
            platformString: StackData.buildPlatformTag(stack.platforms),
            stack: '',
            stackLabels: [],
        }));
        return detailedStacks;
    }
    /** Creates and returns a plain object map of `stackLabel` strings (keys) to corresponding games (values).
     *
     * Nullish `stackLabel`s are keyed as an empty string. */
    mapGamesToStackLabel(stacks) {
        const gamesByStackLabel = {};
        stacks.forEach(game => {
            const label = game.stackLabel ?? '';
            if (!gamesByStackLabel[label])
                gamesByStackLabel[label] = [game];
            else
                gamesByStackLabel[label].push(game);
        });
        return gamesByStackLabel;
    }
    /** Creates and returns a plain object map of `platformString` strings (keys) to corresponding games (values). */
    mapGamesToPlatform(stacks) {
        const gamesByPlatform = {};
        stacks.forEach(game => {
            if (!gamesByPlatform[game.platformString])
                gamesByPlatform[game.platformString] = [game];
            else
                gamesByPlatform[game.platformString].push(game);
        });
        return gamesByPlatform;
    }
}
// async function updateStacks({
// 	_settings,
// 	_page,
// 	parsedGames,
// 	lazyCheck,
// 	manual = false,
// }: {
// 	_settings: Settings;
// 	_page: Page;
// 	parsedGames?: Map<number, Game>;
// 	/** If true, no fetch calls should be made - it should only load cached data. */
// 	lazyCheck?: boolean;
// 	/** Whether the function was called manually (i.e. checking a certain game). */
// 	manual?: boolean;
// }) {
// 	// CASE 1: Game already stackified, so do nothing.
// 	if (this.$('.stackify') || parsedGames?.get(this.id)) return;
// 	const stored = _settings.games.get(this.id);
// 	let stackData = _settings.stacks.find(x => x.games.find(g => g.id === this.id));
// 	let numCompleted = 0,
// 		numTotal = 0;
// 	// CASE 2: Lazy check (WIP)
// 	if (stackData && lazyCheck) {
// 		Game.labelStacks(stackData.games);
// 	}
// 	// CASE 3: Fetch latest stack data to update existing data.
// 	else if (stackData) {
// 		if (manual) console.log(`${this.name} last updated ${new Date(stackData.lastUpdated)}`);
// 		const fetchedStacks = await fetchStacks(this.url);
// 		// STEP 1: Replace cached stackList with newly fetched stackList.
// 		stackData.games = [this, ...fetchedStacks];
// 		stackData.lastUpdated = Date.now();
// 		Game.labelStacks(stackData.games);
// 	}
// 	// CASE 4: No stored stack data, so let's create one.
// 	else {
// 		// create stack data
// 		const fetchedStacks = await fetchStacks(this.url);
// 		stackData = {
// 			games: [this, ...fetchedStacks],
// 			lastUpdated: Date.now(),
// 		};
// 		Game.labelStacks(stackData.games);
// 		_settings.stacks.push(stackData);
// 	}
// 	stackData.games.forEach(g => {
// 		parsedGames?.set(g.id, g);
// 		numTotal++;
// 		if (_settings.games.isCompleted(g.id)) numCompleted++;
// 	});
// 	async function fetchStacks(url: string) {
// 		const stacks: Game[] = [];
// 		const gamePage = await fetchDoc(url);
// 		for (const stackNode of new TrophyList(gamePage).stacks) {
// 			const stack = new Game(stackNode);
// 			stacks.push(stack);
// 		}
// 		return stacks;
// 	}
// 	// TODO: Update _settings.games with any new values.
// 	// Building & appending element
// 	if (stackData.games.length === 1 || (_settings.prefs.stackifyHideCompleted.val && numCompleted === numTotal)) {
// 		return;
// 	}
// 	const color = numCompleted === numTotal ? `green` : `red`;
// 	// this.$('td > div.ellipsis > span > a.title + bullet')?.nextSibling?.remove();
// 	const stacksIncomplete = stackData.games.filter(g => !_settings.games.isCompleted(g.id));
// 	const stacksComplete = stackData.games.filter(g => _settings.games.isCompleted(g.id));
// 	this.$(`td:nth-child(2) > div.ellipsis`)?.after(
// 		newElement(
// 			'div',
// 			{class: `stackify`, style: `font-weight:500;`},
// 			newElement(`span`, {}, newElement(`span`, {style: `color:${color};`}, `${numCompleted}/${numTotal}`)),
// 			stacksIncomplete.length ? ` — ` : '',
// 			newElement('span', {style: ``}, stacksIncomplete.map(g => g.stackString).join(' | ')),
// 			stacksComplete.length ? ` — ` : '',
// 			newElement('span', {style: `color:green;`}, stacksComplete.map(g => g.stackString).join(' | '))
// 		)
// 	);
// 	// Clean up title
// 	[...(this.$(`td:nth-child(2) > div.ellipsis > span`)?.childNodes ?? [])]
// 		.filter(el => el.nodeName !== 'A')
// 		.forEach(el => el.remove());
// 	// const title = topRow.ch
// 	/** If running via stackifyAll, append updated game to table. */
// 	if (parsedGames) {
// 		_page.gamesTable?.appendChild(this.el);
// 	}
// 	if (manual) {
// 		await _settings.save();
// 	}
// }
//# sourceMappingURL=stackData.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/models/trophy.impl.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpTrophy: () => (/* binding */ PsnpTrophy)
/* harmony export */ });
class PsnpTrophy {
    id;
    name;
    desc;
    grade;
    rarity;
    _nameSerialized;
    _imagePath;
    dateEarned;
    constructor(trophy) {
        this.id = trophy.id;
        this.name = trophy.name;
        this.desc = trophy.desc;
        this.grade = trophy.grade;
        this.rarity = trophy.rarity;
        this._nameSerialized = trophy._nameSerialized;
        this._imagePath = trophy._imagePath;
    }
    /** (Getter) Constructs and returns trophy list URL fragment (e.g. `50-abstergo-employee-of-the-month`). */
    get urlPath() {
        return `${this.id}-${this._nameSerialized}`;
    }
    /** (Getter) Constructs and returns trophy icon URL fragment (e.g. `trophies/33S08e7cc.png`). */
    get src() {
        return `trophies/${this._imagePath}.png`;
    }
    /** Trophy rarity formatted with two decimal places. */
    get rarityString() {
        return this.rarity.toFixed(2);
    }
    /** Parses a trophy element's 'date earned' into a date timestamp (ms). */
    static timestampFromDateEarned(element) {
        const dateAndTimeNodes = [
            ...element.querySelectorAll(`td:nth-of-type(3) :is(.typo-top-date, .typo-bottom-date) > nobr`),
        ];
        const [dateEl, timeEl] = dateAndTimeNodes;
        const dateText = dateEl.textContent?.replace(/(\d+)(st|nd|rd|th)/, '$1') || '';
        const timeText = timeEl.textContent || '';
        const dateString = `${dateText.trim()} ${timeText.trim()}`;
        return new Date(dateString).valueOf();
    }
}
//# sourceMappingURL=trophy.impl.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/models/trophy.interface.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TROPHY_GRADE_POINTS: () => (/* binding */ TROPHY_GRADE_POINTS)
/* harmony export */ });
const TROPHY_GRADE_POINTS = {
    Bronze: 15,
    Silver: 30,
    Gold: 90,
    Platinum: 300,
};
//# sourceMappingURL=trophy.interface.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/common/trophyCount.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseTrophyCount: () => (/* binding */ parseTrophyCount)
/* harmony export */ });
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/util/util.js");

function parseTrophyCount(tr, isHomeOrGameSearch = false) {
    const suffix = isHomeOrGameSearch ? '.icon-sprite' : '.icon-sprite + span';
    const bronze = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_0__.parseNum)(tr.querySelector(`.bronze${suffix}`));
    const silver = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_0__.parseNum)(tr.querySelector(`.silver${suffix}`));
    const gold = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_0__.parseNum)(tr.querySelector(`.gold${suffix}`));
    if (Number.isNaN(bronze + silver + gold)) {
        return null;
    }
    let platCount = 0;
    const platNode = tr.querySelector('[class*="platinum"]');
    if (platNode) {
        // Profile/Series
        if (tr.querySelector('.platinum-18')) {
            platCount = tr.querySelector('.platinum-18.earned') ? 1 : 0;
        }
        // Standard
        else
            platCount = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_0__.parseNum)(tr.querySelector(`.platinum${suffix}`));
    }
    // const platCount = parseNum(tr.querySelector());
    platCount = Number.isNaN(platCount) ? 0 : platCount;
    return { bronze, silver, gold, platinum: platCount };
}
//# sourceMappingURL=trophyCount.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/games/dlcListing.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserDlcListing: () => (/* binding */ ParserDlcListing)
/* harmony export */ });
/* harmony import */ var _psnpParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/psnpParser.js");
/* harmony import */ var _models_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/models/common.js");
/* harmony import */ var _common_trophyCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/common/trophyCount.js");



class ParserDlcListing extends _psnpParser_js__WEBPACK_IMPORTED_MODULE_0__.PsnpParser {
    type = 'DLC Listing';
    _parse(tr) {
        const titleAnchorEl = tr.querySelector(`td a.title`);
        const href = titleAnchorEl?.getAttribute('href');
        const hrefIdAndTitle = this._extractIdAndTitleFromPsnpUrl({ url: href });
        const imageSrc = tr.querySelector('img[src]')?.getAttribute('src');
        if (!titleAnchorEl?.textContent || !hrefIdAndTitle || !imageSrc) {
            return null;
        }
        const [_id, _nameSerialized] = hrefIdAndTitle;
        const name = titleAnchorEl?.lastChild?.textContent?.trim();
        const dlcName = titleAnchorEl?.firstChild?.textContent?.trim();
        const groupNumMatch = _nameSerialized.match(/DLC-(\d+)/);
        const _imagePath = /\w+\/\w+(?=\.[A-z]{3}$)/.exec(imageSrc)?.at(0);
        const platforms = [...tr.querySelectorAll('span.tag.platform')].map(tag => tag.textContent).sort();
        if (!_imagePath || !name || !dlcName || !platforms.length || !groupNumMatch) {
            return null;
        }
        const groupNum = +groupNumMatch[1];
        const trophyCount = (0,_common_trophyCount_js__WEBPACK_IMPORTED_MODULE_2__.parseTrophyCount)(tr, true);
        if (!trophyCount) {
            return null;
        }
        const numTrophies = (0,_models_common_js__WEBPACK_IMPORTED_MODULE_1__.sumTrophyCount)(trophyCount);
        const points = (0,_models_common_js__WEBPACK_IMPORTED_MODULE_1__.calculateTrophyPoints)(trophyCount);
        return {
            _id,
            _nameSerialized: _nameSerialized.replace(/#DLC.+/, ''),
            name,
            _imagePath,
            dlcName,
            groupNum,
            platforms,
            trophyCount,
            numTrophies,
            points,
        };
    }
}
//# sourceMappingURL=dlcListing.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/games/gameFromStackPanel.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserGamePartialStack: () => (/* binding */ ParserGamePartialStack)
/* harmony export */ });
/* harmony import */ var _psnpParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/psnpParser.js");

/** Parses a partial game representation from TrophyList pages. */
class ParserGamePartialStack extends _psnpParser_js__WEBPACK_IMPORTED_MODULE_0__.PsnpParser {
    type = 'Partial Game (TrophyList)';
    _parse(tr) {
        const titleAnchorEl = tr.querySelector(`td > span > span > a[href^='/trophies/']`);
        const href = titleAnchorEl?.getAttribute('href');
        const hrefIdAndTitle = this._extractIdAndTitleFromPsnpUrl({ url: href });
        const imageSrc = tr.querySelector('img[src]')?.getAttribute('src');
        if (!titleAnchorEl?.textContent || !hrefIdAndTitle || !imageSrc) {
            return null;
        }
        const _imagePath = /\w+\/\w+(?=\.[A-z]{3}$)/.exec(imageSrc)?.at(0);
        const name = titleAnchorEl.textContent.trim();
        const platforms = [...tr.querySelectorAll('span.tag.platform')].map(tag => tag.textContent).sort();
        if (!_imagePath || !name || !platforms.length) {
            return null;
        }
        const [_id, _nameSerialized] = hrefIdAndTitle;
        const stackLabel = tr.querySelector('.separator .typo-top')?.textContent?.trim() || null;
        return {
            _id,
            _nameSerialized,
            name,
            _imagePath,
            stackLabel,
            platforms,
        };
    }
}
//# sourceMappingURL=gameFromStackPanel.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/games/gamePage.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserGamePage: () => (/* binding */ ParserGamePage)
/* harmony export */ });
/* harmony import */ var _psnpParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/psnpParser.js");
/* harmony import */ var _models_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/models/common.js");
/* harmony import */ var _trophies_trophyGroups_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/trophies/trophyGroups.js");
/* harmony import */ var _gameFromStackPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/games/gameFromStackPanel.js");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/trophyutil/dist/util/util.js");





/** Parses a partial game representation from TrophyList pages. */
class ParserGamePage extends _psnpParser_js__WEBPACK_IMPORTED_MODULE_0__.PsnpParser {
    type = 'Game Page';
    _parse(doc) {
        const navTabs = [...doc.querySelectorAll(`ul.navigation > li > a[href]`)];
        const forumLink = navTabs.find(anchor => anchor.textContent?.trim() === 'Forum');
        const forumIdAndGameName = this._extractIdAndTitleFromPsnpUrl({ url: forumLink?.href });
        const trophyListLink = navTabs.find(anchor => anchor.textContent?.trim() === 'Trophies');
        const hrefIdAndTitle = this._extractIdAndTitleFromPsnpUrl({ url: trophyListLink?.href });
        if (!hrefIdAndTitle) {
            return null;
        }
        const [_id, _nameSerialized] = hrefIdAndTitle;
        const forumId = forumIdAndGameName?.at(0) || null;
        const name = doc
            .querySelector(`#banner > div.banner-overlay > div > div.title-bar.flex.v-align > div.grow > h3 > span`)
            ?.nextSibling?.textContent?.trim();
        if (!name) {
            return null;
        }
        const trophyGroupsParser = new _trophies_trophyGroups_js__WEBPACK_IMPORTED_MODULE_2__.ParserTrophyGroups();
        const trophyGroups = trophyGroupsParser.parse(doc);
        const trophies = trophyGroups.flatMap(group => group.trophies);
        const trophyCount = trophiesToTrophyCount(trophies);
        const numTrophies = trophies.length;
        const points = (0,_models_common_js__WEBPACK_IMPORTED_MODULE_1__.calculateTrophyPoints)(trophyCount);
        const metaData = this.parseMetadata(doc);
        const stacks = [];
        const sideDivHeaders = [...doc.querySelectorAll('div.col-xs-4 >  div.title.flex.v-align > div.grow > h3')];
        const stackDivHeader = sideDivHeaders.find(h3 => h3.textContent?.trim() === 'Other Platforms and Regions');
        const stackTable = stackDivHeader?.closest(`div.title.flex.v-align`)?.nextElementSibling;
        if (stackTable) {
            const gameParser = new _gameFromStackPanel_js__WEBPACK_IMPORTED_MODULE_3__.ParserGamePartialStack();
            const games = [...stackTable.querySelectorAll('tr')].map(tr => gameParser.parse(tr));
            stacks.push(...games);
        }
        let seriesIds;
        const seriesElements = [...doc.querySelectorAll('a.series-info')];
        if (seriesElements.length) {
            seriesIds = seriesElements.map(el => {
                const match = el.href.match(/series\/(\d+)/) ?? [];
                return +match[1];
            });
        }
        const headerStatElements = [...doc.querySelectorAll(`div.stats.flex > span.stat`)];
        const stats = this.parseHeaderStats(headerStatElements);
        if (!stats) {
            return null;
        }
        const rarityBase = calculatePercent(stats.numPlatted ?? stats.num100Percented, stats.gameOwners);
        let rarityDlc;
        if (stats.numPlatted && stats.numPlatted !== stats.num100Percented) {
            rarityDlc = calculatePercent(stats.num100Percented, stats.gameOwners);
        }
        const platformTags = [...doc.querySelectorAll(`div.no-top-border div.platforms > span`)];
        const platforms = platformTags.map(span => span.textContent.trim()).sort();
        if (!platforms.length) {
            return null;
        }
        const stackEl = doc.querySelector('table.zebra tr > th.center');
        const stackText = stackEl?.textContent?.trim()?.replace(/\sVersion/, '') ?? '';
        const stackLabel = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_4__.getStackAbbr)(stackText);
        return {
            _id,
            name,
            _nameSerialized,
            forumId,
            platforms,
            stackLabel,
            trophyCount,
            numTrophies,
            points,
            numOwners: stats.gameOwners,
            stacks,
            stackIds: stacks.map(s => s._id),
            trophyGroups: trophyGroups,
            headerStats: stats,
            rarityBase,
            rarityDlc,
            metaData,
            seriesIds,
        };
    }
    /** Parses {@link IMetadataFields} from the trophy list. */
    parseMetadata(doc) {
        const metadataRows = [...doc.querySelectorAll(`table.gameInfo tr`)].filter(tr => tr.cells.length > 1);
        const getValueOf = (propName, multiple = false) => {
            const row = metadataRows.find(row => row.cells[0]?.textContent?.trim()?.includes(propName));
            if (!row)
                return;
            const valueString = row.cells[1].textContent?.trim() ?? '';
            if (!valueString)
                return;
            const values = valueString.split(', ').map(val => val.trim());
            if (multiple) {
                return values;
            }
            return values[0];
        };
        const metadata = {
            developer: getValueOf('Developer'),
            publisher: getValueOf('Publisher'),
            genres: getValueOf('Genres', true),
            themes: getValueOf('Themes', true),
            modes: getValueOf('Mode', true),
            otherNames: getValueOf('Other Name', true),
        };
        return metadata;
    }
    /** Parses `stats` to return {@link IHeaderStats} or `null`. */
    parseHeaderStats(stats) {
        const findStat = (statName) => stats.find(span => span.textContent?.includes(statName));
        const gameOwners = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_4__.parseNum)(findStat('Game Owner')?.firstChild);
        const recentPlayers = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_4__.parseNum)(findStat('Recent Player')?.firstChild);
        const avgCompletion = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_4__.parseNum)(findStat('Average Completion')?.firstChild);
        const trophiesEarned = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_4__.parseNum)(findStat('Earned')?.firstChild);
        const num100Percented = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_4__.parseNum)(findStat('100% Completed')?.firstChild);
        const platAchievers = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_4__.parseNum)(findStat('Platinum Achiever')?.firstChild);
        const numPlatted = Number.isNaN(platAchievers) ? undefined : platAchievers;
        return { gameOwners, recentPlayers, numPlatted, avgCompletion, trophiesEarned, num100Percented };
    }
}
function trophiesToTrophyCount(trophies, trophyCount) {
    let tc = trophyCount ?? { bronze: 0, silver: 0, gold: 0, platinum: 0 };
    for (const trophy of trophies) {
        if (trophy.grade === 'Bronze')
            tc.bronze++;
        else if (trophy.grade === 'Silver')
            tc.silver++;
        else if (trophy.grade === 'Gold')
            tc.gold++;
        else if (trophy.grade === 'Platinum')
            tc.platinum++;
    }
    return tc;
}
function calculatePercent(dividend, divisor) {
    if (dividend === 0 && divisor === 0)
        return 0;
    const percent = (dividend / divisor) * 100;
    const percentRounded = Math.round(percent * 100) / 100;
    return percentRounded;
}
//# sourceMappingURL=gamePage.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/games/gamePlayable.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserGamePlayable: () => (/* binding */ ParserGamePlayable)
/* harmony export */ });
/* harmony import */ var _psnpParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/psnpParser.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _common_trophyCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/common/trophyCount.js");
/* harmony import */ var _util_psnp_conversions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/trophyutil/dist/util/psnp/conversions.js");




/** Parses a 'playable' game containing user progress from Profile and Series pages. */
class ParserGamePlayable extends _psnpParser_js__WEBPACK_IMPORTED_MODULE_0__.PsnpParser {
    type = 'Playable Game';
    _parse(tr) {
        const titleAnchorEl = tr.querySelector(`a.title`);
        const href = titleAnchorEl?.getAttribute('href');
        const hrefIdAndTitle = this._extractIdAndTitleFromPsnpUrl({ url: href });
        const imageSrc = tr.querySelector('img[src]')?.getAttribute('src');
        const rarityBaseEl = tr.querySelector(`td > span.separator.completion-status > span:first-of-type`);
        if (!titleAnchorEl?.textContent || !hrefIdAndTitle || !imageSrc || !rarityBaseEl) {
            return null;
        }
        const _imagePath = /\w+\/\w+(?=\.[A-z]{3}$)/.exec(imageSrc)?.at(0);
        const name = titleAnchorEl.textContent.trim();
        const platforms = [...tr.querySelectorAll('span.tag.platform')].map(tag => tag.textContent).sort();
        if (!_imagePath || !name || !platforms.length) {
            return null;
        }
        const [_id, _nameSerialized] = hrefIdAndTitle;
        const stackLabel = titleAnchorEl.parentElement?.querySelector('bullet')?.nextSibling?.textContent?.trim() ?? null;
        const trophyCount = (0,_common_trophyCount_js__WEBPACK_IMPORTED_MODULE_2__.parseTrophyCount)(tr);
        const progressPercent = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.parseNum)(tr.querySelector(`div.progress-bar > span`));
        const percent = Number.isNaN(progressPercent) ? undefined : progressPercent;
        const rarityBase = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.parseNum)(rarityBaseEl);
        if (Number.isNaN(rarityBase) || !trophyCount) {
            return null;
        }
        const rarityDlcEl = tr.querySelector('td > span.separator.completion-status > span:nth-of-type(2)');
        const rarityDlc = rarityDlcEl ? (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.parseNum)(rarityDlcEl) : undefined;
        const completionStatus = isCompletionStatus(tr.className) ? tr.className : undefined;
        let completionSpeed, latestTrophyTimestamp;
        const dateHolder = tr.querySelector('td > div.small-info:nth-of-type(3)');
        if (dateHolder) {
            const speedString = dateHolder.querySelector('bullet + b')?.textContent?.trim() || '';
            completionSpeed = speedString ? (0,_util_psnp_conversions_js__WEBPACK_IMPORTED_MODULE_3__.speedStringToMs)(speedString) : undefined;
            const day = dateHolder.childNodes[0]?.textContent?.trim();
            const monthYear = dateHolder.childNodes[2]?.textContent?.trim();
            latestTrophyTimestamp = day && monthYear ? new Date(`${day} ${monthYear}`).valueOf() : undefined;
        }
        let completionRank;
        const completionRankEl = tr.querySelector('td .game-rank');
        if (completionRankEl) {
            completionRank = completionRankEl.textContent?.trim();
        }
        const numTrophies = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.sumTrophyCount)(trophyCount);
        const points = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.calculateTrophyPoints)(trophyCount);
        return {
            _id,
            _nameSerialized,
            name,
            _imagePath,
            stackLabel,
            trophyCount,
            numTrophies,
            points,
            platforms,
            rarityBase,
            rarityDlc,
            percent,
            completionStatus,
            completionSpeed,
            completionRank,
            latestTrophy: latestTrophyTimestamp,
        };
    }
}
function isCompletionStatus(status) {
    return status === 'platinum' || status === 'completed';
}
//# sourceMappingURL=gamePlayable.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/games/gameStandard.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserGameStandard: () => (/* binding */ ParserGameStandard)
/* harmony export */ });
/* harmony import */ var _psnpParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/psnpParser.js");
/* harmony import */ var _models_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/models/index.js");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/util/util.js");
/* harmony import */ var _common_trophyCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/common/trophyCount.js");




/** Parses a standard game representation from Games and GameSearch pages. */
class ParserGameStandard extends _psnpParser_js__WEBPACK_IMPORTED_MODULE_0__.PsnpParser {
    type = 'Standard Game';
    _parse(tr) {
        const isSearchResult = !!tr.querySelector(`td:nth-of-type(5) > span.separator.left > span.typo-top`);
        const titleAnchorEl = tr.querySelector(`a.title`);
        const href = titleAnchorEl?.getAttribute('href');
        const hrefIdAndTitle = this._extractIdAndTitleFromPsnpUrl({ url: href });
        const imageSrc = tr.querySelector('img[src]')?.getAttribute('src');
        if (!titleAnchorEl?.textContent || !hrefIdAndTitle || !imageSrc) {
            return null;
        }
        const _imagePath = /\w+\/\w+(?=\.[A-z]{3}$)/.exec(imageSrc)?.at(0);
        const name = titleAnchorEl.textContent.trim();
        const platforms = [...tr.querySelectorAll('span.tag.platform')].map(tag => tag.textContent).sort();
        const trophyCount = (0,_common_trophyCount_js__WEBPACK_IMPORTED_MODULE_3__.parseTrophyCount)(tr, isSearchResult);
        const numOwners = parseNumOwners(tr, isSearchResult);
        if (!_imagePath || !name || !platforms.length || !trophyCount || numOwners === null) {
            return null;
        }
        const [_id, _nameSerialized] = hrefIdAndTitle;
        const stackLabel = titleAnchorEl.parentElement?.querySelector('bullet')?.nextSibling?.textContent?.trim() ??
            null;
        const numTrophies = (0,_models_index_js__WEBPACK_IMPORTED_MODULE_1__.sumTrophyCount)(trophyCount);
        const points = (0,_models_index_js__WEBPACK_IMPORTED_MODULE_1__.calculateTrophyPoints)(trophyCount);
        return {
            _id,
            _nameSerialized,
            name,
            _imagePath,
            stackLabel,
            platforms,
            trophyCount,
            numOwners,
            numTrophies,
            points,
        };
    }
}
/** Parses the number of owners from a Games or GameSearch game. */
function parseNumOwners(tr, isSearchResult = false) {
    const selector = isSearchResult
        ? `td:nth-of-type(5) > span.separator.left > span.typo-top`
        : `td > span > b:first-of-type`;
    const numOwners = (0,_util_util_js__WEBPACK_IMPORTED_MODULE_2__.parseNum)(tr.querySelector(selector));
    return Number.isNaN(numOwners) ? null : numOwners;
}
//# sourceMappingURL=gameStandard.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/games/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserDlcListing: () => (/* reexport safe */ _dlcListing_js__WEBPACK_IMPORTED_MODULE_0__.ParserDlcListing),
/* harmony export */   ParserGamePage: () => (/* reexport safe */ _gamePage_js__WEBPACK_IMPORTED_MODULE_1__.ParserGamePage),
/* harmony export */   ParserGamePartialStack: () => (/* reexport safe */ _gameFromStackPanel_js__WEBPACK_IMPORTED_MODULE_2__.ParserGamePartialStack),
/* harmony export */   ParserGamePlayable: () => (/* reexport safe */ _gamePlayable_js__WEBPACK_IMPORTED_MODULE_3__.ParserGamePlayable),
/* harmony export */   ParserGameStandard: () => (/* reexport safe */ _gameStandard_js__WEBPACK_IMPORTED_MODULE_4__.ParserGameStandard)
/* harmony export */ });
/* harmony import */ var _dlcListing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/games/dlcListing.js");
/* harmony import */ var _gamePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/games/gamePage.js");
/* harmony import */ var _gameFromStackPanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/games/gameFromStackPanel.js");
/* harmony import */ var _gamePlayable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/games/gamePlayable.js");
/* harmony import */ var _gameStandard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/games/gameStandard.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserDlcListing: () => (/* reexport safe */ _games_index_js__WEBPACK_IMPORTED_MODULE_0__.ParserDlcListing),
/* harmony export */   ParserGamePage: () => (/* reexport safe */ _games_index_js__WEBPACK_IMPORTED_MODULE_0__.ParserGamePage),
/* harmony export */   ParserGamePartialStack: () => (/* reexport safe */ _games_index_js__WEBPACK_IMPORTED_MODULE_0__.ParserGamePartialStack),
/* harmony export */   ParserGamePlayable: () => (/* reexport safe */ _games_index_js__WEBPACK_IMPORTED_MODULE_0__.ParserGamePlayable),
/* harmony export */   ParserGameStandard: () => (/* reexport safe */ _games_index_js__WEBPACK_IMPORTED_MODULE_0__.ParserGameStandard),
/* harmony export */   ParserSeriesListing: () => (/* reexport safe */ _series_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserSeriesListing),
/* harmony export */   ParserSeriesPageNeutral: () => (/* reexport safe */ _series_index_js__WEBPACK_IMPORTED_MODULE_1__.ParserSeriesPageNeutral),
/* harmony export */   ParserTrophy: () => (/* reexport safe */ _trophies_index_js__WEBPACK_IMPORTED_MODULE_2__.ParserTrophy),
/* harmony export */   ParserTrophyGroups: () => (/* reexport safe */ _trophies_index_js__WEBPACK_IMPORTED_MODULE_2__.ParserTrophyGroups),
/* harmony export */   PsnpParser: () => (/* reexport safe */ _psnpParser_js__WEBPACK_IMPORTED_MODULE_3__.PsnpParser)
/* harmony export */ });
/* harmony import */ var _games_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/games/index.js");
/* harmony import */ var _series_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/series/index.js");
/* harmony import */ var _trophies_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/trophies/index.js");
/* harmony import */ var _psnpParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/psnpParser.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/psnpParser.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpParser: () => (/* binding */ PsnpParser)
/* harmony export */ });
/** Parses an entity `T` from `E`. */
class PsnpParser {
    /** Parses an entity from a DOM target (Document or Element).
     *
     * @throws If any of the entity's required fields are parsed as `null`.	*/
    parse(domTarget) {
        const parsedItem = this._parse(domTarget);
        if (!parsedItem) {
            throw new Error(`Failed to parse ${this.type}`);
        }
        return parsedItem;
    }
    /**
     * Given a PSNP url (href or pathname), returns a tuple of the entity ID and serialized name.
     *
     * @returns {[number, string]|undefined} A tuple containing the extracted entity ID and serialized name, or `undefined` if extraction fails.
     *
     * @example <caption>By default, an `index` of 2 is passed:</caption>
     * _extractIdAndTitleFromPsnpUrl({url: "/series/234-rock-band"});
     * // Output: [234, "rock-band"]

     * @example <caption>Passing `index` explicitly:</caption>
     * _extractIdAndTitleFromPsnpUrl({url: "/trophy/3-call-of-duty/1-the-end-of-war", index: 3});
     * // Output: [1, "the-end-of-war"]
     */
    _extractIdAndTitleFromPsnpUrl({ url, index = 2, }) {
        if (!url)
            return;
        // Remove protocol and domain if present
        const pathname = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/, '');
        const parts = pathname?.split('/').at(index)?.split('-');
        if (!parts || parts.length < 2)
            return;
        const id = +parts[0];
        const nameSerialized = parts.slice(1).join('-');
        return [id, nameSerialized];
    }
}
//# sourceMappingURL=psnpParser.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/series/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserSeriesListing: () => (/* reexport safe */ _seriesListing_js__WEBPACK_IMPORTED_MODULE_0__.ParserSeriesListing),
/* harmony export */   ParserSeriesPageNeutral: () => (/* reexport safe */ _seriesPageNeutral_js__WEBPACK_IMPORTED_MODULE_1__.ParserSeriesPageNeutral)
/* harmony export */ });
/* harmony import */ var _seriesListing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/series/seriesListing.js");
/* harmony import */ var _seriesPageNeutral_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/series/seriesPageNeutral.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/series/seriesListing.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserSeriesListing: () => (/* binding */ ParserSeriesListing)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _common_trophyCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/common/trophyCount.js");
/* harmony import */ var _psnpParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/psnpParser.js");



class ParserSeriesListing extends _psnpParser_js__WEBPACK_IMPORTED_MODULE_2__.PsnpParser {
    type = 'Series Listing';
    _parse(tr) {
        const titleAnchorEl = tr.querySelector(`a.title`);
        const href = titleAnchorEl?.getAttribute('href');
        const hrefIdAndTitle = this._extractIdAndTitleFromPsnpUrl({ url: href });
        const imageSrc = tr.querySelector('img[src]')?.getAttribute('src');
        if (!titleAnchorEl?.textContent || !hrefIdAndTitle || !imageSrc) {
            return null;
        }
        const _imagePath = /\/series\/(.+?)\.S\.png/.exec(imageSrc)?.at(1);
        const [_id, _nameSerialized] = hrefIdAndTitle;
        const name = titleAnchorEl.textContent.trim();
        const numGames = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.parseNum)(tr.querySelector(`td > span.small-info > b`));
        const trophyCount = (0,_common_trophyCount_js__WEBPACK_IMPORTED_MODULE_1__.parseTrophyCount)(tr);
        if (!_imagePath || !name || Number.isNaN(numGames) || !trophyCount) {
            return null;
        }
        const numTrophies = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.sumTrophyCount)(trophyCount);
        const points = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.calculateTrophyPoints)(trophyCount);
        return {
            _id,
            _nameSerialized,
            name,
            _imagePath,
            trophyCount,
            numGames,
            numTrophies,
            points,
        };
    }
}
//# sourceMappingURL=seriesListing.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/series/seriesPageNeutral.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserSeriesPageNeutral: () => (/* binding */ ParserSeriesPageNeutral)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _psnpParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/psnpParser.js");


class ParserSeriesPageNeutral extends _psnpParser_js__WEBPACK_IMPORTED_MODULE_1__.PsnpParser {
    type = 'Series Page';
    _parse(_window) {
        const name = _window.document.querySelector(`div.series-info div.ellipsis > span`)?.textContent?.trim();
        const hrefIdAndTitle = this._extractIdAndTitleFromPsnpUrl({ url: _window.location.pathname });
        const imageSrc = _window.document.querySelector('div.series-info picture img[src]')?.getAttribute('src');
        if (!name || !hrefIdAndTitle || !imageSrc) {
            return null;
        }
        const [_id, _nameSerialized] = hrefIdAndTitle;
        const _imagePath = /\/series\/(.+?)\.S\.png/.exec(imageSrc)?.at(1);
        const gameParser = new _index_js__WEBPACK_IMPORTED_MODULE_0__.ParserGamePlayable();
        const stageElements = [..._window.document.querySelectorAll(`table.box.zebra.series`)];
        const stages = stageElements.map(el => {
            const stageNumString = el.querySelector(`tr:first-of-type > td:first-of-type span.typo-top`)?.textContent?.trim() ?? '';
            const stageNum = stageNumString === 'NO' ? 0 : +stageNumString;
            const games = [...el.querySelectorAll('tr')].map(tr => gameParser.parse(tr));
            const gameIds = games.map(g => g._id);
            return { stageNum, gameIds };
        });
        const trophyCount = aggregateSeriesTrophyCount(stages);
        if (!_imagePath || !stages.length || !trophyCount) {
            return null;
        }
        const points = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.calculateTrophyPoints)(trophyCount);
        const numTrophies = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.sumTrophyCount)(trophyCount);
        const numGames = stages.reduce((acc, stage) => acc + stage.gameIds.length, 0);
        return {
            _id,
            _nameSerialized,
            name,
            _imagePath,
            stages,
            trophyCount,
            points,
            numTrophies,
            numGames,
        };
    }
}
function aggregateSeriesTrophyCount(stages) {
    const aggregateTrophyCount = {
        bronze: 0,
        silver: 0,
        gold: 0,
        platinum: 0,
    };
    for (const stage of stages) {
        if (stage.games)
            for (const game of stage.games) {
                if (game.trophyCount) {
                    aggregateTrophyCount.bronze += game.trophyCount.bronze;
                    aggregateTrophyCount.silver += game.trophyCount.silver;
                    aggregateTrophyCount.gold += game.trophyCount.gold;
                    aggregateTrophyCount.platinum += game.trophyCount.platinum;
                }
                else {
                    return;
                }
            }
    }
    return aggregateTrophyCount;
}
//# sourceMappingURL=seriesPageNeutral.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/trophies/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserTrophy: () => (/* reexport safe */ _trophy_js__WEBPACK_IMPORTED_MODULE_1__.ParserTrophy),
/* harmony export */   ParserTrophyGroups: () => (/* reexport safe */ _trophyGroups_js__WEBPACK_IMPORTED_MODULE_0__.ParserTrophyGroups)
/* harmony export */ });
/* harmony import */ var _trophyGroups_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/trophies/trophyGroups.js");
/* harmony import */ var _trophy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/trophies/trophy.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/trophies/trophy.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserTrophy: () => (/* binding */ ParserTrophy)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _psnpParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/psnpParser.js");


class ParserTrophy extends _psnpParser_js__WEBPACK_IMPORTED_MODULE_1__.PsnpParser {
    type = 'Trophy';
    _parse(tr) {
        const titleAnchorEl = tr.querySelector(`a.title`);
        const href = titleAnchorEl?.getAttribute('href');
        const hrefTrophyIdAndName = this._extractIdAndTitleFromPsnpUrl({ url: href, index: 3 });
        const imageSrc = tr.querySelector('picture img[src]')?.getAttribute('src');
        if (!titleAnchorEl?.textContent || !hrefTrophyIdAndName || !imageSrc) {
            return null;
        }
        const _imagePath = /\/trophies\/(.+?)\.png/.exec(imageSrc)?.at(1);
        const desc = titleAnchorEl.parentElement?.querySelector('br')?.nextSibling?.textContent?.trim() ?? '';
        const grade = tr.querySelector('td > span > img[title]')?.getAttribute('title')?.trim();
        const rarity = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.parseNum)(tr.querySelector('td.hover-hide span.typo-top'));
        if (!_imagePath || !grade || Number.isNaN(rarity)) {
            return null;
        }
        const [trophyId, trophyNameSerialized] = hrefTrophyIdAndName;
        const name = titleAnchorEl.textContent.trim();
        return {
            id: trophyId,
            _nameSerialized: trophyNameSerialized,
            name,
            desc,
            grade,
            rarity: +rarity,
            _imagePath,
        };
    }
}
//# sourceMappingURL=trophy.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/parsers/trophies/trophyGroups.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserTrophyGroups: () => (/* binding */ ParserTrophyGroups)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/index.js");
/* harmony import */ var _psnpParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/psnpParser.js");
/* harmony import */ var _trophy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/parsers/trophies/trophy.js");



class ParserTrophyGroups extends _psnpParser_js__WEBPACK_IMPORTED_MODULE_1__.PsnpParser {
    type = 'Trophy Group';
    _parse(doc) {
        const groups = this.getTrophyGroups(doc)
            .map(groupNode => {
            const trophyTable = this.trophyGroupTrophyTable(groupNode);
            const groupHeader = groupNode.previousElementSibling;
            const groupName = this.trophyGroupName(groupNode);
            if (!trophyTable || !groupHeader || !groupName) {
                return null;
            }
            const match = groupHeader.id.match(/^DLC-(\d+)$/);
            const groupNum = match ? +match[1] : 0;
            const trophyParser = new _trophy_js__WEBPACK_IMPORTED_MODULE_2__.ParserTrophy();
            const trophies = _index_js__WEBPACK_IMPORTED_MODULE_0__.Select.tr(trophyTable).map(tr => trophyParser.parse(tr));
            return {
                groupNum,
                name: groupName,
                trophies,
            };
        })
            .filter(group => group !== null);
        return groups;
    }
    /** Returns an array of nodes representing the trophy list's trophy groups. */
    getTrophyGroups(doc) {
        return [...doc.querySelectorAll(`#content div.col-xs > div.box.no-top-border`)];
    }
    /** Given a trophy group node, returns the name of the group. */
    trophyGroupName(trophyGroup) {
        const nameHolder = trophyGroup.querySelector(`table tr > td > span.title`);
        return nameHolder?.textContent?.trim() ?? 'Base Game';
    }
    /** Given a trophy group node, returns the `HTMLTableElement` containing the group's trophy nodes. */
    trophyGroupTrophyTable(trophyGroup) {
        return trophyGroup.querySelector(`table:last-of-type`);
    }
}
//# sourceMappingURL=trophyGroups.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/browserContext.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserContext: () => (/* binding */ BrowserContext)
/* harmony export */ });
class BrowserContext {
    window;
    url;
    constructor(opts) {
        this.window = opts.window;
        this.url = new this.window.URL(opts.urlOverride ?? opts.window.location.href);
    }
    get doc() {
        return this.window.document;
    }
}
//# sourceMappingURL=browserContext.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserContext: () => (/* reexport safe */ _browserContext_js__WEBPACK_IMPORTED_MODULE_3__.BrowserContext),
/* harmony export */   PsnpForumPageType: () => (/* reexport safe */ _psnp_forum_index_js__WEBPACK_IMPORTED_MODULE_1__.PsnpForumPageType),
/* harmony export */   PsnpPageType: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType),
/* harmony export */   Select: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.Select),
/* harmony export */   TTAPageType: () => (/* reexport safe */ _tta_index_js__WEBPACK_IMPORTED_MODULE_2__.TTAPageType),
/* harmony export */   diffAndUpdateSharedProps: () => (/* reexport safe */ _objCompare_js__WEBPACK_IMPORTED_MODULE_4__.diffAndUpdateSharedProps),
/* harmony export */   diffUpdate: () => (/* reexport safe */ _objCompare_js__WEBPACK_IMPORTED_MODULE_4__.diffUpdate),
/* harmony export */   extractKeys: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.extractKeys),
/* harmony export */   getPsnpForumPageType: () => (/* reexport safe */ _psnp_forum_index_js__WEBPACK_IMPORTED_MODULE_1__.getPsnpForumPageType),
/* harmony export */   getPsnpPageType: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.getPsnpPageType),
/* harmony export */   getStackAbbr: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.getStackAbbr),
/* harmony export */   getTTAPageType: () => (/* reexport safe */ _tta_index_js__WEBPACK_IMPORTED_MODULE_2__.getTTAPageType),
/* harmony export */   isGameDlc: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.isGameDlc),
/* harmony export */   isGameFromHome: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.isGameFromHome),
/* harmony export */   isGameFromStacks: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.isGameFromStacks),
/* harmony export */   isGamePlayable: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.isGamePlayable),
/* harmony export */   isGameStandard: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.isGameStandard),
/* harmony export */   isPsnpEntity: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.isPsnpEntity),
/* harmony export */   isStandardObj: () => (/* reexport safe */ _objCompare_js__WEBPACK_IMPORTED_MODULE_4__.isStandardObj),
/* harmony export */   msToSpeedString: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.msToSpeedString),
/* harmony export */   parseNum: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.parseNum),
/* harmony export */   pruneExtraneousProperties: () => (/* reexport safe */ _objCompare_js__WEBPACK_IMPORTED_MODULE_4__.pruneExtraneousProperties),
/* harmony export */   sharedPropsAreEqual: () => (/* reexport safe */ _objCompare_js__WEBPACK_IMPORTED_MODULE_4__.sharedPropsAreEqual),
/* harmony export */   sleep: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.sleep),
/* harmony export */   speedStringToMs: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.speedStringToMs),
/* harmony export */   timestampFromDatePlayed: () => (/* reexport safe */ _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__.timestampFromDatePlayed)
/* harmony export */ });
/* harmony import */ var _psnp_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/util/psnp/index.js");
/* harmony import */ var _psnp_forum_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/util/psnp_forum/index.js");
/* harmony import */ var _tta_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/util/tta/index.js");
/* harmony import */ var _browserContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/trophyutil/dist/util/browserContext.js");
/* harmony import */ var _objCompare_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/trophyutil/dist/util/objCompare.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/trophyutil/dist/util/util.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/objCompare.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diffAndUpdateSharedProps: () => (/* binding */ diffAndUpdateSharedProps),
/* harmony export */   diffUpdate: () => (/* binding */ diffUpdate),
/* harmony export */   isStandardObj: () => (/* binding */ isStandardObj),
/* harmony export */   pruneExtraneousProperties: () => (/* binding */ pruneExtraneousProperties),
/* harmony export */   sharedPropsAreEqual: () => (/* binding */ sharedPropsAreEqual)
/* harmony export */ });
/** Returns `true` if `x` is a standard POJO (or class instance), otherwise `false` if it's a primitive/null/array/function/Map/Set/etc. */
function isStandardObj(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
}
/** Compares shared properties of `obj1` and `obj2` for relative equality. Primitive values - including nested object properties -
 * must be equal, and array values must have the same length. Returns `null` if no shared properties exist.
 *
 * Useful for verifying if MongoDB documents are up-to-date with freshly-parsed entities. */
function sharedPropsAreEqual(obj1, obj2) {
    const sharedKeys = Object.keys(obj1).filter(key => key in obj2);
    if (sharedKeys.length === 0) {
        return null;
    }
    return sharedKeys.every(key => {
        const val1 = obj1[key];
        const val2 = obj2[key];
        if (isStandardObj(val1) && isStandardObj(val2)) {
            return sharedPropsAreEqual(val1, val2);
        }
        else if (Array.isArray(val1) && Array.isArray(val2)) {
            return val1.length === val2.length;
        }
        else {
            return val1 === val2;
        }
    });
}
/** Finds all shared properties (keys) between `oldEntity` and `newEntity` and returns an array of changes.
 *  Setting the `update` flag will also update `oldEntity` with the values of properties shared with `newEntity`. */
function diffAndUpdateSharedProps(oldEntity, newEntity, update = false, parentKey = '') {
    const changes = [];
    const sharedKeys = Object.keys(oldEntity).filter(key => key in newEntity);
    sharedKeys.forEach(key => {
        const fullKey = parentKey ? `${parentKey}.${key}` : key;
        const newVal = newEntity[key];
        const oldVal = oldEntity[key];
        if (isStandardObj(newVal) && isStandardObj(oldVal)) {
            const subChanges = diffAndUpdateSharedProps(oldVal, newVal, update, fullKey);
            changes.push(...subChanges);
        }
        else if (Array.isArray(newVal) && Array.isArray(oldVal)) {
            if (newVal.length !== oldVal.length) {
                changes.push({
                    key: fullKey,
                    oldValue: oldVal.length,
                    newValue: newVal.length,
                });
            }
            if (update) {
                oldEntity[key] = newVal.slice();
            }
            // Primitive value change where newVal is not nullish nor an empty string.
        }
        else if ((newVal ?? '') !== '' && newVal !== oldVal) {
            changes.push({
                key: fullKey,
                oldValue: oldVal,
                newValue: newVal,
            });
            if (update) {
                oldEntity[key] = newVal;
            }
        }
    });
    return changes;
}
/**
 * Compares `oldEntity` to `newEntity` and returns a log of changes based on their shared properties.
 * The `update` flag will also update `oldEntity` with any differing shared property values.
 *
 * **Note:** "new" operations return an empty `changes` array. */
function diffUpdate(oldEntity, newEntity, update) {
    const commonChanges = { id: newEntity._id, changes: [] };
    if (!oldEntity) {
        return { ...commonChanges, operation: 'add' };
    }
    if (oldEntity._id !== newEntity._id) {
        throw new Error(`ID mismatch: Cannot update entity '${oldEntity.toString()}' using entity '${newEntity.toString()}'`);
    }
    const changes = diffAndUpdateSharedProps(oldEntity, newEntity, update);
    return {
        ...commonChanges,
        operation: 'update',
        changes,
    };
}
/**
 * Removes extraneous properties from `target` that don't exist on `exemplar`.
 * This includes properties nested within objects.
 * Outputs log for every omitted property.
 *
 * @param {Record<string, unknown>} exemplar - The object that holds the desired structure.
 * @param {unknown} target - The object from which extraneous properties are to be pruned.
 * @returns {Record<string, unknown> | null} - The pruned object, or null if the target wasn't an object.
 */
function pruneExtraneousProperties(exemplar, target) {
    if (!isStandardObj(target)) {
        return null;
    }
    const result = {};
    Object.keys(target).forEach(key => {
        if (key in exemplar) {
            const exemplarVal = exemplar[key];
            const targetVal = target[key];
            if (isStandardObj(targetVal) && isStandardObj(exemplarVal)) {
                result[key] = pruneExtraneousProperties(exemplarVal, targetVal);
            }
            else {
                result[key] = targetVal;
            }
        }
        else {
            console.log(`Omitting deprecated key '${key}'`);
        }
    });
    return result;
}
//# sourceMappingURL=objCompare.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/psnp/conversions.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msToSpeedString: () => (/* binding */ msToSpeedString),
/* harmony export */   speedStringToMs: () => (/* binding */ speedStringToMs),
/* harmony export */   timestampFromDatePlayed: () => (/* binding */ timestampFromDatePlayed)
/* harmony export */ });
/** Converts `ms` into a PSNP speedString of the form `<num> <timeMetric>(s), <num> <timeMetric>(s)`.
 *  The largest metrics are always used (EG: `2 years, 1 month`, even if it omits an additional 3 weeks). */
function msToSpeedString(ms) {
    if (ms === 0) {
        return '0 seconds';
    }
    let seconds = ms / 1000;
    const timeUnits = [
        { unit: 'year', value: 31536000 },
        { unit: 'month', value: 2626560 },
        { unit: 'week', value: 604800 },
        { unit: 'day', value: 86400 },
        { unit: 'hour', value: 3600 },
        { unit: 'minute', value: 60 },
        { unit: 'second', value: 1 },
    ];
    let speedString = '';
    let countUnits = 0;
    for (const { unit, value } of timeUnits) {
        if (seconds >= value) {
            const count = Math.floor(seconds / value);
            seconds -= value * count;
            speedString += `${count} ${unit}${count > 1 ? 's' : ''}`;
            countUnits++;
            if (countUnits === 2) {
                break;
            }
            if (seconds > 0) {
                speedString += ', ';
            }
        }
    }
    return speedString;
}
/** Parses a Fastest Achiever's speed into ms. `speedString` is always of the form `<num> <timeMetric>(s), <num> <timeMetric>(s)`. */
function speedStringToMs(speedString) {
    const timeUnits = {
        sec: 1,
        min: 60,
        hou: 3600,
        day: 86400,
        wee: 604800,
        mon: 2626560,
        yea: 31536000,
    };
    const speeds = speedString.split(', ');
    let seconds = 0;
    for (const speed of speeds) {
        const [time, timeMetric] = speed.split(' ');
        const timeValue = parseInt(time, 10);
        const timeUnit = timeMetric.substring(0, 3);
        seconds += timeUnits[timeUnit] * timeValue;
    }
    return seconds * 1000;
}
/** Takes in a 'date played' element: \<div class="small-info" [...] */
function timestampFromDatePlayed(element) {
    const textContent = element.textContent;
    if (!textContent) {
        return null;
    }
    const [dateText] = textContent.split('•').map(s => s.trim());
    if (!dateText) {
        throw new Error(`Unable to parse Date Played "${textContent}" into a timestamp`);
    }
    const cleanedDateText = dateText.replace(/(\d+)(st|nd|rd|th)/, '$1').trim();
    return new Date(cleanedDateText).valueOf();
}
//# sourceMappingURL=conversions.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/psnp/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpPageType: () => (/* reexport safe */ _pageType_js__WEBPACK_IMPORTED_MODULE_1__.PsnpPageType),
/* harmony export */   Select: () => (/* reexport safe */ _select_js__WEBPACK_IMPORTED_MODULE_2__.Select),
/* harmony export */   getPsnpPageType: () => (/* reexport safe */ _pageType_js__WEBPACK_IMPORTED_MODULE_1__.getPsnpPageType),
/* harmony export */   isGameDlc: () => (/* reexport safe */ _typeGuards_js__WEBPACK_IMPORTED_MODULE_3__.isGameDlc),
/* harmony export */   isGameFromHome: () => (/* reexport safe */ _typeGuards_js__WEBPACK_IMPORTED_MODULE_3__.isGameFromHome),
/* harmony export */   isGameFromStacks: () => (/* reexport safe */ _typeGuards_js__WEBPACK_IMPORTED_MODULE_3__.isGameFromStacks),
/* harmony export */   isGamePlayable: () => (/* reexport safe */ _typeGuards_js__WEBPACK_IMPORTED_MODULE_3__.isGamePlayable),
/* harmony export */   isGameStandard: () => (/* reexport safe */ _typeGuards_js__WEBPACK_IMPORTED_MODULE_3__.isGameStandard),
/* harmony export */   isPsnpEntity: () => (/* reexport safe */ _typeGuards_js__WEBPACK_IMPORTED_MODULE_3__.isPsnpEntity),
/* harmony export */   msToSpeedString: () => (/* reexport safe */ _conversions_js__WEBPACK_IMPORTED_MODULE_0__.msToSpeedString),
/* harmony export */   speedStringToMs: () => (/* reexport safe */ _conversions_js__WEBPACK_IMPORTED_MODULE_0__.speedStringToMs),
/* harmony export */   timestampFromDatePlayed: () => (/* reexport safe */ _conversions_js__WEBPACK_IMPORTED_MODULE_0__.timestampFromDatePlayed)
/* harmony export */ });
/* harmony import */ var _conversions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/util/psnp/conversions.js");
/* harmony import */ var _pageType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/trophyutil/dist/util/psnp/pageType.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/trophyutil/dist/util/psnp/select.js");
/* harmony import */ var _typeGuards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/trophyutil/dist/util/psnp/typeGuards.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/psnp/pageType.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpPageType: () => (/* binding */ PsnpPageType),
/* harmony export */   getPsnpPageType: () => (/* binding */ getPsnpPageType)
/* harmony export */ });
/** Type of PSNProfiles page. */
var PsnpPageType;
(function (PsnpPageType) {
    /** Navbar "Home" (`psnprofiles.com/`) */
    PsnpPageType["Home"] = "Home";
    /** Browsing trophy guides (`psnprofiles.com/guides`) */
    PsnpPageType["Guides"] = "Guides";
    /** Search results for trophy guides */
    PsnpPageType["GuideSearch"] = "GuideSearch";
    /** Viewing an individual trophy guide */
    PsnpPageType["Guide"] = "Guide";
    /** Viewing a leaderboard */
    PsnpPageType["Leaderboard"] = "Leaderboard";
    /** Search results for users */
    PsnpPageType["LeaderboardSearch"] = "LeaderboardSearch";
    /** Browsing series */
    PsnpPageType["SeriesCatalog"] = "SeriesCatalog";
    /** Viewing an individual series page */
    PsnpPageType["SeriesPage"] = "SeriesPage";
    /** Browsing games */
    PsnpPageType["Games"] = "Games";
    /** Search results for games */
    PsnpPageType["GameSearch"] = "GameSearch";
    /** Browsing DLCs */
    PsnpPageType["DLC"] = "DLC";
    /** Viewing a game's trophy list */
    PsnpPageType["GameTrophyList"] = "GameTrophyList";
    /** Viewing an individual trophy */
    PsnpPageType["GameTrophy"] = "GameTrophy";
    /** Viewing a game's leaderboard, where users are ranked by completion % */
    PsnpPageType["GameLeaderboard"] = "GameLeaderboard";
    /** Viewing a game's 100% Club */
    PsnpPageType["Game100Club"] = "Game100Club";
    /** Browsing trophies */
    PsnpPageType["Trophies"] = "Trophies";
    /** Search results for trophies */
    PsnpPageType["TrophySearch"] = "TrophySearch";
    /** Gaming Sessions (`psnprofiles.com/sessions`) */
    PsnpPageType["Sessions"] = "Sessions";
    /** A user's PSN Profile
     *
     * Excludes subpaths and hashes, like `.../log` or `...#gamelists` */
    PsnpPageType["Profile"] = "Profile";
})(PsnpPageType || (PsnpPageType = {}));
/** Identifies the PSNProfiles page type of a given URL. */
function getPsnpPageType(url) {
    const path = url.pathname;
    if (path === '/')
        return PsnpPageType.Home;
    else if (path === '/guides')
        return PsnpPageType.Guides;
    else if (path === '/search/guides')
        return PsnpPageType.GuideSearch;
    else if (path.startsWith('/guide/'))
        return PsnpPageType.Guide;
    else if (path.startsWith('/leaderboard'))
        return PsnpPageType.Leaderboard;
    else if (path === '/search/users')
        return PsnpPageType.LeaderboardSearch;
    else if (path === '/series')
        return PsnpPageType.SeriesCatalog;
    else if (path.startsWith('/series/'))
        return PsnpPageType.SeriesPage;
    else if (path === '/games')
        return PsnpPageType.Games;
    else if (path === '/games/dlc')
        return PsnpPageType.DLC;
    else if (path === '/search' || path === '/search/games')
        return PsnpPageType.GameSearch;
    else if (path.startsWith(`/trophies/`))
        return PsnpPageType.GameTrophyList;
    else if (path.startsWith('/trophy/'))
        return PsnpPageType.GameTrophy;
    else if (path.startsWith('/game-leaderboard/'))
        return PsnpPageType.GameLeaderboard;
    else if (path.startsWith('/100-club/'))
        return PsnpPageType.Game100Club;
    else if (path === '/trophies')
        return PsnpPageType.Trophies;
    else if (path === '/search/trophies')
        return PsnpPageType.TrophySearch;
    else if (path === '/sessions')
        return PsnpPageType.Sessions;
    else if (/^\/[^\/]+$/.test(path) && url.hash === '')
        return PsnpPageType.Profile;
    else
        throw new Error(`Unable to determine page type of '${url.href}'`);
}
//# sourceMappingURL=pageType.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/psnp/select.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _pageType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/util/psnp/pageType.js");

class Select {
    /** Selects all valid table rows. */
    static TR = `tr:not(:empty, [id*='load'])`;
    static tr(parent) {
        return [...parent.querySelectorAll(Select.TR)];
    }
    /** HTMLElement containing max page number. */
    static MAX_PAGE_NUM = `#content ul.pagination:not(.small) > li:nth-last-child(2) > a`;
    /** Selects all trophy nodes from a trophy list. */
    static TROPHY_LIST_TROPHIES = `#content div.col-xs > div.box.no-top-border table:last-of-type ${Select.TR}`;
    static SUFFIX = `tbody > ${Select.TR}`;
    /** Game node selectors based on the page.
     *
     * **Note:** Array values are necessary to replace pseudo-class `:is()` since it's not currently supported by JSDOM. */
    static gameNodes = {
        [_pageType_js__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.Games]: [`#game_list ${Select.SUFFIX}`],
        [_pageType_js__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.SeriesCatalog]: [`#game_list ${Select.SUFFIX}`],
        [_pageType_js__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.GameSearch]: [`#search-results:not([style="display: none;"]) ${Select.SUFFIX}`],
        [_pageType_js__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.Profile]: [
            `#search-results:not([style="display: none;"]) ${Select.SUFFIX}`,
            `#gamesTable:not([style="display: none;"]) ${Select.SUFFIX}`,
        ],
        [_pageType_js__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.SeriesPage]: [`table.series:not(.legend) ${Select.SUFFIX}`],
        /** Cannot select game nodes on its own; must be used after finding the "OTHER PLATFORMS AND REGIONS" section. */
        [_pageType_js__WEBPACK_IMPORTED_MODULE_0__.PsnpPageType.GameTrophyList]: [`${Select.SUFFIX}`],
    };
}
//# sourceMappingURL=select.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/psnp/typeGuards.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isGameDlc: () => (/* binding */ isGameDlc),
/* harmony export */   isGameFromHome: () => (/* binding */ isGameFromHome),
/* harmony export */   isGameFromStacks: () => (/* binding */ isGameFromStacks),
/* harmony export */   isGamePlayable: () => (/* binding */ isGamePlayable),
/* harmony export */   isGameStandard: () => (/* binding */ isGameStandard),
/* harmony export */   isPsnpEntity: () => (/* binding */ isPsnpEntity)
/* harmony export */ });
/* harmony import */ var _objCompare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/util/objCompare.js");

/** Verifies whether `entity` implements {@link IPsnpEntity} */
function isPsnpEntity(entity) {
    const keys = ['_id', 'name', '_nameSerialized', '_imagePath'];
    return (0,_objCompare_js__WEBPACK_IMPORTED_MODULE_0__.isStandardObj)(entity) && keys.every(key => key in entity);
}
// These variables protect type predicates by throwing errors if the property names ever change.
const gameStackKeys = ['platforms', 'stackLabel'];
const gameHomeKeys = ['numTrophies', 'platforms', 'points', 'trophyCount'];
const gameDlcKeys = ['dlcName', 'groupNum', 'trophyCount', 'points', 'platforms', 'numTrophies'];
const gameStandardKeys = [...gameHomeKeys, 'numOwners', 'stackLabel'];
const gamePlayableKeys = [
    ...gameHomeKeys,
    'completionSpeed',
    'completionStatus',
    'completionRank',
    'latestTrophy',
    'percent',
    'rarityBase',
    'rarityDlc',
    'stackLabel',
];
/** Verifies whether `game` implements {@link IGamePartialTrophyList} */
function isGameFromStacks(game) {
    return isPsnpEntity(game) && gameStackKeys.every(key => key in game);
}
/** Verifies whether `game` implements {@link IGamePartialHome} */
function isGameFromHome(game) {
    return isPsnpEntity(game) && gameHomeKeys.every(key => key in game);
}
/** Verifies whether `game` implements {@link IGameDlc} */
function isGameDlc(game) {
    return isPsnpEntity(game) && gameDlcKeys.every(key => key in game);
}
/** Verifies whether `game` implements {@link IGameStandard} */
function isGameStandard(game) {
    return isPsnpEntity(game) && gameStandardKeys.every(key => key in game);
}
/** Verifies whether `game` implements {@link IGamePlayable} */
function isGamePlayable(game) {
    return isPsnpEntity(game) && gamePlayableKeys.every(key => key in game);
}
//# sourceMappingURL=typeGuards.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/psnp_forum/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpForumPageType: () => (/* reexport safe */ _pageType_js__WEBPACK_IMPORTED_MODULE_0__.PsnpForumPageType),
/* harmony export */   getPsnpForumPageType: () => (/* reexport safe */ _pageType_js__WEBPACK_IMPORTED_MODULE_0__.getPsnpForumPageType)
/* harmony export */ });
/* harmony import */ var _pageType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/util/psnp_forum/pageType.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/psnp_forum/pageType.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PsnpForumPageType: () => (/* binding */ PsnpForumPageType),
/* harmony export */   getPsnpForumPageType: () => (/* binding */ getPsnpForumPageType)
/* harmony export */ });
/** Type of PSNProfiles page. */
var PsnpForumPageType;
(function (PsnpForumPageType) {
    PsnpForumPageType[PsnpForumPageType["GameSubforum"] = 0] = "GameSubforum";
    PsnpForumPageType[PsnpForumPageType["Topic"] = 1] = "Topic";
})(PsnpForumPageType || (PsnpForumPageType = {}));
/** Identifies the PSNProfiles page type of a given URL. */
function getPsnpForumPageType(url) {
    const path = url.pathname;
    if (path.startsWith('/forum/'))
        return PsnpForumPageType.GameSubforum;
    else if (path.startsWith('/topic/'))
        return PsnpForumPageType.Topic;
    else
        throw new Error(`Unable to determine page type of '${url.href}'`);
}
//# sourceMappingURL=pageType.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/tta/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TTAPageType: () => (/* reexport safe */ _pageType_js__WEBPACK_IMPORTED_MODULE_0__.TTAPageType),
/* harmony export */   getTTAPageType: () => (/* reexport safe */ _pageType_js__WEBPACK_IMPORTED_MODULE_0__.getTTAPageType)
/* harmony export */ });
/* harmony import */ var _pageType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/util/tta/pageType.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/tta/pageType.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TTAPageType: () => (/* binding */ TTAPageType),
/* harmony export */   getTTAPageType: () => (/* binding */ getTTAPageType)
/* harmony export */ });
/** Type of PSNProfiles page. */
var TTAPageType;
(function (TTAPageType) {
    TTAPageType[TTAPageType["GameAchievements"] = 0] = "GameAchievements";
    TTAPageType[TTAPageType["GameAchievementSolutions"] = 1] = "GameAchievementSolutions";
    TTAPageType[TTAPageType["Walkthrough"] = 2] = "Walkthrough";
})(TTAPageType || (TTAPageType = {}));
/** Identifies the PSNProfiles page type of a given URL. */
function getTTAPageType(url) {
    const path = url.pathname;
    if (/^\/game\/[^\/]+?\/(achievements|trophies)$/.test(path))
        return TTAPageType.GameAchievements;
    else if (true)
        return TTAPageType.GameAchievementSolutions;
    else {}
}
//# sourceMappingURL=pageType.js.map

/***/ }),

/***/ "./node_modules/trophyutil/dist/util/util.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractKeys: () => (/* binding */ extractKeys),
/* harmony export */   getStackAbbr: () => (/* binding */ getStackAbbr),
/* harmony export */   parseNum: () => (/* binding */ parseNum),
/* harmony export */   sleep: () => (/* binding */ sleep)
/* harmony export */ });
/* harmony import */ var _models_game_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/trophyutil/dist/models/game.interface.js");

/** Waits a specified number of `ms`. */
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function extractKeys(keysObj) {
    return Object.keys(keysObj);
}
/**
 * Parses a numerical value from a string or DOM Node, returning said value or `NaN`.
 *
 * Prior to parsing, strings are trimmed and occurrences of `,`, `%`, and `\s.+` are removed.
 *
 * @example
 * parseNum("5,001.5% (25.99%)") // 5001.5
 */
function parseNum(input) {
    const inputAsNonNull = input ?? '';
    const inputAsString = typeof inputAsNonNull === 'string' ? inputAsNonNull : inputAsNonNull.textContent ?? '';
    const inputAsParsable = inputAsString.trim().replaceAll(/%|,|\s.+/g, '');
    if (inputAsParsable === '')
        return Number.NaN;
    return +inputAsParsable;
}
function getStackAbbr(fullRegionName) {
    for (const [key, value] of Object.entries(_models_game_interface_js__WEBPACK_IMPORTED_MODULE_0__.StackLookup)) {
        if (value === fullRegionName) {
            return key;
        }
    }
    return null;
}
//# sourceMappingURL=util.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.tsx");
/******/ 	
/******/ })()
;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"main_Tabmenu"}[chunkId]||chunkId) + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function getEmail() {
	var sEmail = localStorage.getItem("email");
	if (sEmail !== null) return sEmail;
	return null;
}

exports.getEmail = getEmail;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function _defaults(obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
    var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }return obj;
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var _cu = {
  getFnName: function getFnName(fn) {
    if (typeof fn !== "function") return;
    var sName = fn.name ? fn.name : fn.toString().match(/function\s+([^(\(|\s)]+)/)[1];
    return sName;
  },
  setTranslate3dX: function setTranslate3dX(ele, nValue) {
    var sTF = this.getCSSName('transform');
    ele.style[sTF] = 'translate3d(' + nValue + 'px, 0, 0)';
  },
  setTranslate3dXPercent: function setTranslate3dXPercent(ele, nValue) {
    var sTF = this.getCSSName('transform');
    ele.style[sTF] = 'translate3d(' + nValue + '%, 0, 0)';
  },
  getWidth: function getWidth(ele) {
    var nWidth = 0;

    if (ele.getBoundingClientRect().width) {
      nWidth = ele.getBoundingClientRect().width;
    } else {
      nWidth = ele.offsetWidth;
    }
    return nWidth;
  },
  getCSSName: function getCSSName(sName) {
    if (typeof this.htCacheData === "undefined") this.htCacheData = {};

    if (this.htCacheData[sName]) return this.htCacheData[sName];

    var _htNameSet = {
      'transition': ['webkitTransition', 'transition'],
      'transform': ['webkitTransform', 'transform']
    };

    var aNameList = _htNameSet[sName];

    if (!this.isExist(aNameList)) return null;

    for (var i = 0, len = aNameList.length; i < len; i++) {
      if (typeof document.body.style[aNameList[i]] === 'string') {
        this.htCacheData[sName] = aNameList[i];
        return this.htCacheData[sName];
      }
    }
  },
  getChildOrder: function getChildOrder(elChild) {
    var elParent = elChild.parentNode;
    var nIndex = Array.prototype.indexOf.call(elParent.children, elChild);
    return nIndex;
  },
  getTranslate3dX: function getTranslate3dX(ele) {
    var sTF = this.getCSSName("transform");
    var sPreCss = ele.style[sTF];
    var nPreX = 0;

    if (sPreCss.indexOf("%") === -1) {
      nPreX = +sPreCss.replace(/translate3d\((-*\d+(?:\.\d+)*)(px)*\,.+\)/g, "$1");
    } else {
      nPreX = +sPreCss.replace(/translate3d\((-*\d+(?:\.\d+)*)(%)*\,.+\)/g, "$1");
      nPreX = nPreX / 100 * this.getWidth(ele.firstElementChild);
    }

    return nPreX;
  },
  getTranslate3dXPercent: function getTranslate3dXPercent(ele) {
    var sTF = this.getCSSName("transform");
    var sPreCss = ele.style[sTF];
    var nPreX = +sPreCss.replace(/translate3d\((-*\d+(?:\.\d+)*)(%)*\,.+\)/g, "$1");
    return nPreX;
  },
  getCSSTransitionEnd: function getCSSTransitionEnd() {
    var sTS = this.getCSSName('transition');
    var sTSE = sTS === "webkitTransition" ? "webkitTransitionEnd" : "transitionend";
    return sTSE;
  },
  setDynamicHeight: function setDynamicHeight(nNextNumber, target, bCircular) {
    if (bCircular) {
      nNextNumber++;
    }
    var elCurrent = target.children[nNextNumber];
    var nHeight = parseInt(getComputedStyle(elCurrent).height);
    target.style.height = nHeight + "px";
  },
  setCSS: function setCSS(el, style, value) {
    el.style[style] = value;
  },
  showLayer: function showLayer(el) {
    el.style.display = "block";
  },
  closeLayer: function closeLayer(el) {
    el.style.display = "none";
  },

  //check null or undefined
  isExist: function isExist(data) {
    return data != null;
  },
  isArray: function isArray(_a) {
    if (!Array.isArray) {
      return Object.prototype.toString.call(_a) === '[object Array]';
    }
    return Array.isArray(_a);
  },
  isFunction: function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
  }
};
/*
* The MIT License (MIT)
* Copyright (c) 2016 SK PLANET. All Rights Reserved. *
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions: *
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software. *
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE. */

/*!
* \CommonComonent.js v0.2.1
* \core component source for Components UI .
* \copyright Copyright (c) 2016, SK PLANET. All Rights Reserved. 
* \license This project is released under the MIT License.
* \contributor Jisu Youn (jisu.youn@gmail.com)
* \warning dont'use this source in other library source.
*/

var CommonComponent = function () {
  function CommonComponent(elTarget, htOption) {
    _classCallCheck(this, CommonComponent);

    this.htOption = htOption;
    this.htCacheData = {};
    this.elTarget = elTarget;
    this.init(htOption);
  }

  CommonComponent.prototype.init = function init(htOption) {
    this.setInitValue();
    this.setOption(htOption, this._htDefaultOption, this.option);
    this.initValue();
    this.registerEvents();
  };

  CommonComponent.prototype.setInitValue = function setInitValue() {
    var DEFAULT_CORE_EVENT = ['FN_COMPONENT_DID_LOAD'];
    var _d = this.COMPONENT_CONFIG();
    this.bMainComponent = !!_d.PLUGINS;
    this._htDefaultOption = _d.DEFAULT_OPTION;
    this.aMyPluginName = _d.PLUGINS;
    this.htDefaultFn = this.getDefaultCallbackList(DEFAULT_CORE_EVENT.concat(_d.DEFAULT_COMPONENT_EVENT));

    if (this.bMainComponent) {
      this.htDefaultPluginFn = this.getDefaultCallbackList(DEFAULT_CORE_EVENT.concat(_d.DEFAULT_PLUGIN_EVENT));
    }
    this.htUserFn = {};
    this.htPluginFn = {};
    this.option = {};
  };

  //TODO. move to super Class.


  CommonComponent.prototype.registerUserMethod = function registerUserMethod(htFn) {
    this.setOption(htFn, this.htDefaultFn, this.htUserFn);
  };

  CommonComponent.prototype.registerPluginMethod = function registerPluginMethod(htFn) {
    this.appendPluginMethod(htFn, this.htDefaultPluginFn, this.htPluginFn);
  };

  CommonComponent.prototype.onPlugins = function onPlugins(aPluginList) {
    this.initPlugins(this.aMyPluginName, aPluginList, this.elTarget);
    this.componentDidLoaded();
  };

  CommonComponent.prototype.setOption = function setOption(htValue, htDefaultValue, htStorage) {
    var _this = this;

    Object.keys(htDefaultValue).forEach(function (v) {
      if (typeof htValue[v] === "undefined") {
        htStorage[v] = htDefaultValue[v];
      } else {
        if (Object.prototype.toString.call(htValue[v]) !== "[object Object]") {
          htStorage[v] = htValue[v];
          return;
        }
        htStorage[v] = {};
        _this.setOption.call(_this, htValue[v], htDefaultValue[v], htStorage[v]);
      }
    });
  };

  CommonComponent.prototype.appendPluginMethod = function appendPluginMethod(htValue, htDefaultValue, htStorage) {
    Object.keys(htDefaultValue).forEach(function (v) {
      if (!Array.isArray(htStorage[v])) htStorage[v] = [];
      if (typeof htValue[v] === "undefined") {
        htStorage[v].push(htDefaultValue[v]);
      } else {
        htStorage[v].push(htValue[v]);
        return;
      }
    });
  };

  CommonComponent.prototype.getDefaultCallbackList = function getDefaultCallbackList(aFn) {
    var htFn = {};
    aFn.forEach(function (v) {
      htFn[v] = function () {};
    });
    return htFn;
  };

  CommonComponent.prototype.initPlugins = function initPlugins(aMyPluginName, aPluginList, elTarget) {
    var _this2 = this;

    var oParent = this;
    aPluginList.forEach(function (v) {
      var sName = v.name;
      var obj = v.obj;
      if (aMyPluginName.indexOf(sName) < 0) return;
      //let oPlugin = new window[v.name](elTarget, v.option);
      var oPlugin = new obj(elTarget, v.option);
      oPlugin.registerUserMethod(v.userMethod);
      _this2._injectParentObject(oParent, oPlugin);
    });
  };

  CommonComponent.prototype.componentDidLoaded = function componentDidLoaded() {
    this.runCustomFn('USER', 'FN_COMPONENT_DID_LOAD');
    this.runCustomFn('PLUGIN', 'FN_COMPONENT_DID_LOAD');
  };

  CommonComponent.prototype.runCustomFn = function runCustomFn(type, eventname) {
    var args = [].slice.call(arguments, 2);
    var returnValue = void 0;

    switch (type) {
      case "USER":
        {
          if (_typeof(this.htUserFn) === "object" && typeof this.htUserFn[eventname] === "function") {
            var _htUserFn;

            returnValue = (_htUserFn = this.htUserFn)[eventname].apply(_htUserFn, _toConsumableArray(args));
          }
          break;
        }
      case "PLUGIN":
        {
          if (_typeof(this.htPluginFn) === "object" && _typeof(this.htPluginFn[eventname]) === "object") {
            this.htPluginFn[eventname].forEach(function (fn) {
              fn.apply(undefined, _toConsumableArray(args));
            });
          }
          break;
        }
      default:
        {}
    }
    return returnValue;
  };

  CommonComponent.prototype._injectParentObject = function _injectParentObject(oParent, oChild) {
    oChild.dockingPluginMethod(oParent);
  };

  return CommonComponent;
}();

/*
* The MIT License (MIT)
* Copyright (c) 2016 SK PLANET. All Rights Reserved. *
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions: *
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software. *
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE. */

/*!
* \SwipeNavigationPlugin.js v0.1
* \copyright Copyright (c) 2016, SK PLANET. All Rights Reserved. 
* \license This project is released under the MIT License.
* \contributor nigayoun (nigayoun@gmail.com)
* \warning dont'use this source in other library source.
*/

var SwipeNavigationPlugin = function (_CommonComponent) {
  _inherits(SwipeNavigationPlugin, _CommonComponent);

  SwipeNavigationPlugin.prototype.COMPONENT_CONFIG = function COMPONENT_CONFIG() {
    return {
      SELECTOR: {},
      DEFAULT_COMPONENT_EVENT: [],
      DEFAULT_OPTION: {
        'usage': false,
        'elNaviWrap': null, //own element(#iScrollArea)
        'seletedClassName': 'selected-swipe-li',
        'nDuration': 200,
        'bMouseEventSupport': false
      }
    };
  };

  function SwipeNavigationPlugin(elTarget, htOption) {
    _classCallCheck(this, SwipeNavigationPlugin);

    return _possibleConstructorReturn(this, _CommonComponent.call(this, elTarget, htOption));
  }

  SwipeNavigationPlugin.prototype.initValue = function initValue() {
    this.elPluginTarget;
    this.elNaviWrap = this.option.elNaviWrap;
    this.oParentInstance = null;
  };

  SwipeNavigationPlugin.prototype.registerEvents = function registerEvents() {
    this.moveSwipeArea();
  };

  SwipeNavigationPlugin.prototype.moveSwipeArea = function moveSwipeArea() {
    var lis = this.option.elNaviWrap.querySelectorAll("li");

    var that = this;
    for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener("touchend", function (ev) {
        that.moveparentSwipePanel(this);
      });
    }

    if (this.option.bMouseEventSupport) {
      for (var _i = 0; _i < lis.length; _i++) {
        lis[_i].addEventListener("click", function (ev) {
          that.moveparentSwipePanel(this);
        });
      }
    }
  };

  SwipeNavigationPlugin.prototype.moveparentSwipePanel = function moveparentSwipePanel(elTarget) {
    var nWidth = this.oParentInstance.nSwipeWidth;
    var nChildOrder = _cu.getChildOrder(elTarget);

    var nDiff = this.oParentInstance.getCurrentViewNumber() - nChildOrder;
    var nMoveValue = nDiff * nWidth;

    var nNextNumber = nChildOrder;

    //for no animation, nDuration set zero.
    this.oParentInstance.runSwipeAction(this.option.nDuration, nNextNumber);

    this.highlightSelectedLI(nChildOrder);
  };

  SwipeNavigationPlugin.prototype.highlightSelectedLI = function highlightSelectedLI(nSelectedCount) {
    nSelectedCount++;
    //remove legacy class
    var _li = this.option.elNaviWrap.querySelector("." + this.option.seletedClassName);
    var _curClassName = _li.className;
    _li.className = _li.className.replace(_curClassName, "");

    //add new class
    this.option.elNaviWrap.querySelector("li:nth-child(" + nSelectedCount + ")").className += " " + this.option.seletedClassName;
  };

  SwipeNavigationPlugin.prototype.dockingPluginMethod = function dockingPluginMethod(oParent) {
    oParent.registerPluginMethod({
      'FN_BEFORE_SWIPE': this.highlightSelectedLI.bind(this),
      'FN_AFTER_SWIPE': function FN_AFTER_SWIPE() {}
    });
    this.oParentInstance = oParent;
  };

  return SwipeNavigationPlugin;
}(CommonComponent);

/*
* The MIT License (MIT)
* Copyright (c) 2016 SK PLANET. All Rights Reserved. *
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions: *
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software. *
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE. */

/*!
* \SwipeStepMoverPlugin.js v0.1
* \copyright Copyright (c) 2016, SK PLANET. All Rights Reserved. 
* \license This project is released under the MIT License.
* \contributor nigayoun (nigayoun@gmail.com)
* \warning dont'use this source in other library source.
*/

var SwipeStepMoverPlugin = function (_CommonComponent2) {
  _inherits(SwipeStepMoverPlugin, _CommonComponent2);

  SwipeStepMoverPlugin.prototype.COMPONENT_CONFIG = function COMPONENT_CONFIG() {
    return {
      SELECTOR: {},
      DEFAULT_COMPONENT_EVENT: [],
      DEFAULT_OPTION: {
        'prevButton': null,
        'nextButton': null,
        'nDuration': 200
      }
    };
  };

  function SwipeStepMoverPlugin(elTarget, htOption) {
    _classCallCheck(this, SwipeStepMoverPlugin);

    return _possibleConstructorReturn(this, _CommonComponent2.call(this, elTarget, htOption));
  }

  SwipeStepMoverPlugin.prototype.initValue = function initValue() {
    this.elPluginTarget;
    this.elPrevBtn = this.option.prevButton;
    this.elNextBtn = this.option.nextButton;
    this.oParentInstance = null;
  };

  SwipeStepMoverPlugin.prototype.registerEvents = function registerEvents() {
    var _this3 = this;

    this.elPrevBtn.addEventListener("click", function (evt) {
      _this3.handlerClickButton(evt, "toLeft");
    });
    this.elNextBtn.addEventListener("click", function (evt) {
      _this3.handlerClickButton(evt, "toRight");
    });
  };

  SwipeStepMoverPlugin.prototype.handlerClickButton = function handlerClickButton(evt, sDirection) {
    if (this.oParentInstance.bAnimationing) return;
    var nCur = this.oParentInstance.getCurrentViewNumber();
    var bCircular = this.oParentInstance.option.bCircular;

    if (!bCircular) {
      if (nCur === 0 && sDirection === "toLeft") return;
      if (nCur === this.oParentInstance.nSwipeElementCount - 1 && sDirection === "toRight") return;
    }

    var nWidth = this.oParentInstance.nSwipeWidth;

    if (sDirection === "toRight") {
      nWidth *= -1;
      nCur++;
    } else {
      nCur--;
    }

    if (bCircular) nCur = this.oParentInstance.reAdjustNextNumberForCircular(nCur);

    //for no animation, nDuration set zero.
    this.oParentInstance.runSwipeAction(this.option.nDuration, nCur, nWidth);
  };

  SwipeStepMoverPlugin.prototype.setDisplayOfButton = function setDisplayOfButton(nCurrentPanel) {
    var nMaxPanel = this.oParentInstance.nSwipeElementCount - 1;
    if (nCurrentPanel === nMaxPanel) {
      this.elPrevBtn.style.display = "block";
      this.elNextBtn.style.display = "none";
    } else if (nCurrentPanel === 0) {
      this.elPrevBtn.style.display = "none";
      this.elNextBtn.style.display = "block";
    } else {
      this.elPrevBtn.style.display = "block";
      this.elNextBtn.style.display = "block";
    }
  };

  SwipeStepMoverPlugin.prototype.dockingPluginMethod = function dockingPluginMethod(oParent) {
    if (!oParent.option.bCircular) {
      oParent.registerPluginMethod({
        'FN_COMPONENT_DID_LOAD': this.setDisplayOfButton.bind(this, 0),
        'FN_AFTER_SWIPE': this.setDisplayOfButton.bind(this)
      });
    }
    this.oParentInstance = oParent;
  };

  return SwipeStepMoverPlugin;
}(CommonComponent);

/*
* The MIT License (MIT)
* Copyright (c) 2016 SK PLANET. All Rights Reserved. *
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions: *
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software. *
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE. */

/*!
* \swipe_es6.js v0.1
* \copyright Copyright (c) 2016, SK PLANET. All Rights Reserved. 
* \license This project is released under the MIT License.
* \contributor nigayoun (nigayoun@gmail.com)
* \warning dont'use this source in other library source.
*/

var SweetSwipe = function (_CommonComponent3) {
  _inherits(SweetSwipe, _CommonComponent3);

  SweetSwipe.prototype.COMPONENT_CONFIG = function COMPONENT_CONFIG() {
    return {
      PLUGINS: ['SwipeNavigationPlugin', 'SwipeStepMoverPlugin'],
      SELECTOR: {
        //inputFieldWrap: '.input-wrap', 
      },
      DEFAULT_COMPONENT_EVENT: ['FN_BEFORE_SWIPE', 'FN_AFTER_SWIPE'],
      DEFAULT_PLUGIN_EVENT: ['FN_BEFORE_SWIPE', 'FN_AFTER_SWIPE'],
      DEFAULT_OPTION: {
        'bCircular': false,
        'nDuration': 100,
        'nBackWidth': 60,
        'nSideWidth': 0,
        'nDecisionSlope': 0.8,
        'nForcedSwipeTime': 0,
        'bSettingScreenHeight': false,
        'bMouseEventSupport': false,
        'bTouchEventSupport': true
      }
    };
  };

  function SweetSwipe(elTarget, htOption) {
    _classCallCheck(this, SweetSwipe);

    return _possibleConstructorReturn(this, _CommonComponent3.call(this, elTarget, htOption));
  }

  SweetSwipe.prototype.initValue = function initValue(htOption) {
    //set height of viewArea
    //this.setDynamicHeight(1);
    //if(this.option.bSettingScreenHeight) this.elTarget.style.height = window.innerHeight + "px";
    if (this.option.bSettingScreenHeight) _cu.setDynamicHeight(0, this.elTarget, this.option.bCircular);

    //swipe container width
    this.nSwipeWidth = _cu.getWidth(this.elTarget.firstElementChild); //case. position : static(float)

    //swipe element count 
    this.nSwipeElementCount = this.elTarget.childElementCount;

    var bCircular = this.option.bCircular;
    this.nMaxSwipeRange = bCircular ? this.nSwipeWidth : 0;
    this.nMinSwipeRange = bCircular ? this.nSwipeElementCount - 2 : this.nSwipeElementCount - 1;
    this.nMinSwipeRange *= -this.nSwipeWidth;

    this.nMaxValue = this.nMaxSwipeRange + this.option.nSideWidth;
    this.nMinValue = this.nMinSwipeRange - this.option.nSideWidth;

    this.bAnimationing = false;
    this.nNextNumber = 0;

    //TODO. 옵션으로 받아서 필요한 경우만 resize 이벤트 모니터링하도록 기능추가.
    this.recalculateWidth();
  };

  SweetSwipe.prototype.registerEvents = function registerEvents() {
    var _this4 = this;

    if (this.option.bTouchEventSupport) {
      this.elTarget.addEventListener("touchstart", function (evt) {
        _this4.handlerTouchStart(evt);
      });
      this.elTarget.addEventListener("touchmove", function (evt) {
        _this4.handlerTouchMove(evt);
      });
      this.elTarget.addEventListener("touchend", function (evt) {
        _this4.handlerTouchEnd(evt);
      });
    }

    if (this.option.bMouseEventSupport) {
      this.elTarget.addEventListener("mousedown", function (evt) {
        _this4.handlerTouchStart(evt);
      });
      this.elTarget.addEventListener("mousemove", function (evt) {
        _this4.handlerTouchMove(evt);
      });
      this.elTarget.addEventListener("mouseup", function (evt) {
        _this4.handlerTouchEnd(evt);
      });
    }

    this.registerTransitionEnd();
  };

  /* Event Hanlder */

  SweetSwipe.prototype.handlerTouchStart = function handlerTouchStart(evt) {
    evt.stopPropagation();
    if (this.bAnimationing) return;

    this.bSwipe = true;
    this.bFirstTouchMove = true;
    var bMouseEvent = evt.type.substr(0, 5) === "mouse";

    var pageX = void 0,
        pageY = void 0;

    if (bMouseEvent) {
      pageX = evt.pageX;
      pageY = evt.pageY;
    } else {
      pageX = evt.changedTouches[0].pageX;
      pageY = evt.changedTouches[0].pageY;
    }

    this.nStartPosX = Math.floor(pageX);
    this.nStartPosY = Math.floor(pageY);

    this.nStartTranslateX = _cu.getTranslate3dX(this.elTarget);
    //this.nStartTranslateX = _cu.getTranslate3dXPercent(this.elTarget) / 100 * _cu.getWidth(this.elTarget.firstElementChild);

    this.nTouchStartTime = Date.now();
  };

  SweetSwipe.prototype.handlerTouchMove = function handlerTouchMove(evt) {
    evt.stopPropagation();
    if (this.bAnimationing) return;
    if (!this.bSwipe) return;

    var bMouseEvent = evt.type.substr(0, 5) === "mouse";

    var htCurrentEvt = bMouseEvent ? evt : evt.changedTouches[0];

    this.nMovePosX = Math.floor(htCurrentEvt.pageX);
    this.nMovePosY = Math.floor(htCurrentEvt.pageY);

    //detect angle 
    if (this.bFirstTouchMove) {
      var nAngleDiff = Math.abs(this.nMovePosY - this.nStartPosY) / Math.abs(this.nMovePosX - this.nStartPosX);
      this.bSwipe = !!(nAngleDiff <= this.option.nDecisionSlope);
      if (this.bSwipe === false) return;
      this.nPreMoveX = this.nStartPosX;
    }

    evt.preventDefault();

    var nMoveDiff = this.nMovePosX - this.nPreMoveX;
    var nPreviousX = 0;

    nPreviousX = _cu.getTranslate3dX(this.elTarget);

    this.dragArea(nPreviousX, nMoveDiff);

    this.nPreMoveX = this.nMovePosX;
    this.nPreMoveY = this.nMovePosX;

    this.bFirstTouchMove = false;
  };

  SweetSwipe.prototype.handlerTouchEnd = function handlerTouchEnd(evt) {
    evt.stopPropagation();
    if (this.bAnimationing) return;

    if (!this.bSwipe) {
      this.bOutRangeRight = false;
      this.bOutRangeLeft = false;
      return;
    }

    var nWidthForAnimation = 0;
    var nTouchEndTime = Date.now();
    var nDiffTouchTime = nTouchEndTime - this.nTouchStartTime;

    var nLastTranslateX = _cu.getTranslate3dX(this.elTarget);
    var nDiffTranslateX = nLastTranslateX - this.nStartTranslateX;

    if (nDiffTranslateX === 0) return;

    var bSwipeWidth = false;
    var bSwipeTime = false;
    var bSwipeGo = false;
    var sDirection = "";

    bSwipeWidth = Math.abs(nDiffTranslateX) > this.option.nBackWidth;
    if (nDiffTouchTime < this.option.nForcedSwipeTime) bSwipeTime = true;
    //decide direction.
    if (this.bOutRangeLeft || this.bOutRangeRight || !(bSwipeWidth || bSwipeTime)) {
      sDirection = nDiffTranslateX > 0 ? "left" : "right";
      nWidthForAnimation = Math.abs(nDiffTranslateX);
    } else {
      bSwipeGo = true;
      sDirection = nDiffTranslateX > 0 ? "right" : "left";
      nWidthForAnimation = this.nSwipeWidth - Math.abs(nDiffTranslateX);
    }

    this.nNextNumber = this._getNextViewNumber(this.nStartTranslateX, sDirection, bSwipeGo);
    this.nNextNumber = Math.round(this.nNextNumber);

    if (this.option.bCircular) {
      this.nNextNumber = this.reAdjustNextNumberForCircular(this.nNextNumber);
    }

    if (sDirection === 'left') nWidthForAnimation = -nWidthForAnimation;

    this.runSwipeAction(this.option.nDuration, this.nNextNumber, nWidthForAnimation);

    //TODO. make reset method 
    this.bOutRangeRight = false;
    this.bOutRangeLeft = false;
    this.bSwipe = false;
  };

  SweetSwipe.prototype.reAdjustNextNumberForCircular = function reAdjustNextNumberForCircular(nNextNumber) {
    if (nNextNumber === -1) {
      nNextNumber = this.nSwipeElementCount - 3;
    } else if (nNextNumber === this.nSwipeElementCount - 2) {
      nNextNumber = 0;
    } else {}
    return nNextNumber;
  };

  SweetSwipe.prototype.runSwipeAction = function runSwipeAction(nDuration, nNextNumber, nWidthForAnimation) {
    if (typeof nWidthForAnimation === "undefined") {
      var nWidth = this.nSwipeWidth;
      var nDiff = this.getCurrentViewNumber() - nNextNumber;
      nWidthForAnimation = nDiff * nWidth;
    }
    this.setNextNumber(nNextNumber);
    _CommonComponent3.prototype.runCustomFn.call(this, 'USER', 'FN_BEFORE_SWIPE', nNextNumber);
    _CommonComponent3.prototype.runCustomFn.call(this, 'PLUGIN', 'FN_BEFORE_SWIPE', nNextNumber);
    this.runTransition(this.elTarget, nWidthForAnimation, nDuration / 1000); //to second.
  };

  SweetSwipe.prototype._restoreTransformXPercent = function _restoreTransformXPercent(nPanelIndex) {
    var nPanelCount = this.nSwipeElementCount - 3;
    var nPanelWidth = this.nSwipeWidth;
    var nMoveValue = nPanelCount * nPanelWidth; //refs : clonedNode is 2.

    if (nPanelIndex === 0 || nPanelIndex > nPanelCount) {
      _cu.setTranslate3dXPercent(this.elTarget, 0);
    }
  };

  SweetSwipe.prototype.registerTransitionEnd = function registerTransitionEnd() {
    var _this5 = this;

    var sTSE = _cu.getCSSTransitionEnd();

    this.elTarget.addEventListener(sTSE, function (ev) {
      var sTS = _cu.getCSSName('transition');
      _this5.elTarget.style[sTS] = "none";

      _cu.setTranslate3dXPercent(_this5.elTarget, _this5.nNextNumber * -100);

      if (_this5.option.bCircular) {
        _this5._restoreTransformXPercent(_this5.nNextNumber);
      }

      _CommonComponent3.prototype.runCustomFn.call(_this5, 'USER', 'FN_AFTER_SWIPE', _this5.nNextNumber);
      _CommonComponent3.prototype.runCustomFn.call(_this5, 'PLUGIN', 'FN_AFTER_SWIPE', _this5.nNextNumber);

      if (_this5.option.bSettingScreenHeight) _cu.setDynamicHeight(_this5.nNextNumber, _this5.elTarget, _this5.option.bCircular);

      _this5.nNextNumber = 0;

      _this5.bAnimationing = false;
    });
  };

  SweetSwipe.prototype.setNextNumber = function setNextNumber(nNextNumber) {
    this.nNextNumber = nNextNumber;
  };

  SweetSwipe.prototype.getCurrentViewNumber = function getCurrentViewNumber() {
    var nIndex = Math.abs(_cu.getTranslate3dX(this.elTarget)) / this.nSwipeWidth;
    return Math.round(nIndex);
  };

  SweetSwipe.prototype._getNextViewNumber = function _getNextViewNumber(nPos, sDirection, bSwipeGo) {
    var nIndex = Math.round(-(nPos / this.nSwipeWidth));
    if (!bSwipeGo) return nIndex;
    return sDirection === "left" ? ++nIndex : --nIndex;
  };

  SweetSwipe.prototype.dragArea = function dragArea(nPreX, nMoveDiff) {
    this.bOutRangeRight = false;
    this.bOutRangeLeft = false;

    //check valid swipe range. 

    //when go to left on left-side.
    if (nPreX >= this.nMaxSwipeRange) this.bOutRangeLeft = true;

    //when go to right on right-side.
    if (nPreX <= this.nMinSwipeRange) this.bOutRangeRight = true;

    var nNewValue = nPreX + nMoveDiff;

    if (nNewValue > this.nMaxValue) nNewValue = this.nMaxValue;
    if (nNewValue < this.nMinValue) nNewValue = this.nMinValue;

    _cu.setTranslate3dX(this.elTarget, nNewValue);
  };

  SweetSwipe.prototype.runTransition = function runTransition(elTarget, nDistance, nDuration) {
    this.bAnimationing = true;

    var nPreviousTranslateX = _cu.getTranslate3dX(elTarget);

    var sTS = _cu.getCSSName('transition');
    var sTF = _cu.getCSSName('transform');
    var sValue = "";

    if (sTF === "webkitTransform") sValue = "-webkit-transform";else if (sTF === "transform") sValue = "transform";else {}

    elTarget.style[sTS] = sValue + " " + nDuration + "s";
    elTarget.style[sTF] = 'translate3d(' + (nPreviousTranslateX + nDistance) + 'px, 0, 0)';
  };

  SweetSwipe.prototype.runAutoAnimation = function runAutoAnimation(sDirection) {
    if (this.bAnimationing) return;
    var nCur = this.getCurrentViewNumber();
    var nWidth = this.nSwipeWidth;

    if (sDirection === "toRight") {
      nWidth *= -1;
      nCur++;
    } else {
      nCur--;
    }

    nCur = this.reAdjustNextNumberForCircular(nCur);

    this.runSwipeAction(this.option.nDuration, nCur, nWidth);
  };

  SweetSwipe.prototype.recalculateWidth = function recalculateWidth() {
    var resizerunner = false;

    window.addEventListener("resize", function () {
      var _this6 = this;

      if (resizerunner) return;
      resizerunner = true;

      setTimeout(function () {
        _this6.nSwipeWidth = _cu.getWidth(_this6.elTarget.firstElementChild);
        resizerunner = false;
      }, 100);
    }.bind(this), false);
  };

  return SweetSwipe;
}(CommonComponent);

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = {
  SweetSwipe: SweetSwipe,
  SwipeNavigationPlugin: SwipeNavigationPlugin,
  SwipeStepMoverPlugin: SwipeStepMoverPlugin
};
//# sourceMappingURL=swipe_merge_es5.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _swipe_merge_es = __webpack_require__(1);

var Swipe = _interopRequireWildcard(_swipe_merge_es);

var _common = __webpack_require__(0);

var common = _interopRequireWildcard(_common);

__webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//import _ from './lib/_.js';

function initSwipeModule() {
	var elSwapWrap = document.querySelector(".visual_img");
	var oMyswipe = new Swipe.SweetSwipe(elSwapWrap, {
		'bCircular': true,
		'nDuration': 300, //default 100
		'nBackWidth': 60, //default 60
		'nSideWidth': 20, //default 0
		'nDecisionSlope': 0.8, //default 0.8
		'nForcedSwipeTime': 100, //default 0
		'bSettingScreenHeight': true,
		'bMouseEventSupport': true
	});

	oMyswipe.registerUserMethod({
		'FN_BEFORE_SWIPE': function FN_BEFORE_SWIPE(n) {},
		'FN_AFTER_SWIPE': function FN_AFTER_SWIPE(n) {},
		'FN_COMPONENT_DID_LOAD': function FN_COMPONENT_DID_LOAD() {}
	});

	oMyswipe.onPlugins([{
		'name': 'SwipeStepMoverPlugin',
		'option': {
			'prevButton': document.querySelector(".btn_pre_e"),
			'nextButton': document.querySelector(".btn_nxt_e"),
			'nDuration': 200
		},
		'userMethod': {},
		'obj': Swipe.SwipeStepMoverPlugin
	}]);

	!function movePanel() {
		setTimeout(function () {
			oMyswipe.runAutoAnimation("toRight");
			movePanel();
		}, 2000);
	}();
}

function initTabModule() {
	var itemKinds = _getItemKinds();
	var elTabMenu = document.querySelector(".event_tab_lst");
	var elMoreBtn = document.querySelector(".btn");
	var tabMenuObj = null;

	//tab 컴포넌트 동작
	/*. 
 	이녀석은 html파일을 기준으로 디렉토리를 찾는다. 
 	따라서 html과 같은 디렉토리에 번들위치를 설정해두었다. (webpack.comon.js output-chunkFilename항목같이 참고)
 */
	function initTabComponent() {
		return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 9)).then(function (tabObj) {
			return tabObj.default;
		});
	}

	/* AFTER_CALLBACK LIST ******************************/
	// function afterTabContentChange() {
	// 	const el = document.querySelector(".event_lst_txt span.pink");
	// 	const liListLen = document.querySelectorAll(".lst_event_box li").length;
	// 	el.innerText = liListLen + "개";
	// }


	function decideBtnVisible() {
		var elbtn = document.querySelector(".more .btn");
		if (document.querySelectorAll(".lst_event_box li").length > 4) {
			elbtn.style.display = "none";
		} else {
			elbtn.style.display = "block";
		}
	}

	function afterTabContentChange() {
		decideBtnVisible();
	}

	/*****************************************************/

	//TabMenu regist event 
	elTabMenu.addEventListener("click", function (_ref) {
		var target = _ref.target;

		if (target.nodeName === "UL") return;
		var listItem = target.closest(".item");
		var listIdx = listItem.dataset.category;
		var a = listItem.querySelector(".anchor");

		elTabMenu.querySelector(".active").classList.remove("active");
		a.classList.add("active");

		initTabComponent().then(function (tabClass) {
			tabMenuObj = tabMenuObj || new tabClass(elTabMenu, itemKinds, afterTabContentChange);
			tabMenuObj.run(Number(listIdx), false);
			// //more button 보여줄지 결정
			// tabMenuObj.decideBtnVisible();
		});
	});

	//MoreBtn regist event
	elMoreBtn.addEventListener("click", function (evt) {
		var currentIndex = document.querySelector(".event_tab_lst .active").parentElement.dataset.category;

		initTabComponent().then(function (tabClass) {
			tabMenuObj = tabMenuObj || new tabClass(elTabMenu, itemKinds, afterTabContentChange);
			tabMenuObj.run(Number(currentIndex), true);
		});
	}, false);

	function _getItemKinds() {
		var testList = document.querySelectorAll(".event_tab_lst li a span");
		var itemKinds = Array.from(testList).map(function (v) {
			return v.innerText;
		});
		return itemKinds;
	}
}

function checkLoginFromStorage() {
	var email = common.getEmail();
	var elViewReservation = document.querySelector(".viewReservation");
	if (email !== null) elViewReservation.innerText = email;
}

document.addEventListener("DOMContentLoaded", function (evt) {
	initSwipeModule();
	initTabModule();
	checkLoginFromStorage();
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDlhZDI0MDcyMjMzYWNmZTZhNTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N3aXBlX21lcmdlX2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImdldEVtYWlsIiwic0VtYWlsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImFycjIiLCJsZW5ndGgiLCJmcm9tIiwiX2RlZmF1bHRzIiwiZGVmYXVsdHMiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImtleSIsInZhbHVlIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwidW5kZWZpbmVkIiwiZGVmaW5lUHJvcGVydHkiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJjYWxsIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJUeXBlRXJyb3IiLCJjcmVhdGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJzZXRQcm90b3R5cGVPZiIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfY3UiLCJnZXRGbk5hbWUiLCJmbiIsInNOYW1lIiwibmFtZSIsInRvU3RyaW5nIiwibWF0Y2giLCJzZXRUcmFuc2xhdGUzZFgiLCJlbGUiLCJuVmFsdWUiLCJzVEYiLCJnZXRDU1NOYW1lIiwic3R5bGUiLCJzZXRUcmFuc2xhdGUzZFhQZXJjZW50IiwiZ2V0V2lkdGgiLCJuV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaHRDYWNoZURhdGEiLCJfaHROYW1lU2V0IiwiYU5hbWVMaXN0IiwiaXNFeGlzdCIsImxlbiIsImRvY3VtZW50IiwiYm9keSIsImdldENoaWxkT3JkZXIiLCJlbENoaWxkIiwiZWxQYXJlbnQiLCJwYXJlbnROb2RlIiwibkluZGV4IiwiaW5kZXhPZiIsImNoaWxkcmVuIiwiZ2V0VHJhbnNsYXRlM2RYIiwic1ByZUNzcyIsIm5QcmVYIiwicmVwbGFjZSIsImZpcnN0RWxlbWVudENoaWxkIiwiZ2V0VHJhbnNsYXRlM2RYUGVyY2VudCIsImdldENTU1RyYW5zaXRpb25FbmQiLCJzVFMiLCJzVFNFIiwic2V0RHluYW1pY0hlaWdodCIsIm5OZXh0TnVtYmVyIiwidGFyZ2V0IiwiYkNpcmN1bGFyIiwiZWxDdXJyZW50IiwibkhlaWdodCIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImhlaWdodCIsInNldENTUyIsImVsIiwic2hvd0xheWVyIiwiZGlzcGxheSIsImNsb3NlTGF5ZXIiLCJkYXRhIiwiX2EiLCJpc0Z1bmN0aW9uIiwiQ29tbW9uQ29tcG9uZW50IiwiZWxUYXJnZXQiLCJodE9wdGlvbiIsImluaXQiLCJzZXRJbml0VmFsdWUiLCJzZXRPcHRpb24iLCJfaHREZWZhdWx0T3B0aW9uIiwib3B0aW9uIiwiaW5pdFZhbHVlIiwicmVnaXN0ZXJFdmVudHMiLCJERUZBVUxUX0NPUkVfRVZFTlQiLCJfZCIsIkNPTVBPTkVOVF9DT05GSUciLCJiTWFpbkNvbXBvbmVudCIsIlBMVUdJTlMiLCJERUZBVUxUX09QVElPTiIsImFNeVBsdWdpbk5hbWUiLCJodERlZmF1bHRGbiIsImdldERlZmF1bHRDYWxsYmFja0xpc3QiLCJjb25jYXQiLCJERUZBVUxUX0NPTVBPTkVOVF9FVkVOVCIsImh0RGVmYXVsdFBsdWdpbkZuIiwiREVGQVVMVF9QTFVHSU5fRVZFTlQiLCJodFVzZXJGbiIsImh0UGx1Z2luRm4iLCJyZWdpc3RlclVzZXJNZXRob2QiLCJodEZuIiwicmVnaXN0ZXJQbHVnaW5NZXRob2QiLCJhcHBlbmRQbHVnaW5NZXRob2QiLCJvblBsdWdpbnMiLCJhUGx1Z2luTGlzdCIsImluaXRQbHVnaW5zIiwiY29tcG9uZW50RGlkTG9hZGVkIiwiaHRWYWx1ZSIsImh0RGVmYXVsdFZhbHVlIiwiaHRTdG9yYWdlIiwiX3RoaXMiLCJmb3JFYWNoIiwidiIsInB1c2giLCJhRm4iLCJfdGhpczIiLCJvUGFyZW50Iiwib1BsdWdpbiIsInVzZXJNZXRob2QiLCJfaW5qZWN0UGFyZW50T2JqZWN0IiwicnVuQ3VzdG9tRm4iLCJ0eXBlIiwiZXZlbnRuYW1lIiwiYXJncyIsInNsaWNlIiwiYXJndW1lbnRzIiwicmV0dXJuVmFsdWUiLCJfaHRVc2VyRm4iLCJhcHBseSIsIm9DaGlsZCIsImRvY2tpbmdQbHVnaW5NZXRob2QiLCJTd2lwZU5hdmlnYXRpb25QbHVnaW4iLCJfQ29tbW9uQ29tcG9uZW50IiwiU0VMRUNUT1IiLCJlbFBsdWdpblRhcmdldCIsImVsTmF2aVdyYXAiLCJvUGFyZW50SW5zdGFuY2UiLCJtb3ZlU3dpcGVBcmVhIiwibGlzIiwicXVlcnlTZWxlY3RvckFsbCIsInRoYXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJtb3ZlcGFyZW50U3dpcGVQYW5lbCIsImJNb3VzZUV2ZW50U3VwcG9ydCIsIl9pIiwiblN3aXBlV2lkdGgiLCJuQ2hpbGRPcmRlciIsIm5EaWZmIiwiZ2V0Q3VycmVudFZpZXdOdW1iZXIiLCJuTW92ZVZhbHVlIiwicnVuU3dpcGVBY3Rpb24iLCJuRHVyYXRpb24iLCJoaWdobGlnaHRTZWxlY3RlZExJIiwiblNlbGVjdGVkQ291bnQiLCJfbGkiLCJxdWVyeVNlbGVjdG9yIiwic2VsZXRlZENsYXNzTmFtZSIsIl9jdXJDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJiaW5kIiwiRk5fQUZURVJfU1dJUEUiLCJTd2lwZVN0ZXBNb3ZlclBsdWdpbiIsIl9Db21tb25Db21wb25lbnQyIiwiZWxQcmV2QnRuIiwicHJldkJ1dHRvbiIsImVsTmV4dEJ0biIsIm5leHRCdXR0b24iLCJfdGhpczMiLCJldnQiLCJoYW5kbGVyQ2xpY2tCdXR0b24iLCJzRGlyZWN0aW9uIiwiYkFuaW1hdGlvbmluZyIsIm5DdXIiLCJuU3dpcGVFbGVtZW50Q291bnQiLCJyZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhciIsInNldERpc3BsYXlPZkJ1dHRvbiIsIm5DdXJyZW50UGFuZWwiLCJuTWF4UGFuZWwiLCJTd2VldFN3aXBlIiwiX0NvbW1vbkNvbXBvbmVudDMiLCJiU2V0dGluZ1NjcmVlbkhlaWdodCIsImNoaWxkRWxlbWVudENvdW50Iiwibk1heFN3aXBlUmFuZ2UiLCJuTWluU3dpcGVSYW5nZSIsIm5NYXhWYWx1ZSIsIm5TaWRlV2lkdGgiLCJuTWluVmFsdWUiLCJyZWNhbGN1bGF0ZVdpZHRoIiwiX3RoaXM0IiwiYlRvdWNoRXZlbnRTdXBwb3J0IiwiaGFuZGxlclRvdWNoU3RhcnQiLCJoYW5kbGVyVG91Y2hNb3ZlIiwiaGFuZGxlclRvdWNoRW5kIiwicmVnaXN0ZXJUcmFuc2l0aW9uRW5kIiwic3RvcFByb3BhZ2F0aW9uIiwiYlN3aXBlIiwiYkZpcnN0VG91Y2hNb3ZlIiwiYk1vdXNlRXZlbnQiLCJzdWJzdHIiLCJwYWdlWCIsInBhZ2VZIiwiY2hhbmdlZFRvdWNoZXMiLCJuU3RhcnRQb3NYIiwiTWF0aCIsImZsb29yIiwiblN0YXJ0UG9zWSIsIm5TdGFydFRyYW5zbGF0ZVgiLCJuVG91Y2hTdGFydFRpbWUiLCJEYXRlIiwibm93IiwiaHRDdXJyZW50RXZ0Iiwibk1vdmVQb3NYIiwibk1vdmVQb3NZIiwibkFuZ2xlRGlmZiIsImFicyIsIm5EZWNpc2lvblNsb3BlIiwiblByZU1vdmVYIiwicHJldmVudERlZmF1bHQiLCJuTW92ZURpZmYiLCJuUHJldmlvdXNYIiwiZHJhZ0FyZWEiLCJuUHJlTW92ZVkiLCJiT3V0UmFuZ2VSaWdodCIsImJPdXRSYW5nZUxlZnQiLCJuV2lkdGhGb3JBbmltYXRpb24iLCJuVG91Y2hFbmRUaW1lIiwibkRpZmZUb3VjaFRpbWUiLCJuTGFzdFRyYW5zbGF0ZVgiLCJuRGlmZlRyYW5zbGF0ZVgiLCJiU3dpcGVXaWR0aCIsImJTd2lwZVRpbWUiLCJiU3dpcGVHbyIsIm5CYWNrV2lkdGgiLCJuRm9yY2VkU3dpcGVUaW1lIiwiX2dldE5leHRWaWV3TnVtYmVyIiwicm91bmQiLCJzZXROZXh0TnVtYmVyIiwicnVuVHJhbnNpdGlvbiIsIl9yZXN0b3JlVHJhbnNmb3JtWFBlcmNlbnQiLCJuUGFuZWxJbmRleCIsIm5QYW5lbENvdW50IiwiblBhbmVsV2lkdGgiLCJfdGhpczUiLCJuUG9zIiwibk5ld1ZhbHVlIiwibkRpc3RhbmNlIiwiblByZXZpb3VzVHJhbnNsYXRlWCIsInNWYWx1ZSIsInJ1bkF1dG9BbmltYXRpb24iLCJyZXNpemVydW5uZXIiLCJ3aW5kb3ciLCJfdGhpczYiLCJzZXRUaW1lb3V0IiwibW9kdWxlIiwiZXhwb3J0cyIsIlN3aXBlIiwiY29tbW9uIiwiaW5pdFN3aXBlTW9kdWxlIiwiZWxTd2FwV3JhcCIsIm9NeXN3aXBlIiwibiIsIm1vdmVQYW5lbCIsImluaXRUYWJNb2R1bGUiLCJpdGVtS2luZHMiLCJfZ2V0SXRlbUtpbmRzIiwiZWxUYWJNZW51IiwiZWxNb3JlQnRuIiwidGFiTWVudU9iaiIsImluaXRUYWJDb21wb25lbnQiLCJ0aGVuIiwidGFiT2JqIiwiZGVmYXVsdCIsImRlY2lkZUJ0blZpc2libGUiLCJlbGJ0biIsImFmdGVyVGFiQ29udGVudENoYW5nZSIsIm5vZGVOYW1lIiwibGlzdEl0ZW0iLCJjbG9zZXN0IiwibGlzdElkeCIsImRhdGFzZXQiLCJjYXRlZ29yeSIsImEiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0YWJDbGFzcyIsInJ1biIsIk51bWJlciIsImN1cnJlbnRJbmRleCIsInBhcmVudEVsZW1lbnQiLCJ0ZXN0TGlzdCIsIm1hcCIsImlubmVyVGV4dCIsImNoZWNrTG9naW5Gcm9tU3RvcmFnZSIsImVtYWlsIiwiZWxW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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCIwXCI6XCJtYWluX1RhYm1lbnVcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmpzXCI7XG4gXHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLCAxMjAwMDApO1xuIFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKCkge1xuIFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdGNodW5rWzFdKG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLicpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuIFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ5YWQyNDA3MjIzM2FjZmU2YTUyIiwiZnVuY3Rpb24gZ2V0RW1haWwgKCkge1xuXHR2YXIgc0VtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKTtcblx0aWYoc0VtYWlsICE9PSBudWxsKSByZXR1cm4gc0VtYWlsO1xuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IHtnZXRFbWFpbH07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24uanMiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07dmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTtpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfXJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9cmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yoc3VwZXJDbGFzcykpKTtcbiAgfXN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7aWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG52YXIgX2N1ID0ge1xuICBnZXRGbk5hbWU6IGZ1bmN0aW9uIGdldEZuTmFtZShmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuICAgIHZhciBzTmFtZSA9IGZuLm5hbWUgPyBmbi5uYW1lIDogZm4udG9TdHJpbmcoKS5tYXRjaCgvZnVuY3Rpb25cXHMrKFteKFxcKHxcXHMpXSspLylbMV07XG4gICAgcmV0dXJuIHNOYW1lO1xuICB9LFxuICBzZXRUcmFuc2xhdGUzZFg6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZTNkWChlbGUsIG5WYWx1ZSkge1xuICAgIHZhciBzVEYgPSB0aGlzLmdldENTU05hbWUoJ3RyYW5zZm9ybScpO1xuICAgIGVsZS5zdHlsZVtzVEZdID0gJ3RyYW5zbGF0ZTNkKCcgKyBuVmFsdWUgKyAncHgsIDAsIDApJztcbiAgfSxcbiAgc2V0VHJhbnNsYXRlM2RYUGVyY2VudDogZnVuY3Rpb24gc2V0VHJhbnNsYXRlM2RYUGVyY2VudChlbGUsIG5WYWx1ZSkge1xuICAgIHZhciBzVEYgPSB0aGlzLmdldENTU05hbWUoJ3RyYW5zZm9ybScpO1xuICAgIGVsZS5zdHlsZVtzVEZdID0gJ3RyYW5zbGF0ZTNkKCcgKyBuVmFsdWUgKyAnJSwgMCwgMCknO1xuICB9LFxuICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoZWxlKSB7XG4gICAgdmFyIG5XaWR0aCA9IDA7XG5cbiAgICBpZiAoZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSB7XG4gICAgICBuV2lkdGggPSBlbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5XaWR0aCA9IGVsZS5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIG5XaWR0aDtcbiAgfSxcbiAgZ2V0Q1NTTmFtZTogZnVuY3Rpb24gZ2V0Q1NTTmFtZShzTmFtZSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5odENhY2hlRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikgdGhpcy5odENhY2hlRGF0YSA9IHt9O1xuXG4gICAgaWYgKHRoaXMuaHRDYWNoZURhdGFbc05hbWVdKSByZXR1cm4gdGhpcy5odENhY2hlRGF0YVtzTmFtZV07XG5cbiAgICB2YXIgX2h0TmFtZVNldCA9IHtcbiAgICAgICd0cmFuc2l0aW9uJzogWyd3ZWJraXRUcmFuc2l0aW9uJywgJ3RyYW5zaXRpb24nXSxcbiAgICAgICd0cmFuc2Zvcm0nOiBbJ3dlYmtpdFRyYW5zZm9ybScsICd0cmFuc2Zvcm0nXVxuICAgIH07XG5cbiAgICB2YXIgYU5hbWVMaXN0ID0gX2h0TmFtZVNldFtzTmFtZV07XG5cbiAgICBpZiAoIXRoaXMuaXNFeGlzdChhTmFtZUxpc3QpKSByZXR1cm4gbnVsbDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhTmFtZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVthTmFtZUxpc3RbaV1dID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmh0Q2FjaGVEYXRhW3NOYW1lXSA9IGFOYW1lTGlzdFtpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRDYWNoZURhdGFbc05hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0Q2hpbGRPcmRlcjogZnVuY3Rpb24gZ2V0Q2hpbGRPcmRlcihlbENoaWxkKSB7XG4gICAgdmFyIGVsUGFyZW50ID0gZWxDaGlsZC5wYXJlbnROb2RlO1xuICAgIHZhciBuSW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGVsUGFyZW50LmNoaWxkcmVuLCBlbENoaWxkKTtcbiAgICByZXR1cm4gbkluZGV4O1xuICB9LFxuICBnZXRUcmFuc2xhdGUzZFg6IGZ1bmN0aW9uIGdldFRyYW5zbGF0ZTNkWChlbGUpIHtcbiAgICB2YXIgc1RGID0gdGhpcy5nZXRDU1NOYW1lKFwidHJhbnNmb3JtXCIpO1xuICAgIHZhciBzUHJlQ3NzID0gZWxlLnN0eWxlW3NURl07XG4gICAgdmFyIG5QcmVYID0gMDtcblxuICAgIGlmIChzUHJlQ3NzLmluZGV4T2YoXCIlXCIpID09PSAtMSkge1xuICAgICAgblByZVggPSArc1ByZUNzcy5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKCgtKlxcZCsoPzpcXC5cXGQrKSopKHB4KSpcXCwuK1xcKS9nLCBcIiQxXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuUHJlWCA9ICtzUHJlQ3NzLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoKC0qXFxkKyg/OlxcLlxcZCspKikoJSkqXFwsLitcXCkvZywgXCIkMVwiKTtcbiAgICAgIG5QcmVYID0gblByZVggLyAxMDAgKiB0aGlzLmdldFdpZHRoKGVsZS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5QcmVYO1xuICB9LFxuICBnZXRUcmFuc2xhdGUzZFhQZXJjZW50OiBmdW5jdGlvbiBnZXRUcmFuc2xhdGUzZFhQZXJjZW50KGVsZSkge1xuICAgIHZhciBzVEYgPSB0aGlzLmdldENTU05hbWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgdmFyIHNQcmVDc3MgPSBlbGUuc3R5bGVbc1RGXTtcbiAgICB2YXIgblByZVggPSArc1ByZUNzcy5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKCgtKlxcZCsoPzpcXC5cXGQrKSopKCUpKlxcLC4rXFwpL2csIFwiJDFcIik7XG4gICAgcmV0dXJuIG5QcmVYO1xuICB9LFxuICBnZXRDU1NUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiBnZXRDU1NUcmFuc2l0aW9uRW5kKCkge1xuICAgIHZhciBzVFMgPSB0aGlzLmdldENTU05hbWUoJ3RyYW5zaXRpb24nKTtcbiAgICB2YXIgc1RTRSA9IHNUUyA9PT0gXCJ3ZWJraXRUcmFuc2l0aW9uXCIgPyBcIndlYmtpdFRyYW5zaXRpb25FbmRcIiA6IFwidHJhbnNpdGlvbmVuZFwiO1xuICAgIHJldHVybiBzVFNFO1xuICB9LFxuICBzZXREeW5hbWljSGVpZ2h0OiBmdW5jdGlvbiBzZXREeW5hbWljSGVpZ2h0KG5OZXh0TnVtYmVyLCB0YXJnZXQsIGJDaXJjdWxhcikge1xuICAgIGlmIChiQ2lyY3VsYXIpIHtcbiAgICAgIG5OZXh0TnVtYmVyKys7XG4gICAgfVxuICAgIHZhciBlbEN1cnJlbnQgPSB0YXJnZXQuY2hpbGRyZW5bbk5leHROdW1iZXJdO1xuICAgIHZhciBuSGVpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShlbEN1cnJlbnQpLmhlaWdodCk7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IG5IZWlnaHQgKyBcInB4XCI7XG4gIH0sXG4gIHNldENTUzogZnVuY3Rpb24gc2V0Q1NTKGVsLCBzdHlsZSwgdmFsdWUpIHtcbiAgICBlbC5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgfSxcbiAgc2hvd0xheWVyOiBmdW5jdGlvbiBzaG93TGF5ZXIoZWwpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9LFxuICBjbG9zZUxheWVyOiBmdW5jdGlvbiBjbG9zZUxheWVyKGVsKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9LFxuXG5cbiAgLy9jaGVjayBudWxsIG9yIHVuZGVmaW5lZFxuICBpc0V4aXN0OiBmdW5jdGlvbiBpc0V4aXN0KGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YSAhPSBudWxsO1xuICB9LFxuICBpc0FycmF5OiBmdW5jdGlvbiBpc0FycmF5KF9hKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF9hKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoX2EpO1xuICB9LFxuICBpc0Z1bmN0aW9uOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cbn07XG4vKlxuKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiogQ29weXJpZ2h0IChjKSAyMDE2IFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gKlxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOiAqXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4qIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLiAqXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiogVEhFIFNPRlRXQVJFLiAqL1xuXG4vKiFcbiogXFxDb21tb25Db21vbmVudC5qcyB2MC4yLjFcbiogXFxjb3JlIGNvbXBvbmVudCBzb3VyY2UgZm9yIENvbXBvbmVudHMgVUkgLlxuKiBcXGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4qIFxcbGljZW5zZSBUaGlzIHByb2plY3QgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKiBcXGNvbnRyaWJ1dG9yIEppc3UgWW91biAoamlzdS55b3VuQGdtYWlsLmNvbSlcbiogXFx3YXJuaW5nIGRvbnQndXNlIHRoaXMgc291cmNlIGluIG90aGVyIGxpYnJhcnkgc291cmNlLlxuKi9cblxudmFyIENvbW1vbkNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tbW9uQ29tcG9uZW50KGVsVGFyZ2V0LCBodE9wdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21tb25Db21wb25lbnQpO1xuXG4gICAgdGhpcy5odE9wdGlvbiA9IGh0T3B0aW9uO1xuICAgIHRoaXMuaHRDYWNoZURhdGEgPSB7fTtcbiAgICB0aGlzLmVsVGFyZ2V0ID0gZWxUYXJnZXQ7XG4gICAgdGhpcy5pbml0KGh0T3B0aW9uKTtcbiAgfVxuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIGluaXQoaHRPcHRpb24pIHtcbiAgICB0aGlzLnNldEluaXRWYWx1ZSgpO1xuICAgIHRoaXMuc2V0T3B0aW9uKGh0T3B0aW9uLCB0aGlzLl9odERlZmF1bHRPcHRpb24sIHRoaXMub3B0aW9uKTtcbiAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnNldEluaXRWYWx1ZSA9IGZ1bmN0aW9uIHNldEluaXRWYWx1ZSgpIHtcbiAgICB2YXIgREVGQVVMVF9DT1JFX0VWRU5UID0gWydGTl9DT01QT05FTlRfRElEX0xPQUQnXTtcbiAgICB2YXIgX2QgPSB0aGlzLkNPTVBPTkVOVF9DT05GSUcoKTtcbiAgICB0aGlzLmJNYWluQ29tcG9uZW50ID0gISFfZC5QTFVHSU5TO1xuICAgIHRoaXMuX2h0RGVmYXVsdE9wdGlvbiA9IF9kLkRFRkFVTFRfT1BUSU9OO1xuICAgIHRoaXMuYU15UGx1Z2luTmFtZSA9IF9kLlBMVUdJTlM7XG4gICAgdGhpcy5odERlZmF1bHRGbiA9IHRoaXMuZ2V0RGVmYXVsdENhbGxiYWNrTGlzdChERUZBVUxUX0NPUkVfRVZFTlQuY29uY2F0KF9kLkRFRkFVTFRfQ09NUE9ORU5UX0VWRU5UKSk7XG5cbiAgICBpZiAodGhpcy5iTWFpbkNvbXBvbmVudCkge1xuICAgICAgdGhpcy5odERlZmF1bHRQbHVnaW5GbiA9IHRoaXMuZ2V0RGVmYXVsdENhbGxiYWNrTGlzdChERUZBVUxUX0NPUkVfRVZFTlQuY29uY2F0KF9kLkRFRkFVTFRfUExVR0lOX0VWRU5UKSk7XG4gICAgfVxuICAgIHRoaXMuaHRVc2VyRm4gPSB7fTtcbiAgICB0aGlzLmh0UGx1Z2luRm4gPSB7fTtcbiAgICB0aGlzLm9wdGlvbiA9IHt9O1xuICB9O1xuXG4gIC8vVE9ETy4gbW92ZSB0byBzdXBlciBDbGFzcy5cblxuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUucmVnaXN0ZXJVc2VyTWV0aG9kID0gZnVuY3Rpb24gcmVnaXN0ZXJVc2VyTWV0aG9kKGh0Rm4pIHtcbiAgICB0aGlzLnNldE9wdGlvbihodEZuLCB0aGlzLmh0RGVmYXVsdEZuLCB0aGlzLmh0VXNlckZuKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyUGx1Z2luTWV0aG9kID0gZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW5NZXRob2QoaHRGbikge1xuICAgIHRoaXMuYXBwZW5kUGx1Z2luTWV0aG9kKGh0Rm4sIHRoaXMuaHREZWZhdWx0UGx1Z2luRm4sIHRoaXMuaHRQbHVnaW5Gbik7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5vblBsdWdpbnMgPSBmdW5jdGlvbiBvblBsdWdpbnMoYVBsdWdpbkxpc3QpIHtcbiAgICB0aGlzLmluaXRQbHVnaW5zKHRoaXMuYU15UGx1Z2luTmFtZSwgYVBsdWdpbkxpc3QsIHRoaXMuZWxUYXJnZXQpO1xuICAgIHRoaXMuY29tcG9uZW50RGlkTG9hZGVkKCk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5zZXRPcHRpb24gPSBmdW5jdGlvbiBzZXRPcHRpb24oaHRWYWx1ZSwgaHREZWZhdWx0VmFsdWUsIGh0U3RvcmFnZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhodERlZmF1bHRWYWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgaWYgKHR5cGVvZiBodFZhbHVlW3ZdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGh0U3RvcmFnZVt2XSA9IGh0RGVmYXVsdFZhbHVlW3ZdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChodFZhbHVlW3ZdKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgIGh0U3RvcmFnZVt2XSA9IGh0VmFsdWVbdl07XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGh0U3RvcmFnZVt2XSA9IHt9O1xuICAgICAgICBfdGhpcy5zZXRPcHRpb24uY2FsbChfdGhpcywgaHRWYWx1ZVt2XSwgaHREZWZhdWx0VmFsdWVbdl0sIGh0U3RvcmFnZVt2XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5hcHBlbmRQbHVnaW5NZXRob2QgPSBmdW5jdGlvbiBhcHBlbmRQbHVnaW5NZXRob2QoaHRWYWx1ZSwgaHREZWZhdWx0VmFsdWUsIGh0U3RvcmFnZSkge1xuICAgIE9iamVjdC5rZXlzKGh0RGVmYXVsdFZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaHRTdG9yYWdlW3ZdKSkgaHRTdG9yYWdlW3ZdID0gW107XG4gICAgICBpZiAodHlwZW9mIGh0VmFsdWVbdl0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaHRTdG9yYWdlW3ZdLnB1c2goaHREZWZhdWx0VmFsdWVbdl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRTdG9yYWdlW3ZdLnB1c2goaHRWYWx1ZVt2XSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmdldERlZmF1bHRDYWxsYmFja0xpc3QgPSBmdW5jdGlvbiBnZXREZWZhdWx0Q2FsbGJhY2tMaXN0KGFGbikge1xuICAgIHZhciBodEZuID0ge307XG4gICAgYUZuLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIGh0Rm5bdl0gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9KTtcbiAgICByZXR1cm4gaHRGbjtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmluaXRQbHVnaW5zID0gZnVuY3Rpb24gaW5pdFBsdWdpbnMoYU15UGx1Z2luTmFtZSwgYVBsdWdpbkxpc3QsIGVsVGFyZ2V0KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgb1BhcmVudCA9IHRoaXM7XG4gICAgYVBsdWdpbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgdmFyIHNOYW1lID0gdi5uYW1lO1xuICAgICAgdmFyIG9iaiA9IHYub2JqO1xuICAgICAgaWYgKGFNeVBsdWdpbk5hbWUuaW5kZXhPZihzTmFtZSkgPCAwKSByZXR1cm47XG4gICAgICAvL2xldCBvUGx1Z2luID0gbmV3IHdpbmRvd1t2Lm5hbWVdKGVsVGFyZ2V0LCB2Lm9wdGlvbik7XG4gICAgICB2YXIgb1BsdWdpbiA9IG5ldyBvYmooZWxUYXJnZXQsIHYub3B0aW9uKTtcbiAgICAgIG9QbHVnaW4ucmVnaXN0ZXJVc2VyTWV0aG9kKHYudXNlck1ldGhvZCk7XG4gICAgICBfdGhpczIuX2luamVjdFBhcmVudE9iamVjdChvUGFyZW50LCBvUGx1Z2luKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWRlZCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZExvYWRlZCgpIHtcbiAgICB0aGlzLnJ1bkN1c3RvbUZuKCdVU0VSJywgJ0ZOX0NPTVBPTkVOVF9ESURfTE9BRCcpO1xuICAgIHRoaXMucnVuQ3VzdG9tRm4oJ1BMVUdJTicsICdGTl9DT01QT05FTlRfRElEX0xPQUQnKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnJ1bkN1c3RvbUZuID0gZnVuY3Rpb24gcnVuQ3VzdG9tRm4odHlwZSwgZXZlbnRuYW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIHJldHVyblZhbHVlID0gdm9pZCAwO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwiVVNFUlwiOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKF90eXBlb2YodGhpcy5odFVzZXJGbikgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHRoaXMuaHRVc2VyRm5bZXZlbnRuYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgX2h0VXNlckZuO1xuXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IChfaHRVc2VyRm4gPSB0aGlzLmh0VXNlckZuKVtldmVudG5hbWVdLmFwcGx5KF9odFVzZXJGbiwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgXCJQTFVHSU5cIjpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChfdHlwZW9mKHRoaXMuaHRQbHVnaW5GbikgPT09IFwib2JqZWN0XCIgJiYgX3R5cGVvZih0aGlzLmh0UGx1Z2luRm5bZXZlbnRuYW1lXSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuaHRQbHVnaW5GbltldmVudG5hbWVdLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgIGZuLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge31cbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuX2luamVjdFBhcmVudE9iamVjdCA9IGZ1bmN0aW9uIF9pbmplY3RQYXJlbnRPYmplY3Qob1BhcmVudCwgb0NoaWxkKSB7XG4gICAgb0NoaWxkLmRvY2tpbmdQbHVnaW5NZXRob2Qob1BhcmVudCk7XG4gIH07XG5cbiAgcmV0dXJuIENvbW1vbkNvbXBvbmVudDtcbn0oKTtcblxuLypcbiogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4qIENvcHlyaWdodCAoYykgMjAxNiBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuICpcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4gKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qIFRIRSBTT0ZUV0FSRS4gKi9cblxuLyohXG4qIFxcU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLmpzIHYwLjFcbiogXFxjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFxuKiBcXGxpY2Vuc2UgVGhpcyBwcm9qZWN0IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiogXFxjb250cmlidXRvciBuaWdheW91biAobmlnYXlvdW5AZ21haWwuY29tKVxuKiBcXHdhcm5pbmcgZG9udCd1c2UgdGhpcyBzb3VyY2UgaW4gb3RoZXIgbGlicmFyeSBzb3VyY2UuXG4qL1xuXG52YXIgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luID0gZnVuY3Rpb24gKF9Db21tb25Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN3aXBlTmF2aWdhdGlvblBsdWdpbiwgX0NvbW1vbkNvbXBvbmVudCk7XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5DT01QT05FTlRfQ09ORklHID0gZnVuY3Rpb24gQ09NUE9ORU5UX0NPTkZJRygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgU0VMRUNUT1I6IHt9LFxuICAgICAgREVGQVVMVF9DT01QT05FTlRfRVZFTlQ6IFtdLFxuICAgICAgREVGQVVMVF9PUFRJT046IHtcbiAgICAgICAgJ3VzYWdlJzogZmFsc2UsXG4gICAgICAgICdlbE5hdmlXcmFwJzogbnVsbCwgLy9vd24gZWxlbWVudCgjaVNjcm9sbEFyZWEpXG4gICAgICAgICdzZWxldGVkQ2xhc3NOYW1lJzogJ3NlbGVjdGVkLXN3aXBlLWxpJyxcbiAgICAgICAgJ25EdXJhdGlvbic6IDIwMCxcbiAgICAgICAgJ2JNb3VzZUV2ZW50U3VwcG9ydCc6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBTd2lwZU5hdmlnYXRpb25QbHVnaW4oZWxUYXJnZXQsIGh0T3B0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3aXBlTmF2aWdhdGlvblBsdWdpbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbW1vbkNvbXBvbmVudC5jYWxsKHRoaXMsIGVsVGFyZ2V0LCBodE9wdGlvbikpO1xuICB9XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5pbml0VmFsdWUgPSBmdW5jdGlvbiBpbml0VmFsdWUoKSB7XG4gICAgdGhpcy5lbFBsdWdpblRhcmdldDtcbiAgICB0aGlzLmVsTmF2aVdyYXAgPSB0aGlzLm9wdGlvbi5lbE5hdmlXcmFwO1xuICAgIHRoaXMub1BhcmVudEluc3RhbmNlID0gbnVsbDtcbiAgfTtcblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdGhpcy5tb3ZlU3dpcGVBcmVhKCk7XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5tb3ZlU3dpcGVBcmVhID0gZnVuY3Rpb24gbW92ZVN3aXBlQXJlYSgpIHtcbiAgICB2YXIgbGlzID0gdGhpcy5vcHRpb24uZWxOYXZpV3JhcC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG5cbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc1tpXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHRoYXQubW92ZXBhcmVudFN3aXBlUGFuZWwodGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb24uYk1vdXNlRXZlbnRTdXBwb3J0KSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBsaXNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICB0aGF0Lm1vdmVwYXJlbnRTd2lwZVBhbmVsKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5tb3ZlcGFyZW50U3dpcGVQYW5lbCA9IGZ1bmN0aW9uIG1vdmVwYXJlbnRTd2lwZVBhbmVsKGVsVGFyZ2V0KSB7XG4gICAgdmFyIG5XaWR0aCA9IHRoaXMub1BhcmVudEluc3RhbmNlLm5Td2lwZVdpZHRoO1xuICAgIHZhciBuQ2hpbGRPcmRlciA9IF9jdS5nZXRDaGlsZE9yZGVyKGVsVGFyZ2V0KTtcblxuICAgIHZhciBuRGlmZiA9IHRoaXMub1BhcmVudEluc3RhbmNlLmdldEN1cnJlbnRWaWV3TnVtYmVyKCkgLSBuQ2hpbGRPcmRlcjtcbiAgICB2YXIgbk1vdmVWYWx1ZSA9IG5EaWZmICogbldpZHRoO1xuXG4gICAgdmFyIG5OZXh0TnVtYmVyID0gbkNoaWxkT3JkZXI7XG5cbiAgICAvL2ZvciBubyBhbmltYXRpb24sIG5EdXJhdGlvbiBzZXQgemVyby5cbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZS5ydW5Td2lwZUFjdGlvbih0aGlzLm9wdGlvbi5uRHVyYXRpb24sIG5OZXh0TnVtYmVyKTtcblxuICAgIHRoaXMuaGlnaGxpZ2h0U2VsZWN0ZWRMSShuQ2hpbGRPcmRlcik7XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5oaWdobGlnaHRTZWxlY3RlZExJID0gZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0ZWRMSShuU2VsZWN0ZWRDb3VudCkge1xuICAgIG5TZWxlY3RlZENvdW50Kys7XG4gICAgLy9yZW1vdmUgbGVnYWN5IGNsYXNzXG4gICAgdmFyIF9saSA9IHRoaXMub3B0aW9uLmVsTmF2aVdyYXAucXVlcnlTZWxlY3RvcihcIi5cIiArIHRoaXMub3B0aW9uLnNlbGV0ZWRDbGFzc05hbWUpO1xuICAgIHZhciBfY3VyQ2xhc3NOYW1lID0gX2xpLmNsYXNzTmFtZTtcbiAgICBfbGkuY2xhc3NOYW1lID0gX2xpLmNsYXNzTmFtZS5yZXBsYWNlKF9jdXJDbGFzc05hbWUsIFwiXCIpO1xuXG4gICAgLy9hZGQgbmV3IGNsYXNzXG4gICAgdGhpcy5vcHRpb24uZWxOYXZpV3JhcC5xdWVyeVNlbGVjdG9yKFwibGk6bnRoLWNoaWxkKFwiICsgblNlbGVjdGVkQ291bnQgKyBcIilcIikuY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5vcHRpb24uc2VsZXRlZENsYXNzTmFtZTtcbiAgfTtcblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLmRvY2tpbmdQbHVnaW5NZXRob2QgPSBmdW5jdGlvbiBkb2NraW5nUGx1Z2luTWV0aG9kKG9QYXJlbnQpIHtcbiAgICBvUGFyZW50LnJlZ2lzdGVyUGx1Z2luTWV0aG9kKHtcbiAgICAgICdGTl9CRUZPUkVfU1dJUEUnOiB0aGlzLmhpZ2hsaWdodFNlbGVjdGVkTEkuYmluZCh0aGlzKSxcbiAgICAgICdGTl9BRlRFUl9TV0lQRSc6IGZ1bmN0aW9uIEZOX0FGVEVSX1NXSVBFKCkge31cbiAgICB9KTtcbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZSA9IG9QYXJlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIFN3aXBlTmF2aWdhdGlvblBsdWdpbjtcbn0oQ29tbW9uQ29tcG9uZW50KTtcblxuLypcbiogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4qIENvcHlyaWdodCAoYykgMjAxNiBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuICpcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4gKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qIFRIRSBTT0ZUV0FSRS4gKi9cblxuLyohXG4qIFxcU3dpcGVTdGVwTW92ZXJQbHVnaW4uanMgdjAuMVxuKiBcXGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4qIFxcbGljZW5zZSBUaGlzIHByb2plY3QgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKiBcXGNvbnRyaWJ1dG9yIG5pZ2F5b3VuIChuaWdheW91bkBnbWFpbC5jb20pXG4qIFxcd2FybmluZyBkb250J3VzZSB0aGlzIHNvdXJjZSBpbiBvdGhlciBsaWJyYXJ5IHNvdXJjZS5cbiovXG5cbnZhciBTd2lwZVN0ZXBNb3ZlclBsdWdpbiA9IGZ1bmN0aW9uIChfQ29tbW9uQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoU3dpcGVTdGVwTW92ZXJQbHVnaW4sIF9Db21tb25Db21wb25lbnQyKTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuQ09NUE9ORU5UX0NPTkZJRyA9IGZ1bmN0aW9uIENPTVBPTkVOVF9DT05GSUcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNFTEVDVE9SOiB7fSxcbiAgICAgIERFRkFVTFRfQ09NUE9ORU5UX0VWRU5UOiBbXSxcbiAgICAgIERFRkFVTFRfT1BUSU9OOiB7XG4gICAgICAgICdwcmV2QnV0dG9uJzogbnVsbCxcbiAgICAgICAgJ25leHRCdXR0b24nOiBudWxsLFxuICAgICAgICAnbkR1cmF0aW9uJzogMjAwXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBTd2lwZVN0ZXBNb3ZlclBsdWdpbihlbFRhcmdldCwgaHRPcHRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dpcGVTdGVwTW92ZXJQbHVnaW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21tb25Db21wb25lbnQyLmNhbGwodGhpcywgZWxUYXJnZXQsIGh0T3B0aW9uKSk7XG4gIH1cblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuaW5pdFZhbHVlID0gZnVuY3Rpb24gaW5pdFZhbHVlKCkge1xuICAgIHRoaXMuZWxQbHVnaW5UYXJnZXQ7XG4gICAgdGhpcy5lbFByZXZCdG4gPSB0aGlzLm9wdGlvbi5wcmV2QnV0dG9uO1xuICAgIHRoaXMuZWxOZXh0QnRuID0gdGhpcy5vcHRpb24ubmV4dEJ1dHRvbjtcbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZSA9IG51bGw7XG4gIH07XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLmVsUHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgX3RoaXMzLmhhbmRsZXJDbGlja0J1dHRvbihldnQsIFwidG9MZWZ0XCIpO1xuICAgIH0pO1xuICAgIHRoaXMuZWxOZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBfdGhpczMuaGFuZGxlckNsaWNrQnV0dG9uKGV2dCwgXCJ0b1JpZ2h0XCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5oYW5kbGVyQ2xpY2tCdXR0b24gPSBmdW5jdGlvbiBoYW5kbGVyQ2xpY2tCdXR0b24oZXZ0LCBzRGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMub1BhcmVudEluc3RhbmNlLmJBbmltYXRpb25pbmcpIHJldHVybjtcbiAgICB2YXIgbkN1ciA9IHRoaXMub1BhcmVudEluc3RhbmNlLmdldEN1cnJlbnRWaWV3TnVtYmVyKCk7XG4gICAgdmFyIGJDaXJjdWxhciA9IHRoaXMub1BhcmVudEluc3RhbmNlLm9wdGlvbi5iQ2lyY3VsYXI7XG5cbiAgICBpZiAoIWJDaXJjdWxhcikge1xuICAgICAgaWYgKG5DdXIgPT09IDAgJiYgc0RpcmVjdGlvbiA9PT0gXCJ0b0xlZnRcIikgcmV0dXJuO1xuICAgICAgaWYgKG5DdXIgPT09IHRoaXMub1BhcmVudEluc3RhbmNlLm5Td2lwZUVsZW1lbnRDb3VudCAtIDEgJiYgc0RpcmVjdGlvbiA9PT0gXCJ0b1JpZ2h0XCIpIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbldpZHRoID0gdGhpcy5vUGFyZW50SW5zdGFuY2UublN3aXBlV2lkdGg7XG5cbiAgICBpZiAoc0RpcmVjdGlvbiA9PT0gXCJ0b1JpZ2h0XCIpIHtcbiAgICAgIG5XaWR0aCAqPSAtMTtcbiAgICAgIG5DdXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgbkN1ci0tO1xuICAgIH1cblxuICAgIGlmIChiQ2lyY3VsYXIpIG5DdXIgPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5yZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcihuQ3VyKTtcblxuICAgIC8vZm9yIG5vIGFuaW1hdGlvbiwgbkR1cmF0aW9uIHNldCB6ZXJvLlxuICAgIHRoaXMub1BhcmVudEluc3RhbmNlLnJ1blN3aXBlQWN0aW9uKHRoaXMub3B0aW9uLm5EdXJhdGlvbiwgbkN1ciwgbldpZHRoKTtcbiAgfTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuc2V0RGlzcGxheU9mQnV0dG9uID0gZnVuY3Rpb24gc2V0RGlzcGxheU9mQnV0dG9uKG5DdXJyZW50UGFuZWwpIHtcbiAgICB2YXIgbk1heFBhbmVsID0gdGhpcy5vUGFyZW50SW5zdGFuY2UublN3aXBlRWxlbWVudENvdW50IC0gMTtcbiAgICBpZiAobkN1cnJlbnRQYW5lbCA9PT0gbk1heFBhbmVsKSB7XG4gICAgICB0aGlzLmVsUHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgdGhpcy5lbE5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSBpZiAobkN1cnJlbnRQYW5lbCA9PT0gMCkge1xuICAgICAgdGhpcy5lbFByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGhpcy5lbE5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbFByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHRoaXMuZWxOZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICB9O1xuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5kb2NraW5nUGx1Z2luTWV0aG9kID0gZnVuY3Rpb24gZG9ja2luZ1BsdWdpbk1ldGhvZChvUGFyZW50KSB7XG4gICAgaWYgKCFvUGFyZW50Lm9wdGlvbi5iQ2lyY3VsYXIpIHtcbiAgICAgIG9QYXJlbnQucmVnaXN0ZXJQbHVnaW5NZXRob2Qoe1xuICAgICAgICAnRk5fQ09NUE9ORU5UX0RJRF9MT0FEJzogdGhpcy5zZXREaXNwbGF5T2ZCdXR0b24uYmluZCh0aGlzLCAwKSxcbiAgICAgICAgJ0ZOX0FGVEVSX1NXSVBFJzogdGhpcy5zZXREaXNwbGF5T2ZCdXR0b24uYmluZCh0aGlzKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub1BhcmVudEluc3RhbmNlID0gb1BhcmVudDtcbiAgfTtcblxuICByZXR1cm4gU3dpcGVTdGVwTW92ZXJQbHVnaW47XG59KENvbW1vbkNvbXBvbmVudCk7XG5cbi8qXG4qIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuKiBDb3B5cmlnaHQgKGMpIDIwMTYgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiAqXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6ICpcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuICpcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuKiBUSEUgU09GVFdBUkUuICovXG5cbi8qIVxuKiBcXHN3aXBlX2VzNi5qcyB2MC4xXG4qIFxcY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiBcbiogXFxsaWNlbnNlIFRoaXMgcHJvamVjdCBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qIFxcY29udHJpYnV0b3IgbmlnYXlvdW4gKG5pZ2F5b3VuQGdtYWlsLmNvbSlcbiogXFx3YXJuaW5nIGRvbnQndXNlIHRoaXMgc291cmNlIGluIG90aGVyIGxpYnJhcnkgc291cmNlLlxuKi9cblxudmFyIFN3ZWV0U3dpcGUgPSBmdW5jdGlvbiAoX0NvbW1vbkNvbXBvbmVudDMpIHtcbiAgX2luaGVyaXRzKFN3ZWV0U3dpcGUsIF9Db21tb25Db21wb25lbnQzKTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5DT01QT05FTlRfQ09ORklHID0gZnVuY3Rpb24gQ09NUE9ORU5UX0NPTkZJRygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgUExVR0lOUzogWydTd2lwZU5hdmlnYXRpb25QbHVnaW4nLCAnU3dpcGVTdGVwTW92ZXJQbHVnaW4nXSxcbiAgICAgIFNFTEVDVE9SOiB7XG4gICAgICAgIC8vaW5wdXRGaWVsZFdyYXA6ICcuaW5wdXQtd3JhcCcsIFxuICAgICAgfSxcbiAgICAgIERFRkFVTFRfQ09NUE9ORU5UX0VWRU5UOiBbJ0ZOX0JFRk9SRV9TV0lQRScsICdGTl9BRlRFUl9TV0lQRSddLFxuICAgICAgREVGQVVMVF9QTFVHSU5fRVZFTlQ6IFsnRk5fQkVGT1JFX1NXSVBFJywgJ0ZOX0FGVEVSX1NXSVBFJ10sXG4gICAgICBERUZBVUxUX09QVElPTjoge1xuICAgICAgICAnYkNpcmN1bGFyJzogZmFsc2UsXG4gICAgICAgICduRHVyYXRpb24nOiAxMDAsXG4gICAgICAgICduQmFja1dpZHRoJzogNjAsXG4gICAgICAgICduU2lkZVdpZHRoJzogMCxcbiAgICAgICAgJ25EZWNpc2lvblNsb3BlJzogMC44LFxuICAgICAgICAnbkZvcmNlZFN3aXBlVGltZSc6IDAsXG4gICAgICAgICdiU2V0dGluZ1NjcmVlbkhlaWdodCc6IGZhbHNlLFxuICAgICAgICAnYk1vdXNlRXZlbnRTdXBwb3J0JzogZmFsc2UsXG4gICAgICAgICdiVG91Y2hFdmVudFN1cHBvcnQnOiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBTd2VldFN3aXBlKGVsVGFyZ2V0LCBodE9wdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2VldFN3aXBlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tbW9uQ29tcG9uZW50My5jYWxsKHRoaXMsIGVsVGFyZ2V0LCBodE9wdGlvbikpO1xuICB9XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuaW5pdFZhbHVlID0gZnVuY3Rpb24gaW5pdFZhbHVlKGh0T3B0aW9uKSB7XG4gICAgLy9zZXQgaGVpZ2h0IG9mIHZpZXdBcmVhXG4gICAgLy90aGlzLnNldER5bmFtaWNIZWlnaHQoMSk7XG4gICAgLy9pZih0aGlzLm9wdGlvbi5iU2V0dGluZ1NjcmVlbkhlaWdodCkgdGhpcy5lbFRhcmdldC5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgaWYgKHRoaXMub3B0aW9uLmJTZXR0aW5nU2NyZWVuSGVpZ2h0KSBfY3Uuc2V0RHluYW1pY0hlaWdodCgwLCB0aGlzLmVsVGFyZ2V0LCB0aGlzLm9wdGlvbi5iQ2lyY3VsYXIpO1xuXG4gICAgLy9zd2lwZSBjb250YWluZXIgd2lkdGhcbiAgICB0aGlzLm5Td2lwZVdpZHRoID0gX2N1LmdldFdpZHRoKHRoaXMuZWxUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQpOyAvL2Nhc2UuIHBvc2l0aW9uIDogc3RhdGljKGZsb2F0KVxuXG4gICAgLy9zd2lwZSBlbGVtZW50IGNvdW50IFxuICAgIHRoaXMublN3aXBlRWxlbWVudENvdW50ID0gdGhpcy5lbFRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDtcblxuICAgIHZhciBiQ2lyY3VsYXIgPSB0aGlzLm9wdGlvbi5iQ2lyY3VsYXI7XG4gICAgdGhpcy5uTWF4U3dpcGVSYW5nZSA9IGJDaXJjdWxhciA/IHRoaXMublN3aXBlV2lkdGggOiAwO1xuICAgIHRoaXMubk1pblN3aXBlUmFuZ2UgPSBiQ2lyY3VsYXIgPyB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDIgOiB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDE7XG4gICAgdGhpcy5uTWluU3dpcGVSYW5nZSAqPSAtdGhpcy5uU3dpcGVXaWR0aDtcblxuICAgIHRoaXMubk1heFZhbHVlID0gdGhpcy5uTWF4U3dpcGVSYW5nZSArIHRoaXMub3B0aW9uLm5TaWRlV2lkdGg7XG4gICAgdGhpcy5uTWluVmFsdWUgPSB0aGlzLm5NaW5Td2lwZVJhbmdlIC0gdGhpcy5vcHRpb24ublNpZGVXaWR0aDtcblxuICAgIHRoaXMuYkFuaW1hdGlvbmluZyA9IGZhbHNlO1xuICAgIHRoaXMubk5leHROdW1iZXIgPSAwO1xuXG4gICAgLy9UT0RPLiDsmLXshZjsnLzroZwg67Cb7JWE7IScIO2VhOyalO2VnCDqsr3smrDrp4wgcmVzaXplIOydtOuypO2KuCDrqqjri4jthLDrp4HtlZjrj4TroZ0g6riw64ql7LaU6rCALlxuICAgIHRoaXMucmVjYWxjdWxhdGVXaWR0aCgpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5vcHRpb24uYlRvdWNoRXZlbnRTdXBwb3J0KSB7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaFN0YXJ0KGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hNb3ZlKGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaEVuZChldnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9uLmJNb3VzZUV2ZW50U3VwcG9ydCkge1xuICAgICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaFN0YXJ0KGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hNb3ZlKGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczQuaGFuZGxlclRvdWNoRW5kKGV2dCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbkVuZCgpO1xuICB9O1xuXG4gIC8qIEV2ZW50IEhhbmxkZXIgKi9cblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5oYW5kbGVyVG91Y2hTdGFydCA9IGZ1bmN0aW9uIGhhbmRsZXJUb3VjaFN0YXJ0KGV2dCkge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5iQW5pbWF0aW9uaW5nKSByZXR1cm47XG5cbiAgICB0aGlzLmJTd2lwZSA9IHRydWU7XG4gICAgdGhpcy5iRmlyc3RUb3VjaE1vdmUgPSB0cnVlO1xuICAgIHZhciBiTW91c2VFdmVudCA9IGV2dC50eXBlLnN1YnN0cigwLCA1KSA9PT0gXCJtb3VzZVwiO1xuXG4gICAgdmFyIHBhZ2VYID0gdm9pZCAwLFxuICAgICAgICBwYWdlWSA9IHZvaWQgMDtcblxuICAgIGlmIChiTW91c2VFdmVudCkge1xuICAgICAgcGFnZVggPSBldnQucGFnZVg7XG4gICAgICBwYWdlWSA9IGV2dC5wYWdlWTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFnZVggPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICBwYWdlWSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB9XG5cbiAgICB0aGlzLm5TdGFydFBvc1ggPSBNYXRoLmZsb29yKHBhZ2VYKTtcbiAgICB0aGlzLm5TdGFydFBvc1kgPSBNYXRoLmZsb29yKHBhZ2VZKTtcblxuICAgIHRoaXMublN0YXJ0VHJhbnNsYXRlWCA9IF9jdS5nZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCk7XG4gICAgLy90aGlzLm5TdGFydFRyYW5zbGF0ZVggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYUGVyY2VudCh0aGlzLmVsVGFyZ2V0KSAvIDEwMCAqIF9jdS5nZXRXaWR0aCh0aGlzLmVsVGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkKTtcblxuICAgIHRoaXMublRvdWNoU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5oYW5kbGVyVG91Y2hNb3ZlID0gZnVuY3Rpb24gaGFuZGxlclRvdWNoTW92ZShldnQpIHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuICAgIGlmICghdGhpcy5iU3dpcGUpIHJldHVybjtcblxuICAgIHZhciBiTW91c2VFdmVudCA9IGV2dC50eXBlLnN1YnN0cigwLCA1KSA9PT0gXCJtb3VzZVwiO1xuXG4gICAgdmFyIGh0Q3VycmVudEV2dCA9IGJNb3VzZUV2ZW50ID8gZXZ0IDogZXZ0LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG4gICAgdGhpcy5uTW92ZVBvc1ggPSBNYXRoLmZsb29yKGh0Q3VycmVudEV2dC5wYWdlWCk7XG4gICAgdGhpcy5uTW92ZVBvc1kgPSBNYXRoLmZsb29yKGh0Q3VycmVudEV2dC5wYWdlWSk7XG5cbiAgICAvL2RldGVjdCBhbmdsZSBcbiAgICBpZiAodGhpcy5iRmlyc3RUb3VjaE1vdmUpIHtcbiAgICAgIHZhciBuQW5nbGVEaWZmID0gTWF0aC5hYnModGhpcy5uTW92ZVBvc1kgLSB0aGlzLm5TdGFydFBvc1kpIC8gTWF0aC5hYnModGhpcy5uTW92ZVBvc1ggLSB0aGlzLm5TdGFydFBvc1gpO1xuICAgICAgdGhpcy5iU3dpcGUgPSAhIShuQW5nbGVEaWZmIDw9IHRoaXMub3B0aW9uLm5EZWNpc2lvblNsb3BlKTtcbiAgICAgIGlmICh0aGlzLmJTd2lwZSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAgIHRoaXMublByZU1vdmVYID0gdGhpcy5uU3RhcnRQb3NYO1xuICAgIH1cblxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIG5Nb3ZlRGlmZiA9IHRoaXMubk1vdmVQb3NYIC0gdGhpcy5uUHJlTW92ZVg7XG4gICAgdmFyIG5QcmV2aW91c1ggPSAwO1xuXG4gICAgblByZXZpb3VzWCA9IF9jdS5nZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCk7XG5cbiAgICB0aGlzLmRyYWdBcmVhKG5QcmV2aW91c1gsIG5Nb3ZlRGlmZik7XG5cbiAgICB0aGlzLm5QcmVNb3ZlWCA9IHRoaXMubk1vdmVQb3NYO1xuICAgIHRoaXMublByZU1vdmVZID0gdGhpcy5uTW92ZVBvc1g7XG5cbiAgICB0aGlzLmJGaXJzdFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmhhbmRsZXJUb3VjaEVuZCA9IGZ1bmN0aW9uIGhhbmRsZXJUb3VjaEVuZChldnQpIHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuXG4gICAgaWYgKCF0aGlzLmJTd2lwZSkge1xuICAgICAgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IGZhbHNlO1xuICAgICAgdGhpcy5iT3V0UmFuZ2VMZWZ0ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5XaWR0aEZvckFuaW1hdGlvbiA9IDA7XG4gICAgdmFyIG5Ub3VjaEVuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBuRGlmZlRvdWNoVGltZSA9IG5Ub3VjaEVuZFRpbWUgLSB0aGlzLm5Ub3VjaFN0YXJ0VGltZTtcblxuICAgIHZhciBuTGFzdFRyYW5zbGF0ZVggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQpO1xuICAgIHZhciBuRGlmZlRyYW5zbGF0ZVggPSBuTGFzdFRyYW5zbGF0ZVggLSB0aGlzLm5TdGFydFRyYW5zbGF0ZVg7XG5cbiAgICBpZiAobkRpZmZUcmFuc2xhdGVYID09PSAwKSByZXR1cm47XG5cbiAgICB2YXIgYlN3aXBlV2lkdGggPSBmYWxzZTtcbiAgICB2YXIgYlN3aXBlVGltZSA9IGZhbHNlO1xuICAgIHZhciBiU3dpcGVHbyA9IGZhbHNlO1xuICAgIHZhciBzRGlyZWN0aW9uID0gXCJcIjtcblxuICAgIGJTd2lwZVdpZHRoID0gTWF0aC5hYnMobkRpZmZUcmFuc2xhdGVYKSA+IHRoaXMub3B0aW9uLm5CYWNrV2lkdGg7XG4gICAgaWYgKG5EaWZmVG91Y2hUaW1lIDwgdGhpcy5vcHRpb24ubkZvcmNlZFN3aXBlVGltZSkgYlN3aXBlVGltZSA9IHRydWU7XG4gICAgLy9kZWNpZGUgZGlyZWN0aW9uLlxuICAgIGlmICh0aGlzLmJPdXRSYW5nZUxlZnQgfHwgdGhpcy5iT3V0UmFuZ2VSaWdodCB8fCAhKGJTd2lwZVdpZHRoIHx8IGJTd2lwZVRpbWUpKSB7XG4gICAgICBzRGlyZWN0aW9uID0gbkRpZmZUcmFuc2xhdGVYID4gMCA/IFwibGVmdFwiIDogXCJyaWdodFwiO1xuICAgICAgbldpZHRoRm9yQW5pbWF0aW9uID0gTWF0aC5hYnMobkRpZmZUcmFuc2xhdGVYKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYlN3aXBlR28gPSB0cnVlO1xuICAgICAgc0RpcmVjdGlvbiA9IG5EaWZmVHJhbnNsYXRlWCA+IDAgPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcbiAgICAgIG5XaWR0aEZvckFuaW1hdGlvbiA9IHRoaXMublN3aXBlV2lkdGggLSBNYXRoLmFicyhuRGlmZlRyYW5zbGF0ZVgpO1xuICAgIH1cblxuICAgIHRoaXMubk5leHROdW1iZXIgPSB0aGlzLl9nZXROZXh0Vmlld051bWJlcih0aGlzLm5TdGFydFRyYW5zbGF0ZVgsIHNEaXJlY3Rpb24sIGJTd2lwZUdvKTtcbiAgICB0aGlzLm5OZXh0TnVtYmVyID0gTWF0aC5yb3VuZCh0aGlzLm5OZXh0TnVtYmVyKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbi5iQ2lyY3VsYXIpIHtcbiAgICAgIHRoaXMubk5leHROdW1iZXIgPSB0aGlzLnJlQWRqdXN0TmV4dE51bWJlckZvckNpcmN1bGFyKHRoaXMubk5leHROdW1iZXIpO1xuICAgIH1cblxuICAgIGlmIChzRGlyZWN0aW9uID09PSAnbGVmdCcpIG5XaWR0aEZvckFuaW1hdGlvbiA9IC1uV2lkdGhGb3JBbmltYXRpb247XG5cbiAgICB0aGlzLnJ1blN3aXBlQWN0aW9uKHRoaXMub3B0aW9uLm5EdXJhdGlvbiwgdGhpcy5uTmV4dE51bWJlciwgbldpZHRoRm9yQW5pbWF0aW9uKTtcblxuICAgIC8vVE9ETy4gbWFrZSByZXNldCBtZXRob2QgXG4gICAgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuYk91dFJhbmdlTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuYlN3aXBlID0gZmFsc2U7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIgPSBmdW5jdGlvbiByZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcihuTmV4dE51bWJlcikge1xuICAgIGlmIChuTmV4dE51bWJlciA9PT0gLTEpIHtcbiAgICAgIG5OZXh0TnVtYmVyID0gdGhpcy5uU3dpcGVFbGVtZW50Q291bnQgLSAzO1xuICAgIH0gZWxzZSBpZiAobk5leHROdW1iZXIgPT09IHRoaXMublN3aXBlRWxlbWVudENvdW50IC0gMikge1xuICAgICAgbk5leHROdW1iZXIgPSAwO1xuICAgIH0gZWxzZSB7fVxuICAgIHJldHVybiBuTmV4dE51bWJlcjtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5ydW5Td2lwZUFjdGlvbiA9IGZ1bmN0aW9uIHJ1blN3aXBlQWN0aW9uKG5EdXJhdGlvbiwgbk5leHROdW1iZXIsIG5XaWR0aEZvckFuaW1hdGlvbikge1xuICAgIGlmICh0eXBlb2YgbldpZHRoRm9yQW5pbWF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB2YXIgbldpZHRoID0gdGhpcy5uU3dpcGVXaWR0aDtcbiAgICAgIHZhciBuRGlmZiA9IHRoaXMuZ2V0Q3VycmVudFZpZXdOdW1iZXIoKSAtIG5OZXh0TnVtYmVyO1xuICAgICAgbldpZHRoRm9yQW5pbWF0aW9uID0gbkRpZmYgKiBuV2lkdGg7XG4gICAgfVxuICAgIHRoaXMuc2V0TmV4dE51bWJlcihuTmV4dE51bWJlcik7XG4gICAgX0NvbW1vbkNvbXBvbmVudDMucHJvdG90eXBlLnJ1bkN1c3RvbUZuLmNhbGwodGhpcywgJ1VTRVInLCAnRk5fQkVGT1JFX1NXSVBFJywgbk5leHROdW1iZXIpO1xuICAgIF9Db21tb25Db21wb25lbnQzLnByb3RvdHlwZS5ydW5DdXN0b21Gbi5jYWxsKHRoaXMsICdQTFVHSU4nLCAnRk5fQkVGT1JFX1NXSVBFJywgbk5leHROdW1iZXIpO1xuICAgIHRoaXMucnVuVHJhbnNpdGlvbih0aGlzLmVsVGFyZ2V0LCBuV2lkdGhGb3JBbmltYXRpb24sIG5EdXJhdGlvbiAvIDEwMDApOyAvL3RvIHNlY29uZC5cbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5fcmVzdG9yZVRyYW5zZm9ybVhQZXJjZW50ID0gZnVuY3Rpb24gX3Jlc3RvcmVUcmFuc2Zvcm1YUGVyY2VudChuUGFuZWxJbmRleCkge1xuICAgIHZhciBuUGFuZWxDb3VudCA9IHRoaXMublN3aXBlRWxlbWVudENvdW50IC0gMztcbiAgICB2YXIgblBhbmVsV2lkdGggPSB0aGlzLm5Td2lwZVdpZHRoO1xuICAgIHZhciBuTW92ZVZhbHVlID0gblBhbmVsQ291bnQgKiBuUGFuZWxXaWR0aDsgLy9yZWZzIDogY2xvbmVkTm9kZSBpcyAyLlxuXG4gICAgaWYgKG5QYW5lbEluZGV4ID09PSAwIHx8IG5QYW5lbEluZGV4ID4gblBhbmVsQ291bnQpIHtcbiAgICAgIF9jdS5zZXRUcmFuc2xhdGUzZFhQZXJjZW50KHRoaXMuZWxUYXJnZXQsIDApO1xuICAgIH1cbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5yZWdpc3RlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25FbmQoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgc1RTRSA9IF9jdS5nZXRDU1NUcmFuc2l0aW9uRW5kKCk7XG5cbiAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoc1RTRSwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICB2YXIgc1RTID0gX2N1LmdldENTU05hbWUoJ3RyYW5zaXRpb24nKTtcbiAgICAgIF90aGlzNS5lbFRhcmdldC5zdHlsZVtzVFNdID0gXCJub25lXCI7XG5cbiAgICAgIF9jdS5zZXRUcmFuc2xhdGUzZFhQZXJjZW50KF90aGlzNS5lbFRhcmdldCwgX3RoaXM1Lm5OZXh0TnVtYmVyICogLTEwMCk7XG5cbiAgICAgIGlmIChfdGhpczUub3B0aW9uLmJDaXJjdWxhcikge1xuICAgICAgICBfdGhpczUuX3Jlc3RvcmVUcmFuc2Zvcm1YUGVyY2VudChfdGhpczUubk5leHROdW1iZXIpO1xuICAgICAgfVxuXG4gICAgICBfQ29tbW9uQ29tcG9uZW50My5wcm90b3R5cGUucnVuQ3VzdG9tRm4uY2FsbChfdGhpczUsICdVU0VSJywgJ0ZOX0FGVEVSX1NXSVBFJywgX3RoaXM1Lm5OZXh0TnVtYmVyKTtcbiAgICAgIF9Db21tb25Db21wb25lbnQzLnByb3RvdHlwZS5ydW5DdXN0b21Gbi5jYWxsKF90aGlzNSwgJ1BMVUdJTicsICdGTl9BRlRFUl9TV0lQRScsIF90aGlzNS5uTmV4dE51bWJlcik7XG5cbiAgICAgIGlmIChfdGhpczUub3B0aW9uLmJTZXR0aW5nU2NyZWVuSGVpZ2h0KSBfY3Uuc2V0RHluYW1pY0hlaWdodChfdGhpczUubk5leHROdW1iZXIsIF90aGlzNS5lbFRhcmdldCwgX3RoaXM1Lm9wdGlvbi5iQ2lyY3VsYXIpO1xuXG4gICAgICBfdGhpczUubk5leHROdW1iZXIgPSAwO1xuXG4gICAgICBfdGhpczUuYkFuaW1hdGlvbmluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnNldE5leHROdW1iZXIgPSBmdW5jdGlvbiBzZXROZXh0TnVtYmVyKG5OZXh0TnVtYmVyKSB7XG4gICAgdGhpcy5uTmV4dE51bWJlciA9IG5OZXh0TnVtYmVyO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmdldEN1cnJlbnRWaWV3TnVtYmVyID0gZnVuY3Rpb24gZ2V0Q3VycmVudFZpZXdOdW1iZXIoKSB7XG4gICAgdmFyIG5JbmRleCA9IE1hdGguYWJzKF9jdS5nZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCkpIC8gdGhpcy5uU3dpcGVXaWR0aDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuSW5kZXgpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLl9nZXROZXh0Vmlld051bWJlciA9IGZ1bmN0aW9uIF9nZXROZXh0Vmlld051bWJlcihuUG9zLCBzRGlyZWN0aW9uLCBiU3dpcGVHbykge1xuICAgIHZhciBuSW5kZXggPSBNYXRoLnJvdW5kKC0oblBvcyAvIHRoaXMublN3aXBlV2lkdGgpKTtcbiAgICBpZiAoIWJTd2lwZUdvKSByZXR1cm4gbkluZGV4O1xuICAgIHJldHVybiBzRGlyZWN0aW9uID09PSBcImxlZnRcIiA/ICsrbkluZGV4IDogLS1uSW5kZXg7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuZHJhZ0FyZWEgPSBmdW5jdGlvbiBkcmFnQXJlYShuUHJlWCwgbk1vdmVEaWZmKSB7XG4gICAgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuYk91dFJhbmdlTGVmdCA9IGZhbHNlO1xuXG4gICAgLy9jaGVjayB2YWxpZCBzd2lwZSByYW5nZS4gXG5cbiAgICAvL3doZW4gZ28gdG8gbGVmdCBvbiBsZWZ0LXNpZGUuXG4gICAgaWYgKG5QcmVYID49IHRoaXMubk1heFN3aXBlUmFuZ2UpIHRoaXMuYk91dFJhbmdlTGVmdCA9IHRydWU7XG5cbiAgICAvL3doZW4gZ28gdG8gcmlnaHQgb24gcmlnaHQtc2lkZS5cbiAgICBpZiAoblByZVggPD0gdGhpcy5uTWluU3dpcGVSYW5nZSkgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IHRydWU7XG5cbiAgICB2YXIgbk5ld1ZhbHVlID0gblByZVggKyBuTW92ZURpZmY7XG5cbiAgICBpZiAobk5ld1ZhbHVlID4gdGhpcy5uTWF4VmFsdWUpIG5OZXdWYWx1ZSA9IHRoaXMubk1heFZhbHVlO1xuICAgIGlmIChuTmV3VmFsdWUgPCB0aGlzLm5NaW5WYWx1ZSkgbk5ld1ZhbHVlID0gdGhpcy5uTWluVmFsdWU7XG5cbiAgICBfY3Uuc2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQsIG5OZXdWYWx1ZSk7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucnVuVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIHJ1blRyYW5zaXRpb24oZWxUYXJnZXQsIG5EaXN0YW5jZSwgbkR1cmF0aW9uKSB7XG4gICAgdGhpcy5iQW5pbWF0aW9uaW5nID0gdHJ1ZTtcblxuICAgIHZhciBuUHJldmlvdXNUcmFuc2xhdGVYID0gX2N1LmdldFRyYW5zbGF0ZTNkWChlbFRhcmdldCk7XG5cbiAgICB2YXIgc1RTID0gX2N1LmdldENTU05hbWUoJ3RyYW5zaXRpb24nKTtcbiAgICB2YXIgc1RGID0gX2N1LmdldENTU05hbWUoJ3RyYW5zZm9ybScpO1xuICAgIHZhciBzVmFsdWUgPSBcIlwiO1xuXG4gICAgaWYgKHNURiA9PT0gXCJ3ZWJraXRUcmFuc2Zvcm1cIikgc1ZhbHVlID0gXCItd2Via2l0LXRyYW5zZm9ybVwiO2Vsc2UgaWYgKHNURiA9PT0gXCJ0cmFuc2Zvcm1cIikgc1ZhbHVlID0gXCJ0cmFuc2Zvcm1cIjtlbHNlIHt9XG5cbiAgICBlbFRhcmdldC5zdHlsZVtzVFNdID0gc1ZhbHVlICsgXCIgXCIgKyBuRHVyYXRpb24gKyBcInNcIjtcbiAgICBlbFRhcmdldC5zdHlsZVtzVEZdID0gJ3RyYW5zbGF0ZTNkKCcgKyAoblByZXZpb3VzVHJhbnNsYXRlWCArIG5EaXN0YW5jZSkgKyAncHgsIDAsIDApJztcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5ydW5BdXRvQW5pbWF0aW9uID0gZnVuY3Rpb24gcnVuQXV0b0FuaW1hdGlvbihzRGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuICAgIHZhciBuQ3VyID0gdGhpcy5nZXRDdXJyZW50Vmlld051bWJlcigpO1xuICAgIHZhciBuV2lkdGggPSB0aGlzLm5Td2lwZVdpZHRoO1xuXG4gICAgaWYgKHNEaXJlY3Rpb24gPT09IFwidG9SaWdodFwiKSB7XG4gICAgICBuV2lkdGggKj0gLTE7XG4gICAgICBuQ3VyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5DdXItLTtcbiAgICB9XG5cbiAgICBuQ3VyID0gdGhpcy5yZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcihuQ3VyKTtcblxuICAgIHRoaXMucnVuU3dpcGVBY3Rpb24odGhpcy5vcHRpb24ubkR1cmF0aW9uLCBuQ3VyLCBuV2lkdGgpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJlY2FsY3VsYXRlV2lkdGggPSBmdW5jdGlvbiByZWNhbGN1bGF0ZVdpZHRoKCkge1xuICAgIHZhciByZXNpemVydW5uZXIgPSBmYWxzZTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBpZiAocmVzaXplcnVubmVyKSByZXR1cm47XG4gICAgICByZXNpemVydW5uZXIgPSB0cnVlO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM2Lm5Td2lwZVdpZHRoID0gX2N1LmdldFdpZHRoKF90aGlzNi5lbFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIHJlc2l6ZXJ1bm5lciA9IGZhbHNlO1xuICAgICAgfSwgMTAwKTtcbiAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gU3dlZXRTd2lwZTtcbn0oQ29tbW9uQ29tcG9uZW50KTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0ge1xuICBTd2VldFN3aXBlOiBTd2VldFN3aXBlLFxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW46IFN3aXBlTmF2aWdhdGlvblBsdWdpbixcbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW46IFN3aXBlU3RlcE1vdmVyUGx1Z2luXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpcGVfbWVyZ2VfZXM1LmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9zd2lwZV9tZXJnZV9lczUuanMiLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgcmF3SGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiaW1wb3J0ICogYXMgU3dpcGUgZnJvbSAnLi9saWIvc3dpcGVfbWVyZ2VfZXM1LmpzJztcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbi5qcyc7XG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5cbi8vaW1wb3J0IF8gZnJvbSAnLi9saWIvXy5qcyc7XG5cbmZ1bmN0aW9uIGluaXRTd2lwZU1vZHVsZSgpIHtcblx0Y29uc3QgZWxTd2FwV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlzdWFsX2ltZ1wiKTtcblx0Y29uc3Qgb015c3dpcGUgPSBuZXcgU3dpcGUuU3dlZXRTd2lwZSggZWxTd2FwV3JhcCwge1xuXHRcdCdiQ2lyY3VsYXInIDogdHJ1ZSxcbiAgICAnbkR1cmF0aW9uJyA6IDMwMCwgIC8vZGVmYXVsdCAxMDBcbiAgICAnbkJhY2tXaWR0aCcgOiA2MCwgIC8vZGVmYXVsdCA2MFxuICAgICduU2lkZVdpZHRoJyA6IDIwLCAgLy9kZWZhdWx0IDBcbiAgICAnbkRlY2lzaW9uU2xvcGUnIDogMC44LCAvL2RlZmF1bHQgMC44XG4gICAgJ25Gb3JjZWRTd2lwZVRpbWUnIDogMTAwLCAvL2RlZmF1bHQgMFxuICAgICdiU2V0dGluZ1NjcmVlbkhlaWdodCc6IHRydWUsXG4gICAgJ2JNb3VzZUV2ZW50U3VwcG9ydCcgOiB0cnVlXG4gIH0pO1xuXG5cdG9NeXN3aXBlLnJlZ2lzdGVyVXNlck1ldGhvZCh7XG5cdFx0J0ZOX0JFRk9SRV9TV0lQRSc6IGZ1bmN0aW9uKG4pe30sXG5cdFx0J0ZOX0FGVEVSX1NXSVBFJzogZnVuY3Rpb24obil7fSxcblx0XHQnRk5fQ09NUE9ORU5UX0RJRF9MT0FEJyA6IGZ1bmN0aW9uKCl7fVxuXHR9KTtcblxuXHRvTXlzd2lwZS5vblBsdWdpbnMoW1xuXHR7XG5cdFx0J25hbWUnICAgICAgOiAnU3dpcGVTdGVwTW92ZXJQbHVnaW4nLFxuXHRcdCdvcHRpb24nICAgIDoge1xuXHRcdFx0J3ByZXZCdXR0b24nIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fcHJlX2VcIiksXG5cdFx0XHQnbmV4dEJ1dHRvbicgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9ueHRfZVwiKSxcblx0XHRcdCduRHVyYXRpb24nOiAyMDBcblx0XHR9LFxuXHRcdCd1c2VyTWV0aG9kJyA6IHt9LFxuXHRcdCdvYmonIDogU3dpcGUuU3dpcGVTdGVwTW92ZXJQbHVnaW5cblx0fV0pO1xuXG5cdCEoZnVuY3Rpb24gbW92ZVBhbmVsKCkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdG9NeXN3aXBlLnJ1bkF1dG9BbmltYXRpb24oXCJ0b1JpZ2h0XCIpO1xuXHRcdFx0bW92ZVBhbmVsKCk7XG5cdFx0fSwgMjAwMCk7XG5cdH0pKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRUYWJNb2R1bGUoKSB7XG5cdGNvbnN0IGl0ZW1LaW5kcyA9IF9nZXRJdGVtS2luZHMoKTtcblx0Y29uc3QgZWxUYWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVudF90YWJfbHN0XCIpO1xuXHRjb25zdCBlbE1vcmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blwiKTtcblx0bGV0IHRhYk1lbnVPYmogPSBudWxsO1xuXG5cdC8vdGFiIOy7tO2PrOuEjO2KuCDrj5nsnpFcblx0LyouIFxuXHRcdOydtOuFgOyEneydgCBodG1s7YyM7J287J2EIOq4sOykgOycvOuhnCDrlJTroInthqDrpqzrpbwg7LC+64qU64ukLiBcblx0XHTrlLDrnbzshJwgaHRtbOqzvCDqsJnsnYAg65SU66CJ7Yag66as7JeQIOuyiOuTpOychOy5mOulvCDshKTsoJXtlbTrkZDsl4jri6QuICh3ZWJwYWNrLmNvbW9uLmpzIG91dHB1dC1jaHVua0ZpbGVuYW1l7ZWt66qp6rCZ7J20IOywuOqzoClcblx0Ki9cblx0ZnVuY3Rpb24gaW5pdFRhYkNvbXBvbmVudCgpIHtcblx0XHRyZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWFpbl9UYWJtZW51XCIgKi8gJy4vbWFpbl9UYWJtZW51LmpzJykudGhlbih0YWJPYmogPT4ge1xuXHRcdFx0cmV0dXJuIHRhYk9iai5kZWZhdWx0O1xuXHRcdH0pXG5cdH1cblxuXHQvKiBBRlRFUl9DQUxMQkFDSyBMSVNUICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0Ly8gZnVuY3Rpb24gYWZ0ZXJUYWJDb250ZW50Q2hhbmdlKCkge1xuXHQvLyBcdGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVudF9sc3RfdHh0IHNwYW4ucGlua1wiKTtcblx0Ly8gXHRjb25zdCBsaUxpc3RMZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxzdF9ldmVudF9ib3ggbGlcIikubGVuZ3RoO1xuXHQvLyBcdGVsLmlubmVyVGV4dCA9IGxpTGlzdExlbiArIFwi6rCcXCI7XG5cdC8vIH1cblxuXG5cdGZ1bmN0aW9uIGRlY2lkZUJ0blZpc2libGUoKSB7XG5cdFx0Y29uc3QgZWxidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vcmUgLmJ0blwiKTtcblx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxzdF9ldmVudF9ib3ggbGlcIikubGVuZ3RoID4gNCkge1xuXHRcdFx0ZWxidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGFmdGVyVGFiQ29udGVudENoYW5nZSgpIHtcblx0XHRkZWNpZGVCdG5WaXNpYmxlKCk7XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0Ly9UYWJNZW51IHJlZ2lzdCBldmVudCBcblx0ZWxUYWJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoe3RhcmdldH0pID0+IHtcblx0XHRpZih0YXJnZXQubm9kZU5hbWUgPT09IFwiVUxcIikgcmV0dXJuO1xuXHRcdGNvbnN0IGxpc3RJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuaXRlbVwiKTtcblx0XHRjb25zdCBsaXN0SWR4ID0gbGlzdEl0ZW0uZGF0YXNldC5jYXRlZ29yeTtcblx0XHRjb25zdCBhID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hbmNob3JcIik7XG5cblx0XHRlbFRhYk1lbnUucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHRhLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cblx0XHRpbml0VGFiQ29tcG9uZW50KCkudGhlbigodGFiQ2xhc3MpID0+IHtcblx0XHRcdHRhYk1lbnVPYmogPSB0YWJNZW51T2JqIHx8IG5ldyB0YWJDbGFzcyhlbFRhYk1lbnUsIGl0ZW1LaW5kcywgYWZ0ZXJUYWJDb250ZW50Q2hhbmdlKTtcblx0XHRcdHRhYk1lbnVPYmoucnVuKE51bWJlcihsaXN0SWR4KSwgZmFsc2UpO1xuXHRcdFx0Ly8gLy9tb3JlIGJ1dHRvbiDrs7Tsl6zspITsp4Ag6rKw7KCVXG5cdFx0XHQvLyB0YWJNZW51T2JqLmRlY2lkZUJ0blZpc2libGUoKTtcblx0XHR9KTtcblxuXHR9KTtcblxuXHQvL01vcmVCdG4gcmVnaXN0IGV2ZW50XG5cdGVsTW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXZlbnRfdGFiX2xzdCAuYWN0aXZlXCIpLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jYXRlZ29yeTtcblxuXHRcdGluaXRUYWJDb21wb25lbnQoKS50aGVuKCh0YWJDbGFzcykgPT4ge1xuXHRcdFx0dGFiTWVudU9iaiA9IHRhYk1lbnVPYmogfHwgbmV3IHRhYkNsYXNzKGVsVGFiTWVudSwgaXRlbUtpbmRzLCBhZnRlclRhYkNvbnRlbnRDaGFuZ2UpO1xuXHRcdFx0dGFiTWVudU9iai5ydW4oTnVtYmVyKGN1cnJlbnRJbmRleCksIHRydWUpO1xuXHRcdH0pO1xuXHR9LGZhbHNlKTtcblxuXHRmdW5jdGlvbiBfZ2V0SXRlbUtpbmRzKCkge1xuXHRcdGNvbnN0IHRlc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ldmVudF90YWJfbHN0IGxpIGEgc3BhblwiKTtcblx0XHRjb25zdCBpdGVtS2luZHMgPSBBcnJheS5mcm9tKHRlc3RMaXN0KS5tYXAoKHYpPT4ge1xuXHRcdFx0cmV0dXJuIHYuaW5uZXJUZXh0O1xuXHRcdH0pO1xuXHRcdHJldHVybiBpdGVtS2luZHM7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hlY2tMb2dpbkZyb21TdG9yYWdlKCkge1xuXHRjb25zdCBlbWFpbCA9IGNvbW1vbi5nZXRFbWFpbCgpO1xuXHRjb25zdCBlbFZpZXdSZXNlcnZhdGlvbiAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXdSZXNlcnZhdGlvblwiKTtcblx0aWYoZW1haWwgIT09IG51bGwpIGVsVmlld1Jlc2VydmF0aW9uLmlubmVyVGV4dCA9IGVtYWlsO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBldnQgPT4ge1xuXHRpbml0U3dpcGVNb2R1bGUoKTtcblx0aW5pdFRhYk1vZHVsZSgpO1xuXHRjaGVja0xvZ2luRnJvbVN0b3JhZ2UoKTtcbn0pO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
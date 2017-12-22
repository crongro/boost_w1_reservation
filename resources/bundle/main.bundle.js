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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _swipe_merge_es = __webpack_require__(0);

var Swipe = _interopRequireWildcard(_swipe_merge_es);

__webpack_require__(1);

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
		return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 5)).then(function (tabObj) {
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

document.addEventListener("DOMContentLoaded", function (evt) {
	initSwipeModule();
	initTabModule();
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTg4NDQxZGQ4MmQ0ZDMyOWZhOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zd2lwZV9tZXJnZV9lczUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJhcnIyIiwibGVuZ3RoIiwiZnJvbSIsIl9kZWZhdWx0cyIsImRlZmF1bHRzIiwia2V5cyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJrZXkiLCJ2YWx1ZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsInVuZGVmaW5lZCIsImRlZmluZVByb3BlcnR5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiY2FsbCIsIlJlZmVyZW5jZUVycm9yIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiVHlwZUVycm9yIiwiY3JlYXRlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwic2V0UHJvdG90eXBlT2YiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2N1IiwiZ2V0Rm5OYW1lIiwiZm4iLCJzTmFtZSIsIm5hbWUiLCJ0b1N0cmluZyIsIm1hdGNoIiwic2V0VHJhbnNsYXRlM2RYIiwiZWxlIiwiblZhbHVlIiwic1RGIiwiZ2V0Q1NTTmFtZSIsInN0eWxlIiwic2V0VHJhbnNsYXRlM2RYUGVyY2VudCIsImdldFdpZHRoIiwibldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImh0Q2FjaGVEYXRhIiwiX2h0TmFtZVNldCIsImFOYW1lTGlzdCIsImlzRXhpc3QiLCJsZW4iLCJkb2N1bWVudCIsImJvZHkiLCJnZXRDaGlsZE9yZGVyIiwiZWxDaGlsZCIsImVsUGFyZW50IiwicGFyZW50Tm9kZSIsIm5JbmRleCIsImluZGV4T2YiLCJjaGlsZHJlbiIsImdldFRyYW5zbGF0ZTNkWCIsInNQcmVDc3MiLCJuUHJlWCIsInJlcGxhY2UiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImdldFRyYW5zbGF0ZTNkWFBlcmNlbnQiLCJnZXRDU1NUcmFuc2l0aW9uRW5kIiwic1RTIiwic1RTRSIsInNldER5bmFtaWNIZWlnaHQiLCJuTmV4dE51bWJlciIsInRhcmdldCIsImJDaXJjdWxhciIsImVsQ3VycmVudCIsIm5IZWlnaHQiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJoZWlnaHQiLCJzZXRDU1MiLCJlbCIsInNob3dMYXllciIsImRpc3BsYXkiLCJjbG9zZUxheWVyIiwiZGF0YSIsIl9hIiwiaXNGdW5jdGlvbiIsIkNvbW1vbkNvbXBvbmVudCIsImVsVGFyZ2V0IiwiaHRPcHRpb24iLCJpbml0Iiwic2V0SW5pdFZhbHVlIiwic2V0T3B0aW9uIiwiX2h0RGVmYXVsdE9wdGlvbiIsIm9wdGlvbiIsImluaXRWYWx1ZSIsInJlZ2lzdGVyRXZlbnRzIiwiREVGQVVMVF9DT1JFX0VWRU5UIiwiX2QiLCJDT01QT05FTlRfQ09ORklHIiwiYk1haW5Db21wb25lbnQiLCJQTFVHSU5TIiwiREVGQVVMVF9PUFRJT04iLCJhTXlQbHVnaW5OYW1lIiwiaHREZWZhdWx0Rm4iLCJnZXREZWZhdWx0Q2FsbGJhY2tMaXN0IiwiY29uY2F0IiwiREVGQVVMVF9DT01QT05FTlRfRVZFTlQiLCJodERlZmF1bHRQbHVnaW5GbiIsIkRFRkFVTFRfUExVR0lOX0VWRU5UIiwiaHRVc2VyRm4iLCJodFBsdWdpbkZuIiwicmVnaXN0ZXJVc2VyTWV0aG9kIiwiaHRGbiIsInJlZ2lzdGVyUGx1Z2luTWV0aG9kIiwiYXBwZW5kUGx1Z2luTWV0aG9kIiwib25QbHVnaW5zIiwiYVBsdWdpbkxpc3QiLCJpbml0UGx1Z2lucyIsImNvbXBvbmVudERpZExvYWRlZCIsImh0VmFsdWUiLCJodERlZmF1bHRWYWx1ZSIsImh0U3RvcmFnZSIsIl90aGlzIiwiZm9yRWFjaCIsInYiLCJwdXNoIiwiYUZuIiwiX3RoaXMyIiwib1BhcmVudCIsIm9QbHVnaW4iLCJ1c2VyTWV0aG9kIiwiX2luamVjdFBhcmVudE9iamVjdCIsInJ1bkN1c3RvbUZuIiwidHlwZSIsImV2ZW50bmFtZSIsImFyZ3MiLCJzbGljZSIsImFyZ3VtZW50cyIsInJldHVyblZhbHVlIiwiX2h0VXNlckZuIiwiYXBwbHkiLCJvQ2hpbGQiLCJkb2NraW5nUGx1Z2luTWV0aG9kIiwiU3dpcGVOYXZpZ2F0aW9uUGx1Z2luIiwiX0NvbW1vbkNvbXBvbmVudCIsIlNFTEVDVE9SIiwiZWxQbHVnaW5UYXJnZXQiLCJlbE5hdmlXcmFwIiwib1BhcmVudEluc3RhbmNlIiwibW92ZVN3aXBlQXJlYSIsImxpcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aGF0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwibW92ZXBhcmVudFN3aXBlUGFuZWwiLCJiTW91c2VFdmVudFN1cHBvcnQiLCJfaSIsIm5Td2lwZVdpZHRoIiwibkNoaWxkT3JkZXIiLCJuRGlmZiIsImdldEN1cnJlbnRWaWV3TnVtYmVyIiwibk1vdmVWYWx1ZSIsInJ1blN3aXBlQWN0aW9uIiwibkR1cmF0aW9uIiwiaGlnaGxpZ2h0U2VsZWN0ZWRMSSIsIm5TZWxlY3RlZENvdW50IiwiX2xpIiwicXVlcnlTZWxlY3RvciIsInNlbGV0ZWRDbGFzc05hbWUiLCJfY3VyQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiYmluZCIsIkZOX0FGVEVSX1NXSVBFIiwiU3dpcGVTdGVwTW92ZXJQbHVnaW4iLCJfQ29tbW9uQ29tcG9uZW50MiIsImVsUHJldkJ0biIsInByZXZCdXR0b24iLCJlbE5leHRCdG4iLCJuZXh0QnV0dG9uIiwiX3RoaXMzIiwiZXZ0IiwiaGFuZGxlckNsaWNrQnV0dG9uIiwic0RpcmVjdGlvbiIsImJBbmltYXRpb25pbmciLCJuQ3VyIiwiblN3aXBlRWxlbWVudENvdW50IiwicmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIiLCJzZXREaXNwbGF5T2ZCdXR0b24iLCJuQ3VycmVudFBhbmVsIiwibk1heFBhbmVsIiwiU3dlZXRTd2lwZSIsIl9Db21tb25Db21wb25lbnQzIiwiYlNldHRpbmdTY3JlZW5IZWlnaHQiLCJjaGlsZEVsZW1lbnRDb3VudCIsIm5NYXhTd2lwZVJhbmdlIiwibk1pblN3aXBlUmFuZ2UiLCJuTWF4VmFsdWUiLCJuU2lkZVdpZHRoIiwibk1pblZhbHVlIiwicmVjYWxjdWxhdGVXaWR0aCIsIl90aGlzNCIsImJUb3VjaEV2ZW50U3VwcG9ydCIsImhhbmRsZXJUb3VjaFN0YXJ0IiwiaGFuZGxlclRvdWNoTW92ZSIsImhhbmRsZXJUb3VjaEVuZCIsInJlZ2lzdGVyVHJhbnNpdGlvbkVuZCIsInN0b3BQcm9wYWdhdGlvbiIsImJTd2lwZSIsImJGaXJzdFRvdWNoTW92ZSIsImJNb3VzZUV2ZW50Iiwic3Vic3RyIiwicGFnZVgiLCJwYWdlWSIsImNoYW5nZWRUb3VjaGVzIiwiblN0YXJ0UG9zWCIsIk1hdGgiLCJmbG9vciIsIm5TdGFydFBvc1kiLCJuU3RhcnRUcmFuc2xhdGVYIiwiblRvdWNoU3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsImh0Q3VycmVudEV2dCIsIm5Nb3ZlUG9zWCIsIm5Nb3ZlUG9zWSIsIm5BbmdsZURpZmYiLCJhYnMiLCJuRGVjaXNpb25TbG9wZSIsIm5QcmVNb3ZlWCIsInByZXZlbnREZWZhdWx0Iiwibk1vdmVEaWZmIiwiblByZXZpb3VzWCIsImRyYWdBcmVhIiwiblByZU1vdmVZIiwiYk91dFJhbmdlUmlnaHQiLCJiT3V0UmFuZ2VMZWZ0IiwibldpZHRoRm9yQW5pbWF0aW9uIiwiblRvdWNoRW5kVGltZSIsIm5EaWZmVG91Y2hUaW1lIiwibkxhc3RUcmFuc2xhdGVYIiwibkRpZmZUcmFuc2xhdGVYIiwiYlN3aXBlV2lkdGgiLCJiU3dpcGVUaW1lIiwiYlN3aXBlR28iLCJuQmFja1dpZHRoIiwibkZvcmNlZFN3aXBlVGltZSIsIl9nZXROZXh0Vmlld051bWJlciIsInJvdW5kIiwic2V0TmV4dE51bWJlciIsInJ1blRyYW5zaXRpb24iLCJfcmVzdG9yZVRyYW5zZm9ybVhQZXJjZW50IiwiblBhbmVsSW5kZXgiLCJuUGFuZWxDb3VudCIsIm5QYW5lbFdpZHRoIiwiX3RoaXM1IiwiblBvcyIsIm5OZXdWYWx1ZSIsIm5EaXN0YW5jZSIsIm5QcmV2aW91c1RyYW5zbGF0ZVgiLCJzVmFsdWUiLCJydW5BdXRvQW5pbWF0aW9uIiwicmVzaXplcnVubmVyIiwid2luZG93IiwiX3RoaXM2Iiwic2V0VGltZW91dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJTd2lwZSIsImluaXRTd2lwZU1vZHVsZSIsImVsU3dhcFdyYXAiLCJvTXlzd2lwZSIsIm4iLCJtb3ZlUGFuZWwiLCJpbml0VGFiTW9kdWxlIiwiaXRlbUtpbmRzIiwiX2dldEl0ZW1LaW5kcyIsImVsVGFiTWVudSIsImVsTW9yZUJ0biIsInRhYk1lbnVPYmoiLCJpbml0VGFiQ29tcG9uZW50IiwidGhlbiIsInRhYk9iaiIsImRlZmF1bHQiLCJkZWNpZGVCdG5WaXNpYmxlIiwiZWxidG4iLCJhZnRlclRhYkNvbnRlbnRDaGFuZ2UiLCJub2RlTmFtZSIsImxpc3RJdGVtIiwiY2xvc2VzdCIsImxpc3RJZHgiLCJkYXRhc2V0IiwiY2F0ZWdvcnkiLCJhIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidGFiQ2xhc3MiLCJydW4iLCJOdW1iZXIiLCJjdXJyZW50SW5kZXgiLCJwYXJlbnRFbGVtZW50IiwidGVzdExpc3QiLCJtYXAiLCJpbm5lclRleHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHVCQUF1QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7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QkFBbkMsQ0FBM0I7QUFDQVAsY0FBV21CLEdBQVgsQ0FBZUMsT0FBT0MsWUFBUCxDQUFmLEVBQXFDLElBQXJDO0FBQ0EsR0FIRDtBQUlBLEVBUEQsRUFPRSxLQVBGOztBQVNBLFVBQVN4QixhQUFULEdBQXlCO0FBQ3hCLE1BQU0wQixXQUFXM1AsU0FBU29HLGdCQUFULENBQTBCLDBCQUExQixDQUFqQjtBQUNBLE1BQU00SCxZQUFZeFIsTUFBTUssSUFBTixDQUFXOFMsUUFBWCxFQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ25MLENBQUQsRUFBTTtBQUNoRCxVQUFPQSxFQUFFb0wsU0FBVDtBQUNBLEdBRmlCLENBQWxCO0FBR0EsU0FBTzdCLFNBQVA7QUFDQTtBQUNEOztBQUVEaE8sU0FBU3NHLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxlQUFPO0FBQ3BEb0g7QUFDQUs7QUFDQSxDQUhELEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcIjBcIjpcIm1haW5fVGFibWVudVwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5idW5kbGUuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTg4NDQxZGQ4MmQ0ZDMyOWZhOGIiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07dmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTtpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfXJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9cmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yoc3VwZXJDbGFzcykpKTtcbiAgfXN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7aWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG52YXIgX2N1ID0ge1xuICBnZXRGbk5hbWU6IGZ1bmN0aW9uIGdldEZuTmFtZShmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuICAgIHZhciBzTmFtZSA9IGZuLm5hbWUgPyBmbi5uYW1lIDogZm4udG9TdHJpbmcoKS5tYXRjaCgvZnVuY3Rpb25cXHMrKFteKFxcKHxcXHMpXSspLylbMV07XG4gICAgcmV0dXJuIHNOYW1lO1xuICB9LFxuICBzZXRUcmFuc2xhdGUzZFg6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZTNkWChlbGUsIG5WYWx1ZSkge1xuICAgIHZhciBzVEYgPSB0aGlzLmdldENTU05hbWUoJ3RyYW5zZm9ybScpO1xuICAgIGVsZS5zdHlsZVtzVEZdID0gJ3RyYW5zbGF0ZTNkKCcgKyBuVmFsdWUgKyAncHgsIDAsIDApJztcbiAgfSxcbiAgc2V0VHJhbnNsYXRlM2RYUGVyY2VudDogZnVuY3Rpb24gc2V0VHJhbnNsYXRlM2RYUGVyY2VudChlbGUsIG5WYWx1ZSkge1xuICAgIHZhciBzVEYgPSB0aGlzLmdldENTU05hbWUoJ3RyYW5zZm9ybScpO1xuICAgIGVsZS5zdHlsZVtzVEZdID0gJ3RyYW5zbGF0ZTNkKCcgKyBuVmFsdWUgKyAnJSwgMCwgMCknO1xuICB9LFxuICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoZWxlKSB7XG4gICAgdmFyIG5XaWR0aCA9IDA7XG5cbiAgICBpZiAoZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSB7XG4gICAgICBuV2lkdGggPSBlbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5XaWR0aCA9IGVsZS5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIG5XaWR0aDtcbiAgfSxcbiAgZ2V0Q1NTTmFtZTogZnVuY3Rpb24gZ2V0Q1NTTmFtZShzTmFtZSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5odENhY2hlRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikgdGhpcy5odENhY2hlRGF0YSA9IHt9O1xuXG4gICAgaWYgKHRoaXMuaHRDYWNoZURhdGFbc05hbWVdKSByZXR1cm4gdGhpcy5odENhY2hlRGF0YVtzTmFtZV07XG5cbiAgICB2YXIgX2h0TmFtZVNldCA9IHtcbiAgICAgICd0cmFuc2l0aW9uJzogWyd3ZWJraXRUcmFuc2l0aW9uJywgJ3RyYW5zaXRpb24nXSxcbiAgICAgICd0cmFuc2Zvcm0nOiBbJ3dlYmtpdFRyYW5zZm9ybScsICd0cmFuc2Zvcm0nXVxuICAgIH07XG5cbiAgICB2YXIgYU5hbWVMaXN0ID0gX2h0TmFtZVNldFtzTmFtZV07XG5cbiAgICBpZiAoIXRoaXMuaXNFeGlzdChhTmFtZUxpc3QpKSByZXR1cm4gbnVsbDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhTmFtZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVthTmFtZUxpc3RbaV1dID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmh0Q2FjaGVEYXRhW3NOYW1lXSA9IGFOYW1lTGlzdFtpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRDYWNoZURhdGFbc05hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0Q2hpbGRPcmRlcjogZnVuY3Rpb24gZ2V0Q2hpbGRPcmRlcihlbENoaWxkKSB7XG4gICAgdmFyIGVsUGFyZW50ID0gZWxDaGlsZC5wYXJlbnROb2RlO1xuICAgIHZhciBuSW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGVsUGFyZW50LmNoaWxkcmVuLCBlbENoaWxkKTtcbiAgICByZXR1cm4gbkluZGV4O1xuICB9LFxuICBnZXRUcmFuc2xhdGUzZFg6IGZ1bmN0aW9uIGdldFRyYW5zbGF0ZTNkWChlbGUpIHtcbiAgICB2YXIgc1RGID0gdGhpcy5nZXRDU1NOYW1lKFwidHJhbnNmb3JtXCIpO1xuICAgIHZhciBzUHJlQ3NzID0gZWxlLnN0eWxlW3NURl07XG4gICAgdmFyIG5QcmVYID0gMDtcblxuICAgIGlmIChzUHJlQ3NzLmluZGV4T2YoXCIlXCIpID09PSAtMSkge1xuICAgICAgblByZVggPSArc1ByZUNzcy5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKCgtKlxcZCsoPzpcXC5cXGQrKSopKHB4KSpcXCwuK1xcKS9nLCBcIiQxXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuUHJlWCA9ICtzUHJlQ3NzLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoKC0qXFxkKyg/OlxcLlxcZCspKikoJSkqXFwsLitcXCkvZywgXCIkMVwiKTtcbiAgICAgIG5QcmVYID0gblByZVggLyAxMDAgKiB0aGlzLmdldFdpZHRoKGVsZS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5QcmVYO1xuICB9LFxuICBnZXRUcmFuc2xhdGUzZFhQZXJjZW50OiBmdW5jdGlvbiBnZXRUcmFuc2xhdGUzZFhQZXJjZW50KGVsZSkge1xuICAgIHZhciBzVEYgPSB0aGlzLmdldENTU05hbWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgdmFyIHNQcmVDc3MgPSBlbGUuc3R5bGVbc1RGXTtcbiAgICB2YXIgblByZVggPSArc1ByZUNzcy5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKCgtKlxcZCsoPzpcXC5cXGQrKSopKCUpKlxcLC4rXFwpL2csIFwiJDFcIik7XG4gICAgcmV0dXJuIG5QcmVYO1xuICB9LFxuICBnZXRDU1NUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiBnZXRDU1NUcmFuc2l0aW9uRW5kKCkge1xuICAgIHZhciBzVFMgPSB0aGlzLmdldENTU05hbWUoJ3RyYW5zaXRpb24nKTtcbiAgICB2YXIgc1RTRSA9IHNUUyA9PT0gXCJ3ZWJraXRUcmFuc2l0aW9uXCIgPyBcIndlYmtpdFRyYW5zaXRpb25FbmRcIiA6IFwidHJhbnNpdGlvbmVuZFwiO1xuICAgIHJldHVybiBzVFNFO1xuICB9LFxuICBzZXREeW5hbWljSGVpZ2h0OiBmdW5jdGlvbiBzZXREeW5hbWljSGVpZ2h0KG5OZXh0TnVtYmVyLCB0YXJnZXQsIGJDaXJjdWxhcikge1xuICAgIGlmIChiQ2lyY3VsYXIpIHtcbiAgICAgIG5OZXh0TnVtYmVyKys7XG4gICAgfVxuICAgIHZhciBlbEN1cnJlbnQgPSB0YXJnZXQuY2hpbGRyZW5bbk5leHROdW1iZXJdO1xuICAgIHZhciBuSGVpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShlbEN1cnJlbnQpLmhlaWdodCk7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IG5IZWlnaHQgKyBcInB4XCI7XG4gIH0sXG4gIHNldENTUzogZnVuY3Rpb24gc2V0Q1NTKGVsLCBzdHlsZSwgdmFsdWUpIHtcbiAgICBlbC5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgfSxcbiAgc2hvd0xheWVyOiBmdW5jdGlvbiBzaG93TGF5ZXIoZWwpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9LFxuICBjbG9zZUxheWVyOiBmdW5jdGlvbiBjbG9zZUxheWVyKGVsKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9LFxuXG5cbiAgLy9jaGVjayBudWxsIG9yIHVuZGVmaW5lZFxuICBpc0V4aXN0OiBmdW5jdGlvbiBpc0V4aXN0KGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YSAhPSBudWxsO1xuICB9LFxuICBpc0FycmF5OiBmdW5jdGlvbiBpc0FycmF5KF9hKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF9hKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoX2EpO1xuICB9LFxuICBpc0Z1bmN0aW9uOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cbn07XG4vKlxuKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiogQ29weXJpZ2h0IChjKSAyMDE2IFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gKlxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOiAqXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4qIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLiAqXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiogVEhFIFNPRlRXQVJFLiAqL1xuXG4vKiFcbiogXFxDb21tb25Db21vbmVudC5qcyB2MC4yLjFcbiogXFxjb3JlIGNvbXBvbmVudCBzb3VyY2UgZm9yIENvbXBvbmVudHMgVUkgLlxuKiBcXGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4qIFxcbGljZW5zZSBUaGlzIHByb2plY3QgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKiBcXGNvbnRyaWJ1dG9yIEppc3UgWW91biAoamlzdS55b3VuQGdtYWlsLmNvbSlcbiogXFx3YXJuaW5nIGRvbnQndXNlIHRoaXMgc291cmNlIGluIG90aGVyIGxpYnJhcnkgc291cmNlLlxuKi9cblxudmFyIENvbW1vbkNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tbW9uQ29tcG9uZW50KGVsVGFyZ2V0LCBodE9wdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21tb25Db21wb25lbnQpO1xuXG4gICAgdGhpcy5odE9wdGlvbiA9IGh0T3B0aW9uO1xuICAgIHRoaXMuaHRDYWNoZURhdGEgPSB7fTtcbiAgICB0aGlzLmVsVGFyZ2V0ID0gZWxUYXJnZXQ7XG4gICAgdGhpcy5pbml0KGh0T3B0aW9uKTtcbiAgfVxuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIGluaXQoaHRPcHRpb24pIHtcbiAgICB0aGlzLnNldEluaXRWYWx1ZSgpO1xuICAgIHRoaXMuc2V0T3B0aW9uKGh0T3B0aW9uLCB0aGlzLl9odERlZmF1bHRPcHRpb24sIHRoaXMub3B0aW9uKTtcbiAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnNldEluaXRWYWx1ZSA9IGZ1bmN0aW9uIHNldEluaXRWYWx1ZSgpIHtcbiAgICB2YXIgREVGQVVMVF9DT1JFX0VWRU5UID0gWydGTl9DT01QT05FTlRfRElEX0xPQUQnXTtcbiAgICB2YXIgX2QgPSB0aGlzLkNPTVBPTkVOVF9DT05GSUcoKTtcbiAgICB0aGlzLmJNYWluQ29tcG9uZW50ID0gISFfZC5QTFVHSU5TO1xuICAgIHRoaXMuX2h0RGVmYXVsdE9wdGlvbiA9IF9kLkRFRkFVTFRfT1BUSU9OO1xuICAgIHRoaXMuYU15UGx1Z2luTmFtZSA9IF9kLlBMVUdJTlM7XG4gICAgdGhpcy5odERlZmF1bHRGbiA9IHRoaXMuZ2V0RGVmYXVsdENhbGxiYWNrTGlzdChERUZBVUxUX0NPUkVfRVZFTlQuY29uY2F0KF9kLkRFRkFVTFRfQ09NUE9ORU5UX0VWRU5UKSk7XG5cbiAgICBpZiAodGhpcy5iTWFpbkNvbXBvbmVudCkge1xuICAgICAgdGhpcy5odERlZmF1bHRQbHVnaW5GbiA9IHRoaXMuZ2V0RGVmYXVsdENhbGxiYWNrTGlzdChERUZBVUxUX0NPUkVfRVZFTlQuY29uY2F0KF9kLkRFRkFVTFRfUExVR0lOX0VWRU5UKSk7XG4gICAgfVxuICAgIHRoaXMuaHRVc2VyRm4gPSB7fTtcbiAgICB0aGlzLmh0UGx1Z2luRm4gPSB7fTtcbiAgICB0aGlzLm9wdGlvbiA9IHt9O1xuICB9O1xuXG4gIC8vVE9ETy4gbW92ZSB0byBzdXBlciBDbGFzcy5cblxuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUucmVnaXN0ZXJVc2VyTWV0aG9kID0gZnVuY3Rpb24gcmVnaXN0ZXJVc2VyTWV0aG9kKGh0Rm4pIHtcbiAgICB0aGlzLnNldE9wdGlvbihodEZuLCB0aGlzLmh0RGVmYXVsdEZuLCB0aGlzLmh0VXNlckZuKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyUGx1Z2luTWV0aG9kID0gZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW5NZXRob2QoaHRGbikge1xuICAgIHRoaXMuYXBwZW5kUGx1Z2luTWV0aG9kKGh0Rm4sIHRoaXMuaHREZWZhdWx0UGx1Z2luRm4sIHRoaXMuaHRQbHVnaW5Gbik7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5vblBsdWdpbnMgPSBmdW5jdGlvbiBvblBsdWdpbnMoYVBsdWdpbkxpc3QpIHtcbiAgICB0aGlzLmluaXRQbHVnaW5zKHRoaXMuYU15UGx1Z2luTmFtZSwgYVBsdWdpbkxpc3QsIHRoaXMuZWxUYXJnZXQpO1xuICAgIHRoaXMuY29tcG9uZW50RGlkTG9hZGVkKCk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5zZXRPcHRpb24gPSBmdW5jdGlvbiBzZXRPcHRpb24oaHRWYWx1ZSwgaHREZWZhdWx0VmFsdWUsIGh0U3RvcmFnZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBPYmplY3Qua2V5cyhodERlZmF1bHRWYWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgaWYgKHR5cGVvZiBodFZhbHVlW3ZdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGh0U3RvcmFnZVt2XSA9IGh0RGVmYXVsdFZhbHVlW3ZdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChodFZhbHVlW3ZdKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgIGh0U3RvcmFnZVt2XSA9IGh0VmFsdWVbdl07XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGh0U3RvcmFnZVt2XSA9IHt9O1xuICAgICAgICBfdGhpcy5zZXRPcHRpb24uY2FsbChfdGhpcywgaHRWYWx1ZVt2XSwgaHREZWZhdWx0VmFsdWVbdl0sIGh0U3RvcmFnZVt2XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5hcHBlbmRQbHVnaW5NZXRob2QgPSBmdW5jdGlvbiBhcHBlbmRQbHVnaW5NZXRob2QoaHRWYWx1ZSwgaHREZWZhdWx0VmFsdWUsIGh0U3RvcmFnZSkge1xuICAgIE9iamVjdC5rZXlzKGh0RGVmYXVsdFZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaHRTdG9yYWdlW3ZdKSkgaHRTdG9yYWdlW3ZdID0gW107XG4gICAgICBpZiAodHlwZW9mIGh0VmFsdWVbdl0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaHRTdG9yYWdlW3ZdLnB1c2goaHREZWZhdWx0VmFsdWVbdl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRTdG9yYWdlW3ZdLnB1c2goaHRWYWx1ZVt2XSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmdldERlZmF1bHRDYWxsYmFja0xpc3QgPSBmdW5jdGlvbiBnZXREZWZhdWx0Q2FsbGJhY2tMaXN0KGFGbikge1xuICAgIHZhciBodEZuID0ge307XG4gICAgYUZuLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIGh0Rm5bdl0gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9KTtcbiAgICByZXR1cm4gaHRGbjtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmluaXRQbHVnaW5zID0gZnVuY3Rpb24gaW5pdFBsdWdpbnMoYU15UGx1Z2luTmFtZSwgYVBsdWdpbkxpc3QsIGVsVGFyZ2V0KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgb1BhcmVudCA9IHRoaXM7XG4gICAgYVBsdWdpbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgdmFyIHNOYW1lID0gdi5uYW1lO1xuICAgICAgdmFyIG9iaiA9IHYub2JqO1xuICAgICAgaWYgKGFNeVBsdWdpbk5hbWUuaW5kZXhPZihzTmFtZSkgPCAwKSByZXR1cm47XG4gICAgICAvL2xldCBvUGx1Z2luID0gbmV3IHdpbmRvd1t2Lm5hbWVdKGVsVGFyZ2V0LCB2Lm9wdGlvbik7XG4gICAgICB2YXIgb1BsdWdpbiA9IG5ldyBvYmooZWxUYXJnZXQsIHYub3B0aW9uKTtcbiAgICAgIG9QbHVnaW4ucmVnaXN0ZXJVc2VyTWV0aG9kKHYudXNlck1ldGhvZCk7XG4gICAgICBfdGhpczIuX2luamVjdFBhcmVudE9iamVjdChvUGFyZW50LCBvUGx1Z2luKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWRlZCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZExvYWRlZCgpIHtcbiAgICB0aGlzLnJ1bkN1c3RvbUZuKCdVU0VSJywgJ0ZOX0NPTVBPTkVOVF9ESURfTE9BRCcpO1xuICAgIHRoaXMucnVuQ3VzdG9tRm4oJ1BMVUdJTicsICdGTl9DT01QT05FTlRfRElEX0xPQUQnKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnJ1bkN1c3RvbUZuID0gZnVuY3Rpb24gcnVuQ3VzdG9tRm4odHlwZSwgZXZlbnRuYW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIHJldHVyblZhbHVlID0gdm9pZCAwO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwiVVNFUlwiOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKF90eXBlb2YodGhpcy5odFVzZXJGbikgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHRoaXMuaHRVc2VyRm5bZXZlbnRuYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgX2h0VXNlckZuO1xuXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IChfaHRVc2VyRm4gPSB0aGlzLmh0VXNlckZuKVtldmVudG5hbWVdLmFwcGx5KF9odFVzZXJGbiwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgXCJQTFVHSU5cIjpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChfdHlwZW9mKHRoaXMuaHRQbHVnaW5GbikgPT09IFwib2JqZWN0XCIgJiYgX3R5cGVvZih0aGlzLmh0UGx1Z2luRm5bZXZlbnRuYW1lXSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuaHRQbHVnaW5GbltldmVudG5hbWVdLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgIGZuLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge31cbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuX2luamVjdFBhcmVudE9iamVjdCA9IGZ1bmN0aW9uIF9pbmplY3RQYXJlbnRPYmplY3Qob1BhcmVudCwgb0NoaWxkKSB7XG4gICAgb0NoaWxkLmRvY2tpbmdQbHVnaW5NZXRob2Qob1BhcmVudCk7XG4gIH07XG5cbiAgcmV0dXJuIENvbW1vbkNvbXBvbmVudDtcbn0oKTtcblxuLypcbiogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4qIENvcHlyaWdodCAoYykgMjAxNiBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuICpcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4gKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qIFRIRSBTT0ZUV0FSRS4gKi9cblxuLyohXG4qIFxcU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLmpzIHYwLjFcbiogXFxjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFxuKiBcXGxpY2Vuc2UgVGhpcyBwcm9qZWN0IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiogXFxjb250cmlidXRvciBuaWdheW91biAobmlnYXlvdW5AZ21haWwuY29tKVxuKiBcXHdhcm5pbmcgZG9udCd1c2UgdGhpcyBzb3VyY2UgaW4gb3RoZXIgbGlicmFyeSBzb3VyY2UuXG4qL1xuXG52YXIgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luID0gZnVuY3Rpb24gKF9Db21tb25Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN3aXBlTmF2aWdhdGlvblBsdWdpbiwgX0NvbW1vbkNvbXBvbmVudCk7XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5DT01QT05FTlRfQ09ORklHID0gZnVuY3Rpb24gQ09NUE9ORU5UX0NPTkZJRygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgU0VMRUNUT1I6IHt9LFxuICAgICAgREVGQVVMVF9DT01QT05FTlRfRVZFTlQ6IFtdLFxuICAgICAgREVGQVVMVF9PUFRJT046IHtcbiAgICAgICAgJ3VzYWdlJzogZmFsc2UsXG4gICAgICAgICdlbE5hdmlXcmFwJzogbnVsbCwgLy9vd24gZWxlbWVudCgjaVNjcm9sbEFyZWEpXG4gICAgICAgICdzZWxldGVkQ2xhc3NOYW1lJzogJ3NlbGVjdGVkLXN3aXBlLWxpJyxcbiAgICAgICAgJ25EdXJhdGlvbic6IDIwMCxcbiAgICAgICAgJ2JNb3VzZUV2ZW50U3VwcG9ydCc6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBTd2lwZU5hdmlnYXRpb25QbHVnaW4oZWxUYXJnZXQsIGh0T3B0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3aXBlTmF2aWdhdGlvblBsdWdpbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbW1vbkNvbXBvbmVudC5jYWxsKHRoaXMsIGVsVGFyZ2V0LCBodE9wdGlvbikpO1xuICB9XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5pbml0VmFsdWUgPSBmdW5jdGlvbiBpbml0VmFsdWUoKSB7XG4gICAgdGhpcy5lbFBsdWdpblRhcmdldDtcbiAgICB0aGlzLmVsTmF2aVdyYXAgPSB0aGlzLm9wdGlvbi5lbE5hdmlXcmFwO1xuICAgIHRoaXMub1BhcmVudEluc3RhbmNlID0gbnVsbDtcbiAgfTtcblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdGhpcy5tb3ZlU3dpcGVBcmVhKCk7XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5tb3ZlU3dpcGVBcmVhID0gZnVuY3Rpb24gbW92ZVN3aXBlQXJlYSgpIHtcbiAgICB2YXIgbGlzID0gdGhpcy5vcHRpb24uZWxOYXZpV3JhcC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG5cbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc1tpXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHRoYXQubW92ZXBhcmVudFN3aXBlUGFuZWwodGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb24uYk1vdXNlRXZlbnRTdXBwb3J0KSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBsaXNbX2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICB0aGF0Lm1vdmVwYXJlbnRTd2lwZVBhbmVsKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5tb3ZlcGFyZW50U3dpcGVQYW5lbCA9IGZ1bmN0aW9uIG1vdmVwYXJlbnRTd2lwZVBhbmVsKGVsVGFyZ2V0KSB7XG4gICAgdmFyIG5XaWR0aCA9IHRoaXMub1BhcmVudEluc3RhbmNlLm5Td2lwZVdpZHRoO1xuICAgIHZhciBuQ2hpbGRPcmRlciA9IF9jdS5nZXRDaGlsZE9yZGVyKGVsVGFyZ2V0KTtcblxuICAgIHZhciBuRGlmZiA9IHRoaXMub1BhcmVudEluc3RhbmNlLmdldEN1cnJlbnRWaWV3TnVtYmVyKCkgLSBuQ2hpbGRPcmRlcjtcbiAgICB2YXIgbk1vdmVWYWx1ZSA9IG5EaWZmICogbldpZHRoO1xuXG4gICAgdmFyIG5OZXh0TnVtYmVyID0gbkNoaWxkT3JkZXI7XG5cbiAgICAvL2ZvciBubyBhbmltYXRpb24sIG5EdXJhdGlvbiBzZXQgemVyby5cbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZS5ydW5Td2lwZUFjdGlvbih0aGlzLm9wdGlvbi5uRHVyYXRpb24sIG5OZXh0TnVtYmVyKTtcblxuICAgIHRoaXMuaGlnaGxpZ2h0U2VsZWN0ZWRMSShuQ2hpbGRPcmRlcik7XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5oaWdobGlnaHRTZWxlY3RlZExJID0gZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0ZWRMSShuU2VsZWN0ZWRDb3VudCkge1xuICAgIG5TZWxlY3RlZENvdW50Kys7XG4gICAgLy9yZW1vdmUgbGVnYWN5IGNsYXNzXG4gICAgdmFyIF9saSA9IHRoaXMub3B0aW9uLmVsTmF2aVdyYXAucXVlcnlTZWxlY3RvcihcIi5cIiArIHRoaXMub3B0aW9uLnNlbGV0ZWRDbGFzc05hbWUpO1xuICAgIHZhciBfY3VyQ2xhc3NOYW1lID0gX2xpLmNsYXNzTmFtZTtcbiAgICBfbGkuY2xhc3NOYW1lID0gX2xpLmNsYXNzTmFtZS5yZXBsYWNlKF9jdXJDbGFzc05hbWUsIFwiXCIpO1xuXG4gICAgLy9hZGQgbmV3IGNsYXNzXG4gICAgdGhpcy5vcHRpb24uZWxOYXZpV3JhcC5xdWVyeVNlbGVjdG9yKFwibGk6bnRoLWNoaWxkKFwiICsgblNlbGVjdGVkQ291bnQgKyBcIilcIikuY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5vcHRpb24uc2VsZXRlZENsYXNzTmFtZTtcbiAgfTtcblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLmRvY2tpbmdQbHVnaW5NZXRob2QgPSBmdW5jdGlvbiBkb2NraW5nUGx1Z2luTWV0aG9kKG9QYXJlbnQpIHtcbiAgICBvUGFyZW50LnJlZ2lzdGVyUGx1Z2luTWV0aG9kKHtcbiAgICAgICdGTl9CRUZPUkVfU1dJUEUnOiB0aGlzLmhpZ2hsaWdodFNlbGVjdGVkTEkuYmluZCh0aGlzKSxcbiAgICAgICdGTl9BRlRFUl9TV0lQRSc6IGZ1bmN0aW9uIEZOX0FGVEVSX1NXSVBFKCkge31cbiAgICB9KTtcbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZSA9IG9QYXJlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIFN3aXBlTmF2aWdhdGlvblBsdWdpbjtcbn0oQ29tbW9uQ29tcG9uZW50KTtcblxuLypcbiogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4qIENvcHlyaWdodCAoYykgMjAxNiBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuICpcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4gKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qIFRIRSBTT0ZUV0FSRS4gKi9cblxuLyohXG4qIFxcU3dpcGVTdGVwTW92ZXJQbHVnaW4uanMgdjAuMVxuKiBcXGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4qIFxcbGljZW5zZSBUaGlzIHByb2plY3QgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKiBcXGNvbnRyaWJ1dG9yIG5pZ2F5b3VuIChuaWdheW91bkBnbWFpbC5jb20pXG4qIFxcd2FybmluZyBkb250J3VzZSB0aGlzIHNvdXJjZSBpbiBvdGhlciBsaWJyYXJ5IHNvdXJjZS5cbiovXG5cbnZhciBTd2lwZVN0ZXBNb3ZlclBsdWdpbiA9IGZ1bmN0aW9uIChfQ29tbW9uQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoU3dpcGVTdGVwTW92ZXJQbHVnaW4sIF9Db21tb25Db21wb25lbnQyKTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuQ09NUE9ORU5UX0NPTkZJRyA9IGZ1bmN0aW9uIENPTVBPTkVOVF9DT05GSUcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNFTEVDVE9SOiB7fSxcbiAgICAgIERFRkFVTFRfQ09NUE9ORU5UX0VWRU5UOiBbXSxcbiAgICAgIERFRkFVTFRfT1BUSU9OOiB7XG4gICAgICAgICdwcmV2QnV0dG9uJzogbnVsbCxcbiAgICAgICAgJ25leHRCdXR0b24nOiBudWxsLFxuICAgICAgICAnbkR1cmF0aW9uJzogMjAwXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBTd2lwZVN0ZXBNb3ZlclBsdWdpbihlbFRhcmdldCwgaHRPcHRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dpcGVTdGVwTW92ZXJQbHVnaW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21tb25Db21wb25lbnQyLmNhbGwodGhpcywgZWxUYXJnZXQsIGh0T3B0aW9uKSk7XG4gIH1cblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuaW5pdFZhbHVlID0gZnVuY3Rpb24gaW5pdFZhbHVlKCkge1xuICAgIHRoaXMuZWxQbHVnaW5UYXJnZXQ7XG4gICAgdGhpcy5lbFByZXZCdG4gPSB0aGlzLm9wdGlvbi5wcmV2QnV0dG9uO1xuICAgIHRoaXMuZWxOZXh0QnRuID0gdGhpcy5vcHRpb24ubmV4dEJ1dHRvbjtcbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZSA9IG51bGw7XG4gIH07XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLmVsUHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgX3RoaXMzLmhhbmRsZXJDbGlja0J1dHRvbihldnQsIFwidG9MZWZ0XCIpO1xuICAgIH0pO1xuICAgIHRoaXMuZWxOZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBfdGhpczMuaGFuZGxlckNsaWNrQnV0dG9uKGV2dCwgXCJ0b1JpZ2h0XCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5oYW5kbGVyQ2xpY2tCdXR0b24gPSBmdW5jdGlvbiBoYW5kbGVyQ2xpY2tCdXR0b24oZXZ0LCBzRGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMub1BhcmVudEluc3RhbmNlLmJBbmltYXRpb25pbmcpIHJldHVybjtcbiAgICB2YXIgbkN1ciA9IHRoaXMub1BhcmVudEluc3RhbmNlLmdldEN1cnJlbnRWaWV3TnVtYmVyKCk7XG4gICAgdmFyIGJDaXJjdWxhciA9IHRoaXMub1BhcmVudEluc3RhbmNlLm9wdGlvbi5iQ2lyY3VsYXI7XG5cbiAgICBpZiAoIWJDaXJjdWxhcikge1xuICAgICAgaWYgKG5DdXIgPT09IDAgJiYgc0RpcmVjdGlvbiA9PT0gXCJ0b0xlZnRcIikgcmV0dXJuO1xuICAgICAgaWYgKG5DdXIgPT09IHRoaXMub1BhcmVudEluc3RhbmNlLm5Td2lwZUVsZW1lbnRDb3VudCAtIDEgJiYgc0RpcmVjdGlvbiA9PT0gXCJ0b1JpZ2h0XCIpIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbldpZHRoID0gdGhpcy5vUGFyZW50SW5zdGFuY2UublN3aXBlV2lkdGg7XG5cbiAgICBpZiAoc0RpcmVjdGlvbiA9PT0gXCJ0b1JpZ2h0XCIpIHtcbiAgICAgIG5XaWR0aCAqPSAtMTtcbiAgICAgIG5DdXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgbkN1ci0tO1xuICAgIH1cblxuICAgIGlmIChiQ2lyY3VsYXIpIG5DdXIgPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5yZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcihuQ3VyKTtcblxuICAgIC8vZm9yIG5vIGFuaW1hdGlvbiwgbkR1cmF0aW9uIHNldCB6ZXJvLlxuICAgIHRoaXMub1BhcmVudEluc3RhbmNlLnJ1blN3aXBlQWN0aW9uKHRoaXMub3B0aW9uLm5EdXJhdGlvbiwgbkN1ciwgbldpZHRoKTtcbiAgfTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuc2V0RGlzcGxheU9mQnV0dG9uID0gZnVuY3Rpb24gc2V0RGlzcGxheU9mQnV0dG9uKG5DdXJyZW50UGFuZWwpIHtcbiAgICB2YXIgbk1heFBhbmVsID0gdGhpcy5vUGFyZW50SW5zdGFuY2UublN3aXBlRWxlbWVudENvdW50IC0gMTtcbiAgICBpZiAobkN1cnJlbnRQYW5lbCA9PT0gbk1heFBhbmVsKSB7XG4gICAgICB0aGlzLmVsUHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgdGhpcy5lbE5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSBpZiAobkN1cnJlbnRQYW5lbCA9PT0gMCkge1xuICAgICAgdGhpcy5lbFByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgdGhpcy5lbE5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbFByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHRoaXMuZWxOZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICB9O1xuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5kb2NraW5nUGx1Z2luTWV0aG9kID0gZnVuY3Rpb24gZG9ja2luZ1BsdWdpbk1ldGhvZChvUGFyZW50KSB7XG4gICAgaWYgKCFvUGFyZW50Lm9wdGlvbi5iQ2lyY3VsYXIpIHtcbiAgICAgIG9QYXJlbnQucmVnaXN0ZXJQbHVnaW5NZXRob2Qoe1xuICAgICAgICAnRk5fQ09NUE9ORU5UX0RJRF9MT0FEJzogdGhpcy5zZXREaXNwbGF5T2ZCdXR0b24uYmluZCh0aGlzLCAwKSxcbiAgICAgICAgJ0ZOX0FGVEVSX1NXSVBFJzogdGhpcy5zZXREaXNwbGF5T2ZCdXR0b24uYmluZCh0aGlzKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub1BhcmVudEluc3RhbmNlID0gb1BhcmVudDtcbiAgfTtcblxuICByZXR1cm4gU3dpcGVTdGVwTW92ZXJQbHVnaW47XG59KENvbW1vbkNvbXBvbmVudCk7XG5cbi8qXG4qIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuKiBDb3B5cmlnaHQgKGMpIDIwMTYgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiAqXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6ICpcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuICpcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuKiBUSEUgU09GVFdBUkUuICovXG5cbi8qIVxuKiBcXHN3aXBlX2VzNi5qcyB2MC4xXG4qIFxcY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiBcbiogXFxsaWNlbnNlIFRoaXMgcHJvamVjdCBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qIFxcY29udHJpYnV0b3IgbmlnYXlvdW4gKG5pZ2F5b3VuQGdtYWlsLmNvbSlcbiogXFx3YXJuaW5nIGRvbnQndXNlIHRoaXMgc291cmNlIGluIG90aGVyIGxpYnJhcnkgc291cmNlLlxuKi9cblxudmFyIFN3ZWV0U3dpcGUgPSBmdW5jdGlvbiAoX0NvbW1vbkNvbXBvbmVudDMpIHtcbiAgX2luaGVyaXRzKFN3ZWV0U3dpcGUsIF9Db21tb25Db21wb25lbnQzKTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5DT01QT05FTlRfQ09ORklHID0gZnVuY3Rpb24gQ09NUE9ORU5UX0NPTkZJRygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgUExVR0lOUzogWydTd2lwZU5hdmlnYXRpb25QbHVnaW4nLCAnU3dpcGVTdGVwTW92ZXJQbHVnaW4nXSxcbiAgICAgIFNFTEVDVE9SOiB7XG4gICAgICAgIC8vaW5wdXRGaWVsZFdyYXA6ICcuaW5wdXQtd3JhcCcsIFxuICAgICAgfSxcbiAgICAgIERFRkFVTFRfQ09NUE9ORU5UX0VWRU5UOiBbJ0ZOX0JFRk9SRV9TV0lQRScsICdGTl9BRlRFUl9TV0lQRSddLFxuICAgICAgREVGQVVMVF9QTFVHSU5fRVZFTlQ6IFsnRk5fQkVGT1JFX1NXSVBFJywgJ0ZOX0FGVEVSX1NXSVBFJ10sXG4gICAgICBERUZBVUxUX09QVElPTjoge1xuICAgICAgICAnYkNpcmN1bGFyJzogZmFsc2UsXG4gICAgICAgICduRHVyYXRpb24nOiAxMDAsXG4gICAgICAgICduQmFja1dpZHRoJzogNjAsXG4gICAgICAgICduU2lkZVdpZHRoJzogMCxcbiAgICAgICAgJ25EZWNpc2lvblNsb3BlJzogMC44LFxuICAgICAgICAnbkZvcmNlZFN3aXBlVGltZSc6IDAsXG4gICAgICAgICdiU2V0dGluZ1NjcmVlbkhlaWdodCc6IGZhbHNlLFxuICAgICAgICAnYk1vdXNlRXZlbnRTdXBwb3J0JzogZmFsc2UsXG4gICAgICAgICdiVG91Y2hFdmVudFN1cHBvcnQnOiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBTd2VldFN3aXBlKGVsVGFyZ2V0LCBodE9wdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2VldFN3aXBlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tbW9uQ29tcG9uZW50My5jYWxsKHRoaXMsIGVsVGFyZ2V0LCBodE9wdGlvbikpO1xuICB9XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuaW5pdFZhbHVlID0gZnVuY3Rpb24gaW5pdFZhbHVlKGh0T3B0aW9uKSB7XG4gICAgLy9zZXQgaGVpZ2h0IG9mIHZpZXdBcmVhXG4gICAgLy90aGlzLnNldER5bmFtaWNIZWlnaHQoMSk7XG4gICAgLy9pZih0aGlzLm9wdGlvbi5iU2V0dGluZ1NjcmVlbkhlaWdodCkgdGhpcy5lbFRhcmdldC5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgaWYgKHRoaXMub3B0aW9uLmJTZXR0aW5nU2NyZWVuSGVpZ2h0KSBfY3Uuc2V0RHluYW1pY0hlaWdodCgwLCB0aGlzLmVsVGFyZ2V0LCB0aGlzLm9wdGlvbi5iQ2lyY3VsYXIpO1xuXG4gICAgLy9zd2lwZSBjb250YWluZXIgd2lkdGhcbiAgICB0aGlzLm5Td2lwZVdpZHRoID0gX2N1LmdldFdpZHRoKHRoaXMuZWxUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQpOyAvL2Nhc2UuIHBvc2l0aW9uIDogc3RhdGljKGZsb2F0KVxuXG4gICAgLy9zd2lwZSBlbGVtZW50IGNvdW50IFxuICAgIHRoaXMublN3aXBlRWxlbWVudENvdW50ID0gdGhpcy5lbFRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDtcblxuICAgIHZhciBiQ2lyY3VsYXIgPSB0aGlzLm9wdGlvbi5iQ2lyY3VsYXI7XG4gICAgdGhpcy5uTWF4U3dpcGVSYW5nZSA9IGJDaXJjdWxhciA/IHRoaXMublN3aXBlV2lkdGggOiAwO1xuICAgIHRoaXMubk1pblN3aXBlUmFuZ2UgPSBiQ2lyY3VsYXIgPyB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDIgOiB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDE7XG4gICAgdGhpcy5uTWluU3dpcGVSYW5nZSAqPSAtdGhpcy5uU3dpcGVXaWR0aDtcblxuICAgIHRoaXMubk1heFZhbHVlID0gdGhpcy5uTWF4U3dpcGVSYW5nZSArIHRoaXMub3B0aW9uLm5TaWRlV2lkdGg7XG4gICAgdGhpcy5uTWluVmFsdWUgPSB0aGlzLm5NaW5Td2lwZVJhbmdlIC0gdGhpcy5vcHRpb24ublNpZGVXaWR0aDtcblxuICAgIHRoaXMuYkFuaW1hdGlvbmluZyA9IGZhbHNlO1xuICAgIHRoaXMubk5leHROdW1iZXIgPSAwO1xuXG4gICAgLy9UT0RPLiDsmLXshZjsnLzroZwg67Cb7JWE7IScIO2VhOyalO2VnCDqsr3smrDrp4wgcmVzaXplIOydtOuypO2KuCDrqqjri4jthLDrp4HtlZjrj4TroZ0g6riw64ql7LaU6rCALlxuICAgIHRoaXMucmVjYWxjdWxhdGVXaWR0aCgpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5vcHRpb24uYlRvdWNoRXZlbnRTdXBwb3J0KSB7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaFN0YXJ0KGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hNb3ZlKGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaEVuZChldnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9uLmJNb3VzZUV2ZW50U3VwcG9ydCkge1xuICAgICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaFN0YXJ0KGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hNb3ZlKGV2dCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczQuaGFuZGxlclRvdWNoRW5kKGV2dCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbkVuZCgpO1xuICB9O1xuXG4gIC8qIEV2ZW50IEhhbmxkZXIgKi9cblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5oYW5kbGVyVG91Y2hTdGFydCA9IGZ1bmN0aW9uIGhhbmRsZXJUb3VjaFN0YXJ0KGV2dCkge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5iQW5pbWF0aW9uaW5nKSByZXR1cm47XG5cbiAgICB0aGlzLmJTd2lwZSA9IHRydWU7XG4gICAgdGhpcy5iRmlyc3RUb3VjaE1vdmUgPSB0cnVlO1xuICAgIHZhciBiTW91c2VFdmVudCA9IGV2dC50eXBlLnN1YnN0cigwLCA1KSA9PT0gXCJtb3VzZVwiO1xuXG4gICAgdmFyIHBhZ2VYID0gdm9pZCAwLFxuICAgICAgICBwYWdlWSA9IHZvaWQgMDtcblxuICAgIGlmIChiTW91c2VFdmVudCkge1xuICAgICAgcGFnZVggPSBldnQucGFnZVg7XG4gICAgICBwYWdlWSA9IGV2dC5wYWdlWTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFnZVggPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICBwYWdlWSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB9XG5cbiAgICB0aGlzLm5TdGFydFBvc1ggPSBNYXRoLmZsb29yKHBhZ2VYKTtcbiAgICB0aGlzLm5TdGFydFBvc1kgPSBNYXRoLmZsb29yKHBhZ2VZKTtcblxuICAgIHRoaXMublN0YXJ0VHJhbnNsYXRlWCA9IF9jdS5nZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCk7XG4gICAgLy90aGlzLm5TdGFydFRyYW5zbGF0ZVggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYUGVyY2VudCh0aGlzLmVsVGFyZ2V0KSAvIDEwMCAqIF9jdS5nZXRXaWR0aCh0aGlzLmVsVGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkKTtcblxuICAgIHRoaXMublRvdWNoU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5oYW5kbGVyVG91Y2hNb3ZlID0gZnVuY3Rpb24gaGFuZGxlclRvdWNoTW92ZShldnQpIHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuICAgIGlmICghdGhpcy5iU3dpcGUpIHJldHVybjtcblxuICAgIHZhciBiTW91c2VFdmVudCA9IGV2dC50eXBlLnN1YnN0cigwLCA1KSA9PT0gXCJtb3VzZVwiO1xuXG4gICAgdmFyIGh0Q3VycmVudEV2dCA9IGJNb3VzZUV2ZW50ID8gZXZ0IDogZXZ0LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG4gICAgdGhpcy5uTW92ZVBvc1ggPSBNYXRoLmZsb29yKGh0Q3VycmVudEV2dC5wYWdlWCk7XG4gICAgdGhpcy5uTW92ZVBvc1kgPSBNYXRoLmZsb29yKGh0Q3VycmVudEV2dC5wYWdlWSk7XG5cbiAgICAvL2RldGVjdCBhbmdsZSBcbiAgICBpZiAodGhpcy5iRmlyc3RUb3VjaE1vdmUpIHtcbiAgICAgIHZhciBuQW5nbGVEaWZmID0gTWF0aC5hYnModGhpcy5uTW92ZVBvc1kgLSB0aGlzLm5TdGFydFBvc1kpIC8gTWF0aC5hYnModGhpcy5uTW92ZVBvc1ggLSB0aGlzLm5TdGFydFBvc1gpO1xuICAgICAgdGhpcy5iU3dpcGUgPSAhIShuQW5nbGVEaWZmIDw9IHRoaXMub3B0aW9uLm5EZWNpc2lvblNsb3BlKTtcbiAgICAgIGlmICh0aGlzLmJTd2lwZSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAgIHRoaXMublByZU1vdmVYID0gdGhpcy5uU3RhcnRQb3NYO1xuICAgIH1cblxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIG5Nb3ZlRGlmZiA9IHRoaXMubk1vdmVQb3NYIC0gdGhpcy5uUHJlTW92ZVg7XG4gICAgdmFyIG5QcmV2aW91c1ggPSAwO1xuXG4gICAgblByZXZpb3VzWCA9IF9jdS5nZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCk7XG5cbiAgICB0aGlzLmRyYWdBcmVhKG5QcmV2aW91c1gsIG5Nb3ZlRGlmZik7XG5cbiAgICB0aGlzLm5QcmVNb3ZlWCA9IHRoaXMubk1vdmVQb3NYO1xuICAgIHRoaXMublByZU1vdmVZID0gdGhpcy5uTW92ZVBvc1g7XG5cbiAgICB0aGlzLmJGaXJzdFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmhhbmRsZXJUb3VjaEVuZCA9IGZ1bmN0aW9uIGhhbmRsZXJUb3VjaEVuZChldnQpIHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuXG4gICAgaWYgKCF0aGlzLmJTd2lwZSkge1xuICAgICAgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IGZhbHNlO1xuICAgICAgdGhpcy5iT3V0UmFuZ2VMZWZ0ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5XaWR0aEZvckFuaW1hdGlvbiA9IDA7XG4gICAgdmFyIG5Ub3VjaEVuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBuRGlmZlRvdWNoVGltZSA9IG5Ub3VjaEVuZFRpbWUgLSB0aGlzLm5Ub3VjaFN0YXJ0VGltZTtcblxuICAgIHZhciBuTGFzdFRyYW5zbGF0ZVggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQpO1xuICAgIHZhciBuRGlmZlRyYW5zbGF0ZVggPSBuTGFzdFRyYW5zbGF0ZVggLSB0aGlzLm5TdGFydFRyYW5zbGF0ZVg7XG5cbiAgICBpZiAobkRpZmZUcmFuc2xhdGVYID09PSAwKSByZXR1cm47XG5cbiAgICB2YXIgYlN3aXBlV2lkdGggPSBmYWxzZTtcbiAgICB2YXIgYlN3aXBlVGltZSA9IGZhbHNlO1xuICAgIHZhciBiU3dpcGVHbyA9IGZhbHNlO1xuICAgIHZhciBzRGlyZWN0aW9uID0gXCJcIjtcblxuICAgIGJTd2lwZVdpZHRoID0gTWF0aC5hYnMobkRpZmZUcmFuc2xhdGVYKSA+IHRoaXMub3B0aW9uLm5CYWNrV2lkdGg7XG4gICAgaWYgKG5EaWZmVG91Y2hUaW1lIDwgdGhpcy5vcHRpb24ubkZvcmNlZFN3aXBlVGltZSkgYlN3aXBlVGltZSA9IHRydWU7XG4gICAgLy9kZWNpZGUgZGlyZWN0aW9uLlxuICAgIGlmICh0aGlzLmJPdXRSYW5nZUxlZnQgfHwgdGhpcy5iT3V0UmFuZ2VSaWdodCB8fCAhKGJTd2lwZVdpZHRoIHx8IGJTd2lwZVRpbWUpKSB7XG4gICAgICBzRGlyZWN0aW9uID0gbkRpZmZUcmFuc2xhdGVYID4gMCA/IFwibGVmdFwiIDogXCJyaWdodFwiO1xuICAgICAgbldpZHRoRm9yQW5pbWF0aW9uID0gTWF0aC5hYnMobkRpZmZUcmFuc2xhdGVYKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYlN3aXBlR28gPSB0cnVlO1xuICAgICAgc0RpcmVjdGlvbiA9IG5EaWZmVHJhbnNsYXRlWCA+IDAgPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcbiAgICAgIG5XaWR0aEZvckFuaW1hdGlvbiA9IHRoaXMublN3aXBlV2lkdGggLSBNYXRoLmFicyhuRGlmZlRyYW5zbGF0ZVgpO1xuICAgIH1cblxuICAgIHRoaXMubk5leHROdW1iZXIgPSB0aGlzLl9nZXROZXh0Vmlld051bWJlcih0aGlzLm5TdGFydFRyYW5zbGF0ZVgsIHNEaXJlY3Rpb24sIGJTd2lwZUdvKTtcbiAgICB0aGlzLm5OZXh0TnVtYmVyID0gTWF0aC5yb3VuZCh0aGlzLm5OZXh0TnVtYmVyKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbi5iQ2lyY3VsYXIpIHtcbiAgICAgIHRoaXMubk5leHROdW1iZXIgPSB0aGlzLnJlQWRqdXN0TmV4dE51bWJlckZvckNpcmN1bGFyKHRoaXMubk5leHROdW1iZXIpO1xuICAgIH1cblxuICAgIGlmIChzRGlyZWN0aW9uID09PSAnbGVmdCcpIG5XaWR0aEZvckFuaW1hdGlvbiA9IC1uV2lkdGhGb3JBbmltYXRpb247XG5cbiAgICB0aGlzLnJ1blN3aXBlQWN0aW9uKHRoaXMub3B0aW9uLm5EdXJhdGlvbiwgdGhpcy5uTmV4dE51bWJlciwgbldpZHRoRm9yQW5pbWF0aW9uKTtcblxuICAgIC8vVE9ETy4gbWFrZSByZXNldCBtZXRob2QgXG4gICAgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuYk91dFJhbmdlTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuYlN3aXBlID0gZmFsc2U7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIgPSBmdW5jdGlvbiByZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcihuTmV4dE51bWJlcikge1xuICAgIGlmIChuTmV4dE51bWJlciA9PT0gLTEpIHtcbiAgICAgIG5OZXh0TnVtYmVyID0gdGhpcy5uU3dpcGVFbGVtZW50Q291bnQgLSAzO1xuICAgIH0gZWxzZSBpZiAobk5leHROdW1iZXIgPT09IHRoaXMublN3aXBlRWxlbWVudENvdW50IC0gMikge1xuICAgICAgbk5leHROdW1iZXIgPSAwO1xuICAgIH0gZWxzZSB7fVxuICAgIHJldHVybiBuTmV4dE51bWJlcjtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5ydW5Td2lwZUFjdGlvbiA9IGZ1bmN0aW9uIHJ1blN3aXBlQWN0aW9uKG5EdXJhdGlvbiwgbk5leHROdW1iZXIsIG5XaWR0aEZvckFuaW1hdGlvbikge1xuICAgIGlmICh0eXBlb2YgbldpZHRoRm9yQW5pbWF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB2YXIgbldpZHRoID0gdGhpcy5uU3dpcGVXaWR0aDtcbiAgICAgIHZhciBuRGlmZiA9IHRoaXMuZ2V0Q3VycmVudFZpZXdOdW1iZXIoKSAtIG5OZXh0TnVtYmVyO1xuICAgICAgbldpZHRoRm9yQW5pbWF0aW9uID0gbkRpZmYgKiBuV2lkdGg7XG4gICAgfVxuICAgIHRoaXMuc2V0TmV4dE51bWJlcihuTmV4dE51bWJlcik7XG4gICAgX0NvbW1vbkNvbXBvbmVudDMucHJvdG90eXBlLnJ1bkN1c3RvbUZuLmNhbGwodGhpcywgJ1VTRVInLCAnRk5fQkVGT1JFX1NXSVBFJywgbk5leHROdW1iZXIpO1xuICAgIF9Db21tb25Db21wb25lbnQzLnByb3RvdHlwZS5ydW5DdXN0b21Gbi5jYWxsKHRoaXMsICdQTFVHSU4nLCAnRk5fQkVGT1JFX1NXSVBFJywgbk5leHROdW1iZXIpO1xuICAgIHRoaXMucnVuVHJhbnNpdGlvbih0aGlzLmVsVGFyZ2V0LCBuV2lkdGhGb3JBbmltYXRpb24sIG5EdXJhdGlvbiAvIDEwMDApOyAvL3RvIHNlY29uZC5cbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5fcmVzdG9yZVRyYW5zZm9ybVhQZXJjZW50ID0gZnVuY3Rpb24gX3Jlc3RvcmVUcmFuc2Zvcm1YUGVyY2VudChuUGFuZWxJbmRleCkge1xuICAgIHZhciBuUGFuZWxDb3VudCA9IHRoaXMublN3aXBlRWxlbWVudENvdW50IC0gMztcbiAgICB2YXIgblBhbmVsV2lkdGggPSB0aGlzLm5Td2lwZVdpZHRoO1xuICAgIHZhciBuTW92ZVZhbHVlID0gblBhbmVsQ291bnQgKiBuUGFuZWxXaWR0aDsgLy9yZWZzIDogY2xvbmVkTm9kZSBpcyAyLlxuXG4gICAgaWYgKG5QYW5lbEluZGV4ID09PSAwIHx8IG5QYW5lbEluZGV4ID4gblBhbmVsQ291bnQpIHtcbiAgICAgIF9jdS5zZXRUcmFuc2xhdGUzZFhQZXJjZW50KHRoaXMuZWxUYXJnZXQsIDApO1xuICAgIH1cbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5yZWdpc3RlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25FbmQoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgc1RTRSA9IF9jdS5nZXRDU1NUcmFuc2l0aW9uRW5kKCk7XG5cbiAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoc1RTRSwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICB2YXIgc1RTID0gX2N1LmdldENTU05hbWUoJ3RyYW5zaXRpb24nKTtcbiAgICAgIF90aGlzNS5lbFRhcmdldC5zdHlsZVtzVFNdID0gXCJub25lXCI7XG5cbiAgICAgIF9jdS5zZXRUcmFuc2xhdGUzZFhQZXJjZW50KF90aGlzNS5lbFRhcmdldCwgX3RoaXM1Lm5OZXh0TnVtYmVyICogLTEwMCk7XG5cbiAgICAgIGlmIChfdGhpczUub3B0aW9uLmJDaXJjdWxhcikge1xuICAgICAgICBfdGhpczUuX3Jlc3RvcmVUcmFuc2Zvcm1YUGVyY2VudChfdGhpczUubk5leHROdW1iZXIpO1xuICAgICAgfVxuXG4gICAgICBfQ29tbW9uQ29tcG9uZW50My5wcm90b3R5cGUucnVuQ3VzdG9tRm4uY2FsbChfdGhpczUsICdVU0VSJywgJ0ZOX0FGVEVSX1NXSVBFJywgX3RoaXM1Lm5OZXh0TnVtYmVyKTtcbiAgICAgIF9Db21tb25Db21wb25lbnQzLnByb3RvdHlwZS5ydW5DdXN0b21Gbi5jYWxsKF90aGlzNSwgJ1BMVUdJTicsICdGTl9BRlRFUl9TV0lQRScsIF90aGlzNS5uTmV4dE51bWJlcik7XG5cbiAgICAgIGlmIChfdGhpczUub3B0aW9uLmJTZXR0aW5nU2NyZWVuSGVpZ2h0KSBfY3Uuc2V0RHluYW1pY0hlaWdodChfdGhpczUubk5leHROdW1iZXIsIF90aGlzNS5lbFRhcmdldCwgX3RoaXM1Lm9wdGlvbi5iQ2lyY3VsYXIpO1xuXG4gICAgICBfdGhpczUubk5leHROdW1iZXIgPSAwO1xuXG4gICAgICBfdGhpczUuYkFuaW1hdGlvbmluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnNldE5leHROdW1iZXIgPSBmdW5jdGlvbiBzZXROZXh0TnVtYmVyKG5OZXh0TnVtYmVyKSB7XG4gICAgdGhpcy5uTmV4dE51bWJlciA9IG5OZXh0TnVtYmVyO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmdldEN1cnJlbnRWaWV3TnVtYmVyID0gZnVuY3Rpb24gZ2V0Q3VycmVudFZpZXdOdW1iZXIoKSB7XG4gICAgdmFyIG5JbmRleCA9IE1hdGguYWJzKF9jdS5nZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCkpIC8gdGhpcy5uU3dpcGVXaWR0aDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuSW5kZXgpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLl9nZXROZXh0Vmlld051bWJlciA9IGZ1bmN0aW9uIF9nZXROZXh0Vmlld051bWJlcihuUG9zLCBzRGlyZWN0aW9uLCBiU3dpcGVHbykge1xuICAgIHZhciBuSW5kZXggPSBNYXRoLnJvdW5kKC0oblBvcyAvIHRoaXMublN3aXBlV2lkdGgpKTtcbiAgICBpZiAoIWJTd2lwZUdvKSByZXR1cm4gbkluZGV4O1xuICAgIHJldHVybiBzRGlyZWN0aW9uID09PSBcImxlZnRcIiA/ICsrbkluZGV4IDogLS1uSW5kZXg7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuZHJhZ0FyZWEgPSBmdW5jdGlvbiBkcmFnQXJlYShuUHJlWCwgbk1vdmVEaWZmKSB7XG4gICAgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuYk91dFJhbmdlTGVmdCA9IGZhbHNlO1xuXG4gICAgLy9jaGVjayB2YWxpZCBzd2lwZSByYW5nZS4gXG5cbiAgICAvL3doZW4gZ28gdG8gbGVmdCBvbiBsZWZ0LXNpZGUuXG4gICAgaWYgKG5QcmVYID49IHRoaXMubk1heFN3aXBlUmFuZ2UpIHRoaXMuYk91dFJhbmdlTGVmdCA9IHRydWU7XG5cbiAgICAvL3doZW4gZ28gdG8gcmlnaHQgb24gcmlnaHQtc2lkZS5cbiAgICBpZiAoblByZVggPD0gdGhpcy5uTWluU3dpcGVSYW5nZSkgdGhpcy5iT3V0UmFuZ2VSaWdodCA9IHRydWU7XG5cbiAgICB2YXIgbk5ld1ZhbHVlID0gblByZVggKyBuTW92ZURpZmY7XG5cbiAgICBpZiAobk5ld1ZhbHVlID4gdGhpcy5uTWF4VmFsdWUpIG5OZXdWYWx1ZSA9IHRoaXMubk1heFZhbHVlO1xuICAgIGlmIChuTmV3VmFsdWUgPCB0aGlzLm5NaW5WYWx1ZSkgbk5ld1ZhbHVlID0gdGhpcy5uTWluVmFsdWU7XG5cbiAgICBfY3Uuc2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQsIG5OZXdWYWx1ZSk7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucnVuVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIHJ1blRyYW5zaXRpb24oZWxUYXJnZXQsIG5EaXN0YW5jZSwgbkR1cmF0aW9uKSB7XG4gICAgdGhpcy5iQW5pbWF0aW9uaW5nID0gdHJ1ZTtcblxuICAgIHZhciBuUHJldmlvdXNUcmFuc2xhdGVYID0gX2N1LmdldFRyYW5zbGF0ZTNkWChlbFRhcmdldCk7XG5cbiAgICB2YXIgc1RTID0gX2N1LmdldENTU05hbWUoJ3RyYW5zaXRpb24nKTtcbiAgICB2YXIgc1RGID0gX2N1LmdldENTU05hbWUoJ3RyYW5zZm9ybScpO1xuICAgIHZhciBzVmFsdWUgPSBcIlwiO1xuXG4gICAgaWYgKHNURiA9PT0gXCJ3ZWJraXRUcmFuc2Zvcm1cIikgc1ZhbHVlID0gXCItd2Via2l0LXRyYW5zZm9ybVwiO2Vsc2UgaWYgKHNURiA9PT0gXCJ0cmFuc2Zvcm1cIikgc1ZhbHVlID0gXCJ0cmFuc2Zvcm1cIjtlbHNlIHt9XG5cbiAgICBlbFRhcmdldC5zdHlsZVtzVFNdID0gc1ZhbHVlICsgXCIgXCIgKyBuRHVyYXRpb24gKyBcInNcIjtcbiAgICBlbFRhcmdldC5zdHlsZVtzVEZdID0gJ3RyYW5zbGF0ZTNkKCcgKyAoblByZXZpb3VzVHJhbnNsYXRlWCArIG5EaXN0YW5jZSkgKyAncHgsIDAsIDApJztcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5ydW5BdXRvQW5pbWF0aW9uID0gZnVuY3Rpb24gcnVuQXV0b0FuaW1hdGlvbihzRGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuICAgIHZhciBuQ3VyID0gdGhpcy5nZXRDdXJyZW50Vmlld051bWJlcigpO1xuICAgIHZhciBuV2lkdGggPSB0aGlzLm5Td2lwZVdpZHRoO1xuXG4gICAgaWYgKHNEaXJlY3Rpb24gPT09IFwidG9SaWdodFwiKSB7XG4gICAgICBuV2lkdGggKj0gLTE7XG4gICAgICBuQ3VyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5DdXItLTtcbiAgICB9XG5cbiAgICBuQ3VyID0gdGhpcy5yZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcihuQ3VyKTtcblxuICAgIHRoaXMucnVuU3dpcGVBY3Rpb24odGhpcy5vcHRpb24ubkR1cmF0aW9uLCBuQ3VyLCBuV2lkdGgpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJlY2FsY3VsYXRlV2lkdGggPSBmdW5jdGlvbiByZWNhbGN1bGF0ZVdpZHRoKCkge1xuICAgIHZhciByZXNpemVydW5uZXIgPSBmYWxzZTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBpZiAocmVzaXplcnVubmVyKSByZXR1cm47XG4gICAgICByZXNpemVydW5uZXIgPSB0cnVlO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM2Lm5Td2lwZVdpZHRoID0gX2N1LmdldFdpZHRoKF90aGlzNi5lbFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIHJlc2l6ZXJ1bm5lciA9IGZhbHNlO1xuICAgICAgfSwgMTAwKTtcbiAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gU3dlZXRTd2lwZTtcbn0oQ29tbW9uQ29tcG9uZW50KTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0ge1xuICBTd2VldFN3aXBlOiBTd2VldFN3aXBlLFxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW46IFN3aXBlTmF2aWdhdGlvblBsdWdpbixcbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW46IFN3aXBlU3RlcE1vdmVyUGx1Z2luXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpcGVfbWVyZ2VfZXM1LmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9zd2lwZV9tZXJnZV9lczUuanMiLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgcmF3SGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSAnc3RhdHVzJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXMgOiAyMDBcbiAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwiaW1wb3J0ICogYXMgU3dpcGUgZnJvbSAnLi9saWIvc3dpcGVfbWVyZ2VfZXM1LmpzJztcbmltcG9ydCAnd2hhdHdnLWZldGNoJztcblxuLy9pbXBvcnQgXyBmcm9tICcuL2xpYi9fLmpzJztcblxuZnVuY3Rpb24gaW5pdFN3aXBlTW9kdWxlKCkge1xuXHRjb25zdCBlbFN3YXBXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXN1YWxfaW1nXCIpO1xuXHRjb25zdCBvTXlzd2lwZSA9IG5ldyBTd2lwZS5Td2VldFN3aXBlKCBlbFN3YXBXcmFwLCB7XG5cdFx0J2JDaXJjdWxhcicgOiB0cnVlLFxuICAgICduRHVyYXRpb24nIDogMzAwLCAgLy9kZWZhdWx0IDEwMFxuICAgICduQmFja1dpZHRoJyA6IDYwLCAgLy9kZWZhdWx0IDYwXG4gICAgJ25TaWRlV2lkdGgnIDogMjAsICAvL2RlZmF1bHQgMFxuICAgICduRGVjaXNpb25TbG9wZScgOiAwLjgsIC8vZGVmYXVsdCAwLjhcbiAgICAnbkZvcmNlZFN3aXBlVGltZScgOiAxMDAsIC8vZGVmYXVsdCAwXG4gICAgJ2JTZXR0aW5nU2NyZWVuSGVpZ2h0JzogdHJ1ZSxcbiAgICAnYk1vdXNlRXZlbnRTdXBwb3J0JyA6IHRydWVcbiAgfSk7XG5cblx0b015c3dpcGUucmVnaXN0ZXJVc2VyTWV0aG9kKHtcblx0XHQnRk5fQkVGT1JFX1NXSVBFJzogZnVuY3Rpb24obil7fSxcblx0XHQnRk5fQUZURVJfU1dJUEUnOiBmdW5jdGlvbihuKXt9LFxuXHRcdCdGTl9DT01QT05FTlRfRElEX0xPQUQnIDogZnVuY3Rpb24oKXt9XG5cdH0pO1xuXG5cdG9NeXN3aXBlLm9uUGx1Z2lucyhbXG5cdHtcblx0XHQnbmFtZScgICAgICA6ICdTd2lwZVN0ZXBNb3ZlclBsdWdpbicsXG5cdFx0J29wdGlvbicgICAgOiB7XG5cdFx0XHQncHJldkJ1dHRvbicgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9wcmVfZVwiKSxcblx0XHRcdCduZXh0QnV0dG9uJyA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX254dF9lXCIpLFxuXHRcdFx0J25EdXJhdGlvbic6IDIwMFxuXHRcdH0sXG5cdFx0J3VzZXJNZXRob2QnIDoge30sXG5cdFx0J29iaicgOiBTd2lwZS5Td2lwZVN0ZXBNb3ZlclBsdWdpblxuXHR9XSk7XG5cblx0IShmdW5jdGlvbiBtb3ZlUGFuZWwoKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0b015c3dpcGUucnVuQXV0b0FuaW1hdGlvbihcInRvUmlnaHRcIik7XG5cdFx0XHRtb3ZlUGFuZWwoKTtcblx0XHR9LCAyMDAwKTtcblx0fSkoKTtcbn1cblxuZnVuY3Rpb24gaW5pdFRhYk1vZHVsZSgpIHtcblx0Y29uc3QgaXRlbUtpbmRzID0gX2dldEl0ZW1LaW5kcygpO1xuXHRjb25zdCBlbFRhYk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZW50X3RhYl9sc3RcIik7XG5cdGNvbnN0IGVsTW9yZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuXCIpO1xuXHRsZXQgdGFiTWVudU9iaiA9IG51bGw7XG5cblx0Ly90YWIg7Lu07Y+s64SM7Yq4IOuPmeyekVxuXHQvKi4gXG5cdFx07J2064WA7ISd7J2AIGh0bWztjIzsnbzsnYQg6riw7KSA7Jy866GcIOuUlOugie2GoOumrOulvCDssL7ripTri6QuIFxuXHRcdOuUsOudvOyEnCBodG1s6rO8IOqwmeydgCDrlJTroInthqDrpqzsl5Ag67KI65Ok7JyE7LmY66W8IOyEpOygle2VtOuRkOyXiOuLpC4gKHdlYnBhY2suY29tb24uanMgb3V0cHV0LWNodW5rRmlsZW5hbWXtla3rqqnqsJnsnbQg7LC46rOgKVxuXHQqL1xuXHRmdW5jdGlvbiBpbml0VGFiQ29tcG9uZW50KCkge1xuXHRcdHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtYWluX1RhYm1lbnVcIiAqLyAnLi9tYWluX1RhYm1lbnUuanMnKS50aGVuKHRhYk9iaiA9PiB7XG5cdFx0XHRyZXR1cm4gdGFiT2JqLmRlZmF1bHQ7XG5cdFx0fSlcblx0fVxuXG5cdC8qIEFGVEVSX0NBTExCQUNLIExJU1QgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHQvLyBmdW5jdGlvbiBhZnRlclRhYkNvbnRlbnRDaGFuZ2UoKSB7XG5cdC8vIFx0Y29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZW50X2xzdF90eHQgc3Bhbi5waW5rXCIpO1xuXHQvLyBcdGNvbnN0IGxpTGlzdExlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubHN0X2V2ZW50X2JveCBsaVwiKS5sZW5ndGg7XG5cdC8vIFx0ZWwuaW5uZXJUZXh0ID0gbGlMaXN0TGVuICsgXCLqsJxcIjtcblx0Ly8gfVxuXG5cblx0ZnVuY3Rpb24gZGVjaWRlQnRuVmlzaWJsZSgpIHtcblx0XHRjb25zdCBlbGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9yZSAuYnRuXCIpO1xuXHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubHN0X2V2ZW50X2JveCBsaVwiKS5sZW5ndGggPiA0KSB7XG5cdFx0XHRlbGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsYnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYWZ0ZXJUYWJDb250ZW50Q2hhbmdlKCkge1xuXHRcdGRlY2lkZUJ0blZpc2libGUoKTtcblx0fVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHQvL1RhYk1lbnUgcmVnaXN0IGV2ZW50IFxuXHRlbFRhYk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICh7dGFyZ2V0fSkgPT4ge1xuXHRcdGlmKHRhcmdldC5ub2RlTmFtZSA9PT0gXCJVTFwiKSByZXR1cm47XG5cdFx0Y29uc3QgbGlzdEl0ZW0gPSB0YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpO1xuXHRcdGNvbnN0IGxpc3RJZHggPSBsaXN0SXRlbS5kYXRhc2V0LmNhdGVnb3J5O1xuXHRcdGNvbnN0IGEgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmFuY2hvclwiKTtcblxuXHRcdGVsVGFiTWVudS5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdGEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuXHRcdGluaXRUYWJDb21wb25lbnQoKS50aGVuKCh0YWJDbGFzcykgPT4ge1xuXHRcdFx0dGFiTWVudU9iaiA9IHRhYk1lbnVPYmogfHwgbmV3IHRhYkNsYXNzKGVsVGFiTWVudSwgaXRlbUtpbmRzLCBhZnRlclRhYkNvbnRlbnRDaGFuZ2UpO1xuXHRcdFx0dGFiTWVudU9iai5ydW4oTnVtYmVyKGxpc3RJZHgpLCBmYWxzZSk7XG5cdFx0XHQvLyAvL21vcmUgYnV0dG9uIOuztOyXrOykhOyngCDqsrDsoJVcblx0XHRcdC8vIHRhYk1lbnVPYmouZGVjaWRlQnRuVmlzaWJsZSgpO1xuXHRcdH0pO1xuXG5cdH0pO1xuXG5cdC8vTW9yZUJ0biByZWdpc3QgZXZlbnRcblx0ZWxNb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudEluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVudF90YWJfbHN0IC5hY3RpdmVcIikucGFyZW50RWxlbWVudC5kYXRhc2V0LmNhdGVnb3J5O1xuXG5cdFx0aW5pdFRhYkNvbXBvbmVudCgpLnRoZW4oKHRhYkNsYXNzKSA9PiB7XG5cdFx0XHR0YWJNZW51T2JqID0gdGFiTWVudU9iaiB8fCBuZXcgdGFiQ2xhc3MoZWxUYWJNZW51LCBpdGVtS2luZHMsIGFmdGVyVGFiQ29udGVudENoYW5nZSk7XG5cdFx0XHR0YWJNZW51T2JqLnJ1bihOdW1iZXIoY3VycmVudEluZGV4KSwgdHJ1ZSk7XG5cdFx0fSk7XG5cdH0sZmFsc2UpO1xuXG5cdGZ1bmN0aW9uIF9nZXRJdGVtS2luZHMoKSB7XG5cdFx0Y29uc3QgdGVzdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV2ZW50X3RhYl9sc3QgbGkgYSBzcGFuXCIpO1xuXHRcdGNvbnN0IGl0ZW1LaW5kcyA9IEFycmF5LmZyb20odGVzdExpc3QpLm1hcCgodik9PiB7XG5cdFx0XHRyZXR1cm4gdi5pbm5lclRleHQ7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGl0ZW1LaW5kcztcblx0fVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBldnQgPT4ge1xuXHRpbml0U3dpcGVNb2R1bGUoKTtcblx0aW5pdFRhYk1vZHVsZSgpO1xufSk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9
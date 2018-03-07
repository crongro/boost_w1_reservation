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

function $(query) {
	return document.querySelector(query);
}

function $$(query) {
	return document.querySelectorAll(query);
}

function getIdFromUrl() {
	return location.search.slice(4) || 1;
}

function getData(api, fn) {
	var _this = this;

	fetch(api).then(function (response) {
		return response.json();
	}).then(function (json) {
		fn.call(_this, json);
	}).catch(function (ex) {
		console.log('parsing failed', ex);
	});
}

exports.getData = getData;
exports.getEmail = getEmail;
exports.getIdFromUrl = getIdFromUrl;
exports.$ = $;
exports.$$ = $$;

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

var _ = _interopRequireWildcard(_common);

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

function setPromotionImages(fnAfterCallback) {
	var target = _.$(".visual_img");
	_.getData('http://211.249.62.123/api/promotions', function (_ref) {
		var items = _ref.items;

		var listTpl = _.$("#promotionItem").innerHTML;

		items.forEach(function (item) {
			var productId = item.productId;
			var productImageId = item.productImageId;
			var result = eval('`' + listTpl + '`');
			target.insertAdjacentHTML("beforeend", result);
		});

		var first = target.firstElementChild.cloneNode(true);
		var last = target.lastElementChild.cloneNode(true);
		target.appendChild(first);
		target.insertBefore(last, target.firstElementChild);

		fnAfterCallback();
	});
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

	function afterTabContentChange() {}
	//decideBtnVisible();


	/*****************************************************/

	//fill first tab menu content
	initTabComponent().then(function (tabClass) {
		tabMenuObj = tabMenuObj || new tabClass(elTabMenu, itemKinds, afterTabContentChange);
		tabMenuObj.run(0, false);
	});

	//TabMenu regist event 
	elTabMenu.addEventListener("click", function (_ref2) {
		var target = _ref2.target;

		if (target.nodeName === "UL") return;
		var listItem = target.closest(".item");
		var listIdx = listItem.dataset.category;
		var a = listItem.querySelector(".anchor");

		elTabMenu.querySelector(".active").classList.remove("active");
		a.classList.add("active");

		initTabComponent().then(function (tabClass) {
			tabMenuObj = tabMenuObj || new tabClass(elTabMenu, itemKinds, afterTabContentChange);
			tabMenuObj.run(Number(listIdx), false);
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
	var email = _.getEmail();
	var elViewReservation = document.querySelector(".viewReservation");
	if (email !== null) elViewReservation.innerText = email;
}

document.addEventListener("DOMContentLoaded", function (evt) {
	setPromotionImages(initSwipeModule);
	initTabModule();
	checkLoginFromStorage();
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODUxYmMwYTQ3ZWJjOWU5ZWUwYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N3aXBlX21lcmdlX2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImdldEVtYWlsIiwic0VtYWlsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImdldElkRnJvbVVybCIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJnZXREYXRhIiwiYXBpIiwiZm4iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjYWxsIiwiY2F0Y2giLCJleCIsImNvbnNvbGUiLCJsb2ciLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJhcnIyIiwibGVuZ3RoIiwiZnJvbSIsIl9kZWZhdWx0cyIsImRlZmF1bHRzIiwia2V5cyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJrZXkiLCJ2YWx1ZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsInVuZGVmaW5lZCIsImRlZmluZVByb3BlcnR5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJUeXBlRXJyb3IiLCJjcmVhdGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJzZXRQcm90b3R5cGVPZiIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfY3UiLCJnZXRGbk5hbWUiLCJzTmFtZSIsIm5hbWUiLCJ0b1N0cmluZyIsIm1hdGNoIiwic2V0VHJhbnNsYXRlM2RYIiwiZWxlIiwiblZhbHVlIiwic1RGIiwiZ2V0Q1NTTmFtZSIsInN0eWxlIiwic2V0VHJhbnNsYXRlM2RYUGVyY2VudCIsImdldFdpZHRoIiwibldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImh0Q2FjaGVEYXRhIiwiX2h0TmFtZVNldCIsImFOYW1lTGlzdCIsImlzRXhpc3QiLCJsZW4iLCJib2R5IiwiZ2V0Q2hpbGRPcmRlciIsImVsQ2hpbGQiLCJlbFBhcmVudCIsInBhcmVudE5vZGUiLCJuSW5kZXgiLCJpbmRleE9mIiwiY2hpbGRyZW4iLCJnZXRUcmFuc2xhdGUzZFgiLCJzUHJlQ3NzIiwiblByZVgiLCJyZXBsYWNlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJnZXRUcmFuc2xhdGUzZFhQZXJjZW50IiwiZ2V0Q1NTVHJhbnNpdGlvbkVuZCIsInNUUyIsInNUU0UiLCJzZXREeW5hbWljSGVpZ2h0Iiwibk5leHROdW1iZXIiLCJ0YXJnZXQiLCJiQ2lyY3VsYXIiLCJlbEN1cnJlbnQiLCJuSGVpZ2h0IiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGVpZ2h0Iiwic2V0Q1NTIiwiZWwiLCJzaG93TGF5ZXIiLCJkaXNwbGF5IiwiY2xvc2VMYXllciIsImRhdGEiLCJfYSIsImlzRnVuY3Rpb24iLCJDb21tb25Db21wb25lbnQiLCJlbFRhcmdldCIsImh0T3B0aW9uIiwiaW5pdCIsInNldEluaXRWYWx1ZSIsInNldE9wdGlvbiIsIl9odERlZmF1bHRPcHRpb24iLCJvcHRpb24iLCJpbml0VmFsdWUiLCJyZWdpc3RlckV2ZW50cyIsIkRFRkFVTFRfQ09SRV9FVkVOVCIsIl9kIiwiQ09NUE9ORU5UX0NPTkZJRyIsImJNYWluQ29tcG9uZW50IiwiUExVR0lOUyIsIkRFRkFVTFRfT1BUSU9OIiwiYU15UGx1Z2luTmFtZSIsImh0RGVmYXVsdEZuIiwiZ2V0RGVmYXVsdENhbGxiYWNrTGlzdCIsImNvbmNhdCIsIkRFRkFVTFRfQ09NUE9ORU5UX0VWRU5UIiwiaHREZWZhdWx0UGx1Z2luRm4iLCJERUZBVUxUX1BMVUdJTl9FVkVOVCIsImh0VXNlckZuIiwiaHRQbHVnaW5GbiIsInJlZ2lzdGVyVXNlck1ldGhvZCIsImh0Rm4iLCJyZWdpc3RlclBsdWdpbk1ldGhvZCIsImFwcGVuZFBsdWdpbk1ldGhvZCIsIm9uUGx1Z2lucyIsImFQbHVnaW5MaXN0IiwiaW5pdFBsdWdpbnMiLCJjb21wb25lbnREaWRMb2FkZWQiLCJodFZhbHVlIiwiaHREZWZhdWx0VmFsdWUiLCJodFN0b3JhZ2UiLCJfdGhpcyIsImZvckVhY2giLCJ2IiwicHVzaCIsImFGbiIsIl90aGlzMiIsIm9QYXJlbnQiLCJvUGx1Z2luIiwidXNlck1ldGhvZCIsIl9pbmplY3RQYXJlbnRPYmplY3QiLCJydW5DdXN0b21GbiIsInR5cGUiLCJldmVudG5hbWUiLCJhcmdzIiwiYXJndW1lbnRzIiwicmV0dXJuVmFsdWUiLCJfaHRVc2VyRm4iLCJhcHBseSIsIm9DaGlsZCIsImRvY2tpbmdQbHVnaW5NZXRob2QiLCJTd2lwZU5hdmlnYXRpb25QbHVnaW4iLCJfQ29tbW9uQ29tcG9uZW50IiwiU0VMRUNUT1IiLCJlbFBsdWdpblRhcmdldCIsImVsTmF2aVdyYXAiLCJvUGFyZW50SW5zdGFuY2UiLCJtb3ZlU3dpcGVBcmVhIiwibGlzIiwidGhhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsIm1vdmVwYXJlbnRTd2lwZVBhbmVsIiwiYk1vdXNlRXZlbnRTdXBwb3J0IiwiX2kiLCJuU3dpcGVXaWR0aCIsIm5DaGlsZE9yZGVyIiwibkRpZmYiLCJnZXRDdXJyZW50Vmlld051bWJlciIsIm5Nb3ZlVmFsdWUiLCJydW5Td2lwZUFjdGlvbiIsIm5EdXJhdGlvbiIsImhpZ2hsaWdodFNlbGVjdGVkTEkiLCJuU2VsZWN0ZWRDb3VudCIsIl9saSIsInNlbGV0ZWRDbGFzc05hbWUiLCJfY3VyQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiYmluZCIsIkZOX0FGVEVSX1NXSVBFIiwiU3dpcGVTdGVwTW92ZXJQbHVnaW4iLCJfQ29tbW9uQ29tcG9uZW50MiIsImVsUHJldkJ0biIsInByZXZCdXR0b24iLCJlbE5leHRCdG4iLCJuZXh0QnV0dG9uIiwiX3RoaXMzIiwiZXZ0IiwiaGFuZGxlckNsaWNrQnV0dG9uIiwic0RpcmVjdGlvbiIsImJBbmltYXRpb25pbmciLCJuQ3VyIiwiblN3aXBlRWxlbWVudENvdW50IiwicmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIiLCJzZXREaXNwbGF5T2ZCdXR0b24iLCJuQ3VycmVudFBhbmVsIiwibk1heFBhbmVsIiwiU3dlZXRTd2lwZSIsIl9Db21tb25Db21wb25lbnQzIiwiYlNldHRpbmdTY3JlZW5IZWlnaHQiLCJjaGlsZEVsZW1lbnRDb3VudCIsIm5NYXhTd2lwZVJhbmdlIiwibk1pblN3aXBlUmFuZ2UiLCJuTWF4VmFsdWUiLCJuU2lkZVdpZHRoIiwibk1pblZhbHVlIiwicmVjYWxjdWxhdGVXaWR0aCIsIl90aGlzNCIsImJUb3VjaEV2ZW50U3VwcG9ydCIsImhhbmRsZXJUb3VjaFN0YXJ0IiwiaGFuZGxlclRvdWNoTW92ZSIsImhhbmRsZXJUb3VjaEVuZCIsInJlZ2lzdGVyVHJhbnNpdGlvbkVuZCIsInN0b3BQcm9wYWdhdGlvbiIsImJTd2lwZSIsImJGaXJzdFRvdWNoTW92ZSIsImJNb3VzZUV2ZW50Iiwic3Vic3RyIiwicGFnZVgiLCJwYWdlWSIsImNoYW5nZWRUb3VjaGVzIiwiblN0YXJ0UG9zWCIsIk1hdGgiLCJmbG9vciIsIm5TdGFydFBvc1kiLCJuU3RhcnRUcmFuc2xhdGVYIiwiblRvdWNoU3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsImh0Q3VycmVudEV2dCIsIm5Nb3ZlUG9zWCIsIm5Nb3ZlUG9zWSIsIm5BbmdsZURpZmYiLCJhYnMiLCJuRGVjaXNpb25TbG9wZSIsIm5QcmVNb3ZlWCIsInByZXZlbnREZWZhdWx0Iiwibk1vdmVEaWZmIiwiblByZXZpb3VzWCIsImRyYWdBcmVhIiwiblByZU1vdmVZIiwiYk91dFJhbmdlUmlnaHQiLCJiT3V0UmFuZ2VMZWZ0IiwibldpZHRoRm9yQW5pbWF0aW9uIiwiblRvdWNoRW5kVGltZSIsIm5EaWZmVG91Y2hUaW1lIiwibkxhc3RUcmFuc2xhdGVYIiwibkRpZmZUcmFuc2xhdGVYIiwiYlN3aXBlV2lkdGgiLCJiU3dpcGVUaW1lIiwiYlN3aXBlR28iLCJuQmFja1dpZHRoIiwibkZvcmNlZFN3aXBlVGltZSIsIl9nZXROZXh0Vmlld051bWJlciIsInJvdW5kIiwic2V0TmV4dE51bWJlciIsInJ1blRyYW5zaXRpb24iLCJfcmVzdG9yZVRyYW5zZm9ybVhQZXJjZW50IiwiblBhbmVsSW5kZXgiLCJuUGFuZWxDb3VudCIsIm5QYW5lbFdpZHRoIiwiX3RoaXM1IiwiblBvcyIsIm5OZXdWYWx1ZSIsIm5EaXN0YW5jZSIsIm5QcmV2aW91c1RyYW5zbGF0ZVgiLCJzVmFsdWUiLCJydW5BdXRvQW5pbWF0aW9uIiwicmVzaXplcnVubmVyIiwid2luZG93IiwiX3RoaXM2Iiwic2V0VGltZW91dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJTd2lwZSIsIl8iLCJpbml0U3dpcGVNb2R1bGUiLCJlbFN3YXBXcmFwIiwib015c3dpcGUiLCJuIiwibW92ZVBhbmVsIiwic2V0UHJvbW90aW9uSW1hZ2VzIiwiZm5BZnRlckNhbGxiYWNrIiwiaXRlbXMiLCJsaXN0VHBsIiwiaW5uZXJIVE1MIiwicHJvZHVjdElkIiwiaXRlbSIsInByb2R1Y3RJbWFnZUlkIiwicmVzdWx0IiwiZXZhbCIsImluc2VydEFkamFjZW50SFRNTCIsImZpcnN0IiwiY2xvbmVOb2RlIiwibGFzdCIsImxhc3RFbGVtZW50Q2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImluaXRUYWJNb2R1bGUiLCJpdGVtS2luZHMiLCJfZ2V0SXRlbUtpbmRzIiwiZWxUYWJNZW51IiwiZWxNb3JlQnRuIiwidGFiTWVudU9iaiIsImluaXRUYWJDb21wb25lbnQiLCJ0YWJPYmoiLCJkZWZhdWx0IiwiZGVjaWRlQnRuVmlzaWJsZSIsImVsYnRuIiwiYWZ0ZXJUYWJDb250ZW50Q2hhbmdlIiwidGFiQ2xhc3MiLCJydW4iLCJub2RlTmFtZSIsImxpc3RJdGVtIiwiY2xvc2VzdCIsImxpc3RJZHgiLCJkYXRhc2V0IiwiY2F0ZWdvcnkiLCJhIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiTnVtYmVyIiwiY3VycmVudEluZGV4IiwicGFyZW50RWxlbWVudCIsInRlc3RMaXN0IiwibWFwIiwiaW5uZXJUZXh0IiwiY2hlY2tMb2dpbkZyb21TdG9yYWdlIiwiZW1haWwiLCJlbFZpZXdSZXNlcnZhdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUErQyxtQkFBbUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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U09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXSwgcmVzdWx0O1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhID09PSAwKSB7XG4gXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZSgpOyB9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua0RhdGFbMl07XG4gXHRcdH1cblxuIFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlO1xuXG4gXHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiBcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjAwMDA7XG5cbiBcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdH1cbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiMFwiOlwibWFpbl9UYWJtZW51XCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmJ1bmRsZS5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NTFiYzBhNDdlYmM5ZTllZTBjOSIsImZ1bmN0aW9uIGdldEVtYWlsICgpIHtcblx0dmFyIHNFbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIik7XG5cdGlmKHNFbWFpbCAhPT0gbnVsbCkgcmV0dXJuIHNFbWFpbDtcblx0cmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uICQocXVlcnkpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xufVxuXG5mdW5jdGlvbiAkJChxdWVyeSkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XG59XG5cbmZ1bmN0aW9uIGdldElkRnJvbVVybCgpIHtcblx0cmV0dXJuIGxvY2F0aW9uLnNlYXJjaC5zbGljZSg0KSB8fCAxO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhKGFwaSwgZm4pIHtcblx0ZmV0Y2goYXBpKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdH0pLnRoZW4oKGpzb24pID0+IHtcblx0XHRcdGZuLmNhbGwodGhpcywganNvbik7XG5cdFx0fSkuY2F0Y2goKGV4KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygncGFyc2luZyBmYWlsZWQnLCBleClcblx0XHR9KVxufVxuXG5leHBvcnQge2dldERhdGEsIGdldEVtYWlsLCBnZXRJZEZyb21VcmwsICQsICQkfTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTtmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTt2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpO2lmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9cmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1yZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihzdXBlckNsYXNzKSkpO1xuICB9c3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTtpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbnZhciBfY3UgPSB7XG4gIGdldEZuTmFtZTogZnVuY3Rpb24gZ2V0Rm5OYW1lKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG4gICAgdmFyIHNOYW1lID0gZm4ubmFtZSA/IGZuLm5hbWUgOiBmbi50b1N0cmluZygpLm1hdGNoKC9mdW5jdGlvblxccysoW14oXFwofFxccyldKykvKVsxXTtcbiAgICByZXR1cm4gc05hbWU7XG4gIH0sXG4gIHNldFRyYW5zbGF0ZTNkWDogZnVuY3Rpb24gc2V0VHJhbnNsYXRlM2RYKGVsZSwgblZhbHVlKSB7XG4gICAgdmFyIHNURiA9IHRoaXMuZ2V0Q1NTTmFtZSgndHJhbnNmb3JtJyk7XG4gICAgZWxlLnN0eWxlW3NURl0gPSAndHJhbnNsYXRlM2QoJyArIG5WYWx1ZSArICdweCwgMCwgMCknO1xuICB9LFxuICBzZXRUcmFuc2xhdGUzZFhQZXJjZW50OiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUzZFhQZXJjZW50KGVsZSwgblZhbHVlKSB7XG4gICAgdmFyIHNURiA9IHRoaXMuZ2V0Q1NTTmFtZSgndHJhbnNmb3JtJyk7XG4gICAgZWxlLnN0eWxlW3NURl0gPSAndHJhbnNsYXRlM2QoJyArIG5WYWx1ZSArICclLCAwLCAwKSc7XG4gIH0sXG4gIGdldFdpZHRoOiBmdW5jdGlvbiBnZXRXaWR0aChlbGUpIHtcbiAgICB2YXIgbldpZHRoID0gMDtcblxuICAgIGlmIChlbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpIHtcbiAgICAgIG5XaWR0aCA9IGVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgbldpZHRoID0gZWxlLm9mZnNldFdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gbldpZHRoO1xuICB9LFxuICBnZXRDU1NOYW1lOiBmdW5jdGlvbiBnZXRDU1NOYW1lKHNOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmh0Q2FjaGVEYXRhID09PSBcInVuZGVmaW5lZFwiKSB0aGlzLmh0Q2FjaGVEYXRhID0ge307XG5cbiAgICBpZiAodGhpcy5odENhY2hlRGF0YVtzTmFtZV0pIHJldHVybiB0aGlzLmh0Q2FjaGVEYXRhW3NOYW1lXTtcblxuICAgIHZhciBfaHROYW1lU2V0ID0ge1xuICAgICAgJ3RyYW5zaXRpb24nOiBbJ3dlYmtpdFRyYW5zaXRpb24nLCAndHJhbnNpdGlvbiddLFxuICAgICAgJ3RyYW5zZm9ybSc6IFsnd2Via2l0VHJhbnNmb3JtJywgJ3RyYW5zZm9ybSddXG4gICAgfTtcblxuICAgIHZhciBhTmFtZUxpc3QgPSBfaHROYW1lU2V0W3NOYW1lXTtcblxuICAgIGlmICghdGhpcy5pc0V4aXN0KGFOYW1lTGlzdCkpIHJldHVybiBudWxsO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFOYW1lTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW2FOYW1lTGlzdFtpXV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuaHRDYWNoZURhdGFbc05hbWVdID0gYU5hbWVMaXN0W2ldO1xuICAgICAgICByZXR1cm4gdGhpcy5odENhY2hlRGF0YVtzTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXRDaGlsZE9yZGVyOiBmdW5jdGlvbiBnZXRDaGlsZE9yZGVyKGVsQ2hpbGQpIHtcbiAgICB2YXIgZWxQYXJlbnQgPSBlbENoaWxkLnBhcmVudE5vZGU7XG4gICAgdmFyIG5JbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZWxQYXJlbnQuY2hpbGRyZW4sIGVsQ2hpbGQpO1xuICAgIHJldHVybiBuSW5kZXg7XG4gIH0sXG4gIGdldFRyYW5zbGF0ZTNkWDogZnVuY3Rpb24gZ2V0VHJhbnNsYXRlM2RYKGVsZSkge1xuICAgIHZhciBzVEYgPSB0aGlzLmdldENTU05hbWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgdmFyIHNQcmVDc3MgPSBlbGUuc3R5bGVbc1RGXTtcbiAgICB2YXIgblByZVggPSAwO1xuXG4gICAgaWYgKHNQcmVDc3MuaW5kZXhPZihcIiVcIikgPT09IC0xKSB7XG4gICAgICBuUHJlWCA9ICtzUHJlQ3NzLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoKC0qXFxkKyg/OlxcLlxcZCspKikocHgpKlxcLC4rXFwpL2csIFwiJDFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5QcmVYID0gK3NQcmVDc3MucmVwbGFjZSgvdHJhbnNsYXRlM2RcXCgoLSpcXGQrKD86XFwuXFxkKykqKSglKSpcXCwuK1xcKS9nLCBcIiQxXCIpO1xuICAgICAgblByZVggPSBuUHJlWCAvIDEwMCAqIHRoaXMuZ2V0V2lkdGgoZWxlLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gblByZVg7XG4gIH0sXG4gIGdldFRyYW5zbGF0ZTNkWFBlcmNlbnQ6IGZ1bmN0aW9uIGdldFRyYW5zbGF0ZTNkWFBlcmNlbnQoZWxlKSB7XG4gICAgdmFyIHNURiA9IHRoaXMuZ2V0Q1NTTmFtZShcInRyYW5zZm9ybVwiKTtcbiAgICB2YXIgc1ByZUNzcyA9IGVsZS5zdHlsZVtzVEZdO1xuICAgIHZhciBuUHJlWCA9ICtzUHJlQ3NzLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoKC0qXFxkKyg/OlxcLlxcZCspKikoJSkqXFwsLitcXCkvZywgXCIkMVwiKTtcbiAgICByZXR1cm4gblByZVg7XG4gIH0sXG4gIGdldENTU1RyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIGdldENTU1RyYW5zaXRpb25FbmQoKSB7XG4gICAgdmFyIHNUUyA9IHRoaXMuZ2V0Q1NTTmFtZSgndHJhbnNpdGlvbicpO1xuICAgIHZhciBzVFNFID0gc1RTID09PSBcIndlYmtpdFRyYW5zaXRpb25cIiA/IFwid2Via2l0VHJhbnNpdGlvbkVuZFwiIDogXCJ0cmFuc2l0aW9uZW5kXCI7XG4gICAgcmV0dXJuIHNUU0U7XG4gIH0sXG4gIHNldER5bmFtaWNIZWlnaHQ6IGZ1bmN0aW9uIHNldER5bmFtaWNIZWlnaHQobk5leHROdW1iZXIsIHRhcmdldCwgYkNpcmN1bGFyKSB7XG4gICAgaWYgKGJDaXJjdWxhcikge1xuICAgICAgbk5leHROdW1iZXIrKztcbiAgICB9XG4gICAgdmFyIGVsQ3VycmVudCA9IHRhcmdldC5jaGlsZHJlbltuTmV4dE51bWJlcl07XG4gICAgdmFyIG5IZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGVsQ3VycmVudCkuaGVpZ2h0KTtcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gbkhlaWdodCArIFwicHhcIjtcbiAgfSxcbiAgc2V0Q1NTOiBmdW5jdGlvbiBzZXRDU1MoZWwsIHN0eWxlLCB2YWx1ZSkge1xuICAgIGVsLnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xuICB9LFxuICBzaG93TGF5ZXI6IGZ1bmN0aW9uIHNob3dMYXllcihlbCkge1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0sXG4gIGNsb3NlTGF5ZXI6IGZ1bmN0aW9uIGNsb3NlTGF5ZXIoZWwpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0sXG5cblxuICAvL2NoZWNrIG51bGwgb3IgdW5kZWZpbmVkXG4gIGlzRXhpc3Q6IGZ1bmN0aW9uIGlzRXhpc3QoZGF0YSkge1xuICAgIHJldHVybiBkYXRhICE9IG51bGw7XG4gIH0sXG4gIGlzQXJyYXk6IGZ1bmN0aW9uIGlzQXJyYXkoX2EpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX2EpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShfYSk7XG4gIH0sXG4gIGlzRnVuY3Rpb246IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZm4pIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxufTtcbi8qXG4qIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuKiBDb3B5cmlnaHQgKGMpIDIwMTYgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiAqXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6ICpcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuICpcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuKiBUSEUgU09GVFdBUkUuICovXG5cbi8qIVxuKiBcXENvbW1vbkNvbW9uZW50LmpzIHYwLjIuMVxuKiBcXGNvcmUgY29tcG9uZW50IHNvdXJjZSBmb3IgQ29tcG9uZW50cyBVSSAuXG4qIFxcY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiBcbiogXFxsaWNlbnNlIFRoaXMgcHJvamVjdCBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qIFxcY29udHJpYnV0b3IgSmlzdSBZb3VuIChqaXN1LnlvdW5AZ21haWwuY29tKVxuKiBcXHdhcm5pbmcgZG9udCd1c2UgdGhpcyBzb3VyY2UgaW4gb3RoZXIgbGlicmFyeSBzb3VyY2UuXG4qL1xuXG52YXIgQ29tbW9uQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb21tb25Db21wb25lbnQoZWxUYXJnZXQsIGh0T3B0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbW1vbkNvbXBvbmVudCk7XG5cbiAgICB0aGlzLmh0T3B0aW9uID0gaHRPcHRpb247XG4gICAgdGhpcy5odENhY2hlRGF0YSA9IHt9O1xuICAgIHRoaXMuZWxUYXJnZXQgPSBlbFRhcmdldDtcbiAgICB0aGlzLmluaXQoaHRPcHRpb24pO1xuICB9XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gaW5pdChodE9wdGlvbikge1xuICAgIHRoaXMuc2V0SW5pdFZhbHVlKCk7XG4gICAgdGhpcy5zZXRPcHRpb24oaHRPcHRpb24sIHRoaXMuX2h0RGVmYXVsdE9wdGlvbiwgdGhpcy5vcHRpb24pO1xuICAgIHRoaXMuaW5pdFZhbHVlKCk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0SW5pdFZhbHVlID0gZnVuY3Rpb24gc2V0SW5pdFZhbHVlKCkge1xuICAgIHZhciBERUZBVUxUX0NPUkVfRVZFTlQgPSBbJ0ZOX0NPTVBPTkVOVF9ESURfTE9BRCddO1xuICAgIHZhciBfZCA9IHRoaXMuQ09NUE9ORU5UX0NPTkZJRygpO1xuICAgIHRoaXMuYk1haW5Db21wb25lbnQgPSAhIV9kLlBMVUdJTlM7XG4gICAgdGhpcy5faHREZWZhdWx0T3B0aW9uID0gX2QuREVGQVVMVF9PUFRJT047XG4gICAgdGhpcy5hTXlQbHVnaW5OYW1lID0gX2QuUExVR0lOUztcbiAgICB0aGlzLmh0RGVmYXVsdEZuID0gdGhpcy5nZXREZWZhdWx0Q2FsbGJhY2tMaXN0KERFRkFVTFRfQ09SRV9FVkVOVC5jb25jYXQoX2QuREVGQVVMVF9DT01QT05FTlRfRVZFTlQpKTtcblxuICAgIGlmICh0aGlzLmJNYWluQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmh0RGVmYXVsdFBsdWdpbkZuID0gdGhpcy5nZXREZWZhdWx0Q2FsbGJhY2tMaXN0KERFRkFVTFRfQ09SRV9FVkVOVC5jb25jYXQoX2QuREVGQVVMVF9QTFVHSU5fRVZFTlQpKTtcbiAgICB9XG4gICAgdGhpcy5odFVzZXJGbiA9IHt9O1xuICAgIHRoaXMuaHRQbHVnaW5GbiA9IHt9O1xuICAgIHRoaXMub3B0aW9uID0ge307XG4gIH07XG5cbiAgLy9UT0RPLiBtb3ZlIHRvIHN1cGVyIENsYXNzLlxuXG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5yZWdpc3RlclVzZXJNZXRob2QgPSBmdW5jdGlvbiByZWdpc3RlclVzZXJNZXRob2QoaHRGbikge1xuICAgIHRoaXMuc2V0T3B0aW9uKGh0Rm4sIHRoaXMuaHREZWZhdWx0Rm4sIHRoaXMuaHRVc2VyRm4pO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUucmVnaXN0ZXJQbHVnaW5NZXRob2QgPSBmdW5jdGlvbiByZWdpc3RlclBsdWdpbk1ldGhvZChodEZuKSB7XG4gICAgdGhpcy5hcHBlbmRQbHVnaW5NZXRob2QoaHRGbiwgdGhpcy5odERlZmF1bHRQbHVnaW5GbiwgdGhpcy5odFBsdWdpbkZuKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLm9uUGx1Z2lucyA9IGZ1bmN0aW9uIG9uUGx1Z2lucyhhUGx1Z2luTGlzdCkge1xuICAgIHRoaXMuaW5pdFBsdWdpbnModGhpcy5hTXlQbHVnaW5OYW1lLCBhUGx1Z2luTGlzdCwgdGhpcy5lbFRhcmdldCk7XG4gICAgdGhpcy5jb21wb25lbnREaWRMb2FkZWQoKTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnNldE9wdGlvbiA9IGZ1bmN0aW9uIHNldE9wdGlvbihodFZhbHVlLCBodERlZmF1bHRWYWx1ZSwgaHRTdG9yYWdlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIE9iamVjdC5rZXlzKGh0RGVmYXVsdFZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAodHlwZW9mIGh0VmFsdWVbdl0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaHRTdG9yYWdlW3ZdID0gaHREZWZhdWx0VmFsdWVbdl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGh0VmFsdWVbdl0pICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgICAgICAgaHRTdG9yYWdlW3ZdID0gaHRWYWx1ZVt2XTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaHRTdG9yYWdlW3ZdID0ge307XG4gICAgICAgIF90aGlzLnNldE9wdGlvbi5jYWxsKF90aGlzLCBodFZhbHVlW3ZdLCBodERlZmF1bHRWYWx1ZVt2XSwgaHRTdG9yYWdlW3ZdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmFwcGVuZFBsdWdpbk1ldGhvZCA9IGZ1bmN0aW9uIGFwcGVuZFBsdWdpbk1ldGhvZChodFZhbHVlLCBodERlZmF1bHRWYWx1ZSwgaHRTdG9yYWdlKSB7XG4gICAgT2JqZWN0LmtleXMoaHREZWZhdWx0VmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShodFN0b3JhZ2Vbdl0pKSBodFN0b3JhZ2Vbdl0gPSBbXTtcbiAgICAgIGlmICh0eXBlb2YgaHRWYWx1ZVt2XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBodFN0b3JhZ2Vbdl0ucHVzaChodERlZmF1bHRWYWx1ZVt2XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodFN0b3JhZ2Vbdl0ucHVzaChodFZhbHVlW3ZdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuZ2V0RGVmYXVsdENhbGxiYWNrTGlzdCA9IGZ1bmN0aW9uIGdldERlZmF1bHRDYWxsYmFja0xpc3QoYUZuKSB7XG4gICAgdmFyIGh0Rm4gPSB7fTtcbiAgICBhRm4uZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgaHRGblt2XSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIH0pO1xuICAgIHJldHVybiBodEZuO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuaW5pdFBsdWdpbnMgPSBmdW5jdGlvbiBpbml0UGx1Z2lucyhhTXlQbHVnaW5OYW1lLCBhUGx1Z2luTGlzdCwgZWxUYXJnZXQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBvUGFyZW50ID0gdGhpcztcbiAgICBhUGx1Z2luTGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICB2YXIgc05hbWUgPSB2Lm5hbWU7XG4gICAgICB2YXIgb2JqID0gdi5vYmo7XG4gICAgICBpZiAoYU15UGx1Z2luTmFtZS5pbmRleE9mKHNOYW1lKSA8IDApIHJldHVybjtcbiAgICAgIC8vbGV0IG9QbHVnaW4gPSBuZXcgd2luZG93W3YubmFtZV0oZWxUYXJnZXQsIHYub3B0aW9uKTtcbiAgICAgIHZhciBvUGx1Z2luID0gbmV3IG9iaihlbFRhcmdldCwgdi5vcHRpb24pO1xuICAgICAgb1BsdWdpbi5yZWdpc3RlclVzZXJNZXRob2Qodi51c2VyTWV0aG9kKTtcbiAgICAgIF90aGlzMi5faW5qZWN0UGFyZW50T2JqZWN0KG9QYXJlbnQsIG9QbHVnaW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZGVkID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTG9hZGVkKCkge1xuICAgIHRoaXMucnVuQ3VzdG9tRm4oJ1VTRVInLCAnRk5fQ09NUE9ORU5UX0RJRF9MT0FEJyk7XG4gICAgdGhpcy5ydW5DdXN0b21GbignUExVR0lOJywgJ0ZOX0NPTVBPTkVOVF9ESURfTE9BRCcpO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUucnVuQ3VzdG9tRm4gPSBmdW5jdGlvbiBydW5DdXN0b21Gbih0eXBlLCBldmVudG5hbWUpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgcmV0dXJuVmFsdWUgPSB2b2lkIDA7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJVU0VSXCI6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoX3R5cGVvZih0aGlzLmh0VXNlckZuKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdGhpcy5odFVzZXJGbltldmVudG5hbWVdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBfaHRVc2VyRm47XG5cbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gKF9odFVzZXJGbiA9IHRoaXMuaHRVc2VyRm4pW2V2ZW50bmFtZV0uYXBwbHkoX2h0VXNlckZuLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgY2FzZSBcIlBMVUdJTlwiOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKF90eXBlb2YodGhpcy5odFBsdWdpbkZuKSA9PT0gXCJvYmplY3RcIiAmJiBfdHlwZW9mKHRoaXMuaHRQbHVnaW5GbltldmVudG5hbWVdKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhpcy5odFBsdWdpbkZuW2V2ZW50bmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgZm4uYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7fVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5faW5qZWN0UGFyZW50T2JqZWN0ID0gZnVuY3Rpb24gX2luamVjdFBhcmVudE9iamVjdChvUGFyZW50LCBvQ2hpbGQpIHtcbiAgICBvQ2hpbGQuZG9ja2luZ1BsdWdpbk1ldGhvZChvUGFyZW50KTtcbiAgfTtcblxuICByZXR1cm4gQ29tbW9uQ29tcG9uZW50O1xufSgpO1xuXG4vKlxuKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiogQ29weXJpZ2h0IChjKSAyMDE2IFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gKlxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOiAqXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4qIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLiAqXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiogVEhFIFNPRlRXQVJFLiAqL1xuXG4vKiFcbiogXFxTd2lwZU5hdmlnYXRpb25QbHVnaW4uanMgdjAuMVxuKiBcXGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4qIFxcbGljZW5zZSBUaGlzIHByb2plY3QgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKiBcXGNvbnRyaWJ1dG9yIG5pZ2F5b3VuIChuaWdheW91bkBnbWFpbC5jb20pXG4qIFxcd2FybmluZyBkb250J3VzZSB0aGlzIHNvdXJjZSBpbiBvdGhlciBsaWJyYXJ5IHNvdXJjZS5cbiovXG5cbnZhciBTd2lwZU5hdmlnYXRpb25QbHVnaW4gPSBmdW5jdGlvbiAoX0NvbW1vbkNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLCBfQ29tbW9uQ29tcG9uZW50KTtcblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLkNPTVBPTkVOVF9DT05GSUcgPSBmdW5jdGlvbiBDT01QT05FTlRfQ09ORklHKCkge1xuICAgIHJldHVybiB7XG4gICAgICBTRUxFQ1RPUjoge30sXG4gICAgICBERUZBVUxUX0NPTVBPTkVOVF9FVkVOVDogW10sXG4gICAgICBERUZBVUxUX09QVElPTjoge1xuICAgICAgICAndXNhZ2UnOiBmYWxzZSxcbiAgICAgICAgJ2VsTmF2aVdyYXAnOiBudWxsLCAvL293biBlbGVtZW50KCNpU2Nyb2xsQXJlYSlcbiAgICAgICAgJ3NlbGV0ZWRDbGFzc05hbWUnOiAnc2VsZWN0ZWQtc3dpcGUtbGknLFxuICAgICAgICAnbkR1cmF0aW9uJzogMjAwLFxuICAgICAgICAnYk1vdXNlRXZlbnRTdXBwb3J0JzogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIFN3aXBlTmF2aWdhdGlvblBsdWdpbihlbFRhcmdldCwgaHRPcHRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tbW9uQ29tcG9uZW50LmNhbGwodGhpcywgZWxUYXJnZXQsIGh0T3B0aW9uKSk7XG4gIH1cblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLmluaXRWYWx1ZSA9IGZ1bmN0aW9uIGluaXRWYWx1ZSgpIHtcbiAgICB0aGlzLmVsUGx1Z2luVGFyZ2V0O1xuICAgIHRoaXMuZWxOYXZpV3JhcCA9IHRoaXMub3B0aW9uLmVsTmF2aVdyYXA7XG4gICAgdGhpcy5vUGFyZW50SW5zdGFuY2UgPSBudWxsO1xuICB9O1xuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUucmVnaXN0ZXJFdmVudHMgPSBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpIHtcbiAgICB0aGlzLm1vdmVTd2lwZUFyZWEoKTtcbiAgfTtcblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLm1vdmVTd2lwZUFyZWEgPSBmdW5jdGlvbiBtb3ZlU3dpcGVBcmVhKCkge1xuICAgIHZhciBsaXMgPSB0aGlzLm9wdGlvbi5lbE5hdmlXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcblxuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdGhhdC5tb3ZlcGFyZW50U3dpcGVQYW5lbCh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbi5iTW91c2VFdmVudFN1cHBvcnQpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGxpc1tfaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgIHRoYXQubW92ZXBhcmVudFN3aXBlUGFuZWwodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLm1vdmVwYXJlbnRTd2lwZVBhbmVsID0gZnVuY3Rpb24gbW92ZXBhcmVudFN3aXBlUGFuZWwoZWxUYXJnZXQpIHtcbiAgICB2YXIgbldpZHRoID0gdGhpcy5vUGFyZW50SW5zdGFuY2UublN3aXBlV2lkdGg7XG4gICAgdmFyIG5DaGlsZE9yZGVyID0gX2N1LmdldENoaWxkT3JkZXIoZWxUYXJnZXQpO1xuXG4gICAgdmFyIG5EaWZmID0gdGhpcy5vUGFyZW50SW5zdGFuY2UuZ2V0Q3VycmVudFZpZXdOdW1iZXIoKSAtIG5DaGlsZE9yZGVyO1xuICAgIHZhciBuTW92ZVZhbHVlID0gbkRpZmYgKiBuV2lkdGg7XG5cbiAgICB2YXIgbk5leHROdW1iZXIgPSBuQ2hpbGRPcmRlcjtcblxuICAgIC8vZm9yIG5vIGFuaW1hdGlvbiwgbkR1cmF0aW9uIHNldCB6ZXJvLlxuICAgIHRoaXMub1BhcmVudEluc3RhbmNlLnJ1blN3aXBlQWN0aW9uKHRoaXMub3B0aW9uLm5EdXJhdGlvbiwgbk5leHROdW1iZXIpO1xuXG4gICAgdGhpcy5oaWdobGlnaHRTZWxlY3RlZExJKG5DaGlsZE9yZGVyKTtcbiAgfTtcblxuICBTd2lwZU5hdmlnYXRpb25QbHVnaW4ucHJvdG90eXBlLmhpZ2hsaWdodFNlbGVjdGVkTEkgPSBmdW5jdGlvbiBoaWdobGlnaHRTZWxlY3RlZExJKG5TZWxlY3RlZENvdW50KSB7XG4gICAgblNlbGVjdGVkQ291bnQrKztcbiAgICAvL3JlbW92ZSBsZWdhY3kgY2xhc3NcbiAgICB2YXIgX2xpID0gdGhpcy5vcHRpb24uZWxOYXZpV3JhcC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdGhpcy5vcHRpb24uc2VsZXRlZENsYXNzTmFtZSk7XG4gICAgdmFyIF9jdXJDbGFzc05hbWUgPSBfbGkuY2xhc3NOYW1lO1xuICAgIF9saS5jbGFzc05hbWUgPSBfbGkuY2xhc3NOYW1lLnJlcGxhY2UoX2N1ckNsYXNzTmFtZSwgXCJcIik7XG5cbiAgICAvL2FkZCBuZXcgY2xhc3NcbiAgICB0aGlzLm9wdGlvbi5lbE5hdmlXcmFwLnF1ZXJ5U2VsZWN0b3IoXCJsaTpudGgtY2hpbGQoXCIgKyBuU2VsZWN0ZWRDb3VudCArIFwiKVwiKS5jbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLm9wdGlvbi5zZWxldGVkQ2xhc3NOYW1lO1xuICB9O1xuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUuZG9ja2luZ1BsdWdpbk1ldGhvZCA9IGZ1bmN0aW9uIGRvY2tpbmdQbHVnaW5NZXRob2Qob1BhcmVudCkge1xuICAgIG9QYXJlbnQucmVnaXN0ZXJQbHVnaW5NZXRob2Qoe1xuICAgICAgJ0ZOX0JFRk9SRV9TV0lQRSc6IHRoaXMuaGlnaGxpZ2h0U2VsZWN0ZWRMSS5iaW5kKHRoaXMpLFxuICAgICAgJ0ZOX0FGVEVSX1NXSVBFJzogZnVuY3Rpb24gRk5fQUZURVJfU1dJUEUoKSB7fVxuICAgIH0pO1xuICAgIHRoaXMub1BhcmVudEluc3RhbmNlID0gb1BhcmVudDtcbiAgfTtcblxuICByZXR1cm4gU3dpcGVOYXZpZ2F0aW9uUGx1Z2luO1xufShDb21tb25Db21wb25lbnQpO1xuXG4vKlxuKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiogQ29weXJpZ2h0IChjKSAyMDE2IFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gKlxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOiAqXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4qIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLiAqXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiogVEhFIFNPRlRXQVJFLiAqL1xuXG4vKiFcbiogXFxTd2lwZVN0ZXBNb3ZlclBsdWdpbi5qcyB2MC4xXG4qIFxcY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiBcbiogXFxsaWNlbnNlIFRoaXMgcHJvamVjdCBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qIFxcY29udHJpYnV0b3IgbmlnYXlvdW4gKG5pZ2F5b3VuQGdtYWlsLmNvbSlcbiogXFx3YXJuaW5nIGRvbnQndXNlIHRoaXMgc291cmNlIGluIG90aGVyIGxpYnJhcnkgc291cmNlLlxuKi9cblxudmFyIFN3aXBlU3RlcE1vdmVyUGx1Z2luID0gZnVuY3Rpb24gKF9Db21tb25Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhTd2lwZVN0ZXBNb3ZlclBsdWdpbiwgX0NvbW1vbkNvbXBvbmVudDIpO1xuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5DT01QT05FTlRfQ09ORklHID0gZnVuY3Rpb24gQ09NUE9ORU5UX0NPTkZJRygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgU0VMRUNUT1I6IHt9LFxuICAgICAgREVGQVVMVF9DT01QT05FTlRfRVZFTlQ6IFtdLFxuICAgICAgREVGQVVMVF9PUFRJT046IHtcbiAgICAgICAgJ3ByZXZCdXR0b24nOiBudWxsLFxuICAgICAgICAnbmV4dEJ1dHRvbic6IG51bGwsXG4gICAgICAgICduRHVyYXRpb24nOiAyMDBcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIFN3aXBlU3RlcE1vdmVyUGx1Z2luKGVsVGFyZ2V0LCBodE9wdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2lwZVN0ZXBNb3ZlclBsdWdpbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbW1vbkNvbXBvbmVudDIuY2FsbCh0aGlzLCBlbFRhcmdldCwgaHRPcHRpb24pKTtcbiAgfVxuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5pbml0VmFsdWUgPSBmdW5jdGlvbiBpbml0VmFsdWUoKSB7XG4gICAgdGhpcy5lbFBsdWdpblRhcmdldDtcbiAgICB0aGlzLmVsUHJldkJ0biA9IHRoaXMub3B0aW9uLnByZXZCdXR0b247XG4gICAgdGhpcy5lbE5leHRCdG4gPSB0aGlzLm9wdGlvbi5uZXh0QnV0dG9uO1xuICAgIHRoaXMub1BhcmVudEluc3RhbmNlID0gbnVsbDtcbiAgfTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUucmVnaXN0ZXJFdmVudHMgPSBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMuZWxQcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBfdGhpczMuaGFuZGxlckNsaWNrQnV0dG9uKGV2dCwgXCJ0b0xlZnRcIik7XG4gICAgfSk7XG4gICAgdGhpcy5lbE5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIF90aGlzMy5oYW5kbGVyQ2xpY2tCdXR0b24oZXZ0LCBcInRvUmlnaHRcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLmhhbmRsZXJDbGlja0J1dHRvbiA9IGZ1bmN0aW9uIGhhbmRsZXJDbGlja0J1dHRvbihldnQsIHNEaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5vUGFyZW50SW5zdGFuY2UuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuICAgIHZhciBuQ3VyID0gdGhpcy5vUGFyZW50SW5zdGFuY2UuZ2V0Q3VycmVudFZpZXdOdW1iZXIoKTtcbiAgICB2YXIgYkNpcmN1bGFyID0gdGhpcy5vUGFyZW50SW5zdGFuY2Uub3B0aW9uLmJDaXJjdWxhcjtcblxuICAgIGlmICghYkNpcmN1bGFyKSB7XG4gICAgICBpZiAobkN1ciA9PT0gMCAmJiBzRGlyZWN0aW9uID09PSBcInRvTGVmdFwiKSByZXR1cm47XG4gICAgICBpZiAobkN1ciA9PT0gdGhpcy5vUGFyZW50SW5zdGFuY2UublN3aXBlRWxlbWVudENvdW50IC0gMSAmJiBzRGlyZWN0aW9uID09PSBcInRvUmlnaHRcIikgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuV2lkdGggPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5uU3dpcGVXaWR0aDtcblxuICAgIGlmIChzRGlyZWN0aW9uID09PSBcInRvUmlnaHRcIikge1xuICAgICAgbldpZHRoICo9IC0xO1xuICAgICAgbkN1cisrO1xuICAgIH0gZWxzZSB7XG4gICAgICBuQ3VyLS07XG4gICAgfVxuXG4gICAgaWYgKGJDaXJjdWxhcikgbkN1ciA9IHRoaXMub1BhcmVudEluc3RhbmNlLnJlQWRqdXN0TmV4dE51bWJlckZvckNpcmN1bGFyKG5DdXIpO1xuXG4gICAgLy9mb3Igbm8gYW5pbWF0aW9uLCBuRHVyYXRpb24gc2V0IHplcm8uXG4gICAgdGhpcy5vUGFyZW50SW5zdGFuY2UucnVuU3dpcGVBY3Rpb24odGhpcy5vcHRpb24ubkR1cmF0aW9uLCBuQ3VyLCBuV2lkdGgpO1xuICB9O1xuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5zZXREaXNwbGF5T2ZCdXR0b24gPSBmdW5jdGlvbiBzZXREaXNwbGF5T2ZCdXR0b24obkN1cnJlbnRQYW5lbCkge1xuICAgIHZhciBuTWF4UGFuZWwgPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5uU3dpcGVFbGVtZW50Q291bnQgLSAxO1xuICAgIGlmIChuQ3VycmVudFBhbmVsID09PSBuTWF4UGFuZWwpIHtcbiAgICAgIHRoaXMuZWxQcmV2QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB0aGlzLmVsTmV4dEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIGlmIChuQ3VycmVudFBhbmVsID09PSAwKSB7XG4gICAgICB0aGlzLmVsUHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB0aGlzLmVsTmV4dEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsUHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgdGhpcy5lbE5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gIH07XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLmRvY2tpbmdQbHVnaW5NZXRob2QgPSBmdW5jdGlvbiBkb2NraW5nUGx1Z2luTWV0aG9kKG9QYXJlbnQpIHtcbiAgICBpZiAoIW9QYXJlbnQub3B0aW9uLmJDaXJjdWxhcikge1xuICAgICAgb1BhcmVudC5yZWdpc3RlclBsdWdpbk1ldGhvZCh7XG4gICAgICAgICdGTl9DT01QT05FTlRfRElEX0xPQUQnOiB0aGlzLnNldERpc3BsYXlPZkJ1dHRvbi5iaW5kKHRoaXMsIDApLFxuICAgICAgICAnRk5fQUZURVJfU1dJUEUnOiB0aGlzLnNldERpc3BsYXlPZkJ1dHRvbi5iaW5kKHRoaXMpXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5vUGFyZW50SW5zdGFuY2UgPSBvUGFyZW50O1xuICB9O1xuXG4gIHJldHVybiBTd2lwZVN0ZXBNb3ZlclBsdWdpbjtcbn0oQ29tbW9uQ29tcG9uZW50KTtcblxuLypcbiogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4qIENvcHlyaWdodCAoYykgMjAxNiBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuICpcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4gKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qIFRIRSBTT0ZUV0FSRS4gKi9cblxuLyohXG4qIFxcc3dpcGVfZXM2LmpzIHYwLjFcbiogXFxjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFxuKiBcXGxpY2Vuc2UgVGhpcyBwcm9qZWN0IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiogXFxjb250cmlidXRvciBuaWdheW91biAobmlnYXlvdW5AZ21haWwuY29tKVxuKiBcXHdhcm5pbmcgZG9udCd1c2UgdGhpcyBzb3VyY2UgaW4gb3RoZXIgbGlicmFyeSBzb3VyY2UuXG4qL1xuXG52YXIgU3dlZXRTd2lwZSA9IGZ1bmN0aW9uIChfQ29tbW9uQ29tcG9uZW50Mykge1xuICBfaW5oZXJpdHMoU3dlZXRTd2lwZSwgX0NvbW1vbkNvbXBvbmVudDMpO1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLkNPTVBPTkVOVF9DT05GSUcgPSBmdW5jdGlvbiBDT01QT05FTlRfQ09ORklHKCkge1xuICAgIHJldHVybiB7XG4gICAgICBQTFVHSU5TOiBbJ1N3aXBlTmF2aWdhdGlvblBsdWdpbicsICdTd2lwZVN0ZXBNb3ZlclBsdWdpbiddLFxuICAgICAgU0VMRUNUT1I6IHtcbiAgICAgICAgLy9pbnB1dEZpZWxkV3JhcDogJy5pbnB1dC13cmFwJywgXG4gICAgICB9LFxuICAgICAgREVGQVVMVF9DT01QT05FTlRfRVZFTlQ6IFsnRk5fQkVGT1JFX1NXSVBFJywgJ0ZOX0FGVEVSX1NXSVBFJ10sXG4gICAgICBERUZBVUxUX1BMVUdJTl9FVkVOVDogWydGTl9CRUZPUkVfU1dJUEUnLCAnRk5fQUZURVJfU1dJUEUnXSxcbiAgICAgIERFRkFVTFRfT1BUSU9OOiB7XG4gICAgICAgICdiQ2lyY3VsYXInOiBmYWxzZSxcbiAgICAgICAgJ25EdXJhdGlvbic6IDEwMCxcbiAgICAgICAgJ25CYWNrV2lkdGgnOiA2MCxcbiAgICAgICAgJ25TaWRlV2lkdGgnOiAwLFxuICAgICAgICAnbkRlY2lzaW9uU2xvcGUnOiAwLjgsXG4gICAgICAgICduRm9yY2VkU3dpcGVUaW1lJzogMCxcbiAgICAgICAgJ2JTZXR0aW5nU2NyZWVuSGVpZ2h0JzogZmFsc2UsXG4gICAgICAgICdiTW91c2VFdmVudFN1cHBvcnQnOiBmYWxzZSxcbiAgICAgICAgJ2JUb3VjaEV2ZW50U3VwcG9ydCc6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIFN3ZWV0U3dpcGUoZWxUYXJnZXQsIGh0T3B0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3ZWV0U3dpcGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21tb25Db21wb25lbnQzLmNhbGwodGhpcywgZWxUYXJnZXQsIGh0T3B0aW9uKSk7XG4gIH1cblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5pbml0VmFsdWUgPSBmdW5jdGlvbiBpbml0VmFsdWUoaHRPcHRpb24pIHtcbiAgICAvL3NldCBoZWlnaHQgb2Ygdmlld0FyZWFcbiAgICAvL3RoaXMuc2V0RHluYW1pY0hlaWdodCgxKTtcbiAgICAvL2lmKHRoaXMub3B0aW9uLmJTZXR0aW5nU2NyZWVuSGVpZ2h0KSB0aGlzLmVsVGFyZ2V0LnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICBpZiAodGhpcy5vcHRpb24uYlNldHRpbmdTY3JlZW5IZWlnaHQpIF9jdS5zZXREeW5hbWljSGVpZ2h0KDAsIHRoaXMuZWxUYXJnZXQsIHRoaXMub3B0aW9uLmJDaXJjdWxhcik7XG5cbiAgICAvL3N3aXBlIGNvbnRhaW5lciB3aWR0aFxuICAgIHRoaXMublN3aXBlV2lkdGggPSBfY3UuZ2V0V2lkdGgodGhpcy5lbFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZCk7IC8vY2FzZS4gcG9zaXRpb24gOiBzdGF0aWMoZmxvYXQpXG5cbiAgICAvL3N3aXBlIGVsZW1lbnQgY291bnQgXG4gICAgdGhpcy5uU3dpcGVFbGVtZW50Q291bnQgPSB0aGlzLmVsVGFyZ2V0LmNoaWxkRWxlbWVudENvdW50O1xuXG4gICAgdmFyIGJDaXJjdWxhciA9IHRoaXMub3B0aW9uLmJDaXJjdWxhcjtcbiAgICB0aGlzLm5NYXhTd2lwZVJhbmdlID0gYkNpcmN1bGFyID8gdGhpcy5uU3dpcGVXaWR0aCA6IDA7XG4gICAgdGhpcy5uTWluU3dpcGVSYW5nZSA9IGJDaXJjdWxhciA/IHRoaXMublN3aXBlRWxlbWVudENvdW50IC0gMiA6IHRoaXMublN3aXBlRWxlbWVudENvdW50IC0gMTtcbiAgICB0aGlzLm5NaW5Td2lwZVJhbmdlICo9IC10aGlzLm5Td2lwZVdpZHRoO1xuXG4gICAgdGhpcy5uTWF4VmFsdWUgPSB0aGlzLm5NYXhTd2lwZVJhbmdlICsgdGhpcy5vcHRpb24ublNpZGVXaWR0aDtcbiAgICB0aGlzLm5NaW5WYWx1ZSA9IHRoaXMubk1pblN3aXBlUmFuZ2UgLSB0aGlzLm9wdGlvbi5uU2lkZVdpZHRoO1xuXG4gICAgdGhpcy5iQW5pbWF0aW9uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5uTmV4dE51bWJlciA9IDA7XG5cbiAgICAvL1RPRE8uIOyYteyFmOycvOuhnCDrsJvslYTshJwg7ZWE7JqU7ZWcIOqyveyasOunjCByZXNpemUg7J2067Kk7Yq4IOuqqOuLiO2EsOunge2VmOuPhOuhnSDquLDriqXstpTqsIAuXG4gICAgdGhpcy5yZWNhbGN1bGF0ZVdpZHRoKCk7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucmVnaXN0ZXJFdmVudHMgPSBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIGlmICh0aGlzLm9wdGlvbi5iVG91Y2hFdmVudFN1cHBvcnQpIHtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczQuaGFuZGxlclRvdWNoU3RhcnQoZXZ0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaE1vdmUoZXZ0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczQuaGFuZGxlclRvdWNoRW5kKGV2dCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb24uYk1vdXNlRXZlbnRTdXBwb3J0KSB7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczQuaGFuZGxlclRvdWNoU3RhcnQoZXZ0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaE1vdmUoZXZ0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hFbmQoZXZ0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMucmVnaXN0ZXJUcmFuc2l0aW9uRW5kKCk7XG4gIH07XG5cbiAgLyogRXZlbnQgSGFubGRlciAqL1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmhhbmRsZXJUb3VjaFN0YXJ0ID0gZnVuY3Rpb24gaGFuZGxlclRvdWNoU3RhcnQoZXZ0KSB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmJBbmltYXRpb25pbmcpIHJldHVybjtcblxuICAgIHRoaXMuYlN3aXBlID0gdHJ1ZTtcbiAgICB0aGlzLmJGaXJzdFRvdWNoTW92ZSA9IHRydWU7XG4gICAgdmFyIGJNb3VzZUV2ZW50ID0gZXZ0LnR5cGUuc3Vic3RyKDAsIDUpID09PSBcIm1vdXNlXCI7XG5cbiAgICB2YXIgcGFnZVggPSB2b2lkIDAsXG4gICAgICAgIHBhZ2VZID0gdm9pZCAwO1xuXG4gICAgaWYgKGJNb3VzZUV2ZW50KSB7XG4gICAgICBwYWdlWCA9IGV2dC5wYWdlWDtcbiAgICAgIHBhZ2VZID0gZXZ0LnBhZ2VZO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlWCA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgIHBhZ2VZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgIH1cblxuICAgIHRoaXMublN0YXJ0UG9zWCA9IE1hdGguZmxvb3IocGFnZVgpO1xuICAgIHRoaXMublN0YXJ0UG9zWSA9IE1hdGguZmxvb3IocGFnZVkpO1xuXG4gICAgdGhpcy5uU3RhcnRUcmFuc2xhdGVYID0gX2N1LmdldFRyYW5zbGF0ZTNkWCh0aGlzLmVsVGFyZ2V0KTtcbiAgICAvL3RoaXMublN0YXJ0VHJhbnNsYXRlWCA9IF9jdS5nZXRUcmFuc2xhdGUzZFhQZXJjZW50KHRoaXMuZWxUYXJnZXQpIC8gMTAwICogX2N1LmdldFdpZHRoKHRoaXMuZWxUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXG4gICAgdGhpcy5uVG91Y2hTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmhhbmRsZXJUb3VjaE1vdmUgPSBmdW5jdGlvbiBoYW5kbGVyVG91Y2hNb3ZlKGV2dCkge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5iQW5pbWF0aW9uaW5nKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmJTd2lwZSkgcmV0dXJuO1xuXG4gICAgdmFyIGJNb3VzZUV2ZW50ID0gZXZ0LnR5cGUuc3Vic3RyKDAsIDUpID09PSBcIm1vdXNlXCI7XG5cbiAgICB2YXIgaHRDdXJyZW50RXZ0ID0gYk1vdXNlRXZlbnQgPyBldnQgOiBldnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cbiAgICB0aGlzLm5Nb3ZlUG9zWCA9IE1hdGguZmxvb3IoaHRDdXJyZW50RXZ0LnBhZ2VYKTtcbiAgICB0aGlzLm5Nb3ZlUG9zWSA9IE1hdGguZmxvb3IoaHRDdXJyZW50RXZ0LnBhZ2VZKTtcblxuICAgIC8vZGV0ZWN0IGFuZ2xlIFxuICAgIGlmICh0aGlzLmJGaXJzdFRvdWNoTW92ZSkge1xuICAgICAgdmFyIG5BbmdsZURpZmYgPSBNYXRoLmFicyh0aGlzLm5Nb3ZlUG9zWSAtIHRoaXMublN0YXJ0UG9zWSkgLyBNYXRoLmFicyh0aGlzLm5Nb3ZlUG9zWCAtIHRoaXMublN0YXJ0UG9zWCk7XG4gICAgICB0aGlzLmJTd2lwZSA9ICEhKG5BbmdsZURpZmYgPD0gdGhpcy5vcHRpb24ubkRlY2lzaW9uU2xvcGUpO1xuICAgICAgaWYgKHRoaXMuYlN3aXBlID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgdGhpcy5uUHJlTW92ZVggPSB0aGlzLm5TdGFydFBvc1g7XG4gICAgfVxuXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgbk1vdmVEaWZmID0gdGhpcy5uTW92ZVBvc1ggLSB0aGlzLm5QcmVNb3ZlWDtcbiAgICB2YXIgblByZXZpb3VzWCA9IDA7XG5cbiAgICBuUHJldmlvdXNYID0gX2N1LmdldFRyYW5zbGF0ZTNkWCh0aGlzLmVsVGFyZ2V0KTtcblxuICAgIHRoaXMuZHJhZ0FyZWEoblByZXZpb3VzWCwgbk1vdmVEaWZmKTtcblxuICAgIHRoaXMublByZU1vdmVYID0gdGhpcy5uTW92ZVBvc1g7XG4gICAgdGhpcy5uUHJlTW92ZVkgPSB0aGlzLm5Nb3ZlUG9zWDtcblxuICAgIHRoaXMuYkZpcnN0VG91Y2hNb3ZlID0gZmFsc2U7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuaGFuZGxlclRvdWNoRW5kID0gZnVuY3Rpb24gaGFuZGxlclRvdWNoRW5kKGV2dCkge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5iQW5pbWF0aW9uaW5nKSByZXR1cm47XG5cbiAgICBpZiAoIXRoaXMuYlN3aXBlKSB7XG4gICAgICB0aGlzLmJPdXRSYW5nZVJpZ2h0ID0gZmFsc2U7XG4gICAgICB0aGlzLmJPdXRSYW5nZUxlZnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbldpZHRoRm9yQW5pbWF0aW9uID0gMDtcbiAgICB2YXIgblRvdWNoRW5kVGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIG5EaWZmVG91Y2hUaW1lID0gblRvdWNoRW5kVGltZSAtIHRoaXMublRvdWNoU3RhcnRUaW1lO1xuXG4gICAgdmFyIG5MYXN0VHJhbnNsYXRlWCA9IF9jdS5nZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCk7XG4gICAgdmFyIG5EaWZmVHJhbnNsYXRlWCA9IG5MYXN0VHJhbnNsYXRlWCAtIHRoaXMublN0YXJ0VHJhbnNsYXRlWDtcblxuICAgIGlmIChuRGlmZlRyYW5zbGF0ZVggPT09IDApIHJldHVybjtcblxuICAgIHZhciBiU3dpcGVXaWR0aCA9IGZhbHNlO1xuICAgIHZhciBiU3dpcGVUaW1lID0gZmFsc2U7XG4gICAgdmFyIGJTd2lwZUdvID0gZmFsc2U7XG4gICAgdmFyIHNEaXJlY3Rpb24gPSBcIlwiO1xuXG4gICAgYlN3aXBlV2lkdGggPSBNYXRoLmFicyhuRGlmZlRyYW5zbGF0ZVgpID4gdGhpcy5vcHRpb24ubkJhY2tXaWR0aDtcbiAgICBpZiAobkRpZmZUb3VjaFRpbWUgPCB0aGlzLm9wdGlvbi5uRm9yY2VkU3dpcGVUaW1lKSBiU3dpcGVUaW1lID0gdHJ1ZTtcbiAgICAvL2RlY2lkZSBkaXJlY3Rpb24uXG4gICAgaWYgKHRoaXMuYk91dFJhbmdlTGVmdCB8fCB0aGlzLmJPdXRSYW5nZVJpZ2h0IHx8ICEoYlN3aXBlV2lkdGggfHwgYlN3aXBlVGltZSkpIHtcbiAgICAgIHNEaXJlY3Rpb24gPSBuRGlmZlRyYW5zbGF0ZVggPiAwID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCI7XG4gICAgICBuV2lkdGhGb3JBbmltYXRpb24gPSBNYXRoLmFicyhuRGlmZlRyYW5zbGF0ZVgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiU3dpcGVHbyA9IHRydWU7XG4gICAgICBzRGlyZWN0aW9uID0gbkRpZmZUcmFuc2xhdGVYID4gMCA/IFwicmlnaHRcIiA6IFwibGVmdFwiO1xuICAgICAgbldpZHRoRm9yQW5pbWF0aW9uID0gdGhpcy5uU3dpcGVXaWR0aCAtIE1hdGguYWJzKG5EaWZmVHJhbnNsYXRlWCk7XG4gICAgfVxuXG4gICAgdGhpcy5uTmV4dE51bWJlciA9IHRoaXMuX2dldE5leHRWaWV3TnVtYmVyKHRoaXMublN0YXJ0VHJhbnNsYXRlWCwgc0RpcmVjdGlvbiwgYlN3aXBlR28pO1xuICAgIHRoaXMubk5leHROdW1iZXIgPSBNYXRoLnJvdW5kKHRoaXMubk5leHROdW1iZXIpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9uLmJDaXJjdWxhcikge1xuICAgICAgdGhpcy5uTmV4dE51bWJlciA9IHRoaXMucmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIodGhpcy5uTmV4dE51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKHNEaXJlY3Rpb24gPT09ICdsZWZ0JykgbldpZHRoRm9yQW5pbWF0aW9uID0gLW5XaWR0aEZvckFuaW1hdGlvbjtcblxuICAgIHRoaXMucnVuU3dpcGVBY3Rpb24odGhpcy5vcHRpb24ubkR1cmF0aW9uLCB0aGlzLm5OZXh0TnVtYmVyLCBuV2lkdGhGb3JBbmltYXRpb24pO1xuXG4gICAgLy9UT0RPLiBtYWtlIHJlc2V0IG1ldGhvZCBcbiAgICB0aGlzLmJPdXRSYW5nZVJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5iT3V0UmFuZ2VMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5iU3dpcGUgPSBmYWxzZTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5yZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhciA9IGZ1bmN0aW9uIHJlQWRqdXN0TmV4dE51bWJlckZvckNpcmN1bGFyKG5OZXh0TnVtYmVyKSB7XG4gICAgaWYgKG5OZXh0TnVtYmVyID09PSAtMSkge1xuICAgICAgbk5leHROdW1iZXIgPSB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDM7XG4gICAgfSBlbHNlIGlmIChuTmV4dE51bWJlciA9PT0gdGhpcy5uU3dpcGVFbGVtZW50Q291bnQgLSAyKSB7XG4gICAgICBuTmV4dE51bWJlciA9IDA7XG4gICAgfSBlbHNlIHt9XG4gICAgcmV0dXJuIG5OZXh0TnVtYmVyO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJ1blN3aXBlQWN0aW9uID0gZnVuY3Rpb24gcnVuU3dpcGVBY3Rpb24obkR1cmF0aW9uLCBuTmV4dE51bWJlciwgbldpZHRoRm9yQW5pbWF0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBuV2lkdGhGb3JBbmltYXRpb24gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHZhciBuV2lkdGggPSB0aGlzLm5Td2lwZVdpZHRoO1xuICAgICAgdmFyIG5EaWZmID0gdGhpcy5nZXRDdXJyZW50Vmlld051bWJlcigpIC0gbk5leHROdW1iZXI7XG4gICAgICBuV2lkdGhGb3JBbmltYXRpb24gPSBuRGlmZiAqIG5XaWR0aDtcbiAgICB9XG4gICAgdGhpcy5zZXROZXh0TnVtYmVyKG5OZXh0TnVtYmVyKTtcbiAgICBfQ29tbW9uQ29tcG9uZW50My5wcm90b3R5cGUucnVuQ3VzdG9tRm4uY2FsbCh0aGlzLCAnVVNFUicsICdGTl9CRUZPUkVfU1dJUEUnLCBuTmV4dE51bWJlcik7XG4gICAgX0NvbW1vbkNvbXBvbmVudDMucHJvdG90eXBlLnJ1bkN1c3RvbUZuLmNhbGwodGhpcywgJ1BMVUdJTicsICdGTl9CRUZPUkVfU1dJUEUnLCBuTmV4dE51bWJlcik7XG4gICAgdGhpcy5ydW5UcmFuc2l0aW9uKHRoaXMuZWxUYXJnZXQsIG5XaWR0aEZvckFuaW1hdGlvbiwgbkR1cmF0aW9uIC8gMTAwMCk7IC8vdG8gc2Vjb25kLlxuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLl9yZXN0b3JlVHJhbnNmb3JtWFBlcmNlbnQgPSBmdW5jdGlvbiBfcmVzdG9yZVRyYW5zZm9ybVhQZXJjZW50KG5QYW5lbEluZGV4KSB7XG4gICAgdmFyIG5QYW5lbENvdW50ID0gdGhpcy5uU3dpcGVFbGVtZW50Q291bnQgLSAzO1xuICAgIHZhciBuUGFuZWxXaWR0aCA9IHRoaXMublN3aXBlV2lkdGg7XG4gICAgdmFyIG5Nb3ZlVmFsdWUgPSBuUGFuZWxDb3VudCAqIG5QYW5lbFdpZHRoOyAvL3JlZnMgOiBjbG9uZWROb2RlIGlzIDIuXG5cbiAgICBpZiAoblBhbmVsSW5kZXggPT09IDAgfHwgblBhbmVsSW5kZXggPiBuUGFuZWxDb3VudCkge1xuICAgICAgX2N1LnNldFRyYW5zbGF0ZTNkWFBlcmNlbnQodGhpcy5lbFRhcmdldCwgMCk7XG4gICAgfVxuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJlZ2lzdGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkVuZCgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBzVFNFID0gX2N1LmdldENTU1RyYW5zaXRpb25FbmQoKTtcblxuICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihzVFNFLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgIHZhciBzVFMgPSBfY3UuZ2V0Q1NTTmFtZSgndHJhbnNpdGlvbicpO1xuICAgICAgX3RoaXM1LmVsVGFyZ2V0LnN0eWxlW3NUU10gPSBcIm5vbmVcIjtcblxuICAgICAgX2N1LnNldFRyYW5zbGF0ZTNkWFBlcmNlbnQoX3RoaXM1LmVsVGFyZ2V0LCBfdGhpczUubk5leHROdW1iZXIgKiAtMTAwKTtcblxuICAgICAgaWYgKF90aGlzNS5vcHRpb24uYkNpcmN1bGFyKSB7XG4gICAgICAgIF90aGlzNS5fcmVzdG9yZVRyYW5zZm9ybVhQZXJjZW50KF90aGlzNS5uTmV4dE51bWJlcik7XG4gICAgICB9XG5cbiAgICAgIF9Db21tb25Db21wb25lbnQzLnByb3RvdHlwZS5ydW5DdXN0b21Gbi5jYWxsKF90aGlzNSwgJ1VTRVInLCAnRk5fQUZURVJfU1dJUEUnLCBfdGhpczUubk5leHROdW1iZXIpO1xuICAgICAgX0NvbW1vbkNvbXBvbmVudDMucHJvdG90eXBlLnJ1bkN1c3RvbUZuLmNhbGwoX3RoaXM1LCAnUExVR0lOJywgJ0ZOX0FGVEVSX1NXSVBFJywgX3RoaXM1Lm5OZXh0TnVtYmVyKTtcblxuICAgICAgaWYgKF90aGlzNS5vcHRpb24uYlNldHRpbmdTY3JlZW5IZWlnaHQpIF9jdS5zZXREeW5hbWljSGVpZ2h0KF90aGlzNS5uTmV4dE51bWJlciwgX3RoaXM1LmVsVGFyZ2V0LCBfdGhpczUub3B0aW9uLmJDaXJjdWxhcik7XG5cbiAgICAgIF90aGlzNS5uTmV4dE51bWJlciA9IDA7XG5cbiAgICAgIF90aGlzNS5iQW5pbWF0aW9uaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuc2V0TmV4dE51bWJlciA9IGZ1bmN0aW9uIHNldE5leHROdW1iZXIobk5leHROdW1iZXIpIHtcbiAgICB0aGlzLm5OZXh0TnVtYmVyID0gbk5leHROdW1iZXI7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuZ2V0Q3VycmVudFZpZXdOdW1iZXIgPSBmdW5jdGlvbiBnZXRDdXJyZW50Vmlld051bWJlcigpIHtcbiAgICB2YXIgbkluZGV4ID0gTWF0aC5hYnMoX2N1LmdldFRyYW5zbGF0ZTNkWCh0aGlzLmVsVGFyZ2V0KSkgLyB0aGlzLm5Td2lwZVdpZHRoO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG5JbmRleCk7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuX2dldE5leHRWaWV3TnVtYmVyID0gZnVuY3Rpb24gX2dldE5leHRWaWV3TnVtYmVyKG5Qb3MsIHNEaXJlY3Rpb24sIGJTd2lwZUdvKSB7XG4gICAgdmFyIG5JbmRleCA9IE1hdGgucm91bmQoLShuUG9zIC8gdGhpcy5uU3dpcGVXaWR0aCkpO1xuICAgIGlmICghYlN3aXBlR28pIHJldHVybiBuSW5kZXg7XG4gICAgcmV0dXJuIHNEaXJlY3Rpb24gPT09IFwibGVmdFwiID8gKytuSW5kZXggOiAtLW5JbmRleDtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5kcmFnQXJlYSA9IGZ1bmN0aW9uIGRyYWdBcmVhKG5QcmVYLCBuTW92ZURpZmYpIHtcbiAgICB0aGlzLmJPdXRSYW5nZVJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5iT3V0UmFuZ2VMZWZ0ID0gZmFsc2U7XG5cbiAgICAvL2NoZWNrIHZhbGlkIHN3aXBlIHJhbmdlLiBcblxuICAgIC8vd2hlbiBnbyB0byBsZWZ0IG9uIGxlZnQtc2lkZS5cbiAgICBpZiAoblByZVggPj0gdGhpcy5uTWF4U3dpcGVSYW5nZSkgdGhpcy5iT3V0UmFuZ2VMZWZ0ID0gdHJ1ZTtcblxuICAgIC8vd2hlbiBnbyB0byByaWdodCBvbiByaWdodC1zaWRlLlxuICAgIGlmIChuUHJlWCA8PSB0aGlzLm5NaW5Td2lwZVJhbmdlKSB0aGlzLmJPdXRSYW5nZVJpZ2h0ID0gdHJ1ZTtcblxuICAgIHZhciBuTmV3VmFsdWUgPSBuUHJlWCArIG5Nb3ZlRGlmZjtcblxuICAgIGlmIChuTmV3VmFsdWUgPiB0aGlzLm5NYXhWYWx1ZSkgbk5ld1ZhbHVlID0gdGhpcy5uTWF4VmFsdWU7XG4gICAgaWYgKG5OZXdWYWx1ZSA8IHRoaXMubk1pblZhbHVlKSBuTmV3VmFsdWUgPSB0aGlzLm5NaW5WYWx1ZTtcblxuICAgIF9jdS5zZXRUcmFuc2xhdGUzZFgodGhpcy5lbFRhcmdldCwgbk5ld1ZhbHVlKTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5ydW5UcmFuc2l0aW9uID0gZnVuY3Rpb24gcnVuVHJhbnNpdGlvbihlbFRhcmdldCwgbkRpc3RhbmNlLCBuRHVyYXRpb24pIHtcbiAgICB0aGlzLmJBbmltYXRpb25pbmcgPSB0cnVlO1xuXG4gICAgdmFyIG5QcmV2aW91c1RyYW5zbGF0ZVggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYKGVsVGFyZ2V0KTtcblxuICAgIHZhciBzVFMgPSBfY3UuZ2V0Q1NTTmFtZSgndHJhbnNpdGlvbicpO1xuICAgIHZhciBzVEYgPSBfY3UuZ2V0Q1NTTmFtZSgndHJhbnNmb3JtJyk7XG4gICAgdmFyIHNWYWx1ZSA9IFwiXCI7XG5cbiAgICBpZiAoc1RGID09PSBcIndlYmtpdFRyYW5zZm9ybVwiKSBzVmFsdWUgPSBcIi13ZWJraXQtdHJhbnNmb3JtXCI7ZWxzZSBpZiAoc1RGID09PSBcInRyYW5zZm9ybVwiKSBzVmFsdWUgPSBcInRyYW5zZm9ybVwiO2Vsc2Uge31cblxuICAgIGVsVGFyZ2V0LnN0eWxlW3NUU10gPSBzVmFsdWUgKyBcIiBcIiArIG5EdXJhdGlvbiArIFwic1wiO1xuICAgIGVsVGFyZ2V0LnN0eWxlW3NURl0gPSAndHJhbnNsYXRlM2QoJyArIChuUHJldmlvdXNUcmFuc2xhdGVYICsgbkRpc3RhbmNlKSArICdweCwgMCwgMCknO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJ1bkF1dG9BbmltYXRpb24gPSBmdW5jdGlvbiBydW5BdXRvQW5pbWF0aW9uKHNEaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5iQW5pbWF0aW9uaW5nKSByZXR1cm47XG4gICAgdmFyIG5DdXIgPSB0aGlzLmdldEN1cnJlbnRWaWV3TnVtYmVyKCk7XG4gICAgdmFyIG5XaWR0aCA9IHRoaXMublN3aXBlV2lkdGg7XG5cbiAgICBpZiAoc0RpcmVjdGlvbiA9PT0gXCJ0b1JpZ2h0XCIpIHtcbiAgICAgIG5XaWR0aCAqPSAtMTtcbiAgICAgIG5DdXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgbkN1ci0tO1xuICAgIH1cblxuICAgIG5DdXIgPSB0aGlzLnJlQWRqdXN0TmV4dE51bWJlckZvckNpcmN1bGFyKG5DdXIpO1xuXG4gICAgdGhpcy5ydW5Td2lwZUFjdGlvbih0aGlzLm9wdGlvbi5uRHVyYXRpb24sIG5DdXIsIG5XaWR0aCk7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucmVjYWxjdWxhdGVXaWR0aCA9IGZ1bmN0aW9uIHJlY2FsY3VsYXRlV2lkdGgoKSB7XG4gICAgdmFyIHJlc2l6ZXJ1bm5lciA9IGZhbHNlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIGlmIChyZXNpemVydW5uZXIpIHJldHVybjtcbiAgICAgIHJlc2l6ZXJ1bm5lciA9IHRydWU7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczYublN3aXBlV2lkdGggPSBfY3UuZ2V0V2lkdGgoX3RoaXM2LmVsVGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgcmVzaXplcnVubmVyID0gZmFsc2U7XG4gICAgICB9LCAxMDApO1xuICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiBTd2VldFN3aXBlO1xufShDb21tb25Db21wb25lbnQpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJykgbW9kdWxlLmV4cG9ydHMgPSB7XG4gIFN3ZWV0U3dpcGU6IFN3ZWV0U3dpcGUsXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbjogU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLFxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbjogU3dpcGVTdGVwTW92ZXJQbHVnaW5cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2lwZV9tZXJnZV9lczUuanMubWFwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3N3aXBlX21lcmdlX2VzNS5qcyIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiLCJpbXBvcnQgKiBhcyBTd2lwZSBmcm9tICcuL2xpYi9zd2lwZV9tZXJnZV9lczUuanMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2NvbW1vbi5qcyc7XG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5cbi8vaW1wb3J0IF8gZnJvbSAnLi9saWIvXy5qcyc7XG5cbmZ1bmN0aW9uIGluaXRTd2lwZU1vZHVsZSgpIHtcblx0Y29uc3QgZWxTd2FwV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlzdWFsX2ltZ1wiKTtcblx0Y29uc3Qgb015c3dpcGUgPSBuZXcgU3dpcGUuU3dlZXRTd2lwZSggZWxTd2FwV3JhcCwge1xuXHRcdCdiQ2lyY3VsYXInIDogdHJ1ZSxcbiAgICAnbkR1cmF0aW9uJyA6IDMwMCwgIC8vZGVmYXVsdCAxMDBcbiAgICAnbkJhY2tXaWR0aCcgOiA2MCwgIC8vZGVmYXVsdCA2MFxuICAgICduU2lkZVdpZHRoJyA6IDIwLCAgLy9kZWZhdWx0IDBcbiAgICAnbkRlY2lzaW9uU2xvcGUnIDogMC44LCAvL2RlZmF1bHQgMC44XG4gICAgJ25Gb3JjZWRTd2lwZVRpbWUnIDogMTAwLCAvL2RlZmF1bHQgMFxuICAgICdiU2V0dGluZ1NjcmVlbkhlaWdodCc6IHRydWUsXG4gICAgJ2JNb3VzZUV2ZW50U3VwcG9ydCcgOiB0cnVlXG4gIH0pO1xuXG5cdG9NeXN3aXBlLnJlZ2lzdGVyVXNlck1ldGhvZCh7XG5cdFx0J0ZOX0JFRk9SRV9TV0lQRSc6IGZ1bmN0aW9uKG4pe30sXG5cdFx0J0ZOX0FGVEVSX1NXSVBFJzogZnVuY3Rpb24obil7fSxcblx0XHQnRk5fQ09NUE9ORU5UX0RJRF9MT0FEJyA6IGZ1bmN0aW9uKCl7fVxuXHR9KTtcblxuXHRvTXlzd2lwZS5vblBsdWdpbnMoW1xuXHR7XG5cdFx0J25hbWUnICAgICAgOiAnU3dpcGVTdGVwTW92ZXJQbHVnaW4nLFxuXHRcdCdvcHRpb24nICAgIDoge1xuXHRcdFx0J3ByZXZCdXR0b24nIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fcHJlX2VcIiksXG5cdFx0XHQnbmV4dEJ1dHRvbicgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9ueHRfZVwiKSxcblx0XHRcdCduRHVyYXRpb24nOiAyMDBcblx0XHR9LFxuXHRcdCd1c2VyTWV0aG9kJyA6IHt9LFxuXHRcdCdvYmonIDogU3dpcGUuU3dpcGVTdGVwTW92ZXJQbHVnaW5cblx0fV0pO1xuXG5cdCEoZnVuY3Rpb24gbW92ZVBhbmVsKCkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdG9NeXN3aXBlLnJ1bkF1dG9BbmltYXRpb24oXCJ0b1JpZ2h0XCIpO1xuXHRcdFx0bW92ZVBhbmVsKCk7XG5cdFx0fSwgMjAwMCk7XG5cdH0pKCk7XG59XG5cbmZ1bmN0aW9uIHNldFByb21vdGlvbkltYWdlcyhmbkFmdGVyQ2FsbGJhY2spIHtcblx0Y29uc3QgdGFyZ2V0ID0gXy4kKFwiLnZpc3VhbF9pbWdcIik7XG5cdF8uZ2V0RGF0YSgnaHR0cDovLzIxMS4yNDkuNjIuMTIzL2FwaS9wcm9tb3Rpb25zJywgKHtpdGVtc30pID0+IHtcblx0XHRjb25zdCBsaXN0VHBsID0gXy4kKFwiI3Byb21vdGlvbkl0ZW1cIikuaW5uZXJIVE1MO1xuXG5cdFx0aXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGNvbnN0IHByb2R1Y3RJZCA9IGl0ZW0ucHJvZHVjdElkO1xuXHRcdFx0Y29uc3QgcHJvZHVjdEltYWdlSWQgPSBpdGVtLnByb2R1Y3RJbWFnZUlkO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZXZhbCgnYCcgKyBsaXN0VHBsKyAnYCcpO1xuXHRcdFx0dGFyZ2V0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCByZXN1bHQpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgZmlyc3QgPSB0YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdGNvbnN0IGxhc3QgPSB0YXJnZXQubGFzdEVsZW1lbnRDaGlsZC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKGZpcnN0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKGxhc3QsIHRhcmdldC5maXJzdEVsZW1lbnRDaGlsZCk7XG5cblx0XHRmbkFmdGVyQ2FsbGJhY2soKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGluaXRUYWJNb2R1bGUoKSB7XG5cdGNvbnN0IGl0ZW1LaW5kcyA9IF9nZXRJdGVtS2luZHMoKTtcblx0Y29uc3QgZWxUYWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVudF90YWJfbHN0XCIpO1xuXHRjb25zdCBlbE1vcmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blwiKTtcblx0bGV0IHRhYk1lbnVPYmogPSBudWxsO1xuXG5cdC8vdGFiIOy7tO2PrOuEjO2KuCDrj5nsnpFcblx0LyouIFxuXHRcdOydtOuFgOyEneydgCBodG1s7YyM7J287J2EIOq4sOykgOycvOuhnCDrlJTroInthqDrpqzrpbwg7LC+64qU64ukLiBcblx0XHTrlLDrnbzshJwgaHRtbOqzvCDqsJnsnYAg65SU66CJ7Yag66as7JeQIOuyiOuTpOychOy5mOulvCDshKTsoJXtlbTrkZDsl4jri6QuICh3ZWJwYWNrLmNvbW9uLmpzIG91dHB1dC1jaHVua0ZpbGVuYW1l7ZWt66qp6rCZ7J20IOywuOqzoClcblx0Ki9cblx0ZnVuY3Rpb24gaW5pdFRhYkNvbXBvbmVudCgpIHtcblx0XHRyZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWFpbl9UYWJtZW51XCIgKi8gJy4vbWFpbl9UYWJtZW51LmpzJykudGhlbih0YWJPYmogPT4ge1xuXHRcdFx0cmV0dXJuIHRhYk9iai5kZWZhdWx0O1xuXHRcdH0pXG5cdH1cblxuXHQvKiBBRlRFUl9DQUxMQkFDSyBMSVNUICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0Ly8gZnVuY3Rpb24gYWZ0ZXJUYWJDb250ZW50Q2hhbmdlKCkge1xuXHQvLyBcdGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVudF9sc3RfdHh0IHNwYW4ucGlua1wiKTtcblx0Ly8gXHRjb25zdCBsaUxpc3RMZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxzdF9ldmVudF9ib3ggbGlcIikubGVuZ3RoO1xuXHQvLyBcdGVsLmlubmVyVGV4dCA9IGxpTGlzdExlbiArIFwi6rCcXCI7XG5cdC8vIH1cblxuXG5cdGZ1bmN0aW9uIGRlY2lkZUJ0blZpc2libGUoKSB7XG5cdFx0Y29uc3QgZWxidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vcmUgLmJ0blwiKTtcblx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxzdF9ldmVudF9ib3ggbGlcIikubGVuZ3RoID4gNCkge1xuXHRcdFx0ZWxidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGFmdGVyVGFiQ29udGVudENoYW5nZSgpIHtcblx0XHQvL2RlY2lkZUJ0blZpc2libGUoKTtcblx0fVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHQvL2ZpbGwgZmlyc3QgdGFiIG1lbnUgY29udGVudFxuXHRpbml0VGFiQ29tcG9uZW50KCkudGhlbigodGFiQ2xhc3MpID0+IHtcblx0XHR0YWJNZW51T2JqID0gdGFiTWVudU9iaiB8fCBuZXcgdGFiQ2xhc3MoZWxUYWJNZW51LCBpdGVtS2luZHMsIGFmdGVyVGFiQ29udGVudENoYW5nZSk7XG5cdFx0dGFiTWVudU9iai5ydW4oMCwgZmFsc2UpO1xuXHR9KTtcblxuXHQvL1RhYk1lbnUgcmVnaXN0IGV2ZW50IFxuXHRlbFRhYk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICh7dGFyZ2V0fSkgPT4ge1xuXHRcdGlmKHRhcmdldC5ub2RlTmFtZSA9PT0gXCJVTFwiKSByZXR1cm47XG5cdFx0Y29uc3QgbGlzdEl0ZW0gPSB0YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpO1xuXHRcdGNvbnN0IGxpc3RJZHggPSBsaXN0SXRlbS5kYXRhc2V0LmNhdGVnb3J5O1xuXHRcdGNvbnN0IGEgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmFuY2hvclwiKTtcblxuXHRcdGVsVGFiTWVudS5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdGEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuXHRcdGluaXRUYWJDb21wb25lbnQoKS50aGVuKCh0YWJDbGFzcykgPT4ge1xuXHRcdFx0dGFiTWVudU9iaiA9IHRhYk1lbnVPYmogfHwgbmV3IHRhYkNsYXNzKGVsVGFiTWVudSwgaXRlbUtpbmRzLCBhZnRlclRhYkNvbnRlbnRDaGFuZ2UpO1xuXHRcdFx0dGFiTWVudU9iai5ydW4oTnVtYmVyKGxpc3RJZHgpLCBmYWxzZSk7XG5cdFx0fSk7XG5cblx0fSk7XG5cblx0Ly9Nb3JlQnRuIHJlZ2lzdCBldmVudFxuXHRlbE1vcmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcblx0XHRjb25zdCBjdXJyZW50SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZW50X3RhYl9sc3QgLmFjdGl2ZVwiKS5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY2F0ZWdvcnk7XG5cblx0XHRpbml0VGFiQ29tcG9uZW50KCkudGhlbigodGFiQ2xhc3MpID0+IHtcblx0XHRcdHRhYk1lbnVPYmogPSB0YWJNZW51T2JqIHx8IG5ldyB0YWJDbGFzcyhlbFRhYk1lbnUsIGl0ZW1LaW5kcywgYWZ0ZXJUYWJDb250ZW50Q2hhbmdlKTtcblx0XHRcdHRhYk1lbnVPYmoucnVuKE51bWJlcihjdXJyZW50SW5kZXgpLCB0cnVlKTtcblx0XHR9KTtcblx0fSxmYWxzZSk7XG5cblx0ZnVuY3Rpb24gX2dldEl0ZW1LaW5kcygpIHtcblx0XHRjb25zdCB0ZXN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXZlbnRfdGFiX2xzdCBsaSBhIHNwYW5cIik7XG5cdFx0Y29uc3QgaXRlbUtpbmRzID0gQXJyYXkuZnJvbSh0ZXN0TGlzdCkubWFwKCh2KT0+IHtcblx0XHRcdHJldHVybiB2LmlubmVyVGV4dDtcblx0XHR9KTtcblx0XHRyZXR1cm4gaXRlbUtpbmRzO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoZWNrTG9naW5Gcm9tU3RvcmFnZSgpIHtcblx0Y29uc3QgZW1haWwgPSBfLmdldEVtYWlsKCk7XG5cdGNvbnN0IGVsVmlld1Jlc2VydmF0aW9uICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlld1Jlc2VydmF0aW9uXCIpO1xuXHRpZihlbWFpbCAhPT0gbnVsbCkgZWxWaWV3UmVzZXJ2YXRpb24uaW5uZXJUZXh0ID0gZW1haWw7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGV2dCA9PiB7XG5cdHNldFByb21vdGlvbkltYWdlcyhpbml0U3dpcGVNb2R1bGUpO1xuXHRpbml0VGFiTW9kdWxlKCk7XG5cdGNoZWNrTG9naW5Gcm9tU3RvcmFnZSgpO1xufSk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9
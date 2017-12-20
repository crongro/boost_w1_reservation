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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _swipe_merge_es = __webpack_require__(0);

var Swipe = _interopRequireWildcard(_swipe_merge_es);

__webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function initSwipeModule() {
	var elSwapWrap = document.querySelector(".visual_img");
	var oMyswipe = new Swipe.SweetSwipe(elSwapWrap, {
		'bCircular': true,
		'nDuration': 300, //default 100
		'nBackWidth': 60, //default 60
		'nSideWidth': 20, //default 0
		'nDecisionSlope': 0.8, //default 0.8
		'nForcedSwipeTime': 100, //default 0
		'bSettingScreenHeight': false,
		'bMouseEventSupport': true
	});

	oMyswipe.registerUserMethod({
		'FN_BEFORE_SWIPE': function FN_BEFORE_SWIPE(n) {},
		'FN_AFTER_SWIPE': function FN_AFTER_SWIPE(n) {
			var elNum = document.querySelector(".figure_pagination .num:nth-child(1)");
			elNum.innerText = n + 1;
		},
		'FN_COMPONENT_DID_LOAD': function FN_COMPONENT_DID_LOAD() {}
	});

	oMyswipe.onPlugins([{
		'name': 'SwipeStepMoverPlugin',
		'option': {
			'prevButton': document.querySelector(".btn_prev"),
			'nextButton': document.querySelector(".btn_nxt"),
			'nDuration': 100
		},
		'userMethod': {},
		'obj': Swipe.SwipeStepMoverPlugin
	}]);
}

/* layer open - close */

function toggleDetailInfo() {
	var elMores = document.querySelectorAll(".bk_more");
	var elStore_details = document.querySelector(".store_details");

	Array.prototype.forEach.call(elMores, function (element, index) {
		element.addEventListener("click", function (_ref) {
			var currentTarget = _ref.currentTarget;


			if (currentTarget.classList.contains("_open")) currentTarget.nextElementSibling.style.display = "block";else currentTarget.previousElementSibling.style.display = "block";

			elStore_details.classList.toggle("close3");
			currentTarget.style.display = "none";
		}, false);
	});
}

function regReserveLink() {
	var el = document.querySelector(".bk_btn");
	el.addEventListener("click", function (evt) {
		location.href = "./reserve.html";
	}, false);
}

function initTabToggle() {
	var ul = document.querySelector(".info_tab_lst");
	var detail_area_wrap = document.querySelector(".detail_area_wrap");
	var detail_location = document.querySelector(".detail_location");

	ul.addEventListener("click", function (evt) {
		evt.preventDefault();
		var li = evt.target.closest('li');

		if (li.classList.contains("_path")) {
			detail_area_wrap.classList.add("hide");
			detail_location.classList.remove("hide");
			li.previousElementSibling.firstElementChild.classList.remove("active");
		} else {
			detail_area_wrap.classList.remove("hide");
			detail_location.classList.add("hide");
			li.nextElementSibling.firstElementChild.classList.remove("active");
		}

		li.firstElementChild.classList.add("active");
	});
}

document.addEventListener("DOMContentLoaded", function (evt) {
	initSwipeModule();
	toggleDetailInfo();
	regReserveLink();
	initTabToggle();
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjViZjFlODgxMTJhYjdkMmU3NDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zd2lwZV9tZXJnZV9lczUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGV0YWlsLmpzIl0sIm5hbWVzIjpbIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImFycjIiLCJsZW5ndGgiLCJmcm9tIiwiX2RlZmF1bHRzIiwiZGVmYXVsdHMiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImtleSIsInZhbHVlIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwidW5kZWZpbmVkIiwiZGVmaW5lUHJvcGVydHkiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJjYWxsIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJUeXBlRXJyb3IiLCJjcmVhdGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJzZXRQcm90b3R5cGVPZiIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfY3UiLCJnZXRGbk5hbWUiLCJmbiIsInNOYW1lIiwibmFtZSIsInRvU3RyaW5nIiwibWF0Y2giLCJzZXRUcmFuc2xhdGUzZFgiLCJlbGUiLCJuVmFsdWUiLCJzVEYiLCJnZXRDU1NOYW1lIiwic3R5bGUiLCJzZXRUcmFuc2xhdGUzZFhQZXJjZW50IiwiZ2V0V2lkdGgiLCJuV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaHRDYWNoZURhdGEiLCJfaHROYW1lU2V0IiwiYU5hbWVMaXN0IiwiaXNFeGlzdCIsImxlbiIsImRvY3VtZW50IiwiYm9keSIsImdldENoaWxkT3JkZXIiLCJlbENoaWxkIiwiZWxQYXJlbnQiLCJwYXJlbnROb2RlIiwibkluZGV4IiwiaW5kZXhPZiIsImNoaWxkcmVuIiwiZ2V0VHJhbnNsYXRlM2RYIiwic1ByZUNzcyIsIm5QcmVYIiwicmVwbGFjZSIsImZpcnN0RWxlbWVudENoaWxkIiwiZ2V0VHJhbnNsYXRlM2RYUGVyY2VudCIsImdldENTU1RyYW5zaXRpb25FbmQiLCJzVFMiLCJzVFNFIiwic2V0RHluYW1pY0hlaWdodCIsIm5OZXh0TnVtYmVyIiwidGFyZ2V0IiwiYkNpcmN1bGFyIiwiZWxDdXJyZW50IiwibkhlaWdodCIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImhlaWdodCIsInNldENTUyIsImVsIiwic2hvd0xheWVyIiwiZGlzcGxheSIsImNsb3NlTGF5ZXIiLCJkYXRhIiwiX2EiLCJpc0Z1bmN0aW9uIiwiQ29tbW9uQ29tcG9uZW50IiwiZWxUYXJnZXQiLCJodE9wdGlvbiIsImluaXQiLCJzZXRJbml0VmFsdWUiLCJzZXRPcHRpb24iLCJfaHREZWZhdWx0T3B0aW9uIiwib3B0aW9uIiwiaW5pdFZhbHVlIiwicmVnaXN0ZXJFdmVudHMiLCJERUZBVUxUX0NPUkVfRVZFTlQiLCJfZCIsIkNPTVBPTkVOVF9DT05GSUciLCJiTWFpbkNvbXBvbmVudCIsIlBMVUdJTlMiLCJERUZBVUxUX09QVElPTiIsImFNeVBsdWdpbk5hbWUiLCJodERlZmF1bHRGbiIsImdldERlZmF1bHRDYWxsYmFja0xpc3QiLCJjb25jYXQiLCJERUZBVUxUX0NPTVBPTkVOVF9FVkVOVCIsImh0RGVmYXVsdFBsdWdpbkZuIiwiREVGQVVMVF9QTFVHSU5fRVZFTlQiLCJodFVzZXJGbiIsImh0UGx1Z2luRm4iLCJyZWdpc3RlclVzZXJNZXRob2QiLCJodEZuIiwicmVnaXN0ZXJQbHVnaW5NZXRob2QiLCJhcHBlbmRQbHVnaW5NZXRob2QiLCJvblBsdWdpbnMiLCJhUGx1Z2luTGlzdCIsImluaXRQbHVnaW5zIiwiY29tcG9uZW50RGlkTG9hZGVkIiwiaHRWYWx1ZSIsImh0RGVmYXVsdFZhbHVlIiwiaHRTdG9yYWdlIiwiX3RoaXMiLCJmb3JFYWNoIiwidiIsInB1c2giLCJhRm4iLCJfdGhpczIiLCJvUGFyZW50Iiwib1BsdWdpbiIsInVzZXJNZXRob2QiLCJfaW5qZWN0UGFyZW50T2JqZWN0IiwicnVuQ3VzdG9tRm4iLCJ0eXBlIiwiZXZlbnRuYW1lIiwiYXJncyIsInNsaWNlIiwiYXJndW1lbnRzIiwicmV0dXJuVmFsdWUiLCJfaHRVc2VyRm4iLCJhcHBseSIsIm9DaGlsZCIsImRvY2tpbmdQbHVnaW5NZXRob2QiLCJTd2lwZU5hdmlnYXRpb25QbHVnaW4iLCJfQ29tbW9uQ29tcG9uZW50IiwiU0VMRUNUT1IiLCJlbFBsdWdpblRhcmdldCIsImVsTmF2aVdyYXAiLCJvUGFyZW50SW5zdGFuY2UiLCJtb3ZlU3dpcGVBcmVhIiwibGlzIiwicXVlcnlTZWxlY3RvckFsbCIsInRoYXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJtb3ZlcGFyZW50U3dpcGVQYW5lbCIsImJNb3VzZUV2ZW50U3VwcG9ydCIsIl9pIiwiblN3aXBlV2lkdGgiLCJuQ2hpbGRPcmRlciIsIm5EaWZmIiwiZ2V0Q3VycmVudFZpZXdOdW1iZXIiLCJuTW92ZVZhbHVlIiwicnVuU3dpcGVBY3Rpb24iLCJuRHVyYXRpb24iLCJoaWdobGlnaHRTZWxlY3RlZExJIiwiblNlbGVjdGVkQ291bnQiLCJfbGkiLCJxdWVyeVNlbGVjdG9yIiwic2VsZXRlZENsYXNzTmFtZSIsIl9jdXJDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJiaW5kIiwiRk5fQUZURVJfU1dJUEUiLCJTd2lwZVN0ZXBNb3ZlclBsdWdpbiIsIl9Db21tb25Db21wb25lbnQyIiwiZWxQcmV2QnRuIiwicHJldkJ1dHRvbiIsImVsTmV4dEJ0biIsIm5leHRCdXR0b24iLCJfdGhpczMiLCJldnQiLCJoYW5kbGVyQ2xpY2tCdXR0b24iLCJzRGlyZWN0aW9uIiwiYkFuaW1hdGlvbmluZyIsIm5DdXIiLCJuU3dpcGVFbGVtZW50Q291bnQiLCJyZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhciIsInNldERpc3BsYXlPZkJ1dHRvbiIsIm5DdXJyZW50UGFuZWwiLCJuTWF4UGFuZWwiLCJTd2VldFN3aXBlIiwiX0NvbW1vbkNvbXBvbmVudDMiLCJiU2V0dGluZ1NjcmVlbkhlaWdodCIsImNoaWxkRWxlbWVudENvdW50Iiwibk1heFN3aXBlUmFuZ2UiLCJuTWluU3dpcGVSYW5nZSIsIm5NYXhWYWx1ZSIsIm5TaWRlV2lkdGgiLCJuTWluVmFsdWUiLCJyZWNhbGN1bGF0ZVdpZHRoIiwiX3RoaXM0IiwiYlRvdWNoRXZlbnRTdXBwb3J0IiwiaGFuZGxlclRvdWNoU3RhcnQiLCJoYW5kbGVyVG91Y2hNb3ZlIiwiaGFuZGxlclRvdWNoRW5kIiwicmVnaXN0ZXJUcmFuc2l0aW9uRW5kIiwic3RvcFByb3BhZ2F0aW9uIiwiYlN3aXBlIiwiYkZpcnN0VG91Y2hNb3ZlIiwiYk1vdXNlRXZlbnQiLCJzdWJzdHIiLCJwYWdlWCIsInBhZ2VZIiwiY2hhbmdlZFRvdWNoZXMiLCJuU3RhcnRQb3NYIiwiTWF0aCIsImZsb29yIiwiblN0YXJ0UG9zWSIsIm5TdGFydFRyYW5zbGF0ZVgiLCJuVG91Y2hTdGFydFRpbWUiLCJEYXRlIiwibm93IiwiaHRDdXJyZW50RXZ0Iiwibk1vdmVQb3NYIiwibk1vdmVQb3NZIiwibkFuZ2xlRGlmZiIsImFicyIsIm5EZWNpc2lvblNsb3BlIiwiblByZU1vdmVYIiwicHJldmVudERlZmF1bHQiLCJuTW92ZURpZmYiLCJuUHJldmlvdXNYIiwiZHJhZ0FyZWEiLCJuUHJlTW92ZVkiLCJiT3V0UmFuZ2VSaWdodCIsImJPdXRSYW5nZUxlZnQiLCJuV2lkdGhGb3JBbmltYXRpb24iLCJuVG91Y2hFbmRUaW1lIiwibkRpZmZUb3VjaFRpbWUiLCJuTGFzdFRyYW5zbGF0ZVgiLCJuRGlmZlRyYW5zbGF0ZVgiLCJiU3dpcGVXaWR0aCIsImJTd2lwZVRpbWUiLCJiU3dpcGVHbyIsIm5CYWNrV2lkdGgiLCJuRm9yY2VkU3dpcGVUaW1lIiwiX2dldE5leHRWaWV3TnVtYmVyIiwicm91bmQiLCJzZXROZXh0TnVtYmVyIiwicnVuVHJhbnNpdGlvbiIsIl9yZXN0b3JlVHJhbnNmb3JtWFBlcmNlbnQiLCJuUGFuZWxJbmRleCIsIm5QYW5lbENvdW50IiwiblBhbmVsV2lkdGgiLCJfdGhpczUiLCJuUG9zIiwibk5ld1ZhbHVlIiwibkRpc3RhbmNlIiwiblByZXZpb3VzVHJhbnNsYXRlWCIsInNWYWx1ZSIsInJ1bkF1dG9BbmltYXRpb24iLCJyZXNpemVydW5uZXIiLCJ3aW5kb3ciLCJfdGhpczYiLCJzZXRUaW1lb3V0IiwibW9kdWxlIiwiZXhwb3J0cyIsIlN3aXBlIiwiaW5pdFN3aXBlTW9kdWxlIiwiZWxTd2FwV3JhcCIsIm9NeXN3aXBlIiwibiIsImVsTnVtIiwiaW5uZXJUZXh0IiwidG9nZ2xlRGV0YWlsSW5mbyIsImVsTW9yZXMiLCJlbFN0b3JlX2RldGFpbHMiLCJlbGVtZW50IiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidG9nZ2xlIiwicmVnUmVzZXJ2ZUxpbmsiLCJsb2NhdGlvbiIsImhyZWYiLCJpbml0VGFiVG9nZ2xlIiwidWwiLCJkZXRhaWxfYXJlYV93cmFwIiwiZGV0YWlsX2xvY2F0aW9uIiwibGkiLCJjbG9zZXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFYLENBQW1CLElBQW5CLENBQVg7O0FBRUEsTUFBR0QsR0FBR1osU0FBSCxDQUFhQyxRQUFiLENBQXNCLE9BQXRCLENBQUgsRUFBbUM7QUFDbENTLG9CQUFpQlYsU0FBakIsQ0FBMkJjLEdBQTNCLENBQStCLE1BQS9CO0FBQ0FILG1CQUFnQlgsU0FBaEIsQ0FBMEJlLE1BQTFCLENBQWlDLE1BQWpDO0FBQ0FILE1BQUdULHNCQUFILENBQTBCNU4saUJBQTFCLENBQTRDeU4sU0FBNUMsQ0FBc0RlLE1BQXRELENBQTZELFFBQTdEO0FBQ0EsR0FKRCxNQUlPO0FBQ05MLG9CQUFpQlYsU0FBakIsQ0FBMkJlLE1BQTNCLENBQWtDLE1BQWxDO0FBQ0FKLG1CQUFnQlgsU0FBaEIsQ0FBMEJjLEdBQTFCLENBQThCLE1BQTlCO0FBQ0FGLE1BQUdWLGtCQUFILENBQXNCM04saUJBQXRCLENBQXdDeU4sU0FBeEMsQ0FBa0RlLE1BQWxELENBQXlELFFBQXpEO0FBQ0E7O0FBRURILEtBQUdyTyxpQkFBSCxDQUFxQnlOLFNBQXJCLENBQStCYyxHQUEvQixDQUFtQyxRQUFuQztBQUNBLEVBZkQ7QUFnQkE7O0FBRURwUCxTQUFTc0csZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLGVBQU87QUFDcERvSDtBQUNBTTtBQUNBVztBQUNBRztBQUNBLENBTEQsRSIsImZpbGUiOiJidW5kbGUvZGV0YWlsLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI1YmYxZTg4MTEyYWI3ZDJlNzQwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpO2ZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO3ZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7aWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1yZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfXJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHN1cGVyQ2xhc3MpKSk7XG4gIH1zdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pO2lmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxudmFyIF9jdSA9IHtcbiAgZ2V0Rm5OYW1lOiBmdW5jdGlvbiBnZXRGbk5hbWUoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybjtcbiAgICB2YXIgc05hbWUgPSBmbi5uYW1lID8gZm4ubmFtZSA6IGZuLnRvU3RyaW5nKCkubWF0Y2goL2Z1bmN0aW9uXFxzKyhbXihcXCh8XFxzKV0rKS8pWzFdO1xuICAgIHJldHVybiBzTmFtZTtcbiAgfSxcbiAgc2V0VHJhbnNsYXRlM2RYOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUzZFgoZWxlLCBuVmFsdWUpIHtcbiAgICB2YXIgc1RGID0gdGhpcy5nZXRDU1NOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgICBlbGUuc3R5bGVbc1RGXSA9ICd0cmFuc2xhdGUzZCgnICsgblZhbHVlICsgJ3B4LCAwLCAwKSc7XG4gIH0sXG4gIHNldFRyYW5zbGF0ZTNkWFBlcmNlbnQ6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZTNkWFBlcmNlbnQoZWxlLCBuVmFsdWUpIHtcbiAgICB2YXIgc1RGID0gdGhpcy5nZXRDU1NOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgICBlbGUuc3R5bGVbc1RGXSA9ICd0cmFuc2xhdGUzZCgnICsgblZhbHVlICsgJyUsIDAsIDApJztcbiAgfSxcbiAgZ2V0V2lkdGg6IGZ1bmN0aW9uIGdldFdpZHRoKGVsZSkge1xuICAgIHZhciBuV2lkdGggPSAwO1xuXG4gICAgaWYgKGVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkge1xuICAgICAgbldpZHRoID0gZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBuV2lkdGggPSBlbGUub2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBuV2lkdGg7XG4gIH0sXG4gIGdldENTU05hbWU6IGZ1bmN0aW9uIGdldENTU05hbWUoc05hbWUpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuaHRDYWNoZURhdGEgPT09IFwidW5kZWZpbmVkXCIpIHRoaXMuaHRDYWNoZURhdGEgPSB7fTtcblxuICAgIGlmICh0aGlzLmh0Q2FjaGVEYXRhW3NOYW1lXSkgcmV0dXJuIHRoaXMuaHRDYWNoZURhdGFbc05hbWVdO1xuXG4gICAgdmFyIF9odE5hbWVTZXQgPSB7XG4gICAgICAndHJhbnNpdGlvbic6IFsnd2Via2l0VHJhbnNpdGlvbicsICd0cmFuc2l0aW9uJ10sXG4gICAgICAndHJhbnNmb3JtJzogWyd3ZWJraXRUcmFuc2Zvcm0nLCAndHJhbnNmb3JtJ11cbiAgICB9O1xuXG4gICAgdmFyIGFOYW1lTGlzdCA9IF9odE5hbWVTZXRbc05hbWVdO1xuXG4gICAgaWYgKCF0aGlzLmlzRXhpc3QoYU5hbWVMaXN0KSkgcmV0dXJuIG51bGw7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYU5hbWVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbYU5hbWVMaXN0W2ldXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5odENhY2hlRGF0YVtzTmFtZV0gPSBhTmFtZUxpc3RbaV07XG4gICAgICAgIHJldHVybiB0aGlzLmh0Q2FjaGVEYXRhW3NOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldENoaWxkT3JkZXI6IGZ1bmN0aW9uIGdldENoaWxkT3JkZXIoZWxDaGlsZCkge1xuICAgIHZhciBlbFBhcmVudCA9IGVsQ2hpbGQucGFyZW50Tm9kZTtcbiAgICB2YXIgbkluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChlbFBhcmVudC5jaGlsZHJlbiwgZWxDaGlsZCk7XG4gICAgcmV0dXJuIG5JbmRleDtcbiAgfSxcbiAgZ2V0VHJhbnNsYXRlM2RYOiBmdW5jdGlvbiBnZXRUcmFuc2xhdGUzZFgoZWxlKSB7XG4gICAgdmFyIHNURiA9IHRoaXMuZ2V0Q1NTTmFtZShcInRyYW5zZm9ybVwiKTtcbiAgICB2YXIgc1ByZUNzcyA9IGVsZS5zdHlsZVtzVEZdO1xuICAgIHZhciBuUHJlWCA9IDA7XG5cbiAgICBpZiAoc1ByZUNzcy5pbmRleE9mKFwiJVwiKSA9PT0gLTEpIHtcbiAgICAgIG5QcmVYID0gK3NQcmVDc3MucmVwbGFjZSgvdHJhbnNsYXRlM2RcXCgoLSpcXGQrKD86XFwuXFxkKykqKShweCkqXFwsLitcXCkvZywgXCIkMVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgblByZVggPSArc1ByZUNzcy5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKCgtKlxcZCsoPzpcXC5cXGQrKSopKCUpKlxcLC4rXFwpL2csIFwiJDFcIik7XG4gICAgICBuUHJlWCA9IG5QcmVYIC8gMTAwICogdGhpcy5nZXRXaWR0aChlbGUuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBuUHJlWDtcbiAgfSxcbiAgZ2V0VHJhbnNsYXRlM2RYUGVyY2VudDogZnVuY3Rpb24gZ2V0VHJhbnNsYXRlM2RYUGVyY2VudChlbGUpIHtcbiAgICB2YXIgc1RGID0gdGhpcy5nZXRDU1NOYW1lKFwidHJhbnNmb3JtXCIpO1xuICAgIHZhciBzUHJlQ3NzID0gZWxlLnN0eWxlW3NURl07XG4gICAgdmFyIG5QcmVYID0gK3NQcmVDc3MucmVwbGFjZSgvdHJhbnNsYXRlM2RcXCgoLSpcXGQrKD86XFwuXFxkKykqKSglKSpcXCwuK1xcKS9nLCBcIiQxXCIpO1xuICAgIHJldHVybiBuUHJlWDtcbiAgfSxcbiAgZ2V0Q1NTVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gZ2V0Q1NTVHJhbnNpdGlvbkVuZCgpIHtcbiAgICB2YXIgc1RTID0gdGhpcy5nZXRDU1NOYW1lKCd0cmFuc2l0aW9uJyk7XG4gICAgdmFyIHNUU0UgPSBzVFMgPT09IFwid2Via2l0VHJhbnNpdGlvblwiID8gXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIgOiBcInRyYW5zaXRpb25lbmRcIjtcbiAgICByZXR1cm4gc1RTRTtcbiAgfSxcbiAgc2V0RHluYW1pY0hlaWdodDogZnVuY3Rpb24gc2V0RHluYW1pY0hlaWdodChuTmV4dE51bWJlciwgdGFyZ2V0LCBiQ2lyY3VsYXIpIHtcbiAgICBpZiAoYkNpcmN1bGFyKSB7XG4gICAgICBuTmV4dE51bWJlcisrO1xuICAgIH1cbiAgICB2YXIgZWxDdXJyZW50ID0gdGFyZ2V0LmNoaWxkcmVuW25OZXh0TnVtYmVyXTtcbiAgICB2YXIgbkhlaWdodCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZWxDdXJyZW50KS5oZWlnaHQpO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBuSGVpZ2h0ICsgXCJweFwiO1xuICB9LFxuICBzZXRDU1M6IGZ1bmN0aW9uIHNldENTUyhlbCwgc3R5bGUsIHZhbHVlKSB7XG4gICAgZWwuc3R5bGVbc3R5bGVdID0gdmFsdWU7XG4gIH0sXG4gIHNob3dMYXllcjogZnVuY3Rpb24gc2hvd0xheWVyKGVsKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSxcbiAgY2xvc2VMYXllcjogZnVuY3Rpb24gY2xvc2VMYXllcihlbCkge1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSxcblxuXG4gIC8vY2hlY2sgbnVsbCBvciB1bmRlZmluZWRcbiAgaXNFeGlzdDogZnVuY3Rpb24gaXNFeGlzdChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEgIT0gbnVsbDtcbiAgfSxcbiAgaXNBcnJheTogZnVuY3Rpb24gaXNBcnJheShfYSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfYSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KF9hKTtcbiAgfSxcbiAgaXNGdW5jdGlvbjogZnVuY3Rpb24gaXNGdW5jdGlvbihmbikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG59O1xuLypcbiogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4qIENvcHlyaWdodCAoYykgMjAxNiBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuICpcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogKlxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS4gKlxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qIFRIRSBTT0ZUV0FSRS4gKi9cblxuLyohXG4qIFxcQ29tbW9uQ29tb25lbnQuanMgdjAuMi4xXG4qIFxcY29yZSBjb21wb25lbnQgc291cmNlIGZvciBDb21wb25lbnRzIFVJIC5cbiogXFxjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFxuKiBcXGxpY2Vuc2UgVGhpcyBwcm9qZWN0IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiogXFxjb250cmlidXRvciBKaXN1IFlvdW4gKGppc3UueW91bkBnbWFpbC5jb20pXG4qIFxcd2FybmluZyBkb250J3VzZSB0aGlzIHNvdXJjZSBpbiBvdGhlciBsaWJyYXJ5IHNvdXJjZS5cbiovXG5cbnZhciBDb21tb25Db21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbW1vbkNvbXBvbmVudChlbFRhcmdldCwgaHRPcHRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tbW9uQ29tcG9uZW50KTtcblxuICAgIHRoaXMuaHRPcHRpb24gPSBodE9wdGlvbjtcbiAgICB0aGlzLmh0Q2FjaGVEYXRhID0ge307XG4gICAgdGhpcy5lbFRhcmdldCA9IGVsVGFyZ2V0O1xuICAgIHRoaXMuaW5pdChodE9wdGlvbik7XG4gIH1cblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0KGh0T3B0aW9uKSB7XG4gICAgdGhpcy5zZXRJbml0VmFsdWUoKTtcbiAgICB0aGlzLnNldE9wdGlvbihodE9wdGlvbiwgdGhpcy5faHREZWZhdWx0T3B0aW9uLCB0aGlzLm9wdGlvbik7XG4gICAgdGhpcy5pbml0VmFsdWUoKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5zZXRJbml0VmFsdWUgPSBmdW5jdGlvbiBzZXRJbml0VmFsdWUoKSB7XG4gICAgdmFyIERFRkFVTFRfQ09SRV9FVkVOVCA9IFsnRk5fQ09NUE9ORU5UX0RJRF9MT0FEJ107XG4gICAgdmFyIF9kID0gdGhpcy5DT01QT05FTlRfQ09ORklHKCk7XG4gICAgdGhpcy5iTWFpbkNvbXBvbmVudCA9ICEhX2QuUExVR0lOUztcbiAgICB0aGlzLl9odERlZmF1bHRPcHRpb24gPSBfZC5ERUZBVUxUX09QVElPTjtcbiAgICB0aGlzLmFNeVBsdWdpbk5hbWUgPSBfZC5QTFVHSU5TO1xuICAgIHRoaXMuaHREZWZhdWx0Rm4gPSB0aGlzLmdldERlZmF1bHRDYWxsYmFja0xpc3QoREVGQVVMVF9DT1JFX0VWRU5ULmNvbmNhdChfZC5ERUZBVUxUX0NPTVBPTkVOVF9FVkVOVCkpO1xuXG4gICAgaWYgKHRoaXMuYk1haW5Db21wb25lbnQpIHtcbiAgICAgIHRoaXMuaHREZWZhdWx0UGx1Z2luRm4gPSB0aGlzLmdldERlZmF1bHRDYWxsYmFja0xpc3QoREVGQVVMVF9DT1JFX0VWRU5ULmNvbmNhdChfZC5ERUZBVUxUX1BMVUdJTl9FVkVOVCkpO1xuICAgIH1cbiAgICB0aGlzLmh0VXNlckZuID0ge307XG4gICAgdGhpcy5odFBsdWdpbkZuID0ge307XG4gICAgdGhpcy5vcHRpb24gPSB7fTtcbiAgfTtcblxuICAvL1RPRE8uIG1vdmUgdG8gc3VwZXIgQ2xhc3MuXG5cblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyVXNlck1ldGhvZCA9IGZ1bmN0aW9uIHJlZ2lzdGVyVXNlck1ldGhvZChodEZuKSB7XG4gICAgdGhpcy5zZXRPcHRpb24oaHRGbiwgdGhpcy5odERlZmF1bHRGbiwgdGhpcy5odFVzZXJGbik7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5yZWdpc3RlclBsdWdpbk1ldGhvZCA9IGZ1bmN0aW9uIHJlZ2lzdGVyUGx1Z2luTWV0aG9kKGh0Rm4pIHtcbiAgICB0aGlzLmFwcGVuZFBsdWdpbk1ldGhvZChodEZuLCB0aGlzLmh0RGVmYXVsdFBsdWdpbkZuLCB0aGlzLmh0UGx1Z2luRm4pO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUub25QbHVnaW5zID0gZnVuY3Rpb24gb25QbHVnaW5zKGFQbHVnaW5MaXN0KSB7XG4gICAgdGhpcy5pbml0UGx1Z2lucyh0aGlzLmFNeVBsdWdpbk5hbWUsIGFQbHVnaW5MaXN0LCB0aGlzLmVsVGFyZ2V0KTtcbiAgICB0aGlzLmNvbXBvbmVudERpZExvYWRlZCgpO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0T3B0aW9uID0gZnVuY3Rpb24gc2V0T3B0aW9uKGh0VmFsdWUsIGh0RGVmYXVsdFZhbHVlLCBodFN0b3JhZ2UpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgT2JqZWN0LmtleXMoaHREZWZhdWx0VmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIGlmICh0eXBlb2YgaHRWYWx1ZVt2XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBodFN0b3JhZ2Vbdl0gPSBodERlZmF1bHRWYWx1ZVt2XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaHRWYWx1ZVt2XSkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgICAgICBodFN0b3JhZ2Vbdl0gPSBodFZhbHVlW3ZdO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBodFN0b3JhZ2Vbdl0gPSB7fTtcbiAgICAgICAgX3RoaXMuc2V0T3B0aW9uLmNhbGwoX3RoaXMsIGh0VmFsdWVbdl0sIGh0RGVmYXVsdFZhbHVlW3ZdLCBodFN0b3JhZ2Vbdl0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIENvbW1vbkNvbXBvbmVudC5wcm90b3R5cGUuYXBwZW5kUGx1Z2luTWV0aG9kID0gZnVuY3Rpb24gYXBwZW5kUGx1Z2luTWV0aG9kKGh0VmFsdWUsIGh0RGVmYXVsdFZhbHVlLCBodFN0b3JhZ2UpIHtcbiAgICBPYmplY3Qua2V5cyhodERlZmF1bHRWYWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGh0U3RvcmFnZVt2XSkpIGh0U3RvcmFnZVt2XSA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiBodFZhbHVlW3ZdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGh0U3RvcmFnZVt2XS5wdXNoKGh0RGVmYXVsdFZhbHVlW3ZdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0U3RvcmFnZVt2XS5wdXNoKGh0VmFsdWVbdl0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5nZXREZWZhdWx0Q2FsbGJhY2tMaXN0ID0gZnVuY3Rpb24gZ2V0RGVmYXVsdENhbGxiYWNrTGlzdChhRm4pIHtcbiAgICB2YXIgaHRGbiA9IHt9O1xuICAgIGFGbi5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBodEZuW3ZdID0gZnVuY3Rpb24gKCkge307XG4gICAgfSk7XG4gICAgcmV0dXJuIGh0Rm47XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5pbml0UGx1Z2lucyA9IGZ1bmN0aW9uIGluaXRQbHVnaW5zKGFNeVBsdWdpbk5hbWUsIGFQbHVnaW5MaXN0LCBlbFRhcmdldCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIG9QYXJlbnQgPSB0aGlzO1xuICAgIGFQbHVnaW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBzTmFtZSA9IHYubmFtZTtcbiAgICAgIHZhciBvYmogPSB2Lm9iajtcbiAgICAgIGlmIChhTXlQbHVnaW5OYW1lLmluZGV4T2Yoc05hbWUpIDwgMCkgcmV0dXJuO1xuICAgICAgLy9sZXQgb1BsdWdpbiA9IG5ldyB3aW5kb3dbdi5uYW1lXShlbFRhcmdldCwgdi5vcHRpb24pO1xuICAgICAgdmFyIG9QbHVnaW4gPSBuZXcgb2JqKGVsVGFyZ2V0LCB2Lm9wdGlvbik7XG4gICAgICBvUGx1Z2luLnJlZ2lzdGVyVXNlck1ldGhvZCh2LnVzZXJNZXRob2QpO1xuICAgICAgX3RoaXMyLl9pbmplY3RQYXJlbnRPYmplY3Qob1BhcmVudCwgb1BsdWdpbik7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkZWQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRMb2FkZWQoKSB7XG4gICAgdGhpcy5ydW5DdXN0b21GbignVVNFUicsICdGTl9DT01QT05FTlRfRElEX0xPQUQnKTtcbiAgICB0aGlzLnJ1bkN1c3RvbUZuKCdQTFVHSU4nLCAnRk5fQ09NUE9ORU5UX0RJRF9MT0FEJyk7XG4gIH07XG5cbiAgQ29tbW9uQ29tcG9uZW50LnByb3RvdHlwZS5ydW5DdXN0b21GbiA9IGZ1bmN0aW9uIHJ1bkN1c3RvbUZuKHR5cGUsIGV2ZW50bmFtZSkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciByZXR1cm5WYWx1ZSA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcIlVTRVJcIjpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChfdHlwZW9mKHRoaXMuaHRVc2VyRm4pID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB0aGlzLmh0VXNlckZuW2V2ZW50bmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIF9odFVzZXJGbjtcblxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAoX2h0VXNlckZuID0gdGhpcy5odFVzZXJGbilbZXZlbnRuYW1lXS5hcHBseShfaHRVc2VyRm4sIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBjYXNlIFwiUExVR0lOXCI6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoX3R5cGVvZih0aGlzLmh0UGx1Z2luRm4pID09PSBcIm9iamVjdFwiICYmIF90eXBlb2YodGhpcy5odFBsdWdpbkZuW2V2ZW50bmFtZV0pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmh0UGx1Z2luRm5bZXZlbnRuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICBmbi5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHt9XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcblxuICBDb21tb25Db21wb25lbnQucHJvdG90eXBlLl9pbmplY3RQYXJlbnRPYmplY3QgPSBmdW5jdGlvbiBfaW5qZWN0UGFyZW50T2JqZWN0KG9QYXJlbnQsIG9DaGlsZCkge1xuICAgIG9DaGlsZC5kb2NraW5nUGx1Z2luTWV0aG9kKG9QYXJlbnQpO1xuICB9O1xuXG4gIHJldHVybiBDb21tb25Db21wb25lbnQ7XG59KCk7XG5cbi8qXG4qIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuKiBDb3B5cmlnaHQgKGMpIDIwMTYgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiAqXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6ICpcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuICpcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuKiBUSEUgU09GVFdBUkUuICovXG5cbi8qIVxuKiBcXFN3aXBlTmF2aWdhdGlvblBsdWdpbi5qcyB2MC4xXG4qIFxcY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiBcbiogXFxsaWNlbnNlIFRoaXMgcHJvamVjdCBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qIFxcY29udHJpYnV0b3IgbmlnYXlvdW4gKG5pZ2F5b3VuQGdtYWlsLmNvbSlcbiogXFx3YXJuaW5nIGRvbnQndXNlIHRoaXMgc291cmNlIGluIG90aGVyIGxpYnJhcnkgc291cmNlLlxuKi9cblxudmFyIFN3aXBlTmF2aWdhdGlvblBsdWdpbiA9IGZ1bmN0aW9uIChfQ29tbW9uQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTd2lwZU5hdmlnYXRpb25QbHVnaW4sIF9Db21tb25Db21wb25lbnQpO1xuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUuQ09NUE9ORU5UX0NPTkZJRyA9IGZ1bmN0aW9uIENPTVBPTkVOVF9DT05GSUcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNFTEVDVE9SOiB7fSxcbiAgICAgIERFRkFVTFRfQ09NUE9ORU5UX0VWRU5UOiBbXSxcbiAgICAgIERFRkFVTFRfT1BUSU9OOiB7XG4gICAgICAgICd1c2FnZSc6IGZhbHNlLFxuICAgICAgICAnZWxOYXZpV3JhcCc6IG51bGwsIC8vb3duIGVsZW1lbnQoI2lTY3JvbGxBcmVhKVxuICAgICAgICAnc2VsZXRlZENsYXNzTmFtZSc6ICdzZWxlY3RlZC1zd2lwZS1saScsXG4gICAgICAgICduRHVyYXRpb24nOiAyMDAsXG4gICAgICAgICdiTW91c2VFdmVudFN1cHBvcnQnOiBmYWxzZVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gU3dpcGVOYXZpZ2F0aW9uUGx1Z2luKGVsVGFyZ2V0LCBodE9wdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2lwZU5hdmlnYXRpb25QbHVnaW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21tb25Db21wb25lbnQuY2FsbCh0aGlzLCBlbFRhcmdldCwgaHRPcHRpb24pKTtcbiAgfVxuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUuaW5pdFZhbHVlID0gZnVuY3Rpb24gaW5pdFZhbHVlKCkge1xuICAgIHRoaXMuZWxQbHVnaW5UYXJnZXQ7XG4gICAgdGhpcy5lbE5hdmlXcmFwID0gdGhpcy5vcHRpb24uZWxOYXZpV3JhcDtcbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZSA9IG51bGw7XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50cyA9IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMubW92ZVN3aXBlQXJlYSgpO1xuICB9O1xuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUubW92ZVN3aXBlQXJlYSA9IGZ1bmN0aW9uIG1vdmVTd2lwZUFyZWEoKSB7XG4gICAgdmFyIGxpcyA9IHRoaXMub3B0aW9uLmVsTmF2aVdyYXAucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICB0aGF0Lm1vdmVwYXJlbnRTd2lwZVBhbmVsKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9uLmJNb3VzZUV2ZW50U3VwcG9ydCkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgbGlzW19pXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgdGhhdC5tb3ZlcGFyZW50U3dpcGVQYW5lbCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUubW92ZXBhcmVudFN3aXBlUGFuZWwgPSBmdW5jdGlvbiBtb3ZlcGFyZW50U3dpcGVQYW5lbChlbFRhcmdldCkge1xuICAgIHZhciBuV2lkdGggPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5uU3dpcGVXaWR0aDtcbiAgICB2YXIgbkNoaWxkT3JkZXIgPSBfY3UuZ2V0Q2hpbGRPcmRlcihlbFRhcmdldCk7XG5cbiAgICB2YXIgbkRpZmYgPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5nZXRDdXJyZW50Vmlld051bWJlcigpIC0gbkNoaWxkT3JkZXI7XG4gICAgdmFyIG5Nb3ZlVmFsdWUgPSBuRGlmZiAqIG5XaWR0aDtcblxuICAgIHZhciBuTmV4dE51bWJlciA9IG5DaGlsZE9yZGVyO1xuXG4gICAgLy9mb3Igbm8gYW5pbWF0aW9uLCBuRHVyYXRpb24gc2V0IHplcm8uXG4gICAgdGhpcy5vUGFyZW50SW5zdGFuY2UucnVuU3dpcGVBY3Rpb24odGhpcy5vcHRpb24ubkR1cmF0aW9uLCBuTmV4dE51bWJlcik7XG5cbiAgICB0aGlzLmhpZ2hsaWdodFNlbGVjdGVkTEkobkNoaWxkT3JkZXIpO1xuICB9O1xuXG4gIFN3aXBlTmF2aWdhdGlvblBsdWdpbi5wcm90b3R5cGUuaGlnaGxpZ2h0U2VsZWN0ZWRMSSA9IGZ1bmN0aW9uIGhpZ2hsaWdodFNlbGVjdGVkTEkoblNlbGVjdGVkQ291bnQpIHtcbiAgICBuU2VsZWN0ZWRDb3VudCsrO1xuICAgIC8vcmVtb3ZlIGxlZ2FjeSBjbGFzc1xuICAgIHZhciBfbGkgPSB0aGlzLm9wdGlvbi5lbE5hdmlXcmFwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyB0aGlzLm9wdGlvbi5zZWxldGVkQ2xhc3NOYW1lKTtcbiAgICB2YXIgX2N1ckNsYXNzTmFtZSA9IF9saS5jbGFzc05hbWU7XG4gICAgX2xpLmNsYXNzTmFtZSA9IF9saS5jbGFzc05hbWUucmVwbGFjZShfY3VyQ2xhc3NOYW1lLCBcIlwiKTtcblxuICAgIC8vYWRkIG5ldyBjbGFzc1xuICAgIHRoaXMub3B0aW9uLmVsTmF2aVdyYXAucXVlcnlTZWxlY3RvcihcImxpOm50aC1jaGlsZChcIiArIG5TZWxlY3RlZENvdW50ICsgXCIpXCIpLmNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMub3B0aW9uLnNlbGV0ZWRDbGFzc05hbWU7XG4gIH07XG5cbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luLnByb3RvdHlwZS5kb2NraW5nUGx1Z2luTWV0aG9kID0gZnVuY3Rpb24gZG9ja2luZ1BsdWdpbk1ldGhvZChvUGFyZW50KSB7XG4gICAgb1BhcmVudC5yZWdpc3RlclBsdWdpbk1ldGhvZCh7XG4gICAgICAnRk5fQkVGT1JFX1NXSVBFJzogdGhpcy5oaWdobGlnaHRTZWxlY3RlZExJLmJpbmQodGhpcyksXG4gICAgICAnRk5fQUZURVJfU1dJUEUnOiBmdW5jdGlvbiBGTl9BRlRFUl9TV0lQRSgpIHt9XG4gICAgfSk7XG4gICAgdGhpcy5vUGFyZW50SW5zdGFuY2UgPSBvUGFyZW50O1xuICB9O1xuXG4gIHJldHVybiBTd2lwZU5hdmlnYXRpb25QbHVnaW47XG59KENvbW1vbkNvbXBvbmVudCk7XG5cbi8qXG4qIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuKiBDb3B5cmlnaHQgKGMpIDIwMTYgU0sgUExBTkVULiBBbGwgUmlnaHRzIFJlc2VydmVkLiAqXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6ICpcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuICpcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuKiBUSEUgU09GVFdBUkUuICovXG5cbi8qIVxuKiBcXFN3aXBlU3RlcE1vdmVyUGx1Z2luLmpzIHYwLjFcbiogXFxjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBTSyBQTEFORVQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFxuKiBcXGxpY2Vuc2UgVGhpcyBwcm9qZWN0IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiogXFxjb250cmlidXRvciBuaWdheW91biAobmlnYXlvdW5AZ21haWwuY29tKVxuKiBcXHdhcm5pbmcgZG9udCd1c2UgdGhpcyBzb3VyY2UgaW4gb3RoZXIgbGlicmFyeSBzb3VyY2UuXG4qL1xuXG52YXIgU3dpcGVTdGVwTW92ZXJQbHVnaW4gPSBmdW5jdGlvbiAoX0NvbW1vbkNvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKFN3aXBlU3RlcE1vdmVyUGx1Z2luLCBfQ29tbW9uQ29tcG9uZW50Mik7XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLkNPTVBPTkVOVF9DT05GSUcgPSBmdW5jdGlvbiBDT01QT05FTlRfQ09ORklHKCkge1xuICAgIHJldHVybiB7XG4gICAgICBTRUxFQ1RPUjoge30sXG4gICAgICBERUZBVUxUX0NPTVBPTkVOVF9FVkVOVDogW10sXG4gICAgICBERUZBVUxUX09QVElPTjoge1xuICAgICAgICAncHJldkJ1dHRvbic6IG51bGwsXG4gICAgICAgICduZXh0QnV0dG9uJzogbnVsbCxcbiAgICAgICAgJ25EdXJhdGlvbic6IDIwMFxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gU3dpcGVTdGVwTW92ZXJQbHVnaW4oZWxUYXJnZXQsIGh0T3B0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3aXBlU3RlcE1vdmVyUGx1Z2luKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tbW9uQ29tcG9uZW50Mi5jYWxsKHRoaXMsIGVsVGFyZ2V0LCBodE9wdGlvbikpO1xuICB9XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLmluaXRWYWx1ZSA9IGZ1bmN0aW9uIGluaXRWYWx1ZSgpIHtcbiAgICB0aGlzLmVsUGx1Z2luVGFyZ2V0O1xuICAgIHRoaXMuZWxQcmV2QnRuID0gdGhpcy5vcHRpb24ucHJldkJ1dHRvbjtcbiAgICB0aGlzLmVsTmV4dEJ0biA9IHRoaXMub3B0aW9uLm5leHRCdXR0b247XG4gICAgdGhpcy5vUGFyZW50SW5zdGFuY2UgPSBudWxsO1xuICB9O1xuXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50cyA9IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5lbFByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIF90aGlzMy5oYW5kbGVyQ2xpY2tCdXR0b24oZXZ0LCBcInRvTGVmdFwiKTtcbiAgICB9KTtcbiAgICB0aGlzLmVsTmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgX3RoaXMzLmhhbmRsZXJDbGlja0J1dHRvbihldnQsIFwidG9SaWdodFwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuaGFuZGxlckNsaWNrQnV0dG9uID0gZnVuY3Rpb24gaGFuZGxlckNsaWNrQnV0dG9uKGV2dCwgc0RpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLm9QYXJlbnRJbnN0YW5jZS5iQW5pbWF0aW9uaW5nKSByZXR1cm47XG4gICAgdmFyIG5DdXIgPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5nZXRDdXJyZW50Vmlld051bWJlcigpO1xuICAgIHZhciBiQ2lyY3VsYXIgPSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5vcHRpb24uYkNpcmN1bGFyO1xuXG4gICAgaWYgKCFiQ2lyY3VsYXIpIHtcbiAgICAgIGlmIChuQ3VyID09PSAwICYmIHNEaXJlY3Rpb24gPT09IFwidG9MZWZ0XCIpIHJldHVybjtcbiAgICAgIGlmIChuQ3VyID09PSB0aGlzLm9QYXJlbnRJbnN0YW5jZS5uU3dpcGVFbGVtZW50Q291bnQgLSAxICYmIHNEaXJlY3Rpb24gPT09IFwidG9SaWdodFwiKSByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5XaWR0aCA9IHRoaXMub1BhcmVudEluc3RhbmNlLm5Td2lwZVdpZHRoO1xuXG4gICAgaWYgKHNEaXJlY3Rpb24gPT09IFwidG9SaWdodFwiKSB7XG4gICAgICBuV2lkdGggKj0gLTE7XG4gICAgICBuQ3VyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5DdXItLTtcbiAgICB9XG5cbiAgICBpZiAoYkNpcmN1bGFyKSBuQ3VyID0gdGhpcy5vUGFyZW50SW5zdGFuY2UucmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIobkN1cik7XG5cbiAgICAvL2ZvciBubyBhbmltYXRpb24sIG5EdXJhdGlvbiBzZXQgemVyby5cbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZS5ydW5Td2lwZUFjdGlvbih0aGlzLm9wdGlvbi5uRHVyYXRpb24sIG5DdXIsIG5XaWR0aCk7XG4gIH07XG5cbiAgU3dpcGVTdGVwTW92ZXJQbHVnaW4ucHJvdG90eXBlLnNldERpc3BsYXlPZkJ1dHRvbiA9IGZ1bmN0aW9uIHNldERpc3BsYXlPZkJ1dHRvbihuQ3VycmVudFBhbmVsKSB7XG4gICAgdmFyIG5NYXhQYW5lbCA9IHRoaXMub1BhcmVudEluc3RhbmNlLm5Td2lwZUVsZW1lbnRDb3VudCAtIDE7XG4gICAgaWYgKG5DdXJyZW50UGFuZWwgPT09IG5NYXhQYW5lbCkge1xuICAgICAgdGhpcy5lbFByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHRoaXMuZWxOZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2UgaWYgKG5DdXJyZW50UGFuZWwgPT09IDApIHtcbiAgICAgIHRoaXMuZWxQcmV2QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRoaXMuZWxOZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxQcmV2QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB0aGlzLmVsTmV4dEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgfTtcblxuICBTd2lwZVN0ZXBNb3ZlclBsdWdpbi5wcm90b3R5cGUuZG9ja2luZ1BsdWdpbk1ldGhvZCA9IGZ1bmN0aW9uIGRvY2tpbmdQbHVnaW5NZXRob2Qob1BhcmVudCkge1xuICAgIGlmICghb1BhcmVudC5vcHRpb24uYkNpcmN1bGFyKSB7XG4gICAgICBvUGFyZW50LnJlZ2lzdGVyUGx1Z2luTWV0aG9kKHtcbiAgICAgICAgJ0ZOX0NPTVBPTkVOVF9ESURfTE9BRCc6IHRoaXMuc2V0RGlzcGxheU9mQnV0dG9uLmJpbmQodGhpcywgMCksXG4gICAgICAgICdGTl9BRlRFUl9TV0lQRSc6IHRoaXMuc2V0RGlzcGxheU9mQnV0dG9uLmJpbmQodGhpcylcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm9QYXJlbnRJbnN0YW5jZSA9IG9QYXJlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIFN3aXBlU3RlcE1vdmVyUGx1Z2luO1xufShDb21tb25Db21wb25lbnQpO1xuXG4vKlxuKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiogQ29weXJpZ2h0IChjKSAyMDE2IFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gKlxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOiAqXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4qIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLiAqXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiogVEhFIFNPRlRXQVJFLiAqL1xuXG4vKiFcbiogXFxzd2lwZV9lczYuanMgdjAuMVxuKiBcXGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIFNLIFBMQU5FVC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4gXG4qIFxcbGljZW5zZSBUaGlzIHByb2plY3QgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKiBcXGNvbnRyaWJ1dG9yIG5pZ2F5b3VuIChuaWdheW91bkBnbWFpbC5jb20pXG4qIFxcd2FybmluZyBkb250J3VzZSB0aGlzIHNvdXJjZSBpbiBvdGhlciBsaWJyYXJ5IHNvdXJjZS5cbiovXG5cbnZhciBTd2VldFN3aXBlID0gZnVuY3Rpb24gKF9Db21tb25Db21wb25lbnQzKSB7XG4gIF9pbmhlcml0cyhTd2VldFN3aXBlLCBfQ29tbW9uQ29tcG9uZW50Myk7XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuQ09NUE9ORU5UX0NPTkZJRyA9IGZ1bmN0aW9uIENPTVBPTkVOVF9DT05GSUcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFBMVUdJTlM6IFsnU3dpcGVOYXZpZ2F0aW9uUGx1Z2luJywgJ1N3aXBlU3RlcE1vdmVyUGx1Z2luJ10sXG4gICAgICBTRUxFQ1RPUjoge1xuICAgICAgICAvL2lucHV0RmllbGRXcmFwOiAnLmlucHV0LXdyYXAnLCBcbiAgICAgIH0sXG4gICAgICBERUZBVUxUX0NPTVBPTkVOVF9FVkVOVDogWydGTl9CRUZPUkVfU1dJUEUnLCAnRk5fQUZURVJfU1dJUEUnXSxcbiAgICAgIERFRkFVTFRfUExVR0lOX0VWRU5UOiBbJ0ZOX0JFRk9SRV9TV0lQRScsICdGTl9BRlRFUl9TV0lQRSddLFxuICAgICAgREVGQVVMVF9PUFRJT046IHtcbiAgICAgICAgJ2JDaXJjdWxhcic6IGZhbHNlLFxuICAgICAgICAnbkR1cmF0aW9uJzogMTAwLFxuICAgICAgICAnbkJhY2tXaWR0aCc6IDYwLFxuICAgICAgICAnblNpZGVXaWR0aCc6IDAsXG4gICAgICAgICduRGVjaXNpb25TbG9wZSc6IDAuOCxcbiAgICAgICAgJ25Gb3JjZWRTd2lwZVRpbWUnOiAwLFxuICAgICAgICAnYlNldHRpbmdTY3JlZW5IZWlnaHQnOiBmYWxzZSxcbiAgICAgICAgJ2JNb3VzZUV2ZW50U3VwcG9ydCc6IGZhbHNlLFxuICAgICAgICAnYlRvdWNoRXZlbnRTdXBwb3J0JzogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gU3dlZXRTd2lwZShlbFRhcmdldCwgaHRPcHRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dlZXRTd2lwZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbW1vbkNvbXBvbmVudDMuY2FsbCh0aGlzLCBlbFRhcmdldCwgaHRPcHRpb24pKTtcbiAgfVxuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmluaXRWYWx1ZSA9IGZ1bmN0aW9uIGluaXRWYWx1ZShodE9wdGlvbikge1xuICAgIC8vc2V0IGhlaWdodCBvZiB2aWV3QXJlYVxuICAgIC8vdGhpcy5zZXREeW5hbWljSGVpZ2h0KDEpO1xuICAgIC8vaWYodGhpcy5vcHRpb24uYlNldHRpbmdTY3JlZW5IZWlnaHQpIHRoaXMuZWxUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgIGlmICh0aGlzLm9wdGlvbi5iU2V0dGluZ1NjcmVlbkhlaWdodCkgX2N1LnNldER5bmFtaWNIZWlnaHQoMCwgdGhpcy5lbFRhcmdldCwgdGhpcy5vcHRpb24uYkNpcmN1bGFyKTtcblxuICAgIC8vc3dpcGUgY29udGFpbmVyIHdpZHRoXG4gICAgdGhpcy5uU3dpcGVXaWR0aCA9IF9jdS5nZXRXaWR0aCh0aGlzLmVsVGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkKTsgLy9jYXNlLiBwb3NpdGlvbiA6IHN0YXRpYyhmbG9hdClcblxuICAgIC8vc3dpcGUgZWxlbWVudCBjb3VudCBcbiAgICB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCA9IHRoaXMuZWxUYXJnZXQuY2hpbGRFbGVtZW50Q291bnQ7XG5cbiAgICB2YXIgYkNpcmN1bGFyID0gdGhpcy5vcHRpb24uYkNpcmN1bGFyO1xuICAgIHRoaXMubk1heFN3aXBlUmFuZ2UgPSBiQ2lyY3VsYXIgPyB0aGlzLm5Td2lwZVdpZHRoIDogMDtcbiAgICB0aGlzLm5NaW5Td2lwZVJhbmdlID0gYkNpcmN1bGFyID8gdGhpcy5uU3dpcGVFbGVtZW50Q291bnQgLSAyIDogdGhpcy5uU3dpcGVFbGVtZW50Q291bnQgLSAxO1xuICAgIHRoaXMubk1pblN3aXBlUmFuZ2UgKj0gLXRoaXMublN3aXBlV2lkdGg7XG5cbiAgICB0aGlzLm5NYXhWYWx1ZSA9IHRoaXMubk1heFN3aXBlUmFuZ2UgKyB0aGlzLm9wdGlvbi5uU2lkZVdpZHRoO1xuICAgIHRoaXMubk1pblZhbHVlID0gdGhpcy5uTWluU3dpcGVSYW5nZSAtIHRoaXMub3B0aW9uLm5TaWRlV2lkdGg7XG5cbiAgICB0aGlzLmJBbmltYXRpb25pbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5OZXh0TnVtYmVyID0gMDtcblxuICAgIC8vVE9ETy4g7Ji17IWY7Jy866GcIOuwm+yVhOyEnCDtlYTsmpTtlZwg6rK97Jqw66eMIHJlc2l6ZSDsnbTrsqTtirgg66qo64uI7YSw66eB7ZWY64+E66GdIOq4sOuKpey2lOqwgC5cbiAgICB0aGlzLnJlY2FsY3VsYXRlV2lkdGgoKTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50cyA9IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMub3B0aW9uLmJUb3VjaEV2ZW50U3VwcG9ydCkge1xuICAgICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hTdGFydChldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczQuaGFuZGxlclRvdWNoTW92ZShldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hFbmQoZXZ0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbi5iTW91c2VFdmVudFN1cHBvcnQpIHtcbiAgICAgIHRoaXMuZWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIF90aGlzNC5oYW5kbGVyVG91Y2hTdGFydChldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczQuaGFuZGxlclRvdWNoTW92ZShldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXM0LmhhbmRsZXJUb3VjaEVuZChldnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb25FbmQoKTtcbiAgfTtcblxuICAvKiBFdmVudCBIYW5sZGVyICovXG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuaGFuZGxlclRvdWNoU3RhcnQgPSBmdW5jdGlvbiBoYW5kbGVyVG91Y2hTdGFydChldnQpIHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuYkFuaW1hdGlvbmluZykgcmV0dXJuO1xuXG4gICAgdGhpcy5iU3dpcGUgPSB0cnVlO1xuICAgIHRoaXMuYkZpcnN0VG91Y2hNb3ZlID0gdHJ1ZTtcbiAgICB2YXIgYk1vdXNlRXZlbnQgPSBldnQudHlwZS5zdWJzdHIoMCwgNSkgPT09IFwibW91c2VcIjtcblxuICAgIHZhciBwYWdlWCA9IHZvaWQgMCxcbiAgICAgICAgcGFnZVkgPSB2b2lkIDA7XG5cbiAgICBpZiAoYk1vdXNlRXZlbnQpIHtcbiAgICAgIHBhZ2VYID0gZXZ0LnBhZ2VYO1xuICAgICAgcGFnZVkgPSBldnQucGFnZVk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2VYID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgcGFnZVkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgfVxuXG4gICAgdGhpcy5uU3RhcnRQb3NYID0gTWF0aC5mbG9vcihwYWdlWCk7XG4gICAgdGhpcy5uU3RhcnRQb3NZID0gTWF0aC5mbG9vcihwYWdlWSk7XG5cbiAgICB0aGlzLm5TdGFydFRyYW5zbGF0ZVggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQpO1xuICAgIC8vdGhpcy5uU3RhcnRUcmFuc2xhdGVYID0gX2N1LmdldFRyYW5zbGF0ZTNkWFBlcmNlbnQodGhpcy5lbFRhcmdldCkgLyAxMDAgKiBfY3UuZ2V0V2lkdGgodGhpcy5lbFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZCk7XG5cbiAgICB0aGlzLm5Ub3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuaGFuZGxlclRvdWNoTW92ZSA9IGZ1bmN0aW9uIGhhbmRsZXJUb3VjaE1vdmUoZXZ0KSB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmJBbmltYXRpb25pbmcpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuYlN3aXBlKSByZXR1cm47XG5cbiAgICB2YXIgYk1vdXNlRXZlbnQgPSBldnQudHlwZS5zdWJzdHIoMCwgNSkgPT09IFwibW91c2VcIjtcblxuICAgIHZhciBodEN1cnJlbnRFdnQgPSBiTW91c2VFdmVudCA/IGV2dCA6IGV2dC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuICAgIHRoaXMubk1vdmVQb3NYID0gTWF0aC5mbG9vcihodEN1cnJlbnRFdnQucGFnZVgpO1xuICAgIHRoaXMubk1vdmVQb3NZID0gTWF0aC5mbG9vcihodEN1cnJlbnRFdnQucGFnZVkpO1xuXG4gICAgLy9kZXRlY3QgYW5nbGUgXG4gICAgaWYgKHRoaXMuYkZpcnN0VG91Y2hNb3ZlKSB7XG4gICAgICB2YXIgbkFuZ2xlRGlmZiA9IE1hdGguYWJzKHRoaXMubk1vdmVQb3NZIC0gdGhpcy5uU3RhcnRQb3NZKSAvIE1hdGguYWJzKHRoaXMubk1vdmVQb3NYIC0gdGhpcy5uU3RhcnRQb3NYKTtcbiAgICAgIHRoaXMuYlN3aXBlID0gISEobkFuZ2xlRGlmZiA8PSB0aGlzLm9wdGlvbi5uRGVjaXNpb25TbG9wZSk7XG4gICAgICBpZiAodGhpcy5iU3dpcGUgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICB0aGlzLm5QcmVNb3ZlWCA9IHRoaXMublN0YXJ0UG9zWDtcbiAgICB9XG5cbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBuTW92ZURpZmYgPSB0aGlzLm5Nb3ZlUG9zWCAtIHRoaXMublByZU1vdmVYO1xuICAgIHZhciBuUHJldmlvdXNYID0gMDtcblxuICAgIG5QcmV2aW91c1ggPSBfY3UuZ2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQpO1xuXG4gICAgdGhpcy5kcmFnQXJlYShuUHJldmlvdXNYLCBuTW92ZURpZmYpO1xuXG4gICAgdGhpcy5uUHJlTW92ZVggPSB0aGlzLm5Nb3ZlUG9zWDtcbiAgICB0aGlzLm5QcmVNb3ZlWSA9IHRoaXMubk1vdmVQb3NYO1xuXG4gICAgdGhpcy5iRmlyc3RUb3VjaE1vdmUgPSBmYWxzZTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5oYW5kbGVyVG91Y2hFbmQgPSBmdW5jdGlvbiBoYW5kbGVyVG91Y2hFbmQoZXZ0KSB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmJBbmltYXRpb25pbmcpIHJldHVybjtcblxuICAgIGlmICghdGhpcy5iU3dpcGUpIHtcbiAgICAgIHRoaXMuYk91dFJhbmdlUmlnaHQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYk91dFJhbmdlTGVmdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuV2lkdGhGb3JBbmltYXRpb24gPSAwO1xuICAgIHZhciBuVG91Y2hFbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbkRpZmZUb3VjaFRpbWUgPSBuVG91Y2hFbmRUaW1lIC0gdGhpcy5uVG91Y2hTdGFydFRpbWU7XG5cbiAgICB2YXIgbkxhc3RUcmFuc2xhdGVYID0gX2N1LmdldFRyYW5zbGF0ZTNkWCh0aGlzLmVsVGFyZ2V0KTtcbiAgICB2YXIgbkRpZmZUcmFuc2xhdGVYID0gbkxhc3RUcmFuc2xhdGVYIC0gdGhpcy5uU3RhcnRUcmFuc2xhdGVYO1xuXG4gICAgaWYgKG5EaWZmVHJhbnNsYXRlWCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgdmFyIGJTd2lwZVdpZHRoID0gZmFsc2U7XG4gICAgdmFyIGJTd2lwZVRpbWUgPSBmYWxzZTtcbiAgICB2YXIgYlN3aXBlR28gPSBmYWxzZTtcbiAgICB2YXIgc0RpcmVjdGlvbiA9IFwiXCI7XG5cbiAgICBiU3dpcGVXaWR0aCA9IE1hdGguYWJzKG5EaWZmVHJhbnNsYXRlWCkgPiB0aGlzLm9wdGlvbi5uQmFja1dpZHRoO1xuICAgIGlmIChuRGlmZlRvdWNoVGltZSA8IHRoaXMub3B0aW9uLm5Gb3JjZWRTd2lwZVRpbWUpIGJTd2lwZVRpbWUgPSB0cnVlO1xuICAgIC8vZGVjaWRlIGRpcmVjdGlvbi5cbiAgICBpZiAodGhpcy5iT3V0UmFuZ2VMZWZ0IHx8IHRoaXMuYk91dFJhbmdlUmlnaHQgfHwgIShiU3dpcGVXaWR0aCB8fCBiU3dpcGVUaW1lKSkge1xuICAgICAgc0RpcmVjdGlvbiA9IG5EaWZmVHJhbnNsYXRlWCA+IDAgPyBcImxlZnRcIiA6IFwicmlnaHRcIjtcbiAgICAgIG5XaWR0aEZvckFuaW1hdGlvbiA9IE1hdGguYWJzKG5EaWZmVHJhbnNsYXRlWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJTd2lwZUdvID0gdHJ1ZTtcbiAgICAgIHNEaXJlY3Rpb24gPSBuRGlmZlRyYW5zbGF0ZVggPiAwID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XG4gICAgICBuV2lkdGhGb3JBbmltYXRpb24gPSB0aGlzLm5Td2lwZVdpZHRoIC0gTWF0aC5hYnMobkRpZmZUcmFuc2xhdGVYKTtcbiAgICB9XG5cbiAgICB0aGlzLm5OZXh0TnVtYmVyID0gdGhpcy5fZ2V0TmV4dFZpZXdOdW1iZXIodGhpcy5uU3RhcnRUcmFuc2xhdGVYLCBzRGlyZWN0aW9uLCBiU3dpcGVHbyk7XG4gICAgdGhpcy5uTmV4dE51bWJlciA9IE1hdGgucm91bmQodGhpcy5uTmV4dE51bWJlcik7XG5cbiAgICBpZiAodGhpcy5vcHRpb24uYkNpcmN1bGFyKSB7XG4gICAgICB0aGlzLm5OZXh0TnVtYmVyID0gdGhpcy5yZUFkanVzdE5leHROdW1iZXJGb3JDaXJjdWxhcih0aGlzLm5OZXh0TnVtYmVyKTtcbiAgICB9XG5cbiAgICBpZiAoc0RpcmVjdGlvbiA9PT0gJ2xlZnQnKSBuV2lkdGhGb3JBbmltYXRpb24gPSAtbldpZHRoRm9yQW5pbWF0aW9uO1xuXG4gICAgdGhpcy5ydW5Td2lwZUFjdGlvbih0aGlzLm9wdGlvbi5uRHVyYXRpb24sIHRoaXMubk5leHROdW1iZXIsIG5XaWR0aEZvckFuaW1hdGlvbik7XG5cbiAgICAvL1RPRE8uIG1ha2UgcmVzZXQgbWV0aG9kIFxuICAgIHRoaXMuYk91dFJhbmdlUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmJPdXRSYW5nZUxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmJTd2lwZSA9IGZhbHNlO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJlQWRqdXN0TmV4dE51bWJlckZvckNpcmN1bGFyID0gZnVuY3Rpb24gcmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIobk5leHROdW1iZXIpIHtcbiAgICBpZiAobk5leHROdW1iZXIgPT09IC0xKSB7XG4gICAgICBuTmV4dE51bWJlciA9IHRoaXMublN3aXBlRWxlbWVudENvdW50IC0gMztcbiAgICB9IGVsc2UgaWYgKG5OZXh0TnVtYmVyID09PSB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDIpIHtcbiAgICAgIG5OZXh0TnVtYmVyID0gMDtcbiAgICB9IGVsc2Uge31cbiAgICByZXR1cm4gbk5leHROdW1iZXI7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucnVuU3dpcGVBY3Rpb24gPSBmdW5jdGlvbiBydW5Td2lwZUFjdGlvbihuRHVyYXRpb24sIG5OZXh0TnVtYmVyLCBuV2lkdGhGb3JBbmltYXRpb24pIHtcbiAgICBpZiAodHlwZW9mIG5XaWR0aEZvckFuaW1hdGlvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdmFyIG5XaWR0aCA9IHRoaXMublN3aXBlV2lkdGg7XG4gICAgICB2YXIgbkRpZmYgPSB0aGlzLmdldEN1cnJlbnRWaWV3TnVtYmVyKCkgLSBuTmV4dE51bWJlcjtcbiAgICAgIG5XaWR0aEZvckFuaW1hdGlvbiA9IG5EaWZmICogbldpZHRoO1xuICAgIH1cbiAgICB0aGlzLnNldE5leHROdW1iZXIobk5leHROdW1iZXIpO1xuICAgIF9Db21tb25Db21wb25lbnQzLnByb3RvdHlwZS5ydW5DdXN0b21Gbi5jYWxsKHRoaXMsICdVU0VSJywgJ0ZOX0JFRk9SRV9TV0lQRScsIG5OZXh0TnVtYmVyKTtcbiAgICBfQ29tbW9uQ29tcG9uZW50My5wcm90b3R5cGUucnVuQ3VzdG9tRm4uY2FsbCh0aGlzLCAnUExVR0lOJywgJ0ZOX0JFRk9SRV9TV0lQRScsIG5OZXh0TnVtYmVyKTtcbiAgICB0aGlzLnJ1blRyYW5zaXRpb24odGhpcy5lbFRhcmdldCwgbldpZHRoRm9yQW5pbWF0aW9uLCBuRHVyYXRpb24gLyAxMDAwKTsgLy90byBzZWNvbmQuXG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUuX3Jlc3RvcmVUcmFuc2Zvcm1YUGVyY2VudCA9IGZ1bmN0aW9uIF9yZXN0b3JlVHJhbnNmb3JtWFBlcmNlbnQoblBhbmVsSW5kZXgpIHtcbiAgICB2YXIgblBhbmVsQ291bnQgPSB0aGlzLm5Td2lwZUVsZW1lbnRDb3VudCAtIDM7XG4gICAgdmFyIG5QYW5lbFdpZHRoID0gdGhpcy5uU3dpcGVXaWR0aDtcbiAgICB2YXIgbk1vdmVWYWx1ZSA9IG5QYW5lbENvdW50ICogblBhbmVsV2lkdGg7IC8vcmVmcyA6IGNsb25lZE5vZGUgaXMgMi5cblxuICAgIGlmIChuUGFuZWxJbmRleCA9PT0gMCB8fCBuUGFuZWxJbmRleCA+IG5QYW5lbENvdW50KSB7XG4gICAgICBfY3Uuc2V0VHJhbnNsYXRlM2RYUGVyY2VudCh0aGlzLmVsVGFyZ2V0LCAwKTtcbiAgICB9XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucmVnaXN0ZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uRW5kKCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIHNUU0UgPSBfY3UuZ2V0Q1NTVHJhbnNpdGlvbkVuZCgpO1xuXG4gICAgdGhpcy5lbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHNUU0UsIGZ1bmN0aW9uIChldikge1xuICAgICAgdmFyIHNUUyA9IF9jdS5nZXRDU1NOYW1lKCd0cmFuc2l0aW9uJyk7XG4gICAgICBfdGhpczUuZWxUYXJnZXQuc3R5bGVbc1RTXSA9IFwibm9uZVwiO1xuXG4gICAgICBfY3Uuc2V0VHJhbnNsYXRlM2RYUGVyY2VudChfdGhpczUuZWxUYXJnZXQsIF90aGlzNS5uTmV4dE51bWJlciAqIC0xMDApO1xuXG4gICAgICBpZiAoX3RoaXM1Lm9wdGlvbi5iQ2lyY3VsYXIpIHtcbiAgICAgICAgX3RoaXM1Ll9yZXN0b3JlVHJhbnNmb3JtWFBlcmNlbnQoX3RoaXM1Lm5OZXh0TnVtYmVyKTtcbiAgICAgIH1cblxuICAgICAgX0NvbW1vbkNvbXBvbmVudDMucHJvdG90eXBlLnJ1bkN1c3RvbUZuLmNhbGwoX3RoaXM1LCAnVVNFUicsICdGTl9BRlRFUl9TV0lQRScsIF90aGlzNS5uTmV4dE51bWJlcik7XG4gICAgICBfQ29tbW9uQ29tcG9uZW50My5wcm90b3R5cGUucnVuQ3VzdG9tRm4uY2FsbChfdGhpczUsICdQTFVHSU4nLCAnRk5fQUZURVJfU1dJUEUnLCBfdGhpczUubk5leHROdW1iZXIpO1xuXG4gICAgICBpZiAoX3RoaXM1Lm9wdGlvbi5iU2V0dGluZ1NjcmVlbkhlaWdodCkgX2N1LnNldER5bmFtaWNIZWlnaHQoX3RoaXM1Lm5OZXh0TnVtYmVyLCBfdGhpczUuZWxUYXJnZXQsIF90aGlzNS5vcHRpb24uYkNpcmN1bGFyKTtcblxuICAgICAgX3RoaXM1Lm5OZXh0TnVtYmVyID0gMDtcblxuICAgICAgX3RoaXM1LmJBbmltYXRpb25pbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5zZXROZXh0TnVtYmVyID0gZnVuY3Rpb24gc2V0TmV4dE51bWJlcihuTmV4dE51bWJlcikge1xuICAgIHRoaXMubk5leHROdW1iZXIgPSBuTmV4dE51bWJlcjtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5nZXRDdXJyZW50Vmlld051bWJlciA9IGZ1bmN0aW9uIGdldEN1cnJlbnRWaWV3TnVtYmVyKCkge1xuICAgIHZhciBuSW5kZXggPSBNYXRoLmFicyhfY3UuZ2V0VHJhbnNsYXRlM2RYKHRoaXMuZWxUYXJnZXQpKSAvIHRoaXMublN3aXBlV2lkdGg7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobkluZGV4KTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5fZ2V0TmV4dFZpZXdOdW1iZXIgPSBmdW5jdGlvbiBfZ2V0TmV4dFZpZXdOdW1iZXIoblBvcywgc0RpcmVjdGlvbiwgYlN3aXBlR28pIHtcbiAgICB2YXIgbkluZGV4ID0gTWF0aC5yb3VuZCgtKG5Qb3MgLyB0aGlzLm5Td2lwZVdpZHRoKSk7XG4gICAgaWYgKCFiU3dpcGVHbykgcmV0dXJuIG5JbmRleDtcbiAgICByZXR1cm4gc0RpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgPyArK25JbmRleCA6IC0tbkluZGV4O1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLmRyYWdBcmVhID0gZnVuY3Rpb24gZHJhZ0FyZWEoblByZVgsIG5Nb3ZlRGlmZikge1xuICAgIHRoaXMuYk91dFJhbmdlUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmJPdXRSYW5nZUxlZnQgPSBmYWxzZTtcblxuICAgIC8vY2hlY2sgdmFsaWQgc3dpcGUgcmFuZ2UuIFxuXG4gICAgLy93aGVuIGdvIHRvIGxlZnQgb24gbGVmdC1zaWRlLlxuICAgIGlmIChuUHJlWCA+PSB0aGlzLm5NYXhTd2lwZVJhbmdlKSB0aGlzLmJPdXRSYW5nZUxlZnQgPSB0cnVlO1xuXG4gICAgLy93aGVuIGdvIHRvIHJpZ2h0IG9uIHJpZ2h0LXNpZGUuXG4gICAgaWYgKG5QcmVYIDw9IHRoaXMubk1pblN3aXBlUmFuZ2UpIHRoaXMuYk91dFJhbmdlUmlnaHQgPSB0cnVlO1xuXG4gICAgdmFyIG5OZXdWYWx1ZSA9IG5QcmVYICsgbk1vdmVEaWZmO1xuXG4gICAgaWYgKG5OZXdWYWx1ZSA+IHRoaXMubk1heFZhbHVlKSBuTmV3VmFsdWUgPSB0aGlzLm5NYXhWYWx1ZTtcbiAgICBpZiAobk5ld1ZhbHVlIDwgdGhpcy5uTWluVmFsdWUpIG5OZXdWYWx1ZSA9IHRoaXMubk1pblZhbHVlO1xuXG4gICAgX2N1LnNldFRyYW5zbGF0ZTNkWCh0aGlzLmVsVGFyZ2V0LCBuTmV3VmFsdWUpO1xuICB9O1xuXG4gIFN3ZWV0U3dpcGUucHJvdG90eXBlLnJ1blRyYW5zaXRpb24gPSBmdW5jdGlvbiBydW5UcmFuc2l0aW9uKGVsVGFyZ2V0LCBuRGlzdGFuY2UsIG5EdXJhdGlvbikge1xuICAgIHRoaXMuYkFuaW1hdGlvbmluZyA9IHRydWU7XG5cbiAgICB2YXIgblByZXZpb3VzVHJhbnNsYXRlWCA9IF9jdS5nZXRUcmFuc2xhdGUzZFgoZWxUYXJnZXQpO1xuXG4gICAgdmFyIHNUUyA9IF9jdS5nZXRDU1NOYW1lKCd0cmFuc2l0aW9uJyk7XG4gICAgdmFyIHNURiA9IF9jdS5nZXRDU1NOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgICB2YXIgc1ZhbHVlID0gXCJcIjtcblxuICAgIGlmIChzVEYgPT09IFwid2Via2l0VHJhbnNmb3JtXCIpIHNWYWx1ZSA9IFwiLXdlYmtpdC10cmFuc2Zvcm1cIjtlbHNlIGlmIChzVEYgPT09IFwidHJhbnNmb3JtXCIpIHNWYWx1ZSA9IFwidHJhbnNmb3JtXCI7ZWxzZSB7fVxuXG4gICAgZWxUYXJnZXQuc3R5bGVbc1RTXSA9IHNWYWx1ZSArIFwiIFwiICsgbkR1cmF0aW9uICsgXCJzXCI7XG4gICAgZWxUYXJnZXQuc3R5bGVbc1RGXSA9ICd0cmFuc2xhdGUzZCgnICsgKG5QcmV2aW91c1RyYW5zbGF0ZVggKyBuRGlzdGFuY2UpICsgJ3B4LCAwLCAwKSc7XG4gIH07XG5cbiAgU3dlZXRTd2lwZS5wcm90b3R5cGUucnVuQXV0b0FuaW1hdGlvbiA9IGZ1bmN0aW9uIHJ1bkF1dG9BbmltYXRpb24oc0RpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLmJBbmltYXRpb25pbmcpIHJldHVybjtcbiAgICB2YXIgbkN1ciA9IHRoaXMuZ2V0Q3VycmVudFZpZXdOdW1iZXIoKTtcbiAgICB2YXIgbldpZHRoID0gdGhpcy5uU3dpcGVXaWR0aDtcblxuICAgIGlmIChzRGlyZWN0aW9uID09PSBcInRvUmlnaHRcIikge1xuICAgICAgbldpZHRoICo9IC0xO1xuICAgICAgbkN1cisrO1xuICAgIH0gZWxzZSB7XG4gICAgICBuQ3VyLS07XG4gICAgfVxuXG4gICAgbkN1ciA9IHRoaXMucmVBZGp1c3ROZXh0TnVtYmVyRm9yQ2lyY3VsYXIobkN1cik7XG5cbiAgICB0aGlzLnJ1blN3aXBlQWN0aW9uKHRoaXMub3B0aW9uLm5EdXJhdGlvbiwgbkN1ciwgbldpZHRoKTtcbiAgfTtcblxuICBTd2VldFN3aXBlLnByb3RvdHlwZS5yZWNhbGN1bGF0ZVdpZHRoID0gZnVuY3Rpb24gcmVjYWxjdWxhdGVXaWR0aCgpIHtcbiAgICB2YXIgcmVzaXplcnVubmVyID0gZmFsc2U7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgaWYgKHJlc2l6ZXJ1bm5lcikgcmV0dXJuO1xuICAgICAgcmVzaXplcnVubmVyID0gdHJ1ZTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzNi5uU3dpcGVXaWR0aCA9IF9jdS5nZXRXaWR0aChfdGhpczYuZWxUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICByZXNpemVydW5uZXIgPSBmYWxzZTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIFN3ZWV0U3dpcGU7XG59KENvbW1vbkNvbXBvbmVudCk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgU3dlZXRTd2lwZTogU3dlZXRTd2lwZSxcbiAgU3dpcGVOYXZpZ2F0aW9uUGx1Z2luOiBTd2lwZU5hdmlnYXRpb25QbHVnaW4sXG4gIFN3aXBlU3RlcE1vdmVyUGx1Z2luOiBTd2lwZVN0ZXBNb3ZlclBsdWdpblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3aXBlX21lcmdlX2VzNS5qcy5tYXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvc3dpcGVfbWVyZ2VfZXM1LmpzIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsImltcG9ydCAqIGFzIFN3aXBlIGZyb20gJy4vbGliL3N3aXBlX21lcmdlX2VzNS5qcyc7XG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5cblxuZnVuY3Rpb24gaW5pdFN3aXBlTW9kdWxlKCkge1xuXHRjb25zdCBlbFN3YXBXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXN1YWxfaW1nXCIpO1xuXHRjb25zdCBvTXlzd2lwZSA9IG5ldyBTd2lwZS5Td2VldFN3aXBlKCBlbFN3YXBXcmFwLCB7XG5cdFx0J2JDaXJjdWxhcicgOiB0cnVlLFxuICAgICduRHVyYXRpb24nIDogMzAwLCAgLy9kZWZhdWx0IDEwMFxuICAgICduQmFja1dpZHRoJyA6IDYwLCAgLy9kZWZhdWx0IDYwXG4gICAgJ25TaWRlV2lkdGgnIDogMjAsICAvL2RlZmF1bHQgMFxuICAgICduRGVjaXNpb25TbG9wZScgOiAwLjgsIC8vZGVmYXVsdCAwLjhcbiAgICAnbkZvcmNlZFN3aXBlVGltZScgOiAxMDAsIC8vZGVmYXVsdCAwXG4gICAgJ2JTZXR0aW5nU2NyZWVuSGVpZ2h0JzogZmFsc2UsXG4gICAgJ2JNb3VzZUV2ZW50U3VwcG9ydCcgOiB0cnVlXG4gIH0pO1xuXG5cdG9NeXN3aXBlLnJlZ2lzdGVyVXNlck1ldGhvZCh7XG5cdFx0J0ZOX0JFRk9SRV9TV0lQRSc6IGZ1bmN0aW9uKG4pe30sXG5cdFx0J0ZOX0FGVEVSX1NXSVBFJzogZnVuY3Rpb24obikge1xuXHRcdFx0Y29uc3QgZWxOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9wYWdpbmF0aW9uIC5udW06bnRoLWNoaWxkKDEpXCIpO1xuXHRcdFx0ZWxOdW0uaW5uZXJUZXh0ID0gbisxO1xuXHRcdH0sXG5cdFx0J0ZOX0NPTVBPTkVOVF9ESURfTE9BRCcgOiBmdW5jdGlvbigpe31cblx0fSk7XG5cblx0b015c3dpcGUub25QbHVnaW5zKFtcblx0e1xuXHRcdCduYW1lJyAgICAgIDogJ1N3aXBlU3RlcE1vdmVyUGx1Z2luJyxcblx0XHQnb3B0aW9uJyAgICA6IHtcblx0XHRcdCdwcmV2QnV0dG9uJyA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX3ByZXZcIiksXG5cdFx0XHQnbmV4dEJ1dHRvbicgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9ueHRcIiksXG5cdFx0XHQnbkR1cmF0aW9uJzogMTAwXG5cdFx0fSxcblx0XHQndXNlck1ldGhvZCcgOiB7fSxcblx0XHQnb2JqJyA6IFN3aXBlLlN3aXBlU3RlcE1vdmVyUGx1Z2luXG5cdH1dKTtcblxufVxuXG4vKiBsYXllciBvcGVuIC0gY2xvc2UgKi9cblxuZnVuY3Rpb24gdG9nZ2xlRGV0YWlsSW5mbygpIHtcblx0Y29uc3QgZWxNb3JlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmtfbW9yZVwiKTtcblx0Y29uc3QgZWxTdG9yZV9kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yZV9kZXRhaWxzXCIpO1xuXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxNb3JlcywgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoe2N1cnJlbnRUYXJnZXR9KSA9PiB7XG5cblx0XHRcdGlmKCBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIl9vcGVuXCIpKSBjdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0ZWxzZSBjdXJyZW50VGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXHRcdFx0ZWxTdG9yZV9kZXRhaWxzLmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZTNcIik7XG5cdFx0XHRjdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXHRcdH0sZmFsc2UpXG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlZ1Jlc2VydmVMaW5rKCkge1xuXHRjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmtfYnRuXCIpO1xuXHRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuXHRcdGxvY2F0aW9uLmhyZWYgPSBcIi4vcmVzZXJ2ZS5odG1sXCI7XG5cdH0sIGZhbHNlKTtcbn1cblxuXG5mdW5jdGlvbiBpbml0VGFiVG9nZ2xlKCkge1xuXHRjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb190YWJfbHN0XCIpO1xuXHRjb25zdCBkZXRhaWxfYXJlYV93cmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxfYXJlYV93cmFwXCIpO1xuXHRjb25zdCBkZXRhaWxfbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbF9sb2NhdGlvblwiKTtcblxuXHR1bC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuXHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGxpID0gZXZ0LnRhcmdldC5jbG9zZXN0KCdsaScpO1xuXG5cdFx0aWYobGkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3BhdGhcIikpIHtcblx0XHRcdGRldGFpbF9hcmVhX3dyYXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cdFx0XHRkZXRhaWxfbG9jYXRpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG5cdFx0XHRsaS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRldGFpbF9hcmVhX3dyYXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG5cdFx0XHRkZXRhaWxfbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cdFx0XHRsaS5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9XG5cblx0XHRsaS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHR9KVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBldnQgPT4ge1xuXHRpbml0U3dpcGVNb2R1bGUoKTtcblx0dG9nZ2xlRGV0YWlsSW5mbygpO1xuXHRyZWdSZXNlcnZlTGluaygpO1xuXHRpbml0VGFiVG9nZ2xlKCk7XG59KTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGV0YWlsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
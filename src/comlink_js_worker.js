// generated from

// //@ts-nocheck
// export class TestClass{
//     // private list : Array<string>=[];
//     constructor(){
//       this.list=[]
//     }
  
//     async addToList(item){
//       await new Promise((resolve,reject)=> setTimeout(resolve,2000))
//       this.list.push(item)
//       return this.list 
//     }
//   }

//  ###################################################################################
// generated worker
//  ###################################################################################

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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/comlink-loader/dist/comlink-worker-loader.js!./src/x.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/comlink-loader/dist/comlink-worker-loader.js!./src/x.worker.ts":
/*!*************************************************************************************!*\
  !*** ./node_modules/comlink-loader/dist/comlink-worker-loader.js!./src/x.worker.ts ***!
  \*************************************************************************************/
/*! exports provided: TestClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestClass", function() { return TestClass; });
    /* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ "./node_modules/comlink/dist/esm/comlink.mjs");
    
      //@ts-nocheck
    class TestClass{
      // private list : Array<string>=[];
      constructor(){
        this.list=[]
      }
    
      async addToList(item){
        await new Promise((resolve,reject)=> setTimeout(resolve,2000))
        this.list.push(item)
        return this.list 
      }
    };
      Object(comlink__WEBPACK_IMPORTED_MODULE_0__["expose"])(
        Object.keys(__webpack_exports__).reduce(function(r,k){
          if (k=='__esModule') return r;
          r[k] = __webpack_exports__[k];
          return r
        },{})
      )
    
    /***/ }),
    
    /***/ "./node_modules/comlink/dist/esm/comlink.mjs":
    /*!***************************************************!*\
      !*** ./node_modules/comlink/dist/esm/comlink.mjs ***!
      \***************************************************/
    /*! exports provided: createEndpoint, expose, proxy, proxyMarker, releaseProxy, transfer, transferHandlers, windowEndpoint, wrap */
    /***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEndpoint", function() { return createEndpoint; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expose", function() { return expose; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyMarker", function() { return proxyMarker; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseProxy", function() { return releaseProxy; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transfer", function() { return transfer; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferHandlers", function() { return transferHandlers; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowEndpoint", function() { return windowEndpoint; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
    /**
     * Copyright 2019 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *     http://www.apache.org/licenses/LICENSE-2.0
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const proxyMarker = Symbol("Comlink.proxy");
    const createEndpoint = Symbol("Comlink.endpoint");
    const releaseProxy = Symbol("Comlink.releaseProxy");
    const throwMarker = Symbol("Comlink.thrown");
    
    const isObject = val => typeof val === "object" && val !== null || typeof val === "function";
    /**
     * Internal transfer handle to handle objects marked to proxy.
     */
    
    
    const proxyTransferHandler = {
      canHandle: val => isObject(val) && val[proxyMarker],
    
      serialize(obj) {
        const {
          port1,
          port2
        } = new MessageChannel();
        expose(obj, port1);
        return [port2, [port2]];
      },
    
      deserialize(port) {
        port.start();
        return wrap(port);
      }
    
    };
    /**
     * Internal transfer handler to handle thrown exceptions.
     */
    
    const throwTransferHandler = {
      canHandle: value => isObject(value) && throwMarker in value,
    
      serialize(_ref) {
        let {
          value
        } = _ref;
        let serialized;
    
        if (value instanceof Error) {
          serialized = {
            isError: true,
            value: {
              message: value.message,
              name: value.name,
              stack: value.stack
            }
          };
        } else {
          serialized = {
            isError: false,
            value
          };
        }
    
        return [serialized, []];
      },
    
      deserialize(serialized) {
        if (serialized.isError) {
          throw Object.assign(new Error(serialized.value.message), serialized.value);
        }
    
        throw serialized.value;
      }
    
    };
    /**
     * Allows customizing the serialization of certain values.
     */
    
    const transferHandlers = new Map([["proxy", proxyTransferHandler], ["throw", throwTransferHandler]]);
    
    function expose(obj) {
      let ep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self;
      ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) {
          return;
        }
    
        const {
          id,
          type,
          path
        } = Object.assign({
          path: []
        }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue;
    
        try {
          const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);
          const rawValue = path.reduce((obj, prop) => obj[prop], obj);
    
          switch (type) {
            case "GET"
            /* GET */
            :
              {
                returnValue = rawValue;
              }
              break;
    
            case "SET"
            /* SET */
            :
              {
                parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                returnValue = true;
              }
              break;
    
            case "APPLY"
            /* APPLY */
            :
              {
                returnValue = rawValue.apply(parent, argumentList);
              }
              break;
    
            case "CONSTRUCT"
            /* CONSTRUCT */
            :
              {
                const value = new rawValue(...argumentList);
                returnValue = proxy(value);
              }
              break;
    
            case "ENDPOINT"
            /* ENDPOINT */
            :
              {
                const {
                  port1,
                  port2
                } = new MessageChannel();
                expose(obj, port2);
                returnValue = transfer(port1, [port1]);
              }
              break;
    
            case "RELEASE"
            /* RELEASE */
            :
              {
                returnValue = undefined;
              }
              break;
    
            default:
              return;
          }
        } catch (value) {
          returnValue = {
            value,
            [throwMarker]: 0
          };
        }
    
        Promise.resolve(returnValue).catch(value => {
          return {
            value,
            [throwMarker]: 0
          };
        }).then(returnValue => {
          const [wireValue, transferables] = toWireValue(returnValue);
          ep.postMessage(Object.assign(Object.assign({}, wireValue), {
            id
          }), transferables);
    
          if (type === "RELEASE"
          /* RELEASE */
          ) {
            // detach and deactive after sending release response above.
            ep.removeEventListener("message", callback);
            closeEndPoint(ep);
          }
        });
      });
    
      if (ep.start) {
        ep.start();
      }
    }
    
    function isMessagePort(endpoint) {
      return endpoint.constructor.name === "MessagePort";
    }
    
    function closeEndPoint(endpoint) {
      if (isMessagePort(endpoint)) endpoint.close();
    }
    
    function wrap(ep, target) {
      return createProxy(ep, [], target);
    }
    
    function throwIfProxyReleased(isReleased) {
      if (isReleased) {
        throw new Error("Proxy has been released and is not useable");
      }
    }
    
    function createProxy(ep) {
      let path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      let target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      let isProxyReleased = false;
      const proxy = new Proxy(target, {
        get(_target, prop) {
          throwIfProxyReleased(isProxyReleased);
    
          if (prop === releaseProxy) {
            return () => {
              return requestResponseMessage(ep, {
                type: "RELEASE"
                /* RELEASE */
                ,
                path: path.map(p => p.toString())
              }).then(() => {
                closeEndPoint(ep);
                isProxyReleased = true;
              });
            };
          }
    
          if (prop === "then") {
            if (path.length === 0) {
              return {
                then: () => proxy
              };
            }
    
            const r = requestResponseMessage(ep, {
              type: "GET"
              /* GET */
              ,
              path: path.map(p => p.toString())
            }).then(fromWireValue);
            return r.then.bind(r);
          }
    
          return createProxy(ep, [...path, prop]);
        },
    
        set(_target, prop, rawValue) {
          throwIfProxyReleased(isProxyReleased); // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
          // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
    
          const [value, transferables] = toWireValue(rawValue);
          return requestResponseMessage(ep, {
            type: "SET"
            /* SET */
            ,
            path: [...path, prop].map(p => p.toString()),
            value
          }, transferables).then(fromWireValue);
        },
    
        apply(_target, _thisArg, rawArgumentList) {
          throwIfProxyReleased(isProxyReleased);
          const last = path[path.length - 1];
    
          if (last === createEndpoint) {
            return requestResponseMessage(ep, {
              type: "ENDPOINT"
              /* ENDPOINT */
    
            }).then(fromWireValue);
          } // We just pretend that `bind()` didn’t happen.
    
    
          if (last === "bind") {
            return createProxy(ep, path.slice(0, -1));
          }
    
          const [argumentList, transferables] = processArguments(rawArgumentList);
          return requestResponseMessage(ep, {
            type: "APPLY"
            /* APPLY */
            ,
            path: path.map(p => p.toString()),
            argumentList
          }, transferables).then(fromWireValue);
        },
    
        construct(_target, rawArgumentList) {
          throwIfProxyReleased(isProxyReleased);
          const [argumentList, transferables] = processArguments(rawArgumentList);
          return requestResponseMessage(ep, {
            type: "CONSTRUCT"
            /* CONSTRUCT */
            ,
            path: path.map(p => p.toString()),
            argumentList
          }, transferables).then(fromWireValue);
        }
    
      });
      return proxy;
    }
    
    function myFlat(arr) {
      return Array.prototype.concat.apply([], arr);
    }
    
    function processArguments(argumentList) {
      const processed = argumentList.map(toWireValue);
      return [processed.map(v => v[0]), myFlat(processed.map(v => v[1]))];
    }
    
    const transferCache = new WeakMap();
    
    function transfer(obj, transfers) {
      transferCache.set(obj, transfers);
      return obj;
    }
    
    function proxy(obj) {
      return Object.assign(obj, {
        [proxyMarker]: true
      });
    }
    
    function windowEndpoint(w) {
      let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self;
      let targetOrigin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "*";
      return {
        postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context)
      };
    }
    
    function toWireValue(value) {
      for (const [name, handler] of transferHandlers) {
        if (handler.canHandle(value)) {
          const [serializedValue, transferables] = handler.serialize(value);
          return [{
            type: "HANDLER"
            /* HANDLER */
            ,
            name,
            value: serializedValue
          }, transferables];
        }
      }
    
      return [{
        type: "RAW"
        /* RAW */
        ,
        value
      }, transferCache.get(value) || []];
    }
    
    function fromWireValue(value) {
      switch (value.type) {
        case "HANDLER"
        /* HANDLER */
        :
          return transferHandlers.get(value.name).deserialize(value.value);
    
        case "RAW"
        /* RAW */
        :
          return value.value;
      }
    }
    
    function requestResponseMessage(ep, msg, transfers) {
      return new Promise(resolve => {
        const id = generateUUID();
        ep.addEventListener("message", function l(ev) {
          if (!ev.data || !ev.data.id || ev.data.id !== id) {
            return;
          }
    
          ep.removeEventListener("message", l);
          resolve(ev.data);
        });
    
        if (ep.start) {
          ep.start();
        }
    
        ep.postMessage(Object.assign({
          id
        }, msg), transfers);
      });
    }
    
    function generateUUID() {
      return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
    }
    
    
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=49a8f34393982dc49a05.worker.js.map
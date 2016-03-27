(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("react"));
    else if (typeof define === 'function' && define.amd)
        define(["react"], factory);
    else if (typeof exports === 'object')
        exports["base-react-components"] = factory(require("react"));
    else
        root["base-react-components"] = factory(root["react"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_2__) {
    return /******/ (function (modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/
        var installedModules = {};

        /******/ 	// The require function
        /******/
        function __webpack_require__(moduleId) {

            /******/ 		// Check if module is in cache
            /******/
            if (installedModules[moduleId])
            /******/            return installedModules[moduleId].exports;

            /******/ 		// Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/            exports: {},
                /******/            id: moduleId,
                /******/            loaded: false
                /******/
            };

            /******/ 		// Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

            /******/ 		// Flag the module as loaded
            /******/
            module.loaded = true;

            /******/ 		// Return the exports of the module
            /******/
            return module.exports;
            /******/
        }


        /******/ 	// expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;

        /******/ 	// expose the module cache
        /******/
        __webpack_require__.c = installedModules;

        /******/ 	// __webpack_public_path__
        /******/
        __webpack_require__.p = "";

        /******/ 	// Load entry module and return exports
        /******/
        return __webpack_require__(0);
        /******/
    })
    /************************************************************************/
    /******/([
        /* 0 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Header = undefined;

            var _Header = __webpack_require__(1);

            var _Header2 = _interopRequireDefault(_Header);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {default: obj};
            }

            exports.Header = _Header2.default;

            /***/
        },
        /* 1 */
        /***/ function (module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _react = __webpack_require__(2);

            var _react2 = _interopRequireDefault(_react);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {default: obj};
            }

            var Header = _react2.default.createClass({
                displayName: 'Header',

                render: function render() {
                    return _react2.default.createElement(
                        'div',
                        null,
                        'This is my header.'
                    );
                }
            });

            exports.default = Header;

            /***/
        },
        /* 2 */
        /***/ function (module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

            /***/
        }
        /******/])
});
;
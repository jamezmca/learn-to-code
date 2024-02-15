"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/extend-shallow";
exports.ids = ["vendor-chunks/extend-shallow"];
exports.modules = {

/***/ "(rsc)/./node_modules/extend-shallow/index.js":
/*!**********************************************!*\
  !*** ./node_modules/extend-shallow/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isObject = __webpack_require__(/*! is-extendable */ \"(rsc)/./node_modules/is-extendable/index.js\");\nmodule.exports = function extend(o /*, objects*/ ) {\n    if (!isObject(o)) {\n        o = {};\n    }\n    var len = arguments.length;\n    for(var i = 1; i < len; i++){\n        var obj = arguments[i];\n        if (isObject(obj)) {\n            assign(o, obj);\n        }\n    }\n    return o;\n};\nfunction assign(a, b) {\n    for(var key in b){\n        if (hasOwn(b, key)) {\n            a[key] = b[key];\n        }\n    }\n}\n/**\n * Returns true if the given `key` is an own property of `obj`.\n */ function hasOwn(obj, key) {\n    return Object.prototype.hasOwnProperty.call(obj, key);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXh0ZW5kLXNoYWxsb3cvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV2QkMsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLE9BQU9DLEVBQUMsV0FBVyxHQUFYO0lBQ2hDLElBQUksQ0FBQ0wsU0FBU0ssSUFBSTtRQUFFQSxJQUFJLENBQUM7SUFBRztJQUU1QixJQUFJQyxNQUFNQyxVQUFVQyxNQUFNO0lBQzFCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxLQUFLRyxJQUFLO1FBQzVCLElBQUlDLE1BQU1ILFNBQVMsQ0FBQ0UsRUFBRTtRQUV0QixJQUFJVCxTQUFTVSxNQUFNO1lBQ2pCQyxPQUFPTixHQUFHSztRQUNaO0lBQ0Y7SUFDQSxPQUFPTDtBQUNUO0FBRUEsU0FBU00sT0FBT0MsQ0FBQyxFQUFFQyxDQUFDO0lBQ2xCLElBQUssSUFBSUMsT0FBT0QsRUFBRztRQUNqQixJQUFJRSxPQUFPRixHQUFHQyxNQUFNO1lBQ2xCRixDQUFDLENBQUNFLElBQUksR0FBR0QsQ0FBQyxDQUFDQyxJQUFJO1FBQ2pCO0lBQ0Y7QUFDRjtBQUVBOztDQUVDLEdBRUQsU0FBU0MsT0FBT0wsR0FBRyxFQUFFSSxHQUFHO0lBQ3RCLE9BQU9FLE9BQU9DLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNULEtBQUtJO0FBQ25EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21vbGphbWVzLWJsb2cvLi9ub2RlX21vZHVsZXMvZXh0ZW5kLXNoYWxsb3cvaW5kZXguanM/NWNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoby8qLCBvYmplY3RzKi8pIHtcbiAgaWYgKCFpc09iamVjdChvKSkgeyBvID0ge307IH1cblxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgYXNzaWduKG8sIG9iaik7XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufTtcblxuZnVuY3Rpb24gYXNzaWduKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoaGFzT3duKGIsIGtleSkpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGBrZXlgIGlzIGFuIG93biBwcm9wZXJ0eSBvZiBgb2JqYC5cbiAqL1xuXG5mdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG4iXSwibmFtZXMiOlsiaXNPYmplY3QiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImV4dGVuZCIsIm8iLCJsZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpIiwib2JqIiwiYXNzaWduIiwiYSIsImIiLCJrZXkiLCJoYXNPd24iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/extend-shallow/index.js\n");

/***/ })

};
;
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{ introduction, name, mainImage, title }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_8___default()(_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      mainImage = props.mainImage,\n      _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$name = props.name,\n      name = _props$name === void 0 ? 'Missing name' : _props$name,\n      _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      backgroundColor: '#E0ECF7',\n      margin: '0 auto',\n      width: '80%',\n      height: '500px',\n      display: 'flex',\n      justifyContent: 'space-evenly'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      marginTop: '45px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \"Yum Tash Food Lovers Home\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, posts[0].title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, introduction), __jsx(\"img\", {\n    src: urlFor(mainImage).width(50).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      backgroundColor: '#E0ECF7',\n      margin: '0 auto',\n      width: '80%',\n      height: '500px',\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    style: {\n      marginRight: '400px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, \"SISTE NYTT\")), __jsx(\"img\", {\n    style: {\n      maxHeight: '300px',\n      marginLeft: '100px'\n    },\n    src: _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  })));\n}; // Post.getInitialProps = async function (context) {\n\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsInBvc3RzIiwibWFpbkltYWdlIiwidGl0bGUiLCJuYW1lIiwiaW50cm9kdWN0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJ1cmwiLCJtYXJnaW5SaWdodCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJkZXNzZXJ0IiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHdEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEscUJBT2pCQSxLQVBpQixDQUVuQkMsS0FGbUI7QUFBQSxNQUVuQkEsS0FGbUIsNkJBRVgsRUFGVztBQUFBLE1BR25CQyxTQUhtQixHQU9qQkYsS0FQaUIsQ0FHbkJFLFNBSG1CO0FBQUEscUJBT2pCRixLQVBpQixDQUluQkcsS0FKbUI7QUFBQSxNQUluQkEsS0FKbUIsNkJBSVgsZUFKVztBQUFBLG9CQU9qQkgsS0FQaUIsQ0FLbkJJLElBTG1CO0FBQUEsTUFLbkJBLElBTG1CLDRCQUtaLGNBTFk7QUFBQSw0QkFPakJKLEtBUGlCLENBTW5CSyxZQU5tQjtBQUFBLE1BTW5CQSxZQU5tQixvQ0FNSixFQU5JO0FBUXJCLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBSUk7QUFBSyxTQUFLLEVBQUU7QUFBQ0MscUJBQWUsRUFBRSxTQUFsQjtBQUE2QkMsWUFBTSxFQUFFLFFBQXJDO0FBQStDQyxXQUFLLEVBQUUsS0FBdEQ7QUFBNkRDLFlBQU0sRUFBRSxPQUFyRTtBQUE4RUMsYUFBTyxFQUFFLE1BQXZGO0FBQStGQyxvQkFBYyxFQUFFO0FBQS9HLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUksU0FBSyxFQUFFO0FBQUNDLGVBQVMsRUFBRTtBQUFaLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FEQSxFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLWCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNFLEtBQWQsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsSUFBSixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxZQUFKLENBSEYsRUFJRTtBQUNFLE9BQUcsRUFBRVgsTUFBTSxDQUFDUSxTQUFELENBQU4sQ0FDRk0sS0FERSxDQUNJLEVBREosRUFFRkssR0FGRSxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQWhCRixDQUpKLEVBbUNFO0FBQUssU0FBSyxFQUFFO0FBQUNQLHFCQUFlLEVBQUUsU0FBbEI7QUFBNkJDLFlBQU0sRUFBRSxRQUFyQztBQUErQ0MsV0FBSyxFQUFFLEtBQXREO0FBQTZEQyxZQUFNLEVBQUUsT0FBckU7QUFBOEVDLGFBQU8sRUFBRSxNQUF2RjtBQUErRkMsb0JBQWMsRUFBRTtBQUEvRyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBQ0csaUJBQVcsRUFBRTtBQUFkLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLEVBT0U7QUFDSSxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFFLE9BQVo7QUFBcUJDLGdCQUFVLEVBQUU7QUFBakMsS0FEWDtBQUVJLE9BQUcsRUFBRUMsMkRBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBbkNGLENBREE7QUFtREgsQ0EzREQsQyxDQTREQTs7O0tBNURNbEIsSztBQThETkEsS0FBSyxDQUFDbUIsZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1ByQiwrQ0FBTSxDQUFDc0IsS0FBUCxDQUFhQywyQ0FBYixvQkFETzs7QUFBQTtBQUFBO0FBQUE7QUFDcEJuQixpQkFEb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQU9lRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50J1xuXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICcuLi9sYXlvdXRzJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQgZGVzc2VydCBmcm9tICcuLi9wdWJsaWMvZGVzc2VydC5qcGVnJztcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IFxuICAgICAgcG9zdHMgPSBbXSwgXG4gICAgICBtYWluSW1hZ2UsXG4gICAgICB0aXRsZSA9ICdNaXNzaW5nIHRpdGxlJyxcbiAgICAgIG5hbWUgPSAnTWlzc2luZyBuYW1lJyxcbiAgICAgIGludHJvZHVjdGlvbiA9IFtdXG4gICAgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8RGVmYXVsdExheW91dD5cbiAgICAgICAgICBcbiAgICAgICAgPC9EZWZhdWx0TGF5b3V0PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIG1hcmdpbjogJzAgYXV0bycsIHdpZHRoOiAnODAlJywgaGVpZ2h0OiAnNTAwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5J319PlxuICAgICAgICA8aDEgc3R5bGU9e3ttYXJnaW5Ub3A6ICc0NXB4J319Pll1bSBUYXNoIEZvb2QgTG92ZXJzIEhvbWU8L2gxPlxuICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7bWFyZ2luVG9wOiAnNDVweCd9fT5ZdW0gVGFzaCBGb29kIExvdmVycyBIb21lPC9oMT5cbiAgICAgICAgICAgICAge3Bvc3RzLm1hcChcbiAgICAgICAgICAgICAgICAoeyBfaWQsIHRpdGxlID0gJycsIHNsdWcgPSAnJywgX3VwZGF0ZWRBdCA9ICcnIH0pID0+XG4gICAgICAgICAgICAgICAgICBzbHVnICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17X2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgKHtuZXcgRGF0ZShfdXBkYXRlZEF0KS50b0RhdGVTdHJpbmcoKX0pXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+e3Bvc3RzWzBdLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgICAgICA8cD57aW50cm9kdWN0aW9ufTwvcD5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobWFpbkltYWdlKVxuICAgICAgICAgICAgICAgIC53aWR0aCg1MClcbiAgICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7bWF4SGVpZ2h0OiAnMzAwcHgnLCBtYXJnaW5Ub3A6ICc0NXB4J319XG4gICAgICAgICAgICAgIHNyYz17cG9zdHMubWFpbkltYWdlfVxuICAgICAgICAgICAgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgbWFyZ2luOiAnMCBhdXRvJywgd2lkdGg6ICc4MCUnLCBoZWlnaHQ6ICc1MDBweCcsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc0MDBweCd9fT5cbiAgICAgICAgICAgIFNJU1RFIE5ZVFRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBzdHlsZT17e21heEhlaWdodDogJzMwMHB4JywgbWFyZ2luTGVmdDogJzEwMHB4J319XG4gICAgICAgICAgICBzcmM9e2Rlc3NlcnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gIFxuICAgIDwvZGl2PlxuICAgICAgXG4gICAgKVxufVxuLy8gUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICAgIHBvc3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbiAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCJdeyBpbnRyb2R1Y3Rpb24sIG5hbWUsIG1haW5JbWFnZSwgdGl0bGUgfVxuICAgIGApXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
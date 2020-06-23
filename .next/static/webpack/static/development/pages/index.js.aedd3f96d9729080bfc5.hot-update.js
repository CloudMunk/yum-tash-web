webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"*[_type == \\\"post\\\" && post[0]][0]{\\n      title,\\n      \\\"name\\\": author->name,\\n      \\\"categories\\\": categories[]->title,\\n      \\\"mainImage\\\": post->mainImage,\\n      body\\n    }\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_8___default()(_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$name = props.name,\n      name = _props$name === void 0 ? 'Missing name' : _props$name,\n      mainImage = props.mainImage,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      backgroundColor: '#E0ECF7',\n      margin: '0 auto',\n      width: '80%',\n      height: '500px',\n      display: 'flex',\n      justifyContent: 'space-evenly'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      marginTop: '45px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"Yum Tash Food Lovers Home\"), posts.map(function (_ref) {\n    var _id = _ref._id,\n        _ref$title = _ref.title,\n        title = _ref$title === void 0 ? '' : _ref$title,\n        _ref$slug = _ref.slug,\n        slug = _ref$slug === void 0 ? '' : _ref$slug,\n        _ref$_updatedAt = _ref._updatedAt,\n        _updatedAt = _ref$_updatedAt === void 0 ? '' : _ref$_updatedAt;\n\n    return slug && __jsx(\"li\", {\n      key: _id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 21\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/post/[slug]\",\n      as: \"/post/\".concat(slug.current),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 23\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 25\n      }\n    }, title)), ' ', \"(\", new Date(_updatedAt).toDateString(), \")\");\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: urlFor(posts[0].mainImage).width(50).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      backgroundColor: '#E0ECF7',\n      margin: '0 auto',\n      width: '80%',\n      height: '500px',\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    style: {\n      marginRight: '400px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, \"SISTE NYTT\")), __jsx(\"img\", {\n    style: {\n      maxHeight: '300px',\n      marginLeft: '100px'\n    },\n    src: _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsInRpdGxlIiwibmFtZSIsIm1haW5JbWFnZSIsImJvZHkiLCJwb3N0cyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwibWFwIiwiX2lkIiwic2x1ZyIsIl91cGRhdGVkQXQiLCJjdXJyZW50IiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInVybCIsIm1hcmdpblJpZ2h0IiwibWF4SGVpZ2h0IiwibWFyZ2luTGVmdCIsImltZyIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwiZ3JvcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2QixTQUFPQyx3REFBZSxDQUFDQywrQ0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNEOztBQUVELElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBLHFCQU9qQkEsS0FQaUIsQ0FFbkJDLEtBRm1CO0FBQUEsTUFFbkJBLEtBRm1CLDZCQUVYLGVBRlc7QUFBQSxvQkFPakJELEtBUGlCLENBR25CRSxJQUhtQjtBQUFBLE1BR25CQSxJQUhtQiw0QkFHWixjQUhZO0FBQUEsTUFJbkJDLFNBSm1CLEdBT2pCSCxLQVBpQixDQUluQkcsU0FKbUI7QUFBQSxvQkFPakJILEtBUGlCLENBS25CSSxJQUxtQjtBQUFBLE1BS25CQSxJQUxtQiw0QkFLWixFQUxZO0FBQUEscUJBT2pCSixLQVBpQixDQU1uQkss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O0FBQUE7QUFBQTtBQUNwQnRCLGlCQURvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBV2VOLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXG5cbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJy4uL2xheW91dHMnO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCBpbWcgZnJvbSAnLi4vcHVibGljL2Rlc3NlcnQuanBlZyc7XG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsXG4gICAgICBuYW1lID0gJ01pc3NpbmcgbmFtZScsXG4gICAgICBtYWluSW1hZ2UsXG4gICAgICBib2R5ID0gW10sXG4gICAgICBwb3N0cyA9IFtdXG4gICAgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8RGVmYXVsdExheW91dD5cbiAgICAgICAgICBcbiAgICAgICAgPC9EZWZhdWx0TGF5b3V0PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIG1hcmdpbjogJzAgYXV0bycsIHdpZHRoOiAnODAlJywgaGVpZ2h0OiAnNTAwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5J319PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3ttYXJnaW5Ub3A6ICc0NXB4J319Pll1bSBUYXNoIEZvb2QgTG92ZXJzIEhvbWU8L2gxPlxuICAgICAgICAgICAgICB7cG9zdHMubWFwKFxuICAgICAgICAgICAgICAgICh7IF9pZCwgdGl0bGUgPSAnJywgc2x1ZyA9ICcnLCBfdXBkYXRlZEF0ID0gJycgfSkgPT5cbiAgICAgICAgICAgICAgICAgIHNsdWcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAoe25ldyBEYXRlKF91cGRhdGVkQXQpLnRvRGF0ZVN0cmluZygpfSlcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0c1swXS5tYWluSW1hZ2UpXG4gICAgICAgICAgICAgICAgLndpZHRoKDUwKVxuICAgICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXhIZWlnaHQ6ICczMDBweCcsIG1hcmdpblRvcDogJzQ1cHgnfX1cbiAgICAgICAgICAgICAgc3JjPXtwb3N0cy5tYWluSW1hZ2V9XG4gICAgICAgICAgICAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLCBtYXJnaW46ICcwIGF1dG8nLCB3aWR0aDogJzgwJScsIGhlaWdodDogJzUwMHB4JywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzQwMHB4J319PlxuICAgICAgICAgICAgU0lTVEUgTllUVFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIHN0eWxlPXt7bWF4SGVpZ2h0OiAnMzAwcHgnLCBtYXJnaW5MZWZ0OiAnMTAwcHgnfX1cbiAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+ICBcbiAgICA8L2Rpdj5cbiAgICAgIFxuICAgIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgICBwb3N0czogYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBwb3N0WzBdXVswXXtcbiAgICAgIHRpdGxlLFxuICAgICAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICAgICAgXCJtYWluSW1hZ2VcIjogcG9zdC0+bWFpbkltYWdlLFxuICAgICAgYm9keVxuICAgIH1gKVxufSlcblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
webpackHotUpdate("static/development/pages/post/[slug].js",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _slug_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slug.module.scss */ \"./pages/post/slug.module.scss\");\n/* harmony import */ var _slug_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_slug_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/menu/menu.component */ \"./components/menu/menu.component.jsx\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/post/[slug].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\" && slug.current == $slug][0]{\\n  title,\\n  \\\"name\\\": author->name,\\n  \\\"categories\\\": categories[]->title,\\n  \\\"authorImage\\\": author->image,\\n  mainImage,\\n  body\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n // Components\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_8__[\"default\"]).image(source);\n}\n\nvar Post = function Post(props) {\n  console.log(props);\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$name = props.name,\n      name = _props$name === void 0 ? 'Missing name' : _props$name,\n      categories = props.categories,\n      authorImage = props.authorImage,\n      mainImage = props.mainImage,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(\"article\", {\n    className: _slug_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _slug_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.leftSide,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _slug_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, title), __jsx(\"img\", {\n    className: _slug_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mainImage,\n    src: urlFor(mainImage).width(500).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, \"Av \", name), authorImage && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: urlFor(authorImage).width(500).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  })), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    className: _slug_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.paragraph,\n    blocks: body,\n    imageOptions: {\n      w: 320,\n      h: 240,\n      fit: 'max'\n    }\n  }, _client__WEBPACK_IMPORTED_MODULE_8__[\"default\"].config(), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, \"This is the right side\"), categories && __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, \"Stikkord / Hashtags\", categories.map(function (category) {\n    return __jsx(\"p\", {\n      key: category,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 43\n      }\n    }, category);\n  })))));\n};\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_8__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz81MzU0Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiUG9zdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsIm1haW5JbWFnZSIsImJvZHkiLCJzdHlsZXMiLCJsZWZ0U2lkZSIsIndpZHRoIiwidXJsIiwicGFyYWdyYXBoIiwidyIsImgiLCJmaXQiLCJjb25maWciLCJtYXAiLCJjYXRlZ29yeSIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0E7O0FBSUEsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkIsU0FBT0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFFRCxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRHNCLHFCQVNsQkEsS0FUa0IsQ0FHcEJHLEtBSG9CO0FBQUEsTUFHcEJBLEtBSG9CLDZCQUdaLGVBSFk7QUFBQSxvQkFTbEJILEtBVGtCLENBSXBCSSxJQUpvQjtBQUFBLE1BSXBCQSxJQUpvQiw0QkFJYixjQUphO0FBQUEsTUFLcEJDLFVBTG9CLEdBU2xCTCxLQVRrQixDQUtwQkssVUFMb0I7QUFBQSxNQU1wQkMsV0FOb0IsR0FTbEJOLEtBVGtCLENBTXBCTSxXQU5vQjtBQUFBLE1BT3BCQyxTQVBvQixHQVNsQlAsS0FUa0IsQ0FPcEJPLFNBUG9CO0FBQUEsb0JB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cSBmcm9tICdncm9xJ1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbHVnLm1vZHVsZS5zY3NzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudCc7XG5cblxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzKVxuICBjb25zdCB7XG4gICAgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsXG4gICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLFxuICAgIGNhdGVnb3JpZXMsXG4gICAgYXV0aG9ySW1hZ2UsXG4gICAgbWFpbkltYWdlLFxuICAgIGJvZHkgPSBbXVxuICB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdFNpZGV9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tYWluSW1hZ2V9XG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKG1haW5JbWFnZSlcbiAgICAgICAgICAgICAgLndpZHRoKDUwMClcbiAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+QXYge25hbWV9PC9zcGFuPlxuICAgICAgICAgIFxuICAgICAgICAgIHthdXRob3JJbWFnZSAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpXG4gICAgICAgICAgICAgICAgICAud2lkdGgoNTAwKVxuICAgICAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9XG4gICAgICAgICAgICBibG9ja3M9e2JvZHl9XG4gICAgICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogMzIwLCBoOiAyNDAsIGZpdDogJ21heCcgfX1cbiAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+VGhpcyBpcyB0aGUgcmlnaHQgc2lkZTwvaDI+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIFN0aWtrb3JkIC8gSGFzaHRhZ3NcbiAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IDxwIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L3A+KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvZGl2PlxuICAgICAgXG4gIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gIG1haW5JbWFnZSxcbiAgYm9keVxufWBcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5XG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})
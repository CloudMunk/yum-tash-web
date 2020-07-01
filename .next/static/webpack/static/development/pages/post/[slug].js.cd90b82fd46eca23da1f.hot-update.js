webpackHotUpdate("static/development/pages/post/[slug].js",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _slug_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slug.module.scss */ \"./pages/post/slug.module.scss\");\n/* harmony import */ var _slug_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_slug_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/menu/menu.component */ \"./components/menu/menu.component.jsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/post/[slug].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\" && slug.current == $slug][0]{\\n  title,\\n  \\\"name\\\": author->name,\\n  \\\"categories\\\": categories[]->title,\\n  \\\"authorImage\\\": author->image,\\n  mainImage,\\n  secondImage,\\n  secondBody,\\n  introduction,\\n  thirdBody,\\n  thirdImage,\\n  fourthImage,\\n  fourthBody,\\n  fifthImage,\\n  titleA,\\n  ingredientsA,\\n  titleB,\\n  ingredientsB,\\n  titleC,\\n  ingredientsC,\\n  titleD,\\n  ingredientsD,\\n  body\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n // Social Share buttons\n// import { FacebookShareButton } from 'react-share'\n\n // Components\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\n\nvar Post = function Post(props) {\n  console.log(props);\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$name = props.name,\n      name = _props$name === void 0 ? 'Missing name' : _props$name,\n      categories = props.categories,\n      authorImage = props.authorImage,\n      mainImage = props.mainImage,\n      secondBody = props.secondBody,\n      secondImage = props.secondImage,\n      thirdBody = props.thirdBody,\n      thirdImage = props.thirdImage,\n      fourthBody = props.fourthBody,\n      fourthImage = props.fourthImage,\n      fifthImage = props.fifthImage,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body,\n      _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      titleA = props.titleA,\n      _props$ingredientsA = props.ingredientsA,\n      ingredientsA = _props$ingredientsA === void 0 ? [] : _props$ingredientsA,\n      titleB = props.titleB,\n      _props$ingredientsB = props.ingredientsB,\n      ingredientsB = _props$ingredientsB === void 0 ? [] : _props$ingredientsB,\n      titleC = props.titleC,\n      _props$ingredientsC = props.ingredientsC,\n      ingredientsC = _props$ingredientsC === void 0 ? [] : _props$ingredientsC,\n      titleD = props.titleD,\n      _props$ingredientsD = props.ingredientsD,\n      ingredientsD = _props$ingredientsD === void 0 ? [] : _props$ingredientsD;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      width: '100%',\n      height: '25px',\n      backgroundImage: 'url(https://i.imgur.com/fF3cAue.png)',\n      backgroundSize: '30px 15px',\n      backgroundRepeat: 'repeat-x',\n      backgroundPositionY: '0px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), __jsx(_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }), __jsx(\"article\", {\n    className: _slug_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, \"1\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, \"2\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, \"3\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"4\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, \"5\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"6\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, \"7\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, \"8\")));\n};\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz81MzU0Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiUG9zdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsIm1haW5JbWFnZSIsInNlY29uZEJvZHkiLCJzZWNvbmRJbWFnZSIsInRoaXJkQm9keSIsInRoaXJkSW1hZ2UiLCJmb3VydGhCb2R5IiwiZm91cnRoSW1hZ2UiLCJmaWZ0aEltYWdlIiwiYm9keSIsImludHJvZHVjdGlvbiIsInRpdGxlQSIsImluZ3JlZGllbnRzQSIsInRpdGxlQiIsImluZ3JlZGllbnRzQiIsInRpdGxlQyIsImluZ3JlZGllbnRzQyIsInRpdGxlRCIsImluZ3JlZGllbnRzRCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsInN0eWxlcyIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztDQUlBOztBQUNBOztBQUlBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHdEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQURzQixxQkEwQmxCQSxLQTFCa0IsQ0FHcEJHLEtBSG9CO0FBQUEs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QUE7QUFBQTtBQUFBLFNBTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUkYsQ0FWRixDQURGO0FBd0JELENBbkREOztLQUFNaEIsSTtBQXFETixJQUFNaUMsS0FBSyxHQUFHQywyQ0FBSCxtQkFBWDs7QUF5QkFsQyxJQUFJLENBQUNtQyxlQUFMO0FBQUEsOExBQXVCLGlCQUFnQkMsT0FBaEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQjtBQURxQixrQ0FFQ0EsT0FBTyxDQUFDSCxLQUZULENBRWJJLElBRmEsRUFFYkEsSUFGYSxvQ0FFTixFQUZNO0FBQUE7QUFBQSxtQkFHUnZDLCtDQUFNLENBQUN3QyxLQUFQLENBQWFMLEtBQWIsRUFBb0I7QUFBRUksa0JBQUksRUFBSkE7QUFBRixhQUFwQixDQUhROztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVyQyxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuXG4vLyBTb2NpYWwgU2hhcmUgYnV0dG9uc1xuLy8gaW1wb3J0IHsgRmFjZWJvb2tTaGFyZUJ1dHRvbiB9IGZyb20gJ3JlYWN0LXNoYXJlJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2x1Zy5tb2R1bGUuc2NzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQnO1xuXG5cblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcylcbiAgY29uc3Qge1xuICAgIHRpdGxlID0gJ01pc3NpbmcgdGl0bGUnLFxuICAgIG5hbWUgPSAnTWlzc2luZyBuYW1lJyxcbiAgICBjYXRlZ29yaWVzLFxuICAgIGF1dGhvckltYWdlLFxuICAgIG1haW5JbWFnZSxcbiAgICBzZWNvbmRCb2R5LFxuICAgIHNlY29uZEltYWdlLFxuICAgIHRoaXJkQm9keSxcbiAgICB0aGlyZEltYWdlLFxuICAgIGZvdXJ0aEJvZHksXG4gICAgZm91cnRoSW1hZ2UsXG4gICAgZmlmdGhJbWFnZSxcbiAgICBib2R5ID0gW10sXG4gICAgaW50cm9kdWN0aW9uID0gW10sXG4gICAgdGl0bGVBLFxuICAgIGluZ3JlZGllbnRzQSA9IFtdLFxuICAgIHRpdGxlQixcbiAgICBpbmdyZWRpZW50c0IgPSBbXSxcbiAgICB0aXRsZUMsXG4gICAgaW5ncmVkaWVudHNDID0gW10sXG4gICAgdGl0bGVELFxuICAgIGluZ3JlZGllbnRzRCA9IFtdLFxuICAgIFxuICB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzI1cHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vZkYzY0F1ZS5wbmcpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnMzBweCAxNXB4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICdyZXBlYXQteCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiAnMHB4J1xuICAgICAgICB9fT48L2Rpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgICA8ZGl2PjE8L2Rpdj5cbiAgICAgICAgPGRpdj4yPC9kaXY+XG4gICAgICAgIDxkaXY+MzwvZGl2PlxuICAgICAgICA8ZGl2PjQ8L2Rpdj5cbiAgICAgICAgPGRpdj41PC9kaXY+XG4gICAgICAgIDxkaXY+NjwvZGl2PlxuICAgICAgICA8ZGl2Pjc8L2Rpdj5cbiAgICAgICAgPGRpdj44PC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9kaXY+XG4gICAgICBcbiAgKVxufVxuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICB0aXRsZSxcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgbWFpbkltYWdlLFxuICBzZWNvbmRJbWFnZSxcbiAgc2Vjb25kQm9keSxcbiAgaW50cm9kdWN0aW9uLFxuICB0aGlyZEJvZHksXG4gIHRoaXJkSW1hZ2UsXG4gIGZvdXJ0aEltYWdlLFxuICBmb3VydGhCb2R5LFxuICBmaWZ0aEltYWdlLFxuICB0aXRsZUEsXG4gIGluZ3JlZGllbnRzQSxcbiAgdGl0bGVCLFxuICBpbmdyZWRpZW50c0IsXG4gIHRpdGxlQyxcbiAgaW5ncmVkaWVudHNDLFxuICB0aXRsZUQsXG4gIGluZ3JlZGllbnRzRCxcbiAgYm9keVxufWBcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5XG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})
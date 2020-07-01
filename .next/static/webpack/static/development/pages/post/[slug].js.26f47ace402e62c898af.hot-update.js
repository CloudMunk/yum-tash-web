webpackHotUpdate("static/development/pages/post/[slug].js",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _slug_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slug.module.scss */ \"./pages/post/slug.module.scss\");\n/* harmony import */ var _slug_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_slug_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/menu/menu.component */ \"./components/menu/menu.component.jsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/post/[slug].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\" && slug.current == $slug][0]{\\n  title,\\n  \\\"name\\\": author->name,\\n  \\\"categories\\\": categories[]->title,\\n  \\\"authorImage\\\": author->image,\\n  mainImage,\\n  secondImage,\\n  secondBody,\\n  introduction,\\n  thirdBody,\\n  thirdImage,\\n  fourthImage,\\n  fourthBody,\\n  fifthImage,\\n  titleA,\\n  ingredientsA,\\n  titleB,\\n  ingredientsB,\\n  titleC,\\n  ingredientsC,\\n  titleD,\\n  ingredientsD,\\n  body\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n // Social Share buttons\n// import { FacebookShareButton } from 'react-share'\n\n // Components\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\n\nvar Post = function Post(props) {\n  console.log(props);\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$name = props.name,\n      name = _props$name === void 0 ? 'Missing name' : _props$name,\n      categories = props.categories,\n      authorImage = props.authorImage,\n      mainImage = props.mainImage,\n      secondBody = props.secondBody,\n      secondImage = props.secondImage,\n      thirdBody = props.thirdBody,\n      thirdImage = props.thirdImage,\n      fourthBody = props.fourthBody,\n      fourthImage = props.fourthImage,\n      fifthImage = props.fifthImage,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body,\n      _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      titleA = props.titleA,\n      _props$ingredientsA = props.ingredientsA,\n      ingredientsA = _props$ingredientsA === void 0 ? [] : _props$ingredientsA,\n      titleB = props.titleB,\n      _props$ingredientsB = props.ingredientsB,\n      ingredientsB = _props$ingredientsB === void 0 ? [] : _props$ingredientsB,\n      titleC = props.titleC,\n      _props$ingredientsC = props.ingredientsC,\n      ingredientsC = _props$ingredientsC === void 0 ? [] : _props$ingredientsC,\n      titleD = props.titleD,\n      _props$ingredientsD = props.ingredientsD,\n      ingredientsD = _props$ingredientsD === void 0 ? [] : _props$ingredientsD;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      width: '100%',\n      height: '25px',\n      backgroundImage: 'url(https://i.imgur.com/fF3cAue.png)',\n      backgroundSize: '30px 15px',\n      backgroundRepeat: 'repeat-x',\n      backgroundPositionY: '0px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), __jsx(_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }), __jsx(\"article\", {\n    className: _slug_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, \"1\"), __jsx(\"div\", {\n    style: {\n      borderRight: '0.8px solid #808080',\n      borderBottom: '0.8px solid #808080'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: _slug_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, title)), __jsx(\"div\", {\n    style: {\n      borderBottom: '0.8px solid #808080'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, \"3\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"4\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, \"5\"), __jsx(\"div\", {\n    style: {\n      borderRight: '0.8px solid #808080'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, \"6\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, \"7\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, \"8\")));\n};\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz81MzU0Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiUG9zdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsIm1haW5JbWFnZSIsInNlY29uZEJvZHkiLCJzZWNvbmRJbWFnZSIsInRoaXJkQm9keSIsInRoaXJkSW1hZ2UiLCJmb3VydGhCb2R5IiwiZm91cnRoSW1hZ2UiLCJmaWZ0aEltYWdlIiwiYm9keSIsImludHJvZHVjdGlvbiIsInRpdGxlQSIsImluZ3JlZGllbnRzQSIsInRpdGxlQiIsImluZ3JlZGllbnRzQiIsInRpdGxlQyIsImluZ3JlZGllbnRzQyIsInRpdGxlRCIsImluZ3JlZGllbnRzRCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsInN0eWxlcyIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0NBSUE7O0FBQ0E7O0FBSUEsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkIsU0FBT0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFFRCxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRHNCLHFCQTBC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QUFBQSxLQUE4QkEsS0FBOUIsQ0FERixDQUZGLEVBS0U7QUFBSyxTQUFLLEVBQUU7QUFBQzhCLGtCQUFZLEVBQUU7QUFBZixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FQRixFQVFFO0FBQUssU0FBSyxFQUFFO0FBQUNELGlCQUFXLEVBQUM7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FURixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FWRixDQVZGLENBREY7QUEwQkQsQ0FyREQ7O0tBQU1qQyxJO0FBdUROLElBQU1tQyxLQUFLLEdBQUdDLDJDQUFILG1CQUFYOztBQXlCQXBDLElBQUksQ0FBQ3FDLGVBQUw7QUFBQSw4TEFBdUIsaUJBQWdCQyxPQUFoQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCO0FBRHFCLGtDQUVDQSxPQUFPLENBQUNILEtBRlQsQ0FFYkksSUFGYSxFQUViQSxJQUZhLG9DQUVOLEVBRk07QUFBQTtBQUFBLG1CQUdSekMsK0NBQU0sQ0FBQzBDLEtBQVAsQ0FBYUwsS0FBYixFQUFvQjtBQUFFSSxrQkFBSSxFQUFKQTtBQUFGLGFBQXBCLENBSFE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZXZDLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdC9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXG5cbi8vIFNvY2lhbCBTaGFyZSBidXR0b25zXG4vLyBpbXBvcnQgeyBGYWNlYm9va1NoYXJlQnV0dG9uIH0gZnJvbSAncmVhY3Qtc2hhcmUnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbHVnLm1vZHVsZS5zY3NzJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudCc7XG5cblxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzKVxuICBjb25zdCB7XG4gICAgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsXG4gICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLFxuICAgIGNhdGVnb3JpZXMsXG4gICAgYXV0aG9ySW1hZ2UsXG4gICAgbWFpbkltYWdlLFxuICAgIHNlY29uZEJvZHksXG4gICAgc2Vjb25kSW1hZ2UsXG4gICAgdGhpcmRCb2R5LFxuICAgIHRoaXJkSW1hZ2UsXG4gICAgZm91cnRoQm9keSxcbiAgICBmb3VydGhJbWFnZSxcbiAgICBmaWZ0aEltYWdlLFxuICAgIGJvZHkgPSBbXSxcbiAgICBpbnRyb2R1Y3Rpb24gPSBbXSxcbiAgICB0aXRsZUEsXG4gICAgaW5ncmVkaWVudHNBID0gW10sXG4gICAgdGl0bGVCLFxuICAgIGluZ3JlZGllbnRzQiA9IFtdLFxuICAgIHRpdGxlQyxcbiAgICBpbmdyZWRpZW50c0MgPSBbXSxcbiAgICB0aXRsZUQsXG4gICAgaW5ncmVkaWVudHNEID0gW10sXG4gICAgXG4gIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMjVweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9mRjNjQXVlLnBuZyknLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICczMHB4IDE1cHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ3JlcGVhdC14JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvblk6ICcwcHgnXG4gICAgICAgIH19PjwvZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICAgIDxkaXY+MTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyUmlnaHQ6JzAuOHB4IHNvbGlkICM4MDgwODAnLCBib3JkZXJCb3R0b206ICcwLjhweCBzb2xpZCAjODA4MDgwJ319PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyQm90dG9tOiAnMC44cHggc29saWQgIzgwODA4MCd9fT4zPC9kaXY+XG4gICAgICAgIDxkaXY+NDwvZGl2PlxuICAgICAgICA8ZGl2PjU8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlclJpZ2h0OicwLjhweCBzb2xpZCAjODA4MDgwJ319PjY8L2Rpdj5cbiAgICAgICAgPGRpdj43PC9kaXY+XG4gICAgICAgIDxkaXY+ODwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvZGl2PlxuICAgICAgXG4gIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gIG1haW5JbWFnZSxcbiAgc2Vjb25kSW1hZ2UsXG4gIHNlY29uZEJvZHksXG4gIGludHJvZHVjdGlvbixcbiAgdGhpcmRCb2R5LFxuICB0aGlyZEltYWdlLFxuICBmb3VydGhJbWFnZSxcbiAgZm91cnRoQm9keSxcbiAgZmlmdGhJbWFnZSxcbiAgdGl0bGVBLFxuICBpbmdyZWRpZW50c0EsXG4gIHRpdGxlQixcbiAgaW5ncmVkaWVudHNCLFxuICB0aXRsZUMsXG4gIGluZ3JlZGllbnRzQyxcbiAgdGl0bGVELFxuICBpbmdyZWRpZW50c0QsXG4gIGJvZHlcbn1gXG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeVxuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})
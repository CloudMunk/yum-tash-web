webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/card/card.component */ \"./components/card/card.component.jsx\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{\\n        introduction, \\n        mainImage, \\n        secondImage, \\n        title,\\n        slug,\\n        \\\"name\\\": author->name, }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      name = props.name,\n      slug = props.slug;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      // backgroundImage: 'linear-gradient(to right, rgb(0, 154, 164), rgb(21, 32, 33))',\n      // backgroundColor: '#E0ECF7', \n      margin: '0 auto',\n      width: '100vw',\n      height: '40vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'grid',\n      gridTemplateColumns: '1fr repeat(2, 2fr) 1fr',\n      gridTemplateRows: '0.2fr 1fr',\n      height: '40vw',\n      // backgroundColor: '#E0ECF7',\n      // backgroundImage: 'linear-gradient(to right, rgb(198, 253, 234), rgb(242, 194, 188))',\n      color: '#444'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, \"1\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, \"2\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, \"3\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, \"4\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, \"5\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, __jsx(_components_card_card_component__WEBPACK_IMPORTED_MODULE_12__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, \"7\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, \"8\"))));\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n{\n  /* <div>\n            \n              {posts.map(\n                ({ _id, title = '', slug = '', _updatedAt = '' }) =>\n                  slug && (\n                    <li key={_id}>\n                      <Link href=\"/post/[slug]\" as={`/post/${slug.current}`}>\n                        <a>{title}</a>\n                      </Link>{' '}\n                      ({new Date(_updatedAt).toDateString()})\n                    </li>\n                  )\n              )}\n          </div> */\n} //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>\n//   <div>\n//     <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>\n//     <div style={{\n//         marginTop: '45px',\n//         marginLeft: '17%', \n//         backgroundColor: '#1C060A', \n//         maxWidth: '50vw',\n//         minWidth: '50vw',\n//         minHeight: '20vw',\n//         maxHeight: '20vw',\n//         // borderRadius: '10px'\n//         }}\n//     >\n//       <div style={{display: 'flex', justifyContent: 'space-around'}}>\n//         <div>\n//           <h3 style={{\n//                 marginLeft: '10px',\n//                 color: 'white'\n//               }}\n//             >\n//               {posts[0].title}\n//           </h3>\n//           <img\n//             style={{marginLeft: '10px', marginTop: '30px'}}\n//             src={urlFor(posts[0].mainImage)\n//               .width(200)\n//               .url()}\n//           />\n//         </div>\n//         {/* CARD */}\n//         <div  style={{\n//             color: 'white', \n//             marginTop: '1.5vw', \n//             backgroundColor: '#226666', \n//             padding: '5px 20px', \n//             minWidth: '24vw',\n//             maxWidth: '28vw',\n//             maxHeight: '320px',\n//             borderRadius: '10px'\n//             }}\n//           >\n//           <h2>\n//             Description\n//           </h2>\n//           <p style={{color: 'white'}}>\n//             Author: {posts[0].name}\n//           </p>\n//           <BlockContent\n//             // style={{ maxWidth: '100px !important'}}\n//             blocks={posts[0].introduction}\n//             // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//             {...client.config()}\n//           />\n//           {/* <p style={{color: 'white', fontSize: '12px'}}>\n//               {introduction}\n//           </p> */}\n//         </div>\n//       </div>\n//     </div>\n//  </div>\n// </div>\n// CARD\n//   <div  style={{\n//     color: 'white', \n//     marginTop: '1.5vw', \n//     backgroundColor: '#226666', \n//     padding: '5px 20px', \n//     minWidth: '24vw',\n//     maxWidth: '28vw',\n//     maxHeight: '320px',\n//     borderRadius: '10px'\n//     }}\n//   >\n//   <h2>\n//     Description\n//   </h2>\n//   <p style={{color: 'white'}}>\n//     Author: {posts[0].name}\n//   </p>\n//   <BlockContent\n//     // style={{ maxWidth: '100px !important'}}\n//     blocks={posts[0].introduction}\n//     // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//     {...client.config()}\n//   />\n//   {/* <p style={{color: 'white', fontSize: '12px'}}>\n//       {introduction}\n//   </p> */}\n// </div>\n\n{\n  /* <h1 style={{\n              fontFamily: \"Archer SSm A\",\n              fontSize: '32px',\n              marginRight: '14vw'\n            }}>\n              \n            </h1> */\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsInBvc3RzIiwibmFtZSIsInNsdWciLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsImNvbG9yIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHlEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsNEJBTWpCQSxLQU5pQixDQUVuQkMsWUFGbUI7QUFBQSxNQUVuQkEsWUFGbUIsb0NBRUosRUFGSTtBQUFBLHFCQU1qQkQsS0FOaUIsQ0FHbkJFLEtBSG1CO0FBQUEsTUFHbkJBLEtBSG1CLDZCQUdYLEVBSFc7QUFBQSxNQUluQkMsSUFKbUIsR0FNakJILEtBTmlCLENBSW5CRyxJQUptQjtBQUFBLE1BS25CQyxJQUxtQixHQU1qQkosS0FOaUIsQ0FLbkJJLElBTG1CO0FBT3JCLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0k7QUFBSyxTQUFLLEVBQUU7QUFDUjtBQUNBO0FBQ0FDLFlBQU0sRUFBRSxRQUhBO0FBSVJDLFdBQUssRUFBRSxPQUpDO0FBS1JDLFlBQU0sRUFBRTtBQUxBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUssU0FBSyxFQUFFO0FBQ1ZDLGFBQU8sRUFBRSxNQURDO0FBRVZDLHlCQUFtQixFQUFFLHdCQUZYO0FBR1ZDLHNCQUFnQixFQUFFLFdBSFI7QUFJVkgsWUFBTSxFQUFFLE1BSkU7QUFLVjtBQUNBO0FBQ0FJLFdBQUssRUFBRTtBQVBHLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FUQSxFQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FWQSxFQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FYQSxFQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FaQSxFQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FiQSxFQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLHdFQUFELHlGQUFVWCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRixDQWRBLEVBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FsQkEsRUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW5CQSxDQVJGLENBSEosQ0FEQTtBQXlDSCxDQWhERDs7S0FBTUQsSztBQWtETkEsS0FBSyxDQUFDYSxlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUGYsK0NBQU0sQ0FBQ2dCLEtBQVAsQ0FBYUMsMkNBQWIsb0JBRE87O0FBQUE7QUFBQTtBQUFBO0FBQ3BCWixpQkFEb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQWFlSCxvRUFBZjtBQUVDO0FBQUM7Ozs7Ozs7Ozs7Ozs7O0FBYWtCLEMsQ0FFZDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVGO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0M7QUFBQzs7Ozs7OztBQU1tQiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50J1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5cbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJy4uL2xheW91dHMnO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCBkZXNzZXJ0IGZyb20gJy4uL3B1YmxpYy9kZXNzZXJ0LmpwZWcnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnXG5cblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IFxuICAgICAgaW50cm9kdWN0aW9uID0gW10sXG4gICAgICBwb3N0cyA9IFtdLCBcbiAgICAgIG5hbWUsXG4gICAgICBzbHVnXG4gICAgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8RGVmYXVsdExheW91dCAvPlxuICAgICAgICB7LyogRk9MRCAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMCwgMTU0LCAxNjQpLCByZ2IoMjEsIDMyLCAzMykpJyxcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLCBcbiAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsIFxuICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsIFxuICAgICAgICAgICAgaGVpZ2h0OiAnNDB2dycsIFxuICAgICAgICAgICBcbiAgICAgICAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciByZXBlYXQoMiwgMmZyKSAxZnInLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogJzAuMmZyIDFmcicsXG4gICAgICAgICAgICBoZWlnaHQ6ICc0MHZ3JyxcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLFxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTk4LCAyNTMsIDIzNCksIHJnYigyNDIsIDE5NCwgMTg4KSknLFxuICAgICAgICAgICAgY29sb3I6ICcjNDQ0J1xuICAgICAgICAgIH19PlxuICAgICAgICAgIDxkaXY+MTwvZGl2PlxuICAgICAgICAgIDxkaXY+MjwvZGl2PlxuICAgICAgICAgIDxkaXY+MzwvZGl2PlxuICAgICAgICAgIDxkaXY+NDwvZGl2PlxuICAgICAgICAgIDxkaXY+NTwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7LyogQ0FSRCAqL31cbiAgICAgICAgICAgIDxDYXJkIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pjc8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pjg8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuICAgICAgICA8L2Rpdj4gIFxuICAgIDwvZGl2PlxuICAgICAgXG4gICAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICAgIHBvc3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbiAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCJde1xuICAgICAgICBpbnRyb2R1Y3Rpb24sIFxuICAgICAgICBtYWluSW1hZ2UsIFxuICAgICAgICBzZWNvbmRJbWFnZSwgXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBzbHVnLFxuICAgICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLCB9XG4gICAgYClcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuIHsvKiA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHtwb3N0cy5tYXAoXG4gICAgICAgICAgICAgICAgKHsgX2lkLCB0aXRsZSA9ICcnLCBzbHVnID0gJycsIF91cGRhdGVkQXQgPSAnJyB9KSA9PlxuICAgICAgICAgICAgICAgICAgc2x1ZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICh7bmV3IERhdGUoX3VwZGF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9KVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgbWFyZ2luOiAnMCBhdXRvJywgd2lkdGg6ICc4MCUnLCBoZWlnaHQ6ICc3MDBweCcsIG1hcmdpblRvcDogJy0xLjJ2dyd9fT5cbiAgICAgICAgLy8gICA8ZGl2PlxuICAgICAgICAvLyAgICAgPGgxIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE3JSd9fT5ZdW0gVGFzaCBGb29kIExvdmVycyBIb21lPC9oMT5cbiAgICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW5Ub3A6ICc0NXB4JyxcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW5MZWZ0OiAnMTclJywgXG4gICAgICAgIC8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFDMDYwQScsIFxuICAgICAgICAvLyAgICAgICAgIG1heFdpZHRoOiAnNTB2dycsXG4gICAgICAgIC8vICAgICAgICAgbWluV2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtaW5IZWlnaHQ6ICcyMHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtYXhIZWlnaHQ6ICcyMHZ3JyxcbiAgICAgICAgLy8gICAgICAgICAvLyBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgICAgICAvLyAgICAgICAgIH19XG4gICAgICAgIC8vICAgICA+XG4gICAgICAgIC8vICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ319PlxuICAgICAgICAvLyAgICAgICAgIDxkaXY+XG4gICAgICAgIC8vICAgICAgICAgICA8aDMgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICAgIC8vICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgPlxuICAgICAgICAvLyAgICAgICAgICAgICAgIHtwb3N0c1swXS50aXRsZX1cbiAgICAgICAgLy8gICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICAgIDxpbWdcbiAgICAgICAgLy8gICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzMwcHgnfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdHNbMF0ubWFpbkltYWdlKVxuICAgICAgICAvLyAgICAgICAgICAgICAgIC53aWR0aCgyMDApXG4gICAgICAgIC8vICAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAvLyAgICAgICAgICAgLz5cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICB7LyogQ0FSRCAqL31cbiAgICAgICAgLy8gICAgICAgICA8ZGl2ICBzdHlsZT17e1xuICAgICAgICAvLyAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgXG4gICAgICAgIC8vICAgICAgICAgICAgIG1hcmdpblRvcDogJzEuNXZ3JywgXG4gICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjY2NjYnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgcGFkZGluZzogJzVweCAyMHB4JywgXG4gICAgICAgIC8vICAgICAgICAgICAgIG1pbldpZHRoOiAnMjR2dycsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1heFdpZHRoOiAnMjh2dycsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1heEhlaWdodDogJzMyMHB4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgICAgLy8gICAgICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgICAgICAgID5cbiAgICAgICAgLy8gICAgICAgICAgIDxoMj5cbiAgICAgICAgLy8gICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgLy8gICAgICAgICAgIDwvaDI+XG4gICAgICAgIC8vICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XG4gICAgICAgIC8vICAgICAgICAgICAgIEF1dGhvcjoge3Bvc3RzWzBdLm5hbWV9XG4gICAgICAgIC8vICAgICAgICAgICA8L3A+XG4gICAgICAgIC8vICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwcHggIWltcG9ydGFudCd9fVxuICAgICAgICAvLyAgICAgICAgICAgICBibG9ja3M9e3Bvc3RzWzBdLmludHJvZHVjdGlvbn1cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDMwMCwgaDogMTAwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgIC8vICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgIC8vICAgICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgICAgey8qIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTJweCd9fT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICB7aW50cm9kdWN0aW9ufVxuICAgICAgICAvLyAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgLy8gPC9kaXY+XG4gICAgLy8gQ0FSRFxuICAgIC8vICAgPGRpdiAgc3R5bGU9e3tcbiAgICAvLyAgICAgY29sb3I6ICd3aGl0ZScsIFxuICAgIC8vICAgICBtYXJnaW5Ub3A6ICcxLjV2dycsIFxuICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjI2NjY2JywgXG4gICAgLy8gICAgIHBhZGRpbmc6ICc1cHggMjBweCcsIFxuICAgIC8vICAgICBtaW5XaWR0aDogJzI0dncnLFxuICAgIC8vICAgICBtYXhXaWR0aDogJzI4dncnLFxuICAgIC8vICAgICBtYXhIZWlnaHQ6ICczMjBweCcsXG4gICAgLy8gICAgIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgLy8gICAgIH19XG4gICAgLy8gICA+XG4gICAgLy8gICA8aDI+XG4gICAgLy8gICAgIERlc2NyaXB0aW9uXG4gICAgLy8gICA8L2gyPlxuICAgIC8vICAgPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxuICAgIC8vICAgICBBdXRob3I6IHtwb3N0c1swXS5uYW1lfVxuICAgIC8vICAgPC9wPlxuICAgIC8vICAgPEJsb2NrQ29udGVudFxuICAgIC8vICAgICAvLyBzdHlsZT17eyBtYXhXaWR0aDogJzEwMHB4ICFpbXBvcnRhbnQnfX1cbiAgICAvLyAgICAgYmxvY2tzPXtwb3N0c1swXS5pbnRyb2R1Y3Rpb259XG4gICAgLy8gICAgIC8vIGltYWdlT3B0aW9ucz17eyB3OiAzMDAsIGg6IDEwMCwgZml0OiAnbWF4JyB9fVxuICAgIC8vICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgIC8vICAgLz5cbiAgICAvLyAgIHsvKiA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzEycHgnfX0+XG4gICAgLy8gICAgICAge2ludHJvZHVjdGlvbn1cbiAgICAvLyAgIDwvcD4gKi99XG4gICAgLy8gPC9kaXY+XG5cblxuICAgICB7LyogPGgxIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyY2hlciBTU20gQVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICczMnB4JyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTR2dydcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvaDE+ICovfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/card/card.component */ \"./components/card/card.component.jsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{\\n        introduction, \\n        mainImage, \\n        secondImage, \\n        title, \\n        \\\"name\\\": author->name, }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default()(_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      name = props.name,\n      slug = props.slug;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      // backgroundImage: 'linear-gradient(to right, rgb(0, 154, 164), rgb(21, 32, 33))',\n      // backgroundColor: '#E0ECF7', \n      margin: '0 auto',\n      width: '100vw',\n      height: '40vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'grid',\n      gridTemplateColumns: '26.6vw 26.6vw 26.6vw',\n      // backgroundColor: '#E0ECF7',\n      // backgroundImage: 'linear-gradient(to right, rgb(198, 253, 234), rgb(242, 194, 188))',\n      color: '#444'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '1',\n      minHeight: '200px',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      borderBottom: '1px solid #D9D9D9',\n      borderRight: '1px solid #D9D9D9'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      marginBottom: '2vw',\n      marginLeft: '2vw',\n      backgroundColor: 'black',\n      marginTop: '2vw',\n      maxWidth: '50vw',\n      minWidth: '50vw',\n      minHeight: '20vw',\n      maxHeight: '20vw',\n      borderRadius: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 19\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      gridColumn: '3',\n      gridRow: ' 1',\n      minHeight: '200px',\n      display: 'flex',\n      borderBottom: '1px solid #D9D9D9'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      marginTop: '4vw',\n      paddingTop: '16px',\n      fontFamily: \"Archer SSm A\",\n      fontSize: '17px',\n      textAlign: 'center',\n      paddingLeft: '15%',\n      paddingRight: '15%',\n      letterSpacing: '0.19em',\n      fontWeight: '900',\n      lineHeight: '1.6em'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, \"I denne bloggen tar vi for oss retter som er sesongbaserte, da vi tenker ekstra p\\xE5 milj\\xF8et.\")), __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 15\n    }\n  }))));\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n{\n  /* <div>\n            \n              {posts.map(\n                ({ _id, title = '', slug = '', _updatedAt = '' }) =>\n                  slug && (\n                    <li key={_id}>\n                      <Link href=\"/post/[slug]\" as={`/post/${slug.current}`}>\n                        <a>{title}</a>\n                      </Link>{' '}\n                      ({new Date(_updatedAt).toDateString()})\n                    </li>\n                  )\n              )}\n          </div> */\n} //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>\n//   <div>\n//     <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>\n//     <div style={{\n//         marginTop: '45px',\n//         marginLeft: '17%', \n//         backgroundColor: '#1C060A', \n//         maxWidth: '50vw',\n//         minWidth: '50vw',\n//         minHeight: '20vw',\n//         maxHeight: '20vw',\n//         // borderRadius: '10px'\n//         }}\n//     >\n//       <div style={{display: 'flex', justifyContent: 'space-around'}}>\n//         <div>\n//           <h3 style={{\n//                 marginLeft: '10px',\n//                 color: 'white'\n//               }}\n//             >\n//               {posts[0].title}\n//           </h3>\n//           <img\n//             style={{marginLeft: '10px', marginTop: '30px'}}\n//             src={urlFor(posts[0].mainImage)\n//               .width(200)\n//               .url()}\n//           />\n//         </div>\n//         {/* CARD */}\n//         <div  style={{\n//             color: 'white', \n//             marginTop: '1.5vw', \n//             backgroundColor: '#226666', \n//             padding: '5px 20px', \n//             minWidth: '24vw',\n//             maxWidth: '28vw',\n//             maxHeight: '320px',\n//             borderRadius: '10px'\n//             }}\n//           >\n//           <h2>\n//             Description\n//           </h2>\n//           <p style={{color: 'white'}}>\n//             Author: {posts[0].name}\n//           </p>\n//           <BlockContent\n//             // style={{ maxWidth: '100px !important'}}\n//             blocks={posts[0].introduction}\n//             // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//             {...client.config()}\n//           />\n//           {/* <p style={{color: 'white', fontSize: '12px'}}>\n//               {introduction}\n//           </p> */}\n//         </div>\n//       </div>\n//     </div>\n//  </div>\n// </div>\n// CARD\n//   <div  style={{\n//     color: 'white', \n//     marginTop: '1.5vw', \n//     backgroundColor: '#226666', \n//     padding: '5px 20px', \n//     minWidth: '24vw',\n//     maxWidth: '28vw',\n//     maxHeight: '320px',\n//     borderRadius: '10px'\n//     }}\n//   >\n//   <h2>\n//     Description\n//   </h2>\n//   <p style={{color: 'white'}}>\n//     Author: {posts[0].name}\n//   </p>\n//   <BlockContent\n//     // style={{ maxWidth: '100px !important'}}\n//     blocks={posts[0].introduction}\n//     // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//     {...client.config()}\n//   />\n//   {/* <p style={{color: 'white', fontSize: '12px'}}>\n//       {introduction}\n//   </p> */}\n// </div>\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsInBvc3RzIiwibmFtZSIsInNsdWciLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiY29sb3IiLCJncmlkQ29sdW1uIiwiZ3JpZFJvdyIsIm1pbkhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblRvcCIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJtYXhIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nVG9wIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsImdyb3EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHdEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsNEJBTWpCQSxLQU5pQixDQUVuQkMsWUFGbUI7QUFBQSxNQUVuQkEsWUFGbUIsb0NBRUos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QyxpQkFEb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQVllSCxvRUFBZjtBQUVDO0FBQUM7Ozs7Ozs7Ozs7Ozs7O0FBYWtCLEMsQ0FFZDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVGO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICcuLi9sYXlvdXRzJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQgZGVzc2VydCBmcm9tICcuLi9wdWJsaWMvZGVzc2VydC5qcGVnJztcblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50J1xuXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBcbiAgICAgIGludHJvZHVjdGlvbiA9IFtdLFxuICAgICAgcG9zdHMgPSBbXSwgXG4gICAgICBuYW1lLFxuICAgICAgc2x1Z1xuICAgIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPERlZmF1bHRMYXlvdXQgLz5cbiAgICAgICAgey8qIEZPTEQgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDAsIDE1NCwgMTY0KSwgcmdiKDIxLCAzMiwgMzMpKScsXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLCBcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLCBcbiAgICAgICAgICAgIGhlaWdodDogJzQwdncnLCBcbiAgICAgICAgICAgXG4gICAgICAgIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyNi42dncgMjYuNnZ3IDI2LjZ2dycsXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JyxcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE5OCwgMjUzLCAyMzQpLCByZ2IoMjQyLCAxOTQsIDE4OCkpJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ0NCdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHsvKiBUSElTIElTIEEgKi99XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBncmlkQ29sdW1uOiAnMSAvIDMnLFxuICAgICAgICAgICAgICAgICAgZ3JpZFJvdzogJzEnLFxuICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0Q5RDlEOScsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCAjRDlEOUQ5J1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHsvKiA8aDEgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJjaGVyIFNTbSBBXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzMycHgnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxNHZ3J1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9oMT4gKi99XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzJ2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMnZ3JywgXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcydncnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNTB2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzUwdncnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjB2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcyMHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBUSElTIElTIEIgKi99XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBncmlkQ29sdW1uOiAnMycsXG4gICAgICAgICAgICAgICAgICBncmlkUm93OicgMScsXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0Q5RDlEOSdcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzR2dycsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyY2hlciBTU20gQVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxN3B4JyxcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzE1JScsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxNSUnLFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMTllbScsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnOTAwJyxcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjZlbSdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSSBkZW5uZSBibG9nZ2VuIHRhciB2aSBmb3Igb3NzIHJldHRlciBzb20gZXIgXG4gICAgICAgICAgICAgICAgc2Vzb25nYmFzZXJ0ZSwgZGEgdmkgdGVua2VyIGVrc3RyYSBww6UgbWlsasO4ZXQuXG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBDYXJkICovfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZ3JpZENvbHVtbjogJzEgLyAzJyxcbiAgICAgICAgICAgICAgICBncmlkUm93OiAnMycsXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gIFxuICAgIDwvZGl2PlxuICAgICAgXG4gICAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICAgIHBvc3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbiAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCJde1xuICAgICAgICBpbnRyb2R1Y3Rpb24sIFxuICAgICAgICBtYWluSW1hZ2UsIFxuICAgICAgICBzZWNvbmRJbWFnZSwgXG4gICAgICAgIHRpdGxlLCBcbiAgICAgICAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSwgfVxuICAgIGApXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbiB7LyogPGRpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7cG9zdHMubWFwKFxuICAgICAgICAgICAgICAgICh7IF9pZCwgdGl0bGUgPSAnJywgc2x1ZyA9ICcnLCBfdXBkYXRlZEF0ID0gJycgfSkgPT5cbiAgICAgICAgICAgICAgICAgIHNsdWcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAoe25ldyBEYXRlKF91cGRhdGVkQXQpLnRvRGF0ZVN0cmluZygpfSlcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIC8vICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIG1hcmdpbjogJzAgYXV0bycsIHdpZHRoOiAnODAlJywgaGVpZ2h0OiAnNzAwcHgnLCBtYXJnaW5Ub3A6ICctMS4ydncnfX0+XG4gICAgICAgIC8vICAgPGRpdj5cbiAgICAgICAgLy8gICAgIDxoMSBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNyUnfX0+WXVtIFRhc2ggRm9vZCBMb3ZlcnMgSG9tZTwvaDE+XG4gICAgICAgIC8vICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIC8vICAgICAgICAgbWFyZ2luVG9wOiAnNDVweCcsXG4gICAgICAgIC8vICAgICAgICAgbWFyZ2luTGVmdDogJzE3JScsIFxuICAgICAgICAvLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxQzA2MEEnLCBcbiAgICAgICAgLy8gICAgICAgICBtYXhXaWR0aDogJzUwdncnLFxuICAgICAgICAvLyAgICAgICAgIG1pbldpZHRoOiAnNTB2dycsXG4gICAgICAgIC8vICAgICAgICAgbWluSGVpZ2h0OiAnMjB2dycsXG4gICAgICAgIC8vICAgICAgICAgbWF4SGVpZ2h0OiAnMjB2dycsXG4gICAgICAgIC8vICAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgICAgLy8gICAgICAgICB9fVxuICAgICAgICAvLyAgICAgPlxuICAgICAgICAvLyAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCd9fT5cbiAgICAgICAgLy8gICAgICAgICA8ZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgPGgzIHN0eWxlPXt7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgICAvLyAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8vICAgICAgICAgICAgID5cbiAgICAgICAgLy8gICAgICAgICAgICAgICB7cG9zdHNbMF0udGl0bGV9XG4gICAgICAgIC8vICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgICA8aW1nXG4gICAgICAgIC8vICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICczMHB4J319XG4gICAgICAgIC8vICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3RzWzBdLm1haW5JbWFnZSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAud2lkdGgoMjAwKVxuICAgICAgICAvLyAgICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgLy8gICAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgey8qIENBUkQgKi99XG4gICAgICAgIC8vICAgICAgICAgPGRpdiAgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIFxuICAgICAgICAvLyAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjV2dycsIFxuICAgICAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjI2NjY2JywgXG4gICAgICAgIC8vICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggMjBweCcsIFxuICAgICAgICAvLyAgICAgICAgICAgICBtaW5XaWR0aDogJzI0dncnLFxuICAgICAgICAvLyAgICAgICAgICAgICBtYXhXaWR0aDogJzI4dncnLFxuICAgICAgICAvLyAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMjBweCcsXG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgICAgIC8vICAgICAgICAgICAgIH19XG4gICAgICAgIC8vICAgICAgICAgICA+XG4gICAgICAgIC8vICAgICAgICAgICA8aDI+XG4gICAgICAgIC8vICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgIC8vICAgICAgICAgICA8L2gyPlxuICAgICAgICAvLyAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxuICAgICAgICAvLyAgICAgICAgICAgICBBdXRob3I6IHtwb3N0c1swXS5uYW1lfVxuICAgICAgICAvLyAgICAgICAgICAgPC9wPlxuICAgICAgICAvLyAgICAgICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhXaWR0aDogJzEwMHB4ICFpbXBvcnRhbnQnfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgYmxvY2tzPXtwb3N0c1swXS5pbnRyb2R1Y3Rpb259XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGltYWdlT3B0aW9ucz17eyB3OiAzMDAsIGg6IDEwMCwgZml0OiAnbWF4JyB9fVxuICAgICAgICAvLyAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgICAvLyAgICAgICAgICAgLz5cbiAgICAgICAgLy8gICAgICAgICAgIHsvKiA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzEycHgnfX0+XG4gICAgICAgIC8vICAgICAgICAgICAgICAge2ludHJvZHVjdGlvbn1cbiAgICAgICAgLy8gICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgIC8vICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgIC8vIDwvZGl2PlxuICAgIC8vIENBUkRcbiAgICAvLyAgIDxkaXYgIHN0eWxlPXt7XG4gICAgLy8gICAgIGNvbG9yOiAnd2hpdGUnLCBcbiAgICAvLyAgICAgbWFyZ2luVG9wOiAnMS41dncnLCBcbiAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyNjY2NicsIFxuICAgIC8vICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnLCBcbiAgICAvLyAgICAgbWluV2lkdGg6ICcyNHZ3JyxcbiAgICAvLyAgICAgbWF4V2lkdGg6ICcyOHZ3JyxcbiAgICAvLyAgICAgbWF4SGVpZ2h0OiAnMzIwcHgnLFxuICAgIC8vICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgIC8vICAgICB9fVxuICAgIC8vICAgPlxuICAgIC8vICAgPGgyPlxuICAgIC8vICAgICBEZXNjcmlwdGlvblxuICAgIC8vICAgPC9oMj5cbiAgICAvLyAgIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5cbiAgICAvLyAgICAgQXV0aG9yOiB7cG9zdHNbMF0ubmFtZX1cbiAgICAvLyAgIDwvcD5cbiAgICAvLyAgIDxCbG9ja0NvbnRlbnRcbiAgICAvLyAgICAgLy8gc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDBweCAhaW1wb3J0YW50J319XG4gICAgLy8gICAgIGJsb2Nrcz17cG9zdHNbMF0uaW50cm9kdWN0aW9ufVxuICAgIC8vICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogMzAwLCBoOiAxMDAsIGZpdDogJ21heCcgfX1cbiAgICAvLyAgICAgey4uLmNsaWVudC5jb25maWcoKX1cbiAgICAvLyAgIC8+XG4gICAgLy8gICB7LyogPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcxMnB4J319PlxuICAgIC8vICAgICAgIHtpbnRyb2R1Y3Rpb259XG4gICAgLy8gICA8L3A+ICovfVxuICAgIC8vIDwvZGl2PiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
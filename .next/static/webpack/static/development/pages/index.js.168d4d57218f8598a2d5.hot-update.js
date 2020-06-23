webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{\\n        introduction, \\n        mainImage, \\n        secondImage, \\n        title, \\n        \\\"name\\\": author->name, }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      name = props.name;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      backgroundColor: '#E0ECF7',\n      margin: '0 auto',\n      width: '80vw',\n      height: '40vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'grid',\n      gridTemplateColumns: '26.6vw 26.6vw 26.6vw',\n      backgroundColor: '#E0ECF7',\n      color: '#444'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '1',\n      minHeight: '200px',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      borderBottom: '1px solid #D9D9D9',\n      borderRight: '1px solid #D9D9D9',\n      top: '50%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      fontFamily: \"Archer SSm A\",\n      fontSize: '32px',\n      marginRight: '14vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, \"Yum Tash Food Lovers Home\")), __jsx(\"div\", {\n    style: {\n      gridColumn: '3',\n      gridRow: ' 1',\n      minHeight: '200px',\n      display: 'flex',\n      borderBottom: '1px solid #D9D9D9'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      marginTop: '4vw',\n      paddingTop: '16px',\n      fontFamily: \"Archer SSm A\",\n      fontSize: '17px',\n      textAlign: 'center',\n      paddingLeft: '15%',\n      paddingRight: '15%',\n      letterSpacing: '0.19em',\n      fontWeight: '900',\n      lineHeight: '1.6em'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, \"A food blog with fresh, zesty recipes.\")), __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      marginBottom: '2vw',\n      marginLeft: '2vw',\n      backgroundColor: '#1C060A',\n      marginTop: '2vw',\n      maxWidth: '50vw',\n      minWidth: '50vw',\n      minHeight: '20vw',\n      maxHeight: '20vw' // borderRadius: '10px'\n\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-around'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 23\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      marginLeft: '10px',\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 25\n    }\n  }, posts[0].title), __jsx(\"img\", {\n    style: {\n      marginLeft: '10px',\n      marginTop: '30px'\n    },\n    src: urlFor(posts[0].mainImage).width(200).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    style: {\n      color: 'white',\n      marginTop: '1.5vw',\n      backgroundColor: '#226666',\n      padding: '5px 20px',\n      minWidth: '24vw',\n      maxWidth: '28vw',\n      maxHeight: '320px',\n      borderRadius: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 23\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 25\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    style: {\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 25\n    }\n  }, \"Author: \", posts[0].name), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a // style={{ maxWidth: '100px !important'}}\n  , Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    blocks: posts[0].introduction // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n\n  }, _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].config(), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 25\n    }\n  }))))))))));\n}; // Post.getInitialProps = async function (context) {\n\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n{\n  /* <div>\n            \n              {posts.map(\n                ({ _id, title = '', slug = '', _updatedAt = '' }) =>\n                  slug && (\n                    <li key={_id}>\n                      <Link href=\"/post/[slug]\" as={`/post/${slug.current}`}>\n                        <a>{title}</a>\n                      </Link>{' '}\n                      ({new Date(_updatedAt).toDateString()})\n                    </li>\n                  )\n              )}\n          </div> */\n} //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>\n//   <div>\n//     <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>\n//     <div style={{\n//         marginTop: '45px',\n//         marginLeft: '17%', \n//         backgroundColor: '#1C060A', \n//         maxWidth: '50vw',\n//         minWidth: '50vw',\n//         minHeight: '20vw',\n//         maxHeight: '20vw',\n//         // borderRadius: '10px'\n//         }}\n//     >\n//       <div style={{display: 'flex', justifyContent: 'space-around'}}>\n//         <div>\n//           <h3 style={{\n//                 marginLeft: '10px',\n//                 color: 'white'\n//               }}\n//             >\n//               {posts[0].title}\n//           </h3>\n//           <img\n//             style={{marginLeft: '10px', marginTop: '30px'}}\n//             src={urlFor(posts[0].mainImage)\n//               .width(200)\n//               .url()}\n//           />\n//         </div>\n//         {/* CARD */}\n//         <div  style={{\n//             color: 'white', \n//             marginTop: '1.5vw', \n//             backgroundColor: '#226666', \n//             padding: '5px 20px', \n//             minWidth: '24vw',\n//             maxWidth: '28vw',\n//             maxHeight: '320px',\n//             borderRadius: '10px'\n//             }}\n//           >\n//           <h2>\n//             Description\n//           </h2>\n//           <p style={{color: 'white'}}>\n//             Author: {posts[0].name}\n//           </p>\n//           <BlockContent\n//             // style={{ maxWidth: '100px !important'}}\n//             blocks={posts[0].introduction}\n//             // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//             {...client.config()}\n//           />\n//           {/* <p style={{color: 'white', fontSize: '12px'}}>\n//               {introduction}\n//           </p> */}\n//         </div>\n//       </div>\n//     </div>\n//  </div>\n// </div>\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsInBvc3RzIiwibmFtZSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2xvciIsImdyaWRDb2x1bW4iLCJncmlkUm93IiwibWluSGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJ0b3AiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsInBhZGRpbmdUb3AiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwibWF4SGVpZ2h0IiwidGl0bGUiLCJtYWluSW1hZ2UiLCJ1cmwiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiY29uZmlnIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHlEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FB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TCxDQUFTQyxJQURwQixDQWRGLEVBaUJFLE1BQUMscUVBQUQsQ0FDRTtBQURGO0FBRUUsVUFBTSxFQUFFRCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNELFlBRm5CLENBR0U7O0FBSEYsS0FJTUosK0NBQU0sQ0FBQzJDLE1BQVAsRUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBakJGLENBbEJGLENBWkYsQ0FERixDQUpGLENBbkRKLENBUEYsQ0FISixDQURBO0FBa0pILENBeEpELEMsQ0F5SkE7OztLQXpKTXpDLEs7QUEySk5BLEtBQUssQ0FBQzBDLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQNUMsK0NBQU0sQ0FBQzZDLEtBQVAsQ0FBYUMsMkNBQWIsb0JBRE87O0FBQUE7QUFBQTtBQUFBO0FBQ3BCekMsaUJBRG9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFZZUgsb0VBQWY7QUFFQztBQUFDOzs7Ozs7Ozs7Ozs7OztBQWFrQixDLENBRWQ7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50J1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5cbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJy4uL2xheW91dHMnO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCBkZXNzZXJ0IGZyb20gJy4uL3B1YmxpYy9kZXNzZXJ0LmpwZWcnO1xuXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBcbiAgICAgIGludHJvZHVjdGlvbiA9IFtdLFxuICAgICAgcG9zdHMgPSBbXSwgXG4gICAgICBuYW1lIFxuICAgIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPERlZmF1bHRMYXlvdXQgLz5cbiAgICAgICAgey8qIEZPTEQgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLCBcbiAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsIFxuICAgICAgICAgICAgd2lkdGg6ICc4MHZ3JywgXG4gICAgICAgICAgICBoZWlnaHQ6ICc0MHZ3JywgXG4gICAgICAgICAgIFxuICAgICAgICB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMjYuNnZ3IDI2LjZ2dyAyNi42dncnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsXG4gICAgICAgICAgICBjb2xvcjogJyM0NDQnXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICB7LyogVEhJUyBJUyBBICovfVxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtbjogJzEgLyAzJyxcbiAgICAgICAgICAgICAgICAgIGdyaWRSb3c6ICcxJyxcbiAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEOUQ5RDknLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgI0Q5RDlEOScsXG4gICAgICAgICAgICAgICAgICB0b3A6ICc1MCUnXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyY2hlciBTU20gQVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICczMnB4JyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTR2dydcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIFl1bSBUYXNoIEZvb2QgTG92ZXJzIEhvbWVcbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBncmlkQ29sdW1uOiAnMycsXG4gICAgICAgICAgICAgICAgICBncmlkUm93OicgMScsXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0Q5RDlEOSdcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzR2dycsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyY2hlciBTU20gQVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxN3B4JyxcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzE1JScsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxNSUnLFxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMTllbScsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnOTAwJyxcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjZlbSdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQSBmb29kIGJsb2cgd2l0aCBmcmVzaCwgemVzdHkgcmVjaXBlcy5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIENhcmQgKi99XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBncmlkQ29sdW1uOiAnMSAvIDMnLFxuICAgICAgICAgICAgICAgIGdyaWRSb3c6ICczJyxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcydncnLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcydncnLCBcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUMwNjBBJyxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcydncnLCBcbiAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzUwdncnLFxuICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAnNTB2dycsXG4gICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjB2dycsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMjB2dycsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdHNbMF0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICczMHB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3RzWzBdLm1haW5JbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2lkdGgoMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIENBUkQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjV2dycsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjI2NjY2JywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggMjBweCcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzI0dncnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzI4dncnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRob3I6IHtwb3N0c1swXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhXaWR0aDogJzEwMHB4ICFpbXBvcnRhbnQnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzPXtwb3N0c1swXS5pbnRyb2R1Y3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltYWdlT3B0aW9ucz17eyB3OiAzMDAsIGg6IDEwMCwgZml0OiAnbWF4JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzEycHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ludHJvZHVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gIFxuICAgICAgey8qIFNFQ09ORCBQQVJUICovfVxuICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgbWFyZ2luOiAnMCBhdXRvJywgd2lkdGg6ICc4MCUnLCBoZWlnaHQ6ICc1MDBweCcsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc0MDBweCd9fT5cbiAgICAgICAgICAgIFNJU1RFIE5ZVFRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBzdHlsZT17e21heEhlaWdodDogJzMwMHB4JywgbWFyZ2luTGVmdDogJzEwMHB4J319XG4gICAgICAgICAgICBzcmM9e2Rlc3NlcnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gICAqL31cbiAgICA8L2Rpdj5cbiAgICAgIFxuICAgIClcbn1cbi8vIFBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgICBwb3N0czogYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgXG4gICAgICAqW190eXBlID09IFwicG9zdFwiXXtcbiAgICAgICAgaW50cm9kdWN0aW9uLCBcbiAgICAgICAgbWFpbkltYWdlLCBcbiAgICAgICAgc2Vjb25kSW1hZ2UsIFxuICAgICAgICB0aXRsZSwgXG4gICAgICAgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsIH1cbiAgICBgKVxufSlcblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG4gey8qIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAge3Bvc3RzLm1hcChcbiAgICAgICAgICAgICAgICAoeyBfaWQsIHRpdGxlID0gJycsIHNsdWcgPSAnJywgX3VwZGF0ZWRBdCA9ICcnIH0pID0+XG4gICAgICAgICAgICAgICAgICBzbHVnICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17X2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgKHtuZXcgRGF0ZShfdXBkYXRlZEF0KS50b0RhdGVTdHJpbmcoKX0pXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAvLyAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLCBtYXJnaW46ICcwIGF1dG8nLCB3aWR0aDogJzgwJScsIGhlaWdodDogJzcwMHB4JywgbWFyZ2luVG9wOiAnLTEuMnZ3J319PlxuICAgICAgICAvLyAgIDxkaXY+XG4gICAgICAgIC8vICAgICA8aDEgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTclJ319Pll1bSBUYXNoIEZvb2QgTG92ZXJzIEhvbWU8L2gxPlxuICAgICAgICAvLyAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAvLyAgICAgICAgIG1hcmdpblRvcDogJzQ1cHgnLFxuICAgICAgICAvLyAgICAgICAgIG1hcmdpbkxlZnQ6ICcxNyUnLCBcbiAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUMwNjBBJywgXG4gICAgICAgIC8vICAgICAgICAgbWF4V2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtaW5XaWR0aDogJzUwdncnLFxuICAgICAgICAvLyAgICAgICAgIG1pbkhlaWdodDogJzIwdncnLFxuICAgICAgICAvLyAgICAgICAgIG1heEhlaWdodDogJzIwdncnLFxuICAgICAgICAvLyAgICAgICAgIC8vIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgICAgIC8vICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgID5cbiAgICAgICAgLy8gICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnfX0+XG4gICAgICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAgICAgLy8gICAgICAgICAgIDxoMyBzdHlsZT17e1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgLy8gICAgICAgICAgICAgICB9fVxuICAgICAgICAvLyAgICAgICAgICAgICA+XG4gICAgICAgIC8vICAgICAgICAgICAgICAge3Bvc3RzWzBdLnRpdGxlfVxuICAgICAgICAvLyAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgICAgPGltZ1xuICAgICAgICAvLyAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnMzBweCd9fVxuICAgICAgICAvLyAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0c1swXS5tYWluSW1hZ2UpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgLndpZHRoKDIwMClcbiAgICAgICAgLy8gICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgIC8vICAgICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgIHsvKiBDQVJEICovfVxuICAgICAgICAvLyAgICAgICAgIDxkaXYgIHN0eWxlPXt7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgbWFyZ2luVG9wOiAnMS41dncnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyNjY2NicsIFxuICAgICAgICAvLyAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgbWluV2lkdGg6ICcyNHZ3JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgbWF4V2lkdGg6ICcyOHZ3JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzIwcHgnLFxuICAgICAgICAvLyAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgICAgICAvLyAgICAgICAgICAgICB9fVxuICAgICAgICAvLyAgICAgICAgICAgPlxuICAgICAgICAvLyAgICAgICAgICAgPGgyPlxuICAgICAgICAvLyAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAvLyAgICAgICAgICAgPC9oMj5cbiAgICAgICAgLy8gICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5cbiAgICAgICAgLy8gICAgICAgICAgICAgQXV0aG9yOiB7cG9zdHNbMF0ubmFtZX1cbiAgICAgICAgLy8gICAgICAgICAgIDwvcD5cbiAgICAgICAgLy8gICAgICAgICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDBweCAhaW1wb3J0YW50J319XG4gICAgICAgIC8vICAgICAgICAgICAgIGJsb2Nrcz17cG9zdHNbMF0uaW50cm9kdWN0aW9ufVxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogMzAwLCBoOiAxMDAsIGZpdDogJ21heCcgfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cbiAgICAgICAgLy8gICAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgICB7LyogPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcxMnB4J319PlxuICAgICAgICAvLyAgICAgICAgICAgICAgIHtpbnRyb2R1Y3Rpb259XG4gICAgICAgIC8vICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAvLyAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAvLyA8L2Rpdj4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{\\n        introduction, \\n        mainImage, \\n        secondImage, \\n        title, \\n        \\\"name\\\": author->name, }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      name = props.name;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      backgroundColor: '#E0ECF7',\n      margin: '0 auto',\n      width: '80vw',\n      height: '40vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'grid',\n      gridTemplateColumns: '26.6vw 26.6vw 26.6vw',\n      backgroundColor: '#E0ECF7',\n      color: '#444'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '1',\n      minHeight: '200px',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      marginRight: '14vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, \"Yum Tash Food Lovers Home\")), __jsx(\"div\", {\n    style: {\n      gridColumn: '3',\n      gridRow: ' 1',\n      minHeight: '200px',\n      display: 'flex',\n      borderBottom: '1px solid #D9D9D9'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      marginTop: '4vw',\n      paddingTop: '16px',\n      fontFamily: \"Archer SSm A\",\n      fontSize: '17px',\n      textAlign: 'center',\n      paddingLeft: '15%',\n      paddingRight: '15%',\n      letterSpacing: '0.19em',\n      fontWeight: '900',\n      lineHeight: '1.6em'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, \"A food blog with fresh, zesty recipes.\")), __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      marginBottom: '2vw',\n      marginLeft: '2vw',\n      backgroundColor: '#1C060A',\n      marginTop: '2vw',\n      maxWidth: '50vw',\n      minWidth: '50vw',\n      minHeight: '20vw',\n      maxHeight: '20vw' // borderRadius: '10px'\n\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-around'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 23\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      marginLeft: '10px',\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 25\n    }\n  }, posts[0].title), __jsx(\"img\", {\n    style: {\n      marginLeft: '10px',\n      marginTop: '30px'\n    },\n    src: urlFor(posts[0].mainImage).width(200).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    style: {\n      color: 'white',\n      marginTop: '1.5vw',\n      backgroundColor: '#226666',\n      padding: '5px 20px',\n      minWidth: '24vw',\n      maxWidth: '28vw',\n      maxHeight: '320px',\n      borderRadius: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 23\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 25\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    style: {\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 25\n    }\n  }, \"Author: \", posts[0].name), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a // style={{ maxWidth: '100px !important'}}\n  , Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    blocks: posts[0].introduction // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n\n  }, _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].config(), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 25\n    }\n  }))))))))));\n}; // Post.getInitialProps = async function (context) {\n\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n{\n  /* <div>\n            \n              {posts.map(\n                ({ _id, title = '', slug = '', _updatedAt = '' }) =>\n                  slug && (\n                    <li key={_id}>\n                      <Link href=\"/post/[slug]\" as={`/post/${slug.current}`}>\n                        <a>{title}</a>\n                      </Link>{' '}\n                      ({new Date(_updatedAt).toDateString()})\n                    </li>\n                  )\n              )}\n          </div> */\n} //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>\n//   <div>\n//     <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>\n//     <div style={{\n//         marginTop: '45px',\n//         marginLeft: '17%', \n//         backgroundColor: '#1C060A', \n//         maxWidth: '50vw',\n//         minWidth: '50vw',\n//         minHeight: '20vw',\n//         maxHeight: '20vw',\n//         // borderRadius: '10px'\n//         }}\n//     >\n//       <div style={{display: 'flex', justifyContent: 'space-around'}}>\n//         <div>\n//           <h3 style={{\n//                 marginLeft: '10px',\n//                 color: 'white'\n//               }}\n//             >\n//               {posts[0].title}\n//           </h3>\n//           <img\n//             style={{marginLeft: '10px', marginTop: '30px'}}\n//             src={urlFor(posts[0].mainImage)\n//               .width(200)\n//               .url()}\n//           />\n//         </div>\n//         {/* CARD */}\n//         <div  style={{\n//             color: 'white', \n//             marginTop: '1.5vw', \n//             backgroundColor: '#226666', \n//             padding: '5px 20px', \n//             minWidth: '24vw',\n//             maxWidth: '28vw',\n//             maxHeight: '320px',\n//             borderRadius: '10px'\n//             }}\n//           >\n//           <h2>\n//             Description\n//           </h2>\n//           <p style={{color: 'white'}}>\n//             Author: {posts[0].name}\n//           </p>\n//           <BlockContent\n//             // style={{ maxWidth: '100px !important'}}\n//             blocks={posts[0].introduction}\n//             // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//             {...client.config()}\n//           />\n//           {/* <p style={{color: 'white', fontSize: '12px'}}>\n//               {introduction}\n//           </p> */}\n//         </div>\n//       </div>\n//     </div>\n//  </div>\n// </div>\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsInBvc3RzIiwibmFtZSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2xvciIsImdyaWRDb2x1bW4iLCJncmlkUm93IiwibWluSGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luUmlnaHQiLCJib3JkZXJCb3R0b20iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsIm1heEhlaWdodCIsInRpdGxlIiwibWFpbkltYWdlIiwidXJsIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNvbmZpZyIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwiZ3JvcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2QixTQUFPQyx5REFBZSxDQUFDQywrQ0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNEOztBQUVELElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBLDRCQUtqQkEsS0FMaUIsQ0FF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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FqQkYsQ0FsQkYsQ0FaRixDQURGLENBSkYsQ0E1Q0osQ0FQRixDQUhKLENBREE7QUEySUgsQ0FqSkQsQyxDQWtKQTs7O0tBbEpNdkMsSztBQW9KTkEsS0FBSyxDQUFDd0MsZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1AxQywrQ0FBTSxDQUFDMkMsS0FBUCxDQUFhQywyQ0FBYixvQkFETzs7QUFBQTtBQUFBO0FBQUE7QUFDcEJ2QyxpQkFEb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQVllSCxvRUFBZjtBQUVDO0FBQUM7Ozs7Ozs7Ozs7Ozs7O0FBYWtCLEMsQ0FFZDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVGIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcblxuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cyc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuaW1wb3J0IGRlc3NlcnQgZnJvbSAnLi4vcHVibGljL2Rlc3NlcnQuanBlZyc7XG5cblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IFxuICAgICAgaW50cm9kdWN0aW9uID0gW10sXG4gICAgICBwb3N0cyA9IFtdLCBcbiAgICAgIG5hbWUgXG4gICAgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8RGVmYXVsdExheW91dCAvPlxuICAgICAgICB7LyogRk9MRCAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIFxuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJywgXG4gICAgICAgICAgICB3aWR0aDogJzgwdncnLCBcbiAgICAgICAgICAgIGhlaWdodDogJzQwdncnLCBcbiAgICAgICAgICAgXG4gICAgICAgIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyNi42dncgMjYuNnZ3IDI2LjZ2dycsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ0NCdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHsvKiBUSElTIElTIEEgKi99XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBncmlkQ29sdW1uOiAnMSAvIDMnLFxuICAgICAgICAgICAgICAgICAgZ3JpZFJvdzogJzEnLFxuICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3ttYXJnaW5SaWdodDogJzE0dncnfX0+XG4gICAgICAgICAgICAgICAgICBZdW0gVGFzaCBGb29kIExvdmVycyBIb21lXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtbjogJzMnLFxuICAgICAgICAgICAgICAgICAgZ3JpZFJvdzonIDEnLFxuICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEOUQ5RDknXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc0dncnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmNoZXIgU1NtIEFcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTdweCcsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxNSUnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMTUlJyxcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjE5ZW0nLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzkwMCcsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS42ZW0nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEEgZm9vZCBibG9nIHdpdGggZnJlc2gsIHplc3R5IHJlY2lwZXMuXG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBDYXJkICovfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZ3JpZENvbHVtbjogJzEgLyAzJyxcbiAgICAgICAgICAgICAgICBncmlkUm93OiAnMycsXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMnZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMnZ3JywgXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFDMDYwQScsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMnZ3JywgXG4gICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzUwdncnLFxuICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzIwdncnLFxuICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzIwdncnLFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3RzWzBdLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnMzBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0c1swXS5tYWluSW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpZHRoKDIwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBDQVJEICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMS41dncnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyNjY2NicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6ICcyNHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyOHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yOiB7cG9zdHNbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDBweCAhaW1wb3J0YW50J319XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17cG9zdHNbMF0uaW50cm9kdWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogMzAwLCBoOiAxMDAsIGZpdDogJ21heCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcxMnB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnRyb2R1Y3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICBcbiAgICAgIHsvKiBTRUNPTkQgUEFSVCAqL31cbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIG1hcmdpbjogJzAgYXV0bycsIHdpZHRoOiAnODAlJywgaGVpZ2h0OiAnNTAwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNDAwcHgnfX0+XG4gICAgICAgICAgICBTSVNURSBOWVRUXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3R5bGU9e3ttYXhIZWlnaHQ6ICczMDBweCcsIG1hcmdpbkxlZnQ6ICcxMDBweCd9fVxuICAgICAgICAgICAgc3JjPXtkZXNzZXJ0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+ICAgKi99XG4gICAgPC9kaXY+XG4gICAgICBcbiAgICApXG59XG4vLyBQb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gICAgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgKltfdHlwZSA9PSBcInBvc3RcIl17XG4gICAgICAgIGludHJvZHVjdGlvbiwgXG4gICAgICAgIG1haW5JbWFnZSwgXG4gICAgICAgIHNlY29uZEltYWdlLCBcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLCB9XG4gICAgYClcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuIHsvKiA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHtwb3N0cy5tYXAoXG4gICAgICAgICAgICAgICAgKHsgX2lkLCB0aXRsZSA9ICcnLCBzbHVnID0gJycsIF91cGRhdGVkQXQgPSAnJyB9KSA9PlxuICAgICAgICAgICAgICAgICAgc2x1ZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICh7bmV3IERhdGUoX3VwZGF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9KVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgbWFyZ2luOiAnMCBhdXRvJywgd2lkdGg6ICc4MCUnLCBoZWlnaHQ6ICc3MDBweCcsIG1hcmdpblRvcDogJy0xLjJ2dyd9fT5cbiAgICAgICAgLy8gICA8ZGl2PlxuICAgICAgICAvLyAgICAgPGgxIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE3JSd9fT5ZdW0gVGFzaCBGb29kIExvdmVycyBIb21lPC9oMT5cbiAgICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW5Ub3A6ICc0NXB4JyxcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW5MZWZ0OiAnMTclJywgXG4gICAgICAgIC8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFDMDYwQScsIFxuICAgICAgICAvLyAgICAgICAgIG1heFdpZHRoOiAnNTB2dycsXG4gICAgICAgIC8vICAgICAgICAgbWluV2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtaW5IZWlnaHQ6ICcyMHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtYXhIZWlnaHQ6ICcyMHZ3JyxcbiAgICAgICAgLy8gICAgICAgICAvLyBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgICAgICAvLyAgICAgICAgIH19XG4gICAgICAgIC8vICAgICA+XG4gICAgICAgIC8vICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ319PlxuICAgICAgICAvLyAgICAgICAgIDxkaXY+XG4gICAgICAgIC8vICAgICAgICAgICA8aDMgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICAgIC8vICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgPlxuICAgICAgICAvLyAgICAgICAgICAgICAgIHtwb3N0c1swXS50aXRsZX1cbiAgICAgICAgLy8gICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICAgIDxpbWdcbiAgICAgICAgLy8gICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzMwcHgnfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdHNbMF0ubWFpbkltYWdlKVxuICAgICAgICAvLyAgICAgICAgICAgICAgIC53aWR0aCgyMDApXG4gICAgICAgIC8vICAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAvLyAgICAgICAgICAgLz5cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICB7LyogQ0FSRCAqL31cbiAgICAgICAgLy8gICAgICAgICA8ZGl2ICBzdHlsZT17e1xuICAgICAgICAvLyAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgXG4gICAgICAgIC8vICAgICAgICAgICAgIG1hcmdpblRvcDogJzEuNXZ3JywgXG4gICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjY2NjYnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgcGFkZGluZzogJzVweCAyMHB4JywgXG4gICAgICAgIC8vICAgICAgICAgICAgIG1pbldpZHRoOiAnMjR2dycsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1heFdpZHRoOiAnMjh2dycsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1heEhlaWdodDogJzMyMHB4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgICAgLy8gICAgICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgICAgICAgID5cbiAgICAgICAgLy8gICAgICAgICAgIDxoMj5cbiAgICAgICAgLy8gICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgLy8gICAgICAgICAgIDwvaDI+XG4gICAgICAgIC8vICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XG4gICAgICAgIC8vICAgICAgICAgICAgIEF1dGhvcjoge3Bvc3RzWzBdLm5hbWV9XG4gICAgICAgIC8vICAgICAgICAgICA8L3A+XG4gICAgICAgIC8vICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwcHggIWltcG9ydGFudCd9fVxuICAgICAgICAvLyAgICAgICAgICAgICBibG9ja3M9e3Bvc3RzWzBdLmludHJvZHVjdGlvbn1cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDMwMCwgaDogMTAwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgIC8vICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgIC8vICAgICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgICAgey8qIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTJweCd9fT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICB7aW50cm9kdWN0aW9ufVxuICAgICAgICAvLyAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgLy8gPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
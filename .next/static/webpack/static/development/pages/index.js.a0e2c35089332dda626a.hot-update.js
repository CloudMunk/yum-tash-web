webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{\\n        introduction, \\n        mainImage, \\n        secondImage, \\n        title, \\n        \\\"name\\\": author->name, }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      name = props.name;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      backgroundColor: '#E0ECF7',\n      margin: '0 auto',\n      width: '80vw',\n      height: '40vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'grid',\n      gridTemplateColumns: '26.6vw 26.6vw 26.6vw',\n      backgroundColor: '#E0ECF7',\n      color: '#444'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '1',\n      borderRight: '1px solid black',\n      // borderBottom: '1px solid black',\n      // marginBottom: '2vw',\n      minHeight: '200px',\n      // textAlign: 'center',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      marginRight: '14vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, \"Yum Tash Food Lovers Home\")), __jsx(\"div\", {\n    style: {\n      gridColumn: '3',\n      gridRow: ' 1 / 3',\n      borderBottom: '1px solid black',\n      height: '100px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"This is B\"), __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '2',\n      borderRight: '1px solid black',\n      borderBottom: '1px solid black'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    style: {// display: 'flex',\n      // justifyContent: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, __jsx(\"hr\", {\n    style: {\n      maxWidth: '400px',\n      marginLeft: '30vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 19\n    }\n  })), __jsx(\"div\", {\n    style: {\n      marginBottom: '2vw',\n      marginLeft: '2vw',\n      backgroundColor: '#1C060A',\n      marginTop: '2vw',\n      maxWidth: '50vw',\n      minWidth: '50vw',\n      minHeight: '20vw',\n      maxHeight: '20vw' // borderRadius: '10px'\n\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-around'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 21\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      marginLeft: '10px',\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 23\n    }\n  }, posts[0].title), __jsx(\"img\", {\n    style: {\n      marginLeft: '10px',\n      marginTop: '30px'\n    },\n    src: urlFor(posts[0].mainImage).width(200).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 23\n    }\n  })), __jsx(\"div\", {\n    style: {\n      color: 'white',\n      marginTop: '1.5vw',\n      backgroundColor: '#226666',\n      padding: '5px 20px',\n      minWidth: '24vw',\n      maxWidth: '28vw',\n      maxHeight: '320px',\n      borderRadius: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 21\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 23\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    style: {\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 23\n    }\n  }, \"Author: \", posts[0].name), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a // style={{ maxWidth: '100px !important'}}\n  , Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    blocks: posts[0].introduction // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n\n  }, _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].config(), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 23\n    }\n  }))))))))));\n}; // Post.getInitialProps = async function (context) {\n\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n{\n  /* <div>\n            \n              {posts.map(\n                ({ _id, title = '', slug = '', _updatedAt = '' }) =>\n                  slug && (\n                    <li key={_id}>\n                      <Link href=\"/post/[slug]\" as={`/post/${slug.current}`}>\n                        <a>{title}</a>\n                      </Link>{' '}\n                      ({new Date(_updatedAt).toDateString()})\n                    </li>\n                  )\n              )}\n          </div> */\n} //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>\n//   <div>\n//     <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>\n//     <div style={{\n//         marginTop: '45px',\n//         marginLeft: '17%', \n//         backgroundColor: '#1C060A', \n//         maxWidth: '50vw',\n//         minWidth: '50vw',\n//         minHeight: '20vw',\n//         maxHeight: '20vw',\n//         // borderRadius: '10px'\n//         }}\n//     >\n//       <div style={{display: 'flex', justifyContent: 'space-around'}}>\n//         <div>\n//           <h3 style={{\n//                 marginLeft: '10px',\n//                 color: 'white'\n//               }}\n//             >\n//               {posts[0].title}\n//           </h3>\n//           <img\n//             style={{marginLeft: '10px', marginTop: '30px'}}\n//             src={urlFor(posts[0].mainImage)\n//               .width(200)\n//               .url()}\n//           />\n//         </div>\n//         {/* CARD */}\n//         <div  style={{\n//             color: 'white', \n//             marginTop: '1.5vw', \n//             backgroundColor: '#226666', \n//             padding: '5px 20px', \n//             minWidth: '24vw',\n//             maxWidth: '28vw',\n//             maxHeight: '320px',\n//             borderRadius: '10px'\n//             }}\n//           >\n//           <h2>\n//             Description\n//           </h2>\n//           <p style={{color: 'white'}}>\n//             Author: {posts[0].name}\n//           </p>\n//           <BlockContent\n//             // style={{ maxWidth: '100px !important'}}\n//             blocks={posts[0].introduction}\n//             // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//             {...client.config()}\n//           />\n//           {/* <p style={{color: 'white', fontSize: '12px'}}>\n//               {introduction}\n//           </p> */}\n//         </div>\n//       </div>\n//     </div>\n//  </div>\n// </div>\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsInBvc3RzIiwibmFtZSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2xvciIsImdyaWRDb2x1bW4iLCJncmlkUm93IiwiYm9yZGVyUmlnaHQiLCJtaW5IZWlnaHQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5SaWdodCIsImJvcmRlckJvdHRvbSIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsIm1pbldpZHRoIiwibWF4SGVpZ2h0IiwidGl0bGUiLCJtYWluSW1hZ2UiLCJ1cmwiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiY29uZmlnIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHlEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsNEJBS2pCQSxLQUxpQixDQUVuQkMsWUFGbUI7QUFBQSxNQUVuQkEsWUFGbUIsb0NBRUosRUFGSTtBQUFBLHFCQUtqQkQsS0FMaUIsQ0FHbkJFLEtBSG1CO0FBQUEsTUFHbkJBLEtBSG1CLDZCQUdYLEVBSFc7QUFBQSxN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TixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1BsQywrQ0FBTSxDQUFDbUMsS0FBUCxDQUFhQywyQ0FBYixvQkFETzs7QUFBQTtBQUFBO0FBQUE7QUFDcEIvQixpQkFEb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQVllSCxvRUFBZjtBQUVDO0FBQUM7Ozs7Ozs7Ozs7Ozs7O0FBYWtCLEMsQ0FFZDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVGIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcblxuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cyc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuaW1wb3J0IGRlc3NlcnQgZnJvbSAnLi4vcHVibGljL2Rlc3NlcnQuanBlZyc7XG5cblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IFxuICAgICAgaW50cm9kdWN0aW9uID0gW10sXG4gICAgICBwb3N0cyA9IFtdLCBcbiAgICAgIG5hbWUgXG4gICAgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8RGVmYXVsdExheW91dCAvPlxuICAgICAgICB7LyogRk9MRCAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIFxuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJywgXG4gICAgICAgICAgICB3aWR0aDogJzgwdncnLCBcbiAgICAgICAgICAgIGhlaWdodDogJzQwdncnLCBcbiAgICAgICAgICAgXG4gICAgICAgIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyNi42dncgMjYuNnZ3IDI2LjZ2dycsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ0NCdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHsvKiBUSElTIElTIEEgKi99XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBncmlkQ29sdW1uOiAnMSAvIDMnLFxuICAgICAgICAgICAgICAgICAgZ3JpZFJvdzogJzEnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbkJvdHRvbTogJzJ2dycsXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICAvLyB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3ttYXJnaW5SaWdodDogJzE0dncnfX0+XG4gICAgICAgICAgICAgICAgICBZdW0gVGFzaCBGb29kIExvdmVycyBIb21lXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtbjogJzMnLFxuICAgICAgICAgICAgICAgICAgZ3JpZFJvdzonIDEgLyAzJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDBweCdcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgVGhpcyBpcyBCXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIENhcmQgKi99XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgIGdyaWRDb2x1bW46ICcxIC8gMycsXG4gICAgICAgICAgICAgIGdyaWRSb3c6ICcyJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgLy8ganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICA8aHIgc3R5bGU9e3sgbWF4V2lkdGg6ICc0MDBweCcsIG1hcmdpbkxlZnQ6ICczMHZ3J319IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcydncnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMnZ3JywgXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxQzA2MEEnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcydncnLCBcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjB2dycsXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzIwdncnLFxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ319PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdHNbMF0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnMzBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdHNbMF0ubWFpbkltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAud2lkdGgoMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBDQVJEICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMS41dncnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjY2NjYnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggMjBweCcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6ICcyNHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMjh2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcjoge3Bvc3RzWzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwcHggIWltcG9ydGFudCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzPXtwb3N0c1swXS5pbnRyb2R1Y3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogMzAwLCBoOiAxMDAsIGZpdDogJ21heCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcxMnB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aW50cm9kdWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gIFxuICAgICAgey8qIFNFQ09ORCBQQVJUICovfVxuICAgICAgey8qIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgbWFyZ2luOiAnMCBhdXRvJywgd2lkdGg6ICc4MCUnLCBoZWlnaHQ6ICc1MDBweCcsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc0MDBweCd9fT5cbiAgICAgICAgICAgIFNJU1RFIE5ZVFRcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBzdHlsZT17e21heEhlaWdodDogJzMwMHB4JywgbWFyZ2luTGVmdDogJzEwMHB4J319XG4gICAgICAgICAgICBzcmM9e2Rlc3NlcnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gICAqL31cbiAgICA8L2Rpdj5cbiAgICAgIFxuICAgIClcbn1cbi8vIFBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgICBwb3N0czogYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgXG4gICAgICAqW190eXBlID09IFwicG9zdFwiXXtcbiAgICAgICAgaW50cm9kdWN0aW9uLCBcbiAgICAgICAgbWFpbkltYWdlLCBcbiAgICAgICAgc2Vjb25kSW1hZ2UsIFxuICAgICAgICB0aXRsZSwgXG4gICAgICAgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsIH1cbiAgICBgKVxufSlcblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG4gey8qIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAge3Bvc3RzLm1hcChcbiAgICAgICAgICAgICAgICAoeyBfaWQsIHRpdGxlID0gJycsIHNsdWcgPSAnJywgX3VwZGF0ZWRBdCA9ICcnIH0pID0+XG4gICAgICAgICAgICAgICAgICBzbHVnICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17X2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgKHtuZXcgRGF0ZShfdXBkYXRlZEF0KS50b0RhdGVTdHJpbmcoKX0pXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAvLyAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLCBtYXJnaW46ICcwIGF1dG8nLCB3aWR0aDogJzgwJScsIGhlaWdodDogJzcwMHB4JywgbWFyZ2luVG9wOiAnLTEuMnZ3J319PlxuICAgICAgICAvLyAgIDxkaXY+XG4gICAgICAgIC8vICAgICA8aDEgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTclJ319Pll1bSBUYXNoIEZvb2QgTG92ZXJzIEhvbWU8L2gxPlxuICAgICAgICAvLyAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAvLyAgICAgICAgIG1hcmdpblRvcDogJzQ1cHgnLFxuICAgICAgICAvLyAgICAgICAgIG1hcmdpbkxlZnQ6ICcxNyUnLCBcbiAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUMwNjBBJywgXG4gICAgICAgIC8vICAgICAgICAgbWF4V2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtaW5XaWR0aDogJzUwdncnLFxuICAgICAgICAvLyAgICAgICAgIG1pbkhlaWdodDogJzIwdncnLFxuICAgICAgICAvLyAgICAgICAgIG1heEhlaWdodDogJzIwdncnLFxuICAgICAgICAvLyAgICAgICAgIC8vIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgICAgIC8vICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgID5cbiAgICAgICAgLy8gICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnfX0+XG4gICAgICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAgICAgLy8gICAgICAgICAgIDxoMyBzdHlsZT17e1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgLy8gICAgICAgICAgICAgICB9fVxuICAgICAgICAvLyAgICAgICAgICAgICA+XG4gICAgICAgIC8vICAgICAgICAgICAgICAge3Bvc3RzWzBdLnRpdGxlfVxuICAgICAgICAvLyAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgICAgPGltZ1xuICAgICAgICAvLyAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnMzBweCd9fVxuICAgICAgICAvLyAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0c1swXS5tYWluSW1hZ2UpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgLndpZHRoKDIwMClcbiAgICAgICAgLy8gICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgIC8vICAgICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgIHsvKiBDQVJEICovfVxuICAgICAgICAvLyAgICAgICAgIDxkaXYgIHN0eWxlPXt7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgbWFyZ2luVG9wOiAnMS41dncnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyNjY2NicsIFxuICAgICAgICAvLyAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgbWluV2lkdGg6ICcyNHZ3JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgbWF4V2lkdGg6ICcyOHZ3JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzIwcHgnLFxuICAgICAgICAvLyAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgICAgICAvLyAgICAgICAgICAgICB9fVxuICAgICAgICAvLyAgICAgICAgICAgPlxuICAgICAgICAvLyAgICAgICAgICAgPGgyPlxuICAgICAgICAvLyAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAvLyAgICAgICAgICAgPC9oMj5cbiAgICAgICAgLy8gICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5cbiAgICAgICAgLy8gICAgICAgICAgICAgQXV0aG9yOiB7cG9zdHNbMF0ubmFtZX1cbiAgICAgICAgLy8gICAgICAgICAgIDwvcD5cbiAgICAgICAgLy8gICAgICAgICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDBweCAhaW1wb3J0YW50J319XG4gICAgICAgIC8vICAgICAgICAgICAgIGJsb2Nrcz17cG9zdHNbMF0uaW50cm9kdWN0aW9ufVxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogMzAwLCBoOiAxMDAsIGZpdDogJ21heCcgfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cbiAgICAgICAgLy8gICAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgICB7LyogPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcxMnB4J319PlxuICAgICAgICAvLyAgICAgICAgICAgICAgIHtpbnRyb2R1Y3Rpb259XG4gICAgICAgIC8vICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAvLyAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAvLyA8L2Rpdj4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
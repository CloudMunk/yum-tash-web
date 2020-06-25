webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{\\n        introduction, \\n        mainImage, \\n        secondImage, \\n        title, \\n        \\\"name\\\": author->name, }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      name = props.name,\n      slug = props.slug;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      backgroundImage: 'to right, rgb(0, 154, 164), rgb(21, 32, 33)',\n      backgroundColor: '#E0ECF7',\n      margin: '0 auto',\n      width: '80vw',\n      height: '40vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'grid',\n      gridTemplateColumns: '26.6vw 26.6vw 26.6vw',\n      backgroundColor: '#E0ECF7',\n      color: '#444'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '1',\n      minHeight: '200px',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      borderBottom: '1px solid #D9D9D9',\n      borderRight: '1px solid #D9D9D9'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      fontFamily: \"Archer SSm A\",\n      fontSize: '32px',\n      marginRight: '14vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, \"Yum Tash Food Lovers Home\")), __jsx(\"div\", {\n    style: {\n      gridColumn: '3',\n      gridRow: ' 1',\n      minHeight: '200px',\n      display: 'flex',\n      borderBottom: '1px solid #D9D9D9'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      marginTop: '4vw',\n      paddingTop: '16px',\n      fontFamily: \"Archer SSm A\",\n      fontSize: '17px',\n      textAlign: 'center',\n      paddingLeft: '15%',\n      paddingRight: '15%',\n      letterSpacing: '0.19em',\n      fontWeight: '900',\n      lineHeight: '1.6em'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, \"A food blog with fresh, zesty recipes.\")), __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '3'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      marginBottom: '2vw',\n      marginLeft: '2vw',\n      backgroundColor: '#1C060A',\n      marginTop: '2vw',\n      maxWidth: '50vw',\n      minWidth: '50vw',\n      minHeight: '20vw',\n      maxHeight: '20vw' // borderRadius: '10px'\n\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-around'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 23\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      marginLeft: '10px',\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 27\n    }\n  }, posts[0].title), __jsx(\"img\", {\n    style: {\n      marginLeft: '10px',\n      marginTop: '30px'\n    },\n    src: urlFor(posts[0].mainImage).width(200).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    style: {\n      color: 'white',\n      marginTop: '1.5vw',\n      backgroundColor: '#226666',\n      padding: '5px 20px',\n      minWidth: '24vw',\n      maxWidth: '28vw',\n      maxHeight: '320px',\n      borderRadius: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 23\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 25\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    style: {\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 25\n    }\n  }, \"Author: \", posts[0].name), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a // style={{ maxWidth: '100px !important'}}\n  , Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    blocks: posts[0].introduction // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n\n  }, _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].config(), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 25\n    }\n  }))))))))));\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n{\n  /* <div>\n            \n              {posts.map(\n                ({ _id, title = '', slug = '', _updatedAt = '' }) =>\n                  slug && (\n                    <li key={_id}>\n                      <Link href=\"/post/[slug]\" as={`/post/${slug.current}`}>\n                        <a>{title}</a>\n                      </Link>{' '}\n                      ({new Date(_updatedAt).toDateString()})\n                    </li>\n                  )\n              )}\n          </div> */\n} //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>\n//   <div>\n//     <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>\n//     <div style={{\n//         marginTop: '45px',\n//         marginLeft: '17%', \n//         backgroundColor: '#1C060A', \n//         maxWidth: '50vw',\n//         minWidth: '50vw',\n//         minHeight: '20vw',\n//         maxHeight: '20vw',\n//         // borderRadius: '10px'\n//         }}\n//     >\n//       <div style={{display: 'flex', justifyContent: 'space-around'}}>\n//         <div>\n//           <h3 style={{\n//                 marginLeft: '10px',\n//                 color: 'white'\n//               }}\n//             >\n//               {posts[0].title}\n//           </h3>\n//           <img\n//             style={{marginLeft: '10px', marginTop: '30px'}}\n//             src={urlFor(posts[0].mainImage)\n//               .width(200)\n//               .url()}\n//           />\n//         </div>\n//         {/* CARD */}\n//         <div  style={{\n//             color: 'white', \n//             marginTop: '1.5vw', \n//             backgroundColor: '#226666', \n//             padding: '5px 20px', \n//             minWidth: '24vw',\n//             maxWidth: '28vw',\n//             maxHeight: '320px',\n//             borderRadius: '10px'\n//             }}\n//           >\n//           <h2>\n//             Description\n//           </h2>\n//           <p style={{color: 'white'}}>\n//             Author: {posts[0].name}\n//           </p>\n//           <BlockContent\n//             // style={{ maxWidth: '100px !important'}}\n//             blocks={posts[0].introduction}\n//             // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//             {...client.config()}\n//           />\n//           {/* <p style={{color: 'white', fontSize: '12px'}}>\n//               {introduction}\n//           </p> */}\n//         </div>\n//       </div>\n//     </div>\n//  </div>\n// </div>\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsInBvc3RzIiwibmFtZSIsInNsdWciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiY29sb3IiLCJncmlkQ29sdW1uIiwiZ3JpZFJvdyIsIm1pbkhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsIm1heEhlaWdodCIsInRpdGxlIiwibWFpbkltYWdlIiwidXJsIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNvbmZpZyIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwiZ3JvcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2QixTQUFPQyx5REFBZSxDQUFDQywrQ0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNEOztBQUVELElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFR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IGZyb20gJ25leHQvbGluaydcbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICcuLi9sYXlvdXRzJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQgZGVzc2VydCBmcm9tICcuLi9wdWJsaWMvZGVzc2VydC5qcGVnJztcblxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgXG4gICAgICBpbnRyb2R1Y3Rpb24gPSBbXSxcbiAgICAgIHBvc3RzID0gW10sIFxuICAgICAgbmFtZSxcbiAgICAgIHNsdWdcbiAgICB9ID0gcHJvcHNcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxEZWZhdWx0TGF5b3V0IC8+XG4gICAgICAgIHsvKiBGT0xEICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndG8gcmlnaHQsIHJnYigwLCAxNTQsIDE2NCksIHJnYigyMSwgMzIsIDMzKScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLCBcbiAgICAgICAgICAgIHdpZHRoOiAnODB2dycsIFxuICAgICAgICAgICAgaGVpZ2h0OiAnNDB2dycsIFxuICAgICAgICAgICBcbiAgICAgICAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzI2LjZ2dyAyNi42dncgMjYuNnZ3JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLFxuICAgICAgICAgICAgY29sb3I6ICcjNDQ0J1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgey8qIFRISVMgSVMgQSAqL31cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGdyaWRDb2x1bW46ICcxIC8gMycsXG4gICAgICAgICAgICAgICAgICBncmlkUm93OiAnMScsXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjRDlEOUQ5JyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkICNEOUQ5RDknXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyY2hlciBTU20gQVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICczMnB4JyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTR2dydcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIFl1bSBUYXNoIEZvb2QgTG92ZXJzIEhvbWVcbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogVEhJUyBJUyBCICovfVxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtbjogJzMnLFxuICAgICAgICAgICAgICAgICAgZ3JpZFJvdzonIDEnLFxuICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEOUQ5RDknXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc0dncnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmNoZXIgU1NtIEFcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTdweCcsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxNSUnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMTUlJyxcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjE5ZW0nLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzkwMCcsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS42ZW0nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEEgZm9vZCBibG9nIHdpdGggZnJlc2gsIHplc3R5IHJlY2lwZXMuXG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBDYXJkICovfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZ3JpZENvbHVtbjogJzEgLyAzJyxcbiAgICAgICAgICAgICAgICBncmlkUm93OiAnMycsXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMnZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMnZ3JywgXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFDMDYwQScsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMnZ3JywgXG4gICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzUwdncnLFxuICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzIwdncnLFxuICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzIwdncnLFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7IF9pZCwgdGl0bGUgPSAnJywgc2x1ZyA9ICcnLCBfdXBkYXRlZEF0ID0gJycgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsdWcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoe25ldyBEYXRlKF91cGRhdGVkQXQpLnRvRGF0ZVN0cmluZygpfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWdbMF19YH0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdHNbMF0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzMwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdHNbMF0ubWFpbkltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aWR0aCgyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogQ0FSRCAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzEuNXZ3JywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjY2NjYnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzVweCAyMHB4JywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAnMjR2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMjh2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzMyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcjoge3Bvc3RzWzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwcHggIWltcG9ydGFudCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja3M9e3Bvc3RzWzBdLmludHJvZHVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDMwMCwgaDogMTAwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTJweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW50cm9kdWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAgXG4gICAgPC9kaXY+XG4gICAgICBcbiAgICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gICAgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgKltfdHlwZSA9PSBcInBvc3RcIl17XG4gICAgICAgIGludHJvZHVjdGlvbiwgXG4gICAgICAgIG1haW5JbWFnZSwgXG4gICAgICAgIHNlY29uZEltYWdlLCBcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLCB9XG4gICAgYClcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuIHsvKiA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHtwb3N0cy5tYXAoXG4gICAgICAgICAgICAgICAgKHsgX2lkLCB0aXRsZSA9ICcnLCBzbHVnID0gJycsIF91cGRhdGVkQXQgPSAnJyB9KSA9PlxuICAgICAgICAgICAgICAgICAgc2x1ZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICh7bmV3IERhdGUoX3VwZGF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9KVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgbWFyZ2luOiAnMCBhdXRvJywgd2lkdGg6ICc4MCUnLCBoZWlnaHQ6ICc3MDBweCcsIG1hcmdpblRvcDogJy0xLjJ2dyd9fT5cbiAgICAgICAgLy8gICA8ZGl2PlxuICAgICAgICAvLyAgICAgPGgxIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE3JSd9fT5ZdW0gVGFzaCBGb29kIExvdmVycyBIb21lPC9oMT5cbiAgICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW5Ub3A6ICc0NXB4JyxcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW5MZWZ0OiAnMTclJywgXG4gICAgICAgIC8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFDMDYwQScsIFxuICAgICAgICAvLyAgICAgICAgIG1heFdpZHRoOiAnNTB2dycsXG4gICAgICAgIC8vICAgICAgICAgbWluV2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtaW5IZWlnaHQ6ICcyMHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtYXhIZWlnaHQ6ICcyMHZ3JyxcbiAgICAgICAgLy8gICAgICAgICAvLyBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgICAgICAvLyAgICAgICAgIH19XG4gICAgICAgIC8vICAgICA+XG4gICAgICAgIC8vICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ319PlxuICAgICAgICAvLyAgICAgICAgIDxkaXY+XG4gICAgICAgIC8vICAgICAgICAgICA8aDMgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICAgIC8vICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgPlxuICAgICAgICAvLyAgICAgICAgICAgICAgIHtwb3N0c1swXS50aXRsZX1cbiAgICAgICAgLy8gICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICAgIDxpbWdcbiAgICAgICAgLy8gICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzMwcHgnfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdHNbMF0ubWFpbkltYWdlKVxuICAgICAgICAvLyAgICAgICAgICAgICAgIC53aWR0aCgyMDApXG4gICAgICAgIC8vICAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAvLyAgICAgICAgICAgLz5cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICB7LyogQ0FSRCAqL31cbiAgICAgICAgLy8gICAgICAgICA8ZGl2ICBzdHlsZT17e1xuICAgICAgICAvLyAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgXG4gICAgICAgIC8vICAgICAgICAgICAgIG1hcmdpblRvcDogJzEuNXZ3JywgXG4gICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjY2NjYnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgcGFkZGluZzogJzVweCAyMHB4JywgXG4gICAgICAgIC8vICAgICAgICAgICAgIG1pbldpZHRoOiAnMjR2dycsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1heFdpZHRoOiAnMjh2dycsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1heEhlaWdodDogJzMyMHB4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgICAgLy8gICAgICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgICAgICAgID5cbiAgICAgICAgLy8gICAgICAgICAgIDxoMj5cbiAgICAgICAgLy8gICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgLy8gICAgICAgICAgIDwvaDI+XG4gICAgICAgIC8vICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XG4gICAgICAgIC8vICAgICAgICAgICAgIEF1dGhvcjoge3Bvc3RzWzBdLm5hbWV9XG4gICAgICAgIC8vICAgICAgICAgICA8L3A+XG4gICAgICAgIC8vICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwcHggIWltcG9ydGFudCd9fVxuICAgICAgICAvLyAgICAgICAgICAgICBibG9ja3M9e3Bvc3RzWzBdLmludHJvZHVjdGlvbn1cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDMwMCwgaDogMTAwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgIC8vICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgIC8vICAgICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgICAgey8qIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTJweCd9fT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICB7aW50cm9kdWN0aW9ufVxuICAgICAgICAvLyAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgLy8gPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
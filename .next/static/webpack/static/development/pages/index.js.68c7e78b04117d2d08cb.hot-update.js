webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{\\n        introduction, \\n        mainImage, \\n        secondImage, \\n        title, \\n        \\\"name\\\": author->name, }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      name = props.name;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      backgroundColor: '#E0ECF7',\n      margin: '0 auto',\n      width: '80vw',\n      height: '40vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'grid',\n      gridTemplateColumns: '26.6vw 26.6vw 26.6vw',\n      backgroundColor: '#E0ECF7',\n      color: '#444'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '1',\n      minHeight: '200px',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      marginRight: '14vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, \"Yum Tash Food Lovers Home\")), __jsx(\"div\", {\n    style: {\n      gridColumn: '3',\n      gridRow: ' 1',\n      minHeight: '200px',\n      display: 'flex'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      borderLeft: '1px solid black',\n      height: '100px' //  marginTop: '8vw'\n\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }), \"This is B\"), __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '3',\n      borderRight: '1px solid black'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    style: {\n      marginBottom: '2vw',\n      marginLeft: '2vw',\n      backgroundColor: '#1C060A',\n      marginTop: '2vw',\n      maxWidth: '50vw',\n      minWidth: '50vw',\n      minHeight: '20vw',\n      maxHeight: '20vw' // borderRadius: '10px'\n\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-around'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 21\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      marginLeft: '10px',\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 23\n    }\n  }, posts[0].title), __jsx(\"img\", {\n    style: {\n      marginLeft: '10px',\n      marginTop: '30px'\n    },\n    src: urlFor(posts[0].mainImage).width(200).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 23\n    }\n  })), __jsx(\"div\", {\n    style: {\n      color: 'white',\n      marginTop: '1.5vw',\n      backgroundColor: '#226666',\n      padding: '5px 20px',\n      minWidth: '24vw',\n      maxWidth: '28vw',\n      maxHeight: '320px',\n      borderRadius: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 21\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 23\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    style: {\n      color: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 23\n    }\n  }, \"Author: \", posts[0].name), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a // style={{ maxWidth: '100px !important'}}\n  , Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    blocks: posts[0].introduction // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n\n  }, _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].config(), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 23\n    }\n  }))))))))));\n}; // Post.getInitialProps = async function (context) {\n\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n{\n  /* <div>\n            \n              {posts.map(\n                ({ _id, title = '', slug = '', _updatedAt = '' }) =>\n                  slug && (\n                    <li key={_id}>\n                      <Link href=\"/post/[slug]\" as={`/post/${slug.current}`}>\n                        <a>{title}</a>\n                      </Link>{' '}\n                      ({new Date(_updatedAt).toDateString()})\n                    </li>\n                  )\n              )}\n          </div> */\n} //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>\n//   <div>\n//     <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>\n//     <div style={{\n//         marginTop: '45px',\n//         marginLeft: '17%', \n//         backgroundColor: '#1C060A', \n//         maxWidth: '50vw',\n//         minWidth: '50vw',\n//         minHeight: '20vw',\n//         maxHeight: '20vw',\n//         // borderRadius: '10px'\n//         }}\n//     >\n//       <div style={{display: 'flex', justifyContent: 'space-around'}}>\n//         <div>\n//           <h3 style={{\n//                 marginLeft: '10px',\n//                 color: 'white'\n//               }}\n//             >\n//               {posts[0].title}\n//           </h3>\n//           <img\n//             style={{marginLeft: '10px', marginTop: '30px'}}\n//             src={urlFor(posts[0].mainImage)\n//               .width(200)\n//               .url()}\n//           />\n//         </div>\n//         {/* CARD */}\n//         <div  style={{\n//             color: 'white', \n//             marginTop: '1.5vw', \n//             backgroundColor: '#226666', \n//             padding: '5px 20px', \n//             minWidth: '24vw',\n//             maxWidth: '28vw',\n//             maxHeight: '320px',\n//             borderRadius: '10px'\n//             }}\n//           >\n//           <h2>\n//             Description\n//           </h2>\n//           <p style={{color: 'white'}}>\n//             Author: {posts[0].name}\n//           </p>\n//           <BlockContent\n//             // style={{ maxWidth: '100px !important'}}\n//             blocks={posts[0].introduction}\n//             // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//             {...client.config()}\n//           />\n//           {/* <p style={{color: 'white', fontSize: '12px'}}>\n//               {introduction}\n//           </p> */}\n//         </div>\n//       </div>\n//     </div>\n//  </div>\n// </div>\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsInBvc3RzIiwibmFtZSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2xvciIsImdyaWRDb2x1bW4iLCJncmlkUm93IiwibWluSGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luUmlnaHQiLCJib3JkZXJMZWZ0IiwiYm9yZGVyUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsIm1heEhlaWdodCIsInRpdGxlIiwibWFpbkltYWdlIiwidXJsIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNvbmZpZyIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwiZ3JvcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2QixTQUFPQyx5REFBZSxDQUFDQywrQ0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNEOztBQUVELElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBLDRCQUtqQkEsS0FMaUIsQ0FFbkJDLFlBRm1CO0FBQUEsTUFFbkJBLFlBRm1CLG9DQUVKLEVBRkk7QUFBQSxxQkFLakJELEtBTGlCLENBR25CRSxLQUhtQjtBQUFBLE1BR25CQSxLQUhtQiw2QkFHWCxFQUhXO0FBQUEsTUFJ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QUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBWWVILG9FQUFmO0FBRUM7QUFBQzs7Ozs7Ozs7Ozs7Ozs7QUFha0IsQyxDQUVkO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICcuLi9sYXlvdXRzJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQgZGVzc2VydCBmcm9tICcuLi9wdWJsaWMvZGVzc2VydC5qcGVnJztcblxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgXG4gICAgICBpbnRyb2R1Y3Rpb24gPSBbXSxcbiAgICAgIHBvc3RzID0gW10sIFxuICAgICAgbmFtZSBcbiAgICB9ID0gcHJvcHNcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxEZWZhdWx0TGF5b3V0IC8+XG4gICAgICAgIHsvKiBGT0xEICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLCBcbiAgICAgICAgICAgIHdpZHRoOiAnODB2dycsIFxuICAgICAgICAgICAgaGVpZ2h0OiAnNDB2dycsIFxuICAgICAgICAgICBcbiAgICAgICAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzI2LjZ2dyAyNi42dncgMjYuNnZ3JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLFxuICAgICAgICAgICAgY29sb3I6ICcjNDQ0J1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgey8qIFRISVMgSVMgQSAqL31cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGdyaWRDb2x1bW46ICcxIC8gMycsXG4gICAgICAgICAgICAgICAgICBncmlkUm93OiAnMScsXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e21hcmdpblJpZ2h0OiAnMTR2dyd9fT5cbiAgICAgICAgICAgICAgICAgIFl1bSBUYXNoIEZvb2QgTG92ZXJzIEhvbWVcbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBncmlkQ29sdW1uOiAnMycsXG4gICAgICAgICAgICAgICAgICBncmlkUm93OicgMScsXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgIC8vICBtYXJnaW5Ub3A6ICc4dncnXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgVGhpcyBpcyBCXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHsvKiBDYXJkICovfVxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICBncmlkQ29sdW1uOiAnMSAvIDMnLFxuICAgICAgICAgICAgICBncmlkUm93OiAnMycsXG4gICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMnZ3JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzJ2dycsIFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUMwNjBBJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMnZ3JywgXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNTB2dycsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAnNTB2dycsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzIwdncnLFxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcyMHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3RzWzBdLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzMwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3RzWzBdLm1haW5JbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLndpZHRoKDIwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogQ0FSRCAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzEuNXZ3JywgXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjI2NjY2JywgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAnMjR2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzI4dncnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3I6IHtwb3N0c1swXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhXaWR0aDogJzEwMHB4ICFpbXBvcnRhbnQnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17cG9zdHNbMF0uaW50cm9kdWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDMwMCwgaDogMTAwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTJweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2ludHJvZHVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICBcbiAgICAgIHsvKiBTRUNPTkQgUEFSVCAqL31cbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIG1hcmdpbjogJzAgYXV0bycsIHdpZHRoOiAnODAlJywgaGVpZ2h0OiAnNTAwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNDAwcHgnfX0+XG4gICAgICAgICAgICBTSVNURSBOWVRUXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3R5bGU9e3ttYXhIZWlnaHQ6ICczMDBweCcsIG1hcmdpbkxlZnQ6ICcxMDBweCd9fVxuICAgICAgICAgICAgc3JjPXtkZXNzZXJ0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+ICAgKi99XG4gICAgPC9kaXY+XG4gICAgICBcbiAgICApXG59XG4vLyBQb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gICAgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgKltfdHlwZSA9PSBcInBvc3RcIl17XG4gICAgICAgIGludHJvZHVjdGlvbiwgXG4gICAgICAgIG1haW5JbWFnZSwgXG4gICAgICAgIHNlY29uZEltYWdlLCBcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLCB9XG4gICAgYClcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuIHsvKiA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHtwb3N0cy5tYXAoXG4gICAgICAgICAgICAgICAgKHsgX2lkLCB0aXRsZSA9ICcnLCBzbHVnID0gJycsIF91cGRhdGVkQXQgPSAnJyB9KSA9PlxuICAgICAgICAgICAgICAgICAgc2x1ZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICh7bmV3IERhdGUoX3VwZGF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9KVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgbWFyZ2luOiAnMCBhdXRvJywgd2lkdGg6ICc4MCUnLCBoZWlnaHQ6ICc3MDBweCcsIG1hcmdpblRvcDogJy0xLjJ2dyd9fT5cbiAgICAgICAgLy8gICA8ZGl2PlxuICAgICAgICAvLyAgICAgPGgxIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE3JSd9fT5ZdW0gVGFzaCBGb29kIExvdmVycyBIb21lPC9oMT5cbiAgICAgICAgLy8gICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW5Ub3A6ICc0NXB4JyxcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW5MZWZ0OiAnMTclJywgXG4gICAgICAgIC8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFDMDYwQScsIFxuICAgICAgICAvLyAgICAgICAgIG1heFdpZHRoOiAnNTB2dycsXG4gICAgICAgIC8vICAgICAgICAgbWluV2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtaW5IZWlnaHQ6ICcyMHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtYXhIZWlnaHQ6ICcyMHZ3JyxcbiAgICAgICAgLy8gICAgICAgICAvLyBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgICAgICAvLyAgICAgICAgIH19XG4gICAgICAgIC8vICAgICA+XG4gICAgICAgIC8vICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ319PlxuICAgICAgICAvLyAgICAgICAgIDxkaXY+XG4gICAgICAgIC8vICAgICAgICAgICA8aDMgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICAgIC8vICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgPlxuICAgICAgICAvLyAgICAgICAgICAgICAgIHtwb3N0c1swXS50aXRsZX1cbiAgICAgICAgLy8gICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICAgIDxpbWdcbiAgICAgICAgLy8gICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzMwcHgnfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdHNbMF0ubWFpbkltYWdlKVxuICAgICAgICAvLyAgICAgICAgICAgICAgIC53aWR0aCgyMDApXG4gICAgICAgIC8vICAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAvLyAgICAgICAgICAgLz5cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICB7LyogQ0FSRCAqL31cbiAgICAgICAgLy8gICAgICAgICA8ZGl2ICBzdHlsZT17e1xuICAgICAgICAvLyAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgXG4gICAgICAgIC8vICAgICAgICAgICAgIG1hcmdpblRvcDogJzEuNXZ3JywgXG4gICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjY2NjYnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgcGFkZGluZzogJzVweCAyMHB4JywgXG4gICAgICAgIC8vICAgICAgICAgICAgIG1pbldpZHRoOiAnMjR2dycsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1heFdpZHRoOiAnMjh2dycsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1heEhlaWdodDogJzMyMHB4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgICAgLy8gICAgICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgICAgICAgID5cbiAgICAgICAgLy8gICAgICAgICAgIDxoMj5cbiAgICAgICAgLy8gICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgLy8gICAgICAgICAgIDwvaDI+XG4gICAgICAgIC8vICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XG4gICAgICAgIC8vICAgICAgICAgICAgIEF1dGhvcjoge3Bvc3RzWzBdLm5hbWV9XG4gICAgICAgIC8vICAgICAgICAgICA8L3A+XG4gICAgICAgIC8vICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwcHggIWltcG9ydGFudCd9fVxuICAgICAgICAvLyAgICAgICAgICAgICBibG9ja3M9e3Bvc3RzWzBdLmludHJvZHVjdGlvbn1cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDMwMCwgaDogMTAwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgIC8vICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgIC8vICAgICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgICAgey8qIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTJweCd9fT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICB7aW50cm9kdWN0aW9ufVxuICAgICAgICAvLyAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgLy8gPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
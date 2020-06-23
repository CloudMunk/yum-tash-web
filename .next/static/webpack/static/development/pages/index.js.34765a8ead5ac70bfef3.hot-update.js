webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{\\n        introduction, \\n        mainImage, \\n        secondImage, \\n        title, \\n        \\\"name\\\": author->name, }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_9___default()(_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      name = props.name;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      backgroundColor: '#E0ECF7',\n      margin: '0 auto',\n      width: '80vw',\n      height: '40vw',\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'grid',\n      gridGap: '10px',\n      gridTemplateColumns: '26.6vw 26.6vw 26.6vw',\n      backgroundColor: '#E0ECF7',\n      color: '#444'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '1',\n      borderRight: '1px solid black',\n      borderBottom: '1px solid black',\n      height: '200px',\n      // textAlign: 'center',\n      display: 'flex',\n      alignItems: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, \"A\"), __jsx(\"div\", {\n    style: {\n      gridColumn: '3',\n      gridRow: ' 1 / 3',\n      borderRight: '1px solid black',\n      borderBottom: '1px solid black',\n      height: '100px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"B\"), __jsx(\"div\", {\n    style: {\n      gridColumn: '1 / 3',\n      gridRow: '2'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"C\"))));\n}; // Post.getInitialProps = async function (context) {\n\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n{\n  /* <div>\n            \n              {posts.map(\n                ({ _id, title = '', slug = '', _updatedAt = '' }) =>\n                  slug && (\n                    <li key={_id}>\n                      <Link href=\"/post/[slug]\" as={`/post/${slug.current}`}>\n                        <a>{title}</a>\n                      </Link>{' '}\n                      ({new Date(_updatedAt).toDateString()})\n                    </li>\n                  )\n              )}\n          </div> */\n} //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>\n//     <div>\n//       <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>\n//       <div style={{\n//           marginTop: '45px',\n//           marginLeft: '17%', \n//           backgroundColor: '#1C060A', \n//           maxWidth: '50vw',\n//           minWidth: '50vw',\n//           minHeight: '20vw',\n//           maxHeight: '20vw',\n//           // borderRadius: '10px'\n//           }}\n//       >\n//         <div style={{display: 'flex', justifyContent: 'space-around'}}>\n//           <div>\n//             <h3 style={{\n//                   marginLeft: '10px',\n//                   color: 'white'\n//                 }}\n//               >\n//                 {posts[0].title}\n//             </h3>\n//             <img\n//               style={{marginLeft: '10px', marginTop: '30px'}}\n//               src={urlFor(posts[0].mainImage)\n//                 .width(200)\n//                 .url()}\n//             />\n//           </div>\n//           {/* CARD */}\n//           <div  style={{\n//               color: 'white', \n//               marginTop: '1.5vw', \n//               backgroundColor: '#226666', \n//               padding: '5px 20px', \n//               minWidth: '24vw',\n//               maxWidth: '28vw',\n//               maxHeight: '320px',\n//               borderRadius: '10px'\n//               }}\n//             >\n//             <h2>\n//               Description\n//             </h2>\n//             <p style={{color: 'white'}}>\n//               Author: {posts[0].name}\n//             </p>\n//             <BlockContent\n//               // style={{ maxWidth: '100px !important'}}\n//               blocks={posts[0].introduction}\n//               // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//               {...client.config()}\n//             />\n//             {/* <p style={{color: 'white', fontSize: '12px'}}>\n//                 {introduction}\n//             </p> */}\n//           </div>\n//         </div>\n//       </div>\n//     </div>\n// </div>\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsInBvc3RzIiwibmFtZSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2xvciIsImdyaWRDb2x1bW4iLCJncmlkUm93IiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iLCJhbGlnbkl0ZW1zIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2QixTQUFPQyx3REFBZSxDQUFDQywrQ0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNEOztBQUVELElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBLDRCQUtqQkEsS0FMaUIsQ0FFbkJDLFlBRm1CO0FBQUEsTUFFbkJBLFlBRm1CLG9DQUVKLEVBRkk7QUFBQSxxQkFLakJELEtBTGlCLENBR25CRSxLQUhtQjtBQUFBLE1BR25CQSxLQUhtQiw2QkFHWCxFQUhXO0FBQUEsTUFJbkJDLElBSm1CLEdBS2pCSCxLQUxpQixDQUluQkcsSUFKbUI7QUFNckIsU0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxxQkFBZSxFQUFFLFNBQWxCO0FBQTZCQyxZQUFNLEVBQUUsUUFBckM7QUFBK0NDLFdBQUssRUFBRSxNQUF0RDtBQUE4REMsWUFBTSxFQUFFLE1BQXRFO0FBQThFQyxhQUFPLEVBQUUsTUFBdkY7QUFBK0ZDLG9CQUFjLEVBQUU7QUFBL0csS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFDVkQsYUFBTyxFQUFFLE1BREM7QUFFVkUsYUFBTyxFQUFFLE1BRkM7QUFHVkMseUJBQW1CLEVBQUUsc0JBSFg7QUFJVlAscUJBQWUsRUFBRSxTQUpQO0FBS1ZRLFdBQUssRUFBRTtBQUxHLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUssU0FBSyxFQUFFO0FBQ05DLGdCQUFVLEVBQUUsT0FETjtBQUVOQyxhQUFPLEVBQUUsR0FGSDtBQUdOQyxpQkFBVyxFQUFFLGlCQUhQO0FBSU5DLGtCQUFZLEVBQUUsaUJBSlI7QUFLTlQsWUFBTSxFQUFFLE9BTEY7QUFNTjtBQUNBQyxhQUFPLEVBQUUsTUFQSDtBQVFOUyxnQkFBVSxFQUFFO0FBUk4sS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUEYsRUFtQkU7QUFBSyxTQUFLLEVBQUU7QUFDTkosZ0JBQVUsRUFBRSxHQUROO0FBRU5DLGFBQU8sRUFBQyxRQUZGO0FBR05DLGlCQUFXLEVBQUUsaUJBSFA7QUFJTkMsa0JBQVksRUFBRSxpQkFKUjtBQUtOVCxZQUFNLEVBQUU7QUFMRixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FuQkYsRUE0QkU7QUFBSyxTQUFLLEVBQUU7QUFDVk0sZ0JBQVUsRUFBRSxPQURGO0FBRVZDLGFBQU8sRUFBRTtBQUZDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTVCRixDQURGLENBTEosQ0FEQTtBQTBESCxDQWhFRCxDLENBaUVBOzs7S0FqRU1mLEs7QUFtRU5BLEtBQUssQ0FBQ21CLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQckIsK0NBQU0sQ0FBQ3NCLEtBQVAsQ0FBYUMsMkNBQWIsb0JBRE87O0FBQUE7QUFBQTtBQUFBO0FBQ3BCbEIsaUJBRG9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFZZUgsb0VBQWY7QUFFQztBQUFDOzs7Ozs7Ozs7Ozs7OztBQWFrQixDLENBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50J1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5cbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJy4uL2xheW91dHMnO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCBkZXNzZXJ0IGZyb20gJy4uL3B1YmxpYy9kZXNzZXJ0LmpwZWcnO1xuXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBcbiAgICAgIGludHJvZHVjdGlvbiA9IFtdLFxuICAgICAgcG9zdHMgPSBbXSwgXG4gICAgICBuYW1lIFxuICAgIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPERlZmF1bHRMYXlvdXQ+XG4gICAgICAgICAgXG4gICAgICAgIDwvRGVmYXVsdExheW91dD5cbiAgICAgICAgey8qIEZPTEQgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JywgbWFyZ2luOiAnMCBhdXRvJywgd2lkdGg6ICc4MHZ3JywgaGVpZ2h0OiAnNDB2dycsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgZ3JpZEdhcDogJzEwcHgnLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzI2LjZ2dyAyNi42dncgMjYuNnZ3JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLFxuICAgICAgICAgICAgY29sb3I6ICcjNDQ0J1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtbjogJzEgLyAzJyxcbiAgICAgICAgICAgICAgICAgIGdyaWRSb3c6ICcxJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICAvLyB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgQVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBncmlkQ29sdW1uOiAnMycsXG4gICAgICAgICAgICAgICAgICBncmlkUm93OicgMSAvIDMnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHB4J1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBCXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICBncmlkQ29sdW1uOiAnMSAvIDMnLFxuICAgICAgICAgICAgICBncmlkUm93OiAnMicsXG4gICAgICAgICAgICB9fT5DPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAgXG4gICAgICB7LyogU0VDT05EIFBBUlQgKi99XG4gICAgICB7LyogPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLCBtYXJnaW46ICcwIGF1dG8nLCB3aWR0aDogJzgwJScsIGhlaWdodDogJzUwMHB4JywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzQwMHB4J319PlxuICAgICAgICAgICAgU0lTVEUgTllUVFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIHN0eWxlPXt7bWF4SGVpZ2h0OiAnMzAwcHgnLCBtYXJnaW5MZWZ0OiAnMTAwcHgnfX1cbiAgICAgICAgICAgIHNyYz17ZGVzc2VydH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PiAgICovfVxuICAgIDwvZGl2PlxuICAgICAgXG4gICAgKVxufVxuLy8gUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICAgIHBvc3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbiAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCJde1xuICAgICAgICBpbnRyb2R1Y3Rpb24sIFxuICAgICAgICBtYWluSW1hZ2UsIFxuICAgICAgICBzZWNvbmRJbWFnZSwgXG4gICAgICAgIHRpdGxlLCBcbiAgICAgICAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSwgfVxuICAgIGApXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbiB7LyogPGRpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7cG9zdHMubWFwKFxuICAgICAgICAgICAgICAgICh7IF9pZCwgdGl0bGUgPSAnJywgc2x1ZyA9ICcnLCBfdXBkYXRlZEF0ID0gJycgfSkgPT5cbiAgICAgICAgICAgICAgICAgIHNsdWcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAoe25ldyBEYXRlKF91cGRhdGVkQXQpLnRvRGF0ZVN0cmluZygpfSlcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIC8vICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIG1hcmdpbjogJzAgYXV0bycsIHdpZHRoOiAnODAlJywgaGVpZ2h0OiAnNzAwcHgnLCBtYXJnaW5Ub3A6ICctMS4ydncnfX0+XG4gICAgICAvLyAgICAgPGRpdj5cbiAgICAgIC8vICAgICAgIDxoMSBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNyUnfX0+WXVtIFRhc2ggRm9vZCBMb3ZlcnMgSG9tZTwvaDE+XG4gICAgICAvLyAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAvLyAgICAgICAgICAgbWFyZ2luVG9wOiAnNDVweCcsXG4gICAgICAvLyAgICAgICAgICAgbWFyZ2luTGVmdDogJzE3JScsIFxuICAgICAgLy8gICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxQzA2MEEnLCBcbiAgICAgIC8vICAgICAgICAgICBtYXhXaWR0aDogJzUwdncnLFxuICAgICAgLy8gICAgICAgICAgIG1pbldpZHRoOiAnNTB2dycsXG4gICAgICAvLyAgICAgICAgICAgbWluSGVpZ2h0OiAnMjB2dycsXG4gICAgICAvLyAgICAgICAgICAgbWF4SGVpZ2h0OiAnMjB2dycsXG4gICAgICAvLyAgICAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgIC8vICAgICAgICAgICB9fVxuICAgICAgLy8gICAgICAgPlxuICAgICAgLy8gICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCd9fT5cbiAgICAgIC8vICAgICAgICAgICA8ZGl2PlxuICAgICAgLy8gICAgICAgICAgICAgPGgzIHN0eWxlPXt7XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgLy8gICAgICAgICAgICAgICAgIH19XG4gICAgICAvLyAgICAgICAgICAgICAgID5cbiAgICAgIC8vICAgICAgICAgICAgICAgICB7cG9zdHNbMF0udGl0bGV9XG4gICAgICAvLyAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAvLyAgICAgICAgICAgICA8aW1nXG4gICAgICAvLyAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICczMHB4J319XG4gICAgICAvLyAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3RzWzBdLm1haW5JbWFnZSlcbiAgICAgIC8vICAgICAgICAgICAgICAgICAud2lkdGgoMjAwKVxuICAgICAgLy8gICAgICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgIC8vICAgICAgICAgICAgIC8+XG4gICAgICAvLyAgICAgICAgICAgPC9kaXY+XG4gICAgICAvLyAgICAgICAgICAgey8qIENBUkQgKi99XG4gICAgICAvLyAgICAgICAgICAgPGRpdiAgc3R5bGU9e3tcbiAgICAgIC8vICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIFxuICAgICAgLy8gICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjV2dycsIFxuICAgICAgLy8gICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjI2NjY2JywgXG4gICAgICAvLyAgICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggMjBweCcsIFxuICAgICAgLy8gICAgICAgICAgICAgICBtaW5XaWR0aDogJzI0dncnLFxuICAgICAgLy8gICAgICAgICAgICAgICBtYXhXaWR0aDogJzI4dncnLFxuICAgICAgLy8gICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMjBweCcsXG4gICAgICAvLyAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgICAvLyAgICAgICAgICAgICAgIH19XG4gICAgICAvLyAgICAgICAgICAgICA+XG4gICAgICAvLyAgICAgICAgICAgICA8aDI+XG4gICAgICAvLyAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAvLyAgICAgICAgICAgICA8L2gyPlxuICAgICAgLy8gICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxuICAgICAgLy8gICAgICAgICAgICAgICBBdXRob3I6IHtwb3N0c1swXS5uYW1lfVxuICAgICAgLy8gICAgICAgICAgICAgPC9wPlxuICAgICAgLy8gICAgICAgICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgLy8gICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhXaWR0aDogJzEwMHB4ICFpbXBvcnRhbnQnfX1cbiAgICAgIC8vICAgICAgICAgICAgICAgYmxvY2tzPXtwb3N0c1swXS5pbnRyb2R1Y3Rpb259XG4gICAgICAvLyAgICAgICAgICAgICAgIC8vIGltYWdlT3B0aW9ucz17eyB3OiAzMDAsIGg6IDEwMCwgZml0OiAnbWF4JyB9fVxuICAgICAgLy8gICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgLy8gICAgICAgICAgICAgLz5cbiAgICAgIC8vICAgICAgICAgICAgIHsvKiA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzEycHgnfX0+XG4gICAgICAvLyAgICAgICAgICAgICAgICAge2ludHJvZHVjdGlvbn1cbiAgICAgIC8vICAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAvLyAgICAgICAgICAgPC9kaXY+XG4gICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgIC8vICAgICAgIDwvZGl2PlxuICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgLy8gPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
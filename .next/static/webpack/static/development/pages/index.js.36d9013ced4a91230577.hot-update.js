webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/dessert.jpeg */ \"./public/dessert.jpeg\");\n/* harmony import */ var _public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_dessert_jpeg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/card/card.component */ \"./components/card/card.component.jsx\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{\\n        introduction, \\n        mainImage, \\n        secondImage, \\n        title,\\n        slug,\\n        \\\"name\\\": author->name, }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      name = props.name,\n      slug = props.slug;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      // backgroundImage: 'linear-gradient(to right, rgb(0, 154, 164), rgb(21, 32, 33))',\n      // backgroundColor: '#E0ECF7', \n      margin: '0 auto',\n      width: '100vw',\n      height: '40vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: 'grid',\n      gridTemplateColumns: '1fr 1.5fr 1.5fr 1.5fr',\n      gridTemplateRows: '100px 500px',\n      height: '40vw',\n      // backgroundColor: '#E0ECF7',\n      // backgroundImage: 'linear-gradient(to right, rgb(198, 253, 234), rgb(242, 194, 188))',\n      color: '#444'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    style: {\n      borderBottom: '0.8px solid #808080',\n      borderRight: '0.8px solid #808080'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    style: {\n      borderBottom: '0.8px solid #808080'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      fontFamily: \"Archer SSm A\",\n      fontSize: '17px',\n      textAlign: 'center',\n      paddingLeft: '15%',\n      paddingRight: '15%',\n      letterSpacing: '0.19em',\n      fontWeight: '900',\n      lineHeight: '1.6em'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"En matblogg med fokus p\\xE5 milj\\xF8 & gode opplevelser.\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    style: {\n      borderRight: '0.8px solid #808080'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(_components_card_card_component__WEBPACK_IMPORTED_MODULE_12__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n{\n  /* <div>\n            \n              {posts.map(\n                ({ _id, title = '', slug = '', _updatedAt = '' }) =>\n                  slug && (\n                    <li key={_id}>\n                      <Link href=\"/post/[slug]\" as={`/post/${slug.current}`}>\n                        <a>{title}</a>\n                      </Link>{' '}\n                      ({new Date(_updatedAt).toDateString()})\n                    </li>\n                  )\n              )}\n          </div> */\n} //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>\n//   <div>\n//     <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>\n//     <div style={{\n//         marginTop: '45px',\n//         marginLeft: '17%', \n//         backgroundColor: '#1C060A', \n//         maxWidth: '50vw',\n//         minWidth: '50vw',\n//         minHeight: '20vw',\n//         maxHeight: '20vw',\n//         // borderRadius: '10px'\n//         }}\n//     >\n//       <div style={{display: 'flex', justifyContent: 'space-around'}}>\n//         <div>\n//           <h3 style={{\n//                 marginLeft: '10px',\n//                 color: 'white'\n//               }}\n//             >\n//               {posts[0].title}\n//           </h3>\n//           <img\n//             style={{marginLeft: '10px', marginTop: '30px'}}\n//             src={urlFor(posts[0].mainImage)\n//               .width(200)\n//               .url()}\n//           />\n//         </div>\n//         {/* CARD */}\n//         <div  style={{\n//             color: 'white', \n//             marginTop: '1.5vw', \n//             backgroundColor: '#226666', \n//             padding: '5px 20px', \n//             minWidth: '24vw',\n//             maxWidth: '28vw',\n//             maxHeight: '320px',\n//             borderRadius: '10px'\n//             }}\n//           >\n//           <h2>\n//             Description\n//           </h2>\n//           <p style={{color: 'white'}}>\n//             Author: {posts[0].name}\n//           </p>\n//           <BlockContent\n//             // style={{ maxWidth: '100px !important'}}\n//             blocks={posts[0].introduction}\n//             // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//             {...client.config()}\n//           />\n//           {/* <p style={{color: 'white', fontSize: '12px'}}>\n//               {introduction}\n//           </p> */}\n//         </div>\n//       </div>\n//     </div>\n//  </div>\n// </div>\n// CARD\n//   <div  style={{\n//     color: 'white', \n//     marginTop: '1.5vw', \n//     backgroundColor: '#226666', \n//     padding: '5px 20px', \n//     minWidth: '24vw',\n//     maxWidth: '28vw',\n//     maxHeight: '320px',\n//     borderRadius: '10px'\n//     }}\n//   >\n//   <h2>\n//     Description\n//   </h2>\n//   <p style={{color: 'white'}}>\n//     Author: {posts[0].name}\n//   </p>\n//   <BlockContent\n//     // style={{ maxWidth: '100px !important'}}\n//     blocks={posts[0].introduction}\n//     // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//     {...client.config()}\n//   />\n//   {/* <p style={{color: 'white', fontSize: '12px'}}>\n//       {introduction}\n//   </p> */}\n// </div>\n\n{\n  /* <h1 style={{\n              fontFamily: \"Archer SSm A\",\n              fontSize: '32px',\n              marginRight: '14vw'\n            }}>\n              \n            </h1> */\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsInBvc3RzIiwibmFtZSIsInNsdWciLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsImNvbG9yIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwiZ3JvcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2QixTQUFPQyx5REFBZSxDQUFDQywrQ0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNEOztBQUVELElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBLDRCQU1qQkEsS0FOaUIsQ0FFbkJDLFlBRm1CO0FBQUEsTUFFbkJBLFlBRm1CLG9DQUVKLEVBRkk7QUFBQSxxQkFNakJELEtBTmlCLENBR25CRSxLQUhtQjtBQUFBLE1BR25CQSxLQUhtQiw2QkFHWCxFQUhXO0FBQUEsTUFJbkJDLElBSm1CLEdBTWpCSCxLQU5pQixDQUluQkcsSUFKbUI7QUFBQSxNQUtuQkMsSUFMbUIsR0FNakJKLEtBTmlCLENBS25CSSxJQUxtQjtBQU9yQixTQUNB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O0FBRUY7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQztBQUFDOzs7Ozs7O0FBTW1CIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcblxuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cyc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuaW1wb3J0IGRlc3NlcnQgZnJvbSAnLi4vcHVibGljL2Rlc3NlcnQuanBlZyc7XG5cbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCdcblxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgXG4gICAgICBpbnRyb2R1Y3Rpb24gPSBbXSxcbiAgICAgIHBvc3RzID0gW10sIFxuICAgICAgbmFtZSxcbiAgICAgIHNsdWdcbiAgICB9ID0gcHJvcHNcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxEZWZhdWx0TGF5b3V0IC8+XG4gICAgICAgIHsvKiBGT0xEICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigwLCAxNTQsIDE2NCksIHJnYigyMSwgMzIsIDMzKSknLFxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIFxuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJywgXG4gICAgICAgICAgICB3aWR0aDogJzEwMHZ3JywgXG4gICAgICAgICAgICBoZWlnaHQ6ICc0MHZ3JywgXG4gICAgICAgICAgIFxuICAgICAgICB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDEuNWZyIDEuNWZyIDEuNWZyJyxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6ICcxMDBweCA1MDBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICc0MHZ3JyxcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLFxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTk4LCAyNTMsIDIzNCksIHJnYigyNDIsIDE5NCwgMTg4KSknLFxuICAgICAgICAgICAgY29sb3I6ICcjNDQ0J1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tib3JkZXJCb3R0b206ICcwLjhweCBzb2xpZCAjODA4MDgwJyxib3JkZXJSaWdodDogJzAuOHB4IHNvbGlkICM4MDgwODAnfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyQm90dG9tOiAnMC44cHggc29saWQgIzgwODA4MCd9fT5cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmNoZXIgU1NtIEFcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxN3B4JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxNSUnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxNSUnLFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4xOWVtJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzkwMCcsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjZlbSdcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVuIG1hdGJsb2dnIG1lZCBmb2t1cyBww6UgbWlsasO4ICYgZ29kZSBvcHBsZXZlbHNlci5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyUmlnaHQ6JzAuOHB4IHNvbGlkICM4MDgwODAnfX0+XG4gICAgICAgICAgICAgIHsvKiBDQVJEICovfVxuICAgICAgICAgICAgICA8Q2FyZCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICAgIDwvZGl2PiAgXG4gICAgPC9kaXY+XG4gICAgICBcbiAgICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gICAgcG9zdHM6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgKltfdHlwZSA9PSBcInBvc3RcIl17XG4gICAgICAgIGludHJvZHVjdGlvbiwgXG4gICAgICAgIG1haW5JbWFnZSwgXG4gICAgICAgIHNlY29uZEltYWdlLCBcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHNsdWcsXG4gICAgICAgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsIH1cbiAgICBgKVxufSlcblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG4gey8qIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAge3Bvc3RzLm1hcChcbiAgICAgICAgICAgICAgICAoeyBfaWQsIHRpdGxlID0gJycsIHNsdWcgPSAnJywgX3VwZGF0ZWRBdCA9ICcnIH0pID0+XG4gICAgICAgICAgICAgICAgICBzbHVnICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17X2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgKHtuZXcgRGF0ZShfdXBkYXRlZEF0KS50b0RhdGVTdHJpbmcoKX0pXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAvLyAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNFMEVDRjcnLCBtYXJnaW46ICcwIGF1dG8nLCB3aWR0aDogJzgwJScsIGhlaWdodDogJzcwMHB4JywgbWFyZ2luVG9wOiAnLTEuMnZ3J319PlxuICAgICAgICAvLyAgIDxkaXY+XG4gICAgICAgIC8vICAgICA8aDEgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTclJ319Pll1bSBUYXNoIEZvb2QgTG92ZXJzIEhvbWU8L2gxPlxuICAgICAgICAvLyAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAvLyAgICAgICAgIG1hcmdpblRvcDogJzQ1cHgnLFxuICAgICAgICAvLyAgICAgICAgIG1hcmdpbkxlZnQ6ICcxNyUnLCBcbiAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUMwNjBBJywgXG4gICAgICAgIC8vICAgICAgICAgbWF4V2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgLy8gICAgICAgICBtaW5XaWR0aDogJzUwdncnLFxuICAgICAgICAvLyAgICAgICAgIG1pbkhlaWdodDogJzIwdncnLFxuICAgICAgICAvLyAgICAgICAgIG1heEhlaWdodDogJzIwdncnLFxuICAgICAgICAvLyAgICAgICAgIC8vIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgICAgIC8vICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgID5cbiAgICAgICAgLy8gICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnfX0+XG4gICAgICAgIC8vICAgICAgICAgPGRpdj5cbiAgICAgICAgLy8gICAgICAgICAgIDxoMyBzdHlsZT17e1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgLy8gICAgICAgICAgICAgICB9fVxuICAgICAgICAvLyAgICAgICAgICAgICA+XG4gICAgICAgIC8vICAgICAgICAgICAgICAge3Bvc3RzWzBdLnRpdGxlfVxuICAgICAgICAvLyAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgICAgPGltZ1xuICAgICAgICAvLyAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnMzBweCd9fVxuICAgICAgICAvLyAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0c1swXS5tYWluSW1hZ2UpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgLndpZHRoKDIwMClcbiAgICAgICAgLy8gICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgIC8vICAgICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgIHsvKiBDQVJEICovfVxuICAgICAgICAvLyAgICAgICAgIDxkaXYgIHN0eWxlPXt7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgbWFyZ2luVG9wOiAnMS41dncnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyNjY2NicsIFxuICAgICAgICAvLyAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnLCBcbiAgICAgICAgLy8gICAgICAgICAgICAgbWluV2lkdGg6ICcyNHZ3JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgbWF4V2lkdGg6ICcyOHZ3JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMzIwcHgnLFxuICAgICAgICAvLyAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgICAgICAvLyAgICAgICAgICAgICB9fVxuICAgICAgICAvLyAgICAgICAgICAgPlxuICAgICAgICAvLyAgICAgICAgICAgPGgyPlxuICAgICAgICAvLyAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAvLyAgICAgICAgICAgPC9oMj5cbiAgICAgICAgLy8gICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5cbiAgICAgICAgLy8gICAgICAgICAgICAgQXV0aG9yOiB7cG9zdHNbMF0ubmFtZX1cbiAgICAgICAgLy8gICAgICAgICAgIDwvcD5cbiAgICAgICAgLy8gICAgICAgICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDBweCAhaW1wb3J0YW50J319XG4gICAgICAgIC8vICAgICAgICAgICAgIGJsb2Nrcz17cG9zdHNbMF0uaW50cm9kdWN0aW9ufVxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogMzAwLCBoOiAxMDAsIGZpdDogJ21heCcgfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cbiAgICAgICAgLy8gICAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgICB7LyogPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcxMnB4J319PlxuICAgICAgICAvLyAgICAgICAgICAgICAgIHtpbnRyb2R1Y3Rpb259XG4gICAgICAgIC8vICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAvLyAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAvLyA8L2Rpdj5cbiAgICAvLyBDQVJEXG4gICAgLy8gICA8ZGl2ICBzdHlsZT17e1xuICAgIC8vICAgICBjb2xvcjogJ3doaXRlJywgXG4gICAgLy8gICAgIG1hcmdpblRvcDogJzEuNXZ3JywgXG4gICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjY2NjYnLCBcbiAgICAvLyAgICAgcGFkZGluZzogJzVweCAyMHB4JywgXG4gICAgLy8gICAgIG1pbldpZHRoOiAnMjR2dycsXG4gICAgLy8gICAgIG1heFdpZHRoOiAnMjh2dycsXG4gICAgLy8gICAgIG1heEhlaWdodDogJzMyMHB4JyxcbiAgICAvLyAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAvLyAgICAgfX1cbiAgICAvLyAgID5cbiAgICAvLyAgIDxoMj5cbiAgICAvLyAgICAgRGVzY3JpcHRpb25cbiAgICAvLyAgIDwvaDI+XG4gICAgLy8gICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+XG4gICAgLy8gICAgIEF1dGhvcjoge3Bvc3RzWzBdLm5hbWV9XG4gICAgLy8gICA8L3A+XG4gICAgLy8gICA8QmxvY2tDb250ZW50XG4gICAgLy8gICAgIC8vIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwcHggIWltcG9ydGFudCd9fVxuICAgIC8vICAgICBibG9ja3M9e3Bvc3RzWzBdLmludHJvZHVjdGlvbn1cbiAgICAvLyAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDMwMCwgaDogMTAwLCBmaXQ6ICdtYXgnIH19XG4gICAgLy8gICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgLy8gICAvPlxuICAgIC8vICAgey8qIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTJweCd9fT5cbiAgICAvLyAgICAgICB7aW50cm9kdWN0aW9ufVxuICAgIC8vICAgPC9wPiAqL31cbiAgICAvLyA8L2Rpdj5cblxuXG4gICAgIHsvKiA8aDEgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJjaGVyIFNTbSBBXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzMycHgnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxNHZ3J1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9oMT4gKi99Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
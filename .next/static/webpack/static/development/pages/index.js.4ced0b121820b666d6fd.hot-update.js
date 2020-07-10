webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts */ \"./layouts/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_orange_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/orange.png */ \"./assets/orange.png\");\n/* harmony import */ var _assets_orange_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_orange_png__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _assets_sidebar_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/sidebar.png */ \"./assets/sidebar.png\");\n/* harmony import */ var _assets_sidebar_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_sidebar_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/card/card.component */ \"./components/card/card.component.jsx\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/cloud/Desktop/Natasha/yumtashweb/yum-tash-web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      *[_type == \\\"post\\\"]{\\n        introduction, \\n        mainImage, \\n        secondImage, \\n        title,\\n        slug,\\n        \\\"name\\\": author->name, }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n // Default Layout\n\n\n // Images\n\n\n // Components\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_10___default()(_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).image(source);\n}\n\nvar Index = function Index(props) {\n  var _props$introduction = props.introduction,\n      introduction = _props$introduction === void 0 ? [] : _props$introduction,\n      _props$posts = props.posts,\n      posts = _props$posts === void 0 ? [] : _props$posts,\n      name = props.name,\n      slug = props.slug;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      // backgroundImage: 'linear-gradient(to right, rgb(0, 154, 164), rgb(21, 32, 33))',\n      // backgroundColor: '#E0ECF7', \n      margin: '0 auto',\n      width: '100vw',\n      height: '40vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      // marginTop: '45px',\n      display: 'grid',\n      gridTemplateColumns: '1fr 1.5fr 1.5fr 1.5fr',\n      gridTemplateRows: '170px 80vw',\n      height: '40vw',\n      // backgroundColor: '#E0ECF7',\n      // backgroundImage: 'linear-gradient(to right, rgb(198, 253, 234), rgb(242, 194, 188))',\n      color: '#444'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center',\n      borderBottom: '0.8px solid #808080',\n      borderRight: '0.8px solid #808080'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      fontFamily: \"Archer SSm A\",\n      fontSize: '20.8px',\n      textAlign: 'center',\n      paddingLeft: '15%',\n      paddingRight: '15%',\n      letterSpacing: '0.19em',\n      fontWeight: '900',\n      lineHeight: '2em',\n      paddinBottom: '2vw' // marginBottom: '2vw'\n\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, \"Unike smaker, unike opplevelser. \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 50\n    }\n  }), \" Velkommen til Yum Tash.\")), __jsx(\"div\", {\n    style: {\n      borderBottom: '0.8px solid #808080',\n      display: 'flex',\n      alignItems: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      fontFamily: \"Archer SSm A\",\n      fontSize: '17px',\n      textAlign: 'center',\n      paddingLeft: '15%',\n      paddingRight: '15%',\n      letterSpacing: '0.19em',\n      fontWeight: '900',\n      lineHeight: '1.6em',\n      paddinBottom: '2vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, \"En matblogg med fokus p\\xE5 milj\\xF8 & gode opplevelser.\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    style: {\n      borderRight: '0.8px solid #808080',\n      height: '80vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, __jsx(_components_card_card_component__WEBPACK_IMPORTED_MODULE_13__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 15\n    }\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    style: {\n      height: '250px',\n      marginTop: '75px',\n      marginLeft: '25px'\n    },\n    src: _assets_orange_png__WEBPACK_IMPORTED_MODULE_11___default.a,\n    alt: \"orange\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 15\n    }\n  }), __jsx(\"h2\", {\n    style: {\n      marginLeft: '6vw'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 15\n    }\n  }, \"Popul\\xE6re Retter\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(groq__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject()));\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n{\n  /* <div>\n            \n              {posts.map(\n                ({ _id, title = '', slug = '', _updatedAt = '' }) =>\n                  slug && (\n                    <li key={_id}>\n                      <Link href=\"/post/[slug]\" as={`/post/${slug.current}`}>\n                        <a>{title}</a>\n                      </Link>{' '}\n                      ({new Date(_updatedAt).toDateString()})\n                    </li>\n                  )\n              )}\n          </div> */\n} //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>\n//   <div>\n//     <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>\n//     <div style={{\n//         marginTop: '45px',\n//         marginLeft: '17%', \n//         backgroundColor: '#1C060A', \n//         maxWidth: '50vw',\n//         minWidth: '50vw',\n//         minHeight: '20vw',\n//         maxHeight: '20vw',\n//         // borderRadius: '10px'\n//         }}\n//     >\n//       <div style={{display: 'flex', justifyContent: 'space-around'}}>\n//         <div>\n//           <h3 style={{\n//                 marginLeft: '10px',\n//                 color: 'white'\n//               }}\n//             >\n//               {posts[0].title}\n//           </h3>\n//           <img\n//             style={{marginLeft: '10px', marginTop: '30px'}}\n//             src={urlFor(posts[0].mainImage)\n//               .width(200)\n//               .url()}\n//           />\n//         </div>\n//         {/* CARD */}\n//         <div  style={{\n//             color: 'white', \n//             marginTop: '1.5vw', \n//             backgroundColor: '#226666', \n//             padding: '5px 20px', \n//             minWidth: '24vw',\n//             maxWidth: '28vw',\n//             maxHeight: '320px',\n//             borderRadius: '10px'\n//             }}\n//           >\n//           <h2>\n//             Description\n//           </h2>\n//           <p style={{color: 'white'}}>\n//             Author: {posts[0].name}\n//           </p>\n//           <BlockContent\n//             // style={{ maxWidth: '100px !important'}}\n//             blocks={posts[0].introduction}\n//             // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//             {...client.config()}\n//           />\n//           {/* <p style={{color: 'white', fontSize: '12px'}}>\n//               {introduction}\n//           </p> */}\n//         </div>\n//       </div>\n//     </div>\n//  </div>\n// </div>\n// CARD\n//   <div  style={{\n//     color: 'white', \n//     marginTop: '1.5vw', \n//     backgroundColor: '#226666', \n//     padding: '5px 20px', \n//     minWidth: '24vw',\n//     maxWidth: '28vw',\n//     maxHeight: '320px',\n//     borderRadius: '10px'\n//     }}\n//   >\n//   <h2>\n//     Description\n//   </h2>\n//   <p style={{color: 'white'}}>\n//     Author: {posts[0].name}\n//   </p>\n//   <BlockContent\n//     // style={{ maxWidth: '100px !important'}}\n//     blocks={posts[0].introduction}\n//     // imageOptions={{ w: 300, h: 100, fit: 'max' }}\n//     {...client.config()}\n//   />\n//   {/* <p style={{color: 'white', fontSize: '12px'}}>\n//       {introduction}\n//   </p> */}\n// </div>\n\n{\n  /* <h1 style={{\n              fontFamily: \"Archer SSm A\",\n              fontSize: '32px',\n              marginRight: '14vw'\n            }}>\n              \n            </h1> */\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSW5kZXgiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsInBvc3RzIiwibmFtZSIsInNsdWciLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsImNvbG9yIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInBhZGRpbkJvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJvcmFuZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsImdyb3EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtDQUdBOztBQUNBOztBQUlBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHlEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsNEJBTWpCQSxLQU5pQixDQUVuQkMsWUFGbUI7QUFBQSxNQUVuQkEsWUFGbUIsb0NBRUosRUFGSTtBQUFBLHFCQU1qQkQsS0FOaUIsQ0FHbkJFLEtBSG1CO0FBQUEsTUFHbkJBLEtBSG1CLDZCQUdYLEVBSFc7QUFBQSxNQUlu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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdDO0FBQUM7Ozs7Ozs7QUFNbUIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuXG4vLyBEZWZhdWx0IExheW91dFxuaW1wb3J0IERlZmF1bHRMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cyc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuXG4vLyBJbWFnZXNcbmltcG9ydCBvcmFuZ2UgZnJvbSAnLi4vYXNzZXRzL29yYW5nZS5wbmcnO1xuaW1wb3J0IHNpZGVCYXIgZnJvbSAnLi4vYXNzZXRzL3NpZGViYXIucG5nJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnXG5cblxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgXG4gICAgICBpbnRyb2R1Y3Rpb24gPSBbXSxcbiAgICAgIHBvc3RzID0gW10sIFxuICAgICAgbmFtZSxcbiAgICAgIHNsdWdcbiAgICB9ID0gcHJvcHNcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxEZWZhdWx0TGF5b3V0IC8+XG4gICAgICAgIHsvKiBGT0xEICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigwLCAxNTQsIDE2NCksIHJnYigyMSwgMzIsIDMzKSknLFxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIFxuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJywgXG4gICAgICAgICAgICB3aWR0aDogJzEwMHZ3JywgXG4gICAgICAgICAgICBoZWlnaHQ6ICc0MHZ3JywgXG4gICAgICAgICAgIFxuICAgICAgICB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAvLyBtYXJnaW5Ub3A6ICc0NXB4JyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMS41ZnIgMS41ZnIgMS41ZnInLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogJzE3MHB4IDgwdncnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnNDB2dycsXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjRTBFQ0Y3JyxcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE5OCwgMjUzLCAyMzQpLCByZ2IoMjQyLCAxOTQsIDE4OCkpJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ0NCdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLCBcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcwLjhweCBzb2xpZCAjODA4MDgwJyxcbiAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogJzAuOHB4IHNvbGlkICM4MDgwODAnXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyY2hlciBTU20gQVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIwLjhweCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMTUlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMTUlJyxcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMTllbScsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc5MDAnLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMmVtJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluQm90dG9tOiAnMnZ3JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luQm90dG9tOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pa2Ugc21ha2VyLCB1bmlrZSBvcHBsZXZlbHNlci4gPGJyLz4gVmVsa29tbWVuIHRpbCBZdW0gVGFzaC5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCd9fVxuICAgICAgICAgICAgICAgIHNyYz17bmlnaHRPdXR9XG4gICAgICAgICAgICAgICAgYWx0PVwidGFzdHkgZm9vZCBpbGx1c3RyYXRpb25cIlxuICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlckJvdHRvbTogJzAuOHB4IHNvbGlkICM4MDgwODAnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyY2hlciBTU20gQVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE3cHgnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzE1JScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzE1JScsXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjE5ZW0nLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnOTAwJyxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNmVtJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluQm90dG9tOiAnMnZ3JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVuIG1hdGJsb2dnIG1lZCBmb2t1cyBww6UgbWlsasO4ICYgZ29kZSBvcHBsZXZlbHNlci5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlclJpZ2h0OicwLjhweCBzb2xpZCAjODA4MDgwJywgaGVpZ2h0OiAnODB2dyd9fT5cbiAgICAgICAgICAgICAgey8qIENBUkQgKi99XG4gICAgICAgICAgICAgIDxDYXJkIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzI1MHB4JywgbWFyZ2luVG9wOiAnNzVweCcsIG1hcmdpbkxlZnQ6ICcyNXB4J319XG4gICAgICAgICAgICAgICAgc3JjPXtvcmFuZ2V9IFxuICAgICAgICAgICAgICAgIGFsdD1cIm9yYW5nZVwiIFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnNnZ3J319PlxuICAgICAgICAgICAgICAgIFBvcHVsw6ZyZSBSZXR0ZXJcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgey8qIDxpbWcgXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMzM1cHgnICwgbWFyZ2luVG9wOiAnNzVweCcsIG1hcmdpbkxlZnQ6ICcyNXB4J319XG4gICAgICAgICAgICAgICAgc3JjPXtzaWRlQmFyfSBcbiAgICAgICAgICAgICAgICBhbHQ9XCJvcmFuZ2VcIiBcbiAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cblxuXG5cbiAgICAgICAgPC9kaXY+ICBcbiAgICA8L2Rpdj5cbiAgICAgIFxuICAgIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgICBwb3N0czogYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgXG4gICAgICAqW190eXBlID09IFwicG9zdFwiXXtcbiAgICAgICAgaW50cm9kdWN0aW9uLCBcbiAgICAgICAgbWFpbkltYWdlLCBcbiAgICAgICAgc2Vjb25kSW1hZ2UsIFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSwgfVxuICAgIGApXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbiB7LyogPGRpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7cG9zdHMubWFwKFxuICAgICAgICAgICAgICAgICh7IF9pZCwgdGl0bGUgPSAnJywgc2x1ZyA9ICcnLCBfdXBkYXRlZEF0ID0gJycgfSkgPT5cbiAgICAgICAgICAgICAgICAgIHNsdWcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAoe25ldyBEYXRlKF91cGRhdGVkQXQpLnRvRGF0ZVN0cmluZygpfSlcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIC8vICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0UwRUNGNycsIG1hcmdpbjogJzAgYXV0bycsIHdpZHRoOiAnODAlJywgaGVpZ2h0OiAnNzAwcHgnLCBtYXJnaW5Ub3A6ICctMS4ydncnfX0+XG4gICAgICAgIC8vICAgPGRpdj5cbiAgICAgICAgLy8gICAgIDxoMSBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNyUnfX0+WXVtIFRhc2ggRm9vZCBMb3ZlcnMgSG9tZTwvaDE+XG4gICAgICAgIC8vICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIC8vICAgICAgICAgbWFyZ2luVG9wOiAnNDVweCcsXG4gICAgICAgIC8vICAgICAgICAgbWFyZ2luTGVmdDogJzE3JScsIFxuICAgICAgICAvLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxQzA2MEEnLCBcbiAgICAgICAgLy8gICAgICAgICBtYXhXaWR0aDogJzUwdncnLFxuICAgICAgICAvLyAgICAgICAgIG1pbldpZHRoOiAnNTB2dycsXG4gICAgICAgIC8vICAgICAgICAgbWluSGVpZ2h0OiAnMjB2dycsXG4gICAgICAgIC8vICAgICAgICAgbWF4SGVpZ2h0OiAnMjB2dycsXG4gICAgICAgIC8vICAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiAnMTBweCdcbiAgICAgICAgLy8gICAgICAgICB9fVxuICAgICAgICAvLyAgICAgPlxuICAgICAgICAvLyAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCd9fT5cbiAgICAgICAgLy8gICAgICAgICA8ZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgPGgzIHN0eWxlPXt7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgICAvLyAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8vICAgICAgICAgICAgID5cbiAgICAgICAgLy8gICAgICAgICAgICAgICB7cG9zdHNbMF0udGl0bGV9XG4gICAgICAgIC8vICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgICA8aW1nXG4gICAgICAgIC8vICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICczMHB4J319XG4gICAgICAgIC8vICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3RzWzBdLm1haW5JbWFnZSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAud2lkdGgoMjAwKVxuICAgICAgICAvLyAgICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgLy8gICAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgey8qIENBUkQgKi99XG4gICAgICAgIC8vICAgICAgICAgPGRpdiAgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIFxuICAgICAgICAvLyAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjV2dycsIFxuICAgICAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjI2NjY2JywgXG4gICAgICAgIC8vICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggMjBweCcsIFxuICAgICAgICAvLyAgICAgICAgICAgICBtaW5XaWR0aDogJzI0dncnLFxuICAgICAgICAvLyAgICAgICAgICAgICBtYXhXaWR0aDogJzI4dncnLFxuICAgICAgICAvLyAgICAgICAgICAgICBtYXhIZWlnaHQ6ICczMjBweCcsXG4gICAgICAgIC8vICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXG4gICAgICAgIC8vICAgICAgICAgICAgIH19XG4gICAgICAgIC8vICAgICAgICAgICA+XG4gICAgICAgIC8vICAgICAgICAgICA8aDI+XG4gICAgICAgIC8vICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgIC8vICAgICAgICAgICA8L2gyPlxuICAgICAgICAvLyAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319PlxuICAgICAgICAvLyAgICAgICAgICAgICBBdXRob3I6IHtwb3N0c1swXS5uYW1lfVxuICAgICAgICAvLyAgICAgICAgICAgPC9wPlxuICAgICAgICAvLyAgICAgICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhXaWR0aDogJzEwMHB4ICFpbXBvcnRhbnQnfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgYmxvY2tzPXtwb3N0c1swXS5pbnRyb2R1Y3Rpb259XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGltYWdlT3B0aW9ucz17eyB3OiAzMDAsIGg6IDEwMCwgZml0OiAnbWF4JyB9fVxuICAgICAgICAvLyAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgICAvLyAgICAgICAgICAgLz5cbiAgICAgICAgLy8gICAgICAgICAgIHsvKiA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzEycHgnfX0+XG4gICAgICAgIC8vICAgICAgICAgICAgICAge2ludHJvZHVjdGlvbn1cbiAgICAgICAgLy8gICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgIC8vICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgIC8vIDwvZGl2PlxuICAgIC8vIENBUkRcbiAgICAvLyAgIDxkaXYgIHN0eWxlPXt7XG4gICAgLy8gICAgIGNvbG9yOiAnd2hpdGUnLCBcbiAgICAvLyAgICAgbWFyZ2luVG9wOiAnMS41dncnLCBcbiAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyNjY2NicsIFxuICAgIC8vICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnLCBcbiAgICAvLyAgICAgbWluV2lkdGg6ICcyNHZ3JyxcbiAgICAvLyAgICAgbWF4V2lkdGg6ICcyOHZ3JyxcbiAgICAvLyAgICAgbWF4SGVpZ2h0OiAnMzIwcHgnLFxuICAgIC8vICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xuICAgIC8vICAgICB9fVxuICAgIC8vICAgPlxuICAgIC8vICAgPGgyPlxuICAgIC8vICAgICBEZXNjcmlwdGlvblxuICAgIC8vICAgPC9oMj5cbiAgICAvLyAgIDxwIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fT5cbiAgICAvLyAgICAgQXV0aG9yOiB7cG9zdHNbMF0ubmFtZX1cbiAgICAvLyAgIDwvcD5cbiAgICAvLyAgIDxCbG9ja0NvbnRlbnRcbiAgICAvLyAgICAgLy8gc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDBweCAhaW1wb3J0YW50J319XG4gICAgLy8gICAgIGJsb2Nrcz17cG9zdHNbMF0uaW50cm9kdWN0aW9ufVxuICAgIC8vICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogMzAwLCBoOiAxMDAsIGZpdDogJ21heCcgfX1cbiAgICAvLyAgICAgey4uLmNsaWVudC5jb25maWcoKX1cbiAgICAvLyAgIC8+XG4gICAgLy8gICB7LyogPHAgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcxMnB4J319PlxuICAgIC8vICAgICAgIHtpbnRyb2R1Y3Rpb259XG4gICAgLy8gICA8L3A+ICovfVxuICAgIC8vIDwvZGl2PlxuXG5cbiAgICAgey8qIDxoMSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmNoZXIgU1NtIEFcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMzJweCcsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzE0dncnXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2gxPiAqL30iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
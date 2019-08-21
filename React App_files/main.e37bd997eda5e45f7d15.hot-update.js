webpackHotUpdate("main",{

/***/ "./src/components/Input-Sizeable/index.js":
false,

/***/ "./src/pages/formdisplay.js":
/*!**********************************!*\
  !*** ./src/pages/formdisplay.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_pauldavis_Desktop_forms_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pauldavis_Desktop_forms_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pauldavis_Desktop_forms_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_pauldavis_Desktop_forms_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_pauldavis_Desktop_forms_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_forms_API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../util/forms/API */ "./src/util/forms/API.js");
/* harmony import */ var _components_Subheading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Subheading */ "./src/components/Subheading/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_BubbleSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/BubbleSelect */ "./src/components/BubbleSelect/index.js");





var _jsxFileName = "/Users/pauldavis/Desktop/forms/client/src/pages/formdisplay.js";






var FormDisplay =
/*#__PURE__*/
function (_Component) {
  Object(_Users_pauldavis_Desktop_forms_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FormDisplay, _Component);

  function FormDisplay(props) {
    var _this;

    Object(_Users_pauldavis_Desktop_forms_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormDisplay);

    _this = Object(_Users_pauldavis_Desktop_forms_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_pauldavis_Desktop_forms_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FormDisplay).call(this, props));

    _this.fetchForm = function (formID) {
      _util_forms_API__WEBPACK_IMPORTED_MODULE_6__["default"].findOneForm({
        id: formID
      }).then(function (res) {
        // console.log(res.data)
        _this.setState({
          form: {
            title: res.data.form_title,
            contents: res.data.form_contents
          }
        });
      });
    };

    _this.state = {
      form: null
    };
    return _this;
  }

  Object(_Users_pauldavis_Desktop_forms_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FormDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchForm(this.props.id);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.state.form ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.state.form.title) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "No Title"), this.state.form ? this.state.form.contents.map(function (section, i) {
        // console.log(JSON.stringify(Object.keys(section)))
        switch (JSON.stringify(Object.keys(section))) {
          case '["sub_heading"]':
            // console.log("hit");
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Subheading__WEBPACK_IMPORTED_MODULE_7__["Subheading"], {
              text: section.sub_heading.text,
              key: i,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            });

          case '["input"]':
            // console.log("hit");
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              text: section.input.text,
              key: i,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              },
              __self: this
            });

          case '["bubble_select"]':
            return section.bubble_select.text.map(function (text, option) {
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_BubbleSelect__WEBPACK_IMPORTED_MODULE_9__["BubbleSelect"], {
                text: text,
                set: i,
                key: i + "." + option,
                option: option,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                },
                __self: this
              });
            });

          default:
            console.log("none");
        }

        return console.log("loaded");
      }) : console.log());
    }
  }]);

  return FormDisplay;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FormDisplay);

/***/ })

})
//# sourceMappingURL=main.e37bd997eda5e45f7d15.hot-update.js.map
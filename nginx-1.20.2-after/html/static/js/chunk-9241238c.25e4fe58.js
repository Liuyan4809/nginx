(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-9241238c"],{

/***/ "07fb":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/material.vue?vue&type=template&id=6ae5e4da&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "report__promotion__material"
  }, [_c('formSearch', {
    on: {
      "search": _vm.onSearch
    }
  }), _c('nmg-sticky', {
    attrs: {
      "container": _vm.container,
      "targets": _vm.targets,
      "offset-top": 60
    }
  }, [_c('nmg-table', {
    ref: "table",
    attrs: {
      "title": "素材报表",
      "immediate": false,
      "url": "/statistics/ad/platform/statistics/material/get/MaterialReportList",
      "requestType": "post",
      "params": _vm.parameters,
      "paramConfig": _vm.paramConfig,
      "responseConfig": _vm.responseConfig,
      "default-sort": _vm.defaultSort,
      "columns": _vm.columns,
      "show-summary": true,
      "summary-method": _vm.getSummaries
    },
    on: {
      "sort-change": _vm.onSortChange,
      "loaded": _vm.onLoaded
    },
    scopedSlots: _vm._u([{
      key: "titleHandler",
      fn: function fn() {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "round": "",
            "plain": ""
          },
          on: {
            "click": _vm.onClickMoreDimension
          }
        }, [_vm._v(" 更多维度 ")]), _vm.isShowExportBtnFlg ? _c('el-button', {
          attrs: {
            "type": "primary",
            "round": "",
            "plain": "",
            "loading": _vm.btnExportLoading
          },
          on: {
            "click": _vm.exportToExcel
          }
        }, [_vm._v(" 导出 ")]) : _vm._e()];
      },
      proxy: true
    }, {
      key: "materialUrl",
      fn: function fn(scope) {
        return [_vm.searchForm.materialType === '0' && scope.row.materialUrl ? _c('div', {
          staticClass: "adaption_img",
          on: {
            "click": function click($event) {
              return _vm.operation(scope.row);
            }
          }
        }, [_c('img', {
          staticClass: "image",
          attrs: {
            "src": scope.row.materialUrl
          }
        })]) : _vm._e(), _vm.searchForm.materialType === '1' && (scope.row.materialUrl || scope.row.coverUrl) ? _c('div', {
          staticClass: "adaption_img",
          on: {
            "click": function click($event) {
              return _vm.operation(scope.row);
            }
          }
        }, [_c('video', {
          staticClass: "video",
          attrs: {
            "poster": scope.row.coverUrl,
            "preload": "none",
            "src": scope.row.materialUrl
          }
        })]) : _vm._e()];
      }
    }, {
      key: "materialSource",
      fn: function fn(scope) {
        return [scope.row.materialSource.length && '--' !== scope.row.materialSource ? _c('span', [_vm._v(_vm._s(scope.row.materialSource))]) : _c('span', [_vm._v("其他")])];
      }
    }, {
      key: "ppTags",
      fn: function fn(scope) {
        return _vm._l(_vm.getSimpleTags(scope.row.ppTags || '[]'), function (item, i) {
          return _c('el-tooltip', {
            key: i,
            staticClass: "item",
            attrs: {
              "effect": "dark",
              "content": item,
              "placement": "top"
            }
          }, [_c('el-tag', {
            staticStyle: {
              "margin-left": "5px"
            },
            attrs: {
              "type": "danger",
              "size": "small"
            }
          }, [_vm._v(_vm._s(item))])], 1);
        });
      }
    }])
  })], 1), _c('dialog-custom-list', {
    ref: "dialogCustomList",
    attrs: {
      "customListData": _vm.customListData,
      "templateType": _vm.templateType
    }
  }), _c('el-dialog', {
    staticClass: "views__resource__promotion__hq-material__edit-material",
    attrs: {
      "height": "90%",
      "title": "查看素材",
      "visible": _vm.show,
      "center": "",
      "append-to-body": "",
      "close-on-click-modal": false,
      "destroy-on-close": true
    },
    on: {
      "close": _vm.hide,
      "opened": _vm.opened
    }
  }, [_c('el-row', [_c('el-col', {
    staticClass: "MaterialCard selfCard"
  }, [_c('div', {
    staticClass: "MaterialCardCol"
  }, [_c('el-card', {
    class: {
      cardList: true
    },
    attrs: {
      "shadow": "always"
    }
  }, [_vm.searchForm.materialType === '0' ? _c('div', {
    staticClass: "adaption_img"
  }, [_c('img', {
    staticClass: "image",
    attrs: {
      "src": _vm.materialInfo.materialUrl
    }
  })]) : _vm._e(), _vm.searchForm.materialType === '1' ? _c('div', {
    staticClass: "adaption_img"
  }, [_c('video', {
    staticClass: "video",
    attrs: {
      "controls": "",
      "poster": _vm.materialInfo.coverUrl,
      "autoplay": "",
      "src": _vm.materialInfo.materialUrl
    }
  })]) : _vm._e()])], 1)])], 1), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "round": ""
    },
    on: {
      "click": _vm.hide
    }
  }, [_vm._v("关 闭")])], 1)], 1), _c('dialog-success', {
    ref: "dialogSuccess"
  })], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "1306":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/formSearch.vue?vue&type=template&id=5465d1fa&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('nmg-form', {
    ref: "form",
    staticClass: "--tool-shadow-box",
    attrs: {
      "inline": true,
      "default-form": _vm.defaultForm,
      "searchable": "",
      "resetable": ""
    },
    on: {
      "search": _vm.onSearch
    },
    model: {
      value: _vm.searchForm,
      callback: function callback($$v) {
        _vm.searchForm = $$v;
      },
      expression: "searchForm"
    }
  }, [_c('nmg-form-item', {
    attrs: {
      "label": "时间",
      "prop": "dateRangeList"
    }
  }, [_c('div', {
    staticClass: "el-date-picker-float"
  }, [_c('el-date-picker', {
    attrs: {
      "type": "daterange",
      "align": "right",
      "unlink-panels": "",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期",
      "picker-options": _vm.pickerOptions,
      "clearable": false,
      "value-format": "yyyy-MM-dd"
    },
    model: {
      value: _vm.searchForm.dateRangeList,
      callback: function callback($$v) {
        _vm.$set(_vm.searchForm, "dateRangeList", $$v);
      },
      expression: "searchForm.dateRangeList"
    }
  })], 1)]), _c('nmg-form-item', {
    attrs: {
      "label": "素材类型",
      "prop": "materialType"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择素材类型"
    },
    on: {
      "change": _vm.onMaterialTypeChange
    },
    model: {
      value: _vm.searchForm.materialType,
      callback: function callback($$v) {
        _vm.$set(_vm.searchForm, "materialType", $$v);
      },
      expression: "searchForm.materialType"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "图片",
      "value": "0"
    }
  }), _c('el-option', {
    attrs: {
      "label": "视频",
      "value": "1"
    }
  })], 1)], 1), _c('nmg-form-item', {
    attrs: {
      "label": "素材名称",
      "prop": "materialName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入素材名称"
    },
    model: {
      value: _vm.searchForm.materialName,
      callback: function callback($$v) {
        _vm.$set(_vm.searchForm, "materialName", $$v);
      },
      expression: "searchForm.materialName"
    }
  })], 1), _c('nmg-form-item', {
    attrs: {
      "label": "产品",
      "prop": "productInfo"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入产品名称"
    },
    model: {
      value: _vm.searchForm.productInfo,
      callback: function callback($$v) {
        _vm.$set(_vm.searchForm, "productInfo", $$v);
      },
      expression: "searchForm.productInfo"
    }
  })], 1), _c('nmg-form-item', {
    attrs: {
      "label": "作者",
      "prop": "authorName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入拍摄/编导/后期人员姓名"
    },
    model: {
      value: _vm.searchForm.authorName,
      callback: function callback($$v) {
        _vm.$set(_vm.searchForm, "authorName", $$v);
      },
      expression: "searchForm.authorName"
    }
  })], 1), _c('nmg-form-item', {
    attrs: {
      "label": "投放账户",
      "prop": "placingAccInfo"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入投放户ID/投放户名称"
    },
    model: {
      value: _vm.searchForm.placingAccInfo,
      callback: function callback($$v) {
        _vm.$set(_vm.searchForm, "placingAccInfo", $$v);
      },
      expression: "searchForm.placingAccInfo"
    }
  })], 1), _c('nmg-form-item', {
    attrs: {
      "label": "渠道",
      "prop": "materialSource"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "placeholder": "请选择渠道"
    },
    model: {
      value: _vm.searchForm.materialSource,
      callback: function callback($$v) {
        _vm.$set(_vm.searchForm, "materialSource", $$v);
      },
      expression: "searchForm.materialSource"
    }
  }, ['1' === _vm.placingType && '1' === _vm.searchForm.materialType ? _c('el-option', {
    key: "1",
    attrs: {
      "label": "素造",
      "value": "1"
    }
  }) : _vm._e(), _c('el-option', {
    key: "2",
    attrs: {
      "label": "自产",
      "value": "2"
    }
  }), _c('el-option', {
    key: "3",
    attrs: {
      "label": "外采",
      "value": "3"
    }
  }), _c('el-option', {
    key: "4",
    attrs: {
      "label": "其他",
      "value": "4"
    }
  })], 1)], 1), _c('nmg-form-item', {
    attrs: {
      "label": "供应商名称",
      "prop": "materialProvider"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入供应商名称"
    },
    model: {
      value: _vm.searchForm.materialProvider,
      callback: function callback($$v) {
        _vm.$set(_vm.searchForm, "materialProvider", $$v);
      },
      expression: "searchForm.materialProvider"
    }
  })], 1), '1' === _vm.placingType && '1' === _vm.searchForm.materialType ? _c('nmg-form-item', {
    attrs: {
      "label": "标签",
      "prop": "ppTags"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入标签"
    },
    model: {
      value: _vm.searchForm.ppTags,
      callback: function callback($$v) {
        _vm.$set(_vm.searchForm, "ppTags", $$v);
      },
      expression: "searchForm.ppTags"
    }
  })], 1) : _vm._e(), _c('nmg-form-item', {
    attrs: {
      "prop": "industryId",
      "label": "行业"
    }
  }, [_c('el-cascader', {
    attrs: {
      "props": {
        value: 'industryId',
        label: 'industryName'
      },
      "options": _vm.industryIdOptions,
      "clearable": ""
    },
    model: {
      value: _vm.searchForm.industryId,
      callback: function callback($$v) {
        _vm.$set(_vm.searchForm, "industryId", $$v);
      },
      expression: "searchForm.industryId"
    }
  })], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "251d":
/*!*************************************************************************************************************!*\
  !*** ./src/views/report/promotion/material/material.vue?vue&type=style&index=2&id=6ae5e4da&prod&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_2_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./material.vue?vue&type=style&index=2&id=6ae5e4da&prod&lang=scss& */ "7248");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_2_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_2_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_2_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_2_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "32c8":
/*!*************************************************************************************!*\
  !*** ./src/views/report/promotion/material/formSearch.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_formSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./formSearch.vue?vue&type=script&lang=js& */ "7aac5");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_formSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "3381":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/material.vue?vue&type=style&index=1&id=6ae5e4da&prod&lang=scss&scoped=scoped& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "33b7":
/*!***********************************************************************************!*\
  !*** ./src/views/report/promotion/material/material.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./material.vue?vue&type=script&lang=js& */ "4d6c");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "3949":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/dialogCustomList.vue?vue&type=template&id=3dc4310c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-dialog', {
    staticClass: "nmg-dialog-custom-list",
    attrs: {
      "center": "",
      "title": "自定义列表",
      "visible": _vm.visible,
      "close-on-click-modal": false,
      "destroy-on-close": true,
      "width": "80%"
    },
    on: {
      "close": _vm.onClose,
      "open": _vm.onOpen
    }
  }, [_c('el-form', {
    ref: "form",
    staticClass: "is-plain",
    attrs: {
      "model": _vm.form,
      "rules": _vm.rules,
      "label-width": "150px"
    },
    nativeOn: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      }
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "自定义指标",
      "prop": "customListSelected"
    }
  }, [_c('nmg-custom-list', {
    attrs: {
      "groupValueKey": "fieldId",
      "groupLabelKey": "fieldName",
      "valueKey": "fieldId",
      "labelKey": "fieldName",
      "leftSelected": _vm.form.customListLeftSelected,
      "cneterSelected": _vm.form.customListCenterSelected,
      "template": _vm.templateList,
      "data": _vm.customListData,
      "shortcut": ""
    },
    on: {
      "change": _vm.onAllChange,
      "changeLeft": _vm.onLeftChange,
      "changeCenter": _vm.onCenterChange,
      "changeTemplate": _vm.onChangeTemplate
    },
    model: {
      value: _vm.form.customListSelected,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "customListSelected", $$v);
      },
      expression: "form.customListSelected"
    }
  })], 1), _c('el-form-item', [_c('el-checkbox', {
    attrs: {
      "prop": "isSaveTemplate"
    },
    model: {
      value: _vm.form.isSaveTemplate,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSaveTemplate", $$v);
      },
      expression: "form.isSaveTemplate"
    }
  }, [_vm._v("保存为常用模板")])], 1), _vm.form.isSaveTemplate ? _c('el-form-item', {
    attrs: {
      "label": "常用模板名称",
      "prop": "templateName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入常用模板名称"
    },
    model: {
      value: _vm.form.templateName,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "templateName", $$v);
      },
      expression: "form.templateName"
    }
  }, [_c('template', {
    slot: "append"
  }, [_c('el-button', {
    attrs: {
      "round": "",
      "type": "primary"
    },
    on: {
      "click": function click($event) {
        return _vm.onClickSaveTemplate('0');
      }
    }
  }, [_vm._v("保存模板")])], 1)], 2)], 1) : _vm._e()], 1), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "round": "",
      "type": "primary"
    },
    on: {
      "click": _vm.onClickSave
    }
  }, [_vm._v("确 定")]), _c('el-button', {
    attrs: {
      "round": ""
    },
    on: {
      "click": function click($event) {
        _vm.visible = false;
      }
    }
  }, [_vm._v("取 消")])], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "3b32":
/*!************************************************************!*\
  !*** ./src/views/report/promotion/material/config/data.js ***!
  \************************************************************/
/*! exports provided: templateForm, templateRules, searchForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateForm", function() { return templateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateRules", function() { return templateRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchForm", function() { return searchForm; });
/* harmony import */ var _tools_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/date */ "fd23");

var templateForm = {
  // 是否保存为长睦模板
  isSaveTemplate: false,
  // 模板名称
  templateName: '',
  // 模板选中的全部数据
  customListSelected: [],
  // 左侧固定列选中
  customListLeftSelected: [],
  // 中间不固定列选中
  customListCenterSelected: []
};
var templateRules = {
  customListSelected: [{
    required: true,
    message: '请选择自定义指标',
    trigger: 'change'
  }],
  templateName: []
};
var searchForm = {
  dateRangeList: [Object(_tools_date__WEBPACK_IMPORTED_MODULE_0__["date2String"])(new Date(new Date().getTime() - 1000 * 60 * 60 * 24), 'yyyy-MM-dd'), Object(_tools_date__WEBPACK_IMPORTED_MODULE_0__["date2String"])(new Date(new Date().getTime() - 1000 * 60 * 60 * 24), 'yyyy-MM-dd')],
  // 时间范围
  materialType: '1',
  // 素材类型（0：图片；1：视频）
  materialName: '',
  // 素材名称
  authorName: '',
  // 拍摄人员/编导人员/后期人员姓名模糊查询
  placingAccInfo: '',
  //投放户信息
  productInfo: '',
  //产品信息
  materialSource: '',
  // 渠道
  materialProvider: '',
  //供应商名称
  ppTags: '',
  // 标签
  industryId: '' // 行业
};

/***/ }),

/***/ "4c73":
/*!**********************************************************************************************!*\
  !*** ./src/views/report/promotion/material/dialogSuccess.vue?vue&type=template&id=f928b988& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogSuccess_vue_vue_type_template_id_f928b988___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./dialogSuccess.vue?vue&type=template&id=f928b988& */ "b496");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogSuccess_vue_vue_type_template_id_f928b988___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogSuccess_vue_vue_type_template_id_f928b988___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "4d6c":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/material.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _config_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/data.js */ "3b32");
/* harmony import */ var _dialogCustomList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogCustomList.vue */ "909e");
/* harmony import */ var _formSearch_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formSearch.vue */ "5180");
/* harmony import */ var _dialogSuccess_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogSuccess.vue */ "b623");
/* harmony import */ var _config_ports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/ports */ "e07c");
/* harmony import */ var _config_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/store */ "8012");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "2f62");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

// 更多维度2

// 搜索表单

// 成功弹窗




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "material",
  components: {
    dialogCustomList: _dialogCustomList_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    // 更多维度
    formSearch: _formSearch_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    // 搜索表单
    dialogSuccess: _dialogSuccess_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      fourLevelAuth: this.$store.state.currentUser.loginUserInfo.fourLevelAuthList,
      // 四级菜单
      isShowExportBtnFlg: false,
      // 导出按钮是否展示标识0.不展示1.展示
      // 地址栏携带的信息
      info: JSON.parse(this.$route.query.info || "{}"),
      // 自定义列表数据
      customListData: [],
      // 数据总条数
      dataCount: 0,
      // 排序规则
      orderRule: "desc",
      // 排序对象
      orderParam: "placingDate",
      materialInfo: {},
      // 弹窗是否显示
      show: false,
      // 搜索表单
      searchForm: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_0__["searchForm"]),
      btnExportLoading: false,
      paramConfig: {
        pageIndex: 'pageNumber',
        pageSize: 'pageSize',
        prop: 'orderParam',
        order: 'orderRule',
        ascending: 'asc',
        descending: 'desc'
      },
      responseConfig: {
        data: 'data.objectData.pageList',
        total: 'data.objectData.totalCount',
        summary: 'data.objectData.totalData',
        transformData: this.transformData
      },
      defaultSort: {
        prop: 'placingDate',
        order: 'descending'
      },
      targets: [],
      container: null
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])({
    // 全部的自定義列表列
    allCustomList: function allCustomList(state) {
      return state.material.allCustomList;
    },
    // 媒体类型
    placingType: function placingType(state) {
      return state.material.placingType;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])({
    defaultTemplateObjData: 'material/defaultTemplateObjData'
  })), {}, {
    templateType: function templateType() {
      // 模板类型（ksxg：快手效果，kssc：快手素材，ttxg：头条效果，ttsc：头条素材）
      return {
        '1': 'kssc',
        '3': 'ttsc',
        '2': 'gdtsc'
      }[this.placingType];
    },
    columns: function columns() {
      var _ref;
      var vm = this;
      var columns = this.getCustomListForcolumns((_ref = []).concat.apply(_ref, _toConsumableArray(this.defaultTemplateObjData.customListLeftSelected || []).concat(_toConsumableArray(this.defaultTemplateObjData.customListCenterSelected || []))));
      var index = columns.findIndex(function (item) {
        return 'tag' === item.prop;
      });
      if (-1 !== index) {
        // 必须是视频
        if ('1' === vm.searchForm.materialType) {
          columns[index].prop = 'ppTags';
        } else {
          columns.splice(index, 1);
        }
      }
      return [{
        type: 'index',
        width: '50',
        key: 'index',
        fixed: true,
        label: '序号'
      }].concat(columns);
    },
    columnsForNames: function columnsForNames() {
      var props = this.columns.map(function (item) {
        return item.prop;
      });
      return props;
    },
    parameters: function parameters() {
      var _parameters$dateRange;
      var vm = this;
      var parameters = vm.$deepCopy(vm.searchForm);

      // 日期
      if ((_parameters$dateRange = parameters.dateRangeList) !== null && _parameters$dateRange !== void 0 && _parameters$dateRange.length) {
        parameters.startDate = parameters.dateRangeList[0]; // 时间范围开始时间
        parameters.endDate = parameters.dateRangeList[1]; // 时间范围结束时间
      }

      delete parameters.dateRangeList;

      // 行业
      // 去最后一个叶子节点数据
      parameters.industryId = parameters.industryId[parameters.industryId.length - 1] || '';

      // 更多维度 用于分组
      parameters.dataDimensionList = vm.columnsForNames;
      parameters.placingType = vm.placingType; // 媒体类型

      return parameters;
    }
  }),
  watch: {
    placingType: {
      handler: function handler() {
        this.reset();
      }
    },
    searchForm: {
      handler: function handler() {
        // 表单变更时需要查询自定义列表数据，
        this.getCustomList();
      }
    }
  },
  methods: {
    /********视频方法 开始********/
    /**
     * 获取去重的标签
     */
    getSimpleTags: function getSimpleTags() {
      var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var vm = this;
      var _tags = vm.$deepCopy(tags);
      if ('[object String]' === Object.prototype.toString.call(_tags)) {
        _tags = JSON.parse(_tags);
      }
      var cache = {};
      for (var i = 0; i < _tags.length; i++) {
        var element = _tags[i];
        if (!cache[element]) {
          cache[element] = true;
        } else {
          _tags.splice(i, 1);
          i--;
        }
      }
      return Object.keys(cache);
    },
    operation: function operation(materialInfo) {
      var vm = this;
      var searchForm = this.searchForm;
      vm.materialInfo = materialInfo;

      // 当媒体类型为头条，且更多维度选择投放账户时，查询视频信息,否则不可以查看视频信息
      if ("3" === vm.placingType && -1 !== this.columnsForNames.indexOf("advertiserName") && searchForm.materialType === "1") {
        // 头条

        Object(_config_ports__WEBPACK_IMPORTED_MODULE_4__["searchMaterialDetailInfo"])({
          advertiserId: materialInfo.advertiserId,
          // 投放户id
          ttMaterialId: materialInfo.ttMaterialId,
          // 头条媒体id
          materialType: searchForm.materialType // 素材类型
        }, {
          clearLoading: true
        }).then(function (res) {
          var _res$data$objectData, _res$data$objectData$;
          var records = (_res$data$objectData = res.data.objectData) === null || _res$data$objectData === void 0 ? void 0 : (_res$data$objectData$ = _res$data$objectData.ttVideoFileGetVo) === null || _res$data$objectData$ === void 0 ? void 0 : _res$data$objectData$.records;
          if (records && records.length) {
            vm.materialInfo.materialUrl = records[0].videoUrl;
            vm.materialInfo.coverUrl = records[0].videoPosterUrl;
            vm.show = true;
          } else {
            vm.$message({
              type: "error",
              message: '视频/图片无法展示！'
            });
          }
        });
      } else if ("3" === vm.placingType && searchForm.materialType === "1") {
        // 头条

        var show_message = "";
        if (searchForm.materialType === "1") {
          show_message = "不能查看头条视频！";
        }
        this.show = false;
        vm.$message({
          type: "error",
          message: "未选择【投放账户】维度，" + show_message
        });
      } else {
        this.show = true;
      }
    },
    getSummaries: function getSummaries(_ref2, aggregateInfo) {
      var columns = _ref2.columns;
      /* 合计 */
      var sums = [];
      if (aggregateInfo) {
        columns.forEach(function (column, index) {
          if (index === 0) {
            sums[index] = "总计";
            return;
          } else if (aggregateInfo[column.property]) {
            sums[index] = aggregateInfo[column.property];
            return;
          } else {
            sums[index] = "--";
          }
        });
      }
      return sums;
    },
    /**
     * 获取表的列信息
     */
    getCustomListForcolumns: function getCustomListForcolumns() {
      var filds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var h = this.$createElement;
      var vm = this;
      var columns = [];
      var currentFilds = _toConsumableArray(filds);
      var _loop = function _loop() {
        var _vm$defaultTemplateOb;
        var fild = currentFilds[i];
        var column = {
          prop: fild.fieldKey,
          label: fild.fieldName,
          "show-overflow-tooltip": true,
          "min-width": 200
        };

        // 素材名称
        if ('materialName' === fild.fieldKey) {
          column['render-header'] = function (h, _ref3) {
            var column = _ref3.column,
              $index = _ref3.$index;
            return h("el-tooltip", {
              "attrs": {
                "content": "素材在本地素材库中的文件名称。如素材在本地素材库中不存在，名称显示为在媒体后台的文件名称。",
                "effect": "dark",
                "placement": "top"
              }
            }, [h("span", ["\u7D20\u6750\u540D\u79F0", h("i", {
              "class": "el-icon-info"
            })])]);
          };
        }
        if ('tag' === fild.fieldKey) {
          delete column['show-overflow-tooltip'];
        }

        // 左侧固定列
        if ((_vm$defaultTemplateOb = vm.defaultTemplateObjData) !== null && _vm$defaultTemplateOb !== void 0 && _vm$defaultTemplateOb.customListLeftSelected && -1 !== vm.defaultTemplateObjData.customListLeftSelected.findIndex(function (item) {
          return fild.fieldKey === item.fieldKey;
        })) {
          column.fixed = 'left';
        }
        // 需要排序的列
        if ('1' === fild.isSort) {
          column.sortable = 'custom';
        }
        columns.push(column);
      };
      for (var i = 0; i < currentFilds.length; i++) {
        _loop();
      }
      return columns;
    },
    getTemplateList: function getTemplateList() {
      var defaultType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
      var vm = this;
      Object(_config_ports__WEBPACK_IMPORTED_MODULE_4__["getTemplateList"])({
        "templateType": vm.templateType,
        "isDefault": defaultType
      }, {
        clearLoading: true
      }).then(function (ret) {
        if ('1' === defaultType) {
          var _ret$data$listData;
          if ((_ret$data$listData = ret.data.listData) !== null && _ret$data$listData !== void 0 && _ret$data$listData.length) {
            var templateData = JSON.parse(ret.data.listData[0].templateData || '{}');
            vm.$store.commit("material/defaultTemplateData", templateData);
          }
        }
      });
    },
    /**
     * 查询自定义列表
     */
    getCustomList: function getCustomList() {
      var vm = this;
      var parameters = {
        listType: vm.templateType
      };
      if ('1' === vm.placingType && '0' === vm.searchForm.materialType) {
        // 不返回标签维度
        parameters.isKsscPic = '1';
      }
      Object(_config_ports__WEBPACK_IMPORTED_MODULE_4__["getCustomList"])(parameters, {
        clearLoading: true
      }).then(function (ret) {
        var data = ret.data.listData || [];
        // 根据快手素材类型过滤标签
        vm.$store.commit("material/allCustomList", vm.$deepCopy(data));
        vm.customListData = vm.turnCustomListToTree(data);
      });
    },
    /**
     * 将自定义列表数据转换成树形结构数据
     */
    turnCustomListToTree: function turnCustomListToTree(list) {
      var groups = [];
      var _loop2 = function _loop2() {
        var li = list[i];
        if (!li.parentId) {
          li.children = [];
          groups.push(li);
          return "continue";
        }
        var group = groups.find(function (item) {
          return li.parentId === item.fieldId;
        });
        if (group) {
          group.children.push(li);
        }
      };
      for (var i = 0; i < list.length; i++) {
        var _ret = _loop2();
        if (_ret === "continue") continue;
      }
      return groups;
    },
    transformData: function transformData(data) {
      data.forEach(function (item) {
        if (item.materialName === "-100" || item.materialName === "0" || item.materialName === "") item.materialName = "--";
        if (item.shootUserName === "") item.shootUserName = "--";
        if (item.directorUserName === "") item.directorUserName = "--";
        if (item.materialAuthorName === "") item.materialAuthorName = "--";
        if (item.materialSource === "") item.materialSource = "--";
        if (item.materialProvider === "") item.materialProvider = "--";
      });
      return data;
    },
    /**
     * 点击更多维度
     */
    onClickMoreDimension: function onClickMoreDimension() {
      this.$refs.dialogCustomList.open();
    },
    /**
     * 导出报表
     */
    exportToExcel: function exportToExcel() {
      // 导出数据
      var vm = this;
      // 确保有数据时，才导出
      if (vm.dataCount > 0) {
        // 有效列信息
        var columns = vm.columns.filter(function (item) {
          return item.prop;
        });
        var props = columns.map(function (item) {
          return item.prop;
        });
        var labels = columns.map(function (item) {
          return item.label;
        });
        var parameters = vm.$deepCopy(vm.parameters);
        parameters.columnName = props.toString(); //列名
        parameters.columnNameTxt = labels.toString(); //表头

        if (vm.orderParam) {
          parameters.orderParam = vm.orderParam; // 排序字段
          parameters.orderRule = vm.orderRule; // 排序规则
        }

        vm.btnExportLoading = true;
        Object(_config_ports__WEBPACK_IMPORTED_MODULE_4__["exportMaterialReportDataToExcel"])(parameters, {
          clearLoading: true
        }).then(function (ret) {
          if (vm.$refs.dialogSuccess) vm.$refs.dialogSuccess.open();
        }).finally(function (ret) {
          vm.btnExportLoading = false;
        });
      } else {
        vm.$message({
          type: "error",
          message: "无数据，不可导出！"
        });
      }
    },
    /**
     * 切换tab页时，重置表单
     */
    reset: function reset() {
      var vm = this;
      vm.orderRule = "desc"; // 排序规则  desc
      vm.orderParam = "placingDate"; // 排序对象 placingDate
      // 重置模板数据
      vm.$store.commit("material/defaultTemplateData", {});
      // 查询自定义列表
      this.getCustomList();
      // 查询默认模板数据
      this.getTemplateList('1');
    },
    //*********************************************** Event ************************************************* */
    onSortChange: function onSortChange(_ref4) {
      var column = _ref4.column,
        prop = _ref4.prop,
        order = _ref4.order;
      /* 当表格的排序条件发生变化的时候会触发该事件 */
      if (order === "ascending") {
        this.orderRule = "asc";
      } else if (order === "descending") {
        this.orderRule = "desc";
      } else {
        this.orderRule = "";
      }
      this.orderParam = prop;
    },
    onLoaded: function onLoaded(ret) {
      var vm = this;
      this.dataCount = ret.data.objectData.totalCount || 0;
      setTimeout(function () {
        vm.$nextTick(function () {
          var _vm$$refs, _vm$$refs$table;
          var el = (_vm$$refs = vm.$refs) === null || _vm$$refs === void 0 ? void 0 : (_vm$$refs$table = _vm$$refs.table) === null || _vm$$refs$table === void 0 ? void 0 : _vm$$refs$table.$el;
          if (el) {
            var headers = $(el).find('.el-table__header-wrapper');
            var fixedHeaders = $(el).find('.el-table__fixed-header-wrapper');
            vm.targets = [].concat(_toConsumableArray(headers), _toConsumableArray(fixedHeaders));
          }
        });
      }, 200);
    },
    hide: function hide() {
      this.materialInfo = {};
      /* 隐藏弹窗 */
      this.show = false;
    },
    /* 弹窗打开的回调函数 */opened: function opened() {
      /* 隐藏弹窗 */
      // this.show = true;
    },
    onSearch: function onSearch(val) {
      this.searchForm = val;
    }
  },
  beforeCreate: function beforeCreate() {
    var vm = this;
    // 注册store模块
    if (this.$store.hasModule(this.$options.name)) {
      this.$store.unregisterModule(this.$options.name);
    }
    vm.$store.registerModule(vm.$options.name, this.$deepCopy(_config_store__WEBPACK_IMPORTED_MODULE_5__["default"]));
  },
  created: function created() {
    var vm = this;
    // 功能权限列表
    var fourLevelAuthList = this.fourLevelAuth;
    if (fourLevelAuthList.length > 0) {
      // 循环每一条权限数据
      for (var i = 0; i < fourLevelAuthList.length; i++) {
        // 是否有导出权限，若具有导出权限，显示导出按钮
        if (fourLevelAuthList[i]["fourAuthId"] === "A1_4_1_2_2") {
          this.isShowExportBtnFlg = true;
          break;
        }
      }
    }
    // 查询自定义列表
    this.getCustomList();
    // 查询默认模板数据
    this.getTemplateList('1');
  },
  mounted: function mounted() {
    var vm = this;
    vm.$nextTick(function () {
      vm.container = $('.nmg-view')[0];
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "1157")))

/***/ }),

/***/ "5180":
/*!************************************************************!*\
  !*** ./src/views/report/promotion/material/formSearch.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formSearch_vue_vue_type_template_id_5465d1fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formSearch.vue?vue&type=template&id=5465d1fa&scoped=true& */ "51dc");
/* harmony import */ var _formSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formSearch.vue?vue&type=script&lang=js& */ "32c8");
/* empty/unused harmony star reexport *//* harmony import */ var _formSearch_vue_vue_type_style_index_0_id_5465d1fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formSearch.vue?vue&type=style&index=0&id=5465d1fa&prod&lang=scss&scoped=true& */ "5b3b");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "0c7c");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _formSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formSearch_vue_vue_type_template_id_5465d1fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formSearch_vue_vue_type_template_id_5465d1fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5465d1fa",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "51dc":
/*!*******************************************************************************************************!*\
  !*** ./src/views/report/promotion/material/formSearch.vue?vue&type=template&id=5465d1fa&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_formSearch_vue_vue_type_template_id_5465d1fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./formSearch.vue?vue&type=template&id=5465d1fa&scoped=true& */ "1306");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_formSearch_vue_vue_type_template_id_5465d1fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_formSearch_vue_vue_type_template_id_5465d1fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "5b3b":
/*!***************************************************************************************************************************!*\
  !*** ./src/views/report/promotion/material/formSearch.vue?vue&type=style&index=0&id=5465d1fa&prod&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_formSearch_vue_vue_type_style_index_0_id_5465d1fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./formSearch.vue?vue&type=style&index=0&id=5465d1fa&prod&lang=scss&scoped=true& */ "a52b");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_formSearch_vue_vue_type_style_index_0_id_5465d1fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_formSearch_vue_vue_type_style_index_0_id_5465d1fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_formSearch_vue_vue_type_style_index_0_id_5465d1fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_formSearch_vue_vue_type_style_index_0_id_5465d1fa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "6b06":
/*!*************************************************************************************************************!*\
  !*** ./src/views/report/promotion/material/material.vue?vue&type=style&index=3&id=6ae5e4da&prod&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_3_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./material.vue?vue&type=style&index=3&id=6ae5e4da&prod&lang=scss& */ "7ae0");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_3_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_3_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_3_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_3_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "7248":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/material.vue?vue&type=style&index=2&id=6ae5e4da&prod&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7aac5":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/formSearch.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_ports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/ports */ "e07c");
/* harmony import */ var _config_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/data.js */ "3b32");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "2f62");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // 搜索表单
      searchForm: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["searchForm"]),
      defaultForm: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["searchForm"]),
      // 地址栏携带的信息
      info: JSON.parse(this.$route.query.info || "{}"),
      currentActive: '',
      selectTitle: '',
      selectData: {
        strList: [],
        objList: []
      },
      selectUrl: '',
      selectParam: {},
      selectResultAttr: 'data.objData.list',
      dateRangeList: [this.$date2String(new Date(), 'yyyy-MM-dd'), this.$date2String(new Date(), 'yyyy-MM-dd')],
      // 自定义时间范围
      NAMESPACE: 'report/promotion/material',
      // 当前命名空间
      pickerOptions: {
        // 当前时间日期选择器特有的选项详细 参数信息请参考elementUI官网日期选择器部分
        disabledDate: function disabledDate(time) {
          return time.getTime() > new Date(Date.now() - 1000 * 60 * 60 * 24);
        }
      },
      userInfoList: [],
      // 设计人员列表信息
      // 行业备选项
      industryIdOptions: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])({
    // 媒体类型
    placingType: function placingType(state) {
      return state.material.placingType;
    }
  })),
  watch: {
    placingType: {
      handler: function handler() {
        this.reset();
      }
    }
  },
  methods: {
    // *********************************** METHODS ***********************************
    selectIndustryList: function selectIndustryList() {
      var vm = this;
      var p = Object(_config_ports__WEBPACK_IMPORTED_MODULE_0__["selectIndustryList"])({
        placingType: vm.placingType
      }, {
        clearLoading: true
      });
      p.then(function (ret) {
        vm.industryIdOptions = ret.data.listData || [];
      });
      return p;
    },
    reset: function reset() {
      var vm = this;
      vm.$refs['form'].reset();
      vm.onSearch();
      vm.selectIndustryList();
    },
    // *********************************** EVENT ***********************************
    onSearch: function onSearch() {
      var vm = this;
      vm.$emit('search', vm.$deepCopy(vm.searchForm));
    },
    onMaterialTypeChange: function onMaterialTypeChange(val) {
      // 素材类型为图片时，没有素造
      // 重置渠道
      if ('0' === val && '1' === this.searchForm.materialSource) {
        this.searchForm.materialSource = '';
      }
    }
  },
  created: function created() {
    var vm = this;
    var _vm$info = vm.info,
      dateRangeList = _vm$info.dateRangeList,
      productInfo = _vm$info.productInfo,
      ppTags = _vm$info.ppTags,
      industryId = _vm$info.industryId;
    var searchForm = {};
    if (dateRangeList) {
      searchForm.dateRangeList = dateRangeList.split(',');
    }
    if (productInfo) {
      searchForm.productInfo = productInfo;
    }
    if (ppTags) {
      searchForm.ppTags = ppTags;
    }
    if (industryId) {
      searchForm.industryId = industryId.split(',');
    }
    vm.searchForm = Object.assign({}, vm.searchForm, searchForm);
    vm.onSearch();
  },
  mounted: function mounted() {
    this.selectIndustryList();
  }
});

/***/ }),

/***/ "7ae0":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/material.vue?vue&type=style&index=3&id=6ae5e4da&prod&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7df3":
/*!***************************************************************************************************************************!*\
  !*** ./src/views/report/promotion/material/material.vue?vue&type=style&index=1&id=6ae5e4da&prod&lang=scss&scoped=scoped& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_1_id_6ae5e4da_prod_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./material.vue?vue&type=style&index=1&id=6ae5e4da&prod&lang=scss&scoped=scoped& */ "3381");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_1_id_6ae5e4da_prod_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_1_id_6ae5e4da_prod_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_1_id_6ae5e4da_prod_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_1_id_6ae5e4da_prod_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "8012":
/*!*************************************************************!*\
  !*** ./src/views/report/promotion/material/config/store.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* 效果报表 */
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  // 命名空间
  state: {
    placingType: '1',
    // 媒体类型
    /* 搜索条件 */
    searchForm: {
      dateRangeList: [],
      // 时间范围
      placingType: '1',
      //媒体（投放类型）默认：快手
      materialType: '0',
      // 素材类型（0：图片；1：视频）
      materialName: '',
      // 素材名称
      shootUserIdList: [] // 拍摄人员/编导人员/后期人员Id集合
    },

    dialog: null,
    // 显示的弹窗组件
    check: null,
    // 查看的信息
    state: '',
    // 查看的信息
    currentPage: 1,
    /* 页码 */
    pageSize: 10,
    /* 每页显示条目个数 */
    orderRule: 'desc',
    /* 排序规则 */
    orderParam: 'placingDate',
    /*排序列 */
    formOrder: {
      /*排序列（新） */
      orderRule: 'desc',
      /* 排序规则 */
      orderParam: 'placingDate' /*排序列 */
    },

    query: {},
    // 默认模板数据
    defaultTemplateData: {},
    // 全部的自定义列数据
    allCustomList: []
  },
  getters: {
    defaultTemplateObjData: function defaultTemplateObjData(state, getters) {
      var templateData = Object.assign({}, state.defaultTemplateData);
      if ('{}' !== JSON.stringify(state.defaultTemplateData)) {
        if (templateData.customListSelected) {
          templateData.customListSelected = state.allCustomList.filter(function (item) {
            return -1 !== templateData.customListSelected.indexOf(item.fieldId);
          }).sort(function (item, item2) {
            return templateData.customListSelected.indexOf(item.fieldId) - templateData.customListSelected.indexOf(item2.fieldId);
          });
        }
        if (templateData.customListLeftSelected) {
          templateData.customListLeftSelected = state.allCustomList.filter(function (item) {
            return -1 !== templateData.customListLeftSelected.indexOf(item.fieldId);
          }).sort(function (item, item2) {
            return templateData.customListLeftSelected.indexOf(item.fieldId) - templateData.customListLeftSelected.indexOf(item2.fieldId);
          });
        }
        if (templateData.customListCenterSelected) {
          templateData.customListCenterSelected = state.allCustomList.filter(function (item) {
            return -1 !== templateData.customListCenterSelected.indexOf(item.fieldId);
          }).sort(function (item, item2) {
            return templateData.customListCenterSelected.indexOf(item.fieldId) - templateData.customListCenterSelected.indexOf(item2.fieldId);
          });
        }
      } else {
        // 设置默认的选中模板数据
        var customListSelected = state.allCustomList.filter(function (item) {
          return item.parentId && '1' === item.isDefault;
        });
        templateData = {
          customListSelected: customListSelected.slice(),
          customListLeftSelected: [],
          customListCenterSelected: []
        };
        while (customListSelected.length && templateData.customListLeftSelected.length < 4) {
          templateData.customListLeftSelected.push(customListSelected.shift());
        }
        while (customListSelected.length) {
          templateData.customListCenterSelected.push(customListSelected.shift());
        }
      }
      return templateData;
    }
  },
  mutations: {
    placingType: function placingType(state, data) {
      state.placingType = data;
    },
    searchForm: function searchForm(state, info) {
      state.searchForm = Object.assign({}, state.searchForm, info);
    },
    check: function check(state, data) {
      state.check = data;
    },
    dialog: function dialog(state, data) {
      state.dialog = data;
    },
    state: function state(_state, data) {
      _state.state = data;
    },
    changeCurrentPage: function changeCurrentPage(state, info) {
      /* 改变页码 */
      state.currentPage = info;
    },
    changePageSize: function changePageSize(state, info) {
      /* 改变每页显示条目个数 */
      state.pageSize = info;
    },
    changeSort: function changeSort(state, info) {
      /* 排序规则 */
      state.orderRule = info;
    },
    changeSortObject: function changeSortObject(state, info) {
      /* 排序列 */
      state.orderParam = info;
    },
    changeFormOrder: function changeFormOrder(state, info) {
      /* 排序列（新） */
      var d = {
        orderRule: info.sortOrder,
        orderParam: info.sortObject
      };
      var data = Object.assign({}, state.formOrder, d);
      state.formOrder = data;
    },
    query: function query(state, info) {
      state.query = info;
    },
    defaultTemplateData: function defaultTemplateData(state, data) {
      state.defaultTemplateData = data;
    },
    allCustomList: function allCustomList(state, data) {
      state.allCustomList = data;
    }
  },
  actions: {}
});

/***/ }),

/***/ "89cc":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/material.vue?vue&type=style&index=0&id=6ae5e4da&prod&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "909e":
/*!******************************************************************!*\
  !*** ./src/views/report/promotion/material/dialogCustomList.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialogCustomList_vue_vue_type_template_id_3dc4310c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogCustomList.vue?vue&type=template&id=3dc4310c& */ "eb54");
/* harmony import */ var _dialogCustomList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogCustomList.vue?vue&type=script&lang=js& */ "b6ac");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "0c7c");





/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dialogCustomList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dialogCustomList_vue_vue_type_template_id_3dc4310c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dialogCustomList_vue_vue_type_template_id_3dc4310c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "a52b":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/formSearch.vue?vue&type=style&index=0&id=5465d1fa&prod&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a76a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/dialogCustomList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/data */ "3b32");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "2f62");
/* harmony import */ var _config_ports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/ports */ "e07c");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    // 模板类型（ksxg：快手效果，kssc：快手素材，ttxg：头条效果，ttsc：头条素材）
    templateType: String,
    // 自定义列表数据
    customListData: Array
  },
  data: function data() {
    return {
      visible: false,
      form: this.$deepCopy(_config_data__WEBPACK_IMPORTED_MODULE_0__["templateForm"]),
      rules: this.$deepCopy(_config_data__WEBPACK_IMPORTED_MODULE_0__["templateRules"]),
      // 左侧固定列最多支持4个选中数据
      leftMax: 4,
      // 模板列表
      templateList: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    // 全部的自定義列表列
    allCustomList: function allCustomList(state) {
      return state.material.allCustomList;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    defaultTemplateObjData: 'material/defaultTemplateObjData'
  })),
  watch: {
    'form.isSaveTemplate': {
      handler: function handler(newVal) {
        if (newVal) {
          this.rules.templateName = [{
            required: true,
            message: '请输入常用模板名称',
            trigger: 'blur'
          }, {
            max: 30,
            message: '不超过30个字符',
            trigger: 'blur'
          }];
        } else {
          this.rules.templateName = [];
        }
      }
    },
    'form.customListLeftSelected': {
      handler: function handler(newVal) {
        this.form.customListSelected = [].concat(_toConsumableArray(this.form.customListLeftSelected), _toConsumableArray(this.form.customListCenterSelected));
      }
    },
    'form.customListCenterSelected': {
      handler: function handler(newVal) {
        this.form.customListSelected = [].concat(_toConsumableArray(this.form.customListLeftSelected), _toConsumableArray(this.form.customListCenterSelected));
      }
    }
  },
  methods: {
    // ****************************************** METHODS ******************************************
    getTemplateList: function getTemplateList() {
      var defaultType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
      var vm = this;
      Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["getTemplateList"])({
        "templateType": vm.templateType,
        "isDefault": defaultType
      }, {
        clearLoading: true
      }).then(function (ret) {
        if ('0' === defaultType) {
          vm.templateList = ret.data.listData.map(function (item) {
            var templateData = JSON.parse(item.templateData || '{}');
            if (templateData.customListSelected) {
              templateData.customListSelected = vm.allCustomList.filter(function (item) {
                return -1 !== templateData.customListSelected.indexOf(item.fieldId);
              }).sort(function (item, item2) {
                return templateData.customListSelected.indexOf(item.fieldId) - templateData.customListSelected.indexOf(item2.fieldId);
              });
            }
            if (templateData.customListLeftSelected) {
              templateData.customListLeftSelected = vm.allCustomList.filter(function (item) {
                return -1 !== templateData.customListLeftSelected.indexOf(item.fieldId);
              }).sort(function (item, item2) {
                return templateData.customListLeftSelected.indexOf(item.fieldId) - templateData.customListLeftSelected.indexOf(item2.fieldId);
              });
            }
            if (templateData.customListCenterSelected) {
              templateData.customListCenterSelected = vm.allCustomList.filter(function (item) {
                return -1 !== templateData.customListCenterSelected.indexOf(item.fieldId);
              }).sort(function (item, item2) {
                return templateData.customListCenterSelected.indexOf(item.fieldId) - templateData.customListCenterSelected.indexOf(item2.fieldId);
              });
            }
            return {
              templateData: templateData,
              templateId: item.templateId,
              templateName: item.templateName
            };
          }) || [];
        } else if ('1' === defaultType) {
          var _ret$data$listData;
          if ((_ret$data$listData = ret.data.listData) !== null && _ret$data$listData !== void 0 && _ret$data$listData.length) {
            var templateData = JSON.parse(ret.data.listData[0].templateData || '{}');
            vm.$store.commit("material/defaultTemplateData", templateData);
          }
        }
      });
    },
    open: function open() {
      this.visible = true;
    },
    // ****************************************** EVENT ******************************************
    onOpen: function onOpen() {
      var vm = this;

      // 赋值默认模板数据
      vm.form.customListSelected = vm.$deepCopy(vm.defaultTemplateObjData.customListSelected) || [];
      vm.form.customListLeftSelected = vm.$deepCopy(vm.defaultTemplateObjData.customListLeftSelected) || [];
      vm.form.customListCenterSelected = vm.$deepCopy(vm.defaultTemplateObjData.customListCenterSelected) || [];
      console.log('vm.form.customListCenterSelected', vm.form.customListCenterSelected);
      // 查询模板列表
      vm.getTemplateList();
      vm.$nextTick(function () {
        vm.$refs.form.clearValidate();
      });
    },
    onClose: function onClose() {
      this.visible = false;
      this.form = this.$deepCopy(_config_data__WEBPACK_IMPORTED_MODULE_0__["templateForm"]);
      this.rules = this.$deepCopy(_config_data__WEBPACK_IMPORTED_MODULE_0__["templateRules"]);
      this.templateList = [];
      Object.assign(this.$data, this.$options.data.call(this));
      this.$refs.form.clearValidate();
    },
    onSubmit: function onSubmit() {},
    /**
     * 保存模板数据
     */
    onClickSaveTemplate: function onClickSaveTemplate() {
      var defaultType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
      var vm = this;
      var fields = ['customListSelected'];
      if ('0' === defaultType) {
        fields.push('templateName');
      }
      var allErrorMessage = '';
      vm.$refs.form.clearValidate();
      vm.$refs.form.validateField(fields, function (errorMessage) {
        allErrorMessage += errorMessage;
        fields.shift();
        if (!allErrorMessage && !fields.length) {
          var params = {
            "templateType": vm.templateType,
            "templateData": JSON.stringify({
              // 选中的数据
              customListSelected: vm.form.customListSelected.map(function (item) {
                return item.fieldId;
              }),
              // 左侧固定列选中
              customListLeftSelected: vm.form.customListLeftSelected.map(function (item) {
                return item.fieldId;
              }),
              // 中间不固定列选中
              customListCenterSelected: vm.form.customListCenterSelected.map(function (item) {
                return item.fieldId;
              })
            }),
            "isDefault": defaultType
          };
          if ('0' === defaultType) {
            params.templateName = vm.form.templateName;
          }

          // 保存模板
          Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["saveTemplate"])(params, {
            clearLoading: true
          }).then(function (ret) {
            if ('0' === defaultType) {
              vm.$message({
                message: '模板保存成功！',
                type: 'success'
              });
              // 重新查询模板列表
              vm.getTemplateList();
            } else {
              // 保存默认模板，需要更新默认模板数据
              vm.visible = false;
              // 更新默认模板信息
              vm.getTemplateList('1');
            }
          });
        }
      });
    },
    onAllChange: function onAllChange(val) {
      var vm = this;
    },
    onLeftChange: function onLeftChange(val) {
      this.form.customListLeftSelected = val;
    },
    onCenterChange: function onCenterChange(val) {
      this.form.customListCenterSelected = val;
    },
    /**
     * 变更模板数据
     */
    onChangeTemplate: function onChangeTemplate(template, deleteVal, index) {
      var vm = this;
      Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["delTemplate"])({
        templateId: deleteVal[0].templateId
      }, {
        clearLoading: true
      }).then(function (ret) {
        vm.$message({
          message: '模板删除成功！',
          type: 'success'
        });
        // 重新查询模板列表
        vm.getTemplateList();
      });
    },
    /**
     * 点击保存
     */
    onClickSave: function onClickSave() {
      this.onClickSaveTemplate('1');
    }
  }
});

/***/ }),

/***/ "a86e":
/*!*****************************************************************************************************!*\
  !*** ./src/views/report/promotion/material/material.vue?vue&type=template&id=6ae5e4da&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_template_id_6ae5e4da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./material.vue?vue&type=template&id=6ae5e4da&scoped=true& */ "07fb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_template_id_6ae5e4da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_template_id_6ae5e4da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "b496":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/dialogSuccess.vue?vue&type=template&id=f928b988& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-dialog', {
    attrs: {
      "title": "导出成功",
      "width": "500px",
      "visible": _vm.show,
      "center": "",
      "close-on-click-modal": false,
      "append-to-body": ""
    },
    on: {
      "close": _vm.hide
    }
  }, [_c('el-alert', {
    attrs: {
      "title": "请至下载中心处查看进度",
      "type": "error"
    }
  }), _c('img', {
    staticStyle: {
      "display": "block",
      "margin": "auto",
      "margin-top": "25px",
      "margin-bottom": "25px"
    },
    attrs: {
      "src": __webpack_require__(/*! ../../../../assets/images/task-success.png */ "c596"),
      "alt": ""
    }
  }), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "round": "",
      "type": "primary"
    },
    on: {
      "click": function click($event) {
        return _vm.skipTo('system/systemic/downloadCenter');
      }
    }
  }, [_vm._v("跳转至下载中心")])], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "b623":
/*!***************************************************************!*\
  !*** ./src/views/report/promotion/material/dialogSuccess.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialogSuccess_vue_vue_type_template_id_f928b988___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogSuccess.vue?vue&type=template&id=f928b988& */ "4c73");
/* harmony import */ var _dialogSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogSuccess.vue?vue&type=script&lang=js& */ "d9bc");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "0c7c");





/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dialogSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dialogSuccess_vue_vue_type_template_id_f928b988___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dialogSuccess_vue_vue_type_template_id_f928b988___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b6ac":
/*!*******************************************************************************************!*\
  !*** ./src/views/report/promotion/material/dialogCustomList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogCustomList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./dialogCustomList.vue?vue&type=script&lang=js& */ "a76a");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogCustomList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "c596":
/*!********************************************!*\
  !*** ./src/assets/images/task-success.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/task-success.61ba5dab.png";

/***/ }),

/***/ "d9bc":
/*!****************************************************************************************!*\
  !*** ./src/views/report/promotion/material/dialogSuccess.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./dialogSuccess.vue?vue&type=script&lang=js& */ "f8b0");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "da57":
/*!*************************************************************************************************************!*\
  !*** ./src/views/report/promotion/material/material.vue?vue&type=style&index=0&id=6ae5e4da&prod&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_0_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./material.vue?vue&type=style&index=0&id=6ae5e4da&prod&lang=scss& */ "89cc");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_0_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_0_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_0_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_material_vue_vue_type_style_index_0_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "e07c":
/*!*************************************************************!*\
  !*** ./src/views/report/promotion/material/config/ports.js ***!
  \*************************************************************/
/*! exports provided: searchMaterialReportList, exportMaterialReportDataToExcel, searchMaterialDetailInfo, getCustomList, getTemplateList, saveTemplate, delTemplate, selectIndustryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMaterialReportList", function() { return searchMaterialReportList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportMaterialReportDataToExcel", function() { return exportMaterialReportDataToExcel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMaterialDetailInfo", function() { return searchMaterialDetailInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomList", function() { return getCustomList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateList", function() { return getTemplateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTemplate", function() { return saveTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delTemplate", function() { return delTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIndustryList", function() { return selectIndustryList; });
/* harmony import */ var _request_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/request/request */ "3b11");


/* 素材报表——查询素材报表列表 */
var searchMaterialReportList = function searchMaterialReportList() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/statistics/ad/platform/statistics/material/get/MaterialReportList'].concat(params));
};
/* 素材报表——导出素材报表数据到Excel */
var exportMaterialReportDataToExcel = function exportMaterialReportDataToExcel() {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/statistics/ad/platform/statistics/material/export/MaterialReportDataToExcel'].concat(params));
};
/* 素材报表——查询素材路径*/
var searchMaterialDetailInfo = function searchMaterialDetailInfo() {
  for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/statistics/ad/platform/statistics/material/get/MaterialDetailInfo'].concat(params));
};

// 查询自定义列表
var getCustomList = function getCustomList() {
  for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    params[_key4] = arguments[_key4];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/statistics/ad/platform/statistics/list/getCustomList'].concat(params));
};
// 查询模板列表
var getTemplateList = function getTemplateList() {
  for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    params[_key5] = arguments[_key5];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/statistics/ad/platform/statistics/template/getTemplateList'].concat(params));
};
// 保存模板
var saveTemplate = function saveTemplate() {
  for (var _len6 = arguments.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    params[_key6] = arguments[_key6];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/statistics/ad/platform/statistics/template/saveTemplate'].concat(params));
};
// 删除模板
var delTemplate = function delTemplate() {
  for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    params[_key7] = arguments[_key7];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/statistics/ad/platform/statistics/template/delTemplate'].concat(params));
};

// 【推广报表------标签报表】行业级联下拉列表
var selectIndustryList = function selectIndustryList() {
  for (var _len8 = arguments.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    params[_key8] = arguments[_key8];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/statistics/ad/platform/statistics/common/selectIndustryList'].concat(params));
};

/***/ }),

/***/ "e302":
/*!**********************************************************!*\
  !*** ./src/views/report/promotion/material/material.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_vue_vue_type_template_id_6ae5e4da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.vue?vue&type=template&id=6ae5e4da&scoped=true& */ "a86e");
/* harmony import */ var _material_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.vue?vue&type=script&lang=js& */ "33b7");
/* empty/unused harmony star reexport *//* harmony import */ var _material_vue_vue_type_style_index_0_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.vue?vue&type=style&index=0&id=6ae5e4da&prod&lang=scss& */ "da57");
/* harmony import */ var _material_vue_vue_type_style_index_1_id_6ae5e4da_prod_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.vue?vue&type=style&index=1&id=6ae5e4da&prod&lang=scss&scoped=scoped& */ "7df3");
/* harmony import */ var _material_vue_vue_type_style_index_2_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.vue?vue&type=style&index=2&id=6ae5e4da&prod&lang=scss& */ "251d");
/* harmony import */ var _material_vue_vue_type_style_index_3_id_6ae5e4da_prod_lang_scss___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.vue?vue&type=style&index=3&id=6ae5e4da&prod&lang=scss& */ "6b06");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "0c7c");









/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
  _material_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _material_vue_vue_type_template_id_6ae5e4da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _material_vue_vue_type_template_id_6ae5e4da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6ae5e4da",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "eb54":
/*!*************************************************************************************************!*\
  !*** ./src/views/report/promotion/material/dialogCustomList.vue?vue&type=template&id=3dc4310c& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogCustomList_vue_vue_type_template_id_3dc4310c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./dialogCustomList.vue?vue&type=template&id=3dc4310c& */ "3949");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogCustomList_vue_vue_type_template_id_3dc4310c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogCustomList_vue_vue_type_template_id_3dc4310c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "f8b0":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/report/promotion/material/dialogSuccess.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    /**
     * public
     */
    open: function open() {
      this.show = true;
    },
    skipTo: function skipTo(path) {
      this.$open("/FrameWork/" + path);
    },
    hide: function hide() {
      this.show = false;
    }
  }
});

/***/ })

}]);
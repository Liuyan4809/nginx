(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-49be7dad"],{

/***/ "24d5":
/*!**************************************************************************************!*\
  !*** ./src/views/system/auxiliary/daily/dialogTemplate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./dialogTemplate.vue?vue&type=script&lang=js& */ "c185");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "351b":
/*!**********************************************************!*\
  !*** ./src/views/system/auxiliary/daily/config/ports.js ***!
  \**********************************************************/
/*! exports provided: SaveOption, SearchReportTemplate, SearchAdvertiserListByPlacingType, SearchOption, listMediaName, SaveReportTemplate, UpdateReportTemplate, DeleteReportTemplate, DeleteOption, DetailReportTemplate, SearchActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveOption", function() { return SaveOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchReportTemplate", function() { return SearchReportTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAdvertiserListByPlacingType", function() { return SearchAdvertiserListByPlacingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOption", function() { return SearchOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listMediaName", function() { return listMediaName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveReportTemplate", function() { return SaveReportTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReportTemplate", function() { return UpdateReportTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteReportTemplate", function() { return DeleteReportTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteOption", function() { return DeleteOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailReportTemplate", function() { return DetailReportTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchActive", function() { return SearchActive; });
/* harmony import */ var _request_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/request/request */ "3b11");


/* 保存常用选项列表 */
var SaveOption = function SaveOption() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/platformTools/platformTools/option/save'].concat(params));
};
/* 查询模板列表 */
var SearchReportTemplate = function SearchReportTemplate() {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/platformTools/platformTools/report/searchReportTemplate'].concat(params));
};
/* 效果报表——根据媒体类型，查询投放账户信息 */
var SearchAdvertiserListByPlacingType = function SearchAdvertiserListByPlacingType() {
  for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/platformTools/platformTools/report/searchAdvertiserListByPlacingType'].concat(params));
};
/* 查询常用选项列表 */
var SearchOption = function SearchOption() {
  for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    params[_key4] = arguments[_key4];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/platformTools/platformTools/option/search'].concat(params));
};
/*媒体名称列表 */
var listMediaName = function listMediaName() {
  for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    params[_key5] = arguments[_key5];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/out/outside/placingAcc/listMediaName'].concat(params));
};
/* 保存模板列表 */
var SaveReportTemplate = function SaveReportTemplate() {
  for (var _len6 = arguments.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    params[_key6] = arguments[_key6];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/platformTools/platformTools/report/save'].concat(params));
};
/* 编辑模板详情 */
var UpdateReportTemplate = function UpdateReportTemplate() {
  for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    params[_key7] = arguments[_key7];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/platformTools/platformTools/report/update'].concat(params));
};
/* 删除模板列表 */
var DeleteReportTemplate = function DeleteReportTemplate() {
  for (var _len8 = arguments.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    params[_key8] = arguments[_key8];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/platformTools/platformTools/report/delete'].concat(params));
};
/* 删除常用选项列表 */
var DeleteOption = function DeleteOption() {
  for (var _len9 = arguments.length, params = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    params[_key9] = arguments[_key9];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/platformTools/platformTools/option/delete'].concat(params));
};
/* 查询模板详情 */
var DetailReportTemplate = function DetailReportTemplate() {
  for (var _len10 = arguments.length, params = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    params[_key10] = arguments[_key10];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/platformTools/platformTools/report/detail'].concat(params));
};
/* 查询是否活跃账户 */
var SearchActive = function SearchActive() {
  for (var _len11 = arguments.length, params = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    params[_key11] = arguments[_key11];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ['/report/effect/seachAccountStatus'].concat(params));
};

/***/ }),

/***/ "3f22":
/*!****************************************************************************************************************!*\
  !*** ./src/views/system/auxiliary/daily/dialogTemplate.vue?vue&type=style&index=0&id=da0cd3b0&prod&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogTemplate_vue_vue_type_style_index_0_id_da0cd3b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./dialogTemplate.vue?vue&type=style&index=0&id=da0cd3b0&prod&lang=scss& */ "6613");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogTemplate_vue_vue_type_style_index_0_id_da0cd3b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogTemplate_vue_vue_type_style_index_0_id_da0cd3b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogTemplate_vue_vue_type_style_index_0_id_da0cd3b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogTemplate_vue_vue_type_style_index_0_id_da0cd3b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "5787":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/system/auxiliary/daily/tableList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _dialogTemplate_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogTemplate.vue */ "e4de");
/* harmony import */ var _config_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/data */ "e324");
/* harmony import */ var _config_ports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/ports */ "351b");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// 模板弹窗



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "dialog-template": _dialogTemplate_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      total: 0 /* 总条目数 */,
      pageSize: 30 /* 每页显示条目个数 */,
      currentPage: 1 /* 当前页 */,
      pageSizes: [30, 40, 50] /*, 每页显示个数选择器的选项设置 */,
      tableData: [],
      // 表格数据
      searchForm: {},
      // 表单查询
      fourLevelAuth: this.$store.state.currentUser.loginUserInfo.fourLevelAuthList /* 四级菜单*/,
      isShowListBtnFlg: false,
      isShowAddBtnFlg: false,
      isShowEditBtnFlg: false,
      isShowDeleteBtnFlg: false,
      // 主表格的列参数
      columns: _config_data__WEBPACK_IMPORTED_MODULE_1__["columns"],
      targets: [],
      container: null
    };
  },
  watch: {
    // 监听表单查询检索事件
    searchForm: function searchForm(newFlag, oldFlag) {
      this.sizeChange(this.pageSize);
    }
  },
  mounted: function mounted() {
    var vm = this;
    this.enterKeypress();
    // 功能权限列表
    var fourLevelAuthList = this.fourLevelAuth;
    if (fourLevelAuthList.length > 0) {
      // 循环每一条权限数据
      for (var i = 0; i < fourLevelAuthList.length; i++) {
        if (fourLevelAuthList[i]["fourAuthId"] === "A1_6_1_1_1") {
          this.isShowListBtnFlg = true;
        }
        if (fourLevelAuthList[i]["fourAuthId"] === "A1_6_1_1_2") {
          this.isShowAddBtnFlg = true;
        }
        if (fourLevelAuthList[i]["fourAuthId"] === "A1_6_1_1_3") {
          this.isShowEditBtnFlg = true;
        }
        if (fourLevelAuthList[i]["fourAuthId"] === "A1_6_1_1_4") {
          this.isShowDeleteBtnFlg = true;
        }
      }
    }
    vm.$nextTick(function () {
      vm.container = $('.nmg-view')[0];
    });
  },
  destroyed: function destroyed() {
    this.enterKeypressDestroyed();
  },
  methods: {
    /**监听回车阻止默认事件 */enterKeypressDestroyed: function enterKeypressDestroyed() {
      document.removeEventListener("keypress", this.enterKey);
    },
    enterKeypress: function enterKeypress() {
      document.addEventListener("keypress", this.enterKey);
    },
    enterKey: function enterKey(evt) {
      var charCode = evt.charCode;
      if (charCode == 13) {
        evt.preventDefault();
      }
    },
    /**
     * 新建
     */
    add: function add() {
      var vm = this;
      vm.$nextTick(function () {
        vm.$refs.dialogTemplate.show();
      });
    },
    /**
     * 编辑
     */
    edit: function edit(row) {
      var vm = this;
      vm.$nextTick(function () {
        vm.$refs.dialogTemplate.show("edit", row);
      });
    },
    /**
     * 删除
     */
    remove: function remove(row) {
      var vm = this;
      var page = vm.currentPage;
      vm.$confirm("是否确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
        // closeOnPressEscape: false,
        // beforeClose: (action, instance, done) => {
        //   if (action === "confirm") {
        //     instance.$refs["confirm"].$el.onclick = function (e) {
        //       e = e || window.event;
        //       if (e.detail !== 0) {
        //         done();
        //       }
        //     };
        //   } else {
        //     done();
        //   }
        // },
      }).then(function () {
        Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["DeleteReportTemplate"])(row).then(function (res) {
          // 成功提示
          vm.$message({
            type: "success",
            message: "删除成功!"
          });
          vm.getTableData().then(function (result) {
            console.log(result);
            vm.tableData = result.data.objectData.records;
            vm.total = result.data.objectData.dataCount;
            if (result.data.objectData.records.length == 0) {
              vm.currentChange(parseInt(page - 1));
            }
          });
        });
      }).catch(function () {});
    },
    /**
     * 翻页
     * @param {Number} current 当前页索引
     */
    currentChange: function currentChange(current) {
      var vm = this;
      vm.currentPage = current;
      vm.getTableData().then(function (result) {
        vm.tableData = result.data.objectData.records;
        vm.total = result.data.objectData.dataCount;
      });
    },
    /**
     * 更改页容量
     * @param {Number} size 页容量
     */
    sizeChange: function sizeChange(size) {
      var vm = this;
      vm.currentPage = 1;
      vm.pageSize = size;
      vm.getTableData().then(function (result) {
        console.info(result.data);
        vm.tableData = result.data.objectData.records;
        vm.total = result.data.objectData.dataCount;
        vm.onRendered();
      });
    },
    /**
     * 获取表格数据
     */
    getTableData: function getTableData() {
      var vm = this;
      return new Promise(function (resolve) {
        Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["SearchReportTemplate"])({
          templateName: vm.searchForm.templateName,
          // 模板名称
          startDate: vm.searchForm.dateRangeList[0],
          // 开始时间
          endDate: vm.searchForm.dateRangeList[1],
          // 结束时间
          pageSize: vm.pageSize,
          // 每页展示的条数
          pageNumber: vm.currentPage // 页码
        }).then(function (res) {
          return resolve(res);
        });
      });
    },
    /**
     * 新建或者编辑成功回调
     */
    onSuccess: function onSuccess() {
      this.sizeChange(this.pageSize);
    },
    onRendered: function onRendered() {
      var vm = this;
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
    /**
     * Publish 公开接口
     * 条件查询表格数据
     */
    search: function search(newVal) {
      this.searchForm = this.$deepCopy(newVal);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "1157")))

/***/ }),

/***/ "6613":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/system/auxiliary/daily/dialogTemplate.vue?vue&type=style&index=0&id=da0cd3b0&prod&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8fff":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/system/auxiliary/daily/dialogTemplate.vue?vue&type=template&id=da0cd3b0& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "report__operate__daily__dialog-template",
    attrs: {
      "title": _vm.title,
      "visible": _vm.visible,
      "width": "80%",
      "z-index": "1000",
      "center": "",
      "close-on-click-modal": false
    },
    on: {
      "close": _vm.hide,
      "open": _vm.onOpen
    }
  }, [_c('el-form', {
    ref: "form",
    staticClass: "commonForm validateForm is-plain",
    attrs: {
      "model": _vm.form,
      "rules": _vm.rules,
      "disabled": 'detail' === _vm.state,
      "label-width": "100px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "模板名称",
      "prop": "templateName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入模板名称"
    },
    model: {
      value: _vm.form.templateName,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "templateName", $$v);
      },
      expression: "form.templateName"
    }
  })], 1)], 1), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "媒体",
      "prop": "mediaType"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择媒体"
    },
    on: {
      "change": _vm.changeMediaType
    },
    model: {
      value: _vm.form.mediaType,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "mediaType", $$v);
      },
      expression: "form.mediaType"
    }
  }, _vm._l(_vm.mediaOptions, function (item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.mediaName,
        "value": item.value
      }
    });
  }), 1)], 1)], 1), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "类型",
      "prop": "templateType"
    }
  }, [_c('nmg-select', {
    attrs: {
      "placeholder": "请选择类型"
    },
    on: {
      "change": _vm.changeTemplateType
    },
    model: {
      value: _vm.form.templateType,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "templateType", $$v);
      },
      expression: "form.templateType"
    }
  }, _vm._l(_vm.templateTypeOptions, function (item) {
    return _c('nmg-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1)], 1)], 1)], 1), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "颗粒度",
      "prop": "dimension"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择颗粒度"
    },
    model: {
      value: _vm.form.dimension,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dimension", $$v);
      },
      expression: "form.dimension"
    }
  }, _vm._l(_vm.dimensionOptions[_vm.form.mediaType], function (item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1)], 1)], 1), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "数据透视",
      "prop": "reportDims"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择数据透视"
    },
    model: {
      value: _vm.form.reportDims,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "reportDims", $$v);
      },
      expression: "form.reportDims"
    }
  }, _vm._l(_vm.reportDimsOptions, function (item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1)], 1)], 1), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "汇总方式",
      "prop": "temporalGranularity"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择汇总方式",
      "disabled": _vm.isDisabled
    },
    on: {
      "change": _vm.changeTemporalGranularity
    },
    model: {
      value: _vm.form.temporalGranularity,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "temporalGranularity", $$v);
      },
      expression: "form.temporalGranularity"
    }
  }, _vm._l(_vm.temporalGranularityOptions, function (item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1)], 1)], 1)], 1), _c('el-form-item', {
    attrs: {
      "label": "账户",
      "prop": "advertiserList"
    }
  }, [_c('div', {
    staticClass: "display--flex"
  }, [_c('div', {
    staticClass: "ul advertiserList",
    staticStyle: {
      "width": "300px"
    }
  }, [_c('el-radio-group', {
    on: {
      "change": _vm.changeAdvertiser
    },
    model: {
      value: _vm.isActiveFlg,
      callback: function callback($$v) {
        _vm.isActiveFlg = $$v;
      },
      expression: "isActiveFlg"
    }
  }, [_c('el-radio', {
    staticStyle: {
      "left": "10px"
    },
    attrs: {
      "label": 1
    }
  }, [_vm._v(" 活跃账户 "), _c('el-tooltip', {
    attrs: {
      "placement": "top",
      "content": "活跃账户：近两日有消耗、转账、新建计划/单元/创意的账户"
    }
  }, [_c('i', {
    staticClass: "el-icon-question"
  })])], 1), _c('el-radio', {
    attrs: {
      "label": 0,
      "disabled": _vm.isUserType
    },
    nativeOn: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.showAdvertiser.apply(null, arguments);
      }
    }
  }, [_vm._v("全部账户")])], 1), _c('el-input', {
    staticClass: "form-item__search",
    attrs: {
      "placeholder": "请输入账户ID/别名/产品名"
    },
    nativeOn: {
      "keyup": function keyup($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.onSearchInput.apply(null, arguments);
      }
    },
    model: {
      value: _vm.form.searchInput,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "searchInput", $$v);
      },
      expression: "form.searchInput"
    }
  }, [_c('i', {
    staticClass: "el-input__icon el-icon-search",
    attrs: {
      "slot": "suffix"
    },
    on: {
      "click": _vm.onSearchInput
    },
    slot: "suffix"
  })]), _c('el-checkbox-group', {
    staticClass: "ul__scroll",
    model: {
      value: _vm.form.advertiserList,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "advertiserList", $$v);
      },
      expression: "form.advertiserList"
    }
  }, [_c('ul', {
    directives: [{
      name: "infinite-scroll",
      rawName: "v-infinite-scroll",
      value: _vm.loadAccount,
      expression: "loadAccount"
    }],
    attrs: {
      "infinite-scroll-distance": 20,
      "infinite-scroll-delay": 300,
      "infinite-scroll-disabled": _vm.isCompleteAccountOptions,
      "infinite-scroll-immediate": "false"
    }
  }, [_vm._l(_vm.accountOptions, function (item) {
    return _c('li', {
      key: item.value,
      staticClass: "ul__li"
    }, [_c('el-checkbox', {
      attrs: {
        "label": item.id
      },
      on: {
        "change": function change($event) {
          return _vm.onChangeAdvertiserItem(arguments, item);
        }
      }
    }, [_vm._v(" " + _vm._s(item.label) + " ")])], 1);
  }), _vm.isCompleteAccountOptions ? _c('li', {
    staticClass: "ul__li is-complete"
  }, [_vm._v(" --- 暂无更多数据! --- ")]) : _vm._e()], 2)])], 1), _c('nmg-exhibition', {
    attrs: {
      "type": "erect",
      "width": "300",
      "height": "200",
      "sort": true,
      "unique": "id"
    },
    on: {
      "change": _vm.onChangeAdvertiserList
    },
    model: {
      value: _vm.advertiserListObj,
      callback: function callback($$v) {
        _vm.advertiserListObj = $$v;
      },
      expression: "advertiserListObj"
    }
  })], 1)]), _c('el-form-item', {
    staticClass: "flex",
    attrs: {
      "label": "自定义指标",
      "prop": "customTarget"
    }
  }, [_c('div', {
    staticClass: "display--flex"
  }, [_c('ul', {
    staticClass: "tab"
  }, _vm._l(_vm.indicatorsOptions, function (item, i) {
    return _c('li', {
      key: item.value,
      staticClass: "tab-handler",
      class: {
        active: _vm.activeIndex === i
      },
      on: {
        "click": function click($event) {
          return _vm.onClickHandler(i);
        }
      }
    }, [_vm._v(" " + _vm._s(item.label) + " ")]);
  }), 0), _c('div', {
    ref: "ul",
    staticClass: "ul",
    staticStyle: {
      "width": "400px"
    }
  }, _vm._l(_vm.indicatorsOptions, function (item, i) {
    return _c('div', {
      key: item.value,
      staticClass: "ul__group"
    }, [_c('a', {
      ref: 'indicatorsOptions' + i,
      refInFor: true,
      attrs: {
        "href": '#indicatorsOptions' + i
      }
    }), _c('h5', {
      staticClass: "ul__title"
    }, [_c('el-checkbox', {
      attrs: {
        "label": item,
        "indeterminate": _vm.indeterminate(item)
      },
      on: {
        "change": function change($event) {
          return _vm.onIndicatorsChangeAll(item);
        }
      },
      model: {
        value: _vm.indicatorsOptions[i].check,
        callback: function callback($$v) {
          _vm.$set(_vm.indicatorsOptions[i], "check", $$v);
        },
        expression: "indicatorsOptions[i].check"
      }
    }, [_vm._v(" " + _vm._s(item.label) + " ")])], 1), _c('el-checkbox-group', {
      model: {
        value: _vm.indicatorsOptions[i].checks,
        callback: function callback($$v) {
          _vm.$set(_vm.indicatorsOptions[i], "checks", $$v);
        },
        expression: "indicatorsOptions[i].checks"
      }
    }, [_c('ul', _vm._l(_vm.indicatorsOptions[i].children, function (child) {
      return _c('li', {
        key: child.value,
        staticClass: "ul__li"
      }, [_c('el-checkbox', {
        attrs: {
          "label": child.value
        },
        on: {
          "change": function change($event) {
            return _vm.onIndicatorsChange(arguments, child);
          }
        }
      }, [_vm._v(" " + _vm._s(child.label) + " ")])], 1);
    }), 0)])], 1);
  }), 0), _c('nmg-exhibition', {
    ref: "customTarget",
    attrs: {
      "type": "erect",
      "width": "200",
      "height": "200",
      "sort": true,
      "unique": "value"
    },
    on: {
      "change": _vm.onChangeCustomTarget
    },
    model: {
      value: _vm.form.customTarget,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "customTarget", $$v);
      },
      expression: "form.customTarget"
    }
  }), _c('nmg-exhibition', {
    attrs: {
      "lazy": "",
      "complete": _vm.isComplete,
      "label": "title",
      "type": "erect",
      "width": "200",
      "height": "200",
      "hideRemoveAll": true,
      "beforeRemove": _vm.beforeRemoveCommonOptions
    },
    on: {
      "click": _vm.onClickCommonOption,
      "load": _vm.onLoadCommonOptions,
      "change": _vm.deleteCommonOption
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(" 常用选项 ")];
      },
      proxy: true
    }]),
    model: {
      value: _vm.commonOptions,
      callback: function callback($$v) {
        _vm.commonOptions = $$v;
      },
      expression: "commonOptions"
    }
  })], 1), _c('el-checkbox', {
    model: {
      value: _vm.form.common,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "common", $$v);
      },
      expression: "form.common"
    }
  }, [_vm._v("保存为常用选项")]), _vm.form.mediaType == 'ks' ? _c('el-checkbox', {
    attrs: {
      "true-label": 1,
      "false-label": 0
    },
    on: {
      "change": _vm.onClickCommonCost
    },
    model: {
      value: _vm.form.commonCost,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "commonCost", $$v);
      },
      expression: "form.commonCost"
    }
  }, [_vm._v("自动生成现金消耗 "), _c('el-tooltip', {
    attrs: {
      "placement": "top",
      "content": "生成现金消耗时,需要选择花费指标,否则无法计算现金消耗"
    }
  }, [_c('i', {
    staticClass: "el-icon-question"
  })])], 1) : _vm._e()], 1), _vm.form.common ? _c('el-form-item', {
    attrs: {
      "prop": "optionName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入常用指标标题"
    },
    model: {
      value: _vm.form.optionName,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "optionName", $$v);
      },
      expression: "form.optionName"
    }
  }), 'detail' !== _vm.state && _vm.form.common ? _c('el-button', {
    attrs: {
      "round": "",
      "type": "primary"
    },
    on: {
      "click": _vm.saveOption
    }
  }, [_vm._v("确认")]) : _vm._e()], 1) : _vm._e(), _vm.form.commonCost === 1 && _vm.form.mediaType === 'ks' ? _c('el-form-item', {
    attrs: {
      "prop": "rebatesProportion",
      "label": "返点比例"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入客户返点比例"
    },
    model: {
      value: _vm.form.rebatesProportion,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "rebatesProportion", $$v);
      },
      expression: "form.rebatesProportion"
    }
  }), _c('i', {
    staticClass: "el-icon-warning"
  }), _vm._v(" 1. 仅支持输入数字； 2. 数值范围为大于0小于等于1； ")], 1) : _vm._e(), _c('el-form-item', {
    attrs: {
      "label": "执行规则"
    }
  }, [_c('i', {
    staticClass: "el-icon-warning"
  }), _vm._v(" 时报为执行时间提前10分钟发送历史新增时间段数据，日报为每天早上9:30发送昨日数据 ")]), _c('el-form-item', {
    attrs: {
      "label": "接收邮箱",
      "prop": "emailAddress"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入接收邮箱"
    },
    on: {
      "blur": _vm.changeLower
    },
    model: {
      value: _vm.form.emailAddress,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "emailAddress", $$v);
      },
      expression: "form.emailAddress"
    }
  }), _c('i', {
    staticClass: "el-icon-warning"
  }), _vm._v(" 输入多个邮箱时,需要用;分割,且不能输入相同的邮箱 ")], 1), _vm.form.temporalGranularity == 'HOURLY' ? _c('el-form-item', {
    attrs: {
      "label": "执行时间",
      "prop": "executionTime"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入时间"
    },
    model: {
      value: _vm.form.executionTime,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "executionTime", $$v);
      },
      expression: "form.executionTime"
    }
  }), _c('i', {
    staticClass: "el-icon-warning"
  }), _vm._v(" 时间格式XX:00(00:00-24:00) 整点小时,多个时间用;分割 ")], 1) : _vm._e()], 1), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, ['detail' !== _vm.state ? _c('el-button', {
    attrs: {
      "type": "primary",
      "round": ""
    },
    on: {
      "click": _vm.save
    }
  }, [_vm._v("保 存")]) : _vm._e(), _c('el-button', {
    attrs: {
      "round": ""
    },
    on: {
      "click": _vm.hide
    }
  }, [_vm._v("取 消")])], 1)], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "9966":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/system/auxiliary/daily/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/data.js */ "e324");
/* harmony import */ var _tableList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableList.vue */ "9f7b");

// 表格数据

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "daily",
  components: {
    "table-list": _tableList_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      form: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_0__["searchForm"]),
      defaultForm: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_0__["searchForm"]),
      pickerOptions: {
        // 当前时间日期选择器特有的选项详细 参数信息请参考elementUI官网日期选择器部分
        disabledDate: function disabledDate(time) {
          return time.getTime() > new Date();
        }
      }
    };
  },
  mounted: function mounted() {
    var vm = this;
    vm.search();
  },
  methods: {
    /**
     * 查询
     */
    search: function search() {
      var vm = this;
      vm.$nextTick(function () {
        vm.$refs.table.search(vm.$deepCopy(vm.form));
      });
    }
  }
});

/***/ }),

/***/ "9d6c":
/*!*****************************************************************************!*\
  !*** ./src/views/system/auxiliary/daily/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./index.vue?vue&type=script&lang=js& */ "9966");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "9f7b":
/*!********************************************************!*\
  !*** ./src/views/system/auxiliary/daily/tableList.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tableList_vue_vue_type_template_id_6aacb7a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableList.vue?vue&type=template&id=6aacb7a6& */ "cd98");
/* harmony import */ var _tableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableList.vue?vue&type=script&lang=js& */ "c8bc");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "0c7c");





/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tableList_vue_vue_type_template_id_6aacb7a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tableList_vue_vue_type_template_id_6aacb7a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "af5c":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/system/auxiliary/daily/index.vue?vue&type=template&id=5bb3f52a& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "report__operate__daily"
  }, [_c('nmg-form', {
    staticClass: "--tool-shadow-box",
    attrs: {
      "inline": true,
      "defaultForm": _vm.defaultForm,
      "resetable": "",
      "searchable": ""
    },
    on: {
      "search": _vm.search
    },
    model: {
      value: _vm.form,
      callback: function callback($$v) {
        _vm.form = $$v;
      },
      expression: "form"
    }
  }, [_c('nmg-form-item', {
    attrs: {
      "label": "模板名称",
      "prop": "templateName"
    }
  }, [_c('el-input', {
    attrs: {
      "light": "",
      "placeholder": "请输入模板名称"
    },
    model: {
      value: _vm.form.templateName,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "templateName", $$v);
      },
      expression: "form.templateName"
    }
  })], 1), _c('nmg-form-item', {
    attrs: {
      "label": "创建时间",
      "prop": "dateRangeList"
    }
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
      value: _vm.form.dateRangeList,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dateRangeList", $$v);
      },
      expression: "form.dateRangeList"
    }
  })], 1)], 1), _c('table-list', {
    ref: "table"
  })], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "b5b9":
/*!****************************************************!*\
  !*** ./src/views/system/auxiliary/daily/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5bb3f52a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5bb3f52a& */ "fb9f");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "9d6c");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "0c7c");





/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5bb3f52a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5bb3f52a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c185":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/system/auxiliary/daily/dialogTemplate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "2f62");
/* harmony import */ var _config_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/data.js */ "e324");
/* harmony import */ var _config_ports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/ports */ "351b");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      currentUser: this.$localStorage.getItem("currentUser"),
      // 当前都登录用户
      visible: false,
      form: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateForm"]),
      // 表单数据
      advertiserListObj: [],
      // 投放户选中数据的对象形式
      rules: _config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateRules"],
      // 校验规则上
      state: "add",
      // add, edit, detail
      templateTypeOptions: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateTypeOptions"]),
      // 类型选项
      templateTypeExpendOptions: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateTypeExpendOptions"]),
      //日报
      executionTime: this.executionTime,
      //执行时间
      dimensionOptions: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["dimensionOptions"]),
      // 颗粒度选项
      reportDimsOptions: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["reportDimsOptions"]),
      // 数据透视选项
      temporalGranularityOptions: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["temporalGranularityOptions"]),
      //汇总方式选项
      accountOptions: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["accountOptions"]),
      // 投放户数据
      indicatorsOptions: this.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["ksIndicatorsOptions"]),
      // 指标数据
      activeIndex: "0",
      commonOptions: [],
      // 常用选项
      total: 0,
      // 总条目数
      pageSize: 10,
      // 每页显示条目个数
      currentPage: 1,
      // 当前页
      isComplete: false,
      isCompleteAccountOptions: false,
      currentAccountPage: 1,
      isActiveFlg: null,
      isDisabled: true,
      commonCost: 0,
      rebatesProportion: "",
      isUserType: false,
      //全部账户状态判断
      isEdit: 1,
      //编辑回显不触发方法
      // 媒体名称列表
      mediaList: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    advertiser: function advertiser(state) {
      return state.advertiser;
    }
  })), {}, {
    title: function title(vm) {
      return _config_data_js__WEBPACK_IMPORTED_MODULE_1__["titles"][vm.state];
    },
    mediaOptions: function mediaOptions() {
      var vm = this;
      var mediaList = _config_data_js__WEBPACK_IMPORTED_MODULE_1__["mediaOptions"];
      var arr = vm.mediaList.filter(function (item) {
        return -1 !== mediaList.findIndex(function (item2) {
          return item.mediaId === item2.mediaId;
        });
      }).map(function (item) {
        var item2 = mediaList.find(function (item2) {
          return item.mediaId === item2.mediaId;
        });
        item.value = item2.value;
        return item;
      }).sort(function (item, item2) {
        var itenIndex = mediaList.findIndex(function (_item) {
          return _item.mediaId === item.mediaId;
        });
        var itenIndex2 = mediaList.findIndex(function (_item) {
          return _item.mediaId === item2.mediaId;
        });
        return itenIndex - itenIndex2;
      });
      return arr;
    }
  }),
  watch: {
    visible: function visible(newFlag, oldFlag) {
      if (newFlag) {
        var vm = this;
        if (vm.currentUser.loginUserInfo.userType == 0) {
          vm.isUserType = true;
          vm.$message({
            message: "系统级别用户全选暂时禁用",
            type: "error",
            customClass: "zZindex"
          });
        }
      }
    }
  },
  methods: {
    changeLower: function changeLower() {
      this.form.emailAddress = this.form.emailAddress.toLocaleLowerCase();
    },
    /**
     * 加载常用选项
     */
    onLoadCommonOptions: function onLoadCommonOptions() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var vm;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              vm = _this;
              _context.next = 3;
              return vm.searchOption(vm.form.mediaType, vm.currentPage);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    searchOption: function searchOption(mediaType, currentPage) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var vm;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              vm = _this2;
              _context2.next = 3;
              return Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["SearchOption"])({
                pageSize: vm.pageSize,
                // 每页展示的条数
                pageNumber: currentPage,
                // 页码
                mediaType: mediaType // 媒体类型
              }).then(function (res) {
                var tempArray = [];
                // 转换显示
                var list = res.data.objectData.records;
                vm.isComplete = list.length < vm.pageSize;
                list.forEach(function (item) {
                  var obj = {};
                  obj["title"] = item.optionName;
                  obj["data"] = JSON.parse(item.customTarget || "[]");
                  tempArray.push(obj);
                });
                if (1 === vm.currentPage) {
                  vm.commonOptions = tempArray;
                } else {
                  vm.commonOptions = vm.commonOptions.concat(tempArray);
                }
                vm.currentPage++;
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    showAdvertiser: function showAdvertiser() {
      var vm = this;
      if (!vm.isUserType) {
        if (vm.form.accountStatus == 0) {
          vm.isActiveFlg = null;
          vm.isActiveFlg = parseInt(vm.form.accountStatus);
        } else {
          vm.isActiveFlg = 0;
        }
        vm.changeAdvertiser();
      }
    },
    //查询活跃账户信息
    changeAdvertiser: function changeAdvertiser() {
      var vm = this;
      if (vm.isEdit == 1) {
        vm.form.searchInput = null;
        vm.form.advertiserIdList = [];
        vm.getAccountDataAll().then(function (res) {
          vm.accountOptions = vm.$deepCopy(res.data.listData);
          vm.advertiserListObj = vm.$deepCopy(res.data.listData);
          vm.form.advertiserList = vm.accountOptions.map(function (current) {
            return current.id;
          });
        });
        vm.form.accountStatus = vm.isActiveFlg;
      }
    },
    /**
     * 删除常用选项之前的判断
     */
    beforeRemoveCommonOptions: function beforeRemoveCommonOptions() {
      var vm = this;
      return vm.$alert("是否删除?", "提示", {
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).catch(function () {});
    },
    /**
     * 根据常用标题名称和媒体类型删除常用选项
     */
    deleteCommonOption: function deleteCommonOption(data, deleteData, index) {
      var vm = this;
      Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["DeleteOption"])({
        optionName: deleteData[0]["title"],
        mediaType: vm.form.mediaType
      }).then(function (res) {
        // 成功提示
        vm.$message({
          type: "success",
          message: "删除成功!"
        });
        // 更新常用选项列表
        vm.currentPage = 1;
        vm.searchOption(vm.form.mediaType, vm.currentPage);
      });
    },
    /**
     * 当改变投放户选中数据时触发该事件
     */
    onChangeAdvertiserItem: function onChangeAdvertiserItem(args, item) {
      var vm = this;
      if (args[0]) {
        // 选中
        vm.advertiserListObj.push(item);
      } else {
        // 取消选中
        for (var i = 0, len = vm.advertiserListObj.length; i < len; i++) {
          var element = vm.advertiserListObj[i];
          if (element.id === item.id) {
            //vm.isActiveFlg = null;
            return vm.advertiserListObj.splice(i, 1);
          }
        }
      }
      //vm.isActiveFlg = null;
    },
    /**
     * 当改变投放户选中数据时触发该事件
     */
    onChangeAdvertiserList: function onChangeAdvertiserList(data, deleteData, index) {
      var vm = this;
      if (!deleteData) vm.isActiveFlg = null; // 排序操作
      if (!data.length) vm.form.advertiserList = [];
      if (deleteData) {
        var advertiserList_index = vm.form.advertiserList.indexOf(deleteData[0].id);
        vm.form.advertiserList.splice(advertiserList_index, 1);
      }
    },
    /**
     * 当改变指标选中数据[customTarget]时触发该事件
     */
    onChangeCustomTarget: function onChangeCustomTarget(data, deleteData, index) {
      var vm = this;
      if (!deleteData) return; // 排序操作
      if (-1 === index) {
        // 清空
        vm.indicatorsOptions = vm.$deepCopy(vm.form.mediaType == "ks" ? _config_data_js__WEBPACK_IMPORTED_MODULE_1__["ksIndicatorsOptions"] : _config_data_js__WEBPACK_IMPORTED_MODULE_1__["ttIndicatorsOptions"]);
      } else {
        // 删除单条数据
        var value = deleteData[0].value;
        for (var key in vm.indicatorsOptions) {
          if (Object.hasOwnProperty.call(vm.indicatorsOptions, key)) {
            var element = vm.indicatorsOptions[key];
            var _index = element.checks.indexOf(value);
            if (-1 !== _index) {
              return element.checks.splice(_index, 1);
            }
          }
        }
      }
    },
    onSearchInput: function onSearchInput() {
      var vm = this;
      vm.currentAccountPage = 1;
      vm.getAccountData().then(function (res) {
        vm.accountOptions = res.data.listData;
      });
    },
    /**
     * 获取投放户数据
     */
    getAccountData: function getAccountData() {
      var vm = this;
      return new Promise(function (resolve, reject) {
        Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["SearchAdvertiserListByPlacingType"])({
          label: vm.form.searchInput,
          pageSize: 10,
          // 每页展示的条数
          pageNumber: vm.currentAccountPage,
          // 页码
          placingType: vm.form.mediaType == "ks" ? "1" : "3",
          // 媒体类型
          isTool: "0",
          isActiveFlg: vm.isActiveFlg
        }).then(function (res) {
          resolve(res);
          vm.isCompleteAccountOptions = res.data.listData.length < vm.pageSize;
          vm.currentAccountPage++;
        });
      });
    },
    /**
     * 获取投放户数据全选
     */
    getAccountDataAll: function getAccountDataAll() {
      var vm = this;
      return new Promise(function (resolve, reject) {
        Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["SearchAdvertiserListByPlacingType"])({
          label: vm.form.searchInput,
          pageSize: 100000,
          // 每页展示的条数
          pageNumber: 1,
          // 页码
          placingType: vm.form.mediaType == "ks" ? "1" : "3",
          // 媒体类型
          isTool: "0",
          isActiveFlg: vm.isActiveFlg
        }).then(function (res) {
          resolve(res);
          vm.isCompleteAccountOptions = res.data.listData.length < vm.pageSize;
          vm.currentAccountPage++;
        });
      });
    },
    /**
     * 保存为常用选项
     */
    saveOption: function saveOption() {
      var vm = this;
      var fields = ["optionName", "customTarget"];
      var fieldCount = fields.length;
      var validStr = "";
      vm.$refs["form"].validateField(fields, function (valid) {
        fieldCount--;
        validStr += valid;
        if (0 >= fieldCount && !validStr) {
          // 将常用选项中的数据转换成List
          var optionJson = [];
          var indicatorsOptions = vm.$deepCopy(vm.indicatorsOptions);
          for (var key in indicatorsOptions) {
            if (indicatorsOptions[key].checks.length) {
              // 去除不需要的信息
              delete indicatorsOptions[key].children;
              optionJson.push(indicatorsOptions[key]);
            }
          }
          Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["SaveOption"])({
            optionName: vm.form.optionName,
            // 常用选项标题
            optionJson: JSON.stringify(optionJson),
            // 常用选项中自定义的数据
            mediaType: vm.form.mediaType // 媒体类型
          }).then(function (ret) {
            vm.currentPage = 1;
            vm.onLoadCommonOptions();
            // 成功提示
            vm.$message({
              type: "success",
              message: ret.data.message
            });
          });
        }
      });
    },
    /**
     *
     */
    onClickHandler: function onClickHandler(index) {
      var vm = this;
      vm.activeIndex = index;
      vm.$refs.ul.scrollTop = vm.$refs["indicatorsOptions" + index][0].offsetTop;
    },
    indeterminate: function indeterminate(item) {
      var len = item.checks.length;
      if (0 >= len) return false;
      if (len > 0 && len === item.children.length) {
        item.check = true;
      } else {
        item.check = false;
      }
      return len !== item.children.length;
    },
    /**
     * 自定义指标变更事件
     */
    onIndicatorsChangeAll: function onIndicatorsChangeAll(value) {
      var vm = this;
      var customTarget = vm.form.customTarget;
      if (value.check) {
        var arr = [];
        value.checks = value.children.map(function (current) {
          var has = customTarget.some(function (item) {
            return current.value === item.value;
          });
          if (!has) arr.push(current);
          return current.value;
        });
        customTarget.push.apply(customTarget, arr);
      } else {
        value.checks = [];
        value.children.map(function (current) {
          for (var i = 0; i < customTarget.length; i++) {
            var element = customTarget[i];
            if (current.value === element.value) {
              customTarget.splice(i, 1);
              i--;
              break;
            }
          }
        });
      }
    },
    onIndicatorsChange: function onIndicatorsChange(args, child) {
      var vm = this;
      var customTarget = vm.form.customTarget;
      if (args[0]) {
        var has = customTarget.some(function (item) {
          return child.value === item.value;
        });
        if (!has) customTarget.push(child);
      } else {
        for (var i = 0; i < customTarget.length; i++) {
          var element = customTarget[i];
          if (child.value === element.value) {
            customTarget.splice(i, 1);
            i--;
            break;
          }
        }
      }
    },
    /**
     * 保存数据
     */
    save: function save() {
      var vm = this;
      var form = vm.$deepCopy(vm.form);
      form["advertiserIdList"] = vm.advertiserListObj;
      // form['advertiserIdList'] = vm.advertiserListObj.map( item => item.id );
      var chargeIndex = 0;
      // 遍历选中的指标数据
      form.customTarget = form.customTarget.map(function (item, index) {
        var flag = item.flag == 1 ? "|" : "";
        if ("charge" === item.value) {
          chargeIndex = index;
        }
        return _defineProperty({}, item.value + flag, item.label);
      });
      // 判断自定生成现金消耗
      if (form.commonCost === 1) {
        form.customTarget.splice(chargeIndex + 1, 0, {
          cashCost: "现金消耗"
        });
        /*form.customTarget.push({
                        rebatesProportion: "返点比例"
                    });*/
      } else {
        form.rebatesProportion = "";
      }
      form["email"] = form.emailAddress;
      form["rebatesProportion"] = form.rebatesProportion;
      vm.$refs["form"].validate(function (valid) {
        if (valid) {
          vm[vm.state](form);
        } else {
          return false;
        }
      });
    },
    /**
     * 新建
     */
    add: function add(form) {
      var vm = this;
      Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["SaveReportTemplate"])(form).then(function (res) {
        //vm.form.accountStatus = vm.isActiveFlg;
        if (res.data.status) {
          vm.$emit("success");
          vm.$message({
            type: "success",
            message: "新建成功!"
          });
        } else {
          vm.$message.error(res.data.message);
        }
        vm.hide();
      });
    },
    /**
     * 更新
     */
    edit: function edit(form) {
      var vm = this;
      Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["UpdateReportTemplate"])(form).then(function (res) {
        if (res.data.status) {
          vm.$emit("success");
          vm.$message({
            type: "success",
            message: "编辑成功!"
          });
        } else {
          vm.$message.error(res.data.message);
        }
        vm.hide();
      });
    },
    /**
     * 设置form表单数据
     */
    onOpen: function onOpen() {
      var vm = this;
      Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["listMediaName"])().then(function (ret) {
        var _ret$data$objData;
        vm.mediaList = ((_ret$data$objData = ret.data.objData) === null || _ret$data$objData === void 0 ? void 0 : _ret$data$objData.dataList) || [];
      });
      // 获取查看信息
      this.clearValidate(); // 移除整个表单的校验结果
    },
    /**
     * 移除整个表单的校验结果
     */
    clearValidate: function clearValidate() {
      var vm = this;
      vm.$nextTick(function () {
        // 清除表单校验
        vm.$refs["form"].clearValidate();
      });
    },
    /**
     * 隐藏弹窗
     */
    hide: function hide() {
      var vm = this;
      vm.visible = false;
      vm.form = {
        templateName: "",
        // 模板名称
        mediaType: "ks",
        // 媒体
        templateType: "D",
        // 类型
        dimension: "A",
        // 颗粒度
        reportDims: "0",
        // 数据透视
        temporalGranularity: "DAILY",
        // 汇总方式
        executionTime: "",
        // 执行时间
        searchInput: "",
        // 账户ID/别名/产品名
        advertiserList: [],
        // 选中的投放户数据
        customTarget: [],
        // 选中的指标数据
        emailAddress: "",
        // 接收邮箱
        common: false,
        // 保存为常用选项
        commonCost: 0,
        //自动生成现金消耗
        optionName: "",
        // 常用指标标题
        rebatesProportion: "",
        //客户返点比例
        accountStatus: 2 //类型判断  1.活跃 0.全部  2.未选择
      }; // 表单数据
      vm.rules = _config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateRules"]; // 校验规则上
      vm.state = "add"; // add; edit; detail
      vm.mediaList = []; // 媒体选项
      vm.templateTypeOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateTypeOptions"]); // 类型选项
      vm.dimensionOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["dimensionOptions"]); // 颗粒度选项
      vm.reportDimsOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["reportDimsOptions"]); // 数据透视选项
      vm.temporalGranularityOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["temporalGranularityOptions"]); //汇总方式选项
      vm.accountOptions = []; // 投放户数据
      vm.advertiserListObj = []; // 已选投放户数据
      vm.indicatorsOptions = []; // 指标数据
      vm.activeIndex = "0";
      vm.commonOptions = []; // 常用选项
      vm.total = 0; // 总条目数
      vm.pageSize = 10; // 每页显示条目个数
      vm.currentPage = 1; // 当前页
      vm.isComplete = false;
      vm.isActiveFlg = false;
      vm.currentAccountPage = 1;
    },
    /**
     * 点击常用选项
     */
    onClickCommonOption: function onClickCommonOption(item) {
      var vm = this;
      for (var i = 0, len = item.data.length; i < len; i++) {
        var group = item.data[i];
        // 遍历选中组
        var _loop = function _loop() {
          var groupItem = group.checks[j];
          var include = vm.indicatorsOptions[group.value].checks.indexOf(groupItem);
          if (-1 === include) {
            var _vm$form$customTarget;
            vm.indicatorsOptions[group.value].checks.push(groupItem);
            (_vm$form$customTarget = vm.form.customTarget).push.apply(_vm$form$customTarget, _toConsumableArray(vm.indicatorsOptions[group.value].children.filter(function (current) {
              return groupItem === current.value;
            })));
          }
        };
        for (var j = 0, len2 = group.checks.length; j < len2; j++) {
          _loop();
        }
      }
    },
    /**
     * 点击自动生成现金消耗
     * */
    onClickCommonCost: function onClickCommonCost(item) {
      var vm = this;
      var flag = false;
      if (item) {
        if (-1 !== vm.indicatorsOptions[0].checks.indexOf("charge")) return;
        vm.indicatorsOptions[0].checks.push("charge");
        vm.form.customTarget.map(function (item, index) {
          if ("charge" === item.value) {
            flag = true;
          }
        });
        //如果选中自动生成现金消耗 如果没有选中 花费 则自动添加花费
        if (!flag) {
          vm.form.customTarget.push({
            label: "花费（元）",
            value: "charge",
            flag: 0
          });
        }
      }
      //else {
      // 选中部分
      // let indexNum = vm.indicatorsOptions[0].checks.indexOf("charge");
      // if (-1 !== indexNum) {
      //  vm.indicatorsOptions[0].checks.splice(indexNum , 1);
      // }
      // 展示部分
      // vm.onIndicatorsChange([false], {
      //   label: "花费（元）",
      //   value: "charge",
      //   flag: 0,
      // });
      //}
    },
    /**
     * Publish 公开接口
     * 显示弹窗
     */
    show: function show() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var state, formData, vm, form, customTargetArray, customTarget, searchActiveRet;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              state = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : "add";
              formData = _arguments.length > 1 ? _arguments[1] : undefined;
              vm = _this3;
              form = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateForm"]);
              if ((formData === null || formData === void 0 ? void 0 : formData.mediaType) === "tt") {
                vm.templateTypeOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateTypeExpendOptions"]);
                // 指标数据
                vm.indicatorsOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["ttIndicatorsOptions"]);
              } else {
                vm.templateTypeOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateTypeOptions"]);
                // 指标数据
                vm.indicatorsOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["ksIndicatorsOptions"]);
              }
              if (!formData) {
                _context3.next = 27;
                break;
              }
              //账户类型回显
              vm.isEdit = 0;
              // 表单赋值
              form = vm.$deepCopy(Object.assign({}, form, formData, {
                customTarget: []
              }));

              // 回显自定义指标
              customTargetArray = JSON.parse(formData.customTarget);
              customTarget = [];
              customTargetArray.forEach(function (item) {
                if (item.indexOf("|") > 0) {
                  item = item.split("|")[0];
                }
                customTarget.push(item);
              });
              form.customTarget = vm.callbackCustomTarget(JSON.stringify(customTarget));

              // 获取投放户数据
              _context3.next = 14;
              return vm.getAccountData().then(function (res) {
                vm.accountOptions = res.data.listData;
              });
            case 14:
              _context3.next = 16;
              return Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["SearchActive"])({
                templateId: form.templateId
              });
            case 16:
              searchActiveRet = _context3.sent;
              if (searchActiveRet.data.objData.accountStatus == 1 || searchActiveRet.data.objData.accountStatus == 0) {
                form.accountStatus = searchActiveRet.data.objData.accountStatus;
                vm.isActiveFlg = parseInt(searchActiveRet.data.objData.accountStatus);
              }

              // 获取常用选项
              _context3.next = 20;
              return vm.searchOption(form.mediaType, vm.currentPage);
            case 20:
              if (form.rebatesProportion) {
                form.commonCost = 1;
              }

              // 回显选中投放户
              // 获取投放账户选中数据
              _context3.next = 23;
              return vm.getDetailReportTemplate(form.templateId).then(function (res) {
                form.advertiserList = res.data.objectData.advertiserIdList.map(function (item) {
                  return item.id;
                });
                vm.advertiserListObj = res.data.objectData.advertiserIdList;
              });
            case 23:
              //根据H、D选择汇总方式
              if (form.templateType == "D") {
                form.temporalGranularity = "DAILY";
              }
              if (form.templateType == "H") {
                form.temporalGranularity = "HOURLY";
              }
              _context3.next = 31;
              break;
            case 27:
              _context3.next = 29;
              return vm.getAccountData().then(function (res) {
                vm.accountOptions = res.data.listData;
              });
            case 29:
              _context3.next = 31;
              return vm.searchOption(form.mediaType, vm.currentPage);
            case 31:
              vm.form = form;
              vm.state = state;
              vm.visible = true;
              vm.isEdit = 1;
              setTimeout(function () {
                vm.$nextTick(function () {
                  vm.$refs.form.clearValidate();
                });
              }, 0);
            case 36:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    /**
     * 获取投放账户选中数据
     */
    getDetailReportTemplate: function getDetailReportTemplate(templateId) {
      var vm = this;
      return new Promise(function (resolve, reject) {
        Object(_config_ports__WEBPACK_IMPORTED_MODULE_2__["DetailReportTemplate"])({
          templateId: templateId
        }).then(function (res) {
          resolve(res);
        });
      });
    },
    /**
     * 回显自定义指标
     */
    callbackCustomTarget: function callbackCustomTarget(selected) {
      var vm = this;
      var checks = JSON.parse(selected);
      // 无选中数据
      if (!checks.length) return [];
      var indicatorsOptions = vm.indicatorsOptions;
      var arr = [];
      for (var i = 0, len = checks.length; i < len; i++) {
        var value = checks[i];
        for (var key in indicatorsOptions) {
          if (Object.hasOwnProperty.call(indicatorsOptions, key)) {
            var father = indicatorsOptions[key];
            for (var j = 0, len2 = father.children.length; j < len2; j++) {
              var child = father.children[j];
              if (value === child.value) {
                father.checks.push(child.value);
                arr.push(child);
              }
            }
          }
        }
      }
      return arr;
    },
    /**
     * 改变媒体类型
     *
     */
    changeMediaType: function changeMediaType(val) {
      var vm = this;
      // 切换账户
      // 切换常用选项列表
      vm.currentAccountPage = 1;
      vm.getAccountData().then(function (res) {
        vm.accountOptions = vm.$deepCopy(res.data.listData);
      });
      // 切换常用选项列表
      vm.currentPage = 1;
      vm.searchOption(val, vm.currentPage);

      // 切换自定义指标字典数据
      vm.indicatorsOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["ksIndicatorsOptions"]);
      vm.templateTypeOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateTypeOptions"]);
      if (val === "tt") {
        vm.indicatorsOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["ttIndicatorsOptions"]);
        vm.templateTypeOptions = vm.$deepCopy(_config_data_js__WEBPACK_IMPORTED_MODULE_1__["templateTypeExpendOptions"]);
        vm.form.templateType = "D";
        vm.changeTemporalGranularity();
      }
      // 清空已选账户
      vm.form.advertiserList = [];
      vm.advertiserListObj = [];
      // 清空已选指标
      vm.form.templateType = "D";
      vm.form.customTarget = [];
      vm.isActiveFlg = null;
      vm.commonCost = 0;
    },
    /**
     *  模板类型  日报,时报
     *  当选择日报时:汇总方式为分日,且不可更改
     *  当选择时报时:汇总方式为分时,且不可更改
     *
     * */
    changeTemplateType: function changeTemplateType(value) {
      var vm = this;
      if (value == "D") {
        vm.form.temporalGranularity = "DAILY";
      }
      if (value == "H") {
        vm.form.temporalGranularity = "HOURLY";
      }
    },
    /***
     *  汇总方式
     *  当模板类型为日报时 汇总方式只能是 分日 ,当模板类型为时报时 汇总方式只能时 分时
     *
     * */
    changeTemporalGranularity: function changeTemporalGranularity() {
      var vm = this;
      if (vm.form.templateType == "D") {
        vm.form.temporalGranularity = "DAILY";
      }
      if (vm.form.templateType == "H") {
        vm.form.temporalGranularity = "HOURLY";
      }
    },
    loadAccount: function loadAccount() {
      var vm = this;
      vm.getAccountData().then(function (res) {
        var list = res.data.listData;
        if (1 === vm.currentAccountPage) {
          vm.accountOptions = list;
        } else {
          vm.accountOptions = vm.accountOptions.concat(list);
        }
      });
    }
  }
});

/***/ }),

/***/ "c8bc":
/*!*********************************************************************************!*\
  !*** ./src/views/system/auxiliary/daily/tableList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_tableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./tableList.vue?vue&type=script&lang=js& */ "5787");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_tableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "cd98":
/*!***************************************************************************************!*\
  !*** ./src/views/system/auxiliary/daily/tableList.vue?vue&type=template&id=6aacb7a6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_tableList_vue_vue_type_template_id_6aacb7a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./tableList.vue?vue&type=template&id=6aacb7a6& */ "d9c7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_tableList_vue_vue_type_template_id_6aacb7a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_tableList_vue_vue_type_template_id_6aacb7a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "d9c7":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/system/auxiliary/daily/tableList.vue?vue&type=template&id=6aacb7a6& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "views__report__operate__daily__table-list-template"
  }, [_c('nmg-sticky', {
    attrs: {
      "container": _vm.container,
      "targets": _vm.targets,
      "offset-top": 60
    }
  }, [_c('nmg-table', {
    ref: "table",
    attrs: {
      "title": "任务列表",
      "columns": _vm.columns,
      "data": _vm.tableData,
      "total": _vm.total
    },
    on: {
      "size-change": _vm.sizeChange,
      "current-change": _vm.currentChange
    },
    scopedSlots: _vm._u([{
      key: "titleHandler",
      fn: function fn() {
        return [_vm.isShowAddBtnFlg ? _c('el-button', {
          attrs: {
            "type": "primary",
            "round": "",
            "plain": ""
          },
          on: {
            "click": function click($event) {
              return _vm.add();
            }
          }
        }, [_vm._v(" 新建模板 ")]) : _vm._e()];
      },
      proxy: true
    }, {
      key: "operation",
      fn: function fn(scope) {
        return [_vm.isShowEditBtnFlg ? _c('el-button', {
          attrs: {
            "type": "text"
          },
          on: {
            "click": function click($event) {
              return _vm.edit(scope.row);
            }
          }
        }, [_vm._v(" 编辑 ")]) : _vm._e(), _vm.isShowDeleteBtnFlg ? _c('el-button', {
          attrs: {
            "type": "text"
          },
          on: {
            "click": function click($event) {
              return _vm.remove(scope.row);
            }
          }
        }, [_vm._v(" 删除 ")]) : _vm._e()];
      }
    }])
  })], 1), _c('dialog-template', {
    ref: "dialogTemplate",
    on: {
      "success": _vm.onSuccess
    }
  })], 1);
};
var staticRenderFns = [];


/***/ }),

/***/ "dea5":
/*!********************************************************************************************!*\
  !*** ./src/views/system/auxiliary/daily/dialogTemplate.vue?vue&type=template&id=da0cd3b0& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogTemplate_vue_vue_type_template_id_da0cd3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./dialogTemplate.vue?vue&type=template&id=da0cd3b0& */ "8fff");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogTemplate_vue_vue_type_template_id_da0cd3b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_dialogTemplate_vue_vue_type_template_id_da0cd3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "e324":
/*!*********************************************************!*\
  !*** ./src/views/system/auxiliary/daily/config/data.js ***!
  \*********************************************************/
/*! exports provided: searchForm, templateForm, templateRules, titles, accountOptions, ksIndicatorsOptions, ttIndicatorsOptions, commonOptions, mediaOptions, templateTypeOptions, templateTypeExpendOptions, dimensionOptions, reportDimsOptions, temporalGranularityOptions, columns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchForm", function() { return searchForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateForm", function() { return templateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateRules", function() { return templateRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titles", function() { return titles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountOptions", function() { return accountOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ksIndicatorsOptions", function() { return ksIndicatorsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttIndicatorsOptions", function() { return ttIndicatorsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonOptions", function() { return commonOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaOptions", function() { return mediaOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateTypeOptions", function() { return templateTypeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateTypeExpendOptions", function() { return templateTypeExpendOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dimensionOptions", function() { return dimensionOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportDimsOptions", function() { return reportDimsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "temporalGranularityOptions", function() { return temporalGranularityOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony import */ var _tools_validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/validate.js */ "d43c");


// 搜索条件表单
var searchForm = {
  templateName: '',
  // 模板名称
  dateRangeList: [] // 创建时间
};
// 模板表单
var templateForm = {
  templateName: '',
  // 模板名称
  mediaType: 'ks',
  // 媒体
  commonCost: 0,
  // 自动生成现金消耗
  templateType: 'D',
  // 类型
  dimension: 'A',
  // 颗粒度
  reportDims: '0',
  // 数据透视
  temporalGranularity: 'DAILY',
  // 汇总方式
  executionTime: '',
  //执行时间
  searchInput: '',
  // 账户ID/别名/产品名
  advertiserList: [],
  // 选中的投放户数据
  customTarget: [],
  // 选中的指标数据
  emailAddress: '',
  // 接收邮箱
  common: false,
  // 保存为常用选项
  optionName: '',
  // 常用指标标题
  rebatesProportion: '',
  //返点比例
  accountStatus: 2 //类型判断  1.活跃 0.全部  2.未选择
};

/**
 * 校验多个邮箱是否正确
 */
function mutEmail(rule, value, callback) {
  var ruleReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  //let ruleReg = /^((([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6}\;))*(([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})))$/
  if (!value) {
    return callback(new Error('请输入邮箱地址'));
  }
  //字符串转小写
  var valueLower = value.toLocaleLowerCase();
  var flag = [];
  var valueList = valueLower.split(";");
  if (valueList.length > 0) {
    for (var i = 0; i < valueList.length; i++) {
      if (!ruleReg.test(valueList[i])) {
        flag.push('第' + (i + 1) + '个邮箱地址错误');
      }
    }
  }
  if (flag.length > 0) {
    return callback(new Error(flag.join(',')));
  }
  if (valueList.length > 10) {
    return callback(new Error('邮箱地址最多输入10个'));
  }
  if (isRepeat(valueList)) {
    return callback(new Error('邮箱地址有重复'));
  }
  callback();
}
/**
 *  校验多个时间格式 XX:00  小时
 * */
function mutTime(rule, value, callback) {
  var ruleReg = /^(20|21|22|23|24|[0-1]\d):[0][0]$/;
  var valueList = new Array();
  var flag = [];
  valueList = value.split(";");
  valueList.forEach(function (value, index, array) {
    if (!ruleReg.test(value)) {
      flag.push('第' + (index + 1) + '时间格式错误');
    }
  });
  if (flag.length) {
    return callback(new Error(flag.join(',')));
  }
  callback();
}
function isRepeat(arr) {
  var hash = {};
  for (var i in arr) {
    if (hash[arr[i]]) {
      return true;
    }
    hash[arr[i]] = true;
  }
  return false;
}
//判断集合中元素是否重复
function isAllEqual(array) {
  var flag = false;
  if (array.length > 0) {
    array.forEach(function (value, index, array) {
      if (array.length > 1) {
        if (array[0] !== array[1]) {
          array.splice(1, 1);
        } else {
          flag = true;
          array.splice(1, 1);
        }
      }
    });
  }
  return flag;
}

/**
 * 校验返点比例
 */
function validCommonCost(rule, value, callback) {
  var ruleReg = /^(1|1\.[0]{1,6}|(0\.\d{1,6}|[0-9][0-9]*\\.\\d{1,6})?)$/;
  var flag = [];
  if (!ruleReg.test(value)) {
    flag.push('数值错误');
  }
  if (flag.length) {
    return callback(new Error(flag.join(',')));
  }
  if (value == 0) {
    callback('仅支持输入数字,且数值范围为大于0小于等于1,小数点后至多可输入六位');
  }
  callback();
}

/**
 * 首尾空格
 */
function validTrim(rule, value, callback) {
  var ruleReg = /^\S.*\S$|(^\S{0,1}\S$)/;
  if (!ruleReg.test(value)) {
    callback('首尾不可为空格');
  }
  callback();
}
function mutBlank(rule, value, callback) {
  if (value.substring(0, 1) === " ") {
    callback(new Error("首位不可为空格!"));
  }
  callback();
}
function mutSpecial(rule, value, callback) {
  var ruleReg = /[*?:<>\\/|"]/;
  if (ruleReg.test(value)) {
    callback(new Error('不可输入特殊字符 \\ / : * ? " < > | '));
  }
  callback();
}
var templateRules = {
  // 模板名称
  templateName: [{
    required: true,
    message: '请输入模板名称',
    trigger: 'blur'
  }, {
    validator: _tools_validate_js__WEBPACK_IMPORTED_MODULE_0__["validStringLength"],
    trigger: 'blur',
    message: '最多支持100个字符',
    max: 100
  }, {
    validator: validTrim,
    trigger: 'blur'
  }, {
    validator: mutSpecial,
    trigger: 'blur'
  }],
  // 媒体
  mediaType: [{
    required: true,
    message: '请选择媒体',
    trigger: 'change'
  }],
  // 类型
  templateType: [{
    required: true,
    message: '请选择类型',
    trigger: 'change'
  }],
  // 颗粒度
  dimension: [{
    required: true,
    message: '请选择颗粒度',
    trigger: 'change'
  }],
  // 数据透视
  reportDims: [{
    required: true,
    message: '请选择数据透视',
    trigger: 'change'
  }],
  // 汇总方式
  temporalGranularity: [{
    required: true,
    message: '请选择汇总方式',
    trigger: 'change'
  }],
  // 接收邮箱
  emailAddress: [{
    required: true,
    message: '请输入邮箱地址',
    trigger: 'blur'
  },
  // {type: 'email', message: '必须为邮箱格式', trigger: 'blur'},
  {
    validator: mutEmail,
    trigger: 'blur'
  }
  // {validator: validStringLength, trigger: 'blur', message: '最多支持输入40个字符', max: 40}
  ],

  // 常用指标标题
  optionName: [{
    required: true,
    message: '请输入常用指标标题',
    trigger: 'blur'
  }, {
    validator: _tools_validate_js__WEBPACK_IMPORTED_MODULE_0__["validStringLength"],
    trigger: 'blur',
    message: '最多支持输入50个中文字',
    max: 100
  }, {
    validator: mutBlank,
    trigger: 'blur'
  }],
  // 执行时间
  executionTime: [{
    required: true,
    message: '请选择实行时间',
    trigger: 'change'
  }, {
    validator: mutTime,
    trigger: 'blur',
    message: '时间格式错误 应为XX:00',
    max: 40
  }],
  // 账户
  advertiserList: [{
    required: true,
    message: '请选择账户',
    trigger: 'change'
  }],
  // 自定义指标
  customTarget: [{
    required: true,
    message: '请选择自定义指标',
    trigger: 'change'
  }],
  // 返点比例
  rebatesProportion: [{
    required: true,
    message: '请输入返点比例',
    trigger: 'blur'
  }, {
    validator: validCommonCost,
    trigger: 'blur',
    message: '仅支持输入数字,且数值范围为大于0小于等于1,小数点后至多可输入六位'
  }
  //{ validator: validFloatCommon, trigger: 'blur', digit: 6, message: '仅支持输入数字,且数值范围为大于0小于等于1,小数点后至多可输入六位' }
  ]
};

// 模板弹窗的标题
var titles = {
  add: '新建模板',
  edit: '编辑模板',
  detail: '查看模板'
};

// 投放户数据
var accountOptions = [{
  label: '投放户1',
  value: 0
}, {
  label: '投放户2',
  value: 1
}, {
  label: '投放户3',
  value: 2
}];

// 指标数据
var ksIndicatorsOptions = {
  0: {
    label: '展示数据',
    value: 0,
    check: false,
    checks: [],
    children: [{
      label: "花费（元）",
      value: "charge",
      flag: 0
    },
    // {
    //     label: "现金消耗",
    //     value: "cashCost",
    //     flag:0,
    // },
    {
      label: "封面曝光数",
      value: "show",
      flag: 0
    }, {
      label: "封面点击数",
      value: "photo_click",
      flag: 0
    }, {
      label: "素材曝光数",
      value: "aclick",
      flag: 0
    }, {
      label: "行为数",
      value: "bclick",
      flag: 0
    }, {
      label: "封面点击率（%）",
      value: "photo_click_ratio",
      flag: 1
    }, {
      label: "行为率（%）",
      value: "action_ratio",
      flag: 1
    }, {
      label: "平均千次曝光花费（元）",
      value: "impression_1k_cost",
      flag: 0
    }, {
      label: "平均点击单价（元）",
      value: "photo_click_cost",
      flag: 0
    }, {
      label: "平均行为单价（元）",
      value: "action_cost",
      flag: 0
    }]
  },
  1: {
    label: '互动数据',
    value: 1,
    check: false,
    checks: [],
    children: [{
      label: "3s播放率（%）",
      value: "play_3s_ratio",
      flag: 1
    }, {
      label: "分享数",
      value: "share",
      flag: 0
    }, {
      label: "评论数",
      value: "comment",
      flag: 0
    }, {
      label: "点赞数",
      value: "like",
      flag: 0
    }, {
      label: "新增关注数",
      value: "follow",
      flag: 0
    },
    // {
    //     label: "取消关注数",
    //     value: "cancel_follow",
    //     flag:0,
    // },
    {
      label: "举报数",
      value: "report",
      flag: 0
    }, {
      label: "拉黑数",
      value: "block",
      flag: 0
    }, {
      label: "减少此类作品数",
      value: "negative",
      flag: 0
    }]
  },
  2: {
    label: '应用下载数据',
    value: 2,
    check: false,
    checks: [],
    children: [{
      label: "安卓下载开始数",
      value: "download_started",
      flag: 0
    }, {
      label: "安卓下载完成数",
      value: "download_completed",
      flag: 0
    }, {
      label: "激活数",
      value: "activation",
      flag: 0
    }, {
      label: "激活成本",
      value: "active_cost",
      flag: 0
    }, {
      label: "首日付费次数",
      value: "event_pay_first_day",
      flag: 0
    }, {
      label: "首日付费金额",
      value: "event_pay_purchase_amount_first_day",
      flag: 0
    }, {
      label: "首日ROI（%）",
      value: "event_pay_first_day_roi",
      flag: 1
    }, {
      label: "付费次数",
      value: "event_pay",
      flag: 0
    }, {
      label: "新增付费人数",
      value: "event_new_user_pay",
      flag: 0
    }, {
      label: "新增付费人数成本",
      value: "event_new_user_pay_cost",
      flag: 0
    }, {
      label: "新增付费人数率",
      value: "event_new_user_pay_ratio",
      flag: 0
    }, {
      label: "付费金额",
      value: "event_pay_purchase_amount",
      flag: 0
    }, {
      label: "ROI（%）",
      value: "event_pay_roi",
      flag: 1
    }, {
      label: "注册数",
      value: "event_register",
      flag: 0
    }, {
      label: "注册成本",
      value: "event_register_cost",
      flag: 0
    }, {
      label: "注册率（%）",
      value: "event_register_ratio",
      flag: 1
    }, {
      label: "完件数",
      value: "event_jin_jian_app",
      flag: 0
    }, {
      label: "完件成本",
      value: "event_jin_jian_app_cost",
      flag: 0
    }, {
      label: "授信数",
      value: "event_credit_grant_app",
      flag: 0
    }, {
      label: "授信成本",
      value: "event_credit_grant_app_cost",
      flag: 0
    }, {
      label: "授信率（%）",
      value: "event_credit_grant_app_ratio",
      flag: 1
    },
    // {
    //     label: "付款成功数",
    //     value: "event_order_paid",
    //     flag:0
    // },
    // {
    //     label: "付款成功金额",
    //     value: "event_order_paid_purchase_amount",
    //     flag:0
    // },
    // {
    //     label: "单次付款成本",
    //     value: "event_order_paid_cost",
    //     flag:0
    // },
    {
      label: "次留数",
      value: "event_next_day_stay",
      flag: 0
    }, {
      label: "次留成本",
      value: "event_next_day_stay_cost",
      flag: 0
    }, {
      label: "次留率（%）",
      value: "event_next_day_stay_ratio",
      flag: 1
    }, {
      label: "关键行为数",
      value: "key_action",
      flag: 0
    }, {
      label: "关键行为成本",
      value: "key_action_cost",
      flag: 0
    }, {
      label: "关键行为率（%）",
      value: "key_action_ratio",
      flag: 1
    }]
  },
  3: {
    label: '落地页数据',
    value: 3,
    check: false,
    checks: [],
    children: [{
      label: "表单提交数",
      value: "form_count",
      flag: 0
    }, {
      label: "表单提交单价",
      value: "form_cost",
      flag: 0
    }, {
      label: "表单提交点击率（%）",
      value: "form_action_ratio",
      flag: 1
    }, {
      label: "落地页完件数",
      value: "event_jin_jian_landing_page",
      flag: 0
    }, {
      label: "落地页完件成本",
      value: "event_jin_jian_landing_page_cost",
      flag: 0
    }, {
      label: "落地页授信数",
      value: "event_credit_grant_landing_page",
      flag: 0
    }, {
      label: "落地页授信成本",
      value: "event_credit_grant_landing_page_cost",
      flag: 0
    }, {
      label: "落地页授信率（%）",
      value: "event_credit_grant_landing_page_ratio",
      flag: 1
    }, {
      label: "有效线索数",
      value: "event_valid_clues",
      flag: 0
    }, {
      label: "有效线索成本",
      value: "event_valid_clues_cost",
      flag: 0
    },
    // {
    //     label: "微信复制数",
    //     value: "event_add_wechat",
    //     flag:0
    // },
    // {
    //     label: "微信复制成本",
    //     value: "event_add_wechat_cost",
    //     flag:0
    // },
    // {
    //     label: "微信复制率（%）",
    //     value: "event_add_wechat_ratio",
    //     flag:1
    // },
    {
      label: "智能电话-确认接通数",
      value: "event_get_through",
      flag: 0
    }, {
      label: "智能电话-确认接通成本",
      value: "event_get_through_cost",
      flag: 0
    }, {
      label: "智能电话-确认接通率（%）",
      value: "event_get_through_ratio",
      flag: 1
    }]
  }
};

// 指标数据
var ttIndicatorsOptions = {
  0: {
    label: '展现数据',
    value: 0,
    check: false,
    checks: [],
    children: [{
      label: "总花费",
      value: "cost",
      flag: 0
    }, {
      label: "展示数",
      value: "show",
      flag: 0
    }, {
      label: "平均千次展现费用",
      value: "avg_show_cost",
      flag: 0
    }, {
      label: "点击数",
      value: "click",
      flag: 0
    }, {
      label: "平均点击单价",
      value: "avg_click_cost",
      flag: 0
    }, {
      label: "点击率（%）",
      value: "ctr",
      flag: 1
    }]
  },
  1: {
    label: '转化数据',
    value: 1,
    check: false,
    checks: [],
    children: [{
      label: "转化数",
      value: "convert",
      flag: 0
    }, {
      label: "转化成本",
      value: "convert_cost",
      flag: 0
    }, {
      label: "转化率（%）",
      value: "convert_rate",
      flag: 1
    }, {
      label: "深度转化数",
      value: "deep_convert",
      flag: 0
    }, {
      label: "深度转化成本",
      value: "deep_convert_cost",
      flag: 0
    }, {
      label: "深度转化率（%）",
      value: "deep_convert_rate",
      flag: 1
    }]
  },
  2: {
    label: '转化数据（计费时间）',
    value: 2,
    check: false,
    checks: [],
    children: [{
      label: "转化数（计费时间）",
      value: "attribution_convert",
      flag: 0
    }, {
      label: "转化成本（计费时间）",
      value: "attribution_convert_cost",
      flag: 0
    }, {
      label: "深度转化数（计费时间）",
      value: "attribution_deep_convert",
      flag: 0
    }, {
      label: "深度转化成本（计费时间）",
      value: "attribution_deep_convert_cost",
      flag: 0
    }]
  },
  3: {
    label: '应用推广',
    value: 3,
    check: false,
    checks: [],
    children: [{
      label: "安卓下载开始数",
      value: "download_start",
      flag: 0
    }, {
      label: "安卓下载开始成本",
      value: "download_start_cost",
      flag: 0
    }, {
      label: "安卓下载开始率（%）",
      value: "download_start_rate",
      flag: 1
    }, {
      label: "安卓下载完成数",
      value: "download_finish",
      flag: 0
    }, {
      label: "安卓下载完成成本",
      value: "download_finish_cost",
      flag: 0
    }, {
      label: "安卓下载完成率（%）",
      value: "download_finish_rate",
      flag: 1
    },
    // {
    //     label: "点击安装数",
    //     value: "click_install",
    //     flag:0
    // },
    {
      label: "安卓安装完成数",
      value: "install_finish",
      flag: 0
    }, {
      label: "安卓安装完成成本",
      value: "install_finish_cost",
      flag: 0
    }, {
      label: "安卓安装完成率（%）",
      value: "install_finish_rate",
      flag: 1
    }, {
      label: "激活数",
      value: "active",
      flag: 0
    }, {
      label: "激活成本",
      value: "active_cost",
      flag: 0
    }, {
      label: "激活率（%）",
      value: "active_rate",
      flag: 1
    }, {
      label: "注册数",
      value: "register",
      flag: 0
    }, {
      label: "注册成本",
      value: "active_register_cost",
      flag: 0
    }, {
      label: "注册率（%）",
      value: "active_register_rate",
      flag: 1
    },
    // {
    //     label: "支付金额",
    //     value: "active_pay_amount",
    //     flag:0
    // },
    // {
    //     label: "次留回传数（未对回）",
    //     value: "next_day_open",
    //     flag:0
    // },
    // {
    //     label: "次留成本（未对回）",
    //     value: "next_day_open_cost",
    //     flag:0
    // },
    // {
    //     label: "次留率（未对回）（%）",
    //     value: "next_day_open_rate",
    //     flag:1
    // },
    {
      label: "次留数",
      value: "attribution_next_day_open_cnt",
      flag: 1
    }, {
      label: "次留成本",
      value: "attribution_next_day_open_cost",
      flag: 1
    }, {
      label: "次留率（%）",
      value: "attribution_next_day_open_rate",
      flag: 1
    }, {
      label: "关键行为数",
      value: "game_addiction",
      flag: 0
    }, {
      label: "关键行为成本",
      value: "game_addiction_cost",
      flag: 0
    }, {
      label: "关键行为率（%）",
      value: "game_addiction_rate",
      flag: 1
    }, {
      label: "首次付费次数",
      value: "pay_count",
      flag: 0
    }, {
      label: "首次付费成本",
      value: "active_pay_cost",
      flag: 0
    }, {
      label: "首次付费率（%）",
      value: "active_pay_rate",
      flag: 1
    }, {
      label: "完件数",
      value: "loan_completion",
      flag: 0
    }, {
      label: "完件成本",
      value: "loan_completion_cost",
      flag: 0
    }, {
      label: "完件率（%）",
      value: "loan_completion_rate",
      flag: 1
    }, {
      label: "预授信数",
      value: "pre_loan_credit",
      flag: 0
    }, {
      label: "预授信成本",
      value: "pre_loan_credit_cost",
      flag: 0
    }, {
      label: "授信数",
      value: "loan_credit",
      flag: 0
    }, {
      label: "授信成本",
      value: "loan_credit_cost",
      flag: 0
    }, {
      label: "授信率（%）",
      value: "loan_credit_rate",
      flag: 1
    }, {
      label: "APP内访问",
      value: "in_app_uv",
      flag: 0
    }, {
      label: "APP内访问详情页",
      value: "in_app_detail_uv",
      flag: 0
    }, {
      label: "APP内加入购物车",
      value: "in_app_cart",
      flag: 0
    }, {
      label: "APP内付费",
      value: "in_app_pay",
      flag: 0
    }, {
      label: "APP内下单",
      value: "in_app_order",
      flag: 0
    }, {
      label: "7日付费次数（激活时间）",
      value: "attribution_game_pay_7d_count",
      flag: 0
    }, {
      label: "7日付费成本（激活时间）",
      value: "attribution_game_pay_7d_cost",
      flag: 0
    }, {
      label: "7日人均付费次数（激活时间）",
      value: "attribution_active_pay_7d_per_count",
      flag: 0
    }, {
      label: "付费成本",
      value: "game_pay_cost",
      flag: 0
    }, {
      label: "付费次数",
      value: "game_pay_count",
      flag: 0
    }]
  },
  4: {
    label: '线索收集',
    value: 4,
    check: false,
    checks: [],
    children: [{
      label: "点击电话按钮",
      value: "phone",
      flag: 0
    }, {
      label: "表单提交",
      value: "form",
      flag: 0
    }, {
      label: "地图搜索",
      value: "map_search",
      flag: 0
    }, {
      label: "按钮button",
      value: "button",
      flag: 0
    }, {
      label: "关键页面浏览",
      value: "view",
      flag: 0
    }, {
      label: "下载开始",
      value: "download",
      flag: 0
    }, {
      label: "QQ咨询",
      value: "qq",
      flag: 0
    }, {
      label: "抽奖",
      value: "lottery",
      flag: 0
    }, {
      label: "投票",
      value: "vote",
      flag: 0
    }, {
      label: "短信咨询",
      value: "message",
      flag: 0
    }, {
      label: "页面跳转",
      value: "redirect",
      flag: 0
    }, {
      label: "商品购买",
      value: "shopping",
      flag: 0
    }, {
      label: "在线咨询",
      value: "consult",
      flag: 0
    },
    // {
    //     label: "微信复制",
    //     value: "wechat",
    //     flag:0
    // },
    // {
    //     label: "微信内注册数",
    //     value: "wechat_login_count",
    //     flag:0
    // },
    // {
    //     label: "微信内注册数(计费时间)",
    //     value: "attribution_wechat_login_30d_count",
    //     flag:0
    // },
    // {
    //     label: "微信内注册成本",
    //     value: "wechat_login_cost",
    //     flag:0
    // },
    // {
    //     label: "微信内注册成本(计费时间)",
    //     value: "attribution_wechat_login_30d_cost",
    //     flag:0
    // },
    // {
    //     label: "微信内首次付费数",
    //     value: "wechat_first_pay_count",
    //     flag:0
    // },
    // {
    //     label: "微信内首次付费数(计费时间)",
    //     value: "attribution_wechat_first_pay_30d_count",
    //     flag:0
    // },
    // {
    //     label: "微信内首次付费成本",
    //     value: "wechat_first_pay_cost",
    //     flag:0
    // },
    // {
    //     label: "微信内首次付费成本(计费时间)",
    //     value: "attribution_wechat_first_pay_30d_cost",
    //     flag:0
    // },
    // {
    //     label: "微信内首次付费率（%）",
    //     value: "wechat_first_pay_rate",
    //     flag:1
    // },
    // {
    //     label: "微信内首次付费率(计费时间)（%）",
    //     value: "attribution_wechat_first_pay_30d_rate",
    //     flag:1
    // },
    // {
    //     label: "微信内首次付费金额",
    //     value: "wechat_pay_amount",
    //     flag:0
    // },
    // {
    //     label: "微信内首次付费金额(计费时间)",
    //     value: "attribution_wechat_pay_30d_amount",
    //     flag:0
    // },
    // {
    //     label: "微信内首次付费ROI（%）",
    //     value: "attribution_wechat_pay_30d_roi",
    //     flag:1
    // },
    {
      label: "智能电话-确认接通",
      value: "phone_connect",
      flag: 0
    }, {
      label: "智能电话-有效接通",
      value: "phone_effective",
      flag: 0
    }, {
      label: "有效咨询",
      value: "consult_effective",
      flag: 0
    }, {
      label: "建站卡券领取",
      value: "coupon",
      flag: 0
    }, {
      label: "卡券页领取",
      value: "coupon_single_page",
      flag: 0
    }, {
      label: "调起店铺",
      value: "redirect_to_shop",
      flag: 0
    }, {
      label: "店铺收藏",
      value: "poi_collect",
      flag: 0
    }, {
      label: "查看店铺地址",
      value: "poi_address_click",
      flag: 0
    }]
  },
  5: {
    label: '主页数据',
    value: 5,
    check: false,
    checks: [],
    children: [{
      label: "私信数",
      value: "message_action",
      flag: 0
    }, {
      label: "推广页访问量",
      value: "click_landing_page",
      flag: 0
    }, {
      label: "主页商品橱窗访问量",
      value: "click_shopwindow",
      flag: 0
    }, {
      label: "主页内落地页访问量",
      value: "click_website",
      flag: 0
    }, {
      label: "主页下载链接点击量",
      value: "click_download",
      flag: 0
    }, {
      label: "主页内电话拨打点击量",
      value: "click_call_dy",
      flag: 0
    }]
  },
  6: {
    label: '创意组件',
    value: 6,
    check: false,
    checks: [],
    children: [{
      label: "附加创意电话按钮点击",
      value: "advanced_creative_phone_click",
      flag: 0
    }, {
      label: "附加创意在线咨询点击",
      value: "advanced_creative_counsel_click",
      flag: 0
    }, {
      label: "附加创意表单按钮点击",
      value: "advanced_creative_form_click",
      flag: 0
    }, {
      label: "附加创意卡券领取",
      value: "advanced_creative_coupon_addition",
      flag: 0
    }, {
      label: "附加创意表单提交",
      value: "advanced_creative_form_submit",
      flag: 0
    }]
  },
  7: {
    label: '视频数据',
    value: 7,
    check: false,
    checks: [],
    children: [{
      label: "播放数",
      value: "total_play",
      flag: 0
    },
    // {
    //     label: "播完率（%）",
    //     value: "play_over_rate",
    //     flag:1
    // },
    // {
    //     label: "播放时长",
    //     value: "play_duration_sum",
    //     flag:0
    // },
    // {
    //     label: "播放10秒",
    //     value: "play_duration_10s",
    //     flag:0
    // },
    // {
    //     label: "播放3s",
    //     value: "play_duration_3s",
    //     flag:0
    // },
    // {
    //     label: "播放2秒",
    //     value: "play_duration_2s",
    //     flag:0
    // },
    // {
    //     label: "平均视频播放量",
    //     value: "average_video_play",
    //     flag:0
    // },
    {
      label: "平均单次播放时长",
      value: "average_play_time_per_play",
      flag: 0
    },
    // {
    //     label: "平均播放进度",
    //     value: "average_play_progress",
    //     flag:0
    // },
    {
      label: "有效播放成本",
      value: "valid_play_cost",
      flag: 0
    }, {
      label: "有效播放数",
      value: "valid_play",
      flag: 0
    }, {
      label: "25%进度播放数",
      value: "play_25_feed_break",
      flag: 0
    }, {
      label: "50%进度播放数",
      value: "play_50_feed_break",
      flag: 0
    }, {
      label: "75%进度播放数",
      value: "play_75_feed_break",
      flag: 0
    }, {
      label: "99%进度播放数",
      value: "play_100_feed_break",
      flag: 0
    }, {
      label: "有效播放率（%）",
      value: "valid_play_rate",
      flag: 1
    },
    // {
    //     label: "10秒播放率（%）",
    //     value: "play_duration_10s_rate",
    //     flag:1
    // },
    // {
    //     label: "5秒播放率（%）",
    //     value: "play_duration_5s_rate",
    //     flag:1
    // },
    // {
    //     label: "3秒播放率（%）",
    //     value: "play_duration_3s_rate",
    //     flag:1
    // },
    // {
    //     label: "2秒播放率（%）",
    //     value: "play_duration_2s_rate",
    //     flag:1
    // },
    // {
    //     label: "100%进度播放率（%）",
    //     value: "play_100_feed_break_rate",
    //     flag:1
    // },
    // {
    //     label: "75%进度播放率（%）",
    //     value: "play_75_feed_break_rate",
    //     flag:1
    // },
    // {
    //     label: "50%进度播放率（%）",
    //     value: "play_50_feed_break_rate",
    //     flag:1
    // },
    // {
    //     label: "25%进度播放率（%）",
    //     value: "play_25_feed_break_rate",
    //     flag:1
    // },
    {
      label: "WiFi播放占比（%）",
      value: "wifi_play_rate",
      flag: 1
    },
    // {
    //     label: "WiFi播放量",
    //     value: "wifi_play",
    //     flag:0
    // },
    {
      label: "3秒卡片展现",
      value: "card_show",
      flag: 0
    }, {
      label: "分享数",
      value: "share",
      flag: 0
    },
    // {
    //     label: "评论数",
    //     value: "comment",
    //     flag:0
    // },
    {
      label: "点赞数",
      value: "like",
      flag: 0
    }, {
      label: "新增关注数",
      value: "follow",
      flag: 0
    }, {
      label: "主页访问量",
      value: "home_visited",
      flag: 0
    }, {
      label: "挑战赛查看数",
      value: "ies_challenge_click",
      flag: 0
    }, {
      label: "音乐查看数",
      value: "ies_music_click",
      flag: 0
    }, {
      label: "POI点击数",
      value: "location_click",
      flag: 0
    }]
  },
  8: {
    label: '直播间数据',
    value: 8,
    check: false,
    checks: [],
    children: [{
      label: "直播间观看数",
      value: "luban_live_enter_cnt",
      flag: 0
    }, {
      label: "直播间超过1分钟观看数",
      value: "live_watch_one_minute_count",
      flag: 0
    }, {
      label: "直播间关注数",
      value: "luban_live_follow_cnt",
      flag: 0
    }, {
      label: "直播间加入粉丝团",
      value: "live_fans_club_join_cnt",
      flag: 0
    }, {
      label: "直播间评论数",
      value: "luban_live_comment_cnt",
      flag: 0
    }, {
      label: "直播间分享数",
      value: "luban_live_share_cnt",
      flag: 0
    }, {
      label: "直播间打赏次数",
      value: "luban_live_gift_cnt",
      flag: 0
    }, {
      label: "直播间礼物总金额",
      value: "luban_live_gift_amount",
      flag: 0
    }, {
      label: "直播间查看购物车数",
      value: "luban_live_slidecart_click_cnt",
      flag: 0
    }, {
      label: "直播间点击商品数",
      value: "luban_live_click_product_cnt",
      flag: 0
    }, {
      label: "直播间订单量",
      value: "luban_live_pay_order_count",
      flag: 0
    }, {
      label: "直播间订单金额",
      value: "luban_live_pay_order_stat_cost",
      flag: 0
    }]
  },
  9: {
    label: '电商行业',
    value: 9,
    check: false,
    checks: [],
    children: [{
      label: "鲁班订单量",
      value: "luban_order_cnt",
      flag: 0
    }, {
      label: "鲁班订单金额",
      value: "luban_order_stat_amount",
      flag: 0
    }, {
      label: "鲁班ROI（%）",
      value: "luban_order_roi",
      flag: 1
    }]
  },
  10: {
    label: '出行行业',
    value: 10,
    check: false,
    checks: [],
    children: [{
      label: "提交身份认证数",
      value: "submit_certification_count",
      flag: 0
    }, {
      label: "通过身份认证数",
      value: "approval_count",
      flag: 0
    }, {
      label: "乘客首次下单数",
      value: "first_order_count",
      flag: 0
    }, {
      label: "司机首次完单数",
      value: "first_rental_order_count",
      flag: 0
    }, {
      label: "乘客首次支付数",
      value: "commute_first_pay_count",
      flag: 0
    }]
  }
};

// 常用选项数据
var commonOptions = [{
  title: '常用选项1',
  data: [{
    label: '基础表现',
    value: 0,
    check: true,
    checks: [0, 1],
    children: [{
      label: '选项1',
      value: 0
    }, {
      label: '选项2',
      value: 1
    }]
  }, {
    label: '应用下载数据',
    value: 1,
    check: false,
    checks: [3],
    children: [{
      label: '选项1',
      value: 3
    }, {
      label: '选项2',
      value: 4
    }]
  }]
}, {
  title: '常用选项2',
  data: [{
    label: '基础表现',
    value: 0,
    check: true,
    checks: [0],
    children: [{
      label: '选项1',
      value: 0
    }, {
      label: '选项2',
      value: 1
    }]
  }]
}];
var mediaOptions = [{
  value: 'ks',
  label: '快手-磁力',
  mediaId: '6DCBF78511D8BD7DE050007F010034A6'
}, {
  value: 'tt',
  label: '抖音-巨量',
  mediaId: '7B2AF195E8243606E05064ACFD154E37'
}];
//2021-9-22 删除周报选项 , {value: 'W', label: '周报'}
var templateTypeOptions = [{
  value: 'D',
  label: '日报'
}, {
  value: 'H',
  label: '时报'
}];
var templateTypeExpendOptions = [{
  value: 'D',
  label: '日报'
}];
var dimensionOptions = {
  'ks': [{
    value: 'A',
    label: '广告账户'
  }, {
    value: 'P',
    label: '广告计划'
  }, {
    value: 'U',
    label: '广告组'
  }, {
    value: 'C',
    label: '广告创意'
  }],
  'tt': [{
    value: 'A',
    label: '广告账户'
  }, {
    value: 'P',
    label: '广告组'
  }, {
    value: 'U',
    label: '广告计划'
  }, {
    value: 'C',
    label: '广告创意'
  }]
};
var reportDimsOptions = [{
  value: '0',
  label: '不设置'
}, {
  value: 'adScene',
  label: '投放位置'
}];
var temporalGranularityOptions = [{
  value: 'DAILY',
  label: '分日'
}, {
  value: 'HOURLY',
  label: '分时'
}];

// 主表格的列参数
var columns = [{
  label: '模板名称',
  prop: 'templateName',
  'show-overflow-tooltip': true
}, {
  label: '媒体',
  prop: 'mediaTypeName',
  'show-overflow-tooltip': true
}, {
  label: '类型',
  prop: 'templateTypeName',
  'show-overflow-tooltip': true
}, {
  label: '接收邮箱',
  prop: 'emailAddress',
  'show-overflow-tooltip': true
}, {
  label: '创建时间',
  prop: 'createDate',
  'show-overflow-tooltip': true
}, {
  label: '操作',
  prop: 'operation'
}];


/***/ }),

/***/ "e4de":
/*!*************************************************************!*\
  !*** ./src/views/system/auxiliary/daily/dialogTemplate.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialogTemplate_vue_vue_type_template_id_da0cd3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogTemplate.vue?vue&type=template&id=da0cd3b0& */ "dea5");
/* harmony import */ var _dialogTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogTemplate.vue?vue&type=script&lang=js& */ "24d5");
/* empty/unused harmony star reexport *//* harmony import */ var _dialogTemplate_vue_vue_type_style_index_0_id_da0cd3b0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogTemplate.vue?vue&type=style&index=0&id=da0cd3b0&prod&lang=scss& */ "3f22");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "0c7c");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dialogTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dialogTemplate_vue_vue_type_template_id_da0cd3b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dialogTemplate_vue_vue_type_template_id_da0cd3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "fb9f":
/*!***********************************************************************************!*\
  !*** ./src/views/system/auxiliary/daily/index.vue?vue&type=template&id=5bb3f52a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_index_vue_vue_type_template_id_5bb3f52a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!../../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./index.vue?vue&type=template&id=5bb3f52a& */ "af5c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_index_vue_vue_type_template_id_5bb3f52a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_index_vue_vue_type_template_id_5bb3f52a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
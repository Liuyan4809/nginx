(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-36727fc6"],{

/***/ "0be6":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/home/customersHome/doubleLine.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      leftSelectCheckedLabel: '花费（元）',
      rightSelectCheckedLabel: '花费（元）',
      leftValue: 'charge',
      rightValue: 'charge',
      time: '',
      PlacingCustomer: [],
      myChart: null // echarts实例
    };
  },

  props: {
    doubleLineObj: Object
  },
  watch: {
    doubleLineObj: {
      handler: function handler(newval, oldval) {
        this.PlacingCustomer = this.$deepCopy(newval.PlacingCustomerData || []);
        var selectList = newval.selectList || {};
        this.leftSelectCheckedLabel = selectList.leftSelectCheckedLabel;
        this.rightSelectCheckedLabel = selectList.rightSelectCheckedLabel;
        this.leftValue = selectList.leftValue;
        this.rightValue = selectList.rightValue;
        this.time = selectList.time;
        this.lineEcharts();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    /* 画折线图 */lineEcharts: function lineEcharts() {
      var vm = this;
      var myChart = vm.myChart;
      if (myChart) myChart.dispose();
      var colors = ['#54a5e3', '#ff6c7a'];
      /* 主色调 */
      // 设置数组
      var dateData = [],
        leftData = [],
        rightData = [];
      var ksData = this.PlacingCustomer;

      //将需要展示的信息显示
      for (var i = 0; i < ksData.length; i++) {
        var param = ksData[i];
        dateData.push(param[this.time]);
        leftData.push(param[this.leftValue]);
        rightData.push(param[this.rightValue]);
      }
      var series = [],
        legend = [];
      legend.push(this.leftSelectCheckedLabel);
      series.push({
        name: this.leftSelectCheckedLabel,
        type: 'line',
        data: leftData,
        yAxisIndex: 0,
        smooth: true,
        itemStyle: {
          color: colors[0]
        },
        lineStyle: {
          width: 2,
          shadowColor: colors[0],
          shadowBlur: 10,
          shadowOffsetY: 8,
          opacity: 0.6
        }
      });

      // 如果两个维度选择不相同
      if (this.leftValue !== this.rightValue) {
        legend.push(this.rightSelectCheckedLabel);
        series.push({
          name: this.rightSelectCheckedLabel,
          type: 'line',
          data: rightData,
          yAxisIndex: 1,
          smooth: true,
          itemStyle: {
            color: colors[1]
          },
          lineStyle: {
            width: 2,
            shadowColor: colors[1],
            shadowBlur: 10,
            shadowOffsetY: 8,
            opacity: 0.6
          }
        });
      } else {
        legend.push(this.rightSelectCheckedLabel);
        series.push({
          name: this.rightSelectCheckedLabel,
          type: 'line',
          data: [],
          yAxisIndex: 1,
          smooth: true,
          itemStyle: {
            color: colors[1]
          },
          lineStyle: {
            width: 2,
            shadowColor: colors[1],
            shadowBlur: 10,
            shadowOffsetY: 8,
            opacity: 0.6
          }
        });
      }
      var option = {
        tooltip: {
          /* 鼠标悬停展示样式 */
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          /* x,y的标注文字 */
          data: legend
        },
        grid: {
          /* 展示位置 */
          x: 110,
          x2: '5%'
        },
        calculable: false,
        xAxis: [/* x轴设置 */
        {
          type: 'category',
          // x轴的刻度数据
          data: dateData,
          // 去掉连接x轴的竖线
          splitLine: {
            show: false
          },
          // 显示x轴所有的数据
          boundaryGap: true
        }],
        yAxis: [/* y轴设置 */
        {
          type: 'value',
          name: vm.leftSelectCheckedLabel,
          position: 'left',
          axisLine: {
            lineStyle: {
              color: colors[0]
            }
          },
          splitLine: {
            lineStyle: {
              color: '#eee',
              type: 'dashed'
            }
          },
          axisLabel: {
            formatter: '{value}'
          }
        }, {
          type: 'value',
          name: vm.rightSelectCheckedLabel /* 坐标轴名字 */,
          position: 'right' /* 坐标轴位置 */,
          axisLine: {
            /* 折线颜色 */
            lineStyle: {
              color: colors[1]
            }
          },
          splitLine: {
            /* 背景线 */
            lineStyle: {
              color: '#eee',
              type: 'dashed'
            }
          },
          axisLabel: {
            formatter: '{value}'
          }
        }],
        /* 线的具体数据 */
        series: series
      };
      vm.$nextTick(function () {
        // TODO 临时解决方法
        setTimeout(function () {
          // 基于准备好的dom，初始化echarts实例
          myChart = vm.$echarts.init(vm.$refs['ECharts']);
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
          vm.myChart = myChart;
          myChart.resize();
        }, 200);
        window.onresize = function () {
          myChart.resize();
        };
      });
    }
  }
});

/***/ }),

/***/ "15b3":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/home/customersHome/doubleLine.vue?vue&type=style&index=0&id=51a663c2&prod&scoped=scoped&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "22d4":
/*!********************************************************!*\
  !*** ./src/views/home/customersHome/customersHome.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customersHome_vue_vue_type_template_id_6c5c9f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customersHome.vue?vue&type=template&id=6c5c9f70&scoped=true& */ "b5ab");
/* harmony import */ var _customersHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customersHome.vue?vue&type=script&lang=js& */ "a373");
/* empty/unused harmony star reexport *//* harmony import */ var _customersHome_vue_vue_type_style_index_0_id_6c5c9f70_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customersHome.vue?vue&type=style&index=0&id=6c5c9f70&prod&scoped=true&lang=scss& */ "6765");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "0c7c");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _customersHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customersHome_vue_vue_type_template_id_6c5c9f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customersHome_vue_vue_type_template_id_6c5c9f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c5c9f70",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2595":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/home/customersHome/doubleLine.vue?vue&type=style&index=0&id=51a663c2&prod&scoped=scoped&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_doubleLine_vue_vue_type_style_index_0_id_51a663c2_prod_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./doubleLine.vue?vue&type=style&index=0&id=51a663c2&prod&scoped=scoped&lang=scss& */ "15b3");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_doubleLine_vue_vue_type_style_index_0_id_51a663c2_prod_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_doubleLine_vue_vue_type_style_index_0_id_51a663c2_prod_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_doubleLine_vue_vue_type_style_index_0_id_51a663c2_prod_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_doubleLine_vue_vue_type_style_index_0_id_51a663c2_prod_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "2f89":
/*!******************************************************************************!*\
  !*** ./src/views/home/customersHome/doubleLine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_doubleLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../node_modules/babel-loader/lib!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./doubleLine.vue?vue&type=script&lang=js& */ "0be6");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_doubleLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "3e12":
/*!*****************************************************!*\
  !*** ./src/views/home/customersHome/doubleLine.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doubleLine_vue_vue_type_template_id_51a663c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doubleLine.vue?vue&type=template&id=51a663c2&scoped=true& */ "8f72");
/* harmony import */ var _doubleLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doubleLine.vue?vue&type=script&lang=js& */ "2f89");
/* empty/unused harmony star reexport *//* harmony import */ var _doubleLine_vue_vue_type_style_index_0_id_51a663c2_prod_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doubleLine.vue?vue&type=style&index=0&id=51a663c2&prod&scoped=scoped&lang=scss& */ "2595");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "0c7c");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _doubleLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _doubleLine_vue_vue_type_template_id_51a663c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _doubleLine_vue_vue_type_template_id_51a663c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "51a663c2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5016":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/home/customersHome/customersHome.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _config_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/data.js */ "bd1f");
/* harmony import */ var _doubleLine_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doubleLine.vue */ "3e12");
/* harmony import */ var _config_ports_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/ports.js */ "7f32");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var WATCH_NAMESPACE = "$store.state.customersHome"; // 当前命名空间__watch监听用
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    //七天前日期
    var startDate = new Date(new Date() - 7 * 24 * 3600 * 1000);
    return {
      userId: this.$store.state.currentUser.loginUserInfo.roleId /* 当前登录的用户ID */,
      userType: this.$store.state.currentUser.loginUserInfo.userType /* 当前登录用户的用户类型（0：运营；1：运营,2:媒体，3：客户，4：设计） */,
      placingType: 0 /* 当前账户类型  0:DSP 1:快手*/,
      UserPlacing: "" /*  用户投放 */,
      placingSelectData: [] /* 用户投放列表  */,
      PlacingCustomerData: [] /* eachrts信息  */,
      PlacingCustomerDataCost: {} /*  本地投放信息  */,
      balance: "媒体币余额(元)",
      lastCost: "昨日消耗(元)",
      nowCost: "本日预算(元)",
      selectList: {
        /* 折线图数据 */
        leftSelectCheckedLabel: "",
        rightSelectCheckedLabel: "",
        leftValue: "",
        rightValue: "",
        time: "scheDate"
      },
      leftOptions: _config_data_js__WEBPACK_IMPORTED_MODULE_0__["placingSelectBase"] /* 左边下拉框 */,
      rightOptions: _config_data_js__WEBPACK_IMPORTED_MODULE_0__["placingSelectBase"] /* 右边下拉框 */,
      formInline: {
        /* 搜索条件 */
        condDate: [startDate, new Date()] /*, 时间范围 */
      },

      changeFlag: true,
      doubleLineObj: {
        PlacingCustomerData: [],
        selectList: {
          /* 折线图数据 */
          leftSelectCheckedLabel: "",
          rightSelectCheckedLabel: "",
          leftValue: "",
          rightValue: "",
          time: "scheDate"
        }
      },
      paramConfig: {
        pageIndex: 'pageNumber',
        pageSize: 'pageSize',
        prop: 'sortObject',
        order: 'sort',
        ascending: 'asc',
        descending: 'desc'
      },
      responseConfig: {
        total: 'data.pagedData.dataCount',
        data: 'data.pagedData.dataList',
        summary: 'data.pagedData.dataVO'
      },
      columns: _config_data_js__WEBPACK_IMPORTED_MODULE_0__["customList"],
      targets: [],
      container: null
    };
  },
  computed: {
    params: function params() {
      var vm = this;
      var params = {
        condStartDate: this.$date2String(vm.formInline.condDate[0], "yyyy-MM-dd"),
        //开始时间 2020-12-12
        condEndDate: this.$date2String(vm.formInline.condDate[1], "yyyy-MM-dd"),
        //结束时间 2020-12-12
        placingId: "",
        //设置投放id（placingType=0时必传，否则不传）
        ksAdvertiserId: "" //快手广告主id（placingType=1时必传，，否则不传）
      };

      if (vm.placingType == 0) {
        params.placingId = vm.UserPlacing;
      }
      if (vm.placingType == 1) {
        params.ksAdvertiserId = vm.UserPlacing;
      }
      return params;
    }
  },
  watch: {
    selectList: {
      handler: function handler(newval, oldval) {
        this.changeFlag = false;
        this.$nextTick(function () {
          this.changeFlag = true;
        });
      },
      deep: true,
      immediate: true
    }
  },
  components: {
    doubleLine: _doubleLine_vue__WEBPACK_IMPORTED_MODULE_1__["default"] /* echarts子组件 */
  },

  methods: {
    /* 用户投放值改变 */UserPlacingChange: function UserPlacingChange(val) {
      var vm = this;
      var listitem = vm.placingSelectData.filter(function (item) {
        return item.value == val;
      });
      if (listitem[0]) {
        if (listitem[0].placingType !== "1") {
          /* DSP */
          vm.PlacingCustomer(val);
          this.placingType = 0;
        } else {
          /* 快手 */
          vm.KsAdvertiser(val);
          this.placingType = 1;
        }
      } else {
        /* DSP */
        vm.PlacingCustomer(val);
        this.placingType = 0;
      }
    },
    PlacingCustomer: function PlacingCustomer(placingId) {
      /* 本地投放信息查询 */
      var vm = this;
      Object(_config_ports_js__WEBPACK_IMPORTED_MODULE_2__["SearchPlacingCustomerHomeInfo"])({
        placingId: placingId
      }).then(function (res) {
        vm.PlacingCustomerData = res.data.dataList;
        vm.PlacingCustomerDataCost = res.data;
        vm.balance = "媒体币余额(元)";
        vm.lastCost = "昨日消耗(元)";
        vm.nowCost = "本日预算(元)";
        vm.leftOptions = _config_data_js__WEBPACK_IMPORTED_MODULE_0__["placingSelectBase"];
        vm.rightOptions = _config_data_js__WEBPACK_IMPORTED_MODULE_0__["placingSelectBase"];
        vm.selectList.leftSelectCheckedLabel = "媒体币消耗";
        vm.selectList.rightSelectCheckedLabel = "媒体币消耗";
        vm.selectList.leftValue = "consumeMoney";
        vm.selectList.rightValue = "consumeMoney";
        vm.selectList.time = "scheDate";
        vm.doubleLineObj.PlacingCustomerData = res.data.dataList;
        vm.doubleLineObj.selectList = vm.selectList;
      });
    },
    KsAdvertiser: function KsAdvertiser(ksAdvertiserId) {
      /* 快手投放信息查询 */
      var vm = this;
      Object(_config_ports_js__WEBPACK_IMPORTED_MODULE_2__["SearchKsAdvertiserHomeInfo"])({
        ksAdvertiserId: ksAdvertiserId
      }).then(function (res) {
        vm.PlacingCustomerData = res.data.dataList;
        vm.PlacingCustomerDataCost = res.data;
        vm.balance = "账户余额(元)";
        vm.nowCost = "本日实时花费(元)";
        vm.lastCost = "昨日花费(元)";
        vm.leftOptions = _config_data_js__WEBPACK_IMPORTED_MODULE_0__["ksSelectBase"];
        vm.rightOptions = _config_data_js__WEBPACK_IMPORTED_MODULE_0__["ksSelectBase"];
        vm.selectList.leftSelectCheckedLabel = "花费（元）";
        vm.selectList.rightSelectCheckedLabel = "花费（元）";
        vm.selectList.leftValue = "charge";
        vm.selectList.rightValue = "charge";
        vm.selectList.time = "statDate";
        vm.doubleLineObj.PlacingCustomerData = res.data.dataList;
        vm.doubleLineObj.selectList = vm.selectList;
      });
    },
    /* 点击左侧下拉框数据改变 */leftSelectChange: function leftSelectChange(val) {
      var vm = this;
      var listitem = vm.leftOptions.filter(function (item) {
        return item.value == val;
      });
      vm.selectList.leftSelectCheckedLabel = listitem[0].label;
      vm.doubleLineObj.selectList = vm.selectList;
    },
    /* 点击右侧下拉框数据改变 */rightSelectChange: function rightSelectChange(val) {
      var vm = this;
      var listitem = vm.rightOptions.filter(function (item) {
        return item.value == val;
      });
      vm.selectList.rightSelectCheckedLabel = listitem[0].label;
      vm.doubleLineObj.selectList = vm.selectList;
    },
    derive: function derive() {
      // 导出数据
      var vm = this;
      Object(_config_ports_js__WEBPACK_IMPORTED_MODULE_2__["ExportAccountFlowList"])(vm.$refs.table._params, "账户流水信息.xlsx").then(function (res) {});
    },
    onLoaded: function onLoaded() {
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
    }
  },
  created: function created() {
    this.PlacingCustomer(this.UserPlacing);
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

/***/ "6765":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/home/customersHome/customersHome.vue?vue&type=style&index=0&id=6c5c9f70&prod&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_customersHome_vue_vue_type_style_index_0_id_6c5c9f70_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./customersHome.vue?vue&type=style&index=0&id=6c5c9f70&prod&scoped=true&lang=scss& */ "e037");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_customersHome_vue_vue_type_style_index_0_id_6c5c9f70_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_customersHome_vue_vue_type_style_index_0_id_6c5c9f70_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_customersHome_vue_vue_type_style_index_0_id_6c5c9f70_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_customersHome_vue_vue_type_style_index_0_id_6c5c9f70_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "7f32":
/*!******************************************************!*\
  !*** ./src/views/home/customersHome/config/ports.js ***!
  \******************************************************/
/*! exports provided: SearchPlacingCustomerHomeInfo, SearchKsAdvertiserHomeInfo, ExportAccountFlowList, departmentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPlacingCustomerHomeInfo", function() { return SearchPlacingCustomerHomeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchKsAdvertiserHomeInfo", function() { return SearchKsAdvertiserHomeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportAccountFlowList", function() { return ExportAccountFlowList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "departmentList", function() { return departmentList; });
/* harmony import */ var _request_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/request/request */ "3b11");


/* 客户及运营首页 */
/* 本地投放信息查询 */
var SearchPlacingCustomerHomeInfo = function SearchPlacingCustomerHomeInfo() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ["/homHomePage/query/doSearchPlacingCustomerHomeInfo"].concat(params));
}; //customersHome
/* 快手投放信息查询 */
var SearchKsAdvertiserHomeInfo = function SearchKsAdvertiserHomeInfo() {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["post"].apply(void 0, ["/homHomePage/query/doSearchKsAdvertiserHomeInfo"].concat(params));
}; //customersHome
/* 客户首页一账户流水信息导出 */
var ExportAccountFlowList = function ExportAccountFlowList() {
  for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["downloadFile"].apply(void 0, ["/homHomePage/export/doExportAccountFlowListInfo"].concat(params));
}; //customersHome
// 获取登录人员部门列表
var departmentList = function departmentList() {
  for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    params[_key4] = arguments[_key4];
  }
  return _request_request__WEBPACK_IMPORTED_MODULE_0__["get"].apply(void 0, ["/statistics/ad/platform/statistics/board/get/departmentList"].concat(params));
};

/***/ }),

/***/ "8f72":
/*!************************************************************************************************!*\
  !*** ./src/views/home/customersHome/doubleLine.vue?vue&type=template&id=51a663c2&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_doubleLine_vue_vue_type_template_id_51a663c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../node_modules/babel-loader/lib!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./doubleLine.vue?vue&type=template&id=51a663c2&scoped=true& */ "90c6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_doubleLine_vue_vue_type_template_id_51a663c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_doubleLine_vue_vue_type_template_id_51a663c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "90c6":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/home/customersHome/doubleLine.vue?vue&type=template&id=51a663c2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    ref: "ECharts",
    staticClass: "echarts"
  });
};
var staticRenderFns = [];


/***/ }),

/***/ "a373":
/*!*********************************************************************************!*\
  !*** ./src/views/home/customersHome/customersHome.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_customersHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../node_modules/babel-loader/lib!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./customersHome.vue?vue&type=script&lang=js& */ "5016");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_customersHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "b5ab":
/*!***************************************************************************************************!*\
  !*** ./src/views/home/customersHome/customersHome.vue?vue&type=template&id=6c5c9f70&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_customersHome_vue_vue_type_template_id_6c5c9f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!../../../../node_modules/babel-loader/lib!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./customersHome.vue?vue&type=template&id=6c5c9f70&scoped=true& */ "dd84");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_customersHome_vue_vue_type_template_id_6c5c9f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1676cf96_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_vue_cli_plugin_babel_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_8_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unocss_3Awebpack_customersHome_vue_vue_type_template_id_6c5c9f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "bd1f":
/*!*****************************************************!*\
  !*** ./src/views/home/customersHome/config/data.js ***!
  \*****************************************************/
/*! exports provided: advertiserColumns, optimizerColumns, placingSelectBase, ksSelectBase, customList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advertiserColumns", function() { return advertiserColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizerColumns", function() { return optimizerColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placingSelectBase", function() { return placingSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ksSelectBase", function() { return ksSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customList", function() { return customList; });
var advertiserColumns = [{
  key: 'advertiserName',
  prop: 'advertiserName',
  label: '投放账户'
}, {
  key: 'userName',
  prop: 'userName',
  label: '优化师'
}, {
  key: 'dayTotalCost',
  prop: 'dayTotalCost',
  label: '今日消耗',
  sortable: true
}];
var optimizerColumns = [{
  key: 'userName',
  prop: 'userName',
  label: '优化师'
}, {
  key: 'monthTotalCost',
  prop: 'monthTotalCost',
  label: '本月消耗',
  sortable: true
}, {
  key: 'dayTotalCost',
  prop: 'dayTotalCost',
  label: '今日消耗',
  sortable: true
}, {
  key: 'todayUnitNum',
  prop: 'todayUnitNum',
  label: '今日广告搭建量',
  sortable: true
}, {
  key: 'todayActiveNum',
  prop: 'todayActiveNum',
  label: '今日活跃户数量',
  sortable: true
}, {
  key: 'materialUsedRate',
  prop: 'materialUsedRate',
  label: '近7日自产素材使用率（素材使用数 / 素材总数）',
  sortable: true,
  width: '320px'
}];
// 快手基础选择
var ksSelectBase = [{
  label: "花费（元）",
  value: "charge"
}, {
  label: "封面曝光数",
  value: "show"
}, {
  label: "封面点击数",
  value: "photoClick"
}, {
  label: "素材曝光数",
  value: "aclick"
}, {
  label: "行为数",
  value: "bclick"
}, {
  label: "封面点击率",
  value: "photoClickRatio"
}, {
  label: "行为率",
  value: "actionRatio"
}, {
  label: "平均千次曝光花费（元）",
  value: "impression1kCost"
}, {
  label: "平均点击单价（元）",
  value: "photoClickCost"
}, {
  label: "平均行为单价（元）",
  value: "actionCost"
}, {
  label: "分享数",
  value: "ksShare"
}, {
  label: "评论数",
  value: "ksComment"
}, {
  label: "点赞数",
  value: "ksLike"
}, {
  label: "新增关注数",
  value: "follow"
}, {
  label: "取消关注数",
  value: "cancelFollow"
}, {
  label: "举报数",
  value: "report"
}, {
  label: "拉黑数",
  value: "ksBlock"
}, {
  label: "减少此类作品数",
  value: "negative"
}, {
  label: "提交按钮点击数",
  value: "submit"
}, {
  label: "应用下载数据-安卓下载开始数",
  value: "downloadStarted"
}, {
  label: "应用下载数据-安卓下载完成数",
  value: "downloadCompleted"
}, {
  label: "应用下载数据-激活数",
  value: "activation"
}, {
  label: "应用下载数据-激活单价",
  value: "activeUnitPrice"
}, {
  label: "应用下载数据-下载完成激活率",
  value: "dCompletedActivationRatio"
}, {
  label: "应用下载数据-首日付费次数",
  value: "ePayFirstDay"
}, {
  label: "应用下载数据-首日付费金额",
  value: "ePayPurchaseAmountFirstDay"
}, {
  label: "应用下载数据-首日ROI",
  value: "ePayFirstDayRoi"
}, {
  label: "应用下载数据-付费次数",
  value: "ePay"
}, {
  label: "应用下载数据-付费金额",
  value: "ePayPurchaseAmount"
}, {
  label: "应用下载数据-ROI",
  value: "ePayRoi"
}, {
  label: "应用下载数据-注册数",
  value: "eRegister"
}, {
  label: "应用下载数据-注册成本",
  value: "eRegisterCost"
}, {
  label: "应用下载数据-注册率",
  value: "eRegisterRatio"
}, {
  label: "应用下载数据-完件数",
  value: "eJinJianApp"
}, {
  label: "应用下载数据-完件成本",
  value: "eJinJianAppCost"
}, {
  label: "应用下载数据-授信数",
  value: "eCreditGrantApp"
}, {
  label: "应用下载数据-授信成本",
  value: "eCreditGrantAppCost"
}, {
  label: "应用下载数据-授信率",
  value: "eCreditGrantAppRatio"
}, {
  label: "应用下载数据-付款成功数",
  value: "eOrderPaid"
}, {
  label: "应用下载数据-付款成功金额",
  value: "eOrderPaidPurchaseAmount"
}, {
  label: "应用下载数据-单次付款成本",
  value: "eOrderPaidCost"
}, {
  label: "落地页数据-表单提交数",
  value: "formCount"
}, {
  label: "落地页数据-表单提交单价",
  value: "formCost"
}, {
  label: "落地页数据-表单提交点击率",
  value: "formActionRatio"
}, {
  label: "落地页数据-落地页完件数",
  value: "eJinJianLandingPage"
}, {
  label: "落地页数据-落地页完件成本",
  value: "eJinJianLandingPageCost"
}, {
  label: "落地页数据-落地页授信数",
  value: "eCreditGrantLandingPage"
}, {
  label: "落地页数据-落地页授信成本",
  value: "eCreditGrantLandingPageCost"
}, {
  label: "落地页数据-落地页授信率",
  value: "eCreditGrantLandingRatio"
}];
var customList = [{
  prop: 'scheduleDate',
  label: '日期',
  sortable: 'custom'
}, {
  prop: 'inputMoney',
  label: '转入(元)',
  sortable: 'custom'
}, {
  prop: 'outputMoney',
  label: '转出(元)',
  sortable: 'custom'
}, {
  prop: 'consumeMoney',
  label: '消耗(元)',
  sortable: 'custom'
}];
var placingSelectBase = [{
  label: "媒体币消耗",
  value: "consumeMoney"
}];


/***/ }),

/***/ "dd84":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1676cf96-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--8!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/home/customersHome/customersHome.vue?vue&type=template&id=6c5c9f70&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "home"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', {
    staticClass: "iconfont iconbiaoti-"
  }), _c('el-select', {
    attrs: {
      "filterable": ""
    },
    on: {
      "change": _vm.UserPlacingChange
    },
    model: {
      value: _vm.UserPlacing,
      callback: function callback($$v) {
        _vm.UserPlacing = $$v;
      },
      expression: "UserPlacing"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "账户汇总",
      "value": ""
    }
  }), _vm._l(_vm.placingSelectData, function (item, index) {
    return _c('el-option', {
      key: index,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    }, [_c('span', {
      staticClass: "left"
    }, [_vm._v(_vm._s(item.label))]), _c('span', {
      staticClass: "right"
    }, [_vm._v(_vm._s(item.placingTypeLabel))])]);
  })], 2)], 1), _c('div', {
    staticClass: "text item"
  }, [_c('el-row', {
    staticClass: "row-bg",
    attrs: {
      "type": "flex",
      "justify": "space-around"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('h4', {
    domProps: {
      "textContent": _vm._s(_vm.balance)
    }
  }), _c('p', {
    domProps: {
      "textContent": _vm._s(_vm.PlacingCustomerDataCost.balance)
    }
  })]), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('h4', {
    domProps: {
      "textContent": _vm._s(_vm.nowCost)
    }
  }), _c('p', {
    domProps: {
      "textContent": _vm._s(_vm.PlacingCustomerDataCost.nowCost)
    }
  })]), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('h4', {
    domProps: {
      "textContent": _vm._s(_vm.lastCost)
    }
  }), _c('p', {
    domProps: {
      "textContent": _vm._s(_vm.PlacingCustomerDataCost.lastCost)
    }
  })])], 1)], 1)]), _c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择"
    },
    on: {
      "change": _vm.leftSelectChange
    },
    model: {
      value: _vm.selectList.leftValue,
      callback: function callback($$v) {
        _vm.$set(_vm.selectList, "leftValue", $$v);
      },
      expression: "selectList.leftValue"
    }
  }, _vm._l(_vm.leftOptions, function (item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1)], 1), _c('div', {
    staticClass: "right"
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择"
    },
    on: {
      "change": _vm.rightSelectChange
    },
    model: {
      value: _vm.selectList.rightValue,
      callback: function callback($$v) {
        _vm.$set(_vm.selectList, "rightValue", $$v);
      },
      expression: "selectList.rightValue"
    }
  }, _vm._l(_vm.rightOptions, function (item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1)], 1)]), _c('div', {
    staticClass: "text item data-container"
  }, [_vm.PlacingCustomerData.length && _vm.changeFlag ? _c('doubleLine', {
    attrs: {
      "doubleLineObj": _vm.doubleLineObj
    }
  }) : _c('div', {
    staticClass: "no-data"
  }, [_c('img', {
    staticClass: "no-data--img",
    attrs: {
      "src": __webpack_require__(/*! ../../../assets/images/noData.png */ "f4f0"),
      "alt": "暂无数据"
    }
  }), _c('div', {
    staticClass: "noDataText"
  }, [_vm._v("暂无数据！")])])], 1)]), _vm.userType == 3 || _vm.userType == 5 ? _c('nmg-sticky', {
    attrs: {
      "container": _vm.container,
      "targets": _vm.targets,
      "offset-top": 60
    }
  }, [_c('nmg-table', {
    ref: "table",
    staticStyle: {
      "margin-left": "0",
      "margin-right": "0"
    },
    attrs: {
      "url": "/homHomePage/query/doSearchAccountFlowListInfo",
      "request-type": "post",
      "params": _vm.params,
      "param-config": _vm.paramConfig,
      "response-config": _vm.responseConfig,
      "columns": _vm.columns
    },
    on: {
      "loaded": _vm.onLoaded
    },
    scopedSlots: _vm._u([{
      key: "tools",
      fn: function fn() {
        return [_c('el-form', {
          staticClass: "commonForm is-plain",
          attrs: {
            "inline": true,
            "model": _vm.formInline
          }
        }, [_c('el-form-item', {
          attrs: {
            "label": "账户流水"
          }
        }, [_c('el-date-picker', {
          attrs: {
            "type": "daterange",
            "align": "right",
            "unlink-panels": "",
            "range-separator": "至",
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            "clearable": false,
            "value-format": "yyyy-MM-dd"
          },
          model: {
            value: _vm.formInline.condDate,
            callback: function callback($$v) {
              _vm.$set(_vm.formInline, "condDate", $$v);
            },
            expression: "formInline.condDate"
          }
        })], 1)], 1)];
      },
      proxy: true
    }, {
      key: "handler",
      fn: function fn() {
        return [_c('el-button', {
          attrs: {
            "type": "primary",
            "plain": "",
            "round": ""
          },
          on: {
            "click": _vm.derive
          }
        }, [_vm._v("导出")])];
      },
      proxy: true
    }], null, false, 295598717)
  })], 1) : _vm._e()], 1)]);
};
var staticRenderFns = [];


/***/ }),

/***/ "e037":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unocss%3Awebpack!./src/views/home/customersHome/customersHome.vue?vue&type=style&index=0&id=6c5c9f70&prod&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f4f0":
/*!**************************************!*\
  !*** ./src/assets/images/noData.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/noData.17856ace.png";

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var muff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! muff */ "./node_modules/muff/index.js");
/* harmony import */ var vue_dist_vue_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/dist/vue.esm.js */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-rx */ "./node_modules/vue-rx/dist/vue-rx.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_6__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }








vue_dist_vue_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"].use(vue_rx__WEBPACK_IMPORTED_MODULE_2__["default"]);
var vm = new vue_dist_vue_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  data: {
    inputString: '',
    currentSelected: -1,
    // 結果配列のindexなので選択されていない状態は-1とする
    currentSearchType: 0,
    searchTypes: {
      HISTORY: 1,
      BOOKMARKS: 2,
      TABS: 3
    }
  },
  filters: {
    toUpperFirst: function toUpperFirst(text) {
      text = text.toString();
      return text.toString().charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    },
    toLowerCase: function toLowerCase(text) {
      return text.toString().toLowerCase();
    }
  },
  mounted: function mounted() {
    // 結果の数を設定
    muff__WEBPACK_IMPORTED_MODULE_0__["default"].setReturnListLength(20); // 初期モードはHistory

    this.changeToHistorySearch();
  },
  methods: {
    setSearchType: function setSearchType(searchType) {
      this.currentSearchType = searchType;
    },
    nextSearchType: function nextSearchType(event) {
      var searchTypeList = Object.values(this.searchTypes);
      var nextSearchType = this.currentSearchType + 1;

      if (nextSearchType > Math.max.apply(Math, _toConsumableArray(searchTypeList))) {
        nextSearchType = Math.min.apply(Math, _toConsumableArray(searchTypeList));
      }

      this.setNewSearchType(nextSearchType);
    },
    prevSearchType: function prevSearchType(event) {
      var searchTypeList = Object.values(this.searchTypes);
      var nextSearchType = this.currentSearchType - 1;

      if (nextSearchType < Math.min.apply(Math, _toConsumableArray(searchTypeList))) {
        nextSearchType = Math.max.apply(Math, _toConsumableArray(searchTypeList));
      }

      this.setNewSearchType(nextSearchType);
    },
    setNewSearchType: function setNewSearchType(nextSearchType) {
      var _this = this;

      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var results;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = nextSearchType;
                _context.next = _context.t0 === _this.searchTypes.HISTORY ? 3 : _context.t0 === _this.searchTypes.BOOKMARKS ? 6 : _context.t0 === _this.searchTypes.TABS ? 9 : 12;
                break;

              case 3:
                _context.next = 5;
                return _this.changeToHistorySearch();

              case 5:
                return _context.abrupt("break", 12);

              case 6:
                _context.next = 8;
                return _this.changeToBookmarksSearch();

              case 8:
                return _context.abrupt("break", 12);

              case 9:
                _context.next = 11;
                return _this.changeToTabsSearch();

              case 11:
                return _context.abrupt("break", 12);

              case 12:
                _context.next = 14;
                return _this.search(_this.inputString);

              case 14:
                results = _context.sent;
                _this.results = _this.setSearchResultsToData(results);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    },
    search: function search(inputString) {
      return new Promise(function (resolve) {
        var results = muff__WEBPACK_IMPORTED_MODULE_0__["default"].search(inputString);
        resolve(results);
      });
    },
    setSearchResultsToData: function setSearchResultsToData(results) {
      // リストの選択中の位置を調整
      if (Array.isArray(results)) {
        this.currentSelected = Math.min(this.currentSelected, results.length - 1);
      }

      return results;
    },
    changeToHistorySearch: function changeToHistorySearch() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.setSearchType(_this2.searchTypes.HISTORY); // 1年分


        var startTime = new Date().getTime() - 1000 * 60 * 60 * 24 * 265;
        var query = {
          text: '',
          startTime: startTime,
          maxResults: 50000
        };
        var historyList = [];
        chrome.history.search(query, function (results) {
          var reverseResult = results.reverse();
          reverseResult.forEach(function (result) {
            // resultひとつひとつがHistoryItem形式
            historyList.push({
              url: result.url,
              title: result.title
            });
          });
          muff__WEBPACK_IMPORTED_MODULE_0__["default"].setSearchWordList(historyList);
          resolve();
        });
      });
    },
    changeToTabsSearch: function changeToTabsSearch() {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.setSearchType(_this3.searchTypes.TABS);

        chrome.tabs.query({
          currentWindow: true
        }, function (tabs) {
          var searchWordList = [];
          tabs.forEach(function (tab, index) {
            searchWordList.push({
              index: tab.index.toString(),
              id: tab.id.toString(),
              title: tab.title,
              url: tab.url
            });
          });
          muff__WEBPACK_IMPORTED_MODULE_0__["default"].setSearchWordList(searchWordList);
          resolve();
        });
      });
    },
    changeToBookmarksSearch: function changeToBookmarksSearch() {
      var _this4 = this;

      return new Promise(function (resolve) {
        _this4.setSearchType(_this4.searchTypes.BOOKMARKS);

        chrome.bookmarks.getTree(function (bookmarksTree) {
          var searchWordList = [];
          searchWordList = _this4.pushBookmarkListRecursive(bookmarksTree, searchWordList);
          console.log(searchWordList);
          muff__WEBPACK_IMPORTED_MODULE_0__["default"].setSearchWordList(searchWordList);
          resolve();
        });
      });
    },
    pushBookmarkListRecursive: function pushBookmarkListRecursive(bookmarksTree, searchWordList, parentPath) {
      if (typeof parentPath == 'undefined') {
        parentPath = '';
      }

      for (var i = 0; i < bookmarksTree.length; i++) {
        var bookmark = bookmarksTree[i];

        if (bookmark.url) {
          searchWordList.push({
            parentPath: parentPath,
            // TODO: 検索ignoreしたい
            path: parentPath + bookmark.title,
            title: bookmark.title,
            url: bookmark.url
          });
        }

        if (bookmark.children) {
          var currentPath = parentPath + bookmark.title + '/';
          searchWordList = this.pushBookmarkListRecursive(bookmark.children, searchWordList, currentPath);
        }
      }

      return searchWordList;
    },
    resetCurrentSelector: function resetCurrentSelector() {
      this.currentSelected = -1;
    },
    moveUpSelector: function moveUpSelector(event) {
      if (this.currentSelected > 0) {
        this.currentSelected--;
        this.resultRestScroll();
      }
    },
    moveDownSelector: function moveDownSelector(event) {
      if (Array.isArray(this.results) && this.currentSelected < this.results.length - 1) {
        this.currentSelected++;
        this.resultRestScroll();
      }
    },
    resultRestScroll: function resultRestScroll() {
      this.$nextTick(function () {
        var selectedLi = document.getElementsByClassName('currentSelected')[0];

        if (typeof selectedLi != 'undefined') {
          selectedLi.scrollIntoView({
            behavior: "instant",
            block: "nearest"
          });
        }
      });
    },
    select: function select() {
      var currentSelected = Math.max(this.currentSelected, 0);

      if (typeof this.results[currentSelected] != 'undefined') {
        if (this.currentSearchType == this.searchTypes.HISTORY || this.currentSearchType == this.searchTypes.BOOKMARKS) {
          window.open(this.results[currentSelected].url);
        } else if (this.currentSearchType == this.searchTypes.TABS) {
          // https://stackoverflow.com/questions/36000099/check-if-window-is-already-open-from-a-non-parent-window-chrome-extension
          chrome.tabs.update(parseInt(this.results[currentSelected].id), {
            active: true
          });
        }
      }
    }
  },
  subscriptions: function subscriptions() {
    return {
      results: this.$watchAsObservable('inputString').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('newValue'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(this.search), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.setSearchResultsToData))
    };
  },
  directives: {
    focus: {
      // ディレクティブ定義
      inserted: function inserted(el) {
        el.focus();
      }
    }
  }
});

window.onload = function () {
  vm.$mount('#muffin');
};

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_window_window_service__ = __webpack_require__("../../../../../src/app/services/window/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_app_route__ = __webpack_require__("../../../../../src/app/routes/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_desktop_desktop_component__ = __webpack_require__("../../../../../src/app/components/desktop/desktop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_taskbar_taskbar_component__ = __webpack_require__("../../../../../src/app/components/taskbar/taskbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dock_dock_component__ = __webpack_require__("../../../../../src/app/components/dock/dock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_window_window_component__ = __webpack_require__("../../../../../src/app/components/window/window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_titlebar_titlebar_component__ = __webpack_require__("../../../../../src/app/components/titlebar/titlebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_apps_finder_finder_component__ = __webpack_require__("../../../../../src/app/components/apps/finder/finder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_apps_mail_mail_component__ = __webpack_require__("../../../../../src/app/components/apps/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_apps_safari_safari_component__ = __webpack_require__("../../../../../src/app/components/apps/safari/safari.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_icon_icon_component__ = __webpack_require__("../../../../../src/app/components/icon/icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_apps_trash_trash_component__ = __webpack_require__("../../../../../src/app/components/apps/trash/trash.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_desktop_desktop_component__["a" /* DesktopComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_taskbar_taskbar_component__["a" /* TaskbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_dock_dock_component__["a" /* DockComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_window_window_component__["a" /* WindowComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_titlebar_titlebar_component__["a" /* TitlebarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_apps_finder_finder_component__["a" /* FinderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_apps_mail_mail_component__["a" /* MailComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_apps_safari_safari_component__["a" /* SafariComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_icon_icon_component__["a" /* IconComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_apps_trash_trash_component__["a" /* TrashComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__routes_app_route__["a" /* APP_ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_markdown__["a" /* MarkdownModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_window_window_service__["a" /* WindowService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/apps/finder/finder.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  finder works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/apps/finder/finder.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/apps/finder/finder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinderComponent = (function () {
    function FinderComponent() {
    }
    FinderComponent.prototype.ngOnInit = function () {
    };
    return FinderComponent;
}());
FinderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'os-finder',
        template: __webpack_require__("../../../../../src/app/components/apps/finder/finder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/apps/finder/finder.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FinderComponent);

//# sourceMappingURL=finder.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/apps/mail/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-10\">\n  <form class=\"ui form\" [formGroup]=\"mailForm\">\n    <div class=\"inline fields\">\n      <div class=\"one wide field\">\n        <label for=\"to\">To:</label>\n      </div>\n      <div class=\"fifteen wide field\">\n        <div class=\"ui transparent input\">\n          <input id=\"to\" type=\"text\" value=\"ameerjhanprof@gmail.com\" disabled>\n        </div>\n      </div>\n    </div>\n    <div class=\"inline fields\">\n      <div class=\"two wide field\">\n        <label for=\"from\">From:</label>\n      </div>\n      <div class=\"fourteen wide field\">\n        <div class=\"ui transparent input\">\n          <input id=\"from\" formControlName=\"from\" type=\"text\" autofocus>\n        </div>\n      </div>\n    </div>\n    <div class=\"inline fields\">\n      <div class=\"two wide field\">\n        <label for=\"subject\">Subject:</label>\n      </div>\n      <div class=\"fourteen wide field\">\n        <div class=\"ui transparent input\">\n          <input id=\"subject\" formControlName=\"subject\" type=\"text\">\n        </div>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label for=\"message\">Message:</label>\n      <textarea id=\"message\" formControlName=\"message\" rows=\"3\"></textarea>\n    </div>\n    <div class=\"field\">\n      <button type=\"submit\" class=\"ui small button primary\" [disabled]=\"mailForm.invalid\">Send</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/apps/mail/mail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".field label {\n  color: #95a5a6 !important; }\n\n.field textarea {\n  border: 0px; }\n\n.fields + .fields, .fields + .field {\n  padding-top: 5px;\n  border-top: 1px solid #ecf0f1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/apps/mail/mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailComponent = (function () {
    function MailComponent() {
    }
    MailComponent.prototype.ngOnInit = function () {
        this.mailForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            from: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            subject: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    };
    return MailComponent;
}());
MailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'os-mail',
        template: __webpack_require__("../../../../../src/app/components/apps/mail/mail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/apps/mail/mail.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MailComponent);

//# sourceMappingURL=mail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/apps/safari/safari.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui top attached tabular menu\">\n  <a class=\"item active\" data-tab=\"facebook\"><i class=\"fa fa-facebook-official\"></i> &nbsp;Facebook Page</a>\n  <a class=\"item\" data-tab=\"youtube\"><i class=\"fa fa-youtube\"></i>&nbsp;Youtube Videos</a>\n  <a class=\"item\" data-tab=\"map\"><i class=\"fa fa-map-marker\"></i>&nbsp;My Address</a>\n  <a class=\"disabled item\" data-tab=\"\" disabled><i class=\"fa fa-plus\"></i></a>\n</div>\n<div class=\"ui active bottom attached tab segment active\" data-tab=\"facebook\">\n  <iframe src=\"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthegeek404way%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=224519831374119\" width=\"100%\" height=\"290\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" style=\"margin: 0 auto\"></iframe>\n</div>\n<div class=\"ui bottom attached tab segment\" data-tab=\"youtube\">\n  <iframe width=\"100%\" height=\"290\" src=\"https://www.youtube.com/embed/videoseries?list=PLwP2ooEoyHqKrF8aVhnnRnYVo1MygacCS\" frameborder=\"0\" style=\"margin: 0 auto\" gesture=\"media\" allowfullscreen></iframe>\n</div>\n<div class=\"ui bottom attached tab segment\" data-tab=\"map\">\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.0228325023627!2d78.09439042569022!3d9.930155090244092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf6914288beb%3A0xa4589add82c551dc!2sKalavasal%2C+Madurai%2C+Tamil+Nadu+625016!5e0!3m2!1sen!2sin!4v1509809226374\" width=\"100%\" height=\"290\" frameborder=\"0\" style=\"border:0;margin: 0 auto\" allowfullscreen></iframe>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/apps/safari/safari.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  background: #ecf0f1 !important; }\n  .menu .item, .menu .item:hover, .menu .item.active {\n    padding: 5px !important;\n    border-radius: 0px !important;\n    background: #ecf0f1;\n    color: #2c3e50; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/apps/safari/safari.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafariComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SafariComponent = (function () {
    function SafariComponent() {
    }
    SafariComponent.prototype.ngOnInit = function () {
    };
    SafariComponent.prototype.ngAfterViewChecked = function () {
        $('.menu .item').tab();
    };
    SafariComponent.prototype.ngAfterViewInit = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    return SafariComponent;
}());
SafariComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'os-safari',
        template: __webpack_require__("../../../../../src/app/components/apps/safari/safari.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/apps/safari/safari.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SafariComponent);

//# sourceMappingURL=safari.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/apps/trash/trash.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-10\">\n    <div class=\"ui grid\">\n        <div class=\"two wide column\">\n            <os-icon icon=\"assets/images/icons/txt-icon.png\" label=\"dishonest.txt\"></os-icon>\n        </div>\n        <div class=\"two wide column\">\n            <os-icon icon=\"assets/images/icons/txt-icon.png\" label=\"jealous.txt\"></os-icon>\n        </div>\n        <div class=\"two wide column\">\n            <os-icon icon=\"assets/images/icons/txt-icon.png\" label=\"stress.txt\"></os-icon>\n        </div>\n    </div>   \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/apps/trash/trash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrashComponent = (function () {
    function TrashComponent() {
    }
    TrashComponent.prototype.ngOnInit = function () {
    };
    return TrashComponent;
}());
TrashComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'os-trash',
        template: __webpack_require__("../../../../../src/app/components/apps/trash/trash.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], TrashComponent);

//# sourceMappingURL=trash.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/desktop/desktop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"desktop-background\"></div>\n<os-taskbar></os-taskbar>\n<os-dock></os-dock>\n<os-window></os-window>\n\n<div class=\"desktop-icons pull-right\">\n    <div class=\"ui grid\">\n        <div class=\"row\">\n            <div class=\"sixteen wide column\">\n                <os-icon icon=\"assets/images/icons/trash-icon.png\" color=\"white\" label=\"Trash\" (dblClick)=\"windowService.showWindow('Finder', ['/trash'])\"></os-icon>\n                <os-icon icon=\"assets/images/icons/txt-icon.png\" color=\"white\" label=\"readme.txt\" (dblClick)=\"windowService.showWindow('readme.txt', [], 'longer', 'markdown', 'assets/mds/readme.md', false, false)\"></os-icon>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/desktop/desktop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.desktop-background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/desktop-backgrounds/yosemite.jpg") + ");\n  background-size: cover; }\n\n.desktop-icons {\n  margin-top: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/desktop/desktop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_window_window_service__ = __webpack_require__("../../../../../src/app/services/window/window.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesktopComponent = (function () {
    function DesktopComponent(windowService) {
        this.windowService = windowService;
    }
    DesktopComponent.prototype.ngOnInit = function () {
    };
    return DesktopComponent;
}());
DesktopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'os-desktop',
        template: __webpack_require__("../../../../../src/app/components/desktop/desktop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/desktop/desktop.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_window_window_service__["a" /* WindowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_window_window_service__["a" /* WindowService */]) === "function" && _a || Object])
], DesktopComponent);

var _a;
//# sourceMappingURL=desktop.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dock/dock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment dock\">\n  <div class=\"dock-item\" (click)=\"windowService.showWindow('Finder', ['/finder'])\">\n      <img class=\"ui tiny image\" src=\"assets/images/icons/finder-icon.png\" alt=\"\">\n  </div>\n  <div class=\"dock-item\" (click)=\"windowService.showWindow('Mail', ['/mail'], 'tiny')\">\n      <img class=\"ui tiny image\" src=\"assets/images/icons/mail-icon.png\" alt=\"\">\n  </div>\n  <div class=\"dock-item\" (click)=\"windowService.showWindow('Safari', ['/safari'], 'tiny')\">\n      <img class=\"ui tiny image\" src=\"assets/images/icons/safari-icon.png\" alt=\"\">\n  </div>\n  <div class=\"dock-item\">\n      <img class=\"ui tiny image\" src=\"assets/images/icons/iphoto-icon.png\" alt=\"\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dock/dock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dock {\n  background: rgba(236, 240, 241, 0.7) !important;\n  position: absolute;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  bottom: 0px;\n  width: 255px; }\n  .dock .dock-item {\n    display: inline-block; }\n    .dock .dock-item img {\n      display: inherit; }\n\n.tiny {\n  width: 60px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dock/dock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_window_window_service__ = __webpack_require__("../../../../../src/app/services/window/window.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DockComponent = (function () {
    function DockComponent(windowService) {
        this.windowService = windowService;
    }
    DockComponent.prototype.ngOnInit = function () {
    };
    return DockComponent;
}());
DockComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'os-dock',
        template: __webpack_require__("../../../../../src/app/components/dock/dock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dock/dock.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_window_window_service__["a" /* WindowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_window_window_service__["a" /* WindowService */]) === "function" && _a || Object])
], DockComponent);

var _a;
//# sourceMappingURL=dock.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/icon/icon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"desktop-icon\">\n    <img [src]=\"icon\" alt=\"\" class=\"ui tiny image\" (dblclick)=\"onIconDoubleClicked()\">\n    <p [ngStyle]=\"{ color: color }\" class=\"text-center\">{{ label }}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/icon/icon.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".desktop-icon {\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/icon/icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconComponent = (function () {
    function IconComponent() {
        this.iconDblClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    IconComponent.prototype.onIconDoubleClicked = function () {
        this.iconDblClicked.emit();
    };
    return IconComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], IconComponent.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], IconComponent.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], IconComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])('dblClick'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], IconComponent.prototype, "iconDblClicked", void 0);
IconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'os-icon',
        template: __webpack_require__("../../../../../src/app/components/icon/icon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/icon/icon.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], IconComponent);

var _a;
//# sourceMappingURL=icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/taskbar/taskbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment clearfix taskbar\">\n  <div class=\"pull-left\">\n    <span class=\"apple-logo\"><i class=\"fa fa-apple\"></i></span>\n  </div>\n  <div class=\"pull-right\">\n    <i class=\"iconic fa fa-twitter\"></i>\n    <i class=\"iconic fa fa-wifi\"></i>                \n    <i class=\"iconic fa fa-volume-up\"></i>                \n    <span class=\"white-text\">{{ timeNow }}</span>      \n    <i class=\"iconic fa fa-search\"></i>      \n    <i class=\"iconic fa fa-list\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/taskbar/taskbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".apple-logo {\n  margin: 10px; }\n\n.iconic {\n  margin: 5px; }\n\n.iconic:hover {\n  color: #000 !important; }\n\n.taskbar {\n  position: relative;\n  top: 0px;\n  background: #ecf0f1 !important;\n  border-radius: 0px !important;\n  color: #2c3e50;\n  opacity: 0.8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/taskbar/taskbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_and_time__ = __webpack_require__("../../../../date-and-time/date-and-time.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_and_time___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_and_time__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskbarComponent = (function () {
    function TaskbarComponent() {
    }
    TaskbarComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.timeNow = __WEBPACK_IMPORTED_MODULE_1_date_and_time__["format"](today, 'ddd, MMMM D HH:mm');
    };
    return TaskbarComponent;
}());
TaskbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'os-taskbar',
        template: __webpack_require__("../../../../../src/app/components/taskbar/taskbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/taskbar/taskbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TaskbarComponent);

//# sourceMappingURL=taskbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/titlebar/titlebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment titlebar clearfix\">\n  <div class=\"pull-left\">\n    <div class=\"window-action\">\n      <span class=\"window-action-icon bg-ligt-red\" (click)=\"onCloseClicked()\">\n        <i class=\"fa fa-times\"></i>\n      </span>\n      <span class=\"window-action-icon bg-light-yellow\">\n        <i class=\"fa fa-minus\"></i>\n      </span>\n      <span class=\"window-action-icon bg-light-green\">\n        <i class=\"fa fa-expand\"></i>\n      </span>\n    </div>\n    <div *ngIf=\"searchVisible\" class=\"ui horizontal segments navigation\">\n      <div class=\"ui segment text-center\">\n        <i class=\"fa fa-angle-left\"></i>\n      </div>\n      <div class=\"ui segment text-center\">\n        <i class=\"fa fa-angle-right\"></i>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"navigationVisible\" class=\"pull-right\">\n    <div class=\"ui search search-bar\">\n      <div class=\"ui left icon mini input\">\n        <input type=\"text\" placeholder=\"Search...\">\n        <i class=\"search icon\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-center\">{{ title }}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/titlebar/titlebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".titlebar {\n  padding: 5px !important;\n  background: rgba(236, 240, 241, 0.7) !important;\n  border-top-right-radius: 5px !important;\n  border-top-left-radius: 5px !important;\n  border-bottom-right-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  opacity: 0.8; }\n  .titlebar .window-action-icon {\n    border-radius: 100%;\n    height: 12px;\n    width: 12px;\n    display: inline-block; }\n    .titlebar .window-action-icon .fa {\n      position: relative;\n      bottom: 4px;\n      left: 3px;\n      font-size: 9px;\n      color: #323232;\n      visibility: hidden; }\n  .titlebar .window-action:hover .fa {\n    visibility: visible; }\n  .titlebar .navigation .ui.segment {\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n    padding-top: 4px !important;\n    padding-bottom: 4px !important; }\n    .titlebar .navigation .ui.segment .fa {\n      color: #95a5a6; }\n  .titlebar .search-bar {\n    height: 10px !important;\n    margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/titlebar/titlebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitlebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_window_window_service__ = __webpack_require__("../../../../../src/app/services/window/window.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitlebarComponent = (function () {
    function TitlebarComponent(windowService) {
        this.windowService = windowService;
        this.searchVisible = true;
        this.navigationVisible = true;
        this.closeClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TitlebarComponent.prototype.ngOnInit = function () {
    };
    TitlebarComponent.prototype.onCloseClicked = function () {
        this.closeClicked.emit();
    };
    return TitlebarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TitlebarComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('search'),
    __metadata("design:type", Boolean)
], TitlebarComponent.prototype, "searchVisible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('navigation'),
    __metadata("design:type", Boolean)
], TitlebarComponent.prototype, "navigationVisible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])('close'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], TitlebarComponent.prototype, "closeClicked", void 0);
TitlebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'os-titlebar',
        template: __webpack_require__("../../../../../src/app/components/titlebar/titlebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/titlebar/titlebar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_window_window_service__["a" /* WindowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_window_window_service__["a" /* WindowService */]) === "function" && _b || Object])
], TitlebarComponent);

var _a, _b;
//# sourceMappingURL=titlebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/window/window.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui {{ systemWindow.type }} system modal\">\n  <os-titlebar [search]=\"systemWindow.search\" [navigation]=\"systemWindow.navigation\" [title]=\"systemWindow.title\" (close)=\"windowService.closeWindow(systemWindow)\"></os-titlebar>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<div class=\"ui {{ markdownWindow.type }} markdown modal\">\n    <os-titlebar [search]=\"markdownWindow.search\" [navigation]=\"markdownWindow.navigation\" [title]=\"markdownWindow.title\" (close)=\"windowService.closeWindow(markdownWindow)\"></os-titlebar>\n    <div class=\"content\">\n      <div class=\"padding-10\">\n        <markdown [path]=\"markdownWindow.markdownPath\"></markdown>\n      </div>\n    </div>\n</div>\n\n  \n"

/***/ }),

/***/ "../../../../../src/app/components/window/window.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.modal {\n  background: rgba(255, 255, 255, 0.5) !important;\n  border-radius: 5px !important; }\n  .ui.modal .content {\n    padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/window/window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_window_window_service__ = __webpack_require__("../../../../../src/app/services/window/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_window__ = __webpack_require__("../../../../../src/app/models/window.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WindowComponent = (function () {
    function WindowComponent(windowService, router) {
        this.windowService = windowService;
        this.router = router;
        this.systemWindow = new __WEBPACK_IMPORTED_MODULE_3__models_window__["a" /* Window */]();
        this.markdownWindow = new __WEBPACK_IMPORTED_MODULE_3__models_window__["a" /* Window */]();
    }
    WindowComponent.prototype.ngOnInit = function () {
    };
    WindowComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.windowService.showWindowEvent.subscribe(function (window) {
            if (window.context == 'system') {
                _this.systemWindow = window;
            }
            else if (window.context == 'markdown') {
                _this.markdownWindow = window;
            }
            _this.router.navigate(window.route);
            $(".ui." + window.context + ".modal").modal({ allowMultiple: true }).modal('show');
        });
        this.windowService.closeWindowEvent.subscribe(function (window) {
            $(".ui." + window.context + ".modal").modal('hide');
        });
    };
    return WindowComponent;
}());
WindowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'os-window',
        template: __webpack_require__("../../../../../src/app/components/window/window.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/window/window.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_window_window_service__["a" /* WindowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_window_window_service__["a" /* WindowService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], WindowComponent);

var _a, _b;
//# sourceMappingURL=window.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/window.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Window; });
var Window = (function () {
    function Window() {
    }
    return Window;
}());

//# sourceMappingURL=window.js.map

/***/ }),

/***/ "../../../../../src/app/routes/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__finder_route__ = __webpack_require__("../../../../../src/app/routes/finder.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mail_route__ = __webpack_require__("../../../../../src/app/routes/mail.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__safari_route__ = __webpack_require__("../../../../../src/app/routes/safari.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trash_route__ = __webpack_require__("../../../../../src/app/routes/trash.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_desktop_desktop_component__ = __webpack_require__("../../../../../src/app/components/desktop/desktop.component.ts");





var APP_ROUTES = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_desktop_desktop_component__["a" /* DesktopComponent */], children: [
            { path: 'finder', children: __WEBPACK_IMPORTED_MODULE_0__finder_route__["a" /* FINDER_ROUTES */] },
            { path: 'mail', children: __WEBPACK_IMPORTED_MODULE_1__mail_route__["a" /* MAIL_ROUTES */] },
            { path: 'safari', children: __WEBPACK_IMPORTED_MODULE_2__safari_route__["a" /* SAFARI_ROUTES */] },
            { path: 'trash', children: __WEBPACK_IMPORTED_MODULE_3__trash_route__["a" /* TRASH_ROUTES */] }
        ]
    }
];
//# sourceMappingURL=app.route.js.map

/***/ }),

/***/ "../../../../../src/app/routes/finder.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FINDER_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_apps_finder_finder_component__ = __webpack_require__("../../../../../src/app/components/apps/finder/finder.component.ts");

var FINDER_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_apps_finder_finder_component__["a" /* FinderComponent */] }
];
//# sourceMappingURL=finder.route.js.map

/***/ }),

/***/ "../../../../../src/app/routes/mail.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAIL_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_apps_mail_mail_component__ = __webpack_require__("../../../../../src/app/components/apps/mail/mail.component.ts");

var MAIL_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_apps_mail_mail_component__["a" /* MailComponent */] }
];
//# sourceMappingURL=mail.route.js.map

/***/ }),

/***/ "../../../../../src/app/routes/safari.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SAFARI_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_apps_safari_safari_component__ = __webpack_require__("../../../../../src/app/components/apps/safari/safari.component.ts");

var SAFARI_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_apps_safari_safari_component__["a" /* SafariComponent */] }
];
//# sourceMappingURL=safari.route.js.map

/***/ }),

/***/ "../../../../../src/app/routes/trash.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRASH_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_apps_trash_trash_component__ = __webpack_require__("../../../../../src/app/components/apps/trash/trash.component.ts");

var TRASH_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_apps_trash_trash_component__["a" /* TrashComponent */] }
];
//# sourceMappingURL=trash.route.js.map

/***/ }),

/***/ "../../../../../src/app/services/window/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowService = (function () {
    function WindowService() {
        this.showWindowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.closeWindowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    WindowService.prototype.showWindow = function (title, route, type, context, markdownPath, search, navigation) {
        if (type === void 0) { type = ''; }
        if (context === void 0) { context = 'system'; }
        if (markdownPath === void 0) { markdownPath = ''; }
        if (search === void 0) { search = true; }
        if (navigation === void 0) { navigation = true; }
        var window = { title: title, route: route, type: type, context: context, markdownPath: markdownPath, search: search, navigation: navigation };
        this.showWindowEvent.emit(window);
    };
    WindowService.prototype.closeWindow = function (window) {
        this.closeWindowEvent.emit(window);
    };
    return WindowService;
}());
WindowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WindowService);

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/desktop-backgrounds/yosemite.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "yosemite.7769f86771389d70fdb2.jpg";

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../date-and-time/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar": "../../../../date-and-time/locale/ar.js",
	"./ar.js": "../../../../date-and-time/locale/ar.js",
	"./az": "../../../../date-and-time/locale/az.js",
	"./az.js": "../../../../date-and-time/locale/az.js",
	"./bn": "../../../../date-and-time/locale/bn.js",
	"./bn.js": "../../../../date-and-time/locale/bn.js",
	"./cs": "../../../../date-and-time/locale/cs.js",
	"./cs.js": "../../../../date-and-time/locale/cs.js",
	"./de": "../../../../date-and-time/locale/de.js",
	"./de.js": "../../../../date-and-time/locale/de.js",
	"./el": "../../../../date-and-time/locale/el.js",
	"./el.js": "../../../../date-and-time/locale/el.js",
	"./es": "../../../../date-and-time/locale/es.js",
	"./es.js": "../../../../date-and-time/locale/es.js",
	"./fa": "../../../../date-and-time/locale/fa.js",
	"./fa.js": "../../../../date-and-time/locale/fa.js",
	"./fr": "../../../../date-and-time/locale/fr.js",
	"./fr.js": "../../../../date-and-time/locale/fr.js",
	"./hi": "../../../../date-and-time/locale/hi.js",
	"./hi.js": "../../../../date-and-time/locale/hi.js",
	"./hu": "../../../../date-and-time/locale/hu.js",
	"./hu.js": "../../../../date-and-time/locale/hu.js",
	"./id": "../../../../date-and-time/locale/id.js",
	"./id.js": "../../../../date-and-time/locale/id.js",
	"./it": "../../../../date-and-time/locale/it.js",
	"./it.js": "../../../../date-and-time/locale/it.js",
	"./ja": "../../../../date-and-time/locale/ja.js",
	"./ja.js": "../../../../date-and-time/locale/ja.js",
	"./jv": "../../../../date-and-time/locale/jv.js",
	"./jv.js": "../../../../date-and-time/locale/jv.js",
	"./ko": "../../../../date-and-time/locale/ko.js",
	"./ko.js": "../../../../date-and-time/locale/ko.js",
	"./my": "../../../../date-and-time/locale/my.js",
	"./my.js": "../../../../date-and-time/locale/my.js",
	"./nl": "../../../../date-and-time/locale/nl.js",
	"./nl.js": "../../../../date-and-time/locale/nl.js",
	"./pa-in": "../../../../date-and-time/locale/pa-in.js",
	"./pa-in.js": "../../../../date-and-time/locale/pa-in.js",
	"./pl": "../../../../date-and-time/locale/pl.js",
	"./pl.js": "../../../../date-and-time/locale/pl.js",
	"./pt": "../../../../date-and-time/locale/pt.js",
	"./pt.js": "../../../../date-and-time/locale/pt.js",
	"./ro": "../../../../date-and-time/locale/ro.js",
	"./ro.js": "../../../../date-and-time/locale/ro.js",
	"./ru": "../../../../date-and-time/locale/ru.js",
	"./ru.js": "../../../../date-and-time/locale/ru.js",
	"./sr": "../../../../date-and-time/locale/sr.js",
	"./sr.js": "../../../../date-and-time/locale/sr.js",
	"./th": "../../../../date-and-time/locale/th.js",
	"./th.js": "../../../../date-and-time/locale/th.js",
	"./tr": "../../../../date-and-time/locale/tr.js",
	"./tr.js": "../../../../date-and-time/locale/tr.js",
	"./uk": "../../../../date-and-time/locale/uk.js",
	"./uk.js": "../../../../date-and-time/locale/uk.js",
	"./uz": "../../../../date-and-time/locale/uz.js",
	"./uz.js": "../../../../date-and-time/locale/uz.js",
	"./vi": "../../../../date-and-time/locale/vi.js",
	"./vi.js": "../../../../date-and-time/locale/vi.js",
	"./zh-cn": "../../../../date-and-time/locale/zh-cn.js",
	"./zh-cn.js": "../../../../date-and-time/locale/zh-cn.js",
	"./zh-tw": "../../../../date-and-time/locale/zh-tw.js",
	"./zh-tw.js": "../../../../date-and-time/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../date-and-time/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
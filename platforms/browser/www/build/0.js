webpackJsonp([0],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
            ],
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
        var audio = new Audio("assets/music/music1.mp3");
        // audio.play();
        this.getTogetherDate();
        setInterval(function () { _this.getTogetherDate(); }, 1000);
        //setTimeout(()=>);
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
        this.slides.autoplayDisableOnInteraction = false;
    };
    MainPage.prototype.getTogetherDate = function () {
        var starttime = new Date('2016-09-10T20:00:00').getTime();
        var currenttime = new Date().getTime();
        var mss = currenttime - starttime;
        this.days = Math.floor(mss / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((mss % (1000 * 60)) / 1000);
        //this.TogetherDate = "第"+days+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒";
        //this.slides.slideTo(1,1000)
    };
    MainPage.prototype.musicbutton = function () {
        document.getElementById('timer').style.display = "none";
        document.getElementById('timer').classList.remove("title-h");
        window.setTimeout(function () {
            document.getElementById('timer').style.display = "";
            document.getElementById('timer').classList.add("title-h");
        }, 1300);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], MainPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('timer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MainPage.prototype, "timerRef", void 0);
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\Peeta\Desktop\Timer\src\pages\main\main.html"*/'\n\n<ion-content class="no-scroll" style="background-color: black" >\n<!-- 	<video controls muted preload="auto" autoplay playsinline muted="muted" loop><source src="assets/video/background.mp4"></video>\n -->\n	<!-- <h1 style="position: fixed;bottom: 80px; color: white;z-index: 99999;">{{TogetherDate}}</h1> -->\n\n<!-- 	<div  class="typing title-h" style="border:1px solid red;position: fixed;text-align: center;z-index: 99999">		\n			<h5 class="dateunit">第</h5>\n			<h1>{{days}}</h1>\n			<h5 class="dateunit">天</h5>\n			<h1>{{hours}}</h1>\n			<h5 class="dateunit">小时</h5>\n			<h1>{{minutes}}</h1>\n			<h5 class="dateunit">分钟</h5>\n			<h1>{{seconds}}</h1>\n			<h5 class="dateunit">秒</h5>\n		\n	</div> -->\n\n	<!-- <h1 class="neon" data-text="[Neon_Light]">21</h1> -->\n<!-- \n	 <audio style="position: fixed;" controls>\n      <source src="assets/music/music1.mp3" type="audio/mpeg">\n    </audio> -->\n\n	<div class="title-h" style="position: fixed;bottom:8px;z-index: 9999;" id="timer">	\n		<span class="timeunit">第</span>\n		<span class="neon">{{days}}</span>\n		<span class="timeunit">天</span>\n		<span class="neon">{{hours}}</span>\n		<span class="timeunit">小时</span>\n		<span class="neon">{{minutes}}</span>\n		<span class="timeunit">分钟</span>\n		<span class="neon">{{seconds}}</span>\n		<span class="timeunit">秒</span>\n	</div>\n\n		<h1 class="color">LOVE</h1>\n\n		<div class="pulse" (click)="musicbutton()"><ion-icon class="music" name="md-musical-note"></ion-icon></div>\n\n	<h1 class="fadein" style="position:fixed;"> <span style="font-weight: bold;">&nbsp;❤️两周年快乐❤️&nbsp;</span></h1>\n\n	<ion-slides autoplay="3500" loop="true" speed="1000" direction="vertical" \n				pager="true"  >\n	<ion-slide *ngFor="let img of images">\n		\n			<img src="assets/imgs/{{img}}" class="slide-image">\n		\n	</ion-slide>\n	\n<!-- 		<ion-slide>	\n			<div style="border: 1px solid red">	\n				<img src="../../assets/imgs/1.jpg" class="slide-image">\n			</div>\n		</ion-slide>\n		<ion-slide>	\n			<img src="../../assets/imgs/2.jpg" class="slide-image">\n		</ion-slide>\n		<ion-slide>		\n			<img src="../../assets/imgs/3.jpg" class="slide-image">\n		</ion-slide>\n		<ion-slide>		\n			<img src="../../assets/imgs/4.jpg" class="slide-image">\n		</ion-slide> -->\n<!-- \n		padding style="background: url(../../assets/imgs/3.jpg) no-repeat center center fixed;\n			background-size: cover" -->\n	</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Peeta\Desktop\Timer\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
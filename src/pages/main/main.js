var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ViewChild, ElementRef } from '@angular/core';
import { Slides } from 'ionic-angular';
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
        this.visibility = 'hidden';
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
    MainPage.prototype.startbutton = function () {
        this.visibility = "shown";
        console.log(this.visibility);
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
        ViewChild(Slides),
        __metadata("design:type", Slides)
    ], MainPage.prototype, "slides", void 0);
    __decorate([
        ViewChild('timer'),
        __metadata("design:type", ElementRef)
    ], MainPage.prototype, "timerRef", void 0);
    return MainPage;
}());
export { MainPage };
//# sourceMappingURL=main.js.map
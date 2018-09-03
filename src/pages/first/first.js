var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, navParams, nativePageTransition) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransition = nativePageTransition;
    }
    FirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstPage');
    };
    FirstPage.prototype.slidePage = function () {
        var options = {
            direction: 'left',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150
        };
        this.nativePageTransition.slide(options);
        this.navCtrl.push('MainPage');
    };
    FirstPage.prototype.flipPage = function () {
        var options = {
            direction: 'up',
            duration: 600,
        };
        this.nativePageTransition.flip(options);
        this.navCtrl.push('MainPage');
    };
    FirstPage.prototype.fadePage = function () {
        this.nativePageTransition.fade(null);
        this.navCtrl.push('MainPage');
    };
    FirstPage.prototype.curlPage = function () {
        var options = {
            direction: 'up',
            duration: 600,
        };
        this.nativePageTransition.curl(options);
        this.navCtrl.push('MainPage');
    };
    FirstPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-first',
            templateUrl: 'first.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, NativePageTransitions])
    ], FirstPage);
    return FirstPage;
}());
export { FirstPage };
//# sourceMappingURL=first.js.map
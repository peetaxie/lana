import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativePageTransition:NativePageTransitions ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  slidePage(){
  	let options: NativeTransitionOptions={
    direction: 'left',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150

  	}
  	this.nativePageTransition.slide(options);
  	this.navCtrl.push('MainPage');

  }
  flipPage(){
  	let options: NativeTransitionOptions={
		direction: 'up',
		duration: 600,
  	}
  	this.nativePageTransition.flip(options);
  	this.navCtrl.push('MainPage');
  }
  fadePage(){

  	this.nativePageTransition.fade(null);
  	this.navCtrl.push('MainPage');  	
  }

  curlPage(){
  	let options: NativeTransitionOptions={
		direction: 'up',
		duration: 600,
  	}
  	this.nativePageTransition.curl(options);
  	this.navCtrl.push('MainPage');
  }

}

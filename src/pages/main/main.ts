import { Component ,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
//    animations:[
//     trigger('visibilityChanged', [
//       state('hidden', style({ opacity: 0 })),
//       state('shown',  style({ opacity: 1 })),   
//       transition('hidden => shown', animate('0.5s ease-out'))
//     ])
//   ]
})
export class MainPage {

 @ViewChild(Slides)slides:Slides;
 @ViewChild('timer') timerRef : ElementRef;
 //images=['1.jpg','2.jpg','3.jpg','4.jpg'];
 images=['color.jpg'];
 // TogetherDate;
  days : string|number;
  hours : string|number;
  minutes: string|number;
  seconds: string|number;
  visibility: string = 'hidden';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      //var audio = new Audio("assets/music/music1.mp3");
      // audio.play();
  	  this.getTogetherDate();
  		setInterval(() => {this.getTogetherDate();}, 1000);
  		//setTimeout(()=>);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.slides.autoplayDisableOnInteraction = false;
  }

  getTogetherDate(){
  	var starttime = new Date('2016-09-10T20:00:00').getTime();
  	var currenttime=new Date().getTime();
  	var mss =currenttime-starttime;
  	this.days = Math.floor(mss /(1000 * 60 * 60 * 24));
  	this.hours =Math.floor( (mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.hours =this.hours>9?this.hours:"0"+this.hours; 
  	this.minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60));
    this.minutes =this.minutes>9?this.minutes:"0"+this.minutes; 
  	this.seconds = Math.floor((mss % (1000 * 60)) / 1000);
    this.seconds =this.seconds>9?this.seconds:"0"+this.seconds; 	
  	//this.TogetherDate = "第"+days+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒";
  		
  	//this.slides.slideTo(1,1000)
  }

  startbutton(){
      //在一起word
      document.getElementById('together').classList.remove("firstpageword");
      document.getElementById('together').classList.add("firstpageword_animation");

      //heart button smaller
      document.getElementById('hearticon').classList.remove("heartbeat");
      document.getElementById('hearticon').classList.add("buttonheart");
      
      //open word
      document.getElementById('openhide').classList.remove("open");
      document.getElementById('openhide').classList.add("open_hidden");

      //first page upright
      document.getElementById('whitepage').classList.remove("firstpage");
      document.getElementById('whitepage').classList.add("firstpage_animation");

      document.getElementById('musicicon').classList.remove("initial_music");
      document.getElementById('musicicon').classList.add("music");

      window.setTimeout(function(){
           document.getElementById('musicicon').classList.add("music_rotate");
             //hide button
           document.getElementById('mainbutton').classList.add("hidebutton");},1200);
       

      document.getElementById('musicdiv').classList.remove("initial_pulse");
      document.getElementById('musicdiv').classList.add("pulse");

      //time
      document.getElementById('timer').classList.remove("title-i");
      document.getElementById('timer').classList.add("typing");

  window.setTimeout( function(){
      //slide
      document.getElementById('slide').classList.remove("slide");
      document.getElementById('slide').classList.add("slide_animation");

      document.getElementById('fadeinword').classList.remove("fadeinwords");
      document.getElementById('fadeinword').classList.add("fadewords_animation");

      //title
      document.getElementById('fadein').classList.remove("fadein_initial");
      document.getElementById('fadein').classList.add("fadein");

   
      

    },1000);

   }



  musicbutton(){
       // document.getElementById('timer').style.display="none";
       // document.getElementById('timer').classList.remove("title-h");
       // window.setTimeout( function(){
       //    document.getElementById('timer').style.display="";
       //    document.getElementById('timer').classList.add("title-h");},1300);
       
  }
}

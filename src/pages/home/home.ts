import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public socShare:SocialSharing) {

  }

  regularShare(){
    this.socShare.share("Testing sharing via ionic app",null,"www/assets/img/hulk.jpg",null);
  }

  twitterShare(){
    this.socShare.shareViaTwitter("Testing sharing via ionic app to twitter","www/assets/img/hulk.jpg",null);
  }

  whatsappShare(){
    this.socShare.shareViaWhatsApp("Testing sharing via ionic app to whatsapp","www/assets/img/hulk.jpg",null);
  }

  instagramShare(){
    this.socShare.shareViaInstagram("Testing sharing via ionic app to whatsapp","www/assets/img/hulk.jpg");
  }
}

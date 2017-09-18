import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from './../sign-up/sign-up'
import { HomePage } from './../home/home'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  /**
   * Navigate to signup page 
   */
  goSignUp() {
    this.navCtrl.push(SignUpPage);
    
  }

  /**
   * Navigate to home page
   */
  goHome() {
    // this.navCtrl.popAll();
    this.navCtrl.setRoot(HomePage);
  }

}

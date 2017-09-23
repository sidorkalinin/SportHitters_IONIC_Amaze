import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Events } from 'ionic-angular';

import { SignUpPage } from './../sign-up/sign-up'
import { LoginProvider } from '../../providers/login/login';
import { TabsPage } from './../tabs/tabs';
import { ForgotPasswordPage } from './../forgot-password/forgot-password';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { GooglePlus } from '@ionic-native/google-plus';


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
    form: any = [];
    loggedUser;
    constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public logInService: LoginProvider, private toastCtrl: ToastController, private googlePlus: GooglePlus, private twitter: TwitterConnect, private fb: Facebook) {
        this.loggedUser = localStorage.getItem("loggedUser");
        this.events.publish('user:loggedIn');
        if (this.loggedUser !== null) {
            this.navCtrl.setRoot(TabsPage);
        }
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
        this.navCtrl.setRoot(TabsPage);
    }

    generallogIn() {
        this.logInService.loginByEmail(this.form).subscribe(response => {
            console.log(response)
            let toast = this.toastCtrl.create({
                message: response.message,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (response.status == true) {
                localStorage.removeItem("loggedUser");
                var data = JSON.stringify(response.user);
                localStorage.setItem('loggedUser', data);
                localStorage.setItem('token', response.JWT);
                this.navCtrl.setRoot(TabsPage);
                this.events.publish('user:loggedIn');
                //                 this.viewCtrl.dismiss();
            }
        });
    }

    /**
     * login or sign up by facebook
     */

    loginByFacebook() {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then((res: FacebookLoginResponse) => {
                var data = {
                    facebook_id: res.authResponse.userID
                }
                this.logInService.loginBySocialAccount(data).subscribe(response => {
                    console.log(response)
                    let toast = this.toastCtrl.create({
                        message: response.message,
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    if (response.status == true) {
                        localStorage.removeItem("loggedUser");
                        var data = JSON.stringify(response.user);
                        localStorage.setItem('loggedUser', data);
                        localStorage.setItem('token', response.JWT);
                        this.navCtrl.setRoot(TabsPage);
                        this.events.publish('user:loggedIn');

                    }
                });
            })
            .catch(e => console.log('Error logging into Facebook' + JSON.stringify(e)));
    }
    /**
     * login or sign up by google
     */

    loginByGoogle() {
        this.googlePlus.login({
            'webClientId': '1093557657422-n6hpqc4h5l7fnk1e245hm9ip7cabg4ko.apps.googleusercontent.com',
            'offline': true,
        }).then(res => {
            alert("RESULT: " + JSON.stringify(res));
            this.navCtrl.setRoot(TabsPage);
        })
            .catch(err => alert("ERROR: " + JSON.stringify(err)));
    }

    /**
     * login or sign up by twitter
     */

    loginByTwitter() {
        this.twitter.login().then(success => {
            var data = {
                displayname: success.userName,
                twitter_id: success.userId,
            }
            this.logInService.loginBySocialAccount(data).subscribe(response => {
                // alert(JSON.stringify(response));
                let toast = this.toastCtrl.create({
                    message: response.message,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                if (response.status == true) {
                    localStorage.removeItem("loggedUser");
                    var data = JSON.stringify(response.user);
                    localStorage.setItem('loggedUser', data);
                    localStorage.setItem('token', response.JWT);
                    this.navCtrl.setRoot(TabsPage);
                    this.events.publish('user:loggedIn');
                }
            });


        }, error => {
            console.log(JSON.stringify(error));
        });

    }

    /**
     * 
     * got to forgot password page
     */
    goToforgotPassword() {
        this.navCtrl.push(ForgotPasswordPage);
    }

}

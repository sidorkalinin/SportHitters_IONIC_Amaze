import {Component} from '@angular/core';
import {NavController, NavParams, ToastController, Events} from 'ionic-angular';

import {LoginPage} from './../login/login';
import {TabsPage} from './../tabs/tabs';
import {SignUpProvider} from '../../providers/sign-up/sign-up';
import {LoginProvider} from '../../providers/login/login';

import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import {TwitterConnect} from '@ionic-native/twitter-connect';
import {GooglePlus} from '@ionic-native/google-plus';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-sign-up',
    templateUrl: 'sign-up.html'
})
export class SignUpPage {
    form: any = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public signUpService: SignUpProvider, public logInService: LoginProvider, private toastCtrl: ToastController, private googlePlus: GooglePlus, private twitter: TwitterConnect, private fb: Facebook) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignUpPage');
    }

    /**
     * Redirect to login page
     */
    goLoginIn() {
        this.navCtrl.push(LoginPage);
    }

    /**
     * sign up by email
     */
    GeneralSignUp() {
        this.signUpService.signUpByEmail(this.form).subscribe(response => {
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
                this.navCtrl.setRoot(TabsPage);
                this.events.publish('user:loggedIn');
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
            'offline': true
        })
            .then(res => {
                console.log("RESULT: " + JSON.stringify(res));
                this.navCtrl.setRoot(TabsPage);
            })
            .catch(err => console.log("ERROR: " + JSON.stringify(err)));
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
                    this.navCtrl.setRoot(TabsPage);
                    this.events.publish('user:loggedIn');
                }
            });
        }, error => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

}

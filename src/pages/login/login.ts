import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';

import {SignUpPage} from './../sign-up/sign-up'
import {HomePage} from './../home/home'
import {LoginProvider} from '../../providers/login/login';
import {TabsPage} from './../tabs/tabs';

import {Facebook} from 'ng2-cordova-oauth/core';
import {OauthCordova} from 'ng2-cordova-oauth/platform/cordova';
import {TwitterConnect} from '@ionic-native/twitter-connect';
import {GooglePlus} from '@ionic-native/google-plus';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [LoginProvider]
})
export class LoginPage {
    private oauth: OauthCordova = new OauthCordova();
    private facebookProvider = new Facebook({
        clientId: '317139815423831',
        appScope: ["email"]
    });
    form: any = [];
    loggedUser;
    constructor(public navCtrl: NavController, public navParams: NavParams, public logInService: LoginProvider, private toastCtrl: ToastController, private googlePlus: GooglePlus, private twitter: TwitterConnect) {
        //      localStorage.setItem('showtabs','true');
        this.loggedUser = localStorage.getItem("loggedUser");
        if (this.loggedUser !== null) {
            this.navCtrl.setRoot(HomePage);
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
        this.navCtrl.setRoot(HomePage);
    }

    generallogIn() {
        console.log(this.form)
        this.logInService.loginByEmail(this.form).subscribe(response => {
            console.log(response)
            let toast = this.toastCtrl.create({
                message: response.message,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if (response.status == true) {
                var data = JSON.stringify(response.user);
                localStorage.setItem('loggedUser', data);
                this.navCtrl.setRoot(TabsPage);
                //                 this.viewCtrl.dismiss();
            }
        });
    }

    loginByFacebook() {
        this.oauth.logInVia(this.facebookProvider).then(success => {
            console.log("RESULT: " + JSON.stringify(success));
            this.navCtrl.setRoot(TabsPage);
        }, error => {
            console.log("ERROR: ", error);
        });
    }

    loginByGoogle() {
        this.googlePlus.login({})
            .then(res => {
                this.navCtrl.setRoot(TabsPage);
                console.log(res)
            })
            .catch(err => console.error(err));
    }

    loginByTwitter() {
        this.twitter.login().then(success => {
            console.log("RESULT: " + JSON.stringify(success));
            this.navCtrl.setRoot(TabsPage);
        }, error => {
            console.log("ERROR: ", error);
        });
    }

}

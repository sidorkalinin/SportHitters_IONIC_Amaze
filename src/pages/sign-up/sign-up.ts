import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';

import {LoginPage} from './../login/login';
import {TabsPage} from './../tabs/tabs';
import {SignUpProvider} from '../../providers/sign-up/sign-up';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-sign-up',
    templateUrl: 'sign-up.html',
    providers: [SignUpProvider]
})
export class SignUpPage {
    form: any = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public signUpService: SignUpProvider, private toastCtrl: ToastController) {
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
                var data=JSON.stringify(response.user);
                 localStorage.setItem('loggedUser', data);
                 this.navCtrl.setRoot(TabsPage);
            }
        });



    }

}

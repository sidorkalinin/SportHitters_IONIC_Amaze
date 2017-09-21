import {Component} from '@angular/core';
import { NavController, NavParams,ToastController} from 'ionic-angular';

import {LoginProvider} from '../../providers/login/login';
import {LoginPage} from './../login/login';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-forgot-password',
    templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {
    form: any = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public logInService: LoginProvider, private toastCtrl: ToastController ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ForgotPasswordPage');
    }

    /**
     * forgot password
     */
    forgotpassword() {
        this.logInService.forgotPassword(this.form.email).subscribe(response => {
            console.log(response)
            let toast = this.toastCtrl.create({
                message: response.message,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        })
    }
}

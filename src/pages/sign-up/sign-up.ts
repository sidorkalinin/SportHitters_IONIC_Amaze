import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, ToastController,ViewController} from 'ionic-angular';

import {LoginPage} from './../login/login';
import {HomePage} from './../home/home';
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
})
export class SignUpPage {
    form: any = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public signUpService: SignUpProvider, private toastCtrl: ToastController,public viewCtrl: ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignUpPage');
    }

    /**
     * Redirect to login page
     */
    goLoginIn() {
        let loginModal = this.modalCtrl.create(LoginPage);
        loginModal.present();
        //    this.navCtrl.push(LoginPage);
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
                this.viewCtrl.dismiss();
            }
        });



    }

}

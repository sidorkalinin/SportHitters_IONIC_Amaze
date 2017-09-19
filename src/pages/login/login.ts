import {Component} from '@angular/core';
import {NavController, NavParams, ModalController,ToastController,ViewController} from 'ionic-angular';

import {SignUpPage} from './../sign-up/sign-up'
import {HomePage} from './../home/home'
import {LoginProvider} from '../../providers/login/login';

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
    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public logInService: LoginProvider, private toastCtrl: ToastController,public viewCtrl: ViewController) {
        //      localStorage.setItem('showtabs','true');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }


    /**
     * Navigate to signup page 
     */
    goSignUp() {
        let SignUpModal = this.modalCtrl.create(SignUpPage);
        SignUpModal.present();
//        this.navCtrl.push(SignUpPage);

    }

    /**
     * Navigate to home page
     */
    goHome() {
        // this.navCtrl.popAll();
        this.navCtrl.setRoot(HomePage);
    }
    
    generallogIn(){
        console.log(this.form)
         this.logInService.loginByEmail(this.form).subscribe(response => {
            console.log(response)
            let toast = this.toastCtrl.create({
                message: response.message,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            if(response.status==true){
                var data=JSON.stringify(response.user);
                 localStorage.setItem('loggedUser', data);
                 this.viewCtrl.dismiss();
            }
        });
    }

}

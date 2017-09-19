import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {FavouritesPage} from './../favourites/favourites';
import {LoginPage} from './../login/login';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    loggedUser;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
        this.loggedUser = localStorage.getItem("loggedUser");
        if(this.loggedUser == null ){
        let loginModal = this.modalCtrl.create(LoginPage);
        loginModal.present();
        }

    }


    /**
     * Navigate to favourite page 
     */
    goFavourite() {
        this.navCtrl.push(FavouritesPage);
    }

}

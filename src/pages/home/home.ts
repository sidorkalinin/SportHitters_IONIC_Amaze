import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {FavouritesPage} from './../favourites/favourites';
import {LoginPage} from './../login/login';
//import {TabsPage} from './../tabs/tabs';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    loggedUser;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
        this.loggedUser = localStorage.getItem("loggedUser");
        console.log(this.loggedUser)
        if(this.loggedUser == null ){
         this.navCtrl.setRoot(LoginPage);
        }

    }


    /**
     * Navigate to favourite page 
     */
    goFavourite() {
        this.navCtrl.push(FavouritesPage);
    }

}

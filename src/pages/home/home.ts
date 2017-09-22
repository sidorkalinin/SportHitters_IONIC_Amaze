import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {FavouritesPage} from './../favourites/favourites';
import {LoginPage} from './../login/login';
//import {TabsPage} from './../tabs/tabs';

import { SportsProvider } from '../../providers/sports/sports';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    loggedUser;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController,public sportService: SportsProvider) {
        this.loggedUser = localStorage.getItem("loggedUser");
        if(this.loggedUser == null ){
         this.navCtrl.setRoot(LoginPage);
        }
        
         this.sportService.getAllSports().subscribe(response => {
             
             console.log(response)
         })

    }


    /**
     * Navigate to favourite page 
     */
    goFavourite() {
        this.navCtrl.push(FavouritesPage);
    }

}

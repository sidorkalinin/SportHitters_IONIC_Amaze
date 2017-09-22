import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { FavouritesPage } from './../favourites/favourites';
import { LoginPage } from './../login/login';
//import {TabsPage} from './../tabs/tabs';

import { SportsProvider } from '../../providers/sports/sports';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    loggedUser;

    sportsList = [];

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public sportService: SportsProvider) {
        this.loggedUser = localStorage.getItem("loggedUser");
        if (this.loggedUser == null) {
            this.navCtrl.setRoot(LoginPage);
        }
        //get all the sport list and games 
        this.sportService.getAllSports().subscribe(response => {
            console.log(response);
            for (let item of response) {
                console.log(item);
            }
            // if (response) {
            //     for (var index = 0; index < response.length; index++) {
            //         alert(response[index]);
            //         let sport = {
            //             name: response[index],
            //             games: []
            //         };
            //         this.sportService.oddTypeGame(sport).subscribe(response => {
            //             if (response) {
            //                 sport.games.push(response);
            //             }
            //         });
            //         this.sportsList.push(sport);
            //     }
            // }
        });

    }


    /**
     * Navigate to favourite page 
     */
    goFavourite() {
        this.navCtrl.push(FavouritesPage);
    }

}

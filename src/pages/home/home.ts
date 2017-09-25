import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {FavouritesPage} from './../favourites/favourites';
import {LoginPage} from './../login/login';
//import {TabsPage} from './../tabs/tabs';

import {SportsProvider} from '../../providers/sports/sports';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    loggedUser;
    sports;
    sportsList = [];
    sportsCount;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public sportService: SportsProvider) {
        this.loggedUser = localStorage.getItem("loggedUser");
        if (this.loggedUser == null) {
            this.navCtrl.setRoot(LoginPage);
        }
        //get all the sport list and games 
        this.sportService.getAllSports().subscribe(response => {
            if (response)
                this.sports = response;
            let sport = {
                name: response[0],
                games: []
            };
            this.sportService.oddTypeGame(response[0]).subscribe(response => {
                if (response) {
                    this.sportsCount = 0;
                    sport.games.push(response);
                    this.sportsList.push(sport);
                }
            })
        });
    }

    doInfinite(infiniteScroll) {
        if (this.sportsList.length <= Object.keys(this.sports).length) {
            let sport = {
                name: this.sports[this.sportsCount + 1],
                games: []
            };
            this.sportService.oddTypeGame(this.sports[this.sportsCount + 1]).subscribe(response => {
                if (response) {
                    this.sportsCount = this.sportsCount + 1;
                    sport.games.push(response);
                    this.sportsList.push(sport);
                    infiniteScroll.complete();
                }
            })
        }
        else {
            infiniteScroll.complete();
        }

    }


    /**
     * Navigate to favourite page 
     */
    goFavourite() {
        this.navCtrl.push(FavouritesPage);
    }

}

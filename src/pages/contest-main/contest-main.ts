import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FavouritesPage} from './../favourites/favourites';
import {CreateContestPage} from './../create-contest/create-contest';
import {JoinContestPage} from './../join-contest/join-contest';
/**
 * Generated class for the ContestMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-contest-main',
    templateUrl: 'contest-main.html',
})
export class ContestMainPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ContestMainPage');
    }

    /**
    * Navigate to favourite page 
    */
    goFavourite() {
        this.navCtrl.push(FavouritesPage);
    }

    /**
    * Navigate to create contest page 
    */
    goToCreateContest() {
        this.navCtrl.push(CreateContestPage);
    }
    
     /**
    * Navigate to join contest page 
    */
    goToJoinContest() {
        this.navCtrl.push(JoinContestPage);
    }
}

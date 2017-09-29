import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { ContestDetailsPage } from './../contest-details/contest-details';
import {SportsProvider} from '../../providers/sports/sports';

/**
 * Generated class for the JoinContestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-join-contest',
    templateUrl: 'join-contest.html',
})
export class JoinContestPage {
    sportsList = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public sportService: SportsProvider) {
        //get all the sports
        this.sportService.getAllSports().subscribe(response => {
            if (response) {
                let values = Object.keys(response).map(key => response[key]);
                this.sportsList = values;
            }
        })

    }
    /**
     * go to contest detail page
     */

    goToContestDetails(sport) {
        this.navCtrl.push(ContestDetailsPage, {
            sport: sport
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad JoinContestPage');
    }

}

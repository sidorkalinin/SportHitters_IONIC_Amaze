import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ContestSelectedPage} from './../contest-selected/contest-selected';

/**
 * Generated class for the ContestDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-contest-details',
    templateUrl: 'contest-details.html',
})
export class ContestDetailsPage {
    players;
    team;
    gameType;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        let sport = navParams.get('sport');
        console.log(sport)
        this.players = '1';
        this.team = '10';
        this.gameType = 'Free';
    }

    segmentChanged() {

    }

    createContest() {
        console.log(this.team)
         console.log(this.players)
          console.log(this.gameType)
        this.navCtrl.push(ContestSelectedPage);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ContestDetailsPage');
    }

}

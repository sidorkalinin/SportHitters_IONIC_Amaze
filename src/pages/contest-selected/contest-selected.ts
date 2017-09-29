import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { ContestMainPage } from './../contest-main/contest-main';
/**
 * Generated class for the ContestSelectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-contest-selected',
    templateUrl: 'contest-selected.html',
})
export class ContestSelectedPage {
    footer: Boolean = false;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ContestSelectedPage');
    }

    showFooter(footer) {
        if (footer == true) {
            this.footer = false;
        }
        else {
            this.footer = true;
        }

    }
    
    submitPicks(){
        this.navCtrl.setRoot(ContestMainPage);
    }

}

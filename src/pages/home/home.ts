import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {FavouritesPage} from './../favourites/favourites';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  /**
   * Navigate to favourite page 
   */
  goFavourite() {
    this.navCtrl.push(FavouritesPage);
  }

}

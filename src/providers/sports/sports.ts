import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Details} from '../../details';

/*
  Generated class for the SportsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SportsProvider {
    url = Details.ApiURL;
    headers: Headers;

    constructor(public http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'jsonOdds-API-Key': Details.JsonOddsAPIKey 
        });
        console.log('Hello SportsProvider Provider');
    }

    getAllSports() {
        return this.http.get(this.url + '/sports', {headers: this.headers})
            .map(res => res.json())
    }

}

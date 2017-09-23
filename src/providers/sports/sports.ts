import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Details } from '../../details';

@Injectable()
export class SportsProvider {

    url = Details.ApiURL;
    headers: Headers;

    constructor(public http: Http) {

        this.headers = new Headers({
            // 'Content-Type': 'application/json',
            'JsonOdds-API-Key': Details.JsonOddsAPIKey
        });
        console.log('Hello SportsProvider Provider');
    }

    getAllSports() {
        return this.http.get(this.url + '/sports', { headers: this.headers })
            .map(res => res.json())
    }

    oddTypeGame(sport) {
        return this.http.get(this.url + '/odds/' + sport + '?oddType=Game', { headers: this.headers })
            .map(res => res.json())
    }

}

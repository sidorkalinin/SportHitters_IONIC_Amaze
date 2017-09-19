import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
    url = "http://18.220.119.107/api";
    headers = new Headers({
        'Content-Type': 'application/json'
    });
    options = new RequestOptions({
        headers: this.headers
    });
    constructor(public http: Http) {
        console.log('Hello LoginProvider Provider');
    }

    loginByEmail(loginInfo) {
        let body = JSON.stringify({
            password: loginInfo.password,
            username: loginInfo.username
        });
        return this.http.post(this.url + '/auth/login', body, this.options)
            .map(res => res.json())
    }
}

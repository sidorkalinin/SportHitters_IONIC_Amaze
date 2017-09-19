import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SignUpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignUpProvider {
    url = "http://18.220.119.107/api";
    headers = new Headers({
        'Content-Type': 'application/json'
    });
    options = new RequestOptions({
        headers: this.headers
    });
    constructor(public http: Http) {

    }

    signUpByEmail(signUpInfo) {
        let body = JSON.stringify({
            email: signUpInfo.email,
            password: signUpInfo.password,
            username: signUpInfo.username
        });
        return this.http.post(this.url + '/auth/signup', body, this.options)
            .map(res => res.json())
    }
}


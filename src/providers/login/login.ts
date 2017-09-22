import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Details } from '../../details';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
    url = Details.URL;
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

    loginBySocialAccount(data) {
        let body = JSON.stringify(data);
        return this.http.post(this.url + '/auth/login', body, this.options)
            .map(res => res.json())
    }
    
    
    forgotPassword(email){
        let body = JSON.stringify({
            email: email
        });
        return this.http.post(this.url + '/auth/change-password', body, this.options)
            .map(res => res.json())
    }
}
// 1093557657422-n6hpqc4h5l7fnk1e245hm9ip7cabg4ko.apps.googleusercontent.com  ---clientid
// 
//  poolBhSmdxk3PY7106l1tJw5  --clientsecret
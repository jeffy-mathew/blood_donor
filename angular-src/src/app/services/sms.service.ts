import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
@Injectable()
export class SmsService {
  authToken: any;
  number : any;
  constructor(private http: Http) { }
  smsApi(number: any) {
    this.loadToken();
     var headers = new Headers();
    //headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/sms', JSON.stringify(number), { headers: headers })
      .map(res => res.json());
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;

  }

}

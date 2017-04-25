import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PendingService {

   adminCheck: any;
  authToken:any;
        user:any;
         loadAdminToken(){
            this.adminCheck = JSON.parse (localStorage.getItem('user'));
            if(this.adminCheck.type=="admin"){
                const token =localStorage.getItem('id_token');
                this.authToken = token;
            } else {
                this.authToken = "";
            }
        }
        constructor (private http: Http){}  
  getDonorResult(user) {
 
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.loadAdminToken();
    headers.append('Authorization',this.authToken);
    return this.http.post('http://localhost:3000/api/returndonors',user, { headers: headers })
      .map(res => res.json());
  }

}

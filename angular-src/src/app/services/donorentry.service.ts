import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map' ;
@Injectable()
export class DonorentryService {
   
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

        addDonor(user ){
            
            let headers = new Headers ();
            headers.append('Content-Type','application/json');
            this.loadAdminToken();
            headers.append('Authorization',this.authToken);
            return this.http.post('http://localhost:3000/api/adddonor', user,{headers: headers})
            .map(res=> res.json());
            
         
        }

}

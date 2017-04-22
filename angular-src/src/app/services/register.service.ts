import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map' ;
@Injectable()
    export class RegisterService{
        authToken:any;
        user:any;
        constructor (private http: Http){}  

        regUser(user ){
            
            let headers = new Headers ();
            headers.append('Content-Type','application/json');
            return this.http.post('http://localhost:3000/api/register', user,{headers: headers})
            .map(res=> res.json());
         
        }
    } 
    

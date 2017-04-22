import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map' ;
@Injectable()
    export class LoginService{
        authToken: any;
        user : any;
        flag: any;
        adminCheck: any;
        constructor(private http: Http){}
        authenthicateUser(user:any){ 
            var headers = new Headers ();
            headers.append('Content-Type','application/json');
            return this.http.post('http://localhost:3000/api/authenticate', JSON.stringify(user),{headers: headers})
            .map(res=> res.json());
        }
        storeUserData(token:any,user:any){
            localStorage.setItem('id_token',token);
            localStorage.setItem('user',JSON.stringify(user)); 
            this.authToken = token;
            this.user = user;

        }
        loginTrue(){
          return tokenNotExpired();
        }

        loginAdminTrue(){
           this.adminCheck = JSON.parse (localStorage.getItem('user')); 
          if(tokenNotExpired()&&this.adminCheck.type=="admin"){
              return true;
          };
        }

        getProfile(){
            var headers = new Headers ();
            this.loadToken();
            headers.append('Authorization',this.authToken);
            headers.append('Content-Type','application/json');
            return this.http.get('http://localhost:3000/api/profile',{headers: headers})
            .map(res=> res.json());
        }

           getAdmindashboard(){
            var headers = new Headers ();
            this.loadAdminToken();
            headers.append('Authorization',this.authToken);
            headers.append('Content-Type','application/json');
            return this.http.get('http://localhost:3000/api/admindashboard',{headers: headers})
            .map(res=> res.json());
        }
        
        getExcelconverter(){
            var headers = new Headers ();
            this.loadAdminToken();
            headers.append('Authorization',this.authToken);
            headers.append('Content-Type','application/json');
            return this.http.get('http://localhost:3000/api/excelconverter',{headers: headers})
            .map(res=> res.json());
        }

        loadAdminToken(){
            this.adminCheck = JSON.parse (localStorage.getItem('user'));
            if(this.adminCheck.type=="admin"){
                const token =localStorage.getItem('id_token');
                this.authToken = token;
            } else {
                this.authToken = "";
            }
        }

        loadToken(){
            const token =localStorage.getItem('id_token');
            this.authToken = token;

        }
        
        logout(){
            this.authToken=null;
            this.user= null;
            localStorage.clear();
        }
       
    }
    
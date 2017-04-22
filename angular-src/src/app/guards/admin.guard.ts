import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {LoginService} from '../services/login.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Injectable() 
export class AdminGuard implements CanActivate{
    constructor(private loginService: LoginService, private flashMessage: FlashMessagesService,private router:Router){}

    canActivate (){
        if(this.loginService.loginAdminTrue()){
            return true;
        } 
        
        else {
            this.loginService.logout();
            this.router.navigate(['/login']);
            this.flashMessage.show("Log in as administrator to use the link", {
              cssClass: 'alert-danger',
              timeout: 5000
            });
            return false;
        }
    }
}
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService,ValidateService]
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;

  constructor(
    private loginService: LoginService ,
    private router:Router,
    private flashMessage: FlashMessagesService,
    private validateService:ValidateService
  ) { }

   onSubmit(){
       const user = {email: this.username, pwd: this.password};
       if(!this.validateService.validateEmail(user.email)){
          this.flashMessage.show("Invalid Email",{cssClass:'alert-danger',timeout:1000});
       }
       else{
          this.loginService.authenthicateUser(user).subscribe(data =>{
          if(data.success){
            this.loginService.storeUserData(data.token,data.user);
            this.flashMessage.show("You are now logged in", {
              cssClass: 'alert-success',
              timeout: 5000
            });
            if(data.user.type=="normal"){
              this.router.navigate(['']);
            }
            else if (data.user.type=="admin"){
              this.router.navigate(['admindashboard'])
            }
            
          }  
          else{
            this.flashMessage.show(data.msg, {
              cssClass: 'alert-danger',
              timeout: 5000
            });
            this.router.navigate(['login']);
          }
       });
        }
      };

  ngOnInit() {
  }

}

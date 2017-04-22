import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {RegisterService} from '../../services/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService,ValidateService]
})
export class RegisterComponent implements OnInit {

 first_name: String;
  last_name: String;
  address: String;
  email: String;
  pwd:String;
  pwdcnf:String;
  phone:Number;


  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private registerService:RegisterService,
    private router:Router){};

   regformSubmit(event: any){
    event.preventDefault();
    var newreg = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone: this.phone,
      pwd:this.pwd,
      pwdcnf:this.pwdcnf
    };
    if(!this.validateService.validateRegister(newreg)){
      this.flashMessage.show("Fill all fields",{cssClass:'alert-danger',timeout:2000});
      return false;
    }
    if(!this.validateService.validateEmail(newreg.email)){
      this.flashMessage.show("Invalid Email",{cssClass:'alert-danger',timeout:2000});
      return false;
    }
    if(!this.validateService.validatePhone(newreg.phone)){
      this.flashMessage.show("Invalid Phone Number",{cssClass:'alert-danger',timeout:2000});
      return false;
    }
    if(!this.validateService.validatePassword(newreg.pwd,newreg.pwdcnf)){
      this.flashMessage.show("Wrong Password",{cssClass:'alert-danger',timeout:2000});
      return false;
    }
    this.registerService.regUser(newreg).subscribe(data => {
      if(data.success){
        this.flashMessage.show("Successfully registered",{cssClass:'alert-success',timeout:2000});
        this.router.navigate(['/login']);
      }
      else if(data.success == false && data.message == "Exist"){
        this.flashMessage.show("Email or Phone Number exist",{cssClass:'alert-danger',timeout:2000});
        this.router.navigate(['/register']);
      }
      else {
        this.flashMessage.show("Something went wrong",{cssClass:'alert-danger',timeout:2000});
        this.router.navigate(['/register']);
      }
    });
   
  
}

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {DonorentryService} from '../../services/donorentry.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-singleentry',
  templateUrl: './singleentry.component.html',
  styleUrls: ['./singleentry.component.css'],
  providers: [DonorentryService,ValidateService]
})

export class SingleentryComponent implements OnInit {

  first_name: String;
  last_name: String;
  addr1: String;
  addr2:string;
  email: String;
  phone:Number;
  location:String;
  pincode:Number;
  gender:String;
  bloodgroup:String;
  type:string;

  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private donorentryService:DonorentryService,
    private router:Router){};
   userobj =  JSON.parse (localStorage.getItem('user'));
   donorformSubmit(event: any){
    event.preventDefault();
    var newdonor = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone: this.phone,
      addr1:this.addr1,
      addr2:this.addr2,
      location:this.location,
      pincode:this.pincode,
      gender:this.gender,
      bloodgroup:this.bloodgroup,
      type:this.userobj.type
    };
    console.log(newdonor);
    if(!this.validateService.validateSingleRegister(newdonor)){
      this.flashMessage.show("Fill all fields",{cssClass:'alert-danger',timeout:2000});
      return false;
    }
    if(!this.validateService.validateEmail(newdonor.email)){
      this.flashMessage.show("Invalid Email",{cssClass:'alert-danger',timeout:2000});
      return false;
    }
    if(!this.validateService.validatePhone(newdonor.phone)){
      this.flashMessage.show("Invalid Phone Number",{cssClass:'alert-danger',timeout:2000});
      return false;
    }
    if(!this.validateService.validatePincode(newdonor.pincode)){
      this.flashMessage.show("Invalid PIN code",{cssClass:'alert-danger',timeout:2000});
      return false;
    }
    this.donorentryService.addDonor(newdonor).subscribe(data => {
      console.log(data);
      if(data.success){
        this.flashMessage.show("Successfully registered",{cssClass:'alert-success',timeout:2000});
        this.router.navigate(['/admindashboard']);
      }
      else if(data.success == false && data.message == "Exist"){
        this.flashMessage.show("Email or Phone Number exist",{cssClass:'alert-danger',timeout:2000});
        this.router.navigate(['/admindashboard']);
      }
      else {
        this.flashMessage.show("Something went wrong",{cssClass:'alert-danger',timeout:2000});
        this.router.navigate(['/admindashboard']);
      }
    });
   
  
}

  

  ngOnInit() {
  }

}

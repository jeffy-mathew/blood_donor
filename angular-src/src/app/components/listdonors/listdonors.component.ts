import { Component, OnInit } from '@angular/core';
import { ListdonorService } from '../../services/listdonor.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-listdonors',
  templateUrl: './listdonors.component.html',
  styleUrls: ['./listdonors.component.css']
})
export class ListdonorsComponent {
  protected donorlist=[];
  type:string;
  userobj =  JSON.parse (localStorage.getItem('user'));
   constructor(
     private listdonorService: ListdonorService,
     private flashMessage: FlashMessagesService,
     private router:Router
  ) {
    var user = {
      type:this.userobj.type
    };
 
  this.listdonorService.getDonorResult(user).subscribe(data => {
        if (data.success == false) {
          this.flashMessage.show("No donors in the database", { cssClass: 'alert-danger', timeout: 3000 });
           this.router.navigate(['/admindashboard']);
        }
       else {
         console.log(data.data);
          this.donorlist = data.data;
          for(var i=0;i<this.donorlist.length;i++){
           console.log(this.donorlist[i]);
          }
          }
        })
  };
  
}

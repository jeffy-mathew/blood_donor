import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    this.loginService.getProfile().subscribe(profile =>{
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}

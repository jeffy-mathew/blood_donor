import { Component, OnInit, AfterViewInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers : [LoginService]
})
export class NavbarComponent implements OnInit {

  constructor(private loginService : LoginService) {
    
  }

  ngOnInit() {}

}

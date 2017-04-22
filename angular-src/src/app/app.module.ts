
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from'angular2-flash-messages';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';

import {ValidateService} from './services/validate.service';
import {RegisterService} from './services/register.service';
import {LoginService} from './services/login.service';
import { ProfileComponent } from './components/profile/profile.component';

import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';
import { ExcelconverterComponent } from './components/excelconverter/excelconverter.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const appRoutes : Routes = [
  {path:'', component: HomeComponent},
  {path:'admindashboard', component: AdmindashboardComponent, canActivate:[AdminGuard]},
  {path:'excelconverter', component: ExcelconverterComponent, canActivate:[AdminGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdmindashboardComponent,
    ProfileComponent,
    FileSelectDirective,
    FileDropDirective,
    ExcelconverterComponent,
    SidenavComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    RegisterService,
    LoginService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

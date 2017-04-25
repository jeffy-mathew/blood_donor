
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from'angular2-flash-messages';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { DatePickerModule } from 'ng2-datepicker';
import  {NgProgressModule} from 'ng2-progressbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import {ProfileComponent} from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {RegisterService} from './services/register.service';
import {LoginService} from './services/login.service';
import {LocationService} from './services/location.service';
<<<<<<< HEAD
import {DonorentryService} from './services/donorentry.service';
import {ListdonorService} from './services/listdonor.service';
import {PendingService} from './services/pending.service';

=======
import {SearchService} from './services/search.service';
import {SmsService} from './services/sms.service'
>>>>>>> cb79897333ce18f9a92310797f0bd7cbfee84dad
import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';
import { ExcelconverterComponent } from './components/excelconverter/excelconverter.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {SingleentryComponent} from './components/singleentry/singleentry.component';
import { ListdonorsComponent } from './components/listdonors/listdonors.component';
import { Ng2CompleterModule } from "ng2-completer";
import { PendingapprovalsComponent } from './pendingapprovals/pendingapprovals.component';
const appRoutes : Routes = [
  {path:'', component: HomeComponent},
  {path:'admindashboard', component: AdmindashboardComponent, canActivate:[AdminGuard]},
  {path:'excelconverter', component: ExcelconverterComponent, canActivate:[AdminGuard]},
  {path:'singleentry', component: SingleentryComponent, canActivate:[AdminGuard]},
  {path:'listdonors', component: ListdonorsComponent, canActivate:[AdminGuard]},
  {path:'pendingapprovals', component: PendingapprovalsComponent, canActivate:[AdminGuard]},
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
    SingleentryComponent,
    ListdonorsComponent,
    PendingapprovalsComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    Ng2CompleterModule,
    DatePickerModule,
    NgProgressModule
  ],
  providers: [
    ValidateService,
    RegisterService,
    LoginService,
    AuthGuard,
    AdminGuard,
    LocationService,
    DonorentryService,
    ListdonorService,
    PendingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

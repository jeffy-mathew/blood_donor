import { Component } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { LocationService } from '../../services/location.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { LoginService } from '../../services/login.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { SearchService } from '../../services/search.service';
import { SmsService } from '../../services/sms.service';
import { NgProgressService } from "ng2-progressbar";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginService, LocationService, ValidateService, SearchService, SmsService],
})
export class HomeComponent {
  protected searchStr: string;
  protected dataService: CompleterData;
  protected bgroup: String;
  protected searchData = [];
  protected searchresult = [];
  disabledbtn: any[] = [];
  date: DateModel;
  options: DatePickerOptions;
  searchtoggle: boolean;
  getloation() {
    this.locationService.getLocations().subscribe(data => {
      var locations = data.data;
      var flag = false;
      var k = 0;
      for (var count = 0; count < locations.length; count++) {
        if (flag == false) {
          this.searchData[k] = locations[count];
          k++;
        }
        for (var i = 0; i < this.searchData.length; i++) {
          if (this.searchData[i] == locations[count]) {
            flag = true;
          }
        }
      }
    });
  }

  constructor(
    private completerService: CompleterService,
    private locationService: LocationService,
    private loginService: LoginService,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private searchService: SearchService,
    private pService: NgProgressService,
    private smsService: SmsService
  ) {
    this.searchtoggle = true;
    this.options = new DatePickerOptions();
    this.getloation();
    this.dataService = completerService.local(this.searchData, 'location', 'location');
  }

  toggle() {
    this.searchtoggle = true;
  }

  onSubmit() {
    if (this.validateService.validateSearch(this.searchStr, this.bgroup, this.date) == false) {
      this.flashMessage.show("Missing Fields", { cssClass: 'alert-danger', timeout: 1000 });
    }
    else {
      this.pService.start();
      const searchops = { loc: this.searchStr, bgroup: this.bgroup, date: this.date.formatted };
      this.searchService.getSearchResult(searchops).subscribe(data => {
        if (data.success == false) {
          this.searchtoggle = true;
          this.flashMessage.show("No donors with selected bloog group available in the selected area", { cssClass: 'alert-danger', timeout: 3000 });
          this.pService.done();
        }
        else {
          this.searchresult = data.data;
          for (var i = 0; i < this.searchresult.length; i++) {
            this.searchresult[i].distance = data.distance[i];
          }
          this.pService.done();
          this.searchtoggle = false;
        }

      })

    }

  }
  disableButton(id:number) {
    this.disabledbtn[id]=true;
  }

  sms(phonenum) {
    const phoneno = { phone: phonenum }
    this.smsService.smsApi(phoneno).subscribe(data => {
      if(data.Status == "Success"){
        this.flashMessage.show("Sent message to "+phonenum, { cssClass: 'alert-danger', timeout: 2000 })
      }
      else {
        this.flashMessage.show(data.Details, { cssClass: 'alert-danger', timeout: 2000 })
      }
      console.log(data)
    })
  }

}

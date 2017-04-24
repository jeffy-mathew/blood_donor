import { Component } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { LocationService } from '../../services/location.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { LoginService } from '../../services/login.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginService, LocationService, ValidateService, SearchService]
})
export class HomeComponent {
  protected searchStr: string;
  protected dataService: CompleterData;
  protected bgroup: String;
  protected searchData = [];
  date: DateModel;
  options: DatePickerOptions;

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
    private validateService: ValidateService
  ) {
    this.options = new DatePickerOptions();
    this.getloation();
    this.dataService = completerService.local(this.searchData, 'location', 'location');
  }

  onSubmit() {
    if (this.validateService.validateSearch(this.searchStr, this.bgroup, this.date) == false) {
      this.flashMessage.show("Missing Fields", { cssClass: 'alert-danger', timeout: 1000 });
    }
    else {
      const searchops = { loc: this.searchStr, bgroup: this.bgroup, date: this.date.formatted };
      console.log(searchops);
    }

  }

}

import { Component } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import {LocationService} from '../../services/location.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent{
  protected searchStr: string;
  protected dataService: CompleterData;
  protected searchData = [ ];
   date: DateModel;
  options: DatePickerOptions;
  getloation(){
    this.locationService.getLocations().subscribe(data => {
      var locations = data.data;
      for(var count = 0; count<locations.length;count++){
       this.searchData[count]=locations[count];
      }
    });
  }
   constructor(private completerService: CompleterService, private locationService: LocationService) {
    this.options = new DatePickerOptions(); 
    this.getloation();
    this.dataService = completerService.local(this.searchData, 'location', 'location');
  }
  

}

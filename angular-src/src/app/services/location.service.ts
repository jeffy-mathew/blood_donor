import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LocationService {

  constructor(private http: Http) { }
  getLocations() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/api/locations', { headers: headers })
      .map(res => res.json());
  }

}

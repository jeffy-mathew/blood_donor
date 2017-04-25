import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {
  constructor(private http: Http) { }
  getSearchResult(resultparams: any) {
 
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/search', JSON.stringify(resultparams), { headers: headers })
      .map(res => res.json());
  }

}

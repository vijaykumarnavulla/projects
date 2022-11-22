import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiService {

  public getDateTime = new Subject();
  getDateTime$ = this.getDateTime.asObservable();

  constructor(private http: Http) { }

  getDateTimeAPI() {
    // Call the API and return the response (change the code below)
    this.http.get('https://jsonmock.hackerrank.com/datetime').subscribe(
      res => {
        return this.getDateTime.next(res.json());
      }
    )
  }

}

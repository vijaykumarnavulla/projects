import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  onFetchApi(){
    this.apiService.getDateTimeAPI();
  }

}

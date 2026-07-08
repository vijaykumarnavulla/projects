import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-display',
  templateUrl: './app-display.component.html',
  styleUrls: ['./app-display.component.css']
})
export class AppDisplayComponent implements OnInit {

  public date = [];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getDateTime$.subscribe(
      (val:any)=>{
        this.date = val.date.split('-');
        this.date = this.date.map(val => parseInt(val));
      });
    
  }

}

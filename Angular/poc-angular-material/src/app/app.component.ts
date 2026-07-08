import { Component } from '@angular/core';
import { DetailService } from './services/details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jda';
  isMatDrawerOpen: boolean = false;

  constructor(private detailService: DetailService) { }

  ngOnInit() {
  }
}

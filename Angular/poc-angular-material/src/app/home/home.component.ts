import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'home-cmp',
    //moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls:['./home.component.css'],
    
})

export class HomeComponent{
  ngOnInit(){
  console.log("IN")
  }

}

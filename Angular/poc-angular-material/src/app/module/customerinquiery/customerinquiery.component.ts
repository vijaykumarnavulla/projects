import { Component } from '@angular/core';

@Component({
    selector: 'customerinquiery-cmp',
   // moduleId: module.id,
    templateUrl: 'customerinquiery.component.html',
    styleUrls:['./customerinquiery.component.css']
})

export class CustomerInquieryComponent{
  ngOnInit(){
    console.log("IN")
  }

}

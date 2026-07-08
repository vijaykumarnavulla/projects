import { Component, OnInit ,Output, EventEmitter } from '@angular/core';


@Component({
    //moduleId: module.id,
    selector: 'header-cmp',
    templateUrl: './header.component.html',
      styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
     @Output() menuClick = new EventEmitter();
    ngOnInit(){
    }

}

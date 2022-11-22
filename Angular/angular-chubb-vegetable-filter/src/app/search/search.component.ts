import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {
    // add corresponding validators
    this.searchForm = this.fb.group({
      searchName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
    });

     // write a function that calls changeVegetableName upon value change in the form

     this.searchForm.get('searchName').valueChanges.subscribe(val => {
      this.service.changeVegetableName(val);
    });
  }

}
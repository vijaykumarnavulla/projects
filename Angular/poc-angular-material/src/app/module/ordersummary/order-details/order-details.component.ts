import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Observable } from "rxjs";
import { DetailService } from "src/app/services/details.service";
import { MatSelectChange } from '@angular/material';

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.css"]
})
export class OrderDetailsComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = "This field is required";
  post: any = "";
  counterValue: string = "hello";
  data: any;
  isExpand: boolean = true;

  orderStatusTypes = [
    { name: 'Open' },
    { name: 'Void' },
    { name: 'Final' }
  ];

  transactionType = [
    {name:'Sale'},
    {name:'Return'},
    {name:'Exchange'}
  ]

  constructor(
    private formBuilder: FormBuilder,
    private detailService: DetailService
  ) {}

  ngOnInit() {
    this.onInit();
    this.detailService.getOrderDetails().subscribe(data => {
      this.data = data;
      if (!data || data === "") {
        this.detailService.getData().subscribe(data => {
          this.detailService.fetchDetails(data);
        });
      }else{
        console.log(this.data.details[0].orderNumber);
        this.createForm();
      }
    
    });

   
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      orderNumber: [this.data.details[0]["orderNumber"]],
      transactionType: [this.data.details[0]["transactionType"]],
      orderStatus: [{name:this.data.details[0]["orderStatus"]}],
      storeCode: [this.data.details[0]["storeCode"]],
      cashDrawer: [this.data.details[0]["cashDrawer"]],
      salerPerson_1: [this.data.details[0]["salesPerson_1"]],
      salesPerson_2: [this.data.details[0]["salesPerson_2"]],
      shipBill_customerCode: [this.data.shippingInformation[0]["customerCode"]],
      shipBill_firstName: [this.data.shippingInformation[0]["firstName"]],
      shipBill_lastname: [this.data.shippingInformation[0]["lastName"]],
      shipBill_address_1: [this.data.shippingInformation[0]["address_1"]],
      shipBill_address_2: [this.data.shippingInformation[0]["address_2"]],
      shipBill_city: [this.data.shippingInformation[0]["city"]],
      shipBill_state: [this.data.shippingInformation[0]["state"]],
      shipBill_zipCode: [this.data.shippingInformation[0]["zipCode"]],
      shipBill_phoneNumber: [this.data.shippingInformation[0]["phoneNumber"]],
      billInfo_firstName: [this.data.billingInformation[0]["firstName"]],
      billInfo_lastname: [this.data.billingInformation[0]["lastName"]],
      billInfo_address_1: [this.data.billingInformation[0]["address_1"]],
      billInfo_address_2: [this.data.billingInformation[0]["address_2"]],
      billInfo_city: [this.data.billingInformation[0]["city"]],
      billInfo_state: [this.data.billingInformation[0]["state"]],
      billInfo_zipCode: [this.data.billingInformation[0]["zipCode"]],
      billInfo_phoneNumber: [this.data.billingInformation[0]["phoneNumber"]]
    });
  }

  onInit(){
    this.formGroup = this.formBuilder.group({
      orderNumber: [''],
      transactionType: [],
      orderStatus: [],
      storeCode: [],
      cashDrawer: [],
      salerPerson_1: [],
      salesPerson_2: [],
      shipBill_customerCode: [],
      shipBill_firstName: [],
      shipBill_lastname: [],
      shipBill_address_1: [],
      shipBill_address_2: [],
      shipBill_city: [],
      shipBill_state: [],
      shipBill_zipCode: [],
      shipBill_phoneNumber: [],
      billInfo_firstName: [],
      billInfo_lastname: [],
      billInfo_address_1: [],
      billInfo_address_2: [],
      billInfo_city: [],
      billInfo_state: [],
      billInfo_zipCode: [],
      billInfo_phoneNumber: []
    });
  }

  

  selectionChanged(event: MatSelectChange) {
    // this.selectionChange.emit(new MatSelectChange(this.matSelect, event.value));
    // this.valueChange.emit(event.value);
    // this.onChange(event.value);
    // this.onTouched();
  } 
  
  onSubmit(post) {
    this.post = post;
  }

  ngOnDestroy() {
    // this.detailService
  }
}

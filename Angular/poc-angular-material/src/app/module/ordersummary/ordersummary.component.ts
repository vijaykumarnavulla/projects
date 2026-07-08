import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ordersummary from './ordersummary';
@Component({
    selector: 'ordersummary-cmp',
   // moduleId: module.id,
    templateUrl: 'ordersummary.component.html',
    styleUrls: ['./ordersummary.component.css']
})

export class OrderSummaryComponent{

  constructor(private httpClient: HttpClient){}
  baseUrl:string = "/assets/ordersummary.json";
  public isInputFocus:boolean = false;
  public currentOrderSummary:Array<any> = [];
  public ordersummarys:Array<any> = [];
  public searchStr:string; 
 //This will take values based on current page number
 public recordStartValue:number = 1;
 public pageLength:number = 20;
 //Display pagelength or if less records are available display that length
 public recordsCount:number = this.pageLength;
 //update this variable on Data load successful
 public totalRecrods:number = 0;
 public currentPage:number = 1;
  ngOnInit(){
    this.get_ordersummary();
    let element:HTMLElement = document.getElementById('mat-tab-payments') as HTMLElement;
   if(element) element.click();
  }
 
  get_ordersummary(){
    this.httpClient.get(this.baseUrl).subscribe((res)=>{
        console.log("res"+res);
        this.totalRecrods = res["OrderDetails"].length;
        this.ordersummarys = res["OrderDetails"];
        this.currentOrderSummary=this.ordersummarys.slice(this.recordStartValue-1,this.recordsCount);
       // this.ordersummarys = [...this.currentOrderSummary];
    });
  }
  public sortOptions = [
    {value:'ln',label:'Ln'},
    {value:'qty',label:'Qty'},
    {value:'store',label:'Store'},
    {value:'location',label:'Location'}
   ]
    
    step = 0;  
    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {  
      if(this.recordsCount < this.totalRecrods ){  
        this.currentPage++;  
        this.recordStartValue = this.recordStartValue + this.pageLength;  
        this.recordsCount = (this.currentPage * this.pageLength <= this.totalRecrods)?(this.currentPage * this.pageLength):(this.totalRecrods)  
        this.currentOrderSummary = this.ordersummarys.slice(this.recordStartValue-1,this.recordsCount);  
      }  
    }
  
    prevStep() {  
      if(this.recordStartValue > this.pageLength ){  
        this.currentPage--;  
        this.recordStartValue = this.recordStartValue - this.pageLength;  
        this.recordsCount = this.currentPage * this.pageLength;  
        this.currentOrderSummary = this.ordersummarys.slice(this.recordStartValue-1,this.recordsCount);  
      }  
    }
    
  sortArray(sortColumn:any){
    this.currentOrderSummary = this.ordersummarys.sort(this.getSortOrder(sortColumn))
  }
/*
  searchForData(searchTxt:string){
    this.currentOrderSummary = this.ordersummarys.filter(this.searchInList(searchTxt))
  }*/
    //Comparer Function 

    getSortOrder(prop:any) { 
      return function(a:any, b:any) {  
          if (a[prop] > b[prop]) {   
              return 1;   
          } else if (a[prop] < b[prop]) {   
              return -1;   
          }   
          return 0;   
      } 
  
    }
    searchInList(serachTerm:any){
      return function(){  
        return JSON.stringify(this.ordersummary).indexOf(serachTerm) > -1  
      }  
    }
}
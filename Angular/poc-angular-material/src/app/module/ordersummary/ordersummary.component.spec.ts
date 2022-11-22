import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderSummaryComponent } from './ordersummary.component';
import { By } from '@angular/platform-browser';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { DetailService } from '../../services/details.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule, MatExpansionModule,MatSelectModule } from '@angular/material';
import {AppColortDirective} from '../../Directives/app.component.directive';
import {OrderDetailsComponent} from './order-details/order-details.component';
import { SearchOrdersPipe } from '../../module/ordersummary/orderSearch.pipe';
import { Input } from '@angular/compiler/src/core';

describe('OrderSummaryComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatExpansionModule,
        MatSelectModule        
      ],
      declarations: [
        OrderSummaryComponent,
        AppColortDirective,
        OrderDetailsComponent,
        SearchOrdersPipe
      ],
      providers:[
        DetailService
      ]
    }).compileComponents();
  }));

  it('should create the Component', () => {
    const fixture = TestBed.createComponent(OrderSummaryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render h6 tag with text`, () => {
    const fixture = TestBed.createComponent(OrderSummaryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h6').textContent).toContain('Home > Order entry/Maintenance');
  });
  it(`should render 3 expansion panels`, () => {
    const fixture = TestBed.createComponent(OrderSummaryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('mat-expansion-panel').length).toEqual(3);
  });
  it(`should render a dropdown selector`, () => {
    const fixture = TestBed.createComponent(OrderSummaryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-form-field')).toBeTruthy();
  });
  it(`test Tax Charges field is non-editable (readonly)`, () => {
    const fixture = TestBed.createComponent(OrderSummaryComponent);
    const el: HTMLInputElement = fixture.debugElement.query(By.css('.taxCharges')).nativeElement;
    const testValue = 'some_value';
    const initialValue = el.getAttribute('value')
    el.value = testValue;
    el.dispatchEvent(new Event('input'));
    expect(el.getAttribute('value')).toEqual(initialValue);
  });
  
});

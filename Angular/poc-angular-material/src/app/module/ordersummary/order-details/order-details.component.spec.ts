import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderDetailsComponent } from './order-details.component';
import { By } from '@angular/platform-browser';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { DetailService } from '../../../services/details.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchOrdersPipe } from '../../../module/ordersummary/orderSearch.pipe';
import {MatSelectModule} from '@angular/material/select';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;

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
        MatSelectModule
      ],
      declarations: [
        OrderDetailsComponent,
        SearchOrdersPipe
      ],
      providers:[
        DetailService
      ]
    }).compileComponents();
  }));

  it('should create the Component', () => {
    const fixture = TestBed.createComponent(OrderDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should render form element', () => {
    const fixture = TestBed.createComponent(OrderDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });
  it('should render "SHIPPING INFORMATION"', () => {
    const fixture = TestBed.createComponent(OrderDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('SHIPPING INFORMATION');
  });
  it('should render "BILLING INFORMATION"', () => {
    const fixture = TestBed.createComponent(OrderDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h5')[1].textContent).toContain('BILLING INFORMATION');
  });
  it('should render 23 input elements', () => {
    const fixture = TestBed.createComponent(OrderDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input').length).toEqual(23);
  });
});

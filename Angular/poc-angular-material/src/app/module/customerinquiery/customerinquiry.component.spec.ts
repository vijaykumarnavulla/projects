import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerInquieryComponent } from './customerinquiery.component';
import { By } from '@angular/platform-browser';
import { DetailService } from '../../services/details.service';
import {AppColortDirective} from '../../Directives/app.component.directive';

describe('CustomerInquieryComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CustomerInquieryComponent,
        AppColortDirective
      ],
      providers:[
        DetailService
      ]
    }).compileComponents();
  }));

  it('should create the Component', () => {
    const fixture = TestBed.createComponent(CustomerInquieryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should h1 tag with text`, () => {
    const fixture = TestBed.createComponent(CustomerInquieryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Cust Inq');
  });
  it(`should p tag with text`, () => {
    const fixture = TestBed.createComponent(CustomerInquieryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('This is Cust Inq. page');
  });
});

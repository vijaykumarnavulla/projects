import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationComponent } from './navigation.component';
import { By } from '@angular/platform-browser';

describe('NavigationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NavigationComponent
      ],
    }).compileComponents();
  }));

  it('should create the Component', () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create nested menu items', () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nested').length).toEqual(4);
  });
  it('should create Order Summary menu item',()=>{
    const fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nested').length).toEqual(4);
    expect(compiled.querySelectorAll('.nested')[0].querySelectorAll('li')[0].textContent).toContain('Order Summary');
  });
  it('should create "Customer Inquiery" menu item',()=>{
    const fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nested').length).toEqual(4);
    expect(compiled.querySelectorAll('.nested')[0].querySelectorAll('li')[1].textContent).toContain('Customer Inquiery');
  });
});

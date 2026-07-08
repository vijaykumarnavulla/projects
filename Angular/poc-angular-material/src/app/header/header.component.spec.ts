import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {DemoMaterialModule} from '../material-module';

describe('HeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        DemoMaterialModule
      ],
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the Component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should display user initials`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('.mr').textContent).toContain('K');
  });

  it('test four li icons are displayed', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const headerElements = fixture.debugElement.queryAll(By.css('.headerSearch'));
    expect(headerElements.length).toEqual(4);
  });
  it('test Input Search box is displayed', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const headerElements = fixture.debugElement.queryAll(By.css('.inputCls'));
    expect(headerElements.length).toEqual(1);
  });
   it('should render header component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.headerRightPanel')).toBeTruthy();
  });
});

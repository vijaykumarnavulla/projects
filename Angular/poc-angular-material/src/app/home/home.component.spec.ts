import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import {AppColortDirective} from '../Directives/app.component.directive';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomeComponent,
        AppColortDirective
      ],
    }).compileComponents();
  }));

  it('should create the Component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`img tag should point to jda logo`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.watermarkCls>img').src).toContain('http://localhost:9876/assets/img/Watermark.png')
  });
});

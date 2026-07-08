import { TestBed, async,fakeAsync, tick  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent }   from './home/home.component';
import { OrderSummaryComponent }   from './module/ordersummary/ordersummary.component';
import { CustomerInquieryComponent }   from './module/customerinquiery/customerinquiery.component';
import { OrderDetailsComponent } from './module/ordersummary/order-details/order-details.component';
import { AppRoutingModule } from './app-routing.module';
import {DemoMaterialModule} from './material-module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationModule } from './navigation/navigation.module';
import { HeaderModule} from './header/header.module';
import {AppColortDirective} from './Directives/app.component.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { DetailService } from './services/details.service';
import {routes} from './app-routing.module';
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import { SearchOrdersPipe } from './module/ordersummary/orderSearch.pipe';
import {MatSelectModule} from '@angular/material/select';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NavigationModule,
        DemoMaterialModule,
        BrowserModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule
      ],
      declarations: [
        HomeComponent,
        HeaderComponent,
        OrderDetailsComponent,
        AppComponent,
        OrderSummaryComponent,
        CustomerInquieryComponent,
        AppColortDirective,
        SearchOrdersPipe
      ],
      providers:[
        DetailService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const detailsService = TestBed.get(DetailService);
    spyOn(detailsService, 'fetchDetails').and.returnValue([]);
    expect(app).toBeTruthy();
  });
  it('should render header-cmp',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header-cmp')).toBeTruthy();
  });
  it('should render mat-drawer-container',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-drawer-container')).toBeTruthy();
  });
});
describe('Testing AppRouting', () => {
  let location: Location;
  let router: Router;
  let fixture:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NavigationModule,
        DemoMaterialModule,
        BrowserModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(routes)],
        declarations: [
          HomeComponent,
          HeaderComponent,
          OrderDetailsComponent,
          AppComponent,
          OrderSummaryComponent,
          CustomerInquieryComponent,
          AppColortDirective,
          SearchOrdersPipe
        ],
        providers:[
          DetailService
        ]
      }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to home screen', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('');
  }));
  it('navigate to "ordersummary" redirects you to OrderSummaryComponent', fakeAsync(() => {
    router.navigate(['ordersummary']);
    tick();
    expect(location.path()).toBe('/ordersummary');
  }));
  it('navigate to "customerinquiery" redirects you to CustomerInquieryComponent', fakeAsync(() => {
    router.navigate(['customerinquiery']);
    tick();
    expect(location.path()).toBe('/customerinquiery');
  }));
});

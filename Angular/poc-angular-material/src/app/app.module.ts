import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';
import { HeaderModule} from './header/header.module';
import { HomeComponent }   from './home/home.component';
import { OrderSummaryComponent }   from './module/ordersummary/ordersummary.component';
import { CustomerInquieryComponent }   from './module/customerinquiery/customerinquiery.component';
import { AppRoutingModule } from './app-routing.module';
import {DemoMaterialModule} from './material-module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './module/ordersummary/order-details/order-details.component';
import { DetailService } from './services/details.service';
import { AppColortDirective } from './Directives/app.component.directive';
import { SearchOrdersPipe } from './module/ordersummary/orderSearch.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
  OrderSummaryComponent,
  CustomerInquieryComponent,
  OrderDetailsComponent,
  AppColortDirective,
  SearchOrdersPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
	NavigationModule,
    HeaderModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { AppDisplayComponent } from './app-display/app-display.component';

@NgModule({
  declarations: [
    AppComponent,
    AppButtonComponent,
    AppDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

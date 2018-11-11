import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

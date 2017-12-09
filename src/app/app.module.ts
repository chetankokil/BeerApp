import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BeerServiceService} from './beer/beer-service.service';
import {GiphyService} from "./giphy.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BeerServiceService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

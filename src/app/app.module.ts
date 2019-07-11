import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { HeadComponent } from './head/head.component';
import {HttpClientModule} from "@angular/common/http";
import { CardEditComponent } from './card-edit/card-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    HeadComponent,
    CardEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

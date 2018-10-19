import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@app/app.component';
import { Routes, RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '@app/page-not-found.component';
import { HomeModule } from 'src/modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFontAwesomeModule,
    CoreModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

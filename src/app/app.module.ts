import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SearchModule } from '../components/search/search.module';
import { BannerModule } from '../components/banner/banner.module';
import { CardListModule } from '../components/card-list/card-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatButtonModule,

    SearchModule,
    BannerModule,
    CardListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

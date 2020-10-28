import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicmenuComponent } from './basicmenu/basicmenu.component';
import { CarnivalMainComponent } from './carnival-main/carnival-main.component';
import { CandyShopComponent } from './candy-shop/candy-shop.component';
import { FooterComponent } from './footer/footer.component';
import { LivechatWidgetModule } from '@livechat/angular-widget';
import { MovietheaterComponent } from './movietheater/movietheater.component'


@NgModule({
  declarations: [
    AppComponent,
    BasicmenuComponent,
    CarnivalMainComponent,
    CandyShopComponent,
    FooterComponent,
    MovietheaterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LivechatWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

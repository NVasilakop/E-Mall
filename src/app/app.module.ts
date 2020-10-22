import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicmenuComponent } from './basicmenu/basicmenu.component';
import { CarnivalMainComponent } from './carnival-main/carnival-main.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicmenuComponent,
    CarnivalMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

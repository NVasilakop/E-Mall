import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarnivalMainComponent } from './carnival-main/carnival-main.component';
import { CandyShopComponent } from './candy-shop/candy-shop.component';


const routes: Routes = [
{path: 'mainCarnival', component: CarnivalMainComponent},
{path: 'candyShop', component: CandyShopComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

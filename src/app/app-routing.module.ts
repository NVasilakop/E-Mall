import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarnivalMainComponent } from './carnival-main/carnival-main.component';


const routes: Routes = [{path: 'mainCarnival', component: CarnivalMainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

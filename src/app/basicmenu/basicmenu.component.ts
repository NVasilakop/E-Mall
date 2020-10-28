import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-basicmenu',
  templateUrl: './basicmenu.component.html',
  styleUrls: ['./basicmenu.component.less']
})
export class BasicmenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
   closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  navigateToCarnival(){
    this.router.navigate(['/mainCarnival']);
  }
  navigateToMovies(){
    this.router.navigate(['/moviesTheater']);
  }
  
}

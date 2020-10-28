import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// const popcorn = document.querySelector('#popcorn');
// const tooltip = document.querySelector('#tooltip');
// createPopper(popcorn, tooltip);
declare var $:any;



@Component({
  selector: 'app-carnival-main',
  templateUrl: './carnival-main.component.html',
  styleUrls: ['./carnival-main.component.less']
})
export class CarnivalMainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    // $('.carousel').carousel({
    //   interval: 2000
    // })
  }

  goToNewComponent(){
    this.router.navigate(['/candyShop']);
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import {returnCandies} from '../data/candies';
import { Candy } from '../contracts/candy';
import {AnimationEvent,trigger,
  state,
  style,
  animate,
  transition} from '@angular/animations';

declare var $:any;

@Component({
  selector: 'app-candy-shop',
  templateUrl: './candy-shop.component.html',
  styleUrls: ['./candy-shop.component.less']
})


export class CandyShopComponent implements OnInit {
  candies:Array<Candy>=[];
  hoverIndex:number = -1;

  constructor() { }


  ngOnInit() {
    $("#myToast").toast({ delay: 10000 });
    $('.toast').toast('show');
    this.candies = returnCandies();
    console.log(this.candies);
  }

  mouseEnter(i:any){
    this.hoverIndex = i;
    // $(document).ready(function(){
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
    $('[data-toggle="tooltip"]').tooltip();
    console.log("I am in div");
}
mouseOut(){
  this.hoverIndex = -1;
}

}

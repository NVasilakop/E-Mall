import { Component, HostListener, OnInit } from '@angular/core';
import {returnCandies} from '../data/candies';
import { Candy } from '../contracts/candy';
import { timer } from 'rxjs';
import {AnimationEvent,trigger,
  state,
  style,
  animate,
  transition} from '@angular/animations';
  // import * as $ from 'jquery';

declare var $:any;


@Component({
  selector: 'app-candy-shop',
  templateUrl: './candy-shop.component.html',
  styleUrls: ['./candy-shop.component.less']
})


export class CandyShopComponent implements OnInit {
  candies:Array<Candy>=[];
  hoverIndex:number = -1;
  modalShow:boolean;
  subscribeTimer:any;
  timeLeft=100;

  constructor() { }


  ngOnInit() {
    $("#myToast").toast({ delay: 100000 });
    $('.toast').toast('show');
    this.observableTimer();
    this.candies = returnCandies();
    console.log(this.candies);
  }

  mouseEnter(i:any){
    this.hoverIndex = i;
    // $(document).ready(function(){
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
    $('[data-toggle="popover"]').popover()
    console.log("I am in div");
}
mouseOut(){
  this.hoverIndex = -1;
}
observableTimer() {
  const source = timer(1000,1000);
  const abc = source.subscribe(val => {
    console.log(val, '-');
    this.subscribeTimer = this.timeLeft - val;
    if(this.subscribeTimer===0){
      this.modalShow=true;
    }
  });
}

closeModal(){
  $("#exampleModalCenter").hide();
}
}

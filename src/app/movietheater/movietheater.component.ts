import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-movietheater',
  templateUrl: './movietheater.component.html',
  styleUrls: ['./movietheater.component.less']
})
export class MovietheaterComponent implements OnInit {
  showSign:boolean;
  subscribeTimer:any;

  constructor() { }

  ngOnInit() { 
    this.observableTimer();
  }
  observableTimer() {
    const source = timer(1000,1000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = 10 - val;
      if(this.subscribeTimer===0){
        this.showSign=true;
      }
    });
  }
}

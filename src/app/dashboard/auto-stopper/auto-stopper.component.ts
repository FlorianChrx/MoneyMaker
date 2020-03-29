import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-auto-stopper',
  templateUrl: './auto-stopper.component.html',
  styleUrls: ['./auto-stopper.component.sass']
})
export class AutoStopperComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() price: number;
  @Input() lever: number;
  @Input() long: boolean;

  constructor() {}
  
  ngOnChanges(changes :SimpleChanges) {
    if(changes['price'] != undefined) this.price = changes['price'].currentValue;
    if(changes['lever'] != undefined) this.lever = changes['lever'].currentValue;
    if(changes['long'] != undefined) this.long = changes['long'].currentValue;
  }

  apply(percent : number) :number {
    if(this.long) {
      return 1 - (percent/100) / this.lever;
    } else {
      return 1 + percent/100 / this.lever;
    }
  }
}

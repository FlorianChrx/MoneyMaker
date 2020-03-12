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

  constructor() {}
  
  ngOnChanges(changes :SimpleChanges) {
    this.price = changes['price'].currentValue;
  }
}

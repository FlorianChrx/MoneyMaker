import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  price: number;

  constructor() {}

  receivePrice( $event: number) {
    this.price= $event;
  }

  ngOnInit(): void {
  }

}

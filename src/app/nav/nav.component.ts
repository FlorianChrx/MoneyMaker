import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  toggled: string;

  constructor() {
    this.toggled = "toggled"
  }

  ngOnInit(): void {
  }

  toggle() {
    console.log('clic');
    if(this.toggled == "toggled") {
      this.toggled = "";
    } else {
      this.toggled = "toggled";
    }
  }

}

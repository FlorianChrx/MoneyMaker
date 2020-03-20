import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  price: number;
  lever: number;
  long: boolean;
  settingForm: FormGroup;
  response: string;

  constructor(private formBuilder: FormBuilder) {}

  receivePrice( $event: number) {
    this.price= $event;
  }

  ngOnInit(): void {
    this.settingForm = this.formBuilder.group({
      lever: [''],
      long: [''],
    })
    this.lever = 1;
    this.long = true;
  }

  updateSettings(){
    this.lever = this.settingForm.get('lever').value;
    this.long = !this.settingForm.get('long').value;
    if(this.lever >= 1){
      this.response = "success";
    } else {
      this.response = "warning";
    }
  }

}

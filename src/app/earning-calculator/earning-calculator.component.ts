import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-earning-calculator',
  templateUrl: './earning-calculator.component.html',
  styleUrls: ['./earning-calculator.component.sass']
})
export class EarningCalculatorComponent implements OnInit {

  earning: string;
  earnForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.earnForm = this.formBuilder.group({
      bought: [''],
      price: [''],
      sold: [''],
    });
    this.updateValues();
  }

  updateValues() {
    this.earning = (this.earnForm.get('sold').value * this.earnForm.get('bought').value - this.earnForm.get('bought').value * this.earnForm.get('price').value).toFixed(2);
  }
}

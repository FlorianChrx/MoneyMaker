import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-earning-calculator',
  templateUrl: './earning-calculator.component.html',
  styleUrls: ['./earning-calculator.component.sass']
})
export class EarningCalculatorComponent implements OnInit {

  earning: number;
  earnForm: FormGroup;
  @Output() updatePrice = new EventEmitter<number>();

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

  sendPrice() {
    this.updatePrice.emit(this.earnForm.get('price').value);
  }

  updateValues() {
    const price :number = this.earnForm.get('price').value;
    this.earning = (this.earnForm.get('sold').value * this.earnForm.get('bought').value - this.earnForm.get('bought').value * price);
    this.sendPrice();
  }
}

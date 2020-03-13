import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Trade } from './classes/trade';

@Component({
  selector: 'app-fifo',
  templateUrl: './fifo.component.html',
  styleUrls: ['./fifo.component.sass']
})
export class FifoComponent implements OnInit {

  earning: string;
  earnForm: FormGroup;
  isBuying: boolean;
  list: Trade[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.earnForm = this.formBuilder.group({
      amount: [''],
      price: [''],
    });

    this.isBuying = true;
    this.list = [];
  }

  switchMode(){
    this.isBuying = !this.isBuying;
    const button = document.getElementById('buy');
    if(this.isBuying) button.innerText = 'Buy';
    else button.innerText = 'Sell';
  }

  updateValues(){
    console.log(`
      amount: ${this.earnForm.get('amount').value},
      price: ${this.earnForm.get('price').value}
    `);
    this.list.push(new Trade(this.earnForm.get('price').value, this.earnForm.get('amount').value, this.isBuying));
    let listHTML = '';
    this.list.forEach(e => {
      if(e.isLong) listHTML += `<li class="list-group-item" style="color: green">Bought: ${e.amount} at ${e.unitPrice} total : ${e.amount*e.unitPrice}</li>`;
      else listHTML += `<li class="list-group-item" style="color: red">Sell: ${e.amount} at ${e.unitPrice} total : ${e.amount*e.unitPrice}</li>`;
    });
    document.getElementById('list').innerHTML = listHTML;
  }
}

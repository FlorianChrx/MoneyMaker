import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EarningCalculatorComponent } from './earning-calculator/earning-calculator.component';
import { AutoStopperComponent } from './auto-stopper/auto-stopper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EarningCalculatorComponent,
    AutoStopperComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardComponent
  ],
})
export class DashboardModule { }

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importing packages material
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CustomeInputTextComponent } from './customInputs/custome-input-text/custome-input-text.component';
import { CustomeInputNumberComponent } from './customInputs/custome-input-number/custome-input-number.component';



// packages material
const materialPackages = [MatTabsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule]

// shared component
const sharedProjectComponent = [CustomeInputTextComponent, CustomeInputNumberComponent]


@NgModule({
  declarations: [
    ...sharedProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...materialPackages
  ],
  exports: [...materialPackages, ...sharedProjectComponent, ReactiveFormsModule, FormsModule]
})

export class SharedModule { }

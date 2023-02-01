import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importing packages material
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';



// packages material
const materialPackages = [MatTabsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule , MatSelectModule]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...materialPackages
  ],
  exports: [...materialPackages, ReactiveFormsModule, FormsModule]
})

export class SharedModule { }

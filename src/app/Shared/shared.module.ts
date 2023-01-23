import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importing packages material
import { MatTabsModule } from '@angular/material/tabs';


// packages material
const materialPackages = [MatTabsModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule
  ],
  exports: [MatTabsModule, ReactiveFormsModule, FormsModule]
})

export class SharedModule { }

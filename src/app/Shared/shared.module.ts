import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importing packages material
import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';



// packages material
const materialPackages = [MatTabsModule , MatInputModule]

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

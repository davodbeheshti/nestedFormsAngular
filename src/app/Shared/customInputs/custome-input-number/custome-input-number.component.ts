import { NG_ASYNC_VALIDATORS, NG_VALIDATORS } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-custome-input-number',
  templateUrl: './custome-input-number.component.html',
  styleUrls: ['./custome-input-number.component.scss'],
  providers : [
    {
      provide : NG_ASYNC_VALIDATORS,
      useExisting : CustomeInputNumberComponent,
      multi : true,
    },
    {
      provide : NG_VALIDATORS,
      useExisting : CustomeInputNumberComponent,
      multi : true,
    },
  ]
})
export class CustomeInputNumberComponent implements OnInit {

  constructor(private cdr : ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}

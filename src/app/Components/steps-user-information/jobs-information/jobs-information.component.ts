import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-information',
  templateUrl: './jobs-information.component.html',
  styleUrls: ['./jobs-information.component.scss']
})
export class JobsInformationComponent implements OnInit {

  constructor() { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      nameJob: new FormControl(),
      nameCompony: new FormControl(),
      workPhone: new FormControl(),
      workAdress: new FormControl(),
      descriptionJob: new FormControl(),
    })
  }

}

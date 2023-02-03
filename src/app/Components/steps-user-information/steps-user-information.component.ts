import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-user-information',
  templateUrl: './steps-user-information.component.html',
  styleUrls: ['./steps-user-information.component.scss']
})
export class StepsUserInformationComponent implements OnInit {

  constructor() { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      UserInformationForm: new FormControl(),
      CountryInformationForm: new FormControl(),
      JobsInformationForm: new FormControl()
    })
  }

  test() {
    console.log(this.form.value);
  }

}

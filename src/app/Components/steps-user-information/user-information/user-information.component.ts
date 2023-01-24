import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  constructor() { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      phoneNumber: new FormControl(),
      nationalCode: new FormControl(),
      gender: new FormControl(),
      fatherName: new FormControl(),
      userName: new FormControl(),
      email: new FormControl(),
      birthDate: new FormControl(),
    })
  }

}


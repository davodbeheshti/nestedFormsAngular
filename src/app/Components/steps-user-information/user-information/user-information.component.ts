import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  constructor() { }

  private form : FormGroup;

  ngOnInit(): void {
  }

}

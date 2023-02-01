import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/app/Model/ICountry';
import { ICity } from 'src/app/Model/ICity';

@Component({
  selector: 'app-country-information',
  templateUrl: './country-information.component.html',
  styleUrls: ['./country-information.component.scss']
})
export class CountryInformationComponent implements OnInit {

  constructor() { }

  countries: ICountry[] = []
  cities: ICity[] = []

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      selectCountry: new FormControl(),
      selectCity: new FormControl(),
      address: new FormControl(),
    })

    this.countries = [
      { name: "Iran", id: '1' }
    ]

    this.cities = [
      { name: "Mashhad", id: '1' }
    ]


  }

  test() {
    console.log(this.form.value);
  }

}

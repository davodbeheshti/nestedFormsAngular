import { FormGroup, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ICountry } from 'src/app/Model/ICountry';
import { ICity } from 'src/app/Model/ICity';

@Component({
  selector: 'app-country-information',
  templateUrl: './country-information.component.html',
  styleUrls: ['./country-information.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CountryInformationComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CountryInformationComponent,
      multi: true,
    },
  ]
})
export class CountryInformationComponent implements OnInit {

  constructor(private cdr : ChangeDetectorRef) { }

  getValidators;
  textValidators : string = '';

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
  
  writeValue(val: any): void {
    console.log(val);
    if (val) {
      // this.form.controls.title.setValue(val, { emitEvent: false });
      this.form.patchValue(val, { emitEvent: false})
      return;
    } else {
      // this.form.controls.title.setValue('');
      this.form.reset();
    }
  }

  registerOnChange(fn: any): void {
    // this.form.get("title").valueChanges.subscribe(fn);
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled
      ? this.form.disable()
      : this.form.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    // const promice = new Promise<AbstractControl>((resolve, reject) => {
    //   resolve(c)
    //   console.log(c);
    // })
    // promice.then(response => {
    //   if (response.errors) {
    //     console.log(response);
    //     for (const validators in response.errors) {
    //       this.getValidators = validators;
    //       break;
    //     }
    //     switch (this.getValidators) {
    //       case 'required':
    //         // this.textValidators = this.translate.instant('COMMON.Validators.Recoured');
    //         break;
    //       case 'email':
    //         // this.textValidators = this.translate.instant('COMMON.Validators.email');
    //         break;
    //       case 'minlength':
    //         // this.textValidators = this.translate.instant('COMMON.Validators.minLength', {
    //         //   minLength: response.errors.minlength.requiredLength
    //         // });
    //         break;
    //       case 'maxlength':
    //         // this.textValidators = this.translate.instant('COMMON.Validators.maxLength', {
    //         //   maxLength: response.errors.maxlength.requiredLength
    //         // });
    //         break;
    //       case 'pattern':
    //         // this.textValidators = this.translate.instant('COMMON.MessageValidatorInput.Patern');
    //         break;
    //       default:
    //         this.textValidators = '';
    //         break;
    //     }
    //   } else {
    //     this.getValidators = null;
    //     this.textValidators = '';
    //     this.cdr.detectChanges();
    //   }
    // })
    return this.form.valid ? null : {
      invalidForm: { valid: false, message: 'Address fields are invalid' },
    };
  }

}

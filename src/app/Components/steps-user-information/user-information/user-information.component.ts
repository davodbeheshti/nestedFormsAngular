import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms'


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UserInformationComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: UserInformationComponent,
      multi: true
    },
  ]
})
export class UserInformationComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      phoneNumber: new FormControl(),
      nationalCode: new FormControl(),
      gender: new FormControl('mail'),
      fatherName: new FormControl(),
      email: new FormControl(),
      birthDate: new FormControl(),
    })
  }

  writeValue(val: any): void {
    console.log(val);
    if (val) {
      this.form.patchValue(val, { emitEvent: false })
      return;
    } else {
      this.form.reset();
    }
  }

  registerOnChange(fn: any): void {
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
    return this.form.valid ? null : {
      invalidForm: { valid: false, message: 'Address fields are invalid' },
    };
  }


}


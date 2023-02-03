import { FormGroup, FormControl, NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR, NG_VALIDATORS, ValidationErrors, AbstractControl } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-information',
  templateUrl: './jobs-information.component.html',
  styleUrls: ['./jobs-information.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: JobsInformationComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: JobsInformationComponent,
      multi: true,
    },
  ]
})
export class JobsInformationComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  form: FormGroup;
  getValidators
  textValidators

  ngOnInit(): void {
    this.form = new FormGroup({
      nameJob: new FormControl(),
      nameCompony: new FormControl(),
      workPhone: new FormControl(),
      workAdress: new FormControl(),
      descriptionJob: new FormControl(),
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

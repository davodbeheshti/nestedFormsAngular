import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, FormGroup, FormControl, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custome-input-text',
  templateUrl: './custome-input-text.component.html',
  styleUrls: ['./custome-input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomeInputTextComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CustomeInputTextComponent,
      multi: true,
    },
  ]
})
export class CustomeInputTextComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }
  @Input() placeholder: string = ' ';
  @Input() label: string = '';
  @Input() class: string = ''

  getValidators: string = '';
  textValidators: string = '';

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      nameForm: new FormControl()
    })
  }

  writeValue(val: any): void {
    console.log(val);
    if (val) {
      this.form.get('nameForm').setValue(val, { emitEvent: false });
      return;
    } else {
      this.form.get('nameForm').setValue('');
    }
  }

  registerOnChange(fn: any): void {
    this.form.get("nameForm").valueChanges.subscribe(fn);
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
    const promice = new Promise<AbstractControl>((resolve, reject) => {
      resolve(c)
      console.log(c);
    })
    promice.then(response => {
      if (response.errors) {
        console.log(response);
        for (const validators in response.errors) {
          this.getValidators = validators;
          break;
        }
        switch (this.getValidators) {
          case 'required':
            // this.textValidators = this.translate.instant('COMMON.Validators.Recoured');
            break;
          case 'email':
            // this.textValidators = this.translate.instant('COMMON.Validators.email');
            break;
          case 'minlength':
            // this.textValidators = this.translate.instant('COMMON.Validators.minLength', {
            //   minLength: response.errors.minlength.requiredLength
            // });
            break;
          case 'maxlength':
            // this.textValidators = this.translate.instant('COMMON.Validators.maxLength', {
            //   maxLength: response.errors.maxlength.requiredLength
            // });
            break;
          case 'pattern':
            // this.textValidators = this.translate.instant('COMMON.MessageValidatorInput.Patern');
            break;
          default:
            this.textValidators = '';
            break;
        }
      } else {
        this.getValidators = null;
        this.textValidators = '';
        this.cdr.detectChanges();
      }
    })
    return this.form.valid ? null : {
      invalidForm: { valid: false, message: 'Address fields are invalid' },
    };
  }



}

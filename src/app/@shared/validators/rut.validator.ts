import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as rut_validator from 'rut.js';

export const validateRUT2: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const rut = control.get('rut');
  console.log(control);
  console.log(rut);
  console.log(rut_validator.validate(rut.value));
  return rut_validator.validate(rut.value) ? null : { invalid: true };
};

export function validateRUT(control: AbstractControl) {
  if (!rut_validator.validate(control.value)) {
    return { invalid: true };
  }
  return null;
}

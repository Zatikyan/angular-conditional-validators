import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function andCondition(validators: ValidatorFn[], error?: { [key: string]: string }): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    for (const validator of validators) {
      if (validator(control)) {
        return error || { andCondition: true };
      }
    }
    return null;
  }
}

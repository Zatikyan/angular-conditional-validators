import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function orCondition(validators: ValidatorFn[], error?: { [key: string]: string }): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    for (const validator of validators) {
      if (!validator(control)) {
        return null;
      }
    }
    return error || { orCondition: true };
  }
}

// import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function MatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let passwordControl = control.get('password');
    let confirmpasswordControl = control.get('confirmPassword');
    if (
      !passwordControl ||
      !confirmpasswordControl ||
      !passwordControl.value ||
      !confirmpasswordControl.value
    )
      return null;
    let errorMsg = {
      unMatchedPassword: {
        pass: passwordControl.value,
        confirmPass: confirmpasswordControl.value,
      },
    };
    return passwordControl.value == confirmpasswordControl.value
      ? null
      : errorMsg;
  };
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatchValidator } from './customValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerionForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerionForm = fb.group(
      {
        fName: ['', [Validators.required]],
        lName: ['', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
          ],
        ],
        password: [
          '',
          [
            Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
            Validators.required,
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: [MatchValidator()] }
    );
  }
  onSubmit(val: any): void {
    if (
      this.registerionForm.valid &&
      this.registerionForm.get('fName')?.value.trim() !== '' &&
      this.registerionForm.get('lName')?.value.trim() !== ''
    ) {
      console.log(val);
      this.registerionForm.reset();
    }
  }
  ngOnInit(): void {}
}

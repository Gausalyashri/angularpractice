// 20 - REACTIVE FORMS
// Requires: ReactiveFormsModule imported (or as standalone import)

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      hobbies: this.fb.array([])
    });
  }

  get hobbies(): FormArray {
    return this.form.get('hobbies') as FormArray;
  }

  addHobby(): void {
    this.hobbies.push(this.fb.control(''));
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}

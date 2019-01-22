import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})

export class SignUpFormComponent implements OnInit {
  constructor() { }

  get diagnostic() { return JSON.stringify(this.model); }
  model = new User(
    64111,
    false,
  );
  submitted = false;
  signUpForm;
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'email': new FormControl(this.model.email, [
        Validators.email
      ]),
      'zip': new FormControl(this.model.zip, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ]),
      'accepted': new FormControl(this.model.accepted, [
        Validators.required,
        Validators.requiredTrue
      ]),
      'loggedIn': new FormControl(this.model.loggedIn)
    });
  }
  onSubmit() { this.submitted = true; }
  newUser() {
    this.model.email = this.email;
    console.log(`Form Submitted: email: ${this.email}`);
    console.table(this.model);
    console.log(`Submitted?: ${this.submitted}`);
  }

  // Getters
  get email() { return this.signUpForm.get('email'); }
  get zip() { return this.signUpForm.get('zip'); }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
// @injectable()

export class SignUpFormComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
  ) {}

  model = {
    'zip': '',
    'accepted': false,
    'id': '',
    'email': '',
    'loggedIn': false,
    'submitted': false
  };
  signUpForm;
  userArray: Array<object> = [];
  numberOfClicks = 0;
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'email': new FormControl(this.model.email, [
        Validators.email
      ]),
      'zip': new FormControl(this.model.zip, [
        Validators.required,
        // Validators.minLength(5),
        Validators.maxLength(5)
      ]),
      'accepted': new FormControl(this.model.accepted, [
        // Validators.required,
        Validators.requiredTrue
      ])
    });
  }
  open() {
    const modalRef = this.modalService.open(TermsAndConditionsComponent);
    modalRef.componentInstance.title = 'Terms & Conditions';
  }
  newUser() {
    // Now we'll create a new User then push it to the userArray
    // and increment number of clicks
    this.numberOfClicks++;
    const user = new User(
      this.model.zip,
      this.model.accepted,
      (this.numberOfClicks).toString(),
      this.model.email,
      this.model.loggedIn
    );
    this.userArray.push(user);
    // Logging
    console.log(`Number of Clicks: ${this.numberOfClicks}`);
    console.log('User Array');
    console.log(this.userArray);
  }

  // Getters
  get email() { return this.signUpForm.get('email'); }
  get zip() { return this.signUpForm.get('zip'); }
}

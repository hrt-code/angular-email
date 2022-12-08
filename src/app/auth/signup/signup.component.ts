import { MatchPasswordService } from './../../validators/match-password.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
  },
    {
      validators: [this.matchPasswordService.validate]
    }
  )

  constructor(private matchPasswordService: MatchPasswordService) { }

  ngOnInit(): void {
  }

  get formControls() {
    return this.form.controls;
  }


  onSubmit() {
    console.log(this.form.value);
  }

}

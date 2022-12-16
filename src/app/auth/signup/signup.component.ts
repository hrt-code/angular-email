import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UniqueUserNameService } from './../../validators/unique-userName.service';
import { MatchPasswordService } from './../../validators/match-password.service';
import { delay, finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {



  constructor(
    private matchPasswordService: MatchPasswordService,
    public uniqueUserNameService: UniqueUserNameService,
    private authService: AuthService,
    private router:Router
  ) { }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ],
      [this.uniqueUserNameService.validate.bind(this.uniqueUserNameService)]
    ),
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

  ngOnInit(): void {
  }

  get formControls() {
    return this.form.controls;
  }

  showErrors() {
    return this.form.get("password")?.dirty &&
      this.form.get("password")?.touched &&
      this.form.get("passwordConfirmation")?.dirty &&
      this.form.get("passwordConfirmation")?.touched;
  }


  onSubmit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authService.signup(this.form.value)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/inbox'])
          this.authService.signedIn$.next(true)
        },
        error: (error) => {
          if (!error.status)
            this.form.setErrors({ noConnection: true })
          else
            this.form.setErrors({ unknownError: true })
        }
      }
      )

  }

}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

import { AuthService } from './../../services/auth.service';
import { SignedInResponse } from 'src/app/models/signed-in-response.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25),
    ]),
  });

  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {

    this.authService.checkAuth().subscribe((response: SignedInResponse) => {
      if (response.authenticated) this.router.navigate(['/inbox']);
    });

  }

  get formControls() {
    return this.form.controls;
  }

  showErrors() {
    return (
      this.form.get('password')?.dirty &&
      this.form.get('password')?.touched &&
      this.form.get('username')?.dirty &&
      this.form.get('username')?.touched
    );
  }

  onSubmit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.authService
      .signin(this.form.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => {
          this.router.navigate(['/inbox']);
          this.authService.signedIn$.next(true);
        },
        error: (error) => {
          if (!error.status) this.form.setErrors({ noConnection: true });
          else if (error.error.username || error.error.password)
            this.form.setErrors({ credential: true });
        },
      });
  }
}

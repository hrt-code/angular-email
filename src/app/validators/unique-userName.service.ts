
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, debounceTime, filter, map, Observable, of } from 'rxjs';

import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UniqueUserNameService implements AsyncValidator {



  constructor(private authService: AuthService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {


    return this.authService.usernameAvailable(control.value)
      .pipe(
        debounceTime(400),
        filter((res) => res.available),
        map((res) => {
          return null;
        }),
        catchError((error) => {
          if (error.error.username)
            return of({ nonUniqueUsername: true })
          else
            return of({ unknownError: true })
        })
      )


  }

}

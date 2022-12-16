import { SignInCredentials } from './../models/sign-in-credential.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { SignUpCredentials } from '../models/sign-up-credential.model';
import { SignUpResponse } from '../models/sign-up-response.model';
import { SignedInResponse } from '../models/signed-in-response.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = environment.baseApiUrl;
  signedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  usernameAvailable(userName: string) {
    return this.http.post<any>(this.baseUrl + '/auth/username', {
      username: userName
    });
  }

  signup(values: SignUpCredentials) {
    return this.http.post<SignUpResponse>(this.baseUrl + '/auth/signup/', values);
  }

  checkAuth() {
    return this.http.get<SignedInResponse>(this.baseUrl + '/auth/signedin/').pipe(
      tap((response) => {
        this.signedIn$.next(response.authenticated)
      })
    );
  }

  signout() {
    return this.http.post(this.baseUrl + '/auth/signout/',{}).pipe(
      tap(() => {
        this.signedIn$.next(false)
      })
    );
  }

  signin(loginCredentials:SignInCredentials){
    return this.http.post<SignInCredentials>(this.baseUrl + '/auth/signin/',loginCredentials).pipe(
      tap(() => {
        this.signedIn$.next(true)
      })
    );
  }


}









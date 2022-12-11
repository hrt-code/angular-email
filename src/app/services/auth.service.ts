import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  usernameAvailable(userName: string) {
    return this.http.post<any>(this.baseUrl + '/auth/username', {
      username: userName
    });
  }


  signup(values: SignupCredentials) {
    return this.http.post<SignupResponse>(this.baseUrl + '/auth/signup/', values);
  }


}

export interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignupResponse {
  username: string;
}

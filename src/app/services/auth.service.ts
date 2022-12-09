import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  usernameAvailable(userName: string) {
    return this.http.post<any>(this.baseUrl + '/auth/username', {
      username: userName
    });
  }


}

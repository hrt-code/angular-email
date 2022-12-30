import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getEmails(){
    return this.http.get<any>(`${this.baseUrl}/emails`);
    
  }


}

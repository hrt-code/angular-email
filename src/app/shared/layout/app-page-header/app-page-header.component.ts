import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './app-page-header.component.html',
  styleUrls: ['./app-page-header.component.scss']
})
export class AppPageHeaderComponent  {

  constructor(public authService :AuthService) { }



}

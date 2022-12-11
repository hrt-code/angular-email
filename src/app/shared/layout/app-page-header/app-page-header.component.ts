import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './app-page-header.component.html',
  styleUrls: ['./app-page-header.component.scss']
})
export class AppPageHeaderComponent implements OnInit {

  signedIn:boolean=false;

  constructor(private authService :AuthService) { }

  ngOnInit(): void {

  this.authService.signedIn$.subscribe((result)=>{
    this.signedIn=result;
  })

  }

}

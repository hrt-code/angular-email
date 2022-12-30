import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss']
})
export class EmailIndexComponent implements OnInit {

  emails:any[];

  constructor(private emailService:EmailService) { }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((res)=>this.emails=res)
  }

}

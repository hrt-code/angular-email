import { delay } from 'rxjs';
import { Router } from '@angular/router';
import { SignedInResponse } from './models/signed-in-response.model';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.checkAuth().subscribe((response: SignedInResponse) => {
      if (!response.authenticated) this.router.navigate(['/signin']);
    });
  }
}

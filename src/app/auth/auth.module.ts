
import { AuthPageLayoutComponent } from './layout/auth-page-layout/auth-page-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthHeaderComponent } from './partials/auth-header/auth-header.component';
import { SignoutComponent } from './signout/signout.component';




@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthPageLayoutComponent,
    AuthHeaderComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AuthModule { }

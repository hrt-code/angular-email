import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { InboxRoutingModule } from './inbox-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { LayoutModule } from '../shared/layout/layout.module';



@NgModule({
  declarations: [
    InboxHomeComponent,
    EmailCreateComponent,
    EmailIndexComponent,
    EmailReplyComponent,
    EmailShowComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class InboxModule { }

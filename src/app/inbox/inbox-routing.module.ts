import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'inbox' },
  {
    path: 'inbox',
    canActivate: [AuthGuard],
    component: InboxHomeComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}

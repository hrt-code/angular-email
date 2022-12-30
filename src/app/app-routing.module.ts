
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>  import('./inbox/inbox.module').then((m)=>m.InboxModule)},
  {path:'',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'**',redirectTo:'/inbox'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

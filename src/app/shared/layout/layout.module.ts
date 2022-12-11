
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppPageFooterComponent } from './app-page-footer/app-page-footer.component';
import { AppPageHeaderComponent } from './app-page-header/app-page-header.component';



@NgModule({
  declarations: [
    AppPageHeaderComponent,
    AppPageFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AppPageHeaderComponent,
    AppPageFooterComponent
  ]
})
export class LayoutModule { }

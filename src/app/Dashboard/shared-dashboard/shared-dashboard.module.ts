import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AngularMaterialModule } from 'src/app/Material/angular-material.module';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    NavComponent
  ]
})
export class SharedDashboardModule { }

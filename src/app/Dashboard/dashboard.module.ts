import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ModulosComponent } from './modulos/modulos.component';
import { NavComponent } from './nav/nav.component';
import { AngularMaterialModule } from '../Material/angular-material.module';


@NgModule({
  declarations: [
    ModulosComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }

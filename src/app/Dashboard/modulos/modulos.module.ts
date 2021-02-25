import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { ListadoModulosComponent } from './listado-modulos/listado-modulos.component';
import { SharedDashboardModule } from '../shared-dashboard/shared-dashboard.module';


@NgModule({
  declarations: [ListadoModulosComponent],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    SharedDashboardModule
  ]
})
export class ModulosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoldesRoutingModule } from './moldes-routing.module';
import { ContenedorMoldesComponent } from './contenedor-moldes/contenedor-moldes.component';
import { AngularMaterialModule } from 'src/app/Material/angular-material.module';
import { SharedDashboardModule } from '../shared-dashboard/shared-dashboard.module';
import { LandingMoldesComponent } from './landing-moldes/landing-moldes.component';
import { ListadoMoldesComponent } from './listado-moldes/listado-moldes.component';

@NgModule({
  declarations: [
    ContenedorMoldesComponent,
    LandingMoldesComponent,
    ListadoMoldesComponent
  ],
  imports: [
    CommonModule,
    MoldesRoutingModule,
    SharedDashboardModule,
    AngularMaterialModule
  ]
})
export class MoldesModule { }

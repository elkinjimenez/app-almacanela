import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorMoldesComponent } from './contenedor-moldes/contenedor-moldes.component';
import { LandingMoldesComponent } from './landing-moldes/landing-moldes.component';
import { ListadoMoldesComponent } from './listado-moldes/listado-moldes.component';

const routes: Routes = [
  {
    path: '',
    component: ContenedorMoldesComponent,
    children: [
      { path: '', component: LandingMoldesComponent },
      { path: 'listado', component: ListadoMoldesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoldesRoutingModule { }

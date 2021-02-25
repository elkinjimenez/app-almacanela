import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoModulosComponent } from './listado-modulos/listado-modulos.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoModulosComponent,
  },
  {
    path: 'moldes',
    loadChildren: () => import('./../moldes/moldes.module').then(m => m.MoldesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from '../Modulos/menu/info/info.component';
import { ListarReferenciasComponent } from '../Modulos/Referencias/Referencias/listar-referencias/listar-referencias.component';
import { ListarMoldesComponent } from '../Modulos/Referencias/Moldes/listar-moldes/listar-moldes.component';

const routes: Routes = [
  // GLOBALES
  { path: '', component: InfoComponent },

  // REFERENCIA
  { path: 'referencia/listar', component: ListarReferenciasComponent },
  { path: 'referencia/moldes', component: ListarMoldesComponent },

  // SINO
  { path: '**', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

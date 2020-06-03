import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from '../Modulos/menu/info/info.component';
import { ListarReferenciasComponent } from '../Modulos/Referencias/Referencias/listar-referencias/listar-referencias.component';
import { ListarMoldesComponent } from '../Modulos/Referencias/Moldes/listar-moldes/listar-moldes.component';
import { VerMoldeComponent } from '../Modulos/Referencias/Moldes/ver-molde/ver-molde.component';
import { HomeMoldesComponent } from '../Modulos/Referencias/Moldes/home-moldes/home-moldes.component';

const routes: Routes = [
  // GLOBALES
  { path: '', component: InfoComponent },

  // REFERENCIA
  { path: 'referencias', component: ListarReferenciasComponent },
  { path: 'moldes', component: HomeMoldesComponent },
  { path: 'moldesActivos', component: ListarMoldesComponent },
  { path: 'molde', component: VerMoldeComponent },

  // SINO
  { path: '**', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

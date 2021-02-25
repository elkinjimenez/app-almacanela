import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalMoldesComponent } from './principal-moldes/principal-moldes.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalMoldesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoldesRoutingModule { }

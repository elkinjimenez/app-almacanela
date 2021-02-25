import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Principal/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./Principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./Dashboard/modulos/modulos.module').then(m => m.ModulosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

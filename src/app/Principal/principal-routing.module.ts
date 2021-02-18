import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }

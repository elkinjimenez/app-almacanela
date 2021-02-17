import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './Principal/contacto/contacto.component';
import { LandingPageComponent } from './Principal/landing-page/landing-page.component';
import { QuienesSomosComponent } from './Principal/quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

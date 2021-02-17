import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent,
    ContactoComponent,
    QuienesSomosComponent,
    InicioComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule
  ],
  exports: [
    InicioComponent
  ]
})
export class PrincipalModule { }

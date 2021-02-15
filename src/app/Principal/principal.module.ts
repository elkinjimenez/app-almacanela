import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent,
    ContactoComponent,
    QuienesSomosComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class PrincipalModule { }

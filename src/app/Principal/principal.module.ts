import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent,
    ContactoComponent,
    QuienesSomosComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PrincipalRoutingModule,
    FormsModule
  ],
  exports: []
})
export class PrincipalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNotificaComponent } from './modal-notifica/modal-notifica.component';
import { DatosVaciosComponent } from './datos-vacios/datos-vacios.component';
import { VolverComponent } from './volver/volver.component';
import { AppRoutingModule } from 'src/app/Router/app-routing.module';
import { BuscandoDatosComponent } from './buscando-datos/buscando-datos.component';

@NgModule({
  declarations: [
    ModalNotificaComponent,
    DatosVaciosComponent,
    VolverComponent,
    BuscandoDatosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ModalNotificaComponent,
    DatosVaciosComponent,
    VolverComponent,
    BuscandoDatosComponent
  ]
})
export class ComponentesModule { }

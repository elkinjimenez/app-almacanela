import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNotificaComponent } from './Components/modal-notifica/modal-notifica.component';

@NgModule({
  declarations: [
    ModalNotificaComponent,
  ],
  imports: [
    CommonModule
  ], exports: [
    ModalNotificaComponent
  ]
})
export class SharedModule { }

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Notificacion } from '../Modelos/notificacion';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalNotificaService {

  notificacion = {
    btnCerrar: true,
    color: 'purple',
    titulo: 'Hola...',
    descripcion: 'Seré tu asistente de notificaciones, aquí te mostraré qué es lo que está sucediendo en todo el proyecto.',
    btnUno: {},
    btnDos: {}
  } as Notificacion;

  constructor(
    private router: Router,
  ) { }

  abrirNotificacion(notificacion: Notificacion, esperar: boolean) {
    if (esperar) {
      this.cambioEstadoModal(false);
      setTimeout(() => {
        this.notificacion = notificacion;
        this.cambioEstadoModal(true);
      }, 600);
    } else {
      this.notificacion = notificacion;
      this.cambioEstadoModal(true);
    }
  };

  cambioEstadoModal(estado: boolean, esperar?: boolean) {
    $('#modalNotifica').modal(estado ? 'show' : 'hide');
    esperar ? setTimeout(() => {
      this.cambioEstadoModal(estado)
    }, 600) : null;
  }

  accionBtnUno() {
    this.router.navigate([this.notificacion.btnUno.direcciona]);
    this.cambioEstadoModal(false);
  }

  accionBtnDos() {
    this.router.navigate([this.notificacion.btnDos.direcciona]);
    this.cambioEstadoModal(false);
  }
}
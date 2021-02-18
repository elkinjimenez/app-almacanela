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

  lanzarNotificacion(notificacion: Notificacion, esperar: boolean) {
    $('#modalNotifica').modal('hide');
    if (esperar) {
      setTimeout(() => {
        this.notificacion = notificacion;
        this.mostrarModal();
      }, 600);
    } else {
      this.notificacion = notificacion;
      this.mostrarModal();
    }
  }

  private mostrarModal() {
    $('#modalNotifica').modal('show');
  }

  cerrarNotificacion() {
    setTimeout(() => {
      $('#modalNotifica').modal('hide');
    }, 600);
  }

  accionBtnUno() {
    this.router.navigate([this.notificacion.btnUno.direcciona]);
    this.cerrarNotificacion();
  }

  accionBtnDos() {
    this.router.navigate([this.notificacion.btnDos.direcciona]);
    this.cerrarNotificacion();

  }
}
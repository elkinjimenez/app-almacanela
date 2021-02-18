import { Injectable } from '@angular/core';
import { Notificacion } from '../Modelos/notificacion';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalNotificaService {

  notificacion: Notificacion = {
    btnCerrar: true,
    color: 'purple',
    titulo: 'Hola...',
    descripcion: 'Seré tu asistente de notificaciones, aquí te mostraré qué es lo que está sucediendo en todo el proyecto.'
  };

  constructor() { }

  lanzarNotificacion(notificacion: Notificacion) {
    this.notificacion = notificacion;
    $('#modalNotifica').modal('show');
  }

  cerrarNotificacion() {
    setTimeout(() => {
      $('#modalNotifica').modal('hide');
    }, 800);
  }
}
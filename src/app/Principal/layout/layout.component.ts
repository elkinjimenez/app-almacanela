import { Component, OnInit } from '@angular/core';
import { CamposGeneralesService } from 'src/app/Shared/Servicios/campos-generales.service';
import { ModalNotificaService } from 'src/app/Shared/Servicios/modal-notifica.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private camposGenerales: CamposGeneralesService,
    private notificacion: ModalNotificaService,
  ) { }

  ngOnInit(): void {
    if (this.camposGenerales.usuarioLogueado.estado) {
      this.notificacion.lanzarNotificacion({
        btnCerrar: true,
        color: 'purple',
        descripcion: 'Hola ' + this.camposGenerales.usuarioLogueado.idPersona.nombres.toLowerCase() + ', estás de vuelta...',
        titulo: 'Usuario logueado.',
        btnUno: {
          direcciona: '/',
          visible: true,
          habilitar: false,
          texto: 'Cerrar sesión'
        },
        btnDos: {
          direcciona: '/dashboard',
          visible: true,
          habilitar: true,
          texto: 'Ir al dashboard'
        }
      }, false);
    }
  }
}

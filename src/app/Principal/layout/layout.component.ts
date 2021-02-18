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
    console.log('Pasa por aquí: ', this.camposGenerales.usuarioLogueado);
    if (this.camposGenerales.usuarioLogueado) {
      this.notificacion.lanzarNotificacion({
        btnCerrar: true,
        color: 'purple',
        descripcion: 'Ya se encuentra un usuario logueado...',
        titulo: 'Usuario logueado.'
      });
    }
  }
}

import { Component, OnInit, Input, Host, Optional } from '@angular/core';
import { MoldeService } from 'src/app/Servicios/molde.service';
import { Molde } from 'src/app/Modelos/Molde/molde';
import { VerMoldeComponent } from '../ver-molde/ver-molde.component';
import { ResponseGeneral } from 'src/app/Modelos/response-general';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-eliminar-molde',
  templateUrl: './eliminar-molde.component.html',
  styleUrls: ['./eliminar-molde.component.css']
})
export class EliminarMoldeComponent implements OnInit {

  responseGeneral: ResponseGeneral;

  @Input() Molde = {} as Molde;

  constructor(
    private servicioMolde: MoldeService,
    @Optional() public verMolde: VerMoldeComponent,
  ) { }

  ngOnInit(): void {

  }

  cambiarEstadoMolde() {
    $('#inactivarMolde').modal('hide');
    this.verMolde.modulos.principal.notifica = {
      mensaje: 'Por favor espere...',
      color: 'purple',
      nombre: '¡Actualizando molde!',
      estado: false
    };
    $('#modalNotifica').modal('show');
    let estado = 'Activo';
    if (this.Molde.estado === 'Activo') {
      estado = 'Inactivo';
    }
    this.servicioMolde.putCambioEstadoMolde(this.Molde.idMolde, estado).subscribe(
      data => {
        console.log('Cambio estado: ', data);
        this.responseGeneral = data as ResponseGeneral;
        if (this.responseGeneral.codigo === '00') {
          this.verMolde.buscarMolde();
          setTimeout(() => {
            this.verMolde.modulos.principal.notifica = {
              mensaje: this.responseGeneral.descripcion,
              color: 'success-color',
              nombre: this.responseGeneral.nombre,
              estado: true
            };
            $('#modalNotifica').modal('show');
          }, 600);
        } else {
          this.verMolde.buscarMolde();
          setTimeout(() => {
            this.verMolde.modulos.principal.notifica = {
              mensaje: this.responseGeneral.descripcion,
              color: 'danger-color',
              nombre: this.responseGeneral.nombre,
              estado: true
            };
            $('#modalNotifica').modal('show');
          }, 600);
        }
      }, error => {
        console.log('Error cambio de estado: ', error);
      }
    );
  }
}

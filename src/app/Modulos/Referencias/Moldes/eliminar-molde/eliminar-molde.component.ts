import { Component, OnInit, Input, Host, Optional } from '@angular/core';
import { MoldeService } from 'src/app/Servicios/molde.service';
import { Molde } from 'src/app/Modelos/Molde/molde';
import { VerMoldeComponent } from '../ver-molde/ver-molde.component';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-eliminar-molde',
  templateUrl: './eliminar-molde.component.html',
  styleUrls: ['./eliminar-molde.component.css']
})
export class EliminarMoldeComponent implements OnInit {

  @Input() Molde = {} as Molde;

  constructor(
    private servicioMolde: MoldeService,
    @Host() @Optional() public verMolde: VerMoldeComponent,
  ) { }

  ngOnInit(): void {

  }

  cambiarEstadoMolde() {
    $('#inactivarMolde').modal('hide');
    this.verMolde.listaMoldes.modulos.principal.notifica = {
      mensaje: 'No se logró trae la lista de moldes, Por favor recarga la aplicación.',
      color: 'danger-color',
      nombre: '¡Recargar página!',
      estado: true
    };
    $('#modalNotifica').modal('show');
    let estado = 'Activo';
    if (this.Molde.estado === 'Activo') {
      estado = 'Inactivo';
    }
    this.servicioMolde.putCambioEstadoMolde(this.Molde.idMolde, estado).subscribe(
      data => {
        console.log('Cambio estado: ', data);
        this.verMolde.buscarMolde();
      }, error => {
        console.log('Error cambio de estado: ', error);
      }
    );
  }
}

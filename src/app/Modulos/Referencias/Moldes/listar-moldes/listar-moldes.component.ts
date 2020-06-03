import { Component, OnInit, Host, Optional } from '@angular/core';
import { MoldeService } from 'src/app/Servicios/molde.service';
import { Molde } from 'src/app/Modelos/Molde/molde';
import { ModulosComponent } from '../../../menu/modulos/modulos.component';
import { Router } from '@angular/router';
import { PersistenceService, StorageType } from 'angular-persistence';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-listar-moldes',
  templateUrl: './listar-moldes.component.html',
  styleUrls: ['./listar-moldes.component.css']
})
export class ListarMoldesComponent implements OnInit {

  ruta = '';
  estado = 0;
  listadoMoldes: Molde[];
  Molde: Molde;

  constructor(
    @Optional() public modulos: ModulosComponent,
    private router: Router,
    private persistencia: PersistenceService,
    private servicioMolde: MoldeService,
  ) { }

  ngOnInit() {
    this.consumirListaMoldes();
  }

  consumirListaMoldes() {
    this.servicioMolde.getMoldes().subscribe(
      data => {
        console.log('Moldes resp: ', data);
        this.listadoMoldes = data as Molde[];
        if (this.listadoMoldes.length > 0) {
          this.estado = 1;
        } else {
          this.estado = 2;
        }
      }, error => {
        console.log('Error moldes: ', error);
        this.estado = 2;
        setTimeout(() => {
          this.modulos.principal.notifica = {
            mensaje: 'No se logró trae la lista de moldes, Por favor recarga la aplicación.',
            color: 'danger-color',
            nombre: '¡Recargar página!',
            estado: true
          };
          $('#modalNotifica').modal('show');
        }, 600);
      }
    );
  }

  seleccionarMolde(molde: Molde) {
    this.Molde = molde;
    sessionStorage.setItem('MoldeSeleccionado', JSON.stringify(this.Molde));
    this.modulos.volverAtras.ruta = '/moldesActivos';
    this.persistencia.set('rutaAtras', this.modulos.volverAtras.ruta, { type: StorageType.SESSION });
    this.router.navigate(['/molde']);
  }

}

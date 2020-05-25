import { Component, OnInit, Optional } from '@angular/core';
import { ListarMoldesComponent } from '../listar-moldes/listar-moldes.component';
import { PersistenceService, StorageType } from 'angular-persistence';
import { Molde } from 'src/app/Modelos/Molde/molde';
import { MoldeService } from 'src/app/Servicios/molde.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-ver-molde',
  templateUrl: './ver-molde.component.html',
  styleUrls: ['./ver-molde.component.css']
})
export class VerMoldeComponent implements OnInit {

  Molde: Molde;

  constructor(
    @Optional() public listaMoldes: ListarMoldesComponent,
    private servicioMolde: MoldeService,
    private persistencia: PersistenceService,
  ) { }

  ngOnInit(): void {
    this.Molde = this.persistencia.get('MoldeSeleccionado', StorageType.SESSION);
    this.buscarMolde();
  }

  buscarMolde() {
    this.servicioMolde.getBuscarMolde(this.Molde.idMolde).subscribe(
      data => {
        this.Molde = data as Molde;
      }
    );
  }

  inactivarMolde() {
    $('#inactivarMolde').modal('show');
  }

  editarMolde() {
    $('#editarModel').modal('show');
  }

}

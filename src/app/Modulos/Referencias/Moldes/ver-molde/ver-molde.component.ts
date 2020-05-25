import { Component, OnInit, Optional } from '@angular/core';
import { ListarMoldesComponent } from '../listar-moldes/listar-moldes.component';
import { PersistenceService, StorageType } from 'angular-persistence';
import { Molde } from 'src/app/Modelos/Molde/molde';
import { MoldeService } from 'src/app/Servicios/molde.service';

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
    this.servicioMolde.getBuscarMolde().subscribe(
      data => {
        this.Molde = data as Molde;
      }
    );
  }

}

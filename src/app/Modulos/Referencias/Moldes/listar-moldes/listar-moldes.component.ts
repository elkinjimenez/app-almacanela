import { Component, OnInit, Host, Optional } from '@angular/core';
import { MoldeService } from 'src/app/Servicios/molde.service';
import { Molde } from 'src/app/Modelos/Molde/molde';
import { ModulosComponent } from '../../../menu/modulos/modulos.component';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-listar-moldes',
  templateUrl: './listar-moldes.component.html',
  styleUrls: ['./listar-moldes.component.css']
})
export class ListarMoldesComponent implements OnInit {

  estado = 0;
  listadoMoldes: Molde[];

  constructor(
    @Optional() public modulos: ModulosComponent,
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
      }
    );
  }

}

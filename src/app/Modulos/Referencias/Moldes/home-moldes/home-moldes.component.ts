import { Component, OnInit, Optional } from '@angular/core';
import { Molde } from 'src/app/Modelos/Molde/molde';
import { Router } from '@angular/router';
import { ModulosComponent } from 'src/app/Modulos/menu/modulos/modulos.component';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
  selector: 'app-home-moldes',
  templateUrl: './home-moldes.component.html',
  styleUrls: ['./home-moldes.component.css']
})
export class HomeMoldesComponent implements OnInit {

  listaMoldesActivos: Molde[];
  listaMoldesInactivos: Molde[];

  constructor(
    @Optional() public modulos: ModulosComponent,
    private persistencia: PersistenceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  moldesActivos() {
    this.modulos.volverAtras.ruta = '/moldes';
    this.persistencia.set('rutaAtras', this.modulos.volverAtras.ruta, { type: StorageType.SESSION });
    this.router.navigate(['/moldesActivos']);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ModulosComponent } from 'src/app/Modulos/menu/modulos/modulos.component';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
  selector: 'app-volver',
  templateUrl: './volver.component.html',
  styleUrls: ['./volver.component.css']
})
export class VolverComponent implements OnInit {

  constructor(
    private persistencia: PersistenceService,
    public modulos: ModulosComponent,
  ) { }

  ngOnInit(): void {
    this.modulos.volverAtras.ruta = this.persistencia.get('rutaAtras', StorageType.SESSION);
  }

}

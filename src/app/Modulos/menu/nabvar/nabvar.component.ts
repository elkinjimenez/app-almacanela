import { Component, OnInit, Host, Optional } from '@angular/core';
import { ModulosComponent } from '../modulos/modulos.component';
import { PersistenceService, StorageType } from 'angular-persistence';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  menu = 'menu-activo';

  constructor(
    @Host() @Optional() public modulos: ModulosComponent,
    private persistencia: PersistenceService,
  ) { }

  ngOnInit() {
    const usuarioL = this.persistencia.get('usuarioL', StorageType.SESSION);
    if (usuarioL !== undefined) {
      this.modulos.principal.Usuario = usuarioL;
      console.log('USUARIOOO', usuarioL);
    } else {
      this.modulos.principal.logueado = false;
    }
  }

  cerrarSesion() {
    $('#modalUsuario').modal('hide');
    setTimeout(() => {
      this.modulos.principal.logueado = false;
      this.persistencia.removeAll(StorageType.SESSION);
      this.persistencia.clean(StorageType.SESSION);
    }, 600);
  }

  accionarMenu() {
    if (this.modulos.menu.estado) {
      this.modulos.menu.clase = 'menu-inactivo';
      this.modulos.menu.campos = 'limpiar-menu';
    } else {
      this.modulos.menu.clase = 'menu-activo';
      this.modulos.menu.campos = 'poblar-menu';
    }
    this.modulos.menu.estado = !this.modulos.menu.estado;
  }

}

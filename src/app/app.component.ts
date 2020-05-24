import { Component, OnInit } from '@angular/core';
import { Notificacion } from './Modelos/alertaNotificacion';
import { Usuario } from './Modelos/usuario';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logueado = false;

  Usuario = {} as Usuario;

  notifica: Notificacion = { color: 'purple', mensaje: 'No hay mensajes aún.', nombre: 'Mensajes', estado: true };

  constructor(
    private persistencia: PersistenceService,
  ) { }

  ngOnInit() {
    const logueadoE = this.persistencia.get('logueado', StorageType.SESSION);
    console.log('MANTIENE: ', logueadoE);
    if (logueadoE !== undefined) {
      this.logueado = logueadoE;
    } else {
      this.logueado = false;
    }

  }

}

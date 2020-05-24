import { Component, OnInit, Host, Optional } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Usuario } from 'src/app/Modelos/usuario';
import { PagesComponent } from '../pages/pages.component';
import { PersistenceService, StorageType } from 'angular-persistence';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {

  // DEL SERVICIO
  usuarios: Usuario[];

  datos: any = { usuario: '', clave: '', };

  constructor(
    private usuarioS: UsuarioService,
    private persistencia: PersistenceService,
    @Host() @Optional() public pages: PagesComponent,
  ) { }

  ngOnInit(): void { }

  consultaLogueo() {
    $('#modalIngresar').modal('hide');
    this.pages.init.notifica = {
      color: 'purple',
      mensaje: 'Por favor espere...',
      nombre: 'Ingresando',
      estado: false
    };
    $('#modalNotifica').modal('show');
    this.usuarioS.getLogin(this.datos.usuario, this.datos.clave).subscribe(
      data => {
        console.log('Usuario: ', data);
        this.usuarios = data as Usuario[];
        if (this.usuarios.length > 0) {
          $('#modalNotifica').modal('hide');
          setTimeout(() => {
            this.pages.init.Usuario = this.usuarios[0];
            this.pages.init.notifica = {
              color: 'success-color',
              mensaje: 'Hola ' + this.pages.init.Usuario.idPersona.nombres + '.',
              nombre: '¡Bienvenido!',
              estado: true
            };
            $('#modalNotifica').modal('show');
          }, 600);
          this.pages.init.logueado = true;
          this.persistencia.set('logueado', this.pages.init.logueado, { type: StorageType.SESSION });
          this.persistencia.set('usuarioL', this.usuarios[0], { type: StorageType.SESSION });
        } else {
          $('#modalNotifica').modal('hide');
          setTimeout(() => {
            this.pages.init.notifica = {
              color: 'danger-color',
              mensaje: 'No se encuentra usuario con esas credenciales. Por favor intente de nuevo.',
              nombre: 'Nuevo intento',
              estado: true
            };
            $('#modalNotifica').modal('show');
          }, 600);
        }
      }, error => {
        console.log('Error Logueo: ', error);
        $('#modalNotifica').modal('hide');
        setTimeout(() => {
          this.pages.init.notifica = {
            color: 'danger-color',
            mensaje: 'No le logró validar el usuario que solicitó, Por favor intente de nuevo.',
            nombre: 'Nuevo intento',
            estado: true
          };
          $('#modalNotifica').modal('show');
        }, 600);
      },
    );
  }

}

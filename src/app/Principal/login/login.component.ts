import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogueoService } from 'src/app/Core/logueo.service';
import { Usuario } from 'src/app/Modelos/usuario';
import { ModalNotificaService } from 'src/app/Shared/Servicios/modal-notifica.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inicioSesion = { usuario: '', clave: '' } as DatosUsuario

  constructor(
    private logueoServicio: LogueoService,
    private router: Router,
    private notificacion: ModalNotificaService,
  ) { }

  ngOnInit(): void { }

  iniciarSesion(): void {
    this.notificacion.lanzarNotificacion({
      btnCerrar: false,
      color: 'purple',
      descripcion: 'Iniciando sesión, por favor espere...',
      titulo: 'Inicio de sesión.',
      btnUno: {},
      btnDos: {}
    }, false);
    this.logueoServicio.inicioSesion(this.inicioSesion.usuario, this.inicioSesion.clave).subscribe(
      logueado => {
        const usuario = logueado as Usuario;
        if (usuario.estadoRespuesta) {
          sessionStorage.setItem('dXN1YXJpbw', window.btoa(unescape(encodeURIComponent(JSON.stringify(usuario)))));
          this.router.navigate(['/dashboard']);
          this.notificacion.cerrarNotificacion();
        } else {
          setTimeout(() => {
            this.notificacion.lanzarNotificacion({
              btnCerrar: true,
              color: 'red',
              descripcion: 'No se encontró el usuario ingresado. Por favor intente de nuevo.',
              titulo: 'Inicio de sesión.',
              btnUno: {},
              btnDos: {}
            }, true);
          }, 600);
        }
      }, error => {
        console.log('Error inicio de sesión: ', error);
        this.notificacion.cerrarNotificacion();
        setTimeout(() => {
          this.notificacion.lanzarNotificacion({
            btnCerrar: true,
            color: 'red',
            descripcion: 'Error al intentar iniciar sesión. Por favor intente de nuevo.',
            titulo: 'Inicio de sesión.',
            btnUno: {},
            btnDos: {}
          }, true);
        }, 600);
      }
    )
  }

}


interface DatosUsuario {
  usuario: string;
  clave: string;
}
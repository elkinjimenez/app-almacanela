import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogueoService } from 'src/app/Core/logueo.service';
import { Usuario } from 'src/app/Modelos/usuario';
import { Notificacion } from 'src/app/Shared/Modelos/notificacion';
import { CamposGeneralesService } from 'src/app/Shared/Servicios/campos-generales.service';
import { ModalNotificaService } from 'src/app/Shared/Servicios/modal-notifica.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new FormControl('', Validators.required);
  clave = new FormControl('', Validators.required);

  constructor(
    private logueoServicio: LogueoService,
    private router: Router,
    private notificacion: ModalNotificaService,
    private camposGenerales: CamposGeneralesService,
  ) { }

  ngOnInit(): void { }

  iniciarSesion(): void {
    const notifi = {
      btnCerrar: false,
      color: 'purple',
      descripcion: 'Iniciando sesión, por favor espere...',
      titulo: 'Inicio de sesión.',
      btnUno: {},
      btnDos: {}
    } as Notificacion;
    this.notificacion.abrirNotificacion(notifi, false);
    this.logueoServicio.inicioSesion(this.usuario.value, this.clave.value).subscribe(
      logueado => {
        const usuario = logueado as Usuario;
        if (usuario.estadoRespuesta) {
          this.camposGenerales.usuarioLogueado = usuario;
          localStorage.setItem('dXN1YXJpbw', window.btoa(unescape(encodeURIComponent(JSON.stringify(usuario)))));
          this.router.navigate(['/dashboard']);
          this.notificacion.cambioEstadoModal(false, true);
        } else {
          setTimeout(() => {
            const notifi = {
              btnCerrar: true,
              color: 'red',
              descripcion: 'No se encontró el usuario ' + this.usuario.value + '. Por favor intente de nuevo.',
              titulo: 'Inicio de sesión.',
              btnUno: {},
              btnDos: {}
            } as Notificacion;
            this.notificacion.abrirNotificacion(notifi, true);
          }, 600);
        }
      }, error => {
        console.log('Error inicio de sesión: ', error);
        this.notificacion.cambioEstadoModal(false);
        setTimeout(() => {
          const notifi = {
            btnCerrar: true,
            color: 'red',
            descripcion: 'Error al intentar iniciar sesión. Por favor intente de nuevo.',
            titulo: 'Inicio de sesión.',
            btnUno: {},
            btnDos: {}
          } as Notificacion;
          this.notificacion.abrirNotificacion(notifi, true);
        }, 600);
      }
    )
  }

}

interface DatosUsuario {
  usuario: string;
  clave: string;
}
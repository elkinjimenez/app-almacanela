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
      titulo: 'Inicio de sesión.'
    });
    this.logueoServicio.inicioSesion(this.inicioSesion.usuario, this.inicioSesion.clave).subscribe(
      logueado => {
        console.log('Usuario logueado: ', logueado);
        const usuario = logueado as Usuario;
        if (usuario.estadoRespuesta) {
          sessionStorage.setItem('dXN1YXJpbw', window.btoa(unescape(encodeURIComponent(JSON.stringify(usuario)))));
          this.router.navigate(['/dashboard']);
          this.notificacion.cerrarNotificacion();
        } else {

        }
      }, error => {
        console.log('Error inicio de sesión: ', error);
      }
    )
  }

}


interface DatosUsuario {
  usuario: string;
  clave: string;
}
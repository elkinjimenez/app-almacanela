import { Component, OnInit } from '@angular/core';
import { LogueoService } from 'src/app/Core/logueo.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inicioSesion = { usuario: '', clave: '' } as DatosUsuario

  constructor(
    private logueoServicio: LogueoService,
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion(): void {
    console.log('Iniciando sesión...');
    setTimeout(() => { $('#modalNotifica').modal('show'); }, 600);
    this.logueoServicio.inicioSesion(this.inicioSesion.usuario, this.inicioSesion.clave).subscribe(
      logueado => {
        console.log('Usuario logueado: ', logueado);
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
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CamposGeneralesService } from '../Shared/Servicios/campos-generales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private camposGenerales: CamposGeneralesService,
  ) {
    const usuarioLogueado = localStorage.getItem('dXN1YXJpbw');
    if (usuarioLogueado) {
      const usuario = JSON.parse(decodeURIComponent(escape(window.atob(<string>usuarioLogueado))))
      if (usuario) {
        camposGenerales.usuarioLogueado = usuario
      } else {
        this.router.navigate(['/']);
      }
    } else {
      this.router.navigate(['/']);
    }
  }

}

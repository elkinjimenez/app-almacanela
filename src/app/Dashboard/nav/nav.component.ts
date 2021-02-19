import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelos/usuario';
import { CamposGeneralesService } from 'src/app/Shared/Servicios/campos-generales.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private camposGenerales: CamposGeneralesService,
  ) { }

  ngOnInit(): void {
  }

  cerrarCesion() {
    localStorage.clear();
    this.camposGenerales.usuarioLogueado = {} as Usuario;
    this.router.navigate(['/']);

  }

}

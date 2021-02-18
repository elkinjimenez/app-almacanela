import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  usuarioLogueado: any;

  constructor() { }

  ngOnInit(): void {
    this.usuarioLogueado = sessionStorage.getItem('usuario');
  }

}

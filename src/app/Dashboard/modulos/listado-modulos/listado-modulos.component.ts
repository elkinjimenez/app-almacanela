import { Component, OnInit } from '@angular/core';
import { CamposGeneralesService } from 'src/app/Shared/Servicios/campos-generales.service';

@Component({
  selector: 'app-listado-modulos',
  templateUrl: './listado-modulos.component.html',
  styleUrls: ['./listado-modulos.component.css']
})
export class ListadoModulosComponent implements OnInit {

  hora: any;

  constructor(
    public camposGenerales: CamposGeneralesService,
  ) {
    this.hora = new Date();
  }

  ngOnInit(): void { }

}

import { Component, OnInit } from '@angular/core';
import { CamposGeneralesService } from 'src/app/Shared/Servicios/campos-generales.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  hora: any;

  constructor(
    public camposGenerales: CamposGeneralesService,
  ) {
    this.hora = new Date();
  }

  ngOnInit(): void { }

}

import { Component, OnInit } from '@angular/core';
import { CamposGeneralesService } from 'src/app/Shared/Servicios/campos-generales.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  constructor(
    public camposGenerales: CamposGeneralesService,
  ) { }

  ngOnInit(): void { }

}

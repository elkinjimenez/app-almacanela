import { Component, OnInit, Input } from '@angular/core';
import { ModulosComponent } from 'src/app/Modulos/menu/modulos/modulos.component';

@Component({
  selector: 'app-volver',
  templateUrl: './volver.component.html',
  styleUrls: ['./volver.component.css']
})
export class VolverComponent implements OnInit {

  constructor(
    public modulos: ModulosComponent,
  ) { }

  ngOnInit(): void {
  }

}

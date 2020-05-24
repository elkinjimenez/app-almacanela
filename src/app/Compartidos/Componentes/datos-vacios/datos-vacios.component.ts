import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos-vacios',
  templateUrl: './datos-vacios.component.html',
  styleUrls: ['./datos-vacios.component.css']
})
export class DatosVaciosComponent implements OnInit {

  @Input() mensaje: string;
  @Input() icono: string;

  constructor() { }

  ngOnInit(): void {
  }

}

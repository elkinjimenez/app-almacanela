import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eliminar-molde',
  templateUrl: './eliminar-molde.component.html',
  styleUrls: ['./eliminar-molde.component.css']
})
export class EliminarMoldeComponent implements OnInit {

  @Input() nombre = '';

  constructor() { }

  ngOnInit(): void {
  }

}

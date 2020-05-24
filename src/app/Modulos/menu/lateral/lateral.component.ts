import { Component, OnInit, Host, Optional } from '@angular/core';
import { ModulosComponent } from '../modulos/modulos.component';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit {

  constructor(
    @Host() @Optional() public modulos: ModulosComponent,
  ) { }

  ngOnInit() { }

}

import { Component, OnInit } from '@angular/core';
import { ModalNotificaService } from '../../Servicios/modal-notifica.service';

@Component({
  selector: 'app-modal-notifica',
  templateUrl: './modal-notifica.component.html',
  styleUrls: ['./modal-notifica.component.css']
})
export class ModalNotificaComponent implements OnInit {

  constructor(
    public d: ModalNotificaService,
  ) { }

  ngOnInit(): void {
  }

}

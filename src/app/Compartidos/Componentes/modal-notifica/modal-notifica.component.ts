import { Component, OnInit, Host, Optional } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-modal-notifica',
  templateUrl: './modal-notifica.component.html',
  styleUrls: ['./modal-notifica.component.css']
})
export class ModalNotificaComponent implements OnInit {

  constructor(
    @Host() @Optional() public init: AppComponent,
  ) { }

  ngOnInit(): void {
  }

}

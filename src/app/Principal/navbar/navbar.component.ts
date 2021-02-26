import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  eventoInstalacion: any = null;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e: Event) {
    console.log('Evento: ', e);
    e.preventDefault();
    this.eventoInstalacion = e;
  }

  agregarADispositivo() {
    this.eventoInstalacion.prompt();
    this.eventoInstalacion.userChoice.then(
      (choiceResult: { outcome: string; }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuario aceptó la instalación.');
        } else {
          console.log('Usuario NO aceptó la instalación.');
        }
        this.eventoInstalacion = null;
      });
  }

}

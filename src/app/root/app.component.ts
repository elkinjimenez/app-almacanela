import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { CamposGeneralesService } from '../Shared/Servicios/campos-generales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // installEvent: any = null;

  constructor(
    private router: Router,
    private camposGenerales: CamposGeneralesService,
    private swUpdate: SwUpdate,
  ) {
    const usuarioLogueado = localStorage.getItem('dXN1YXJpbw');
    if (usuarioLogueado) {
      const usuario = JSON.parse(decodeURIComponent(escape(window.atob(<string>usuarioLogueado))))
      if (usuario) {
        camposGenerales.usuarioLogueado = usuario
      } else {
        this.router.navigate(['/']);
      }
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.updatePWA();
  }

  // @HostListener('window:beforeinstallprompt', ['$event'])
  // onBeforeInstallPrompt(event: Event) {
  //   console.log('Evento: ', event);
  //   event.preventDefault();
  //   this.installEvent = event;
  // }

  // installByUser() {
  //   if (this.installEvent) {
  //     this.installEvent.prompt();
  //     this.installEvent.userChoice.then(
  //       (rta: any) => console.log('Rta: ', rta)
  //     )
  //   }
  // }

  updatePWA() {
    this.swUpdate.available.subscribe(
      value => {
        console.log('Actualización: ', value);
        window.location.reload();
      }
    )
  }

}

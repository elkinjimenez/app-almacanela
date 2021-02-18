import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/Modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class CamposGeneralesService {

  usuarioLogueado: Usuario | undefined = undefined;

  constructor() { }
}

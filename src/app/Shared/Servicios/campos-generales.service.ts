import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/Modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class CamposGeneralesService {

  usuarioLogueado = {} as Usuario;

  constructor() { }
}

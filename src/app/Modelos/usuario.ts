import { Rol } from './rol';
import { Persona } from './persona';

export interface Usuario {
  clave: string;
  estado: string;
  idPersona: Persona;
  idRol: Rol;
  idUsuario: number;
  usuario: string;
}

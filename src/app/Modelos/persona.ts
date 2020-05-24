import { TipoIdentificacion } from './tipo-identificacion';

export interface Persona {
  apellidos: string;
  ciudad: string;
  descripcion: string;
  dia: number;
  direccion: string;
  email: string;
  idPersona: number;
  idTipoIdentificacion: TipoIdentificacion;
  identificacion: string;
  imagen: string;
  mes: number;
  nombres: string;
  telefono: string;
}

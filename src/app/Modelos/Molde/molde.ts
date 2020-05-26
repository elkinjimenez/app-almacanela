import { Componente } from '../componente';
import { Linea } from '../linea';
import { Parte } from '../parte';
import { Pieza } from '../pieza';

export interface Molde {
  idMolde: number;
  codigo: string;
  nombre: string;
  estado: string;
  imagen: string;
  consumo: number;
  desperdicio: number;
  idLinea: Linea;
  idParte: Parte;
  idComponente: Componente;
  idPieza: Pieza;
}
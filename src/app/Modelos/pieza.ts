import { Articulo } from './articulo';

export interface Pieza {
  idPieza: number;
  nombre?: string;
  imagen?: string;
  intercambiable?: string;
  idComponente?: number;
  idArticulo?: Articulo;
  consumo?: number;
  desperdicio?: number;
  descripcion?: number;
}

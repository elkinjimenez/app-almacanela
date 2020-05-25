import { TipoUnidad } from './TipoUnidad/tipo-unidad';

export interface Articulo {
  idArticulo: number;
  estado?: string;
  item?: number;
  codigo?: string;
  imagen?: string;
  codigoBarras?: string;
  descripcion?: string;
  referencia?: string;
  idFamilia?: number;
  talla?: string;
  color?: string;
  unidadCpa?: TipoUnidad;
  unidadCmo?: TipoUnidad;
  idProveedor?: number;
  cantidad?: number;
  valorAnterior?: number;
  valorUnitario?: number;
  valorTotal?: number;
  observaciones?: string;
}

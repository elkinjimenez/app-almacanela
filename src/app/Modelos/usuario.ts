import { Persona } from "./persona";

export interface Usuario {
    estadoRespuesta?: boolean;
    idUsuario: number;
    estado: string;
    usuario: string;
    clave?: any;
    descripcion?: any;
    idPersona: Persona
}

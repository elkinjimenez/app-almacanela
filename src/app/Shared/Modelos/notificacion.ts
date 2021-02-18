export interface Notificacion {
    titulo: string;
    descripcion: string;
    color: string;
    btnCerrar: boolean;
    btnUno: Boton;
    btnDos: Boton;
}

interface Boton {
    visible?: boolean;
    habilitar?: boolean;
    texto?: string;
    direcciona?: string;
}

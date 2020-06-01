import { Component, OnInit, Host, Optional, Input } from '@angular/core';
import { Linea } from 'src/app/Modelos/linea';
import { Parte } from 'src/app/Modelos/parte';
import { Componente } from 'src/app/Modelos/componente';
import { Pieza } from 'src/app/Modelos/pieza';
import { ResponseGeneral } from 'src/app/Modelos/response-general';
import { ListarMoldesComponent } from '../listar-moldes/listar-moldes.component';
import { LineaService } from 'src/app/Servicios/linea.service';
import { ParteService } from 'src/app/Servicios/parte.service';
import { ComponenteService } from 'src/app/Servicios/componente.service';
import { PiezaService } from 'src/app/Servicios/pieza.service';
import { MoldeService } from 'src/app/Servicios/molde.service';
import { MoldeCrear } from 'src/app/Modelos/Molde/molde-crear';
import { Molde } from 'src/app/Modelos/Molde/molde';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-editar-molde',
  templateUrl: './editar-molde.component.html',
  styleUrls: ['./editar-molde.component.css']
})
export class EditarMoldeComponent implements OnInit {

  // DE LOS SERVICIOS
  listadoLineas = [] as Linea[];
  listadoPartes = [] as Parte[];
  listadoComponentes = [] as Componente[];
  listadoPiezas = [] as Pieza[];
  responseGeneral: ResponseGeneral;

  @Input() Molde = {} as Molde;

  datos = { nombre: '', idLinea: 0, idParte: 0, idComponente: 0, idPieza: 0, consumo: null, desperdicio: null, imagen: null };
  botonActualizar = { estado: false, texto: 'Actualizar molde' };

  constructor(
    @Host() @Optional() public listaMoldes: ListarMoldesComponent,
    private lineaServicio: LineaService,
    private parteServicio: ParteService,
    private componenteServicio: ComponenteService,
    private piezaServicio: PiezaService,
    private moldeServicio: MoldeService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.consumirLineas();
    }, 1000);
  }

  consumirLineas() {
    this.lineaServicio.getLineas().subscribe(
      data => {
        console.log('Listado de lineas: ', data);
        this.listadoLineas = data as Linea[];
        if (this.listadoLineas.length === 0) {
          this.listaMoldes.modulos.principal.notifica = {
            mensaje: 'No se encontraron líneas registradas, por favor cree nuevas.',
            color: 'danger-color',
            nombre: '¡Líneas vacías!',
            estado: true
          };
          $('#modalNotifica').modal('show');
        }
        this.validarEnvio();
      }, error => {
        console.log('Error listado lineas: ', error);
        this.listaMoldes.modulos.principal.notifica = {
          mensaje: 'No se logró traer la lista de líneas, por favor recargue la página.',
          color: 'danger-color',
          nombre: '¡Intento fallido!',
          estado: true
        };
        $('#modalNotifica').modal('show');
        this.validarEnvio();
      }
    );
  }


  llenarPartes() {
    this.datos.idParte = 0;
    this.datos.idComponente = 0;
    this.datos.idPieza = 0;
    this.listadoPartes = [];
    this.listadoComponentes = [];
    this.listadoPiezas = [];
    this.parteServicio.getPartePorIdLinea(this.datos.idLinea).subscribe(
      data => {
        console.log('Partes: ', data);
        this.listadoPartes = data as Parte[];
        if (this.listadoPartes.length === 0) {
          this.listaMoldes.modulos.principal.notifica = {
            mensaje: 'No se encontraron partes para la línea, por favor termine la configuración de la línea seleccionada.',
            color: 'danger-color',
            nombre: '¡Partes vacías!',
            estado: true
          };
          $('#modalNotifica').modal('show');
        }
        this.validarEnvio();
      }, error => {
        console.log('Error partes: ', error);
        this.listaMoldes.modulos.principal.notifica = {
          mensaje: 'No se logró traer la lista de partes de la línea, por favor recargue la página o seleccione otra línea.',
          color: 'danger-color',
          nombre: '¡Intento fallido!',
          estado: true
        };
        $('#modalNotifica').modal('show');
        this.validarEnvio();
      }
    );
  }

  llenarComponentes() {
    this.datos.idComponente = 0;
    this.datos.idPieza = 0;
    this.listadoComponentes = [];
    this.listadoPiezas = [];
    this.componenteServicio.getComponentePorIdParte(this.datos.idParte).subscribe(
      data => {
        console.log('Componentes: ', data);
        this.listadoComponentes = data as Componente[];
        if (this.listadoComponentes.length === 0) {
          this.listaMoldes.modulos.principal.notifica = {
            mensaje: 'No se encontraron componentes registrados, por favor termine la configuración de la línea seleccionada.',
            color: 'danger-color',
            nombre: '¡Componentes vacíos!',
            estado: true
          };
          $('#modalNotifica').modal('show');
        }
        this.validarEnvio();
      }, error => {
        console.log('Error componentes: ', error);
        this.listaMoldes.modulos.principal.notifica = {
          mensaje: 'No se logró traer la lista de componentes de la parte seleccionada, por favor recargue la página o seleccione otra parte.',
          color: 'danger-color',
          nombre: '¡Intento fallido!',
          estado: true
        };
        $('#modalNotifica').modal('show');
        this.validarEnvio();
      }
    );
  }

  llenarPiezas() {
    this.datos.idPieza = 0;
    this.listadoPiezas = [];
    this.piezaServicio.getPartePorIdComponente(this.datos.idComponente).subscribe(
      data => {
        console.log('Piezas: ', data);
        this.listadoPiezas = data as Pieza[];
        if (this.listadoPiezas.length === 0) {
          this.listaMoldes.modulos.principal.notifica = {
            mensaje: 'No se encontraron piezas registradas, por favor termine la configuración de la línea seleccionada.',
            color: 'danger-color',
            nombre: '¡Piezas vacías!',
            estado: true
          };
          $('#modalNotifica').modal('show');
        }
        this.validarEnvio();
      }, error => {
        console.log('Error piezas: ', error);
        this.listaMoldes.modulos.principal.notifica = {
          mensaje: 'No se logró traer la lista de piezas del componente, por favor recargue la página o seleccione otro componente.',
          color: 'danger-color',
          nombre: '¡Intento fallido!',
          estado: true
        };
        $('#modalNotifica').modal('show');
        this.validarEnvio();
      }
    );
  }

  validarEnvio() {
    if (
      this.datos.nombre !== '' &&
      this.datos.idLinea !== 0 &&
      this.datos.idParte !== 0 &&
      this.datos.idComponente !== 0 &&
      this.datos.idPieza !== 0 &&
      this.datos.consumo !== null &&
      this.datos.desperdicio !== null
    ) {
      this.botonActualizar.estado = true;
    } else {
      this.botonActualizar.estado = false;
    }
  }

  capturarImagen(e) {
    const archivo = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!archivo.type.match(/image-*/)) {
      this.listaMoldes.modulos.principal.notifica = {
        mensaje: 'El archivo que se intentó cargar no es una imagen, por favor intente de nuevo.',
        color: 'danger-color',
        nombre: '¡Solo imágenes!',
        estado: true
      };
      this.datos.imagen = '';
      $('#modalNotifica').modal('show');
    } else {
      const reader = new FileReader();
      reader.onload = this.manejarImagenCargada.bind(this);
      reader.readAsDataURL(archivo);
    }
  }

  manejarImagenCargada(e) {
    const reader = e.target;
    this.datos.imagen = reader.result;
  }

  crearMoldeListo() {
    $('#nuevoModel').modal('hide');
    this.listaMoldes.modulos.principal.notifica = {
      mensaje: 'Por favor espere...',
      color: 'purple',
      nombre: '¡Creando molde!',
      estado: false
    };
    $('#modalNotifica').modal('show');
    const body = {
      nombre: this.datos.nombre,
      imagen: this.datos.imagen,
      linea: this.datos.idLinea,
      parte: this.datos.idParte,
      componente: this.datos.idComponente,
      pieza: this.datos.idPieza,
      consumo: this.datos.consumo,
      desperdicio: this.datos.desperdicio
    } as MoldeCrear;
    this.moldeServicio.postMoldeCrear(body).subscribe(
      data => {
        console.log('Crear molde: ', data);
        this.responseGeneral = data as ResponseGeneral;
        $('#modalNotifica').modal('hide');
        if (this.responseGeneral.codigo === '00') {
          this.listaMoldes.consumirListaMoldes();
          setTimeout(() => {
            this.listaMoldes.modulos.principal.notifica = {
              mensaje: this.responseGeneral.descripcion,
              color: 'success-color',
              nombre: this.responseGeneral.nombre,
              estado: true
            };
            $('#modalNotifica').modal('show');
          }, 600);
        } else {
          setTimeout(() => {
            this.listaMoldes.modulos.principal.notifica = {
              mensaje: this.responseGeneral.descripcion,
              color: 'danger-color',
              nombre: this.responseGeneral.nombre,
              estado: true
            };
            $('#modalNotifica').modal('show');
          }, 600);
        }
      }, error => {
        console.log('Error al crear molde: ', error);
        $('#modalNotifica').modal('hide');
        setTimeout(() => {
          this.listaMoldes.modulos.principal.notifica = {
            mensaje: 'No se logró crear el molde satisfactoriamente, por favor intenta de nuevo.',
            color: 'danger-color',
            nombre: '¡Nuevo intento!',
            estado: true
          };
          $('#modalNotifica').modal('show');
        }, 600);
      }
    );
  }

}

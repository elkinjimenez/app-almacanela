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
import { VerMoldeComponent } from '../ver-molde/ver-molde.component';
import { PersistenceService, StorageType } from 'angular-persistence';

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

  botonActualizar = { estado: false, texto: 'Actualizar molde' };

  constructor(
    @Optional() public verMolde: VerMoldeComponent,
    private lineaServicio: LineaService,
    private parteServicio: ParteService,
    private componenteServicio: ComponenteService,
    private piezaServicio: PiezaService,
    private moldeServicio: MoldeService,
    private persistencia: PersistenceService,
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
        if (this.Molde.idParte.idParte !== 0) { this.llenarPartes(); }
        if (this.listadoLineas.length === 0) {
          this.verMolde.modulos.principal.notifica = {
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
        this.verMolde.modulos.principal.notifica = {
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
    this.listadoPartes = [];
    this.listadoComponentes = [];
    this.listadoPiezas = [];
    this.parteServicio.getPartePorIdLinea(this.Molde.idLinea.idLinea).subscribe(
      data => {
        console.log('Partes: ', data);
        this.listadoPartes = data as Parte[];
        if (this.Molde.idComponente.idComponente !== 0) { this.llenarComponentes(); }
        if (this.listadoPartes.length === 0) {
          this.verMolde.modulos.principal.notifica = {
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
        this.verMolde.modulos.principal.notifica = {
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
    this.listadoComponentes = [];
    this.listadoPiezas = [];
    this.componenteServicio.getComponentePorIdParte(this.Molde.idParte.idParte).subscribe(
      data => {
        console.log('Componentes: ', data);
        this.listadoComponentes = data as Componente[];
        if (this.Molde.idPieza.idPieza !== 0) { this.llenarPiezas(); }
        if (this.listadoComponentes.length === 0) {
          this.verMolde.modulos.principal.notifica = {
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
        this.verMolde.modulos.principal.notifica = {
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
    this.listadoPiezas = [];
    this.piezaServicio.getPartePorIdComponente(this.Molde.idComponente.idComponente).subscribe(
      data => {
        console.log('Piezas: ', data);
        this.listadoPiezas = data as Pieza[];
        if (this.listadoPiezas.length === 0) {
          this.verMolde.modulos.principal.notifica = {
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
        this.verMolde.modulos.principal.notifica = {
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
      this.Molde.idLinea.idLinea !== 0 &&
      this.Molde.idParte.idParte !== 0 &&
      this.Molde.idComponente.idComponente !== 0 &&
      this.Molde.idPieza.idPieza !== 0 &&
      this.Molde.consumo !== null &&
      this.Molde.desperdicio !== null
    ) {
      this.botonActualizar.estado = true;
    } else {
      this.botonActualizar.estado = false;
    }
  }

  capturarImagen(e) {
    const archivo = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!archivo.type.match(/image-*/)) {
      this.verMolde.modulos.principal.notifica = {
        mensaje: 'El archivo que se intentó cargar no es una imagen, por favor intente de nuevo.',
        color: 'danger-color',
        nombre: '¡Solo imágenes!',
        estado: true
      };
      $('#modalNotifica').modal('show');
    } else {
      const reader = new FileReader();
      reader.onload = this.manejarImagenCargada.bind(this);
      reader.readAsDataURL(archivo);
    }
  }

  manejarImagenCargada(e) {
    const reader = e.target;
    this.Molde.imagen = reader.result;
  }

  actualizarMoldeListo() {
    $('#editarModel').modal('hide');
    this.verMolde.modulos.principal.notifica = {
      mensaje: 'Por favor espere...',
      color: 'purple',
      nombre: '¡Actualizando molde!',
      estado: false
    };
    $('#modalNotifica').modal('show');
    const body = {
      idMolde: this.Molde.idMolde,
      imagen: this.Molde.imagen,
      linea: this.Molde.idLinea.idLinea,
      parte: this.Molde.idParte.idParte,
      componente: this.Molde.idComponente.idComponente,
      pieza: this.Molde.idPieza.idPieza,
      consumo: this.Molde.consumo,
      desperdicio: this.Molde.desperdicio
    } as MoldeCrear;
    this.moldeServicio.putMoldeEditar(body).subscribe(
      data => {
        try {
          console.log('Actualizar molde: ', data);
          this.Molde = data as Molde;
          $('#modalNotifica').modal('hide');
          this.moldeServicio.getBuscarMolde(this.Molde.idMolde).subscribe(
            dato => {
              console.log('Molde:', dato);
            }
          );
          setTimeout(() => {
            sessionStorage.setItem('MoldeSeleccionado', JSON.stringify(this.Molde));
            this.verMolde.modulos.principal.notifica = {
              mensaje: 'Molde actualizado correctamente.',
              color: 'success-color',
              nombre: '¡Molde actualizado!',
              estado: true
            };
            $('#modalNotifica').modal('show');
          }, 600);
        } catch (e) {
          setTimeout(() => {
            this.verMolde.modulos.principal.notifica = {
              mensaje: 'Molde no actualizado correctamente. Por favor intenta de nuevo.',
              color: 'danger-color',
              nombre: '¡Molde no actualizado!',
              estado: true
            };
            $('#modalNotifica').modal('show');
          }, 600);
        }
      }, error => {
        console.log('Error al actualizar molde: ', error);
        $('#modalNotifica').modal('hide');
        setTimeout(() => {
          this.verMolde.modulos.principal.notifica = {
            mensaje: 'No se logró actualizar el molde satisfactoriamente, por favor intenta de nuevo.',
            color: 'danger-color',
            nombre: '¡Nuevo intento!',
            estado: true
          };
          $('#modalNotifica').modal('show');
        }, 600);
      }
    );
  }

  limpiarLineaAbajo() {
    this.listadoPartes = [];
    this.Molde.idParte.idParte = 0;

    this.listadoComponentes = [];
    this.Molde.idComponente.idComponente = 0;

    this.listadoPiezas = [];
    this.Molde.idPieza.idPieza = 0;

    this.llenarPartes();
  }

  limpiarPartesAbajo() {
    this.listadoComponentes = [];
    this.Molde.idComponente.idComponente = 0;

    this.listadoPiezas = [];
    this.Molde.idPieza.idPieza = 0;

    this.llenarComponentes();
  }

  limpiarComponentesAbajo() {
    this.listadoPiezas = [];
    this.Molde.idPieza.idPieza = 0;

    this.llenarPiezas();
  }

}

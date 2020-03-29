import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[];
  totalRecords: number;
  page: Number = 1;
  @Output() productoSeleccionado: EventEmitter<[]>;
  mostrarBorrarCuestionario: boolean;
  mostrarFiltroCamaras: boolean;
  mostrarFiltroObjetivos: boolean;
  mostrarFiltroAccesorios: boolean;
  mostrarFiltroPrecio: boolean;
  mostrarDeshacerFiltro: boolean;


  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute, private router: Router, private carritoService: CarritoService) {
    this.productoSeleccionado = new EventEmitter();
    this.productos = new Array<any>();
    this.mostrarBorrarCuestionario = false;
    this.mostrarFiltroCamaras = false;
    this.mostrarFiltroObjetivos = false;
    this.mostrarFiltroAccesorios = false;
    this.mostrarFiltroPrecio = false;
    this.mostrarDeshacerFiltro = false;

  }





  ngOnInit() {

    if (localStorage.getItem('cuestionario')) {
      this.productos = JSON.parse(localStorage.getItem('cuestionario'));
      this.mostrarBorrarCuestionario = true;
    } else {
      //Productos: filtrar por categorias => camaras/objetivos/accesorios
      this.activatedRoute.params.subscribe(async params => {
        if (!params.categoria) {
          this.productos = await this.productosService.getAll();
        } else {
          this.productos = await this.productosService.getByCategoria(params.categoria);
        }

      });
    }





  }



  async  borrarCuestionario() {
    localStorage.removeItem('cuestionario');
    this.productos = await this.productosService.getAll();
    this.mostrarBorrarCuestionario = false;
  }

  enviarProducto(producto) {
    this.carritoService.agregarProducto(producto);
  }


  async manejarCheckMarca($event) {
    this.productos = await this.productosService.getByMarcaCamara($event.target.value);
    this.mostrarDeshacerFiltro = true;
  }


  async manejarCheckResolucion($event) {
    this.mostrarDeshacerFiltro = true;
    switch (parseInt($event.target.value)) {
      case 0:
        this.productos = await this.productosService.getByResolucion(12, 17);
        break;

      case 1:
        this.productos = await this.productosService.getByResolucion(18, 25);
        break;

      case 2:
        this.productos = await this.productosService.getByResolucion(30, 36);
        break;

      default:
        this.productos = await this.productosService.getAll();
    };
  }




  async manejarCheckIso($event) {
    this.mostrarDeshacerFiltro = true;
    switch (parseInt($event.target.value)) {
      case 0:
        this.productos = await this.productosService.getByIso(6300, 12900);
        break;

      case 1:
        this.productos = await this.productosService.getByIso(25500, 51300);
        break;

      case 2:
        this.productos = await this.productosService.getByIso(100000, 521300);
        break;

      default:
        this.productos = await this.productosService.getAll();
    };
  }


  async manejarCheckObjetivo($event) {
    this.productos = await this.productosService.getByMarcaObjetivo($event.target.value);
    this.mostrarDeshacerFiltro = true;
  }



  async manejarCheckFocal($event) {
    this.mostrarDeshacerFiltro = true;
    switch (parseInt($event.target.value)) {
      case 0:
        this.productos = await this.productosService.getByFocal(15, 25);
        break;

      case 1:
        this.productos = await this.productosService.getByFocal(25, 51);
        break;

      case 2:
        this.productos = await this.productosService.getByFocal(52, 86);
        break;

      default:
        this.productos = await this.productosService.getAll();
    };
  }

  async manejarCheckAccesorios($event) {
    this.productos = await this.productosService.getByMarcaAccesorio($event.target.value);
    this.mostrarDeshacerFiltro = true;
  }

  async manejarCheckPrecio($event) {
    this.mostrarDeshacerFiltro = true;
    switch (parseInt($event.target.value)) {
      case 0:
        this.productos = await this.productosService.getByPrecio(10, 251);
        break;

      case 1:
        this.productos = await this.productosService.getByPrecio(275, 501);
        break;

      case 2:
        this.productos = await this.productosService.getByPrecio(550, 1001);
        break;

      case 3:
        this.productos = await this.productosService.getByPrecio(1100, 2100);
        break;

      default:
        this.productos = await this.productosService.getAll();
    };
  }

  async manejarDeshacerFiltro() {
    this.mostrarDeshacerFiltro = false;
    this.productos = await this.productosService.getAll();

  }

  manejarMostrarFiltroCamaras() {
    if (this.mostrarFiltroCamaras != true) {
      this.mostrarFiltroCamaras = true;
    } else {
      this.mostrarFiltroCamaras = false;
    }

  }

  manejarMostrarFiltroObjetivos() {
    if (this.mostrarFiltroObjetivos != true) {
      this.mostrarFiltroObjetivos = true;
    } else {
      this.mostrarFiltroObjetivos = false;
    }

  }

  manejarMostrarFiltroAccesorios() {
    if (this.mostrarFiltroAccesorios != true) {
      this.mostrarFiltroAccesorios = true;
    } else {
      this.mostrarFiltroAccesorios = false;
    }

  }

  manejarMostrarFiltroPrecio() {
    if (this.mostrarFiltroPrecio != true) {
      this.mostrarFiltroPrecio = true;
    } else {
      this.mostrarFiltroPrecio = false;
    }

  }



}

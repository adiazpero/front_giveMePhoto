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
  mostrar: boolean;


  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute, private router: Router, private carritoService: CarritoService) {
    this.productoSeleccionado = new EventEmitter();
    this.productos = new Array<any>();
    this.mostrar = false;

  }





  ngOnInit() {

    if (localStorage.getItem('cuestionario')) {
      this.productos = JSON.parse(localStorage.getItem('cuestionario'));
      this.mostrar = true;
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
    this.mostrar = false;
  }

  enviarProducto(producto) {
    this.carritoService.agregarProducto(producto);
  }


  async manejarCheckMarca($event) {
    const response = await this.productosService.getByMarca($event.target.value);
    this.productos = response;
    //console.log(response)
  }


  async manejarCheckResolucion($event) {
    var response = [];
    switch (parseInt($event.target.value)) {
      case 0:
        response = await this.productosService.getByResolucion(12, 17);
        this.productos = response;
        console.log(response);
        break;

      case 1:
        response = await this.productosService.getByResolucion(18, 25);
        this.productos = response;
        console.log(response);
        break;

      case 2:
        response = await this.productosService.getByResolucion(30, 36);
        this.productos = response;
        console.log(response);
        break;

      default:
        response = await this.productosService.getAll();
        this.productos = response;
    };
  }




  async manejarCheckIso($event) {
    var response = [];
    switch (parseInt($event.target.value)) {
      case 0:
        response = await this.productosService.getByIso(6300, 12900);
        this.productos = response;
        console.log(response);
        break;

      case 1:
        response = await this.productosService.getByIso(25500, 51300);
        this.productos = response;
        console.log(response);
        break;

      case 2:
        response = await this.productosService.getByIso(100000, 521300);
        this.productos = response;
        console.log(response);
        break;

      default:
        response = await this.productosService.getAll();
        this.productos = response;
    };
  }


  async manejarCheckObjetivo($event) {
    const response = await this.productosService.getByMarcaObjetivo($event.target.value);
    this.productos = response;
  }



  async manejarCheckFocal($event) {
    var response = [];
    switch (parseInt($event.target.value)) {
      case 0:
        response = await this.productosService.getByFocal(15, 25);
        this.productos = response;
        break;

      case 1:
        response = await this.productosService.getByFocal(25, 51);
        this.productos = response;
        break;

      case 2:
        response = await this.productosService.getByFocal(52, 86);
        this.productos = response;
        break;

      default:
        response = await this.productosService.getAll();
        this.productos = response;
    };
  }

  async manejarCheckAccesorios($event) {
    const response = await this.productosService.getByAccesorios($event.target.value);
    this.productos = response;
  }

  async manejarCheckPrecio($event) {
    var response = [];
    switch (parseInt($event.target.value)) {
      case 0:
        response = await this.productosService.getByPrecio(10, 251);
        this.productos = response;
        break;

      case 1:
        response = await this.productosService.getByPrecio(275, 501);
        this.productos = response;
        break;

      case 2:
        response = await this.productosService.getByPrecio(550, 1001);
        this.productos = response;
        break;

      case 3:
        response = await this.productosService.getByPrecio(1100, 2100);
        this.productos = response;
        break;

      default:
        response = await this.productosService.getAll();
        this.productos = response;
    };
  }


}

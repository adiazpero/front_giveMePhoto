import { Component, OnInit, Input } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})


export class CarritoComponent implements OnInit {

  listaPedido: any[];
  formulario: FormGroup;
  mostrar: boolean;
  arrfkUsuario: any[];
  arrFormulario: any[];
  arrInfoPedido: any[];

  constructor(private carritoService: CarritoService) {

    this.mostrar = false;
    this.arrfkUsuario = [];
    this.arrFormulario = [];
    this.arrInfoPedido = [];


    this.formulario = new FormGroup({
      direccion: new FormControl(''),
      telefono: new FormControl('')
    });
  }



  ngOnInit() {
    /*     this.listaPedido = JSON.parse(localStorage.getItem('pedido'));
        console.log(this.listaPedido); */
    this.listaPedido = this.carritoService.recuperarCarrito();
  }





  confirmarPedido() {
    this.mostrar = !this.mostrar;
    for (let producto of this.listaPedido) {
      this.arrfkUsuario.push(producto.id);
      localStorage.setItem('fkProducto', JSON.stringify(this.arrfkUsuario));
    }
  }



  onSubmit() {

    const pedido = {
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono,
      productos: JSON.parse(localStorage.getItem('fkProducto'))
    }
    console.log(pedido)
    this.carritoService.enviarPedido(pedido);
  }



  manejarBorrar(pId) {
    this.carritoService.borrarProducto(pId);
  }



  sumaProductos() {
    let resultado = 0;
    for (const producto of this.listaPedido) {
      // console.log('listaPedido:', this.listaPedido)
      resultado += producto.precio;
      // console.log('resultado suma', resultado)
    }
    return resultado;
  }









}

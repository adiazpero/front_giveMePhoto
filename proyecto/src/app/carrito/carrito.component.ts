import { Component, OnInit, Input } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})


export class CarritoComponent implements OnInit {

  listaPedido: any[];
  arrfkUsuario: any[];
  formulario: FormGroup;
  mostrarConfirmarPedido: boolean;
  mostrarRealizarPedido: boolean;
  mostrarPedidoConfirmado: boolean;
  mostrarNoProductos: boolean;
  mostrarProductos: boolean;
  mostrarMsgPedidoRealizado: boolean;

  constructor(private carritoService: CarritoService) {
    this.listaPedido = [];
    this.arrfkUsuario = [];
    this.mostrarConfirmarPedido = false;
    this.mostrarRealizarPedido = false;
    this.mostrarPedidoConfirmado = false;
    this.mostrarNoProductos = false;
    this.mostrarProductos = false;
    this.mostrarMsgPedidoRealizado = false


    this.formulario = new FormGroup({
      direccion: new FormControl('', [
        Validators.required,
      ]),
      telefono: new FormControl('', [
        Validators.required,
      ])
    });


  }


  //Recuperamos los productos del carrito para pintarlos.
  ngOnInit() {
    this.listaPedido = this.carritoService.recuperarCarrito();
    if (this.listaPedido.length != 0) {
      this.mostrarConfirmarPedido = true;
      this.mostrarNoProductos = false;
      this.mostrarProductos = true;
    } else {
      this.mostrarNoProductos = true;
    }

  }

  //Guardamos los productos en localStorage
  realizarPedido() {
    this.mostrarRealizarPedido = true;
    for (let producto of this.listaPedido) {
      this.arrfkUsuario.push(producto.id);
      localStorage.setItem('fkProducto', JSON.stringify(this.arrfkUsuario));
    }
  }



  onSubmit() {

    //Cogemos del formulario direccion, telefono y productos y se envia el pedido a la base de datos
    const pedido = {
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono,
      productos: JSON.parse(localStorage.getItem('fkProducto'))
    }
    this.carritoService.enviarPedido(pedido);

    //Una vez enviado el pedido, reseteamos el formulario, borramos los datos de localStorage y mostramos mensaje de "pedido realizado"
    this.formulario.reset();
    localStorage.removeItem('carritoPedido');
    localStorage.removeItem('fkProducto');
    this.mostrarPedidoConfirmado = true;


    //Borramos los productos del carrito para que no aparezcan.
    if (localStorage.getItem('carritoPedido')) {
      this.listaPedido = this.carritoService.recuperarCarrito();
    } else {
      this.listaPedido = [];
    }

    //Mostramos y ocultamos botones y mensajes.
    this.mostrarProductos = false;
    this.mostrarConfirmarPedido = false;
    this.mostrarRealizarPedido = false;
    this.mostrarMsgPedidoRealizado = true;
  }


  //Borrar producto del carrito. Si el listado se queda sin productos se muestran/ocultan mensajes.
  manejarBorrar(pId) {
    this.carritoService.borrarProducto(pId);
    if (this.listaPedido.length === 0) {
      this.mostrarProductos = false;
      this.mostrarNoProductos = true;
      this.mostrarConfirmarPedido = false;
      this.mostrarRealizarPedido = false;
    }
  }

  //Sumamos el total de productos.
  sumaProductos() {
    let resultado = 0;
    for (const producto of this.listaPedido) {
      resultado += producto.precio;
    }
    return resultado;
  }









}

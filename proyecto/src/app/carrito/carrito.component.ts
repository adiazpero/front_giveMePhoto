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

  constructor(private carritoService: CarritoService) {

    this.mostrar = false;

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



  onSubmit() {
    console.log(this.formulario.value)
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




  realizarPedido() {
    for (let producto of this.listaPedido) {
      console.log(producto.id)
      this.carritoService.enviarPedido(producto.id);
      this.mostrar = !this.mostrar;
    }
  }





}

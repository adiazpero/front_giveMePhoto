import { Component, OnInit, Input } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  /* 
    @Input() */
  listaPedido: any[];

  constructor(private carritoService: CarritoService) {

  }

  ngOnInit() {
    /*     this.listaPedido = JSON.parse(localStorage.getItem('pedido'));
        console.log(this.listaPedido); */
    this.listaPedido = this.carritoService.recuperarCarrito();

  }


  /*   anyFunction() {
      console.log('anyfunction en el carrito')
    } */

  manejarBorrar(pId) {
    this.carritoService.borrarProducto(pId);
  }

  sumaProductos() {
    let resultado = 0;
    for (const producto of this.listaPedido) {
      console.log('listaPedido:', this.listaPedido)
      resultado += producto.precio;
      console.log('resultado suma', resultado)
    }
    return resultado;
  }
}

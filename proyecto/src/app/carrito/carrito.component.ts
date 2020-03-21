import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  @Input() listaPedido: any[];


  constructor() {

  }

  ngOnInit() {
    this.listaPedido = JSON.parse(localStorage.getItem('pedido'));
    console.log(this.listaPedido);
  }


  anyFunction() {
    console.log('anyfunction en el carrito')
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

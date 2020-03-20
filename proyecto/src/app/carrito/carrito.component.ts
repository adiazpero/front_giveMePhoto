import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  @Input() pedido: any;

  constructor() {

  }

  ngOnInit() {
  }


  anyFunction() {
    console.log('llamada desde el padre')
  }

  sumaProductos() {
    let resultado = 0;
    for (const producto of this.pedido) {
      console.log(this.pedido)
      resultado += producto.precio;
      console.log(resultado)
    }
    return resultado;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  arrCarrito: any[];

  constructor() {
    if (localStorage.getItem('carritoPedido')) {
      this.arrCarrito = JSON.parse(localStorage.getItem('carritoPedido'));
    } else {
      this.arrCarrito = [];
    }
    console.log(this.arrCarrito)
  }

  recuperarCarrito() {
    return this.arrCarrito
  }

  agregarProducto(pProducto) {
    this.arrCarrito.push(pProducto)
    localStorage.setItem('carritoPedido', JSON.stringify(this.arrCarrito));
  }

  borrarProducto(pId) {
    for (let i = 0; i < this.arrCarrito.length; i++) {
      if (pId === this.arrCarrito[i].id) {
        this.arrCarrito.splice(i, 1);
        localStorage.setItem('carritoPedido', JSON.stringify(this.arrCarrito));
      }
    }
  }


}


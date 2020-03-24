import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 /*  arrPedido: any; */

  constructor() {
    /* this.arrPedido = []; */

  }

/*   onActivate(componentReference) {
    console.log('pagina que está activa:', componentReference)
    componentReference.anyFunction();

    //recogemos el producto
    componentReference.productoSeleccionado.subscribe((producto) => {
      console.log('producto que recibe el padre', producto)
      this.arrPedido.push(producto);
      console.log('arrpedido:', this.arrPedido);
      localStorage.setItem('pedido', JSON.stringify(this.arrPedido));
    });

  } */

}

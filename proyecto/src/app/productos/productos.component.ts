import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {




  constructor(private productosService: ProductosService) { }




  ngOnInit() {
    this.productosService.getAll()
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err)
      });
  }




}

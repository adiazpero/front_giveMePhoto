import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto: any;


  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute, private router: Router) {

  }


  ngOnInit() {
    //Productos => ver todos
    this.productosService.getAll()
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err)
      });



    //Productos: filtrar por categorias => camaras/objetivos/accesorios
    this.activatedRoute.params.subscribe(async params => {
      console.log(params)
      const response = await this.productosService.getByCategoria(params.categoria);
      this.producto = response;
      console.log(response)
    });
  }



  async manejarCheck($event) {
    const response = await this.productosService.getByMarca($event.target.value);
    this.producto = response;
    console.log(response)
    //console.log($event.target.value)
    /* this.productosService.getByMarca() */
  }






}

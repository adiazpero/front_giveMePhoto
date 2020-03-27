import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tecnicanaturaleza: boolean;
  tecnicanocturna: boolean;
  tecnicaretrato: boolean;
  tecnicamacro: boolean;
  nocturna: string;
  naturaleza: string;
  retrato: string;
  macro: string;


  constructor(private homeservice: HomeService) {
    this.tecnicanaturaleza = false;
    this.tecnicanocturna = false;
    this.tecnicaretrato = false;
    this.tecnicamacro = false;
  }

  ngOnInit() {
  }



  manejarTecnicaNaturaleza(event) {
    if (event.target.checked) {
      this.tecnicanaturaleza = true;
    } else {
      this.tecnicanaturaleza = false;
    }

    if (this.tecnicanaturaleza === true) {
      this.naturaleza = 'tecnicanaturaleza';
    }
  }


  manejarTecnicaNocturna(event) {
    if (event.target.checked) {
      this.tecnicanocturna = true;
    } else {
      this.tecnicanocturna = false;
    }

    if (this.tecnicanocturna === true) {
      this.nocturna = 'tecnicanocturna';
    }
  }

  manejarTecnicaRetrato(event) {
    if (event.target.checked) {
      this.tecnicaretrato = true;
    } else {
      this.tecnicanocturna = false;
    }

    if (this.tecnicaretrato === true) {
      this.retrato = 'tecnicaretrato';
    }
  }

  manejarTecnicaMacro(event) {
    if (event.target.checked) {
      this.tecnicamacro = true;
    } else {
      this.tecnicanocturna = false;
    }

    if (this.tecnicamacro === true) {
      this.macro = 'tecnicamacro';
    }
  }





  manejarResultado() {
    const tecnicas = {
      tecnicas: [this.nocturna, this.naturaleza, this.retrato, this.macro]
    }
    this.homeservice.enviarCuestionarioTecnica(tecnicas);
  }


  /*  const response = await this.productosService.getByMarcaObjetivo($event.target.value);
   this.productos = response;
   console.log(response)
  */
}

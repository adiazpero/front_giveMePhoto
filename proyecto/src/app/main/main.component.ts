import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

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
  tecnicas: any[];
  productos: any;
  precioMin: number;
  precioMax: number;
  mostrar: boolean;


  constructor(private homeservice: HomeService, private router: Router) {
    this.tecnicanaturaleza = false;
    this.tecnicanocturna = false;
    this.tecnicaretrato = false;
    this.tecnicamacro = false;
    this.tecnicas = [];
    this.mostrar = false;
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
      this.tecnicas.push(this.naturaleza);
    } else {
      this.tecnicas.pop();
    }
  }


  manejarTecnicaNocturna(event) {
    if (event.target.checked) {
      this.tecnicanocturna = true;
    } else {
      this.tecnicanocturna = false;
      this.tecnicas.pop();
    }

    if (this.tecnicanocturna === true) {
      this.nocturna = 'tecnicanocturna';
      this.tecnicas.push(this.nocturna);
    } else {
      this.tecnicas.pop();
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
      this.tecnicas.push(this.retrato);
    } else {
      this.tecnicas.pop();
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
      this.tecnicas.push(this.macro);
    } else {
      this.tecnicas.pop();
    }

  }

  async manejarCheckPrecio($event) {
    switch (parseInt($event.target.value)) {
      case 0:
        this.precioMin = 10;
        this.precioMax = 260;
        break;

      case 1:
        this.precioMin = 260;
        this.precioMax = 500;
        break;

      case 2:
        this.precioMin = 550;
        this.precioMax = 1000;
        break;

      case 3:
        this.precioMin = 1100;
        this.precioMax = 2100;
        break;

      default:

    };
  }


  async manejarResultado() {
    const tecnicas = {
      tecnicas: this.tecnicas,
      precioMin: this.precioMin,
      precioMax: this.precioMax,
    }
    console.log(this.tecnicas)
    await this.homeservice.enviarCuestionarioTecnica(tecnicas);
    this.productos = await this.homeservice.enviarCuestionarioTecnica(tecnicas);
    localStorage.setItem('cuestionario', JSON.stringify(this.productos));
    if (this.productos === null) {
      this.mostrar = true;
    } else {
      this.router.navigate(['/productos']);
    }

  }






}

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
  tecnicas: any[];
  productos: any;


  constructor(private homeservice: HomeService) {
    this.tecnicanaturaleza = false;
    this.tecnicanocturna = false;
    this.tecnicaretrato = false;
    this.tecnicamacro = false;
    this.tecnicas = [];
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


  async manejarResultado() {
    const tecnicas = {
      tecnicas: this.tecnicas,
    }
    await this.homeservice.enviarCuestionarioTecnica(tecnicas);
    const response = await this.homeservice.enviarCuestionarioTecnica(tecnicas);
    this.productos = response;
    console.log(this.productos)

  }





}

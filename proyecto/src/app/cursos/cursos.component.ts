import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {



  constructor(private router: Router) { }



  ngOnInit() {

  }

  manejarClickIniciacion() {
    this.router.navigate(['/cursos/iniciacion'])
  }

  manejarClickMedio() {
    this.router.navigate(['/cursos/medio'])
  }


  manejarClickAvanzado() {
    this.router.navigate(['/cursos/avanzado'])
  }

}















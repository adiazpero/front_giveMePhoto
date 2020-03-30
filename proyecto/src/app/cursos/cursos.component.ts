import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {



  constructor(private router: Router, private cursosService: CursosService) { }



  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

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















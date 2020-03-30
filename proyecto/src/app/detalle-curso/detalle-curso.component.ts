import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {

  cursos: any[];

  constructor(private cursosService: CursosService, private activatedRoute: ActivatedRoute, private router: Router) { }



  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.cursos = await this.cursosService.getByNivel(params.nivel);
      console.log(this.cursos)
    })

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }


  clickAddCurso(pCurso) {
    this.cursosService.enviarPedidoCurso(pCurso);
  }






}

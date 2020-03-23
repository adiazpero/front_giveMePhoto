import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {

  cursos: any[];

  constructor(private cursosService: CursosService, private activatedRoute: ActivatedRoute) { }



  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.cursos = await this.cursosService.getByNivel(params.nivel);
      console.log(this.cursos)
    })
  }


  anyfunction() { }

}

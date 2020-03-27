import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuario: any;
  pedidos: any;
  cursos: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    //recuperamos usuarios 
    this.usuarioService.getUserById()
      .then(response => {
        this.usuario = response;
      })
      .catch(err => {
        console.log(err)
      });

    //recuperamos pedidos de usuario
    this.usuarioService.getPedidosUser()
      .then(response => {
        this.pedidos = response;
      })
      .catch(err => {
        console.log(err)
      });

    //recuperamos los cursos
    this.usuarioService.getAllDetalleCurso()
      .then(response => {
        this.cursos = response;
        console.log(this.cursos)
      })
      .catch(err => {
        console.log(err)
      });

  }

}










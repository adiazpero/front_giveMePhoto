import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuario: any;
  pedidos: any;
  productos: any;
  pedidoCurso: any;
  cursos: any;


  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.pedidos = [];
    this.pedidoCurso = [];
    this.productos = [];
  }

  ngOnInit() {
    //recuperamos usuarios 
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }


    //recuperamos pedidos de usuario
    this.usuarioService.getPedidosUser()
      .then(response => {
        if (response['error']) {
          localStorage.removeItem('token');
          confirm('Tu sesion ha terminado, logueate de nuevo');
          window.location.reload();
          localStorage.removeItem('token');
          localStorage.removeItem('usuario');
          this.router.navigate(['/registro']);
        } else {
          this.pedidos = response;
          console.log(this.pedidos)

          /* console.log(this.pedidos) */
          /*           for (let i = 0; i < this.pedidos.length; i++)
                      this.productos = this.pedidos[i].productos; */

          /*           for (let productos of this.pedidos) {
                      this.productos = productos;
                    } */
          /*           console.log(this.productos) */

        }


      })
      .catch(err => {
        console.log(err)
      });

    //recuperamos los cursos
    this.usuarioService.getAllDetalleCurso()
      .then(response => {
        this.pedidoCurso = response;
      })
      .catch(err => {
        console.log(err)
      });

  }

}










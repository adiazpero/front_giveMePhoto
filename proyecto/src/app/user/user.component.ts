import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuario: any;
  pedidos: any;

  constructor(private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.usuarioService.getUserById()
      .then(response => {
        this.usuario = response;
      })
      .catch(err => {
        console.log(err)
      });

    this.usuarioService.getPedidosUser()
      .then(response => {
        this.pedidos = response;
      })
      .catch(err => {
        console.log(err)
      })

  }

}










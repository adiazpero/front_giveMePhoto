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
    this.activatedRoute.params.subscribe(async params => {
      const usuario = await this.usuarioService.getUserById(params.id);
      this.usuario = usuario;

      const pedidos = await this.usuarioService.getPedidosUser(params.id);
      this.pedidos = pedidos;
      console.log(this.pedidos)
    });



  }





}



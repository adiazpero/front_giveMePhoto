import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  formRegistro: FormGroup;
  formLogin: FormGroup;
  errores: any[];
  mostrar: boolean;

  constructor(private usuarioService: UsuarioService, private router: Router) {


    //REGISTRO
    this.formRegistro = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
      ]),
      apellidos: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', []),
      password: new FormControl('', [])
    });

    this.mostrar = false;

    //LOGIN
    this.formLogin = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl('', []),

    });
  }


  ngOnInit() {
  }


  async onSubmitRegistro() {
    await this.usuarioService.createUser(this.formRegistro.value)
    this.mostrar = !this.mostrar;

  }
  /*  this.router.navigate(['/main']); */


  onSubmitLogin() {
    this.usuarioService.loginUser(this.formLogin.value)
      .then(response => {
        console.log(response['success']);
        localStorage.setItem('token', response['success']);
        confirm('usuario logado correctamente')
        this.router.navigate(['/main']);
      })
      .catch(err => {
        console.log(err)
      })
  }






}

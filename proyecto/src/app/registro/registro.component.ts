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
  mostrarRegistro: boolean;
  mostrarLogin: boolean;

  constructor(private usuarioService: UsuarioService, private router: Router) {


    //REGISTRO
    this.formRegistro = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\w-]+@([\w-]+\.)+[\w-]+/)
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      repitepassword: new FormControl('', [
        Validators.required,
      ]),
    }, [this.passwordValidator]);


    this.mostrarRegistro = false;
    this.mostrarLogin = false;


    //LOGIN
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),

    });
  }


  ngOnInit() {

  }


  async onSubmitRegistro() {
    await this.usuarioService.createUser(this.formRegistro.value)
    this.mostrarRegistro = !this.mostrarRegistro;

    if (this.mostrarRegistro === true) {
      this.formRegistro.reset();
    }
  }


  onSubmitLogin() {
    this.usuarioService.loginUser(this.formLogin.value)
      .then(response => {
        localStorage.setItem('token', response['success']);
        this.mostrarLogin = true;
        this.formLogin.reset();
        this.usuarioService.getUserById()
          .then(response => {
            localStorage.setItem('usuario', JSON.stringify(response));
          })
          .catch(err => {
            console.log(err)
          });
      })
      .catch(err => {
        console.log(err)
      });

  }


  passwordValidator(form) {
    const passwordValue = form.controls.password.value;
    const repitePasswordValue = form.controls.repitepassword.value;

    if (passwordValue === repitePasswordValue) {
      return null;
    } else {
      return { passwordvalidator: true };
    }
  }



}

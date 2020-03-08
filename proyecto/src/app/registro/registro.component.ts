import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;


  constructor(private homeService: HomeService) {

    this.formulario = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      apellidos: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', []),
      password: new FormControl('', [])
    })


  }





  ngOnInit() {
  }

}

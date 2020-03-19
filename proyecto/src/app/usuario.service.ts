import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/users";

  }


  createUser(formvalue) {
    return this.httpClient.post(`${this.baseUrl}/registro`, formvalue).toPromise();
  }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  baseUrl: string;
  baseUrlPedidos: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/users";
    this.baseUrlPedidos = "http://localhost:3000/api/pedidos"
  }



  // Crear Usuario
  createUser(formvalue) {
    return this.httpClient.post(`${this.baseUrl}/registro`, formvalue).toPromise();
  }


  // Login Usuario
  loginUser(formvalue) {
    return this.httpClient.post(`${this.baseUrl}/login`, formvalue).toPromise();
    //localStorage.setItem('post', JSON.stringify(this.arrPost))
  }


  // Obtener Usuario
  getUserById(pId): Promise<any> {
    /*   const httpOptions = {
        headers: new HttpHeaders({
          'user-token': localStorage.getItem('token')
        })
      } */
    return this.httpClient.get(`${this.baseUrl}/${pId}`).toPromise();
  }





  //Obtener pedidos
  getPedidosUser(pId) {
    return this.httpClient.get(`${this.baseUrlPedidos}/${pId}`).toPromise();
  }




}

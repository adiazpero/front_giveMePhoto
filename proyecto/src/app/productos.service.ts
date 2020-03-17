import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/productos';
  }



  getAll(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();
  }



  getByCategoria(pCategoria): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pCategoria}`).toPromise();
  }


  getByMarca(pMarca): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pMarca}`).toPromise();
  }


}

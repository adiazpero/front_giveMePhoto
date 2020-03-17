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
    return this.httpClient.get(`${this.baseUrl}/marca/${pMarca}`).toPromise();
  }


  getByResolucion(pResMin, pResMax): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/resolucion/${pResMin}/${pResMax}`).toPromise();
  }


  getByIso(pIsoMin, pIsoMax): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/iso/${pIsoMin}/${pIsoMax}`).toPromise();
  }



  getByMarcaObjetivo(pMarca): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/marcaObjetivo/${pMarca}`).toPromise();
  }



  getByFocal(pFocalMin, pFocalMax): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/focal/${pFocalMin}/${pFocalMax}`).toPromise();
  }

}

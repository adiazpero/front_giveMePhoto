import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/cursos';

  }



  getByNivel(pNivel): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pNivel}`).toPromise();
  }




}

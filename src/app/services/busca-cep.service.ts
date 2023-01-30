import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  private baseUrl: string = 'https://viacep.com.br/ws/'

  constructor(private http: HttpClient) { }

  prucurarCep(cep: string) {
    return this.http.get(`${this.baseUrl}${cep}/json/`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private httpClient: HttpClient) {}

  private serverApi: string = 'http://localhost:5000/api';

  public list(): Observable<Array<Produto>> {
    return this.httpClient.get<Array<Produto>>(
      `${this.serverApi}/produto/get-produtos`
    );
  }

  public get(codigo : any): Observable<Produto> {
    return this.httpClient.get<Produto>(
      `${this.serverApi}/produto/get-produto/${codigo}`
    );
  }

  public post(produto: Produto): Observable<any> {
    return this.httpClient.post(`${this.serverApi}/produto`, produto);
  }

  public put(produto: Produto): Observable<any> {
    return this.httpClient.put(`${this.serverApi}/produto/${produto.codigo}`, produto);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DadosProfissionais } from '../interfaces/dados-profissionais';
import { API_SERVICE_DADOS_PROFISSIONAIS } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class DadosProfissionaisService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<DadosProfissionais[]> {
    return this.http.get<DadosProfissionais[]>(API_SERVICE_DADOS_PROFISSIONAIS)
      .pipe(
        retry(1)
      );
  }

  getOne(id: number): Observable<DadosProfissionais> {
    return this.http.get<DadosProfissionais>(`${API_SERVICE_DADOS_PROFISSIONAIS}/${id}`)
      .pipe(
        retry(1)
      );
  }

  save(dadosProfissionais: DadosProfissionais) {
    return this.http
      .post<DadosProfissionais>(API_SERVICE_DADOS_PROFISSIONAIS, dadosProfissionais)
      .pipe(
        catchError(null)
      );
  }

  update(id: number, dadosProfissionais: DadosProfissionais) {
    return this.http.put<DadosProfissionais>(`${API_SERVICE_DADOS_PROFISSIONAIS}/${id}`, dadosProfissionais)
      .pipe(
        catchError(null)
      );
  }

  delete(id: number) {
    return this.http.delete<DadosProfissionais>(`${API_SERVICE_DADOS_PROFISSIONAIS}/${id}`)
      .pipe(
        catchError(null)
      );
  }
}

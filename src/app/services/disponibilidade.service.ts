import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Disponibilidade } from '../interfaces/disponibilidade';
import { API_SERVICE_DISPONIBILIDADE } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Disponibilidade[]> {
    return this.http.get<Disponibilidade[]>(API_SERVICE_DISPONIBILIDADE)
      .pipe(
        retry(1)
      );
  }

  getOne(id: number): Observable<Disponibilidade> {
    return this.http.get<Disponibilidade>(`${API_SERVICE_DISPONIBILIDADE}/${id}`)
      .pipe(
        retry(1)
      );
  }

  save(disponibilidade: Disponibilidade) {
    return this.http
      .post<Disponibilidade>(API_SERVICE_DISPONIBILIDADE, disponibilidade)
      .pipe(
        catchError(null)
      );
  }

  update(id: number, disponibilidade: Disponibilidade) {
    return this.http.put<Disponibilidade>(`${API_SERVICE_DISPONIBILIDADE}/${id}`, disponibilidade)
      .pipe(
        catchError(null)
      );
  }

  delete(id: number) {
    return this.http.delete<Disponibilidade>(`${API_SERVICE_DISPONIBILIDADE}/${id}`)
      .pipe(
        catchError(null)
      );
  }
}

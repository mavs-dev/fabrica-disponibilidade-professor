import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Disciplina } from '../interfaces/disciplina';
import { API_SERVICE_DISCIPLINA } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(API_SERVICE_DISCIPLINA)
      .pipe(
        retry(1)
      );
  }

  getOne(id: number): Observable<Disciplina> {
    return this.http.get<Disciplina>(`${API_SERVICE_DISCIPLINA}/${id}`)
      .pipe(
        retry(1)
      );
  }

  save(disciplina: Disciplina) {
    return this.http
      .post<Disciplina>(API_SERVICE_DISCIPLINA, disciplina)
      .pipe(
        catchError(null)
      );
  }

  update(id: number, disciplina: Disciplina) {
    return this.http.put<Disciplina>(`${API_SERVICE_DISCIPLINA}/${id}`, disciplina)
      .pipe(
        catchError(null)
      );
  }

  delete(id: number) {
    return this.http.delete<Disciplina>(`${API_SERVICE_DISCIPLINA}/${id}`)
      .pipe(
        catchError(null)
      );
  }
}

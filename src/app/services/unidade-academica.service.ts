import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UnidadeAcademica } from '../interfaces/unidade-academica';
import { API_SERVICE_UNIDADE_ACADEMICA } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class UnidadeAcademicaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<UnidadeAcademica[]> {
    return this.http.get<UnidadeAcademica[]>(API_SERVICE_UNIDADE_ACADEMICA)
      .pipe(
        retry(1)
      );
  }

  getOne(id: number): Observable<UnidadeAcademica> {
    return this.http.get<UnidadeAcademica>(`${API_SERVICE_UNIDADE_ACADEMICA}/${id}`)
      .pipe(
        retry(1)
      );
  }

  save(unidadeAcademica: UnidadeAcademica) {
    return this.http
      .post<UnidadeAcademica>(API_SERVICE_UNIDADE_ACADEMICA, unidadeAcademica)
      .pipe(
        catchError(null)
      );
  }

  update(id: number, unidadeAcademica: UnidadeAcademica) {
    return this.http.put<UnidadeAcademica>(`${API_SERVICE_UNIDADE_ACADEMICA}/${id}`, unidadeAcademica)
      .pipe(
        catchError(null)
      );
  }

  delete(id: number) {
    return this.http.delete<UnidadeAcademica>(`${API_SERVICE_UNIDADE_ACADEMICA}/${id}`)
      .pipe(
        catchError(null)
      );
  }
}

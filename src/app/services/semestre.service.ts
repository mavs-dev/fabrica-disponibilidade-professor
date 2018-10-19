import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Semestre } from '../interfaces/semestre';
import { API_SERVICE_SEMESTRE } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Semestre[]> {
    return this.http.get<Semestre[]>(API_SERVICE_SEMESTRE)
      .pipe(
        retry(1)
      );
  }

  getOne(id: number): Observable<Semestre> {
    return this.http.get<Semestre>(`${API_SERVICE_SEMESTRE}/${id}`)
      .pipe(
        retry(1)
      );
  }

  save(semestre: Semestre) {
    return this.http
      .post<Semestre>(API_SERVICE_SEMESTRE, semestre)
      .pipe(
        catchError(null)
      );
  }

  update(id: number, semestre: Semestre) {
    return this.http.put<Semestre>(`${API_SERVICE_SEMESTRE}/${id}`, semestre)
      .pipe(
        catchError(null)
      );
  }

  delete(id: number) {
    return this.http.delete<Semestre>(`${API_SERVICE_SEMESTRE}/${id}`)
      .pipe(
        catchError(null)
      );
  }
}

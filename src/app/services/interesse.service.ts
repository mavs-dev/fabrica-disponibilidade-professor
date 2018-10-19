import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Interesse } from '../interfaces/interesse';
import { API_SERVICE_INTERESSE } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class InteresseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Interesse[]> {
    return this.http.get<Interesse[]>(API_SERVICE_INTERESSE)
      .pipe(
        retry(1)
      );
  }

  getOne(id: number): Observable<Interesse> {
    return this.http.get<Interesse>(`${API_SERVICE_INTERESSE}/${id}`)
      .pipe(
        retry(1)
      );
  }

  save(interesse: Interesse) {
    return this.http
      .post<Interesse>(API_SERVICE_INTERESSE, interesse)
      .pipe(
        catchError(null)
      );
  }

  update(id: number, interesse: Interesse) {
    return this.http.put<Interesse>(`${API_SERVICE_INTERESSE}/${id}`, interesse)
      .pipe(
        catchError(null)
      );
  }

  delete(id: number) {
    return this.http.delete<Interesse>(`${API_SERVICE_INTERESSE}/${id}`)
      .pipe(
        catchError(null)
      );
  }
}

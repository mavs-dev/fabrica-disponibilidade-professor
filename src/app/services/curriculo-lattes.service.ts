import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CurriculoLattes } from '../interfaces/curriculo-lattes';
import { API_SERVICE_CURRICULO_LATTES } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class CurriculoLattesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CurriculoLattes[]> {
    return this.http.get<CurriculoLattes[]>(API_SERVICE_CURRICULO_LATTES)
      .pipe(
        retry(1)
      );
  }

  getOne(id: number): Observable<CurriculoLattes> {
    return this.http.get<CurriculoLattes>(`${API_SERVICE_CURRICULO_LATTES}/${id}`)
      .pipe(
        retry(1)
      );
  }

  save(curriculoLattes: CurriculoLattes) {
    return this.http
      .post<CurriculoLattes>(API_SERVICE_CURRICULO_LATTES, curriculoLattes)
      .pipe(
        catchError(null)
      );
  }

  update(id: number, curriculoLattes: CurriculoLattes) {
    return this.http.put<CurriculoLattes>(`${API_SERVICE_CURRICULO_LATTES}/${id}`, curriculoLattes)
      .pipe(
        catchError(null)
      );
  }

  delete(id: number) {
    return this.http.delete<CurriculoLattes>(`${API_SERVICE_CURRICULO_LATTES}/${id}`)
      .pipe(
        catchError(null)
      );
  }
}

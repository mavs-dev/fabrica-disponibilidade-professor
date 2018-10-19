import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { API_SERVICE_USUARIO } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_SERVICE_USUARIO)
      .pipe(
        retry(1)
      );
  }

  getOne(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${API_SERVICE_USUARIO}/${id}`)
      .pipe(
        retry(1)
      );
  }

  save(usuario: Usuario) {
    return this.http
      .post<Usuario>(API_SERVICE_USUARIO, usuario)
      .pipe(
        catchError(null)
      );
  }

  update(id: number, usuario: Usuario) {
    return this.http.put<Usuario>(`${API_SERVICE_USUARIO}/${id}`, usuario)
      .pipe(
        catchError(null)
      );
  }

  delete(id: number) {
    return this.http.delete<Usuario>(`${API_SERVICE_USUARIO}/${id}`)
      .pipe(
        catchError(null)
      );
  }
}

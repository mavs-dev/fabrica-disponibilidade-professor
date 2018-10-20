import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { API_SERVICE_LOGIN } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<Usuario> {
    return this.http
      .post<Usuario>(API_SERVICE_LOGIN, usuario)
      .pipe(
        catchError(null)
      );
  }
}

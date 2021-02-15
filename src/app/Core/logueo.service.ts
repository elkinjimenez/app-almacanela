import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Modelos/usuario';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogueoService {

  constructor(
    private http: HttpClient
  ) { }

  inicioSesion(usuario: string, clave: string): Observable<Usuario> {
    const URL = 'http://almacanelalean.com/api-almacanela-ws/api/usuario/inicioSesion?usuario=' + usuario + '&clave=' + clave;
    return this.http.get<Usuario>(URL).pipe(
      retry(3),
    );
  }
}

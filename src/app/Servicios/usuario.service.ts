import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './data-source.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    public dataSource: DataSourceService,
  ) { }

  getLogin(usu: string, pass: string) {
    const URL = this.dataSource.server + '/wsalmacanela/webresources/entity.usuario/login?usuario=' + usu + '&clave=' + pass;
    return this.http.get(URL);
  }
}

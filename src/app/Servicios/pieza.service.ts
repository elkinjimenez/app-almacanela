import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './data-source.service';

@Injectable({
  providedIn: 'root'
})
export class PiezaService {

  constructor(
    private http: HttpClient,
    private dataSource: DataSourceService,
  ) { }

  getPartePorIdComponente(idComponente: number) {
    const URL = this.dataSource.server + '/wsalmacanela/webresources/entity.pieza/porIdComponente?idComponente=' + idComponente;
    return this.http.get(URL);
  }

}

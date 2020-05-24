import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './data-source.service';

@Injectable({
  providedIn: 'root'
})
export class ParteService {

  constructor(
    private http: HttpClient,
    private dataSource: DataSourceService,
  ) { }

  getPartePorIdLinea(idLinea: number) {
    const URL = this.dataSource.server + '/wsalmacanela/webresources/entity.parte/porIdLinea?idLinea=' + idLinea;
    return this.http.get(URL);
  }

}

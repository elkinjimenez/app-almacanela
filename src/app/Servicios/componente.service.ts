import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './data-source.service';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {

  constructor(
    private http: HttpClient,
    private dataSource: DataSourceService,
  ) { }

  getComponentePorIdParte(idParte: number) {
    const URL = this.dataSource.server + '/wsalmacanela/webresources/entity.componente/porIdParte?idParte=' + idParte;
    return this.http.get(URL);
  }

}

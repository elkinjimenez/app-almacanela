import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './data-source.service';

@Injectable({
  providedIn: 'root'
})
export class LineaService {

  constructor(
    private http: HttpClient,
    private dataSource: DataSourceService,
  ) { }

  getLineas() {
    const URL = this.dataSource.server + '/wsalmacanela/webresources/entity.linea';
    return this.http.get(URL);
  }

}

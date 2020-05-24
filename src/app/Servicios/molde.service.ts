import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './data-source.service';

@Injectable({
  providedIn: 'root'
})
export class MoldeService {

  constructor(
    private http: HttpClient,
    private dataSource: DataSourceService,
  ) { }

  getMoldes() {
    const URL = this.dataSource.server + '/wsalmacanela/webresources/entity.molde';
    return this.http.get(URL);
  }

}

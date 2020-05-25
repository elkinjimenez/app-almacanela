import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './data-source.service';
import { MoldeCrear } from '../Modelos/Molde/molde-crear';

@Injectable({
  providedIn: 'root'
})
export class MoldeService {

  constructor(
    private http: HttpClient,
    private dataSource: DataSourceService,
  ) { }

  getMoldes() {
    const URL = this.dataSource.server + '/wsalmacanela/webresources/entity.molde/listado';
    return this.http.get(URL);
  }

  postMoldeCrear(body: MoldeCrear) {
    const URL = this.dataSource.server + '/wsalmacanela/webresources/entity.molde/crear';
    return this.http.post(URL, body);
  }

  getBuscarMolde(id: number) {
    const URL = this.dataSource.server + '/wsalmacanela/webresources/entity.molde/molde?id=' + id;
    return this.http.get(URL);
  }

}

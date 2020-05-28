import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  server = 'https://almacanelalean.com';

  constructor() {
    this.server = 'http://localhost:8080';
  }
}

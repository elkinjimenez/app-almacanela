import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { LogueoComponent } from './logueo/logueo.component';
import { FormsModule } from '@angular/forms';
import { PersistenceModule } from 'angular-persistence';
import { AppRoutingModule } from 'src/app/Router/app-routing.module';

@NgModule({
  declarations: [PagesComponent, LogueoComponent],
  imports: [
    CommonModule,
    FormsModule,
    PersistenceModule,
    AppRoutingModule
  ],
  exports: [
    PagesComponent
  ]
})
export class LangingModule { }

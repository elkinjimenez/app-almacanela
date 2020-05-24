import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './Router/app-routing.module';
import { AppComponent } from './app.component';
import { LangingModule } from './Modulos/langing/langing.module';
import { MenuModule } from './Modulos/menu/menu.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersistenceModule } from 'angular-persistence';
import { ReferenciasModule } from './Modulos/Referencias/referencias.module';
import { ComponentesModule } from './Compartidos/Componentes/componentes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LangingModule,
    MenuModule,
    FormsModule,
    HttpClientModule,
    PersistenceModule,
    ReferenciasModule,
    ComponentesModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

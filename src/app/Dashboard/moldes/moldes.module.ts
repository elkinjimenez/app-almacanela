import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoldesRoutingModule } from './moldes-routing.module';
import { PrincipalMoldesComponent } from './principal-moldes/principal-moldes.component';


@NgModule({
  declarations: [PrincipalMoldesComponent],
  imports: [
    CommonModule,
    MoldesRoutingModule
  ]
})
export class MoldesModule { }

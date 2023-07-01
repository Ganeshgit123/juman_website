import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatingComponent } from './operating.component';

import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:  OperatingComponent,
  }
]

@NgModule({
  declarations: [
    OperatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class OperatingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatingComponent } from './operating.component';
import { RouterModule,Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule,
    RouterModule.forChild(routes),
  ]
})
export class OperatingModule { }

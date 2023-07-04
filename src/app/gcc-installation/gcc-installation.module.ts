import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GccInstallationComponent } from './gcc-installation.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GccInstallationComponent,
  }
]


@NgModule({
  declarations: [
    GccInstallationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GccInstallationModule { }

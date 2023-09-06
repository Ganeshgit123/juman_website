import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GccInstallationComponent } from './gcc-installation.component';
import { RouterModule,Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule,
    RouterModule.forChild(routes)
  ]
})
export class GccInstallationModule { }

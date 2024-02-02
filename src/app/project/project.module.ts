import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule,Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component:  ProjectComponent,
  }
]

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ]
})
export class ProjectModule { }

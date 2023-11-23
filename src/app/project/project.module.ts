import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule,Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';
import { LightgalleryModule } from 'lightgallery/angular';
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
    LightgalleryModule,
    TranslateModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),
  ]
})
export class ProjectModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';



const routes: Routes = [
  {
    path: '',
    component:  ProjectDetailsComponent,
  }
]

@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    CarouselModule,
  
    RouterModule.forChild(routes),
  ]
})
export class ProjectDetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { RouterModule,Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  }
]

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes),
  ]
})
export class AboutModule { }

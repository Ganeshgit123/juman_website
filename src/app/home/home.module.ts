import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule,Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    NgbCollapseModule,
    NgxUsefulSwiperModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }

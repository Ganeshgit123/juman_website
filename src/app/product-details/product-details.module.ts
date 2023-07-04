import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';



const routes: Routes = [
  {
    path: '',
    component:  ProductDetailsComponent,
  }
]

@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    CarouselModule,
  
    RouterModule.forChild(routes),
  ]
})
export class ProductDetailsModule { }

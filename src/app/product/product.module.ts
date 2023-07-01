import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule,Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component:  ProductComponent,
  }
]


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductModule { }

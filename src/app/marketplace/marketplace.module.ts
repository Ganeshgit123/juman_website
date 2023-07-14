import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { RouterModule,Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: MarketplaceComponent,
  }
]


@NgModule({
  declarations: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MarketplaceModule { }

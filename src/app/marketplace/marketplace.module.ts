import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { RouterModule,Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule,
    RouterModule.forChild(routes)
  ]
})
export class MarketplaceModule { }

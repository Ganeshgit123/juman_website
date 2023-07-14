import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardOfDirectorComponent } from '../board-of-director/board-of-director.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BoardOfDirectorComponent,
  }
]


@NgModule({
  declarations: [
    BoardOfDirectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BoardOfDirectorModule { }

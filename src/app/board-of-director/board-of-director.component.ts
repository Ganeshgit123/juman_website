import { Component } from '@angular/core';

@Component({
  selector: 'app-board-of-director',
  templateUrl: './board-of-director.component.html',
  styleUrls: ['./board-of-director.component.css']
})
export class BoardOfDirectorComponent {
  constructor() { }

  ngOnInit(): void {
   sessionStorage.setItem('pageName', 'bod');
  }
}

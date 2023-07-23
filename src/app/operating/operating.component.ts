import { Component } from '@angular/core';

@Component({
  selector: 'app-operating',
  templateUrl: './operating.component.html',
  styleUrls: ['./operating.component.css']
})
export class OperatingComponent {
  constructor() { }

  ngOnInit(): void {
   sessionStorage.setItem('pageName', 'operating');
  }
}

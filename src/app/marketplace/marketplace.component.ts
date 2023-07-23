import { Component } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  constructor() { }

  ngOnInit(): void {
   sessionStorage.setItem('pageName', 'service');
  }
}

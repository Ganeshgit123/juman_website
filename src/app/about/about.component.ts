import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    margin:30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      760: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav:false
  }
}

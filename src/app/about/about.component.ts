import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
  success: OwlOptions = {
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
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav:false
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   sessionStorage.setItem('pageName', 'about');
  }
}

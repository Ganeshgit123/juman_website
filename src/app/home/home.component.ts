import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any; // declaring jquery in this way solved the problem

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  collapsed = true;
  success: OwlOptions = {
    loop: true,
    margin:30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots:true,
    autoplay:true,
    autoplaySpeed:900,
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
        items: 4
      },
      1000: {
        items: 5
      }
    },
    nav:false,
  }
  successs: OwlOptions = {
    loop: true,
    margin:30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots:false,
    autoplay:true,
    autoplaySpeed:900,
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
        items: 4
      },
      1000: {
        items: 5
      }
    },
    nav:true,
  }
  car: OwlOptions = {
    loop: true,
    margin:30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots:true,
    autoplay:true,
    autoplaySpeed:900,
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
  ex: OwlOptions = {
    loop: true,
    autoWidth: true,
    margin:20,
    dots:false,
    autoplay:true,
    autoplaySpeed:900,

  }
  
}

$(document).ready(function () {
  $(".item").click(function () {
    $(".item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SwiperOptions } from 'swiper';
declare var $: any; // declaring jquery in this way solved the problem
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  endpoint = environment.baseUrl;
  collapsed = true;
  config: SwiperOptions = {
    pagination: {
      el: ".animeslide-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        let indT = total >= 5 ? total : `${total}`;
        let indC = current >= 5 ? current : `${current}`;
        return `<b>${indC}</b><span>/</span>${indT}`;
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".animeslide-button-next",
      prevEl: ".animeslide-button-prev"
    },
    spaceBetween: 0
  };

  success: OwlOptions = {
    loop: true,
    margin: 30,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 900,
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
    nav: false,
  }
  successs: OwlOptions = {
    loop: true,
    margin: 30,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 900,
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
    nav: false,
  }
  suc: OwlOptions = {
    loop: true,
    margin: 30,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 900,
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
    nav: false,
  }
  succ: OwlOptions = {
    loop: true,
    margin: 30,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 900,
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
    nav: false,
  }
  car: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 900,
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
    nav: false,
    rtl: true,
  }

  ex: OwlOptions = {
    loop: false,
    autoWidth: true,
    rtl: true,
    margin: 20,
    dots: false,
    autoplay: false,
    autoplaySpeed: 900,
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
        items: 3
      }
    },
  }
  dir: any;
  getData = [];
  getBanners = [];
  aboutSec = [];
  whatWeDoSec = [];
  operatingSect = [];
  operatingImgSec = [];
  serviceSect = [];
  partnerSec = [];
  partnerSecImages = [];
  clientSec = [];
  clientImageSec = [];
  testimonialHeadingSec = [];
  testimonialContentSec = [];
  latestSec = [];
  
  constructor(public authService: AuthService,) { }

  ngOnInit() {
    this.dir = localStorage.getItem('dir')  || "ltr";
    sessionStorage.setItem('pageName', 'home');

    const bannerData = {
      relations: ["header"],
      filter: {
        header: { id: "d0001922-3379-4f30-8c77-531571649537" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getBanners(bannerData).subscribe(
      (res: any) => {
        this.getBanners = res.payload;
      });

    const object = {
      relations: ["header", "images"],
      filter: {
        header: { id: "d0001922-3379-4f30-8c77-531571649537" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object).subscribe(
      (res: any) => {
        this.getData = res.payload;
        this.aboutSec = this.getData.filter(element => {
          return element.code === 'HABOUT';
        })
        this.whatWeDoSec = this.getData.filter(element => {
          return element.code === 'HWHO';
        })
        this.operatingSect = this.getData.filter(element => {
          return element.code === 'HOPERA';
        })
        this.serviceSect = this.getData.filter(element => {
          return element.code === 'SERVIC';
        })
        this.partnerSec = this.getData.filter(element => {
          return element.code === 'PARTNE';
        })
        var activePartnerImg = this.partnerSec[0].images.filter(element =>{
          return element.isActive;
        })
        this.partnerSecImages = activePartnerImg.sort(function (first, second) {
          return first?.seq - second?.seq;
        });
        this.clientSec = this.getData.filter(element => {
          return element.code === 'CLIENT';
        })

        var activeClientImg = this.clientSec[0].images.filter(element =>{
          return element.isActive;
        })
        this.clientImageSec = activeClientImg.sort(function (first, second) {
          return first?.seq - second?.seq;
        });

        this.testimonialHeadingSec = this.getData.filter(element => {
          return element.code === 'HOMTET';
        })
        this.testimonialContentSec = this.getData.filter(element => {
          return element.code === 'TESTI' && element.isActive;
        })
        this.latestSec = this.getData.filter(element => {
          return element.code === 'LANEWS';
        })
      });

    const object1 = {
      relations: ["header", "images"],
      filter: {
        header: {"id": "071232d9-db59-46f8-90a9-7a341ca4455a"}
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object1).subscribe(
      (res: any) => {
        this.operatingImgSec = res.payload
      });
  }

}

$(document).ready(function () {
  $(".item").click(function () {
    $(".item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

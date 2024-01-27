import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  endpoint = environment.baseUrl;
  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
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
    nav: false,
    rtl: true
  }
  success: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
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
    rtl: true
  }

  getData = [];
  dir: any;
  bannerSec = [];
  whatWeDoSec = [];
  countSec = [];
  tabSec1 = [];
  tabSec2 = [];
  tabSec3 = [];
  interestedSec = [];
  investHead = [];
  strategy = [];
  partnerSec = [];
  partnerSecImages = [];
  revenueCount: number = 0;
  revenueCountStop: any;
  reveCoo: any;
  employeCount: number = 0;
  employeCountStop: any;
  employeCoo: any;
  countryCount: number = 0;
  countryCountStop: any;
  regionalCount: number = 0;
  regionalCountStop: any;
  regionCoo:any;

  constructor(private router: Router, private route: ActivatedRoute, public authService: AuthService,) { }

  ngOnInit(): void {
    this.dir = localStorage.getItem('dir') || "ltr";
    sessionStorage.setItem('pageName', 'about');

    const object = {
      relations: ["header", "images"],
      filter: {
        header: { id: "78e7e440-9dba-4fa4-8f9c-edf4942424c4" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object).subscribe(
      (res: any) => {
        this.getData = res.payload;
        this.bannerSec = this.getData.filter(element => {
          return element.code === 'WHO';
        })
        this.whatWeDoSec = this.getData.filter(element => {
          return element.code === 'ABOUT';
        })
        this.countSec = this.getData.filter(element => {
          return element.code === 'COUNT';
        })
        this.revenueCountStop = setInterval(() => {
          this.revenueCount++;
          const [word, digits] = this.countSec[0].additionalInfo.firstValue.match(/\D+|\d+/g);
          this.reveCoo = digits;
          if (word == this.revenueCount) {
            clearInterval(this.revenueCountStop);
          }
        }, 1)
        this.employeCountStop = setInterval(() => {
          this.employeCount++;
          const [word, digits] = this.countSec[0].additionalInfo.secondValue.match(/\D+|\d+/g);
          this.employeCoo = digits;
          if (word == this.employeCount) {
            clearInterval(this.employeCountStop);
          }
        }, 1)
        this.countryCountStop = setInterval(() => {
          this.countryCount++;
          if (this.countSec[0].additionalInfo.thirdValue == this.countryCount) {
            clearInterval(this.countryCountStop);
          }
        }, 100)
        this.regionalCountStop = setInterval(() => {
          this.regionalCount++;
          const [word, digits] = this.countSec[0].additionalInfo.fourthValue.match(/\D+|\d+/g);
          this.regionCoo = digits;
          if (word == this.regionalCount) {
            clearInterval(this.regionalCountStop);
          }
        }, 1)

        this.tabSec1 = this.getData.filter(element => {
          return element.code === 'ABOTAB' && element.seq == 3;
        })
        this.tabSec2 = this.getData.filter(element => {
          return element.code === 'ABOTAB' && element.seq == 4;
        })
        this.tabSec3 = this.getData.filter(element => {
          return element.code === 'ABOTAB' && element.seq == 5;
        })
        this.interestedSec = this.getData.filter(element => {
          return element.code === 'ABBOTT';
        })
        this.investHead = this.getData.filter(element => {
          return element.code === 'INVEST';
        })
        var strategyArray = this.getData.filter(element => {
          return element.code === 'STRAGY' && element.isActive;
        })

        this.strategy = strategyArray.sort(function (first, second) {
          return first?.seq - second?.seq;
        });
      });

    const object1 = {
      relations: ["header", "images"],
      filter: {
        id: "0cce9f1b-c98a-49ab-a6bd-11770eeefcc2"
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object1).subscribe(
      (res: any) => {
        this.partnerSec = res.payload
        this.partnerSecImages = this.partnerSec[0].images.sort(function (first, second) {
          return first.seq - second.seq;
        });
      });
  }

  isColor1(index: number): boolean {
    return index % 3 === 0;
  }

  isColor2(index: number): boolean {
    return index % 3 === 1;
  }

  isColor3(index: number): boolean {
    return index % 3 === 2;
  }

}

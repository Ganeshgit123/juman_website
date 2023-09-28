import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o'; 
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProjectDetailsComponent {
  endpoint = environment.baseUrl;
  dir: any;
  getBanners = [];
  getData = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
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
    nav: true,
    rtl:true
  }
  projectParamsId:any;
  projImages = [];

  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute,) { }
  
  ngOnInit(): void {
    this.dir = localStorage.getItem('dir')  || "ltr";
    sessionStorage.setItem('pageName', 'product');

    this.route.params.subscribe((params) => {
      this.projectParamsId = params['id'];
    });
    
    const bannerData = {
      relations: ["header"],
      filter: {
        header: { id: "7461720a-fc9c-49a3-b281-3d41b818190c" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getBanners(bannerData).subscribe(
      (res: any) => {
         this.getBanners = res.payload.filter(element => {
          return element.isActive;
        })
      });

    const object = {
      relations: ["header", "images"],
      filter: {
        id: this.projectParamsId
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object).subscribe(
      (res: any) => {
        this.getData = res.payload;

        this.getData.forEach(element => {
          element.image = this.getData[0]?.images.filter(item => item.seq == 1)
        });
        
        var imagArray = this.getData[0]?.images.filter(item => item.seq !== 0 && item.seq !==1 && item.isActive)
        this.projImages = imagArray?.sort(function (first, second) {
          return first.seq - second.seq;
        });
      });
  }
}

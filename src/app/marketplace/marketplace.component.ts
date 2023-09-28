import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  endpoint = environment.baseUrl;
  dir: any;
  getBanners = [];
  getData = [];

  constructor(public authService: AuthService,) { }

  ngOnInit(): void {
    this.dir = localStorage.getItem('dir')  || "ltr";
    sessionStorage.setItem('pageName', 'service');

    const bannerData = {
      relations: ["header"],
      filter: {
        header: { id: "65e5128c-b24c-4bbd-8069-4c29d89d4ea9" }
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
        header: { id: "65e5128c-b24c-4bbd-8069-4c29d89d4ea9" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object).subscribe(
      (res: any) => {
        this.getData = res.payload;
      });
  }
}

import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-operating',
  templateUrl: './operating.component.html',
  styleUrls: ['./operating.component.css']
})
export class OperatingComponent {
  endpoint = environment.baseUrl;
  dir: any;
  getBanners = [];
  getData = [];
  gerFlowSec = [];
  usgMESec = [];
  bostikSec = [];
  
  constructor(public authService: AuthService,) { }

  ngOnInit(): void {
    this.dir = localStorage.getItem('dir')  || "ltr";
    sessionStorage.setItem('pageName', 'operating');

    const bannerData = {
      relations: ["header"],
      filter: {
        header: { id: "071232d9-db59-46f8-90a9-7a341ca4455a" }
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
        header: { id: "071232d9-db59-46f8-90a9-7a341ca4455a" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object).subscribe(
      (res: any) => {
        this.getData = res.payload;
        this.gerFlowSec = this.getData.filter(element => {
          return element.code === 'GERFLO';
        })
        this.usgMESec = this.getData.filter(element => {
          return element.code === 'USGME';
        })
        this.bostikSec = this.getData.filter(element => {
          return element.code === 'BOSTIK';
        })
      });
  }
}

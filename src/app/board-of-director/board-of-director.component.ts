import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-board-of-director',
  templateUrl: './board-of-director.component.html',
  styleUrls: ['./board-of-director.component.css']
})
export class BoardOfDirectorComponent {
  endpoint = environment.baseUrl;
  dir: any;
  getBanners = [];
  getData = [];
  chairmanSec = [];
  ceoSec = [];
  boaDD = [];
  bannerLength:  number;
  
  constructor(public authService: AuthService,) { }

  ngOnInit(): void {
    this.dir = localStorage.getItem('dir')  || "ltr";
    sessionStorage.setItem('pageName', 'bod');

    const bannerData = {
      relations: ["header"],
      filter: {
        header: { id: "664c1463-a1ad-4fd4-b660-bcf0b26ceb08" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getBanners(bannerData).subscribe(
      (res: any) => {
         this.getBanners = res.payload.filter(element => {
          return element.isActive;
        })
        this.bannerLength = this.getBanners.length;
        // console.log("sfew",this.getBanners.length)
      });

    const object = {
      relations: ["header", "images"],
      filter: {
        header: { id: "664c1463-a1ad-4fd4-b660-bcf0b26ceb08" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object).subscribe(
      (res: any) => {
        this.getData = res.payload;
        this.chairmanSec = this.getData.filter(element => {
          return element.code === 'CHAIRM';
        })
        this.ceoSec = this.getData.filter(element => {
          return element.code === 'BOCEO';
        })
        this.boaDD = this.getData.filter(element => {
          return element.code === 'BOADD';
        })
      });
  }
}

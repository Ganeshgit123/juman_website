import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-gcc-installation',
  templateUrl: './gcc-installation.component.html',
  styleUrls: ['./gcc-installation.component.css']
})
export class GccInstallationComponent {
  endpoint = environment.baseUrl;
  dir: any;
  getBanners = [];
  getData = [];
  gccContentSec = [];
  gccTabSecArray = [];

  constructor(public authService: AuthService,) { }

  ngOnInit(): void {
    this.dir = localStorage.getItem('dir');
    sessionStorage.setItem('pageName', 'service');

    const bannerData = {
      relations: ["header"],
      filter: {
        header: { id: "ed2f323a-bb2e-406f-a7d7-13032e5dfb00" }
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
        header: { id: "ed2f323a-bb2e-406f-a7d7-13032e5dfb00" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object).subscribe(
      (res: any) => {
        this.getData = res.payload;
        this.gccContentSec = this.getData.filter(element => {
          return element.code === 'GCC';
        })
        this.gccTabSecArray = this.getData.filter(element => {
          return element.code === 'GCCTAB';
        })
      });
  }
}

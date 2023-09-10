import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  endpoint = environment.baseUrl;
  dir: any;
  getBanners = [];
  getData = [];
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(public authService: AuthService,) { }

  ngOnInit(): void {
    this.dir = localStorage.getItem('dir');
    sessionStorage.setItem('pageName', 'project');

    const bannerData = {
      relations: ["header"],
      filter: {
        header: { id: "7461720a-fc9c-49a3-b281-3d41b818190c" }
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
        header: { id: "7461720a-fc9c-49a3-b281-3d41b818190c" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getSectionsByHeaderId(object).subscribe(
      (res: any) => {
        this.getData = res.payload;
      });
  }

}
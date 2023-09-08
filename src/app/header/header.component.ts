import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  endpoint = environment.baseUrl;
  public isCollapsed = true;
  page:any;
  getData = [];
  home = [];
  whoWeAre = [];
  operating = [];
  board = [];
  service = [];
  installation = [];
  market = [];
  project = [];
  career = [];
  contact = [];
  logoImg = [];
  dir:any;

  constructor(private router: Router, private route: ActivatedRoute,public authService: AuthService,) { }

  ngOnInit(): void {
    this.dir = localStorage.getItem('dir');
    this.page = sessionStorage.getItem('pageName');

    this.authService.getHeader().subscribe(
      (res: any) => {
        this.getData = res.payload;
        
        this.home = this.getData.filter(element =>{
          return element.seq === 1;
        })
        this.whoWeAre = this.getData.filter(element =>{
          return element.seq === 2;
        })
        this.operating = this.getData.filter(element =>{
          return element.seq === 3;
        })
        this.board = this.getData.filter(element =>{
          return element.seq === 4;
        })
        this.service = this.getData.filter(element =>{
          return element.seq === 5;
        })
        this.installation = this.getData.filter(element =>{
          return element.seq === 6;
        })
        this.market = this.getData.filter(element =>{
          return element.seq === 7;
        })
        this.project = this.getData.filter(element =>{
          return element.seq === 8;
        })
        this.contact = this.getData.filter(element =>{
          return element.seq === 9;
        })
        this.career = this.getData.filter(element =>{
          return element.seq === 10;
        })
        this.logoImg = this.getData.filter(element =>{
          return element.seq === 11;
        })
      })
  }

  pageActive(value){
    if(value == 'home'){
      sessionStorage.setItem('pageName', 'home');
    }else{
      this.page = value;
    }
  }
}
